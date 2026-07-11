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
    title: 'Privacy Policy | Experience Abstraction Wiki',
    description:
      'Privacy policy for the independent Experience Abstraction Roblox guide site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPage() {
  return (
    <div className="bg-[#06040D] py-12 text-white">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-slate-300">
          Experience Abstraction Wiki is an independent Roblox guide site. We do
          not ask visitors to create an account to read public guides.
        </p>
        <p className="leading-8 text-slate-300">
          Hosting, security, and analytics providers may process standard
          technical data such as IP address, device type, referring page, and
          pages visited. This information helps keep the site reliable and
          understand aggregate usage.
        </p>
        <p className="leading-8 text-slate-300">
          External Roblox and YouTube links follow the privacy practices of
          those services. Review their policies before using their accounts or
          embedded media.
        </p>
        <p className="leading-8 text-slate-300">
          Privacy questions can be sent to hello@experienceabstraction.wiki.
        </p>
      </Container>
    </div>
  );
}
