---
'@yasmro/schatten': minor
---

feat(lv1): add `readOnly` styling to `Input` and `Textarea` (closes #183)

`Input` and `Textarea` now render with a warm-tinted, non-interactive
surface when `readOnly` is set, using the
[`--color-surface-readonly`](src/core/tokens/semantic.css) /
[`--color-border-readonly`](src/core/tokens/semantic.css) tokens
introduced in #180. Until now the two components forwarded the HTML
`readonly` attribute but were visually indistinguishable from the
editable default, which made the "this value is informational, not
editable" intent invisible to users.

The styling intentionally differs from `disabled`:

| | `disabled` | `readOnly` |
|---|---|---|
| Surface | Cool gray (`bg-surface-disabled`) | Warm tint (`bg-surface-readonly`) |
| Foreground | Muted (`text-foreground-disabled`) | Normal — the value stays readable |
| Cursor | `cursor-not-allowed` | `cursor-text` |
| Focus | Not focusable | Focusable, value is selectable / copyable |
| Form submission | Value omitted | Value submitted |

### Priority when states stack

The wrapper (`Input`) and the textarea element (`Textarea`) use the same
priority chain via `cn()` + `tailwind-merge`:

```
disabled  >  readOnly  >  isError
```

- `readOnly + isError` → readOnly surface wins visually, but
  `aria-invalid="true"` is still emitted so assistive tech sees the error.
- `disabled + readOnly` → disabled wins visually (stronger constraint).

This mirrors the existing `disabled > isError` policy from #182.

### Out of scope

- `Field` does not yet propagate `readOnly` through `FieldContext` — that
  is tracked separately. Consumers wanting field-driven readOnly should
  pass `readOnly` directly to `Input` / `Textarea` for now.
- `Select` (HTML has no `readonly` attribute on `<select>`),
  `Checkbox` / `Radio` / `Switch` (UX intent of read-only is unclear for
  binary controls) are intentionally not included.

Stories added per component: `ReadOnly`, `Disabled vs ReadOnly`,
`ReadOnly with error`. VRT specs cover all three across light / dark.
