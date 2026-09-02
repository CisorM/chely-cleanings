# Chely Cleaning — Landing Site

Bilingual (EN/ES), SEO-focused single-page marketing site for **Chely Cleaning
Services and Solutions LLC** (Nashville, TN).

Built with **Astro** (static output) + **Tailwind CSS v4**. Ported from a Lovable
prototype — see [`docs/lovable-brief.md`](docs/lovable-brief.md) for the original
brief and the prototype→Astro mapping.

## Quick start

```bash
pnpm install
cp .env.example .env      # fill in integration keys (all optional for local dev)
pnpm dev                  # http://localhost:4321  (Astro 7 runs it as a daemon)
pnpm dev stop             # stop the dev daemon
pnpm build                # static build -> dist/
pnpm preview              # serve the build locally
```

Requires Node `>=22.12` (see `.nvmrc`).

## Project structure

```
src/
├─ pages/
│  ├─ index.astro          # English landing (served at /)
│  └─ es/index.astro       # Spanish landing (served at /es/)
├─ layouts/Layout.astro    # <head>, fonts, GA, Navbar + Footer shell
├─ components/
│  ├─ SEO.astro            # meta, OG/Twitter, hreflang, JSON-LD schema
│  ├─ Navbar / Hero / About / Services / Gallery / Booking / Footer
│  ├─ BeforeAfterSlider.astro   # drag-to-reveal comparison (vanilla JS)
│  ├─ LanguagePicker.astro
│  ├─ Logo.astro           # brand logo (extended / icon)
│  └─ LandingSections.astro     # composes the 5 body sections
├─ i18n/
│  ├─ ui.ts                # all UI copy, EN + ES
│  └─ utils.ts             # getLangFromUrl, useTranslations, hreflang helpers
├─ content/services.yaml   # the 8 services (content collection, per-locale)
├─ content.config.ts       # collection schema
├─ config/site.ts          # business NAP, socials, geo, integration IDs
├─ styles/global.css       # design system (oklch tokens + @theme)
└─ assets/                 # optimized images (logo, hero, gallery)
public/                    # robots.txt, favicons, og-image
```

## Editing content

- **Section copy / labels** → `src/i18n/ui.ts` (keep the `en` and `es` blocks in
  sync; missing `es` keys fall back to `en`).
- **Services** (title / description / icon / order / category) →
  `src/content/services.yaml`. One entry per service **per language**.
- **Business info** (phone, email, hours, address, service area, social URLs,
  geo) → `src/config/site.ts`. This also feeds the `LocalBusiness` structured
  data, so keep it accurate.
- **Images** → replace files in `src/assets/` (hero, `gallery/*`) and
  `src/assets/brand/` (logo). Update `public/og-image.jpg` (ideally 1200×630).

## Adding a language

1. Add the locale to `locales` in `astro.config.mjs` and the sitemap `i18n` map.
2. Add it to `languages` in `src/i18n/ui.ts` and add a full translation block.
3. Add a page at `src/pages/<lang>/index.astro` (copy `es/index.astro`).
4. Add service entries with the new `lang` in `services.yaml`.

## SEO

- Per-page `<title>`, meta description, canonical, `robots`.
- `hreflang` alternates (`en-US`, `es-US`, `x-default`) + `og:locale:alternate`.
- Open Graph + Twitter card tags.
- JSON-LD: `CleaningService` (LocalBusiness) with NAP, geo, `areaServed`,
  opening hours + `WebSite`.
- `@astrojs/sitemap` emits `/sitemap-index.xml`; referenced from
  `public/robots.txt`.
- **Before deploying:** set the production domain in `astro.config.mjs` (`SITE`),
  `src/config/site.ts` (`url`) and `public/robots.txt`.

## Integrations

| Integration      | Env var                          | Where it renders            |
| ---------------- | -------------------------------- | --------------------------- |
| BookingKoala     | `PUBLIC_BOOKINGKOALA_SUBDOMAIN`  | `Booking.astro` (iframe)    |
| Google Analytics | `PUBLIC_GA_ID`                   | `Layout.astro` (gtag)       |
| Google Maps      | `PUBLIC_GOOGLE_MAPS_EMBED`       | contact area (optional)     |

Without the env vars set, the booking widget shows a labelled placeholder and
analytics is disabled.

## Deploy

Static output — deploy `dist/` to Vercel, Netlify, Cloudflare Pages, etc. No
adapter needed. Add an SSR adapter later only if server endpoints are required
(e.g. a custom contact form with secrets).
