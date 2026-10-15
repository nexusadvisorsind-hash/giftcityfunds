"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Step = { pillar: "Mutual funds" | "Real estate" | "Insurance" | "Loans"; title: string; why: string; href: string; cta: string };

const PILLAR_STYLE: Record<Step["pillar"], string> = {
  "Mutual funds": "bg-secondary/10 text-secondary",
  "Real estate": "bg-green-soft text-green",
  Insurance: "bg-accent/20 text-accent-foreground",
  Loans: "bg-primary/10 text-primary",
};

const MOMENTS: { id: string; label: string; intro: string; steps: Step[] }[] = [
  {
    id: "first-job",
    label: "First job",
    intro: "Your first salary is the best time to set up habits that are cheap to start.",
    steps: [
      { pillar: "Insurance", title: "Get health and term cover while you are young", why: "Premiums depend on your age and health when you buy, so starting early usually costs less.", href: "/insurance#cover-calculator", cta: "Check how much cover" },
      { pillar: "Mutual funds", title: "Start a small SIP and let it run", why: "A fixed monthly amount builds the habit first. The amount can grow with your salary.", href: "/mutual-funds#sip-calculator", cta: "Try the SIP calculator" },
      { pillar: "Loans", title: "Protect your credit score from day one", why: "A clean repayment record makes your first home loan easier to approve later.", href: "/blog/improve-loan-approval-chances", cta: "Read the loan approval guide" },
    ],
  },
  {
    id: "marriage",
    label: "Getting married",
    intro: "Two incomes, shared goals. Put them on one page before you spend on the first big thing.",
    steps: [
      { pillar: "Insurance", title: "Review cover for both of you", why: "Check that each income has protection and that health cover is in place for the family you are forming.", href: "/insurance#cover-calculator", cta: "Estimate term cover" },
      { pillar: "Mutual funds", title: "Pick one shared goal and fund it monthly", why: "A home down payment or a child's education fund works well as a joint SIP target.", href: "/mutual-funds#goal-calculator", cta: "Work backwards from a goal" },
      { pillar: "Real estate", title: "Know your home budget before you visit flats", why: "Eligibility and a realistic EMI keep the search focused on homes you can actually buy.", href: "/real-estate#home-loan-check", cta: "Check home loan eligibility" },
    ],
  },
  {
    id: "home",
    label: "Buying a home",
    intro: "The biggest purchase most families make. Order matters: budget, verification, then protection.",
    steps: [
      { pillar: "Loans", title: "Check eligibility and EMI before you shortlist", why: "Knowing what lenders may offer stops you falling for a property outside your range.", href: "/loans#emi-calculator", cta: "Open the EMI calculator" },
      { pillar: "Real estate", title: "Verify RERA registration and title", why: "RERA registration and a clean title are separate checks. Do both before you pay a booking amount.", href: "/real-estate#rera-check", cta: "See the 5-step check" },
      { pillar: "Insurance", title: "Cover the loan so the family keeps the home", why: "Term cover at least equal to the outstanding loan means a loan never becomes the family's burden.", href: "/insurance#cover-calculator", cta: "Estimate cover needed" },
    ],
  },
  {
    id: "baby",
    label: "New baby",
    intro: "Costs rise and one question starts to matter more: what if income stopped?",
    steps: [
      { pillar: "Insurance", title: "Raise term cover and review health cover", why: "A new dependant changes how much cover your family needs and what your health plan should include.", href: "/insurance#cover-calculator", cta: "Re-run the cover estimate" },
      { pillar: "Mutual funds", title: "Start a long-term education SIP", why: "Education costs arrive on a fixed date. A SIP lets you save towards it in small monthly steps.", href: "/mutual-funds#goal-calculator", cta: "Plan the education goal" },
      { pillar: "Real estate", title: "Think about space when you are ready", why: "If you will need a bigger home, start by understanding locations and budgets early, with no pressure to buy.", href: "/real-estate", cta: "Explore real estate" },
    ],
  },
  {
    id: "business",
    label: "Starting a business",
    intro: "Cash flow decides whether a good idea survives its first two years.",
    steps: [
      { pillar: "Loans", title: "Compare working-capital and business loan options", why: "Rates, tenure and documents differ across banks and NBFCs. A panel lets you compare before you apply.", href: "/loans", cta: "See business loan options" },
      { pillar: "Insurance", title: "Cover the business and the owner", why: "Fire, stock and liability cover protect the business. Term and health cover protect the people running it.", href: "/insurance", cta: "See insurance options" },
      { pillar: "Mutual funds", title: "Park surplus cash in a liquid fund", why: "Liquid funds suit money you may need within months. Returns are not guaranteed and capital is at market risk.", href: "/mutual-funds", cta: "Learn about liquid funds" },
    ],
  },
  {
    id: "retire",
    label: "Retiring soon",
    intro: "The question changes from how to grow money to how to make it last.",
    steps: [
      { pillar: "Mutual funds", title: "Match each goal to its time horizon", why: "Money needed in the next few years and money for later years can sit in different kinds of funds.", href: "/mutual-funds#goal-calculator", cta: "Plan a retirement goal" },
      { pillar: "Insurance", title: "Check health cover before you retire", why: "Employer cover often ends with the job. A personal health plan avoids a gap at the age you need it most.", href: "/insurance", cta: "Review health cover" },
      { pillar: "Real estate", title: "Review property you already hold", why: "Whether to keep, rent out or sell depends on your income needs. Get the facts on values and paperwork first.", href: "/real-estate", cta: "Talk about property" },
    ],
  },
];

export function LifeMomentPicker() {
  const [id, setId] = useState(MOMENTS[2].id);
  const moment = MOMENTS.find((m) => m.id === id) ?? MOMENTS[0];

  return (
    <div>
      <div role="tablist" aria-label="Where are you in life?" className="flex flex-wrap gap-2 mb-8">
        {MOMENTS.map((m) => {
          const on = m.id === id;
          return (
            <button
              key={m.id}
              role="tab"
              aria-selected={on}
              aria-controls="life-panel"
              onClick={() => setId(m.id)}
              className={`rounded-full px-4 py-2 font-body text-sm font-semibold border transition-colors ${
                on
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary/50"
              }`}
            >
              {m.label}
            </button>
          );
        })}
      </div>

      <div id="life-panel" role="tabpanel" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={moment.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <p className="font-heading text-xl md:text-2xl text-primary mb-8 measure">{moment.intro}</p>
            <ol className="grid md:grid-cols-3 gap-x-8 gap-y-8 border-t border-border pt-8">
              {moment.steps.map((s, i) => (
                <li key={s.title} className="relative">
                  <span className="font-heading text-4xl text-accent/80 leading-none block mb-3" aria-hidden>
                    {i + 1}
                  </span>
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold font-body mb-3 ${PILLAR_STYLE[s.pillar]}`}>
                    {s.pillar}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-primary mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-foreground-muted leading-relaxed mb-3">{s.why}</p>
                  <Link href={s.href} className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-secondary hover:underline">
                    {s.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="font-body text-xs text-foreground-muted mt-8 measure">
        These are starting points for a conversation, not personal advice. Mutual fund investments are subject to market risks, read all scheme related documents carefully. Insurance is the subject matter of solicitation.
      </p>
    </div>
  );
}
