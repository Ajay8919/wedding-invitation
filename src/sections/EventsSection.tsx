import { weddingData } from "../data/weddingData";
import { useLanguage } from "../hooks/useLanguage";
import { SectionDivider } from "../components/SectionDivider";

export function EventsSection() {
  const { lang } = useLanguage();
  const d = weddingData;

  return (
    <section id="events" className="events-section">
      <h2 className="section-heading on-dark">{d.eventsSection.heading[lang]}</h2>
      <SectionDivider />
      <div className="events-grid">
        <div className="event-card">
          <div className="event-icon" aria-hidden="true">
            🕉️
          </div>
          <div className="event-title">{d.eventsSection.sumuhurthamTitle[lang]}</div>
          <div className="event-date">{d.muhurtham.date[lang]}</div>
          <div className="event-time">{d.muhurtham.time[lang]}</div>
          <div className="event-sub">{d.muhurtham.note[lang]}</div>
        </div>

        <div className="event-card">
          <div className="event-icon" aria-hidden="true">
            🍽️
          </div>
          <div className="event-title">{d.eventsSection.dinnerTitle[lang]}</div>
          <div className="event-date">{d.dinner.date[lang]}</div>
          <div className="event-time">{d.dinner.time[lang]}</div>
          <div className="event-sub">{d.dinner.note[lang]}</div>
        </div>
      </div>
    </section>
  );
}
