---
'@yasmro/schatten': patch
---

docs(rule): add `.claude/rules/theme-architecture.md` (Mode × Special two-axis model)

Theming is now modelled as two independent **exclusive** axes: **Mode**
(`light` / `dark`) owns the base layer (surfaces, foregrounds, borders, state
shade-shifts); **Special** (`<none>` / `season--*` / brand themes / customer
palettes) owns the expressive layer — the **`--color-theme-*` scale**,
optionally `accent`. At most one Special is active at a time, set via
`data-theme="<value>"` on `<html>`.

The cascade resolves as `Special > Mode > base semantic` — Specials win on
specificity (single-attribute selector beats `:root` / `.dark`), not on
stylesheet load order.

The new rule documents:

- The two-axis model and which tokens each axis owns
- Cascade rules (specificity-based, with load order as tie-breaker for the
  stylesheet chain only)
- A **token allowlist** mechanism — each Special declares which tokens it may
  override (design only; enforcement lint lands in v0.7.0)
- DOM application: `.dark` for Mode, single `data-theme` attribute for Special
- A **`data-theme` value convention**: `<theme>` for one-offs or
  `<theme>--<subtheme>` for families (e.g. `season--spring-early`,
  `brand--acme`, `halloween`). One attribute, one value namespace, no
  `data-season` / `data-event` / `data-brand` proliferation.
- A mapping table for the eight existing seasonal palettes, showing both the
  canonical `data-theme` form (`season--spring-early`) and the legacy
  `data-season` form
- Process for adding a new Special today (pre-v0.7.0)

**Deprecations** (both rename in v0.7.0 alongside the allowlist enforcement
and the 8 × 2 = 16-pattern Storybook audit story):

- `data-season="<name>"` → `data-theme="season--<name>"`. Family encoded in
  the value, not in a separate attribute.
- `--color-primary-*` / `bg-primary-*` → `--color-theme-*` / `bg-theme-*`.
  The token name now matches the attribute that drives it (`data-theme`),
  removing the "primary brand color" vs "theme-driven slot" conflation.

New code MUST use the canonical names (`data-theme`, `--color-theme-*`,
`bg-theme-*`); do not introduce new `data-season` or `*-primary-*` usage.

No public API or component behaviour changes in this PR — only the rule.
