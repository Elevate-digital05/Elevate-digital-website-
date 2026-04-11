import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage, LANGUAGES } from "@/contexts/LanguageContext";

interface LanguageSelectorProps {
  mobile?: boolean;
}

const LanguageSelector = ({ mobile = false }: LanguageSelectorProps) => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (code: typeof lang) => {
    setLang(code);
    setOpen(false);
  };

  if (mobile) {
    return (
      <div ref={ref} className="relative w-full">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full px-4 py-3 text-lg font-bold text-foreground"
        >
          <span>{selected.flag} {selected.name}</span>
          <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <div className="bg-card rounded-lg shadow-lg mx-4 mb-4 max-h-60 overflow-y-auto" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => handleSelect(l.code)}
                className={`w-full text-left px-4 py-3 text-sm transition-colors flex items-center gap-3 ${
                  l.code === lang ? "font-semibold" : ""
                }`}
                style={{
                  background: l.code === lang ? "#f5f5f7" : undefined,
                  color: "#1d1d1f",
                }}
                onMouseEnter={(e) => { if (l.code !== lang) e.currentTarget.style.background = "#f5f5f7"; }}
                onMouseLeave={(e) => { if (l.code !== lang) e.currentTarget.style.background = ""; }}
              >
                <span>{l.flag}</span>
                <span>{l.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-sm font-medium transition-all"
        style={{ border: "1px solid rgba(0,0,0,0.15)", color: "#1d1d1f" }}
      >
        <span>{selected.flag}</span>
        <span>{selected.name}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-apple-lg z-50 overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
          <div className="max-h-72 overflow-y-auto">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => handleSelect(l.code)}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2.5 ${
                  l.code === lang ? "font-semibold" : ""
                }`}
                style={{
                  background: l.code === lang ? "#f5f5f7" : undefined,
                  color: "#1d1d1f",
                }}
                onMouseEnter={(e) => { if (l.code !== lang) e.currentTarget.style.background = "#f5f5f7"; }}
                onMouseLeave={(e) => { if (l.code !== lang) e.currentTarget.style.background = ""; }}
              >
                <span>{l.flag}</span>
                <span>{l.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
