import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
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

      <section className="py-20 md:py-28 text-center relative overflow-hidden" style={{ background: "#1d1d1f" }}>
        <div className="relative max-w-6xl mx-auto px-6">
          <AnimatedSection delay={100}>
            <h1 className="text-4xl md:text-5xl text-white">{t("services.heading")}<span className="text-coral">{t("services.heading2")}</span></h1>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              {t("services.sub")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ emoji, title, desc, items }, i) => (
              <AnimatedSection key={title} delay={i * 150} variant="slide-left">
                <Card className="border-0 shadow-apple hover:shadow-apple-lg transition-shadow duration-300 bg-card group h-full rounded-[18px]" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <CardContent className="p-8">
                    <div className="text-3xl mb-4 emoji">{emoji}</div>
                    <h2 className="text-xl text-foreground mb-3" style={{ fontWeight: 600 }}>{title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{desc}</p>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-coral flex-shrink-0" />
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

      <section className="py-28" style={{ background: "#1d1d1f" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white">{t("services.notSure")}</h2>
            <p className="mt-4 text-lg" style={{ color: "#a1a1a6" }}>
              {t("services.letsChat")}
            </p>
            <Button asChild size="lg" className="mt-10 text-[17px] px-8 bg-coral text-white font-medium hover:bg-coral-hover" style={{ borderRadius: "980px" }}>
              <Link to="/contact">{t("services.freeQuote")}</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Services;
