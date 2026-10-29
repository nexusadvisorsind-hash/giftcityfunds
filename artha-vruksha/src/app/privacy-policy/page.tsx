import { pageMeta, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { PRIVACY_CONTACT, PRIVACY_NOTICE_VERSION, RETENTION_MONTHS } from "@/lib/privacy";

export const metadata = pageMeta({
  title: "Privacy Policy | Assetzpro Services",
  description: "How Assetzpro Services collects, uses, stores and deletes personal data from the website contact form, under the Digital Personal Data Protection Act, 2023.",
  path: "/privacy-policy",
});

const H2 = "font-heading font-bold text-2xl text-primary mt-10 mb-3";
const P = "font-body text-foreground-muted leading-relaxed mb-3 measure";
const LI = "font-body text-foreground-muted leading-relaxed measure";

export default function PrivacyPolicy() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Privacy Policy", path: "/privacy-policy" }])} />
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-3">Privacy Policy</h1>
        <p className="font-body text-sm text-foreground-muted mb-8">Version {PRIVACY_NOTICE_VERSION}. Applies to assetzpro.com.</p>

        <p className={P}>
          Assetzpro Services (the &ldquo;data fiduciary&rdquo; under the Digital Personal Data Protection Act, 2023, called the DPDP Act below)
          operates this website from Pune, Maharashtra and Ahmedabad, Gujarat. This page explains what personal data the website collects, why,
          how long it is kept, and what rights you have.
        </p>

        <h2 className={H2}>What is collected, and why</h2>
        <p className={P}>Personal data is collected only when you send the contact form or a calculator enquiry. The details are:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li className={LI}>Name, email address and 10-digit mobile number.</li>
          <li className={LI}>The service you are interested in (mutual funds, real estate, insurance or loans).</li>
          <li className={LI}>Any message you type. Calculator links may add a short summary of the numbers you entered. Please do not enter PAN, Aadhaar, bank or card numbers in the message box.</li>
        </ul>
        <p className={P}>
          The only purpose is to reply to your enquiry and to continue the conversation you asked for. The details are not used for unrelated
          marketing, and they are never sold.
        </p>

        <h2 className={H2}>Consent</h2>
        <p className={P}>
          Your details are processed only after you tick the consent box on the form. The date and time of your consent and the version of this
          notice are saved with the enquiry. Consent is voluntary, and it can be withdrawn as easily as it was given, by writing to the contact
          below. Withdrawing consent does not affect what was done before you withdrew it.
        </p>

        <h2 className={H2}>Who receives the data</h2>
        <p className={P}>
          Enquiries are read by Anup Vatyani and Pavan Vatyani of Assetzpro Services. To run the website, the data
          is stored with these service providers, who act as data processors:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li className={LI}>Vercel Inc., for website hosting.</li>
          <li className={LI}>Resend, for emailing the Assetzpro Services team a notice of each new enquiry, and Meta (WhatsApp Business), for sending the team a short alert.</li>
          <li className={LI}>Neon, for the database where enquiries are stored. Servers of these providers may be located outside India. Transfers outside India are made only to countries not restricted by the Central Government under the DPDP Act.</li>
          <li className={LI}>Google LLC (Google Analytics) and Microsoft Corporation (Microsoft Clarity), only where optional analytics is switched on and only after you accept it. See &ldquo;Cookies and tracking&rdquo; below.</li>
        </ul>
        <p className={P}>
          Data is disclosed to authorities only where the law requires it. If you tap the WhatsApp button, you are using WhatsApp&rsquo;s service,
          which has its own privacy policy.
        </p>

        <h2 className={H2}>How long data is kept</h2>
        <p className={P}>
          Enquiries that do not lead to a client relationship are deleted after {RETENTION_MONTHS} months. If you become a client, records are
          kept for as long as the law and the rules of SEBI/AMFI, RERA and IRDAI require, and then deleted. Data is deleted earlier when you ask,
          unless a law requires it to be kept.
        </p>

        <h2 className={H2}>Your rights under the DPDP Act</h2>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li className={LI}>To get a summary of the personal data held about you and how it is used.</li>
          <li className={LI}>To ask for correction, completion or updating of your data.</li>
          <li className={LI}>To ask for erasure of your data.</li>
          <li className={LI}>To withdraw your consent at any time.</li>
          <li className={LI}>To nominate another person to exercise these rights if you die or become unable to do so.</li>
          <li className={LI}>To get your grievance heard. If you are not satisfied with the reply, you may complain to the Data Protection Board of India.</li>
        </ul>

        <h2 className={H2}>Children</h2>
        <p className={P}>
          This website is meant for adults. It is not directed at anyone under 18, and children&rsquo;s data is not knowingly collected.
          A parent or guardian who believes a child has sent details can ask for them to be deleted.
        </p>

        <h2 className={H2}>Security</h2>
        <p className={P}>
          The website uses encrypted (HTTPS) connections. Stored enquiries can be read only after a password sign-in. If a personal data breach
          occurs, the people affected and the Data Protection Board of India are informed as the DPDP Act requires.
        </p>

        <h2 className={H2}>Cookies and tracking</h2>
        <p className={P}>
          The website does not use advertising cookies. A sign-in cookie is set only for authorised staff in the leads area.
        </p>
        <p className={P}>
          Where optional analytics is switched on, a banner asks for a choice. Nothing is loaded until you press &ldquo;Accept analytics&rdquo;. If you
          accept, Google Analytics records anonymised visit statistics (pages viewed, enquiry and call-button clicks) and Microsoft Clarity records
          anonymised page interactions such as clicks and scrolling. Form fields are masked. Declining has no effect on how the site works, and the
          &ldquo;Cookie settings&rdquo; link in the footer lets you change the choice at any time. The legal basis is your consent, which you can withdraw.
        </p>

        <h2 className={H2}>Contact for privacy requests and complaints</h2>
        <p className={P}>
          Write to <a className="text-secondary underline" href={`mailto:${PRIVACY_CONTACT.email}`}>{PRIVACY_CONTACT.email}</a>, giving the name,
          email and phone number you used on the form. Requests are answered within the time allowed by the DPDP Rules.
        </p>

        <h2 className={H2}>Changes to this policy</h2>
        <p className={P}>
          When this policy changes, the version number above changes too. The version you agreed to is saved with your enquiry.
        </p>
      </div>
    </section>
    </>
  );
}
