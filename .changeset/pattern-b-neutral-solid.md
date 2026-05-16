---
'@yasmro/schatten': minor
---

feat(lv1): define `variant="neutral" appearance="solid"` for Badge / Callout / Toast.

Completes [#204](https://github.com/yasmro/schatten/issues/204) Phase 1a — adds
the previously-undefined `neutral + solid` combination so consumers can render
"muted-but-emphatic" chips / banners / toasts (archived tags, draft state,
informational pings) without falling back to primitive color classes.

**Visual choice**: `neutral + solid` uses `--color-foreground-muted` as the
surface and `--color-inverted-foreground` as the text. This is **visually
distinct from `accent + solid`** — neutral uses a cool mid-tone gray that
swaps cleanly with light/dark mode, while accent uses `--color-solid`
(alabaster, warm-toned). Designers can pick:

- `<Badge variant="accent" appearance="solid">` — currently alabaster, will
  become vermillion when [#185](https://github.com/yasmro/schatten/issues/185)
  lands (v0.8.0)
- `<Badge variant="neutral" appearance="solid">` — cool gray, semantic
  "no state, but emphatic" — available now

Affected:
- `src/variants/{badge,callout,toast}.ts` — new compoundVariant entries
- TSDoc Coverage notes on Badge/Callout/Toast updated
- Storybook `SolidTreatments` stories now include the neutral case
- `Foundation/Toast` playground matrix has one fewer "·" cell (neutral + solid)
- VRT snapshots regenerated for the affected stories

Not yet defined (tracked in #204 Phase 1b, blocked on #185):
- `accent + subtle`
- `accent + outline` (Badge only)
