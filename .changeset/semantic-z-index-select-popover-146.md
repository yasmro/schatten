---
'@yasmro/schatten': minor
---

feat(tokens): route Select content z-index through the `--z-popover` semantic
token (was a hard-coded `50`). Visual no-op (50→60, the 51–60 band is otherwise
empty) but fixes a latent Select-in-Dialog stacking case and removes the last
hard-coded z-index in a component. Documents the reserved `0–100` z-index band
in the README.
