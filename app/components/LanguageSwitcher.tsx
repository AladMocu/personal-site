"use client";
import { useLocale, type Locale } from "../contexts/LocaleContext";

const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "ja", label: "JA" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center rounded-sm overflow-hidden" style={{ border: "1px solid var(--bd2)" }}>
      {locales.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLocale(code)}
          className="font-mono-custom text-xs px-2.5 py-1.5 transition-colors duration-150"
          style={{
            color: locale === code ? "var(--bg)" : "var(--tx3)",
            backgroundColor: locale === code ? "var(--neon)" : "transparent",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
