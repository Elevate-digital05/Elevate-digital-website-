import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";

const Services = () => {
  return (
    <>
      <SEO
        title="Web Design & Maintenance Services | Elevate Digitals"
        description="Custom website design and monthly maintenance for South African businesses. Mobile-friendly, SEO-optimised, and delivered in 2 weeks."
        path="/services"
      />

      {/* Header */}
      <section className="bg-[#0f1923] py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">What We <span className="text-primary">Offer</span></h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Modern websites that get you found online — and keep running smoothly every month.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Website Design & Build",
                desc: "We design and build modern, mobile-friendly websites for businesses that need a new online presence — or a complete refresh of an outdated site.",
                items: ["Custom modern design", "Mobile responsive", "Fast & SEO-friendly", "New sites or redesigns"],
              },
              {
                icon: Wrench,
                title: "Monthly Maintenance",
                desc: "Keep your website secure, updated, and running perfectly. We handle the technical side so you can focus on growing your business.",
                items: ["Security updates", "Performance monitoring", "Content updates", "Uptime guaranteed"],
              },
            ].map(({ icon: Icon, title, desc, items }, i) => (
              <AnimatedSection key={title} delay={i * 150}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card group hover:border-l-4 hover:border-l-primary">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3">{title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-5">{desc}</p>
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

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
                Three simple steps to get your business online.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              { step: 1, title: "Tell Us About Your Business", desc: "Fill in our quick form or WhatsApp us. We'll learn about your goals, style, and timeline." },
              { step: 2, title: "We Design & Build", desc: "We create your custom website and share progress with you. Most sites are ready within 2 weeks." },
              { step: 3, title: "Go Live & Grow", desc: "We launch your site and handle all the technical stuff. You focus on running your business." },
            ].map(({ step, title, desc }) => (
              <AnimatedSection key={step} delay={(step - 1) * 200}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5 text-2xl font-bold shadow-lg shadow-primary/30">
                    {step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold">Ready to get started?</h2>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              Check out our packages or contact us for a free quote.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base px-8 bg-white text-[#0f1923] font-semibold hover:bg-[#f0f0f0]">
                <Link to="/packages">View Packages <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8 border-2 border-white text-white font-semibold hover:bg-white hover:text-[#0f1923]">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Services;
