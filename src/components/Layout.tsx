import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import elevateLogo from "@/assets/elevate-logo.webp";
import WhatsAppButton from "@/components/WhatsAppButton";
import CurrencySelector from "@/components/CurrencySelector";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinkKeys = [
  { to: "/", key: "nav.home" },
  { to: "/services", key: "nav.services" },
  { to: "/packages", key: "nav.packages" },
  { to: "/blog", key: "nav.blog" },
  { to: "/contact", key: "nav.contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); window.scrollTo(0, 0); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-background">
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "shadow-apple"
            : ""
        }`}
        style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 md:px-12 md:py-4 flex items-center justify-between">
          <Link to="/" className="shrink-0">
            <img src={elevateLogo} alt="Elevate Digitals logo" className="h-[80px] w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-8" style={{ fontSize: "13px", fontWeight: 400 }}>
            {navLinkKeys.map(({ to, key }) => (
              <Link
                key={to}
                to={to}
                className={`relative py-1 transition-colors hover:text-coral ${
                  pathname === to ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {t(key)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 ml-6">
              <LanguageSelector />
              <CurrencySelector />
            </div>
            <Button asChild size="sm" className="hidden md:inline-flex font-medium bg-coral text-white hover:bg-coral-hover" style={{ borderRadius: "980px", fontSize: "13px" }}>
              <Link to="/contact">{t("nav.getStarted")}</Link>
            </Button>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain animate-fade-in"
          style={{ WebkitOverflowScrolling: "touch", top: 0, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)" }}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4" style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img src={elevateLogo} alt="Elevate Digitals logo" className="h-12 w-auto object-contain" />
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 w-full px-6 pt-10 pb-24">
            {navLinkKeys.map(({ to, key }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl transition-colors ${
                  pathname === to ? "text-foreground" : "text-muted-foreground"
                }`}
                style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
              >
                {t(key)}
              </Link>
            ))}
            <div className="w-64 mt-2 space-y-2">
              <LanguageSelector mobile />
              <CurrencySelector mobile />
            </div>
            <Button asChild size="lg" className="mt-2 font-medium w-64 bg-coral text-white hover:bg-coral-hover" style={{ borderRadius: "980px" }}>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                {t("nav.getStarted")}
              </Link>
            </Button>
          </div>
        </div>
      )}

      <main key={pathname} className="animate-fade-in">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-20" style={{ borderTop: "3px solid hsl(14,100%,64%)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <img src={elevateLogo} alt="Elevate Digitals" className="h-12 w-auto object-contain mb-4" loading="lazy" />
              <p className="text-white/50 text-sm leading-relaxed">
                {t("footer.tagline")}
              </p>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 text-white/70" style={{ fontWeight: 600, letterSpacing: "0.08em" }}>{t("footer.company")}</h4>
              <ul className="space-y-2 text-sm">
                {navLinkKeys.map(({ to, key }) => (
                  <li key={to}><Link to={to} className="text-white/50 hover:text-white transition-colors">{t(key)}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 text-white/70" style={{ fontWeight: 600, letterSpacing: "0.08em" }}>{t("footer.services")}</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { key: "footer.websiteDesign" },
                  { key: "footer.monthlyMaintenance" },
                  { key: "why.seoReady", label: "SEO" },
                  { key: "nav.services", label: "E-Commerce" },
                ].map(({ key, label }, i) => (
                  <li key={i}><Link to="/services" className="text-white/50 hover:text-white transition-colors">{label || t(key)}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 text-white/70" style={{ fontWeight: 600, letterSpacing: "0.08em" }}>{t("footer.contact")}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:elevatedigitalwebs@gmail.com" className="text-white/50 hover:text-white transition-colors">elevatedigitalwebs@gmail.com</a></li>
                <li><a href="https://wa.me/27650858437" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">+27 65 085 8437</a></li>
                <li><span className="text-white/50">elevatedigitals.co.za</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-center text-sm text-white/30">
              © 2026 Elevate Digitals. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Layout;
