import { finalCta } from "../../data/profile";
import useReveal from "../../hooks/useReveal";
import "./FinalCTA.css";

export default function FinalCTA() {
  const revealRef = useReveal();

  return (
    <section className="final-cta section" aria-label="Final call to action">
      <div className="container">
        <div className="final-cta-heading reveal" ref={revealRef}>
          <h2 className="section-title">{finalCta.heading}</h2>
          <p className="text-secondary">{finalCta.subheading}</p>
        </div>

        <div className="final-cta-grid">
          <div className="final-cta-image-frame">
            <img src="/images/final-cta/build-ship-improve.svg" alt="" loading="lazy" />
            <div className="final-cta-image-overlay">
              {finalCta.buildLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </div>

          <div className="final-cta-benefits">
            <p className="final-cta-why">{finalCta.whyWorkWithMe}</p>
            <ul>
              {finalCta.benefits.map((benefit) => (
                <li key={benefit} className="tag">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
