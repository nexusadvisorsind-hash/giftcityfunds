import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-heading font-bold text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg">GIFT CITY FUNDS</span>
                <span className="text-sm text-primary-foreground/80">An Informational Resource on GIFT City and IFSC Frameworks</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              giftcitywealth.in provides information about GIFT City and IFSC investment frameworks for NRIs and HNIs. Owned and operated by Anup Vatyani, a registered Mutual Fund Distributor (AMFI ARN-106815).
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
                <span className="text-sm">info@giftcitywealth.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">GIFT City, Gujarat, India</span>
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
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">
                  About GIFT City
                </Link>
              </li>
              <li>
                <Link to="/investments" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">
                  Investment Structures
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">
                  Contact Us
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
                <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">
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
                <Link to="/team/anup-vatyani" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">
                  About Author
                </Link>
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
              <Link to="/investments" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate px-2 py-1">
                Understanding GIFT City Funds
              </Link>
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
              <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate px-2 py-1">
                Terms
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate px-2 py-1">
                Contact
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/team/anup-vatyani" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate px-2 py-1">
                About Author
              </Link>
            </div>
          </nav>

          <hr className="border-primary-foreground/20 mb-6" />
          
          <div className="text-center mb-6">
            <p className="text-primary-foreground/70 text-sm mb-2">
              <strong>Disclaimer:</strong>
            </p>
            <p className="text-primary-foreground/70 text-xs max-w-5xl mx-auto leading-relaxed mb-2">
              All content on giftcitywealth.in is for general information and education only.
              GIFT CITY FUNDS and its owner Anup Vatyani (MFD ARN 106715) do not provide personalized investment, financial planning, or portfolio management through this website.
              Nothing here constitutes a solicitation to buy or sell any security. Users must verify facts via official scheme documents and consult qualified professionals before investing.
            </p>
            <p className="text-primary-foreground/70 text-xs max-w-5xl mx-auto leading-relaxed">
              Mutual Fund investments are subject to market risk. Please read all scheme related documents carefully before investing.
            </p>
          </div>
          
          <p className="text-primary-foreground/70 text-xs text-center mt-6">
            © 2025 GIFT CITY FUNDS | Anup Vatyani (MFD ARN 106715) | info@giftcitywealth.in | Informational Use Only | Mutual Fund investments are subject to market risk.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;