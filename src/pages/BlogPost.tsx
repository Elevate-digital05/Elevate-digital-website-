import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";

const BlogPost = () => (
  <>
    <SEO
      title="How Much Does a Website Cost in South Africa in 2025? | Elevate Digitals"
      description="Complete breakdown of website costs in South Africa. From DIY builders to professional web design agencies. Packages from R5,500. No hidden fees."
      path="/blog/website-cost-south-africa"
    />

    <article className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
              Web Design Tips
            </span>
            <span className="text-xs text-muted-foreground">10 April 2025</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            How Much Does a Website Cost in South Africa in 2025?
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
            <p>
              If you've been Googling "how much does a website cost in South Africa", you're not alone. It's one of the most common questions we get from small business owners across Cape Town, Johannesburg, Durban, and beyond.
            </p>
            <p>
              The honest answer? It depends. But in this article we'll break down exactly what you can expect to pay — and more importantly, what you get for your money.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Short Answer</h2>
            <p>Website costs in South Africa typically range from R2,000 to R50,000+ depending on who builds it and what you need:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li><strong>DIY website builder</strong> (Wix, Squarespace): R300–R800/month</li>
              <li><strong>Freelance web designer:</strong> R3,000–R15,000</li>
              <li><strong>Web design agency:</strong> R5,500–R50,000+</li>
              <li><strong>E-commerce website:</strong> R15,000–R80,000+</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Why DIY Website Builders Often Cost More in the Long Run</h2>
            <p>
              Tools like Wix, Squarespace, and Weebly look cheap at first — around R300 to R800 per month. But over 3 years that's R10,800 to R28,800, and you still end up with a generic-looking site that doesn't rank well on Google.
            </p>
            <p>
              You also spend hours building and maintaining it yourself — time that could go into actually running your business.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Do Professional Web Designers Charge in South Africa?</h2>
            <p>At Elevate Digitals, our packages are transparent and affordable:</p>
            <div className="space-y-4 my-6">
              {[
                { name: "Starter — R5,500", desc: "1–3 pages, mobile-friendly design, WhatsApp integration, basic SEO setup." },
                { name: "Business — R9,500 (Most Popular)", desc: "5–7 pages, custom modern design, enquiry/booking form, WhatsApp and Google Maps integration, basic SEO and speed optimisation." },
                { name: "Pro — R14,500", desc: "Up to 10 pages, advanced design, booking system integration, advanced SEO, analytics setup." },
                { name: "Premium — R19,500+", desc: "Fully custom website with e-commerce, advanced booking/payment systems, full SEO, one month support included." },
              ].map((pkg) => (
                <div key={pkg.name} className="bg-muted/50 border border-border rounded-lg p-4">
                  <p className="font-bold text-foreground">{pkg.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{pkg.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Affects the Price?</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li><strong>Number of pages:</strong> More pages means more design and development time.</li>
              <li><strong>Custom design vs templates:</strong> A fully custom design costs more but stands out from competitors.</li>
              <li><strong>Features and integrations:</strong> Booking systems, payment gateways, and e-commerce add to the cost.</li>
              <li><strong>Ongoing maintenance:</strong> Monthly plans cost R300–R800/month in South Africa.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Hidden Costs to Watch Out For</h2>
            <p>Be careful of anyone who charges extra for:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Domain registration (R150–R300/year for a .co.za)</li>
              <li>Hosting (R100–R500/month)</li>
              <li>SSL certificate (should be free)</li>
              <li>Every small change after launch</li>
            </ul>
            <p className="font-semibold text-foreground">
              At Elevate Digitals we believe in no hidden fees. The price we quote is the price you pay.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Is It Worth Paying for a Professional Website?</h2>
            <p>Absolutely. Here's why:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>75% of consumers judge a company's credibility based on their website design.</li>
              <li>Over 80% of South Africans browse the internet on mobile — a poorly designed site loses you customers every day.</li>
              <li>A professionally built, SEO-optimised site ranks higher on Google bringing you free traffic.</li>
              <li>Your website works 24/7 — even when you're asleep, your website is selling for you.</li>
            </ul>
            <p>
              Ready to get your business online? WhatsApp us on{" "}
              <a href="https://wa.me/27650858437" className="text-primary font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                065 085 8437
              </a>{" "}
              or{" "}
              <Link to="/contact" className="text-primary font-semibold hover:underline">
                get a free quote
              </Link>.
            </p>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={200}>
          <div className="mt-16 bg-primary text-primary-foreground rounded-xl p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Get Your Business Online?</h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto mb-6">
              We'll have your professional website live within 2 weeks. No hidden fees. South Africa based.
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

export default BlogPost;
