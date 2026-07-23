import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const Disclaimer = () => (
  <>
    <SEO
      title="Disclaimer & Risk Disclosure — GIFT City Funds"
      description="Legal disclaimer and risk disclosure for the GIFT City Funds educational resource."
      canonical="https://giftcityfunds.in/disclaimer"
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Disclaimer & Risk Disclosure",
        "url": "https://giftcityfunds.in/disclaimer",
        "description": "Legal disclaimer and risk disclosure for the GIFT City Funds educational resource.",
        "inLanguage": "en-IN",
        "dateModified": "2026-07-23",
        "isPartOf": { "@type": "WebSite", "name": "GIFT City Funds", "url": "https://giftcityfunds.in/" },
        "publisher": { "@type": "Person", "name": "Anup Vatyani", "identifier": "AMFI ARN-106715" },
        "about": "Investment risk disclosure and educational-content disclaimer"
      }}
      breadcrumbs={[
        { name: "Home", url: "https://giftcityfunds.in/" },
        { name: "Disclaimer", url: "https://giftcityfunds.in/disclaimer" },
      ]}
    />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Disclaimer", url: "/disclaimer" }]} />
      <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-8">Disclaimer & Risk Disclosure</h1>
      <div className="font-body text-foreground-muted space-y-5">
        <p><strong className="text-primary">Nature of this website.</strong> This website ("GIFT City Funds") is an independent educational resource created and maintained by Anup Vatyani. It is intended solely to help visitors understand GIFT City, IFSC regulation, and the general structure and mechanics of GIFT City-based investment products.</p>
        <p><strong className="text-primary">Not investment advice.</strong> Nothing on this website constitutes investment advice, a recommendation, or a solicitation to buy or sell any security, fund, or financial product. Anup Vatyani is registered with AMFI as a Mutual Fund Distributor (ARN 106715) and is not a SEBI-Registered Investment Adviser. Any facilitation of mutual fund transactions is undertaken strictly in the capacity of a distributor.</p>
        <p><strong className="text-primary">Not tax or legal advice.</strong> Tax-related content on this website, including content specific to US-based investors, is provided for general educational purposes only, may not reflect the most current rules, and does not account for individual circumstances. Always consult a qualified Chartered Accountant or tax professional in your jurisdiction before making any decision.</p>
        <p><strong className="text-primary">Risk disclosure.</strong> Mutual funds, AIFs, PMS and other investment products referenced on this site are subject to market risk. Past performance, where referenced, is not indicative of future returns. Read all scheme-related documents carefully before investing.</p>
        <p><strong className="text-primary">Third-party information.</strong> Where this site references regulatory frameworks, tax rates, or scheme details, information is sourced from publicly available material believed to be reliable at the time of publication, but is not guaranteed for accuracy or completeness, and is subject to change without notice.</p>
        <p><strong className="text-primary">No liability.</strong> Anup Vatyani and this website accept no liability for any loss arising from the use of, or reliance on, information provided here.</p>
        <p><strong className="text-primary">Grievance redressal.</strong> For any complaints, feedback, or concerns regarding this website or its content, please write to info@giftcityfunds.in. We aim to acknowledge all queries within 2 business days. Investors may also escalate concerns through AMFI's official investor grievance mechanisms.</p>
        <p className="pt-4 text-sm">Author — Anup Vatyani (MFD ARN 106715) | Informational Content Only | No Personalized Advice.</p>
      </div>
    </div>
  </>
);

export default Disclaimer;