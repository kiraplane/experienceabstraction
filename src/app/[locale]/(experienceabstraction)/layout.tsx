import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { ExperienceAbstractionPageShell } from '@/components/experienceabstraction/wiki-navigation';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function ExperienceAbstractionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#06040D]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">
        <ExperienceAbstractionPageShell>
          {children}
        </ExperienceAbstractionPageShell>
      </main>
      <AdsterraNativeBanner className="border-fuchsia-300/10 border-t bg-[#06040D]" />
      <Footer />
    </div>
  );
}
