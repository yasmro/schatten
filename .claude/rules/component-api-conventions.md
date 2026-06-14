# Component API Conventions

## Overview

This document is the **source of truth** for the public prop API shape of every
`lv1` / `lv2` component. It locks down naming, types, and the matrix of valid
values per component, so that:

- AI coding assistants do not invent variants that don't exist
  (`<Button variant="success">` is not a thing; `<Badge variant="primary">` is
  not a thing either — each component subscribes to one of two patterns
  described below).
- Components stay predictable: once a developer learns the vocabulary in one
  component, the same vocabulary applies to every component in its pattern.
- Breaking changes are intentional and one-shot, not slow drift.

The implementation work that brings every component into compliance is tracked
in [#108](https://github.com/yasmro/schatten/issues/108) (v0.7.0). The scope
of that work is mostly the **state-component rename** (`treatment` →
`appearance`, `default` → `neutral` / `accent`); `Button` requires no
significant change.

## Two patterns

The Schatten variant system has **two distinct patterns**, and every
component picks exactly one. Mixing them in a single component is forbidden.

| Pattern | Used by | Shape | Rationale |
|---|---|---|---|
| **A. Role-based (single-axis)** | Action components — `Button`. | `variant` only. Each value names a complete role (color × shape baked together). | Action components have a small, well-known set of UX roles ("primary", "destructive", "link"). Decomposing them into color × shape produces nonsense combinations (`destructive + link`?) and worsens ergonomics for the common case. shadcn/ui — the project base — also keeps Button single-axis. |
| **B. Tone × Shape (two-axis)** | State / notification components — `Badge`, `Callout`, `Toast`. | `variant` (tone) × `appearance` (shape). Each axis is meaningful in isolation. | Components that signal *state* genuinely need both axes: an "error solid Toast" and an "error subtle Callout" both exist, with the same meaning but different visual weight. Naming each pair (e.g. `error-solid`, `error-subtle`) would explode the vocabulary. Pattern B has **no brand-accent variant** — non-state surfaces all go through `neutral`. |

**How to choose a pattern when designing a new component.** Ask:
"Do I want a user to dial color independently of visual weight?"

- **No** — the component has a few UX roles each with their own look. → Pattern A.
- **Yes** — the same color can appear at multiple weights, and the same weight at multiple colors. → Pattern B.

Form components (`Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`)
sit outside both patterns: they have no `variant` at all (always neutral),
and error state is communicated via the `isError` boolean. `Text` is also
out-of-pattern — it re-uses `variant` for typography role (`body | label |
heading`), the **only** approved deviation from these conventions.

## Pattern A — Role-based (single-axis)

For action components, `variant` is a single enum where each value names a
**role** — i.e. a (color × shape) preset that a UX role-name like "primary"
or "destructive" already implies.

### Button vocabulary

| `variant` | Role | Visual |
|---|---|---|
| `primary` *(default)* | Main CTA. | Brand-accent filled. |
| `secondary` | Secondary action. | Neutral outlined. |
| `tertiary` | Low-priority action. | Neutral ghost (no border, transparent bg). |
| `destructive` | Destructive intent (delete, remove). | `destructive-*` filled. |
| `inverted` | Ghost button intended for placement on a saturated surface (e.g. solid `Toast`, banner). | Transparent bg + inverted foreground; hover tints with `current/10`. |
| `link` | Inline text-link styling. | Underline, no padding. |

Rationale notes:
- **`destructive` stays distinct from `error`.** Even though both ultimately
  reference vermillion, `destructive` is an *action's intent*, `error` is
  a *state*. Keeping them as separate names lets us retune them
  independently. See [state-token-guideline](state-token-guideline.md#destructive-vs-error).
- **No `success` / `warning` / `info` variants on Button.** Buttons are
  actions, not state surfaces. State communication belongs on Badge,
  Callout, Toast.
- **No `appearance` prop.** Pattern A doesn't expose `appearance`. If you
  want an outlined-accent button, that's a UX decision that belongs in
  the role vocabulary — propose a new role (`primary-outline`?) via
  issue, don't sneak in a second axis.

### When to add a new role

If a real, recurring UX use case doesn't fit the table above, add a new
role entry rather than reaching for a `appearance` workaround. The roster
should stay small (target ≤ 8 roles) — if it bloats, that's a sign the
component should split into two.

## Pattern B — Tone × Shape (two-axis)

For state / notification components, two orthogonal props:

- `variant` → **tone** (what does this mean?)
- `appearance` → **shape / weight** (how strongly is it presented?)

### Tone vocabulary (`variant`)

| Value | Meaning | Token family |
|---|---|---|
| `neutral` *(default)* | No semantic meaning. The "this is just a chip / banner / toast" baseline. Covers all three appearances; `solid` reuses `--color-solid` (the same token Button primary uses) so visual identity is shared across the "main interactive fill" surfaces. | `foreground` / `border-strong` / `surface-hover` (subtle); `solid` / `solid-foreground` (solid) |
| `success` | Positive state (completed, saved). | `success-*` |
| `error` | Error state (form invalid, request failed). | `error-*` |
| `warning` | Caution state. | `warning-*` |
| `info` | Informational state. | `info-*` |

Tone vocabulary does **not** include `destructive` — Pattern B components
are not actions, so destructive intent doesn't apply.

Tone vocabulary intentionally does **not** include `accent` either —
Pattern B doesn't have a "brand-color but no state" tone. Designers
needing an emphatic non-state surface use `neutral + solid`; brand
expression on Pattern B happens through the theme layer (Mode × Special,
see [theme-architecture](theme-architecture.md)) and through state
variants like `error` (which uses vermillion). Adding an `accent` tone
that routes back to `--color-solid` (or to a brand-named token like
`--color-vermillion`) was considered and rejected because the visual
would have overlapped `neutral + solid` without adding a distinguishable
role (2026-05-17 review).

### Shape vocabulary (`appearance`)

| Value | Description |
|---|---|
| `solid` | Saturated background fill + `*-foreground` text. High visual weight. |
| `outline` | Transparent background + colored border. Medium weight. |
| `subtle` *(default for state surfaces)* | Tinted background (`*-subtle`) + tone-colored text. Low weight. |

The value names align 1:1 with the underlying token suffix — `solid` uses
`base + foreground` (and reaches for `--color-solid` / `bg-solid` in the
neutral case), `subtle` uses `*-subtle + base`, `outline` uses `base` for
border and text. This 1:1 alignment is deliberate: when a developer reads
`appearance="subtle"`, the CSS class they expect to see (`bg-{state}-subtle`)
matches the prop value without translation. Never hard-code primitive
colors; consume semantic tokens. See
[state-token-guideline](state-token-guideline.md).

Pattern B intentionally **does not** include `ghost` or `link` in the
`appearance` vocabulary — those belong to Pattern A (action) and don't make
sense for chips/banners.

## Per-component matrix

The authoritative table of which pattern (and which subset of values) each
component uses.

| Component | Pattern | Supported `variant` | Supported `appearance` | Notes |
|---|---|---|---|---|
| `Button` | A | `primary` · `secondary` · `tertiary` · `destructive` · `inverted` · `link` | — | No `appearance` prop. See Pattern A vocabulary. |
| `Badge` | B | `neutral` · `success` · `error` · `warning` · `info` | `solid` · `outline` · `subtle` | All three shapes meaningful (chip, ring, subtle fill). |
| `Callout` | B | `neutral` · `success` · `error` · `warning` · `info` | `solid` · `subtle` | No `outline` — Callouts need a tinted surface to convey state. |
| `Toast` | B | `neutral` · `success` · `error` · `warning` · `info` | `solid` · `subtle` | Same shape subset as `Callout`. |
| `Spinner` | — | `default` · `inverted` | — | Out of pattern. `default` for ordinary surfaces, `inverted` for use on saturated/colored surfaces (inside a solid Button, on a `*-foreground` background). Kept as a small special case rather than forced into Pattern A/B; revisit only if Spinner gains more color needs. |
| `Icon` | — | (none) | — | Out of pattern. A `lucide-react` wrapper with `size` (`sm`/`md`/`lg`) + a `color` prop — no `variant`/`appearance`. `color` reuses `Text`'s vocabulary; see the `color` row in Common props. |
| `Input` · `Textarea` · `Select` · `Checkbox` · `Radio` · `Switch` | — | (none — always neutral) | — | Error state via the `isError` prop, not `variant`. |
| `Text` | (exception) | re-used for typography role: `body` \| `label` \| `heading` | — | Typography is structural, not chrome — color lives on a separate `color` prop. The **only** approved re-use of the `variant` prop name with different semantics. |
| `DropdownMenuItem` (incl. `SubTrigger`) | A (menu-item subset) | `default` · `destructive` | — | A menu **item** is an action, not a state surface. It takes a reduced Pattern A vocabulary: `default` (the resting action, no extra modifier) and `destructive` (delete/remove intent, → `--color-destructive`, mirroring `Button`'s `destructive`). No `appearance` prop. `default` is the menu-item resting role and does **not** reintroduce the removed Pattern B `default` tone. Other DropdownMenu parts (`Content` / `CheckboxItem` / `RadioItem` / `Label` / `Separator` / `Sub*`) carry no `variant`. |
| `Tooltip` · `Dialog` · `Separator` · `Field` · `FieldSet` | — | n/a — no color variants by design | — | Tooltip/Dialog are surfaces; Separator/Field/FieldSet are layout. |

If a new component doesn't fit any pattern, **stop and discuss first** —
either it really wants Pattern A (add to the table) or it's signaling that
the component should be decomposed into smaller primitives.

## Removed legacy variants

These names appeared in pre-v0.7.0 components and will be removed by
[#108](https://github.com/yasmro/schatten/issues/108). They must not be
reintroduced.

| Legacy | Replacement | Notes |
|---|---|---|
| `Badge/Callout/Toast variant="default"` | `variant="neutral"` | Pure rename. All `default` callsites map 1:1 to `neutral` regardless of treatment — no visual change. Pattern B has no separate brand-accent tone. |
| `treatment` (prop name) | `appearance` | Across the board. Values (`solid` / `subtle` / `outline`) are unchanged — only the prop name moves. |

The shape values (`solid` / `subtle` / `outline`) are **kept as-is** from
the legacy `treatment` vocabulary — they already align with the semantic
token suffixes (`--color-solid`, `--color-{state}-subtle`) and CSS class
names (`bg-solid`, `bg-{state}-subtle`), so renaming them would only
introduce a translation layer between prop values and tokens.

`Button`'s vocabulary (`primary` / `secondary` / `tertiary` / `destructive` /
`inverted` / `link`) is **kept as-is**. That was the original intent of
single-axis Pattern A: the existing role names are already correct, so
#108's Button scope shrinks to "remove ad-hoc `appearance` mentions in
TSDoc / stories" (none to remove today).

## Common props (across all components)

These prop names and types are reserved and must not be reused with
different semantics in any component.

| Prop | Type | Semantics | Where it applies |
|---|---|---|---|
| `variant` | union — vocabulary depends on the component's pattern | Pattern A: role. Pattern B: tone. | Components that have a variant axis. |
| `appearance` | union (see Pattern B shape vocabulary) | Visual weight / shape. | **Pattern B components only.** Never on Pattern A. |
| `size` | `'sm' \| 'md' \| 'lg'` | Sizing. Always these three; never `xs` / `xl` on chrome (typography has its own scale). Default `'md'`. | Universal where applicable. |
| `isError` | `boolean` | Form-state error indication. | Form components only — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `RadioGroup`. |
| `isLoading` | `boolean` | Async action in flight; component disables itself and shows a spinner. | Action components — `Button`. `Dialog` exposes the same semantics nested as `actionButton.isLoading` / `subActionButton.isLoading`. |
| `disabled` | `boolean` | HTML standard. No `is` prefix. | All interactive components. |
| `readOnly` | `boolean` | HTML standard. No `is` prefix. | Form components that can be displayed without editing. |
| `required` | `boolean` | HTML standard. No `is` prefix. | Form components inside a `<Field>`. |
| `id` | `string` | HTML standard. When inside `<Field>`, the field's `id` wins for label-association components (`Input` / `Textarea` / `Select`) — see [field-context-guideline](field-context-guideline.md). |
| `asChild` | `boolean` | Delegates rendering to the child via Radix `Slot`. **Adoption criteria below.** | Public on `Button` only. For "styling on my own element" prefer `*Variants()` — see [asChild vs `*Variants()`](#aschild-vs-variants--which-to-reach-for). |
| `icon` | `LucideIcon` (from `lucide-react`) | A Lucide **icon component** rendered alongside content. Passed as a component, never a name string, so consumer bundles tree-shake icons. The icon vendor is fixed to Lucide; widening to a vendor-agnostic type later is non-breaking. | `Button` / `Badge` (`icon`); `Input` (`iconLeft` / `iconRight`); `Dialog` footer-button slots (`actionButton.icon` / `cancelButton.icon` / `subActionButton.icon`); `DropdownMenuItem` / `DropdownMenuSubTrigger` (`icon` — leading); the standalone `Icon` component (`icon`). |
| `color` | union — the shared `Text` / `Icon` color vocabulary (`default` / `muted` / `subtle` · `error` / `success` / `warning` / `info` · `inverted` / `inverted-muted` / `inverted-subtle` · `vermillion` / `indigo` · `inherit`) | A foreground / state / inverted / brand color token. Distinct from `variant` (role/tone) and `appearance` (weight). | `Text` and `Icon` only — both share one vocabulary. Defaults differ by component: `Text` → `default`, `Icon` → `inherit` (composition-safe, takes the surrounding `currentColor`). |

### Boolean prop naming

- **`is*` prefix** for schatten-specific state booleans: `isError`,
  `isLoading`. These describe a component state we own, where adding the
  prefix makes the flag read clearly as state (`error?: boolean` vs
  `isError?: boolean`).
- **No prefix** for HTML-native attributes: `disabled`, `readOnly`,
  `required`, `checked`, `open`. Matching the HTML name lets developers
  and AI tools rely on prior knowledge.

If a new boolean prop is needed and doesn't map to an HTML attribute,
prefer the `is*` form unless the unprefixed name is unambiguous and
idiomatic in React (e.g. `multiline`, not `isMultiline`).

## `asChild` adoption criteria

`asChild` (Radix `Slot`) lets a component delegate its rendering to its
child, merging props onto the child element. It is powerful but introduces
an invisible API contract: every consumer needs to remember which props
are *forwarded* and which are *consumed* by the wrapper.

Adopt `asChild` **only** when the component satisfies all three:

1. **There is a real reason to render as a different element.** The most
   common case is a `<Button>` that should actually be a Next.js `<Link>`
   or an `<a>` for accessibility / SEO — the *behavior* is button-like
   but the *element* must be an anchor. Without this need, `asChild` is
   just ceremony.
2. **The component's internal state does not break when the element
   changes.** A component that injects a `<Spinner>` overlay or renders
   multiple children internally (icon + label + spinner) **must**
   disable `asChild` features that don't compose — see how
   [`Button.tsx`](../../src/components/lv1/Button/Button.tsx) ignores
   `isLoading` when `asChild` is true and emits a `console.warn` to tell
   the developer.
3. **The component is a leaf-ish primitive.** `asChild` on structural /
   container components (a Field, a Dialog body) tends to break layout
   assumptions. Keep it on small primitives (`Button`).

Components that expose `asChild` as **public, consumer-facing API**:
`Button` only.

`Text` exposed `asChild` before v0.11.0 but no longer does — its
polymorphism is covered by `as` (a closed enum of semantic tags) and
`textVariants()` (an arbitrary element), so `asChild` was redundant. See
[asChild vs `*Variants()` — which to reach for](#aschild-vs-variants--which-to-reach-for)
below.

Components that use `asChild` **internally but do not expose it** (the
prop is not part of their public type, so a consumer cannot pass it):

- `Tooltip.Trigger` — hides `asChild` via `Omit<…, 'asChild'>` and decides
  internally from `isTextOnly` (string child → Radix renders its own
  `<button>`; element child → `asChild` is set for you). The consumer never
  passes `asChild`.
- `Dialog` — has no public `Trigger` / `Close` export at all (it is a
  curated-props component driven by controlled `isOpen` / `onOpenChange`).
  The `DialogPrimitive.Close asChild` usage inside it is implementation
  detail.
- `Select.Trigger` — does **not** expose `asChild` (the prop is excluded
  via `Omit<…, 'size' | 'asChild'>`). `Select` triggers are form controls
  and fall under the hard exclusion below.

**Do not** add `asChild` to: `Input`, `Textarea`, `Select` trigger,
`Checkbox`, `Radio`, `Switch`, `Badge`, `Callout`, `Toast` — none of them
need to render as a non-default element, and Radix Slot composition with
form-control internals is a footgun.

### asChild vs `*Variants()` — which to reach for

Both `asChild` and the exported CVA functions (`buttonVariants()` /
`textVariants()`) let a consumer apply Schatten styling to a non-default
element. They are **not** interchangeable — they hand the consumer
different things:

| | `asChild` (Radix `Slot`) | `*Variants()` (class function) |
|---|---|---|
| What the consumer gets | Button's resolved `className` **plus its forwarded props** (`onClick`, `type`, `data-*`, `ref`, …) merged onto a **single child** element via Slot — the child *becomes* the button | **Only the class string** |
| Context | React only (Slot is a React construct) | Any context — server-rendered HTML, email, framework `<Link>` |
| Typing | Schatten merges props onto the child (the child's own props are partly shadowed) | The consumer's element keeps its **own native typing**, no prop-forwarding ambiguity |
| Reach for it when | "Make this element **behave as** the Button — forward its events / ref / class onto my element" (the shadcn idiom) | "Put the Button **look** on my own element, nothing else" |

**Important — `asChild` does not project Button's inner content.** In
`asChild` mode Button renders **only `children`**; its `icon` and
`isLoading` are *not* rendered (see the `asChild` branch in
[`Button.tsx`](../../src/components/lv1/Button/Button.tsx) — it returns
`<Comp …>{children}</Comp>` with no icon slot or spinner overlay). So
`asChild` is "make my element a button-styled, button-behaving element,"
**not** "render Button's internals onto my element." If you want an icon,
author it inside your child yourself.

The framework-`<Link>` case is the canonical fork, and **both answers are
valid depending on intent**:

```tsx
// Want events / ref / class forwarded onto the Link (shadcn idiom):
<Button asChild><NextLink href="/docs">Docs</NextLink></Button>

// Want only the visual skin — fully-typed Link, no prop-forwarding:
<NextLink href="/docs" className={buttonVariants({ variant: 'primary' })}>Docs</NextLink>
```

The two outputs are nearly identical DOM (`<a class="st-btn st-btn--primary …">`);
the difference is that `asChild` *also* forwards Button's props / ref onto
the child, whereas `*Variants()` hands back only the string and leaves the
element entirely to the consumer. The one-line rule: **want prop / event /
ref forwarding onto your element → `asChild`; want only the classes →
`*Variants()`.** This is also why new lv1s default to *not* exposing
`asChild` — see
[component-architecture.md §3](component-architecture.md#3-aschild--no-new-lv1-additions).

## TSDoc on Props

Every public prop on the `Props` interface MUST carry a TSDoc comment
(`/** ... */`). TSDoc is the source of truth — Storybook
`argTypes.description` mirrors it. For full guidance see
[storybook-guideline](storybook-guideline.md#tsdoc-on-props-source-of-truth).

For `variant` (both patterns) and `appearance` (Pattern B), list each
option's purpose with a bullet list inside the TSDoc, and add `@default`
matching the CVA `defaultVariants` value.

## Defaults

| Prop | Default |
|---|---|
| `variant` (Pattern A — Button) | `'primary'`. |
| `variant` (Pattern B — Badge/Callout/Toast) | `'neutral'`. |
| `appearance` (Pattern B) | `'subtle'` for state surfaces (Callout, Toast). `Badge` also defaults to `'subtle'` (current behavior). |
| `size` | `'md'`. |
| `isError`, `isLoading`, `disabled`, `readOnly`, `required` | `false`. |

Defaults are encoded in the CVA `defaultVariants` for visual props, and
in the destructuring default of the React component for booleans. Keep
the two in sync — when you change the CVA default, update the
component's destructuring default in the same commit.

## When adding a new component

1. **Pick a pattern first.** Run the "does color move independently of
   weight?" test from the *Two patterns* section. Document the decision
   in the component's TSDoc header.
2. **Look up vocabularies, don't invent.** For Pattern A: re-use existing
   roles where possible (`primary` / `secondary` / …). For Pattern B:
   use the canonical tone (`neutral` / `success` / `error` / `warning` /
   `info`) and shape (`solid` / `subtle` / `outline`) vocabularies.
   **Subsetting is encouraged; extending requires discussion.**
3. **Reuse existing tokens.** Never reach for primitive scales — go
   through semantic tokens (`bg-error`, `text-error-foreground`, …). See
   [state-token-guideline](state-token-guideline.md).
4. **Reuse existing common-prop names.** `size` is `'sm' | 'md' | 'lg'`,
   not `'small' | 'medium' | 'large'`. Boolean error is `isError`, not
   `error`.
5. **Write the Props interface with TSDoc first.** Storybook `argTypes`,
   tests, and stories all hang off the same prop names — getting them
   right the first time saves churn.
6. **Add stories per the [storybook-guideline](storybook-guideline.md).**
   Always include a `Playground` story; group the rest by prop axis
   (`AllVariants` for Pattern A; `Variants`, `Appearances`, `Combinations`
   for Pattern B).
7. **If the new component genuinely needs vocabulary not in this
   document** (e.g. a `pulse` shape for an animated badge), update this
   document in the same PR. Don't introduce dialect.
