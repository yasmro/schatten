# Component Architecture Guideline

## Overview

This file records the design-time choices that go into adding or extending a
component in Schatten: which folder it lives in, how its API is shaped, what
escape hatches it exposes, and when a `.css` file is allowed to exist next to
a `.tsx`. These choices used to live in reviewers' heads — making them
explicit lets contributors (human and AI) land the right thing the first time
and lets reviewers anchor feedback on a shared text instead of taste.

Anything not covered here defaults to **shadcn/ui + Radix conventions**.

## 1. lv1 vs lv2 — folder responsibilities

| | lv1 (primitive) | lv2 (composite) |
|---|---|---|
| Folder | [`src/components/lv1/`](../../src/components/lv1) | [`src/components/lv2/`](../../src/components/lv2) |
| Purpose | Single-responsibility primitive. Low-level, focused. | A composition of multiple lv1s shaped as a single component. |
| Examples (today) | Button, Input, Field, FieldSet, Select, Dialog, Tooltip, … | (empty — first lv2s land in v0.9.0) |
| Hypothetical lv2 | — | `FormField` = Field + Label + Input + error msg |

**The promotion criterion (when a recurring composition becomes an lv2) is
intentionally deferred** — it will be defined in a follow-up rule when the
first lv2 lands (~v0.9.0). Until then, treat any composition of 3+ lv1s as
a candidate that the DS owner will judge case-by-case.

## 2. Compound vs flat

When designing an lv1, pick between **compound** (multiple named exports the
consumer composes) and **flat** (one component the consumer uses directly).

### Compound — the consumer composes named parts

```tsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogTitle>Confirm</DialogTitle>
    <DialogDescription>Are you sure?</DialogDescription>
  </DialogContent>
</Dialog>
```

Used by: `Dialog`, `Tooltip`, `Select`, `Radio` (`RadioGroup` + `Radio`).

**When to ship as compound:** when wrapping a Radix primitive that already
exposes multiple parts. Match Radix's part names one-to-one
(e.g. [`SelectTrigger`](../../src/components/lv1/Select/Select.tsx) mirrors
`SelectPrimitive.Trigger`).

**Why match Radix one-to-one rather than collapse:** Radix's parts share refs,
context, and aria attributes internally. Collapsing them into a single component
breaks those wires. It also strips the consumer's ability to inject custom
content into specific slots — a custom icon inside `DialogTitle`, an extra
className on `DialogContent`, etc.

### Flat — the consumer uses one component

```tsx
<Button variant="primary" size="md">Save</Button>
<Input placeholder="email" />
<Badge variant="success">Active</Badge>
```

Used by: `Button`, `Input`, `Badge`, `Callout`, `Spinner`, `Text`, `Textarea`,
`Field`, `FieldSet`, `Checkbox`, `Switch`.

**When to ship as flat:** when the component is one styled tag with variants
and has at most one content injection point (its `children`). If consumers
need to inject content at multiple slots, that is a sign you have a
composition on your hands — and a self-built composition belongs in **lv2,
not in a compound lv1**.

### Special case — imperative APIs

`Toast` is neither compound nor flat in the usual sense: it exposes an
imperative `toast()` function plus a `<Toaster />` mount. This shape is
justified by the consumer ergonomics for toasts (fire-and-forget from
anywhere in the app, no JSX-tree placement required) and is the rule rather
than the exception for notification-type primitives. Any new component that
demands an imperative API should justify the divergence in its PR description.

## 3. `asChild` — no new lv1 additions

The authoritative list of components that **currently** expose `asChild`,
together with the three adoption criteria they satisfy, lives in
[component-api-conventions.md §`asChild` adoption criteria](component-api-conventions.md).
This section adds two further constraints on top of that rule.

### Default: do not add `asChild` to a new lv1

When designing a new lv1 component, ship it **without** an `asChild` prop.
The variants-function pattern (below) covers the most common case, and
adding `asChild` later is non-breaking — adding it eagerly and removing
it later is breaking. Bias toward the smaller surface.

### Prefer the variants-function pattern

For "render as a different element" needs, the design system already
exports the CVA variants functions — [`buttonVariants`](../../src/variants/button.ts) and
[`textVariants`](../../src/variants/text.ts) from
`@yasmro/schatten/variants`. Consumers apply them directly to their own
element:

```tsx
// styled link without asChild
<a href="/docs" className={buttonVariants({ variant: 'primary' })}>Docs</a>
<NextLink href="/docs" className={textVariants({ variant: 'body', size: 'md' })}>Docs</NextLink>
```

This pattern:

- keeps the consumer's element fully typed (their `<a>` / `<NextLink>`
  retains its native prop signature)
- avoids the prop-forwarding ambiguity that `asChild` introduces
- works equally well for framework Link components (Next, React Router,
  Remix), which already accept `className` directly

### Hard exclusions, even if #192's 3 criteria seem to fit

Two categories of component must **never** expose `asChild`, regardless
of how cleanly the 3 criteria appear to apply:

- **Form inputs** (`Input`, `Textarea`, `Select` trigger, `Checkbox`,
  `Switch`, `Radio`) — HTML form elements aren't polymorphic at the
  platform level (`<input>` cannot become `<textarea>`).
- **Portal-rendered content** (`Dialog` content, `Toast`) — positioning
  math is tied to a known DOM shape; swapping the element out breaks
  layout in subtle ways. (`DialogTrigger` / `DialogClose` /
  `TooltipTrigger` etc. are *not* portal content — they live in the
  consumer's tree and may continue to expose `asChild` per #192.)

### Radix-internal `asChild` is unaffected

Inside a component's implementation, `<DialogPrimitive.Close asChild>`
and similar internal `asChild` usages are fine — the rules here are
about the **public Schatten API surface**. The `TooltipTrigger` pattern
(omit `asChild` from the public type via `Omit<…, 'asChild'>` and decide
internally based on `isTextOnly`) is the template for any future
Trigger-style component that wants to hide the prop from consumers.

## 4. Polymorphic `as` prop — NOT adopted (with one carved exception)

Schatten follows shadcn / Radix in **not** offering a generic polymorphic API
like `<Button as="a" href="…">`. The reasons:

- TypeScript type inference for polymorphic components requires complex
  generic plumbing (`ElementType` + `PolymorphicComponentProp`), which fights
  `forwardRef` and degrades editor performance in large consumer apps.
- The CVA-variants-export pattern from §3 covers the same use cases —
  consumers apply `buttonVariants(...)` / `textVariants(...)` to whatever
  element they want, fully typed.

**Carved exception — `Text` accepts `as`.** [Text](../../src/components/lv1/Text/Text.tsx)
exposes `as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'` — a
**fixed enumeration of semantic HTML elements** that all share the same
character (a text container) and the same DOM attribute surface. The type
is a union, not `ElementType`, so the inference cost is zero. `as` is
purely a shorthand for the common "render this paragraph as an h2 instead"
case.

**Why `as` works on `Text` but not on `Button`:** Text's eight tags accept
the same attribute set and play the same DOM role (content). `Button → a`
swaps role (interactive button → navigation link) and required attributes
(`type` → `href`), which is exactly the shape that polymorphic types
struggle to narrow. For that case, exporting `buttonVariants` lets the
consumer hand in a fully-typed `<a>` instead.

**Rule of thumb:** if your `as` would accept arbitrary `ElementType`, refuse.
If it accepts a closed set of semantically related tags that share the
same attribute surface and the union is small (≤8), it can ship — but
justify the call in the PR description.

## 5. Context consumption — unified rule

Form-aware lv1 components consume state from [`FieldContext`](../../src/contexts/field.ts).
The rule is **one shape** with a single `id` qualifier:

### State (always consumed, all form lv1s)

Every form lv1 reads three values from `FieldContext` with prop fallback:

```ts
const field = useFieldContext()
const isError      = field?.isError      ?? props.isError      ?? false
const disabled     = field?.disabled     ?? props.disabled     ?? false
const describedBy  = field?.describedBy  ?? props['aria-describedby']
```

This applies uniformly to `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`,
`Radio`, and `RadioGroup`.

### `id` (consumed only by externally-labelled components)

`FieldContext.id` is specifically **the hookup id between an external `<label htmlFor>`
and the input element**. It is consumed only by components that lack their own
internal label:

| Consumes `field?.id` | Does not consume `field?.id` |
|---|---|
| `Input`, `Textarea`, `Select` | `Checkbox`, `Switch`, `Radio` |

Components with internal labels generate their own per-instance id (each
checkbox is its own field).

### Group components

`RadioGroup` consumes state at the group level and re-provides a group-scoped
context to its child `Radio`s (which read `name` from that group context).

### `FieldSetContext` is consumed only by `Field`

The collapse-and-provide chain is **`FieldSet` → `Field` → form lv1**.
[`Field`](../../src/components/lv1/Field/Field.tsx) reads
`FieldSetContext` for `isError` / `disabled`, merges with its own props,
and re-provides via `FieldContext`. **Form lv1s never read `FieldSetContext`
directly** — they only ever see `FieldContext`.

### Precedence

```
direct prop  >  FieldContext  >  FieldSetContext (already collapsed into FieldContext via Field)  >  default
```

## 6. Dependency direction — strictly one-way

The source tree is layered, and **a layer may only depend on layers below
it** (plus itself, where noted). Inverted dependencies (a lower layer
importing from a higher one) are forbidden.

| Layer | May import from |
|---|---|
| [`lib/`](../../src/lib) (`cn`, `mergeRefs`) | external only (React, clsx, tailwind-merge) |
| [`contexts/`](../../src/contexts), [`variants/`](../../src/variants) | external only (React, cva) |
| [`components/lv1/`](../../src/components/lv1) | `lib/`, `contexts/`, `variants/`, **other `lv1/`** |
| [`components/lv2/`](../../src/components/lv2) | `lib/`, `contexts/`, `variants/`, `lv1/`, other `lv2/` |

### Key rules

- **lv1 → lv2 is forbidden.** An lv1 that finds itself needing an lv2 is
  itself misclassified — promote it to lv2.
- **lv1 → other lv1 is allowed.** A flat lv1 may use another lv1 as part of
  its own structure (e.g. `Dialog` rendering a `Button` for its action /
  cancel rows). This is *not* composition-as-feature — it is "this primitive
  happens to embed another primitive as a fixed structural part."
- **No barrel-export laundering.** When `lv2` needs `cn`, it imports from
  `'../../../lib/utils'`, never via `lv1/index.ts`. Going through a higher
  layer to reach a lower one is a dependency inversion in disguise.
- **Adding to `lib/` requires a real second consumer.** A helper used by
  exactly one component lives next to that component, not in `lib/`.
  Premature extraction adds a navigation hop without a payoff.

## 7. lv1-local CSS files

Most styling lives in Tailwind classes composed through CVA. A `.css` file
next to a `.tsx` is allowed **only** when the styling expresses something
Tailwind / CVA cannot reasonably express:

| Allowed | Not allowed |
|---|---|
| `@keyframes` animations (declarative, multi-stop) | Static colors, spacing, typography (use semantic tokens + CVA) |
| `animation-play-state` / `animation-delay` conditional on `[data-state]` | Hover/focus state styles (use Tailwind variants) |
| `prefers-reduced-motion` media queries that disable animation | Light/dark adjustments (use CSS variables + `dark:`) |
| CSS variable definitions scoped to the component (e.g. `--schatten-spinner-duration`) | Layout / flexbox / grid (use Tailwind) |

**Existing exceptions today** (all animation-only, all comply):

- [`Tooltip.css`](../../src/components/lv1/Tooltip/Tooltip.css) — directional
  enter/exit slide+fade animations driven by Radix `[data-state]` and
  `[data-side]`. Per-side composed `animation:` shorthand is impractical
  in Tailwind.
- [`Dialog.css`](../../src/components/lv1/Dialog/Dialog.css) — overlay
  fade and content zoom keyframes. Documents the `translate:` /
  `transform: translate(...)` interaction with Tailwind v4 in an inline
  comment.
- [`Toast.css`](../../src/components/lv1/Toast/Toast.css) — dissolve-in /
  dissolve-out keyframes and swipe-handoff animation.
- [`Spinner.css`](../../src/components/lv1/Spinner/Spinner.css) — ripple
  and breathe keyframes; declares two component-scoped CSS variables
  (`--schatten-spinner-duration`, `--schatten-spinner-ripple-delay`)
  that consumers can override.

**Review check:** if a PR adds a `.css` file under `src/components/lv1/`,
the reviewer must verify each rule satisfies the "not expressible in
Tailwind / CVA" bar above. If any rule could be a Tailwind class, move
it.

## When this rule changes

- **§1 (lv2 promotion criterion):** will be defined as a follow-up rule
  when the first lv2 lands (~v0.9.0).
- **§3 (`asChild`):** the authoritative adoption list lives in
  [component-api-conventions.md](component-api-conventions.md). Keep
  this file's §3 narrowed to the *additional* constraints
  ("no new additions by default" + hard exclusions for form inputs /
  portal content). If those constraints change, update both files.
- **§4 (polymorphic):** if shadcn / Radix conventions shift toward
  polymorphic APIs post-1.0, revisit the carved exception first.
- **§6 (dependency direction):** if lv0 (foundation tokens-as-components)
  or lv3 (page-level shells) gets introduced, add the new layer to the
  table and update the resource maps in [CLAUDE.md](../../CLAUDE.md) /
  [AGENTS.md](../../AGENTS.md).
