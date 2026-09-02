'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ProjectItem } from '@/types/portfolio';
import { useSound } from '@/context/SoundContext';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { playClick } = useSound();

  return (
    <div className="relative flex flex-col p-4">
      <div className="group/card relative flex flex-1 flex-col gap-2.5">
        {/* Project Preview Image */}
        <a
          href={project.liveUrl || project.githubUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className="group/media border-border focus-visible:ring-ring/50 block overflow-hidden rounded-md border outline-none focus-visible:ring-[3px] bg-neutral-100 dark:bg-neutral-900"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-44 w-full object-cover object-top transition-transform duration-500 ease-out group-hover/media:scale-[1.03] sm:h-48"
          />
        </a>

        {/* Title & Action Links */}
        <div className="flex items-center justify-between gap-3">
          <h3 className="min-w-0 truncate text-[15px] leading-snug font-semibold text-neutral-900 dark:text-neutral-100">
            <a
              href={project.liveUrl || project.githubUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="hover:underline focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
            >
              {project.title}
            </a>
          </h3>

          <div className="flex shrink-0 items-center gap-1.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="focus-visible:ring-ring/50 bg-background border-border text-foreground inline-flex items-center rounded-md border text-xs font-medium whitespace-nowrap outline-none transition-colors select-none hover:border-neutral-400 focus-visible:ring-[3px] dark:hover:border-neutral-600 gap-1 px-2 py-0.5"
              >
                <span>Live</span>
                <ExternalLink className="size-3" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="focus-visible:ring-ring/50 bg-background border-border text-foreground inline-flex items-center rounded-md border text-xs font-medium whitespace-nowrap outline-none transition-colors select-none hover:border-neutral-400 focus-visible:ring-[3px] dark:hover:border-neutral-600 gap-1 px-2 py-0.5"
              >
                <svg viewBox="0 0 496 512" fill="currentColor" className="size-3 shrink-0" aria-hidden="true">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
                </svg>
                <span>Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Pitch / Description */}
        <p className="text-muted-foreground line-clamp-2 text-[13px] leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <ul className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <li key={tag.name} className="flex">
              <span className="focus-visible:ring-ring/50 bg-background border-border text-foreground inline-flex items-center rounded-md border font-medium whitespace-nowrap outline-none select-none gap-1 px-1.5 py-0.5 text-[11px]">
                <span
                  className="size-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: tag.brandColor || '#a1a1aa' }}
                />
                {tag.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
