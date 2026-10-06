import { Link, useParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { articles, getArticle } from "./insights/articles";
import { formatDate } from "@/lib/formatDate";
import NotFound from "./NotFound";

const InsightArticle = () => {
  const { slug } = useParams();
  const article = getArticle(slug);
  if (!article) return <NotFound />;

  const url = `https://giftcityfunds.in/insights/${article.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": "https://giftcityfunds.in/images/gift-city-skyline.jpg",
    "author": {
      "@type": "Person",
      "name": "Anup Vatyani",
      "url": "https://giftcityfunds.in/about",
      "identifier": "ARN106715",
    },
    "publisher": { "@id": "https://giftcityfunds.in/#organization" },
    "mainEntityOfPage": url,
    "datePublished": article.datePublished,
    "dateModified": article.datePublished,
  };
  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={article.title}
        description={article.description}
        canonical={url}
        type="article"
        schema={schema}
        breadcrumbs={[
          { name: "Home", url: "https://giftcityfunds.in/" },
          { name: "Insights", url: "https://giftcityfunds.in/insights" },
          { name: article.title, url },
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Insights", url: "/insights" }, { name: article.title, url: `/insights/${article.slug}` }]} />
        <article>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mt-6 mb-4">{article.title}</h1>
          <p className="font-body text-sm text-foreground-muted mb-8">
            By{" "}
            <Link to="/about" className="text-secondary hover:underline">
              Anup Vatyani
            </Link>
            , AMFI-registered MFD (ARN 106715) · Published{" "}
            <time dateTime={article.datePublished}>{formatDate(article.datePublished)}</time>
          </p>
          {article.body}
        </article>

        <aside className="mt-14 pt-8 border-t border-border" aria-labelledby="more-insights">
          <h2 id="more-insights" className="font-heading font-semibold text-xl text-primary mb-4">
            More articles
          </h2>
          <ul className="space-y-2 font-body">
            {more.map((a) => (
              <li key={a.slug}>
                <Link to={`/insights/${a.slug}`} className="text-secondary hover:underline">
                  {a.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/insights" className="text-secondary hover:underline">
                All Insights articles
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default InsightArticle;
