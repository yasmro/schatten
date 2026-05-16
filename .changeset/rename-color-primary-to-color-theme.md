---
'@yasmro/schatten': patch
---

refactor(tokens): rename `--color-primary-*` → `--color-theme-*` (and `bg-primary-*` utilities → `bg-theme-*`)

The CSS variable that drives the Special-axis color scale is renamed from
`--color-primary-*` to `--color-theme-*`, matching the `data-theme` attribute
that controls it. The legacy `--color-primary-*` name conflated "the brand's
primary color" with "the slot the active theme drives" — the new name fixes
the conflation. See [`.claude/rules/theme-architecture.md`](.claude/rules/theme-architecture.md)
(PR #189) for the full Mode × Special two-axis model.

Changes:

- [`src/core/tokens/semantic.css`](src/core/tokens/semantic.css) — the default
  chain `--color-primary-50..950: var(--blue-*)` becomes `--color-theme-50..950`.
- [`src/core/tokens/base.css`](src/core/tokens/base.css) — Tailwind v4 `@theme`
  registration updated, so `bg-theme-500` / `text-theme-600` / etc. are the
  generated utility classes.
- [`src/themes/default/colors.css`](src/themes/default/colors.css) — default
  theme references the new names.
- [`src/themes/seasonal/themes.css`](src/themes/seasonal/themes.css) — eight
  seasonal palettes (88 declarations + the transition list) use the new names.
- [`src/tokens.ts`](src/tokens.ts) — the TS-typed `tokens.color` export renames
  `primary50..primary950` keys to `theme50..theme950`, pointing at
  `var(--color-theme-*)`.
- [`src/docs/Color.stories.tsx`](src/docs/Color.stories.tsx) — the "Primary"
  scale subsection becomes "Theme" and uses `bg-theme-*` utilities.

This is a breaking change for any consumer that references `--color-primary-*`,
`bg-primary-*` / `text-primary-*` / `border-primary-*` utility classes, or the
`tokens.color.primary*` TS keys. Migrate via:

```diff
- background-color: var(--color-primary-500);
+ background-color: var(--color-theme-500);

- <div className="bg-primary-500" />
+ <div className="bg-theme-500" />

- const fill = tokens.color.primary500
+ const fill = tokens.color.theme500
```

The `info` semantic is unaffected — it remains pinned to `blue-*` directly,
independent of the theme scale. Action-component `variant="primary"` (on
`Button`) is also unaffected — that's a *role* name, not a token name.

Out of scope (lands in v0.7.0): allowlist enforcement, 16-pattern audit story,
and the matching `data-season` → `data-theme` rename (shipped separately).
