import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useLanguage } from "@/contexts/LanguageContext";

const plans = [
  {
    name: "Starter",
    zarPrice: 5500,
    subtitle: "Perfect for small businesses or sole traders who need a clean, professional online presence fast.",
    included: ["1–3 pages", "Mobile responsive", "Contact form", "Basic SEO setup", "WhatsApp integration", "2-week delivery"],
    excluded: ["E-commerce", "Booking system"],
    popular: false,
    ctaKey: "nav.getStarted",
    link: "/contact?plan=Starter",
  },
  {
    name: "Business",
    zarPrice: 9500,
    subtitle: "Our most popular package — a complete, polished website with everything you need to win online.",
    included: ["5–7 pages", "Mobile responsive", "Contact form", "Full SEO optimisation", "WhatsApp & Maps integration", "Google Analytics setup", "2-week delivery"],
    excluded: ["E-commerce / Booking"],
    popular: true,
    ctaKey: "nav.getStarted",
    link: "/contact?plan=Business",
  },
  {
    name: "Pro",
    zarPrice: 14500,
    subtitle: "Up to 10 pages with advanced features — ideal for growing businesses that need more room to shine.",
    included: ["Up to 10 pages", "E-commerce or booking system", "Full SEO optimisation", "WhatsApp & Maps integration", "Google Analytics setup", "Blog setup", "Analytics + monthly report", "2-week delivery"],
    excluded: [],
    popular: false,
    ctaKey: "nav.getStarted",
    link: "/contact?plan=Pro",
  },
  {
    name: "Premium",
    zarPrice: 19500,
    hasSuffix: true,
    subtitle: "Fully custom design & development tailored to your exact vision. No limits on pages, features, or complexity — we build exactly what you need.",
    included: [],
    excluded: [],
    popular: false,
    ctaKey: "packages.letsTalk",
    link: "/contact?plan=Premium",
  },
];

const maintenance = [
  {
    name: "Basic Care",
    price: 499,
    popular: false,
    features: ["Security updates", "Uptime monitoring", "Monthly backup"],
  },
  {
    name: "Full Care",
    price: 999,
    popular: true,
    features: ["Everything in Basic", "Content updates (2hr)", "Performance reports", "Priority support"],
  },
  {
    name: "Growth Care",
    price: 1999,
    popular: false,
    features: ["Everything in Full", "Content updates (6hr)", "SEO monitoring", "Monthly strategy call"],
  },
];

const Packages = () => {
  const { formatPrice, currency } = useCurrency();
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Website Packages South Africa | From R5,500 | Elevate Digitals"
        description="Transparent website pricing for South African businesses. Starter from R5,500. Business from R9,500. No hidden fees."
        path="/packages"
      />

      <section className="py-20 md:py-28 text-center relative overflow-hidden" style={{ background: "#1d1d1f" }}>
        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-white">{t("packages.heading")}<span className="text-coral">{t("packages.heading2")}</span></h1>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            {t("packages.sub").replace(/ZAR/g, currency.code)}
          </p>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map(({ name, zarPrice, hasSuffix, subtitle, included, excluded, popular, ctaKey, link }, i) => (
              <AnimatedSection key={name} delay={i * 100}>
                <Card className={`bg-card relative h-full transition-all duration-300 rounded-[18px] shadow-apple hover:shadow-apple-lg ${popular ? "border-2 border-coral" : ""}`} style={popular ? {} : { border: "1px solid rgba(0,0,0,0.08)" }}>
                  {popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-coral text-white text-xs px-3 py-1">{t("packages.mostPopular")}</Badge>
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h2 className="text-lg text-foreground" style={{ fontWeight: 600 }}>{name}</h2>
                    <div className="text-3xl text-foreground mt-2" style={{ fontWeight: 600 }}>
                      {formatPrice(zarPrice)}{hasSuffix && <span className="text-lg">+</span>}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{t("packages.onceOff")}</p>
                    <p className="text-muted-foreground text-sm mt-3 mb-5 leading-relaxed">{subtitle}</p>
                    {included.length > 0 && (
                      <ul className="space-y-2 mb-4 flex-1">
                        {included.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-coral flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                        {excluded.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground/50">
                            <X className="h-4 w-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {included.length === 0 && <div className="flex-1" />}
                    <Button
                      asChild
                      className="w-full font-medium bg-foreground text-background hover:bg-foreground/90"
                      style={{ borderRadius: "980px" }}
                    >
                      <Link to={link}>{t(ctaKey)}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {currency.code !== "ZAR" && (
            <p className="mt-8 text-center text-xs text-muted-foreground">
              Prices shown in {currency.code} are approximate conversions based on live exchange rates. All transactions are processed in ZAR.
            </p>
          )}
        </div>
      </section>

      <section className="py-28 md:py-36 bg-apple-gray">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-foreground">{t("packages.maintenance")}</h2>
              <p className="mt-4 text-muted-foreground text-lg">{t("packages.maintenanceSub")}</p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {maintenance.map(({ name, price, popular, features }, i) => (
              <AnimatedSection key={name} delay={i * 100}>
                <Card className={`bg-card relative h-full rounded-[18px] shadow-apple hover:shadow-apple-lg ${popular ? "border-2 border-coral" : ""}`} style={popular ? {} : { border: "1px solid rgba(0,0,0,0.08)" }}>
                  {popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-coral text-white text-xs">{t("packages.recommended")}</Badge>
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-lg text-foreground" style={{ fontWeight: 600 }}>{name}</h3>
                    <div className="text-3xl text-foreground mt-2" style={{ fontWeight: 600 }}>
                      {formatPrice(price)}<span className="text-base font-normal text-muted-foreground">/mo</span>
                    </div>
                    <ul className="space-y-2 mt-5 mb-6 flex-1">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-coral flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="w-full font-medium border-foreground/20 hover:bg-foreground/5" style={{ borderRadius: "980px" }}>
                      <Link to="/contact?plan=Maintenance">{t("nav.getStarted")}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28" style={{ background: "#1d1d1f" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white">{t("packages.customNeed")}</h2>
            <p className="mt-4 text-lg" style={{ color: "#a1a1a6" }}>
              {t("packages.flexible")}
            </p>
            <Button asChild size="lg" className="mt-10 text-[17px] px-8 bg-coral text-white font-medium hover:bg-coral-hover" style={{ borderRadius: "980px" }}>
              <Link to="/contact">{t("packages.customQuote")}</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Packages;
