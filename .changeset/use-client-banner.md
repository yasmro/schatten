---
'@yasmro/schatten': patch
---

SSR (Next.js App Router) support: the React component build now carries a
`'use client'` directive at the top of every emitted bundle.

Why: `src/` declares zero `'use client'` directives, so importing Schatten
components from a Next.js App Router **Server Component** failed the build —
the bundled output relies on client-only React features (hooks, context,
Radix event wiring) that a Server Component cannot run.

The directive is injected via tsup's `banner.js` on the React build group
only. `dist/components/index.{js,cjs}` and `dist/components/lv1/index.{js,cjs}`
(and their shared chunk) now start with `'use client';`. The framework-agnostic
build groups — `variants` / `tokens` / `themes/seasonal` — are intentionally
left untouched so non-React consumers (Astro, plain CSS) are not marked
client-only. Type definitions (`.d.ts`) are unaffected.
