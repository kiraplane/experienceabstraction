'use client';

import { Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface YoutubeLitePlayerProps {
  videoId: string;
  title: string;
  thumbnailUrl: string;
}

export function YoutubeLitePlayer({
  videoId,
  title,
  thumbnailUrl,
}: YoutubeLitePlayerProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 size-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group absolute inset-0 size-full overflow-hidden bg-black text-left"
      aria-label={`Play ${title}`}
    >
      <Image
        src={thumbnailUrl}
        alt={`${title} gameplay video thumbnail`}
        fill
        priority
        sizes="(min-width: 1024px) 48vw, 100vw"
        className="object-cover transition duration-300 group-hover:scale-[1.015]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/10" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-16 items-center justify-center rounded-full border border-white/30 bg-fuchsia-500/90 text-white shadow-2xl shadow-black/50 transition group-hover:scale-105 group-hover:bg-fuchsia-400">
          <Play className="ml-1 size-7 fill-current" />
        </span>
      </span>
      <span className="absolute right-3 bottom-3 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 font-semibold text-white text-xs backdrop-blur-sm">
        Play gameplay video
      </span>
    </button>
  );
}
