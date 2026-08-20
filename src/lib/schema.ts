import { BUSINESS, SITE_URL } from "./data";

export function barbershopSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: BUSINESS.name,
    description: `Barbería de oficio en Mendoza: cortes, color masculino y barba. ${BUSINESS.tagline}.`,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Arístides 768",
      addressLocality: "Mendoza",
      addressRegion: "Mendoza",
      addressCountry: "AR",
    },
    openingHours: "Tu-Sa 10:00-20:00",
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.threads],
    // telephone/email/geo omitidos: no verificados en el dossier (sección 7).
  } as const;
}
