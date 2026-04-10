import type { Context } from "https://edge.netlify.com";

export default async function handler(req: Request, context: Context) {
  const userAgent = req.headers.get("user-agent") || "";
  
  const crawlers = [
    "googlebot", "bingbot", "slurp", "duckduckbot", "baiduspider",
    "yandexbot", "sogou", "exabot", "facebot", "facebookexternalhit",
    "twitterbot", "rogerbot", "linkedinbot", "whatsapp", "telegrambot"
  ];

  const isCrawler = crawlers.some(bot => userAgent.toLowerCase().includes(bot));

  if (!isCrawler) {
    return context.next();
  }

  const staticHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Elevate Digitals | Web Design South Africa | From R5,500</title>
  <meta name="description" content="Elevate Digitals builds modern, mobile-friendly websites for South African businesses. Custom packages from R5,500 with no hidden fees. Professional website delivered in 2 weeks. WhatsApp us today for a free quote.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://elevatedigitals.co.za/">
</head>
<body>
  <h1>Websites That Grow Your Business</h1>
  <p>Elevate Digitals builds modern, mobile-friendly websites for South African businesses — designed to get you found, trusted, and thriving online. Packages from R5,500.</p>

  <h2>Services</h2>
  <ul>
    <li>Website Design &amp; Build — Custom modern design, mobile responsive, fast &amp; SEO-friendly</li>
    <li>Monthly Maintenance — Security updates, performance monitoring, content updates, uptime guaranteed</li>
    <li>Search Engine Optimisation — Keyword research, on-page SEO, Google Business Profile setup</li>
    <li>E-Commerce Stores — Product catalogue, secure checkout, payment gateway integration</li>
    <li>Content &amp; Copywriting — SEO-optimised writing, homepage &amp; service page content</li>
    <li>WhatsApp &amp; Google Maps Integration — Chat button, maps embed, click-to-call</li>
    <li>Booking Systems — Online booking calendar, email confirmations, custom availability</li>
  </ul>

  <h2>Website Packages</h2>
  <ul>
    <li>Starter — R5,500 once-off (1–3 pages, mobile responsive, contact form, basic SEO, WhatsApp integration)</li>
    <li>Business — R9,500 once-off (5–7 pages, full SEO, WhatsApp &amp; Maps, Google Analytics) — Most Popular</li>
    <li>Pro — R14,500 once-off (up to 10 pages, e-commerce or booking, blog setup, monthly report)</li>
    <li>Premium — R19,500+ (fully custom design &amp; development, no limits)</li>
  </ul>

  <h2>Monthly Maintenance Plans</h2>
  <ul>
    <li>Basic Care — R499/month (security updates, uptime monitoring, monthly backup)</li>
    <li>Full Care — R999/month (content updates, performance reports, priority support)</li>
    <li>Growth Care — R1,999/month (SEO monitoring, 6hr content updates, monthly strategy call)</li>
  </ul>

  <h2>Why Choose Elevate Digitals?</h2>
  <ul>
    <li>Custom design — no templates</li>
    <li>Lightning fast &amp; SEO ready</li>
    <li>Mobile first — perfect on every screen</li>
    <li>Secure &amp; reliable — SSL, backups, security updates</li>
    <li>2-week delivery</li>
    <li>No hidden fees</li>
    <li>Based in South Africa</li>
  </ul>

  <h2>Contact</h2>
  <p>WhatsApp / Phone: +27 65 085 8437</p>
  <p>Email: elevatedigitalwebs@gmail.com</p>
  <p>Website: elevatedigitals.co.za</p>
  <p>Business Hours: Monday–Friday 07:00–19:00, Saturday 12:00–17:00, Sunday Closed</p>
  <a href="/contact">Get a Free Quote</a>
</body>
</html>`;

  return new Response(staticHTML, {
    headers: { "content-type": "text/html" },
  });
}

export const config = { path: "/*" };
