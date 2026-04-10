import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";

const blogPosts = [
  {
    title: "5 Reasons Your Small Business Needs a Website in 2025",
    excerpt: "Still relying on social media alone? Here's why a professional website is essential for growth in the South African market.",
    date: "Coming Soon",
    category: "Business Tips",
  },
  {
    title: "How to Choose the Right Website Package for Your Business",
    excerpt: "Not sure whether you need a Starter or Pro package? We break down what each option offers and who it's best for.",
    date: "Coming Soon",
    category: "Web Design",
  },
  {
    title: "SEO Basics: Getting Your Website Found on Google",
    excerpt: "A beginner-friendly guide to search engine optimisation for South African small businesses.",
    date: "Coming Soon",
    category: "SEO",
  },
];

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

        <div className="grid gap-8">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 100}>
              <article className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">{post.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="text-center mt-16 bg-muted/50 rounded-xl p-10 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-3">Articles coming soon!</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We're working on helpful content for SA business owners. In the meantime, get in touch for a free consultation.
            </p>
            <Button asChild className="bg-[hsl(160,37%,46%)] text-white hover:bg-[hsl(160,37%,40%)] font-semibold">
              <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Blog;
