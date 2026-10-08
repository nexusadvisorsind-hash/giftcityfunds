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
