"use client";

import { useMemo, useState } from "react";
import { CalcLeadLink } from "@/components/calc-lead-link";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));
}

export function EmiCalculator() {
  const [principal, setPrincipal] = useState(2000000);
  const [rate, setRate] = useState(9);
  const [tenure, setTenure] = useState(20);

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const r = rate / 100 / 12;
    const n = tenure * 12;
    const emi = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - principal;
    return { emi, totalInterest, totalPayment };
  }, [principal, rate, tenure]);

  const principalPct = (principal / totalPayment) * 100;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-background border border-border rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
        <div className="space-y-7">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Loan Amount</label>
              <span className="font-heading font-semibold text-secondary">₹{formatINR(principal)}</span>
            </div>
            <input
              type="range"
              min={100000}
              max={20000000}
              step={100000}
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Interest Rate</label>
              <span className="font-heading font-semibold text-secondary">{rate}%</span>
            </div>
            <input
              type="range"
              min={6}
              max={18}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Tenure</label>
              <span className="font-heading font-semibold text-secondary">{tenure} yrs</span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-4 mb-8">
            <div className="text-center border-b border-border pb-4">
              <span className="font-body text-sm text-foreground-muted block mb-1">Monthly EMI</span>
              <span className="font-heading font-bold text-accent text-3xl">₹{formatINR(emi)}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-body text-sm text-foreground-muted">Total Interest</span>
              <span className="font-heading font-semibold text-primary">₹{formatINR(totalInterest)}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-body text-sm text-foreground-muted">Total Payment</span>
              <span className="font-heading font-semibold text-primary">₹{formatINR(totalPayment)}</span>
            </div>
          </div>

          <div>
            <div className="h-3 rounded-full overflow-hidden flex bg-border">
              <div className="bg-secondary" style={{ width: `${principalPct}%` }} />
              <div className="bg-accent" style={{ width: `${100 - principalPct}%` }} />
            </div>
            <div className="flex justify-between mt-2 font-body text-xs text-foreground-muted">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary inline-block" /> Principal</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent inline-block" /> Interest</span>
            </div>
          </div>
        </div>
      </div>
      <p className="font-body text-xs text-foreground-muted text-center mt-4">
        Illustrative only. Actual rates, tenure and eligibility are determined by the partner bank/NBFC.
      </p>
      <CalcLeadLink vertical="Loans" summary={`Loan of ₹${formatINR(principal)} for ${tenure} years at ${rate}%; EMI shown about ₹${formatINR(emi)}.`} />
    </div>
  );
}
