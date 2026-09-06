import { Moon, Sun } from "lucide-react";
import useTheme from "../../hooks/useTheme";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="theme-toggle"
      onClick={toggleTheme}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb">
          {isLight ? <Sun size={12} aria-hidden="true" /> : <Moon size={12} aria-hidden="true" />}
        </span>
      </span>
    </button>
  );
}
