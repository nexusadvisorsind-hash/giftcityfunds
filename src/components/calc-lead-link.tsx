import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = { vertical: "Mutual Funds" | "Real Estate" | "Insurance" | "Loans"; summary: string; cta?: string };

/**
 * Link shown under a calculator. Sends the visitor to the contact form with the
 * topic selected and their numbers written into the message box, so they do not retype them.
 */
export function CalcLeadLink({ vertical, summary, cta = "Talk to us about these numbers" }: Props) {
  const params = new URLSearchParams({ vertical, note: `I used your calculator. ${summary}` });
  return (
    <div className="mt-6 flex justify-center">
      <Link
        href={`/contact?${params.toString()}#enquiry`}
        className="inline-flex items-center gap-2 rounded-full border border-secondary px-5 py-2.5 font-body text-sm font-semibold text-secondary hover:bg-secondary hover:text-white transition-colors"
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
