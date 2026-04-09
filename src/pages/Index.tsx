import elevateLogo from "@/assets/elevate-logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Wrench, ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src={elevateLogo} alt="Elevate" className="h-10 w-auto object-contain" />
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button asChild size="sm">
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
        <div className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
          Web Design &amp; Maintenance
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight max-w-3xl mx-auto">
          We build websites that grow your business
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Whether you need a brand-new website or a fresh redesign, Elevate creates modern, professional sites — and keeps them running smoothly every month.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
            <a href="#contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8">
            <a href="#services">Learn More</a>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-muted/50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Offer</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Two simple services — everything your business needs to succeed online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Service 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Website Design &amp; Build</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  We design and build modern, mobile-friendly websites for businesses that need a new online presence — or a complete refresh of an outdated site.
                </p>
                <ul className="space-y-2">
                  {["Custom modern design", "Mobile responsive", "Fast & SEO-friendly", "New sites or redesigns"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Wrench className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Monthly Maintenance</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Keep your website secure, updated, and running perfectly. We handle the technical side so you can focus on growing your business.
                </p>
                <ul className="space-y-2">
                  {["Security updates", "Performance monitoring", "Content updates", "Uptime guaranteed"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Simple, Honest Pricing</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              No hidden fees. No surprises. Just clear pricing for quality work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Price 1 */}
            <Card className="border-2 border-primary/20 shadow-lg bg-card text-center">
              <CardContent className="p-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">Website Build</div>
                <div className="text-5xl font-bold text-foreground">R10,000</div>
                <div className="text-muted-foreground mt-2 mb-6">once-off</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  A complete, custom-built website designed to represent your business professionally online.
                </p>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Price 2 */}
            <Card className="border-2 border-secondary/20 shadow-lg bg-card text-center">
              <CardContent className="p-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-secondary mb-4">Monthly Maintenance</div>
                <div className="text-5xl font-bold text-foreground">R800</div>
                <div className="text-muted-foreground mt-2 mb-6">per month</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Ongoing maintenance to keep your website secure, fast, and always up-to-date.
                </p>
                <Button asChild variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                  <a href="#contact">Subscribe</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to elevate your online presence?</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Let's build something great together. Get in touch and we'll have your new site up in no time.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 text-base px-8 bg-white text-foreground hover:bg-white/90">
            <a href="#contact">Contact Us Today <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Have a question or ready to start? Reach out — we'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Phone, label: "Call Us", value: "+27 77 358 4140" },
              { icon: Mail, label: "Email Us", value: "elevatedigitalwebs@gmail.com" },
              { icon: MapPin, label: "Based In", value: "Cape Town, South Africa" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <div className="font-semibold text-foreground">{label}</div>
                <div className="text-muted-foreground text-sm mt-1">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={elevateLogo} alt="Elevate" className="h-8 w-auto object-contain" loading="lazy" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Elevate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
