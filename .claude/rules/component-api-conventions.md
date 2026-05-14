# Component API Conventions

## Overview

This document is the **source of truth** for the public prop API shape of every
`lv1` / `lv2` component. It locks down naming, types, and the matrix of valid
values per component, so that:

- AI coding assistants do not invent variants that don't exist
  (`<Button variant="success">` is not a thing, even though `success` is a
  valid `variant` for other components).
- Components stay predictable: once a developer learns the vocabulary in one
  component, the same vocabulary applies everywhere else.
- Breaking changes are intentional and one-shot, not slow drift.

The implementation work that brings every component into compliance with this
document is tracked in [#108](https://github.com/yasmro/schatten/issues/108)
(v0.7.0). Until that lands, some components (notably `Button`,
`Badge`, `Callout`, `Toast`) still use the legacy vocabulary
(`primary | secondary | tertiary`, `solid | subtle | outline`). New components
**must** use the conventions in this document; legacy components will be
migrated under #108.

## The two-axis variant model

Visual style is decomposed into **two orthogonal axes**:

| Axis | Prop | Answers the question | Examples |
|---|---|---|---|
| **Color tone** | `variant` | "What does this *mean*?" | `accent`, `error`, `success`, `destructive` |
| **Shape / treatment** | `appearance` | "How *strong* is the visual weight?" | `filled`, `outlined`, `soft`, `ghost`, `link` |

Keeping these separate means a single semantic (e.g. "error") can appear as a
filled solid Toast, a soft Callout, or an outlined Badge without inventing
three different variant names.

### `variant` vocabulary (global)

| Value | Meaning | Token family |
|---|---|---|
| `neutral` | Default, no semantic meaning. The "this is just a button" baseline. | `foreground` / `border-strong` / `surface-hover` |
| `accent` | Brand accent — used for the main CTA, highlighted Badge, etc. | `solid` (the brand-accent role token) |
| `success` | Positive state (completed, saved). | `success-*` |
| `error` | Error state (form invalid, request failed). | `error-*` |
| `warning` | Caution state (about to do something risky). | `warning-*` |
| `info` | Informational state. | `info-*` |
| `destructive` | Destructive **intent** of an action (delete, remove). | `destructive-*` |

`destructive` and `error` share the same primitive (vermillion) but are
**semantically distinct** — `destructive` is an action's *intent*, `error` is
a *state*. See [state-token-guideline](state-token-guideline.md#destructive-vs-error)
for the why. We keep them as two separate `variant` values so that if we ever
retune error red ≠ destructive red, only the semantic mapping needs to change.

### `appearance` vocabulary (global)

| Value | Description |
|---|---|
| `filled` | Saturated background fill + `*-foreground` text. High visual weight. |
| `outlined` | Transparent background + border in the variant color. Medium weight. |
| `soft` | Subtle tinted background (`*-subtle`) + variant-colored text. Low weight. |
| `ghost` | No border, transparent background. Hover reveals a tinted surface. Lowest weight before `link`. |
| `link` | Inline text-link styling (underline, no padding). Only for `Button`. |

Implementation note: the names map to existing tokens — `filled` uses the
4-token shape's `base` + `foreground`, `soft` uses `subtle` + `base`,
`outlined` uses `base` for border and text. New components should never
hard-code primitive colors; consume the semantic tokens via these
treatments. See [state-token-guideline](state-token-guideline.md).

### Per-component matrix

Not every component supports every `variant` × `appearance` combination. The
table below is the **complete authoritative matrix**.

| Component | Supported `variant` | Supported `appearance` | Notes |
|---|---|---|---|
| `Button` | `neutral` · `accent` · `destructive` | `filled` · `outlined` · `ghost` · `link` | No state variants (`success`/`error`/...) — buttons are actions, not state. |
| `Badge` | `neutral` · `accent` · `success` · `error` · `warning` · `info` | `filled` · `outlined` · `soft` | No `ghost` / `link` — Badges have a pill shape; a transparent border-less chip would render as inline text. |
| `Callout` | `neutral` · `accent` · `success` · `error` · `warning` · `info` | `filled` · `soft` | No `outlined` — Callouts need a tinted surface to convey state. |
| `Toast` | `neutral` · `accent` · `success` · `error` · `warning` · `info` | `filled` · `soft` | Same as `Callout`. |
| `Spinner` | (none — single neutral color) | (none) | Inherits color from the nearest `text-*` ancestor via `currentColor`. The legacy `variant: 'inverted'` will be removed when [#108](https://github.com/yasmro/schatten/issues/108) lands — callsites that need an "on saturated surface" spinner should style the *parent* with `text-*-foreground` rather than passing a flag to the Spinner. |
| `Input` · `Textarea` · `Select` · `Checkbox` · `Radio` · `Switch` | (none — always neutral) | (none — always implicitly outlined) | Error state via the `isError` prop, not `variant`. |
| `Text` | n/a — Text intentionally re-uses the `variant` prop name for a **different** axis (typography role: `body` \| `label` \| `heading`) | n/a | Typography is structural, not chrome — color belongs on the separate `color` prop. This is the **only** approved deviation from the global vocabulary. |
| `Tooltip` · `Dialog` · `Separator` · `Field` · `FieldSet` | n/a — no color variants by design | n/a | Tooltip/Dialog are surfaces; Separator/Field/FieldSet are layout. |

If you find yourself wanting a combination not in this table, **don't add it
quietly**. Either:

1. Open an issue proposing the addition with a real use case, OR
2. Compose existing primitives (e.g. wrap a `<Button appearance="ghost">`
   yourself rather than inventing a new `appearance`).

### Removed legacy variants

These names appeared in pre-v0.7.0 components and **will be removed** by
[#108](https://github.com/yasmro/schatten/issues/108). They must not be
reintroduced.

| Legacy | Replacement |
|---|---|
| `Button variant="primary"` | `variant="accent"` (default — usually unspecified) |
| `Button variant="secondary"` | `variant="neutral" appearance="outlined"` |
| `Button variant="tertiary"` | `variant="neutral" appearance="ghost"` |
| `Button variant="destructive"` | `variant="destructive"` (kept — same name) |
| `Button variant="link"` | `appearance="link"` (variant is irrelevant) |
| `Button variant="inverted"` | `appearance="ghost"` on a saturated surface — colors flow from `currentColor`. The explicit `inverted` value goes away (no manual context flag). |
| `Badge/Callout/Toast variant="default"` *(soft / outlined cases)* | `variant="neutral"` |
| `Badge/Callout/Toast variant="default" treatment="solid"` *(filled case)* | `variant="accent" appearance="filled"` — the legacy `default + solid` was overloaded and used the brand-accent `bg-solid` token, so the migration is to `accent`, not `neutral`. Going forward `neutral + filled` is a gray-ish surface and `accent + filled` is the brand color. |
| `Badge/Callout/Toast treatment="solid"` | `appearance="filled"` |
| `Badge/Callout/Toast treatment="subtle"` | `appearance="soft"` |
| `Badge treatment="outline"` | `appearance="outlined"` |
| `treatment` (prop name) | `appearance` |
| `Spinner variant="inverted"` | (removed) Style the parent with `text-{state}-foreground` (or any `text-*` utility) and the Spinner inherits via `currentColor`. |

## Common props (across all components)

These prop names and types are reserved and must not be reused with different
semantics in any component.

| Prop | Type | Semantics | Where it applies |
|---|---|---|---|
| `variant` | union (see matrix) | Color tone — what this means. | Components with color variants (`Button`, `Badge`, `Callout`, `Toast`, …). |
| `appearance` | union (see matrix) | Shape / visual weight. | Components with multiple visual treatments. |
| `size` | `'sm' \| 'md' \| 'lg'` | Sizing. Always these three; never `xs` or `xl` on chrome components (typography uses its own scale). | Universal where applicable. Default `'md'`. |
| `isError` | `boolean` | Form-state error indication. | Form components only — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `RadioGroup`. |
| `isLoading` | `boolean` | Async action in flight; component disables itself and shows a spinner. | Action components — `Button`. `Dialog` exposes the same semantics nested as `actionButton.isLoading` / `subActionButton.isLoading`. |
| `disabled` | `boolean` | HTML standard. No `is` prefix. | All interactive components. |
| `readOnly` | `boolean` | HTML standard. No `is` prefix. | Form components that can be displayed without editing. |
| `required` | `boolean` | HTML standard. No `is` prefix. | Form components inside a `<Field>`. |
| `id` | `string` | HTML standard. When the component is inside `<Field>`, the field's `id` wins for label-association components (`Input` / `Textarea` / `Select`) — see [field-context-guideline](field-context-guideline.md). |
| `asChild` | `boolean` | Delegates rendering to the child via Radix `Slot`. **Adoption criteria below.** | Only components that satisfy the criteria. |

### Boolean prop naming

- **`is*` prefix** for schatten-specific state booleans: `isError`, `isLoading`.
  These describe a component state we own, where adding/removing the prefix
  would lose meaning (`error?: boolean` vs `isError?: boolean` — the latter
  reads more clearly as a state flag).
- **No prefix** for HTML-native attributes: `disabled`, `readOnly`, `required`,
  `checked`, `open`. Matching the HTML name lets developers and AI tools rely
  on prior knowledge.

If a new boolean prop is needed and doesn't map to an HTML attribute, prefer
the `is*` form unless the unprefixed name is unambiguous and idiomatic in
React (e.g. `multiline`, not `isMultiline`).

## `asChild` adoption criteria

`asChild` (Radix `Slot`) lets a component delegate its rendering to its
child, merging props onto the child element. It is powerful but it
introduces an invisible API contract: every consumer needs to remember which
props are *forwarded* and which are *consumed* by the wrapper.

Adopt `asChild` **only** when the component satisfies all three:

1. **There is a real reason to render as a different element.** The most
   common case is a `<Button>` that should actually be a Next.js `<Link>` or
   an `<a>` for accessibility/SEO — the *behavior* is button-like but the
   *element* must be an anchor. Without this need, `asChild` is just
   ceremony.
2. **The component's internal state does not break when the element
   changes.** A component that injects a `<Spinner>` overlay or renders
   multiple children internally (icon + label + spinner) **must** disable
   `asChild` features that don't compose — see how
   [`Button.tsx`](../../src/components/lv1/Button/Button.tsx) ignores
   `isLoading` when `asChild` is true and emits a `console.warn` to tell
   the developer.
3. **The component is a leaf-ish primitive.** `asChild` on structural /
   container components (a Field, a Dialog body) tends to break layout
   assumptions. Keep it on small primitives (`Button`, `Tooltip.Trigger`,
   `Dialog.Trigger`).

Components that currently expose `asChild`: `Button`, `Tooltip.Trigger`,
`Dialog.Trigger`, `Dialog.Close`, `Select.Trigger`, `Text`.

**Do not** add `asChild` to: `Input`, `Textarea`, `Checkbox`, `Radio`,
`Switch`, `Badge`, `Callout`, `Toast` — none of them need to render as a
non-default element, and Radix Slot composition with form-control internals
is a footgun.

## TSDoc on Props

Every public prop on the `Props` interface MUST carry a TSDoc comment
(`/** ... */`). TSDoc is the source of truth — Storybook `argTypes.description`
mirrors it. For full guidance see
[storybook-guideline](storybook-guideline.md#tsdoc-on-props-source-of-truth).

For `variant` / `appearance`, list each option's purpose with a bullet list
inside the TSDoc, and add `@default` matching the CVA `defaultVariants`
value.

## Defaults

| Prop | Default |
|---|---|
| `variant` | `'neutral'` (`Button` defaults to `'accent'` because the main CTA case is overwhelming). |
| `appearance` | `'filled'` for action components (Button), `'soft'` for state components (Badge, Callout, Toast). |
| `size` | `'md'`. |
| `isError`, `isLoading`, `disabled`, `readOnly`, `required` | `false`. |

Defaults are encoded in the CVA `defaultVariants` for the visual props, and
in the destructuring default of the React component for the booleans. Keep
the two in sync — when you change the CVA default, update the component's
destructuring default in the same commit.

## When adding a new component

1. **Decide where it sits in the matrix** before writing code. Pick the
   `variant` subset and `appearance` subset that apply, and check the
   defaults make sense for the component's most common use.
2. **Reuse existing tokens.** Never reach for primitive scales — go through
   semantic tokens (`bg-error`, `text-error-foreground`, …). See
   [state-token-guideline](state-token-guideline.md).
3. **Reuse existing prop names.** `size` is `'sm' | 'md' | 'lg'`, not
   `'small' | 'medium' | 'large'`. `isError`, not `error` (when boolean).
4. **Write the Props interface with TSDoc first.** Storybook `argTypes`,
   tests, and stories all hang off the same prop names — getting them right
   the first time saves churn.
5. **Add stories per the [storybook-guideline](storybook-guideline.md).**
   Always include a `Playground` story; group the rest by prop axis
   (`AllVariants`, `Appearances`, `Sizes`, `Disabled`, …).
6. **If the new component genuinely needs a vocabulary not in this
   document** (e.g. a `pulse` appearance for an animated badge), update
   this document in the same PR. Don't introduce dialect.
