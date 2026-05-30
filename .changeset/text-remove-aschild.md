---
'@yasmro/schatten': minor
---

BREAKING: `<Text>` no longer exposes the `asChild` prop. Text's
polymorphism is already covered by two non-overlapping escape hatches —
`as` (a closed enum of semantic tags `p` / `span` / `h1`–`h6`) for swapping
the element, and `textVariants()` for applying Text's classes to an
arbitrary element — so `asChild` was redundant (it merged nothing beyond
`className` + spread DOM props, which `textVariants()` does with full
typing).

Migration: replace `<Text asChild><a href="…">…</a></Text>` with
`<a href="…" className={textVariants({ /* variant, size, color, … */ })}>…</a>`.
`textVariants` is exported from `@yasmro/schatten/variants`.

Public `asChild` is now `Button` only. See `component-api-conventions.md`
§"asChild vs `*Variants()` — which to reach for" for the boundary.
