import {
  Code2,
  Database,
  Server,
  Settings2,
  Share2,
  Smartphone,
} from "lucide-react";
import type { ComponentType } from "react";
import SectionHeading from "../common/SectionHeading";
import TechTag from "../common/TechTag";
import { expertise } from "../../data/expertise";
import useReveal from "../../hooks/useReveal";
import "./ExpertiseGrid.css";

const ICONS: Record<string, ComponentType<{ size?: number }>> = {
  "code-2": Code2,
  "server-cog": Server,
  smartphone: Smartphone,
  "share-2": Share2,
  database: Database,
  "settings-2": Settings2,
};

export default function ExpertiseGrid() {
  const revealRef = useReveal();

  return (
    <section id="expertise" className="expertise section">
      <div className="container">
        <SectionHeading
          eyebrow="Core Expertise"
          title="Engineering skills that turn ideas into reliable products."
        />

        <div className="grid grid-3 expertise-grid reveal" ref={revealRef}>
          {expertise.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <article className="card expertise-card" key={item.id}>
                <span className="expertise-icon" aria-hidden="true">
                  {Icon ? <Icon size={20} /> : null}
                </span>
                <h3 className="expertise-title">{item.title}</h3>
                <p className="text-muted expertise-description">{item.description}</p>
                <ul className="expertise-tags">
                  {item.technologies.map((tech) => (
                    <li key={tech}>
                      <TechTag>{tech}</TechTag>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
