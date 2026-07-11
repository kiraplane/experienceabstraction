import { ExperienceAbstractionHomePage } from '@/components/experienceabstraction/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Experience Abstraction Wiki - Roblox Guide',
    description:
      'Experience Abstraction Wiki with verified Roblox links, three ways to abstract, survival tips, beginner routes, and current gameplay guides.',
    locale,
    pathname: '',
  });
}

export default function HomePage() {
  return <ExperienceAbstractionHomePage />;
}
