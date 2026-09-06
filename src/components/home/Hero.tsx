import { ArrowUpRight, Download } from "lucide-react";
import Button from "../common/Button";
import { profile } from "../../data/profile";
import useReveal from "../../hooks/useReveal";
import "./Hero.css";

export default function Hero() {
  const revealRef = useReveal();

  return (
    <section id="home" className="hero section" aria-label="Introduction">
      <div className="container hero-grid">
        <div className="hero-left reveal" ref={revealRef}>
          <span className="eyebrow">{profile.greeting}</span>
          <h1 className="hero-title display-title">
            {profile.firstName}
            <br />
            {profile.lastName}
          </h1>
          <p className="hero-tagline">{profile.tagline}</p>

          <p className="hero-availability">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <div className="hero-actions">
            <Button href="#projects" variant="primary" icon={ArrowUpRight}>
              View My Work
            </Button>
            <Button href="/resume/shariful-aman-resume.pdf" variant="secondary" icon={Download}>
              Download Resume
            </Button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-portrait-frame">
            <img
              src="/images/profile/shariful.svg"
              alt="Portrait of Shariful Aman, Software Engineer"
              className="hero-portrait"
              width="900"
              height="1100"
              loading="eager"
            />
            <ul className="hero-phrases" aria-hidden="true">
              {profile.heroPhrases.map((phrase) => (
                <li key={phrase}>{phrase}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
