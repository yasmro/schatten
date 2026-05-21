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
| Separator orientation | `[data-orientation="horizontal" \| "vertical"]` | `.st-separator[data-orientation="horizontal"]` |
| Field error propagation | `[data-error="true"]` | `.st-field[data-error="true"]` |

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
- **Symmetry with Radix.** Radix already emits `[data-state]`,
  `[data-side]`, `[data-orientation]` as styling hooks; piggybacking
  on them keeps the React and vanilla paths visually identical
  without re-deriving state in a parallel class.

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

### Exception: variant / appearance / size

These three axes are **not** state — they're the author's
configuration choice — and they go through modifier classes
(`--primary`, `--subtle`, `--md`) rather than attributes. The line is
*"state changes at runtime in response to UX events"* (attribute) vs.
*"configuration the author wrote once"* (modifier).

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
CI gate (added in [#265](https://github.com/yasmro/schatten/issues/265))
fails when the generated manifest differs from the committed one
and a changeset has not accompanied the diff.

This is the mechanical enforcement of
[api-stability.md](api-stability.md): a CSS rename can't slip through
review unnoticed because the manifest is the diff a reviewer sees.

Until the manifest pipeline lands (alongside #265), the contract is
the union of this document and the per-component `*.css` files
inside `src/components/lv1/`.

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
6. **Regenerate the manifest** (once #265 lands — `pnpm build`
   will pick it up) and inspect the diff before commit.

If the class shape you need can't be expressed within the
conventions above, **stop and discuss in the PR** rather than
introducing a dialect. The cost of cleaning up a one-off naming
pattern after 1.0 is `major`-bump-grade.

## Quick reference

- **Prefix**: `st-` (frozen for v1.0).
- **BEM**: `.st-{block}` / `.st-{block}--{modifier}` /
  `.st-{block}__{element}`.
- **Modifiers**: variant / appearance / size — one axis per
  modifier, emitted side-by-side.
- **State**: attributes, not classes — `:disabled`, `:read-only`,
  `[aria-invalid="true"]`, `[aria-busy="true"]`, `[data-state]`,
  `[data-side]`, `[data-swipe]`, `[data-orientation]`.
- **Layer order**: `reset, tokens, components, utilities`.
- **Dark / seasonal**: token-driven by default; `:where(.dark)
  .st-*` when a rule (not just a value) differs.
- **Color alone is never enough** — every visual state has an
  attribute-and-markup partner.
