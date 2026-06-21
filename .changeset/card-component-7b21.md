---
'@yasmro/schatten': minor
---

Add `Card` — a bordered, subtly-elevated surface for grouping content
(dashboard widgets, list items, settings panels). A compound primitive (no
Radix) composed from `CardHeader` / `CardTitle` / `CardDescription` /
`CardContent` / `CardFooter`. Single neutral surface (no variant axis); square
corners; carries no role by default (pass `role="region"` + `aria-labelledby`
for a labelled landmark). Apply the surface to your own element with
`cardVariants()`.

Card is the first consumer of the `--shadow-card` semantic token (previously
define-only).

CSS API: new `.st-card` / `.st-card__header` / `.st-card__title` /
`.st-card__description` / `.st-card__content` / `.st-card__footer` classes,
also published per-component at `@yasmro/schatten/css/card`.
