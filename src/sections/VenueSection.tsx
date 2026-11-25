import { weddingData } from "../data/weddingData";
import { useLanguage } from "../hooks/useLanguage";
import { SectionDivider } from "../components/SectionDivider";

export function VenueSection() {
  const { lang } = useLanguage();
  const d = weddingData;

  return (
    <section id="venue" className="venue-section">
      <h2 className="section-heading">{d.venueSection.heading[lang]}</h2>
      <SectionDivider />
      <div className="venue-name">{d.venue.name[lang]}</div>
      <div className="venue-address">{d.venue.address[lang]}</div>

      <div className="venue-map-wrap">
        <a
          className="open-in-maps"
          href={d.venue.mapsViewUrl}
          target="_blank"
          rel="noreferrer"
        >
          ↗ {d.venueSection.openInMaps[lang]}
        </a>
        <iframe
          title="Venue map"
          src={d.venue.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="venue-actions">
        <a
          className="directions-btn"
          href={d.venue.mapsDirectionsUrl}
          target="_blank"
          rel="noreferrer"
        >
          {d.venueSection.getDirections[lang]}
        </a>
      </div>
    </section>
  );
}
