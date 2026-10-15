import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, type Faq } from "@/components/GuidePage";

interface Update {
  date: string; // ISO
  label: string;
  body: string;
  change: string;
  forYou: string;
  link?: [string, string];
}

// Newest first. Add a row whenever a rule that affects investors changes, and
// update LAST_REVIEWED. Keep each entry factual and dated.
const LAST_REVIEWED = "9 October 2026";
const UPDATES: Update[] = [
  {
    date: "2026-07-17", label: "17 July 2026", body: "Government of Mauritius",
    change: "Mauritius Cabinet approved ratification of the 2024 Protocol to the India–Mauritius tax treaty, which adds a principal purpose test. It takes effect only after both countries complete their procedures.",
    forYou: "Relevant if you invest in India through a Mauritius-based fund. GIFT City funds are an onshore alternative.",
    link: ["/gift-city-vs-singapore-dubai", "GIFT City vs Singapore, Dubai and Mauritius"],
  },
  {
    date: "2026-04-10", label: "10 April 2026", body: "IFSCA",
    change: "Circular on governance of schemes: a scheme's fiduciary may not also act as its administrator, valuer, auditor or lender. Immediate for new schemes; existing schemes to comply by 30 September 2026.",
    forYou: "More independent oversight of the GIFT City funds you invest in.",
  },
  {
    date: "2026-04-01", label: "1 April 2026", body: "IFSCA",
    change: "Key staff of fund management entities in core fund management roles must obtain a specified certification by 30 September 2026.",
    forYou: "Higher minimum standards for the people managing GIFT City funds.",
  },
  {
    date: "2026-03-31", label: "31 March 2026", body: "IFSCA (report)",
    change: "Cumulative debt listings on GIFT City exchanges reached USD 70.31 billion; USD 49.20 billion outstanding.",
    forYou: "A deeper bond market in GIFT City.",
    link: ["/gift-city-bonds", "GIFT City bonds"],
  },
  {
    date: "2025-04-06", label: "6 April 2025", body: "HMRC (UK)",
    change: "The UK replaced the remittance basis with the 4-year foreign income and gains (FIG) regime for new arrivals.",
    forYou: "UK-resident NRIs: changes how foreign gains, including GIFT City funds, may be taxed.",
    link: ["/gift-city-funds-for-nri#uk", "UK NRIs"],
  },
  {
    date: "2025-04-01", label: "1 April 2025", body: "Finance Act, 2025 (India)",
    change: "TCS threshold on LRS remittances (other than education and medical) raised from ₹7 lakh to ₹10 lakh a year.",
    forYou: "Residents can invest up to ₹10 lakh a year abroad, including GIFT City, before TCS applies.",
    link: ["/insights/lrs-tcs-gift-city#calculator", "TCS calculator"],
  },
  {
    date: "2025-04-01", label: "1 April 2025", body: "Finance Act, 2025 (India)",
    change: "Section 10(10D) amended: proceeds of life policies issued by an IFSC insurance office are exempt without the premium-limit condition.",
    forYou: "NRIs buying dollar life insurance from GIFT City get the same treatment as for other foreign jurisdictions.",
    link: ["/gift-city-insurance", "GIFT City insurance"],
  },
  {
    date: "2025-02-19", label: "19 February 2025", body: "IFSCA",
    change: "IFSCA (Fund Management) Regulations, 2025 notified, replacing the 2022 rules. PMS minimum cut from USD 150,000 to USD 75,000; minimum corpus for schemes cut from USD 5 million to USD 3 million.",
    forYou: "A lower entry point for GIFT City PMS, and easier for fund houses to launch schemes.",
    link: ["/gift-city-pms", "GIFT City PMS"],
  },
  {
    date: "2024-07-10", label: "10 July 2024", body: "RBI",
    change: "Residents may open foreign currency accounts in GIFT IFSC under LRS and use them for financial products and services in IFSC, and for transactions in other foreign jurisdictions.",
    forYou: "More flexibility for residents investing in GIFT City.",
    link: ["/gift-city-redemption-repatriation", "Redemption and repatriation"],
  },
  {
    date: "2024-06-27", label: "27 June 2024", body: "SEBI",
    change: "FPIs based in GIFT IFSC may take contributions from NRIs, OCIs and resident Indian individuals, subject to conditions such as disclosing each contributor's PAN.",
    forYou: "Made it easier for fund houses to run inbound GIFT City funds for NRIs.",
    link: ["/gift-city-family-office-fpi", "FPIs in GIFT City"],
  },
];

const faqs: Faq[] = [
  { q: "What are the latest GIFT City rules for investors?", a: `The most recent changes on this page are IFSCA's 2026 governance and certification circulars for fund managers and the 2025 Fund Management Regulations, which cut the PMS minimum to USD 75,000. This page was last reviewed on ${LAST_REVIEWED}.` },
  { q: "What is the TCS threshold for investing in GIFT City in 2026?", a: "₹10 lakh a year across all LRS remittances other than education and medical, since 1 April 2025. Above that, 20% TCS applies to investment remittances; it is credited against your income tax." },
  { q: "How often is this page updated?", a: "It is reviewed every month. Each entry is dated and links to the relevant guide. Check the regulator's own website for the full text of any rule." },
];

const RulesUpdates = () => (
  <GuidePage
    path="/gift-city-rules-updates"
    headline="GIFT City Rule Changes: What's New for Investors (2026)"
    seoTitle="GIFT City New Rules 2026: IFSCA, RBI, SEBI & Tax Changes"
    description="A dated log of IFSCA, RBI, SEBI and tax changes that affect GIFT City investors, with what each one means for NRIs and resident Indians. Reviewed monthly."
    crumb="Rule Changes"
    datePublished="2026-10-09"
    reviewed={`Last reviewed ${LAST_REVIEWED}`}
    faqs={faqs}
    sources={["ifsca", "ifscaFmRegs", "rbiLrs", "sebi", "incomeTax", "ukFig"]}
  >
    <p className={p}>
      <strong className="text-primary">The short answer.</strong> GIFT City's rules change often. This page lists the changes that matter to investors, newest first, each with what it means for you. Last reviewed {LAST_REVIEWED}.
    </p>

    <h2 className={h2}>Latest IFSCA circulars and other rule changes</h2>
    <ol className="relative border-l-2 border-border ml-2 space-y-6 list-none p-0">
      {UPDATES.map((u) => (
        <li key={u.date + u.change.slice(0, 20)} className="ml-6">
          <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-teal border-2 border-background" aria-hidden />
          <div className="rounded-xl border border-border bg-surface p-4 md:p-5">
            <p className="font-body text-sm">
              <time dateTime={u.date} className="font-heading font-semibold text-primary">{u.label}</time>
              <span className="text-foreground-muted"> · {u.body}</span>
            </p>
            <p className="font-body text-foreground mt-2 leading-relaxed">{u.change}</p>
            <p className="font-body text-sm text-foreground-muted mt-2">
              <strong className="text-primary">What it means for you:</strong> {u.forYou}
              {u.link && <> <Link to={u.link[0]} className={a}>{u.link[1]}</Link></>}
            </p>
          </div>
        </li>
      ))}
    </ol>
    <p className="font-body text-xs text-foreground-muted mt-6">
      A summary for information only. Read the regulator's full text before acting, and see the <Link to="/disclaimer" className={a}>disclaimer</Link>.
    </p>
  </GuidePage>
);

export default RulesUpdates;
