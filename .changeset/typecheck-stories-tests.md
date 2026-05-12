---
'@yasmro/schatten': patch
---

chore(types): typecheck stories and tests via a dedicated `tsconfig.test.json`

`tsconfig.json` previously excluded `**/*.stories.tsx` and `**/*.test.tsx`,
which meant `pnpm typecheck` skipped them and let type errors slip past CI.
The dist build needs that exclude (so generated `.d.ts` files don't pick up
story/test types), but typecheck does not — and the gap masked real bugs.

This split separates the two concerns:

- `tsconfig.json` — dist build target (still excludes stories/test), unchanged
  for `tsup`.
- `tsconfig.test.json` (new) — extends `tsconfig.json` but includes stories,
  tests, and `vitest.setup.ts` (the latter pulls in
  `@testing-library/jest-dom/vitest` so matcher type augmentation is visible).
- `pnpm typecheck` now runs against `tsconfig.test.json`.

Bugs surfaced and fixed while turning typecheck back on:

- `Badge.stories.tsx` used `icon="AlertCircle"`, which is a deprecated
  lucide-react alias that is **not** present in the `icons` object. The
  story rendered no icon at runtime. Updated to `"CircleAlert"` and refreshed
  the matching JSDoc / argTypes examples on `BadgeProps.icon`.
- `Tooltip.stories.tsx` declared an `argTypes` entry for `hideArrow`, a prop
  that does not exist on `TooltipContentProps`. Removed the stale entry.

No public API change.
