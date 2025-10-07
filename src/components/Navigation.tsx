import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", ariaLabel: "Navigate to Home page" },
    { label: "About GIFT City", path: "/about", ariaLabel: "Learn about GIFT City IFSC" },
    { label: "Investment Structures", path: "/investments", ariaLabel: "Explore GIFT IFSC investment information" },
    { label: "Resources", path: "/resources", ariaLabel: "Access GIFT IFSC resources and guides" },
    { label: "Contact Us", path: "/contact", ariaLabel: "Contact us for more information" },
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
            <span className="font-heading font-bold text-xl text-primary">GIFT City Funds</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
          <div className="md:hidden">
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
          <div className="md:hidden">
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