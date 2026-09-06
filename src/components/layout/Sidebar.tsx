import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { navigation, socialLinks, techStack } from "../../data/navigation";
import { footer, profile } from "../../data/profile";
import useActiveSection from "../../hooks/useActiveSection";
import ThemeToggle from "../common/ThemeToggle";
import type { SocialIconKey } from "../../types";
import "./Sidebar.css";

const SOCIAL_ICONS: Record<SocialIconKey, ComponentType<{ size?: number; "aria-hidden"?: boolean }>> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  twitter: FaXTwitter,
  mail: Mail,
};

export default function Sidebar() {
  const sectionIds = navigation.map((item) => item.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);

  return (
    <aside className="sidebar" aria-label="Primary">
      <div className="sidebar-top">
        <img
          className="sidebar-avatar"
          src="/images/profile/shariful.svg"
          alt=""
          width="56"
          height="56"
        />
        <p className="sidebar-role">{profile.title}</p>
        <p className="sidebar-name">{profile.name}</p>
        <ThemeToggle />
      </div>

      <nav className="sidebar-nav" aria-label="Section navigation">
        <ul>
          {navigation.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = id === activeId;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`sidebar-link${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className="sidebar-link-indicator" aria-hidden="true" />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-bottom">
        <p className="sidebar-label">Tech Stack</p>
        <ul className="sidebar-tech" aria-label="Core technologies">
          {techStack.slice(0, 6).map((tech) => (
            <li key={tech.label} title={tech.label}>
              <span aria-hidden="true">{tech.label.slice(0, 2)}</span>
              <span className="visually-hidden">{tech.label}</span>
            </li>
          ))}
        </ul>

        <p className="sidebar-label">Connect</p>
        <ul className="sidebar-social">
          {socialLinks.map((link) => {
            const Icon = SOCIAL_ICONS[link.icon];
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {Icon ? <Icon size={16} aria-hidden={true} /> : null}
                </a>
              </li>
            );
          })}
        </ul>

        <p className="sidebar-quote">{footer.sidebarQuote}</p>
      </div>
    </aside>
  );
}
