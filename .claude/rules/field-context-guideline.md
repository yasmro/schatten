# Field Context Guideline

## Overview

The `FieldContext` (`src/contexts/field.ts`) provides form field state to child components. This enables consistent error handling, disabled states, and accessibility across form components.

## Context Values

```typescript
interface FieldContextValue {
  id: string           // Generated id for label association
  labelId?: string     // Id of the Field-rendered <label> (undefined when Field has no label)
  isError: boolean     // Error state
  disabled: boolean    // Disabled state
  required: boolean    // Required state — consumed as aria-required (announce-only)
  describedBy?: string // aria-describedby value (description/error ids)
}
```

## Component Integration Patterns

### Components WITHOUT internal labels (Input, Textarea, Select)

These components should use the Field's `id` for label association:

```typescript
const field = useFieldContext()
const id = field?.id ?? idProp ?? autoId
const isError = field?.isError ?? isErrorProp
const disabled = field?.disabled ?? disabledProp
const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp
```

### Components WITH internal labels (Checkbox, Switch, Radio)

These components have their own `<label>` and need unique ids per instance. Do NOT use `field?.id`:

```typescript
const field = useFieldContext()
const id = idProp ?? autoId  // Don't use field?.id
const isError = field?.isError ?? isErrorProp
const disabled = field?.disabled ?? disabledProp
const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp
// When no own `label` (and no explicit naming) is given, the Field-rendered
// label names the control via aria-labelledby — see "Naming via labelId".
const ariaLabelledBy =
  ariaLabelledByProp ?? (label || props['aria-label'] ? undefined : field?.labelId)
```

### Group components (RadioGroup)

Group components should consume Field context at the group level and provide their own internal context for child items:

```typescript
const field = useFieldContext()
const isError = field?.isError ?? isErrorProp
const disabled = field?.disabled ?? disabledProp
const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp
// Do NOT use field?.id - RadioGroup doesn't need label association.
// The group IS named by the Field label, via aria-labelledby — a
// role="radiogroup" div cannot be reached by htmlFor.
const ariaLabelledBy =
  ariaLabelledByProp ?? (props['aria-label'] ? undefined : field?.labelId)
```

## Required propagation via `aria-required` (announce-only)

`Field.required` propagates to the wrapped control as `aria-required`,
mirroring `isError → aria-invalid`. It is **announce-only**: it adds the
ARIA flag so assistive tech announces "required", but it does **not** enable
native validation. Native form-submission blocking (`<input required>`, the
Radix hidden input) comes **only** from a `required` prop set directly on the
control — Field never enables it. (Same philosophy as `isError`, which sets
`aria-invalid` but never forces native `:invalid`.)

Because of that split, **no control destructures `required`** — a direct
`required` prop keeps flowing through `...props` to the native element / Radix
Root (so native validation is preserved). The field-derived value is wired
separately, with **two idioms depending on the control's substrate**:

### native controls (Input, Textarea)

A native `<input required>` already maps to the implicit ARIA required state,
so a plain `|| undefined` next to `aria-invalid` is safe:

```tsx
aria-invalid={isError || undefined}
aria-required={field?.required || undefined}   // omitted when falsy
{...props}                                       // direct required → native
```

### Radix controls (Checkbox, Switch, RadioGroup, Select trigger) — conditional injection

Radix's Checkbox / Switch / RadioGroup / Select **set their own
`aria-required` from the `required` (/ `context.required`) prop and then spread
consumer props *after* it**. That means a consumer-supplied
`aria-required={undefined}` would **overwrite** (clobber) Radix's correct
value. So these controls must **never emit `undefined`** — inject the attribute
only when the field provides it:

```tsx
aria-invalid={isError || undefined}
{...(field?.required ? { 'aria-required': true } : null)}   // never undefined
{...props}                                                   // direct required → Radix
```

Worked example (Checkbox; the other three behave identically):

| markup | field.required | direct `required` | injected | Radix's own | final `aria-required` | native validation |
|---|---|---|---|---|---|---|
| `<Checkbox required>` | — | true | nothing | `true` | **true** (Radix kept) | yes |
| `<Field required><Checkbox/>` | true | — | `true` | false | **true** | no (announce-only) |
| `<Field required={false}><Checkbox required/>` | false | true | nothing | `true` | **true** (not clobbered) | yes |
| `<Checkbox/>` | false | — | nothing | false | omitted | no |

The naive `aria-required={field?.required || undefined}` form (used for native
controls) would fail rows 1 and 3 on a Radix control — the injected `undefined`
clobbers Radix's `true`. A regression-guard unit test pins this for all four
Radix controls. **Do not "unify" the two idioms onto the naive form.**

`RadioGroup` wires `aria-required` at the **group root only** (the
`role="radiogroup"` element); individual `Radio` items never carry it —
`required` is a group-level concept. `Select` has no native `required` on the
trigger button; its standalone path is `<Select required>` on the Root, which
Radix reflects onto the combobox via `context.required`.

## Naming via `labelId` (self-labelled / group components)

`Field` renders its `<label>` with `id={labelId}` and exposes that id through
context. This closes the gap where `<Field label="…"><Switch /></Field>` left
the Switch unnamed: the Field label's `htmlFor` points at `field.id`, which
self-labelled components deliberately do not consume, so without `labelId`
the association dangled (axe `button-name`, found in #345).

| Consumer | When `field?.labelId` is applied |
|---|---|
| `Checkbox` / `Switch` | Only when the component has **no own `label`** and the consumer passed neither `aria-label` nor `aria-labelledby` |
| `RadioGroup` | At the group root, unless the consumer passed `aria-label` / `aria-labelledby` (items keep their own labels) |
| `DateCalendar` / `DateRangeCalendar` | At the `role="group"` root, same rule as `RadioGroup`. `Field.required` is **not** wired: `aria-required` is not allowed on `group` / `grid`, and the calendar submits no value of its own. The lv2 pickers (#568) carry it on their inputs |
| `Input` / `Textarea` / `Select` | Never — they consume `field.id` and are named natively via `htmlFor` |
| `DatePicker` (lv2) | Never at `granularity="day"` — its inner `Input` consumes `field.id`, like a bare `Input`. At `granularity="minute"` it has a date and a time input, so it follows `DateRangePicker` |
| `DateRangePicker` (lv2) | At the `role="group"` root, same rule as `RadioGroup`. See [Range input](#range-input-two-inputs-in-one-group) |

Precedence (per component-architecture §5): explicit `aria-label` /
`aria-labelledby` prop > own `label` prop > `field?.labelId`.

### Known limitations (accepted, documented)

- **No click affordance.** Clicking the Field label does not focus/toggle a
  self-labelled control — `htmlFor` still points at the unconsumed `field.id`.
  Only the screen-reader name is wired. Consumers who need click-to-toggle
  should use the component's own `label` prop.
- **Multiple bare controls share the name.** Field is a wrapper around a
  single form input; placing several label-less Checkboxes inside one Field
  gives them all the same accessible name. Give each its own `label` /
  `aria-label` instead.

## Range input (two inputs in one group)

A control with two inputs cannot take `field.id`: one `<label htmlFor>` reaches
one element, and `Input` would put the same id on both. `DateRangePicker` (#568)
is the pattern, and `DatePicker` follows it at `granularity="minute"` (#569):

```tsx
const field = useFieldContext()
const isError = field?.isError ?? isErrorProp
const disabled = field?.disabled ?? disabledProp ?? false
const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp
const ariaLabelledBy = ariaLabelledByProp ?? (ariaLabel ? undefined : field?.labelId)

<div role="group" aria-label={ariaLabel} aria-labelledby={ariaLabelledBy}>
  {/* Input reads Field first, so it has to be cut off from it. */}
  <FieldContext.Provider value={null}>
    <Input aria-label="Start date" disabled={disabled} aria-describedby={ariaDescribedBy}
      aria-required={field?.required || undefined} aria-invalid={isError || undefined} />
    <Input aria-label="End date" … />
  </FieldContext.Provider>
</div>
```

- **The group is named, each input is named on its own.** The Field label names
  the group; "Start date" / "End date" (with a time, also "Start time" / "End
  time", or "Date" / "Time" for `DatePicker`) name the inputs.
- **`aria-required`, `aria-invalid` and `aria-describedby` go on each input.**
  `aria-required` is not allowed on `group`, and a description on the group is
  not read when focus lands on an input.
- **Clicking the Field label does nothing**, the same accepted limitation as a
  self-labelled control without its own `label`.
- **`value={null}` is a reset, not a new context.** See
  [lv2-composition-guideline §4.4](lv2-composition-guideline.md#44-field-context).

## Accessibility Patterns

### Description as clickable label

Use `<label htmlFor={id}>` for description to enable click-to-focus while maintaining proper a11y:

```tsx
{description && (
  <label
    htmlFor={id}
    id={descriptionId}
    className="text-sm text-foreground-muted"
  >
    {description}
  </label>
)}
```

The `aria-describedby` attribute links the description for screen readers, so:
- Clicking description focuses the input (via `htmlFor`)
- Screen readers announce description as supplementary info (via `aria-describedby`)

### Error messages

Error messages use `aria-describedby` but remain as `<p>` elements (not clickable):

```tsx
{error && (
  <p id={errorId} className="text-sm text-destructive">
    {error}
  </p>
)}
```

## Fallback Pattern

All components must work both standalone and within Field. Use the fallback pattern:

```typescript
const value = field?.value ?? propValue ?? defaultValue
```

This ensures:
1. Field context values take precedence when inside Field
2. Direct props work when used standalone
3. Sensible defaults when neither is provided
