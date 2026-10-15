import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { ArrowRight, Clock } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Mutual Funds": "bg-secondary/10 text-secondary",
  "Real Estate": "bg-green-soft text-green",
  Insurance: "bg-accent/15 text-accent-foreground",
  Loans: "bg-primary/10 text-primary",
  "Personal Finance": "bg-secondary/10 text-secondary",
};

export const metadata = pageMeta({
  title: 'Money, Property & Insurance Guides | Artha Vriksha',
  description: 'Plain-language guides on mutual funds, real estate, insurance and loans from the Artha Vriksha team in Pune and Ahmedabad.',
  path: '/blog',
});

export default function Blog() {
  const [lead, ...rest] = blogPosts;
  return (
    <>
      <section className="bg-forest text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.08] mb-6 max-w-3xl">Read before you decide</h1>
          <p className="font-body text-lg text-primary-foreground/85 leading-relaxed measure">
            Honest, plain-language articles on mutual funds, real estate, insurance and loans, written to help you decide, not to sell you anything.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${lead.slug}`} className="group grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-12 border-b border-border pb-12 mb-12">
            <div>
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold font-body mb-4 ${categoryColors[lead.category]}`}>{lead.category}</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary leading-tight group-hover:text-secondary transition-colors">{lead.title}</h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-body text-lg text-foreground-muted leading-relaxed mb-4 measure">{lead.excerpt}</p>
              <span className="flex items-center gap-4 font-body text-sm text-foreground-muted">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {lead.readTime}</span>
                <span className="flex items-center gap-1 text-secondary font-semibold">Read <ArrowRight className="h-4 w-4" /></span>
              </span>
            </div>
          </Link>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold font-body mb-3 ${categoryColors[post.category]}`}>{post.category}</span>
                <h2 className="font-heading font-semibold text-2xl text-primary mb-2 leading-snug group-hover:text-secondary transition-colors">{post.title}</h2>
                <p className="font-body text-foreground-muted leading-relaxed mb-3">{post.excerpt}</p>
                <span className="flex items-center gap-4 font-body text-sm text-foreground-muted">
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
                  <span className="flex items-center gap-1 text-secondary font-semibold">Read <ArrowRight className="h-4 w-4" /></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
