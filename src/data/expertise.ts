import type { ExpertiseItem } from "../types";
export const expertise: ExpertiseItem[] = [
  { id: "mobile", icon: "smartphone", title: "Mobile Development", description: "Responsive cross-platform applications and maintainable UI.", technologies: ["Flutter", "Dart", "Android Studio"] },
  { id: "web", icon: "code-2", title: "Full-Stack Web", description: "Frontend and backend systems built around clear user flows.", technologies: ["Next.js", "NestJS", "Node.js"] },
  { id: "backend", icon: "server-cog", title: "Backend & APIs", description: "API integration and server-side application development.", technologies: ["REST API", "ASP.NET MVC", "PHP"] },
  { id: "database", icon: "database", title: "Database Development", description: "Relational data modeling, queries, and database-driven systems.", technologies: ["SQL", "MySQL", "PostgreSQL", "PL/SQL"] },
  { id: "machine-learning", icon: "share-2", title: "Machine Learning", description: "Structured-data preprocessing, modeling, and evaluation.", technologies: ["Python", "FT-Transformer", "SVM", "SMOTE"] },
  { id: "networking", icon: "settings-2", title: "Networking", description: "Infrastructure configuration, monitoring, and troubleshooting.", technologies: ["MikroTik", "VLANs", "Routing"] },
];
