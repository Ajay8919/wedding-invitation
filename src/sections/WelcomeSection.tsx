import { weddingData } from "../data/weddingData";
import { useLanguage } from "../hooks/useLanguage";
import { SectionDivider } from "../components/SectionDivider";

export function WelcomeSection() {
  const { lang } = useLanguage();
  return (
    <section className="welcome-section">
      <h2 className="section-heading">{weddingData.welcome.heading[lang]}</h2>
      <SectionDivider />
      <p className="welcome-body">{weddingData.welcome.body[lang]}</p>
    </section>
  );
}
