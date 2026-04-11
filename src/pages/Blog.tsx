import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const posts = [
  // PUBLISHED
  {
    emoji: "💰",
    category: "Pricing",
    date: "April 2026",
    title: "How Much Does a Website Cost in South Africa? (2026 Guide)",
    excerpt: "Prices vary wildly — from R2,000 to R200,000. We break down what you actually get at each price point so you can make the right call for your budget.",
    slug: "/blog/website-cost-south-africa",
  },
  {
    emoji: "💬",
    category: "Marketing",
    date: "April 2026",
    title: "How to Use WhatsApp to Get More Customers From Your Website",
    excerpt: "A WhatsApp button on your site can be the single highest-converting element you add. Here's how to set it up right and what message to show first.",
    slug: "/blog/whatsapp-customers-website",
  },
  {
    emoji: "📱",
    category: "Mobile",
    date: "April 2026",
    title: "Why Mobile-First Web Design Matters More in South Africa Than Anywhere Else",
    excerpt: "Over 80% of South African internet users browse on mobile. If your site isn't built for phones first, you're losing the majority of your potential customers.",
    slug: "/blog/mobile-first-web-design-south-africa",
  },
  // COMING SOON
  {
    emoji: "🌐",
    category: "Web Design",
    date: "June 2026",
    title: "Does Your Business Really Need a Website in 2026?",
    excerpt: "Many South African small businesses still rely only on WhatsApp or Facebook. Here's why that's costing you customers — and what to do about it.",
    slug: null,
  },
  {
    emoji: "🔍",
    category: "SEO",
    date: "June 2026",
    title: "Why Your Website Isn't Showing on Google (And How to Fix It)",
    excerpt: "Getting a website built is only half the battle. If Google can't find you, neither can your customers. We break down the most common reasons — and the fixes.",
    slug: null,
  },
  {
    emoji: "✨",
    category: "Web Design",
    date: "May 2026",
    title: "5 Things Every Good Business Website Must Have",
    excerpt: "Not all websites are created equal. These are the five non-negotiables that separate a website that converts visitors into customers from one that doesn't.",
    slug: null,
  },
];
const Blog = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Blog & Insights | Elevate Digitals — Web Design Tips"
        description="Web design tips, SEO advice, and digital marketing insights for South African small businesses. Stay informed with Elevate Digitals."
        path="/blog"
      />

      <section className="bg-[#0f1923] py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t("blog.heading")}<span className="text-primary">{t("blog.heading2")}</span></h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            {t("blog.sub")}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(({ emoji, category, date, title, excerpt, slug }, i) => (
              <AnimatedSection key={title} delay={i * 80}>
                <article className={`bg-card border border-border rounded-xl p-7 transition-all duration-300 h-full flex flex-col ${slug ? "hover:border-primary/30 hover:shadow-lg" : "opacity-60"}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full emoji ${
                      ["SEO", "Marketing", "Pricing"].includes(category)
                        ? "text-white bg-coral"
                        : "text-primary bg-primary/10"
                    }`}>
                      {emoji} {category}
                    </span>
                    <span className="text-xs text-muted-foreground">{date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-2 leading-snug">{title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{excerpt}</p>
                  {slug ? (
                    <Link to={slug} className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                      {t("blog.readMore")} <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-xs font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                      {t("blog.comingSoon")}
                    </span>
                  )}
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
