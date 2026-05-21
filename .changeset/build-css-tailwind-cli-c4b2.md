---
'@yasmro/schatten': minor
---

CSS API: `dist/schatten.css` is now compiled by `@tailwindcss/cli` from a
dedicated entry (`src/styles/entry.css`), replacing the previous
`lightningcss --bundle src/schatten.css` pipeline. This lays the
infrastructure for the `.st-*` component classes that #154 sweep PRs add
in v0.9.0 — those rules will live under `@layer components` inside the
same entry.

Highlights:

- New build entry `src/styles/entry.css`:
  - `@import "tailwindcss" source(none);` (no auto source scanning — the
    dist intentionally ships only static rules; the Storybook entry at
    `src/styles/globals.css` keeps its source-scanning behaviour).
  - Declares the canonical `@layer reset, tokens, components, utilities;`
    order from `.claude/rules/css-api.md`, so sweep PRs that add
    `@layer components { .st-* … }` rules land at the right cascade tier.
  - Imports tokens (`base.css`), default + seasonal themes, and **all
    four** existing component CSS files (Spinner, Toast, **Tooltip**,
    **Dialog**) — Tooltip and Dialog were previously absent from
    `dist/schatten.css` and only reached the page via React `.tsx`
    side-effect imports, leaving vanilla-HTML consumers without their
    enter/exit animations. That gap is closed here.
- `package.json#scripts.build:css`: `lightningcss src/schatten.css …` →
  `tailwindcss -i src/styles/entry.css -o dist/schatten.css --minify`.
- `devDependencies`: `+ @tailwindcss/cli ^4.2.2`, `- lightningcss-cli`,
  `- lightningcss`. `pnpm.onlyBuiltDependencies` (package.json) is
  removed and `pnpm-workspace.yaml#onlyBuiltDependencies` drops
  `lightningcss-cli` (no native postinstall is needed anymore).
- `src/schatten.css` is removed in favour of `src/styles/entry.css`.
- `.size-limit.json` CSS budget bumped from 5 KB → 50 KB to accommodate
  the wider token surface this entry now bundles and to leave headroom
  for the `.st-*` rules sweep-1..7 will add. Current dist size:
  ~32 KB minified.

Component / lv1 / public CSS class API: unchanged. This sub-issue
(#264, part of #154) only swaps the build pipeline and closes the
Tooltip / Dialog import gap; the `.st-*` class API itself lands in the
sweep PRs that follow.
