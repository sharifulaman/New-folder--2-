import type { AboutContent, ContactContent, FinalCtaContent, FooterContent, Profile, SkillsExperienceContent, Stat } from "../types";

export const profile: Profile = {
  name: "Md Shariful Aman", firstName: "Shariful", lastName: "Aman",
  title: "Graduate Software Engineer", greeting: "Hey there, I'm",
  tagline: "Building scalable applications, intelligent systems, and clean digital experiences.",
  availability: "Based in Dhaka, Bangladesh", email: "sharifulamann@gmail.com",
  responseTime: "Typically reply within 24 hours", heroPhrases: ["Mobile", "Web", "Data", "Learn"],
};

export const stats: Stat[] = [
  { icon: "briefcase", value: "2", label: "Professional Internships" },
  { icon: "boxes", value: "4", label: "CV-listed Projects" },
  { icon: "layers", value: "1", label: "Research Project" },
  { icon: "shield-check", value: "3.56 / 4.0", label: "AIUB CGPA" },
];

export const about: AboutContent = {
  eyebrow: "About", heading: "I turn complex problems into maintainable, user-focused software.",
  paragraph: "I'm a Computer Science & Engineering graduate from AIUB with hands-on experience in Flutter mobile development, full-stack web systems, backend development, databases, networking, and machine learning.",
  statValue: "BSc CSE", statLabel: "American International University-Bangladesh, graduated November 2025.",
  images: [
    { src: "/images/about/dashboard.svg", alt: "Dashboard interface preview" },
    { src: "/images/about/mobile.svg", alt: "Mobile application interface preview" },
    { src: "/images/about/editor.svg", alt: "Code editor preview" },
  ],
};

export const skillsExperience: SkillsExperienceContent = {
  eyebrow: "Skills & Experience", overlayLines: ["Build.", "Learn.", "Improve."],
  coreSkills: ["Flutter", "Dart", "Next.js", "NestJS", "C#", "Python", "SQL", "PostgreSQL", "REST APIs", "Git"],
};

export const contact: ContactContent = {
  eyebrow: "Contact", heading: "Let's build something useful.",
  paragraph: "I'm open to graduate software engineering roles, product collaborations, and research conversations.",
  email: "sharifulamann@gmail.com", availability: "Available", responseTime: "Typically reply within 24 hours",
  interests: ["Full-time role", "Contract / freelance", "Product collaboration", "Research collaboration", "Something else"],
};

export const finalCta: FinalCtaContent = {
  heading: "Have an idea, product, or technical challenge?", subheading: "Let's turn it into reliable software.",
  buildLines: ["Build.", "Ship.", "Improve."], whyWorkWithMe: "What I bring",
  benefits: ["Flutter Development", "Full-Stack Thinking", "REST APIs", "Database Design", "Machine Learning", "Responsive UI", "Collaborative Delivery"],
};

export const footer: FooterContent = {
  brand: "Shariful Aman", copyright: `© ${new Date().getFullYear()} Md Shariful Aman. All rights reserved.`,
  tagline: "Built with curiosity, care, and clean code.", sidebarQuote: "Building useful software, one problem at a time.",
};
