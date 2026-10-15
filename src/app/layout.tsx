import type { Metadata } from "next";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

// NOTE: This points at the live Vercel deployment (project name "arthavruksha" was
// kept as-is on GitHub/Vercel — only the on-page brand name/emails changed to "Vriksha").
// Production domain (custom domain connected in Vercel).
const siteUrl = "https://arthavriksha.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Artha Vriksha Services — Mutual Funds, Real Estate, Insurance & Loans in Maharashtra & Gujarat",
    template: "%s | Artha Vriksha Services",
  },
  description:
    "Mutual Funds, Real Estate, Insurance and Loan/DSA services across Pune, Ahmedabad, Maharashtra & Gujarat — from a team of individually AMFI, MahaRERA & GujRERA registered professionals. SIP, home loan, insurance and loan eligibility calculators.",
  keywords: [
    "mutual fund distributor Pune",
    "mutual fund distributor Ahmedabad",
    "AMFI registered mutual fund distributor",
    "best SIP plans India",
    "SIP calculator online",
    "real estate broker Maharashtra",
    "real estate broker Gujarat",
    "MahaRERA certified property broker",
    "GujRERA certified property broker",
    "RERA registered real estate agent",
    "term insurance plans India",
    "life insurance calculator",
    "health insurance advisor",
    "home loan eligibility calculator",
    "loan against property",
    "personal loan DSA",
    "financial services Pune Ahmedabad",
    "investment advisor Gujarat",
    "GIFT City IFSC mutual funds",
    "Anup Vatyani AMFI",
    "Pavan Vatyani real estate",
    "Artha Vriksha Services",
  ],
  authors: [{ name: "Artha Vriksha Services" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Artha Vriksha Services",
    title: "Artha Vriksha Services — Mutual Funds, Real Estate, Insurance & Loans",
    description:
      "One team for Mutual Funds, Real Estate, Insurance and Loans across Maharashtra & Gujarat — our professionals are individually AMFI, MahaRERA & GujRERA registered.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Artha Vriksha Services — Mutual Funds, Real Estate, Insurance & Loans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artha Vriksha Services — Mutual Funds, Real Estate, Insurance & Loans",
    description:
      "One licensed team for Mutual Funds, Real Estate, Insurance and Loans across Maharashtra & Gujarat.",
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Artha Vriksha Services",
  description:
    "Mutual Fund Distribution, Real Estate Broking, Insurance facilitation and Loan/DSA services across Maharashtra & Gujarat, India, delivered by individually AMFI, MahaRERA & GujRERA registered professionals.",
  url: siteUrl,
  logo: `${siteUrl}/brand/logo-icon-192.png`,
  image: `${siteUrl}/og-image.png`,
  areaServed: [
    { "@type": "State", name: "Maharashtra" },
    { "@type": "State", name: "Gujarat" },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Amanora Park Town",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411928",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "4 Tarang Hills Society, Chandlodia",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  ],
  email: "info@arthavriksha.in",
  founder: [
    { "@type": "Person", name: "Anup Vatyani", jobTitle: "Founder — Mutual Funds & Regulatory Affairs", telephone: "+91-9537433533" },
    { "@type": "Person", name: "Pavan Vatyani", jobTitle: "Founder — Real Estate & Digital Strategy", telephone: "+91-9022958266" },
  ],
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+91-9022958266", contactType: "customer service", areaServed: "IN", name: "Pavan Vatyani" },
    { "@type": "ContactPoint", telephone: "+91-9537433533", contactType: "customer service", areaServed: "IN", name: "Anup Vatyani" },
  ],
  knowsAbout: [
    "Mutual Funds",
    "SIP Investment",
    "Real Estate Broking",
    "RERA Compliance",
    "Life Insurance",
    "Health Insurance",
    "Home Loans",
    "Loan Against Property",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ScrollProgress />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
