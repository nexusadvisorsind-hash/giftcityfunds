import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import { pageMeta, isoDate, SITE_URL } from "@/lib/seo";
import { ArrowRight, ArrowLeft, Clock, Calendar } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Mutual Funds": "bg-secondary/10 text-secondary",
  "Real Estate": "bg-green-soft text-green",
  Insurance: "bg-accent/15 text-accent-foreground",
  Loans: "bg-primary/10 text-primary",
  "Personal Finance": "bg-secondary/10 text-secondary",
};

const categoryLink: Record<string, string> = {
  "Mutual Funds": "/mutual-funds",
  "Real Estate": "/real-estate",
  Insurance: "/insurance",
  Loans: "/loans",
  "Personal Finance": "/about-us",
};

type BlogPostParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostParams) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return pageMeta({ title: post.title.length > 62 ? "RERA Explained: A Property Buyer's Guide" : post.title, description: post.excerpt, path: `/blog/${post.slug}`, type: "article" });
}

export default async function BlogPost({ params }: BlogPostParams) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: isoDate(post.date),
    dateModified: isoDate(post.date),
    articleSection: post.category,
    image: `${SITE_URL}/og-image.png`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: "Artha Vriksha Services", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Artha Vriksha Services",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/logo-icon-192.png` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <section className="hero-navy text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-20 md:pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-body text-primary-foreground/80 hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> All Articles
          </Link>
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-body mb-5 ${categoryColors[post.category]}`}
          >
            {post.category}
          </span>
          <h1 className="font-heading font-bold text-3xl md:text-4xl leading-tight mb-6">{post.title}</h1>
          <div className="flex items-center gap-5 font-body text-sm text-primary-foreground/80">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14">
          <aside className="hidden lg:block">
            <nav aria-label="In this article" className="sticky top-24">
              <p className="font-body text-sm font-semibold text-primary mb-3">In this article</p>
              <ul className="space-y-2 border-l border-border">
                {post.sections.map((s, i) => s.heading && (
                  <li key={i}>
                    <a href={`#s${i}`} className="block -ml-px border-l-2 border-transparent pl-3 font-body text-sm text-foreground-muted hover:text-primary hover:border-accent transition-colors">{s.heading}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        <div className="max-w-3xl">
          <p className="font-body text-lg text-foreground-muted leading-relaxed mb-8 border-l-4 border-l-accent pl-5">
            {post.excerpt}
          </p>
          <div className="space-y-8">
            {post.sections.map((s, i) => (
              <div key={i}>
                {s.heading && (
                  <h2 id={`s${i}`} className="font-heading font-semibold text-xl md:text-2xl text-primary mb-3">{s.heading}</h2>
                )}
                {s.body.map((p, j) => (
                  <p key={j} className="font-body text-base text-foreground-muted leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-green-soft border border-green/20 rounded-2xl p-7 text-center">
            <p className="font-heading font-semibold text-primary mb-2">Have a question about this?</p>
            <p className="font-body text-sm text-foreground-muted mb-5">
              Our team is happy to talk through your specific situation — no pressure, no obligation.
            </p>
            <Button asChild variant="green" size="lg">
              <Link href="/contact">Contact Our Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 bg-surface border-t border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl text-primary mb-8 text-center">More Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="card-lift bg-background border border-border rounded-2xl p-6 group"
                >
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-body mb-3 ${categoryColors[r.category]}`}
                  >
                    {r.category}
                  </span>
                  <h3 className="font-heading font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {r.title}
                  </h3>
                  <p className="font-body text-sm text-foreground-muted leading-relaxed">{r.excerpt}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href={categoryLink[post.category]}
                className="font-body text-sm font-semibold text-secondary hover:underline"
              >
                Explore our {post.category} services →
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
