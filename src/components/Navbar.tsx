'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Volume2, VolumeX, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useSound } from '@/context/SoundContext';

interface NavbarProps {
  onOpenSearch: () => void;
}

export function Navbar({ onOpenSearch }: NavbarProps) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { isMuted, toggleMute, playClick, playSwitch } = useSound();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleThemeToggle = () => {
    playSwitch();
    toggleTheme();
  };

  const handleSoundToggle = () => {
    toggleMute();
    if (isMuted) {
      // Unmuting, play click sound
      setTimeout(playClick, 50);
    }
  };

  return (
    <div className="bg-background sticky top-0 isolate z-50 w-full pt-1">
      <div className="mx-auto w-full px-4 md:max-w-[715px] md:px-0">
        <div className="screen-line-top screen-line-bottom relative mt-1 flex w-full items-center justify-between gap-2 px-4 py-1.5">
          {/* Pixel Logo */}
          <Link
            href="/"
            onClick={playClick}
            className="focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
          >
            <span className="font-pixel text-2xl leading-none tracking-wide uppercase">
              KRISH
            </span>
            <span className="sr-only">- home</span>
          </Link>

          {/* Desktop Nav Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <nav aria-label="Main" className="hidden items-center gap-4 md:flex">
              <Link
                href="/projects"
                onClick={playClick}
                className={`focus-visible:ring-ring/50 rounded-sm text-sm font-light underline-offset-[5px] outline-none hover:underline focus-visible:ring-[3px] ${
                  pathname === '/projects' ? 'underline font-medium' : ''
                }`}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={playClick}
                className={`focus-visible:ring-ring/50 rounded-sm text-sm font-light underline-offset-[5px] outline-none hover:underline focus-visible:ring-[3px] ${
                  pathname === '/contact' ? 'underline font-medium' : ''
                }`}
              >
                Contact
              </Link>

              {/* ⌘K Command Dialog Button */}
              <button
                type="button"
                aria-label="Open command menu"
                onClick={() => {
                  playClick();
                  onOpenSearch();
                }}
                className="text-muted-foreground hover:text-foreground hover:border-foreground/20 focus-visible:ring-ring/50 border-border bg-background inline-flex h-7 items-center gap-2 rounded-full border px-2.5 text-xs transition-colors outline-none focus-visible:ring-[3px] cursor-pointer"
              >
                <Search className="size-3.5" aria-hidden="true" />
                <span>Search</span>
                <kbd className="bg-muted text-muted-foreground rounded px-1 py-px font-mono text-[10px] leading-4">
                  ⌘K
                </kbd>
              </button>
            </nav>

            <span className="bg-border hidden h-4 w-px md:block" aria-hidden="true" />

            {/* Sound & Theme Controls Capsule */}
            <div className="flex h-8 items-center gap-0.5 rounded-full bg-black/5 p-0.5 dark:bg-neutral-800">
              {/* Sound toggle button */}
              <button
                type="button"
                role="switch"
                aria-checked={!isMuted}
                aria-label={isMuted ? 'Unmute interface sound' : 'Mute interface sound'}
                onClick={handleSoundToggle}
                className="focus-visible:ring-ring/50 text-foreground/75 flex size-7 cursor-pointer items-center justify-center rounded-full outline-none transition-colors hover:bg-black/5 focus-visible:ring-[3px] dark:hover:bg-white/10"
              >
                {isMuted ? (
                  <VolumeX className="size-[14px]" aria-hidden="true" />
                ) : (
                  <Volume2 className="size-[14px]" aria-hidden="true" />
                )}
              </button>

              {/* Theme toggle button */}
              <button
                type="button"
                onClick={handleThemeToggle}
                className="text-foreground/75 flex size-7 cursor-pointer items-center justify-center rounded-full outline-none transition-colors hover:bg-black/5 focus-visible:ring-[3px] dark:hover:bg-white/10 active:scale-95"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="size-[14px]" aria-hidden="true" />
                ) : (
                  <Moon className="size-[14px]" aria-hidden="true" />
                )}
                <span className="sr-only">Toggle theme</span>
              </button>
            </div>

            {/* Mobile Menu Dropdown Trigger */}
            <div className="border-border border-l pl-1 md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center size-8 rounded-full hover:bg-accent text-foreground outline-none focus-visible:ring-[3px]"
                aria-label="Open menu"
                type="button"
              >
                {mobileMenuOpen ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-border bg-background screen-line-bottom mt-1 flex flex-col gap-2 border-b p-4 md:hidden">
            <Link
              href="/"
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
              }}
              className="text-sm py-1.5 font-medium hover:underline"
            >
              Home
            </Link>
            <Link
              href="/projects"
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
              }}
              className="text-sm py-1.5 font-medium hover:underline"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
              }}
              className="text-sm py-1.5 font-medium hover:underline"
            >
              Contact
            </Link>
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="flex items-center gap-2 text-sm py-1.5 font-medium text-left"
            >
              <Search className="size-4" />
              <span>Search (⌘K)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
