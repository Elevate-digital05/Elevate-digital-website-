import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap, Crown, Gem, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  {
    name: "Starter",
    icon: Star,
    price: "R5,500",
    subtitle: "Best for small businesses getting online",
    features: ["1–3 pages (Home, About, Contact)", "Mobile-friendly design", "Basic contact form", "WhatsApp integration", "Basic SEO setup"],
    popular: false,
    btnVariant: "outline" as const,
  },
  {
    name: "Business",
    icon: Zap,
    price: "R9,500",
    subtitle: "Ideal for businesses that want to attract clients",
    features: ["Up to 5–7 pages", "Custom modern design", "Mobile & tablet optimisation", "Enquiry/booking form", "WhatsApp integration", "Google Maps integration", "Basic SEO & speed optimisation"],
    popular: true,
    btnVariant: "default" as const,
  },
  {
    name: "Pro",
    icon: Crown,
    price: "R14,500",
    subtitle: "For businesses looking to scale",
    features: ["Up to 10 pages", "Advanced design & layout", "Booking system integration", "Advanced SEO setup", "Performance optimisation", "Analytics setup"],
    popular: false,
    btnVariant: "outline" as const,
  },
  {
    name: "Premium",
    icon: Gem,
    price: "R19,500",
    priceSuffix: "+",
    subtitle: "For advanced or custom needs",
    features: ["Fully custom website", "Advanced booking/payment system", "E-commerce or membership", "Full SEO optimisation", "One month support included"],
    popular: false,
    btnVariant: "dark" as const,
  },
];

const Packages = () => {
  return (
    <>
      <SEO
        title="Website Packages & Pricing | Elevate Digitals South Africa"
        description="Transparent website pricing for South African businesses. Starter from R5,500. Business from R9,500. No hidden fees."
        path="/packages"
      />

      {/* Header */}
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

      {/* Pricing Cards */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map(({ name, icon: Icon, price, priceSuffix, subtitle, features, popular, btnVariant }, i) => (
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
                      {price}{priceSuffix && <span className="text-lg">{priceSuffix}</span>}
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
                      className={`w-full ${
                        btnVariant === "dark"
                          ? "bg-foreground text-background hover:bg-foreground/90"
                          : btnVariant === "outline"
                          ? "border-primary text-primary hover:bg-primary/10"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
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
                {[
                  { label: "Monthly maintenance", price: "R300 – R800/mo" },
                  { label: "Hosting setup", price: "R500 once-off" },
                  { label: "Logo design", price: "R1,000 – R3,000" },
                  { label: "Additional pages", price: "R500 per page" },
                  { label: "Advanced SEO", price: "From R2,000" },
                ].map(({ label, price }) => (
                  <div key={label} className="flex items-center justify-between p-4 rounded-lg bg-[#f8f9fa] border border-border">
                    <span className="text-sm font-medium text-foreground">{label}</span>
                    <span className="text-sm text-muted-foreground font-semibold">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold">Not sure which package is right?</h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Get in touch and we'll recommend the best option for your business.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 text-base px-8 bg-white text-foreground hover:bg-white/90">
              <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Packages;
