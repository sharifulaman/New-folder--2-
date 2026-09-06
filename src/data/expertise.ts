import type { ExpertiseItem } from "../types";

export const expertise: ExpertiseItem[] = [
  {
    id: "frontend",
    icon: "code-2",
    title: "Frontend Development",
    description: "Modern, responsive and accessible user interfaces.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    icon: "server-cog",
    title: "Backend Development",
    description: "Robust APIs and scalable server applications.",
    technologies: ["Python", "FastAPI", "Node.js"],
  },
  {
    id: "mobile",
    icon: "smartphone",
    title: "Mobile Development",
    description: "Cross-platform mobile applications with native performance.",
    technologies: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: "api-design",
    icon: "share-2",
    title: "API & System Design",
    description: "Scalable systems with clean architecture and best practices.",
    technologies: ["REST API", "GraphQL", "Microservices"],
  },
  {
    id: "database-cloud",
    icon: "database",
    title: "Database & Cloud",
    description: "Data modeling, cloud infrastructure and optimized queries.",
    technologies: ["PostgreSQL", "MongoDB", "AWS"],
  },
  {
    id: "devops",
    icon: "settings-2",
    title: "DevOps & CI/CD",
    description: "Automated deployment and reliable delivery pipelines.",
    technologies: ["Docker", "GitHub Actions", "Linux"],
  },
];
