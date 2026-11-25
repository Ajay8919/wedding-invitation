import { useLanguage } from "../hooks/useLanguage";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggleLang } = useLanguage();
  return (
    <button className={`lang-toggle ${className}`} onClick={toggleLang}>
      {lang === "en" ? "తెలుగు" : "English"}
    </button>
  );
}
