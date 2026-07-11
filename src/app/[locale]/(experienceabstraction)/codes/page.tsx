import { WikiTopicPage } from '@/components/experienceabstraction/wiki-topic-page';
import { getWikiTopic } from '@/data/experienceabstraction/wiki-topics';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const topic = getWikiTopic('codes');

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
    pathname: '/codes',
  });
}

export default function CodesPage() {
  return <WikiTopicPage topic={topic} />;
}
