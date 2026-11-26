import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

// Copy-paste code so other sites (CA firms, NRI blogs) can show the TCS
// calculator. The credit link sits outside the iframe and names the brand
// only, as Google's link guidelines expect.
const CODE = `<iframe src="https://giftcityfunds.in/embed/tcs-calculator.html" title="TCS calculator for a GIFT City investment" width="100%" height="560" style="border:0;max-width:760px" loading="lazy"></iframe>
<p style="font-size:13px">Calculator by <a href="https://giftcityfunds.in/insights/lrs-tcs-gift-city">GIFT City Funds</a></p>`;

export const EmbedCode = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CODE);
      setCopied(true);
      trackEvent("tool_use", { tool: "tcs_embed_copy" });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard blocked: the code stays visible to copy by hand */
    }
  };
  return (
    <section aria-labelledby="embed-h" className="not-prose my-8 rounded-2xl border border-border bg-surface p-5">
      <h3 id="embed-h" className="font-heading font-semibold text-lg text-primary">Add this calculator to your website</h3>
      <p className="mt-1 font-body text-sm text-foreground-muted">
        Free for CA firms, NRI groups and blogs. Paste this code into your page. It sets no cookies and sends nothing anywhere.
      </p>
      <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-all rounded-lg border border-border bg-white p-3 font-mono text-xs text-primary">{CODE}</pre>
      <button type="button" onClick={copy} className="mt-3 rounded-lg bg-secondary px-4 py-2 font-body text-sm font-semibold text-white hover:bg-secondary-hover">
        {copied ? "Copied" : "Copy the code"}
      </button>
    </section>
  );
};
