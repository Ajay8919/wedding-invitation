import { useEffect, useRef, useState } from "react";
import { weddingData } from "../data/weddingData";
import { useLanguage } from "../hooks/useLanguage";
import { SectionDivider } from "../components/SectionDivider";
import { LanguageToggle } from "../components/LanguageToggle";

interface InvitationStandaloneProps {
  onContinue: () => void;
}

/**
 * Full-screen formatted invitation card shown right after the envelope
 * opens. It is deliberately NOT part of the scrollable main site (no header
 * nav) — scrolling to the bottom of this page smoothly hands off to the
 * Home page of the actual site.
 */
type Status = "idle" | "loading" | "leaving";

const WAIT_BEFORE_REDIRECT_MS = 3000;
const FADE_DURATION_MS = 700;

export function InvitationStandalone({ onContinue }: InvitationStandaloneProps) {
  const { lang } = useLanguage();
  const d = weddingData;
  const [status, setStatus] = useState<Status>("idle");
  const [progressFilled, setProgressFilled] = useState(false);
  const triggeredRef = useRef(false);

  useEffect(() => {
    // Reset scroll position synchronously on mount — if the user arrives
    // here from further down the (taller) main site, a leftover scrollY can
    // otherwise look like "already at the bottom" of this (shorter) page and
    // fire the redirect instantly.
    window.scrollTo({ top: 0 });

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 400);

    const onScroll = () => {
      if (!armed || triggeredRef.current) return;
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (scrolledToBottom) {
        triggeredRef.current = true;
        setStatus("loading");
        // Start the fill on the next frame so the browser registers the 0%
        // state first — flipping to 100% in the same tick would skip the
        // CSS transition entirely.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setProgressFilled(true));
        });
        window.setTimeout(() => {
          setStatus("leaving");
          window.setTimeout(onContinue, FADE_DURATION_MS);
        }, WAIT_BEFORE_REDIRECT_MS);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(armTimer);
    };
  }, [onContinue]);

  return (
    <div className={`invitation-standalone ${status === "leaving" ? "leaving" : ""}`}>
      <div className="invitation-standalone-topbar">
        <span className="invitation-standalone-hint-top">
          {lang === "en" ? "Scroll down to continue" : "కొనసాగించడానికి క్రిందికి స్క్రోల్ చేయండి"}
        </span>
        <LanguageToggle />
      </div>

      <section className="invitation-section">
        <div className="invitation-card">
          <div className="dotted-border-row">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i}>◆</span>
            ))}
          </div>

          <div className="invitation-blessing">{d.invitationText.blessing[lang]}</div>
          <h2 className="invitation-heading">{d.invitationText.heading[lang]}</h2>

          <p className="invitation-intro">{d.invitationText.invite[lang]}</p>

          <div className="invitation-name-row">
            <span className="invitation-prefix">{d.couple.groomPrefix[lang]}</span>
            <span className="invitation-name">{d.couple.groomShort[lang]}</span>
          </div>
          <div className="invitation-with">{d.invitationText.withWord[lang]}</div>
          <div className="invitation-name-row">
            <span className="invitation-prefix">{d.couple.bridePrefix[lang]}</span>
            <span className="invitation-name">{d.couple.brideShort[lang]}</span>
          </div>
          <p className="invitation-parents">{d.couple.brideParents[lang]}</p>

          <hr className="invitation-hr" />

          <h3 className="invitation-event-title">{d.eventsSection.sumuhurthamTitle[lang]}</h3>
          <div className="invitation-event-date">{d.muhurtham.date[lang]}</div>
          <div className="invitation-event-time">{d.muhurtham.time[lang]}</div>
          <div className="invitation-event-sub">{d.muhurtham.note[lang]}</div>

          <hr className="invitation-hr" />

          <h3 className="invitation-event-title">{d.eventsSection.dinnerTitle[lang]}</h3>
          <div className="invitation-event-date">{d.dinner.date[lang]}</div>
          <div className="invitation-event-time">{d.dinner.time[lang]}</div>
          <div className="invitation-event-sub">{d.dinner.note[lang]}</div>

          <hr className="invitation-hr" />

          <div className="venue-name">{d.venue.name[lang]}</div>
          <div className="venue-address">{d.venue.address[lang]}</div>

          <p className="invitation-signoff">{d.invitationText.closingNote[lang]}</p>

          <div className="invitation-yours">{d.invitationText.yours[lang]}</div>
          <div className="invitation-signature">{d.families.groomFamily[lang]}</div>
          <div className="invitation-compliments">{d.invitationText.compliments[lang]}</div>

          <SectionDivider />
        </div>
      </section>

      <div className="invitation-standalone-footer">
        {status === "idle" ? (
          <>
            <div className="invitation-standalone-arrow" aria-hidden="true">
              ⌄
            </div>
            <span>
              {lang === "en" ? "Continue to our wedding website" : "మా వివాహ వెబ్‌సైట్‌కు కొనసాగించండి"}
            </span>
          </>
        ) : (
          <div className="invitation-loading" role="status" aria-live="polite">
            <span>
              {lang === "en"
                ? "Taking you to our wedding website…"
                : "మిమ్మల్ని మా వివాహ వెబ్‌సైట్‌కు తీసుకెళ్తున్నాము…"}
            </span>
            <div className="invitation-progress-track">
              <div
                className={`invitation-progress-fill ${progressFilled ? "filled" : ""}`}
                style={{ transitionDuration: `${WAIT_BEFORE_REDIRECT_MS}ms` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
