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
          <div className="bg-card border border-border rounded-lg shadow-lg mx-4 mb-4 max-h-60 overflow-y-auto">
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                onClick={() => { setCurrency(c.code); setOpen(false); }}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-primary/10 transition-colors flex items-center gap-3 ${
                  c.code === currency.code ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
                }`}
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
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#4a9e8a]/30 bg-white text-sm font-medium text-[#4a9e8a] hover:border-[#4a9e8a] transition-all ${
          isLoading ? "animate-pulse" : ""
        }`}
      >
        {/* Rate status dot */}
        <span
          className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-green-500" : "bg-gray-400"}`}
          title={isLive ? "Live rates" : "Estimated rates"}
        />
        <span>{currency.flag}</span>
        <span>{currency.code}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl border border-border shadow-xl z-50 overflow-hidden">
          <div className="max-h-72 overflow-y-auto">
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                onClick={() => { setCurrency(c.code); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-primary/10 transition-colors flex items-center gap-2.5 ${
                  c.code === currency.code ? "bg-primary/10 text-[#4a9e8a] font-semibold" : "text-foreground"
                }`}
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
