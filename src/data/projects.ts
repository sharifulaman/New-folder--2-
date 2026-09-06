import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "carecore-ai",
    title: "CareCoreAI",
    year: "2026",
    category: "Healthcare AI Platform",
    description:
      "An AI-powered platform that assists healthcare professionals with clinical decision support and patient data analysis.",
    image: "/images/projects/carecore-ai.svg",
    technologies: ["Flutter", "FastAPI", "PostgreSQL"],
    featured: true,
    links: { live: "#", github: "#" },
  },
  {
    id: "texora360",
    title: "Texora360",
    year: "2026",
    category: "Business Productivity Platform",
    description:
      "A unified platform for business operations, team collaboration, and productivity management.",
    image: "/images/projects/texora360.svg",
    technologies: ["React", "Node.js", "PostgreSQL"],
    featured: true,
    links: { live: "#", github: "#" },
  },
  {
    id: "portfolio-os",
    title: "Portfolio OS",
    year: "2025",
    category: "Developer Portfolio System",
    description: "A configurable, data-driven portfolio system for engineers and designers.",
    image: "/images/projects/portfolio-os.svg",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    featured: true,
    links: { live: "#", github: "#" },
  },
  {
    id: "analytics-hub",
    title: "Analytics Hub",
    year: "2025",
    category: "Data Analytics Dashboard",
    description: "A real-time analytics dashboard for tracking product and business metrics.",
    image: "/images/projects/analytics-hub.svg",
    technologies: ["React", "Python", "PostgreSQL"],
    featured: true,
    links: { live: "#", github: "#" },
  },
];
