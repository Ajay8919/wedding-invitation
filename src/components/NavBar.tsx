import { useState } from "react";
import { weddingData } from "../data/weddingData";
import { useLanguage } from "../hooks/useLanguage";
import { LanguageToggle } from "./LanguageToggle";

export interface NavSection {
  id: string;
  label: { en: string; te: string };
}

// Scrollspy-tracked sections within the main site (the standalone
// Invitation page is handled separately — see onShowInvitation below).
export const navSections: NavSection[] = [
  { id: "home", label: weddingData.nav.home },
  { id: "our-story", label: weddingData.nav.ourStory },
  { id: "events", label: weddingData.nav.events },
  { id: "gallery", label: weddingData.nav.gallery },
  { id: "venue", label: weddingData.nav.venue },
];

interface NavBarProps {
  activeId: string;
  onShowInvitation: () => void;
}

export function NavBar({ activeId, onShowInvitation }: NavBarProps) {
  const { lang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const showInvitation = () => {
    setMobileOpen(false);
    onShowInvitation();
  };

  return (
    <header className="site-header">
      <div className="site-logo">
        S <span className="amp">&amp;</span> S
      </div>
      <nav>
        <ul className="site-nav">
          {navSections.map((s) => (
            <li key={s.id}>
              <button
                className={activeId === s.id ? "active" : ""}
                onClick={() => scrollTo(s.id)}
              >
                {s.label[lang]}
              </button>
            </li>
          ))}
          <li>
            <button onClick={showInvitation}>{weddingData.nav.invitation[lang]}</button>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <LanguageToggle />
        <button
          className="burger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-nav">
          <button
            className="mobile-nav-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          {navSections.map((s) => (
            <button
              key={s.id}
              className={activeId === s.id ? "active" : ""}
              onClick={() => scrollTo(s.id)}
            >
              {s.label[lang]}
            </button>
          ))}
          <button onClick={showInvitation}>{weddingData.nav.invitation[lang]}</button>
        </div>
      )}
    </header>
  );
}
