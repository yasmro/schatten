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

Also bumps the dark-mode `--color-border` mapping from `gray-800` to
`gray-700` so divider lines (the documented purpose of `--color-border`)
stay visible against the `paper-warm-inv` background. Light mode is
unchanged. No other lv1 component uses `border-border` directly — they
all use `border-border-strong` — so the visual impact is limited to
Separator and the dark-mode neutral-color audit cards in
`Foundation/Color`.
