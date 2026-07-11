import { guides } from '@/data/experienceabstraction/guides';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  Routes.Root,
  Routes.Guides,
  Routes.Gameplay,
  Routes.OfficialLinks,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
  Routes.Disclaimer,
];

const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);
const stableLastModified = new Date('2026-07-11T00:00:00.000Z');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapList: MetadataRoute.Sitemap = [];
  const baseUrl = getCanonicalBaseUrl();

  routing.locales.forEach((locale) => {
    [...coreRoutes, ...guideRoutes].forEach((route) => {
      const localizedRoute =
        locale === routing.defaultLocale ? route : `/${locale}${route}`;

      sitemapList.push({
        url: `${baseUrl}${localizedRoute}`,
        lastModified: stableLastModified,
        changeFrequency: route === Routes.Root ? 'daily' : 'weekly',
        priority:
          route === Routes.Root
            ? 1
            : route === Routes.Guides ||
                route === Routes.HowToAbstract ||
                route === Routes.OfficialLinks
              ? 0.9
              : route.startsWith('/guides/')
                ? 0.85
                : 0.8,
      });
    });
  });

  return sitemapList;
}
