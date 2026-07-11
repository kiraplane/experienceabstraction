import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Disclaimer | Experience Abstraction Wiki',
    description:
      'Independence, intellectual property, accuracy, and external-link disclaimer for Experience Abstraction Wiki.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="py-12 text-white">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-slate-300">
          Experience Abstraction Wiki is an independent guide site. It is not
          affiliated with, endorsed by, sponsored by, or operated by Roblox,
          pawlooz, GLITCH, or the creators of The Amazing Digital Circus.
        </p>
        <p className="leading-8 text-slate-300">
          Roblox, Experience Abstraction, The Amazing Digital Circus, game and
          series characters, artwork, and related marks belong to their
          respective owners. Official Roblox media is used for identification
          and guide context.
        </p>
        <p className="leading-8 text-slate-300">
          Game mechanics, server behavior, availability, visuals, and update
          details can change without notice. Check the live game and official
          Roblox page before relying on time-sensitive information.
        </p>
        <p className="leading-8 text-slate-300">
          External Roblox and YouTube links are provided for reference. We do
          not control their availability, content, or privacy practices.
        </p>
      </Container>
    </div>
  );
}
