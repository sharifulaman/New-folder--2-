import { skillsExperience } from "../../data/profile";
import { experience } from "../../data/experience";
import useReveal from "../../hooks/useReveal";
import "./SkillsExperience.css";

export default function SkillsExperience() {
  const revealRef = useReveal();

  return (
    <section id="experience" className="skills-experience section">
      <div className="container skills-grid reveal" ref={revealRef}>
        <div className="skills-image-frame">
          <img
            src="/images/profile/shariful-workspace.svg"
            alt="Shariful Aman working at a developer workstation"
            loading="lazy"
          />
          <div className="skills-image-overlay">
            {skillsExperience.overlayLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>

        <div className="skills-details">
          <div>
            <p className="skills-heading">Core Skills</p>
            <ul className="skills-list">
              {skillsExperience.coreSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="skills-heading">Experience</p>
            <ul className="experience-list">
              {experience.map((role) => (
                <li key={role.id} className="experience-item">
                  <div>
                    <p className="experience-role">{role.role}</p>
                    <p className="text-muted experience-company">{role.company}</p>
                  </div>
                  <span className="experience-period text-muted">{role.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
