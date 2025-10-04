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
              <span className="font-heading font-bold text-xl">GIFT City Funds</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              GIFT City Wealth is an informational website owned and managed by Anup Vatyani, Ahmedabad, Gujarat. This site is intended only to provide information about GIFT City investment opportunities, its structure, and advantages. It does not constitute an offer to invest or financial advice.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 9537533533</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@nexusadvisors.in</span>
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
                  Investment Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Investment Categories */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Fund Categories</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Equity Funds</li>
              <li>Hybrid Funds</li>
              <li>Passive Investments</li>
              <li>Alternative Investments</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 GIFT City Funds. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-corporate">
                Privacy & Policy
              </Link>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-corporate">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-corporate">
                Regulatory Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;