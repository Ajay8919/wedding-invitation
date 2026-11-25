import { useEffect, useState } from "react";
import { LanguageProvider, useLanguage } from "./hooks/useLanguage";
import { NavBar, navSections } from "./components/NavBar";
import { MusicToggle } from "./components/MusicToggle";
import { GateScreen } from "./sections/GateScreen";
import { InvitationStandalone } from "./sections/InvitationStandalone";
import { HeroSection } from "./sections/HeroSection";
import { WelcomeSection } from "./sections/WelcomeSection";
import { AboutCoupleSection } from "./sections/AboutCoupleSection";
import { FamiliesSection } from "./sections/FamiliesSection";
import { EventsSection } from "./sections/EventsSection";
import { GallerySection } from "./sections/GallerySection";
import { VenueSection } from "./sections/VenueSection";
import { ClosingSection } from "./sections/ClosingSection";
import { Footer } from "./sections/Footer";
import "./styles/global.css";

type Stage = "gate" | "invitation" | "site";

function SiteBody({ onShowGate }: { onShowGate: () => void }) {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const ids = navSections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <NavBar activeId={activeId} onShowInvitation={onShowGate} />
      <HeroSection />
      <WelcomeSection />
      <AboutCoupleSection />
      <FamiliesSection />
      <EventsSection />
      <GallerySection />
      <VenueSection />
      <ClosingSection />
      <Footer />
      <MusicToggle />
    </div>
  );
}

function AppInner() {
  const [stage, setStage] = useState<Stage>("gate");
  const { lang } = useLanguage();

  useEffect(() => {
    document.body.setAttribute("data-lang", lang);
  }, [lang]);

  // Whenever the stage changes (e.g. invitation -> site), land at the top.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [stage]);

  return (
    <>
      {stage === "gate" && <GateScreen onEnter={() => setStage("invitation")} />}
      {stage === "invitation" && (
        <InvitationStandalone onContinue={() => setStage("site")} />
      )}
      {stage === "site" && <SiteBody onShowGate={() => setStage("gate")} />}
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}

export default App;
