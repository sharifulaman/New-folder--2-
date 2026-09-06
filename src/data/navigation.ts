import type { NavItem, SocialLink, TechStackItem } from "../types";

export const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/sharifulaman", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/sharifulaman", icon: "github" },
  { label: "Twitter / X", href: "https://x.com/sharifulaman", icon: "twitter" },
  { label: "Email", href: "mailto:hello@sharifulaman.dev", icon: "mail" },
];

export const techStack: TechStackItem[] = [
  { label: "Flutter", icon: "flutter" },
  { label: "Dart", icon: "dart" },
  { label: "Python", icon: "python" },
  { label: "FastAPI", icon: "fastapi" },
  { label: "React", icon: "react" },
  { label: "Node.js", icon: "node" },
  { label: "PostgreSQL", icon: "database" },
  { label: "Docker", icon: "docker" },
];
