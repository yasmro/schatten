---
'@yasmro/schatten': patch
---

docs(rule): add `.claude/rules/theme-architecture.md` (Mode × Special two-axis model)

Theming is now modelled as two independent **exclusive** axes: **Mode**
(`light` / `dark`) owns the base layer (surfaces, foregrounds, borders, state
shade-shifts); **Special** (`<none>` / `seasonal-*` / brand themes / customer
palettes) owns the expressive layer (`primary`, optionally `accent`). At most
one Special is active at a time, set via `data-theme="<name>"` on `<html>`.

The cascade resolves as `Special > Mode > base semantic` — Specials win on
specificity (single-attribute selector beats `:root` / `.dark`), not on
stylesheet load order.

The new rule documents:

- The two-axis model and which tokens each axis owns
- Cascade rules and the load-order convention for the stylesheet chain
- A **token allowlist** mechanism — each Special declares which tokens it may
  override (design only; enforcement lint lands in v0.7.0)
- DOM application — `.dark` for Mode, single `[data-theme=...]` attribute for
  Special. Migration note: existing seasonal CSS still uses `data-season` and
  is renamed to `data-theme` in v0.7.0
- A mapping table for the eight existing seasonal palettes, restating that
  each currently overrides only `--color-primary-*`
- Process for adding a new Special today (pre-v0.7.0)

The companion implementation work — allowlist linting, the
`data-season → data-theme` rename, and the 8 Specials × 2 mode = 16-pattern
Storybook audit — is scheduled for v0.7.0.

No public API or component behaviour changes.
