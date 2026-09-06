export interface NavItem {
  label: string;
  href: string;
}

export type SocialIconKey = "linkedin" | "github" | "twitter" | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconKey;
}

export interface TechStackItem {
  label: string;
  icon: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  greeting: string;
  tagline: string;
  availability: string;
  email: string;
  responseTime: string;
  heroPhrases: string[];
}

export type StatIconKey = "briefcase" | "boxes" | "layers" | "shield-check";

export interface Stat {
  icon: StatIconKey;
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  paragraph: string;
  statValue: string;
  statLabel: string;
  images: AboutImage[];
}

export interface SkillsExperienceContent {
  eyebrow: string;
  overlayLines: string[];
  coreSkills: string[];
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  paragraph: string;
  email: string;
  availability: string;
  responseTime: string;
  interests: string[];
}

export interface FinalCtaContent {
  heading: string;
  subheading: string;
  buildLines: string[];
  whyWorkWithMe: string;
  benefits: string[];
}

export interface FooterContent {
  brand: string;
  copyright: string;
  tagline: string;
  sidebarQuote: string;
}

export interface ExpertiseItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface ProjectLinks {
  live?: string;
  github?: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;
  links: ProjectLinks;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  metrics: CaseStudyMetric[];
}

export interface ResultMetric {
  id: string;
  value: string;
  label: string;
  description: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}
