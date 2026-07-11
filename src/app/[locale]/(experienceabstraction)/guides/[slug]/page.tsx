import { FaqSection } from '@/components/experienceabstraction/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { getGuide, guides } from '@/data/experienceabstraction/guides';
import { officialGameFacts } from '@/data/experienceabstraction/sources';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const relatedRouteLabels: Record<string, string> = {
  '/': 'Experience Abstraction Wiki Home',
  '/gameplay': 'Gameplay and Three Conditions',
  '/guides': 'All Experience Abstraction Guides',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/how-to-abstract': 'How to Abstract',
  '/guides/how-to-avoid-abstraction': 'How to Avoid Abstraction',
  '/official-links': 'Official Roblox Links',
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  return constructMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    locale,
    pathname: `/guides/${slug}`,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const coverImageUrl =
    guide.coverImageUrl ||
    guide.video?.thumbnailUrl ||
    officialGameFacts.heroImage;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.seoDescription,
        dateModified: guide.checkedAt,
        image: coverImageUrl.startsWith('http')
          ? coverImageUrl
          : `${officialGameFacts.canonicalUrl}${coverImageUrl}`,
        mainEntityOfPage: `${officialGameFacts.canonicalUrl}/guides/${guide.slug}`,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.siteName,
          url: officialGameFacts.canonicalUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: officialGameFacts.siteName,
            item: officialGameFacts.canonicalUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: `${officialGameFacts.canonicalUrl}/guides`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: `${officialGameFacts.canonicalUrl}/guides/${guide.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="py-8 text-white md:py-12">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-0">
        <article className="rounded-xl border border-fuchsia-300/10 bg-[#100B1C] p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-fuchsia-500 text-white">
              {guide.category}
            </Badge>
            <Badge className="border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              {guide.difficulty}
            </Badge>
            {guide.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-white/15 text-slate-300"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mt-5 font-display text-4xl font-black md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            {guide.summary}
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-black">
            <div className="relative aspect-video">
              <Image
                src={coverImageUrl}
                alt={`${guide.title} cover`}
                fill
                priority
                sizes="(min-width: 1024px) 880px, 100vw"
                className="object-cover"
              />
            </div>
            {guide.video ? (
              <div className="bg-[#090713] px-4 py-3 text-slate-400 text-sm">
                Walkthrough cross-check:{' '}
                <a
                  href={guide.video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 underline underline-offset-4"
                >
                  {guide.video.title}
                </a>
                {guide.video.channel ? ` by ${guide.video.channel}` : null}
              </div>
            ) : null}
          </div>

          <div className="mt-8 space-y-8">
            {guide.body.map((section, index) => (
              <div key={section.heading} className="space-y-8">
                <section>
                  <h2 className="font-display text-2xl font-bold text-white">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-4 text-base leading-8 text-slate-300">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="text-yellow-300">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>

                {index === 1 && guide.video ? (
                  <div className="overflow-hidden rounded-xl border border-cyan-300/15 bg-black">
                    <iframe
                      className="aspect-video w-full"
                      src={`https://www.youtube.com/embed/${guide.video.id}?rel=0`}
                      title={guide.video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <div className="bg-[#090713] px-4 py-3 text-slate-400 text-sm">
                      Supporting walkthrough · exact timers and hidden
                      thresholds remain unverified unless the current game
                      publishes them.
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <FaqSection title={`${guide.title} FAQ`} items={guide.faq} />
          </div>
        </article>

        <section className="rounded-xl border border-white/10 bg-[#100B1C] p-5">
          <h2 className="font-display text-2xl font-bold text-white">
            Continue your Experience Abstraction route
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {guide.relatedRoutes.map((route) => (
              <LocaleLink
                key={route}
                href={route}
                className="group flex min-w-0 items-center justify-between gap-3 rounded-md border border-white/10 bg-black/15 px-4 py-3 text-slate-300 text-sm transition hover:border-fuchsia-300/45 hover:text-white"
              >
                <span className="min-w-0 whitespace-normal break-words text-left">
                  {relatedRouteLabels[route]}
                </span>
                <ArrowRight className="size-4 shrink-0 text-cyan-300 transition group-hover:translate-x-0.5" />
              </LocaleLink>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
