import { useState } from "react";
import { Link } from "react-router-dom";
import { GuidePage, h2, p, a } from "@/components/GuidePage";
import { trackEvent } from "@/lib/analytics";

type Status = "resident" | "nri" | "oci" | "returning";
type Money = "india" | "nre" | "nro" | "abroad";
type Goal = "india" | "global" | "unsure";

const Q = ({ legend, options, value, onChange }: { legend: string; options: [string, string][]; value: string; onChange: (v: string) => void }) => (
  <fieldset className="mb-6">
    <legend className="font-heading font-semibold text-primary mb-3">{legend}</legend>
    <div className="grid sm:grid-cols-2 gap-2">
      {options.map(([v, label]) => (
        <label
          key={v}
          className={`cursor-pointer rounded-xl border px-4 py-3 font-body text-sm transition-colors ${
            value === v ? "border-teal bg-teal/15 text-primary font-medium" : "border-border bg-background text-foreground-muted hover:border-teal"
          }`}
        >
          <input type="radio" className="sr-only" checked={value === v} onChange={() => onChange(v)} />
          {label}
        </label>
      ))}
    </div>
  </fieldset>
);

interface Result {
  route: string;
  points: string[];
  links: [string, string][];
}

const resultFor = (status: Status, money: Money, goal: Goal, us: boolean): Result => {
  const links: [string, string][] = [];
  const points: string[] = [];
  let route: string;

  if (status === "resident" || status === "returning") {
    route = "Liberalised Remittance Scheme (LRS)";
    points.push("You invest as a resident individual by remitting from your Indian bank account under LRS, up to USD 250,000 a financial year across all purposes.");
    points.push("Your bank collects TCS of 20% on investment remittances once your total for the year passes ₹10 lakh. It is credited back against your income tax.");
    points.push("You report the holding in Schedule FA of your income tax return every year.");
    if (status === "returning") points.push("If you have just returned, check whether you are still RNOR for tax. Money you already hold abroad from your NRI years may be kept invested under FEMA's rules for returning residents.");
    links.push(["/insights/lrs-tcs-gift-city#calculator", "LRS, TCS and calculator"]);
    if (status === "returning") links.push(["/insights/returning-to-india-gift-city-investments", "Returning to India"]);
  } else {
    if (money === "abroad") {
      route = "Direct foreign-currency investment";
      points.push("You send USD or another foreign currency straight from your overseas account to the fund. No LRS limit and no TCS.");
      points.push("Redemptions are usually paid back to an overseas or foreign-currency account, with no rupee conversion.");
    } else if (money === "nre") {
      route = "From your NRE account (repatriable)";
      points.push("NRE balances are freely repatriable, so they can be converted and sent to a GIFT City fund. Ask your bank how it handles the outward transfer.");
      points.push("LRS and TCS apply to residents, not to NRIs investing their own NRE money; confirm the bank's documentation.");
    } else if (money === "nro") {
      route = "From your NRO account (repatriation limit)";
      points.push("NRO money can be repatriated up to USD 1 million a financial year, with Form 15CA/15CB and proof that tax has been paid.");
      points.push("Many NRIs find it simpler to invest from money already held abroad.");
    } else {
      route = "Check your residential status first";
      points.push("If you are an NRI, your money in India should be in NRE or NRO accounts, not a resident savings account. Fix this with your bank before investing.");
    }
    points.push("You are taxed in your country of residence as well; Indian tax depends on the fund structure.");
    links.push(["/gift-city-funds-nri-tax-by-country", "Rules by country"], ["/insights/gift-city-vs-nre-nro", "GIFT City vs NRE/NRO"]);
    if (status === "oci") points.push("OCI cardholders are generally treated like NRIs for these investments; carry your OCI card and foreign passport for KYC.");
  }

  if (goal === "india") {
    points.push("You are looking at inbound funds: GIFT City schemes that invest in Indian markets, usually in US Dollars.");
  } else if (goal === "global") {
    points.push("You are looking at outbound funds, or US stocks and ETFs through an IFSC broker. Compare these with Indian international mutual funds.");
    links.push(["/gift-city-vs-international-mutual-funds", "vs international mutual funds"], ["/gift-city-us-stocks-etfs", "US stocks and ETFs"]);
  } else {
    points.push("Start with the difference between inbound (India) and outbound (global) funds.");
  }
  links.push(["/gift-city-fund-list", "GIFT City fund list"]);

  if (us) {
    points.unshift("Important: as a US person, most GIFT City funds are likely to be PFICs for US tax, with punitive tax and Form 8621 reporting. Check this before anything else.");
    links.unshift(["/us-based-nris", "US-based NRIs"], ["/insights/pfic-explained", "PFIC explained"]);
  }

  return { route, points, links };
};

const RouteChecker = () => {
  const [status, setStatus] = useState<Status | "">("");
  const [money, setMoney] = useState<Money | "">("");
  const [goal, setGoal] = useState<Goal | "">("");
  const [us, setUs] = useState<"yes" | "no" | "">("");

  const needsMoney = status === "nri" || status === "oci";
  const ready = status && goal && us && (!needsMoney || money);
  const result = ready ? resultFor(status as Status, (money || "india") as Money, goal as Goal, us === "yes") : null;

  return (
    <GuidePage
      path="/gift-city-route-checker"
      kind="WebPage"
      headline="Which GIFT City Route Applies to You? A 30-Second Checker"
      seoTitle="GIFT City Eligibility Checker: Which Route Applies to You?"
      description="Answer four questions to see how you would invest in a GIFT City fund: LRS and TCS for residents, direct USD for NRIs, NRE/NRO rules, PFIC for US persons. Free, private, no sign-up."
      crumb="Route Checker"
      datePublished="2026-10-08"
      sources={["rbiLrs", "ifsca", "irs8621"]}
      extraSchema={[
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "GIFT City Route Checker",
          url: "https://giftcityfunds.in/gift-city-route-checker",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
        },
      ]}
    >
      <p className={p}>
        Four questions, no sign-up, and nothing you choose leaves your browser. The result explains the general route and the rules that usually apply. It is educational and is not advice on whether to invest.
      </p>

      <section aria-label="Route checker" className="mt-8 rounded-2xl border-2 border-teal bg-teal/5 p-5 md:p-7">
        <Q
          legend="1. What is your residential status?"
          value={status}
          onChange={(v) => { setStatus(v as Status); trackEvent("tool_use", { tool: "route_checker" }); }}
          options={[["resident", "Resident Indian"], ["nri", "NRI (Indian citizen living abroad)"], ["oci", "OCI cardholder / foreign citizen"], ["returning", "Returning NRI (moved back recently)"]]}
        />
        {needsMoney && (
          <Q
            legend="2. Where is the money you would invest?"
            value={money}
            onChange={(v) => setMoney(v as Money)}
            options={[["abroad", "In a bank account abroad"], ["nre", "In my NRE account"], ["nro", "In my NRO account"], ["india", "In a regular Indian savings account"]]}
          />
        )}
        <Q
          legend={`${needsMoney ? "3" : "2"}. Where do you want the money invested?`}
          value={goal}
          onChange={(v) => setGoal(v as Goal)}
          options={[["india", "Indian markets"], ["global", "Global / US markets"], ["unsure", "Not sure yet"]]}
        />
        <Q
          legend={`${needsMoney ? "4" : "3"}. Are you a US citizen, green card holder or US tax resident?`}
          value={us}
          onChange={(v) => setUs(v as "yes" | "no")}
          options={[["no", "No"], ["yes", "Yes"]]}
        />

        <div aria-live="polite">
          {result ? (
            <div className="rounded-2xl bg-ink text-white p-5 md:p-6">
              <p className="font-body text-sm text-teal-light">Your likely route</p>
              <p className="font-heading font-bold text-2xl text-brass mt-1 mb-4">{result.route}</p>
              <ul className="space-y-2 font-body text-sm text-slate-200 list-disc pl-5">
                {result.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <p className="font-heading font-semibold text-white mt-5 mb-2">Read next</p>
              <div className="flex flex-wrap gap-2">
                {result.links.map(([to, label]) => (
                  <Link key={to} to={to} className="rounded-full bg-white/10 hover:bg-white/20 px-3 py-1.5 font-body text-sm text-white">{label}</Link>
                ))}
              </div>
            </div>
          ) : (
            <p className="font-body text-sm text-foreground-muted">Answer the questions above to see your route.</p>
          )}
        </div>
      </section>

      <h2 className="font-heading font-semibold text-2xl text-primary mt-12 mb-4">Why the route matters</h2>
      <p className={p}>
        The same GIFT City fund can be reached in different ways, and the way you invest decides the limits, the tax collected at source and the paperwork. See the full <Link to="/how-to-invest" className={a}>how to invest guide</Link> or <Link to="/who-its-for" className={a}>who can invest</Link>.
      </p>
    </GuidePage>
  );
};

export default RouteChecker;
