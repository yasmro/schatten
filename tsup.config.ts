import { existsSync, readdirSync } from 'node:fs'
import { defineConfig } from 'tsup'

// CSS assets are copied into `dist/` by the standalone `build:copy-css` step
// (scripts/copy-css-assets.mjs), not by a tsup `onSuccess` hook. See issue #121:
// hanging the copy off a single build group made it silently dependent on the
// config-array order.
//
// `clean` lives in the build script (rimraf via `pnpm clean:dist`) instead of
// in a single config block — tsup runs all configs in parallel, so a per-config
// `clean: true` can race with the other configs' DTS emit and silently wipe
// already-written outputs (this was hitting `dist/themes/seasonal/index.d.ts`).

// One ESM entry per lv1 component directory. Building each component as its
// own entry (instead of a single bundled barrel) is what makes the public
// `components/lv1` barrel tree-shakeable: a consumer importing `{ Button }`
// pulls in only Button's module + its shared chunks, not all 17 components.
// A single pre-bundled barrel chunk cannot be shaken — its weight is dominated
// by Radix internals that carry no `/* @__PURE__ */` annotations, so a
// consumer bundler has to retain the whole chunk. See
// docs/decisions/2026-05-lv1-barrel-tree-shaking.md.
const LV1_DIR = 'src/components/lv1'
const lv1ComponentEntries = Object.fromEntries(
  readdirSync(LV1_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(`${LV1_DIR}/${d.name}/index.ts`))
    .map((d) => [`components/lv1/${d.name}/index`, `${LV1_DIR}/${d.name}/index.ts`]),
)

// The two barrel entries that `package.json#exports` actually publishes.
const componentBarrelEntries = {
  'components/index': 'src/components/index.ts',
  'components/lv1/index': 'src/components/lv1/index.ts',
}

export default defineConfig([
  // Variants & tokens (no React, for Astro / non-React consumers)
  {
    entry: {
      'variants/index': 'src/variants/index.ts',
      'tokens/index': 'src/tokens.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    external: ['react', 'react-dom', 'lucide-react'],
  },
  // Components — ESM. Per-component entries + code splitting: each component
  // becomes its own module, shared code (`cn`, variants, Radix) lands in
  // chunks. The barrel re-exports from those entries, so `import { Button }`
  // tree-shakes down to Button + its chunks only.
  //
  // `banner.js` injects the `'use client'` directive at the top of every
  // emitted component file. Without it, importing Schatten components from a
  // Next.js App Router Server Component fails the build, because the output
  // uses client-only React features (hooks, context, Radix event wiring).
  // The directive is only valid on the React build groups — the
  // variants/tokens and seasonal groups are framework-agnostic and must NOT
  // be marked client-only (see issue #116).
  {
    entry: {
      ...componentBarrelEntries,
      ...lv1ComponentEntries,
    },
    format: ['esm'],
    dts: false,
    splitting: true,
    external: ['react', 'react-dom', 'lucide-react'],
    banner: {
      js: "'use client';",
    },
    esbuildOptions(options) {
      options.jsx = 'automatic'
    },
  },
  // Components — CJS. Barrels only: `require()` consumers do not tree-shake,
  // and emitting per-component CJS files would duplicate the bundled Radix
  // code across 17 standalone bundles and bloat the published package.
  // Carries the same `'use client'` banner as the ESM group (see above) so
  // the `.cjs` barrels are equally safe to import from a Server Component.
  {
    entry: componentBarrelEntries,
    format: ['cjs'],
    dts: false,
    external: ['react', 'react-dom', 'lucide-react'],
    banner: {
      js: "'use client';",
    },
    esbuildOptions(options) {
      options.jsx = 'automatic'
    },
  },
  // Components — type declarations. Only the two published barrel entries
  // need `.d.ts` / `.d.cts`; the per-component ESM entries are an internal
  // build detail and are not part of `package.json#exports`.
  {
    entry: componentBarrelEntries,
    format: ['esm', 'cjs'],
    dts: { only: true },
    external: ['react', 'react-dom', 'lucide-react'],
  },
  // Seasonal theme utilities
  {
    entry: {
      'themes/seasonal/index': 'src/themes/seasonal/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    external: ['react', 'react-dom', 'lucide-react'],
  },
])
