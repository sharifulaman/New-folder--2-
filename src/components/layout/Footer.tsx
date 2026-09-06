import { navigation } from "../../data/navigation";
import { footer } from "../../data/profile";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <nav aria-label="Footer navigation">
          <ul className="footer-nav">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer-brand" aria-hidden="true">
          {footer.brand}
        </p>

        <div className="footer-meta">
          <p>{footer.copyright}</p>
          <p>{footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
