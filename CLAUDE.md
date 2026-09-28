# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server at localhost:3000
npm run build     # production build (also runs typecheck + ESLint — treat failures here as blocking)
npm run start     # serve the production build
npm run lint      # ESLint only (next/core-web-vitals config)
```

There is no test suite configured in this project.

On Windows/Git Bash in this environment, `npm run build` sometimes silently resolves to a wrong/global `next` binary — invoke `npx next build` directly if `npm run build` reports `next: command not found` or picks up an unexpected Next.js version.

## Architecture

This is a single-page Next.js 14 (App Router) portfolio site. Everything renders from one route: `app/page.tsx` composes section components in order (`Navbar`, `Hero`, `About`, `Experience`, `Achievements`, `Projects`, `Skills`, `Certifications`, `Contact`, `Footer`). There is no routing, no server actions, no API routes, and no backend — it's fully static content plus client-side interactivity (theme toggle, typewriter animation, scroll-triggered Framer Motion).

**Content is centralized in `data/profile.ts`.** This is the single source of truth for every piece of text on the site — name, bio, experience, projects, skills, certifications, achievements, contact info. Components are pure render layers that import typed consts from this file (`profile`, `heroStats`, `experience`, `projects`, `skills`, `achievements`, `education`, `certifications`) and map over them. When asked to change any displayed content, edit `data/profile.ts`, not the component markup. When adding a new content type (e.g. a new "Achievement"), add a typed array here first, then build the component around it.

**Theme system uses CSS custom properties, not Tailwind's default dark mode colors.** `app/globals.css` defines `--background`, `--foreground`, `--card`, `--border`, `--muted`, `--card-shadow` on `:root` (light) and `.dark` (dark); `tailwind.config.ts` maps these to Tailwind color/shadow tokens (`bg-background`, `text-foreground`, `bg-card`, `border-border`, `bg-muted`, `shadow-card`). Theme switching is `next-themes` with `attribute="class"` (see `components/ThemeProvider.tsx`), defaulting to dark. **Never hardcode `white/*` or `black/*` opacity utilities or a fixed hex background on a themed element** — earlier versions of this codebase did that (e.g. `bg-dark-card/60` unconditionally on `Card`) and it produced a broken, muddy light theme. Always use the semantic tokens above so components adapt to both themes automatically. Brand accent colors (`accent` = blue, `accent2` = purple, `success` = green) are fixed hex values that are theme-agnostic by design and safe to use directly (e.g. `bg-accent/10 text-accent`).

**Three font families, each with a specific role**, loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS vars consumed by `tailwind.config.ts` (`font-sans`, `font-mono`, `font-display`):
- `font-sans` (Inter) — body copy.
- `font-mono` (JetBrains Mono) — taglines, badges/tags, small labels, the hero quote/typewriter.
- `font-display` (Space Grotesk) — headings, nav brand, card titles.

**`components/SectionHeading.tsx` is the shared heading pattern** for every content section below the hero (title + gradient underline bar + optional subtitle, left- or center-aligned). Use it rather than hand-rolling a new `motion.h2` block when adding a section — this keeps heading typography/spacing consistent site-wide.

**`components/ui/*` are hand-written shadcn-style primitives** (`Button`, `Card`, `Badge`) — not generated via the shadcn CLI. There's no `components.json`; if new primitives are needed, follow the existing pattern (forwardRef, `cn()` from `lib/utils.ts` for class merging, variant maps as plain objects).

**The Contact section is intentionally not a form.** It renders `mailto:`/`tel:` links directly from `profile.email`/`profile.phone` — no submit handler, no backend, no third-party form service. Don't reintroduce a stateful contact form unless explicitly asked; a prior version faked a "message sent" state that never actually sent anything, which was the reason this was changed.

**Decorative/animated elements to be aware of:**
- `.bg-grid` and `.mesh-orb` (defined in `globals.css`) are the hero's background texture/blobs — both theme-aware via the `--border` var and a `.dark` opacity override, not separate light/dark variants.
- The Hero's rotating role text and the animated stat counters are custom hooks/logic local to `components/Hero.tsx` (`useTypewriter`, `StatCounter`), not a shared utility — duplicate the pattern rather than trying to import from Hero if another section needs similar behavior.
- `Achievements.tsx` uses an alternating `translate-y` offset (even/odd index) on desktop only (`md:`) to create a diagonal-stagger card grid; this is a plain index-based CSS class swap, not a layout library.

## Deployment

Static-friendly Next.js app intended for Vercel (zero-config) or GitHub Pages (requires adding `output: "export"` + `basePath` to `next.config.mjs` before building — see README for details). No environment variables are required.
