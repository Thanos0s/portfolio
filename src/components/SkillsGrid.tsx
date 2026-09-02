'use client';

import React from 'react';
import { SkillItem } from '@/types/portfolio';
import { TechIcon } from './Icons';
import { useSound } from '@/context/SoundContext';

interface SkillsGridProps {
  skills: SkillItem[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  const { playClick } = useSound();

  return (
    <ul className="flex flex-wrap gap-2 px-4 py-5 sm:px-5">
      {skills.map((skill) => (
        <li key={skill.name} className="flex">
          <button
            type="button"
            onClick={playClick}
            className="focus-visible:ring-ring/50 bg-background border-border text-foreground inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium whitespace-nowrap outline-none transition-colors select-none hover:border-neutral-400 focus-visible:ring-[3px] dark:hover:border-neutral-600 cursor-pointer active:scale-95"
          >
            <TechIcon iconKey={skill.iconKey} className="size-3.5 shrink-0" />
            <span>{skill.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
