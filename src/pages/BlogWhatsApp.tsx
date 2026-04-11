import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";

const BlogWhatsApp = () => (
  <>
    <SEO
      title="How to Use WhatsApp to Get More Customers From Your Website | Elevate Digitals"
      description="A WhatsApp button on your site can be the single highest-converting element you add. Here's how to set it up right and what message to show first."
      path="/blog/whatsapp-customers-website"
    />

    <article className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">Marketing</span>
            <span className="text-xs text-muted-foreground">April 2026</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            How to Use WhatsApp to Get More Customers From Your Website
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
            <p>If you run a small business in South Africa, WhatsApp is probably already your most-used communication tool. But are you using it to its full potential on your website?</p>
            <p>A WhatsApp button on your website can be the single highest-converting element you add — outperforming contact forms, email links, and even phone numbers.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Why WhatsApp Works So Well for South African Businesses</h2>
            <p>Over 90% of South African smartphone users have WhatsApp installed — making it the default communication channel for millions of consumers.</p>
            <p>When a potential customer lands on your website and wants to ask a question, the last thing they want is to fill in a contact form and wait 24 hours. They want an answer now. WhatsApp gives them exactly that — a familiar, instant, low-friction way to reach you.</p>
            <p>Compare the conversion rates:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li><strong>Contact form:</strong> Visitor fills in fields, submits, waits — many drop off</li>
              <li><strong>Email link:</strong> Opens email app, composes message — most don't bother</li>
              <li><strong>Phone call:</strong> Has to dial, might go to voicemail — many avoid calls</li>
              <li><strong>WhatsApp button:</strong> One tap, opens WhatsApp, sends message — instant and easy</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How to Add a WhatsApp Button to Your Website</h2>
            <p>WhatsApp has an official link format that opens a chat directly: <code className="bg-muted px-1.5 py-0.5 rounded text-sm">https://wa.me/[number without spaces or +]</code></p>
            <p>For a South African number like 065 085 8437 the link is:</p>
            <p><code className="bg-muted px-1.5 py-0.5 rounded text-sm">https://wa.me/27650858437</code></p>
            <p>The real trick is adding a pre-filled message so the customer doesn't have to type anything:</p>
            <p><code className="bg-muted px-1.5 py-0.5 rounded text-sm break-all">https://wa.me/27650858437?text=Hi%20Elevate%20Digitals%2C%20I%27d%20like%20a%20free%20quote</code></p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Where to Place the Button</h2>
            <p>For maximum conversions place your WhatsApp button in these locations:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li><strong>Floating button (bottom right corner):</strong> Follows the visitor as they scroll and is always visible. Use WhatsApp green (#25D366) so it's instantly recognisable.</li>
              <li><strong>Hero section:</strong> Add alongside your main CTA button on the homepage.</li>
              <li><strong>Contact page:</strong> Make WhatsApp the most prominent contact option.</li>
              <li><strong>Pricing page:</strong> Add below each plan with a pre-filled message referencing that specific package.</li>
              <li><strong>End of every blog post:</strong> Capture readers while they're engaged.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Pre-filled Message Should You Use?</h2>
            <div className="space-y-4 my-6">
              {[
                { label: "General enquiry", msg: "Hi Elevate Digitals, I'd like to find out more about your website packages." },
                { label: "Pricing page — Starter", msg: "Hi, I'm interested in the Starter website package (R5,500). Can you tell me more?" },
                { label: "Pricing page — Business", msg: "Hi, I'm interested in the Business website package (R9,500). Can you tell me more?" },
                { label: "Contact page", msg: "Hi Elevate Digitals, I'd like a free quote for a new website." },
              ].map((item) => (
                <div key={item.label} className="bg-muted/50 border border-border rounded-lg p-4">
                  <p className="font-bold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">"{item.msg}"</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Setting Up WhatsApp Business</h2>
            <p>Switch from regular WhatsApp to WhatsApp Business (free). Key features:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li><strong>Quick replies:</strong> Set shortcuts like /price that auto-fill your pricing message. Huge time saver.</li>
              <li><strong>Away message:</strong> Automatically reply outside business hours so leads know you'll get back to them.</li>
              <li><strong>Labels:</strong> Organise chats — New Lead, Quote Sent, Project Started, Completed.</li>
              <li><strong>Catalogue:</strong> Showcase your packages directly in WhatsApp.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Quick Replies to Set Up Right Now</h2>
            <div className="space-y-4 my-6">
              {[
                {
                  label: "/price reply",
                  msg: `"Hi! Here's a quick overview of our packages:\n\n⭐ Starter — R5,500 (1–3 pages)\n⚡ Business — R9,500 (5–7 pages) Most Popular\n👑 Pro — R14,500 (up to 10 pages)\n💎 Premium — R19,500+ (fully custom)\n\nAll packages include mobile design, WhatsApp integration, and SEO. No hidden fees! Which would you like to know more about? 😊"`,
                },
                {
                  label: "/quote reply",
                  msg: `"To give you an accurate quote, could you tell me:\n\n1. What type of business do you have?\n2. How many pages do you need roughly?\n3. Any special features needed (booking, online shop)?\n\nNo pressure — just helps us give the right recommendation!"`,
                },
                {
                  label: "/turnaround reply",
                  msg: `"Most websites are completed and live within 2 weeks of getting started! We'll keep you updated throughout. 🚀"`,
                },
              ].map((item) => (
                <div key={item.label} className="bg-muted/50 border border-border rounded-lg p-4">
                  <p className="font-bold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">{item.msg}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Summary Checklist</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Download WhatsApp Business and set up your profile</li>
              <li>Add a floating WhatsApp button to your website</li>
              <li>Use correct link format: https://wa.me/27XXXXXXXXX</li>
              <li>Add a pre-filled message to your button link</li>
              <li>Set up quick replies for /price, /quote, /turnaround</li>
              <li>Set an away message for outside business hours</li>
              <li>Track WhatsApp clicks in Google Analytics</li>
            </ul>

            <p>
              Ready to get WhatsApp set up on your site? WhatsApp us on{" "}
              <a href="https://wa.me/27650858437" className="text-primary font-semibold hover:underline" target="_blank" rel="noopener noreferrer">065 085 8437</a>
              {" "}or{" "}
              <Link to="/contact" className="text-primary font-semibold hover:underline">get a free quote</Link>.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="mt-16 bg-primary text-primary-foreground rounded-xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Need Help With Your Website?</h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto mb-6">
              We build mobile-first, WhatsApp-ready websites for South African businesses. Packages from R5,500.
            </p>
            <Button asChild size="lg" className="bg-black text-white font-semibold hover:bg-black/90">
              <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </article>
  </>
);

export default BlogWhatsApp;
