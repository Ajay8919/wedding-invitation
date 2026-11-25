import { weddingData } from "../data/weddingData";
import { useLanguage } from "../hooks/useLanguage";

export function FamiliesSection() {
  const { lang } = useLanguage();
  const d = weddingData;

  return (
    <section className="families-section">
      <h2 className="section-heading">{d.familiesSection.heading[lang]}</h2>
      <div className="families-grid">
        <div className="family-card">
          <div className="family-label">{d.familiesSection.groomFamilyLabel[lang]}</div>
          <div className="family-names">{d.families.groomFamily[lang]}</div>
        </div>
        <div className="family-card">
          <div className="family-label">{d.familiesSection.brideFamilyLabel[lang]}</div>
          <div className="family-names">{d.families.brideFamily[lang]}</div>
        </div>
      </div>
    </section>
  );
}
