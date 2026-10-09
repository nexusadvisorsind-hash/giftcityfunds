import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const THRESHOLD = 1_000_000; // ₹10 lakh of LRS remittances per financial year
const RATE = 0.2; // TCS on investment remittances above the threshold, FY 2026-27
const LRS_LIMIT_USD = 250_000;

const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

/**
 * TCS on a resident's GIFT City investment remittance, given what they have
 * already sent abroad under LRS this financial year (any purpose).
 */
const TcsCalculator = () => {
  const [amount, setAmount] = useState(2_500_000);
  const [prior, setPrior] = useState(0);
  const [fx, setFx] = useState(88);
  const tcs = useMemo(() => Math.max(0, prior + amount - Math.max(prior, THRESHOLD)) * RATE, [amount, prior]);
  const usdTotal = (amount + prior) / (fx || 1);
  const field =
    "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 font-body text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-teal";

  return (
    <section id="calculator" aria-labelledby="calc-h" className="not-prose my-10 rounded-2xl border-2 border-teal bg-teal/5 p-5 md:p-7 scroll-mt-24">
      <h2 id="calc-h" className="font-heading font-semibold text-2xl text-primary mb-1">TCS calculator for a GIFT City investment</h2>
      <p className="font-body text-sm text-foreground-muted mb-5">
        For resident Indians, FY 2026-27. It runs in your browser; nothing you type is sent or stored.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <label className="block">
          <span className="font-body text-sm text-primary font-medium">Amount to invest in the GIFT City fund (₹)</span>
          <input type="number" inputMode="numeric" min={0} step={10000} className={field} value={amount}
            onChange={(e) => setAmount(Math.max(0, +e.target.value))}
            onBlur={() => trackEvent("tool_use", { tool: "tcs_calculator" })} />
        </label>
        <label className="block">
          <span className="font-body text-sm text-primary font-medium">Already sent abroad this financial year, any purpose (₹)</span>
          <input type="number" inputMode="numeric" min={0} step={10000} className={field} value={prior}
            onChange={(e) => setPrior(Math.max(0, +e.target.value))} />
        </label>
        <label className="block">
          <span className="font-body text-sm text-primary font-medium">USD/INR rate (edit to today's)</span>
          <input type="number" inputMode="decimal" min={1} step={0.1} className={field} value={fx}
            onChange={(e) => setFx(+e.target.value)} />
        </label>
      </div>
      <div className="grid sm:grid-cols-3 gap-3 mt-6" aria-live="polite">
        <div className="rounded-xl bg-ink text-white p-4">
          <p className="font-body text-xs text-slate-300">TCS your bank collects</p>
          <p className="font-heading font-bold text-2xl text-brass">{inr(tcs)}</p>
        </div>
        <div className="rounded-xl bg-background border border-border p-4">
          <p className="font-body text-xs text-foreground-muted">Total debited from your account</p>
          <p className="font-heading font-bold text-xl text-primary">{inr(amount + tcs)}</p>
        </div>
        <div className="rounded-xl bg-background border border-border p-4">
          <p className="font-body text-xs text-foreground-muted">LRS used this year, approx.</p>
          <p className={`font-heading font-bold text-xl ${usdTotal > LRS_LIMIT_USD ? "text-destructive" : "text-primary"}`}>
            USD {Math.round(usdTotal).toLocaleString("en-IN")} <span className="text-sm font-medium">of 250,000</span>
          </p>
        </div>
      </div>
      {usdTotal > LRS_LIMIT_USD && (
        <p className="font-body text-sm text-destructive mt-3">This is above the LRS limit of USD 250,000 for the financial year. Reduce the amount or wait for the next financial year.</p>
      )}
      <p className="font-body text-xs text-foreground-muted mt-4">
        20% on the part of your year's LRS remittances above ₹10 lakh. TCS is tax paid in advance: it appears against your PAN and is claimed in your income tax return. A higher rate applies without PAN/Aadhaar. Confirm with your bank or CA.
      </p>
    </section>
  );
};

export default TcsCalculator;
