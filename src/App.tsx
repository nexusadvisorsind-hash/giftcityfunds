import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, type ReactNode } from "react";
import Layout from "./components/Layout";
import { lazyPage, type LazyPage } from "./lib/lazyPage";
const Home = lazyPage(() => import("./pages/Home"));
const About = lazyPage(() => import("./pages/About"));
const WhatIsGiftCity = lazyPage(() => import("./pages/WhatIsGiftCity"));
const FundsExplained = lazyPage(() => import("./pages/FundsExplained"));
const WhoItsFor = lazyPage(() => import("./pages/WhoItsFor"));
const Taxation = lazyPage(() => import("./pages/Taxation"));
const Faqs = lazyPage(() => import("./pages/Faqs"));
const Insights = lazyPage(() => import("./pages/Insights"));
const InsightArticle = lazyPage(() => import("./pages/InsightArticle"));
const Contact = lazyPage(() => import("./pages/Contact"));
const PrivacyPolicy = lazyPage(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazyPage(() => import("./pages/TermsOfUse"));
const AccessibilityStatement = lazyPage(() => import("./pages/AccessibilityStatement"));
const Disclaimer = lazyPage(() => import("./pages/Disclaimer"));
const NotFound = lazyPage(() => import("./pages/NotFound"));
const HowToInvest = lazyPage(() => import("./pages/HowToInvest"));
const GiftCityVsMutualFunds = lazyPage(() => import("./pages/GiftCityVsMutualFunds"));
const Risks = lazyPage(() => import("./pages/Risks"));
const FundList = lazyPage(() => import("./pages/FundList"));
const GiftCitySip = lazyPage(() => import("./pages/GiftCitySip"));
const GiftCityVsInternationalFunds = lazyPage(() => import("./pages/GiftCityVsInternationalFunds"));
const ProsAndCons = lazyPage(() => import("./pages/ProsAndCons"));
const WhatIsIfsca = lazyPage(() => import("./pages/WhatIsIfsca"));
const UsStocksEtfs = lazyPage(() => import("./pages/UsStocksEtfs"));
const Glossary = lazyPage(() => import("./pages/Glossary"));
const RouteChecker = lazyPage(() => import("./pages/RouteChecker"));
const GiftCityVsSingaporeDubai = lazyPage(() => import("./pages/GiftCityVsSingaporeDubai"));
const GiftCityMarkets = lazyPage(() => import("./pages/GiftCityMarkets"));
const FamilyOfficeFpi = lazyPage(() => import("./pages/FamilyOfficeFpi"));
const BanksAndSetup = lazyPage(() => import("./pages/BanksAndSetup"));
const GiftCityGuide = lazyPage(() => import("./pages/GiftCityGuide"));
const NriGuide = lazyPage(() => import("./pages/NriGuide"));
const OciGuide = lazyPage(() => import("./pages/OciGuide"));
const ResidentGuide = lazyPage(() => import("./pages/ResidentGuide"));
const GiftCityAif = lazyPage(() => import("./pages/GiftCityAif"));
const GiftCityPms = lazyPage(() => import("./pages/GiftCityPms"));
const GiftCityFeederFunds = lazyPage(() => import("./pages/GiftCityFeederFunds"));
const MinimumInvestment = lazyPage(() => import("./pages/MinimumInvestment"));

// Admin-only screens: loaded on demand, never prerendered.
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));

// Which split page each prerendered URL needs, so it can be loaded before
// rendering (build time) and before hydration (browser).
const PAGE_FOR_PATH: Record<string, LazyPage> = {
  "/": Home,
  "/what-is-gift-city": WhatIsGiftCity,
  "/funds-explained": FundsExplained,
  "/who-its-for": WhoItsFor,
  "/taxation": Taxation,
  "/faqs": Faqs,
  "/insights": Insights,
  "/about": About,
  "/contact": Contact,
  "/disclaimer": Disclaimer,
  "/privacy-policy": PrivacyPolicy,
  "/terms-of-use": TermsOfUse,
  "/accessibility-statement": AccessibilityStatement,
  "/how-to-invest": HowToInvest,
  "/gift-city-funds-vs-mutual-funds": GiftCityVsMutualFunds,
  "/gift-city-funds-risks": Risks,
  "/gift-city-funds-for-nri": NriGuide,
  "/gift-city-funds-for-oci": OciGuide,
  "/gift-city-funds-for-resident-indians": ResidentGuide,
  "/gift-city-fund-list": FundList,
  "/gift-city-sip": GiftCitySip,
  "/gift-city-vs-international-mutual-funds": GiftCityVsInternationalFunds,
  "/gift-city-funds-pros-and-cons": ProsAndCons,
  "/what-is-ifsca": WhatIsIfsca,
  "/gift-city-us-stocks-etfs": UsStocksEtfs,
  "/gift-city-glossary": Glossary,
  "/gift-city-route-checker": RouteChecker,
  "/gift-city-vs-singapore-dubai": GiftCityVsSingaporeDubai,
  "/gift-city-markets-gift-nifty": GiftCityMarkets,
  "/gift-city-family-office-fpi": FamilyOfficeFpi,
  "/gift-city-banks-and-business-setup": BanksAndSetup,
  "/gift-city-guide": GiftCityGuide,
  "/gift-city-aif": GiftCityAif,
  "/gift-city-pms": GiftCityPms,
  "/gift-city-feeder-funds": GiftCityFeederFunds,
  "/gift-city-minimum-investment": MinimumInvestment,
};

export function preloadForPath(pathname: string): Promise<void> {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const page = PAGE_FOR_PATH[path] ?? (path.startsWith("/insights/") ? InsightArticle : NotFound);
  return page.preload();
}

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
