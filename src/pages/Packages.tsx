import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap, Crown, Gem, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { useCurrency } from "@/contexts/CurrencyContext";

const plans = [
  {
    name: "Starter",
    icon: Star,
    zarPrice: 5500,
    subtitle: "Best for small businesses getting online",
    features: ["1–3 pages (Home, About, Contact)", "Mobile-friendly design", "Basic contact form", "WhatsApp integration", "Basic SEO setup"],
    popular: false,
    btnVariant: "outline" as const,
  },
  {
    name: "Business",
    icon: Zap,
    zarPrice: 9500,
    subtitle: "Ideal for businesses that want to attract clients",
    features: ["Up to 5–7 pages", "Custom modern design", "Mobile & tablet optimisation", "Enquiry/booking form", "WhatsApp integration", "Google Maps integration", "Basic SEO & speed optimisation"],
    popular: true,
    btnVariant: "default" as const,
  },
  {
    name: "Pro",
    icon: Crown,
    zarPrice: 14500,
    subtitle: "For businesses looking to scale",
    features: ["Up to 10 pages", "Advanced design & layout", "Booking system integration", "Advanced SEO setup", "Performance optimisation", "Analytics setup"],
    popular: false,
    btnVariant: "outline" as const,
  },
  {
    name: "Premium",
    icon: Gem,
    zarPrice: 19500,
    hasSuffix: true,
    subtitle: "For advanced or custom needs",
    features: ["Fully custom website", "Advanced booking/payment system", "E-commerce or membership", "Full SEO optimisation", "One month support included"],
    popular: false,
    btnVariant: "dark" as const,
  },
];

const addOns = [
  { label: "Monthly maintenance", zarLow: 300, zarHigh: 800, suffix: "/mo" },
  { label: "Hosting setup", zarLow: 500, suffix: " once-off" },
  { label: "Logo design", zarLow: 1000, zarHigh: 3000 },
  { label: "Additional pages", zarLow: 500, suffix: " per page" },
  { label: "Advanced SEO", zarLow: 2000, prefix: "From " },
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
          <h1 className="text-4xl md:text-5xl font-bold text-white">Website <span className="text-primary">Packages</span></h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Choose the package that fits your business. No hidden fees.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map(({ name, icon: Icon, zarPrice, hasSuffix, subtitle, features, popular, btnVariant }, i) => (
              <AnimatedSection key={name} delay={i * 100}>
                <Card className={`shadow-lg bg-card relative h-full transition-all duration-300 hover:border-primary/30 ${popular ? "border-2 border-primary" : "border-2 border-border"}`}>
                  {popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground text-xs">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-lg font-bold text-foreground">{name}</h2>
                    <div className="text-3xl font-bold text-foreground mt-2">
                      {formatPrice(zarPrice)}{hasSuffix && <span className="text-lg">+</span>}
                    </div>
                    <p className="text-muted-foreground text-xs mt-1 mb-4">{subtitle}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {features.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full font-semibold ${
                        btnVariant === "outline"
                          ? "border-2 border-black text-black bg-transparent hover:bg-black hover:text-white"
                          : "bg-black text-white hover:bg-black/90"
                      }`}
                      variant={btnVariant === "outline" ? "outline" : "default"}
                    >
                      <Link to={`/contact?plan=${name}`}>Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Add-Ons */}
          <AnimatedSection>
            <div className="mt-16 max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-foreground text-center mb-8">Optional Add-Ons</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {addOns.map(({ label, zarLow, zarHigh, suffix, prefix }) => {
                  let priceStr = "";
                  if (prefix) priceStr += prefix;
                  priceStr += formatPrice(zarLow);
                  if (zarHigh) priceStr += ` – ${formatPrice(zarHigh)}`;
                  if (suffix) priceStr += suffix;

                  return (
                    <div key={label} className="flex items-center justify-between p-4 rounded-lg bg-[#f8f9fa] border border-border">
                      <span className="text-sm font-medium text-foreground">{label}</span>
                      <span className="text-sm text-muted-foreground font-semibold">{priceStr}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Currency disclaimer */}
          {currency.code !== "ZAR" && (
            <p className="mt-8 text-center text-xs text-muted-foreground">
              Prices shown in {currency.code} are approximate conversions based on live exchange rates. All transactions are processed in ZAR.
            </p>
          )}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold">Not sure which package is right?</h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Get in touch and we'll recommend the best option for your business.
            </p>
            <Button asChild size="lg" className="mt-8 text-base px-8 bg-black text-white font-semibold hover:bg-black/90">
              <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Packages;
