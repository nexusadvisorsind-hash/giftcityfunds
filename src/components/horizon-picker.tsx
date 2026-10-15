"use client";

import { useState } from "react";

const BANDS = [
  { max: 1, kind: "Liquid or overnight funds", note: "Low-risk debt funds for money you may need within a year. Not guaranteed, but designed to keep the value steady and let you withdraw quickly." },
  { max: 3, kind: "Debt or short-duration funds", note: "For goals a few years away. They aim for steadier value than equity, though they still carry interest-rate and credit risk." },
  { max: 6, kind: "Hybrid funds, a mix of equity and debt", note: "A middle path for goals four to six years out. Part of the money can swing with the market and part stays steadier." },
  { max: 99, kind: "Equity SIPs, and ELSS if you want tax saving", note: "Equity can rise and fall sharply in the short run, so it suits goals seven or more years away. ELSS adds a Section 80C deduction and a 3-year lock-in." },
];

/** Slider mapping "when do you need the money" to the kind of fund usually considered. Educational only. */
export function HorizonPicker() {
  const [years, setYears] = useState(10);
  const band = BANDS.find((b) => years <= b.max) ?? BANDS[BANDS.length - 1];
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <label className="block">
          <span className="flex justify-between font-body text-sm font-semibold text-primary mb-3">
            I need this money in <span>{years} {years === 1 ? "year" : "years"}</span>
          </span>
          <input type="range" min={1} max={20} value={years} onChange={(e) => setYears(+e.target.value)} className="w-full accent-[#1E5FD9]" />
        </label>
        <div className="flex justify-between font-body text-xs text-foreground-muted mt-1"><span>1 year</span><span>20 years</span></div>
      </div>
      <div aria-live="polite" className="border-l-4 border-green pl-5">
        <p className="font-heading font-semibold text-2xl text-primary mb-2">{band.kind}</p>
        <p className="font-body text-foreground-muted leading-relaxed measure">{band.note}</p>
        <p className="font-body text-xs text-foreground-muted mt-3 measure">A general guide, not a recommendation. The right fund depends on your goal and comfort with risk. Mutual fund investments are subject to market risks, read all scheme related documents carefully.</p>
      </div>
    </div>
  );
}
