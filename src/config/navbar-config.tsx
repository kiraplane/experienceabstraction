'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { BookOpen, Eye, Map, MapPin, Sparkles } from 'lucide-react';

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
      title: 'Map',
      href: Routes.Map,
      external: false,
      icon: <Map className="size-4" />,
    },
    {
      title: 'Locations',
      href: Routes.Locations,
      external: false,
      icon: <MapPin className="size-4" />,
    },
  ];
}
