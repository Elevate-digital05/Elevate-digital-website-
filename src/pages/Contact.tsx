import { useSearchParams } from "react-router-dom";
import { Mail, MessageCircle, Globe, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");

  return (
    <>
      <SEO
        title="Get a Free Quote | Web Design South Africa | Elevate Digitals"
        description="Ready to get your business online? Contact Elevate Digitals for a free quote. WhatsApp, email, or fill in our quick form."
        path="/contact"
      />

      <section className="bg-[#0f1923] py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Let's Start Your <span className="text-primary">Project</span></h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Fill in the form and we'll get back to you within 24 hours with a free consultation and quote. No pressure, no jargon — just a friendly chat.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                content: (
                  <a href="mailto:elevatedigitalwebs@gmail.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors underline-offset-2 hover:underline">
                    elevatedigitalwebs@gmail.com
                  </a>
                ),
              },
              {
                icon: MessageCircle,
                title: "WhatsApp / Phone",
                content: (
                  <a href="https://wa.me/27650858437" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-foreground transition-colors underline-offset-2 hover:underline">
                    +27 65 085 8437
                  </a>
                ),
              },
              {
                icon: Globe,
                title: "Website",
                content: <span className="text-muted-foreground text-sm">elevatedigitals.co.za</span>,
              },
              {
                icon: Clock,
                title: "Business Hours",
                content: (
                  <div className="text-muted-foreground text-xs space-y-0.5 text-left">
                    <p>Mon–Fri: 07:00–19:00</p>
                    <p>Saturday: 12:00–17:00</p>
                    <p>Sunday: Closed</p>
                  </div>
                ),
              },
            ].map(({ icon: Icon, title, content }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <div className="bg-card border border-border rounded-xl p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <div className="flex justify-center">{content}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Form */}
          <AnimatedSection>
            <div>
              <h2 className="text-xl font-bold text-foreground text-center mb-2">Send Us a Message</h2>
              {plan && (
                <p className="text-center text-primary font-medium mb-6">
                  You selected: <span className="font-bold">{plan} Plan</span>
                </p>
              )}
              <ContactForm selectedPlan={plan} />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;
