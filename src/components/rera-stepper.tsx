"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const STEPS = [
  { t: "Find the RERA number", d: "Ask for the project's registration number. It should be on the brochure, the agreement and the builder's ads." },
  { t: "Look it up on the state RERA site", d: "Search MahaRERA for Maharashtra or GujRERA for Gujarat. Confirm the project name, promoter and completion date match." },
  { t: "Read the project's disclosures", d: "Check sanctioned plans, carpet area, approved completion date and any complaints or litigation shown on the page." },
  { t: "Verify the title separately", d: "RERA registration does not prove clean title. Have a lawyer check the ownership chain, encumbrances and approvals." },
  { t: "Match payments to the agreement", d: "Pay only as per the registered agreement and construction stage. Keep every receipt and never pay in cash." },
];

/** Tick-off RERA checklist. Progress is visual only and is not stored. */
export function ReraStepper() {
  const [done, setDone] = useState<boolean[]>(STEPS.map(() => false));
  const count = done.filter(Boolean).length;
  const toggle = (i: number) => setDone((d) => d.map((v, j) => (j === i ? !v : v)));

  return (
    <div>
      <div className="flex items-center gap-4 mb-6" aria-live="polite">
        <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
          <div className="h-full bg-green transition-[width] duration-500" style={{ width: `${(count / STEPS.length) * 100}%` }} />
        </div>
        <span className="font-body text-sm font-semibold text-primary whitespace-nowrap">{count} of {STEPS.length} checked</span>
      </div>
      <ul className="space-y-3">
        {STEPS.map((s, i) => (
          <li key={s.t}>
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={done[i]}
              className={`w-full text-left flex gap-4 rounded-xl border p-5 transition-colors ${done[i] ? "bg-green-soft border-green/40" : "bg-background border-border hover:border-primary/40"}`}
            >
              <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${done[i] ? "bg-green border-green text-white" : "border-primary/30 text-transparent"}`}>
                <Check className="h-4 w-4" />
              </span>
              <span>
                <span className="block font-heading font-semibold text-primary">{i + 1}. {s.t}</span>
                <span className="block font-body text-sm text-foreground-muted mt-1 leading-relaxed">{s.d}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      {count === STEPS.length && (
        <p className="font-body text-sm text-green font-semibold mt-4">All five checks done. Bring the project details to us and we will go through them with you.</p>
      )}
    </div>
  );
}
