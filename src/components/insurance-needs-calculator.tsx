"use client";

import { useMemo, useState } from "react";
import { CalcLeadLink } from "@/components/calc-lead-link";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));
}

export function InsuranceNeedsCalculator() {
  const [income, setIncome] = useState(1000000);
  const [multiplier, setMultiplier] = useState(15);
  const [liabilities, setLiabilities] = useState(2000000);
  const [existingCover, setExistingCover] = useState(500000);

  const recommendedCover = useMemo(() => {
    const raw = income * multiplier + liabilities - existingCover;
    return Math.max(0, raw);
  }, [income, multiplier, liabilities, existingCover]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-background border border-border rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
        <div className="space-y-7">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Your Annual Income</label>
              <span className="font-heading font-semibold text-secondary">₹{formatINR(income)}</span>
            </div>
            <input
              type="range"
              min={200000}
              max={10000000}
              step={50000}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Income Replacement Years</label>
              <span className="font-heading font-semibold text-secondary">{multiplier}x</span>
            </div>
            <input
              type="range"
              min={10}
              max={25}
              step={1}
              value={multiplier}
              onChange={(e) => setMultiplier(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Outstanding Loans (Home, Car, etc.)</label>
              <span className="font-heading font-semibold text-secondary">₹{formatINR(liabilities)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={20000000}
              step={100000}
              value={liabilities}
              onChange={(e) => setLiabilities(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-body text-sm font-semibold text-primary">Existing Life Cover</label>
              <span className="font-heading font-semibold text-secondary">₹{formatINR(existingCover)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={10000000}
              step={50000}
              value={existingCover}
              onChange={(e) => setExistingCover(Number(e.target.value))}
              className="w-full accent-secondary"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-center border-b border-border pb-5 mb-5">
            <span className="font-body text-sm text-foreground-muted block mb-1">Recommended Term Life Cover</span>
            <span className="font-heading font-bold text-accent text-3xl">₹{formatINR(recommendedCover)}</span>
          </div>
          <p className="font-body text-sm text-foreground-muted leading-relaxed">
            This is a quick income-replacement estimate: your annual income multiplied by the
            number of years your family would need support, plus outstanding loans, minus cover
            you already have. Your actual ideal cover also depends on dependents, future goals
            like children&apos;s education, and your family&apos;s living expenses — our Insurance
            desk can help refine this number for your situation.
          </p>
        </div>
      </div>
      <p className="font-body text-xs text-foreground-muted text-center mt-4">
        Illustrative only, based on a standard income-replacement thumb rule. Not a substitute for
        personalised advice.
      </p>
      <CalcLeadLink vertical="Insurance" summary={`Income ₹${formatINR(income)} a year, liabilities ₹${formatINR(liabilities)}, existing cover ₹${formatINR(existingCover)}; the calculator showed about ₹${formatINR(recommendedCover)} of term cover.`} />
    </div>
  );
}
