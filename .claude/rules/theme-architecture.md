# Theme Architecture Guideline

## Overview

Schatten's theming is modelled as **two independent axes** that compose at
runtime:

- **Mode** — exclusive (`light` / `dark`). Owns the base layer: surfaces,
  foregrounds, borders.
- **Special** — exclusive (`season--*`, `brand--*`, vendor palettes, …).
  Owns the expressive layer: the `theme` scale, the brand-named tokens
  (`vermillion` / `indigo`), and other "characteristic" tokens.

Both axes are exclusive: exactly one Mode is active (`light` xor `dark`),
and at most one Special is active (`data-theme="<name>"` set on `<html>`,
or no Special at all). The two axes meet at the **semantic token layer**
(`src/core/tokens/semantic.css`). Components keep referencing the same
semantic names (`bg-theme-500`, `text-foreground`, …) regardless of which
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
Axis 2  Special  (exclusive)   <none>  |  season--*  |  brand--*  |  <vendor>--*
                               each Special declares an allowlist of tokens
                               it may override
```

A Special name lives in a **single flat namespace**, with values shaped
as `<family>` or `<family>--<variant>` (full convention in
[DOM application](#data-theme-value-convention)). Family prefixes
(`season--spring-early`, `brand--acme`, …) are just naming conventions
inside that namespace — they don't get separate DOM attributes, separate
cascade tiers, or separate allowlist semantics. Keeping Special exclusive
and single-attribute is a deliberate scope choice: the previous design
considered cumulative Specials with per-family attributes, but the
combinatorial cost (cascade tie-breaking, allowlist intersection rules,
multiple DOM attributes to keep in sync) was not worth it for any
foreseeable use case. If you ever need themes from multiple sources at
once, that's a sign you want the [external Special API](#external-special-themes-future)
(future work), not two `data-theme` attributes.

### Mode owns the base layer

| Concern | Example tokens |
|---|---|
| Surface / background | `--color-background`, `--color-surface`, `--color-surface-hover` |
| Foreground tiers | `--color-foreground`, `--color-foreground-muted`, `--color-foreground-subtle` |
| Inverted foreground tiers | `--color-inverted-foreground*` |
| Borders | `--color-border`, `--color-border-strong` |
| Focus ring | `--color-ring`, `--color-ring-offset` |
| Solid fill — rung selection | `--color-solid`, `--color-solid-hover`, `--color-solid-foreground`, `--color-solid-foreground-hover` — declared as rungs of the theme ramp (see [Solid rides the theme ramp](#solid-rides-the-theme-ramp)); Mode owns *which rung*, the Special supplies the ramp |
| State remapping for dark | `--color-error*`, `--color-success*`, `--color-warning*`, `--color-info*`, `--color-destructive*` (shade shift between light and dark) |
| Non-interactive state | `--color-surface-disabled`, `--color-foreground-disabled`, `--color-border-disabled`, `--color-surface-readonly`, `--color-border-readonly` |

Rule of thumb: anything that needs to flip *shade* between light and dark
belongs to Mode.

### Special owns the expressive layer

| Concern | Example tokens |
|---|---|
| Theme scale | `--color-theme-50` … `--color-theme-950` |
| Brand-named tokens (when a Special wants to retune them) | `--color-vermillion`, `--color-vermillion-foreground`, `--color-indigo`, `--color-indigo-foreground` |

Rule of thumb: anything that expresses *brand character* — seasonality, an
event identity, a customer's palette — belongs to Special.

### Solid rides the theme ramp

Since [#150](https://github.com/yasmro/schatten/issues/150), the solid
family is declared as **rungs of the theme ramp** rather than as fixed
primitives:

```css
:root {                      /* Mode: light picks rungs 700 / 900 / 100 / 300 */
  --color-solid: var(--color-theme-700);
  --color-solid-hover: var(--color-theme-900);
  --color-solid-foreground: var(--color-theme-100);
  --color-solid-foreground-hover: var(--color-theme-300);
}
.dark {                      /* Mode: dark picks rungs 300 / 100 / 800 / 700 */
  --color-solid: var(--color-theme-300);
  --color-solid-hover: var(--color-theme-100);
  --color-solid-foreground: var(--color-theme-800);
  --color-solid-foreground-hover: var(--color-theme-700);
}
```

The division of labour: **Mode picks the rung, the active Special supplies
the ramp.** The two axes write *different tokens* (Mode writes `--color-solid*`,
a Special writes `--color-theme-*`), so they compose without any
specificity contest. Consequences:

- **The default theme ramp is the neutral alabaster scale** (not blue).
  With no Special active, solid resolves to the exact alabaster values it
  had before the rewiring — the rewiring was value-preserving. A Special
  breathes color into the ramp, and with it into every solid surface
  (Button `primary`, Badge / Callout / Toast `neutral × solid`).
- **Solid stays Mode-owned.** A Special must still never write
  `--color-solid*` directly (they remain in `FORBIDDEN_SPECIAL_TOKENS`);
  its influence flows only through `--color-theme-*`. The allowlist is
  unchanged: `['--color-theme-*']`.
- **Specials must declare all 11 rungs (50–950).** Solid consumes rungs
  100 / 300 / 700 / 800 / 900; a partially-declared ramp would mix
  seasonal and default-alabaster values on solid surfaces.
- **All seasonal ramps share one lightness ladder** (e.g. 700 = L 0.46,
  100 = L 0.96), so the fg-on-solid contrast structure is stable across
  seasons by construction. Verify per-hue AA in the Theme Audit story's
  fg-on-solid sample whenever a ramp value changes.
- The rung selection is pinned by
  [`resolution.test.ts`](../../src/core/tokens/__tests__/resolution.test.ts)
  ("solid rides the theme ramp"), alongside the default-leaf fixtures.

### Tokens neither axis touches

A few tokens are pinned by intent and **must not** be moved by either axis:

- `--color-info-*` references `blue-*` directly. Themes that retune the
  theme scale must not drift `info`'s meaning. See
  [state-token-guideline](state-token-guideline.md#info-independence-from-the-theme-scale).
- Primitives (`--red-*`, `--vermillion-*`, `--green-*`, `--blue-*`, …) are
  theme-agnostic by definition and live one layer below semantics. Note `red`
  (danger/error) and `vermillion` (brand 朱) are separate primitives even
  though they hold the same value today — see
  [state-token-guideline](state-token-guideline.md#three-layer-hierarchy).

### Specials must not override non-interactive state tokens

The five `disabled` / `readOnly` tokens
(`--color-surface-disabled`, `--color-foreground-disabled`,
`--color-border-disabled`, `--color-surface-readonly`,
`--color-border-readonly`) are **Mode-owned, not Special-owned**, and Specials
must not include them in their allowlist.

Why this is pinned to Mode:

- **Semantics over expression.** `disabled` means "this control cannot be
  used"; `readOnly` means "this value is informational." The meaning is
  invariant across themes. A seasonal palette that re-tints "disabled" with
  a brand hue would communicate the wrong thing — a disabled control
  should *recede*, not become a brand surface.
- **A11y stability.** Each Special × Mode permutation already needs
  visual verification (16 combinations today, see "Dark × Special" in this
  document). Letting Specials retune disabled/readOnly would multiply the
  audit matrix by another factor without a corresponding UX win.
- **Consumer expectation.** Form-control authors reading
  `bg-surface-disabled` expect the same "muted, can't use" surface
  regardless of which Special is active. Theme-driven drift would break
  that contract silently.

If a future product use case genuinely needs theme-aware disabled coloring
(e.g. a brand-tinted "ghost" state), revisit this rule with a concrete
example — do not work around it by adding the tokens to a Special
allowlist informally.

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
4.  themes/default/colors.css            — default theme scale (alabaster; 1:1 mirror
                                           of the semantic.css fallback, sync pinned
                                           by resolution.test.ts)
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
:root[data-theme="season--winter-deep"]  { --color-theme-500: oklch(...); }
.dark[data-theme="season--winter-deep"]  { --color-theme-500: oklch(...); }
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
  allowedTokens: ['--color-theme-*'],
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

**Why `<html>` and not `<body>`.** Storybook, Tailwind v4 `dark:`, and most
SSR frameworks already key off `<html class="...">`. Putting Mode and
Special on the same element keeps the cascade predictable and means a
single attribute mutation is enough to retheme the whole tree.

## How `data-theme` reaches a component

The mechanism is plain CSS — no React state, no context, no prop drilling.
Three layers work together:

1. **CSS custom property inheritance.** Properties declared on `:root`
   inherit through the entire DOM tree.
2. **`var()` resolves at use-time, not parse-time.** Mutating `data-theme`
   re-resolves every `var()` reference further down the tree on the next
   paint — no JavaScript work is involved.
3. **Tailwind v4 `@theme` registration.** Component classes
   (`bg-theme-500`, `text-theme-600`, …) compile to
   `background-color: var(--color-theme-500)`, so they participate in
   the same cascade.

### Worked trace: `data-theme="season--spring-early"` → pink button

```
┌─ <html data-theme="season--spring-early">  ◀── 1. attribute set
│
│   :root[data-theme="season--spring-early"]
│   { --color-theme-500: oklch(0.64 0.10 12); }       ◀── 2. seasonal override
│                                                          (Specificity (0,2,0)
│                                                           beats :root default)
│   :root { --color-theme-500: var(--alabaster-500); } ◀── 3. default, overridden by
│                                                          the higher-specificity
│                                                          rule above
│
└─ inherits ↓
    └─ <body>
        └─ <Button class="bg-theme-500">
              │
              ▼
            .bg-theme-500 { background-color: var(--color-theme-500); }
                                                     ◀── 4. var() resolved here at render
              │
              ▼
            background-color: oklch(0.64 0.10 12)    ◀── pink (spring-early)
```

### Concretely, in this repo

- [`src/core/tokens/primitives.css`](../../src/core/tokens/primitives.css) — `:root { --blue-500: oklch(...); }` (frozen primitives)
- [`src/core/tokens/semantic.css`](../../src/core/tokens/semantic.css) — `:root { --color-theme-500: var(--alabaster-500); }` (default chain — the neutral resting ramp)
- [`src/themes/seasonal/themes.css`](../../src/themes/seasonal/themes.css) — `:root[data-theme="season--spring-early"] { --color-theme-500: oklch(...); }` (override)
- [`src/core/tokens/base.css`](../../src/core/tokens/base.css) — `@theme { --color-theme-500: var(--color-theme-500); }`. The self-referential look is intentional: the right-hand `var(--color-theme-500)` reads the value defined in `semantic.css`; the left-hand declaration tells Tailwind v4 "this variable is a theme token — generate utilities for it." Without `@theme`, the variable exists but `bg-theme-500` won't be a usable class.
- Component — `<Button className="bg-theme-500" />` → Tailwind emits `.bg-theme-500 { background-color: var(--color-theme-500); }` → browser resolves the `var()` against the cascade at paint time.

### Why this is good for us

- **Components stay theme-unaware.** No `useTheme()` hook, no `<ThemeProvider>` wrapping. Components reference semantic utility classes and the cascade does the rest.
- **SSR is free.** Server emits `<html data-theme="season--spring-early">` from `getSeasonAttribute()`; the same CSS resolves on the server-rendered DOM with no hydration mismatch.
- **Switching is instant and JS-free.** Toggling `data-theme` is one attribute write. The browser's next paint already reflects the new theme — no React re-render, no virtual DOM diff.
- **Specificity is enough — load order doesn't matter** (for the Mode-vs-Special precedence). See [Cascade](#cascade).

### Things that do NOT propagate this way

- Anything baked into a primitive class name (`bg-red-500` directly written into JSX) — the primitive is frozen and ignores `data-theme`. This is exactly why the [state-token-guideline](state-token-guideline.md) bans primitive class names in components.
- Anything resolved at build time (e.g. inline style strings computed from a JS theme object). The CSS variable approach is what makes runtime switching free; routing the value through JS would re-introduce hydration and re-render costs.
- **Custom-property-to-custom-property chains, when `data-theme` sits below the declaring element.** A `var()` inside a custom property's value substitutes at the element where that property is *declared* (computed-value time), and the substituted result is what inherits. `--color-solid: var(--color-theme-700)` is declared on `:root`, so it freezes against `<html>`'s ramp — a `data-theme` attribute on a subtree wrapper cannot re-tint solid further down. This is a non-issue in production (`data-theme` belongs on `<html>`, and the shipped selectors are `:root[data-theme=…]` anyway), but any per-cell theme sandbox (e.g. the Theme Audit story) must re-declare the solid family inside the scoped wrapper to force re-substitution there.

## Seasonal palettes — `data-theme` mapping

The eight seasonal palettes in [`src/themes/seasonal/themes.css`](../../src/themes/seasonal/themes.css)
already follow the Special-axis pattern in practice: each overrides only
the theme scale (`--color-theme-*`). The table below restates that contract
so future authors can replicate it.

| `data-theme` value | Hue | Period | `allowedTokens` |
|---|---|---|---|
| `season--spring-early` | 12  | 2/4 – 3/20  | `--color-theme-*` |
| `season--spring-late`  | 138 | 3/21 – 5/5  | `--color-theme-*` |
| `season--summer-early` | 162 | 5/6 – 6/20  | `--color-theme-*` |
| `season--summer-peak`  | 45  | 6/21 – 8/6  | `--color-theme-*` |
| `season--autumn-early` | 230 | 8/7 – 9/22  | `--color-theme-*` |
| `season--autumn-late`  | 70  | 9/23 – 11/6 | `--color-theme-*` |
| `season--winter-early` | 250 | 11/7 – 12/21 | `--color-theme-*` |
| `season--winter-deep`  | 0/240 | 12/22 – 2/3 | `--color-theme-*` |

No existing seasonal theme touches surfaces, foregrounds, borders,
brand-named tokens, state colors, or info. **That is the contract** —
keep it that way when adding new Specials.

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
   the CSS file. Today's seasonals override the theme scale only
   (`--color-theme-50..950`) — match that scope unless you have a
   documented reason to expand. **Declare all 11 rungs**: the solid family
   consumes rungs 100 / 300 / 700 / 800 / 900 (see
   [Solid rides the theme ramp](#solid-rides-the-theme-ramp)), so a
   partially-declared ramp mixes your hue with default alabaster on solid
   surfaces.
3. **Never override Mode-owned tokens** — surfaces, foregrounds, borders,
   inverted foregrounds, focus ring, state colors. A Special that needs to
   change foreground or surface is mis-categorised: it's a Mode, not a
   Special.
4. **Never override `info-*`** — it's pinned to blue across all themes.
5. **Verify both Modes visually** — open the Color / Foundation stories,
   toggle dark mode, check that text on `theme`-colored surfaces still meets
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
- **Naming**: external Specials use a vendor name as the family prefix —
  `<vendor>--<variant>` — so two consumers can't collide on the same
  attribute value. Example: `data-theme="acme--summer"` (vendor "acme",
  their "summer" variant). The `brand--*` family is reserved for
  first-party brand palettes that ship with Schatten; third parties
  must use their own vendor namespace.

The public API and packaging story are out of scope for this rule.

## v0.7.0 migration plan

Two follow-up changes still close the gap to the full Mode × Special
model. Both depend on the `data-theme` / `--color-theme-*` rename that
shipped in v0.6.x and ride on the canonical names this rule already
prescribes:

| # | Change | Files affected |
|---|---|---|
| 1 | Allowlist enforcement — build-time lint that fails when a Special writes a token outside its `allowedTokens` | new lint rule + per-Special manifest files |
| 2 | 16-pattern Storybook audit story (8 Specials × 2 Modes) | new `Foundation/ThemeAudit` story |

## Quick reference

- **Mode**  → `:root` (light) / `.dark` (dark) / `@media (prefers-color-scheme: dark)` (system) — owns surfaces, foregrounds, borders, state shade-shifts.
- **Special** → `[data-theme="<name>"]` — owns the theme scale (`--color-theme-*`), optionally the brand-named tokens (`--color-vermillion` / `--color-indigo`). Exclusive (one Special active at a time, or none).
- **Cascade** → `Special > Mode > base semantic`. Specials win on specificity, not load order.
- **Solid** → `--color-solid*` is declared as rungs of the theme ramp (light 700-on-100, dark 300-on-800). Mode picks the rung, the Special supplies the ramp — an active Special recolors every solid surface without writing a single solid token. Default ramp = neutral alabaster (value-preserving).
- **Never** touch Mode-owned tokens or `info-*` from a Special.
- **Components** keep referencing semantic tokens (`bg-theme-500`, `text-foreground`, …) — they don't need to know which axes are active.
