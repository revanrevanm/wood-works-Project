# Natrayan Wood Works — Premium Website

A world-class, luxury brand website for **Natrayan Wood Works** — traditional carpentry & woodworks in Pallapatti, Karur, Tamil Nadu. Built to feel like a ₹10-lakh interior-design studio, not a local shop.

> Crafting Quality Woodwork Since 1995 · தரமான மரவேலை · Karur & Coimbatore

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** (custom premium wood design system)
- **Framer Motion** (scroll reveals, parallax, marquee, lightbox, staggers)
- **Lucide Icons**, CVA + tailwind-merge (shadcn-style primitives)
- Fonts: **Fraunces** (display serif), **Plus Jakarta Sans** (UI), **Hind Madurai** (Tamil)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes static)
npm run start    # serve production build
```

## Pages

| Route        | Page             |
| ------------ | ---------------- |
| `/`          | Home             |
| `/about`     | About Us         |
| `/services`  | Services         |
| `/projects`  | Projects Gallery |
| `/contact`   | Contact          |

## Customising

All business data (phone, WhatsApp, address, copy) lives in **one file**:
`src/lib/site.ts` — change it once and it flows across the whole site + SEO.
Services / projects / testimonials live in `src/lib/content.ts`.

### Images

All images are **real local photos** in `public/images/` (wood / furniture /
interior shots), stored locally so they load fully offline — no remote fetch,
so they work behind corporate proxies/firewalls.

They were fetched from [Pexels](https://www.pexels.com) (free to use) via
`scripts/download-images.ps1` (`npm run fetch:images`). Filenames: `hero`,
`about-preview`, `about-hero`, `about-workshop`, `why-craftsman`,
`services-hero`, `projects-hero`, `contact-hero`, `og`, and
`project-01 … project-12` (all `.jpg`).

**To use your own real project photos** (biggest trust + SEO win): just replace
the files in `public/images/` with the same names. Keep roughly the same aspect
ratios (heroes landscape; `about-preview`, `why-craftsman`, and the "tall"
gallery items portrait).

### Before going live

1. Set the real domain in `SITE.url` (`src/lib/site.ts`).
2. Replace placeholder images with real project photos (see **Images** above).
3. Add PWA icons in `manifest.ts`.
4. Verify the exact Google Maps coordinates in `SITE.geo`.

## Performance

- Fully static (SSG) — 11 prerendered routes
- ~105 kB shared JS, fonts self-hosted via `next/font`
- `next/image` with AVIF/WebP, lazy loading, responsive `sizes`
- Respects `prefers-reduced-motion`
