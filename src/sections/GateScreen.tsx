import { useState } from "react";
import { weddingData } from "../data/weddingData";
import { useLanguage } from "../hooks/useLanguage";
import { LanguageToggle } from "../components/LanguageToggle";

interface GateScreenProps {
  onEnter: () => void;
}

export function GateScreen({ onEnter }: GateScreenProps) {
  const { lang } = useLanguage();
  const [opened, setOpened] = useState(false);
  const [leaving, setLeaving] = useState(false);

  // Single tap/click opens the envelope and, once the flap + card animation
  // has played, automatically carries the user into the site — no second
  // click required.
  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    window.setTimeout(() => {
      setLeaving(true);
      window.setTimeout(onEnter, 550);
    }, 1650);
  };

  return (
    <div className={`gate ${leaving ? "leaving" : ""}`}>
      <div className="gate-lang">
        <LanguageToggle />
      </div>

      <div className="gate-eyebrow">{weddingData.gate.blessing[lang]}</div>
      <h1 className="gate-title">{weddingData.gate.title[lang]}</h1>

      <div
        className={`envelope-wrap ${opened ? "opened" : ""}`}
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        aria-label={weddingData.gate.tapToOpen[lang]}
      >
        <div className="envelope-shadow" aria-hidden="true" />

        <div className="envelope-card">
          <div className="names">
            {weddingData.couple.groomShort[lang]}
            <span className="amp"> &amp; </span>
            {weddingData.couple.brideShort[lang]}
          </div>
          <div className="envelope-mandap" aria-hidden="true">
            🛕
          </div>
        </div>

        {/* Back panel of the envelope */}
        <div className="envelope-back" aria-hidden="true" />
        {/* Side and bottom folds — these stay put; only the top flap opens */}
        <div className="envelope-fold envelope-fold-left" aria-hidden="true" />
        <div className="envelope-fold envelope-fold-right" aria-hidden="true" />
        <div className="envelope-fold envelope-fold-bottom" aria-hidden="true" />

        <div className="envelope-seal">S&amp;S</div>
        <div className="envelope-flap" aria-hidden="true" />
      </div>

      <div className="gate-names">
        {weddingData.couple.groomShort[lang]} &amp; {weddingData.couple.brideShort[lang]}
      </div>
      <div className="gate-tap">{weddingData.gate.tapToOpen[lang]}</div>
    </div>
  );
}
