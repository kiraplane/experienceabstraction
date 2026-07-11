import { FaqSection } from '@/components/experienceabstraction/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guides } from '@/data/experienceabstraction/guides';
import { officialGameFacts } from '@/data/experienceabstraction/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const wikiLookupRoutes = [
  {
    href: '/characters',
    title: 'Characters & Caine',
    description:
      'Current named characters, player states, and the Caine interaction.',
  },
  {
    href: '/map',
    title: 'Map Guide',
    description:
      'Circus floor, stage, room hallway, dark routes, and Cellar planning.',
  },
  {
    href: '/locations',
    title: 'Locations',
    description:
      'Choose where to test darkness, isolate, regroup, or run the Caine route.',
  },
  {
    href: '/codes',
    title: 'Codes Status',
    description:
      'Current verified-code count, redemption status, and safe source checks.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Experience Abstraction Guides - Roblox Mechanics & Survival',
    description:
      'Experience Abstraction guides for abstracting, resisting the three risk conditions, starting safely, and finding the verified Roblox experience.',
    locale,
    pathname: '/guides',
  });
}

export default function GuidesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Experience Abstraction Guides',
    numberOfItems: guides.length,
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: guide.title,
      url: `${officialGameFacts.canonicalUrl}/guides/${guide.slug}`,
    })),
  };

  return (
    <div className="py-10 text-white md:py-12">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-0">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-fuchsia-500 text-white">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Experience Abstraction Guides
          </h1>
          <p className="text-lg leading-8 text-slate-300">
            Learn one player job per page: trigger abstraction, reverse the
            three risks to survive longer, or follow a clean first-session route
            through the official Roblox experience.
          </p>
        </header>

        <section className="rounded-xl border border-cyan-300/15 bg-[#100B1C] p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-white">
            Choose the result you want
          </h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-3">
            <p>
              1. Abstract: test one published condition without mixing
              variables.
            </p>
            <p>
              2. Resist: stay in light, keep company, and move away from the
              transformed.
            </p>
            <p>
              3. Learn: verify the correct game and read the server before you
              experiment.
            </p>
          </div>
        </section>

        <div className="grid gap-5 lg:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-xl border border-fuchsia-300/10 bg-[#100B1C] shadow-sm"
            >
              <div className="relative aspect-video border-fuchsia-300/10 border-b bg-[#090713]">
                <Image
                  src={
                    guide.coverImageUrl ||
                    guide.video?.thumbnailUrl ||
                    officialGameFacts.heroImage
                  }
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4">
                  <Badge className="bg-yellow-300 text-[#160A24]">
                    {guide.video ? 'Video-supported' : 'Source-checked'}
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-fuchsia-500/15 text-fuchsia-200">
                    {guide.category}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-cyan-300/20 text-cyan-200"
                  >
                    {guide.difficulty}
                  </Badge>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold text-white">
                  {guide.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-fuchsia-500 text-white hover:bg-fuchsia-400"
                >
                  <LocaleLink href={`/guides/${guide.slug}`}>
                    Read guide
                  </LocaleLink>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <section className="rounded-xl border border-white/10 bg-[#100B1C] p-6">
          <div className="max-w-3xl">
            <Badge className="bg-cyan-300 text-[#071018]">Wiki Lookups</Badge>
            <h2 className="mt-3 font-display text-3xl font-black text-white">
              Find one current answer per page
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              These routes track update-sensitive facts separately from the
              longer mechanic guides, so character, map, location, and code
              intent does not get mixed into one article.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {wikiLookupRoutes.map((route) => (
              <LocaleLink
                key={route.href}
                href={route.href}
                className="rounded-lg border border-white/10 bg-[#090713] p-4 transition hover:border-fuchsia-300/35"
              >
                <h3 className="font-display text-xl font-bold text-white">
                  {route.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {route.description}
                </p>
              </LocaleLink>
            ))}
          </div>
        </section>

        <FaqSection
          title="Guide hub FAQ"
          items={[
            {
              question: 'Which guide should a new player read first?',
              answer:
                'Start with the beginner guide, then choose How to Abstract or How to Avoid Abstraction based on your goal.',
            },
            {
              question: 'Does this wiki have a codes guide?',
              answer:
                'Yes. The codes status page currently reports zero verified active codes and explains the source checks instead of publishing speculative strings.',
            },
            {
              question: 'Where are the map and character pages?',
              answer:
                'Use the Wiki Lookups section for separate character, map, location, and codes routes. The three long guides remain focused on player workflows.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
