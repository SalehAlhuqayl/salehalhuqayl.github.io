export interface SiteData {
  brand: {
    name: string;
    title: string;
    tagline: string;
    email: string;
    location: string;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
    };
  };
  nav: Array<{
    label: string;
    href: string;
  }>;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    og_image: string;
  };
  hero: {
    headline: string;
    subtitle: string;
    cta_primary: {
      text: string;
      href: string;
    };
    cta_secondary: {
      text: string;
      href: string;
    };
  };
  highlights: Array<{
    number: string;
    label: string;
    description: string;
  }>;
  projects: Array<{
    slug: string;
    name: string;
    role: string;
    period: string;
    stack: string[];
    problem: string;
    approach: string[];
    impact: string[];
    links: {
      repo?: string;
      live?: string;
      website?: string;
    };
    images: string[];
  }>;
  about: AboutData;
  contact: ContactData;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    description: string;
    badge: string;
    url?: string;
  }>;
  footer: string;
}

export interface Project {
  slug: string;
  name: string;
  role: string;
  period: string;
  stack: string[];
  problem: string;
  approach: string[];
  impact: string[];
  links: {
    repo?: string;
    live?: string;
    website?: string;
  };
  images: string[];
}

export interface Highlight {
  number: string;
  label: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CTAButton {
  text: string;
  href: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
  badge: string;
  url?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface AboutData {
  bio: string;
  experience_years: string;
  projects_completed: string;
  gpa: string;
  skills: {
    technical: SkillCategory[];
    soft: string[];
  };
}

export interface ContactData {
  intro: string;
  availability: string;
  response_time: string;
  preferred_contact: string;
}