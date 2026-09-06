import type {
  AboutContent,
  ContactContent,
  FinalCtaContent,
  FooterContent,
  Profile,
  SkillsExperienceContent,
  Stat,
} from "../types";

export const profile: Profile = {
  name: "Shariful Aman",
  firstName: "Shariful",
  lastName: "Aman",
  title: "Software Engineer",
  greeting: "Hey there, I'm",
  tagline:
    "Building scalable products, clean interfaces, and reliable software with modern engineering practices.",
  availability: "Available for new opportunities",
  email: "hello@sharifulaman.dev",
  responseTime: "Typically reply within 24 hours",
  heroPhrases: ["Code", "Build", "Solve", "Repeat"],
};

export const stats: Stat[] = [
  { icon: "briefcase", value: "4+", label: "Years Experience" },
  { icon: "boxes", value: "20+", label: "Projects" },
  { icon: "layers", value: "10+", label: "Technologies" },
  { icon: "shield-check", value: "Production Ready", label: "Real World Impact" },
];

export const about: AboutContent = {
  eyebrow: "About",
  heading:
    "I build thoughtful software that turns complex problems into simple, reliable experiences.",
  paragraph:
    "I'm a full-stack developer who enjoys turning ideas into real products. I work across frontend, backend, mobile, and cloud — focusing on clean architecture, performance, and user experience that scales.",
  statValue: "20+",
  statLabel: "Projects shipped across web, mobile, and backend systems.",
  images: [
    { src: "/images/about/dashboard.svg", alt: "Dashboard interface preview" },
    { src: "/images/about/mobile.svg", alt: "Mobile application interface preview" },
    { src: "/images/about/editor.svg", alt: "Code editor preview" },
  ],
};

export const skillsExperience: SkillsExperienceContent = {
  eyebrow: "Skills & Experience",
  overlayLines: ["Turning", "Ideas Into", "Real Products."],
  coreSkills: ["Flutter", "Dart", "Python", "FastAPI", "React", "Node.js", "PostgreSQL", "Docker"],
};

export const contact: ContactContent = {
  eyebrow: "Contact",
  heading: "Let's build something great.",
  paragraph:
    "I'm always open to discussing new opportunities, interesting projects, or technical challenges.",
  email: "hello@sharifulaman.dev",
  availability: "Available",
  responseTime: "Typically reply within 24 hours",
  interests: [
    "Full-time role",
    "Contract / freelance",
    "Product collaboration",
    "Technical consulting",
    "Something else",
  ],
};

export const finalCta: FinalCtaContent = {
  heading: "Have an idea, product, or technical challenge?",
  subheading: "Let's turn it into reliable software.",
  buildLines: ["Build.", "Ship.", "Improve."],
  whyWorkWithMe: "Why work with me?",
  benefits: [
    "Clean Architecture",
    "Scalable Systems",
    "Product Thinking",
    "Test Driven",
    "Performance Focused",
    "Reliable Delivery",
    "Easy to Work With",
  ],
};

export const footer: FooterContent = {
  brand: "Shariful Aman",
  copyright: `© ${new Date().getFullYear()} Shariful Aman. All rights reserved.`,
  tagline: "Built with dedication | Let's create something amazing.",
  sidebarQuote: "“Good software builds a better tomorrow.”",
};
