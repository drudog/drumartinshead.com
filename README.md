# drumartin-portfolio

Personal portfolio for Dru Martin, product design leader specializing in healthcare digitalization.

Replaces [drumartin.figma.site](https://drumartin.figma.site).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19.2](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [MDX](https://mdxjs.com) via [`@next/mdx`](https://www.npmjs.com/package/@next/mdx)
- [`next-themes`](https://github.com/pacocoursey/next-themes) for dark mode
- [`motion`](https://motion.dev) for animation
- [`lucide-react`](https://lucide.dev) for icons

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve production build
```

## Structure

```
app/
  page.tsx           # home
  about/             # /about
  contact/           # /contact
  work/[slug]/       # dynamic case study route, renders MDX
components/
  nav, hero, theme-toggle, case-study-card, case-study-filter, case-study-toc, testimonial, footer
  mdx/               # custom MDX components: Callout, StatBlock, PullQuote, ImageGallery
content/             # case study MDX (one file per slug)
lib/
  case-studies.ts    # case study manifest (slug, title, tags, summary, hero)
public/
  images/work/{slug}/hero.svg
  resume.pdf         # (drop in)
mdx-components.tsx   # global MDX components map (Next.js convention)
```

## Adding / editing case studies

1. Add an entry to `lib/case-studies.ts` (slug, title, tags, hero path…).
2. Create `content/{slug}.mdx` with the body. Use the custom components:
   - `<Callout variant="info|warn|insight">…</Callout>`
   - `<StatBlock><Stat value="…" label="…" /></StatBlock>`
   - `<PullQuote attribution="…">…</PullQuote>`
   - `<ImageGallery items={[{ src, alt, caption }]} columns={2|3} />`
3. Drop a hero image at `public/images/work/{slug}/hero.*` and update the manifest path.

## Theme

Tokens live in `app/globals.css` as CSS variables under `@theme`. Dark mode flips them under `.dark`. Edit there, not in components.

## Deploy

Vercel: `vercel` from project root for a preview, `vercel --prod` for prod.
