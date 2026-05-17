---
'@yasmro/schatten': minor
---

feat(docs): add `Foundation/ThemeAudit` Storybook story for 16-pattern visual verification.

Implements the audit story called for in
[`theme-architecture.md` §"v0.7.0 migration plan"](.claude/rules/theme-architecture.md#v070-migration-plan):
the Mode (light/dark) × Special (8 seasonal) matrix is now visible in a single
viewport, and pinned by VRT.

Closes [#115](https://github.com/yasmro/schatten/issues/115).

**Stories** (under `src/docs/foundations/ThemeAudit.stories.tsx`)

- **Overview (16 patterns)** — 8 Specials × 2 Modes grid in one render.
  Rows = Special palette, columns = Mode. Regressions to any of the 16 cells
  surface in one screenshot.
- **Per Special** — argTypes-driven, single-cell inspection of one (Special,
  Mode) at a time. Bypasses the Storybook toolbar so the URL `args=` selector
  is the only source of theming (this is what the VRT spec drives).
- **Cascade Verification** — table showing canonical tokens against four
  scenarios (light/dark × none/spring-early), so the two-axis ownership
  contract is empirically observable: theme-* tokens move along the Special
  axis, foreground / background / border / disabled along the Mode axis,
  and `--color-info` stays pinned to blue everywhere.

**VRT** — `src/docs/foundations/ThemeAudit.vrt.spec.ts` ships 18 baselines:
overview (full grid), 16 per-special cells, and the cascade table.

**Implementation note** — the overview renders every Special in the same
viewport by injecting a one-line transform of the production seasonal CSS
(`:root[data-theme=...]` → `.theme-audit-cell[data-theme=...]`), loaded via
Vite's `?raw` import. Zero parallel CSS to maintain: when
[`src/themes/seasonal/themes.css`](src/themes/seasonal/themes.css) changes,
the audit story picks the update up automatically.

**Consumer impact** — none. Storybook-only docs surface; nothing changes in
`dist/` or the public component / token APIs.
