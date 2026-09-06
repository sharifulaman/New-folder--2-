import { useEffect, useRef, useState, type ComponentType } from "react";
import { Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { navigation, socialLinks } from "../../data/navigation";
import { profile } from "../../data/profile";
import ThemeToggle from "../common/ThemeToggle";
import type { SocialIconKey } from "../../types";
import "./MobileHeader.css";

const SOCIAL_ICONS: Record<SocialIconKey, ComponentType<{ size?: number; "aria-hidden"?: boolean }>> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  twitter: FaXTwitter,
  mail: Mail,
};

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    document.body.style.overflow = "hidden";
    const drawer = drawerRef.current;
    const focusable = drawer?.querySelectorAll<HTMLElement>("a, button");
    focusable?.[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key === "Tab" && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="mobile-header">
      <a href="#home" className="mobile-brand">
        {profile.name}
      </a>
      <div className="mobile-header-actions">
        <ThemeToggle />
        <button
          type="button"
          id="mobile-menu-trigger"
          ref={triggerRef}
          className="mobile-menu-trigger"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-nav-drawer"
        className={`mobile-drawer${isOpen ? " is-open" : ""}`}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isOpen}
      >
        <nav aria-label="Section navigation">
          <ul className="mobile-drawer-nav">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mobile-drawer-social">
          {socialLinks.map((link) => {
            const Icon = SOCIAL_ICONS[link.icon];
            return (
              <li key={link.label}>
                <a href={link.href} aria-label={link.label}>
                  {Icon ? <Icon size={18} aria-hidden={true} /> : null}
                  <span>{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {isOpen ? (
        <button
          type="button"
          className="mobile-drawer-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
        />
      ) : null}
    </header>
  );
}
