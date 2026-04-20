# Maison

> The operating system for bars, hotels, and restaurants that treat hospitality as a craft.

A premium SaaS product website built with **Astro + Tailwind + GSAP**. Seamless, editorial, handcrafted — not AI-generic.

## Design philosophy

- **Single continuous experience.** Gradient seams and overlapping surfaces instead of hard section cuts.
- **Neutral + brass.** Warm paper/ink base with a single brass accent (`#B8935A`). No rainbow gradients.
- **Sharp edges.** Border-radius mostly 0–3px. Hierarchy from borders + whitespace, not shadows.
- **Editorial typography.** `Fraunces` for display (variable, optical sizing), `Inter` for body, `JetBrains Mono` for data.
- **Subtle parallax.** GSAP ScrollTrigger, transform-only, respects `prefers-reduced-motion`.
- **Reveal on scroll.** CSS-driven (`data-reveal`) + IntersectionObserver — no layout shift, no jank.

## Stack

| Layer        | Tool                                    |
| ------------ | --------------------------------------- |
| Framework    | [Astro 4](https://astro.build) (SSG)    |
| Styling      | Tailwind CSS 3 + custom design tokens   |
| Motion       | GSAP 3 + ScrollTrigger                  |
| Fonts        | Fontsource (self-hosted, variable)      |
| Language     | TypeScript (strict)                     |

## Getting started

```bash
npm install
npm run dev         # http://localhost:4321
npm run build       # static output in ./dist
npm run preview
```

## Project structure

```
src/
├── components/          # 12 reusable Astro components
│   ├── Navbar.astro     # Fixed, glass-on-scroll, mobile sheet
│   ├── Hero.astro       # Aurora bg + floating product preview + parallax cards
│   ├── Footer.astro     # 4-column site footer with status + version
│   ├── Logo.astro
│   ├── SectionHeading.astro
│   ├── FeatureCard.astro
│   ├── StatCard.astro   # Sparkline-capable KPI card
│   ├── LineChart.astro  # Pure SVG, no chart library
│   ├── DonutChart.astro # Pure SVG
│   ├── ChatUI.astro     # Guest-messaging mock with Service AI
│   ├── DashboardMock.astro
│   ├── Sidebar.astro    # Dashboard nav (grouped)
│   ├── ThemeToggle.astro
│   ├── ParallaxLayer.astro
│   └── Reveal.astro
├── layouts/
│   ├── BaseLayout.astro       # Marketing pages — GSAP + reveal bootstrap
│   └── DashboardLayout.astro  # Product pages — Sidebar + top bar
├── pages/
│   ├── index.astro       # Home
│   ├── features.astro    # 3 pillars × 4 modules
│   ├── pricing.astro     # 3 plans + compare table + FAQ
│   ├── download.astro    # 4 platforms + hardware
│   ├── contact.astro     # Form + 3 offices + careers/press
│   ├── dashboard.astro   # Live service view
│   └── admin.astro       # Team, permissions, audit log, billing
└── styles/
    └── global.css        # Design tokens, utilities, reveal system
```

## Design tokens

Declared in `src/styles/global.css` under `:root` (light) and `.dark` (dark). Exposed to Tailwind via `tailwind.config.mjs`:

- **Colors** — `ink`, `paper`, `paper-warm`, `paper-cream`, `bone`, `brass.*`
- **Typography** — `font-display` (Fraunces var), `font-sans` (Inter var), `font-mono` (JetBrains)
- **Motion** — `--ease-out-expo`, `--ease-smooth`
- **Seams** — `.seam-warm-top`, `.seam-warm-bottom`, `.hero-aurora`, `.grain`

## Motion system

| Pattern       | How                                                          |
| ------------- | ------------------------------------------------------------ |
| Reveal on scroll | `<Reveal mode="up\|scale\|left\|right" delay={n}>` → IO toggle |
| Parallax      | `<ParallaxLayer speed={-0.2..0.2}>` → GSAP ScrollTrigger     |
| Hero float    | `.animate-float` / `.animate-float-slow`                     |
| Hover lift    | `-translate-y-1` + brass underline reveal                    |
| Reduced motion | All of the above no-op via `@media (prefers-reduced-motion)` |

## Accessibility

- WCAG AA contrast on body text (`ink` ≥ 11:1 on `paper`)
- Focus rings: 2px brass, 2px offset
- Skip-link on every page
- Semantic `<nav>`, `<main>`, `<footer>`, `<article>`
- All icons are SVG (not emoji), all icon-only controls have `aria-label`
- Respect `prefers-reduced-motion` and `prefers-color-scheme`
- Keyboard-navigable, tab order matches visual order

## Adding a page

1. Create `src/pages/your-page.astro`
2. Wrap in `<BaseLayout title="..." current="your-page">`
3. Compose with `<SectionHeading>`, `<FeatureCard>`, `<Reveal>`, `<ParallaxLayer>` from `src/components/`

Keep sections seamed — use `.seam-warm-top / .seam-warm-bottom` or gradient overlays between alternating `bg-paper` and `bg-paper-warm/50` backgrounds.

## License

© Maison Hospitality Systems — all rights reserved.
