---
'@yasmro/schatten': minor
---

CSS API: introduce brand-named semantic tokens `--color-vermillion` (朱) and
`--color-indigo` (藍), each with a `-foreground` pair. They expose the two
Schatten brand colors at the semantic layer — naming the *color itself* rather
than a meaning — so consumers and internal code reference `--color-vermillion`
instead of the `--vermillion-*` primitive scale. Registered in the Tailwind
`@theme`, so `text-vermillion` / `bg-vermillion` / `text-indigo` / `bg-indigo`
utilities are available. `--color-vermillion` maps to `vermillion-600` (light)
/ `vermillion-500` (dark) — the documented brand anchor — and `--color-indigo`
to `indigo-500` / `indigo-400`. The `-foreground` pair is `paper-white` (light)
/ `paper-white-inverted` (dark). All four `*-foreground`-on-base solid pairings
clear WCAG AA for normal text (vermillion 4.86 light / 4.74 dark, indigo 4.78
light / 5.73 dark).

BREAKING: the `--color-accent` / `--color-accent-foreground` semantic tokens are
removed, and `Text`'s `color` prop no longer accepts `"accent"`. With the
Pattern B `accent` tone already gone (#205), `--color-accent`'s only consumer
was `Text` — rather than keep a redundant role token aliasing vermillion, brand
color on `Text` now goes through the new brand-named tokens directly. Migrate
`<Text color="accent">` → `<Text color="vermillion">`; replace any
`bg-accent` / `text-accent` / `var(--color-accent)` usage with the
`vermillion` equivalent. `Text` also gains `color="indigo"` for the second
brand color.

This is settled now (pre-1.0) deliberately: `api-stability.md` freezes CSS
variable names as BREAKING from v1.0.0, so the brand-named tokens land in
v0.8.0 to bake before the contract goes live. Closes #185.
