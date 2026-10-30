# Component Architecture Guideline

## Overview

This file records the design-time choices that go into adding or extending a
component in Schatten: which folder it lives in, how its API is shaped, what
escape hatches it exposes, and what goes into the `.css` file next to its
`.tsx`. These choices used to live in reviewers' heads — making them
explicit lets contributors (human and AI) land the right thing the first time
and lets reviewers anchor feedback on a shared text instead of taste.

Anything not covered here defaults to **shadcn/ui + Radix conventions**.

## 1. lv1 vs lv2 — folder responsibilities

| | lv1 (primitive) | lv2 (composite) |
|---|---|---|
| Folder | [`src/components/lv1/`](../../src/components/lv1) | [`src/components/lv2/`](../../src/components/lv2) |
| Purpose | Single-responsibility primitive. Low-level, focused. | A composition of multiple lv1s shaped as a single component. |
| Examples (today) | Button, Input, Field, FieldSet, Select, Dialog, Tooltip, … | EmptyState |
| Rule doc | this file | [lv2-composition-guideline.md](lv2-composition-guideline.md) |

### Where the line is — does it introduce a primitive of its own?

Embedding another lv1 does not make a component an lv2 (§6 allows lv1 →
lv1). Decide in two steps:

1. **Does it compose any lv1?** If not, it is an **lv1** — a styled native
   element is a primitive in its own right (`Skeleton`'s `<div>`, `Text`'s
   `<p>` / `<h*>`). This is the same line as the lv2 disqualifier D3.
2. **If it composes lv1s, does it also introduce a primitive of its own?**
   - **Yes → lv1.** A primitive here is a native element whose semantics the
     component owns (`<button>`, `<label>`, `<table>`, a heading), a
     headless-library primitive (Radix, Sonner, …), or a React context it
     provides. The lv1s it embeds are fixed parts.
   - **No → lv2.** Every semantic element and every primitive comes from an
     lv1 it composes. Its own markup is wrappers, and its own code is the
     wiring between the parts — layout, focus, state, and ARIA. **Putting a
     `role` or `aria-*` on a wrapper is wiring, not a primitive**: a
     `role="group"` wrapper named by `aria-labelledby` (the DateRangePicker
     case, [lv2-composition-guideline.md §4.4](lv2-composition-guideline.md#44-field-context))
     still introduces nothing a consumer could use on its own.

| Component | Composes lv1s? | Primitive it introduces | Layer |
|---|---|---|---|
| `Skeleton` | no | its styled `<div>` | lv1 (step 1) |
| `Toast` | yes (`Icon` / `Spinner` / `Button`) | Sonner's toaster + the imperative store | lv1 |
| `Dialog` | yes (`Button`) | Radix Dialog | lv1 |
| `Field` | yes (`Tooltip`) | `<label>` / error `<p>` + `FieldContext` | lv1 |
| `EmptyState` (#125) | yes (`Icon` / `Text`) | none — the heading comes from `Text`'s `as`; the root `<div>` is a wrapper | lv2 |
| `DatePicker` (#568) | yes (`Input` / `Popover` / `DateCalendar` / `Button`) | none — the trigger is a `Button`; the value sync is wiring | lv2 |
| `DateRangePicker` (#568) | yes (same parts) | none — the `role="group"` root is ARIA wiring on a wrapper | lv2 |
| `ConfirmDialog` (#124, v1+) | yes (`Dialog`) | none — it owns the confirm state | lv2 |

The test cuts both ways: an "lv2" that needs a native semantic element of
its own is either an lv1 or is missing an lv1 (render the heading through
`Text`, the trigger through `Button`), and an lv1 whose only content is
other lv1s plus wiring is an lv2 that has not been moved.

## 2. Compound vs flat

When designing an lv1, pick between **compound** (multiple named exports the
consumer composes) and **flat** (one component the consumer uses directly).

### Compound — the consumer composes named parts

```tsx
<Select defaultValue="jp">
  <SelectTrigger>
    <SelectValue placeholder="Country" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="jp">Japan</SelectItem>
    <SelectItem value="us">United States</SelectItem>
  </SelectContent>
</Select>
```

Used by: `Select`, `Tooltip`, `Popover`, `DropdownMenu`, `Tabs`, `Radio`
(`RadioGroup` + `Radio`) — each over a multi-part Radix primitive — and
`Card` / `Table`, which mirror a multi-part **native** structure
(`<table>` / `<thead>` / `<tr>` / `<td>`; a card's header / content / footer
regions) instead of a Radix one. `Dialog` is **not** compound — see the
carved exception below.

**When to ship as compound:** when wrapping a Radix primitive that already
exposes multiple parts. Match Radix's part names one-to-one
(e.g. [`SelectTrigger`](../../src/components/lv1/Select/Select.tsx) mirrors
`SelectPrimitive.Trigger`). Part names mirror Radix, but **prop types do
not**: every part's public Props is native-element props + curated
redeclarations, never a Radix type — see
[api-stability.md §Radix type boundary](api-stability.md#radix-type-boundary-anti-corruption-layer).

**Why match Radix one-to-one rather than collapse:** Radix's parts share refs,
context, and aria attributes internally. Collapsing them into a single component
breaks those wires. It also strips the consumer's ability to inject custom
content into specific slots — a custom icon inside a `SelectItem`, an extra
className on `TooltipContent`, etc.

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

### Carved exception — `Avatar` is flat over a multi-part Radix primitive

`Avatar` (#36) wraps `@radix-ui/react-avatar` — a three-part primitive
(`Root` / `Image` / `Fallback`) — behind a **single flat component**
(`<Avatar src alt fallback size />`), instead of the compound shape this
section's default would prescribe for a multi-part Radix wrapper. This is a
**sanctioned exception**, not a precedent to copy without discussion:

- **The common case is genuinely single-slot.** ~90% of avatar usage is
  `src` + `alt` + an initials `fallback` (a `string`). There is no real
  per-instance need to inject custom content into the image and fallback
  slots independently — unlike `SelectItem` / `TooltipContent`, which
  consumers routinely customise.
- **Radix's wiring does NOT break.** The flat component still renders all
  three Radix parts internally (`Avatar.Image` inside `Avatar.Root`, with
  `Avatar.Fallback`), so the image→fallback load-status context stays
  intact. The "collapsing breaks the wires" caution above is about
  *consumer-facing* part composition; here the parts are composed *for* the
  consumer, and the only thing withheld is direct access to each part's
  props.
- **The withheld surface is recoverable additively.** Advanced `<img>`
  attributes (`loading` / `srcSet` / `crossOrigin`), `Avatar.Image`'s
  `onLoadingStatusChange`, and per-part `className` / `ref` are not exposed
  in v1. If a real need appears, an `imgProps` escape hatch (or a later
  compound split) is a non-breaking `minor` — so starting flat costs
  nothing we can't reclaim.

The rule of thumb this carves out: a multi-part Radix primitive **may** ship
flat when (a) the multi-slot composition has no real consumer use case, (b)
the flat wrapper still renders every Radix part internally so no behaviour is
lost, and (c) the withheld per-part props can be re-exposed additively later.
If any of the three fails, default back to compound.

### Carved exception — `Dialog` is curated props over a multi-part Radix primitive

`Dialog` wraps `@radix-ui/react-dialog` (it renders Root / Portal / Overlay /
Content / Title / Description / Close internally) but exports **one** component,
`Dialog`, driven by curated props — controlled `isOpen` / `onOpenChange`,
`title`, `description`, `children` for the body, and the footer slots
`actionButton` / `cancelButton` / `subActionButton`. There is no public
`DialogTrigger` / `DialogContent` / `DialogClose`. This is the second
sanctioned exception, and its reason differs from Avatar's:

- **The composition itself is what Dialog standardises.** A confirmation
  dialog's footer — which buttons exist, their order, the `destructive`
  mapping, a separator above them, the close ✕ — is exactly the part
  consumers would otherwise assemble differently on every screen. Dialog
  fixes it; consumers supply only the content and the button configs.
- **It owns behaviour a compound API would hand back.** While any footer
  button is `isLoading`, Dialog blocks every dismissal path (ESC, overlay
  click, ✕); it wires `aria-describedby` only when a `description` exists
  (conditional ARIA opt-out, §8); it warns when `actionButton.onClick` is
  missing. With named parts, each consumer would have to re-implement these.
- **Radix's wiring is intact.** The Radix parts are rendered internally, so
  focus trap, `aria-labelledby` from the title, and portal stacking work as
  Radix intends. (There is no `Trigger`: the dialog is controlled through
  `isOpen`, so the consumer's own button opens it.)
- **The withheld surface is recoverable additively.** Exporting the parts
  later (a compound split) adds exports without changing `Dialog`.

The rule of thumb this adds: a multi-part Radix primitive **may** ship as
curated props when the **composition is the standard being shipped** (not
just the common case, as for Avatar), the component owns behaviour that
depends on that fixed composition, and conditions (b) and (c) above hold.
This is also the shape lv2 follows — see
[lv2-composition-guideline.md §4.1](lv2-composition-guideline.md#41-flat--curated-props-by-default-compound-is-not-allowed).
`Dialog` stays lv1 because it introduces the Radix Dialog primitive itself
(§1).

`Avatar` and `Dialog` are the only components on these exceptions today.

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

**This is a preference, not a prohibition.** `*Variants()` and `asChild`
hand the consumer different things, and the right tool depends on intent:
`*Variants()` gives **only the class string** (use it when you want the
*look* on your own element); `asChild` merges Button's resolved `className`
**and forwards its props / ref** onto a single child via Slot (use it when
you want the element to *behave as* the button — e.g.
`<Button asChild><Link/></Button>` so the Link carries Button's events /
ref / class). Note `asChild` renders only `children` — Button's `icon` /
`isLoading` are not projected — so it is not a way to get Button's internals
onto your element. The full decision table lives in
[component-api-conventions.md §asChild vs `*Variants()`](component-api-conventions.md#aschild-vs-variants--which-to-reach-for).
The "prefer variants" default here is about **not eagerly adding `asChild`
to new lv1s**, not about banning it where it already earns its keep
(`Button`).

### Hard exclusions, even if #192's 3 criteria seem to fit

Two categories of component must **never** expose `asChild`, regardless
of how cleanly the 3 criteria appear to apply:

- **Form inputs** (`Input`, `Textarea`, `Select` trigger, `Checkbox`,
  `Switch`, `Radio`) — HTML form elements aren't polymorphic at the
  platform level (`<input>` cannot become `<textarea>`).
- **Portal-rendered content** (`Dialog` content, `Toast`) — positioning
  math is tied to a known DOM shape; swapping the element out breaks
  layout in subtle ways. (Trigger-style parts that live in the consumer's
  tree — not portal content — *may* use `asChild` internally, but none
  expose it publicly today: `TooltipTrigger` hides it behind `isTextOnly`,
  and `Dialog` has no public `Trigger` / `Close` export at all. See the
  public-vs-internal breakdown in
  [component-api-conventions.md §asChild adoption criteria](component-api-conventions.md#aschild-adoption-criteria).)

### Radix-internal `asChild` is unaffected

Inside a component's implementation, `<DialogPrimitive.Close asChild>`
and similar internal `asChild` usages are fine — the rules here are
about the **public Schatten API surface**. The `TooltipTrigger` pattern
is the template for any future Trigger-style component that wants to
hide the prop from consumers: since [#156](https://github.com/yasmro/schatten/issues/156)
the public type is native `<button>` (/`<div>`) props — `asChild` simply
isn't in it — and the component decides internally.

The internal heuristic, shared by `TooltipTrigger` / `PopoverTrigger` /
`PopoverAnchor` / `PopoverClose` / `DropdownMenuTrigger`:

- **Text child** (`string` / `number`) → `asChild={false}`; Radix renders
  its own element around the text.
- **Element child** → `asChild={true}`; props / ref / behaviour merge onto
  the child, no wrapper element is emitted.

Two known edges of this heuristic (accepted, not to be "fixed" ad hoc):

- **No children** → the element-child branch is taken and Radix `Slot`
  renders **nothing**. A bare `<PopoverClose />` therefore draws no button
  — always pass a child.
- **Multiple children** → `Slot` requires a single element child and
  throws. Wrap multiple nodes in one element.

If a future component needs different semantics (e.g. an always-`asChild`
anchor), document the divergence in its TSDoc rather than silently
deviating from this table.

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

### `labelId` (naming fallback for self-labelled / group components)

`FieldContext.labelId` is the id of the `<label>` element Field renders
(undefined when Field has no `label` prop). It exists because the `htmlFor`
hookup above cannot name two classes of children:

- **Self-labelled components without an own `label`** —
  `<Field label="Notifications"><Switch /></Field>` would otherwise leave the
  Switch unnamed (the Field label's `htmlFor` points at the unconsumed
  `field.id`). `Checkbox` / `Switch` apply
  `aria-labelledby={field?.labelId}` only when they have no own `label` and
  the consumer passed no explicit naming prop.
- **`RadioGroup`** — a `role="radiogroup"` div cannot be reached by
  `htmlFor` at all; the group root always applies `aria-labelledby` unless
  the consumer names it explicitly.

Precedence: explicit `aria-label` / `aria-labelledby` prop > own `label`
prop > `field?.labelId`. Full consumption table and known limitations in
[field-context-guideline](field-context-guideline.md#naming-via-labelid-self-labelled--group-components).

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
| [`lib/`](../../src/lib) (`cn`, `mergeRefs`) | external only (React, clsx) |
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

Every lv1 ships **one** `{Component}.css` next to its `.tsx`, and that file
holds **all** of the component's visual rules. Since
[#154](https://github.com/yasmro/schatten/issues/154) it is the source of
truth for the public `.st-*` class API ([css-api.md](css-api.md)), and since
[#317](https://github.com/yasmro/schatten/issues/317) the dist that ships it
is Tailwind-free. Consequences:

- **Everything visual goes in the `.css`, inside `@layer components`** —
  colors, spacing, typography, hover / focus / state rules, light/dark
  differences, layout, `@keyframes`, `prefers-reduced-motion`, and
  component-scoped CSS variables (`--st-spinner-duration`).
- **Raw CSS with `var(--color-*)`, never `@apply`.** lightningcss does not
  process Tailwind directives, so `@apply` would ship as a broken at-rule
  ([css-api.md §raw CSS over `@apply`](css-api.md#component-css-authoring-conventions--raw-css-over-apply)).
- **Semantic tokens only**, never primitive scales (`var(--red-600)`) —
  [state-token-guideline](state-token-guideline.md).
- **No Tailwind utilities in component JSX.** Consumers have no Tailwind.
  CVA only concatenates `.st-*` class names
  ([api-stability.md §CVA output stability](api-stability.md#cva-output-stability)).
  Tailwind remains a Storybook-only tool for story layout scaffolding.
  Machine-enforced for lv1 and lv2 by
  [`no-tailwind-in-component-jsx.test.ts`](../../src/components/__tests__/no-tailwind-in-component-jsx.test.ts)
  — every class literal in `className="…"`, a `className={…}` expression,
  or `cn(…)` must start with `st-`, and so must every class a `cva(…)`
  definition in `src/variants/` can emit. Storybook masks a violation (it loads Tailwind), which is how
  Dialog's footer order shipped broken until
  [#575](https://github.com/yasmro/schatten/issues/575).
- **One `.css` per component.** A second stylesheet for the same component
  needs a reason the single file cannot carry (none exists today).

Examples of the less obvious rules that live in these files:

- [`Tooltip.css`](../../src/components/lv1/Tooltip/Tooltip.css) — directional
  enter/exit animations driven by Radix `[data-state]` and `[data-side]`.
- [`Dialog.css`](../../src/components/lv1/Dialog/Dialog.css) — overlay fade
  and content zoom keyframes, with an inline note on how `translate:` and
  `transform: translate(...)` interact.
- [`Toast.css`](../../src/components/lv1/Toast/Toast.css) — dissolve-in /
  dissolve-out keyframes and the swipe hand-off animation.
- [`Spinner.css`](../../src/components/lv1/Spinner/Spinner.css) — ripple and
  breathe keyframes, plus two component-scoped variables
  (`--st-spinner-duration`, `--st-spinner-ripple-delay`) consumers can
  override.

**Review check:** a PR that touches an lv1 `.css` must keep it raw CSS
(no `@apply` / `@theme` / Tailwind syntax), on semantic tokens, inside
`@layer components`, with state expressed through attributes rather than
state classes ([css-api.md](css-api.md#state-is-expressed-as-attributes-not-classes)).
A PR that adds a second `.css` for one component must say why.

## 8. Accessibility contract

Every lv1 component must expose a stable a11y surface so that consumer
applications can write tests and E2E selectors against role + accessible
name rather than against class names or DOM structure. The
[component-testid-guideline](component-testid-guideline.md) explicitly
treats role-based queries as the first choice and `data-testid` as a
fallback — that policy only holds if the contract below holds.

### The four guarantees

1. **An explicit role**, sourced from one of:
   - A native element with built-in semantics (`<button>`, `<input>`,
     `<textarea>`, `<fieldset>`, heading levels). Default whenever
     possible — Button / Input / Textarea / FieldSet do this today.
   - A Radix primitive that assigns the role for us — Dialog (`dialog`),
     Tooltip (`tooltip`), Checkbox (`checkbox`), Switch (`switch`),
     Select trigger (`combobox`) + content (`listbox`), Radio (`radio`
     inside `radiogroup`).
   - A library's accessibility layer — **Toast** is rendered by Sonner
     (since [#318](https://github.com/yasmro/schatten/issues/318)), which
     announces toast content through a dedicated visually-hidden ARIA live
     region rather than putting `role="status"` on the visible toast
     element. The visible `.st-toast` itself therefore carries no role;
     the announcement contract is satisfied by Sonner's live region
     (polite for all variants — Toast does not switch `aria-live` by
     variant). Vanilla-HTML consumers of the `.st-toast` CSS get the
     visual shell only and must add `role="status"` / `aria-live`
     themselves.
   - An explicit `role="…"` written by Schatten — used only when
     neither of the above gives the right semantic. Current explicit
     uses: [Spinner](../../src/components/lv1/Spinner/Spinner.tsx)
     (`role="status"`),
     [Separator](../../src/components/lv1/Separator/Separator.tsx)
     (`role="separator"` when `decorative={false}`, else
     `role="none"`), and
     [Badge](../../src/components/lv1/Badge/Badge.tsx) (`role="img"`
     on an icon-only badge — a bare `<div>` is role `generic`, which
     cannot hold an accessible name, so the `aria-label` would be
     dropped without it; a consumer-supplied `role` always wins).

   **Choosing the role for an icon-only / symbol-only static element.**
   When a component renders meaning through an icon alone (no text
   children) and needs that meaning exposed as an accessible name, pick
   the role by *what the element is*, not by what looks convenient:

   - **`role="img"`** — the default for a **static** decorative-but-
     meaningful glyph that conveys a label (an icon-only Badge, a status
     chip, a flag icon). `img` is the narrowest role that can carry an
     `aria-label` without implying interactivity or live-region
     semantics. It announces the label once, when focus/reading reaches
     it, and nothing more — which is exactly right for a static marker.
   - **`role="status"` / `role="alert"`** — only when the element's
     content **changes at runtime** and the change must be announced
     (a count that updates, a "saved"/"error" indicator that appears in
     response to an action). These are live-region roles; using one on a
     never-changing badge makes assistive tech re-announce it on
     unrelated DOM mutations and is the wrong semantic. A Badge whose
     *consumer* drives such updates should have the consumer pass the
     live-region role (Badge's consumer-role-wins rule supports this);
     Schatten does not bake it in because most badges are static.
   - **A consumer-supplied `role` always wins.** Schatten's default is a
     floor, not a ceiling — destructure `role` out of props and let the
     consumer's value override, so a consumer who knows their badge is a
     live status can upgrade `img` → `status` without fighting the
     component. (Implemented in Badge: `role` is destructured ahead of
     the `{...props}` spread so it is never re-overwritten.)

   The rule of thumb: **static meaning → `img`; changing meaning →
   live-region role, and prefer to let the consumer opt into it.**

   Wrapping a `<div>` with `onClick` / key handlers to fake
   interactivity is the failure mode this guarantee prevents.

2. **A queryable accessible name**, sourced from one of (in preference
   order):
   - **Children text content** — Button (`<Button>Submit</Button>`),
     Toast title, Callout title.
   - **`aria-labelledby` auto-wired by Radix** — Dialog (`Title` →
     `aria-labelledby` on Content,
     [Dialog.tsx](../../src/components/lv1/Dialog/Dialog.tsx)).
   - **`<label htmlFor>` paired through `FieldContext`** —
     externally-labelled form inputs (Input, Textarea, Select). See
     [field-context-guideline](field-context-guideline.md).
   - **Internal `<label>` rendered by the component** — self-labelled
     form inputs (Checkbox, Switch, Radio).
   - **`aria-labelledby` auto-wired from the Field label via
     `FieldContext.labelId`** — self-labelled form inputs placed inside a
     `<Field label>` without their own `label` (Checkbox, Switch), and
     `RadioGroup` at the group root. See
     [field-context-guideline](field-context-guideline.md#naming-via-labelid-self-labelled--group-components).
   - **`aria-label`** — icon-only or symbol-only triggers. Required
     where a button has no readable text content: Dialog close ✕
     ([Dialog.tsx](../../src/components/lv1/Dialog/Dialog.tsx)),
     Callout close ✕
     ([Callout.tsx](../../src/components/lv1/Callout/Callout.tsx)),
     Toast close ✕
     ([Toast.tsx](../../src/components/lv1/Toast/Toast.tsx)),
     Field tooltip info icon
     ([Field.tsx](../../src/components/lv1/Field/Field.tsx)).

   The contract: `getByRole(role, { name })` returns the component. If
   it does not, the component has no usable accessible name and the
   contract is broken.

3. **Keyboard support**:
   - Reachable via `Tab` — no root-level `tabIndex={-1}` on
     interactive components. (`tabIndex={-1}` is fine on non-focusable
     inner wrappers.)
   - Activates with the role-appropriate key (`Enter` / `Space` for
     buttons; `Arrow` keys for Radio / Select).
   - A visible focus indicator — every interactive block declares a
     `:focus-visible` rule in its `.css` that draws the ring from
     `--color-ring` / `--color-ring-offset` (e.g. `.st-btn:focus-visible`
     in [Button.css](../../src/components/lv1/Button/Button.css)). Do
     not remove it. If a layout conflicts, replace it with an
     equivalent visible indicator, do not delete it.

   For Radix-based components the keyboard wiring is implemented by
   Radix. The contract here is to **not break** it — don't override
   `onKeyDown` without composing the original handler, don't
   intercept focus, don't move handlers off the Radix element.

4. **State announcements via `aria-*`**:
   - **Error state** → `aria-invalid={isError || undefined}`. Wired
     today on Input / Textarea / Select / Checkbox / Switch / Radio /
     RadioGroup / FieldSet. The `|| undefined` is intentional: it
     omits the attribute when false rather than emitting
     `aria-invalid="false"`.
   - **Description / error message** → `aria-describedby`, fed by
     `FieldContext.describedBy` ([field-context-guideline](field-context-guideline.md)).
   - **Disabled** → the native `disabled` attribute when the element
     supports it (form inputs, buttons). Radix's `data-disabled` is a
     styling hook that mirrors the same state, not a substitute for
     the ARIA mapping.
   - **Loading** — component-specific. Button uses
     `aria-hidden={!isLoading}` on its inline spinner so the spinner
     only enters the accessibility tree while loading
     ([Button.tsx](../../src/components/lv1/Button/Button.tsx)).
   - **Required** — Field propagates its `required` to the wrapped
     control as `aria-required` (announce-only) through `FieldContext`,
     mirroring `isError → aria-invalid`. It does **not** enable native
     validation — form-submission blocking still comes only from a
     `required` prop set directly on the control. For the four
     Radix-based controls (Checkbox / Switch / RadioGroup / Select) the
     field-derived value is injected *conditionally* (never as
     `aria-required={undefined}`) so it can't clobber Radix's own
     `required`-derived attribute; the two wiring idioms (native vs.
     Radix) are documented in
     [field-context-guideline](field-context-guideline.md).

### Patterns Schatten relies on

- **Decorative icons get `aria-hidden="true"`.** Every Lucide / SVG
  icon used purely as a visual flourish must be aria-hidden. Existing
  examples: Toast variant icon, Callout variant icon, Input
  leading/trailing icon, Button leading/trailing icon, Badge icon,
  Checkbox mark, Switch knob, Spinner SVG, the `Separator` rendered
  inside Dialog's footer. When you add an icon, add it.
- **Components that intentionally have no default role** —
  [Callout](../../src/components/lv1/Callout/Callout.tsx) ships
  role-less and documents in TSDoc that consumers should pass
  `role="status"` (polite) or `role="alert"` (assertive) when the
  callout content is dynamic. Don't bake in a role that's wrong half
  the time — make the absence explicit and tell the consumer how to
  fill it.
- **Conditional ARIA opt-out** — when a default-wired ARIA reference
  would point at a non-existent node, spread the attribute
  conditionally as `undefined` rather than letting Radix emit a
  dangling reference. Dialog does this for `aria-describedby` when
  `description` is absent
  ([Dialog.tsx](../../src/components/lv1/Dialog/Dialog.tsx)).

### Hard rules

- **Do not** wrap interactive content in a `<div>` with `onClick` and
  call it a button. Use `<button>` (or `<Button>`), or a Radix
  primitive that renders a button.
- **Do not** rely on color alone to convey state. `isError` must set
  `aria-invalid` (for assistive tech), and the error border is drawn by
  the CSS rule that targets that same attribute (for sighted users) —
  both are required, never either-or. Same for
  Callout / Toast variants.
- **Do not** strip the `:focus-visible` ring rule from an interactive
  block's CSS. Override the ring color if you need contrast on a
  colored surface (see Input's
  `.st-input-wrapper:has(.st-input[aria-invalid="true"]:focus-visible)`
  in [Input.css](../../src/components/lv1/Input/Input.css) for the
  pattern), but never disable it outright.
- **Do not** introduce `tabIndex={-1}` on the root of a focusable
  component. It's correct on inner wrappers when focus lives
  elsewhere; it's wrong as a substitute for `disabled`.

### Verifying compliance

1. **Unit test** — every lv1 has a test that calls
   `getByRole(role, { name })` against a representative render. See
   [testing-guideline](testing-guideline.md) § Required test cases.
   "Query by role first" applies (testing-guideline §5).
2. **VRT a11y assertion** — since v0.11.0 (#147) every lv1
   `*.vrt.spec.ts` pairs each screenshot with an `@axe-core/playwright`
   scan (WCAG 2.1 A/AA) that asserts zero violations. Run locally with
   `pnpm test:a11y`; in CI the ubuntu `a11y` job runs it. Since the Phase
   1 backlog was cleared (color-contrast #344, label/button-name #345),
   the gate is **blocking** (#346) — the `a11y` job propagates the
   Playwright exit code, so a new violation fails the PR. The only axe
   `color-contrast` findings that remain are intentional design exceptions
   (solid treatments / inverted-on-saturated / the foreground-subtle
   tertiary tier / the Dialog overlay-compositing artifact), each disabled
   with a documented rationale scoped to its own story; the same
   discipline covers the one other documented exception rule id,
   `aria-hidden-focus` on open Radix poppers (Select / DropdownMenu /
   Popover) — see [vrt-spec-guideline §a11y assertions](vrt-spec-guideline.md).
   The Storybook `addon-a11y` panel remains the manual dev-time companion.
3. **Code review** — when reviewing an lv1 PR, walk the four
   guarantees and Hard rules above. If the component opts out of a
   default (e.g. Callout's no-role posture), the TSDoc must say so
   explicitly and explain how the consumer should fill the gap.

## When this rule changes

- **§1 (lv2):** the promotion criterion and every other lv2 rule live in
  [lv2-composition-guideline.md](lv2-composition-guideline.md) (#492). Keep
  §1 to the folder table and the pointer; change lv2 rules there.
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
- **§8 (a11y contract):**
  - [#147](https://github.com/yasmro/schatten/issues/147) landed the
    `@axe-core/playwright` VRT-paired check (v0.11.0); the Phase 1
    backlog (#344 / #345) is now cleared and the `a11y` CI job is
    blocking (#346) — "Verifying compliance" reflects this. If a future
    component needs a genuinely new exception, it must use one of the two
    documented rule ids (`color-contrast` for design exceptions,
    `aria-hidden-focus` for open Radix poppers), as a documented,
    story-scoped `disableRules([…])` with a rationale (not a blanket
    disable, and no other rule id) — see
    [vrt-spec-guideline §a11y assertions](vrt-spec-guideline.md).
  - `Field.required` now propagates `aria-required` (announce-only) to
    the wrapped control ([#428](https://github.com/yasmro/schatten/issues/428)) —
    guarantee #4's "Required" entry reflects the implemented behavior.
