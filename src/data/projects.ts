import type { Project } from "../types";
import careCoreLogo from "../assets/carecore.png";
import greenScanLogo from "../assets/greenscan.png";
import texoraLogo from "../assets/texora.png";
import homeRentalImage from "../assets/projects/home-rental.jpg";
import parcelDeliveryImage from "../assets/projects/parcel-delivery.jpg";
import superShopImage from "../assets/projects/super-shop.jpg";
import thyroidResearchImage from "../assets/projects/thyroid-research.jpg";

export const projects: Project[] = [
  { id: "greenscan", title: "GreenScan", year: "2026", category: "Mobile · Sustainability", description: "A Flutter application for real-time environmental and sustainability data tracking, developed at Software Lighthouse.", image: greenScanLogo, technologies: ["Flutter", "Dart", "REST API", "State Management"], featured: true, links: { live: "https://greenscan.info" } },
  { id: "carecore-ai", title: "CareCoreAI", year: "2026", category: "Healthcare · Enterprise Software", description: "A healthcare platform focused on compliance, quality workflows, status management, and responsive user experiences.", image: careCoreLogo, technologies: ["Responsive UI", "Workflow Design", "Enterprise Software"], featured: true, links: {} },
  { id: "texora360", title: "Texora360", year: "2026", category: "Construction · Project Management", description: "A project-management application with cost sheets, cost details, trim cards, reusable components, and structured workflows.", image: texoraLogo, technologies: ["Reusable Components", "Routing", "Responsive UI"], featured: true, links: {} },
  { id: "home-rental", title: "Home Rental", year: "2025", category: "Full-Stack Web Application", description: "A platform for registering homes and apartments and discovering available rental properties.", image: homeRentalImage, technologies: ["Next.js", "NestJS", "JavaScript"], featured: true, links: { github: "https://github.com/sharifulaman/Home_Rental" } },
  { id: "thyroid-research", title: "Thyroid Disorder Prediction", year: "2025", category: "Machine Learning · Healthcare AI", description: "Research comparing FT-Transformer, SVM, and Random Forest using 6,510 structured clinical records.", image: thyroidResearchImage, technologies: ["Python", "FT-Transformer", "SVM", "Random Forest", "SMOTE"], featured: true, links: {} },
  { id: "super-shop", title: "Super Shop", year: "2025", category: "Business Management Software", description: "A C# solution for supermarket inventory, billing, reporting, and daily operations.", image: superShopImage, technologies: ["C#", "Inventory", "Billing", "Reporting"], featured: true, links: { github: "https://github.com/sharifulaman/Super_Shop" } },
  { id: "parcel-delivery-dbms", title: "Parcel Delivery DBMS", year: "2025", category: "Database Management System", description: "A SQL database system for parcel operations, delivery tracking, and status updates.", image: parcelDeliveryImage, technologies: ["SQL", "DBMS", "Parcel Tracking"], featured: true, links: { github: "https://github.com/sharifulaman/Parcel_Delivery_DBMS" } },
];
