import { Award, GraduationCap, Languages, Leaf } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import useReveal from "../../hooks/useReveal";
import "./Qualifications.css";
const certifications = [["Cisco Networking Academy", "IT Essentials: PC Hardware and Software"], ["Industrial Training", "Advanced Network Device Configuration & Management"], ["DataCamp", "Python"], ["HackerRank", "SQL Advanced"]];
export default function Qualifications() { const revealRef = useReveal(); return <section id="education" className="qualifications section"><div className="container"><SectionHeading eyebrow="Education & Credentials" title="A broad engineering foundation, organized by discipline." /><div className="qualifications-grid reveal" ref={revealRef}>
  <article className="card qualification-card qualification-featured"><GraduationCap aria-hidden="true" /><p className="qualification-kicker">Education · 2025</p><h3>BSc in Computer Science & Engineering</h3><p>American International University-Bangladesh</p><strong>CGPA 3.56 / 4.00</strong></article>
  <article className="card qualification-card"><Award aria-hidden="true" /><p className="qualification-kicker">Certifications & Training</p><ul>{certifications.map(([provider, title]) => <li key={title}><strong>{title}</strong><span>{provider}</span></li>)}</ul></article>
  <article className="card qualification-card"><Leaf aria-hidden="true" /><p className="qualification-kicker">Community</p><h3>Organizer</h3><p>AIUB Environment Club</p><div className="qualification-divider" /><Languages aria-hidden="true" /><p className="qualification-kicker">Languages</p><p><strong>Bengali</strong> · Native</p><p><strong>English</strong> · Fluent</p></article>
</div></div></section>; }
