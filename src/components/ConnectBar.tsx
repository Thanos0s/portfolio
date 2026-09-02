'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Send, Mail } from 'lucide-react';
import { useSound } from '@/context/SoundContext';

interface ConnectBarProps {
  contact: {
    email: string;
    resumeUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    xUrl: string;
  };
}

export function ConnectBar({ contact }: ConnectBarProps) {
  const { playClick } = useSound();

  const buttonClass =
    'focus-visible:ring-ring/50 bg-foreground text-background inline-flex items-center justify-center gap-[5px] overflow-hidden rounded-md border border-transparent px-2 py-1 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-opacity hover:opacity-90 focus-visible:ring-[3px] w-full';

  return (
    <ul className="grid grid-cols-3 gap-2 px-4 py-5 sm:px-5 md:grid-cols-6">
      {/* Resume */}
      <li className="flex min-w-0">
        <a
          href={contact.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className={buttonClass}
        >
          <FileText className="size-3.5 shrink-0" />
          <span className="truncate">Resume</span>
        </a>
      </li>

      {/* Contact Route */}
      <li className="flex min-w-0">
        <Link href="/contact" onClick={playClick} className={buttonClass}>
          <Send className="size-3.5 shrink-0" />
          <span className="truncate">Contact</span>
        </Link>
      </li>

      {/* GitHub */}
      <li className="flex min-w-0">
        <a
          href={contact.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className={buttonClass}
        >
          <svg viewBox="0 0 496 512" fill="currentColor" className="size-3.5 shrink-0" aria-hidden="true">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
          </svg>
          <span className="truncate">GitHub</span>
        </a>
      </li>

      {/* LinkedIn */}
      <li className="flex min-w-0">
        <a
          href={contact.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className={buttonClass}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5 shrink-0" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
          <span className="truncate">LinkedIn</span>
        </a>
      </li>

      {/* X (Twitter) */}
      <li className="flex min-w-0">
        <a
          href={contact.xUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className={buttonClass}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5 shrink-0" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="truncate">X (Twitter)</span>
        </a>
      </li>

      {/* Email */}
      <li className="flex min-w-0">
        <a
          href={`mailto:${contact.email}`}
          onClick={playClick}
          className={buttonClass}
        >
          <Mail className="size-3.5 shrink-0" />
          <span className="truncate">Email</span>
        </a>
      </li>
    </ul>
  );
}
