---
'@yasmro/schatten': minor
---

Add `<Icon>` (lv1) — a thin wrapper around lucide-react icons that normalizes
sizing (`sm`/`md`/`lg`) and color (a `color` prop whose vocabulary mirrors
`Text` — foreground tiers, state, inverted, and brand tokens; defaults to
`inherit`), and applies a11y defaults: `aria-hidden="true"` for decorative
icons, and `role="img"` when a label (`aria-label` / `aria-labelledby`) is
given. Also exports `iconVariants` from `@yasmro/schatten/variants`.
