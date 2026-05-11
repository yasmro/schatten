---
'@yasmro/schatten': minor
---

feat(tokens): export TS-typed design tokens via `@yasmro/schatten/tokens`

Adds `src/tokens.ts` that re-exports all semantic CSS custom properties as a hierarchical `as const` object, plus `*Token` literal-union types per category (color, spacing, radius, shadow, transition, zIndex, font, fontSize, lineHeight, fontWeight, letterSpacing). CSS remains the single source of truth — this is a thin pointer layer so AI / IDE completion can surface the available tokens.

Prefer Tailwind utilities for everyday styling; reach for `tokens` only for inline style or CSS-in-JS.

```ts
import { tokens } from '@yasmro/schatten/tokens'

<div style={{ background: tokens.color.errorSubtle, color: tokens.color.error }} />
```
