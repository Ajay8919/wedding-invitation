import { weddingData } from "../data/weddingData";
import { useLanguage } from "../hooks/useLanguage";

export function Footer() {
  const { lang } = useLanguage();
  const d = weddingData;
  return (
    <footer className="site-footer">
      {d.couple.groomShort[lang]} &amp; {d.couple.brideShort[lang]} · {d.weddingDateDisplay[lang]}
    </footer>
  );
}
