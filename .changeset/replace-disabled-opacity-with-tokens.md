---
'@yasmro/schatten': minor
---

refactor(lv1): replace `opacity-50` disabled treatment with semantic disabled tokens (system-wide sweep)

Adopts the non-interactive state tokens introduced in #197
(`--color-surface-disabled`, `--color-foreground-disabled`,
`--color-border-disabled`) across all seven lv1 form / action components
that previously expressed disabled via the cross-cutting
`cursor-not-allowed opacity-50` pattern.

`cursor-not-allowed` is preserved. `opacity-50` is removed entirely
from the lv1 surface — the disabled look now flows through the same
semantic token layer as every other Schatten chrome decision, instead
of a global alpha multiplier.

## Per-component mapping

| Component | Disabled treatment now applies |
|---|---|
| `Input` | wrapper: `bg-surface-disabled` + `border-border-disabled` + `text-foreground-disabled`; `<input>`: `text-foreground-disabled` |
| `Textarea` | `bg-surface-disabled` + `border-border-disabled` + `text-foreground-disabled` |
| `Select` (trigger) | `bg-surface-disabled` + `border-border-disabled` + `text-foreground-disabled` |
| `Select` (item) | `text-foreground-disabled` only — items are rows inside a popup; recolouring the surface would make disabled items more prominent than enabled ones |
| `Checkbox` | Root: `bg-surface-disabled` + `border-border-disabled` + `text-foreground-disabled`; indicator switched to `text-current` so the check-mark inherits the muted foreground |
| `Radio` | Root: same triple as Checkbox; indicator dot switched to `bg-current` so it inherits the muted foreground |
| `Switch` | Root: `bg-surface-disabled` + `border-border-disabled`, doubled with `disabled:data-[state=checked]:*` so the disabled tone wins over the checked tone; thumb: `group-disabled:bg-foreground-disabled` (also doubled for checked) |
| `Button` (filled — `primary`, `destructive`) | `bg-surface-disabled` + `text-foreground-disabled` |
| `Button` (`secondary`) | `border-border-disabled` + `text-foreground-disabled` |
| `Button` (`tertiary`, `inverted`, `link`) | `text-foreground-disabled` |

External-label adjacencies (`<label>` rendered by `Checkbox` /
`Radio` / `Switch` alongside the control) also moved from
`opacity-50` to `text-foreground-disabled` for consistency.

## Why

- **Semantic over alpha.** `opacity-50` is a blunt instrument: it
  dims everything in the subtree uniformly, including focus rings,
  borders, and any nested icons. With tokens, each piece of the
  control reads its disabled colour from a named slot, so designers
  and theme authors can retune the disabled aesthetic at one place.
- **Theme-safe.** The five non-interactive tokens are pinned to the
  Mode axis (see [theme-architecture.md](.claude/rules/theme-architecture.md))
  — Specials cannot override them. A seasonal palette that brand-tints
  the disabled state would be semantically wrong, and the token system
  enforces this mechanically.
- **Better dark-mode behaviour.** A 50%-alpha element on a dark
  background loses too much luminance contrast against the surround.
  Disabled-state tokens use mode-specific primitives, so the muted
  feel is intentional in both Modes rather than being whatever
  alpha-50 happens to produce.

## Priority over `isError`

When a form control is both `disabled` and `isError`, the disabled
visual now wins via Tailwind's `disabled:` modifier specificity
(`:disabled` pseudo-class adds one specificity over the unscoped
`bg-error-subtle` / `border-error`). This matches the user's mental
model: an unusable control should not advertise validation state.

## VRT impact

Disabled-state baselines regenerated for `Button`, `Input`, `Select`,
`Switch`, `Textarea`, and `FieldSet` (the latter renders disabled
child inputs). `Checkbox` and `Radio` disabled snapshots came out
pixel-identical to their old `opacity-50` baselines under the
existing 1% diff threshold — the visual delta on a 5-pixel control
is below that bound. `Button`'s `loading-*` snapshots also
regenerated because `isLoading` internally sets `disabled`.

Closes #182. Depends on #197 (token definitions).
