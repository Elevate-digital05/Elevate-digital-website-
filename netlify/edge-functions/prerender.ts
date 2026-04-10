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
  <meta name="description" content="Professional web design for South African businesses. Modern websites from R5,500. 2-week turnaround. WhatsApp us today.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://elevatedigitals.co.za/">
</head>
<body>
  <h1>Elevate Digitals — Web Design South Africa</h1>
  <p>We build modern, mobile-friendly websites for South African businesses. Packages from R5,500. 2-week turnaround. No hidden fees.</p>

  <h2>Services</h2>
  <ul>
    <li>Website Design &amp; Development</li>
    <li>Monthly Website Maintenance from R300/month</li>
    <li>SEO Optimisation</li>
    <li>WhatsApp &amp; Google Maps Integration</li>
  </ul>

  <h2>Packages</h2>
  <ul>
    <li>Starter — R5,500 (1–3 pages)</li>
    <li>Business — R9,500 (5–7 pages)</li>
    <li>Pro — R14,500 (up to 10 pages)</li>
    <li>Premium — R19,500+ (fully custom)</li>
  </ul>

  <h2>Contact</h2>
  <p>WhatsApp: +27 77 358 4140</p>
  <p>Email: elevatedigitalwebs@gmail.com</p>
  <a href="/contact">Get a Free Quote</a>
</body>
</html>`;

  return new Response(staticHTML, {
    headers: { "content-type": "text/html" },
  });
}

export const config = { path: "/*" };
