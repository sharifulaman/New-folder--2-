import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import { testimonials } from "../../data/testimonials";
import useReveal from "../../hooks/useReveal";
import "./Testimonials.css";

export default function Testimonials() {
  const revealRef = useReveal();
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  function goTo(nextIndex: number) {
    setIndex((nextIndex + testimonials.length) % testimonials.length);
  }

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say about working with me."
          action={
            <Button href="#" variant="dark" icon={ArrowUpRight}>
              Explore Reviews
            </Button>
          }
        />

        <div
          className="testimonial-card card reveal"
          ref={revealRef}
          role="group"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div className="testimonial-person">
            <img src={current.avatar} alt="" width="56" height="56" className="testimonial-avatar" />
            <div>
              <p className="testimonial-name">{current.name}</p>
              <p className="testimonial-role text-muted">
                {current.role}, {current.company}
              </p>
              <div className="testimonial-rating" aria-label={`${current.rating} out of 5 stars`}>
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
            </div>
          </div>

          <blockquote className="testimonial-quote">“{current.quote}”</blockquote>

          <div className="testimonial-controls">
            <button type="button" onClick={() => goTo(index - 1)} aria-label="Previous testimonial">
              <ArrowLeft size={16} />
            </button>
            <button type="button" onClick={() => goTo(index + 1)} aria-label="Next testimonial">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
