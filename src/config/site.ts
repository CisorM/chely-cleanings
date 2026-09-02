/**
 * Single source of truth for business data (NAP), integration IDs and social
 * links. Used by the SEO component (JSON-LD LocalBusiness), the contact section
 * and the footer. Keep this accurate — search engines cross-check it.
 */

export const site = {
  name: 'Chely Cleaning Services and Solutions LLC',
  shortName: 'Chely Cleaning',
  url: 'https://www.chelycleaning.com',
  defaultLocale: 'en',
  locales: ['en', 'es'] as const,

  // ---- Contact / NAP -------------------------------------------------------
  contact: {
    // E.164 for tel: links, formatted for display. PLACEHOLDER — replace.
    phone: '+16155550123',
    phoneDisplay: '(615) 555-0123',
    email: 'hello@chelycleaning.com',
  },
  address: {
    // Chely Cleaning is a service-area business. Fill the street address only if
    // there is a public office; otherwise keep areaServed and omit streetAddress
    // from the JSON-LD.
    streetAddress: '',
    city: 'Nashville',
    region: 'TN',
    regionName: 'Tennessee',
    postalCode: '',
    country: 'US',
  },
  geo: {
    // Nashville, TN city center — refine to the real service centroid.
    latitude: 36.1627,
    longitude: -86.7816,
  },
  areaServed: [
    'Nashville, TN',
    'Davidson County, TN',
    'Franklin, TN',
    'Brentwood, TN',
    'Hendersonville, TN',
    'Middle Tennessee',
  ],
  openingHours: [
    // Schema.org opening hours specification.
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '18:00' },
  ],
  priceRange: '$$',

  // ---- Social ------------------------------------------------------------
  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
    google: '', // Google Business Profile URL
  },

  // ---- Integrations (values come from environment variables) --------------
  integrations: {
    // BookingKoala embed subdomain, e.g. "chelycleaning" -> chelycleaning.bookingkoala.com
    bookingKoalaSubdomain: import.meta.env.PUBLIC_BOOKINGKOALA_SUBDOMAIN ?? '',
    googleAnalyticsId: import.meta.env.PUBLIC_GA_ID ?? '',
    googleMapsEmbedSrc: import.meta.env.PUBLIC_GOOGLE_MAPS_EMBED ?? '',
  },
} as const;

export type Site = typeof site;
