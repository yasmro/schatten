---
'@yasmro/schatten': minor
---

feat(theme): seasonal Special themes now declare an explicit token allowlist
per [`theme-architecture.md`](.claude/rules/theme-architecture.md) ("Allowlist
mechanism"). Closes [#114](https://github.com/yasmro/schatten/issues/114).

**New exports** from `@yasmro/schatten/themes/seasonal`:

- `SeasonalThemeId` — full `data-theme` value type
  (`'season--spring-early' | … | 'season--winter-deep'`), matching the
  attribute emitted by `getSeasonAttribute()` / `applySeasonTheme()`.
- `SeasonalThemeMetadata` — `{ name, allowedTokens, description? }`. The
  per-theme contract for which CSS custom properties this theme may
  override.
- `SEASONAL_THEME_METADATA` — `Record<SeasonalThemeId, SeasonalThemeMetadata>`
  covering all eight shipped seasonal palettes. Today every theme allows
  only `--color-theme-*`; Mode-owned tokens (surfaces, foregrounds,
  borders, disabled/readOnly) and `--color-info-*` are explicitly out of
  bounds.

**Per-theme CSS comments** in
[`src/themes/seasonal/themes.css`](src/themes/seasonal/themes.css) now
state each block's allowlist next to the selector, mirroring the
machine-readable contract.

**Phase 5 placeholder**: [`scripts/check-theme-allowlist.mjs`](scripts/check-theme-allowlist.mjs)
is a no-op stub. Mechanical enforcement (fail the build when a Special
overrides a token outside its allowlist) will ship in a later release
sharing the scan pipeline with
[#200](https://github.com/yasmro/schatten/issues/200).

**No runtime change**: existing seasonal themes already only override
`--color-theme-*`. This change pins the contract — it does not move any
pixels.
