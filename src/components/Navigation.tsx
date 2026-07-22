import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const learnItems = [
    { label: "What Is GIFT City", path: "/what-is-gift-city", ariaLabel: "What is GIFT City and IFSC" },
    { label: "Funds Explained", path: "/funds-explained", ariaLabel: "GIFT City fund structures explained" },
    { label: "Who It's For", path: "/who-its-for", ariaLabel: "Who invests in GIFT City funds" },
    { label: "For US NRIs", path: "/us-based-nris", ariaLabel: "GIFT City funds for US-based NRIs" },
    { label: "Taxation", path: "/taxation", ariaLabel: "Taxation and regulatory framework" },
  ];

  const navItems = [
    { label: "Home", path: "/", ariaLabel: "Navigate to Home page" },
    { label: "FAQs", path: "/faqs", ariaLabel: "Frequently asked questions" },
    { label: "Insights", path: "/insights", ariaLabel: "GIFT City insights and articles" },
    { label: "About", path: "/about", ariaLabel: "About the contributor Anup Vatyani" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const learnActive = learnItems.some((i) => i.path === location.pathname);

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" aria-label="GIFT City Funds Home">
            <div className="w-10 h-10 rounded-md flex items-center justify-center border border-brass/40 bg-background">
              <span className="font-heading font-semibold text-lg text-brass">G</span>
            </div>
            <span className="font-heading text-base md:text-lg text-primary leading-tight tracking-tight whitespace-nowrap">
              GIFT City Funds
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5 whitespace-nowrap">
            <Link
              to="/"
              aria-label="Navigate to Home page"
              className={`font-body text-sm font-medium transition-corporate hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground-muted"
              }`}
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`inline-flex items-center gap-1 font-body text-sm font-medium transition-corporate hover:text-primary focus:outline-none ${
                  learnActive ? "text-primary" : "text-foreground-muted"
                }`}
              >
                Learn <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {learnItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} aria-label={item.ariaLabel} className="w-full cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {navItems.filter((i) => i.path !== "/").map((item) => (
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
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center rounded-full border border-brass px-4 py-1.5 font-body text-sm font-medium text-brass hover:bg-brass hover:text-primary-foreground transition-corporate"
            >
              Talk to Anup
            </Link>
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
              {[navItems[0], ...learnItems, ...navItems.slice(1)].map((item) => (
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
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mx-3 mt-2 text-center rounded-full border border-brass px-4 py-2 font-body text-base font-medium text-brass"
              >
                Talk to Anup
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;