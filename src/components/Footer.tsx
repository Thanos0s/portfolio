'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import { useSound } from '@/context/SoundContext';

export function Footer() {
  const { playClick } = useSound();
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />
      <div className="flex flex-col items-center justify-center py-6">
        <p className="text-foreground/70 text-center text-sm leading-relaxed">
          Designed and developed by{' '}
          <a
            href={portfolioData.personal.contact.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="text-foreground/90 link-underline font-semibold"
          >
            {portfolioData.personal.name}
          </a>
          <br />
          © {currentYear}. Built in the open.
        </p>
      </div>
      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />
      <div className="screen-line-bottom relative w-full py-2">
        <div
          className="flex w-full items-center justify-center bg-center bg-[length:10px_10px] px-1.5 opacity-60 h-24 sm:h-28"
          style={{
            backgroundImage:
              'radial-gradient(circle, currentColor 1px, transparent 1px)',
            color: 'var(--border)',
            maskImage:
              'linear-gradient(to bottom, black 20%, transparent 95%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 20%, transparent 95%)',
          }}
        />
      </div>
    </footer>
  );
}
