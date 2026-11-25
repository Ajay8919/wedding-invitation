import { useCountdown } from "../hooks/useCountdown";
import { useLanguage } from "../hooks/useLanguage";

const labels = {
  days: { en: "Days", te: "రోజులు" },
  hours: { en: "Hours", te: "గంటలు" },
  minutes: { en: "Minutes", te: "నిమిషాలు" },
  seconds: { en: "Seconds", te: "సెకన్లు" },
};

export function CountdownBoxes({ targetISO }: { targetISO: string }) {
  const { lang } = useLanguage();
  const { days, hours, minutes, seconds } = useCountdown(targetISO);

  const items = [
    { value: days, label: labels.days[lang] },
    { value: hours, label: labels.hours[lang] },
    { value: minutes, label: labels.minutes[lang] },
    { value: seconds, label: labels.seconds[lang] },
  ];

  return (
    <div className="countdown-row">
      {items.map((item) => (
        <div className="countdown-box" key={item.label}>
          <div className="countdown-num">{String(item.value).padStart(2, "0")}</div>
          <div className="countdown-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
