'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  FolderGit2,
  Send,
  Home,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Copy,
  Calendar,
  ExternalLink,
  Check,
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useSound } from '@/context/SoundContext';
import { portfolioData } from '@/data/portfolio';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { isMuted, toggleMute, playClick } = useSound();
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        isOpen ? onClose() : undefined;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(portfolioData.personal.contact.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const commands = [
    {
      group: 'Pages',
      items: [
        {
          label: 'Home',
          icon: <Home className="size-4" />,
          action: () => {
            playClick();
            router.push('/');
            onClose();
          },
        },
        {
          label: 'Projects Catalog',
          icon: <FolderGit2 className="size-4" />,
          action: () => {
            playClick();
            router.push('/projects');
            onClose();
          },
        },
        {
          label: 'Contact',
          icon: <Send className="size-4" />,
          action: () => {
            playClick();
            router.push('/contact');
            onClose();
          },
        },
      ],
    },
    {
      group: 'Sections',
      items: [
        {
          label: 'Jump to About',
          icon: <Search className="size-4" />,
          action: () => {
            playClick();
            router.push('/#about');
            onClose();
          },
        },
        {
          label: 'Jump to Experience',
          icon: <Search className="size-4" />,
          action: () => {
            playClick();
            router.push('/#experience');
            onClose();
          },
        },
        {
          label: 'Jump to Projects',
          icon: <Search className="size-4" />,
          action: () => {
            playClick();
            router.push('/#projects');
            onClose();
          },
        },
        {
          label: 'Jump to Skills',
          icon: <Search className="size-4" />,
          action: () => {
            playClick();
            router.push('/#skills');
            onClose();
          },
        },
        {
          label: 'Jump to Achievements',
          icon: <Search className="size-4" />,
          action: () => {
            playClick();
            router.push('/#achievements');
            onClose();
          },
        },
      ],
    },
    {
      group: 'Quick Actions',
      items: [
        {
          label: copied ? 'Email Copied!' : `Copy Email (${portfolioData.personal.contact.email})`,
          icon: copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />,
          action: handleCopyEmail,
        },
        {
          label: `Toggle Theme (Current: ${theme})`,
          icon: theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />,
          action: () => {
            toggleTheme();
            onClose();
          },
        },
        {
          label: `Toggle Interface Sound (${isMuted ? 'Muted' : 'Active'})`,
          icon: isMuted ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />,
          action: () => {
            toggleMute();
            onClose();
          },
        },
        {
          label: 'Book 15-min Call (Calendly)',
          icon: <Calendar className="size-4" />,
          action: () => {
            playClick();
            window.open(portfolioData.personal.contact.calendlyUrl, '_blank');
            onClose();
          },
        },
        {
          label: 'View GitHub Profile',
          icon: <ExternalLink className="size-4" />,
          action: () => {
            playClick();
            window.open(portfolioData.personal.contact.githubUrl, '_blank');
            onClose();
          },
        },
        {
          label: 'View LinkedIn Profile',
          icon: <ExternalLink className="size-4" />,
          action: () => {
            playClick();
            window.open(portfolioData.personal.contact.linkedinUrl, '_blank');
            onClose();
          },
        },
      ],
    },
  ];

  const filteredGroups = commands
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 p-4 pt-20 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div
        className="border-border bg-card text-card-foreground w-full max-w-lg overflow-hidden rounded-xl border shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="border-border flex items-center gap-3 border-b px-4 py-3">
          <Search className="text-muted-foreground size-4 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="placeholder:text-muted-foreground w-full bg-transparent text-sm outline-none"
          />
          <kbd className="bg-muted text-muted-foreground rounded px-1.5 py-0.5 font-mono text-[10px]">
            ESC
          </kbd>
        </div>

        {/* Command list */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredGroups.length === 0 ? (
            <div className="text-muted-foreground p-4 text-center text-sm">
              No matching commands found.
            </div>
          ) : (
            filteredGroups.map((group) => (
              <div key={group.group} className="mb-2 last:mb-0">
                <div className="text-muted-foreground px-2 py-1 text-[11px] font-medium uppercase tracking-wider">
                  {group.group}
                </div>
                {group.items.map((item) => (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className="hover:bg-muted hover:text-foreground flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left text-sm transition-colors cursor-pointer"
                  >
                    <span className="text-muted-foreground">{item.icon}</span>
                    <span className="flex-1 truncate">{item.label}</span>
                  </button>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
