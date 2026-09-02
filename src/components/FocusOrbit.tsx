'use client';

import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { FocusAreas } from '@/types/portfolio';
import { useSound } from '@/context/SoundContext';

interface FocusOrbitProps {
  focusAreas: FocusAreas;
  avatarUrl: string;
}

export function FocusOrbit({ focusAreas, avatarUrl }: FocusOrbitProps) {
  const { playClick } = useSound();

  return (
    <div>
      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />
      <section
        aria-label="Areas of focus"
        className="border-border screen-line-top screen-line-bottom relative px-5 py-8"
      >
        <div className="relative mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg">
          <div className="relative aspect-square w-full">
            {/* Top Circle */}
            <div
              aria-hidden="true"
              className="border-foreground/15 absolute top-0 left-1/2 h-[55%] w-[55%] -translate-x-1/2 rounded-full border transition-transform duration-700 hover:scale-105"
            />
            {/* Left Circle */}
            <div
              aria-hidden="true"
              className="border-foreground/15 absolute top-[22%] left-[2%] h-[55%] w-[55%] rounded-full border transition-transform duration-700 hover:scale-105"
            />
            {/* Right Circle */}
            <div
              aria-hidden="true"
              className="border-foreground/15 absolute top-[22%] right-[2%] h-[55%] w-[55%] rounded-full border transition-transform duration-700 hover:scale-105"
            />
            {/* Bottom Circle */}
            <div
              aria-hidden="true"
              className="border-foreground/15 absolute bottom-0 left-1/2 h-[55%] w-[55%] -translate-x-1/2 rounded-full border transition-transform duration-700 hover:scale-105"
            />

            {/* Labels */}
            <span className="text-foreground/70 font-medium absolute top-[14%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[10px] whitespace-nowrap sm:text-xs md:text-sm">
              {focusAreas.top}
            </span>
            <span className="text-foreground/70 font-medium absolute top-1/2 left-[16%] -translate-x-1/2 -translate-y-1/2 text-center text-[10px] sm:text-xs md:text-sm">
              {focusAreas.left}
            </span>
            <span className="text-foreground/70 font-medium absolute top-1/2 right-[16%] translate-x-1/2 -translate-y-1/2 text-center text-[10px] sm:text-xs md:text-sm">
              {focusAreas.right}
            </span>
            <span className="text-foreground/70 font-medium absolute bottom-[14%] left-1/2 translate-y-1/2 -translate-x-1/2 text-center text-[10px] leading-tight whitespace-pre-wrap sm:text-xs md:text-sm">
              {focusAreas.bottom}
            </span>

            {/* Center Profile Avatar */}
            <div className="border-background absolute top-1/2 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 shadow-md sm:size-16 sm:border-4 md:size-20">
              <img
                src={avatarUrl}
                alt="Krish Srivastava"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="flex w-full flex-col items-center px-5 pt-4 pb-0 sm:px-10">
          <p className="mb-5 text-center text-sm text-balance opacity-75 md:text-lg">
            Still reading? That means something clicked. Let’s talk.
          </p>

          <Link
            href="/contact"
            onClick={playClick}
            className="focus-visible:ring-ring/50 group inline-flex cursor-pointer items-center self-center rounded-md border border-black/10 bg-black/[0.03] px-3 py-1.5 text-sm text-black shadow-sm outline-none focus-visible:ring-[3px] dark:border-white/15 dark:bg-white/15 dark:text-white dark:shadow-[0_0_5px_rgba(255,255,255,0.1)] transition-all"
          >
            <span className="relative z-20 flex items-center gap-2 transition-[gap] duration-300 group-hover:gap-8">
              <span className="size-5 shrink-0 overflow-hidden rounded-full">
                <img
                  src={avatarUrl}
                  alt="Krish"
                  className="size-full object-cover"
                />
              </span>
              <span
                aria-hidden="true"
                className="absolute left-6 flex -translate-x-full items-center opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <Plus className="size-3" />
                <span className="mr-2 ml-1 flex size-5 items-center justify-center rounded-full bg-black/10 text-[8px] dark:bg-white/10 font-bold">
                  You
                </span>
              </span>
              <span className="relative ml-0 block text-sm font-semibold whitespace-nowrap transition-[margin-left] duration-300 group-hover:ml-4">
                Book a free call
              </span>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
