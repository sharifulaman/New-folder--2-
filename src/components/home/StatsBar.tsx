import type { ComponentType } from "react";
import { Boxes, Briefcase, Layers, ShieldCheck } from "lucide-react";
import { stats } from "../../data/profile";
import type { StatIconKey } from "../../types";
import "./StatsBar.css";

const ICONS: Record<StatIconKey, ComponentType<{ size?: number }>> = {
  briefcase: Briefcase,
  boxes: Boxes,
  layers: Layers,
  "shield-check": ShieldCheck,
};

export default function StatsBar() {
  return (
    <section className="stats-bar section" aria-label="Highlights">
      <div className="container grid grid-4 stats-grid">
        {stats.map((stat) => {
          const Icon = ICONS[stat.icon];
          return (
            <div className="stat-item" key={stat.label}>
              <span className="stat-icon" aria-hidden="true">
                {Icon ? <Icon size={18} /> : null}
              </span>
              <div>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label text-muted">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
