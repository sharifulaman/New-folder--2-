import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import { caseStudies } from "../../data/caseStudies";
import useReveal from "../../hooks/useReveal";
import type { CaseStudy } from "../../types";
import "./CaseStudies.css";

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const revealRef = useReveal();
  return (
    <article className="case-study-card card reveal" ref={revealRef}>
      <div className="case-study-content">
        <h3 className="case-study-title">{study.title}</h3>
        <p className="case-study-description">{study.description}</p>

        <div className="case-study-cs">
          <div>
            <p className="case-study-label">Challenge</p>
            <p className="case-study-copy">{study.challenge}</p>
          </div>
          <div>
            <p className="case-study-label">Solution</p>
            <p className="case-study-copy">{study.solution}</p>
          </div>
        </div>
      </div>

      <div className="case-study-metrics">
        {study.metrics.map((metric) => (
          <div key={metric.label}>
            <p className="case-study-metric-value display-title">{metric.value}</p>
            <p className="case-study-metric-label">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="case-study-image-frame">
        <img src={study.image} alt={`${study.title} preview`} loading="lazy" />
      </div>
    </article>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="case-studies section">
      <div className="container">
        <SectionHeading
          eyebrow="Case Studies"
          title="From problem statement to measurable engineering impact."
          action={
            <Button href="#" variant="dark" icon={ArrowUpRight}>
              Explore Case Studies
            </Button>
          }
        />

        <div className="case-studies-list">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
