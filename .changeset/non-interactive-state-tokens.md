---
'@yasmro/schatten': minor
---

feat(tokens): add non-interactive state semantic tokens (`disabled` / `readOnly`)

Adds five new semantic CSS variables in
[`semantic.css`](src/core/tokens/semantic.css) and registers them with
Tailwind v4 via [`base.css`](src/core/tokens/base.css), so form-control
authors can express `disabled` and `readOnly` through token names instead
of the current cross-component `cursor-not-allowed opacity-50` pattern.

The two non-interactive states have intentionally different visual
directions:

| | `disabled` | `readOnly` |
|---|---|---|
| Intent | This control is not usable | The value is informational, the control is static |
| Form submission | Value is not submitted | Value is submitted |
| Focus | Not focusable | Focusable |
| Visual | Muted / faded (cool gray) | Subtle / static (warm tint) |

Tokens added:

```css
/* disabled — surface + foreground + border */
--color-surface-disabled
--color-foreground-disabled
--color-border-disabled

/* readOnly — surface + border (foreground stays normal so the value stays readable) */
--color-surface-readonly
--color-border-readonly
```

All five are defined in both modes (`:root`, `@media (prefers-color-scheme: dark)`,
and `.dark`). Tailwind utilities — `bg-surface-disabled`,
`text-foreground-disabled`, `border-border-disabled`, `bg-surface-readonly`,
`border-border-readonly` — are generated via the
[`@theme`](src/core/tokens/base.css) registration.

The tokens follow the existing 3-layer hierarchy
([state-token-guideline.md](.claude/rules/state-token-guideline.md)): they
sit at the semantic layer and reference primitives. They are NOT state
semantic tokens in the `error`/`success`/… sense — there is no `hover` slot —
so they do not follow the 4-token shape.

A new "Non-Interactive States" + "Disabled vs ReadOnly (a11y audit)"
section is added to `Foundation/Color` so designers can verify both
modes visually.

This change is additive — no component currently consumes the tokens, so
no VRT impact. Component-side adoption (replacing `opacity-50` and
introducing readOnly styling on Input/Textarea) lands in separate
follow-up issues.

Closes #180.
