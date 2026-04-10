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
          <div className="bg-card border border-border rounded-lg shadow-lg mx-4 mb-4 max-h-60 overflow-y-auto">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => handleSelect(l.code)}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-primary/10 transition-colors flex items-center gap-3 ${
                  l.code === lang ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
                }`}
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
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#4a9e8a]/30 bg-white text-sm font-medium text-[#4a9e8a] hover:border-[#4a9e8a] transition-all"
      >
        <span>{selected.flag}</span>
        <span>{selected.name}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl border border-border shadow-xl z-50 overflow-hidden">
          <div className="max-h-72 overflow-y-auto">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => handleSelect(l.code)}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-primary/10 transition-colors flex items-center gap-2.5 ${
                  l.code === lang ? "bg-primary/10 text-[#4a9e8a] font-semibold" : "text-foreground"
                }`}
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
