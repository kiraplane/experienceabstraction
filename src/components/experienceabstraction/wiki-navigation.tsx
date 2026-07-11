'use client';

import { Badge } from '@/components/ui/badge';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Compass,
  ExternalLink,
  Eye,
  Gift,
  Lightbulb,
  Link2,
  Map,
  MapPin,
  Moon,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface WikiNavLink {
  href: string;
  label: string;
}

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: WikiNavLink[];
  activePrefixes?: string[];
}

const wikiNavGroups: WikiNavGroup[] = [
  {
    title: 'Start Here',
    icon: Compass,
    links: [
      { href: '/', label: 'Wiki Home' },
      { href: '/gameplay', label: 'Gameplay' },
      { href: '/official-links', label: 'Official Roblox Links' },
    ],
  },
  {
    title: 'Abstraction',
    icon: Sparkles,
    links: [
      { href: '/guides/how-to-abstract', label: 'How to Abstract' },
      {
        href: '/guides/how-to-avoid-abstraction',
        label: 'How to Avoid Abstraction',
      },
    ],
  },
  {
    title: 'Guides',
    icon: BookOpen,
    links: [
      { href: '/guides', label: 'All Guides' },
      { href: '/guides/beginner-guide', label: 'Beginner Guide' },
    ],
  },
  {
    title: 'World & Updates',
    icon: Map,
    links: [
      { href: '/characters', label: 'Characters & Caine' },
      { href: '/map', label: 'Map Guide' },
      { href: '/locations', label: 'Locations' },
      { href: '/codes', label: 'Codes Status' },
    ],
  },
];

const iconMap = {
  '/': Compass,
  '/gameplay': Eye,
  '/official-links': Link2,
  '/guides': BookOpen,
  '/guides/how-to-abstract': Sparkles,
  '/guides/how-to-avoid-abstraction': ShieldCheck,
  '/guides/beginner-guide': Lightbulb,
  '/codes': Gift,
  '/characters': UsersRound,
  '/map': Map,
  '/locations': MapPin,
};

function isCurrentPath(currentPath: string | undefined, href: string) {
  return Boolean(currentPath && currentPath === href);
}

function isGroupCurrentPath(
  currentPath: string | undefined,
  group: WikiNavGroup
) {
  if (!currentPath) return false;
  return (
    group.links.some((link) => isCurrentPath(currentPath, link.href)) ||
    Boolean(
      group.activePrefixes?.some(
        (prefix) =>
          currentPath === prefix || currentPath.startsWith(`${prefix}/`)
      )
    )
  );
}

function WikiNavLinkItem({
  currentPath,
  href,
  label,
}: {
  currentPath?: string;
  href: string;
  label: string;
}) {
  const isActive = isCurrentPath(currentPath, href);
  const Icon = iconMap[href as keyof typeof iconMap] ?? ArrowRight;
  return (
    <LocaleLink
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex min-w-0 items-center justify-between gap-3 rounded-md border px-3 py-2 text-sm leading-5 transition',
        isActive
          ? 'border-fuchsia-400 bg-fuchsia-500 font-semibold text-white'
          : 'border-white/10 bg-[#0B0713] text-slate-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06] hover:text-white'
      )}
    >
      <span className="inline-flex min-w-0 items-center gap-2">
        <Icon className="size-4 shrink-0" />
        <span className="min-w-0 whitespace-normal break-words text-left">
          {label}
        </span>
      </span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-white' : 'text-cyan-300'
        )}
      />
    </LocaleLink>
  );
}

function OfficialGameCard() {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0B0713] p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="font-display font-bold text-lg text-white">
          Official Game
        </h2>
        <Badge className="bg-cyan-300 text-[#071018]">Verified</Badge>
      </div>
      <p className="text-slate-400 text-xs leading-5">
        Created by pawlooz · Place ID 131320856116838.
      </p>
      <a
        href="https://www.roblox.com/games/131320856116838/Experience-Abstraction"
        target="_blank"
        rel="noreferrer"
        className="mt-4 flex items-center justify-center gap-2 border-white/10 border-t pt-3 font-medium text-slate-200 text-sm hover:text-yellow-300"
      >
        Play on Roblox
        <ExternalLink className="size-4" />
      </a>
    </div>
  );
}

export function ExperienceAbstractionMobileMenu({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <details className="mx-4 mb-6 rounded-lg border border-fuchsia-300/15 bg-[#0B0713] p-4 shadow-sm lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-white [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <Compass className="size-5 text-yellow-300" />
          Experience Abstraction Wiki Menu
        </span>
        <ChevronDown className="size-5" />
      </summary>
      <div className="mt-4 grid gap-4">
        {wikiNavGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.title}>
              <h2 className="mb-2 flex items-center gap-2 font-semibold text-slate-400 text-xs uppercase">
                <Icon className="size-4" />
                {group.title}
              </h2>
              <div className="grid gap-2">
                {group.links.map((link) => (
                  <WikiNavLinkItem
                    key={link.href}
                    currentPath={currentPath}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </details>
  );
}

export function ExperienceAbstractionRouteSidebar({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] w-[276px] shrink-0 self-start overflow-y-auto rounded-lg border border-fuchsia-300/15 bg-[#090713] p-4 shadow-xl shadow-black/20 lg:block">
      <div className="mb-4 rounded-lg bg-gradient-to-br from-fuchsia-500/25 to-cyan-300/10 p-4 text-white">
        <p className="font-semibold text-cyan-300 text-xs uppercase">
          Experience Abstraction
        </p>
        <h2 className="mt-1 font-display font-black text-xl">
          Wiki Route Board
        </h2>
        <p className="mt-2 text-slate-300 text-xs leading-5">
          Verified mechanics, survival routes, beginner help, and official
          links.
        </p>
      </div>
      <div className="space-y-3">
        {wikiNavGroups.map((group) => {
          const Icon = group.icon;
          const isOpen = isGroupCurrentPath(currentPath, group);
          return (
            <details key={group.title} open={isOpen} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-2 py-2 font-semibold text-slate-300 text-sm hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                <span className="inline-flex items-center gap-2">
                  <Icon className="size-4 text-yellow-300" />
                  {group.title}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-white/10 text-slate-400"
                  >
                    {group.links.length}
                  </Badge>
                  <ChevronDown className="size-4 transition group-open:rotate-180" />
                </span>
              </summary>
              <div className="mt-2 grid gap-2">
                {group.links.map((link) => (
                  <WikiNavLinkItem
                    key={link.href}
                    currentPath={currentPath}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </details>
          );
        })}
      </div>
      <div className="mt-4">
        <OfficialGameCard />
      </div>
    </aside>
  );
}

export function ExperienceAbstractionPageShell({
  children,
}: {
  children: ReactNode;
}) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') return <>{children}</>;

  return (
    <>
      <ExperienceAbstractionMobileMenu currentPath={currentPath} />
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 lg:grid-cols-[minmax(0,1fr)_276px]">
        <div className="min-w-0">{children}</div>
        <ExperienceAbstractionRouteSidebar currentPath={currentPath} />
      </div>
    </>
  );
}
