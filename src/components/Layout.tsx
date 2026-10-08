import React, { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import RelatedGuides from "./RelatedGuides";
import ConsentBanner from "./ConsentBanner";
import { trackEvent } from "@/lib/analytics";
import { FaWhatsapp } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Count clicks on any link that leads to the contact page.
  const onClickCapture = (e: React.MouseEvent) => {
    const a = (e.target as HTMLElement).closest("a");
    if (a && a.getAttribute("href") === "/contact") trackEvent("contact_click", { link_text: (a.textContent || "").trim().slice(0, 60) });
  };
  return (
    <div className="min-h-screen flex flex-col" onClickCapture={onClickCapture}>
      <div className="bg-ink text-paper text-xs font-body text-center py-1.5 px-4 border-b border-brass/40">
        Anup Vatyani — AMFI-registered Mutual Fund Distributor (ARN 106715) | Educational content only | No personalised advice
      </div>
      <Navigation />
      <main id="main-content" className="flex-1">
        {children}
        <RelatedGuides />
      </main>
      <Footer />
      <ConsentBanner />
      <a
        href="https://wa.me/919537533533"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Anup on WhatsApp"
        onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>
    </div>
  );
};

export default Layout;