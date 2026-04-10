/**
 * Prerender script — runs after `vite build` to generate static HTML
 * for each route. Uses the SSR bundle built by Vite.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const serverEntry = path.resolve(__dirname, "../dist/server/entry-server.js");

const ROUTES = ["/", "/services", "/packages", "/contact", "/unsubscribe"];

async function prerender() {
  // Read the client-built index.html as the template
  const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");

  // Import the server-rendered module
  const { render } = await import(serverEntry);

  for (const route of ROUTES) {
    console.log(`  Prerendering ${route} ...`);
    const appHtml = render(route);

    // Inject the rendered HTML into the template
    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Determine output path
    const routePath = route === "/" ? "index.html" : `${route.slice(1)}.html`;
    const outFile = path.resolve(distDir, routePath);

    // Ensure directory exists
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html, "utf-8");
    console.log(`  ✓ ${routePath}`);
  }

  console.log("\n✅ Prerendering complete!");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
