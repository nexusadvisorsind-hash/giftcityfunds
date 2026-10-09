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
    { label: "GIFT City AIF", path: "/gift-city-aif", ariaLabel: "GIFT City alternative investment funds" },
    { label: "GIFT City PMS", path: "/gift-city-pms", ariaLabel: "GIFT City portfolio management services" },
    { label: "Feeder Funds", path: "/gift-city-feeder-funds", ariaLabel: "GIFT City feeder funds" },
    { label: "Minimums & Limits", path: "/gift-city-minimum-investment", ariaLabel: "GIFT City minimum investment amounts" },
    { label: "Who It's For", path: "/who-its-for", ariaLabel: "Who invests in GIFT City funds" },
    { label: "Taxation", path: "/taxation", ariaLabel: "Taxation and regulatory framework" },
    { label: "How to Invest", path: "/how-to-invest", ariaLabel: "How to invest in GIFT City funds" },
    { label: "vs Mutual Funds", path: "/gift-city-funds-vs-mutual-funds", ariaLabel: "GIFT City funds compared with regular Indian mutual funds" },
    { label: "Risks", path: "/gift-city-funds-risks", ariaLabel: "Risks of GIFT City funds" },
    { label: "For NRIs", path: "/gift-city-funds-for-nri", ariaLabel: "GIFT City funds for NRIs, country by country" },
    { label: "For OCIs", path: "/gift-city-funds-for-oci", ariaLabel: "GIFT City funds for OCI cardholders" },
    { label: "For Resident Indians", path: "/gift-city-funds-for-resident-indians", ariaLabel: "GIFT City funds for resident Indians" },
    { label: "vs International Funds", path: "/gift-city-vs-international-mutual-funds", ariaLabel: "GIFT City funds compared with international mutual funds" },
    { label: "SIP in GIFT City", path: "/gift-city-sip", ariaLabel: "SIP and monthly investing in GIFT City funds" },
    { label: "US Stocks & ETFs", path: "/gift-city-us-stocks-etfs", ariaLabel: "US stocks and ETFs through GIFT City" },
    { label: "Pros and Cons", path: "/gift-city-funds-pros-and-cons", ariaLabel: "Pros and cons of GIFT City funds" },
    { label: "What Is IFSCA", path: "/what-is-ifsca", ariaLabel: "What is IFSCA, the GIFT City regulator" },
    { label: "vs Singapore & Dubai", path: "/gift-city-vs-singapore-dubai", ariaLabel: "GIFT City compared with Singapore and Dubai" },
    { label: "GIFT Nifty & Exchanges", path: "/gift-city-markets-gift-nifty", ariaLabel: "GIFT Nifty and GIFT City stock exchanges" },
    { label: "Family Offices & FPIs", path: "/gift-city-family-office-fpi", ariaLabel: "Family offices, FPIs and wealth management in GIFT City" },
    { label: "Banks & Business Setup", path: "/gift-city-banks-and-business-setup", ariaLabel: "Banks in GIFT City and business setup" },
    { label: "GIFT City Guide", path: "/gift-city-guide", ariaLabel: "GIFT City guide: location, connectivity and living" },
  ];

  const toolItems = [
    { label: "Fund List", path: "/gift-city-fund-list", ariaLabel: "List of GIFT City fund houses, inbound and outbound" },
    { label: "Route Checker", path: "/gift-city-route-checker", ariaLabel: "Check which GIFT City investment route applies to you" },
    { label: "TCS Calculator", path: "/insights/lrs-tcs-gift-city#calculator", ariaLabel: "TCS on foreign remittance calculator" },
    { label: "Glossary", path: "/gift-city-glossary", ariaLabel: "GIFT City glossary of terms" },
  ];

  const navItems = [
    { label: "Home", path: "/", ariaLabel: "Navigate to Home page" },
    { label: "For US NRIs", path: "/us-based-nris", ariaLabel: "GIFT City funds for US-based NRIs" },
    { label: "FAQs", path: "/faqs", ariaLabel: "Frequently asked questions" },
    { label: "Insights", path: "/insights", ariaLabel: "GIFT City insights and articles" },
    { label: "About", path: "/about", ariaLabel: "About the contributor Anup Vatyani" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const learnActive = learnItems.some((i) => i.path === location.pathname);
  const toolsActive = toolItems.some((i) => i.path === location.pathname);

  return (
    <nav className="bg-ink/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" aria-label="GIFT City Funds Home">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-teal">
              <span className="font-heading font-bold text-lg text-ink">G</span>
            </div>
            <span className="font-heading font-semibold text-base md:text-lg text-white leading-tight tracking-tight whitespace-nowrap">
              GIFT City Funds
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 whitespace-nowrap">
            <Link
              to="/"
              aria-label="Navigate to Home page"
              className={`font-body text-sm font-medium whitespace-nowrap transition-corporate hover:text-white ${
                isActive("/") ? "text-white" : "text-slate-300"
              }`}
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`inline-flex items-center gap-1 font-body text-sm font-medium whitespace-nowrap transition-corporate hover:text-white focus:outline-none ${
                  learnActive ? "text-white" : "text-slate-300"
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
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`inline-flex items-center gap-1 font-body text-sm font-medium whitespace-nowrap transition-corporate hover:text-white focus:outline-none ${
                  toolsActive ? "text-white" : "text-slate-300"
                }`}
              >
                Tools <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52">
                {toolItems.map((item) => (
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
                className={`font-body text-sm font-medium whitespace-nowrap transition-corporate hover:text-white ${
                  isActive(item.path) ? "text-white" : "text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center rounded-full bg-brass px-4 py-2 font-body text-sm font-semibold whitespace-nowrap text-ink transition-transform hover:-translate-y-0.5 hover:bg-brass-light motion-reduce:hover:translate-y-0"
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
              className="p-2 text-white hover:bg-white/10 hover:text-white"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-ink border-t border-white/10">
              {[navItems[0], ...toolItems, ...learnItems, ...navItems.slice(1)].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-label={item.ariaLabel}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-corporate ${
                    isActive(item.path)
                      ? "text-white bg-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mx-3 mt-2 text-center rounded-full bg-brass px-4 py-2 font-body text-base font-semibold text-ink"
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