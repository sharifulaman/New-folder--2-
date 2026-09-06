import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  action?: ReactNode;
  align?: "start" | "center";
}

export default function SectionHeading({ eyebrow, title, action, align = "start" }: SectionHeadingProps) {
  return (
    <div className="section-head" style={{ justifyContent: align === "center" ? "center" : "space-between" }}>
      <div className="section-head-text">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      {action ? <div className="section-head-action">{action}</div> : null}
    </div>
  );
}
