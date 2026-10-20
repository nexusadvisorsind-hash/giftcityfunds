import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { NEWS, formatNewsDate } from "@/data/news";

// Home page strip: the three newest GIFT City news items.
const LatestNews = () => (
  <section className="py-16 bg-background" aria-labelledby="news-h">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <h2 id="news-h" className="font-heading font-bold text-3xl md:text-4xl text-primary">Latest GIFT City news</h2>
        <Link to="/gift-city-news" className="font-body font-semibold text-secondary hover:underline inline-flex items-center">
          All news <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
        </Link>
      </div>
      <ul className="grid gap-5 md:grid-cols-3 list-none p-0 m-0">
        {NEWS.slice(0, 3).map((n) => (
          <li key={n.date + n.title} className="rounded-2xl border border-border bg-surface p-5 flex flex-col gcf-lift">
            <time dateTime={n.date} className="font-body text-sm font-semibold text-secondary">{formatNewsDate(n.date)}</time>
            <h3 className="mt-2 font-heading font-semibold text-lg text-primary leading-snug">{n.title}</h3>
            <p className="mt-2 font-body text-sm text-foreground-muted leading-relaxed flex-1">{n.summary}</p>
            <a href={n.source.url} target="_blank" rel="noopener noreferrer" className="mt-3 font-body text-sm font-medium text-secondary underline underline-offset-2">
              Source: {n.source.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default LatestNews;
