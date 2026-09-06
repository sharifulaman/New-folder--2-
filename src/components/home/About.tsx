import { about } from "../../data/profile";
import useReveal from "../../hooks/useReveal";
import "./About.css";

export default function About() {
  const revealRef = useReveal();
  const [primary, secondaryTop, secondaryBottom] = about.images;

  return (
    <section id="about" className="about section">
      <div className="container about-grid reveal" ref={revealRef}>
        <div className="about-content">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="section-title about-heading">{about.heading}</h2>
          <p className="about-paragraph text-secondary">{about.paragraph}</p>

          <div className="about-stat">
            <span className="about-stat-value display-title">{about.statValue}</span>
            <p className="text-muted">{about.statLabel}</p>
          </div>
        </div>

        <div className="about-collage" role="img" aria-label="Collage of dashboard, mobile, and code editor interfaces built by Shariful Aman">
          <img src={primary.src} alt="" className="about-collage-primary" loading="lazy" />
          <div className="about-collage-secondary">
            <img src={secondaryTop.src} alt="" loading="lazy" />
            <img src={secondaryBottom.src} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
