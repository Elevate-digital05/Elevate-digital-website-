import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";

const Blog = () => (
  <>
    <SEO
      title="Blog & Insights | Elevate Digitals — Web Design Tips"
      description="Web design tips, SEO advice, and digital marketing insights for South African small businesses. Stay informed with Elevate Digitals."
      path="/blog"
    />

    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase border border-primary/20">
              Blog &amp; Insights
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Tips &amp; insights for growing your business online
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Practical advice on web design, SEO, and digital presence — written for South African entrepreneurs.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <article className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                Web Design Tips
              </span>
              <span className="text-xs text-muted-foreground">10 April 2025</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              How Much Does a Website Cost in South Africa in 2025?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              If you've been Googling "how much does a website cost in South Africa", you're not alone. Here's a complete breakdown of what you can expect to pay — and what you get for your money.
            </p>
            <Button asChild className="bg-[hsl(160,37%,46%)] text-white hover:bg-[hsl(160,37%,40%)] font-semibold">
              <Link to="/blog/website-cost-south-africa">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </article>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Blog;
