import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Investments from "./pages/Investments";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Terms from "./pages/Terms";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import WhatIsGiftCityFund from "./pages/knowledge/WhatIsGiftCityFund";
import HowIfscWorks from "./pages/knowledge/HowIfscWorks";
import MutualFundsInGiftCity from "./pages/knowledge/MutualFundsInGiftCity";
import TaxBenefitsForNris from "./pages/knowledge/TaxBenefitsForNris";
import AnupVatyani from "./pages/team/AnupVatyani";

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
              <Route path="/about" element={<About />} />
              <Route path="/about-us" element={<Navigate to="/about" replace />} />
              <Route path="/investments" element={<Investments />} />
              <Route path="/understanding-gift-city-funds" element={<Navigate to="/investments" replace />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/knowledge/what-is-gift-city-fund" element={<WhatIsGiftCityFund />} />
              <Route path="/knowledge/how-ifsc-works" element={<HowIfscWorks />} />
              <Route path="/knowledge/mutual-funds-in-gift-city" element={<MutualFundsInGiftCity />} />
              <Route path="/knowledge/tax-benefits-for-nris" element={<TaxBenefitsForNris />} />
              <Route path="/team/anup-vatyani" element={<AnupVatyani />} />
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
