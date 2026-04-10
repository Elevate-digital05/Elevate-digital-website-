import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    emoji: "🌐",
    title: "Website Design & Build",
    desc: "We design and build modern, mobile-friendly websites for businesses that need a new online presence — or a complete refresh of an outdated site.",
    items: ["Custom modern design", "Mobile responsive", "Fast & SEO-friendly", "New sites or redesigns", "Contact forms & CTAs"],
  },
  {
    emoji: "🔧",
    title: "Monthly Maintenance",
    desc: "Keep your website secure, updated, and running perfectly. We handle the technical side so you can focus on growing your business.",
    items: ["Security updates", "Performance monitoring", "Content updates", "Uptime guaranteed", "Monthly reports"],
  },
  {
    emoji: "🔍",
    title: "Search Engine Optimisation",
    desc: "Get found on Google by the customers who matter. We optimise your site so it ranks higher and drives real organic traffic.",
    items: ["Keyword research", "On-page SEO", "Google Business Profile setup", "Technical SEO audit", "Monthly ranking reports"],
  },
  {
    emoji: "🛒",
    title: "E-Commerce Stores",
    desc: "Sell online with a professional shop that looks great, loads fast, and makes buying easy for your customers.",
    items: ["Product catalogue", "Secure checkout", "Payment gateway integration", "Inventory management", "Order notifications"],
  },
  {
    emoji: "✍️",
    title: "Content & Copywriting",
    desc: "Professional website copy written to convert visitors into customers — clear, compelling, and on-brand.",
    items: ["Homepage & about copy", "Service page content", "SEO-optimised writing", "Blog posts", "Proofreading & editing"],
  },
  {
    emoji: "📍",
    title: "WhatsApp & Google Maps Integration",
    desc: "Make it effortless for customers to reach you. We add a WhatsApp chat button and embed Google Maps so people can find and contact you in one tap.",
    items: ["WhatsApp chat button", "Google Maps embed", "Click-to-call setup", "Google Business Profile link", "Mobile optimised"],
  },
  {
    emoji: "📅",
    title: "Booking Systems",
    desc: "Let clients book appointments directly from your website — no back-and-forth needed. Perfect for salons, consultants, clinics, and service businesses.",
    items: ["Online booking calendar", "Email confirmations", "Service & staff selection", "Mobile friendly", "Custom availability"],
  },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Web Design & Maintenance Services | Elevate Digitals South Africa"
        description="Custom website design and monthly maintenance for South African businesses. Mobile-friendly, SEO-optimised, and delivered in 2 weeks."
        path="/services"
      />

      <section className="bg-[#0f1923] py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t("services.heading")}<span className="text-primary">{t("services.heading2")}</span></h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            {t("services.sub")}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ emoji, title, desc, items }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card group hover:border-l-4 hover:border-l-primary h-full">
                  <CardContent className="p-8">
                    <div className="text-3xl mb-4">{emoji}</div>
                    <h2 className="text-xl font-bold text-foreground mb-3">{title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{desc}</p>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold">{t("services.notSure")}</h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              {t("services.letsChat")}
            </p>
            <Button asChild size="lg" className="mt-8 text-base px-8 bg-black text-white font-semibold hover:bg-black/90">
              <Link to="/contact">{t("services.freeQuote")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Services;
