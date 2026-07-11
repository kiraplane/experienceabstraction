import { WikiTopicPage } from '@/components/experienceabstraction/wiki-topic-page';
import { getWikiTopic } from '@/data/experienceabstraction/wiki-topics';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const topic = getWikiTopic('map');

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: topic.seoTitle,
    description: topic.seoDescription,
    locale,
    pathname: '/map',
  });
}

export default function MapPage() {
  return <WikiTopicPage topic={topic} />;
}
