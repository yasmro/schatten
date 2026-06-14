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
| `Input` / `Textarea` / `Select` | Never — they consume `field.id` and are named natively via `htmlFor` |

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
