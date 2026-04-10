/**
 * Prerender script — runs after `vite build` to generate static HTML
 * for each route. Uses the SSR bundle built by Vite.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Polyfill browser globals for SSR
if (typeof globalThis.localStorage === "undefined") {
  const store = {};
  globalThis.localStorage = {
    getItem: (k) => store[k] ?? null,
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
    clear: () => { for (const k in store) delete store[k]; },
    get length() { return Object.keys(store).length; },
    key: (i) => Object.keys(store)[i] ?? null,
  };
}
if (typeof globalThis.window === "undefined") {
  globalThis.window = globalThis;
}
if (typeof globalThis.document === "undefined") {
  const noop = () => {};
  const fakeStyle = new Proxy({}, { get: () => "", has: () => true, set: () => true });
  const fakeEl = () => ({
    setAttribute: noop,
    getAttribute: () => null,
    removeAttribute: noop,
    addEventListener: noop,
    removeEventListener: noop,
    appendChild: noop,
    removeChild: noop,
    insertBefore: noop,
    contains: () => false,
    style: fakeStyle,
    content: "",
    href: "",
    rel: "",
    id: "",
    type: "",
    textContent: "",
    parentNode: null,
    remove: noop,
    classList: { add: noop, remove: noop, contains: () => false },
    dataset: {},
    childNodes: [],
    children: [],
    firstChild: null,
  });
  globalThis.document = {
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: () => fakeEl(),
    createTextNode: () => fakeEl(),
    createComment: () => fakeEl(),
    createDocumentFragment: () => ({ appendChild: noop, childNodes: [] }),
    head: { appendChild: noop, removeChild: noop, querySelectorAll: () => [] },
    body: { appendChild: noop, style: fakeStyle },
    getElementById: () => null,
    getElementsByTagName: () => [],
    title: "",
    dispatchEvent: noop,
    addEventListener: noop,
    removeEventListener: noop,
    documentElement: { style: fakeStyle, setAttribute: noop },
    defaultView: globalThis,
  };
}
if (typeof globalThis.navigator === "undefined") {
  globalThis.navigator = { userAgent: "prerender" };
}
if (typeof globalThis.IntersectionObserver === "undefined") {
  globalThis.IntersectionObserver = class {
    observe() {}
    disconnect() {}
    unobserve() {}
  };
}

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
