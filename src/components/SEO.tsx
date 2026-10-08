import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  /** One JSON-LD object, or several. */
  schema?: object | object[];
  breadcrumbs?: BreadcrumbItem[];
  /** Keep private or utility pages (admin, sign-in) out of search results. */
  noindex?: boolean;
  /** Open Graph type; "article" for Insights posts. */
  type?: "website" | "article";
}

export const SEO = ({ title, description, canonical, schema, breadcrumbs, noindex, type = "website" }: SEOProps) => {
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://giftcityfunds.in/#organization",
  "name": "GIFT City Funds",
  "alternateName": ["GIFTCityFunds", "giftcityfunds.in", "Gift City Funds"],
  "url": "https://giftcityfunds.in",
  "logo": "https://giftcityfunds.in/favicon-512.png",
  "founder": {
    "@type": "Person",
    "name": "Anup Vatyani",
    "image": "https://giftcityfunds.in/images/anup-vatyani.jpg",
    "jobTitle": "Mutual Fund Distributor",
    "identifier": "ARN106715"
  },
  "description": "Informational platform about GIFT City and IFSC mutual fund frameworks. No investment advice.",
  "contactPoint": [{
    "@type": "ContactPoint",
    "email": "info@giftcityfunds.in",
    "contactType": "Customer Service",
    "areaServed": "IN"
  }],
  "sameAs": ["https://www.linkedin.com/in/anup-vatyani-081b4142"]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://giftcityfunds.in/#website",
  "name": "GIFT City Funds",
  "alternateName": ["GIFTCityFunds", "giftcityfunds.in"],
  "url": "https://giftcityfunds.in",
  "publisher": { "@id": "https://giftcityfunds.in/#organization" },
};

// Fill in the fields Google expects on every Article so individual pages
// only need to state what is specific to them.
const SITE_FIRST_PUBLISHED = "2026-07-23";
const enrich = (item: object): object => {
  const s = item as Record<string, unknown>;
  if (s["@type"] !== "Article") return item;
  return {
    ...s,
    image: s.image ?? "https://giftcityfunds.in/images/gift-city-skyline.jpg",
    datePublished: s.datePublished ?? SITE_FIRST_PUBLISHED,
    dateModified: s.dateModified ?? s.datePublished ?? SITE_FIRST_PUBLISHED,
    author: {
      "@type": "Person",
      name: "Anup Vatyani",
      url: "https://giftcityfunds.in/about",
      image: "https://giftcityfunds.in/images/anup-vatyani.jpg",
      identifier: "ARN106715",
    },
    publisher: { "@id": "https://giftcityfunds.in/#organization" },
  };
};
const pageSchemas = (schema ? (Array.isArray(schema) ? schema : [schema]) : []).map(enrich);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="GIFT City Funds" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Structured Data - Financial Service */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {/* Additional Page-Specific Schema */}
      {pageSchemas.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
      
      {/* BreadcrumbList Schema */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.name,
              "item": crumb.url
            }))
          })}
        </script>
      )}
    </Helmet>
  );
};
