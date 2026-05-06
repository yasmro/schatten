---
'@yasmro/schatten': minor
---

Restructure Badge around state semantics, and extend state colors to
Text — finishing the rollout that began with PR #59 (state tokens) and
continued with Toast and Callout.

### Badge — restructured (BREAKING)

Badge now mirrors Toast / Callout's two-axis API:

- **`variant`**: `default` | `success` | `error` | `warning` | `info`
  (state semantic, default `default`)
- **`treatment`**: `subtle` | `solid` | `outline` (default `subtle` —
  picked because soft state tags blend better in list rows and tables;
  reach for `solid` when a Badge needs to stand out)
- **`size`**: unchanged (`sm` | `md` | `lg`, default `md`)

Badge is now state-oriented — there is no `destructive` variant. Use
`<Badge variant="error">` for "failed/invalid" tags. For destructive
*actions*, continue using `<Button variant="destructive">`.

**Migration:**

| Before                                | After                                                  |
| ------------------------------------- | ------------------------------------------------------ |
| `<Badge>` / `variant="primary"`       | `<Badge treatment="solid">` (filled neutral)           |
| `<Badge variant="secondary">`         | `<Badge>` (default+subtle is the new default)          |
| `<Badge variant="outline">`           | `<Badge treatment="outline">`                          |
| `<Badge variant="destructive">`       | `<Badge variant="error" treatment="solid">`            |
| `<Badge variant="success">` (etc.)    | `<Badge variant="success" treatment="solid">` for the  |
|                                       | old filled look, or omit `treatment` for the new soft  |
|                                       | default                                                |

The new shape unlocks combinations that weren't previously possible —
e.g. `variant="error" treatment="subtle"` for a soft "Failed" tag in
list rows, or `variant="success" treatment="outline"` for an ambient
indicator.

### Text — extended

Extends the `color` prop along three dimensions:

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
modes.

Two new semantic tokens — `--color-inverse-foreground-muted` and
`--color-inverse-foreground-subtle` — back the new Text inverted
colors.

### Knock-on fix

The `Button` `link` variant previously faded to `text-foreground-subtle`
on hover. Because the corrected `subtle` is now a much fainter tier,
that hover felt like the text was disappearing. Switched to
`text-foreground-muted` and replaced the abrupt `hover:no-underline`
with `hover:decoration-transparent` so the underline animates out
alongside the existing color transition.
