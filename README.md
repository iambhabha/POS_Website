# Barista — Hospitality SaaS Website

Premium Astro site for a Bar, Hotel & Restaurant management platform. Glass UI, parallax,
3D tilt cards, animated gradient backgrounds, and a full dashboard + admin experience.

## Stack

- [Astro 5](https://astro.build) with zero-JS by default
- [Tailwind CSS 4](https://tailwindcss.com) via the `@tailwindcss/vite` plugin
- Native `IntersectionObserver` scroll reveal + CSS parallax (no heavy libs)
- GSAP + AOS are listed in `package.json` if you want to swap in richer timelines

## Run it

```bash
npm install
npm run dev
```

Then open the URL Astro prints (usually `http://localhost:4321`).

Build for production:

```bash
npm run build
npm run preview
```

## Pages

| Route         | Description                                                         |
|---------------|---------------------------------------------------------------------|
| `/`           | Home — hero, floating mockup, feature grid, parallax showcase, CTA  |
| `/features`   | Feature chapters, side-by-side comparison                           |
| `/pricing`    | Plans with monthly/yearly toggle + FAQ                              |
| `/download`   | Per-platform download grid + changelog                              |
| `/contact`    | Sales form with animated gradient surface                           |
| `/dashboard`  | User dashboard — stat cards, charts, orders table, reservations     |
| `/admin`      | Admin panel — users table, activity feed, chart, modern chat UI     |

## Theming

Light/dark toggle lives in the navbar and every dashboard. Preference is stored in
`localStorage` and applied before first paint via an inline `<script is:inline>` snippet
to prevent flashes.

## Project structure

```
src/
  layouts/
    BaseLayout.astro       # marketing pages shell (navbar + footer + animated bg)
    DashboardLayout.astro  # sidebar + top bar shell for /dashboard and /admin
  components/
    Hero.astro, Navbar.astro, Footer.astro,
    FeatureCard.astro, PricingCard (inline), DashboardMock.astro,
    Sidebar.astro, StatCard.astro, LineChart.astro, DonutChart.astro, ChatUI.astro,
    SectionHeading.astro, ThemeToggle.astro, Logo.astro
  pages/
    index.astro, features.astro, pricing.astro,
    download.astro, contact.astro,
    dashboard.astro, admin.astro
  styles/global.css        # design tokens, glass, btn, reveal, keyframes
```

## Motion

- `.reveal` — fades + slides up when in viewport (one-shot)
- `.card-3d` — perspective tilt toward cursor
- `[data-parallax]` — translates on scroll (value = speed, e.g. `0.2`)
- `.float-y` / `.float-y-slow` — gentle bobbing for hero decor
- `.animate-gradient` — slow gradient shift used on headings and the CTA band

All of it respects `prefers-reduced-motion`.
