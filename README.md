# Soham Ghosal — Portfolio

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · shadcn/ui-style components.

All content is data-driven from [data/profile.ts](data/profile.ts) — edit that file to update anything on the site.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel (recommended)

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: Next.js (auto-detected). No env vars required.
4. Deploy.

## Deploy to GitHub Pages (static export)

GitHub Pages only serves static files, so:

1. In `next.config.mjs`, add `output: "export"` and `basePath: "/<your-repo-name>"` to the config object.
2. Build: `npm run build` (outputs to `/out`).
3. Deploy the `/out` folder via the `gh-pages` branch or a GitHub Actions workflow (`actions/deploy-pages`).

## Contact section

`components/Contact.tsx` shows your email, phone, and location as direct `mailto:`/`tel:` links plus GitHub/LinkedIn — no form, no backend, nothing to configure.

## Project structure

```
app/            layout, page, global styles
components/     section components + ui primitives
data/profile.ts single source of truth for all content
lib/utils.ts    cn() className helper
public/         avatar.jpg, resume PDF, OG image (add your own)
```
