import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { results } from "../../data/metrics";
import useReveal from "../../hooks/useReveal";
import "./ResultsMetrics.css";

export default function ResultsMetrics() {
  const revealRef = useReveal();

  return (
    <section id="results" className="results-metrics section">
      <div className="container">
        <SectionHeading eyebrow="Results & Metrics" title="Engineering outcomes, not just deliverables." />

        <div className="grid grid-3 results-grid reveal" ref={revealRef}>
          {results.map((item) => (
            <article className="result-card" key={item.id}>
              <button type="button" className="result-card-arrow" aria-label={`View more about ${item.label}`}>
                <ArrowUpRight size={16} />
              </button>
              <p className="result-value display-title">{item.value}</p>
              <p className="result-label">{item.label}</p>
              <p className="result-description">{item.description}</p>
              <p className="result-category">{item.category}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
