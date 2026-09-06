import type { CaseStudy } from "../types";

export const caseStudies: CaseStudy[] = [
  {
    id: "carecore-ai",
    title: "CareCoreAI — AI for Better Healthcare",
    description:
      "An AI-powered platform to assist healthcare professionals with clinical decision support and patient data analysis.",
    challenge: "Fragmented patient data and slow analysis workflows.",
    solution: "Built an integrated platform with AI models and real-time analytics.",
    image: "/images/case-studies/carecore-ai-dashboard.svg",
    metrics: [
      { value: "35%", label: "Faster Analysis" },
      { value: "99.9%", label: "Reliability" },
      { value: "2x", label: "Productivity" },
    ],
  },
  {
    id: "texora360",
    title: "Texora360 — All-in-One Business Platform",
    description:
      "A unified platform for business operations, team collaboration, and productivity management.",
    challenge: "Multiple tools and disconnected workflows across teams.",
    solution: "Built a centralized platform with modules for projects, HR, and finance.",
    image: "/images/case-studies/texora360-dashboard.svg",
    metrics: [
      { value: "60%", label: "Time Saved" },
      { value: "3x", label: "Team Efficiency" },
      { value: "10K+", label: "Active Users" },
    ],
  },
];
