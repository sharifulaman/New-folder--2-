import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import Footer from "./Footer";
import "./AppShell.css";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Sidebar />
      <MobileHeader />
      <main id="main-content" className="app-main">
        {children}
        <Footer />
      </main>
    </div>
  );
}
