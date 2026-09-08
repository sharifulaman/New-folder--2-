import type { NavItem, SocialLink, TechStackItem } from "../types";
export const navigation: NavItem[] = [
  { label: "Home", href: "#home" }, { label: "About", href: "#about" },
  { label: "Skills", href: "#expertise" }, { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" }, { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" }, { label: "Contact", href: "#contact" },
];
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/sharifulamann", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/sharifulaman", icon: "github" },
  { label: "Email", href: "mailto:sharifulamann@gmail.com", icon: "mail" },
];
export const techStack: TechStackItem[] = ["Flutter", "Dart", "Python", "Next.js", "NestJS", "C#", "PostgreSQL", "SQL"].map((label) => ({ label, icon: label.toLowerCase() }));
