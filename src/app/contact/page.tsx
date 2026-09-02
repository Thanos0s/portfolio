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

      <div className="grid grid-cols-1 gap-2.5 px-4 py-5 sm:grid-cols-3 sm:px-6">
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
            <span className="block truncate text-sm font-semibold">Book a call</span>
            <span className="block truncate text-xs text-background/70">Calendly 15-min</span>
          </span>
          <ArrowUpRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* LinkedIn card */}
        <a
          href={contact.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className="group focus-visible:ring-ring/50 border-border bg-background hover:border-neutral-400 dark:hover:border-neutral-600 flex w-full items-center gap-3 rounded-md border px-3.5 py-3 text-left outline-none transition-all focus-visible:ring-[3px]"
        >
          <span className="border-border bg-muted text-muted-foreground flex size-8 shrink-0 items-center justify-center rounded-md border">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-[#0A66C2]" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="text-foreground block truncate text-sm font-semibold">LinkedIn</span>
            <span className="text-muted-foreground block truncate text-xs">Krish Srivastava</span>
          </span>
          <ArrowUpRight className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
            <span className="text-foreground block truncate text-sm font-semibold">DM on X</span>
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
