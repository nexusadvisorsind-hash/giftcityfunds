import { Link } from "react-router-dom";

interface Rung {
  amount: string;
  product: string;
  who: string;
  to: string;
}

const RETAIL: Rung[] = [
  { amount: "From about USD 1", product: "US stocks and ETFs via an IFSC broker", who: "Do-it-yourself investors; residents under LRS, eligible NRIs", to: "/gift-city-us-stocks-etfs" },
  { amount: "Set by each bank", product: "USD deposits at IFSC Banking Units", who: "Savers wanting dollar deposits", to: "/insights/gift-city-fd-vs-nre-fcnr" },
  { amount: "From USD 500 to a few thousand", product: "Retail funds and feeder funds", who: "Most individual NRIs, OCIs and residents", to: "/gift-city-feeder-funds" },
];

const HIGH: Rung[] = [
  { amount: "USD 75,000", product: "Portfolio management services (PMS)", who: "HNIs wanting a managed portfolio in their own name", to: "/gift-city-pms" },
  { amount: "Commonly USD 150,000", product: "AIFs (restricted and venture capital schemes)", who: "Experienced HNIs, family offices, institutions", to: "/gift-city-aif" },
  { amount: "High minimum corpus", product: "Family investment funds and FPIs", who: "Wealthy families and institutions", to: "/gift-city-family-office-fpi" },
];

const Column = ({ title, sub, rungs, tone }: { title: string; sub: string; rungs: Rung[]; tone: "teal" | "amber" }) => (
  <div className={`rounded-2xl border p-5 md:p-6 ${tone === "teal" ? "border-teal bg-teal/5" : "border-brass bg-brass/5"}`}>
    <p className="font-heading font-bold text-xl text-primary">{title}</p>
    <p className="font-body text-sm text-foreground-muted mb-4">{sub}</p>
    <ol className="space-y-3 list-none p-0">
      {rungs.map((r) => (
        <li key={r.product}>
          <Link to={r.to} className="group grid grid-cols-[7.5rem_1fr] md:grid-cols-[9.5rem_1fr] gap-3 rounded-xl bg-background border border-border p-3 hover:border-teal">
            <span className={`font-heading font-bold text-sm leading-snug ${tone === "teal" ? "text-secondary" : "text-primary"}`}>{r.amount}</span>
            <span>
              <span className="block font-heading font-semibold text-primary text-sm group-hover:underline">{r.product}</span>
              <span className="block font-body text-xs text-foreground-muted mt-0.5">{r.who}</span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  </div>
);

/** Two tiers of GIFT City products by ticket size, so readers see where they fit. */
export const TicketLadder = ({ className = "" }: { className?: string }) => (
  <figure className={className}>
    <div className="grid md:grid-cols-2 gap-4">
      <Column title="Retail tier" sub="Small to moderate amounts, for individual investors" rungs={RETAIL} tone="teal" />
      <Column title="High-ticket tier" sub="USD 75,000 and above, for HNIs, families and institutions" rungs={HIGH} tone="amber" />
    </div>
    <figcaption className="font-body text-xs text-foreground-muted mt-3">
      Indicative minimums as of October 2026; each scheme, broker or bank sets its own figure and eligibility. Residents invest within the LRS limit of USD 250,000 a year. See all <Link to="/gift-city-minimum-investment" className="text-secondary hover:underline">minimums and limits</Link>.
    </figcaption>
  </figure>
);

export default TicketLadder;
