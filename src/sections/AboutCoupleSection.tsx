import { weddingData } from "../data/weddingData";
import { useLanguage } from "../hooks/useLanguage";
import { SectionDivider } from "../components/SectionDivider";
import groomPhoto from "../assets/groom-portrait.jpg";
import bridePhoto from "../assets/bride-portrait.jpg";

export function AboutCoupleSection() {
  const { lang } = useLanguage();
  const d = weddingData;

  return (
    <section id="our-story" className="about-section">
      <h2 className="section-heading">{d.aboutCouple.heading[lang]}</h2>
      <SectionDivider />

      <div className="couple-portraits">
        <div>
          <div className="portrait">
            <img
              src={groomPhoto}
              alt={d.couple.groomShort[lang]}
              style={{
                objectPosition: "37% 15%",
                transform: "scale(2.1)",
                transformOrigin: "37% 15%",
              }}
            />
          </div>
          <div className="portrait-label">{d.aboutCouple.groomLabel[lang]}</div>
          <div className="portrait-name">{d.couple.groomShort[lang]}</div>
          <p className="portrait-sub">{d.couple.groomParents[lang]}</p>
        </div>

        <div>
          <div className="portrait">
            <img src={bridePhoto} alt={d.couple.brideShort[lang]} />
          </div>
          <div className="portrait-label">{d.aboutCouple.brideLabel[lang]}</div>
          <div className="portrait-name">{d.couple.brideShort[lang]}</div>
          <p className="portrait-sub">{d.couple.brideParents[lang]}</p>
        </div>
      </div>

      <p className="about-footer-note">{d.aboutCouple.footerNote[lang]}</p>
    </section>
  );
}
