import { FaqSection } from '@/components/experienceabstraction/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/experienceabstraction/sources';
import { constructMetadata } from '@/lib/metadata';
import { ExternalLink, ShieldCheck } from 'lucide-react';
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
    title: 'Experience Abstraction Official Roblox Link & Game IDs',
    description:
      'Open the official Experience Abstraction Roblox game by pawlooz and verify its Place ID, Universe ID, creator profile, and safe play links.',
    locale,
    pathname: '/official-links',
  });
}

export default function OfficialLinksPage() {
  return (
    <div className="py-10 text-white md:py-12">
      <Container className="space-y-8 px-0">
        <header className="max-w-4xl">
          <Badge className="bg-yellow-300 text-[#160A24]">Official Links</Badge>
          <h1 className="mt-4 font-display text-4xl font-black md:text-6xl">
            Experience Abstraction Official Roblox Link
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Use the verified game and creator URLs below. They help separate
            Experience Abstraction from unrelated definition pages, the separate
            Addition Abstraction experience, and unsafe downloads.
          </p>
        </header>

        <section className="grid gap-6 rounded-xl border border-cyan-300/15 bg-[#100B1C] p-6 lg:grid-cols-[220px_1fr] lg:items-center">
          <Image
            src={officialGameFacts.icon}
            alt="Experience Abstraction official Roblox icon"
            width={220}
            height={220}
            className="w-full max-w-[220px] rounded-xl"
          />
          <div>
            <div className="flex items-center gap-2 text-cyan-300">
              <ShieldCheck className="size-5" />
              <span className="font-semibold text-sm">
                Identity verified through Roblox APIs
              </span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-black">
              Experience Abstraction by pawlooz
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              The game describes itself as inspired by The Amazing Digital
              Circus and credits GLITCH for the original series. It does not
              present itself as an official GLITCH production.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-fuchsia-500 text-white hover:bg-fuchsia-400"
              >
                <a
                  href={officialGameFacts.robloxUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Roblox game <ExternalLink className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cyan-300/40 bg-transparent text-cyan-200 hover:bg-cyan-300 hover:text-[#071018]"
              >
                <a
                  href={officialGameFacts.creatorUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Creator profile <ExternalLink className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-[#100B1C] p-6">
          <h2 className="font-display text-2xl font-bold">
            Verified identifiers
          </h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <tbody className="divide-y divide-white/10">
                <tr>
                  <th className="py-3 pr-4 text-slate-400">Game name</th>
                  <td className="py-3 text-white">Experience Abstraction</td>
                </tr>
                <tr>
                  <th className="py-3 pr-4 text-slate-400">Creator</th>
                  <td className="py-3 text-white">
                    pawlooz (User ID 1693631698)
                  </td>
                </tr>
                <tr>
                  <th className="py-3 pr-4 text-slate-400">Place ID</th>
                  <td className="py-3 text-white">131320856116838</td>
                </tr>
                <tr>
                  <th className="py-3 pr-4 text-slate-400">Universe ID</th>
                  <td className="py-3 text-white">10352185757</td>
                </tr>
                <tr>
                  <th className="py-3 pr-4 text-slate-400">Platform</th>
                  <td className="py-3 text-white">Roblox</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-fuchsia-300/15 bg-fuchsia-300/[0.04] p-6">
          <h2 className="font-display text-2xl font-bold">
            Safe link checklist
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            <li>
              • The game URL begins with roblox.com/games/131320856116838.
            </li>
            <li>• The creator shown on Roblox is pawlooz.</li>
            <li>
              • No separate APK, modified client, script executor, or password
              is needed.
            </li>
            <li>
              • Addition Abstraction is a different Roblox place and should not
              be used as a data source for this game.
            </li>
          </ul>
        </section>

        <FaqSection
          title="Official links FAQ"
          items={[
            {
              question:
                'What is the official Experience Abstraction Roblox URL?',
              answer:
                'https://www.roblox.com/games/131320856116838/Experience-Abstraction is the current official game page.',
            },
            {
              question: 'Who created Experience Abstraction?',
              answer:
                'The current Roblox Games API lists pawlooz, User ID 1693631698, as the creator.',
            },
            {
              question: 'Is there an official standalone website?',
              answer:
                'No separate official website was verified. Use the Roblox game and creator pages as the official identity sources.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
