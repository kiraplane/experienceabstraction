'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Wiki',
      items: [
        { title: 'Gameplay', href: Routes.Gameplay, external: false },
        {
          title: 'How to Abstract',
          href: Routes.HowToAbstract,
          external: false,
        },
        {
          title: 'Avoid Abstraction',
          href: Routes.AvoidAbstraction,
          external: false,
        },
        {
          title: 'Official Roblox Links',
          href: Routes.OfficialLinks,
          external: false,
        },
      ],
    },
    {
      title: 'Guides',
      items: [
        { title: 'All Guides', href: Routes.Guides, external: false },
        {
          title: 'Beginner Guide',
          href: Routes.BeginnerGuide,
          external: false,
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          title: 'Privacy Policy',
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: 'Terms of Service',
          href: Routes.TermsOfService,
          external: false,
        },
        {
          title: 'Cookie Policy',
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: 'Disclaimer',
          href: Routes.Disclaimer,
          external: false,
        },
      ],
    },
  ];
}
