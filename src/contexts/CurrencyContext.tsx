import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export type CurrencyCode = "ZAR" | "USD" | "GBP" | "EUR" | "ZWL" | "ZMW" | "NGN" | "KES" | "AUD" | "CAD" | "AED";

export interface CurrencyInfo {
  code: CurrencyCode;
  flag: string;
  symbol: string;
  name: string;
  decimals: number;
}

export const CURRENCIES: CurrencyInfo[] = [
  { code: "ZAR", flag: "🇿🇦", symbol: "R", name: "South African Rand", decimals: 0 },
  { code: "USD", flag: "🇺🇸", symbol: "$", name: "US Dollar", decimals: 2 },
  { code: "GBP", flag: "🇬🇧", symbol: "£", name: "British Pound", decimals: 2 },
  { code: "EUR", flag: "🇪🇺", symbol: "€", name: "Euro", decimals: 2 },
  { code: "ZWL", flag: "🇿🇼", symbol: "Z$", name: "Zimbabwean Dollar", decimals: 0 },
  { code: "ZMW", flag: "🇿🇲", symbol: "K", name: "Zambian Kwacha", decimals: 0 },
  { code: "NGN", flag: "🇳🇬", symbol: "₦", name: "Nigerian Naira", decimals: 0 },
  { code: "KES", flag: "🇰🇪", symbol: "KSh", name: "Kenyan Shilling", decimals: 0 },
  { code: "AUD", flag: "🇦🇺", symbol: "A$", name: "Australian Dollar", decimals: 2 },
  { code: "CAD", flag: "🇨🇦", symbol: "C$", name: "Canadian Dollar", decimals: 2 },
  { code: "AED", flag: "🇦🇪", symbol: "AED", name: "UAE Dirham", decimals: 2 },
];

const FALLBACK_RATES: Record<CurrencyCode, number> = {
  ZAR: 1,
  USD: 0.054,
  GBP: 0.043,
  EUR: 0.050,
  ZWL: 17.4,
  ZMW: 1.47,
  NGN: 86.0,
  KES: 7.0,
  AUD: 0.083,
  CAD: 0.075,
  AED: 0.20,
};

interface CurrencyContextValue {
  currency: CurrencyInfo;
  setCurrency: (code: CurrencyCode) => void;
  convert: (zarAmount: number) => number;
  formatPrice: (zarAmount: number) => string;
  isLive: boolean;
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}

const STORAGE_KEY = "elevate-currency";

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState<CurrencyCode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && CURRENCIES.some((c) => c.code === saved)) return saved as CurrencyCode;
    } catch {}
    return "ZAR";
  });

  const [rates, setRates] = useState<Record<CurrencyCode, number>>(FALLBACK_RATES);
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/ZAR");
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        if (cancelled || data.result !== "success") return;
        const r = data.rates as Record<string, number>;
        const newRates = { ...FALLBACK_RATES };
        for (const c of CURRENCIES) {
          if (c.code === "ZAR") continue;
          if (r[c.code] != null) newRates[c.code] = r[c.code];
        }
        setRates(newRates);
        setIsLive(true);
      } catch (err) {
        console.error("Failed to fetch rates, using fallback", err);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const currency = CURRENCIES.find((c) => c.code === code)!;

  const setCurrency = useCallback((c: CurrencyCode) => {
    setCode(c);
    try { localStorage.setItem(STORAGE_KEY, c); } catch {}
  }, []);

  const convert = useCallback(
    (zarAmount: number) => zarAmount * rates[code],
    [rates, code]
  );

  const formatPrice = useCallback(
    (zarAmount: number) => {
      if (code === "ZAR") {
        return `R${zarAmount.toLocaleString("en-ZA")}`;
      }
      const converted = zarAmount * rates[code];
      const rounded = currency.decimals === 0
        ? Math.round(converted)
        : Math.round(converted * 100) / 100;
      const formatted = rounded.toLocaleString("en-US", {
        minimumFractionDigits: currency.decimals,
        maximumFractionDigits: currency.decimals,
      });
      return `${currency.symbol}${formatted}`;
    },
    [rates, code, currency]
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert, formatPrice, isLive, isLoading }}>
      {children}
    </CurrencyContext.Provider>
  );
}
