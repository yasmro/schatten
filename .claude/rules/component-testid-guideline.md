# Component testid Guideline

## Overview

`data-testid` is the contract that lets a consumer's E2E suite latch onto a
Schatten component without depending on class names, ARIA attributes, or DOM
structure. This document codifies **how** that contract is exposed on Schatten
components and — equally important — what Schatten itself must **not** do.

Goal: a consuming product can write a stable selector against any rendered
Schatten element, including ones that escape into a Portal, without Schatten
ever choosing a testid on the consumer's behalf.

## Core policy: direct `...props` pass-through

Schatten components forward `data-testid` (and every other unknown DOM attribute)
to their root element via `...rest`. There is **no** dedicated `testId` prop.

```tsx
<Button data-testid="submit-btn">Submit</Button>
// → <button data-testid="submit-btn" class="…">Submit</button>
```

### Why no dedicated prop

- `data-testid` is already a standard DOM attribute — TypeScript accepts it via
  the `HTMLAttributes` extension, and React passes it through unchanged. A
  custom `testId` prop would be a parallel surface that adds nothing.
- A pass-through model means the same approach works for any other
  `data-*` attribute consumers might want (`data-cy`, `data-test`, etc.) — no
  per-attribute prop expansion.

### What this requires of component authors

Every `lv1` / `lv2` component **must** accept `...props` (or `...rest`) and
spread it onto its rendered root element. This is already the prevailing
pattern (see [Separator](../../src/components/lv1/Separator/Separator.tsx),
[Button](../../src/components/lv1/Button/Button.tsx),
[Callout](../../src/components/lv1/Callout/Callout.tsx), etc.) — keep doing it.

If a component intentionally does *not* pass `...rest` through (e.g. it
accepts a curated, non-DOM prop surface — see [Exceptions](#exceptions-high-level-components-without-rest)
below), document that explicitly and provide a documented alternative.

## Compound components

Each subcomponent receives its own `data-testid` independently. The canonical
example in Schatten is [Select](../../src/components/lv1/Select/Select.tsx):

```tsx
<Select>
  <SelectTrigger data-testid="country-trigger">
    <SelectValue placeholder="Country" />
  </SelectTrigger>
  <SelectContent data-testid="country-content">
    <SelectItem value="jp" data-testid="country-item-jp">Japan</SelectItem>
    <SelectItem value="us" data-testid="country-item-us">United States</SelectItem>
  </SelectContent>
</Select>
```

Same shape applies to [Tooltip](../../src/components/lv1/Tooltip/Tooltip.tsx)
(`TooltipTrigger` / `TooltipContent`) and [RadioGroup](../../src/components/lv1/Radio/Radio.tsx)
(`RadioGroup` / `Radio`).

### Caveat: Trigger components that use Radix `asChild`

`TooltipTrigger` switches to `asChild` mode when its child is a non-string
element (e.g. `<Button>`). In `asChild` mode Radix **merges props onto the
child**, so `data-testid` ends up on the child, not on a wrapper:

```tsx
// Text child → asChild=false → Radix renders its own <button>, testid on it
<TooltipTrigger data-testid="help">Hover for help</TooltipTrigger>
// → <button data-testid="help" data-state="…">Hover for help</button>

// Element child → asChild=true → testid is merged onto the Button
<TooltipTrigger data-testid="help"><Button>Help</Button></TooltipTrigger>
// → <button data-testid="help" class="btn …">Help</button>
```

Both end up addressable by `getByTestId('help')` — but be aware that in the
second case the testid is on **your** Button, not on a Schatten-rendered
wrapper. This matters when writing assertions about DOM structure around the
trigger.

## Portal-rendered content

`SelectContent`, `TooltipContent`, and similar portal-mounted content render
into `document.body`, **outside** `#storybook-root` and outside any component
subtree in the DOM tree (even though they are children in the React tree).

Two consequences:

1. **Put the testid on the Content element itself**, not on the Trigger. A
   selector rooted at the Trigger element will never reach the portaled
   content via DOM traversal:

   ```tsx
   // ❌ Trigger testid doesn't help reach the popup
   <SelectTrigger data-testid="country">…</SelectTrigger>
   ```

   ```tsx
   // ✅ Content has its own testid
   <SelectContent data-testid="country-options">…</SelectContent>
   ```

2. **Scope queries from `page` (not from a component-local root)**. In
   Playwright:

   ```ts
   await page.getByTestId('country-trigger').click()
   const options = page.getByTestId('country-options')
   await options.getByRole('option', { name: 'Japan' }).click()
   ```

   In Vitest + Testing Library, prefer `screen.getByTestId(...)` over
   `within(container).getByTestId(...)` for portaled content.

(Compare with the matching note in
[vrt-spec-guideline](vrt-spec-guideline.md#components-rendered-into-a-portal) —
the same Portal mechanics affect VRT screenshots.)

## Exceptions: high-level components without `...rest`

A handful of Schatten components expose a curated prop surface instead of
`...rest`. The principal example is [Dialog](../../src/components/lv1/Dialog/Dialog.tsx),
which takes structured props (`title`, `actionButton`, `cancelButton`, etc.)
and does *not* spread unknown attributes onto its Content element.

For these components:

- **Apply testids to the children you pass in.** Dialog renders `children`
  inside its body region — put `data-testid` on the elements you author:

  ```tsx
  <Dialog title="Confirm" actionButton={…} isOpen={open} onOpenChange={setOpen}>
    <p data-testid="confirm-message">Are you sure?</p>
    <input data-testid="confirm-reason" />
  </Dialog>
  ```

- **Prefer role-based selectors for the dialog frame itself.** Radix sets
  `role="dialog"` on Dialog Content, so `page.getByRole('dialog', { name: 'Confirm' })`
  uniquely identifies it without needing a testid.

- **Toast is imperative.** The `toast({...})` API does not accept JSX, so
  there is no direct `data-testid` hook on individual toasts. Radix renders
  every toast with `role="status"` (regardless of variant — the variant only
  shifts `aria-live` between `assertive` and `polite`), so E2E tests should
  query by role + accessible name, e.g.
  `page.getByRole('status', { name: 'Saved successfully' })`.

If you find a component that *should* be testid-addressable but currently
isn't, file an issue rather than hacking around it.

## Schatten internal restrictions

Schatten's own implementation **must not** emit `data-testid` attributes from
inside the library. Specifically:

- No hardcoded `data-testid="dialog-content"`-style attributes on internal
  Slots, Portals, or composition helpers.
- No "default" testids derived from `displayName` or `id`.
- No conditional testids gated by a `testing` flag.

### Why

Consumers come in with their own naming conventions — BEM-style
(`signup-form__submit-button`), path-style (`pages.signup.cta`),
feature-prefixed (`auth_login_submit`). A library-supplied testid pollutes
that namespace and either gets ignored (creating two parallel testids on one
element) or forces consumers to dodge Schatten-reserved names. Both are bad.

The single source of truth must be the consumer.

### What's fine

`data-*` attributes that are part of a component's *behavioural* API — e.g.
Radix's `data-state="open"`, `data-disabled`, `data-side="bottom"`. These are
not testids and have a different lifecycle (they reflect runtime state for
styling). They are exposed by Radix and we don't override them.

## Naming responsibility

Choosing testid values is the **consumer's** responsibility, not Schatten's.
This guideline only describes the *plumbing* (where the attribute lands, how
it survives Portal boundaries, etc.). When designing your application's
testid scheme:

- Pick a convention and stick to it across the codebase. Hierarchical
  (`signup.form.submit`) and BEM-flavoured (`signup-form__submit`) both work
  — the convention matters more than the shape.
- Reserve testids for elements that *cannot* be reached by role + accessible
  name. If `getByRole('button', { name: 'Submit' })` already uniquely
  selects the target, a testid is redundant.

## Relationship with accessibility

`data-testid` and ARIA attributes serve different audiences:

| | `aria-label` / `role` | `data-testid` |
|---|---|---|
| Audience | Assistive tech (and `getByRole` queries) | E2E / integration tests |
| Visibility | User-facing semantics | Test-only hook |
| When to use | First choice for selectors | When semantic queries don't disambiguate |

`getByRole` + accessible name is the preferred selector in both Testing
Library and Playwright. Reach for `getByTestId` only when role-based queries
are ambiguous, unstable, or impossible (e.g. anonymous wrappers).

A11y audits (e.g. `addon-a11y`, `@axe-core/playwright`) operate on the ARIA
layer and are unaffected by testid choices — the two concerns are
orthogonal.

## Verifying compliance

When adding or reviewing a new component, check:

1. The component's root accepts `...props` (or has a documented exception
   with a children-based workaround).
2. A unit test demonstrates `data-testid` lands on the expected element — the
   existing pattern is a one-liner:
   ```tsx
   render(<Foo data-testid="foo" />)
   expect(screen.getByTestId('foo')).toBeInTheDocument()
   ```
   See [Separator.test.tsx](../../src/components/lv1/Separator/Separator.test.tsx),
   [Callout.test.tsx](../../src/components/lv1/Callout/Callout.test.tsx),
   [Badge.test.tsx](../../src/components/lv1/Badge/Badge.test.tsx),
   [Text.test.tsx](../../src/components/lv1/Text/Text.test.tsx),
   and [Spinner.test.tsx](../../src/components/lv1/Spinner/Spinner.test.tsx)
   for the established pattern.
3. No internal subcomponents emit fixed `data-testid` values.
