import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, type Faq } from "@/components/GuidePage";
import DocChecklist from "@/components/DocChecklist";

const faqs: Faq[] = [
  { q: "What documents are required for a GIFT City investment by an NRI?", a: "Typically a passport, proof of overseas address, visa or residence permit, an overseas bank statement, a photograph, a FATCA/CRS self-certification and either a PAN or a declaration. A Tax Residency Certificate and Form 10F are often needed to claim treaty rates. Each fund house sets its own list." },
  { q: "Is PAN mandatory for GIFT City investments?", a: "For resident Indians, yes. For NRIs and foreign citizens, some fund houses require a PAN and others accept a declaration from investors whose only Indian income is from IFSC funds." },
  { q: "Do I need a Tax Residency Certificate?", a: "Usually only if you want to claim lower tax rates under India's tax treaty with your country. The TRC comes from your country's tax authority (in the UAE, the Federal Tax Authority) and is filed with Form 10F." },
  { q: "What do resident Indians need for GIFT City?", a: "PAN, proof of Indian address, an Indian bank statement, a passport in many cases, the FATCA/CRS form, and Form A2 with the LRS declaration at your bank when you remit." },
  { q: "Can I use my Indian mutual fund KYC?", a: "Usually not. GIFT City fund management entities run their own KYC, so plan to submit documents again." },
];

const DocumentChecklist = () => (
  <GuidePage
    path="/gift-city-document-checklist"
    headline="GIFT City Investment Document Checklist: Build Yours in 30 Seconds"
    seoTitle="GIFT City KYC Document Checklist for NRIs & Residents (2026)"
    description="Free GIFT City document checklist: choose NRI, OCI or resident, your country and product, and get your KYC list to tick off, print or save as PDF."
    crumb="Document Checklist"
    datePublished="2026-10-09"
    kind="WebPage"
    faqs={faqs}
    sources={["ifscaDirectory", "rbiLrs", "incomeTax"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> Most GIFT City investors need a passport, address proof, a bank statement for the account the money comes from, a FATCA/CRS form and a PAN (or, for some non-residents, a declaration). What else you need depends on where you live and what you are investing in. Pick your situation below to build your own list.
    </p>

    <DocChecklist />

    <h2 className={h2}>Documents required for GIFT City investment: tips that save weeks</h2>
    <ul className={ul}>
      <li><strong className="text-primary">Scan everything clearly, in colour.</strong> Blurry or cropped copies are the most common reason onboarding stalls.</li>
      <li><strong className="text-primary">Keep address proof recent.</strong> Most fund houses want it dated within the last three months.</li>
      <li><strong className="text-primary">Apply for a TRC early.</strong> It can take weeks in some countries.</li>
      <li><strong className="text-primary">Use one bank account consistently.</strong> The account you invest from is usually where redemptions are paid. See <Link to="/gift-city-redemption-repatriation" className={a}>redemption and repatriation</Link>.</li>
    </ul>
    <p className={p + " mt-4"}>
      Next: <Link to="/how-to-invest" className={a}>how to invest, step by step</Link>, or <Link to="/gift-city-route-checker" className={a}>check which route applies to you</Link>.
    </p>
  </GuidePage>
);

export default DocumentChecklist;
