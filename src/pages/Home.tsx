import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
      <section className="relative overflow-hidden bg-[#0f1923] py-28 md:py-36">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase border border-primary/30">
            {t("hero.label")}
          </div>
          <h1
            className="font-bold tracking-tight text-white leading-tight max-w-4xl mx-auto"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {t("hero.heading1")}
            <span className="text-primary">{t("hero.heading2")}</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t("hero.sub")}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-coral text-white font-semibold hover:bg-coral-hover text-base px-8">
              <Link to="/packages">{t("hero.viewPackages")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 border-2 border-white text-white font-semibold hover:bg-white hover:text-black">
              <Link to="/services">{t("hero.ourServices")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-coral">2 wks</div>
              <div className="text-xs text-muted-foreground mt-1">{t("stats.turnaround")}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-coral">R5,500</div>
              <div className="text-xs text-muted-foreground mt-1">{t("stats.packagesFrom")}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-coral">0</div>
              <div className="text-xs text-muted-foreground mt-1">{t("stats.hiddenFees")}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-coral">96%</div>
              <div className="text-xs text-muted-foreground mt-1">{t("stats.performance")}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-coral">100%</div>
              <div className="text-xs text-muted-foreground mt-1">{t("stats.accessibility")}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-coral">92%</div>
              <div className="text-xs text-muted-foreground mt-1">{t("stats.bestPractices")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Elevate Digitals */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("why.heading")}</h2>
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
              <AnimatedSection key={titleKey} delay={i * 100}>
                <div className="bg-card rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/30">
                  <div className="text-4xl mb-5 emoji">{emoji}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{t(titleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("how.heading")}</h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {[
              { step: "01", titleKey: "how.discovery", descKey: "how.discoveryDesc" },
              { step: "02", titleKey: "how.design", descKey: "how.designDesc" },
              { step: "03", titleKey: "how.build", descKey: "how.buildDesc" },
              { step: "04", titleKey: "how.launch", descKey: "how.launchDesc" },
            ].map(({ step, titleKey, descKey }, i) => (
              <AnimatedSection key={step} delay={i * 150}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-coral text-white flex items-center justify-center mx-auto mb-5 text-xl font-bold shadow-lg shadow-coral/30">
                    {step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{t(titleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold">{t("cta.ready")}</h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              {t("cta.readySub")}
            </p>
            <Button asChild size="lg" className="mt-8 text-base px-8 bg-black text-white font-semibold hover:bg-black/90">
              <Link to="/contact">{t("cta.contactUs")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
