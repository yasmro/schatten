---
'@yasmro/schatten': patch
---

Add integration-level VRT for the `Foundation/CSS API` page and a separate
dist-artifact verification spec — **and fix a `dist/schatten.css` cascade
bug the new VRT immediately surfaced**.

**Fix**: `src/styles/entry.css` was declaring `@layer reset, tokens,
components, utilities;` without naming Tailwind v4's own `theme` and
`base` layers. Tailwind's `@import "tailwindcss"` then registered
`theme` / `base` *after* schatten's layers in cascade order, putting
the preflight reset `button { background-color: #0000 }` *higher* in
priority than `@layer components { .st-btn--primary { … } }`. A
consumer importing `@yasmro/schatten/schatten.css` and writing
`<button class="st-btn st-btn--primary">` got an *un-styled* button.
Declaring `@layer theme, base, reset, tokens, components, utilities;`
explicitly puts preflight at the lowest priority where it belongs.
The integrated `dist/schatten.css` now matches the per-component
`dist/css/<slug>.css` rendering for Button, Dialog footer, and every
other `<button>`-rooted primitive. Per-component subpath snapshots
were unaffected — they bypass Tailwind preflight entirely.

**New test infrastructure**:

- `src/docs/__fixtures__/cssApiSamples.html.ts` — string-only payload
  (vanilla HTML + scaffolding CSS) consumed by both the parity story
  and the dist VRT spec. Splitting the React tree out keeps the
  Playwright Babel pipeline from mis-parsing `Component.css`
  side-effect imports as TypeScript decorators.
- `src/docs/__fixtures__/cssApiSamples.tsx` — React-side companion
  with `<ReactSamples />` covering the 14 区 A/B components. Re-exports
  the string payloads so the story has one import site.
- `src/docs/CSSApiParity.stories.tsx` — side-by-side React ↔ vanilla
  HTML comparison covering all 18 lv1 components. 区 C/D
  Tooltip / Select / Dialog / Toast show vanilla-only because their
  React equivalents portal-mount.
- `src/docs/CSSApi.vrt.spec.ts` — pins the `Reference` and
  `ParityComparison` stories in light + dark.
- `src/docs/CSSApiDist.vrt.spec.ts` — loads the built
  `dist/schatten.css` and each per-component `dist/css/<slug>.css`
  subpath (#291) via `page.setContent()` and verifies they render
  identically to source-mode. Closes the #291 DoD #4 promise
  ("import the subpath and the styles apply") with a real visual
  contract — and is what surfaced the entry.css cascade bug above.
- `src/docs/__snapshots__/` — 42 light/dark baselines.
- `scripts/ensure-dist.mjs` + `pnpm test:vrt:dist` — pre-run check
  that `dist/` artifacts exist before the dist VRT runs locally.
- `.github/workflows/vrt.yml` — `pnpm build` is now prepended to the
  VRT job so CI never runs the dist spec against a stale dist.
