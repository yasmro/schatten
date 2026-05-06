---
'@yasmro/schatten': minor
---

Extend state semantic colors (`success` / `warning` / `info`) to Badge and
Text — finishing the rollout that began with PR #59 (state tokens) and
continued with Toast and Callout.

- **Badge**: adds `success`, `warning`, `info` variants alongside the
  existing `destructive` (filled treatment, mirroring `destructive`'s
  shape). Intended for status tags such as "Active" / "Pending" /
  "Failed". `destructive` remains the action-oriented red and is
  unchanged.
- **Text**: extends the `color` prop along three dimensions:
  - **Foreground hierarchy** — adds `subtle` for tertiary text (faintest
    of `default` / `muted` / `subtle`), so callsites can stop reaching
    for ad-hoc `text-foreground-subtle` className overrides.
  - **State** — adds `error`, `success`, `warning`, `info` for inline
    status text (form errors, success notes, beta callouts).
  - **Inverted hierarchy** — adds `inverted`, `inverted-muted`, and
    `inverted-subtle` (resolving to `text-inverse-foreground[-muted]
    [-subtle]`) for placing Text on saturated surfaces such as a solid
    Toast / Callout or a primary-colored fill. Mirrors Button's
    `inverted` naming and the `default` / `muted` / `subtle` shape.

### Token corrections

The existing `--color-foreground-subtle` token was previously mapped to
`--ink-medium`, which made it visually *more* prominent than
`--color-foreground-muted` despite the docs labelling it as "tertiary
text". This release re-maps `foreground-subtle` to a new
`--ink-subtle` primitive (`sumi-300` light / `alabaster-600` dark) so
the hierarchy is consistent: `default` > `muted` > `subtle` in both
modes. No component currently consumed `text-foreground-subtle`, so the
visible impact is limited to the Color docs page.

Two new semantic tokens — `--color-inverse-foreground-muted` and
`--color-inverse-foreground-subtle` — back the new Text inverted
colors.

No breaking changes — every addition is additive. Form components
(Input/Textarea/Select/Radio/Checkbox/Switch) already handle `error`
state via `isError` and are unchanged. A future Icon component should
follow the same pattern.
