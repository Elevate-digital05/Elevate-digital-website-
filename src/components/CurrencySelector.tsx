import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useCurrency, CURRENCIES, type CurrencyCode } from "@/contexts/CurrencyContext";

interface CurrencySelectorProps {
  mobile?: boolean;
}

const CurrencySelector = ({ mobile = false }: CurrencySelectorProps) => {
  const { currency, setCurrency, isLive, isLoading } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (mobile) {
    return (
      <div ref={ref} className="relative w-full">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full px-4 py-3 text-lg font-bold text-foreground"
        >
          <span>{currency.flag} {currency.code}</span>
          <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <div className="bg-card rounded-lg shadow-lg mx-4 mb-4 max-h-60 overflow-y-auto" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                onClick={() => { setCurrency(c.code); setOpen(false); }}
                className={`w-full text-left px-4 py-3 text-sm transition-colors flex items-center gap-3 ${
                  c.code === currency.code ? "font-semibold" : ""
                }`}
                style={{
                  background: c.code === currency.code ? "#f5f5f7" : undefined,
                  color: "#1d1d1f",
                }}
                onMouseEnter={(e) => { if (c.code !== currency.code) e.currentTarget.style.background = "#f5f5f7"; }}
                onMouseLeave={(e) => { if (c.code !== currency.code) e.currentTarget.style.background = ""; }}
              >
                <span>{c.flag}</span>
                <span>{c.code}</span>
                <span className="text-muted-foreground text-xs ml-auto">{c.name}</span>
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
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-sm font-medium transition-all ${
          isLoading ? "animate-pulse" : ""
        }`}
        style={{ border: "1px solid rgba(0,0,0,0.15)", color: "#1d1d1f" }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: isLive ? "#E05A2B" : "#a1a1a6" }}
          title={isLive ? "Live rates" : "Estimated rates"}
        />
        <span>{currency.flag}</span>
        <span>{currency.code}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-apple-lg z-50 overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
          <div className="max-h-72 overflow-y-auto">
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                onClick={() => { setCurrency(c.code); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2.5 ${
                  c.code === currency.code ? "font-semibold" : ""
                }`}
                style={{
                  background: c.code === currency.code ? "#f5f5f7" : undefined,
                  color: "#1d1d1f",
                }}
                onMouseEnter={(e) => { if (c.code !== currency.code) e.currentTarget.style.background = "#f5f5f7"; }}
                onMouseLeave={(e) => { if (c.code !== currency.code) e.currentTarget.style.background = ""; }}
              >
                <span>{c.flag}</span>
                <span className="font-medium">{c.code}</span>
                <span className="text-muted-foreground text-xs ml-auto">{c.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
