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
  ifscaFmRegs: { label: "IFSCA — Press release on the Fund Management Regulations, 2025", url: "https://ifsca.gov.in/Document/Legal/press-release-notification-of-ifsca-fund-management-regulations-202519022025091920.pdf", note: "The rules for GIFT City funds, PMS and AIFs, notified 19 February 2025." },
  indiaInx: { label: "India INX — India International Exchange", url: "https://www.indiainx.com/", note: "GIFT City exchange (a BSE subsidiary) listing bonds and other securities." },
  nseIx: { label: "NSE IX — NSE International Exchange", url: "https://www.nseix.com/", note: "GIFT City exchange (an NSE subsidiary) for bonds, derivatives and US stocks." },
  rbiFema: { label: "RBI — Foreign Exchange Management Act (FEMA) notifications", url: "https://www.rbi.org.in/Scripts/Fema.aspx", note: "FEMA rules, including holding foreign assets after a change in residence." },
  itResidency: { label: "Income Tax Department — How to determine if an individual is an NRI", url: "https://incometaxindia.gov.in/Documents/residential-status.htm", note: "The 182-day, 120-day and deemed-resident tests." },
  uaeTrc: { label: "UAE Federal Tax Authority — Tax Residency Certificate", url: "https://tax.gov.ae/en/services/issuance.of.tax.certificates.aspx", note: "Who qualifies as a UAE tax resident and how to apply." },
  hmrcCgt: { label: "GOV.UK — Capital Gains Tax rates and allowances", url: "https://www.gov.uk/capital-gains-tax/rates", note: "Current UK rates and the annual exempt amount." },
  irsFbar: { label: "IRS — Report of Foreign Bank and Financial Accounts (FBAR)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar", note: "Reporting foreign accounts above USD 10,000 in aggregate." },
  irs8938: { label: "IRS — Comparison of Form 8938 and FBAR requirements", url: "https://www.irs.gov/businesses/comparison-of-form-8938-and-fbar-requirements", note: "FATCA asset reporting thresholds for US taxpayers." },
  craCapitalGains: { label: "Canada Revenue Agency — Line 12700 Capital gains", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-12700-capital-gains.html", note: "How Canadian residents report capital gains." },
  canadaIta941: { label: "Justice Laws — Income Tax Act section 94.1 (offshore investment fund property)", url: "https://laws-lois.justice.gc.ca/eng/acts/I-3.3/section-94.1.html", note: "Canada's rule that can impute income on certain offshore fund holdings." },
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
