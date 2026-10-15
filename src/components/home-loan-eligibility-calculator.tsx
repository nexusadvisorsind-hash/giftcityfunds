"use client";

import { useMemo, useState } from "react";
import { CalcLeadLink } from "@/components/calc-lead-link";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));
}

export function HomeLoanEligibilityCalculator() {
  const [income, setIncome] = useState(80000);
  const [existingEmi, setExistingEmi] = useState(0);
  const [rate, setRate] = useState(9);
  const [tenure, setTenure] = useState(20);
  const [foir, setFoir] = useState(50);

  const { eligibleLoan, eligibleEmi } = useMemo(() => {
    const maxEmi = Math.max(0, (income * foir) / 100 - existingEmi);
    const r = rate / 100 / 12;
    const n = tenure * 12;
    const eligibleLoan =
      r === 0 ? maxEmi * n : (maxEmi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
    return { eligibleLoan, eligibleEmi: maxEmi };
  }, [income, existingEmi, rate, tenure, foir]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-background border border-border rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
        <div className="space-y-7">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Monthly Household Income</label>
              <span className="font-heading font-semibold text-secondary">₹{formatINR(income)}</span>
            </div>
            <input
              type="range"
              min={20000}
              max={1000000}
              step={5000}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Existing Monthly EMIs</label>
              <span className="font-heading font-semibold text-secondary">₹{formatINR(existingEmi)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={200000}
              step={1000}
              value={existingEmi}
              onChange={(e) => setExistingEmi(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Expected Interest Rate</label>
              <span className="font-heading font-semibold text-secondary">{rate}%</span>
            </div>
            <input
              type="range"
              min={6}
              max={14}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Loan Tenure</label>
              <span className="font-heading font-semibold text-secondary">{tenure} yrs</span>
            </div>
            <input
              type="range"
              min={5}
              max={30}
              step={1}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-center border-b border-border pb-5 mb-5">
            <span className="font-body text-sm text-foreground-muted block mb-1">Estimated Home Loan Eligibility</span>
            <span className="font-heading font-bold text-accent text-3xl">₹{formatINR(eligibleLoan)}</span>
          </div>
          <div className="flex justify-between items-baseline mb-2">
            <span className="font-body text-sm text-foreground-muted">Eligible Monthly EMI</span>
            <span className="font-heading font-semibold text-primary">₹{formatINR(eligibleEmi)}</span>
          </div>
          <div className="mt-4">
            <div className="flex justify-between mb-2">
              <label className="font-body text-xs text-foreground-muted">Bank&apos;s Assumed FOIR (obligation-to-income limit)</label>
              <span className="font-heading font-semibold text-secondary text-xs">{foir}%</span>
            </div>
            <input
              type="range"
              min={30}
              max={65}
              step={5}
              value={foir}
              onChange={(e) => setFoir(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
        </div>
      </div>
      <p className="font-body text-xs text-foreground-muted text-center mt-4">
        Illustrative only, based on a standard Fixed-Obligation-to-Income Ratio (FOIR) method
        lenders commonly use. Actual home loan eligibility varies by bank/NBFC, credit score and
        property valuation.
      </p>
      <CalcLeadLink vertical="Real Estate" summary={`Monthly income ₹${formatINR(income)}, existing EMIs ₹${formatINR(existingEmi)}; home loan eligibility shown about ₹${formatINR(eligibleLoan)}.`} />
    </div>
  );
}
