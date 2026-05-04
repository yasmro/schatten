# Field Context Guideline

## Overview

The `FieldContext` (`src/contexts/field.ts`) provides form field state to child components. This enables consistent error handling, disabled states, and accessibility across form components.

## Context Values

```typescript
interface FieldContextValue {
  id: string           // Generated id for label association
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
```

### Group components (RadioGroup)

Group components should consume Field context at the group level and provide their own internal context for child items:

```typescript
const field = useFieldContext()
const isError = field?.isError ?? isErrorProp
const disabled = field?.disabled ?? disabledProp
const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp
// Do NOT use field?.id - RadioGroup doesn't need label association
```

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
