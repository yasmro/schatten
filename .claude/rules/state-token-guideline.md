# State Token Guideline

## Overview

This rule covers **two categories** of state tokens. They are deliberately
separated because their shape and consumer story differ.

| Category | Members | Shape | Consumed by |
|---|---|---|---|
| **Interactive state** | `error`, `success`, `warning`, `info`, plus `destructive` (action color, same primitive as `error`) | 4-token: `base` / `hover` / `foreground` / `subtle` | Form inputs (`isError`), notification surfaces (`Toast`, `Callout`, `Badge`, …) |
| **Non-interactive state** | `disabled`, `readOnly` | Custom: `disabled` = `surface` + `foreground` + `border`; `readOnly` = `surface` + `border` (no `foreground` — the value stays readable) | Form controls when they cannot be acted on (`disabled`) or are display-only (`readOnly`) |

Both categories live at the semantic layer. **Components must consume only
the semantic layer; never reference primitive scales directly.**

Each category has its own section below. The "Interactive state" section comes
first because it is the larger surface; the "Non-interactive state" section
comes after the interactive a11y audit.

## Three-layer hierarchy

Components consume **only Layer 2**. Never reference primitive scales (`vermillion-*`, `green-*`,
…) directly inside a component.

```
Layer 1: Primitive (raw OKLCH scales — same in light/dark)
   vermillion-*  green-*  amber-*  blue-*  ...

Layer 2: Semantic (meaning — light/dark mapping happens here)
   destructive ◀── vermillion ──▶ error
   success     ◀── green
   warning     ◀── amber
   info        ◀── blue (independent of the theme scale)

Layer 3: Components (consume semantic only)
   bg-error / text-error / border-error / ring-error / bg-error-subtle ...
```

## The 4-token shape

Every state defines exactly four tokens:

| Token | Role | Typical use |
|---|---|---|
| `base` | main color (saturated) | fills, borders, icons, text |
| `hover` | base's interactive sibling | hover/active state of `base` |
| `foreground` | on-`base` text/icon color | readable text atop `base` |
| `subtle` | faint tinted background | soft state surfaces (e.g. error input bg) |

The tokens form two natural treatment pairs:

- **Filled** — `bg-{state}` + `text-{state}-foreground`. Used for buttons, toasts, badges.
- **Soft** — `bg-{state}-subtle` + `text-{state}` (often + `border-{state}`). Used for error
  input backgrounds, info banners.

## `destructive` vs `error`

They share the **same primitive** (vermillion) so they look identical, but are **semantically
distinct**:

| | `destructive` | `error` |
|---|---|---|
| Meaning | An action with destructive intent | A state representing an error |
| Used by | Button(destructive) | Input/Textarea/Select/Radio/Checkbox/Switch (`isError`), Field error msg + required `*`, FieldSet error msg, Toast(error), Badge(error), Callout(error) |

If we ever decide error red ≠ destructive red, only the semantic mapping needs to change —
no component churn.

**Rule**: form components and notification components reference `error-*`. Action surfaces
reference `destructive-*`.

## `info` independence from the theme scale

`info` references `blue-*` directly rather than `theme-*`. Themes that retune the
theme scale (seasonal themes, custom brand themes) **must not** drift `info`'s
meaning. Keep `info` pinned to blue.

## Light / dark mapping

Each state shifts shades between modes:

| Mode | `base` | `hover` | `foreground` | `subtle` |
|---|---|---|---|---|
| Light | `*-600` | `*-700` | `paper-white` | `*-50` |
| Dark | `*-500` | `*-400` | `paper-white-inverted` | `*-900` |

The dark-mode `foreground = paper-white-inverted` (`#1a1a1a`) is intentional: in dark mode the
state `base` shifts brighter (e.g. `vermillion-500`), and dark text on a bright saturated
fill achieves higher WCAG contrast than white-on-bright. Verify visually in `Foundation/Color`
→ "Filled Treatments (a11y audit)" before introducing new state-driven UI.

## Adding a new component that needs state colors

1. **Reach for an existing semantic.** Don't introduce a new state semantic (e.g. `notice`,
   `caution`) unless you can articulate a meaning that `error / success / warning / info`
   genuinely cannot cover.
2. **Decide treatment**: filled (`bg + foreground`) or soft (`bg-subtle + base text`)?
   Components like Toast may support both via a variant.
3. **Always use semantic tokens.** Never hardcode `bg-vermillion-600` in a component.
4. **Audit contrast** by adding the new component to the `Filled / Subtle Treatments` story
   sections, or by toggling light/dark in your component's own story.

## Adding a new state semantic (rarely needed)

1. Add `--color-{state}`, `-hover`, `-foreground`, `-subtle` in `src/core/tokens/semantic.css`
   for `:root`, `@media (prefers-color-scheme: dark)`, and `.dark`.
2. Register all four in `@theme` inside `src/core/tokens/base.css` so Tailwind utilities
   (`bg-{state}`, `bg-{state}-subtle`, …) become available.
3. Add a subsection to `src/docs/Color.stories.tsx`.
4. Add rows to the "Filled Treatments" and "Subtle Treatments" audit sections.
5. Add a changeset (typically `minor` — additive feature).

## Non-interactive state tokens (`disabled` / `readOnly`)

`disabled` and `readOnly` are a separate category of state token. They do
**not** follow the 4-token shape and are not interchangeable with the
interactive states above.

### Semantic distinction

`disabled` and `readOnly` look superficially similar — neither is editable —
but the UX intent and the HTML semantics differ. Conflating them (e.g. by
fading both with `opacity-50`) is an anti-pattern the token system is
designed to prevent.

| | `disabled` | `readOnly` |
|---|---|---|
| Meaning | The control cannot be used at all | The value is informational; the control is static |
| Form submission | Value is **not** submitted | Value **is** submitted |
| Focus | Not focusable | Focusable (Tab order) |
| Visual direction | Muted / faded (cool gray) | Subtle / static (warm tint) |
| Foreground | Muted (`--color-foreground-disabled`) | Normal (`--color-foreground` — the value must remain readable) |

### Token shape (no `hover` slot)

There is no `hover` slot because these states *describe non-interactivity*.
Adding a hover token here would be semantically incoherent — by definition,
the user is not interacting.

```
disabled  : surface + foreground + border
readOnly  : surface + border
```

| Token | Light primitive | Dark primitive | Used as |
|---|---|---|---|
| `--color-surface-disabled` | `gray-100` | `gray-800` | Background of disabled controls |
| `--color-foreground-disabled` | `gray-500` | `gray-500` | Text / icon color of disabled controls |
| `--color-border-disabled` | `gray-200` | `gray-700` | Border of disabled controls |
| `--color-surface-readonly` | `alabaster-100` | `alabaster-800` | Background of readOnly controls |
| `--color-border-readonly` | `gray-200` | `gray-700` | Border of readOnly controls |

`foreground-disabled` is intentionally identical in light and dark — `gray-500`
reads as "muted but legible" against both `gray-100` and `gray-800`. The
symmetry is by design, not an oversight. WCAG exempts disabled UI from
contrast requirements, but Schatten still keeps ≥ ~5:1 against the
matching surface so the value remains legible to all users (rationale in
[docs/decisions/2026-05-non-interactive-state-tokens.md](../../docs/decisions/2026-05-non-interactive-state-tokens.md)).

### Cool vs warm — why two hue families

The disabled / readOnly surfaces sit at similar lightness levels (light: 0.96
OKLCH; dark: 0.27 OKLCH). They are differentiated by **hue family**, not
lightness: `gray-*` (saturation 0, cool by perception) for `disabled`,
`alabaster-*` (warm tint, chroma ≈ 0.005–0.01) for `readOnly`. This encodes
the "muted / faded" vs "subtle / static" direction at low chromatic cost.

When adding a future non-interactive state (e.g. `pending`, `indeterminate`),
preserve the principle: **express the new state through hue / chroma, not
through lightness shifts**, so the four-way visual identity stays legible at
matching weights.

### `border-readonly` ≡ `border-disabled` ≡ `border` (today)

In light mode all three resolve to `gray-200`; in dark mode `border-readonly`
and `border-disabled` both resolve to `gray-700`. They share primitives today
but **must continue to be referenced by their semantic name** in components,
so future re-tuning lands at one place. This mirrors the `destructive` /
`error` policy (same primitive, distinct semantic name).

### Adding a new non-interactive state

1. Decide the token shape — non-interactive states are rarely "filled"
   surfaces, so the `subtle` and `hover` slots usually do **not** apply.
   Default shape: `surface` + (`foreground`?) + (`border`?).
2. Add to `semantic.css` in all three blocks (`:root`, `@media (prefers-color-scheme: dark)`,
   `.dark`).
3. Register in `base.css` `@theme`.
4. Add a subsection to `src/docs/Color.stories.tsx` under "Non-Interactive
   States" with a side-by-side preview against the existing non-interactive
   states (`disabled` / `readOnly`).
5. Document the rationale in [docs/decisions/](../../docs/decisions/) — what
   the new state *means* (HTML semantics, form-submission behavior, focusability)
   matters more than what it looks like.
6. Add a changeset (typically `minor` — additive feature).
