---
'@yasmro/schatten': minor
---

Add `Combobox`: a single-select dropdown with a search field inside the panel. Options are narrowed as the user types, ignoring case and full-width / half-width differences. Pass `filter={false}` with `onSearchChange` to search on a server. Built on Radix Popover with no new runtime dependency.

CSS API: new block `.st-combobox` with its sub-elements, published at `@yasmro/schatten/css/combobox`.
