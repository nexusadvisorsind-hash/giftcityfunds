"use client";

import { useMemo, useState } from "react";
import { CalcLeadLink } from "@/components/calc-lead-link";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));
}

export function LoanEligibilityCalculator() {
  const [income, setIncome] = useState(60000);
  const [existingEmi, setExistingEmi] = useState(5000);
  const [rate, setRate] = useState(11);
  const [tenure, setTenure] = useState(5);

  const { eligibleLoan, eligibleEmi } = useMemo(() => {
    const maxEmi = Math.max(0, income * 0.5 - existingEmi);
    const r = rate / 100 / 12;
    const n = tenure * 12;
    const eligibleLoan =
      r === 0 ? maxEmi * n : (maxEmi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
    return { eligibleLoan, eligibleEmi: maxEmi };
  }, [income, existingEmi, rate, tenure]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-background border border-border rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
        <div className="space-y-7">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Monthly Income</label>
              <span className="font-heading font-semibold text-secondary">₹{formatINR(income)}</span>
            </div>
            <input
              type="range"
              min={15000}
              max={500000}
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
              max={100000}
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
              min={8}
              max={24}
              step={0.5}
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
              min={1}
              max={20}
              step={1}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-center border-b border-border pb-5 mb-5">
            <span className="font-body text-sm text-foreground-muted block mb-1">Estimated Loan Eligibility</span>
            <span className="font-heading font-bold text-accent text-3xl">₹{formatINR(eligibleLoan)}</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="font-body text-sm text-foreground-muted">Eligible Monthly EMI</span>
            <span className="font-heading font-semibold text-primary">₹{formatINR(eligibleEmi)}</span>
          </div>
        </div>
      </div>
      <p className="font-body text-xs text-foreground-muted text-center mt-4">
        Illustrative only, assuming lenders cap your total EMIs at roughly 50% of monthly income.
        Actual loan eligibility varies by lender, loan type, credit score and documentation.
      </p>
      <CalcLeadLink vertical="Loans" summary={`Monthly income ₹${formatINR(income)}, existing EMIs ₹${formatINR(existingEmi)}; eligibility shown about ₹${formatINR(eligibleLoan)}.`} />
    </div>
  );
}
