import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  jsonLd?: object;
}

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

const SEO = ({ title, description, path = "/", jsonLd }: SEOProps) => {
  const url = `https://elevatedigitals.co.za${path}`;

  useEffect(() => {
    document.title = title;

    setMeta("description", description);
    setMeta("robots", "index, follow");
    setMeta("revisit-after", "7 days");
    setMeta("language", "English");
    setMeta("geo.region", "ZA");
    setMeta("geo.country", "South Africa");
    setMeta("category", "Web Design, Digital Services");

    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", url, true);
    setMeta("og:site_name", "Elevate Digitals", true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    // Canonical
    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) {
      canon = document.createElement("link");
      canon.rel = "canonical";
      document.head.appendChild(canon);
    }
    canon.href = url;

    // JSON-LD
    const ldId = "seo-jsonld";
    let script = document.getElementById(ldId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = ldId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [title, description, url, jsonLd]);

  return null;
};

export default SEO;
