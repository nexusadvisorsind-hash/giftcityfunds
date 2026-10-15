export type BlogSection = { heading?: string; body: string[] };

export type BlogPost = {
  slug: string;
  category: "Mutual Funds" | "Real Estate" | "Insurance" | "Loans" | "Personal Finance";
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sip-mistakes-first-time-investors",
    category: "Mutual Funds",
    title: "5 Mistakes First-Time SIP Investors Make (and How to Avoid Them)",
    excerpt:
      "Starting your first SIP is exciting — but small early mistakes can quietly cost you years of growth. Here's what to watch for.",
    readTime: "5 min read",
    date: "September 2026",
    sections: [
      {
        body: [
          "Starting a Systematic Investment Plan is one of the best financial decisions a young earner can make. But we see the same handful of mistakes again and again with first-time investors — and they're easy to avoid once you know what to look for.",
        ],
      },
      {
        heading: "1. Stopping the SIP the moment the market dips",
        body: [
          "This is the single biggest wealth-destroyer we see. Markets go up and down — that's normal, not a warning sign. When you stop your SIP during a dip, you miss out on buying units at a lower price, which is exactly when a SIP works hardest for you. Unless your goal or income situation has genuinely changed, staying invested through the dip is usually the better move.",
        ],
      },
      {
        heading: "2. Chasing last year's best-performing fund",
        body: [
          "A fund that topped the charts last year is not guaranteed to repeat that performance. Picking funds based on a single year's returns is one of the most common — and costly — mistakes. What matters more is consistency over 5-7 years, the fund manager's track record, and whether the fund's strategy actually fits your goal.",
        ],
      },
      {
        heading: "3. Not linking the SIP to a real goal",
        body: [
          "\"I should invest\" is a vague reason to start a SIP, and vague reasons are the first thing people abandon when life gets busy. \"I need ₹15 lakhs for my daughter's college in 12 years\" is a reason you'll stick to. Tie every SIP to a specific goal and timeline — it makes the discipline much easier to maintain.",
        ],
      },
      {
        heading: "4. Ignoring asset allocation as you age",
        body: [
          "The right mix of equity and debt at age 25 is not the right mix at age 55. Many investors set up a SIP once and never revisit it. A periodic review — once a year is enough — to shift some allocation toward more stable options as you approach your goal date protects the wealth you've already built.",
        ],
      },
      {
        heading: "5. Not accounting for taxes and exit loads",
        body: [
          "Redeeming equity fund units before one year attracts short-term capital gains tax, and many funds charge an exit load for early withdrawal. First-time investors are often surprised by this at redemption time. Understanding the tax and exit-load rules for your specific fund before you invest avoids nasty surprises later.",
        ],
      },
      {
        heading: "The bottom line",
        body: [
          "None of these mistakes are complicated to avoid — they just require a plan and someone to periodically sanity-check it with you. That's exactly the kind of ongoing support our Mutual Funds desk provides to every client, at no extra cost beyond the standard distribution commission.",
        ],
      },
    ],
  },
  {
    slug: "rera-explained-property-buyers-guide",
    category: "Real Estate",
    title: "RERA Explained: What Every Property Buyer in Maharashtra & Gujarat Should Know",
    excerpt:
      "RERA registration numbers are everywhere in property listings — but what do they actually protect you from? Here's the plain-language guide.",
    readTime: "6 min read",
    date: "September 2026",
    sections: [
      {
        body: [
          "If you've looked at property listings recently, you've probably seen a RERA registration number quoted alongside the price. Most buyers know it's \"important\" without knowing exactly why. Here's what it actually means for you.",
        ],
      },
      {
        heading: "What RERA actually is",
        body: [
          "The Real Estate (Regulation and Development) Act, 2016 requires developers to register most residential and commercial projects with the state's RERA authority — MahaRERA in Maharashtra, GujRERA in Gujarat — before they can advertise, market, or sell units. Registration requires the developer to disclose the project layout, approvals, timeline, and put 70% of buyer payments into an escrow account that can only be used for that project's construction.",
        ],
      },
      {
        heading: "Why the escrow rule matters so much",
        body: [
          "Before RERA, it was common for developers to use money collected from one project's buyers to fund a different, unrelated project — leaving the first project delayed or unfinished. The escrow requirement makes that much harder, which is a major reason project delays have reduced industry-wide since RERA came into force.",
        ],
      },
      {
        heading: "What to actually check before you buy",
        body: [
          "A RERA number being mentioned in a brochure isn't enough — verify it directly on the state authority's website (MahaRERA or GujRERA), where you can see the project's real registered completion date, the developer's other registered projects and their status, and any complaints filed against the project. This takes ten minutes and can save you from a multi-year delay.",
        ],
      },
      {
        heading: "What RERA does not cover",
        body: [
          "RERA registration is not the same as a clean title. It doesn't verify that the land itself is free of disputes, or that the property is zoned correctly for your intended use. That's a separate check — title deed verification and encumbrance certificate review — which is just as important and often skipped by buyers who assume RERA covers everything.",
        ],
      },
      {
        heading: "How we help",
        body: [
          "Every property our Real Estate desk presents to a client has already cleared RERA verification, title and encumbrance checks, and a developer track-record review — so you're not doing this homework alone. If you're evaluating a property from another source, we're also happy to run this verification for you before you commit.",
        ],
      },
    ],
  },
  {
    slug: "term-vs-whole-life-insurance",
    category: "Insurance",
    title: "Term vs Whole Life Insurance: Which Do You Actually Need?",
    excerpt:
      "Insurance agents often push whichever policy pays them more. Here's an honest, unbiased breakdown of the two most common life insurance types.",
    readTime: "5 min read",
    date: "August 2026",
    sections: [
      {
        body: [
          "This is the question we get asked more than any other on the Insurance desk. Both policy types protect your family financially if something happens to you — but they work very differently, and the right choice depends on your goals, not on which one earns an agent a bigger commission.",
        ],
      },
      {
        heading: "Term insurance: pure protection, low cost",
        body: [
          "A term plan pays a lump sum to your family if you pass away during the policy term — say, 30 years — and pays nothing if you outlive the term. Because there's no savings or investment component, the premium is dramatically lower than whole life insurance for the same cover amount. For most working professionals with dependents, a term plan with a high cover amount (typically 10-15 times your annual income) is the most efficient way to protect your family.",
        ],
      },
      {
        heading: "Whole life insurance: protection plus a savings component",
        body: [
          "A whole life (or endowment) policy combines a smaller death benefit with a savings or investment element, and it pays out even if you outlive the policy — either at maturity or through the accumulated value. The premiums are significantly higher for the same death benefit, and the investment returns embedded in these policies are usually lower than what you'd get investing that premium difference separately in mutual funds.",
        ],
      },
      {
        heading: "The math most people never see",
        body: [
          "A common example: a healthy 30-year-old might pay roughly ₹12,000/year for a ₹1 crore term cover, versus ₹80,000+/year for a whole life policy with a much smaller death benefit and modest maturity value. Investing that ₹68,000 difference in a diversified mutual fund SIP instead, over 30 years, typically builds significantly more wealth than the whole life policy's maturity payout — while still giving your family the larger term cover if something happens to you.",
        ],
      },
      {
        heading: "So which should you buy?",
        body: [
          "For most people in their working years with dependents, the combination of a high-cover term plan plus separate mutual fund investing outperforms a whole life policy on both protection and growth. Whole life insurance can make sense for specific estate-planning or guaranteed-payout needs later in life — but it's rarely the right first policy for a young earner.",
        ],
      },
      {
        heading: "Our approach",
        body: [
          "Because we're not tied to a single insurer, we don't have a reason to steer you toward the policy that pays the biggest commission. We'll walk through your actual numbers and recommend whichever structure genuinely fits your family's needs.",
        ],
      },
    ],
  },
  {
    slug: "improve-loan-approval-chances",
    category: "Loans",
    title: "How to Improve Your Loan Approval Chances (Before You Apply)",
    excerpt:
      "Most loan rejections happen for fixable reasons. A little preparation before you apply can be the difference between approval and a hard 'no'.",
    readTime: "4 min read",
    date: "August 2026",
    sections: [
      {
        body: [
          "A rejected loan application doesn't just cost you time — it can also show up on your credit report and make your next application harder. Most rejections come down to a handful of fixable issues. Here's how to walk in prepared.",
        ],
      },
      {
        heading: "Check your credit score before, not after",
        body: [
          "Your CIBIL score is the first thing any bank or NBFC checks. A score below 700 makes approval difficult and pushes up your interest rate even when you do get approved. Check your score yourself before applying — if it's lower than expected, it's usually because of late payments, high credit card utilization, or an error on your report, all of which are fixable in a few months with the right steps.",
        ],
      },
      {
        heading: "Keep your debt-to-income ratio in check",
        body: [
          "Lenders typically want your total EMIs (including the new loan) to stay under 40-50% of your monthly income. If you already have a car loan and credit card EMIs running, that new home loan application might get rejected or reduced in amount — not because of your income, but because of what you're already committed to paying out.",
        ],
      },
      {
        heading: "Get your documentation right the first time",
        body: [
          "A large share of delays — not outright rejections, but frustrating back-and-forth — come from incomplete or mismatched paperwork: address proof that doesn't match your application, incomplete income documentation for self-employed applicants, or missing bank statements. Getting a complete, consistent document set ready before you apply speeds up approval significantly.",
        ],
      },
      {
        heading: "Don't apply to five lenders at once",
        body: [
          "Every loan application triggers a \"hard inquiry\" on your credit report, and multiple hard inquiries in a short window actually lower your score and make you look like a credit risk to the next lender. It's better to have someone compare lenders for you upfront and apply to the one or two banks most likely to approve you, rather than shotgunning applications everywhere.",
        ],
      },
      {
        heading: "How we help",
        body: [
          "This comparison and documentation check is exactly what our Loans desk does before we submit an application on your behalf — we only take applications to lenders where you have a strong chance of approval, and we check your paperwork is complete before it ever reaches the bank.",
        ],
      },
    ],
  },
  {
    slug: "why-one-team-beats-four-specialists",
    category: "Personal Finance",
    title: "Why One Team Beats Four Separate Specialists for Your Finances",
    excerpt:
      "Your property broker, mutual fund agent, insurance agent and loan officer rarely talk to each other. Here's why that costs you more than you'd think.",
    readTime: "4 min read",
    date: "July 2026",
    sections: [
      {
        body: [
          "It's completely normal to have a different person handling your investments, your property search, your insurance, and your loans. It's also, we'd argue, the reason a lot of people end up with financial decisions that don't actually work well together.",
        ],
      },
      {
        heading: "A real example",
        body: [
          "Say you're buying a flat. Your property broker finds you a great option and you're excited to move forward. But your mutual fund SIPs are locked into ELSS funds you started for tax savings, so liquidating them for the down payment triggers a 3-year lock-in penalty you didn't know about. Meanwhile, your loan officer doesn't know about the personal loan EMI you're already paying, so your home loan eligibility comes back lower than expected. None of these people did anything wrong — they just didn't have the full picture.",
        ],
      },
      {
        heading: "The hidden cost of fragmented advice",
        body: [
          "When nobody sees your whole financial position, a few things tend to happen: you miss opportunities (like using a lower-interest loan against property instead of a costlier personal loan), you pay avoidable taxes (like the ELSS lock-in example above), and risks go unnoticed (like being underinsured relative to your total debt exposure).",
        ],
      },
      {
        heading: "What changes when it's one team",
        body: [
          "When your mutual fund advisor, property broker, insurance agent and loan specialist are all part of the same team with visibility into your full picture, recommendations start accounting for each other. Your loan structuring considers your investment lock-ins. Your insurance cover gets sized against your actual property and loan exposure. Your investment timeline gets planned around any property purchase you're saving for.",
        ],
      },
      {
        heading: "That's the whole idea behind Artha Vriksha",
        body: [
          "We built Artha Vriksha Services specifically to close this gap — one licensed, accountable team across all four services, so the advice you get on one actually reflects what's happening in the other three.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
