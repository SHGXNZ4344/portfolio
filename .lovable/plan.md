
## Motion Portfolio — Single Page, Dark Glassmorphism

A one-page scrolling portfolio with frosted-glass cards, locked dark theme, and Framer Motion throughout. Placeholders included so you can swap in real content later.

### Layout (single page, smooth scroll)
1. **Sticky glass nav bar** — logo/initials + anchor links (Work, Skills, About, Contact). Blurs background on scroll.
2. **Hero** — name, tagline, animated gradient blob behind glass panel, subtle floating motion + CTA buttons (View Work / Contact).
3. **Projects showcase** (main focus) — 3 placeholder glass cards in a responsive grid. Each card: title, 1-line description, tech chips, Live Demo + GitHub buttons, image/GIF slot, tilt + lift on hover, scroll-reveal stagger.
4. **Skills** — grouped chips (Frontend / Animation / AI-ML / Tools) inside a glass panel, with animated progress bars that fill on scroll.
5. **About Me** — short glass card with avatar slot + 2-paragraph placeholder bio.
6. **Work in Progress** — small teaser strip for upcoming projects.
7. **Contact** — email link, social icons (GitHub, LinkedIn, X), copy-email button with toast feedback.
8. **Footer** — minimal, year + "Built with motion".

### Visual system (Glassmorphism, dark)
- Background: deep navy/black with two soft animated gradient orbs (purple + cyan) drifting slowly.
- Surfaces: `backdrop-blur-xl` + translucent white border + soft inner glow.
- Typography: clean sans (Inter), large bold headings, muted body.
- Accent color: single vibrant hue (electric violet) for CTAs and progress fills.

### Motion (purposeful, not heavy)
- Hero text: staggered fade-up on mount.
- Sections: scroll-triggered reveal (fade + slight Y) using Framer Motion `whileInView`.
- Project cards: hover lift + subtle tilt + glow border.
- Skill bars: width animates from 0 → target when in view.
- Smooth anchor scrolling between sections.
- Page mount: quick fade-in (no slow loaders).
- Respects `prefers-reduced-motion`.

### Tech
- Framer Motion for all animations.
- Tailwind for styling, existing shadcn components (Button, Card, Badge, Sonner for toast).
- Lucide icons for socials/skills.
- Fully responsive (mobile-first), target load < 3s — no 3D, no particles.

### Placeholders you'll edit later
- Name: "Your Name", tagline: "Motion Developer · AI/ML Enthusiast"
- 3 dummy projects with `#` links
- Generic skills list
- Email placeholder + social `#` links
- Avatar = initials circle (no image needed)

All copy lives in clearly-labeled constants at the top of each section file so swapping content is trivial.
