import { Link } from "react-router-dom";
import { openCookieSettings } from "@/lib/analytics";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-teal rounded-xl flex items-center justify-center">
                <span className="text-ink font-heading font-bold text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg">GIFT CITY FUNDS</span>
                <span className="text-sm text-primary-foreground/80">An Informational Resource on GIFT City and IFSC Frameworks</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              giftcityfunds.in provides information about GIFT City and IFSC investment frameworks for NRIs and HNIs. Owned and operated by Anup Vatyani, AMFI-registered Mutual Fund Distributor (ARN 106715).
              <br /><br />
              This platform shares educational resources only and does not offer personalized investment advice or financial planning.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 9537533533</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@giftcityfunds.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/what-is-gift-city" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">What is GIFT City</Link>
              </li>
              <li>
                <Link to="/funds-explained" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">Funds Explained</Link>
              </li>
              <li>
                <Link to="/who-its-for" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">Who It's For</Link>
              </li>
              <li>
                <Link to="/gift-city-funds-vs-mutual-funds" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">GIFT City Funds vs Mutual Funds</Link>
              </li>
              <li>
                <Link to="/gift-city-funds-risks" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">Risks</Link>
              </li>
              <li>
                <Link to="/gift-city-funds-for-nri" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">For NRIs</Link>
              </li>
              <li>
                <Link to="/gift-city-funds-for-oci" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">For OCIs</Link>
              </li>
              <li>
                <Link to="/gift-city-funds-for-resident-indians" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">For Resident Indians</Link>
              </li>
              <li>
                <Link to="/us-based-nris" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">US NRIs</Link>
              </li>
              <li>
                <Link to="/taxation" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">Taxation</Link>
              </li>
              <li>
                <Link to="/how-to-invest" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">How to Invest</Link>
              </li>
              <li>
                <Link to="/gift-city-aif" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">GIFT City AIF</Link>
              </li>
              <li>
                <Link to="/gift-city-pms" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">GIFT City PMS</Link>
              </li>
              <li>
                <Link to="/gift-city-feeder-funds" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">Feeder Funds</Link>
              </li>
              <li>
                <Link to="/gift-city-minimum-investment" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">Minimums & Limits</Link>
              </li>
              <li>
                <Link to="/gift-city-fund-list" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">GIFT City Fund List</Link>
              </li>
              <li>
                <Link to="/gift-city-route-checker" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">Route Checker</Link>
              </li>
              <li>
                <Link to="/insights/lrs-tcs-gift-city#calculator" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">TCS Calculator</Link>
              </li>
              <li>
                <Link to="/gift-city-sip" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">SIP in GIFT City</Link>
              </li>
              <li>
                <Link to="/gift-city-vs-international-mutual-funds" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">vs International Funds</Link>
              </li>
              <li>
                <Link to="/gift-city-us-stocks-etfs" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">US Stocks & ETFs</Link>
              </li>
              <li>
                <Link to="/gift-city-funds-pros-and-cons" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">Pros and Cons</Link>
              </li>
              <li>
                <Link to="/what-is-ifsca" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">What Is IFSCA</Link>
              </li>
              <li>
                <Link to="/gift-city-glossary" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">Glossary</Link>
              </li>
              <li>
                <Link to="/gift-city-vs-singapore-dubai" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">vs Singapore & Dubai</Link>
              </li>
              <li>
                <Link to="/gift-city-markets-gift-nifty" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">GIFT Nifty & Exchanges</Link>
              </li>
              <li>
                <Link to="/gift-city-family-office-fpi" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">Family Offices & FPIs</Link>
              </li>
              <li>
                <Link to="/gift-city-banks-and-business-setup" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">Banks & Business Setup</Link>
              </li>
              <li>
                <Link to="/gift-city-guide" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">GIFT City Guide</Link>
              </li>
              <li>
                <Link to="/insights" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">Insights</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">FAQs</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/accessibility-statement" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">
                  Accessibility
                </Link>
              </li>
              <li>
                <button type="button" onClick={openCookieSettings} className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate text-left">
                  Cookie settings
                </button>
              </li>
              <li>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">About Author</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Clean Footer Navigation Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <nav className="mb-8" aria-label="Footer navigation">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-sm">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate px-2 py-1">
                Home
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/funds-explained" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate px-2 py-1">Funds Explained</Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/faqs" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate px-2 py-1">FAQs</Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate px-2 py-1">
                About
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/disclaimer" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate px-2 py-1">
                Disclaimer
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate px-2 py-1">
                Privacy Policy
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/terms-of-use" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate px-2 py-1">
                Terms
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate px-2 py-1">
                Contact
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/insights" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate px-2 py-1">Insights</Link>
            </div>
          </nav>

          <hr className="border-primary-foreground/20 mb-6" />
          
          <div className="text-center mb-6">
            <p className="text-primary-foreground/70 text-sm mb-2">
              <strong>Disclaimer:</strong>
            </p>
            <p className="text-primary-foreground/70 text-xs max-w-5xl mx-auto leading-relaxed mb-2">
              All content on giftcityfunds.in is for general information and education only.
              GIFT CITY FUNDS and its owner Anup Vatyani (MFD ARN 106715) do not provide personalized investment, financial planning, or portfolio management through this website.
              Nothing here constitutes a solicitation to buy or sell any security. Users must verify facts via official scheme documents and consult qualified professionals before investing.
            </p>
            <p className="text-primary-foreground/70 text-xs max-w-5xl mx-auto leading-relaxed mb-2">
              This website is not affiliated with, endorsed by or operated by GIFT City Company Limited, IFSCA, SEBI, AMFI, or any asset management company or Fund Management Entity.
              Anup Vatyani is a Mutual Fund Distributor, not a SEBI-registered Investment Adviser.
            </p>
            <p className="text-primary-foreground/70 text-xs max-w-5xl mx-auto leading-relaxed">
              Mutual Fund investments are subject to market risk. Please read all scheme related documents carefully before investing.
            </p>
          </div>
          
          <p className="text-primary-foreground/70 text-xs text-center mt-6">
            © 2026 GIFT CITY FUNDS | Anup Vatyani (MFD ARN 106715) | info@giftcityfunds.in | Informational Use Only | Mutual Fund investments are subject to market risk.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
