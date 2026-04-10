import elevateLogo from "@/assets/elevate-logo.webp";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Wrench,
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  Star,
  Zap,
  Crown,
  Gem,
  MessageSquare,
  Rocket,
  Clock,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src={elevateLogo} alt="Elevate" className="h-20 w-auto object-contain" />
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
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-28 text-center">
        <div className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
          Web Design &amp; Maintenance
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight max-w-3xl mx-auto">
          We build websites that grow your business
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Whether you need a brand-new website or a fresh redesign, Elevate creates modern, professional sites — and keeps them running smoothly every month.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
            <a href="#contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8">
            <a href="#services">Learn More</a>
          </Button>
        </div>
        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "⚡ Sites delivered in 2 weeks",
            "📱 100% Mobile optimised",
            "🇿🇦 South Africa based",
          ].map((stat) => (
            <span
              key={stat}
              className="inline-flex items-center rounded-full bg-accent text-accent-foreground text-xs font-medium px-4 py-1.5"
            >
              {stat}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-muted/50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Offer</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Modern websites that get you found online — and keep running smoothly every month.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Three simple steps to get your business online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Tell Us About Your Business",
                desc: "Fill in our quick form or WhatsApp us. We'll learn about your goals, style, and timeline.",
              },
              {
                step: 2,
                title: "We Design & Build",
                desc: "We create your custom website and share progress with you. Most sites are ready within 2 weeks.",
              },
              {
                step: 3,
                title: "Go Live & Grow",
                desc: "We launch your site and handle all the technical stuff. You focus on running your business.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
                  {step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Why Choose Us */}
      <section className="bg-muted/50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Businesses Choose Elevate</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: MessageSquare,
                title: "No Tech Jargon",
                desc: "We explain everything in plain language. You'll always know exactly what you're getting and why.",
              },
              {
                icon: Rocket,
                title: "Fast Turnaround",
                desc: "Most websites are completed and live within 2 weeks of getting started. No long waiting periods.",
              },
              {
                icon: HeartHandshake,
                title: "Ongoing Support",
                desc: "We don't disappear after launch. Monthly maintenance plans keep your site fast, secure, and up to date.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border-0 shadow-lg bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Website Packages</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Choose the package that fits your business. No hidden fees.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Starter */}
            <Card className="border-2 border-border shadow-lg bg-card relative">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <Star className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Starter</h3>
                <div className="text-3xl font-bold text-foreground mt-2">R5,500</div>
                <p className="text-muted-foreground text-xs mt-1 mb-4">Best for small businesses getting online</p>
                <ul className="space-y-2 mb-6">
                  {["1–3 pages (Home, About, Contact)", "Mobile-friendly design", "Basic contact form", "WhatsApp integration", "Basic SEO setup"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <a href="#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Business */}
            <Card className="border-2 border-primary shadow-lg bg-card relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground text-xs">Most Popular</Badge>
              </div>
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Business</h3>
                <div className="text-3xl font-bold text-foreground mt-2">R9,500</div>
                <p className="text-muted-foreground text-xs mt-1 mb-4">Ideal for businesses that want to attract clients</p>
                <ul className="space-y-2 mb-6">
                  {["Up to 5–7 pages", "Custom modern design", "Mobile & tablet optimisation", "Enquiry/booking form", "WhatsApp integration", "Google Maps integration", "Basic SEO & speed optimisation"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className="border-2 border-border shadow-lg bg-card relative">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Crown className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Pro</h3>
                <div className="text-3xl font-bold text-foreground mt-2">R14,500</div>
                <p className="text-muted-foreground text-xs mt-1 mb-4">For businesses looking to scale</p>
                <ul className="space-y-2 mb-6">
                  {["Up to 10 pages", "Advanced design & layout", "Booking system integration", "Advanced SEO setup", "Performance optimisation", "Analytics setup"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <a href="#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Premium */}
            <Card className="border-2 border-border shadow-lg bg-card relative">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <Gem className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Premium</h3>
                <div className="text-3xl font-bold text-foreground mt-2">R19,500<span className="text-lg">+</span></div>
                <p className="text-muted-foreground text-xs mt-1 mb-4">For advanced or custom needs</p>
                <ul className="space-y-2 mb-6">
                  {["Fully custom website", "Advanced booking/payment system", "E-commerce or membership", "Full SEO optimisation", "One month support included"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-foreground text-background hover:bg-foreground/90">
                  <a href="#contact">Get Started</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Add-Ons */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-foreground text-center mb-8">Optional Add-Ons</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Monthly maintenance", price: "R300 – R800/mo" },
                { label: "Hosting setup", price: "R500 once-off" },
                { label: "Logo design", price: "R1,000 – R3,000" },
                { label: "Additional pages", price: "R500 per page" },
                { label: "Advanced SEO", price: "From R2,000" },
              ].map(({ label, price }) => (
                <div key={label} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border">
                  <span className="text-sm font-medium text-foreground">{label}</span>
                  <span className="text-sm text-muted-foreground font-semibold">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to elevate your online presence?</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Let's build something great together. We'll have your new website live within 2 weeks — guaranteed.
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
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="font-semibold text-foreground">WhatsApp Us</div>
              <a
                href="https://wa.me/27773584140"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm mt-1 hover:text-foreground transition-colors underline-offset-2 hover:underline"
              >
                +27 77 358 4140
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <Mail className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="font-semibold text-foreground">Email Us</div>
              <a
                href="mailto:elevatedigitalwebs@gmail.com"
                className="text-muted-foreground text-sm mt-1 hover:text-foreground transition-colors underline-offset-2 hover:underline"
              >
                elevatedigitalwebs@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="font-semibold text-foreground">Based In</div>
              <div className="text-muted-foreground text-sm mt-1">Cape Town, South Africa</div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground text-center mb-8">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={elevateLogo} alt="Elevate" className="h-8 w-auto object-contain" loading="lazy" />
          <p className="text-sm text-muted-foreground">
            © 2025 Elevate Digitals. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Packages</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
