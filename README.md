# Ikonnect Talentum Arrow — Home Page

A pixel-faithful Next.js (App Router) build of the Ikonnect Talentum Arrow home page design, with premium motion.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Stack

- **Next.js 16** (App Router, TypeScript), static output
- **framer-motion**: reveals, staggers, parallax, count-ups, nav indicator, menus
- **lenis**: buttery smooth scrolling + smooth anchor links
- **lucide-react**: line icons
- **@fontsource** Poppins (headings) + Inter (body), self-hosted, so the build needs no Google Fonts call

## Structure

```
app/
  layout.tsx      fonts, metadata, smooth-scroll provider
  page.tsx        section order
  globals.css     design tokens + all section styles + responsive rules
components/
  Header.tsx      sticky glass header, scroll-spy, animated underline, dropdowns, mobile menu
  Hero.tsx        line-mask headline reveal, shimmer gradient text, mouse + scroll parallax,
                  floating glass cards, AI "ping" rings, particle field
  Features.tsx    4-up value strip
  About.tsx       clip-path image reveal + scroll zoom
  Services.tsx    6 service cards (spotlight hover, image zoom, lift)
  Industries.tsx  9 industry tiles
  Solutions.tsx   diagonal-split banner with parallax images + CV scan line
  Stats.tsx       count-up numbers
  CTA.tsx         parallax mountain image
  Footer.tsx
  Ribbon.tsx      animated neon-green SVG ribbons used on section edges
  Particles.tsx   lightweight canvas particle field (pauses off-screen)
  motion.tsx      shared reveal / stagger helpers
public/images/    photographic assets
```

## Images

The photographic assets in `public/images/` were cropped from the design mockup and upscaled.
They work as-is, but for a crisp result on large/retina screens, replace them with the
original high-resolution artwork, keeping the same file names:

| File | Used in |
| --- | --- |
| `hero-ai.webp` | Hero visual (AI face + skyline, ~1.45:1) |
| `about-building.webp` | About Us image (~2.3:1) |
| `svc-*.webp` | Service card thumbnails (~2.2:1) |
| `banner-robot.webp`, `banner-vision.webp` | AI Solutions banner |
| `cta-mountain.webp` | "Build Your AI Future" band |

## Accessibility & performance

- Respects `prefers-reduced-motion` (smooth scroll, parallax, and loops are disabled)
- Real text throughout (no baked-in text in images), semantic landmarks, focus styles
- Responsive from 360px phones to wide desktops (hamburger menu under 1180px)
