import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-ink text-paper text-[11px] md:text-xs font-body text-center py-1.5 px-4 border-b border-brass/40">
        Author — Anup Vatyani (MFD ARN 106715) | Informational Content Only | No Personalized Advice.
      </div>
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <a
        href="https://wa.me/919537533533"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Anup on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>
    </div>
  );
};

export default Layout;