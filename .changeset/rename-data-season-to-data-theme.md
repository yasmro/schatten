---
'@yasmro/schatten': patch
---

refactor(themes): rename `data-season` → `data-theme` with `season--*` value prefix

The seasonal theming attribute is renamed from `data-season="<name>"` to the
unified `data-theme="season--<name>"`, matching the Mode × Special two-axis
model documented in [`.claude/rules/theme-architecture.md`](.claude/rules/theme-architecture.md)
(PR #189). The single `data-theme` attribute is now the channel for *every*
Special theme (seasonal, brand, vendor, one-off) — the family is encoded in
the value, not in a proliferation of attribute names.

Changes:

- [`src/themes/seasonal/themes.css`](src/themes/seasonal/themes.css) — the eight
  `:root[data-season="X"]` selectors become `:root[data-theme="season--X"]`.
- [`src/themes/seasonal/index.ts`](src/themes/seasonal/index.ts) — `applySeasonTheme`
  / `getSeasonAttribute` / `removeSeasonTheme` keep their function names; only
  the underlying attribute name + value transform change.
- [`.storybook/preview.tsx`](.storybook/preview.tsx) — the Storybook theme toolbar
  decorator follows the same transform.
- [`src/docs/Color.stories.tsx`](src/docs/Color.stories.tsx) — text reference updated.

This is a breaking change for any consumer that targets `[data-season=...]` in
their own CSS, or sets the attribute manually. Migrate via:

```diff
- <html data-season="spring-early">
+ <html data-theme="season--spring-early">
```

Consumers using the SDK helpers (`applySeasonTheme`, `getSeasonAttribute`,
`removeSeasonTheme`) require no code change — the new attribute is applied
transparently.

Out of scope (lands in v0.7.0): allowlist enforcement, 16-pattern (8 Specials
× 2 Modes) Storybook audit story.
