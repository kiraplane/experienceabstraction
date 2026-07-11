import { FaqSection } from '@/components/experienceabstraction/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { officialGameFacts } from '@/data/experienceabstraction/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight, Moon, ShieldCheck, Users } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Experience Abstraction Gameplay - How the Roblox Game Works',
    description:
      'Understand Experience Abstraction gameplay, its three verified abstraction conditions, the survival loop, server size, and current source boundaries.',
    locale,
    pathname: '/gameplay',
  });
}

const conditions = [
  {
    title: 'Isolation',
    description:
      'Separate from other players and preserve that social distance instead of standing in a busy route.',
    icon: Users,
  },
  {
    title: 'Darkness',
    description:
      'Remain in a clearly dark area for a sustained attempt. No exact public timer is currently verified.',
    icon: Moon,
  },
  {
    title: 'Abstracted proximity',
    description:
      'Stay around a player who is already abstracted, or move away early when your goal is survival.',
    icon: ShieldCheck,
  },
];

export default function GameplayPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Experience Abstraction Gameplay',
    description:
      'A verified overview of the social Roblox loop and three published abstraction conditions.',
    dateModified: officialGameFacts.checkedAt,
    mainEntityOfPage: `${officialGameFacts.canonicalUrl}/gameplay`,
    publisher: {
      '@type': 'Organization',
      name: officialGameFacts.siteName,
      url: officialGameFacts.canonicalUrl,
    },
  };

  return (
    <div className="py-10 text-white md:py-12">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-0">
        <header className="max-w-4xl">
          <Badge className="bg-cyan-300 text-[#071018]">Gameplay</Badge>
          <h1 className="mt-4 font-display text-4xl font-black md:text-6xl">
            Experience Abstraction Gameplay
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Experience Abstraction is a Roblox social game about managing light,
            company, and proximity as players resist—or deliberately enter—an
            abstracted state.
          </p>
        </header>

        <div className="overflow-hidden rounded-xl border border-fuchsia-300/10 bg-black">
          <div className="relative aspect-[16/9]">
            <Image
              src={officialGameFacts.darkImage}
              alt="Official Experience Abstraction dark corridor screenshot"
              fill
              priority
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <section className="rounded-xl border border-white/10 bg-[#100B1C] p-6">
          <h2 className="font-display text-3xl font-black">
            The verified loop
          </h2>
          <p className="mt-3 max-w-3xl leading-8 text-slate-300">
            The official Roblox description lists three ways to abstract. It
            does not publish a numeric timer, distance threshold, hidden meter,
            cure, item system, code menu, or tiered character roster. This page
            keeps the stable loop clear and leaves unverified systems out.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {conditions.map((condition) => {
              const Icon = condition.icon;
              return (
                <div
                  key={condition.title}
                  className="rounded-lg border border-fuchsia-300/10 bg-[#090713] p-5"
                >
                  <Icon className="size-6 text-yellow-300" />
                  <h3 className="mt-4 font-display text-xl font-bold">
                    {condition.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {condition.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] p-6">
            <h2 className="font-display text-2xl font-bold">
              Play to abstract
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Choose one condition you can control, preserve it, and watch the
              current game for feedback. Clean experiments are easier to repeat
              than mixing darkness, isolation, and another abstracted player at
              the same time.
            </p>
            <LocaleLink
              href="/guides/how-to-abstract"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan-300"
            >
              How to Abstract <ArrowRight className="size-4" />
            </LocaleLink>
          </div>
          <div className="rounded-xl border border-fuchsia-300/15 bg-fuchsia-300/[0.05] p-6">
            <h2 className="font-display text-2xl font-bold">Play to resist</h2>
            <p className="mt-3 leading-7 text-slate-300">
              Reverse the conditions: keep company, choose light, and create
              distance when an abstracted player arrives. The challenge is
              preserving all three decisions as the server moves around you.
            </p>
            <LocaleLink
              href="/guides/how-to-avoid-abstraction"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-fuchsia-300"
            >
              Avoid Abstraction <ArrowRight className="size-4" />
            </LocaleLink>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-[#100B1C] p-6">
          <h2 className="font-display text-2xl font-bold">
            Current game identity
          </h2>
          <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
            <div className="rounded-lg bg-[#090713] p-4">
              <dt className="text-slate-500">Creator</dt>
              <dd className="mt-1 font-semibold text-white">pawlooz</dd>
            </div>
            <div className="rounded-lg bg-[#090713] p-4">
              <dt className="text-slate-500">Roblox genre</dt>
              <dd className="mt-1 font-semibold text-white">Social</dd>
            </div>
            <div className="rounded-lg bg-[#090713] p-4">
              <dt className="text-slate-500">Server size</dt>
              <dd className="mt-1 font-semibold text-white">
                Up to 30 players
              </dd>
            </div>
            <div className="rounded-lg bg-[#090713] p-4">
              <dt className="text-slate-500">Universe ID</dt>
              <dd className="mt-1 break-all font-semibold text-white">
                10352185757
              </dd>
            </div>
          </dl>
        </section>

        <FaqSection
          title="Gameplay FAQ"
          items={[
            {
              question: 'What is the goal of Experience Abstraction?',
              answer:
                'The official framing asks whether you can resist abstraction or lose yourself to it. Players can experiment with both triggering and avoiding the state.',
            },
            {
              question: 'How many players fit in a server?',
              answer:
                'The Roblox Games API listed a maximum server size of 30 players when checked on July 11, 2026.',
            },
            {
              question: 'Does the game publish an exact abstraction timer?',
              answer:
                'No exact timer is published on the official Roblox page. Current guides should avoid presenting a guessed countdown as a fact.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
