# Krish Srivastava — Portfolio

A modern, retro-engineered developer portfolio replicated from [prathm.me](https://prathm.me/) with pixel-perfect attention to detail. Built with **Next.js 14/15 App Router**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Key Features

* **Centralized Content Configuration**: All your bio copy, projects, work experience, achievements, skills, and social links are managed in a single, well-documented file: [`src/data/portfolio.ts`](./src/data/portfolio.ts).
* **Interactive Canvas Dot Grid**: Top interactive HTML5 Canvas 2D dot matrix with spring physics reacting to cursor proximity.
* **Dual Avatar Switcher**: Smooth cross-fade toggle between a stylized cartoon avatar and your real photo.
* **Web Audio API Sound Effects**: Synthesized tactile mechanical clicks for buttons, switches, and toggles with an interactive mute/unmute control (zero external audio file dependencies).
* **⌘K Command Menu Palette**: Fast keyboard navigation (`⌘K` / `Ctrl+K`) to jump to any section, switch themes, navigate pages, and copy your email.
* **Dual Theme Engine**: Seamless Light and Dark mode with system preference detection and zero hydration flicker.
* **Multi-Page Architecture**:
  * `/`: Full homepage with Hero, About, Connect, Experience, Activity, Featured Projects, Skills badges, Achievements, Concentric Focus Orbit diagram, and CTA.
  * `/projects`: Dedicated projects directory with real-time search filtering across titles, descriptions, and tags.
  * `/contact`: Dedicated inquiry page with "Fastest routes" action cards (Calendly, X DM) and interactive message form.
* **Featured Project Pre-Loaded**: **FundingWala** (Decentralized Crowdfunding dApp on Stellar Testnet with Soroban Smart Contracts).

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## ✏️ How to Customize Your Portfolio

Open [`src/data/portfolio.ts`](./src/data/portfolio.ts) to update any content:

1. **Your Bio & About Section**: Edit `portfolioData.personal.about`.
2. **Socials & Links**: Update `portfolioData.personal.contact` with your email, Calendly, GitHub, LinkedIn, and X profiles.
3. **Projects**: Add, remove, or modify items in `portfolioData.projects`. Set `featured: true` to display a project on both the homepage and `/projects`.
4. **Experience**: Add your roles, internships, or startups in `portfolioData.experience`.
5. **Skills**: Add or categorize your technical proficiencies in `portfolioData.skills`.
6. **Achievements**: Add hackathons, awards, or launch milestones in `portfolioData.achievements`.
7. **Avatars**: Replace `/public/avatar-demo.svg` and `/public/avatar-real.svg` with your preferred images or photos.

---

## 🚢 Deployment to Vercel

This portfolio is production-ready for zero-config deployment on Vercel:

1. Push this repository to your GitHub account (`https://github.com/Thanos0s/Portfolio`).
2. Go to [Vercel](https://vercel.com) and click **Add New... ➔ Project**.
3. Import your repository and click **Deploy**.

---

## 📄 License
MIT License. Built in the open.
