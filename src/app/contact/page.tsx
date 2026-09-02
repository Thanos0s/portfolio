'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { ContactForm } from '@/components/ContactForm';
import { useSound } from '@/context/SoundContext';

export default function ContactPage() {
  const { playClick } = useSound();
  const { contact } = portfolioData.personal;

  return (
    <div>
      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Subtitle */}
      <div className="screen-line-bottom relative w-full px-4 py-1">
        <p className="text-xl font-medium text-neutral-400 sm:text-2xl dark:text-neutral-500">
          Contact
        </p>
      </div>

      {/* Main Title */}
      <h1 className="screen-line-bottom relative px-4 py-1.5 text-xl font-semibold tracking-tight text-balance sm:text-2xl text-neutral-900 dark:text-neutral-50">
        Let&apos;s talk about what you&apos;re building
      </h1>

      {/* Top Bar with Home Link & Status Badge */}
      <div className="screen-line-bottom relative flex items-center justify-between gap-3 p-2">
        <Link
          href="/"
          onClick={playClick}
          className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex h-7 shrink-0 items-center gap-1.5 rounded-md px-1.5 text-sm font-medium outline-none transition-colors focus-visible:ring-[3px]"
        >
          <ArrowLeft className="size-4" />
          <span>Home</span>
        </Link>

        <span className="border-border bg-muted/40 text-muted-foreground rounded-full border px-3 py-1 text-xs font-medium sm:text-sm flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Open to work</span>
        </span>
      </div>

      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Section: Fastest routes */}
      <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5">
        <h2 className="scroll-mt-20 text-xl font-normal tracking-tight sm:text-2xl">
          Fastest routes
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-2 px-4 py-5 sm:grid-cols-2 sm:px-6">
        {/* Calendly booking card */}
        <a
          href={contact.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className="group focus-visible:ring-ring/50 bg-foreground text-background flex w-full items-center gap-3 rounded-md px-3.5 py-3 text-left outline-none transition-all hover:opacity-90 focus-visible:ring-[3px]"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-background/15">
            <Calendar className="size-4" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold">Book a 15-minute call</span>
            <span className="block truncate text-xs text-background/70">Calendly - pick any open slot</span>
          </span>
          <ArrowUpRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* DM on X card */}
        <a
          href={contact.xUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className="group focus-visible:ring-ring/50 border-border bg-background hover:border-neutral-400 dark:hover:border-neutral-600 flex w-full items-center gap-3 rounded-md border px-3.5 py-3 text-left outline-none transition-all focus-visible:ring-[3px]"
        >
          <span className="border-border bg-muted text-muted-foreground flex size-8 shrink-0 items-center justify-center rounded-md border">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="text-foreground block truncate text-sm font-semibold">DM me on X</span>
            <span className="text-muted-foreground block truncate text-xs">@{portfolioData.personal.handle}</span>
          </span>
          <ArrowUpRight className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Section: Send a message */}
      <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5">
        <h2 className="scroll-mt-20 text-xl font-normal tracking-tight sm:text-2xl">
          Send a message
        </h2>
      </div>

      <div className="px-4 py-5 sm:px-6">
        <ContactForm recipientEmail={contact.email} />
      </div>
    </div>
  );
}
