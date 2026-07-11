'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { BookOpen, Eye, Link2, Sparkles } from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Gameplay',
      href: Routes.Gameplay,
      external: false,
      icon: <Eye className="size-4" />,
    },
    {
      title: 'How to Abstract',
      href: Routes.HowToAbstract,
      external: false,
      icon: <Sparkles className="size-4" />,
    },
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
    },
    {
      title: 'Official Links',
      href: Routes.OfficialLinks,
      external: false,
      icon: <Link2 className="size-4" />,
    },
  ];
}
