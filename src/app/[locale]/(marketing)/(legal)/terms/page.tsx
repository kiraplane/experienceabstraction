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
    title: 'Terms of Service | Experience Abstraction Wiki',
    description:
      'Terms for using the independent Experience Abstraction Roblox guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsPage() {
  return (
    <div className="bg-[#06040D] py-12 text-white">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-slate-300">
          This site provides independent Experience Abstraction guides and links
          for informational purposes. It is not affiliated with or operated by
          Roblox, pawlooz, or GLITCH.
        </p>
        <p className="leading-8 text-slate-300">
          You may use the site for personal reference. Do not copy the site in
          bulk, misrepresent its content as official, interfere with service
          operation, or use it to distribute scripts, exploits, or unsafe
          downloads.
        </p>
        <p className="leading-8 text-slate-300">
          Game behavior may change after updates. Information is provided
          without a guarantee that every mechanic remains available or behaves
          identically in every server.
        </p>
        <p className="leading-8 text-slate-300">
          Questions about these terms can be sent to
          hello@experienceabstraction.wiki.
        </p>
      </Container>
    </div>
  );
}
