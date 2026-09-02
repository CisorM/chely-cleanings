# Chely Cleaning — Project Brief & Prototype Reference

## About the project

**Chely Cleaning Services and Solutions LLC** is a residential and commercial
cleaning company operating in **Nashville, Tennessee (USA)**. This repository is
the marketing website: a fast, SEO-focused single-page landing site.

- **Goal** — turn organic and paid traffic into online bookings (BookingKoala),
  and act as the credibility anchor for the brand (mission/vision, services,
  before/after proof, contact).
- **Audience** — Nashville / Middle Tennessee homeowners and property managers,
  plus small-business / office decision makers. A meaningful share of the local
  market is Spanish-speaking, so the site ships **bilingual (EN default, ES)**.
- **Stack** — [Astro](https://astro.build) (static output) + **Tailwind CSS v4**,
  built for SEO (SSR-free HTML, JSON-LD `CleaningService` schema, hreflang,
  sitemap), i18n-ready routing, and dynamic content sections driven by data
  files / dictionaries so non-developers can edit copy.
- **Origin** — the visual design was first prototyped in **Lovable** (React +
  TanStack Router + shadcn-style tokens). The brief below is what was sent to
  Lovable. The prototype export (`components/*.tsx`, `styles.css`, `assets/`) was
  then **ported to Astro** — same layout, copy, and brand system, re-expressed as
  `.astro` components with vanilla-JS interactivity and no React runtime.

### How the prototype maps to this codebase

| Prototype (Lovable / React)      | This repo (Astro)                                   |
| -------------------------------- | -------------------------------------------------- |
| `index.tsx` (TanStack route)     | `src/pages/index.astro` + `src/pages/es/index.astro` |
| `components/Navbar.tsx` …        | `src/components/Navbar.astro` … (one per section)   |
| `useState` tabs / slider         | Vanilla `<script>` in the component                 |
| `styles.css` (`@theme`, oklch)   | `src/styles/global.css` (same tokens, same values) |
| `assets/*.jpg|png` imports       | `src/assets/**` via `astro:assets` `<Image>`       |
| Hard-coded English copy          | `src/i18n/ui.ts` (EN + ES) via `t()` helper        |
| Hard-coded services array        | `src/content/services.yaml` (content collection)   |
| `#bookingkoala-widget` container | `src/components/Booking.astro` (iframe when env set) |

### Brand system

- **Primary:** purple `#5E1B8E` · **Secondary:** green `#6EB92E`
- Semantic tokens in `oklch` (`--primary`, `--secondary`, `--muted`, …) mapped to
  Tailwind utilities in `@theme inline`. Light + dark values defined; no dark
  toggle shipped yet.
- Type: **Fredoka** (headings) / **Nunito** (body), loaded from Google Fonts.
- Helpers: `.gradient-brand` (fills), `.text-gradient-brand` (clipped text).

### Integrations (planned / wired)

- **BookingKoala** — embedded booking widget. Set
  `PUBLIC_BOOKINGKOALA_SUBDOMAIN` in `.env`; the `Booking` section renders the
  iframe, otherwise it shows the labelled placeholder.
- **Google Analytics 4** — set `PUBLIC_GA_ID`.
- **Google Maps embed** — `PUBLIC_GOOGLE_MAPS_EMBED` (optional, for the contact
  area).
- Business NAP / social links / geo live in `src/config/site.ts` and feed the
  JSON-LD `LocalBusiness` schema.

---

## Original brief sent to Lovable

> Build a modern, clean, and highly responsive Single Page Application (SPA)
> landing page for "Chely Cleaning Services And Solutions", a professional
> residential and commercial cleaning company operating in Nashville, Tennessee.

### 1. Brand identity & visual design (color extraction)

- **Logo images:** two versions of the official logo (the extended full logo and
  the reduced version).
- **Color palette:** extract and analyze the exact brand colors from these image
  files. Use the extracted primary, secondary, and accent colors to establish the
  entire color scheme of the website (Tailwind palette, background tones,
  buttons, borders, and subtle accents).
- **Tone & aesthetic:** professional, trustworthy, fresh, pristine, and modern
  with generous white space and high-legibility typography.

### 2. Page structure & sections (single page)

**A. Header / Navigation**

- Logo: display the extended logo in the header navigation.
- Nav links (smooth scroll to anchor links): "Home", "About Us", "Services",
  "Before & After", "Contact".
- CTA button: "Book Now" (smooth scrolls to the booking section).

**B. Hero Section**

- Headline: "Pristine Spaces, Peace of Mind"
- Subheadline: "Professional residential and commercial cleaning services
  tailored to Nashville's most demanding standards. We handle the dirt, you enjoy
  the time."
- Primary CTA: "Book Your Cleaning"
- Secondary CTA: "Explore Services"
- Visuals: high-quality hero background or graphic accents consistent with the
  brand colors extracted from the logo.

**C. About Us (Quiénes Somos)**

- **Mission block:** "Our mission is to transform Nashville's spaces into pristine
  and healthy environments, providing peace of mind and free time to our
  residential and commercial clients through professional, reliable, and
  top-quality cleaning services."
- **Vision block:** "We aim to establish ourselves as a comprehensive services
  corporation with a presence throughout the state. Distinguished by our culture
  of respect and professional attention to detail, we exceed the expectations of
  the most demanding sectors, improving the quality of life for families and the
  productivity of businesses in Nashville."
- **Key highlights grid:** badges/cards emphasizing "Professional & Reliable",
  "Detail-Oriented", and "Nashville Local".

**D. Services Section**

Display services in a modern tabbed layout or two distinct grid sections
("Residential Services" & "Commercial Services").

1. **Residential Services**
   - Standard Cleaning: dusting, vacuuming, mopping, and bathroom/kitchen
     sanitization.
   - Deep Cleaning: detailed scrubbing of baseboards, appliances, and
     hard-to-reach areas.
   - Move-In / Move-Out: preparing your home for a fresh start or ensuring you
     get your deposit back.
   - Post-Construction: cleaning up dust and debris after renovations.
2. **Commercial Services**
   - Office Cleaning: desks, common areas, breakrooms, and restroom sanitation.
   - Floor Care: expert vacuuming, mopping, and floor maintenance.
   - Window Cleaning: interior glass and entrance doors for a crystal-clear look.
   - Janitorial Services: trash removal, dusting, and restocking supplies.

Each service item is a styled card with an icon placeholder, title, and short
description using the brand's extracted accent colors.

**E. Before & After Gallery**

- Interactive slider or comparison grid cards demonstrating real results.
- Image containers side-by-side or a before/after slider component to compare
  dirty vs. clean transformations.

**F. Booking Integration & Contact Us**

- Contact info card: location (Nashville, TN), phone number, email address,
  operating hours.
- Embedded booking widget placeholder (**BookingKoala** integration):
  - A dedicated container formatted for an embedded BookingKoala iframe or script
    widget.
  - A clean loading skeleton or fallback UI box labeled: "[BookingKoala
    Reservation Widget Embedded Here]".

**G. Footer**

- Reduced logo icon/version alongside quick navigation links, company tagline,
  copyright notice, and social media icon placeholders.

### 3. Technical & code requirements for export

- **Component architecture:** modular, isolated, cleanly structured (e.g.
  `Hero`, `Services`, `Gallery`, `Booking`, `Navbar`).
- **Styling:** Tailwind CSS utility classes based on the extracted palette; avoid
  custom inline styles.
- **Interactivity:** smooth scrolling behavior across sections (`scroll-smooth`).

---

## Deltas from the brief (decisions made during the Astro port)

- **Multi-language** added (EN default at `/`, ES at `/es/`) — not in the
  original brief but a stated requirement for the real project.
- **Icons:** the prototype used emoji in the service / highlight cards; kept as-is
  (stored in `services.yaml`). Swap for SVG icons later if desired.
- **Accent color:** the logo has two brand colors (purple + green). "Accent" in
  the brief is served by the green `--secondary` and the light `--accent` tint.
- **Contact details** (`(615) 555-0123`, `hello@chelycleaning.com`, hours) are
  placeholders from the prototype — replace in `src/config/site.ts` and
  `src/i18n/ui.ts`.
- **Hero/gallery images** are the prototype stock images in `src/assets/` —
  replace with real Chely photography before launch.
