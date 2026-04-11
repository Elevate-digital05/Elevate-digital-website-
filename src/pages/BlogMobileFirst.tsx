import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import AnimatedSection from "@/components/AnimatedSection";

const BlogMobileFirst = () => (
  <>
    <SEO
      title="Why Mobile-First Web Design Matters More in South Africa | Elevate Digitals"
      description="Over 80% of South African internet users browse on mobile. If your site isn't built for phones first, you're losing the majority of your potential customers."
      path="/blog/mobile-first-web-design-south-africa"
    />

    <article className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">Mobile</span>
            <span className="text-xs text-muted-foreground">April 2026</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            Why Mobile-First Web Design Matters More in South Africa Than Anywhere Else
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
            <p>If your website isn't built for mobile, you're losing the majority of your potential customers. In South Africa this isn't just a best practice — it's a survival requirement.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Numbers Don't Lie</h2>
            <p>South Africa has a unique internet landscape:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Over 80% of South Africans access the internet primarily via mobile phone</li>
              <li>Mobile internet usage in SA has grown over 200% in the past 5 years</li>
              <li>Many South Africans have never owned a desktop — their smartphone IS their computer</li>
              <li>When someone searches for your services on Google, they are almost certainly doing it on their phone</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Is Mobile-First Web Design?</h2>
            <p>Mobile-first means designing the mobile experience first — then adapting to desktop. This is the opposite of the old approach where designers built for desktop and tried to squish it down to fit on a phone.</p>
            <p>Mobile-first results in a website that feels natural and effortless on a phone — exactly what your South African customers expect.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Makes a Website Truly Mobile-Friendly?</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li><strong>Fast loading speed:</strong> Every extra second costs you customers. A 3 second load time means 53% of mobile visitors leave. A mobile-first website is optimised for speed — compressed images, minimal code, efficient loading.</li>
              <li><strong>Large tappable buttons:</strong> Buttons need to be at least 44×44 pixels — easy to tap without hitting something else.</li>
              <li><strong>Readable text without zooming:</strong> Text should be at least 16px and the layout should allow comfortable reading without horizontal scrolling.</li>
              <li><strong>Simple thumb-friendly navigation:</strong> A hamburger menu or bottom navigation that's easy to use with one hand.</li>
              <li><strong>Click-to-WhatsApp:</strong> Phone numbers and WhatsApp links should be tappable with one tap.</li>
              <li><strong>Forms that work on mobile:</strong> Large input fields, sensible keyboard types, and minimal required fields.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How Google Treats Mobile-Unfriendly Websites</h2>
            <p>In 2019 Google switched to mobile-first indexing — Google now uses the mobile version of your website as the primary version for ranking. If your mobile site is poor quality, your Google rankings suffer regardless of how good your desktop site looks.</p>
            <p>For South African businesses trying to rank on Google, mobile optimisation is not optional — it's one of the most important ranking factors.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Common Mobile Problems We Fix</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Text too small to read</li>
              <li>Buttons too close together</li>
              <li>Images not resizing correctly</li>
              <li>Slow loading on mobile data</li>
              <li>Navigation impossible on touch screens</li>
              <li>Forms too complicated</li>
              <li>No click-to-WhatsApp</li>
            </ul>
            <p>Every one of these issues costs businesses customers every single day.</p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How to Check If Your Website Is Mobile-Friendly</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li><strong>Google Mobile-Friendly Test:</strong> search.google.com/test/mobile-friendly</li>
              <li><strong>PageSpeed Insights:</strong> pagespeed.web.dev</li>
              <li>Check your mobile score — aim for 80 or above.</li>
              <li><strong>Just use your phone:</strong> Open your website on your smartphone and try to use it as a normal visitor would.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Bottom Line</h2>
            <p>South Africa is a mobile-first country. Your customers are on their phones. Google ranks mobile experiences first. A mobile-first website isn't a luxury — it's the baseline standard for any business that wants to compete online in 2026.</p>

            <p>
              Ready for a website that works on every device? WhatsApp us on{" "}
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

export default BlogMobileFirst;
