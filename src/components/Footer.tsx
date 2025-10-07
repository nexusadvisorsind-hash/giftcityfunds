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
              <span className="font-heading font-bold text-xl">GIFT City Wealth</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md text-sm">
              Financial Information Platform providing IFSC & GIFT City fund insights. Proprietor: Anup Vatyani.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 95375 33533</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@nexusadvisors.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">GIFT City, Gandhinagar, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/investments" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate text-sm">
                  Investments
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/ask-question" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate text-sm">
                  Ask a Question
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate text-sm">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate text-sm">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/grievance" className="text-primary-foreground/80 hover:text-primary-foreground transition-corporate text-sm">
                  Grievance Redressal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="text-center">
            <p className="text-primary-foreground/80 text-sm mb-4">
              <strong>Disclaimer:</strong> All content on this site is for educational information only and does not constitute investment advice. Capital is at risk. Consult a qualified advisor before making decisions. GIFT City Wealth (Prop. Anup Vatyani) is not an investment advisor, intermediary, or fund distributor.
            </p>
            <p className="text-primary-foreground/60 text-xs">
              © {new Date().getFullYear()} GIFT City Wealth (Proprietor Anup Vatyani). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;