'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { ProjectCard } from '@/components/ProjectCard';
import { useSound } from '@/context/SoundContext';

export default function ProjectsPage() {
  const { playClick } = useSound();
  const [query, setQuery] = useState('');

  const filteredProjects = portfolioData.projects.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.name.toLowerCase().includes(q))
    );
  });

  return (
    <div>
      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Section Subtitle */}
      <div className="screen-line-bottom relative w-full px-4 py-1">
        <p className="text-xl font-medium text-neutral-400 sm:text-2xl dark:text-neutral-500">
          Projects
        </p>
      </div>

      {/* Section Title */}
      <h1 className="screen-line-bottom relative px-4 py-1.5 text-xl font-semibold tracking-tight text-balance sm:text-2xl text-neutral-900 dark:text-neutral-50">
        Everything I&apos;ve shipped
      </h1>

      {/* Navigation & Live Search Bar */}
      <div className="screen-line-bottom relative flex items-center justify-between gap-3 p-2">
        <Link
          href="/"
          onClick={playClick}
          className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex h-7 shrink-0 items-center gap-1.5 rounded-md px-1.5 text-sm font-medium outline-none transition-colors focus-visible:ring-[3px]"
        >
          <ArrowLeft className="size-4" />
          <span>Home</span>
        </Link>

        {/* Search Input Box */}
        <div className="border-border focus-within:ring-ring/50 relative flex h-9 w-48 sm:w-64 items-center rounded-lg border bg-background/50 transition-colors focus-within:ring-[2px]">
          <Search className="text-muted-foreground ml-2.5 size-4 shrink-0" />
          <input
            type="search"
            placeholder="Search projects…"
            aria-label="Search projects"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="placeholder:text-muted-foreground h-9 w-full min-w-0 flex-1 bg-transparent px-2.5 text-sm outline-none"
          />
        </div>
      </div>

      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Project Grid */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="bg-border pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 hidden w-px sm:block"
        />

        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <p className="text-muted-foreground text-sm">
              No projects matching &ldquo;{query}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-foreground mt-2 text-xs underline underline-offset-4 cursor-pointer"
            >
              Clear search filter
            </button>
          </div>
        ) : (
          <div className="relative grid grid-cols-1 sm:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
