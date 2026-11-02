import { useState } from "react";
import { Link } from "react-router-dom";
import { GuidePage, h2, p, a, ul, type Faq } from "@/components/GuidePage";

// Currency effect only: the same amount held in rupees vs converted to US
// Dollars, with the rupee changing by a rate the visitor chooses. No fund
// returns, no forecast.
const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

const faqs: Faq[] = [
  { q: "How does the rupee affect a GIFT City investment?", a: "GIFT City funds are in US Dollars. If the rupee weakens against the dollar while you hold them, the same dollar amount is worth more rupees when converted back; if the rupee strengthens, it is worth fewer. This is separate from how the fund's investments perform." },
  { q: "Does this calculator predict the rupee?", a: "No. You choose the yearly change. Past movements are not a guide to the future, and the rupee can strengthen as well as weaken." },
  { q: "What does the calculator leave out?", a: "The fund's own returns, costs, conversion charges, TCS for residents and tax. It shows the currency effect alone." },
];

const UsdInrCalculator = () => {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(90);
  const [years, setYears] = useState(5);
  const [change, setChange] = useState(2);

  const ok = amount > 0 && rate > 0 && years >= 0 && years <= 40 && change > -20 && change < 20;
  const usd = ok ? amount / rate : 0;
  const endRate = ok ? rate * Math.pow(1 + change / 100, years) : 0;
  const back = usd * endRate;
  const diff = back - amount;

  const field = "w-full rounded-md border border-input bg-background p-2 font-body";
  return (
    <GuidePage
      path="/usd-vs-inr-calculator"
      headline="Dollar vs Rupee Calculator: How Currency Moves Change a GIFT City Investment"
      seoTitle="USD vs INR Calculator: Currency Effect on a Dollar Investment"
      description="See how a change in the rupee–dollar rate affects money held in US Dollars, such as a GIFT City fund, compared with keeping it in rupees. You choose the rate change; no forecasts."
      crumb="USD vs INR Calculator"
      datePublished="2026-11-02"
      kind="WebPage"
      faqs={faqs}
      sources={["rbiLrs"]}
    >
      <p className={p}>
        <strong className="text-primary">What it shows.</strong> GIFT City funds are in US Dollars. This calculator isolates the <strong className="text-primary">currency effect</strong>: what the same rupee amount would be worth if converted to dollars today and back to rupees later, at an exchange-rate change you choose. It leaves out the fund's own returns, costs and tax.
      </p>

      <h2 className={h2}>Calculator</h2>
      <form className="grid gap-4 sm:grid-cols-2 rounded-xl border border-border bg-surface p-5" onSubmit={(e) => e.preventDefault()}>
        <label className="font-body text-sm text-primary font-semibold">Amount in rupees
          <input type="number" min={1} step={1000} value={amount} onChange={(e) => setAmount(Number(e.target.value))} className={field + " mt-1"} />
        </label>
        <label className="font-body text-sm text-primary font-semibold">Today's rate (₹ per USD)
          <input type="number" min={1} step={0.01} value={rate} onChange={(e) => setRate(Number(e.target.value))} className={field + " mt-1"} />
          <span className="block font-normal text-foreground-muted text-xs mt-1">Enter the current rate from your bank.</span>
        </label>
        <label className="font-body text-sm text-primary font-semibold">Years held
          <input type="number" min={0} max={40} step={1} value={years} onChange={(e) => setYears(Number(e.target.value))} className={field + " mt-1"} />
        </label>
        <label className="font-body text-sm text-primary font-semibold">Yearly change in ₹ per USD (%)
          <input type="number" min={-19} max={19} step={0.1} value={change} onChange={(e) => setChange(Number(e.target.value))} className={field + " mt-1"} />
          <span className="block font-normal text-foreground-muted text-xs mt-1">Your assumption. Positive = rupee weakens; negative = rupee strengthens.</span>
        </label>
      </form>

      <div aria-live="polite" className="mt-4 rounded-xl border border-border p-5 font-body">
        {ok ? (
          <ul className="space-y-2 text-foreground-muted">
            <li>Converted today: <strong className="text-primary">USD {usd.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong></li>
            <li>Rate after {years} {years === 1 ? "year" : "years"} at your assumption: <strong className="text-primary">₹{endRate.toFixed(2)} per USD</strong></li>
            <li>Those dollars converted back: <strong className="text-primary">{inr(back)}</strong></li>
            <li>Currency effect alone: <strong className={diff >= 0 ? "text-primary" : "text-destructive"}>{diff >= 0 ? "+" : "−"}{inr(Math.abs(diff))}</strong> compared with {inr(amount)} kept in rupees</li>
          </ul>
        ) : (
          <p>Enter a positive amount and rate, 0–40 years, and a yearly change between −19% and 19%.</p>
        )}
      </div>
      <p className="font-body text-xs text-foreground-muted mt-3">
        An illustration of currency arithmetic, not a forecast or a recommendation. Exchange rates can move either way. Excludes fund returns, costs, conversion spreads, TCS and tax.
      </p>

      <h2 className={h2}>What else matters</h2>
      <ul className={ul}>
        <li>Residents sending money abroad under LRS pay TCS above ₹10 lakh a year, credited back in the tax return. Try the <Link to="/insights/lrs-tcs-gift-city#calculator" className={a}>TCS calculator</Link>.</li>
        <li>The fund's own investments can rise or fall in dollar terms. See <Link to="/gift-city-funds-risks" className={a}>risks of GIFT City funds</Link>.</li>
        <li>For NRIs whose income is in dollars or a dollar-pegged currency, the rupee matters mainly when bringing money back to India.</li>
      </ul>
    </GuidePage>
  );
};

export default UsdInrCalculator;
