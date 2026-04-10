import { useSearchParams } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";
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

      {/* Header */}
      <section className="bg-[#0f1923] py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Get In <span className="text-primary">Touch</span></h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Have a question or ready to start? Reach out — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp Us",
                content: (
                    <a href="https://wa.me/27650858437" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-foreground transition-colors underline-offset-2 hover:underline">
                      +27 65 085 8437
                    </a>
                ),
              },
              {
                icon: Mail,
                title: "Email Us",
                content: (
                  <a href="mailto:elevatedigitalwebs@gmail.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors underline-offset-2 hover:underline">
                    elevatedigitalwebs@gmail.com
                  </a>
                ),
              },
              {
                icon: MapPin,
                title: "Based In",
                content: <span className="text-muted-foreground text-sm">Cape Town, South Africa</span>,
              },
            ].map(({ icon: Icon, title, content }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <div className="mt-1">{content}</div>
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
