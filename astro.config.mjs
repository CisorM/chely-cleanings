// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Update to the production domain before deploying — used for canonical URLs,
// sitemap, hreflang and Open Graph tags.
const SITE = 'https://www.chelycleaning.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,

  // Pages are static by default; routes that opt out with `export const
  // prerender = false` (e.g. src/pages/api/contact.ts) run on-demand on Vercel.
  adapter: vercel(),

  // Multi-language routing. English is the default and is served from the site
  // root (`/`); Spanish from `/es/`. Add locales here.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', es: 'es-US' },
      },
    }),
  ],
});
