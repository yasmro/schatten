# CSS API Guideline

## Overview

Schatten ships two parallel rendering paths:

- **React** — `<Button variant="primary" size="md">Save</Button>`
- **Framework-agnostic CSS** — `<button class="st-btn st-btn--primary st-btn--md">Save</button>`

Both paths emit the same class string, render against the same compiled
stylesheet (`dist/schatten.css`), and must produce visually identical
output. This document is the **class-API contract** consumers code
against when they reach for the CSS path: the prefix, the BEM shape,
how state is expressed, how `@layer` cascades, how dark and seasonal
themes compose on top, and the "no color-only signal" rule.

The contract is **frozen from v1.0.0 onward** — see
[api-stability.md](api-stability.md) for the breaking-change policy and
manifest mechanics that sit on top of these conventions. Pre-1.0,
breaking changes to this surface are still permitted but must ship
with a `BREAKING:` (or `CSS API:`) line in the changeset so early
adopters can migrate.

This rule is the source of truth for class naming. It complements:

- [api-stability.md](api-stability.md) — what counts as a breaking
  change to the CSS surface, CHANGELOG prefixes, manifest enforcement.
- [state-token-guideline.md](state-token-guideline.md) — semantic
  token vocabulary the modifier classes route to (`error` / `success`
  / `warning` / `info` / `destructive`) and the "no color-only signal"
  principle this guideline incarnates as CSS.
- [theme-architecture.md](theme-architecture.md) — how Mode (`light`
  / `dark`) and Special (`[data-theme=…]`) compose over the base
  layer, including which tokens each axis is allowed to override.
- [component-architecture.md §8](component-architecture.md#8-accessibility-contract)
  — the a11y contract whose state announcements (`aria-invalid`,
  `aria-busy`, `aria-describedby`) double as styling hooks here.
- [component-api-conventions.md](component-api-conventions.md) — the
  Pattern A (role) vs. Pattern B (tone × shape) prop decision tree
  that determines how modifier classes are factored on a given block.

## Prefix: `st-`

Every Schatten-emitted class starts with `st-`. Short enough not to
inflate the bundle, long enough to be visually distinct from ad-hoc
consumer classes.

| Candidate | Verdict |
|---|---|
| `st-` ✅ | Three characters incl. dash. From the main consonants of "SchaTten". No collision with Tailwind, Radix, or any popular design system surveyed. |
| `s-` | Too generic — collides with hand-written `s-` size utilities, SVG, and abbreviated `s` classes in the wild. |
| `schatten-` | Highest collision resistance, but verbose. Across the manifest it's significant bundle weight for no observable payoff. |
| bare `.btn` / `.input` | Collides with Bootstrap, legacy CSS, and other DSs. Rejected as the single most common breakage source for consumers. |

The prefix is part of the v1.0 contract. **Renaming the prefix after
1.0 is `major`** ([api-stability.md](api-stability.md#what-counts-as-breaking-for-css)).
Pre-1.0 it would still be a `BREAKING:` changeset.

## BEM convention

Schatten classes follow a strict three-form BEM:

```
.st-{block}                  root class
.st-{block}--{modifier}      variant / appearance / size (one axis per modifier)
.st-{block}__{element}       sub-element of a compound component
```

| Form | Example |
|---|---|
| Root | `.st-btn`, `.st-input-wrapper`, `.st-callout`, `.st-tooltip__content` |
| Variant (Pattern A role) | `.st-btn--primary`, `.st-btn--destructive`, `.st-btn--link` |
| Variant (Pattern B tone) | `.st-callout--error`, `.st-badge--success`, `.st-toast--warning` |
| Appearance (Pattern B shape) | `.st-callout--subtle`, `.st-badge--outline`, `.st-toast--solid` |
| Size | `.st-btn--md`, `.st-input--lg`, `.st-icon--sm` |
| Compound element | `.st-select__trigger`, `.st-dialog__content`, `.st-callout__icon` |

### Rules

- **One axis per modifier.** Modifiers are emitted side-by-side
  (`st-callout st-callout--error st-callout--subtle`), never collapsed
  (`st-callout--error-subtle`). The orthogonality lets the CSS cascade
  resolve the composition, and lets consumers reason about each axis
  independently. Pattern A (role-only — `Button`) and Pattern B
  (tone × shape — `Badge` / `Callout` / `Toast`) both honour this;
  for the pattern decision tree see
  [component-api-conventions.md](component-api-conventions.md#two-patterns).
- **`size` modifier values are always `--sm` / `--md` / `--lg`.** No
  `--small` / `--medium` / `--large` — the abbreviated form is the
  contract ([component-api-conventions.md](component-api-conventions.md#common-props-across-all-components)).
- **Block names are kebab-case nouns.** Match the underlying React
  component name lowercased and de-camelCased (`FieldSet` →
  `st-fieldset`, `RadioGroup` → `st-radio-group`,
  `SelectTrigger` → `st-select__trigger` because it's the `trigger`
  sub-element of the `select` block, not its own block).
- **No nested elements.** Sub-elements are flat under the block —
  `st-dialog__content` is fine, `st-dialog__content__header` is not.
  If a hierarchy is needed, the sub-element gets its own peer entry
  (`st-dialog__header`).
- **No primitive utility classes inside component CSS.** Component
  rules use semantic tokens (`@apply bg-error text-foreground-muted`)
  — never primitive utilities (`bg-red-500`, `text-gray-700`). The
  [`no-primitive-color` Biome plugin](lint-rules-guideline.md#no-primitive-color--error)
  catches this on JSX; CVA `.ts` files and component `.css` files
  remain a code-review concern.

## Composing modifiers — double-class selectors for Pattern B

Pattern A components (`Button`) have a single visual axis (`variant`),
so each modifier maps 1-to-1 to a CSS rule: `.st-btn--primary { … }`.

Pattern B components (`Badge`, `Callout`, `Toast`) have **two orthogonal
visual axes** — `variant` (tone) × `appearance` (shape). Both axes can
contribute to the same CSS property (e.g. `background-color`), so a CSS
rule attached to a single modifier (`.st-badge--success { … }`) cannot
express "success and subtle" vs "success and solid" without one
overriding the other.

The contract is **double-class selectors** — every Pattern B
combination is written as `.st-{block}--{tone}.st-{block}--{shape}`:

```css
@layer components {
  /* tone × appearance — every combination, no single-tone rule */
  .st-callout--neutral.st-callout--subtle { … }
  .st-callout--neutral.st-callout--solid  { … }
  .st-callout--success.st-callout--subtle { … }
  .st-callout--success.st-callout--solid  { … }
  /* error / warning / info — same shape */
}
```

### Rules

- **No single-tone or single-shape rule.** Do not write
  `.st-callout--success { background: … }` and expect `.st-callout--solid`
  to override it. Always write both modifiers together. The CVA on the
  TypeScript side already emits both as side-by-side classes
  (`<Callout variant="success" appearance="solid">` →
  `st-callout st-callout--success st-callout--solid`), so the CSS just
  has to match the chain consumers actually write.
- **The default appearance is first-class — not a marker.** When the
  component has a default `appearance` (e.g. `subtle`), write its rule
  via the same double-class form (`.st-{block}--{tone}.st-{block}--subtle`).
  Do not bake the default's styles into the tone-only rule
  (`.st-{block}--{tone}`) and leave `subtle` as an empty marker. This
  matches the sweep-1 Icon precedent — Icon's default `color="inherit"`
  has its own CSS rule (`.st-icon--inherit { color: inherit }`), not an
  empty class for minify to drop.
- **Specificity is `(0,2,0)` for every combination.** Source order
  inside `@layer components` doesn't matter — the cascade resolves
  combinations by author intent expressed in the class chain, not by
  which rule was loaded last.
- **Sub-elements are independent of the tone/shape combination.**
  `.st-callout__icon` / `__title` / `__body` are styled by their own
  single-class rules. The tone × shape combination governs only the
  block's own background / color / border.

### Why not single-tone rule + appearance override

The straightforward alternative is "write `.st-callout--success` with
the subtle treatment, then have `.st-callout--solid` override the
background." That works in source order but breaks the cascade contract:

- Source order becomes part of the contract — any reordering of rules
  changes precedence.
- Consumers who write `class="st-callout st-callout--success"` (without
  any appearance) inherit the default `subtle` look, but the CSS rule
  they actually hit is `.st-callout--success`. Naming the rule after
  the tone alone implies the rule *is* the tone, which it isn't — it's
  the tone-at-default-appearance.
- Adding a third appearance (`outline`) later forces the consumer to
  remember the override stack mentally.

The double-class form removes the stack: every combination is one
self-contained rule, named for the combination that actually applies.

## State is expressed as attributes, not classes

Schatten **does not** emit state classes (`st-input--error`,
`st-btn--loading`, `st-toast--open`). State surfaces through HTML /
ARIA / Radix attributes, and the CSS selector targets the attribute
directly:

| State | Attribute | Selector example |
|---|---|---|
| Disabled | `:disabled` (HTML) | `.st-btn:disabled` |
| Read-only | `:read-only` (HTML) | `.st-input:read-only` |
| Error / invalid | `[aria-invalid="true"]` | `.st-input[aria-invalid="true"]` |
| Loading / busy | `[aria-busy="true"]` | `.st-btn[aria-busy="true"]` |
| Radix runtime state | `[data-state="open" \| "closed" \| "checked" \| …]` | `.st-dialog__content[data-state="open"]` |
| Radix popper side | `[data-side="top" \| "right" \| "bottom" \| "left"]` | `.st-tooltip__content[data-side="bottom"]` |
| Toast swipe | `[data-swipe="start" \| "move" \| "end" \| "cancel"]` | `.st-toast[data-swipe="end"]` |
| Field / FieldSet error propagation | `[data-error="true"]` | `.st-field[data-error="true"]`, `.st-fieldset[data-error="true"]` |
| Field / FieldSet disabled propagation | `[data-disabled="true"]` | `.st-field[data-disabled="true"]`, `.st-fieldset[data-disabled="true"]` |

### Why attribute-driven state

- **One source of truth.** A React consumer writes `isError` and the
  component sets `aria-invalid="true"`. A vanilla-HTML consumer writes
  `aria-invalid="true"` directly. Both reach the same selector — no
  parallel class for the same state to keep in sync.
- **A11y comes for free.** The attribute that triggers the visual
  state is **also** what assistive tech reads. There's no way to ship
  the visual without the announcement, because the styling won't
  apply without the attribute.
- **No color-alone signal.** A consumer can't write
  `<input class="st-input st-input--error">` (red border) without
  also setting `aria-invalid="true"` — the class doesn't exist. This
  is the CSS incarnation of the "do not rely on color alone" rule
  from [component-architecture.md §8](component-architecture.md#8-accessibility-contract).
- **Symmetry with Radix.** Radix already emits `[data-state]` and
  `[data-side]` as runtime state hooks; piggybacking on them keeps the
  React and vanilla paths visually identical without re-deriving state
  in a parallel class. (Radix also emits `[data-orientation]`, but
  that one reflects *author configuration*, not runtime state, so it
  goes through a modifier class — see "Exception: variant /
  appearance / size / orientation" below.)

### Authoring consequences

- A vanilla-HTML consumer of a form input **must** set `disabled` /
  `aria-invalid` / `aria-describedby` themselves. The framework-
  agnostic CSS does not (cannot) auto-wire ARIA — that is the
  React layer's job. Per-component `CSSApi.stories.tsx` carry a
  checklist of required attributes for vanilla usage.
- Attribute selectors share specificity `(0,1,0)` with class
  selectors, so the cascade order **inside `@layer components`**
  decides precedence between a base rule (`.st-btn`) and its state
  rule (`.st-btn:disabled`). Author state rules **after** the base
  rule in the source.

### Exception: variant / appearance / size / orientation

These axes are **not** state — they're the author's configuration
choice — and they go through modifier classes (`--primary`,
`--subtle`, `--md`, `--horizontal`) rather than attributes. The line
is *"state changes at runtime in response to UX events"* (attribute)
vs. *"configuration the author wrote once"* (modifier).

Separator's `orientation` belongs here even though Radix happens to
also emit it as `[data-orientation]` — the value is set once by the
author at construction, never flipped at runtime by user input. The
matching `data-orientation` attribute is therefore informational on
the React side (it carries through for a11y wiring of
`aria-orientation`) but does **not** drive styling: the CSS targets
`.st-separator--horizontal` / `.st-separator--vertical` instead.
Vanilla HTML consumers writing the modifier class get a working
separator with no required attribute.

## Structural `:has()` for layout selection

Beyond runtime state (handled by attribute selectors, §State above) and
author configuration (handled by modifier classes, §Exception above),
some components need to switch layout based on **which sub-elements the
author chose to render**. This is a third axis — call it *structural*
because the signal is the DOM shape itself, not a runtime event and not
a prop value.

The contract is `:has()` on the block's documented sub-element classes:

```css
@layer components {
  /* Default: single-content alignment */
  .st-callout {
    align-items: center;
  }

  /* Title + body present: anchor icon to the heading top */
  .st-callout:has(.st-callout__title):has(.st-callout__body) {
    align-items: flex-start;
  }

  /* The same selector cascades to descendants that need the multi-line nudge */
  .st-callout:has(.st-callout__title):has(.st-callout__body) .st-callout__icon {
    margin-top: 0.125rem;
  }
}
```

### Why not push the decision into JSX

The straightforward alternative is to compute a boolean in the component
(`const hasMultiLine = !!(title && body)`) and toggle a Tailwind utility
or a class from JSX. Doing that has two costs:

- **The JSX side carries layout logic that the CSS-only consumer cannot
  reproduce.** A vanilla-HTML user writing the same sub-element chain
  would get the single-content alignment regardless of whether they
  included `__title` and `__body`. The CSS path and the JSX path stop
  agreeing — exactly the gap the framework-agnostic surface is meant to
  close.
- **The component grows a derived signal that future maintainers can
  re-introduce silently.** PR #288's review caught a stale comment
  pointing at a `hasMultiLine` variable that had already been removed —
  the kind of bookkeeping debt that a JSX-side branch invites and that
  the CSS-side `:has()` makes structurally impossible.

Pushing the decision to CSS via `:has()` keeps **the DOM shape the
single source of truth** for layout — whichever path emits the shape,
the same layout follows.

### Rules

- **Use only for *structural* signals**, never for runtime state.
  State (`isError` / `isLoading` / Radix `data-state`) keeps going
  through the attribute selectors in §State above; the two patterns
  are not interchangeable. The line is *"does the DOM shape change in
  response to a UX event?"* (state — attribute) vs. *"is the DOM
  shape a fixed property of how the author wrote the markup?"*
  (structure — `:has()`).
- **Match against documented sub-element classes**, not against
  arbitrary child selectors (`:has(svg)` / `:has(button)`). The
  sub-element class is the contract that survives consumer DOM
  refactors; a tag-based `:has()` couples the rule to incidental
  markup.
- **The block must own the layout for `:has()` to fire usefully on
  direct descendants.** The Callout pattern works because `__title` /
  `__body` / `__icon` are *immediate children* of `.st-callout`. A
  wrapper `<div>` inserted between block and sub-elements either
  breaks `:has(> .sub-element)` matching or shifts the layout target
  invisibly. Pin the direct-children structure with a unit test so
  future refactors can't silently insert a wrapper (see
  [Callout.test.tsx](../../src/components/lv1/Callout/Callout.test.tsx)
  `renders icon + content as direct children of the root`).
- **Sub-elements named in `:has()` selectors are part of the public
  surface contract.** Renaming `.st-callout__title` to
  `.st-callout__heading` would silently break the layout rule even if
  the manifest still lists both. The
  [api-stability.md](api-stability.md) breaking-change policy applies
  — a rename is `major` post-1.0.

### Browser support

`:has()` is supported in Safari 15.4+, Firefox 121+, and Chrome 105+.
Schatten's Tailwind v4 baseline already requires these versions, so
adopting `:has()` does not introduce a new browser-support floor.

### Today's usage

- **Callout** ([Callout.css](../../src/components/lv1/Callout/Callout.css))
  — `.st-callout:has(.st-callout__title):has(.st-callout__body)` toggles
  `align-items` from `center` to `flex-start` so the icon anchors to
  the heading when both heading and body are present. The same selector
  also nudges `.st-callout__icon { margin-top: 0.125rem }` for optical
  centering against the title's cap-height.

When you reach for `:has()` in a future component, walk the four rules
above before authoring. If the layout decision feels closer to "runtime
state changed" than to "DOM shape says so," go back to §State.

## `@layer` order

`dist/schatten.css` declares its layer order once, near the top of
the compiled output:

```css
@layer reset, tokens, components, utilities;
```

| Layer | Contents |
|---|---|
| `reset` | Box-sizing reset, body defaults. Minimal — Schatten is not a CSS reset framework. |
| `tokens` | `:root` / `.dark` / `[data-theme=…]` custom-property declarations from `src/core/tokens/` and `src/themes/`. |
| `components` | Every `.st-{block}` rule. Source of truth — all visual rules live here. |
| `utilities` | Empty by default. Reserved for consumers who layer their own Tailwind on top; their utilities then win because their layer comes last. |

### Why the declaration is explicit, not implicit

CSS `@layer` precedence follows the **declaration order of the
layers themselves**, not the source order of the rules inside each.
Without an explicit `@layer reset, tokens, components, utilities;`
line, a consumer's stylesheet that lands earlier in their bundle
could re-order Schatten's layers and silently flip precedence. The
explicit declaration pins our cascade regardless of import order in
the consumer's stylesheet.

### Consumer-side import ordering

Consumers should import `@yasmro/schatten/schatten.css` **before**
any of their own CSS. Their own utility layer then sits at the end
of the `utilities` slot and wins over Schatten's `components` layer
— which is the expected behaviour when a consumer reaches for
`<Button className="mt-4">`. README's Getting Started documents this,
and a stale-order regression would still leave Schatten's defaults
working; only consumer overrides would stop winning.

## Dark mode and seasonal themes

The base layer is light. Dark and seasonal palettes layer on top of
`.st-*` rules via two patterns:

### Pattern 1 — token-driven (default, preferred)

Most rules consume CSS custom properties: `@apply bg-solid` or
`background-color: var(--color-solid);`. When `.dark` flips
`--color-solid` to its dark value, the rule resolves to the new
colour at paint time without a dedicated dark selector. **Don't
write a `.dark .st-btn--primary { … }` rule when the same colour
shift is already encoded in the token.** If you find yourself
duplicating the rule with dark colours hard-coded, the right fix is
almost always to move the colour into a semantic token instead.

### Pattern 2 — `:where(.dark) .st-*` override (when a rule, not just a value, differs)

When dark mode genuinely needs a different rule — not just a
different token value, but a different shadow stack, a different
border thickness, or a different keyframe direction — wrap the
selector in `:where(.dark)` to keep specificity at `(0,1,0)`:

```css
@layer components {
  .st-btn--primary { /* light/default rule */ }
  :where(.dark) .st-btn--primary { /* dark-specific rule */ }
}
```

`:where()` contributes **zero** specificity — the dark-specific
rule beats the light rule by **source order alone**, never by
specificity. This preserves the contract that consumers can
override `.st-btn--primary { … }` from the `utilities` layer
without having to escalate specificity to win.

### Seasonal Specials

`[data-theme="season--*"]` is handled at the token layer
([theme-architecture.md](theme-architecture.md)) — the seasonal
palette swaps `--color-theme-*`, which component CSS already
consumes via tokens. **There should be almost no need for a
`[data-theme="…"] .st-*` rule** in component CSS; if you reach for
one, that is a sign the Special is overstepping its allowlist
(Mode- vs Special-owned tokens — see
[theme-architecture.md#two-axis-model](theme-architecture.md#two-axis-model)).

## Color alone is not enough

A state must never be conveyed by colour alone. The contract is
enforced structurally:

- **No `--error` / `--success` / `--warning` modifier on form
  inputs.** `<input class="st-input st-input--error">` doesn't
  exist. Error state is set via `aria-invalid="true"`, which both
  triggers the red border *and* announces "invalid" to screen
  readers — colour and announcement land together because they
  share the same hook.
- **Pattern B variants (`--error` etc. on `Callout` / `Toast` /
  `Badge`) ship with an icon and a label in the markup.** The
  `--error` modifier shifts colour; the icon (an
  `aria-hidden="true"` SVG) and the visible heading carry the
  meaning for sighted users who don't perceive the colour shift,
  and the `role` + accessible name carry it for screen readers
  ([component-architecture.md §8](component-architecture.md#8-accessibility-contract)).
  Stripping the icon or the title to "clean up" the markup breaks
  this contract.
- **Focus indication is a ring, not a colour swap.** Every
  interactive `.st-*` rule includes
  `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`
  via `@apply`. Removing the ring to fit a layout is a contract
  violation — replace it with an equivalent visible indicator
  instead.

When you add a new component or modifier, walk this list before
sign-off. If any state on the new component is only distinguishable
by colour, fix it before the PR lands.

## Manifest and changeset gate

Every public `.st-*` class, every `[data-*]` / `[aria-*]` styling
hook, and every public `--color-*` / `--spacing-*` / `--font-*`
variable is enumerated in `src/__generated__/schatten.manifest.json`,
regenerated at build time into `dist/schatten.manifest.json`. The
CI gate (`pnpm check:manifest`, shipped in
[#265](https://github.com/yasmro/schatten/issues/265)) fails when the
generated manifest differs from the committed one and prints the
per-section set difference (added / removed entries) inline, so the
surface change is visible to the PR reviewer directly from the CI log.
When the drift is intentional, `pnpm update:manifest` rewrites the
snapshot and the change must ship with a `CSS API:` changeset.

This is the mechanical enforcement of
[api-stability.md](api-stability.md): a CSS rename can't slip through
review unnoticed because the manifest is the diff a reviewer sees.

## Adding or modifying a class

1. **Pick the block name.** Match the React component, lowercased
   and de-camelCased. New blocks are rare — most additions are
   modifiers or sub-elements on an existing block.
2. **Pick the form.** Variant / appearance / size →
   `--{value}`. Sub-element → `__{name}`. State → **no class**;
   reach for the appropriate HTML / ARIA / Radix attribute selector
   from the table above.
3. **Author inside `@layer components`** in the component's own
   `.css` file under `src/components/lv1/{Component}/`. Use
   `@apply` with semantic tokens (`@apply bg-solid
   text-solid-foreground`), never primitive utilities.
4. **Verify both modes.** Storybook → Color / Foundation, toggle
   light/dark. If the new modifier is part of a Special's
   allowlist, verify each Special as well.
5. **Add a changeset.** Use the `CSS API:` prefix per
   [api-stability.md](api-stability.md#changelog-conventions). Pre-1.0
   a `minor` bump is sufficient for additive changes; renames /
   removals go through the breaking-change policy (`BREAKING:`
   prefix, still `minor` pre-1.0, `major` post-1.0).
6. **Regenerate the manifest** with `pnpm update:manifest` (or rely on
   `pnpm build`'s `build:manifest` step + `pnpm check:manifest` to spot
   the drift) and inspect the diff before commit.

If the class shape you need can't be expressed within the
conventions above, **stop and discuss in the PR** rather than
introducing a dialect. The cost of cleaning up a one-off naming
pattern after 1.0 is `major`-bump-grade.

### CVA-external modifier emission (props-derived modifiers)

Most modifiers map directly to a CVA `variants` axis — `variant`,
`appearance`, `size`, `orientation`. CVA emits the matching class
unconditionally when the prop is provided, and the CSS rule attached to
that class fires.

Some modifiers depend on **a derived condition the component computes
from its props**, not on a single prop value. These cannot be expressed
inside the CVA `variants` shape (CVA only switches on tuples of prop
values). The contract is: **add the modifier outside CVA, in the
component's `.tsx`, with `cn(…)` and a boolean expression** —

```tsx
// src/components/lv1/Badge/Badge.tsx
const isIconOnly = !children && !!icon

return (
  <div
    className={cn(
      badgeVariants({ variant, appearance, size }),
      isIconOnly && 'st-badge--icon-only',
      className,
    )}
    {...props}
  >
    {/* … */}
  </div>
)
```

### Rules

- **Document the modifier in the component's `.css` file** the same
  way as any other modifier — block, axis name, what it expresses. The
  manifest cannot tell whether a modifier came from CVA or from a
  `cn(…)` expression, so the `.css` file is the only record of intent.
- **Keep the judgment inside the component**, not in a utility. If
  another component needs the same modifier, copy the boolean
  expression rather than extracting a helper — the conditions for "is
  this icon-only" or "is this error-and-not-loading" are component-
  specific shapes, and a shared helper would force them to converge
  artificially.
- **Single-axis still applies.** Even when emitted outside CVA, the
  modifier expresses **one axis** (`--icon-only` is presence-only;
  `--has-error` would flip on a derived `isErrorAndNotLoading` boolean).
  Don't fold multiple conditions into one collapsed modifier name
  (`--icon-only-and-small` is wrong — emit `--icon-only` and
  `--sm` separately).
- **The CVA variants tuple stays clean.** Don't add a synthetic
  `iconOnly: boolean` variant to CVA just to get class emission —
  that would re-introduce the props-into-CVA coupling this rule is
  meant to avoid. CVA's role is "(prop tuple) → (class chain)";
  derived modifiers come from the component, not from CVA.

### Why not push the derived condition into CVA

You can technically synthesize a CVA variant from a derived condition
by computing the boolean before passing it in:

```tsx
// ❌ Anti-pattern
badgeVariants({ variant, appearance, size, iconOnly: !children && !!icon })
```

But this:

- Adds a variant axis that consumers see in the CVA `VariantProps`
  type even though the component decides it (`iconOnly` becomes a
  prop-shaped value that isn't actually a prop).
- Forces every consumer of `badgeVariants(...)` (CSS-only `.tsx`
  authors, `buttonVariants`-style external usage) to know about the
  derived axis.
- Conflates "the public prop API" with "the public class API" — they
  should be allowed to diverge when the component genuinely encodes
  a state the prop API doesn't expose.

Keep CVA pure to the prop surface; emit derived modifiers in the
`.tsx` with `cn(…)`.

### Component CSS authoring conventions — raw CSS over `@apply`

Component CSS files (`src/components/lv1/{X}/{X}.css`) **must use raw
CSS + `var(--color-*)` directly**, not Tailwind's `@apply` shortcut:

```css
/* ✅ Right — raw CSS, framework-agnostic */
.st-text--error { color: var(--color-error); }
.st-icon--md    { width: 1.25rem; height: 1.25rem; }

/* ❌ Wrong — depends on Tailwind v4 @apply resolution */
.st-text--error { @apply text-error; }
.st-icon--md    { @apply size-5; }
```

Why the rule: Tailwind v4 requires `@reference` in component CSS files
that use `@apply`, so each file can be processed independently by Vite
in dev mode (Storybook). But adding `@reference "globals.css"` (or
similar) to a component CSS file **suppresses `@theme` emission from
the dist build**, because Tailwind sees the reference and dedupes the
theme block out of the final `dist/schatten.css` — every `--color-*`
variable disappears from the manifest. This is a Tailwind v4 / Vite /
Storybook integration corner case discovered during #266 sweep-1; raw
CSS sidesteps it entirely.

Beyond compatibility, raw CSS is also **more readable for a
framework-agnostic CSS consumer** — they can read
`.st-text--error { color: var(--color-error); }` and immediately
understand the contract, with no Tailwind utility-name decoder ring
required.

Use `@apply` only inside keyframe / `prefers-reduced-motion` /
animation-specific CSS where it genuinely helps (the existing
Spinner.css / Tooltip.css / Dialog.css / Toast.css don't trip this
because they have no `@apply` for tokens — only `@keyframes`).

### Empty base rules are dropped by `--minify`

Tailwind v4's `--minify` flag strips CSS rules with no declarations.
Writing `.st-{block} { }` to "document the root class" does **not**
keep it in `dist/schatten.css`, and the manifest generator (which
parses the compiled dist) consequently won't list it either —
the rule simply isn't there.

This is fine. The root class still appears in JSX output
(`<svg class="st-icon st-icon--md st-icon--inherit">`) because the
CVA always emits it alongside the modifiers, and consumers writing
vanilla HTML write the same class chain. The functional contract is
carried entirely by the modifiers, which **are** in the manifest.

Two consequences:

1. **Don't author empty base rules expecting manifest presence.**
   `Icon.css` discovered this during sweep-1 (#266) — the comment
   in that file documents the outcome and the rationale for not
   working around it.
2. **If a block genuinely needs CSS that applies regardless of
   modifier, give the base a real declaration.** `.st-text` does
   this (`@apply text-foreground antialiased`), and survives minify
   into both dist and manifest. The choice should be driven by
   "does this need to render with no modifiers?" — not by manifest
   bookkeeping.

## Quick reference

- **Prefix**: `st-` (frozen for v1.0).
- **BEM**: `.st-{block}` / `.st-{block}--{modifier}` /
  `.st-{block}__{element}`.
- **Modifiers**: variant / appearance / size / orientation — one
  axis per modifier, emitted side-by-side.
- **Pattern B composition**: tone × shape via **double-class
  selectors** (`.st-callout--success.st-callout--subtle`). Default
  appearance is first-class — write its rule via the same double-class
  form, never as an empty marker.
- **Derived modifiers**: when a modifier depends on a props-derived
  condition CVA can't express (e.g. `!children && !!icon`), emit it
  outside CVA in the component's `.tsx` via `cn(…)`. Keep CVA pure to
  the prop surface.
- **State**: attributes, not classes — `:disabled`, `:read-only`,
  `[aria-invalid="true"]`, `[aria-busy="true"]`, `[data-state]`,
  `[data-side]`, `[data-swipe]`, `[data-error]`, `[data-disabled]`
  (Field / FieldSet propagation).
- **Structure**: `:has()` on documented sub-element classes for
  layout decisions that depend on which sub-elements the author
  rendered (`.st-callout:has(.st-callout__title):has(.st-callout__body)`).
  Three-axis rule: **state → attribute, structure → `:has()`, author
  config → modifier.** Never use `:has()` for runtime state.
- **Layer order**: `reset, tokens, components, utilities`.
- **Dark / seasonal**: token-driven by default; `:where(.dark)
  .st-*` when a rule (not just a value) differs.
- **Color alone is never enough** — every visual state has an
  attribute-and-markup partner.
