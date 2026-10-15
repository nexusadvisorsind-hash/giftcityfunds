import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Printer, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type Status = "resident" | "nri" | "oci";
type Country = "uae" | "uk" | "us" | "canada" | "singapore" | "australia" | "other";
type Product = "retail" | "pms" | "aif" | "bank";

interface Doc { id: string; name: string; note?: string }

const STATUS: [Status, string][] = [["nri", "NRI"], ["oci", "OCI / foreign citizen"], ["resident", "Resident Indian"]];
const COUNTRY: [Country, string][] = [["uae", "UAE / Gulf"], ["uk", "UK"], ["us", "USA"], ["canada", "Canada"], ["singapore", "Singapore"], ["australia", "Australia"], ["other", "Other"]];
const PRODUCT: [Product, string][] = [["retail", "Retail or feeder fund"], ["pms", "PMS"], ["aif", "AIF"], ["bank", "IFSC bank account / FD"]];

function buildList(status: Status, country: Country, product: Product): { docs: Doc[]; warnings: string[] } {
  const docs: Doc[] = [];
  const warnings: string[] = [];
  const add = (id: string, name: string, note?: string) => docs.push({ id, name, note });

  add("passport", status === "oci" ? "Foreign passport" : "Passport", "Clear colour copy of the photo and address pages");
  if (status === "oci") add("oci", "OCI card");
  if (status === "resident") {
    add("pan", "PAN card", "Required for residents");
    add("addr", "Proof of Indian address", "Aadhaar, utility bill or bank statement");
    add("bank", "Indian bank statement or cancelled cheque", "The account the money will come from");
    add("a2", "Form A2 and LRS declaration", "Submitted at your bank when you remit");
  } else {
    add("pan", "PAN card, or a declaration if you have none", "Some fund houses require PAN; others accept a declaration");
    add("addr", "Proof of overseas address", "Utility bill, bank statement or tenancy agreement, usually under 3 months old");
    add("visa", "Visa, residence permit or work permit", country === "uae" ? "Emirates ID for UAE residents" : "Shows your residence abroad");
    add("bank", "Overseas bank statement", "The account the money will come from and redemptions will go to");
    add("trc", "Tax Residency Certificate (TRC)", country === "uae" ? "Issued by the UAE Federal Tax Authority" : "From your country's tax authority, to claim treaty rates");
    add("10f", "Form 10F", "Filed with the TRC to claim India's tax treaty benefits");
  }
  add("photo", "Recent passport-size photograph");
  add("fatca", "FATCA / CRS self-certification", "Form from the fund house or bank");
  if (status !== "resident") add("tin", "Tax identification number of your country of residence", "Needed for the CRS form");

  if (country === "us" && status !== "resident") {
    add("w9", "Form W-9", "For US persons");
    warnings.push("Many GIFT City schemes do not accept US persons, and those that do raise PFIC reporting. Read PFIC explained first.");
  }
  if (country === "canada" && status !== "resident") warnings.push("Some schemes do not accept residents of Canada. Holdings may need reporting on Form T1135.");
  if (country === "uk" && status !== "resident") warnings.push("Ask whether the fund has HMRC reporting fund status; it changes how gains are taxed in the UK.");

  if (product === "pms") {
    add("pmsagr", "PMS agreement", "Signed with the portfolio manager");
    add("custody", "Custody or broker account opening forms", "For the account where your portfolio is held");
    warnings.push("PMS in GIFT City needs at least USD 75,000.");
  }
  if (product === "aif") {
    add("contrib", "Contribution agreement and subscription form");
    add("sof", "Source of funds or wealth declaration", "Often asked for larger commitments");
    warnings.push("GIFT City AIFs commonly need USD 150,000 or more, with lock-ins of several years.");
  }
  if (product === "bank") add("ibu", "IFSC Banking Unit account opening form", "From the bank's GIFT City branch");
  if (product === "retail") add("sub", "Subscription (application) form", "From the fund house, often online");

  if (status === "resident") warnings.push("Every investment is an LRS remittance: USD 250,000 a year, with 20% TCS above ₹10 lakh a year.");
  return { docs, warnings };
}

const Chip = ({ on, label, onClick }: { on: boolean; label: string; onClick: () => void }) => (
  <button
    type="button"
    aria-pressed={on}
    onClick={onClick}
    className={`rounded-full border px-3.5 py-1.5 font-body text-sm transition-colors ${on ? "bg-ink text-white border-ink" : "bg-background text-primary border-border hover:border-teal"}`}
  >
    {label}
  </button>
);

const DocChecklist = () => {
  const [status, setStatus] = useState<Status>("nri");
  const [country, setCountry] = useState<Country>("uae");
  const [product, setProduct] = useState<Product>("retail");
  const [done, setDone] = useState<Record<string, boolean>>({});
  const { docs, warnings } = useMemo(() => buildList(status, country, product), [status, country, product]);

  const pick = <T,>(set: (v: T) => void, key: string) => (v: T) => {
    set(v);
    setDone({});
    trackEvent("checklist_select", { [key]: String(v) });
  };
  const statusLabel = STATUS.find((s) => s[0] === status)?.[1] ?? "";
  const productLabel = PRODUCT.find((s) => s[0] === product)?.[1] ?? "";
  const countryLabel = COUNTRY.find((s) => s[0] === country)?.[1] ?? "";
  const ticked = docs.filter((d) => done[d.id]).length;
  const who = status === "resident" ? "a resident Indian" : status === "nri" ? `an NRI in ${countryLabel}` : `an OCI cardholder / foreign citizen in ${countryLabel}`;
  const what = { retail: "a GIFT City retail or feeder fund", pms: "GIFT City PMS", aif: "a GIFT City AIF", bank: "a GIFT City bank account or FD" }[product];
  const topic = `I'm ${who} and I'd like to understand the documents and process for ${what}.`;

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 md:p-6 my-8 gcf-print-area">
      <fieldset className="mb-4 print:hidden">
        <legend className="font-heading font-semibold text-primary mb-2">1. You are</legend>
        <div className="flex flex-wrap gap-2">{STATUS.map(([v, l]) => <Chip key={v} on={status === v} label={l} onClick={() => pick(setStatus, "status")(v)} />)}</div>
      </fieldset>
      {status !== "resident" && (
        <fieldset className="mb-4 print:hidden">
          <legend className="font-heading font-semibold text-primary mb-2">2. You live in</legend>
          <div className="flex flex-wrap gap-2">{COUNTRY.map(([v, l]) => <Chip key={v} on={country === v} label={l} onClick={() => pick(setCountry, "country")(v)} />)}</div>
        </fieldset>
      )}
      <fieldset className="mb-6 print:hidden">
        <legend className="font-heading font-semibold text-primary mb-2">{status !== "resident" ? "3." : "2."} You want to invest in</legend>
        <div className="flex flex-wrap gap-2">{PRODUCT.map(([v, l]) => <Chip key={v} on={product === v} label={l} onClick={() => pick(setProduct, "product")(v)} />)}</div>
      </fieldset>

      <div className="rounded-xl bg-background border border-border p-4 md:p-5" aria-live="polite">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
          <h2 className="font-heading font-bold text-xl text-primary">
            Your checklist: {statusLabel}{status !== "resident" ? `, ${countryLabel}` : ""}, {productLabel}
          </h2>
          <p className="font-body text-sm text-foreground-muted print:hidden">{ticked} of {docs.length} ready</p>
        </div>
        <ul className="space-y-2.5 list-none p-0">
          {docs.map((d) => (
            <li key={d.id}>
              <label className="flex gap-3 items-start cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-teal shrink-0"
                  checked={!!done[d.id]}
                  onChange={(e) => setDone((s) => ({ ...s, [d.id]: e.target.checked }))}
                />
                <span className="font-body">
                  <span className={`text-primary font-medium ${done[d.id] ? "line-through opacity-60" : ""}`}>{d.name}</span>
                  {d.note && <span className="block text-sm text-foreground-muted">{d.note}</span>}
                </span>
              </label>
            </li>
          ))}
        </ul>
        {warnings.length > 0 && (
          <div className="mt-4 rounded-lg border border-brass/50 bg-brass/10 p-3">
            <p className="font-heading font-semibold text-primary text-sm mb-1">Also check</p>
            <ul className="list-disc pl-5 space-y-1 font-body text-sm text-foreground-muted">
              {warnings.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </div>
        )}
        <p className="font-body text-xs text-foreground-muted mt-4">
          Typical requirements only. Each fund house, bank or portfolio manager sets its own list; overseas documents may need self-attestation or notarisation. Prepared by giftcityfunds.in.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-5 print:hidden">
        <button
          type="button"
          onClick={() => { trackEvent("checklist_print", { status, country, product }); window.print(); }}
          className="inline-flex items-center gap-2 rounded-xl bg-ink text-white font-heading font-semibold px-5 py-3 hover:opacity-90"
        >
          <Printer className="h-4 w-4" aria-hidden /> Print or save as PDF
        </button>
        <Link
          to={`/contact?topic=${encodeURIComponent(topic)}`}
          onClick={() => trackEvent("funnel_contact", { source: "doc_checklist" })}
          className="inline-flex items-center gap-2 rounded-xl border border-border text-primary font-heading font-semibold px-5 py-3 hover:border-teal"
        >
          <MessageCircle className="h-4 w-4" aria-hidden /> Ask Anup about the process
        </Link>
      </div>
    </div>
  );
};

export default DocChecklist;
