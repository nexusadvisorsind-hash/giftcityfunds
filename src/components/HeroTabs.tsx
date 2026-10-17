import { useRef, useState, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// Three plain tabs under the home hero: pick who you are, see three key
// points and the guide written for you.
const TABS = [
  {
    id: "nri",
    label: "I'm an NRI",
    to: "/gift-city-funds-for-nri",
    link: "GIFT City funds for NRIs",
    points: ["Invest in US Dollars from your overseas account", "No LRS limit and no TCS", "Retail funds commonly from about USD 500"],
  },
  {
    id: "oci",
    label: "I'm an OCI",
    to: "/gift-city-funds-for-oci",
    link: "GIFT City funds for OCIs",
    points: ["Eligibility depends on the scheme and your country", "Foreign passport and OCI card for KYC", "US and Canadian residents are often excluded"],
  },
  {
    id: "resident",
    label: "I live in India",
    to: "/gift-city-funds-for-resident-indians",
    link: "GIFT City funds for resident Indians",
    points: ["Invest abroad under LRS, up to USD 250,000 a year", "20% TCS above ₹10 lakh a year, claimable in your return", "Outbound funds, lump sums only (no SIP)"],
  },
] as const;

const HeroTabs = () => {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = TABS[active];

  const select = (i: number) => {
    setActive(i);
    trackEvent("hero_tab", { tab: TABS[i].id });
  };
  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const next = e.key === "ArrowRight" ? (i + 1) % TABS.length : e.key === "ArrowLeft" ? (i - 1 + TABS.length) % TABS.length : e.key === "Home" ? 0 : e.key === "End" ? TABS.length - 1 : -1;
    if (next < 0) return;
    e.preventDefault();
    select(next);
    refs.current[next]?.focus();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div role="tablist" aria-label="Who are you?" className="grid grid-cols-3 border-b-2 border-white/15">
        {TABS.map((t, i) => {
          const on = i === active;
          return (
            <button
              key={t.id}
              ref={(el) => (refs.current[i] = el)}
              id={`hero-tab-${t.id}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="hero-tabpanel"
              tabIndex={on ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`-mb-0.5 min-h-[56px] border-b-[3px] px-2 py-4 font-heading text-base sm:text-lg font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass ${
                on ? "border-brass text-white" : "border-transparent text-slate-300 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <div id="hero-tabpanel" role="tabpanel" aria-labelledby={`hero-tab-${tab.id}`} key={tab.id} className="gcf-fade-in pt-7 text-left">
        <ul className="grid gap-4 sm:grid-cols-3 list-none p-0 m-0">
          {tab.points.map((pt) => (
            <li key={pt} className="flex gap-3 items-start">
              <span className="flex-none mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-teal-light/15">
                <Check className="h-4 w-4 text-teal-light" strokeWidth={3} aria-hidden />
              </span>
              <span className="font-body text-base leading-relaxed text-slate-200">{pt}</span>
            </li>
          ))}
        </ul>
        <Link
          to={tab.to}
          onClick={() => trackEvent("hero_tab_link", { tab: tab.id })}
          className="mt-6 inline-flex items-center font-body font-bold text-teal-light underline underline-offset-4 hover:text-white"
        >
          {tab.link} <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
};

export default HeroTabs;
