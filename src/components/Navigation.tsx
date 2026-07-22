import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", ariaLabel: "Navigate to Home page" },
    { label: "What Is GIFT City", path: "/what-is-gift-city", ariaLabel: "What is GIFT City and IFSC" },
    { label: "Funds Explained", path: "/funds-explained", ariaLabel: "GIFT City fund structures explained" },
    { label: "Who It's For", path: "/who-its-for", ariaLabel: "Who invests in GIFT City funds" },
    { label: "US NRIs", path: "/us-based-nris", ariaLabel: "GIFT City funds for US-based NRIs" },
    { label: "Taxation", path: "/taxation", ariaLabel: "Taxation and regulatory framework" },
    { label: "Insights", path: "/insights", ariaLabel: "GIFT City insights and articles" },
    { label: "About", path: "/about", ariaLabel: "About the contributor Anup Vatyani" },
    { label: "Contact", path: "/contact", ariaLabel: "Contact us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="GiftCityWealth.in Home">
            <div className="w-10 h-10 gradient-corporate rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base md:text-lg text-primary leading-tight">GIFT CITY FUNDS</span>
              <span className="font-body text-[10px] md:text-xs text-foreground-muted leading-tight">An Informational Guide about GIFT City Funds</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-label={item.ariaLabel}
                className={`font-body text-sm font-medium transition-corporate hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-foreground-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-surface border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-label={item.ariaLabel}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-corporate ${
                    isActive(item.path)
                      ? "text-primary bg-accent"
                      : "text-foreground-muted hover:text-primary hover:bg-accent"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;