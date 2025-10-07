import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  schema?: object;
}

export const SEO = ({ title, description, canonical, schema }: SEOProps) => {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://giftcitywealth.in/#organization",
    "name": "GiftCity Wealth Advisory",
    "url": "https://giftcitywealth.in",
    "logo": "https://giftcitywealth.in/images/logo.png",
    "founder": {
      "@type": "Person",
      "name": "Anup Vatyani",
      "jobTitle": "Mutual Fund Distributor",
      "identifier": "ARN106715"
    },
    "description": "Informational platform about GIFT City and IFSC mutual fund frameworks. No investment advice.",
    "contactPoint": [{
      "@type": "ContactPoint",
      "email": "info@giftcitywealth.in",
      "contactType": "Customer Service",
      "areaServed": "IN"
    }],
    "sameAs": ["https://www.linkedin.com/in/anup-vatyani"]
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
      <meta property="og:site_name" content="GiftCityWealth.in" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="GIFT City IFSC – Informational Portal" />
      <meta property="og:description" content="Independent educational content about India's International Financial Services Centre (GIFT IFSC)." />
      <meta property="og:image" content="https://www.giftcitywealth.in/assets/og-image.jpg" />
      <meta property="og:url" content={canonical} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="GIFT City IFSC – Informational Portal" />
      <meta name="twitter:description" content="Independent educational content about India's International Financial Services Centre (GIFT IFSC)." />
      <meta name="twitter:image" content="https://www.giftcitywealth.in/assets/og-image.jpg" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultSchema)}
      </script>
      
      {/* Additional Page-Specific Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
