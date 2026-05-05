---
'@yasmro/schatten': minor
---

Add Callout component — inline status block for contextual notices, form
warnings, and page-level announcements.

- Same five variants (`default | success | error | warning | info`) and two
  treatments (`subtle` / `solid`) as Toast, sharing the state semantic
  tokens and variant icons (`Info` / `CircleCheck` / `TriangleAlert` /
  `CircleAlert`).
- Renders inline (no portal, no auto-dismiss). Pass `onClose` to render a
  close button; omit it for a static, non-dismissible callout.
- `action` accepts a free-form `ReactNode` so consumers can drop in a
  Button, link, or richer affordance — Callouts often persist on screen
  and may need more than the imperative `{label, onClick}` shape Toast
  uses.
- Forwards refs and arbitrary HTML attributes (incl. `role`/`aria-*`) so
  consumers can opt into ARIA live regions for dynamic notices.
