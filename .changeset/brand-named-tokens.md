---
'@yasmro/schatten': minor
---

CSS API: introduce brand-named semantic tokens `--color-vermillion` (朱) and
`--color-indigo` (藍), each with a `-foreground` pair. They expose the two
Schatten brand colors at the semantic layer — naming the *color itself* rather
than a meaning — so consumers and internal code reference `--color-vermillion`
instead of the `--vermillion-*` primitive scale. Registered in the Tailwind
`@theme`, so `text-vermillion` / `bg-vermillion` / `text-indigo` / `bg-indigo`
utilities are available.

Both brand colors share one shade rule: `-600` in light, `-400` in dark, with
the `-foreground` pair `paper-white` (light) / `paper-white-inverted` (dark).
This is the only pair where every `*-foreground`-on-base solid pairing clears
WCAG AA for normal text in both hues — vermillion 4.86 (light) / 6.84 (dark),
indigo 7.03 (light) / 5.73 (dark). A 1-step shift (`-600`/`-500`) would fail
indigo dark and `-500`/`-400` would fail vermillion light, because the two hue
ramps differ; the AA-safe shade is therefore mode-driven, not 1-step-driven.

BREAKING: the `--color-accent` / `--color-accent-foreground` semantic tokens are
removed, and `Text`'s `color` prop no longer accepts `"accent"`. With the
Pattern B `accent` tone already gone (#205), `--color-accent`'s only consumer
was `Text` — rather than keep a redundant role token aliasing vermillion, brand
color on `Text` now goes through the new brand-named tokens directly.

Migration:

- `<Text color="accent">` → `<Text color="vermillion">`. `Text` also gains
  `color="indigo"` for the second brand color.
- Replace `bg-accent` / `text-accent` / `var(--color-accent)` (and the
  `-foreground` variants) with the `vermillion` equivalent.
- The `tokens` export drops `tokens.color.accent` / `tokens.color.accentForeground`;
  use `tokens.color.vermillion` / `.vermillionForeground` (or `.indigo` /
  `.indigoForeground`) instead.

This is settled now (pre-1.0) deliberately: `api-stability.md` freezes CSS
variable names as BREAKING from v1.0.0, so the brand-named tokens land in
v0.8.0 to bake before the contract goes live. Closes #185.
