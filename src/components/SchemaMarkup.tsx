
import { Helmet } from "react-helmet-async";

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "WhaFlow",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "97",
      "highPrice": "497",
      "priceCurrency": "BRL",
      "offerCount": "3"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "10000"
    },
    "operatingSystem": "Web",
    "description": "Sistema de automação para disparos de mensagens no WhatsApp. Envie centenas de mensagens personalizadas de forma segura e automatizada.",
    "screenshot": "/favicon.png"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
