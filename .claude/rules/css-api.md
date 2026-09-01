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
- **The size modifier is required on blocks that have a size axis.**
  Dimensions (height / padding / font-size) live **only** on
  `.st-{block}--{sm|md|lg}`; the base rule deliberately carries no
  fallback size, because the React layer's CVA always emits its
  `defaultVariants` size (`st-btn st-btn--primary st-btn--md`) — a
  second base-level definition would create two cascade sources for the
  same visual. A bare `st-btn st-btn--primary` renders collapsed. The
  **minimum renderable chain is block + variant + size**, exactly the
  chain the React layer emits (found the expensive way: the README
  quick-start snippets shipped size-less for ~6 versions, #168).
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

**Exception — compound parts that cannot receive the config as a prop.**
When the author-config value lives on a compound *root* and its nested
parts receive it only through the library's context (never as a prop the
Schatten part can read), the parts cannot attach a modifier class without
re-plumbing the value through every part. In that case the part's CSS
**may** target the `[data-*]` attribute the library already emits, even
though the value is author config. `Tabs` is the case today: `orientation`
is set on `Tabs` (the Radix Root), and `TabsList` / `TabsTrigger` receive
it via Radix context, so the `.st-tabs__list` / `.st-tabs__trigger` rules
read `[data-orientation]` rather than carrying an `--vertical` modifier
([Tabs.css](../../src/components/lv1/Tabs/Tabs.css), #44). A vanilla
consumer writing `data-orientation="vertical"` on the list still gets the
same layout — the attribute Radix mirrors is the framework-agnostic hook.
This exception is narrow: it applies only when the config genuinely cannot
reach the part as a prop. A part that *can* take the prop (like Separator)
keeps the modifier class.

### Variant: visual-less observability hook

The default contract above is that **a state attribute drives a visual
rule**: `aria-invalid="true"` on `.st-input` triggers the red border;
`data-state="open"` on `.st-dialog__content` drives the open keyframe.
The state attribute and the visual change land together so the consumer
gets exactly one mental model — "attribute X means look Y".

There is one **approved variant**: an attribute that is emitted from a
component root **for external observability** but has **no built-in
visual rule** attached to it on that same root. The canonical case is
Field's `[data-error]` ([Field.tsx](../../src/components/lv1/Field/Field.tsx),
[Field.css](../../src/components/lv1/Field/Field.css)):

- Field is a layout wrapper around a single form input. Field's own
  `error` visual responsibility lives on the **inner** form input via
  `.st-input-wrapper:has(.st-input[aria-invalid])` (sweep-4
  precedent) — the Field root itself has no border / background to
  flip when the field is invalid.
- But the FieldSet → Field collapse chain (`field-context-guideline.md`)
  is invisible to a CSS consumer who can't run React. Emitting
  `[data-error="true"]` on the Field root makes that collapsed state
  **observable from the DOM**, so a consumer can opt into external
  styling — `.consumer-card:has(.st-field[data-error="true"]) { … }` —
  without re-deriving the state in their own JS.

**Allowance criteria** — all three must hold:

1. **The component itself owns no visual that the attribute would
   drive.** Field root has no surface / border / background to flip on
   error. If the component DOES have such a visual (Input wrapper,
   Toast, Callout), the attribute MUST drive it — adding a visual-less
   hook on top of a visually-driven attribute creates a confused
   contract.
2. **The state is a useful external hook.** The attribute reflects a
   state another layer (consumer styles, a wrapping `:has()` rule,
   integration tests) can plausibly want to query. "Useful" means
   there's at least a hypothetical scenario; not "every internal
   boolean gets emitted." Defaults to **no** when in doubt.
3. **The intent is documented in both the CSS file and the public
   docs.** The `.css` file header comment must say "observability hook,
   does NOT drive visuals on this root" so a future contributor doesn't
   delete the attribute as dead code OR add `.st-x[data-y="true"] { … }`
   thinking it's missing. The component's `CSSApi.stories.tsx` attribute
   table must list it with that wording.

**Anti-patterns to refuse**:

- Emitting `data-*` "just in case it's useful later" — the public
  surface grows for no concrete consumer. If you're not sure what the
  hook is for, don't add it.
- Adding a visual-less hook **and** later adding a visual rule on the
  same selector. If the visual is justified, that's no longer a
  visual-less hook — it's a normal state attribute, and the older
  "observability-only" framing must be removed from the docs at the
  same time.

The trade-off this variant accepts is a small one: the consumer sees
one more attribute on the root than the visuals strictly require, and
the docs carry one more line of explanation. In exchange, the
React-collapsed state is queryable from CSS / DOM / tests without
re-implementing the collapse logic. Use sparingly — currently only
`Field[data-error]` qualifies.

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

  /* The same selector cascades to descendants that need the multi-line nudge.
   * The icon is taller than the title line-box, so it is lifted by
   * (title line-box − icon) / 2 to center on the title's first line — the
   * no-DOM-restructure equivalent of wrapping icon + title in an
   * `align-items: center` row. The icon size and title metrics are scoped
   * vars on the block root (`--schatten-callout-icon-size` /
   * `--schatten-callout-title-size` / `--schatten-callout-title-leading`),
   * read by the icon rule, the title rule, AND this offset, so the offset
   * can never drift from the values it derives from. */
  .st-callout:has(.st-callout__title):has(.st-callout__body) .st-callout__icon {
    margin-top: calc(
      (var(--schatten-callout-title-size) * var(--schatten-callout-title-leading) -
        var(--schatten-callout-icon-size)) / 2
    );
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
  also lifts `.st-callout__icon` by `(title line-box − icon) / 2` so the
  icon's optical center sits on the title's first line. The two inputs are
  scoped vars (`--schatten-callout-icon-size` / `-title-size` /
  `-title-leading`) shared by the icon, title, and offset rules, so the
  derivation has a single source. `Toast` mirrors this exactly via
  `:has(.st-toast__title):has(.st-toast__description)` and its own
  `--schatten-toast-*` vars.

When you reach for `:has()` in a future component, walk the four rules
above before authoring. If the layout decision feels closer to "runtime
state changed" than to "DOM shape says so," go back to §State.

## `@layer` order

`dist/schatten.css` declares its layer order once, near the top of
the compiled output:

```css
@layer theme, base, reset, tokens, components, utilities;
```

| Layer | Contents |
|---|---|
| `theme` | The **public CSS-variable registrar** — [`src/styles/public-tokens.css`](../../src/styles/public-tokens.css) (#317; previously compiled by Tailwind v4 from `@theme` registrations). Every variable declared here is public surface: `generate-manifest.mjs` extracts `cssVariables` from exactly this layer. |
| `base` | The **vendored Tailwind v4 preflight** — [`src/styles/preflight.css`](../../src/styles/preflight.css) (#317; previously injected by Tailwind's `@import "tailwindcss"`). The cross-browser reset (`button { background-color: #0000 }`, `*, ::before, ::after { box-sizing: border-box }`, etc.) that component CSS depends on. |
| `reset` | Schatten-specific reset (body defaults: surface / foreground / font-family / font-smoothing). Minimal — Schatten is not a CSS reset framework, but it pins enough that the body looks right with tokens applied. |
| `tokens` | `:root` / `.dark` / `[data-theme=…]` custom-property declarations from `src/core/tokens/` and `src/themes/`. |
| `components` | Every `.st-{block}` rule. Source of truth — all visual rules live here. |
| `utilities` | Empty by default. Reserved for consumers who layer their own Tailwind on top; their utilities then win because their layer comes last. |

### Why the declaration is explicit, not implicit

CSS `@layer` precedence follows the **declaration order of the
layers themselves**, not the source order of the rules inside each.
Without an explicit `@layer theme, base, reset, tokens, components, utilities;`
line, two things go wrong at once:

1. A **consumer's stylesheet that lands earlier in their bundle**
   could re-order Schatten's layers and silently flip precedence.
   The explicit declaration pins our cascade regardless of import
   order in the consumer's stylesheet.
2. **The preflight must sit at the lowest cascade priority.** If
   `theme, base` are not declared first, the layers get their slots
   from first appearance — meaning the preflight
   (`button { background-color: #0000 }`) can end up winning over
   `@layer components { .st-btn--primary { background-color: var(--color-solid) } }`.
   Consumers writing vanilla `<button class="st-btn st-btn--primary">`
   then get an un-styled button. **This is exactly what
   [`CSSApiDist.vrt.spec.ts`](../../src/docs/CSSApiDist.vrt.spec.ts)
   (#277) caught** back when Tailwind injected those two layers as
   side-effects of `@import "tailwindcss"` and the entry declared only
   the four schatten layers. Since #317 both blocks are Schatten's own
   files (`public-tokens.css` / `preflight.css`) imported right after
   the declaration line, so their order is self-evident from the entry
   — but the explicit declaration stays as the structural guarantee
   (and as protection #1 against consumer re-ordering).

The two roles compose: declaring `theme, base` ahead of schatten's
own layers parks the preflight at the *lowest* priority where
it belongs, and the rest of the declaration pins schatten's cascade
against consumer import-order surprises.

### CI enforcement — `pnpm check:layer-order`

The exact text of the `@layer` declaration in this document and the
first `@layer …;` line in `dist/schatten.css` MUST match. A
mismatch is caught by [`scripts/check-layer-order.mjs`](../../scripts/check-layer-order.mjs)
(run as `pnpm check:layer-order` and from CI's `lint` job). When you
intentionally add a layer (e.g. introducing a new schatten layer
between `reset` and `tokens`), update **both this document and
`src/styles/entry.css`** in the same commit — the CI check fails
otherwise.

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

### CSS variable naming lives in api-stability.md

This document owns the `.st-*` **class** naming contract; the public
**CSS-variable** naming contract (the four-layer model — primitives are
internal, Tailwind-convention tokens stay bare, semantic `--color-*` stays
bare but can collide with another design system, and schatten-specific axes
take the `--st-` prefix that mirrors this document's `st-` class prefix) is
settled in
[api-stability.md §CSS variable naming](api-stability.md#css-variable-naming--the-four-layer-model)
(the #231 audit). Author component CSS against the semantic tokens either way;
reach for that section when you need to decide whether a **new** token is
public and how to name it.

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

Why the rule: since #317 the dist is compiled by **lightningcss**, which
does not process `@apply` at all — a Tailwind directive in a component
CSS file would pass through as an invalid at-rule and ship broken. So
raw CSS is now a hard build requirement, not just a convention. (The
rule predates #317 for a different reason worth remembering: Tailwind v4
required `@reference` in component CSS files that used `@apply`, and
adding `@reference "globals.css"` suppressed `@theme` emission from the
then-Tailwind dist build — every `--color-*` variable disappeared from
the manifest. A Tailwind v4 / Vite / Storybook integration corner case
discovered during #266 sweep-1; raw CSS sidestepped it entirely.)

Beyond compatibility, raw CSS is also **more readable for a
framework-agnostic CSS consumer** — they can read
`.st-text--error { color: var(--color-error); }` and immediately
understand the contract, with no Tailwind utility-name decoder ring
required.

There is no sanctioned `@apply` use left in the dist chain: every file
imported by `src/styles/entry.css` must be plain CSS (the existing
Spinner.css / Tooltip.css / Dialog.css / Toast.css comply — they carry
only `@keyframes` / `prefers-reduced-motion`, no Tailwind directives).
Tailwind syntax (`@theme` / `@apply` / `@custom-variant`) is allowed
only in the Storybook-only entry chain (`globals.css` →
`core/tokens/base.css` / `themes/default/fonts.css`).

### State-driven color lives on the block; sub-elements inherit `currentColor`

When a sub-element's color has to **follow a state the block owns** —
`:disabled`, `[data-disabled]`, `[data-state]`, `[aria-invalid]`, … —
declare the color on the **block's** state rule and let the sub-element
inherit it through `currentColor`. Do **not** pin a `var(--color-*)` on
the sub-element.

```css
/* ✅ Right — the block owns color; the indicator follows every state */
.st-checkbox            { color: var(--color-foreground); }
.st-checkbox:disabled   { color: var(--color-foreground-disabled); }
.st-checkbox__indicator { color: currentColor; }

/* ❌ Wrong — the child pins a token, so `:disabled` never reaches it */
.st-checkbox__indicator { color: var(--color-background); }
```

Why: a state that applies to the whole block is expressed as **one rule on
the block** ([§State](#state-is-expressed-as-attributes-not-classes)). A
child that pins its own `color` opts out of that rule — the block's
`:disabled` repaints the surface and the border, and the child keeps
whatever token it hard-coded. The failure mode is not a *missing* style,
it is a **contrast collapse**: the child holds a color chosen for the
surface the block no longer has.

That is exactly [#524](https://github.com/yasmro/schatten/issues/524)
(fixed in [PR #529](https://github.com/yasmro/schatten/pull/529)):
`.st-switch__check` pinned `--color-background` — correct on the dark
checked track — while `.st-switch:disabled` dropped the track to
`--color-surface-disabled`. The check mark stayed pale, on a now-pale
track, and vanished.

#### Conforming examples

| component | block declares the color | sub-element follows |
|---|---|---|
| `Checkbox` | `.st-checkbox:disabled { color: var(--color-foreground-disabled) }` | `.st-checkbox__indicator { color: currentColor }` |
| `Switch` | `.st-switch[data-state="checked"]` / `.st-switch:disabled` (since #524) | `.st-switch__check { color: currentColor }` |
| `Select` | `.st-select__item[data-disabled] { color: … }` | `.st-select__item-indicator` — declares no color |
| `DropdownMenu` | `.st-dropdown-menu__item[data-disabled] { color: … }` | `.st-dropdown-menu__item-indicator` — declares no color |
| `Tabs` | `.st-tabs__trigger:disabled { color: … }` | `.st-tabs__trigger-icon` — declares no color |

The five rows are pinned by the guard's `CONFORMING` list, so this table
cannot silently rot when one of them is refactored.

Declaring nothing and writing `color: currentColor` are equivalent
(`color` inherits by default); the explicit form is preferred on children
that would otherwise read as "someone forgot the color", and documents
the intent for a vanilla-HTML consumer reading the class API.

#### Why this needs to be written down

**The mistake is natural to write.** While authoring a sub-element, its
color in the state where it is *visible* (`checked`) is the obvious thing
to put next to it, and a reviewer reads it the same way. #524 sat
unnoticed from sweep-3.

**And every gate that looks at the rendered result misses it:**

| gate | why it doesn't catch it |
|---|---|
| unit (jsdom) | no stylesheet is loaded — the computed color is not observable |
| axe (a11y) | `disabled` elements are exempt from `color-contrast` |
| VRT | a one-icon delta falls under `maxDiffPixelRatio: 0.01` — green *before and after* the fix |

So the defense is this text **plus one static drift guard**:
[`state-color-inheritance.test.ts`](../../src/components/__tests__/state-color-inheritance.test.ts)
reads every lv1 stylesheet as text and fails when a sub-element pins
`color: var(--color-*)` inside a component that has a block-level state
color — unless that sub-element is classified in the test's `EXEMPT`
inventory with one of exactly two reasons (`region` — it never renders
inside the stateful block; `specificity` — a block-state sibling outranks
it).

DOM containment is not derivable from CSS, so the guard deliberately does
**not** decide for you. What it pins is the *inventory*: a newly pinned color
fails CI until someone writes down which of the three reasons applies — i.e.
the question gets asked at exactly the moment the rule is at risk. Restoring
the pre-#524 `.st-switch__check` makes it red on both counts (unclassified,
and listed as a conforming example).

When you add a sub-element whose color should move with the block, write
`currentColor` and put the token on the block's state rule.

#### Scope — which sub-elements this covers

Only children whose color should **track a block-level state**. A
sub-element that is a fixed color *by design* keeps its own token:

- `.st-field__error` / `.st-field__required-marker`
  (`--color-error-emphasis`) — the color **is** the element's meaning,
  not a state of the block.
- `.st-dropdown-menu__label` / `.st-table__head`
  (`--color-foreground-muted`) — a deliberate typographic tier.
- `.st-callout__close` / `.st-toast__close` — `color: inherit`, the same
  contract spelled differently.

Rule of thumb: **"if the block goes `:disabled`, should this child's color
change?"** — yes → `currentColor` on the child + the token on a block-level
state rule; no → its own token is correct.

#### Second shape — a resting tier plus a state-scoped repaint

`currentColor` is the right answer only when the child should carry
*exactly* the block's color at rest. A child with a **deliberate resting
tier of its own** — a muted icon or text affix next to a full-strength value
— cannot inherit, because inheriting would erase that tier. The conforming
form there is to keep the resting token on the child and let the block's
**state rule repaint it explicitly**:

```css
/* resting tier — the adornment is quieter than the value it decorates */
.st-input__icon-left { color: var(--color-foreground-muted); }

/* the block's disabled state reaches the child explicitly */
.st-input-wrapper:has(.st-input:disabled) .st-input__icon-left {
  color: var(--color-foreground-disabled);
}
```

This is still "the block owns the state" — the state rule lives on the
block's selector, the child never decides *when* to change. Both shapes are
accepted by the guard; what it rejects is a child that pins a color and is
reached by **neither**.

Skipping the repaint is not a neutral omission. `foreground-muted` is an
AA-grade ink while `foreground-disabled` is `gray-500`, so a
resting-tier adornment left alone on a disabled control reads **stronger**
than the value it decorates — the hierarchy inverts exactly where the
control is supposed to recede. Measured on the disabled Select trigger
before the fix: value `L 0.58` vs chevron `L 0.48` (light) and `L 0.58`
vs `L 0.71` (dark). Today's repaints live in
[Input.css](../../src/components/lv1/Input/Input.css),
[Select.css](../../src/components/lv1/Select/Select.css), and
[DropdownMenu.css](../../src/components/lv1/DropdownMenu/DropdownMenu.css);
all three win on specificity, so source order is not load-bearing.

`:read-only` deliberately gets no such repaint — a read-only value stays
readable, so its adornment stays at the resting tier too.

**Bounded exception — non-exempt text stays readable.** WCAG 1.4.3 exempts
disabled *controls* from contrast, and axe extends that to `aria-disabled`
descendants — which is why `DropdownMenu`'s shortcut can follow its item down
to `foreground-disabled`. A plain `<span>` that merely sits *beside* a
disabled control inherits no such exemption. `Input`'s `__text-left` /
`__text-right` affixes are exactly that case: repainting them measured
**3.83:1 (light) / 3.52:1 (dark)** and axe flagged both as `serious`, so they
keep the resting muted tier while their sibling **icons** — non-text, held to
1.4.11's 3:1 — do follow the block. The affixes are carried in the guard's
`EXEMPT` inventory with the `a11y` reason.

The general form: **readability outranks the visual-hierarchy nicety.** When
repainting a child to follow a disabled block would push non-exempt *text*
below AA, leave that child at its resting tier and record why — do not reach
for a story-scoped `color-contrast` disable, which is reserved for the
documented design exceptions ([vrt-spec-guideline §a11y](vrt-spec-guideline.md)).

### Portal content with nested `position: fixed` children must stay transform-free

A component whose content panel **portals to `<body>` and renders a nested
`position: fixed` child inside its own DOM subtree** (the canonical case is a
Radix menu/popover with a *submenu*: `DropdownMenu.SubContent` is a fixed
popper rendered inside `DropdownMenu.Content`'s tree) must keep that panel
**free of any `transform` or `translate`** — including transient ones from
enter/exit animations.

Why: per the CSS spec, an element with a `transform` (or the `translate`
property, or `perspective`, `filter`, `will-change: transform`, …) becomes the
**containing block for its `position: fixed` descendants**. So the moment the
panel gets a transform, the nested fixed child stops resolving against the
viewport and snaps to the *panel's* box instead — the submenu visibly jumps
**inside** the parent panel, and (because it briefly re-enters the panel's
scroll box) flashes a scrollbar. This bites hardest during the panel's **close
animation**, where the jump is most visible. Found three times over in #403
(steady-state `translate` offset → scrollbar flash → close-time `scale()`
jump), all the same trap.

The rules for such a panel:

- **Gaps/offsets come from the positioner, not CSS.** Use the library's
  positioning prop (Radix `sideOffset` / `alignOffset`) for the directional
  gap — it moves the *popper wrapper*, which is allowed to have a transform.
  Do **not** add a `[data-side]` `translate:` on the content itself.
- **Animations are opacity-only** (or animate a property that is not
  `transform`). No `scale` / `translate` keyframes on the content. See
  [`DropdownMenu.css`](../../src/components/lv1/DropdownMenu/DropdownMenu.css)
  for the opacity-only enter/exit.
- **This is specific to panels with nested fixed children.** `Select` /
  `Tooltip` / `Dialog` / `Toast` keep their `scale` enter/exit because their
  content is portaled with **no** nested fixed descendant inside it, so a
  transform there is harmless. The constraint kicks in only when a fixed child
  lives in the panel's subtree.
- **Guard it.** Because the failure is *animation-transient*, neither static
  VRT (still frames) nor jsdom unit tests catch it. Pair the component with a
  real-browser behavioral spec that samples the child's position through the
  close — see
  [`DropdownMenu.interaction.vrt.spec.ts`](../../src/components/lv1/DropdownMenu/DropdownMenu.interaction.vrt.spec.ts).

When you build the next nested-menu primitive (ContextMenu, Menubar,
NavigationMenu, a Popover that hosts a submenu), apply this from the start
rather than rediscovering it through the same three bugs.

### Empty base rules are dropped by minification

The dist minifier (lightningcss since #317; Tailwind's `--minify` — the
same engine — before that) strips CSS rules with no declarations.
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
   this (`color: var(--color-foreground)` + font smoothing), and
   survives minify into both dist and manifest. The choice should be
   driven by "does this need to render with no modifiers?" — not by
   manifest bookkeeping.

### Multi-property bundles bind on the class, not on a token

A semantic "role" that bundles **more than one CSS property** —
typography's `size + line-height + weight` is the canonical case —
**must be expressed by a `.st-*` modifier rule, never by a composite
CSS variable**. The reason is mechanical: a CSS custom property holds a
single value, so a 3-property bundle can only be modelled as three
parallel variables (`--text-body-md-size` / `-leading` / `-weight`).
That is not a shorthand — the consumer still applies three things — and
it duplicates the binding that the class rule already owns.

The contract:

- The `.st-text--{variant}.st-text--{size}` double-class rule is the
  **single source of truth** for the typography bundle. It reads the
  base scale (`--text-*` / `--leading-*` / `--font-*`) directly.
- There is **no** `--text-{body,label,heading}-*-{size,leading,weight}`
  composite variable layer. The 39 such variables were removed in
  [#144](https://github.com/yasmro/schatten/issues/144); only the base
  scale is part of the public typography variable surface.
- **Do not reintroduce them as a `@utility`** either. `@utility` is
  Tailwind syntax, and since #317 the dist build (lightningcss) does not
  process it at all — it would ship as an invalid at-rule. (Under the
  pre-#317 Tailwind build it was purged whenever unreferenced — the dist
  entry compiled with `source(none)`, so Tailwind scanned no JSX — and it
  never appears in the manifest either way, since the generator's
  `CLASS_RE` matches `st-`-prefixed classes only. Untracked, fragile
  public surface — the exact failure mode
  [#144](https://github.com/yasmro/schatten/issues/144) rejected.)

Contrast with single-value semantic tokens (`--radius-control`,
`--shadow-modal`, `--motion-base`): those *do* live as CSS variables
because a 1-value → 1-value alias is something a component can consume
in one `var()`. The line is **"can this role be a single `var()`?"** —
yes → semantic token; no → `.st-*` class rule.

**Define-only single-value semantic tokens are allowed (pre-1.0).** A
single-value semantic token MAY be declared ahead of its consumer and
sit *define-only* — `@theme`-registered and on the public manifest, but
not yet referenced by any component (today: `--radius-control`,
`--radius-surface`). This is an accepted state, not
debt: the policy is to **wait for the token's natural consumer** rather
than manufacture one to "use it up", and to never apply a token whose
*name* mismatches the consumer's *role* (e.g. `--shadow-card` was kept
off the Switch knob until its real consumer — `Card` — landed in #43;
see [docs/decisions/2026-06-shadow-card-define-only.md](../../docs/decisions/2026-06-shadow-card-define-only.md)).
Two obligations keep this honest: (1) every define-only token is
**visualized** with a `defined only` badge in its Tokens story
(`Tokens/Elevation`, `Tokens/Radius`) so the gap is never hidden; (2) the
`Status: Accepted` decision log records which future consumer will
retire it. "Zero define-only tokens before 1.0" is explicitly **not** a
goal.

## Quick reference

- **Prefix**: `st-` (frozen for v1.0).
- **BEM**: `.st-{block}` / `.st-{block}--{modifier}` /
  `.st-{block}__{element}`.
- **Modifiers**: variant / appearance / size / orientation — one
  axis per modifier, emitted side-by-side. On blocks with a size axis
  the size modifier is **required** (dimensions live only on
  `--{sm|md|lg}`; no fallback on the base rule) — the minimum
  renderable chain is block + variant + size.
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
- **Visual-less observability hook (variant)**: a state attribute MAY
  be emitted without a matching visual rule on the same root, **only
  when** (a) the root has no visual to drive, (b) the state is a
  useful external hook, and (c) the intent is documented in both the
  `.css` header and `CSSApi.stories.tsx`. Only `Field[data-error]`
  qualifies today.
- **Structure**: `:has()` on documented sub-element classes for
  layout decisions that depend on which sub-elements the author
  rendered (`.st-callout:has(.st-callout__title):has(.st-callout__body)`).
  Three-axis rule: **state → attribute, structure → `:has()`, author
  config → modifier.** Never use `:has()` for runtime state.
- **State-driven color**: when a sub-element's color must follow a
  block-level state (`:disabled` / `[data-disabled]` / `[data-state]`),
  the token goes on the **block** and the child inherits `currentColor`.
  Pinning `var(--color-*)` on the child opts it out of the block's state
  rule (#524). Fixed-by-design colors (`.st-field__error`) keep their own
  token; a child with its own resting tier (a muted adornment) keeps that
  token and is repainted by a state-scoped rule on the block. Inventory
  pinned by `state-color-inheritance.test.ts`.
- **Multi-property bundles**: a role bundling >1 property (typography's
  size + line-height + weight) binds on the `.st-*` class rule, **not**
  on a composite CSS variable or a `@utility`. Single-value semantic
  tokens (`--radius-control`, `--shadow-modal`) stay variables. Rule:
  "can it be one `var()`?" — no → class.
- **Layer order**: `theme, base, reset, tokens, components, utilities`
  (`theme` = public registrar, `base` = vendored preflight).
- **Dark / seasonal**: token-driven by default; `:where(.dark)
  .st-*` when a rule (not just a value) differs.
- **Color alone is never enough** — every visual state has an
  attribute-and-markup partner.
