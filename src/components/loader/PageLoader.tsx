import { useEffect, useState } from "react";
import "./PageLoader.css";

const verticalLines = Array.from({ length: 10 }, (_, index) => index * 100);
const horizontalLines = Array.from({ length: 9 }, (_, index) => index * 100);

export default function PageLoader({ onFinish }: { onFinish: () => void }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const exitTimer = window.setTimeout(() => setExiting(true), reduceMotion ? 300 : 1800);
    const finishTimer = window.setTimeout(onFinish, reduceMotion ? 500 : 2250);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onFinish]);

  return (
    <div className={`page-loader${exiting ? " is-exiting" : ""}`} role="status" aria-label="Loading portfolio">
      <svg viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          {[1, 2, 3, 4].map((id) => (
            <linearGradient key={id} id={`traceGradient${id}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.18" />
            </linearGradient>
          ))}
        </defs>

        <g className="loader-grid">
          {verticalLines.map((x) => <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="900" />)}
          {horizontalLines.map((y) => <line key={`h-${y}`} x1="0" y1={y} x2="900" y2={y} />)}
        </g>

        <g className="loader-browser" transform="translate(0 200)">
          <rect x="250" y="120" width="400" height="260" rx="8" className="browser-frame" />
          <path d="M258 120h384a8 8 0 0 1 8 8v22H250v-22a8 8 0 0 1 8-8Z" className="browser-top" />
          <circle cx="270" cy="135" r="3" className="browser-dot" />
          <circle cx="281" cy="135" r="3" className="browser-dot" />
          <circle cx="292" cy="135" r="3" className="browser-dot" />
          <text x="450" y="140" textAnchor="middle" className="loading-text">Loading portfolio...</text>
          <rect x="270" y="165" width="360" height="20" className="skeleton" />
          <rect x="270" y="198" width="200" height="15" className="skeleton" />
          <rect x="270" y="225" width="300" height="15" className="skeleton" />
          <rect x="270" y="252" width="360" height="78" className="skeleton" />
          <rect x="270" y="342" width="180" height="18" className="skeleton" />
        </g>

        <g className="loader-traces" transform="translate(0 200)">
          <path d="M100 300H250V120" />
          <path d="M800 200H650V380" />
          <path d="M400 520V380H250" />
          <path d="M500 50V120H650" />
        </g>
      </svg>
      <span className="visually-hidden">Loading portfolio</span>
    </div>
  );
}
