import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Elevate Digitals",
  description: "Professional web design and monthly maintenance for South African businesses. Modern, mobile-friendly websites delivered in 2 weeks.",
  url: "https://elevatedigitals.co.za",
  telephone: "+27773584140",
  email: "elevatedigitalwebs@gmail.com",
  priceRange: "R5,500 - R19,500+",
  currenciesAccepted: "ZAR",
  paymentAccepted: "Bank Transfer, EFT",
  areaServed: { "@type": "Country", name: "South Africa" },
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
  return (
    <>
      <SEO
        title="Elevate Digitals | Professional Web Design South Africa"
        description="Elevate Digitals builds modern, mobile-friendly websites for South African businesses. Affordable packages from R5,500. Fast turnaround, no hidden fees."
        path="/"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f1923] py-24 md:py-32">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase border border-primary/30">
            Web Design &amp; Maintenance
          </div>
          <h1
            className="font-bold tracking-tight text-white leading-tight max-w-4xl mx-auto"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            We build websites that{" "}
            <span className="text-primary">grow your business</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Whether you need a brand-new website or a fresh redesign, Elevate creates modern, professional sites — and keeps them running smoothly every month.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#4a9e8a] text-white font-semibold hover:bg-[#3d8574] text-base px-8">
              <Link to="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 border-2 border-white text-white font-semibold hover:bg-white hover:text-[#0f1923]">
              <Link to="/services">Learn More</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["⚡ Sites delivered in 2 weeks", "📱 100% Mobile optimised", "🇿🇦 South Africa based"].map((stat) => (
              <span key={stat} className="inline-flex items-center rounded-full bg-primary/15 text-primary text-xs font-medium px-4 py-1.5 border border-primary/20">
                {stat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick value props */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Businesses Choose Elevate</h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { emoji: "💬", title: "No Tech Jargon", desc: "We explain everything in plain language. You'll always know exactly what you're getting and why." },
              { emoji: "🚀", title: "Fast Turnaround", desc: "Most websites are completed and live within 2 weeks of getting started. No long waiting periods." },
              { emoji: "🤝", title: "Ongoing Support", desc: "We don't disappear after launch. Monthly maintenance plans keep your site fast, secure, and up to date." },
            ].map(({ emoji, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 150}>
                <div className="bg-card rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/30">
                  <div className="text-4xl mb-5">{emoji}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold">Ready to elevate your online presence?</h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Let's build something great together. We'll have your new website live within 2 weeks — guaranteed.
            </p>
            <Button asChild size="lg" className="mt-8 text-base px-8 bg-white text-[#0f1923] font-semibold hover:bg-[#f0f0f0]">
              <Link to="/contact">Contact Us Today <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Home;
