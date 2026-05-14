---
'@yasmro/schatten': patch
---

docs(rule): add `.claude/rules/theme-architecture.md` (Mode × Special two-axis model)

Theming is now modelled as two independent axes: **Mode** (exclusive — light /
dark, with high-contrast reserved for Phase 5) owns the base layer (surfaces,
foregrounds, borders, state shade-shifts); **Special** (cumulative — seasonal,
event, custom) owns the expressive layer (`primary`, optionally `accent`). The
cascade resolves as `Special > Mode > base semantic`, with conflicts
disambiguated by load order rather than selector specificity.

The new rule documents:

- The two-axis model and which tokens each axis owns
- Cascade order and the load-order convention for Specials
- A **token allowlist** mechanism — each Special declares which tokens it may
  override (design only; enforcement lint lands in v0.7.0)
- DOM application (`.dark` for Mode, `[data-season=...]` / `[data-event=...]` /
  `[data-theme=...]` for Special — one attribute per Special category)
- A mapping table for the eight existing seasonal palettes, restating that
  each currently overrides only `--color-primary-*`
- Process for adding a new Special today (pre-v0.7.0) and rare-path guidance
  for adding a new Mode

The companion implementation work — allowlist linting plus the 8 seasonal × 2
mode = 16-pattern Storybook audit — is scheduled for v0.7.0.

No public API or component behaviour changes.
