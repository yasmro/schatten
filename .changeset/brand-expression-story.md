---
'@yasmro/schatten': minor
---

feat(docs): add `Foundation/BrandExpression` Storybook story — one-screen synthesis of brand color across Pattern A / Pattern B / Mode / Special.

Implements the recommended deliverable of the v0.8.0 brand-expression release
([#206](https://github.com/yasmro/schatten/issues/206), orchestrating the
now-closed [#181](https://github.com/yasmro/schatten/issues/181) /
[#185](https://github.com/yasmro/schatten/issues/185)). With the 藍 (indigo)
primitive scale and the brand-named semantic tokens (`--color-vermillion` /
`--color-indigo`) in place, this page makes the brand surface visible in a
single viewport.

**Stories** (under `src/docs/foundations/BrandExpression.stories.tsx`)

- **Overview** — narrative of the two channels brand color reaches the UI
  through: brand-named tokens (`bg-vermillion` / `bg-indigo`, opt-in emphasis)
  and the Special theme layer (`--color-theme-*`). Pattern A (Button) and
  Pattern B (Badge / Callout) render alongside, each in light and dark.
- **Component Matrix** — full Pattern A and Pattern B vocabulary (every Button
  role, every Badge / Callout tone × appearance) under both Modes, as a
  reference grid complementing the Overview narrative.

**VRT** — `src/docs/foundations/BrandExpression.vrt.spec.ts` ships 2 baselines
(`brand-expression-overview`, `brand-expression-component-matrix`). Snapshot
filenames are prefixed because the `src/docs/foundations/__snapshots__/`
directory is shared with `ThemeAudit`, which owns the unprefixed
`overview.png`.

**Implementation note** — each combination is rendered in a scoped wrapper:
the `dark` class drives Mode-owned tokens and `data-theme` drives the Special
theme scale, so several Mode × Special contexts coexist on one page. Seasonal
palettes are picked up by transforming the production `themes.css`
(`:root[data-theme=…]` → `.brand-expression-cell[data-theme=…]`) via Vite's
`?raw` import — the same zero-parallel-CSS technique as `ThemeAudit`.

**Consumer impact** — none. Storybook-only docs surface; nothing changes in
`dist/` or the public component / token APIs.
