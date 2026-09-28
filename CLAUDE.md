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

**`components/SectionHeading.tsx` is the shared heading pattern** for most content sections below the hero (title + gradient underline bar + optional subtitle, left- or center-aligned). Use it rather than hand-rolling a new `motion.h2` block when adding a section — this keeps heading typography/spacing consistent site-wide. Exception: `Contact.tsx` hand-rolls its own heading because it needs inline bold keyword spans in the supporting paragraph (`SectionHeading`'s `subtitle` prop only takes plain text) — follow that same inline pattern there rather than trying to force it through `SectionHeading`.

**`components/ui/*` are hand-written shadcn-style primitives** (`Button`, `Card`, `Badge`) — not generated via the shadcn CLI. There's no `components.json`; if new primitives are needed, follow the existing pattern (forwardRef, `cn()` from `lib/utils.ts` for class merging, variant maps as plain objects).

**Icon chips are the standard way to present an icon next to text.** A small rounded box (`rounded-xl`/`rounded-lg`) with a translucent brand-color background (`bg-accent/10 text-accent`, `bg-accent2/10 text-accent2`, or `bg-success/10 text-success`) wrapping a `lucide-react` icon — see `Achievements.tsx`, `Contact.tsx`'s detail cards, and the education/certification cards in `Certifications.tsx`. When adding a new icon+label element, use this pattern instead of a bare icon for visual consistency.

**The Contact section is intentionally not a form.** It renders `mailto:`/`tel:`/external links directly from `profile.email`/`profile.phone`/`profile.linkedin`/`profile.github` as five individual link-cards (Email, Phone, LinkedIn, GitHub, Location) — no submit handler, no backend, no third-party form service. Don't reintroduce a stateful contact form unless explicitly asked; a prior version faked a "message sent" state that never actually sent anything, which is why this was changed. `Footer.tsx` deliberately has no social icons anymore (they'd duplicate the Contact cards) — it's just copyright text plus a "Back to top" button.

**Decorative/animated elements to be aware of:**
- `.bg-grid` and `.mesh-orb` (defined in `globals.css`) are the hero's background texture/blobs — both theme-aware via the `--border` var and a `.dark` opacity override, not separate light/dark variants.
- The Hero's line-art doodle icons (`doodles` array in `Hero.tsx`) are deliberately kept off the horizontal center and out of the ~15–85% column where the centered text/stats sit — a previous placement near center caused a doodle to visually overlap the headline. Keep new doodles near the edges (roughly `left-/right-[4–10%]`) and re-check against the tallest hero content, not just the fold.
- The Hero's bottom "Scroll" affordance is a real `<button>` (scrolls to `#about`), not a decorative div — the section has `pb-24` specifically to reserve space for it below the stats row. Don't remove that padding without moving the button, or it will overlap the stats again.
- The Hero's rotating role text and the animated stat counters are custom hooks/logic local to `components/Hero.tsx` (`useTypewriter`, `StatCounter`), not a shared utility — duplicate the pattern rather than trying to import from Hero if another section needs similar behavior.
- `Achievements.tsx` uses an alternating `translate-y` offset (even/odd index) on desktop only (`md:`) to create a diagonal-stagger card grid; this is a plain index-based CSS class swap, not a layout library.
- The education card in `Certifications.tsx` right-aligns CGPA (large, bold, accent-colored) and the date range (small, muted) as a separate block from the degree/school text — a deliberate layout choice, not a default `Card` behavior.

## Deployment

Static-friendly Next.js app intended for Vercel (zero-config) or GitHub Pages (requires adding `output: "export"` + `basePath` to `next.config.mjs` before building — see README for details). No environment variables are required.
