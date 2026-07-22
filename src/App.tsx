import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatIsGiftCity from "./pages/WhatIsGiftCity";
import FundsExplained from "./pages/FundsExplained";
import WhoItsFor from "./pages/WhoItsFor";
import UsBasedNris from "./pages/UsBasedNris";
import Taxation from "./pages/Taxation";
import Faqs from "./pages/Faqs";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import HowToInvest from "./pages/HowToInvest";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/what-is-gift-city" element={<WhatIsGiftCity />} />
              <Route path="/funds-explained" element={<FundsExplained />} />
              <Route path="/who-its-for" element={<WhoItsFor />} />
              <Route path="/us-based-nris" element={<UsBasedNris />} />
              <Route path="/taxation" element={<Taxation />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
              <Route path="/how-to-invest" element={<HowToInvest />} />
              {/* Consolidated legacy legal routes */}
              <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
              <Route path="/terms" element={<Navigate to="/terms-of-use" replace />} />
              {/* Redirects from prior IA */}
              <Route path="/about-us" element={<Navigate to="/about" replace />} />
              <Route path="/investments" element={<Navigate to="/funds-explained" replace />} />
              <Route path="/understanding-gift-city-funds" element={<Navigate to="/funds-explained" replace />} />
              <Route path="/resources" element={<Navigate to="/insights" replace />} />
              <Route path="/knowledge/what-is-gift-city-fund" element={<Navigate to="/what-is-gift-city" replace />} />
              <Route path="/knowledge/how-ifsc-works" element={<Navigate to="/what-is-gift-city" replace />} />
              <Route path="/knowledge/mutual-funds-in-gift-city" element={<Navigate to="/funds-explained" replace />} />
              <Route path="/knowledge/tax-benefits-for-nris" element={<Navigate to="/taxation" replace />} />
              <Route path="/team/anup-vatyani" element={<Navigate to="/about" replace />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
