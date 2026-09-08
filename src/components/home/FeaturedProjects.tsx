import SectionHeading from "../common/SectionHeading";
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
          title="Verified work across mobile, full-stack, machine learning, and databases."
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
