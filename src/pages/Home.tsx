import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Elevate Digitals",
  description: "Professional web design and monthly maintenance for South African businesses. Modern, mobile-friendly websites delivered in 2 weeks.",
  url: "https://elevatedigitals.co.za",
  telephone: "+27650858437",
  email: "elevatedigitalwebs@gmail.com",
  priceRange: "R5,500 - R19,500+",
  currenciesAccepted: "ZAR",
  paymentAccepted: "Bank Transfer, EFT",
  areaServed: { "@type": "Country", name: "South Africa" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "12:00", closes: "17:00" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Packages",
    itemListElement: [
      { "@type": "Offer", name: "Starter Website Package", price: "5500", priceCurrency: "ZAR", description: "1-3 page mobile-friendly website for small businesses" },
      { "@type": "Offer", name: "Business Website Package", price: "9500", priceCurrency: "ZAR", description: "5-7 page website with SEO, WhatsApp and Google Maps" },
      { "@type": "Offer", name: "Pro Website Package", price: "14500", priceCurrency: "ZAR", description: "Up to 10 pages with booking system and advanced SEO" },
      { "@type": "Offer", name: "Premium Website Package", price: "19500", priceCurrency: "ZAR", description: "Fully custom website with e-commerce and payment system" },
    ],
  },
  sameAs: [],
};

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Web Design South Africa | Elevate Digitals — From R5,500"
        description="Professional web design for South African small businesses. Modern, mobile-friendly websites from R5,500. Based in South Africa. 2-week turnaround. WhatsApp us today."
        path="/"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-32 md:py-44" style={{ background: "#1d1d1f" }}>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection delay={100}>
            <h1
              className="tracking-tight text-white leading-tight max-w-4xl mx-auto"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 600, letterSpacing: "-0.03em" }}
            >
              {t("hero.heading1")}
              <span className="text-coral">{t("hero.heading2")}</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              {t("hero.sub")}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={500}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-coral text-white font-medium hover:bg-coral-hover text-[17px] px-8" style={{ borderRadius: "980px" }}>
                <Link to="/packages">{t("hero.viewPackages")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-[17px] px-8 text-coral border-coral/30 hover:bg-coral/5 font-medium" style={{ borderRadius: "980px", background: "transparent" }}>
                <Link to="/services">{t("hero.ourServices")}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-apple-gray">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 text-center">
            {[
              { value: "2 wks", labelKey: "stats.turnaround" },
              { value: "R5,500", labelKey: "stats.packagesFrom" },
              { value: "0", labelKey: "stats.hiddenFees" },
              { value: "96%", labelKey: "stats.performance" },
              { value: "100%", labelKey: "stats.accessibility" },
              { value: "92%", labelKey: "stats.bestPractices" },
            ].map(({ value, labelKey }, i) => (
              <AnimatedSection key={labelKey} delay={i * 100}>
                <div className="text-2xl md:text-3xl text-foreground" style={{ fontWeight: 600 }}>{value}</div>
                <div className="text-xs text-muted-foreground mt-1">{t(labelKey)}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Elevate Digitals */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-foreground">{t("why.heading")}</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                {t("why.sub")}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { emoji: "🎨", titleKey: "why.customDesign", descKey: "why.customDesignDesc" },
              { emoji: "⚡", titleKey: "why.lightningFast", descKey: "why.lightningFastDesc" },
              { emoji: "📱", titleKey: "why.mobileFirst", descKey: "why.mobileFirstDesc" },
              { emoji: "🔍", titleKey: "why.seoReady", descKey: "why.seoReadyDesc" },
              { emoji: "🛡️", titleKey: "why.secure", descKey: "why.secureDesc" },
              { emoji: "📍", titleKey: "why.whatsapp", descKey: "why.whatsappDesc" },
            ].map(({ emoji, titleKey, descKey }, i) => (
              <AnimatedSection key={titleKey} delay={i * 100} variant="scale-up">
                <div className="bg-card rounded-[18px] p-8 text-center shadow-apple transition-shadow duration-300 hover:shadow-apple-lg" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <div className="text-4xl mb-5 emoji">{emoji}</div>
                  <h3 className="text-lg text-foreground mb-2" style={{ fontWeight: 600 }}>{t(titleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 md:py-36 bg-apple-gray">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl text-foreground">{t("how.heading")}</h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
            {[
              { step: "01", titleKey: "how.discovery", descKey: "how.discoveryDesc" },
              { step: "02", titleKey: "how.design", descKey: "how.designDesc" },
              { step: "03", titleKey: "how.build", descKey: "how.buildDesc" },
              { step: "04", titleKey: "how.launch", descKey: "how.launchDesc" },
            ].map(({ step, titleKey, descKey }, i) => (
              <AnimatedSection key={step} delay={i * 150} variant="scale-up">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-coral text-white flex items-center justify-center mx-auto mb-6 text-xl shadow-apple" style={{ fontWeight: 600 }}>
                    {step}
                  </div>
                  <h3 className="text-lg text-foreground mb-2" style={{ fontWeight: 600 }}>{t(titleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-28" style={{ background: "#1d1d1f" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white">{t("cta.ready")}</h2>
            <p className="mt-4 text-lg" style={{ color: "#a1a1a6" }}>
              {t("cta.readySub")}
            </p>
            <Button asChild size="lg" className="mt-10 text-[17px] px-8 bg-coral text-white font-medium hover:bg-coral-hover" style={{ borderRadius: "980px" }}>
              <Link to="/contact">{t("cta.contactUs")}</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
