import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Krish Srivastava',
    handle: 'Thanos0s',
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
      email: 'krishsrivastava00@gmail.com',
      phone: '+91 99999 99999', // Replace with your phone number if desired
      calendlyUrl: 'https://calendly.com/krishsrivastava', // Replace with your Calendly link
      xUrl: 'https://x.com/krishsrivastava', // Replace with your X (Twitter) handle
      githubUrl: 'https://github.com/Thanos0s', // Your GitHub profile
      linkedinUrl: 'https://www.linkedin.com/in/krish-srivastava-6468103a8/', // LinkedIn profile
      resumeUrl: 'https://drive.google.com/', // Replace with your Google Drive resume link
      location: 'India',
    },
    avatars: {
      stylized: '/avatar-demo.svg',
      photo: 'https://avatars.githubusercontent.com/u/181267950?v=4',
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
      id: 'medichain',
      title: 'MediChain',
      description:
        'Decentralized electronic healthcare record management with cryptographically verified access control, on-chain patient consent, and tamper-proof medical audit logs.',
      image: '/projects/placeholder-2.svg',
      liveUrl: 'https://github.com/Thanos0s/medichain',
      githubUrl: 'https://github.com/Thanos0s/medichain',
      featured: true,
      tags: [
        { name: 'Solidity', brandColor: '#363636' },
        { name: 'Web3', brandColor: '#F59E0B' },
        { name: 'React', brandColor: '#61DAFB' },
        { name: 'Node.js', brandColor: '#5FA04E' },
      ],
    },
    {
      id: 'gist-ai-agent',
      title: 'Gist AI Research Agent',
      description:
        'Autonomous multi-source research agent aggregating and synthesizing research documents with retrieval pipelines, structured citation graphs, and responsive UI.',
      image: '/projects/placeholder-3.svg',
      liveUrl: 'https://github.com/Thanos0s/Gist-AI-Research-Agen2',
      githubUrl: 'https://github.com/Thanos0s/Gist-AI-Research-Agen2',
      featured: true,
      tags: [
        { name: 'TypeScript', brandColor: '#3178C6' },
        { name: 'AI Agents', brandColor: '#10B981' },
        { name: 'Next.js', brandColor: '#000000' },
        { name: 'TailwindCSS', brandColor: '#06B6D4' },
      ],
    },
    {
      id: 'tryna-learn-solidity',
      title: 'Smart Contract Architecture Suite',
      description:
        'Foundational EVM smart contracts repository implementing standard ERC tokens, custom staking logics, and reentrancy-guarded escrow mechanics.',
      image: '/projects/placeholder-2.svg',
      liveUrl: 'https://github.com/Thanos0s/Tryna_learn_solidty',
      githubUrl: 'https://github.com/Thanos0s/Tryna_learn_solidty',
      featured: false,
      tags: [
        { name: 'Solidity', brandColor: '#363636' },
        { name: 'Smart Contracts', brandColor: '#F59E0B' },
        { name: 'EVM', brandColor: '#627EEA' },
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
      title: 'Pull Shark & YOLO Badges on GitHub',
      date: '2024 - 2025',
      description:
        'Active open-source contributor across multi-repo organizations with verified merged pull requests and community engagement.',
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
