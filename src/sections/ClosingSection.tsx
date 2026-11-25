import { weddingData } from "../data/weddingData";
import { useLanguage } from "../hooks/useLanguage";
import { SectionDivider } from "../components/SectionDivider";

export function ClosingSection() {
  const { lang } = useLanguage();
  const d = weddingData;

  return (
    <section className="closing-section">
      <h2 className="section-heading">{d.closing.heading[lang]}</h2>
      <SectionDivider />
      <p className="closing-body">{d.closing.body[lang]}</p>

      <div className="closing-yours">{d.invitationText.yours[lang]}</div>
      <div className="closing-signature">{d.families.groomFamily[lang]}</div>
      <div className="closing-compliments">{d.invitationText.compliments[lang]}</div>
    </section>
  );
}
