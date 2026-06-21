---
'@yasmro/schatten': minor
---

Add a background `variant` to `Card`: `filled` (default — `surface` fill +
`--shadow-card`) and `plain` (transparent background, no shadow, border only —
the page / parent surface shows through, for nested or low-emphasis grouping).
Out-of-pattern single axis (like `Spinner`); the default `filled` is
value-identical to the previous Card, so existing usage is unchanged.

CSS API: new `.st-card--filled` / `.st-card--plain` classes.
