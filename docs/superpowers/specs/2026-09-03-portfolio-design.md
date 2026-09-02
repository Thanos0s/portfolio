# Design Specification: Krish Srivastava Portfolio (prathm.me Replication)

**Date**: 2026-09-03  
**Author**: Krish Srivastava & Antigravity  
**Status**: Validated Design

---

## 1. Executive Summary
This document specifies the technical design and architecture for Krish Srivastava's personal portfolio website, engineered to replicate the exact visual design system, interaction fidelity, and structural craftsmanship of [prathm.me](https://prathm.me/).

The project is built on **Next.js 14/15 App Router**, **TypeScript**, and **Tailwind CSS**. It incorporates a centralized, type-safe data configuration layer (`src/data/portfolio.ts`) pre-populated with Krish's exact bio, with clean, extensible placeholder templates for projects, experience, achievements, and contact routes.

---

## 2. Visual System & Aesthetics

### 2.1 Container & Grid Rhythm
* **Center Well**: Main content is constrained to `max-w-[715px]` centered horizontally with `px-4 md:px-0`.
* **Technical Ruler Lines**:
  * Vertical guide borders flanking the main column on medium screens and above (`md:-left-6` and `md:-right-6`), with subtle opacity in dark mode.
  * Signature top and bottom "screen lines" (`screen-line-top`, `screen-line-bottom`) framing headers, section boundaries, and button bars.
  * Clean 1px horizontal dividers (`bg-border h-px w-full shrink-0`) separating major content blocks.

### 2.2 Color Tokens & Theming
* Fully responsive dual-theme system (Light, Dark, and System detection) with CSS variables:
  * `--background`: Pure white (`#ffffff`) in light mode; deep obsidian (`#0a0a0a`) in dark mode.
  * `--foreground`: Crisp near-black (`#111111`) in light mode; clean bright neutral (`#f5f5f5`) in dark mode.
  * `--border`: Subtle hairline divider (`rgba(0, 0, 0, 0.08)`) in light mode; (`rgba(255, 255, 255, 0.1)`) in dark mode.
  * `--muted`: Secondary neutral tones for metadata, dates, and subdued copy.
* No layout shift or color flash on page load.

### 2.3 Typography & Logo
* **Logo**: Pixel/retro uppercase typography (`KRISH`) with tracking-wide and hover micro-interaction.
* **Body Font**: Clean geometric neo-grotesque sans-serif (Satoshi / Inter variable).
* **Code / Technical Text**: Monospace (`JetBrains Mono` / system mono) for command hints (`⌘K`), dates, and metrics.

---

## 3. Core Interactive Features

### 3.1 Interactive HTML5 Canvas Dot Grid
* Positioned at the top of the home page (`InteractiveDots.tsx`) spanning `h-24 sm:h-32`.
* Dots render in a uniform grid using HTML5 2D Canvas context.
* Mouse hover calculates radial distance; dots near the cursor displace subtly or brighten smoothly, returning to origin with gentle spring physics.
* High DPI (retina) canvas scaling with smooth framerate handling via `requestAnimationFrame`.

### 3.2 Dual Avatar Switcher
* Profile avatar frame with retro border and double padding.
* Toggle switch below avatar to switch seamlessly between:
  1. Illustrated / stylized avatar (`/avatar-demo.png`)
  2. Real portrait photo (`/avatar-real.png`)
* Smooth cross-fade transition.

### 3.3 Dynamic Role Cycler
* Animated headline role switcher rotating through:
  * *"Design Engineer"*
  * *"Blockchain Developer"*
  * *"Full Stack Engineer"*
* Accessible `aria-live` announcement with smooth vertical slide or fade transition.

### 3.4 Web Audio API Interface Feedback
* Synthesized subtle acoustic tick/click on interactive taps (buttons, switches, toggles) using the browser's native `AudioContext` (zero external mp3/wav files required).
* Persistent sound toggle in the top navbar (`SoundContext.tsx`) with speaker icon (`lucide-react` volume2 / volume-x).
* Remembers user mute preference in `localStorage`.

### 3.5 ⌘K Command Menu Dialog
* Accessible keyboard palette opened via `⌘K` (Mac), `Ctrl+K` (Windows), or clicking the search pill in the navbar/mobile bottom bar.
* Features:
  * Jump directly to sections (*About*, *Connect*, *Experience*, *Projects*, *Skills*, *Achievements*).
  * Route navigation (*Home*, *Projects Catalog*, *Contact Page*).
  * Quick actions (*Toggle Dark/Light Mode*, *Toggle Sound*, *Copy Email address*, *Book Calendly Call*).

### 3.6 Concentric "Areas of Focus" Orbital Diagram
* 4-circle intersecting Venn/orbital diagram centered on Krish's profile avatar:
  * Top: *Frontend Architecture*
  * Left: *Design Systems*
  * Right: *Blockchain & Smart Contracts*
  * Bottom: *Product Thinking & Systems*
* Responsive circular layout scaling smoothly from mobile to desktop.

### 3.7 Interactive Contact Form & Floating CTA
* Bottom CTA card with expanding hover avatar (*"Book a free call"*).
* `/contact` page includes:
  * "Fastest routes" cards (Calendly 15-min call, DM on X).
  * Direct message form with live character count, validation, and visual submission feedback.

---

## 4. Multi-Page Route Structure

1. **`/` (Homepage)**:
   * Interactive canvas dots header
   * Profile header (avatar switch, name, cycling role, book call / email buttons)
   * About section (Krish's exact bio with highlighted keywords)
   * Connect grid (Resume, Contact, GitHub, LinkedIn, X, Email)
   * Experience timeline
   * GitHub activity preview
   * Featured Projects (2-column responsive grid with brand icons and links)
   * "See all projects ➔" CTA button
   * Skills badges categorized with official SVG brand colors
   * Achievements list
   * "Areas of Focus" orbital diagram
   * Bottom CTA & Footer with radial dot mask

2. **`/projects` (Dedicated Catalog)**:
   * Top bar with "Home" back button
   * Live search filter input (*"Search projects..."*)
   * Tag filtering by technology (TypeScript, React, Next.js, Solidity, etc.)
   * Full responsive grid of all projects with preview images, live demos, and repository links
   * Empty state for unmatched search queries

3. **`/contact` (Dedicated Inquiries)**:
   * Top bar with "Home" back button & "Open to work" badge
   * "Fastest routes" action cards
   * Direct contact form with client-side validation

---

## 5. Centralized Data Architecture (`src/data/portfolio.ts`)

All content is configured in a single, well-documented file:

```typescript
export interface PortfolioData {
  personal: {
    name: string;
    handle: string;
    headlineRole: string;
    rotatingRoles: string[];
    about: {
      intro: string;
      stackDescription: {
        prefix: string;
        highlighted: string[];
        suffix: string;
      };
      backendDescription: {
        prefix: string;
        highlighted: string[];
        suffix: string;
      };
    };
    contact: {
      email: string;
      calendlyUrl: string;
      xUrl: string;
      githubUrl: string;
      linkedinUrl: string;
      resumeUrl: string;
      location: string;
    };
    avatars: {
      stylized: string;
      photo: string;
    };
  };
  experience: Array<{
    company: string;
    role: string;
    period: string;
    type: string;
    logo?: string;
    link?: string;
    description?: string;
  }>;
  projects: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    tags: Array<{ name: string; brandColor?: string }>;
  }>;
  skills: Array<{
    name: string;
    category: 'frontend' | 'backend' | 'blockchain' | 'database' | 'tools';
    brandColor: string;
  }>;
  achievements: Array<{
    title: string;
    date: string;
    description: string;
  }>;
  focusAreas: {
    top: string;
    left: string;
    right: string;
    bottom: string;
  };
}
```

Pre-seeded content:
* **Name**: Krish Srivastava
* **Intro**: *"I’m Krish Srivastava - a Design Engineer & Blockchain known for pixel-perfect execution and an obsessive attention to detail."*
* **Stack**: React, Next.js, TypeScript, and Node.js
* **Backend**: Express, MongoDB, PostgreSQL, and Supabase
* **Template Placeholders**: Clean commented entries for projects, experiences, achievements, and social handles.

---

## 6. Verification Plan

### Automated Verification
* `npm run build`: Next.js production build verification (typecheck + route tree compilation).
* `npm run lint`: ESLint static analysis verification.

### Manual Verification
* Inspect homepage responsiveness across mobile (<640px), tablet (768px), and desktop (>1024px).
* Verify theme toggling (Dark / Light) persists across reload without FOUC (flash of unstyled content).
* Verify audio feedback activates on click and respects the mute switch.
* Verify ⌘K / Ctrl+K opens the command palette and navigates accurately.
* Verify `/projects` search bar filters dynamically in real-time.
* Verify `/contact` form validates inputs and gives clear user feedback.
