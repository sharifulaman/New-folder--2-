import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

function svgPlaceholder({ w, h, label, sub = "", dark = "#0b0b0b", line = "#2b2b2b", accent = "#f5f5f5" }) {
  const cols = Math.max(4, Math.round(w / 60));
  const rows = Math.max(4, Math.round(h / 60));
  let lines = "";
  for (let i = 1; i < cols; i++) {
    const x = (w / cols) * i;
    lines += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="${line}" stroke-width="1"/>`;
  }
  for (let i = 1; i < rows; i++) {
    const y = (h / rows) * i;
    lines += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="${line}" stroke-width="1"/>`;
  }
  const r = Math.min(w, h) * 0.14;
  const cx = w / 2;
  const cy = h / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <rect width="${w}" height="${h}" fill="${dark}"/>
  <g opacity="0.5">${lines}</g>
  <circle cx="${cx}" cy="${cy - r * 0.3}" r="${r}" fill="none" stroke="${accent}" stroke-width="2" opacity="0.85"/>
  <text x="${cx}" y="${cy + r * 1.5}" text-anchor="middle" font-family="Inter, sans-serif" font-size="${Math.max(12, Math.round(w / 26))}" font-weight="700" fill="${accent}" letter-spacing="1">${label}</text>
  ${sub ? `<text x="${cx}" y="${cy + r * 1.5 + Math.max(16, Math.round(w / 20))}" text-anchor="middle" font-family="Inter, sans-serif" font-size="${Math.max(10, Math.round(w / 40))}" fill="#8a8a8a">${sub}</text>` : ""}
  <rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" fill="none" stroke="${line}" stroke-width="1"/>
</svg>`;
}

function write(path, opts) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, svgPlaceholder(opts), "utf8");
  console.log("wrote", path);
}

const base = "public/images";

// Profile
write(`${base}/profile/shariful.svg`, { w: 900, h: 1100, label: "SHARIFUL AMAN", sub: "Portrait placeholder — replace with real photo" });
write(`${base}/profile/shariful-workspace.svg`, { w: 1200, h: 900, label: "WORKSPACE", sub: "Editorial photo placeholder" });

// About collage
write(`${base}/about/dashboard.svg`, { w: 900, h: 700, label: "DASHBOARD UI" });
write(`${base}/about/mobile.svg`, { w: 500, h: 700, label: "MOBILE UI" });
write(`${base}/about/editor.svg`, { w: 500, h: 700, label: "CODE EDITOR" });

// Projects
write(`${base}/projects/carecore-ai.svg`, { w: 900, h: 600, label: "CARECOREAI", sub: "Healthcare AI Platform" });
write(`${base}/projects/texora360.svg`, { w: 900, h: 600, label: "TEXORA360", sub: "Business Productivity Platform" });
write(`${base}/projects/portfolio-os.svg`, { w: 900, h: 600, label: "PORTFOLIO OS", sub: "Developer Portfolio System" });
write(`${base}/projects/analytics-hub.svg`, { w: 900, h: 600, label: "ANALYTICS HUB", sub: "Data Analytics Dashboard" });

// Case studies
write(`${base}/case-studies/carecore-ai-dashboard.svg`, { w: 700, h: 560, label: "CARECOREAI", sub: "Dashboard preview" });
write(`${base}/case-studies/texora360-dashboard.svg`, { w: 700, h: 560, label: "TEXORA360", sub: "Dashboard preview" });

// Testimonials (square avatars)
write(`${base}/testimonials/david-chen.svg`, { w: 200, h: 200, label: "DC" });
write(`${base}/testimonials/amelia-ross.svg`, { w: 200, h: 200, label: "AR" });
write(`${base}/testimonials/marcus-lee.svg`, { w: 200, h: 200, label: "ML" });

// Final CTA
write(`${base}/final-cta/build-ship-improve.svg`, { w: 900, h: 620, label: "BUILD · SHIP · IMPROVE" });
write(`${base}/final-cta/why-work-with-me.svg`, { w: 700, h: 620, label: "WHY WORK WITH ME" });

console.log("Done.");
