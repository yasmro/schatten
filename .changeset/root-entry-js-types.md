---
'@yasmro/schatten': patch
---

fix(build): root entry (`.`) now resolves to the components bundle.

Until now, `package.json#exports["."]` only declared `style`, so
`import { Button } from '@yasmro/schatten'` failed (`ERR_PACKAGE_PATH_NOT_EXPORTED`).
This was a build-config oversight, not a deliberate design choice — the
sub-path entries (`./components/lv1`, `./variants`, …) continued to work.

Closes [#109](https://github.com/yasmro/schatten/issues/109).

**Changes**

- `exports["."]` gains `types` / `import` / `require` entries pointing at
  `dist/components/index.{d.ts,js,cjs}` so the root specifier resolves to
  the full lv1 surface. `style` is reordered above the JS conditions so
  bundlers that use the `style` pipeline still pick up `dist/schatten.css`
  (the Node resolution algorithm short-circuits at the first matching
  condition).
- Top-level `main` / `module` / `types` are repointed at the components
  bundle, replacing stale `./dist/index.{js,d.ts}` paths that never
  existed in `dist/`.
- `src/components/index.ts` no longer re-exports the (currently empty)
  lv2 barrel, so the root entry has no transitive dependency on lv2.
  The `./components/lv2` sub-path entry is unchanged — its removal is
  scoped to the next issue.

**Resolution after this fix**

```ts
import { Button } from '@yasmro/schatten'                 // ✅ now works
import { Button } from '@yasmro/schatten/components/lv1'  // ✅ still works
import '@yasmro/schatten/schatten.css'                    // ✅ still works
```

No public API surface changes — this is strictly an additive fix to make
the documented convenience entry resolve.
