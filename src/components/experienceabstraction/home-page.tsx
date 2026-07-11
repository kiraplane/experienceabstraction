import { FaqSection } from '@/components/experienceabstraction/faq-section';
import { YoutubeLitePlayer } from '@/components/experienceabstraction/youtube-lite-player';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getGuide } from '@/data/experienceabstraction/guides';
import { officialGameFacts } from '@/data/experienceabstraction/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  Eye,
  Link2,
  Moon,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { label: 'Abstract', href: '/guides/how-to-abstract' },
  { label: 'Avoid', href: '/guides/how-to-avoid-abstraction' },
  { label: 'Beginner', href: '/guides/beginner-guide' },
  { label: 'Gameplay', href: '/gameplay' },
  { label: 'Official', href: '/official-links' },
];

const startSteps = [
  {
    title: 'Join the correct experience',
    body: 'Use pawlooz’s official Roblox page and verify the Place ID before trusting a guide or download link.',
    href: '/official-links',
    icon: Link2,
  },
  {
    title: 'Learn the three conditions',
    body: 'Isolation, prolonged darkness, and proximity to an abstracted player are the three published routes.',
    href: '/gameplay',
    icon: Eye,
  },
  {
    title: 'Choose a clean experiment',
    body: 'Test one condition at a time, or reverse all three when your goal is to stay normal longer.',
    href: '/guides/how-to-abstract',
    icon: Sparkles,
  },
];

const mechanicCards = [
  {
    title: 'Isolation',
    body: 'Move away from the group and preserve the separation instead of waiting in a high-traffic doorway.',
    icon: Users,
    href: '/guides/how-to-abstract',
  },
  {
    title: 'Darkness',
    body: 'Choose a clearly unlit area. The official page does not publish an exact countdown or hidden meter.',
    icon: Moon,
    href: '/guides/how-to-abstract',
  },
  {
    title: 'Proximity',
    body: 'An already abstracted player creates the social route—and a reason for surviving players to move away.',
    icon: ShieldCheck,
    href: '/guides/how-to-avoid-abstraction',
  },
];

const featuredGuideSlugs = [
  'how-to-abstract',
  'how-to-avoid-abstraction',
  'beginner-guide',
];

const keywordLinks = [
  { label: 'Experience Abstraction wiki', href: '/' },
  { label: 'Experience Abstraction Roblox', href: '/official-links' },
  { label: 'How to abstract', href: '/guides/how-to-abstract' },
  {
    label: 'How to avoid abstraction',
    href: '/guides/how-to-avoid-abstraction',
  },
  {
    label: 'Experience Abstraction beginner guide',
    href: '/guides/beginner-guide',
  },
  { label: 'Experience Abstraction gameplay', href: '/gameplay' },
  { label: 'Experience Abstraction guides', href: '/guides' },
  { label: 'Experience Abstraction codes', href: '/codes' },
  { label: 'Experience Abstraction characters', href: '/characters' },
  { label: 'Experience Abstraction map', href: '/map' },
  { label: 'Experience Abstraction locations', href: '/locations' },
];

export function ExperienceAbstractionHomePage() {
  const gameplayVideo = getGuide('how-to-abstract')?.video;
  const featuredGuides = featuredGuideSlugs
    .map((slug) => getGuide(slug))
    .filter((guide) => Boolean(guide));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: officialGameFacts.siteName,
        url: officialGameFacts.canonicalUrl,
        description:
          'Experience Abstraction Roblox guide hub for abstraction mechanics, survival routes, beginner help, and verified official links.',
        inLanguage: 'en',
      },
      {
        '@type': 'Organization',
        name: officialGameFacts.siteName,
        url: officialGameFacts.canonicalUrl,
        logo: `${officialGameFacts.canonicalUrl}${officialGameFacts.icon}`,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.name,
        url: officialGameFacts.robloxUrl,
        gamePlatform: 'Roblox',
        genre: ['Social'],
        numberOfPlayers: {
          '@type': 'QuantitativeValue',
          maxValue: officialGameFacts.maxPlayers,
        },
        author: {
          '@type': 'Person',
          name: officialGameFacts.developer,
          url: officialGameFacts.creatorUrl,
        },
      },
    ],
  };

  return (
    <div className="bg-[#06040D] text-white">
      <JsonLd data={jsonLd} />

      <section className="overflow-hidden border-fuchsia-300/10 border-b bg-[radial-gradient(circle_at_12%_20%,rgba(217,70,239,0.22),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.15),transparent_34%),linear-gradient(135deg,#06040D_0%,#160A24_55%,#070712_100%)]">
        <Container className="grid gap-8 px-4 py-9 lg:min-h-[500px] lg:grid-cols-[minmax(0,1.02fr)_minmax(400px,0.98fr)] lg:items-center lg:py-11">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-fuchsia-500 text-white">Roblox Social</Badge>
              <Badge className="border border-cyan-300/40 bg-cyan-300/10 text-cyan-200">
                Verified game identity
              </Badge>
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl lg:text-7xl">
              Experience Abstraction Wiki
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Learn the three ways to abstract, reverse them to survive longer,
              and enter the correct Roblox experience without fake codes,
              scripts, or lookalike-game confusion.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-fuchsia-500 text-white hover:bg-fuchsia-400"
              >
                <LocaleLink href="/guides/how-to-abstract">
                  How to Abstract
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cyan-300/50 bg-cyan-300/5 text-cyan-200 hover:bg-cyan-300 hover:text-[#071018]"
              >
                <a
                  href={officialGameFacts.robloxUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Play on Roblox
                  <ExternalLink className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                <LocaleLink href="/guides">Browse Guides</LocaleLink>
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <LocaleLink
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-medium text-slate-300 text-sm transition hover:border-fuchsia-300/50 hover:text-white"
                >
                  {link.label}
                </LocaleLink>
              ))}
            </div>
            <div className="mt-5 hidden max-w-2xl grid-cols-3 gap-3 sm:grid">
              <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                <p className="font-display font-black text-2xl text-yellow-300">
                  3
                </p>
                <p className="text-[11px] text-slate-400 sm:text-xs">
                  published conditions
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                <p className="font-display font-black text-2xl text-cyan-300">
                  30
                </p>
                <p className="text-[11px] text-slate-400 sm:text-xs">
                  players per server
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                <p className="font-display font-black text-2xl text-fuchsia-300">
                  Social
                </p>
                <p className="text-[11px] text-slate-400 sm:text-xs">
                  Roblox genre
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-fuchsia-300/15 bg-black shadow-2xl shadow-fuchsia-950/40">
              <div className="relative aspect-[16/9]">
                {gameplayVideo ? (
                  <YoutubeLitePlayer
                    videoId={gameplayVideo.id}
                    title={gameplayVideo.title}
                    thumbnailUrl={gameplayVideo.thumbnailUrl}
                  />
                ) : (
                  <Image
                    src={officialGameFacts.heroImage}
                    alt="Official Experience Abstraction Roblox screenshot"
                    fill
                    priority
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="hidden items-center gap-3 bg-[#0B0713] p-3 sm:flex">
                <Image
                  src={officialGameFacts.icon}
                  alt="Experience Abstraction game icon"
                  width={52}
                  height={52}
                  className="rounded-lg"
                />
                <div className="min-w-0">
                  <p className="font-semibold text-white">
                    How to Abstract walkthrough
                  </p>
                  <p className="text-slate-400 text-xs">
                    {gameplayVideo?.channel || 'YouTube'} · click play to load
                    the video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-fuchsia-300/10 border-b bg-[#090713] py-9">
        <Container className="px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-semibold text-cyan-300 text-xs uppercase tracking-[0.18em]">
                Start here
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                A first session you can actually read
              </h2>
            </div>
            <LocaleLink
              href="/guides/beginner-guide"
              className="inline-flex items-center gap-2 font-semibold text-yellow-300 text-sm"
            >
              Open beginner route <ArrowRight className="size-4" />
            </LocaleLink>
          </div>
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {startSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <LocaleLink
                  key={step.href}
                  href={step.href}
                  className="group flex gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.05]"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-fuchsia-500/15 text-fuchsia-200">
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-xs">0{index + 1}</p>
                    <h3 className="mt-1 font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {step.body}
                    </p>
                  </div>
                </LocaleLink>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#06040D] py-12">
        <Container className="space-y-10 px-4">
          <div>
            <p className="font-semibold text-fuchsia-300 text-xs uppercase tracking-[0.18em]">
              Core mechanic
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              Three routes into abstraction
            </h2>
            <p className="mt-3 max-w-3xl text-slate-400 leading-7">
              These are the only conditions published on the official game page.
              Exact timers, distances, meters, cures, and items remain
              unverified.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {mechanicCards.map((card) => {
              const Icon = card.icon;
              return (
                <LocaleLink
                  key={card.title}
                  href={card.href}
                  className="rounded-xl border border-fuchsia-300/10 bg-[#100B1C] p-5 transition hover:-translate-y-0.5 hover:border-fuchsia-300/35"
                >
                  <Icon className="size-6 text-yellow-300" />
                  <h3 className="mt-4 font-display text-2xl font-bold">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {card.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-cyan-300 text-sm">
                    Use this route <ArrowRight className="size-4" />
                  </span>
                </LocaleLink>
              );
            })}
          </div>

          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-semibold text-cyan-300 text-xs uppercase tracking-[0.18em]">
                  Latest guides
                </p>
                <h2 className="mt-2 font-display text-3xl font-black">
                  Choose your next decision
                </h2>
              </div>
              <LocaleLink
                href="/guides"
                className="inline-flex items-center gap-2 text-yellow-300 text-sm"
              >
                All guides <ArrowRight className="size-4" />
              </LocaleLink>
            </div>
            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              {featuredGuides.map((guide) =>
                guide ? (
                  <LocaleLink
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group overflow-hidden rounded-xl border border-white/10 bg-[#100B1C] transition hover:border-cyan-300/35"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={guide.coverImageUrl || officialGameFacts.heroImage}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="p-5">
                      <Badge className="bg-fuchsia-500/15 text-fuchsia-200">
                        {guide.category}
                      </Badge>
                      <h3 className="mt-3 font-display text-xl font-bold text-white">
                        {guide.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ) : null
              )}
            </div>
          </div>

          <div className="grid gap-6 rounded-xl border border-white/10 bg-[#0B0713] p-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <BookOpen className="size-7 text-fuchsia-300" />
              <h2 className="mt-3 font-display text-3xl font-black">
                Experience Abstraction keyword hub
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Every supported high-intent route is linked here. Unsupported
                codes status, characters, map routes, locations, and core guides
                each have a focused landing page.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {keywordLinks.map((item) => (
                <LocaleLink
                  key={item.href + item.label}
                  href={item.href}
                  className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-slate-300 transition hover:border-fuchsia-300/40 hover:text-white"
                >
                  <span className="min-w-0 whitespace-normal break-words">
                    {item.label}
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-cyan-300" />
                </LocaleLink>
              ))}
            </div>
          </div>

          <FaqSection
            items={[
              {
                question: 'How do you abstract in Experience Abstraction?',
                answer:
                  'Use one of the three conditions published on Roblox: isolate from other players, stay in darkness for a long time, or remain around someone who is already abstracted.',
              },
              {
                question: 'How do you avoid abstraction?',
                answer:
                  'Reverse the risks by staying with normal players, favoring bright areas, and moving away early when an abstracted player approaches.',
              },
              {
                question: 'Are there Experience Abstraction codes?',
                answer:
                  'No reliable code mechanic or active code source was verified for launch, so this wiki does not invent a codes page.',
              },
              {
                question: 'Is this an official GLITCH website?',
                answer:
                  'No. This is an independent guide hub. The Roblox game says it is inspired by The Amazing Digital Circus and credits GLITCH for the original series.',
              },
            ]}
          />

          <div className="flex flex-col items-start justify-between gap-5 rounded-xl border border-cyan-300/20 bg-gradient-to-r from-cyan-300/10 to-fuchsia-500/10 p-6 md:flex-row md:items-center">
            <div>
              <p className="font-display text-2xl font-black">
                Ready to enter the circus?
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Use the official Roblox page and keep the correct Place ID
                handy.
              </p>
            </div>
            <Button
              asChild
              className="bg-yellow-300 text-[#160A24] hover:bg-yellow-200"
            >
              <a
                href={officialGameFacts.robloxUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open official game <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
