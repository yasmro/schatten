---
'@yasmro/schatten': patch
---

Normalize the `package.json` `sideEffects` field to `["*.css", "**/*.css"]`.
This declares that only CSS imports carry side effects, so consumer bundlers
can tree-shake unused component exports more aggressively. No public API
change.
