# Theme Architecture Guideline

## Overview

Schatten's theming is modelled as **two independent axes** that compose at
runtime:

- **Mode** — exclusive (`light` / `dark`). Owns the base layer: surfaces,
  foregrounds, borders.
- **Special** — exclusive (`seasonal-*`, brand themes, customer palettes,
  …). Owns the expressive layer: `primary`, `accent`, and other
  "characteristic" tokens.

Both axes are exclusive: exactly one Mode is active (`light` xor `dark`),
and at most one Special is active (`data-theme="<name>"` set on `<html>`,
or no Special at all). The two axes meet at the **semantic token layer**
(`src/core/tokens/semantic.css`). Components keep referencing the same
semantic names (`bg-primary`, `text-foreground`, …) regardless of which
Mode + Special combination is active — they don't need to know.

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
Axis 2  Special  (exclusive)   <none>  |  seasonal-*  |  brand-*  |  custom-*
                               each Special declares an allowlist of tokens
                               it may override
```

A Special name lives in a **single flat namespace**. Subcategories
(`seasonal-spring-early`, `brand-acme`, …) are just naming conventions
inside that namespace — they don't get separate DOM attributes, separate
cascade tiers, or separate allowlist semantics. Keeping Special exclusive
and single-attribute is a deliberate scope choice: the previous design
considered cumulative Specials with per-category attributes, but the
combinatorial cost (cascade tie-breaking, allowlist intersection rules,
multiple DOM attributes to keep in sync) was not worth it for any
foreseeable use case. Reach for [external Specials](#external-special-themes-future)
before reaching for "two Specials at once".

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

CSS specificity decides the cascade — load order is only a tie-breaker
within a single tier.

- `:root[data-theme="<name>"]` combines a pseudo-class with an attribute
  selector → specificity `(0,2,0)`.
- `:root` alone → `(0,1,0)`. `.dark` (or any single class) → `(0,1,0)`.
- Therefore **the Special selector beats both `:root` and `.dark`** on
  specificity. Specials override Mode through the cascade itself, not
  through stylesheet ordering.
- For Mode-specific Special values, see "Specials are Mode-agnostic by
  default" below.

The intended source order, from earliest (lowest priority) to latest
(highest):

```
1.  primitives.css                       — raw OKLCH scales
2.  semantic.css :root                   — base semantic tokens (light)
3.  semantic.css .dark / @media dark     — Mode override
4.  themes/default/colors.css            — default primary (no data-theme)
5.  themes/seasonal/themes.css           — Special palettes (data-theme)
```

Effective precedence at runtime:

```
Special  >  Mode (.dark beats :root by load order)  >  base semantic
```

**Specials are Mode-agnostic by default.** A `:root[data-theme=...]` rule
applies the same values in light *and* dark — the existing seasonal
palettes are designed to be Mode-neutral hues that sit atop whatever
surface/foreground Mode is currently active. If a Special needs *different*
shades in dark mode, it must declare both selectors:

```css
:root[data-theme="season--winter-deep"]  { --color-primary-500: oklch(...); }
.dark[data-theme="season--winter-deep"]  { --color-primary-500: oklch(...); }
```

The latter has specificity `(0,3,0)` and beats both `.dark` alone and the
plain Special selector, giving a deterministic dark-mode-specific value
without disturbing the light-mode case.

## Allowlist mechanism (design — implementation in v0.7.0)

A Special declares *which tokens it is allowed to override*. Tokens
outside the allowlist are owned by Mode. The allowlist is a contract —
it makes the partition between axes explicit and testable.

```ts
// Design sketch — actual API lands in v0.7.0
export const springEarlySeasonTheme = {
  name: 'season--spring-early', // matches the data-theme value
  allowedTokens: ['--color-primary-*'],
  // Everything outside this list (foregrounds, surfaces, state colors, info)
  // belongs to Mode.
} as const
```

What the allowlist will enable, once implemented:

- **Build-time lint**: scan each `themes/<special>/*.css` and fail if it
  writes a token that's not in its `allowedTokens`. Prevents accidental
  bleed from a seasonal palette into surfaces/foregrounds.
- **Audit output**: surface the effective token-by-token attribution in
  Storybook (Foundation → Theme Audit), so designers can see "this colour
  came from `season--spring-early`".

Until v0.7.0 ships the enforcement, **treat the allowlist as a hand-checked
convention**: when authoring a new Special, write the tokens it touches at
the top of the CSS file as a comment, and only touch those.

## DOM application

Two channels, one per axis:

| Axis | Selector | Where it's set |
|---|---|---|
| Mode (light) | `:root` (implicit default) | nothing to set; OS-level dark mode honoured via `@media (prefers-color-scheme: dark)` |
| Mode (dark, explicit) | `.dark` on `<html>` | by a theme switcher (e.g. Storybook globals, app-level setting) |
| Special | `[data-theme="<name>"]` on `<html>` | `applySeasonTheme()` in [`src/themes/seasonal/index.ts`](../../src/themes/seasonal/index.ts), or SSR via `getSeasonAttribute()` |

### `data-theme` value convention

The value of `data-theme` follows one of two shapes:

```
data-theme="<theme>"
data-theme="<theme>--<subtheme>"
```

- `<theme>` is the **theme family** — `season`, `brand`, `holiday`, … or a
  vendor name (`acme`) for an external Special.
- `<subtheme>` is the **specific variant** inside that family, separated
  by a double-dash `--` (chosen because it doesn't collide with valid
  identifier characters and reads clearly).
- A one-off Special with no siblings can omit the `--<subtheme>` part
  (e.g. `data-theme="halloween"`).

Examples:

| `data-theme` value | Meaning |
|---|---|
| `season--spring-early` | seasonal palette, spring-early variant |
| `season--winter-deep` | seasonal palette, winter-deep variant |
| `brand--acme` | brand palette for "acme" |
| `acme--summer` | external Special: vendor "acme", their "summer" variant |
| `halloween` | one-off Special with no sub-variants |

**One attribute for Special.** Every Special — season, brand, vendor,
one-off — sets the same `data-theme` attribute. There is no `data-season`
/ `data-event` / `data-brand` proliferation; family is encoded in the
value, not in the attribute name.

> **Deprecation: `data-season` → `data-theme`**.
> [`src/themes/seasonal/themes.css`](../../src/themes/seasonal/themes.css)
> and the helpers in [`src/themes/seasonal/index.ts`](../../src/themes/seasonal/index.ts)
> currently use `data-season="<name>"`. This is **deprecated**. The
> equivalent canonical form is `data-theme="season--<name>"`
> (e.g. `data-season="spring-early"` → `data-theme="season--spring-early"`).
> The actual CSS / helper rename ships in v0.7.0 alongside the allowlist
> enforcement work. **Authoring rule for new code**: use `data-theme`
> with the value convention above; do not introduce new `data-season`
> usage.

**Why `<html>` and not `<body>`.** Storybook, Tailwind v4 `dark:`, and most
SSR frameworks already key off `<html class="...">`. Putting Mode and
Special on the same element keeps the cascade predictable and means a
single attribute mutation is enough to retheme the whole tree.

## Existing seasonal themes — current vs. new model

The eight seasonal palettes in [`src/themes/seasonal/themes.css`](../../src/themes/seasonal/themes.css)
already follow the Special-axis pattern in practice: each overrides only
`--color-primary-*`. The table below restates that contract in the new
model so future authors can replicate it.

| `data-theme` value (canonical) | Legacy `data-season` (deprecated) | Hue | Period | `allowedTokens` |
|---|---|---|---|---|
| `season--spring-early` | `spring-early` | 12  | 2/4 – 3/20  | `--color-primary-*` |
| `season--spring-late`  | `spring-late`  | 138 | 3/21 – 5/5  | `--color-primary-*` |
| `season--summer-early` | `summer-early` | 162 | 5/6 – 6/20  | `--color-primary-*` |
| `season--summer-peak`  | `summer-peak`  | 45  | 6/21 – 8/6  | `--color-primary-*` |
| `season--autumn-early` | `autumn-early` | 230 | 8/7 – 9/22  | `--color-primary-*` |
| `season--autumn-late`  | `autumn-late`  | 70  | 9/23 – 11/6 | `--color-primary-*` |
| `season--winter-early` | `winter-early` | 250 | 11/7 – 12/21 | `--color-primary-*` |
| `season--winter-deep`  | `winter-deep`  | 0/240 | 12/22 – 2/3 | `--color-primary-*` |

No existing seasonal theme touches surfaces, foregrounds, borders, accent,
state colors, or info. **That is the contract** — keep it that way when
adding new Specials.

### Dark × Special — visual verification

Each Special must remain readable under both Modes. With 8 Specials × 2
Modes = 16 combinations (today), exhaustive visual review is necessary
because a hue that contrasts well in light mode can collapse against a
dark surface (or vice versa). The 16-pattern Storybook audit story ships
in **v0.7.0**; until then, sanity-check new Specials manually by toggling
the Storybook theme global on the relevant Color / Foundation stories.

## Adding a new Special theme (today's process — pre-v0.7.0)

1. **Pick a `data-theme` value** following the `<theme>` or
   `<theme>--<subtheme>` convention. Examples:
   `season--spring-late` (new seasonal), `brand--acme` (brand palette),
   `halloween` (one-off with no sub-variants). The leading family name
   is just a naming convention — it groups Specials visually and in
   the Theme Audit story but does not create a separate axis.
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

## External Special themes (future)

Today, Specials are internal-only (`yasmro` palettes). A public API for
consumer-authored Specials is a future possibility, not a current
commitment. If it ships, two constraints the v0.7.0 allowlist mechanism
already prepares for:

- **Sandboxing**: a consumer Special must not be able to override
  Mode-owned tokens or `info-*`. The allowlist + lint enforces this
  mechanically.
- **Naming**: external Specials use a vendor prefix in the `data-theme`
  value following the `<vendor>--<variant>` convention (e.g.
  `data-theme="acme--summer"`) so two consumers can't collide on the
  same attribute value.

The public API and packaging story are out of scope for this rule.

## Quick reference

- **Mode**  → `:root` (light) / `.dark` (dark) / `@media (prefers-color-scheme: dark)` (system) — owns surfaces, foregrounds, borders, state shade-shifts.
- **Special** → `[data-theme="<name>"]` — owns `primary`, optionally `accent`. Exclusive (one Special active at a time, or none).
- **Cascade** → `Special > Mode > base semantic`. Specials win on specificity, not load order.
- **Never** touch Mode-owned tokens or `info-*` from a Special.
- **Components** keep referencing semantic tokens (`bg-primary`, `text-foreground`, …) — they don't need to know which axes are active.
