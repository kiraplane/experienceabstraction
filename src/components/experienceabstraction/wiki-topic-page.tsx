import { FaqSection } from '@/components/experienceabstraction/faq-section';
import { YoutubeLitePlayer } from '@/components/experienceabstraction/youtube-lite-player';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { officialGameFacts } from '@/data/experienceabstraction/sources';
import type { WikiTopicPage as WikiTopicPageData } from '@/data/experienceabstraction/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, CalendarCheck, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export function WikiTopicPage({ topic }: { topic: WikiTopicPageData }) {
  const canonicalUrl = `${officialGameFacts.canonicalUrl}/${topic.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: topic.title,
        description: topic.seoDescription,
        dateModified: topic.checkedAt,
        mainEntityOfPage: canonicalUrl,
        image: topic.heroImage.startsWith('http')
          ? topic.heroImage
          : `${officialGameFacts.canonicalUrl}${topic.heroImage}`,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.siteName,
          url: officialGameFacts.canonicalUrl,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: topic.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="py-10 text-white md:py-12">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-0">
        <header className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-fuchsia-500 text-white">{topic.badge}</Badge>
            <Badge
              variant="outline"
              className="border-cyan-300/30 bg-cyan-300/5 text-cyan-200"
            >
              Checked {topic.checkedAt}
            </Badge>
          </div>
          <h1 className="mt-4 font-display text-4xl font-black md:text-6xl">
            {topic.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">{topic.intro}</p>
        </header>

        <div className="overflow-hidden rounded-xl border border-fuchsia-300/10 bg-black">
          <div className="relative aspect-video">
            <Image
              src={topic.heroImage}
              alt={topic.heroAlt}
              fill
              priority
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {topic.facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-white/10 bg-[#100B1C] p-4"
            >
              <p className="font-semibold text-slate-500 text-xs uppercase tracking-[0.14em]">
                {fact.label}
              </p>
              <p className="mt-2 font-display text-2xl font-black text-white">
                {fact.value}
              </p>
              <p className="mt-2 text-slate-400 text-xs leading-5">
                {fact.note}
              </p>
            </div>
          ))}
        </section>

        <article className="space-y-6">
          {topic.sections.map((section, index) => (
            <div key={section.heading} className="space-y-6">
              <section className="rounded-xl border border-white/10 bg-[#100B1C] p-6 md:p-7">
                <h2 className="font-display text-2xl font-black md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-slate-300 leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-0.5 text-yellow-300">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>

              {index === 1 && topic.video ? (
                <section className="overflow-hidden rounded-xl border border-cyan-300/15 bg-black">
                  <div className="relative aspect-video">
                    <YoutubeLitePlayer
                      videoId={topic.video.id}
                      title={topic.video.title}
                      thumbnailUrl={topic.video.thumbnailUrl}
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-[#090713] px-4 py-3 text-sm">
                    <div>
                      <p className="font-semibold text-white">
                        Current gameplay cross-check
                      </p>
                      <p className="mt-1 text-slate-400">
                        {topic.video.channel} · published{' '}
                        {topic.video.publishedAt} · {topic.video.caption}
                      </p>
                    </div>
                    <a
                      href={topic.video.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-cyan-300"
                    >
                      Open on YouTube <ExternalLink className="size-4" />
                    </a>
                  </div>
                </section>
              ) : null}
            </div>
          ))}
        </article>

        <section className="rounded-xl border border-fuchsia-300/15 bg-fuchsia-300/[0.04] p-6">
          <div className="flex items-center gap-2 text-fuchsia-200">
            <CalendarCheck className="size-5" />
            <h2 className="font-display text-2xl font-bold">Keep exploring</h2>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {topic.relatedRoutes.map((route) => (
              <LocaleLink
                key={route.href}
                href={route.href}
                className="group rounded-lg border border-white/10 bg-[#090713] p-4 transition hover:border-cyan-300/35"
              >
                <span className="flex items-center justify-between gap-3 font-semibold text-white">
                  {route.label}
                  <ArrowRight className="size-4 text-cyan-300 transition group-hover:translate-x-0.5" />
                </span>
                <span className="mt-2 block text-slate-400 text-sm leading-6">
                  {route.description}
                </span>
              </LocaleLink>
            ))}
          </div>
        </section>

        <FaqSection title={`${topic.badge} FAQ`} items={topic.faq} />
      </Container>
    </div>
  );
}
