import { useState } from "react";
import { weddingData } from "../data/weddingData";
import { useLanguage } from "../hooks/useLanguage";
import { SectionDivider } from "../components/SectionDivider";
import { Lightbox } from "../components/Lightbox";

import photo1 from "../assets/gallery/photo-1.jpg";
import photo2 from "../assets/gallery/photo-2.jpg";
import photo3 from "../assets/gallery/photo-3.jpg";
import photo4 from "../assets/gallery/photo-4.jpg";
import photo5 from "../assets/gallery/photo-5.jpg";
import photo6 from "../assets/gallery/photo-6.jpg";
import photo7 from "../assets/gallery/photo-7.jpg";

const photoMap: Record<string, string> = {
  "photo-1.jpg": photo1,
  "photo-2.jpg": photo2,
  "photo-3.jpg": photo3,
  "photo-4.jpg": photo4,
  "photo-5.jpg": photo5,
  "photo-6.jpg": photo6,
  "photo-7.jpg": photo7,
};

export function GallerySection() {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = weddingData.gallery.map((g) => ({
    src: photoMap[g.src],
    alt: g.alt,
  }));

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="section-heading">{weddingData.gallerySection.heading[lang]}</h2>
      <SectionDivider />
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div
            className="gallery-item"
            key={img.src}
            onClick={() => setActiveIndex(i)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  );
}
