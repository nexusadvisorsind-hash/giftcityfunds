import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  schema?: object;
}

export const SEO = ({ title, description, canonical, schema }: SEOProps) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.giftcitywealth.in/#organization",
    "name": "GiftCity Wealth Advisory",
    "url": "https://www.giftcitywealth.in",
    "logo": "https://www.giftcitywealth.in/images/logo.png",
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

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://www.giftcitywealth.in/#financialservice",
    "name": "GiftCity Wealth Advisory",
    "url": "https://www.giftcitywealth.in",
    "logo": "https://www.giftcitywealth.in/images/logo.png",
    "description": "Informational platform about GIFT City and IFSC mutual fund frameworks operated by Anup Vatyani (MFD ARN 106715).",
    "founder": {
      "@type": "Person",
      "name": "Anup Vatyani",
      "jobTitle": "Mutual Fund Distributor"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@giftcitywealth.in",
      "contactType": "Customer Support",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
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
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.giftcitywealth.in/assets/og-image.jpg" />
      <meta property="og:url" content={canonical} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://www.giftcitywealth.in/assets/og-image.jpg" />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Structured Data - Financial Service */}
      <script type="application/ld+json">
        {JSON.stringify(financialServiceSchema)}
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
