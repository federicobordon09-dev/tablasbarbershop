/**
 * Datos centralizados de la landing — punto único de referencia.
 * Fuente: dossier `local.md` (fuentes verificadas: Instagram @entretablas.mza, Threads).
 * Los datos NO verificables se declaran como `null` con su TODO, para no inventar
 * información y poder completarlos apenas el negocio los confirme.
 */

/** URL de producción provisoria — TODO: reemplazar por el dominio real del negocio. */
export const SITE_URL = "https://entretablasbarbershop.vercel.app";

export const BUSINESS = {
  name: "Entre Tablas Barbershop",
  tagline: "La mejor Barbería de Mendoza",
  /** Highlight "8 AÑOS" del dossier → operación desde ~2018. */
  est: 2018,
  edition: "2.0",
  address: "Arístides 768, Mendoza, Argentina",
  addressShort: "Arístides 768, Mendoza",
  city: "Mendoza",
  province: "Mendoza",
  country: "Argentina",
  /** 10.5K followers reales (dossier, agosto 2026). */
  instagramFollowers: "10.5K",
  /** #nofalla — hashtag propio de la marca. */
  hashtag: "#nofalla",
  /** Reservas online — dominio confirmado en bio. */
  bookingUrl: "https://tuturno.io/entretablasbarbershop",
  bookingLabel: "TuTurno",
  /** Link a Google Maps con la dirección (ficha GBP aún no verificada). */
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ar%C3%ADstides+768+Mendoza",

  // ── Placeholders claramente identificados (dossier sección 7: NO verificables) ──
  /** TODO: pedir el WhatsApp verificado al negocio antes de publicar. */
  whatsappNumber: null as string | null,
  /** TODO: pedir teléfono fijo/móvil al negocio. */
  phone: null as string | null,
  /** TODO: pedir email de contacto al negocio. */
  email: null as string | null,

  social: {
    instagram: "https://www.instagram.com/entretablas.mza/",
    instagramHandle: "@entretablas.mza",
    threads: "https://www.threads.com/@entretablas.mza",
    threadsHandle: "@entretablas.mza",
  },
} as const;

/** Horarios confirmados en la bio de Instagram (mar-sáb 10-20). Dom/Lun sin apertura. */
export const HOURS = [
  { day: "Martes", hours: "10:00 – 20:00" },
  { day: "Miércoles", hours: "10:00 – 20:00" },
  { day: "Jueves", hours: "10:00 – 20:00" },
  { day: "Viernes", hours: "10:00 – 20:00" },
  { day: "Sábado", hours: "10:00 – 20:00" },
  { day: "Domingo", hours: "Cerrado" },
  { day: "Lunes", hours: "Cerrado" },
] as const;

export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  items: readonly string[];
  cta: string;
};

/** Categorías de servicio detectadas en el dossier (sección 5). Sin precios: no verificables. */
export const SERVICES: readonly Service[] = [
  {
    id: "corte",
    eyebrow: "T|CORTE",
    title: "Corte",
    tagline: "Tu fade dura 3 semanas. Tu estilo, no.",
    description:
      "Fades, tijera y diseño, hecho a la forma de tu cabeza y no a la que está de moda. Se mira, se mide y después se corta.",
    items: [
      "Fades: low, mid, high y skin",
      "Corte a tijera / clásico",
      "Diseño, línea y tatuaje capilar",
      "Corte + barba (el combo de la casa)",
      "Corte niños",
    ],
    cta: "Reservar corte",
  },
  {
    id: "color",
    eyebrow: "T|COLOR",
    title: "Color",
    tagline: "Matizamos canas sin que parezca tinte.",
    description:
      "El diferencial que pocas barberías dominan: color masculino real. Canas que dejan de gritar, fantasía cuando la pedís, siempre con matiz que respeta tu tono.",
    items: [
      "Matiz / neutralización de canas",
      "Color fantasía: rubio y platinado",
      "Decoloración + matiz",
      "Barba teñida / matizada",
      "Recrecimiento y raíz",
    ],
    cta: "Reservar color",
  },
  {
    id: "barba",
    eyebrow: "BARBA",
    title: "Barba",
    tagline: "Navaja, diseño y tratamiento.",
    description:
      "La barba se diseña, no se corta. Perfilado con geometría clara, afeitado clásico con navaja y mantenimiento para que el crecimiento no gane.",
    items: [
      "Perfilado / diseño de barba",
      "Afeitado clásico con navaja",
      "Mantenimiento quincenal",
      "Tratamiento e hidratación",
    ],
    cta: "Reservar barba",
  },
  {
    id: "combos",
    eyebrow: "COMBOS",
    title: "Combos",
    tagline: "Corte + barba. O todo junto.",
    description:
      "Los packs que más salen: del combo corte + barba que mantiene el estilo entero, al full service cuando querés salir hecho de punta en blanco.",
    items: [
      "Corte + Barba — el core de la casa",
      "Corte + Color",
      "Full service: corte + barba + color + tratamiento",
    ],
    cta: "Reservar combo",
  },
] as const;

/** Números verificables del dossier (sección 3 y 8). */
export const STATS = [
  { value: "8", label: "años de oficio" },
  { value: BUSINESS.instagramFollowers, label: "en Instagram" },
  { value: "4+", label: "años de contenido" },
  { value: "1", label: "promesa: " + BUSINESS.hashtag },
] as const;

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Respaldo", href: "#respaldo" },
  { label: "Dónde y cuándo", href: "#visitanos" },
] as const;

export const MARQUEE_ITEMS = [
  "Corte",
  "Color",
  "Barba",
  BUSINESS.hashtag,
  `Est. ${BUSINESS.est}`,
  BUSINESS.addressShort,
  "Mendoza",
  "10.5K en IG",
] as const;
