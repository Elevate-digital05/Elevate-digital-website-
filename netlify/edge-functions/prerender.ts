import type { Context } from "https://edge.netlify.com";

export default async function handler(req: Request, context: Context) {
  const userAgent = req.headers.get("user-agent") || "";

  // Comprehensive list of crawlers, bots, and AI agents
  const crawlers = [
    // Search engine crawlers
    "googlebot", "bingbot", "slurp", "duckduckbot", "baiduspider",
    "yandexbot", "sogou", "exabot", "ia_archiver", "archive.org_bot",
    // Social media / link preview
    "facebot", "facebookexternalhit", "twitterbot", "linkedinbot",
    "whatsapp", "telegrambot", "slackbot", "discordbot", "pinterestbot",
    "skypeuripreview", "vkshare", "redditbot",
    // AI agents and LLM crawlers
    "gptbot", "chatgpt-user", "oai-searchbot",
    "claude-web", "claudebot", "anthropic-ai",
    "google-extended", "gemini",
    "perplexitybot", "perplexity-user",
    "cohere-ai", "cohere-training",
    "amazonbot", "meta-externalagent", "meta-externalfetcher",
    "bytespider", "bytedance",
    "applebot",
    "ccbot", "commoncrawl",
    "diffbot", "friendlycrawler",
    "youbot", "you.com",
    "phind", "phindbot",
    "seekr",
    "iaskbot",
    // SEO and monitoring tools
    "rogerbot", "semrushbot", "ahrefsbot", "mj12bot", "dotbot",
    "screaming frog", "seokicks", "sistrix",
    // Generic bot patterns
    "crawler", "spider", "scraper", "fetcher",
    "headlesschrome", "phantomjs", "prerender",
  ];

  const ua = userAgent.toLowerCase();
  const isCrawler = crawlers.some((bot) => ua.includes(bot));

  if (!isCrawler) {
    return context.next();
  }

  const url = new URL(req.url);
  const path = url.pathname.replace(/\/+$/, "") || "/";

  const html = getPrerenderedHTML(path);

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-prerendered": "true",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

function getPrerenderedHTML(path: string): string {
  const pages: Record<string, { title: string; description: string; canonical: string; body: string }> = {
    "/": {
      title: "Web Design South Africa | Elevate Digitals — From R5,500",
      description: "Professional web design for South African small businesses. Modern, mobile-friendly websites from R5,500. Based in South Africa. 2-week turnaround. WhatsApp us today.",
      canonical: "https://elevatedigitals.co.za/",
      body: `
  <h1>We Build Websites That Grow Your Business</h1>
  <p>Elevate Digitals builds modern, mobile-friendly websites for South African businesses — designed to get you found, trusted, and thriving online. Packages from R5,500 with no hidden fees. Professional websites delivered in 2 weeks.</p>

  <section>
    <h2>Why Choose Elevate Digitals</h2>
    <ul>
      <li><strong>Custom Design</strong> — Every site is designed from scratch. No templates.</li>
      <li><strong>Lightning Fast</strong> — Optimised for speed with a 96% performance score.</li>
      <li><strong>Mobile First</strong> — Perfect on every screen size. 100% accessibility.</li>
      <li><strong>SEO Ready</strong> — Built to rank on Google from day one.</li>
      <li><strong>Secure &amp; Reliable</strong> — SSL, backups, and security updates included.</li>
      <li><strong>WhatsApp Integration</strong> — Let customers reach you instantly.</li>
    </ul>
  </section>

  <section>
    <h2>How It Works</h2>
    <ol>
      <li><strong>Discovery</strong> — We learn about your business, goals, and audience.</li>
      <li><strong>Design</strong> — We create a custom design tailored to your brand.</li>
      <li><strong>Build</strong> — We develop your website with clean, fast code.</li>
      <li><strong>Launch</strong> — Your website goes live and starts working for you.</li>
    </ol>
  </section>

  <section>
    <h2>Website Packages</h2>
    <ul>
      <li><strong>Starter — R5,500</strong> (1–3 pages, mobile responsive, contact form, basic SEO, WhatsApp integration, 2-week delivery)</li>
      <li><strong>Business — R9,500</strong> (5–7 pages, full SEO, WhatsApp &amp; Maps, Google Analytics, 2-week delivery) — Most Popular</li>
      <li><strong>Pro — R14,500</strong> (up to 10 pages, e-commerce or booking, blog setup, monthly report, 2-week delivery)</li>
      <li><strong>Premium — R19,500+</strong> (fully custom design &amp; development, no limits)</li>
    </ul>
    <a href="/packages">View All Packages</a>
  </section>

  <section>
    <h2>Our Services</h2>
    <ul>
      <li>Website Design &amp; Build</li>
      <li>Monthly Maintenance</li>
      <li>Search Engine Optimisation (SEO)</li>
      <li>E-Commerce Stores</li>
      <li>Content &amp; Copywriting</li>
      <li>WhatsApp &amp; Google Maps Integration</li>
      <li>Booking Systems</li>
    </ul>
    <a href="/services">View All Services</a>
  </section>

  <section>
    <h2>Contact Elevate Digitals</h2>
    <p>WhatsApp / Phone: <a href="tel:+27650858437">+27 65 085 8437</a></p>
    <p>Email: <a href="mailto:elevatedigitalwebs@gmail.com">elevatedigitalwebs@gmail.com</a></p>
    <p>Website: <a href="https://elevatedigitals.co.za">elevatedigitals.co.za</a></p>
    <p>Business Hours: Monday–Friday 07:00–19:00, Saturday 12:00–17:00, Sunday Closed</p>
    <a href="/contact">Get a Free Quote</a>
  </section>`,
    },

    "/services": {
      title: "Web Design & Maintenance Services | Elevate Digitals South Africa",
      description: "Custom website design and monthly maintenance for South African businesses. Mobile-friendly, SEO-optimised, and delivered in 2 weeks.",
      canonical: "https://elevatedigitals.co.za/services",
      body: `
  <h1>Services We Offer</h1>
  <p>Modern websites that get you found online — and keep running smoothly every month.</p>

  <section>
    <h2>Website Design &amp; Build</h2>
    <p>Get a stunning, custom-designed website that represents your brand and converts visitors into customers.</p>
    <ul>
      <li>Custom modern design</li>
      <li>Mobile responsive</li>
      <li>Fast &amp; SEO-friendly</li>
      <li>New sites or redesigns</li>
      <li>Contact forms &amp; CTAs</li>
    </ul>
  </section>

  <section>
    <h2>Monthly Maintenance</h2>
    <p>Keep your website running smoothly with our monthly maintenance plans. We handle the tech so you can focus on your business.</p>
    <ul>
      <li>Security updates</li>
      <li>Performance monitoring</li>
      <li>Content updates</li>
      <li>Uptime guaranteed</li>
      <li>Monthly reports</li>
    </ul>
  </section>

  <section>
    <h2>Search Engine Optimisation (SEO)</h2>
    <p>Get found on Google and other search engines. We optimise your website so customers can find you when they search for your services.</p>
    <ul>
      <li>Keyword research</li>
      <li>On-page SEO</li>
      <li>Google Business Profile setup</li>
      <li>Technical SEO audit</li>
      <li>Monthly ranking reports</li>
    </ul>
  </section>

  <section>
    <h2>E-Commerce Stores</h2>
    <p>Sell your products online with a professional e-commerce store. Secure payments, inventory management, and order tracking included.</p>
    <ul>
      <li>Product catalogue</li>
      <li>Secure checkout</li>
      <li>Payment gateway integration</li>
      <li>Inventory management</li>
      <li>Order notifications</li>
    </ul>
  </section>

  <section>
    <h2>Content &amp; Copywriting</h2>
    <p>Professional, SEO-optimised content that tells your story and drives action.</p>
    <ul>
      <li>Homepage &amp; about copy</li>
      <li>Service page content</li>
      <li>SEO-optimised writing</li>
      <li>Blog posts</li>
      <li>Proofreading &amp; editing</li>
    </ul>
  </section>

  <section>
    <h2>WhatsApp &amp; Google Maps Integration</h2>
    <p>Make it easy for customers to contact you and find your location.</p>
    <ul>
      <li>WhatsApp chat button</li>
      <li>Google Maps embed</li>
      <li>Click-to-call setup</li>
      <li>Google Business Profile link</li>
      <li>Mobile optimised</li>
    </ul>
  </section>

  <section>
    <h2>Booking Systems</h2>
    <p>Let customers book appointments directly from your website.</p>
    <ul>
      <li>Online booking calendar</li>
      <li>Email confirmations</li>
      <li>Service &amp; staff selection</li>
      <li>Mobile friendly</li>
      <li>Custom availability</li>
    </ul>
  </section>

  <p>Not sure which service you need? <a href="/contact">Let's chat — get a free quote.</a></p>`,
    },

    "/packages": {
      title: "Website Packages South Africa | From R5,500 | Elevate Digitals",
      description: "Transparent website pricing for South African businesses. Starter from R5,500. Business from R9,500. No hidden fees.",
      canonical: "https://elevatedigitals.co.za/packages",
      body: `
  <h1>Website Packages</h1>
  <p>Choose the package that fits your business. No hidden fees.</p>

  <section>
    <h2>Website Packages</h2>

    <article>
      <h3>Starter — R5,500 (once-off)</h3>
      <p>Best for small businesses getting started online.</p>
      <ul>
        <li>1–3 pages</li>
        <li>Mobile responsive</li>
        <li>Contact form</li>
        <li>Basic SEO setup</li>
        <li>WhatsApp integration</li>
        <li>2-week delivery</li>
      </ul>
    </article>

    <article>
      <h3>Business — R9,500 (once-off) — Most Popular</h3>
      <p>Everything you need to look professional and get found online.</p>
      <ul>
        <li>5–7 pages</li>
        <li>Mobile responsive</li>
        <li>Contact form</li>
        <li>Full SEO optimisation</li>
        <li>WhatsApp &amp; Maps integration</li>
        <li>Google Analytics setup</li>
        <li>2-week delivery</li>
      </ul>
    </article>

    <article>
      <h3>Pro — R14,500 (once-off)</h3>
      <p>For growing businesses that need advanced features.</p>
      <ul>
        <li>Up to 10 pages</li>
        <li>E-commerce or booking system</li>
        <li>Full SEO optimisation</li>
        <li>WhatsApp &amp; Maps integration</li>
        <li>Google Analytics setup</li>
        <li>Blog setup</li>
        <li>Analytics + monthly report</li>
        <li>2-week delivery</li>
      </ul>
    </article>

    <article>
      <h3>Premium — R19,500+ (once-off)</h3>
      <p>Fully custom design and development with no limits on pages, features, or complexity.</p>
    </article>
  </section>

  <section>
    <h2>Monthly Maintenance Plans</h2>

    <article>
      <h3>Basic Care — R499/month</h3>
      <ul>
        <li>Security updates</li>
        <li>Uptime monitoring</li>
        <li>Monthly backup</li>
      </ul>
    </article>

    <article>
      <h3>Full Care — R999/month — Recommended</h3>
      <ul>
        <li>Everything in Basic Care</li>
        <li>Content updates (2hr)</li>
        <li>Performance reports</li>
        <li>Priority support</li>
      </ul>
    </article>

    <article>
      <h3>Growth Care — R1,999/month</h3>
      <ul>
        <li>Everything in Full Care</li>
        <li>Content updates (6hr)</li>
        <li>SEO monitoring</li>
        <li>Monthly strategy call</li>
      </ul>
    </article>
  </section>

  <p><a href="/contact">Get a free quote today.</a></p>`,
    },

    "/blog": {
      title: "Blog & Insights | Elevate Digitals — Web Design Tips",
      description: "Web design tips, SEO advice, and digital marketing insights for South African small businesses. Stay informed with Elevate Digitals.",
      canonical: "https://elevatedigitals.co.za/blog",
      body: `
  <h1>Blog &amp; Insights</h1>
  <p>Web design tips, SEO advice, and digital marketing insights for South African small businesses.</p>

  <article>
    <h2><a href="/blog/website-cost-south-africa">How Much Does a Website Cost in South Africa? (2026 Guide)</a></h2>
    <p>Category: Pricing — May 2026</p>
    <p>Complete breakdown of website costs in South Africa — from DIY builders to professional agencies. Find out what you should really be paying.</p>
  </article>

  <article>
    <h2>Does Your Business Really Need a Website in 2026?</h2>
    <p>Category: Web Design — June 2026</p>
    <p>Still wondering if a website is worth it? Here's why every South African business needs a professional online presence in 2026.</p>
  </article>

  <article>
    <h2>Why Your Website Isn't Showing on Google (And How to Fix It)</h2>
    <p>Category: SEO — June 2026</p>
    <p>If your website isn't ranking on Google, these common SEO mistakes could be why. Learn how to fix them and start getting found.</p>
  </article>

  <article>
    <h2>5 Things Every Good Business Website Must Have</h2>
    <p>Category: Web Design — May 2026</p>
    <p>Before you launch (or redesign), make sure your business website ticks these five essential boxes for success.</p>
  </article>

  <article>
    <h2>How to Use WhatsApp to Get More Customers From Your Website</h2>
    <p>Category: Marketing — April 2026</p>
    <p>WhatsApp is the most popular messaging app in South Africa. Here's how to use it on your website to drive leads and sales.</p>
  </article>

  <article>
    <h2>Why Mobile-First Web Design Matters More in South Africa Than Anywhere Else</h2>
    <p>Category: Mobile — April 2026</p>
    <p>With over 80% of South Africans browsing on mobile, mobile-first design isn't optional — it's essential. Here's why.</p>
  </article>`,
    },

    "/blog/website-cost-south-africa": {
      title: "How Much Does a Website Cost in South Africa in 2026? | Elevate Digitals",
      description: "Complete breakdown of website costs in South Africa. From DIY builders to professional web design agencies. Packages from R5,500. No hidden fees.",
      canonical: "https://elevatedigitals.co.za/blog/website-cost-south-africa",
      body: `
  <article>
    <h1>How Much Does a Website Cost in South Africa in 2026?</h1>
    <p>Published: 10 April 2026 — Category: Web Design Tips</p>

    <section>
      <h2>The Short Answer</h2>
      <p>Here's a quick overview of what you can expect to pay for a website in South Africa in 2026:</p>
      <ul>
        <li><strong>DIY website builder</strong> (Wix, Squarespace): R300–R800/month</li>
        <li><strong>Freelance web designer</strong>: R3,000–R15,000</li>
        <li><strong>Web design agency</strong>: R5,500–R50,000+</li>
        <li><strong>E-commerce website</strong>: R15,000–R80,000+</li>
      </ul>
    </section>

    <section>
      <h2>Why DIY Website Builders Often Cost More in the Long Run</h2>
      <p>While platforms like Wix and Squarespace seem affordable at R300–R800/month, the costs add up quickly. After 12 months you've spent R3,600–R9,600 — and you still don't own a custom website. Professional websites are a once-off investment that pays for itself.</p>
    </section>

    <section>
      <h2>What Do Professional Web Designers Charge in South Africa?</h2>
      <p>At Elevate Digitals, our transparent pricing is designed for South African small businesses:</p>
      <ul>
        <li><strong>Starter — R5,500</strong>: 1–3 pages, mobile responsive, contact form, basic SEO, WhatsApp integration</li>
        <li><strong>Business — R9,500</strong>: 5–7 pages, full SEO, WhatsApp &amp; Maps, Google Analytics</li>
        <li><strong>Pro — R14,500</strong>: Up to 10 pages, e-commerce or booking, blog setup, monthly report</li>
        <li><strong>Premium — R19,500+</strong>: Fully custom, no limits</li>
      </ul>
    </section>

    <section>
      <h2>What Affects the Price of a Website?</h2>
      <ul>
        <li><strong>Number of pages</strong> — More pages means more design and development work.</li>
        <li><strong>Custom design vs templates</strong> — Custom designs cost more but deliver better results.</li>
        <li><strong>Features and integrations</strong> — E-commerce, booking systems, and APIs add complexity.</li>
        <li><strong>Ongoing maintenance</strong> — Security updates, content changes, and performance monitoring.</li>
      </ul>
    </section>

    <section>
      <h2>Hidden Costs to Watch Out For</h2>
      <ul>
        <li>Domain registration (R100–R300/year)</li>
        <li>Hosting fees (R50–R500/month)</li>
        <li>SSL certificate (often free, but some providers charge)</li>
        <li>Content changes and updates (varies)</li>
      </ul>
      <p>At Elevate Digitals, we include hosting, SSL, and delivery in our once-off packages — no hidden fees.</p>
    </section>

    <section>
      <h2>Is It Worth Paying for a Professional Website?</h2>
      <ul>
        <li>75% of consumers judge a business's credibility based on its website design.</li>
        <li>80% of South Africans browse on mobile — a mobile-optimised site is essential.</li>
        <li>Professional SEO-optimised websites rank higher on Google.</li>
        <li>Your website works for you 24/7, generating leads while you sleep.</li>
      </ul>
    </section>

    <p>Ready to get started? <a href="/contact">Get a free quote</a> or WhatsApp us at <a href="https://wa.me/27650858437">+27 65 085 8437</a>.</p>
  </article>`,
    },

    "/contact": {
      title: "Get a Free Quote | Web Design South Africa | Elevate Digitals",
      description: "Ready to get your business online? Contact Elevate Digitals for a free quote. WhatsApp, email, or fill in our quick form.",
      canonical: "https://elevatedigitals.co.za/contact",
      body: `
  <h1>Get In Touch</h1>
  <p>Have a question or ready to start? Reach out — we'd love to hear from you.</p>

  <section>
    <h2>Contact Information</h2>
    <ul>
      <li><strong>Email:</strong> <a href="mailto:elevatedigitalwebs@gmail.com">elevatedigitalwebs@gmail.com</a></li>
      <li><strong>WhatsApp:</strong> <a href="https://wa.me/27650858437">+27 65 085 8437</a></li>
      <li><strong>Website:</strong> <a href="https://elevatedigitals.co.za">elevatedigitals.co.za</a></li>
    </ul>

    <h3>Business Hours</h3>
    <ul>
      <li>Monday–Friday: 07:00–19:00</li>
      <li>Saturday: 12:00–17:00</li>
      <li>Sunday: Closed</li>
    </ul>
  </section>

  <section>
    <h2>Request a Free Quote</h2>
    <p>Fill in the form below and we'll get back to you within 24 hours.</p>
    <form>
      <label>Name</label>
      <label>Email</label>
      <label>Phone (optional)</label>
      <label>Service interested in: Website Design, Monthly Maintenance, SEO, E-Commerce, Content Writing, Other</label>
      <label>Budget range: Under R5,000 / R5,000–R10,000 / R10,000–R20,000 / R20,000+</label>
      <label>Message</label>
    </form>
  </section>`,
    },
  };

  const page = pages[path];
  if (!page) {
    // For unknown routes, serve the homepage content as fallback
    const home = pages["/"];
    return buildHTML(home.title, home.description, home.canonical, home.body);
  }

  return buildHTML(page.title, page.description, page.canonical, page.body);
}

function buildHTML(title: string, description: string, canonical: string, body: string): string {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Elevate Digitals",
    url: "https://elevatedigitals.co.za",
    description: "Professional web design for South African small businesses. Modern, mobile-friendly websites from R5,500.",
    telephone: "+27650858437",
    email: "elevatedigitalwebs@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZA",
    },
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    priceRange: "R5,500 - R19,500+",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "12:00", closes: "17:00" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website Packages",
      itemListElement: [
        { "@type": "Offer", name: "Starter Package", price: "5500", priceCurrency: "ZAR", description: "1–3 pages, mobile responsive, contact form, basic SEO, WhatsApp integration" },
        { "@type": "Offer", name: "Business Package", price: "9500", priceCurrency: "ZAR", description: "5–7 pages, full SEO, WhatsApp & Maps, Google Analytics" },
        { "@type": "Offer", name: "Pro Package", price: "14500", priceCurrency: "ZAR", description: "Up to 10 pages, e-commerce or booking, blog setup, monthly report" },
        { "@type": "Offer", name: "Premium Package", price: "19500", priceCurrency: "ZAR", description: "Fully custom design & development, no limits" },
      ],
    },
    sameAs: ["https://wa.me/27650858437"],
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="Elevate Digitals">
  <meta property="og:image" content="https://elevatedigitals.co.za/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="geo.region" content="ZA">
  <meta name="geo.placename" content="South Africa">
  <script type="application/ld+json">${jsonLd}</script>
</head>
<body>
  <header>
    <nav>
      <a href="/">Elevate Digitals</a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/packages">Packages</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
  ${body}
  </main>

  <footer>
    <p>&copy; ${new Date().getFullYear()} Elevate Digitals. All rights reserved.</p>
    <p>Professional web design for South African businesses.</p>
    <nav>
      <a href="/">Home</a> |
      <a href="/services">Services</a> |
      <a href="/packages">Packages</a> |
      <a href="/blog">Blog</a> |
      <a href="/contact">Contact</a>
    </nav>
    <p>WhatsApp: <a href="https://wa.me/27650858437">+27 65 085 8437</a> | Email: <a href="mailto:elevatedigitalwebs@gmail.com">elevatedigitalwebs@gmail.com</a></p>
  </footer>
</body>
</html>`;
}

export const config = { path: "/*" };
