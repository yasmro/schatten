---
'@yasmro/schatten': minor
---

Add full state semantic tokens (`error`, `success`, `warning`, `info`), each with `{ base, hover, foreground, subtle }`.

- New tokens: `error-*`, `info-*`, plus completed `success-foreground` / `success-subtle` / `warning-foreground` / `warning-subtle`.
- Form components (`Input`, `Textarea`, `Select`, `Field`) now reference `error-*` instead of `destructive-*`. `destructive` remains for destructive actions (Button, Badge). `error` and `destructive` share vermillion under the hood, so visuals are unchanged.
- `success` and `warning` base shades shifted from `500/400` to `600/500` (light/dark) for consistency with `destructive` / `error` / `info`. No component currently surfaces these visually outside Storybook docs.
