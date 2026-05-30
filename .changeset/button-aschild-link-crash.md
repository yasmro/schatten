---
'@yasmro/schatten': patch
---

Fix: `<Button asChild variant="link">` no longer throws `React.Children.only
expected to receive a single React element child`. The `link` branch wraps
`children` with two icon-conditional siblings, so combining it with
`asChild` handed Radix `Slot` more than one child. The `asChild` path is now
resolved before the `link` branch, so a single child always reaches `Slot`.
As with the other `asChild` paths, `icon` / `isLoading` are not projected
onto the child — author the inner content yourself.
