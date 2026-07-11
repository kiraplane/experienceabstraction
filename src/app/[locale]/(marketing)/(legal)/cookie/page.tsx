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
    title: 'Cookie Policy | Experience Abstraction Wiki',
    description:
      'How Experience Abstraction Wiki uses essential cookies, analytics, and similar technologies.',
    locale,
    pathname: '/cookie',
  });
}

export default function CookiePage() {
  return (
    <div className="bg-[#06040D] py-12 text-white">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Cookie Policy</h1>
        <p className="leading-8 text-slate-300">
          Experience Abstraction Wiki may use essential cookies or similar
          storage to support security, routing, and language preferences.
        </p>
        <p className="leading-8 text-slate-300">
          Analytics services may use cookies or comparable identifiers to
          measure aggregate visits and page performance. These measurements help
          improve guides and site reliability.
        </p>
        <p className="leading-8 text-slate-300">
          Embedded Roblox or YouTube content may follow the cookie practices of
          those platforms. You can manage cookies through your browser settings.
        </p>
        <p className="leading-8 text-slate-300">
          Cookie questions can be sent to hello@experienceabstraction.wiki.
        </p>
      </Container>
    </div>
  );
}
