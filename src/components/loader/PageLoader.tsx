import { useEffect, useState } from "react";
import "./PageLoader.css";

const RING_RADIUS = 44;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const DURATION_COUNT = 1400;
const HOLD_AFTER_COUNT = 250;
const HELLO_REVEAL = 700; // keep in sync with .loader-hello animation-duration in PageLoader.css
const HOLD_AFTER_HELLO = 500;
const EXIT_DURATION = 700; // keep in sync with .loader-overlay opacity transition in PageLoader.css

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

type Phase = "counting" | "hello" | "exiting";

export default function PageLoader({ onFinish }: { onFinish: () => void }) {
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState<Phase>("counting");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timers: ReturnType<typeof setTimeout>[] = [];
    const after = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));
    let raf = 0;

    if (prefersReducedMotion) {
      setPercent(100);
      after(() => setPhase("hello"), 100);
      after(() => setPhase("exiting"), 300);
      after(onFinish, 550);
    } else {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION_COUNT);
        setPercent(Math.round(easeOutCubic(t) * 100));
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          after(() => setPhase("hello"), HOLD_AFTER_COUNT);
          after(() => setPhase("exiting"), HOLD_AFTER_COUNT + HELLO_REVEAL + HOLD_AFTER_HELLO);
          after(onFinish, HOLD_AFTER_COUNT + HELLO_REVEAL + HOLD_AFTER_HELLO + EXIT_DURATION);
        }
      };
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dashoffset = RING_CIRCUMFERENCE * (1 - percent / 100);

  return (
    <div className={`loader-overlay${phase === "exiting" ? " is-exiting" : ""}`} aria-hidden="true">
      <div className="loader-content">
        <div className={`loader-stage${phase !== "counting" ? " is-hidden" : ""}`}>
          <span className="loader-percent display-title">{percent}%</span>
          <svg className="loader-ring" viewBox="0 0 100 100" width="88" height="88">
            <circle className="loader-ring-track" cx="50" cy="50" r={RING_RADIUS} />
            <circle
              className="loader-ring-progress"
              cx="50"
              cy="50"
              r={RING_RADIUS}
              style={{ strokeDasharray: RING_CIRCUMFERENCE, strokeDashoffset: dashoffset }}
            />
          </svg>
        </div>

        <div className={`loader-stage${phase === "counting" ? " is-hidden" : ""}`}>
          <span className="loader-glow" />
          <span className="loader-hello">hello</span>
        </div>

        <span className="loader-dot" />
      </div>
    </div>
  );
}
