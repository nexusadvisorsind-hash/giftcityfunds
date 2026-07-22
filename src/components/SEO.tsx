import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  schema?: object;
  breadcrumbs?: BreadcrumbItem[];
}

export const SEO = ({ title, description, canonical, schema, breadcrumbs }: SEOProps) => {
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://giftcityfunds.in/#organization",
  "name": "GIFT City Funds",
  "url": "https://giftcityfunds.in",
  "logo": "https://giftcityfunds.in/images/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Anup Vatyani",
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
  "sameAs": ["https://www.linkedin.com/in/anup-vatyani"]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://giftcityfunds.in/#website",
  "name": "GIFT City Funds",
  "url": "https://giftcityfunds.in",
  "publisher": { "@id": "https://giftcityfunds.in/#organization" },
};

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="GIFT City Funds" />
      <meta property="og:type" content="website" />
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
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
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
