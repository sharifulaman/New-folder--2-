import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import TechTag from "../common/TechTag";
import type { Project } from "../../types";
import "./ProjectCard.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card card">
      <div className="project-card-head">
        <div>
          <h3 className="project-card-title">
            {project.title} <span className="text-muted">— {project.year}</span>
          </h3>
          <p className="project-card-category text-muted">{project.category}</p>
        </div>
        <div className="project-card-links">
          {project.links?.github ? (
            <a href={project.links.github} aria-label={`${project.title} source code on GitHub`}>
              <FaGithub size={16} />
            </a>
          ) : null}
          {project.links?.live ? (
            <a href={project.links.live} aria-label={`${project.title} live demo`}>
              <ArrowUpRight size={16} />
            </a>
          ) : null}
        </div>
      </div>

      <div className="project-card-image-frame">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          className="project-card-image"
        />
      </div>

      <ul className="project-card-tags">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <TechTag>{tech}</TechTag>
          </li>
        ))}
      </ul>
    </article>
  );
}
