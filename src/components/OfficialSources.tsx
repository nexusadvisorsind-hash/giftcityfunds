// Links to the regulators and authorities behind the rules described on a page.
// Citing primary sources matters for readers and for how search engines judge
// financial content.
const SOURCES = {
  ifsca: { label: "IFSCA — International Financial Services Centres Authority", url: "https://ifsca.gov.in/", note: "The regulator for all financial services in GIFT IFSC." },
  ifscaDirectory: { label: "IFSCA Directory of regulated entities", url: "https://ifsca.gov.in/DirectoryList", note: "Check that a Fund Management Entity is registered." },
  giftCity: { label: "GIFT City — official website", url: "https://www.giftgujarat.in/", note: "Gujarat International Finance Tec-City." },
  rbiLrs: { label: "RBI — FAQs on the Liberalised Remittance Scheme", url: "https://www.rbi.org.in/Scripts/FAQView.aspx?Id=115", note: "The annual limit and permitted purposes for resident Indians." },
  incomeTax: { label: "Income Tax Department, Government of India", url: "https://www.incometaxindia.gov.in/", note: "The Income-tax Act, including Section 10(4D), and TCS rules." },
  irs8621: { label: "IRS — About Form 8621 (PFIC reporting)", url: "https://www.irs.gov/forms-pubs/about-form-8621", note: "US reporting for shareholders of passive foreign investment companies." },
  sebi: { label: "SEBI — Securities and Exchange Board of India", url: "https://www.sebi.gov.in/", note: "The regulator for domestic Indian mutual funds." },
  hmrcOffshore: { label: "HMRC — HS265 Offshore funds", url: "https://www.gov.uk/government/publications/offshore-funds-self-assessment-helpsheet-hs265/hs265-offshore-funds", note: "How UK residents are taxed on reporting and non-reporting offshore funds." },
  ukFig: { label: "GOV.UK — The 4-year foreign income and gains regime", url: "https://www.gov.uk/guidance/check-if-you-can-claim-the-4-year-foreign-income-and-gains-regime", note: "The regime that replaced the remittance basis on 6 April 2025." },
  uaeTax: { label: "UAE Government portal — Taxation", url: "https://u.ae/en/information-and-services/finance-and-investment/taxation", note: "Taxes levied in the UAE." },
  craT1135: { label: "Canada Revenue Agency — Form T1135 questions and answers", url: "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/information-been-moved/foreign-reporting/questions-answers-about-form-t1135.html", note: "Reporting foreign property costing more than CAD 100,000." },
  irasOverseas: { label: "IRAS — Income received from overseas", url: "https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/what-is-taxable-what-is-not/income-received-from-overseas", note: "Singapore's treatment of foreign-sourced income for individuals." },
  amfi: { label: "AMFI — Association of Mutual Funds in India", url: "https://www.amfiindia.com/", note: "Verify a Mutual Fund Distributor's ARN." },
} as const;

export type SourceKey = keyof typeof SOURCES;

export const OfficialSources = ({ items }: { items: SourceKey[] }) => (
  <section aria-labelledby="official-sources" className="mt-10 bg-surface border border-border rounded-lg p-6">
    <h2 id="official-sources" className="font-heading font-semibold text-xl text-primary mb-3">
      Official sources
    </h2>
    <p className="font-body text-sm text-foreground-muted mb-4">
      Rules change. Check the current position with the authority that sets it.
    </p>
    <ul className="space-y-3 font-body text-sm">
      {items.map((k) => (
        <li key={k}>
          <a href={SOURCES[k].url} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-medium">
            {SOURCES[k].label}
          </a>
          <span className="text-foreground-muted"> — {SOURCES[k].note}</span>
        </li>
      ))}
    </ul>
  </section>
);
