import { weddingData } from "../data/weddingData";
import { useLanguage } from "../hooks/useLanguage";
import { CountdownBoxes } from "../components/CountdownBoxes";
import heroBg from "../assets/hero-bg.jpg";

export function HeroSection() {
  const { lang } = useLanguage();
  const d = weddingData;

  const scrollToInvitation = () =>
    document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(74, 14, 35, 0.35), rgba(74, 14, 35, 0.85)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center 8%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-inner">
        <div className="hero-eyebrow">{d.invitationText.blessing[lang]}</div>
        <div className="hero-heading-label">{d.invitationText.heading[lang]}</div>
        <h1 className="hero-names">
          {d.couple.groomShort[lang]}
          <span className="hero-amp">&amp;</span>
          {d.couple.brideShort[lang]}
        </h1>
        <div className="hero-date">{d.weddingDateDisplay[lang]}</div>
        <div className="hero-location">{d.location[lang]}</div>

        <CountdownBoxes targetISO={d.weddingDateTimeISO} />

        <button className="explore-btn" onClick={scrollToInvitation}>
          {lang === "en" ? "Explore Invitation" : "ఆహ్వానం చూడండి"}
        </button>
      </div>
    </section>
  );
}
