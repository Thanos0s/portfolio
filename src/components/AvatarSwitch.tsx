'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useSound } from '@/context/SoundContext';

interface AvatarSwitchProps {
  stylizedAvatar: string;
  realPhoto: string;
  name: string;
}

export function AvatarSwitch({ stylizedAvatar, realPhoto, name }: AvatarSwitchProps) {
  const [showReal, setShowReal] = useState(false);
  const { playSwitch } = useSound();

  const handleToggle = () => {
    playSwitch();
    setShowReal((prev) => !prev);
  };

  return (
    <div className="flex w-fit flex-col items-center gap-2">
      <div className="border-border w-fit rounded-[8px] border p-[2.7px] dark:border-neutral-700">
        <div className="border-border relative box-border size-14 overflow-hidden rounded-[7px] border bg-neutral-200 select-none sm:size-20 md:size-21 dark:bg-neutral-800">
          {/* Stylized Avatar */}
          <img
            src={stylizedAvatar}
            alt={`${name} - stylized avatar`}
            className={`box-border size-full object-cover transition-opacity duration-300 ${
              showReal ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Real Photo Avatar */}
          <img
            src={realPhoto}
            alt={`${name} - photo`}
            className={`absolute inset-0 box-border size-full object-cover transition-opacity duration-300 ${
              showReal ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>

      {/* Switch button */}
      <button
        type="button"
        role="switch"
        aria-checked={showReal}
        aria-label={showReal ? 'Show avatar illustration' : 'Show real photo'}
        onClick={handleToggle}
        className="focus-visible:ring-ring/50 relative h-[18px] w-8 shrink-0 cursor-pointer rounded-full border transition-colors outline-none focus-visible:ring-[3px] border-border bg-neutral-200 dark:bg-neutral-800"
      >
        <span
          aria-hidden="true"
          className={`absolute top-1/2 size-3 -translate-y-1/2 rounded-full bg-white shadow-sm transition-[left] duration-200 dark:bg-neutral-900 ${
            showReal ? 'left-[16px]' : 'left-[2px]'
          }`}
        />
      </button>
    </div>
  );
}
