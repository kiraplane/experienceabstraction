export type SourceType =
  | 'official'
  | 'platform_api'
  | 'guide_site'
  | 'video'
  | 'community';

export type Confidence = 'high' | 'medium' | 'low' | 'needs_verification';

export interface DataSource {
  type: SourceType;
  label: string;
  url: string;
  checkedAt: string;
  confidence: Confidence;
  note?: string;
}

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  category: 'Start Here' | 'Abstraction' | 'Survival';
  sourceStrategy:
    | 'user_intent_youtube'
    | 'popular_youtube'
    | 'youtube_explainer'
    | 'manual_data'
    | 'official'
    | 'community_crosscheck';
  checkedAt: string;
  videoSearchQueries?: string[];
  sourceNotes?: string;
  coverImageUrl?: string;
  video?: {
    id: string;
    title: string;
    channel?: string;
    url: string;
    thumbnailUrl: string;
    publishedAt?: string;
    viewCountLabel?: string;
    checkedAt: string;
  };
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate';
  body: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedRoutes: string[];
}

export interface WikiTopicPage {
  slug: 'codes' | 'characters' | 'map' | 'locations';
  title: string;
  seoTitle: string;
  seoDescription: string;
  badge: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  checkedAt: string;
  facts: Array<{
    label: string;
    value: string;
    note: string;
  }>;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  video?: {
    id: string;
    title: string;
    channel: string;
    url: string;
    thumbnailUrl: string;
    publishedAt: string;
    checkedAt: string;
    caption: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedRoutes: Array<{
    href: string;
    label: string;
    description: string;
  }>;
}
