import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import elevateLogo from "@/assets/elevate-logo.webp";
import WhatsAppButton from "@/components/WhatsAppButton";
import CurrencySelector from "@/components/CurrencySelector";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <nav
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-lg border-border shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
            : "bg-background border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-10 py-5 flex items-center justify-between">
          <Link to="/">
            <img src={elevateLogo} alt="Elevate Digitals logo" className="h-20 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname === to ? "text-primary after:scale-x-100" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <CurrencySelector />
            </div>
            <Button asChild size="sm" className="hidden md:inline-flex font-semibold bg-[hsl(160,37%,46%)] text-white hover:bg-[hsl(160,37%,40%)]">
              <Link to="/contact">Get Started</Link>
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
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-6 animate-fade-in">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl font-bold transition-colors ${
                pathname === to ? "text-primary" : "text-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="w-64 mt-2">
            <CurrencySelector mobile />
          </div>
          <Button asChild size="lg" className="mt-2 font-semibold">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>Get Started</Link>
          </Button>
        </div>
      )}

      <main key={pathname} className="animate-fade-in">
        {children}
      </main>

      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={elevateLogo} alt="Elevate Digitals" className="h-8 w-auto object-contain" loading="lazy" />
          <p className="text-sm text-muted-foreground">
            © 2025 Elevate Digitals. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
            <Link to="/packages" className="hover:text-foreground transition-colors">Packages</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Layout;
