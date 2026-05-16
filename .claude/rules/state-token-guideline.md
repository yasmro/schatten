# State Token Guideline

## Overview

State semantics (`error`, `success`, `warning`, `info`) and the `destructive` action color
follow a unified 4-token shape so that every component that needs to express "this is a state"
has a consistent, predictable surface to draw from.

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
