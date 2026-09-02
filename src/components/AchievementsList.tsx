'use client';

import React from 'react';
import { AchievementItem } from '@/types/portfolio';

interface AchievementsListProps {
  items: AchievementItem[];
}

export function AchievementsList({ items }: AchievementsListProps) {
  return (
    <ul className="pt-px">
      {items.map((item) => (
        <li key={item.id} className="screen-line-bottom relative last:border-b-0">
          <div className="flex gap-3 p-3.5 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
            <span
              aria-hidden="true"
              className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-700 dark:bg-neutral-300"
            />
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="min-w-0 text-[15px] leading-snug font-medium text-balance text-neutral-900 dark:text-neutral-100">
                  {item.title}
                </h3>
                <span className="text-muted-foreground shrink-0 font-mono text-xs tabular-nums">
                  {item.date}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
