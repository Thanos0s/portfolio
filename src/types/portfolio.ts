export interface HighlightedText {
  prefix: string;
  highlighted: string[];
  suffix: string;
}

export interface PersonalData {
  name: string;
  handle: string;
  jobTitle: string;
  rotatingRoles: string[];
  about: {
    intro: string;
    stack: HighlightedText;
    backend: HighlightedText;
  };
  contact: {
    email: string;
    phone?: string;
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
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  duration?: string;
  logo?: string;
  link?: string;
  description?: string;
}

export interface ProjectTag {
  name: string;
  brandColor?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  tags: ProjectTag[];
}

export type SkillCategory = 'frontend' | 'backend' | 'blockchain' | 'database' | 'tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  brandColor: string;
  iconKey?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface FocusAreas {
  top: string;
  left: string;
  right: string;
  bottom: string;
}

export interface PortfolioData {
  personal: PersonalData;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillItem[];
  achievements: AchievementItem[];
  focusAreas: FocusAreas;
}
