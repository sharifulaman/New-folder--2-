import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { contact } from "../../data/profile";
import useReveal from "../../hooks/useReveal";
import "./Contact.css";

interface FormValues {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

type SubmitStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: FormValues = {
  name: "",
  email: "",
  company: "",
  interest: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.interest) errors.interest = "Please select what you're interested in.";
  if (!values.message.trim()) errors.message = "Please tell me a little about your project.";
  return errors;
}

export default function Contact() {
  const revealRef = useReveal();
  const [values, setValues] = useState<FormValues>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      // Replace with a real submission endpoint (e.g. Formspree, an API route, etc).
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => (Math.random() > 0.05 ? resolve() : reject(new Error("send failed"))), 900);
      });
      setStatus("success");
      setValues(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container contact-grid reveal" ref={revealRef}>
        <div className="contact-intro">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2 className="section-title contact-heading">{contact.heading}</h2>
          <p className="text-secondary contact-paragraph">{contact.paragraph}</p>

          <div className="contact-card">
            <img src="/images/profile/shariful.svg" alt="" width="44" height="44" className="contact-avatar" />
            <div>
              <a href={`mailto:${contact.email}`} className="contact-email">
                {contact.email}
              </a>
              <p className="contact-availability">
                <span className="status-dot" aria-hidden="true" />
                {contact.availability}
              </p>
            </div>
            <p className="contact-response text-muted">{contact.responseTime}</p>
          </div>
        </div>

        <form className="contact-form" noValidate onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={values.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                required
              />
              {errors.name ? (
                <p className="form-error" id="name-error">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                required
              />
              {errors.email ? (
                <p className="form-error" id="email-error">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="company">Company / Website</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="https://"
                value={values.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="interest">What are you interested in?</label>
              <select
                id="interest"
                name="interest"
                value={values.interest}
                onChange={handleChange}
                aria-invalid={Boolean(errors.interest)}
                aria-describedby={errors.interest ? "interest-error" : undefined}
                required
              >
                <option value="">Select an option</option>
                {contact.interests.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
              {errors.interest ? (
                <p className="form-error" id="interest-error">
                  {errors.interest}
                </p>
              ) : null}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Tell me about your project</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Share your goals, timeline, and any details."
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              required
            />
            {errors.message ? (
              <p className="form-error" id="message-error">
                {errors.message}
              </p>
            ) : null}
          </div>

          <button type="submit" className="btn btn-primary contact-submit" disabled={status === "loading"}>
            <span>{status === "loading" ? "Sending…" : "Send Message"}</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>

          <p role="status" aria-live="polite" className="form-status">
            {status === "success" ? "Thanks — your message has been sent. I'll be in touch soon." : null}
            {status === "error" ? "Something went wrong sending your message. Please try again or email me directly." : null}
          </p>
        </form>
      </div>
    </section>
  );
}
