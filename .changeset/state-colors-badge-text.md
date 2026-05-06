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
- **Text**: adds `error`, `success`, `warning`, `info` to the `color`
  prop. Use these for inline status text (form errors, success notes,
  beta callouts) instead of ad-hoc `className="text-error"` strings.
  Also adds `inverted` (resolves to `text-inverse-foreground`) for
  placing Text on saturated surfaces — e.g. inside a solid Toast or
  Callout, or on a primary-colored fill. Mirrors Button's `inverted`
  variant naming.

No breaking changes — every addition is additive. Form components
(Input/Textarea/Select/Radio/Checkbox/Switch) already handle `error`
state via `isError` and are unchanged. A future Icon component should
follow the same pattern.
