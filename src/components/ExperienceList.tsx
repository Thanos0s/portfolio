'use client';

import React from 'react';
import { ExperienceItem } from '@/types/portfolio';
import { useSound } from '@/context/SoundContext';

interface ExperienceListProps {
  items: ExperienceItem[];
}

export function ExperienceList({ items }: ExperienceListProps) {
  const { playClick } = useSound();

  return (
    <ul className="space-y-5 px-4 py-5 sm:px-6">
      {items.map((item) => (
        <li key={item.id} className="flex items-center gap-3.5">
          {/* Logo Badge */}
          <span className="border-border bg-neutral-100 dark:bg-neutral-800 flex size-10 shrink-0 items-center justify-center rounded-[10px] border select-none text-base">
            {item.logo || '💼'}
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-foreground min-w-0 truncate text-[15px] leading-snug font-semibold">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="link-underline focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
                  >
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </h3>
              <p className="text-muted-foreground shrink-0 font-mono text-xs tabular-nums">
                {item.period}
              </p>
            </div>
            <p className="text-muted-foreground truncate text-[13px] leading-snug">
              {item.role} {item.type && <span aria-hidden="true">•</span>} {item.type}{' '}
              {item.duration && <span aria-hidden="true">•</span>} {item.duration}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
