# Synapse — SaaS Landing Page

A polished, production-ready Next.js 14 SaaS landing page built with **Chakra UI v3** and **Framer Motion**.

## Tech Stack

- **Next.js 14** (App Router) — SSR by default on all page components
- **Chakra UI v3** — component library with custom dark theme
- **Framer Motion** — scroll-triggered and entrance animations
- **TypeScript** — fully typed

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout (SSR) — fonts, metadata, providers
│   ├── page.tsx          # Home page (Server Component)
│   └── providers.tsx     # Client-side Chakra UI provider wrapper
├── components/
│   ├── Navbar.tsx        # Sticky nav with scroll-aware blur
│   ├── Hero.tsx          # Hero with animated entrance + mock dashboard
│   ├── Features.tsx      # 6-feature grid
│   ├── Testimonials.tsx  # 3-column testimonials
│   ├── Pricing.tsx       # 3-tier pricing cards
│   └── Footer.tsx        # CTA banner + footer links
└── theme/
    └── index.ts          # Chakra UI custom theme (colors, fonts)
```

## How SSR Works Here

- `src/app/page.tsx` is an **async Server Component** — runs on the server
- Add `fetch()` calls directly in `page.tsx` for server-side data
- Client components (animations, interactivity) are marked with `"use client"`
- Chakra UI's `ChakraProvider` is isolated in `providers.tsx` to keep the root layout a Server Component

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

1. **Brand name/copy** — update text in each component
2. **Colors** — edit `src/theme/index.ts` (`brand` and `surface` tokens)
3. **Fonts** — swap the Google Fonts link in `layout.tsx` and update `tokens.fonts` in theme
4. **Sections** — add/remove sections from `src/app/page.tsx`
