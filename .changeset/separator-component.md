---
'@yasmro/schatten': minor
---

Add Separator component — visual divider for splitting content into
sections, grouping menu items, or separating sidebar regions.

- Built on `@radix-ui/react-separator` (Radix UI primitive).
- Supports both `horizontal` (default) and `vertical` orientations.
- `decorative` defaults to `true` so the divider is hidden from
  assistive technologies; pass `decorative={false}` to expose it as a
  semantic divider via `role="separator"` with the appropriate
  `aria-orientation`.
- Styled with the `border` semantic token so it picks up theme + dark
  mode mappings automatically.
