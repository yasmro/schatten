---
'@yasmro/schatten': minor
---

Upgrade `tailwind-merge` from v2 to v3 for native Tailwind CSS v4
alignment. Public API is unchanged; the internal `cn()` utility
(`twMerge(clsx(...))`) continues to work exactly as before.

**Consumer impact:** the bundled `tailwind-merge` peer/runtime
resolution shifts from `^2.x` to `^3.x`. Apps that import
`tailwind-merge` directly alongside `@yasmro/schatten` will now
resolve to v3 — review the [tailwind-merge v3 migration notes](https://github.com/dcastil/tailwind-merge/releases/tag/v3.0.0)
if you rely on advanced configuration (custom validators,
`extendTailwindMerge`, etc.). Default `twMerge` behavior is
preserved.
