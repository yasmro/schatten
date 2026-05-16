# Testing Guideline

## Overview

This rule covers **unit tests** for `lv1` components — what to test, how to
structure the file, and which writing conventions to follow. Visual regression
is out of scope here; see [vrt-spec-guideline.md](vrt-spec-guideline.md) for
that.

**Responsibility split:**

| Surface | What it verifies | Tool |
|---|---|---|
| Unit test (`*.test.tsx`) | Behavior, props plumbing, event handlers, a11y attributes, context wiring | Vitest + Testing Library |
| VRT spec (`*.vrt.spec.ts`) | Pixel-level appearance across light/dark, every variant | Playwright |

If you can express the assertion as "the DOM should contain X" or "callback
should fire with Y", it belongs in a unit test. If the assertion is "it should
look like the baseline screenshot", it belongs in a VRT spec. Don't try to
verify visual style by string-matching Tailwind classes when a VRT snapshot
would catch the same drift better — but DO assert on classes when the class
carries semantic meaning the user can't see directly (e.g. `border-error` on
`isError`, where the VRT just shows "red border" without proving the wiring).

## Stack

- **Runner**: Vitest (jsdom environment, globals enabled)
- **DOM helpers**: `@testing-library/react`
- **Interactions**: `@testing-library/user-event`
- **Assertions**: `@testing-library/jest-dom` (auto-loaded via `vitest.setup.ts`)
- **Mocks**: `vi.fn()` / `vi.useFakeTimers()` from Vitest

`vitest.setup.ts` already polyfills `ResizeObserver`, Pointer Events
(`hasPointerCapture` / `setPointerCapture` / `releasePointerCapture`), and
`scrollIntoView` — these are all Radix dependencies that jsdom doesn't ship.
You shouldn't need to add more polyfills in individual specs.

## File layout

```
src/components/lv1/ComponentName/
├── ComponentName.tsx
├── ComponentName.stories.tsx
├── ComponentName.test.tsx        # unit test (this rule)
├── ComponentName.vrt.spec.ts     # VRT spec (separate rule)
└── __snapshots__/                # VRT baselines
```

One unit-test file per component. Don't co-locate unrelated component tests in
the same `.test.tsx`.

## Required test cases

These are the **minimum** cases each component type must cover. Add more
whenever there's distinct behavior worth pinning down — coverage of the
"weird code paths" matters more than hitting a percentage.

### Common (every component)

- Renders without crashing with default props
- `children` / `className` are forwarded through to the rendered DOM
- `ref` reaches the underlying DOM node (forwardRef)
- Primary `variant` / `size` props apply distinct classes
- `disabled` (when applicable) blocks interactions
- Exposes a queryable accessible role + name — `getByRole(role, { name })`
  returns the component. The role and accessible-name source per
  component are defined in
  [component-architecture.md §8](component-architecture.md#8-accessibility-contract)

### Form input components

Applies to: Input, Textarea, Select, Checkbox, Switch, Radio.

- **Controlled mode** — `value` / `checked` is the source of truth, `onChange`
  / `onCheckedChange` fires with the right payload
- **Uncontrolled mode** — `defaultValue` / `defaultChecked` initializes
  correctly and internal state updates on user input
- **Event handlers** — at minimum `onChange`; add `onBlur` / `onFocus` when
  the component touches them explicitly
- **Error state** — `isError` toggles `aria-invalid` and the error-styled
  class (`border-error` etc.)
- **Field context integration** — wrap the component in `<Field>` and assert:
  - It picks up the Field `id` (label association), unless the component has
    its own internal `<label>` like Checkbox/Switch/Radio — see
    [field-context-guideline.md](field-context-guideline.md)
  - It picks up `isError` and `disabled` from Field
  - It picks up `aria-describedby` from Field

### Compound components

Applies to: Dialog, Tooltip, Select, RadioGroup, FieldSet.

- **Open / close transitions** — `defaultOpen` initializes, `onOpenChange`
  fires on user-driven open/close
- **Keyboard interaction** — only when it's *our* logic, not Radix's. We
  trust Radix to handle Esc-closes-dialog and arrow-keys-navigate. We DO
  test our own wiring: e.g. an action button mounted inside Dialog must
  receive focus correctly through *our* prop API
- **Portal rendering** — content renders into `document.body`, queryable via
  `screen.getByRole('dialog')` / `getByRole('tooltip')`
- **Sub-component context** — when the parent provides context to children
  (e.g. `RadioGroup` to `Radio`, `FieldSet` to nested `Field`s), wrap and
  verify propagation

### Action components

Applies to: Button.

- `onClick` fires on click
- `isLoading` disables the button and shows the spinner
- `asChild` renders the child element (Radix Slot pattern) and forwards
  props/handlers to it

### Display components

Applies to: Badge, Callout, Separator, Spinner, Text.

The common-block requirements are usually enough — display components rarely
have stateful behavior. Add explicit cases for non-obvious mappings (e.g.
`Text` with `as="h1"` rendering an `<h1>` element, `Badge` icon slot position
flipping).

### Components that don't fit a bucket

Some components straddle categories or sit outside them entirely:

- **Field** is a context provider with no input of its own — it's a layout
  + a11y wrapper. Treat it as a hybrid: cover its rendered DOM (label,
  description, error message, required `*`) plus the context values it
  emits. [Field.test.tsx](../../src/components/lv1/Field/Field.test.tsx)
  is the canonical example.
- **Toast** is an imperative store + a hook + a Portal renderer. Cover the
  store's public API (`toast(...)` returns a handle, dismissal removes the
  entry), the hook's subscription, and that durations actually fire with
  `vi.useFakeTimers()`. [Toast.test.tsx](../../src/components/lv1/Toast/Toast.test.tsx)
  is the canonical example.

When a future component doesn't fit, use the closest-bucket requirements as
the floor and lean on judgment for the rest. If the same shape comes up
twice, add a bucket to this rule.

## Writing style

Tests are read more than written. These conventions exist to make a future
reader (often you, six months later) understand each `it(...)` block in
under five seconds.

### 1. BDD-style test names

```ts
it('renders an error border when isError is true', () => { … })
it('fires onChange while typing', () => { … })
it('inherits disabled from Field', () => { … })
```

Avoid:

```ts
it('should render with error', …)       // `should` adds nothing
it('isError case', …)                    // echoes the API, not the behavior
it('test #3', …)                         // useless
```

### 2. `describe` is the "Given"

Use nested `describe(...)` for shared preconditions; let each `it(...)`
carry the "When + Then". This reads naturally as English:

```ts
describe('Select', () => {
  describe('inside <Field>', () => {
    it('uses the Field id on the trigger', () => { … })
    it('inherits isError from Field', () => { … })
  })

  describe('disabled', () => {
    it('disables the trigger', () => { … })
  })
})
```

### 3. Don't write `// Arrange / // Act / // Assert` labels

Component tests are usually 3–5 lines. Three labeled phases over four lines
is more noise than signal. If a test body is so long it needs section
headers, that's a signal to extract a factory (next section), not to add
comments.

### 4. Typed factories for non-trivial setup

When a component needs more than one or two children to render meaningfully
(Select with trigger + content + items, Dialog with title + action button,
RadioGroup with multiple items), extract a small typed factory component at
the top of the file. Keeps each `it` body short and the variation knobs
explicit.

Canonical example — `BasicSelect` in
[src/components/lv1/Select/Select.test.tsx](../../src/components/lv1/Select/Select.test.tsx):

```tsx
function BasicSelect(props: {
  defaultValue?: string
  value?: string
  onValueChange?: (v: string) => void
  isError?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}) {
  return (
    <Select
      defaultValue={props.defaultValue}
      value={props.value}
      onValueChange={props.onValueChange}
    >
      <SelectTrigger isError={props.isError} disabled={props.disabled} size={props.size}>
        <SelectValue placeholder="Pick a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry" disabled>Cherry</SelectItem>
      </SelectContent>
    </Select>
  )
}

it('shows the selected value text when defaultValue is set', () => {
  render(<BasicSelect defaultValue="apple" />)
  expect(screen.getByRole('combobox')).toHaveTextContent('Apple')
})
```

Why typed: the `props` interface forces every test to declare which
dimensions it's varying, which makes the test self-documenting.

Other canonical helpers in the codebase:

- `ContextConsumer` in
  [src/components/lv1/Field/Field.test.tsx](../../src/components/lv1/Field/Field.test.tsx)
  — a small helper that reads `useFieldContext()` and renders the values to
  `data-testid` nodes, so context wiring becomes a straight DOM assertion.
- `Controlled` in
  [src/components/lv1/Dialog/Dialog.test.tsx](../../src/components/lv1/Dialog/Dialog.test.tsx)
  — a stateful wrapper for components that don't support `defaultOpen`,
  giving each test a usable controlled-mode harness.
- `renderTooltip` in
  [src/components/lv1/Tooltip/Tooltip.test.tsx](../../src/components/lv1/Tooltip/Tooltip.test.tsx)
  — a custom render that wraps every test in the required `TooltipProvider`.

### 5. Query by role first

Default to `screen.getByRole(...)` with an accessible name. Fall back to
`getByText` / `getByLabelText` only when no role applies. Avoid `getByTestId`
unless the assertion is "this internal wiring landed in the right DOM
node" (e.g. `ContextConsumer` above) — a test that depends on a `data-testid`
won't catch an accessibility regression.

### 6. `userEvent` over `fireEvent`

`userEvent.setup()` + `await user.click(...)` simulates the full input event
sequence. `fireEvent.click(...)` fires a single synthetic event and skips
focus/blur/pointer events, so Radix components often misbehave under it.
Use `userEvent` unless you have a specific reason not to.

## What NOT to test

- **Radix internals.** We trust Radix to implement Esc-closes-dialog,
  arrow-key navigation in Select, focus trap in Dialog, etc. Test only the
  surface where *our wrapping logic* changes the behavior.
- **Tailwind utility output verbatim.** A test that asserts
  `className === 'flex items-center gap-2 px-3 py-2 ...'` will break on
  every harmless styling tweak. Assert the specific class that carries
  meaning (`border-error`, `bg-destructive`), or rely on VRT.
- **Coverage as a number.** We don't have a coverage target. The signal we
  care about is "every required case above is present", not "85% of lines
  are touched". A 100%-coverage test that asserts trivia is worse than 60%
  coverage of the actually-fragile paths.
- **Storybook stories.** They're rendered in Storybook and pinned by VRT;
  re-asserting them in unit tests duplicates effort.

## Running tests

```sh
pnpm test                                 # watch mode
pnpm test --run                           # single run
pnpm test src/components/lv1/Button       # one component
pnpm test:ui                              # Vitest UI
```

CI runs `pnpm test --run` on every PR. A failing unit test blocks merge —
flaky tests should be investigated, not retried.

## Adding a component to the library

When you add a new `lv1` component, the checklist is:

1. `ComponentName.tsx` — the component itself
2. `ComponentName.stories.tsx` — Storybook stories
   ([storybook-guideline.md](storybook-guideline.md))
3. `ComponentName.test.tsx` — unit tests covering the **Required test cases**
   section above for its component type
4. `ComponentName.vrt.spec.ts` — VRT spec
   ([vrt-spec-guideline.md](vrt-spec-guideline.md))

The unit test should land in the same PR as the component. Reviewers will
push back on PRs that defer tests to "a follow-up".
