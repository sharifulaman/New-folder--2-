import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import ProjectCard from "../project/ProjectCard";
import { projects } from "../../data/projects";
import useReveal from "../../hooks/useReveal";
import "./FeaturedProjects.css";

export default function FeaturedProjects() {
  const revealRef = useReveal();
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="featured-projects section">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work spanning web, mobile, and AI-driven products."
          action={
            <Button href="#" variant="dark" icon={ArrowUpRight}>
              Explore All Projects
            </Button>
          }
        />

        <div className="grid grid-4 reveal" ref={revealRef}>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
