'use client';

import React from 'react';
import Link from 'next/link';
import { Video, Mail, MoveRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { InteractiveDots } from '@/components/InteractiveDots';
import { AvatarSwitch } from '@/components/AvatarSwitch';
import { RoleCycle } from '@/components/RoleCycle';
import { ConnectBar } from '@/components/ConnectBar';
import { ExperienceList } from '@/components/ExperienceList';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillsGrid } from '@/components/SkillsGrid';
import { AchievementsList } from '@/components/AchievementsList';
import { FocusOrbit } from '@/components/FocusOrbit';
import { useSound } from '@/context/SoundContext';

export default function HomePage() {
  const { playClick } = useSound();
  const { personal, experience, projects, skills, achievements, focusAreas } = portfolioData;

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div>
      {/* Interactive Dot Field Header */}
      <InteractiveDots />

      {/* Hero Profile Header */}
      <header className="flex w-full items-start">
        <div className="p-3 sm:p-4">
          <AvatarSwitch
            stylizedAvatar={personal.avatars.stylized}
            realPhoto={personal.avatars.photo}
            name={personal.name}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-0 pt-3 sm:pt-4">
          <h1 className="text-xl font-medium text-neutral-800 md:text-2xl dark:text-neutral-50">
            {personal.name}
          </h1>

          <p className="flex min-h-6 items-center text-sm font-medium text-neutral-500 md:text-base dark:text-neutral-400">
            <RoleCycle roles={personal.rotatingRoles} />
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <a
              href={personal.contact.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="focus-visible:ring-ring/50 bg-foreground text-background inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-md px-2.5 py-1 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-opacity hover:opacity-90 focus-visible:ring-[3px]"
            >
              <Video className="size-3.5 shrink-0 text-yellow-400 dark:text-yellow-500" />
              <span>Book a call</span>
            </a>

            <a
              href={`mailto:${personal.contact.email}`}
              onClick={playClick}
              className="focus-visible:ring-ring/50 bg-foreground text-background inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-md px-2.5 py-1 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-opacity hover:opacity-90 focus-visible:ring-[3px]"
            >
              <Mail className="size-3.5 shrink-0" />
              <span>Send an email</span>
            </a>
          </div>
        </div>
      </header>

      {/* Divider */}
      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Section: About */}
      <section aria-labelledby="about">
        <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5">
          <h2 id="about" className="scroll-mt-20 text-xl font-normal tracking-tight sm:text-2xl">
            About
          </h2>
        </div>
        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <ul className="list-disc space-y-2.5 pl-4 text-base leading-relaxed font-normal text-neutral-800 dark:text-neutral-300">
            <li>{personal.about.intro}</li>
            <li>
              {personal.about.stack.prefix}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                {personal.about.stack.highlighted.join(', ')}
              </b>
              {personal.about.stack.suffix}
            </li>
            <li>
              {personal.about.backend.prefix}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                {personal.about.backend.highlighted.join(', ')}
              </b>
              {personal.about.backend.suffix}
            </li>
          </ul>
        </div>
      </section>

      {/* Divider */}
      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Section: Connect */}
      <section aria-labelledby="connect">
        <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5">
          <h2 id="connect" className="scroll-mt-20 text-xl font-normal tracking-tight sm:text-2xl">
            Connect
          </h2>
        </div>
        <ConnectBar contact={personal.contact} />
      </section>

      {/* Divider */}
      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Section: Experience */}
      <section aria-labelledby="experience">
        <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5 pb-2">
          <h2 id="experience" className="scroll-mt-20 text-xl font-normal tracking-tight sm:text-2xl">
            Experience
          </h2>
        </div>
        <ExperienceList items={experience} />
      </section>

      {/* Divider */}
      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Section: Activity */}
      <section aria-labelledby="activity">
        <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5">
          <h2 id="activity" className="scroll-mt-20 text-xl font-normal tracking-tight sm:text-2xl">
            Activity
          </h2>
        </div>
        <div className="relative px-4 py-5">
          <div className="border-border bg-muted/20 flex flex-col items-center justify-center rounded-lg border p-6 text-center">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active GitHub Contributions &amp; Smart Contract Commits</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1 max-w-md opacity-80">
              {Array.from({ length: 48 }).map((_, i) => (
                <span
                  key={i}
                  className={`size-2.5 rounded-xs ${
                    i % 7 === 0 || i % 11 === 0
                      ? 'bg-emerald-500/80'
                      : i % 3 === 0
                      ? 'bg-emerald-400/50'
                      : 'bg-neutral-300 dark:bg-neutral-800'
                  }`}
                />
              ))}
            </div>
            <a
              href={personal.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="text-muted-foreground hover:text-foreground text-xs font-mono mt-4 underline underline-offset-4"
            >
              View on github.com/{personal.contact.githubUrl.split('/').pop()} ↗
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Section: Projects */}
      <section aria-labelledby="projects">
        <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5">
          <h2 id="projects" className="scroll-mt-20 text-xl font-normal tracking-tight sm:text-2xl">
            Projects
          </h2>
        </div>

        <div className="relative">
          {/* Vertical middle grid line for desktop */}
          <div
            aria-hidden="true"
            className="bg-border pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 hidden w-px sm:block"
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* See all projects action */}
        <div className="screen-line-top screen-line-bottom relative flex w-full items-center justify-center gap-2 px-4 py-2 mt-1">
          <Link
            href="/projects"
            onClick={playClick}
            className="bg-foreground text-background inline-flex h-8 items-center justify-center gap-1.5 rounded-md px-3 text-xs font-medium shadow-xs transition-opacity hover:opacity-90 outline-none focus-visible:ring-[3px]"
          >
            <span>See all projects</span>
            <MoveRight className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Section: Skills */}
      <section aria-labelledby="stack">
        <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5">
          <h2 id="stack" className="scroll-mt-20 text-xl font-normal tracking-tight sm:text-2xl">
            Skills
          </h2>
        </div>
        <SkillsGrid skills={skills} />
      </section>

      {/* Divider */}
      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Section: Achievements */}
      <section aria-labelledby="achievements">
        <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5">
          <h2 id="achievements" className="scroll-mt-20 text-xl font-normal tracking-tight sm:text-2xl">
            Achievements
          </h2>
        </div>
        <AchievementsList items={achievements} />
      </section>

      {/* Areas of Focus Orbit Diagram & Bottom CTA */}
      <FocusOrbit focusAreas={focusAreas} avatarUrl={personal.avatars.photo} />
    </div>
  );
}
