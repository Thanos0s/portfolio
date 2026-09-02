# Portfolio Replication Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, production-grade replica of [prathm.me](https://prathm.me/) for Krish Srivastava featuring pixel-perfect visual styling, interactive dot canvas, Web Audio sound effects, ⌘K command menu, dark/light theme switching, and a centralized typed configuration file for easy data updates.

**Architecture:** Next.js 14/15 App Router with TypeScript and Tailwind CSS. The UI features a centered technical well (`max-w-[715px]`) framed by signature retro `screen-line` borders, side ruler lines, and an interactive canvas dot matrix. All content (bio, projects, experience, achievements, skills, socials) is sourced from a single typed file (`src/data/portfolio.ts`).

**Tech Stack:** Next.js 14/15, React 18/19, TypeScript, Tailwind CSS, Lucide React, Web Audio API, HTML5 Canvas.

## Global Constraints

- Technical container width constrained to `max-w-[715px]` on desktop.
- Dual theme support (light and dark) persisted in `localStorage` without flash of wrong theme.
- Sound effects must be purely Web Audio API synthesized (no external .mp3/.wav asset dependencies).
- Centralized portfolio configuration file at `src/data/portfolio.ts` with Krish's exact bio pre-filled.
- Three full routes: `/`, `/projects` (with real-time search), and `/contact` (with form validation).
- Accessible keyboard shortcut (`⌘K` / `Ctrl+K`) command palette.

---

### Task 1: Scaffolding, Tailwind Configuration & Theme Provider

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `next.config.mjs`
- Create: `src/app/globals.css`
- Create: `src/context/ThemeContext.tsx`
- Create: `src/app/layout.tsx`

**Interfaces:**
- Produces: `ThemeContext` exporting `{ theme, toggleTheme, setTheme }`
- Produces: Tailwind utility classes `.screen-line-top`, `.screen-line-bottom`, `--background`, `--foreground`, `--border`

- [ ] **Step 1: Initialize package.json and project configuration**
Create `package.json` with dependencies (`next`, `react`, `react-dom`, `lucide-react`, `clsx`, `tailwind-merge`) and devDependencies (`typescript`, `@types/react`, `@types/node`, `tailwindcss`, `postcss`, `autoprefixer`).

- [ ] **Step 2: Configure tailwind.config.ts and globals.css**
Define custom colors (background, foreground, border, muted), retro border styles, and screen-line borders.

- [ ] **Step 3: Create ThemeContext.tsx**
Manage `'light' | 'dark' | 'system'` mode, attaching `dark` class to `document.documentElement` and syncing with `localStorage`.

- [ ] **Step 4: Create Root Layout in src/app/layout.tsx**
Wrap application in `ThemeProvider` and basic body shell with skip link and meta tags.

- [ ] **Step 5: Verify build & commit**
Run `npm run build` or `npx tsc --noEmit` and commit:
```bash
git add package.json tsconfig.json tailwind.config.ts postcss.config.js next.config.mjs src/app/globals.css src/context/ThemeContext.tsx src/app/layout.tsx
git commit -m "feat: scaffold Next.js app with Tailwind CSS and ThemeProvider"
```

---

### Task 2: Centralized Portfolio Data Configuration & Schema

**Files:**
- Create: `src/data/portfolio.ts`
- Create: `src/types/portfolio.ts`

**Interfaces:**
- Produces: `portfolioData: PortfolioData` containing `personal`, `experience`, `projects`, `skills`, `achievements`, and `focusAreas`

- [ ] **Step 1: Define TypeScript interfaces in src/types/portfolio.ts**
Define `PersonalData`, `ProjectItem`, `ExperienceItem`, `SkillItem`, `AchievementItem`, and `FocusAreas`.

- [ ] **Step 2: Implement src/data/portfolio.ts with Krish's exact bio & FundingWala**
Pre-populate:
  - Name: "Krish Srivastava"
  - Bio 1: "I’m Krish Srivastava - a Design Engineer & Blockchain known for pixel-perfect execution and an obsessive attention to detail."
  - Bio 2: "I build products end to end with React, Next.js, TypeScript and Node.js - from schema and API design through to the interface."
  - Bio 3: "On the backend I work with Express, MongoDB, PostgreSQL and Supabase, with a bias toward strong validation, correctness and predictable failure handling."
  - Project 1 (Featured): **FundingWala**
    - Description: "A production-grade decentralized crowdfunding dApp built on Stellar Testnet using Soroban smart contracts. Donors connect Stellar wallets (Freighter, Albedo, xBull) to fund campaigns in XLM with on-chain event streams."
    - Live URL: `https://fundingwala01.vercel.app/`
    - GitHub URL: `https://github.com/Thanos0s/FundingWala_`
    - Tags: Stellar, Soroban, React, Tailwind CSS, Web3
    - Featured: true
  - Provide structured placeholders and template comments for additional projects, experience, skills, and achievements.

- [ ] **Step 3: Verify TypeScript typing and export**
Ensure `portfolio.ts` strictly satisfies `PortfolioData`.

- [ ] **Step 4: Commit**
```bash
git add src/types/portfolio.ts src/data/portfolio.ts
git commit -m "feat: add typed portfolio data schema and pre-populate Krish's bio"
```

---

### Task 3: Web Audio Feedback & Sound Context

**Files:**
- Create: `src/context/SoundContext.tsx`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: browser `window.AudioContext`
- Produces: `SoundContext` exporting `{ isMuted, toggleMute, playClick, playSwitch, playPop }`

- [ ] **Step 1: Implement SoundContext with Web Audio API synthesis**
Create short, tactile synthetic clicks (oscillator with rapid exponential gain decay: 800Hz-1200Hz for 15ms) to give authentic mechanical feedback without audio file downloads.

- [ ] **Step 2: Wire SoundContext into layout.tsx**
Wrap tree in `SoundProvider`.

- [ ] **Step 3: Commit**
```bash
git add src/context/SoundContext.tsx src/app/layout.tsx
git commit -m "feat: implement Web Audio API click feedback and sound toggle"
```

---

### Task 4: Interactive HTML5 Canvas Dot Grid & Avatars

**Files:**
- Create: `src/components/InteractiveDots.tsx`
- Create: `public/avatar-real.png` (or SVG avatar placeholder)
- Create: `public/avatar-demo.png` (or SVG cartoon placeholder)

**Interfaces:**
- Produces: `<InteractiveDots />` self-contained canvas component

- [ ] **Step 1: Implement InteractiveDots.tsx**
Canvas 2D grid of dots with smooth mouse-tracking physics. Mouse movement triggers radial push; dots smoothly ease back with delta-time spring interpolation.

- [ ] **Step 2: Create placeholder avatar assets in public/**
Provide crisp modern SVGs/PNGs for both the real photo avatar and the stylized avatar.

- [ ] **Step 3: Commit**
```bash
git add src/components/InteractiveDots.tsx public/
git commit -m "feat: add interactive canvas dot matrix and avatar assets"
```

---

### Task 5: Navbar, Avatar Switcher, Role Cycler & Connect Bar

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/AvatarSwitch.tsx`
- Create: `src/components/RoleCycle.tsx`
- Create: `src/components/ConnectBar.tsx`

**Interfaces:**
- Consumes: `portfolioData.personal`, `SoundContext`, `ThemeContext`
- Produces: Navbar with logo `KRISH`, search button, sound toggle, theme toggle, and mobile menu
- Produces: Avatar switch with dual-photo toggle
- Produces: Role cycler with animated transition

- [ ] **Step 1: Implement RoleCycle.tsx**
Cycle through `["Design Engineer", "Blockchain Developer", "Full Stack Engineer"]` with interval and smooth vertical slide animation.

- [ ] **Step 2: Implement AvatarSwitch.tsx**
Render dual avatar with toggle switch, triggering `playSwitch()` audio effect on toggle.

- [ ] **Step 3: Implement Navbar.tsx**
Pixel logo `KRISH`, navigation links (`Projects`, `Contact`), search trigger button (`⌘K`), sound toggle button, theme toggle button, and mobile dropdown.

- [ ] **Step 4: Implement ConnectBar.tsx**
6 responsive action buttons: Resume, Contact, GitHub, LinkedIn, X, Email.

- [ ] **Step 5: Commit**
```bash
git add src/components/Navbar.tsx src/components/AvatarSwitch.tsx src/components/RoleCycle.tsx src/components/ConnectBar.tsx
git commit -m "feat: implement Navbar, AvatarSwitch, RoleCycle, and ConnectBar"
```

---

### Task 6: Accessible ⌘K Command Menu Dialog

**Files:**
- Create: `src/components/CommandMenu.tsx`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `useSound()`, `useTheme()`, `useRouter()`
- Produces: `<CommandMenu />` global modal listening for `keydown` (`⌘K` / `Ctrl+K`)

- [ ] **Step 1: Implement CommandMenu.tsx**
Dialog modal with search input, keyboard navigation (Arrow Up/Down, Enter, Esc), section jumps, theme toggle action, sound toggle action, email copy, and route navigation.

- [ ] **Step 2: Register CommandMenu in layout.tsx**
Ensure global keyboard shortcut works across all pages.

- [ ] **Step 3: Commit**
```bash
git add src/components/CommandMenu.tsx src/app/layout.tsx
git commit -m "feat: implement accessible CommandMenu dialog"
```

---

### Task 7: Projects Grid, Skills, Experience & Achievements

**Files:**
- Create: `src/components/ProjectCard.tsx`
- Create: `src/components/SkillsGrid.tsx`
- Create: `src/components/ExperienceList.tsx`
- Create: `src/components/AchievementsList.tsx`
- Create: `src/components/Icons.tsx` (Brand SVG icons)

**Interfaces:**
- Consumes: `portfolioData`
- Produces: Interactive cards and lists matching `prathm.me` exact layout

- [ ] **Step 1: Implement Icons.tsx**
Accurate SVG brand icons with official brand colors: TypeScript, React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Redis, Supabase, Solidity, Docker, Git, etc.

- [ ] **Step 2: Implement ProjectCard.tsx**
2-column responsive layout with card preview image, title, live button, code button, summary, and colored tech badges.

- [ ] **Step 3: Implement SkillsGrid.tsx, ExperienceList.tsx, and AchievementsList.tsx**
Styled with retro borders, hairline dividers, and hover feedback.

- [ ] **Step 4: Commit**
```bash
git add src/components/ProjectCard.tsx src/components/SkillsGrid.tsx src/components/ExperienceList.tsx src/components/AchievementsList.tsx src/components/Icons.tsx
git commit -m "feat: implement project cards, skills grid, experience, and achievements"
```

---

### Task 8: Concentric Focus Orbit Diagram, Footer & Home Page Assembly

**Files:**
- Create: `src/components/FocusOrbit.tsx`
- Create: `src/components/Footer.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: all homepage components
- Produces: complete home page (`/`)

- [ ] **Step 1: Implement FocusOrbit.tsx**
Concentric 4-circle orbital diagram with center profile avatar and quadrant labels (*Frontend Architecture*, *Design Systems*, *Blockchain & Smart Contracts*, *Product Thinking*). Includes bottom CTA card with avatar expansion on hover.

- [ ] **Step 2: Implement Footer.tsx**
Attribution text, copyright year, and radial dot mask background.

- [ ] **Step 3: Assemble src/app/page.tsx**
Place all sections sequentially: Canvas dots, Profile Header, About, Connect, Experience, Activity, Featured Projects, Skills, Achievements, Areas of Focus, Footer.

- [ ] **Step 4: Commit**
```bash
git add src/components/FocusOrbit.tsx src/components/Footer.tsx src/app/page.tsx
git commit -m "feat: implement FocusOrbit, Footer, and assemble home page"
```

---

### Task 9: Dedicated /projects and /contact Pages

**Files:**
- Create: `src/app/projects/page.tsx`
- Create: `src/app/contact/page.tsx`
- Create: `src/components/ContactForm.tsx`

**Interfaces:**
- Produces: `/projects` catalog with dynamic search filter input
- Produces: `/contact` page with fastest routes and interactive message form

- [ ] **Step 1: Implement src/app/projects/page.tsx**
Include header, "Home" return link, live search filter input (`useState` matching title, description, and tags), and responsive grid with empty search fallback state.

- [ ] **Step 2: Implement ContactForm.tsx & src/app/contact/page.tsx**
Include "Fastest routes" action buttons (Calendly 15-min call, DM on X) and contact form with email, message length counter (min 10 chars), validation, and submission feedback.

- [ ] **Step 3: Commit**
```bash
git add src/app/projects/page.tsx src/app/contact/page.tsx src/components/ContactForm.tsx
git commit -m "feat: implement dedicated projects search and contact pages"
```

---

### Task 10: Production Build Verification & Interactive Testing

**Files:**
- All created files

**Interfaces:**
- Validates: Zero TypeScript errors, zero lint errors, successful production static generation

- [ ] **Step 1: Run full production build**
Run `npm run build` and ensure all routes (`/`, `/projects`, `/contact`) compile cleanly.

- [ ] **Step 2: Verify responsive design and interactions**
Test theme toggle, audio clicks, ⌘K menu, search filtering, and contact form in the browser.

- [ ] **Step 3: Final commit**
```bash
git add .
git commit -m "feat: complete Krish Srivastava portfolio replication of prathm.me"
```
