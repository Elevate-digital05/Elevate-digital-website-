import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { useCurrency } from "@/contexts/CurrencyContext";

const plans = [
  {
    name: "Starter",
    zarPrice: 5500,
    subtitle: "Perfect for small businesses or sole traders who need a clean, professional online presence fast.",
    included: ["1–3 pages", "Mobile responsive", "Contact form", "Basic SEO setup", "WhatsApp integration", "2-week delivery"],
    excluded: ["E-commerce", "Booking system"],
    popular: false,
    cta: "Get Started",
    link: "/contact?plan=Starter",
  },
  {
    name: "Business",
    zarPrice: 9500,
    subtitle: "Our most popular package — a complete, polished website with everything you need to win online.",
    included: ["5–7 pages", "Mobile responsive", "Contact form", "Full SEO optimisation", "WhatsApp & Maps integration", "Google Analytics setup", "2-week delivery"],
    excluded: ["E-commerce / Booking"],
    popular: true,
    cta: "Get Started",
    link: "/contact?plan=Business",
  },
  {
    name: "Pro",
    zarPrice: 14500,
    subtitle: "Up to 10 pages with advanced features — ideal for growing businesses that need more room to shine.",
    included: ["Up to 10 pages", "E-commerce or booking system", "Full SEO optimisation", "WhatsApp & Maps integration", "Google Analytics setup", "Blog setup", "Analytics + monthly report", "2-week delivery"],
    excluded: [],
    popular: false,
    cta: "Get Started",
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
    cta: "Let's Talk",
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

  return (
    <>
      <SEO
        title="Website Packages South Africa | From R5,500 | Elevate Digitals"
        description="Transparent website pricing for South African businesses. Starter from R5,500. Business from R9,500. No hidden fees."
        path="/packages"
      />

      <section className="bg-[#0f1923] py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Transparent <span className="text-primary">Packages</span></h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            No hidden fees. No surprises. Just honest pricing for great work. All prices in ZAR.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map(({ name, zarPrice, hasSuffix, subtitle, included, excluded, popular, cta, link }, i) => (
              <AnimatedSection key={name} delay={i * 100}>
                <Card className={`shadow-lg bg-card relative h-full transition-all duration-300 hover:border-primary/30 ${popular ? "border-2 border-primary" : "border-2 border-border"}`}>
                  {popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground text-xs">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h2 className="text-lg font-bold text-foreground">{name}</h2>
                    <div className="text-3xl font-bold text-foreground mt-2">
                      {formatPrice(zarPrice)}{hasSuffix && <span className="text-lg">+</span>}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">once-off</p>
                    <p className="text-muted-foreground text-sm mt-3 mb-5 leading-relaxed">{subtitle}</p>
                    {included.length > 0 && (
                      <ul className="space-y-2 mb-4 flex-1">
                        {included.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
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
                      className={`w-full font-semibold ${popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-black text-white hover:bg-black/90"}`}
                    >
                      <Link to={link}>{cta}</Link>
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

      {/* Monthly Maintenance */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Monthly Maintenance Plans</h2>
              <p className="mt-4 text-muted-foreground text-lg">Keep your site fast, secure, and up to date.</p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {maintenance.map(({ name, price, popular, features }, i) => (
              <AnimatedSection key={name} delay={i * 100}>
                <Card className={`shadow-lg bg-card relative h-full ${popular ? "border-2 border-primary" : "border-2 border-border"}`}>
                  {popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground text-xs">Recommended</Badge>
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-bold text-foreground">{name}</h3>
                    <div className="text-3xl font-bold text-foreground mt-2">
                      {formatPrice(price)}<span className="text-base font-normal text-muted-foreground">/mo</span>
                    </div>
                    <ul className="space-y-2 mt-5 mb-6 flex-1">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="w-full font-semibold border-2">
                      <Link to="/contact?plan=Maintenance">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold">Need something custom?</h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              We're flexible — let's talk.
            </p>
            <Button asChild size="lg" className="mt-8 text-base px-8 bg-black text-white font-semibold hover:bg-black/90">
              <Link to="/contact">Get a Custom Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Packages;
