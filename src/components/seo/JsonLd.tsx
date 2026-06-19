import { INSTAGRAM, PHONE, SITE, WHATSAPP } from "@/lib/site";
import { SERVICES } from "@/lib/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    image: `${SITE.url}/images/og.jpg`,
    url: SITE.url,
    telephone: PHONE,
    priceRange: "₹₹",
    foundingDate: String(SITE.established),
    slogan: SITE.tagline,
    founder: { "@type": "Person", name: SITE.owner },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.locality,
      addressLocality: SITE.address.region,
      addressRegion: SITE.address.state,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: SITE.serviceAreas.map((a) => ({ "@type": "City", name: a })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    sameAs: [`https://wa.me/${WHATSAPP}`, INSTAGRAM],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "187",
    },
    makesOffer: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.desc },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
