'use client';

import React, { useEffect, useState } from 'react';

interface RoleCycleProps {
  roles: string[];
}

export function RoleCycle({ roles }: RoleCycleProps) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!roles || roles.length <= 1) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, [roles]);

  return (
    <span className="relative inline-block overflow-hidden align-bottom h-6 md:h-7">
      <span
        className={`block whitespace-nowrap transition-all duration-300 transform ${
          isAnimating
            ? '-translate-y-4 opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
      >
        {roles[index]}
      </span>
    </span>
  );
}
