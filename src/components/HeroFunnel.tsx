import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe2, FileText, Home as HomeIcon, MessageCircle, RotateCcw } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type Who = "nri" | "oci" | "resident";

interface Goal {
  id: string;
  label: string;
  links: [string, string][];
}

const WHO: { id: Who; label: string; sub: string; icon: typeof Globe2; tone: string }[] = [
  { id: "nri", label: "An NRI", sub: "Indian citizen living abroad", icon: Globe2, tone: "bg-teal" },
  { id: "oci", label: "An OCI", sub: "Foreign citizen of Indian origin", icon: FileText, tone: "bg-brass" },
  { id: "resident", label: "A Resident Indian", sub: "Living in India", icon: HomeIcon, tone: "bg-indigo-300" },
];

const abroadGoals = (guide: [string, string]): Goal[] => [
  { id: "india-usd", label: "Invest in India, in dollars", links: [guide, ["/gift-city-fund-list", "GIFT City fund list"], ["/how-to-invest", "How to invest, step by step"]] },
  { id: "global", label: "Invest globally", links: [["/gift-city-us-stocks-etfs", "GIFT City ETFs and US stocks"], ["/gift-city-fund-list", "Outbound funds in the fund list"], guide] },
  { id: "tax", label: "Understand tax where I live", links: [["/gift-city-funds-for-nri", "Tax rules by country"], ["/taxation", "Indian tax on GIFT City funds"], ["/insights/pfic-explained", "PFIC, for US persons"]] },
  { id: "dollars", label: "Keep savings in dollars", links: [["/insights/gift-city-fd-vs-nre-fcnr", "GIFT City FDs vs NRE and FCNR"], ["/insights/how-to-open-gift-city-bank-account", "Open a GIFT City bank account"], ["/insights/gift-city-vs-nre-nro", "GIFT City vs NRE/NRO"]] },
  { id: "return", label: "I'm moving back to India", links: [["/insights/returning-to-india-gift-city-investments", "What happens to your investments"], ["/gift-city-funds-for-resident-indians", "Investing once you are resident"], ["/insights/gift-city-vs-nre-nro", "NRE and NRO after you return"]] },
];

const GOALS: Record<Who, Goal[]> = {
  nri: abroadGoals(["/gift-city-funds-for-nri", "GIFT City funds for NRIs"]),
  oci: abroadGoals(["/gift-city-funds-for-oci", "GIFT City funds for OCIs"]),
  resident: [
    { id: "abroad", label: "Invest abroad", links: [["/gift-city-funds-for-resident-indians", "GIFT City for resident Indians"], ["/gift-city-vs-international-mutual-funds", "vs international mutual funds"], ["/gift-city-fund-list", "GIFT City fund list"]] },
    { id: "tcs", label: "Work out LRS and TCS", links: [["/insights/lrs-tcs-gift-city#calculator", "TCS calculator"], ["/gift-city-funds-for-resident-indians", "What residents can and cannot do"], ["/gift-city-minimum-investment", "Minimums and limits"]] },
    { id: "us", label: "Buy US stocks and ETFs", links: [["/gift-city-us-stocks-etfs", "GIFT City ETFs and US stocks"], ["/insights/lrs-tcs-gift-city", "LRS and TCS explained"], ["/gift-city-funds-for-resident-indians", "Guide for resident Indians"]] },
    { id: "dollars", label: "Hold dollars in an IFSC account", links: [["/insights/how-to-open-gift-city-bank-account", "Open a GIFT City bank account"], ["/insights/gift-city-fd-vs-nre-fcnr", "GIFT City deposits compared"], ["/gift-city-funds-for-resident-indians", "Guide for resident Indians"]] },
  ],
};

const AS: Record<Who, string> = { nri: "an NRI", oci: "an OCI cardholder", resident: "a resident Indian" };

const Step = ({ n, label, active, done }: { n: number; label: string; active: boolean; done: boolean }) => (
  <li className={`flex items-center gap-2 font-body text-sm ${active ? "text-white" : done ? "text-teal-light" : "text-slate-300"}`}>
    <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${active ? "bg-brass text-ink" : done ? "bg-teal text-ink" : "bg-white/15 text-slate-200"}`}>{n}</span>
    {label}
  </li>
);

/** Three-step "where do I start?" widget for the home page hero. */
const HeroFunnel = () => {
  const [who, setWho] = useState<Who | null>(null);
  const [goal, setGoal] = useState<Goal | null>(null);
  const step = !who ? 1 : !goal ? 2 : 3;
  const as = who ? AS[who] : "";
  const topic = goal ? `I'm ${as} and I'd like to understand: ${goal.label.charAt(0).toLowerCase()}${goal.label.slice(1)}.` : "";
  const contactHref = `/contact?topic=${encodeURIComponent(topic)}`;
  const waHref = `https://wa.me/919537533533?text=${encodeURIComponent(`Hi Anup, ${topic}`)}`;

  const reset = () => { setWho(null); setGoal(null); };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-6" aria-live="polite">
      <ol className="flex flex-wrap gap-x-6 gap-y-2 mb-5 list-none p-0" aria-label="Steps">
        <Step n={1} label="Who are you?" active={step === 1} done={step > 1} />
        <Step n={2} label="What do you want to do?" active={step === 2} done={step > 2} />
        <Step n={3} label="Where to start" active={step === 3} done={false} />
      </ol>

      {step === 1 && (
        <div className="grid gap-3 md:grid-cols-3">
          {WHO.map((w) => (
            <button
              key={w.id}
              type="button"
              onClick={() => { setWho(w.id); trackEvent("funnel_step", { step: 1, who: w.id }); }}
              className="group flex items-center gap-4 rounded-2xl border border-[#23345E] bg-white/[0.04] p-4 text-left transition-colors hover:border-teal-light hover:bg-teal/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-light"
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${w.tone}`}>
                <w.icon className="h-5 w-5 text-ink" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block font-heading text-lg font-semibold text-white">{w.label}</span>
                <span className="block font-body text-sm text-slate-400">{w.sub}</span>
              </span>
              <ArrowRight className="h-5 w-5 text-teal-light transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          ))}
        </div>
      )}

      {step === 2 && who && (
        <div>
          <p className="font-body text-slate-300 mb-3">As <span className="text-white font-semibold">{as}</span>, what would you like to do?</p>
          <div className="flex flex-wrap gap-2">
            {GOALS[who].map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => { setGoal(g); trackEvent("funnel_step", { step: 2, who, goal: g.id }); }}
                className="rounded-full border border-[#23345E] bg-white/[0.06] px-4 py-2 font-body text-sm font-medium text-white hover:border-teal-light hover:bg-teal/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-light"
              >
                {g.label}
              </button>
            ))}
          </div>
          <button type="button" onClick={reset} className="mt-4 inline-flex items-center gap-1 font-body text-sm text-slate-400 hover:text-white">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Change
          </button>
        </div>
      )}

      {step === 3 && who && goal && (
        <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-body text-slate-300 mb-3">
              <span className="text-white font-semibold">{goal.label}</span>, as {as}. Start with these:
            </p>
            <ol className="space-y-2 list-none p-0">
              {goal.links.map(([to, label], i) => (
                <li key={to + label}>
                  <Link
                    to={to}
                    onClick={() => trackEvent("funnel_link", { who, goal: goal.id, to })}
                    className="group flex items-center gap-3 rounded-xl bg-white/[0.06] px-4 py-3 font-body text-white hover:bg-teal/15"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-bold text-ink">{i + 1}</span>
                    <span className="flex-1">{label}</span>
                    <ArrowRight className="h-4 w-4 text-teal-light transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ol>
            <button type="button" onClick={reset} className="mt-3 inline-flex items-center gap-1 font-body text-sm text-slate-400 hover:text-white">
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Start again
            </button>
          </div>
          <div className="rounded-2xl bg-brass/10 border border-brass/40 p-5 flex flex-col">
            <p className="font-heading font-semibold text-white text-lg">Prefer to talk it through?</p>
            <p className="font-body text-sm text-slate-300 mt-1 mb-4 flex-1">
              Anup Vatyani explains how this works for your situation. Educational conversation; no personalised investment advice.
            </p>
            <Link
              to={contactHref}
              onClick={() => trackEvent("funnel_contact", { who, goal: goal.id })}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brass px-4 py-2.5 font-heading font-semibold text-ink hover:bg-brass-light"
            >
              Talk to Anup <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { source: "funnel", who, goal: goal.id })}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 font-body text-sm text-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp instead
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroFunnel;
