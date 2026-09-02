import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Krish Srivastava',
    handle: 'krishsrivastava',
    jobTitle: 'Design Engineer & Blockchain Developer',
    rotatingRoles: [
      'Design Engineer',
      'Blockchain Developer',
      'Full Stack Engineer',
      'Product Builder',
    ],
    about: {
      intro:
        'I’m Krish Srivastava - a Design Engineer & Blockchain known for pixel-perfect execution and an obsessive attention to detail.',
      stack: {
        prefix: 'I build products end to end with ',
        highlighted: ['React, Next.js, TypeScript and Node.js'],
        suffix: ' - from schema and API design through to the interface.',
      },
      backend: {
        prefix: 'On the backend I work with ',
        highlighted: ['Express, MongoDB, PostgreSQL and Supabase'],
        suffix:
          ', with a bias toward strong validation, correctness and predictable failure handling.',
      },
    },
    contact: {
      email: 'krishsrivastava.dev@gmail.com', // Replace with your email
      phone: '+91 99999 99999', // Replace with your phone number if desired
      calendlyUrl: 'https://calendly.com/krishsrivastava', // Replace with your Calendly link
      xUrl: 'https://x.com/krishsrivastava', // Replace with your X (Twitter) handle
      githubUrl: 'https://github.com/Thanos0s', // Your GitHub profile
      linkedinUrl: 'https://linkedin.com/in/krish-srivastava', // Replace with your LinkedIn URL
      resumeUrl: 'https://drive.google.com/', // Replace with your Google Drive resume link
      location: 'India',
    },
    avatars: {
      stylized: '/avatar-demo.svg',
      photo: '/avatar-real.svg',
    },
  },

  /* -------------------------------------------------------------
     EXPERIENCE
     Add your work experience, internships, or freelance roles below.
  ------------------------------------------------------------- */
  experience: [
    {
      id: 'exp-1',
      company: 'Your Company / Startup',
      role: 'Design Engineer & Blockchain Developer',
      period: '2025 - Present',
      type: 'Remote',
      duration: 'Ongoing',
      logo: '🚀',
      link: 'https://github.com/Thanos0s',
      description:
        'Architecting decentralized applications and frontend interfaces with pixel-perfect attention to detail.',
    },
    {
      id: 'exp-2',
      company: 'Previous Role / Hackathon Team',
      role: 'Full Stack Engineer',
      period: '2024 - 2025',
      type: 'Remote',
      duration: '1 yr',
      logo: '⚡',
      link: 'https://github.com/Thanos0s',
      description:
        'Built full-stack web applications, schema design, and microservices with Next.js, Node.js, and PostgreSQL.',
    },
    /*
    {
      id: 'exp-3',
      company: 'Company Name',
      role: 'Role Title',
      period: 'Month Year - Month Year',
      type: 'Remote • Full-time',
      duration: '6 mos',
      logo: '💼',
      link: 'https://company.com',
      description: 'Key achievements or responsibilities.',
    },
    */
  ],

  /* -------------------------------------------------------------
     PROJECTS
     Featured projects appear on the homepage; all appear on /projects.
  ------------------------------------------------------------- */
  projects: [
    {
      id: 'fundingwala',
      title: 'FundingWala',
      description:
        'A production-grade, retro-styled decentralized crowdfunding dApp built on the Stellar Testnet using Soroban smart contracts. Donors connect Stellar wallets (Freighter, Albedo, xBull) to fund campaigns in XLM with on-chain event streams.',
      image: '/projects/fundingwala.svg',
      liveUrl: 'https://fundingwala01.vercel.app/',
      githubUrl: 'https://github.com/Thanos0s/FundingWala_',
      featured: true,
      tags: [
        { name: 'Stellar', brandColor: '#000000' },
        { name: 'Soroban', brandColor: '#7C3AED' },
        { name: 'React', brandColor: '#61DAFB' },
        { name: 'TailwindCSS', brandColor: '#06B6D4' },
        { name: 'Web3', brandColor: '#F59E0B' },
      ],
    },
    {
      id: 'project-placeholder-2',
      title: 'NextGen DeFi Dashboard',
      description:
        'Real-time analytics and portfolio tracker for EVM and Stellar chains with low-latency event listeners, transaction graphing, and dark mode UI.',
      image: '/projects/placeholder-2.svg',
      liveUrl: 'https://fundingwala01.vercel.app/',
      githubUrl: 'https://github.com/Thanos0s',
      featured: true,
      tags: [
        { name: 'TypeScript', brandColor: '#3178C6' },
        { name: 'Next.js', brandColor: '#000000' },
        { name: 'TailwindCSS', brandColor: '#06B6D4' },
        { name: 'PostgreSQL', brandColor: '#4169E1' },
      ],
    },
    {
      id: 'project-placeholder-3',
      title: 'Decentralized Identity Protocol',
      description:
        'Self-sovereign identity issuance with zero-knowledge verifiable credentials and lightweight browser-based verification.',
      image: '/projects/placeholder-3.svg',
      liveUrl: 'https://fundingwala01.vercel.app/',
      githubUrl: 'https://github.com/Thanos0s',
      featured: false,
      tags: [
        { name: 'TypeScript', brandColor: '#3178C6' },
        { name: 'Node.js', brandColor: '#5FA04E' },
        { name: 'Express.js', brandColor: '#000000' },
        { name: 'MongoDB', brandColor: '#47A248' },
      ],
    },
  ],

  /* -------------------------------------------------------------
     SKILLS
     Brand color badges displayed in the skills grid.
  ------------------------------------------------------------- */
  skills: [
    // Frontend
    { name: 'TypeScript', category: 'frontend', brandColor: '#3178C6', iconKey: 'typescript' },
    { name: 'JavaScript', category: 'frontend', brandColor: '#F7DF1E', iconKey: 'javascript' },
    { name: 'React.js', category: 'frontend', brandColor: '#61DAFB', iconKey: 'react' },
    { name: 'Next.js', category: 'frontend', brandColor: '#000000', iconKey: 'nextjs' },
    { name: 'Tailwind CSS', category: 'frontend', brandColor: '#06B6D4', iconKey: 'tailwindcss' },
    { name: 'HTML5', category: 'frontend', brandColor: '#E34F26', iconKey: 'html' },
    { name: 'CSS3', category: 'frontend', brandColor: '#1572B6', iconKey: 'css' },

    // Backend
    { name: 'Node.js', category: 'backend', brandColor: '#5FA04E', iconKey: 'nodejs' },
    { name: 'Express.js', category: 'backend', brandColor: '#0A0A0A', iconKey: 'express' },
    { name: 'REST APIs', category: 'backend', brandColor: '#7C3AED', iconKey: 'api' },

    // Blockchain / Web3
    { name: 'Stellar / Soroban', category: 'blockchain', brandColor: '#7C3AED', iconKey: 'stellar' },
    { name: 'Smart Contracts', category: 'blockchain', brandColor: '#F59E0B', iconKey: 'contract' },
    { name: 'Web3.js / Ethers', category: 'blockchain', brandColor: '#3B82F6', iconKey: 'web3' },

    // Database
    { name: 'PostgreSQL', category: 'database', brandColor: '#4169E1', iconKey: 'postgresql' },
    { name: 'MongoDB', category: 'database', brandColor: '#47A248', iconKey: 'mongodb' },
    { name: 'Supabase', category: 'database', brandColor: '#3FCF8E', iconKey: 'supabase' },
    { name: 'Redis', category: 'database', brandColor: '#FF4438', iconKey: 'redis' },

    // Tools
    { name: 'Git', category: 'tools', brandColor: '#F03C2E', iconKey: 'git' },
    { name: 'GitHub', category: 'tools', brandColor: '#181717', iconKey: 'github' },
    { name: 'Docker', category: 'tools', brandColor: '#2496ED', iconKey: 'docker' },
    { name: 'Postman', category: 'tools', brandColor: '#FF6C37', iconKey: 'postman' },
    { name: 'VS Code', category: 'tools', brandColor: '#007ACC', iconKey: 'vscode' },
    { name: 'Cursor', category: 'tools', brandColor: '#000000', iconKey: 'cursor' },
    { name: 'Vercel', category: 'tools', brandColor: '#000000', iconKey: 'vercel' },
    { name: 'Figma', category: 'tools', brandColor: '#F24E1E', iconKey: 'figma' },
  ],

  /* -------------------------------------------------------------
     ACHIEVEMENTS
     Hackathon wins, pitch competitions, and milestones.
  ------------------------------------------------------------- */
  achievements: [
    {
      id: 'ach-1',
      title: 'Built & Deployed FundingWala on Stellar Testnet',
      date: '2025',
      description:
        'Shipped full Soroban smart contract crowdfunding dApp with Freighter & Albedo wallet integrations and verified on-chain transactions.',
    },
    {
      id: 'ach-2',
      title: 'Web3 & Full-Stack Hackathon Builder',
      date: '2025',
      description:
        'Built scalable production systems from database schema through to interactive frontend in tight 24-48 hour hackathon sprints.',
    },
    {
      id: 'ach-3',
      title: 'Open Source Contributor & Product Designer',
      date: '2024',
      description:
        'Designed and developed pixel-perfect component libraries and open-source developer tooling.',
    },
  ],

  /* -------------------------------------------------------------
     AREAS OF FOCUS
     Labels displayed in the 4-circle concentric orbit diagram.
  ------------------------------------------------------------- */
  focusAreas: {
    top: 'Frontend Architecture',
    left: 'Design Systems',
    right: 'Blockchain & Smart Contracts',
    bottom: 'Product Thinking & User Systems',
  },
};
