import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, type ReactNode } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatIsGiftCity from "./pages/WhatIsGiftCity";
import FundsExplained from "./pages/FundsExplained";
import WhoItsFor from "./pages/WhoItsFor";
import Taxation from "./pages/Taxation";
import Faqs from "./pages/Faqs";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import HowToInvest from "./pages/HowToInvest";
import GiftCityVsMutualFunds from "./pages/GiftCityVsMutualFunds";
import Risks from "./pages/Risks";
import FundList from "./pages/FundList";
import GiftCitySip from "./pages/GiftCitySip";
import GiftCityVsInternationalFunds from "./pages/GiftCityVsInternationalFunds";
import ProsAndCons from "./pages/ProsAndCons";
import WhatIsIfsca from "./pages/WhatIsIfsca";
import UsStocksEtfs from "./pages/UsStocksEtfs";
import Glossary from "./pages/Glossary";
import RouteChecker from "./pages/RouteChecker";
import GiftCityVsSingaporeDubai from "./pages/GiftCityVsSingaporeDubai";
import GiftCityMarkets from "./pages/GiftCityMarkets";
import FamilyOfficeFpi from "./pages/FamilyOfficeFpi";
import BanksAndSetup from "./pages/BanksAndSetup";
import GiftCityGuide from "./pages/GiftCityGuide";
import NriGuide from "./pages/NriGuide";
import OciGuide from "./pages/OciGuide";
import ResidentGuide from "./pages/ResidentGuide";
import GiftCityAif from "./pages/GiftCityAif";
import GiftCityPms from "./pages/GiftCityPms";
import GiftCityFeederFunds from "./pages/GiftCityFeederFunds";
import MinimumInvestment from "./pages/MinimumInvestment";

// Admin-only screens: loaded on demand, never prerendered.
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));

const queryClient = new QueryClient();

interface AppProps {
  /** Set only by the build-time prerenderer (src/entry-server.tsx). */
  ssrUrl?: string;
  helmetContext?: object;
}

const Router = ({ ssrUrl, children }: { ssrUrl?: string; children: ReactNode }) =>
  ssrUrl ? (
    <StaticRouter location={ssrUrl}>{children}</StaticRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );

const App = ({ ssrUrl, helmetContext }: AppProps = {}) => (
  <HelmetProvider context={helmetContext}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router ssrUrl={ssrUrl}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/what-is-gift-city" element={<WhatIsGiftCity />} />
              <Route path="/funds-explained" element={<FundsExplained />} />
              <Route path="/who-its-for" element={<WhoItsFor />} />
              <Route path="/us-based-nris" element={<Navigate to="/gift-city-funds-for-nri#us" replace />} />
              <Route path="/taxation" element={<Taxation />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightArticle />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Suspense fallback={null}><Auth /></Suspense>} />
              <Route path="/admin" element={<Suspense fallback={null}><Admin /></Suspense>} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
              <Route path="/how-to-invest" element={<HowToInvest />} />
              <Route path="/gift-city-funds-vs-mutual-funds" element={<GiftCityVsMutualFunds />} />
              <Route path="/gift-city-funds-risks" element={<Risks />} />
              <Route path="/gift-city-funds-for-nri" element={<NriGuide />} />
              <Route path="/gift-city-funds-for-oci" element={<OciGuide />} />
              <Route path="/gift-city-funds-for-resident-indians" element={<ResidentGuide />} />
              <Route path="/gift-city-funds-nri-tax-by-country" element={<Navigate to="/gift-city-funds-for-nri" replace />} />
              <Route path="/gift-city-fund-list" element={<FundList />} />
              <Route path="/gift-city-sip" element={<GiftCitySip />} />
              <Route path="/gift-city-vs-international-mutual-funds" element={<GiftCityVsInternationalFunds />} />
              <Route path="/gift-city-funds-pros-and-cons" element={<ProsAndCons />} />
              <Route path="/what-is-ifsca" element={<WhatIsIfsca />} />
              <Route path="/gift-city-us-stocks-etfs" element={<UsStocksEtfs />} />
              <Route path="/tcs-on-foreign-remittance" element={<Navigate to="/insights/lrs-tcs-gift-city" replace />} />
              <Route path="/gift-city-glossary" element={<Glossary />} />
              <Route path="/gift-city-route-checker" element={<RouteChecker />} />
              <Route path="/gift-city-funds-for-uae-nris" element={<Navigate to="/gift-city-funds-for-nri#uae" replace />} />
              <Route path="/gift-city-funds-for-uk-nris" element={<Navigate to="/gift-city-funds-for-nri#uk" replace />} />
              <Route path="/gift-city-vs-singapore-dubai" element={<GiftCityVsSingaporeDubai />} />
              <Route path="/gift-city-markets-gift-nifty" element={<GiftCityMarkets />} />
              <Route path="/gift-city-family-office-fpi" element={<FamilyOfficeFpi />} />
              <Route path="/gift-city-banks-and-business-setup" element={<BanksAndSetup />} />
              <Route path="/gift-city-guide" element={<GiftCityGuide />} />
              <Route path="/gift-city-aif" element={<GiftCityAif />} />
              <Route path="/gift-city-pms" element={<GiftCityPms />} />
              <Route path="/gift-city-feeder-funds" element={<GiftCityFeederFunds />} />
              <Route path="/gift-city-minimum-investment" element={<MinimumInvestment />} />
              <Route path="/insights/nri-step-by-step" element={<Navigate to="/how-to-invest" replace />} />
              {/* Consolidated legacy legal routes */}
              <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
              <Route path="/terms" element={<Navigate to="/terms-of-use" replace />} />
              {/* Redirects from prior IA */}
              <Route path="/about-us" element={<Navigate to="/about" replace />} />
              <Route path="/funds/aif" element={<Navigate to="/gift-city-aif" replace />} />
              <Route path="/funds/pms" element={<Navigate to="/gift-city-pms" replace />} />
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
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
