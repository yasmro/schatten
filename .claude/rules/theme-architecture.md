# Theme Architecture Guideline

## Overview

Schatten's theming is modelled as **two independent axes** that compose at
runtime:

- **Mode** — exclusive (`light` / `dark`). Owns the base layer: surfaces,
  foregrounds, borders.
- **Special** — cumulative (`seasonal-*`, `event-*`, `custom-*`). Owns the
  expressive layer: `primary`, `accent`, and other "characteristic" tokens.

The two axes meet at the **semantic token layer** (`src/core/tokens/semantic.css`).
Components keep referencing the same semantic names (`bg-primary`,
`text-foreground`, …) regardless of which Mode + Special combination is
active — they don't need to know.

This rule documents the model itself, the cascade, the allowlist convention,
and how the DOM is annotated. It is the **architectural counterpart** to
[state-token-guideline](state-token-guideline.md), which covers the *value
shape* of state tokens (`error`/`success`/`warning`/`info`/`destructive`,
each as `base`/`hover`/`foreground`/`subtle`). Where state-token-guideline
says "every state token has these four slots", this rule says "every theme
fits into one of these two axes and overrides only the tokens it owns".

## Two-axis model

```
Axis 1  Mode     (exclusive)   light  |  dark
Axis 2  Special  (cumulative)  seasonal-*  +  event-*  +  custom-*
                               each Special declares an allowlist of tokens
                               it may override
```

**Exclusive** means exactly one Mode is active at a time (`light` xor `dark`).
**Cumulative** means zero or more Specials can stack — a seasonal palette
plus a co-branded event accent, for example. The cascade resolves conflicts
deterministically (see below), but in practice well-behaved Specials don't
fight because their allowlists don't overlap.

### Mode owns the base layer

| Concern | Example tokens |
|---|---|
| Surface / background | `--color-background`, `--color-surface`, `--color-surface-hover` |
| Foreground tiers | `--color-foreground`, `--color-foreground-muted`, `--color-foreground-subtle` |
| Inverted foreground tiers | `--color-inverted-foreground*` |
| Borders | `--color-border`, `--color-border-strong` |
| Focus ring | `--color-ring`, `--color-ring-offset` |
| State remapping for dark | `--color-error*`, `--color-success*`, `--color-warning*`, `--color-info*`, `--color-destructive*` (shade shift between light and dark) |

Rule of thumb: anything that needs to flip *shade* between light and dark
belongs to Mode.

### Special owns the expressive layer

| Concern | Example tokens |
|---|---|
| Primary scale | `--color-primary-50` … `--color-primary-950` |
| Accent (when a Special wants to retune it) | `--color-accent`, `--color-accent-foreground` |

Rule of thumb: anything that expresses *brand character* — seasonality, an
event identity, a customer's palette — belongs to Special.

### Tokens neither axis touches

A few tokens are pinned by intent and **must not** be moved by either axis:

- `--color-info-*` references `blue-*` directly. Themes that retune
  `primary` must not drift `info`'s meaning. See
  [state-token-guideline](state-token-guideline.md#info-independence-from-primary).
- Primitives (`--vermillion-*`, `--green-*`, `--blue-*`, …) are theme-agnostic
  by definition and live one layer below semantics.

## Cascade

Two mechanisms decide which declaration wins: **CSS specificity** and
**source order** (later wins on a tie). The model leans on both:

- `:root[data-season=...]` and `:root[data-event=...]` each combine a
  pseudo-class with an attribute selector → specificity `(0,2,0)`.
- `:root` alone → `(0,1,0)`. `.dark` (or any single class) → `(0,1,0)`.
- Therefore **any single-attribute Special selector beats both `:root`
  and `.dark`** on specificity alone. Specials win over Mode by the
  cascade rules, not by load order luck.
- Between Specials of different categories (e.g. `[data-season]` vs
  `[data-event]`), specificity is identical → **source order decides**.

The intended source order, from earliest (lowest priority) to latest
(highest):

```
1.  primitives.css                       — raw OKLCH scales
2.  semantic.css :root                   — base semantic tokens (light)
3.  semantic.css .dark / @media dark     — Mode override
4.  themes/default/colors.css            — Special: default (Mode-neutral primary)
5.  themes/seasonal/themes.css           — Special: seasonal (data-season)
6.  themes/event/...                     — Special: event (data-event)         [v0.7.0+]
7.  themes/custom/...                    — Special: custom (data-theme)        [v0.7.0+]
```

Effective precedence at runtime:

```
Special (specificity beats Mode; ties broken by load order)
  >  Mode (.dark beats :root by load order)
  >  base semantic
```

**Why flat specificity between Specials, not stacked selectors?** Stacking
Specials with progressively more specific selectors
(`[data-season][data-event]`, …) would couple the cascade to combinatorial
selector engineering. Keeping every Special's selector at the same
specificity tier and relying on **load order + allowlist** is simpler,
cheaper to debug, and survives a thousand Specials without selector
explosion.

**Specials are Mode-agnostic by default.** A `:root[data-season=...]` rule
applies the same values in light *and* dark — the existing seasonal
palettes are designed to be Mode-neutral hues that sit atop whatever
surface/foreground Mode is currently active. If a future Special needs
*different* shades in dark mode, it must declare both selectors:

```css
:root[data-season="winter-deep"]  { --color-primary-500: oklch(...); }
.dark[data-season="winter-deep"]  { --color-primary-500: oklch(...); }
```

The latter has specificity `(0,3,0)` and beats both `.dark` alone and the
plain Special selector, giving a deterministic dark-mode-specific value
without disturbing the light-mode case.

## Allowlist mechanism (design — implementation in v0.7.0)

A Special theme declares *which tokens it is allowed to override*. Tokens
outside the allowlist are owned by Mode (or by another Special). The
allowlist is a contract — it makes the partition between axes explicit and
testable.

```ts
// Design sketch — actual API lands in v0.7.0
export const springEarlyTheme = {
  name: 'spring-early',
  axis: 'special',
  category: 'seasonal',
  allowedTokens: ['--color-primary-*'],
  // Everything outside this list (foregrounds, surfaces, state colors, info)
  // belongs to Mode or another Special.
} as const
```

What the allowlist will enable, once implemented:

- **Build-time lint**: scan each `themes/<special>/*.css` and fail if it
  writes a token that's not in its `allowedTokens`. Prevents accidental
  bleed from a seasonal palette into surfaces/foregrounds.
- **Conflict detection**: when two Specials are layered, fail (or warn) if
  their allowlists intersect. Forces a deliberate decision about who owns
  which token rather than silent last-wins.
- **Audit output**: surface the effective token-by-token attribution in
  Storybook (Foundation → Theme Audit), so designers can see "this colour
  came from `seasonal:spring-early`".

Until v0.7.0 ships the enforcement, **treat the allowlist as a hand-checked
convention**: when authoring a new Special, write the tokens it touches at
the top of the CSS file as a comment, and only touch those.

## DOM application

Two channels, one per axis:

| Axis | Selector | Where it's set |
|---|---|---|
| Mode (light) | `:root` (implicit default) | nothing to set; OS-level dark mode honoured via `@media (prefers-color-scheme: dark)` |
| Mode (dark, explicit) | `.dark` on `<html>` | by a theme switcher (e.g. Storybook globals, app-level setting) |
| Special (seasonal) | `[data-season="<name>"]` on `<html>` | `applySeasonTheme()` in [`src/themes/seasonal/index.ts`](../../src/themes/seasonal/index.ts), or SSR via `getSeasonAttribute()` |
| Special (event) — v0.7.0+ | `[data-event="<name>"]` on `<html>` | TBD |
| Special (custom) — v0.7.0+ | `[data-theme="<name>"]` on `<html>` | TBD |

**One attribute per Special category.** Each category gets its own data
attribute namespace (`data-season`, `data-event`, `data-theme`) rather than
overloading a single `data-theme`. This keeps "which seasonal palette is
active" and "which event identity is active" independently queryable and
avoids string-parsing a composite value.

**Why `<html>` and not `<body>`.** Storybook, Tailwind v4 `dark:`, and most
SSR frameworks already key off `<html class="...">`. Putting Mode and
Special on the same element keeps the cascade predictable and means a
single attribute mutation is enough to retheme the whole tree.

## Existing seasonal themes — current vs. new model

The eight seasonal palettes in [`src/themes/seasonal/themes.css`](../../src/themes/seasonal/themes.css)
already follow the Special-axis pattern in practice: each overrides only
`--color-primary-*`. The table below restates that contract in the new
model so future authors can replicate it.

| Theme | Hue (OKLCH) | Period | Axis | Category | `allowedTokens` |
|---|---|---|---|---|---|
| `spring-early` | 12  | 2/4 – 3/20 | special | seasonal | `--color-primary-*` |
| `spring-late`  | 138 | 3/21 – 5/5 | special | seasonal | `--color-primary-*` |
| `summer-early` | 162 | 5/6 – 6/20 | special | seasonal | `--color-primary-*` |
| `summer-peak`  | 45  | 6/21 – 8/6 | special | seasonal | `--color-primary-*` |
| `autumn-early` | 230 | 8/7 – 9/22 | special | seasonal | `--color-primary-*` |
| `autumn-late`  | 70  | 9/23 – 11/6 | special | seasonal | `--color-primary-*` |
| `winter-early` | 250 | 11/7 – 12/21 | special | seasonal | `--color-primary-*` |
| `winter-deep`  | 0/240 | 12/22 – 2/3 | special | seasonal | `--color-primary-*` |

No existing seasonal theme touches surfaces, foregrounds, borders, accent,
state colors, or info. **That is the contract** — keep it that way when
adding new seasonals.

### Dark × Special — visual verification

Each Special must remain readable under both Modes. With 8 seasonals × 2
Modes = 16 combinations, exhaustive visual review is necessary because a
hue that contrasts well in light mode can collapse against a dark surface
(or vice versa). The 16-pattern Storybook audit story ships in **v0.7.0**;
until then, sanity-check new Specials manually by toggling the Storybook
theme global on the relevant Color / Foundation stories.

## Adding a new Special theme (today's process — pre-v0.7.0)

1. **Decide the category** — seasonal, event, or custom. Each lives under
   its own folder (`src/themes/seasonal/`, …) and uses its own data
   attribute (`data-season`, `data-event`, `data-theme`).
2. **List the tokens you intend to override** as a comment at the top of
   the CSS file. Today's seasonals override `--color-primary-50..950` only —
   match that scope unless you have a documented reason to expand.
3. **Never override Mode-owned tokens** — surfaces, foregrounds, borders,
   inverted foregrounds, focus ring, state colors. A Special that needs to
   change foreground or surface is mis-categorised: it's a Mode, not a
   Special.
4. **Never override `info-*`** — it's pinned to blue across all themes.
5. **Verify both Modes visually** — open the Color / Foundation stories,
   toggle dark mode, check that text on `primary` surfaces still meets
   contrast. The "Filled Treatments (a11y audit)" section in
   `Foundation/Color` is the right place to spot-check.
6. **Add a changeset** — `minor` if the Special ships as a user-facing
   option, `patch` if it's internal-only.

## External Special themes (Phase 5+, after 1.0)

Until 1.0, Specials are internal-only (`yasmro` palettes). After 1.0 we
intend to expose a public API for consumer-authored Specials. Two
constraints that the v0.7.0 allowlist mechanism already prepares for:

- **Sandboxing**: a consumer Special should be unable to override
  Mode-owned tokens or `info-*`. The allowlist + lint enforces this
  mechanically.
- **Identity**: each external Special declares its own data-attribute
  namespace (likely `data-theme="<vendor>-<name>"`) so two consumers can't
  collide on the same attribute value.

The public API and packaging story are out of scope for this rule and will
be designed alongside the 1.0 release.

## Quick reference

- **Mode**  → `:root` (light) / `.dark` (dark) / `@media (prefers-color-scheme: dark)` (system) — owns surfaces, foregrounds, borders, state shade-shifts.
- **Special** → `[data-season=...]` / `[data-event=...]` / `[data-theme=...]` — owns `primary`, optionally `accent`. Cumulative; last-loaded wins.
- **Cascade** → `Special > Mode > base semantic`.
- **Never** touch Mode-owned tokens or `info-*` from a Special.
- **Components** keep referencing semantic tokens (`bg-primary`, `text-foreground`, …) — they don't need to know which axes are active.
