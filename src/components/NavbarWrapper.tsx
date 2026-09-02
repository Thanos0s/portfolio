'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Navbar } from './Navbar';
import { CommandMenu } from './CommandMenu';
import { useSound } from '@/context/SoundContext';

export function NavbarWrapper() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { playClick } = useSound();

  return (
    <>
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <CommandMenu isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Floating search pill for mobile screens */}
      <div className="fixed inset-x-0 bottom-6 z-50 mx-auto w-fit md:hidden">
        <button
          type="button"
          onClick={() => {
            playClick();
            setSearchOpen(true);
          }}
          className="bg-background/95 border-border inline-flex h-9 items-center justify-center gap-2 rounded-full border px-5 py-2 text-sm font-medium shadow-lg backdrop-blur-md transition-transform active:scale-95 cursor-pointer outline-none focus-visible:ring-[3px]"
        >
          <Search className="size-4" aria-hidden="true" />
          <span>Search</span>
        </button>
      </div>
    </>
  );
}
