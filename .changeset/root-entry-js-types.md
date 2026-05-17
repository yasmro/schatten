---
'@yasmro/schatten': patch
---

fix(build): root entry (`.`) now resolves to the components bundle, plus
build-hygiene cleanup.

Until now, `package.json#exports["."]` only declared `style`, so
`import { Button } from '@yasmro/schatten'` failed (`ERR_PACKAGE_PATH_NOT_EXPORTED`).
This was a build-config oversight, not a deliberate design choice — the
sub-path entries (`./components/lv1`, `./variants`, …) continued to work.

Closes [#109](https://github.com/yasmro/schatten/issues/109).

**Resolution after this fix**

```ts
import { Button } from '@yasmro/schatten'                 // ✅ now works
import { Button } from '@yasmro/schatten/components/lv1'  // ✅ still works
import '@yasmro/schatten/schatten.css'                    // ✅ still works
```

**Primary changes**

- `exports["."]` gains `types` / `import` / `require` entries pointing at
  `dist/components/index.{d.ts,js,cjs}` so the root specifier resolves to
  the full lv1 surface. `style` is reordered above the JS conditions so
  bundlers that use the `style` pipeline still pick up `dist/schatten.css`
  (Node's conditional-exports resolution short-circuits at the first
  matching condition).
- Top-level `main` / `module` / `types` are repointed at the components
  bundle, replacing stale `./dist/index.{js,d.ts}` paths that never
  existed in `dist/`.
- `src/components/index.ts` no longer re-exports the (currently empty)
  lv2 barrel, so the root entry has no transitive dependency on lv2. The
  `./components/lv2` sub-path entry is unchanged — its removal is scoped
  to the next issue.

**Build-hygiene additions (in scope for this fix)**

- `sideEffects: ["**/*.css", "./dist/**/*.css"]` declared so bundlers can
  tree-shake unused components from the new root entry. No Schatten
  module has top-level DOM / timer / network side effects.
- `types` conditions are split into `import` / `require` sub-conditions
  pointing at `.d.ts` / `.d.cts` respectively. Without this split,
  publint warned that `types` would be interpreted as ESM under the
  `require` condition.
- `publint` is added as a dev dependency with a `pnpm lint:pkg` script,
  to mechanize the four classes of bug uncovered while triaging this
  issue (missing JS conditions, condition-order conflicts, non-existent
  `main` paths, dual-format `types` mismatch).
- The pre-existing `clean: true` on the first `tsup` config block is
  moved to a top-level `pnpm clean:dist` (rimraf) step. Running clean
  from one config inside a parallel `defineConfig([…])` array was
  racing with the other configs' DTS emit and silently wiping
  `dist/themes/seasonal/index.d.{ts,cts}`. Both files now persist after
  build.
- CSS-only export entries (`./schatten.css`, `./core/tokens`,
  `./themes/default`, `./themes/seasonal/themes.css`) are collapsed to
  string-form values — they resolved identically under `import` and
  `require`, so the conditional wrapper added noise.
- README is updated to recommend `import { Button } from '@yasmro/schatten'`
  as the canonical form, with the sub-path imports documented as the
  bundle-size-sensitive alternative.

No public API surface changes — this is strictly an additive fix to make
the documented convenience entry resolve, plus the build-hygiene
follow-ups it surfaced.
