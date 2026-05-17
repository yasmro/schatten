---
'@yasmro/schatten': minor
---

BREAKING: `lucide-react` is now an **optional peer dependency** instead of a
bundled `dependency`, and the `icon` props on `Button`, `Badge`, `Input`, and
`Dialog` accept a Lucide **icon component** instead of a string name.

Why: `Button` / `Badge` / `Input` imported the whole icon barrel from
`lucide-react` (`import { icons }`) and resolved icons dynamically
(`icons[name]`). A dynamic lookup is not statically analyzable, so consumer
bundlers could not tree-shake it — importing *any* schatten component pulled
all 1952 Lucide icon modules (~1.37 MB of unminified icon source) into the
consumer bundle. schatten's own `dist` now contains zero whole-barrel imports.

Migration:

- Install `lucide-react` yourself if you use icon props — it is an optional
  peer dependency now: `pnpm add lucide-react`.
- Pass the icon **component** imported from `lucide-react`, not a name string:

  ```tsx
  // Before
  import { Button } from '@yasmro/schatten'
  <Button icon="Search" />

  // After
  import { Search } from 'lucide-react'
  import { Button } from '@yasmro/schatten'
  <Button icon={Search} />
  ```

  This applies to `Button` / `Badge` `icon`, `Input` `iconLeft` / `iconRight`,
  and `Dialog`'s `actionButton.icon` / `cancelButton.icon` /
  `subActionButton.icon`.

Types: the `IconName` type export (previously `keyof typeof icons`) is removed.
Icon props are now typed as `LucideIcon` — import that type from `lucide-react`
if you need it.
