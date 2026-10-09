import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { openCookieSettings } from "@/lib/analytics";

const UPDATED = "8 October 2026";

const h2 = "font-heading font-semibold text-2xl text-foreground mb-4";
const p = "font-body text-foreground-muted";
const cell = "p-3 border border-border align-top";

// What each part of the site collects, why, and for how long.
// Keep this in step with the forms and with src/lib/analytics.ts.
const dataRows = [
  {
    where: "Contact form",
    what: "Name, email address, phone number (optional), investor type (optional), your message",
    why: "To reply to your enquiry and keep a record of the conversation",
    basis: "Your consent, given by ticking the box on the form",
    keep: "24 months after our last exchange, then deleted",
  },
  {
    where: "Contact form, optional box",
    what: "Email address",
    why: "To send occasional GIFT City updates",
    basis: "Your separate, optional consent",
    keep: "Until you unsubscribe",
  },
  {
    where: "Newsletter sign-up (Insights page)",
    what: "Email address",
    why: "To send new articles by email",
    basis: "Your consent, given by subscribing",
    keep: "Until you unsubscribe",
  },
  {
    where: "Both forms, automatically",
    what: "IP address and browser type",
    why: "To detect spam and misuse of the forms",
    basis: "Collected with the form you choose to submit",
    keep: "Same period as the form record",
  },
  {
    where: "Google Analytics (only if you accept)",
    what: "Cookie identifier, IP address (shortened), pages viewed, device and browser details",
    why: "To understand which pages are useful and improve the site",
    basis: "Your consent through the cookie banner",
    keep: "14 months in Google Analytics",
  },
];

const processors = [
  ["Vercel Inc.", "Website hosting"],
  ["Supabase Inc.", "Database that stores form submissions"],
  ["Resend Inc.", "Delivery of form notification emails"],
  ["Google LLC", "Email inbox that receives enquiries; Google Analytics, only with your consent"],
];

const PrivacyPolicy = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    "name": "Privacy Policy",
    "url": "https://giftcityfunds.in/privacy-policy",
    "description": "How GIFT City Funds collects, uses, and protects personal data under India's Digital Personal Data Protection Act, 2023.",
    "inLanguage": "en-IN",
    "dateModified": "2026-10-08",
    "isPartOf": { "@type": "WebSite", "name": "GIFT City Funds", "url": "https://giftcityfunds.in/" },
    "publisher": { "@type": "Person", "name": "Anup Vatyani", "identifier": "AMFI ARN-106715" },
    "about": "Website privacy and data-handling policy",
  };

  return (
    <>
      <SEO
        title="Privacy Policy | GIFT City Funds"
        description="How GIFT City Funds collects, uses and protects personal data, your rights under India's DPDP Act, and how to contact our grievance officer."
        canonical="https://giftcityfunds.in/privacy-policy"
        schema={schema}
        breadcrumbs={[
          { name: "Home", url: "https://giftcityfunds.in/" },
          { name: "Privacy Policy", url: "https://giftcityfunds.in/privacy-policy" },
        ]}
      />

      <div className="min-h-screen py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Privacy Policy", url: "/privacy-policy" }]} />

          <p className="text-sm text-foreground-muted mb-4">Last updated: {UPDATED}</p>
          <h1 className="font-heading font-bold text-4xl text-primary mb-8">Privacy Policy</h1>

          <div className="space-y-10">
            <section>
              <h2 className={h2}>1. Who we are</h2>
              <p className={p}>
                This website, giftcityfunds.in ("GIFT City Funds", "we", "us"), is run by Anup Vatyani, AMFI-registered
                Mutual Fund Distributor (ARN 106715), Ahmedabad, Gujarat, India. For the personal data described here,
                Anup Vatyani is the Data Fiduciary under India's Digital Personal Data Protection Act, 2023 (the "DPDP
                Act"). You can reach us about anything in this policy at{" "}
                <a href="mailto:info@giftcityfunds.in" className="text-secondary hover:underline">info@giftcityfunds.in</a>.
              </p>
            </section>

            <section>
              <h2 className={h2}>2. What we collect, why, and for how long</h2>
              <p className={`${p} mb-4`}>
                You can read every page of this site without giving us any personal data. We collect personal data only
                in the situations below, and only what each purpose needs.
              </p>
              <div tabIndex={0} role="region" aria-label="Table, scroll sideways to see more" className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-surface text-left">
                      <th scope="col" className={cell}>Where</th>
                      <th scope="col" className={cell}>Data</th>
                      <th scope="col" className={cell}>Purpose</th>
                      <th scope="col" className={cell}>Basis</th>
                      <th scope="col" className={cell}>Kept for</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground-muted">
                    {dataRows.map((r) => (
                      <tr key={r.where + r.why}>
                        <th scope="row" className={`${cell} text-left font-medium text-primary`}>{r.where}</th>
                        <td className={cell}>{r.what}</td>
                        <td className={cell}>{r.why}</td>
                        <td className={cell}>{r.basis}</td>
                        <td className={cell}>{r.keep}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={`${p} mt-4`}>
                We may keep data longer only where a law requires it, for example if an enquiry leads to an investment
                and SEBI or AMFI record-keeping rules then apply. Please do not send PAN, Aadhaar, bank or account details
                through this website.
              </p>
            </section>

            <section>
              <h2 className={h2}>3. Cookies</h2>
              <p className={p}>
                The site works without cookies. Google Analytics cookies are set only if you choose "Accept analytics" in
                the banner. If you decline, or make no choice, Google Analytics does not load. We store your choice in your
                browser so we don't ask again. You can change it at any time:{" "}
                <button type="button" onClick={openCookieSettings} className="text-secondary hover:underline">
                  open cookie settings
                </button>
                .
              </p>
            </section>

            <section>
              <h2 className={h2}>4. Who we share data with</h2>
              <p className={`${p} mb-4`}>
                We do not sell, rent or trade personal data, and we do not use it for insurance, loan or other product
                promotions you have not agreed to. We use these service providers to run the site, under their data
                protection terms:
              </p>
              <ul className={`${p} list-disc pl-6 space-y-1`}>
                {processors.map(([name, role]) => (
                  <li key={name}>
                    <strong className="text-primary">{name}</strong> — {role}
                  </li>
                ))}
              </ul>
              <p className={`${p} mt-4`}>
                Some of these providers may store or process data outside India. We may also disclose data where Indian
                law requires it.
              </p>
            </section>

            <section>
              <h2 className={h2}>5. Your rights</h2>
              <p className={`${p} mb-3`}>Under the DPDP Act you can ask us to:</p>
              <ul className={`${p} list-disc pl-6 space-y-1`}>
                <li>tell you what personal data we hold about you and how we use it;</li>
                <li>correct, complete or update it;</li>
                <li>erase it, unless the law requires us to keep it;</li>
                <li>withdraw your consent at any time, as easily as you gave it — for emails, reply "unsubscribe";</li>
                <li>record a person to act on your behalf if you die or become unable to act; and</li>
                <li>resolve a complaint about how we handle your data.</li>
              </ul>
              <p className={`${p} mt-3`}>
                Email{" "}
                <a href="mailto:info@giftcityfunds.in" className="text-secondary hover:underline">info@giftcityfunds.in</a>{" "}
                with the subject "Data request". We may need to confirm your identity first. Withdrawing consent does not
                affect anything we did before you withdrew it.
              </p>
            </section>

            <section>
              <h2 className={h2}>6. Grievance officer</h2>
              <p className={p}>
                Anup Vatyani, Ahmedabad, Gujarat, India —{" "}
                <a href="mailto:info@giftcityfunds.in" className="text-secondary hover:underline">info@giftcityfunds.in</a>,
                +91 95375 33533. We aim to respond to every data request or complaint within 30 days. If you are not
                satisfied with our response, you may complain to the Data Protection Board of India.
              </p>
            </section>

            <section>
              <h2 className={h2}>7. Security and data breaches</h2>
              <p className={p}>
                Form submissions are stored in a database that only an authorised administrator account can read, over
                encrypted connections. Access is limited to the person who needs it. No system is perfectly secure; if a
                breach affects your personal data, we will inform you and the Data Protection Board of India as the DPDP
                Act requires.
              </p>
            </section>

            <section>
              <h2 className={h2}>8. Children</h2>
              <p className={p}>
                This website is not meant for anyone under 18. Please do not submit the forms if you are under 18. If we
                learn that we hold a child's data without verifiable parental consent, we will delete it.
              </p>
            </section>

            <section>
              <h2 className={h2}>9. Changes to this policy</h2>
              <p className={p}>
                We will update this page when our practices change and show the new date at the top. If a change affects
                how we use data you have already given us, we will ask for your consent again where the law requires it.
                See also our <Link to="/terms-of-use" className="text-secondary hover:underline">Terms of Use</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
