---
'@yasmro/schatten': minor
---

feat(lv1): define `variant="neutral" appearance="solid"` for Badge / Callout / Toast.

Adds the previously-undefined `neutral + solid` combination so consumers can
render "muted-but-emphatic" chips / banners / toasts (archived tags, draft
state, informational pings) without falling back to primitive color classes.

**Visual choice**: `neutral + solid` uses `--color-foreground-muted` as the
surface and `--color-inverted-foreground` as the text. Cool mid-tone gray
that swaps cleanly with light/dark mode.

This is the **only "non-state filled surface"** in Pattern B — the originally
proposed `accent` tone was dropped in the same release (see #108 / PR #205
review) because its `accent + solid` rendering overlapped `neutral + solid`
without adding a distinguishable role.
