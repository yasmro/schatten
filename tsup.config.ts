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
  // Components (React)
  //
  // `banner.js` injects the `'use client'` directive at the top of every
  // emitted component bundle. Without it, importing Schatten components from
  // a Next.js App Router Server Component fails the build, because the
  // bundled output uses client-only React features (hooks, context, Radix
  // event wiring). The directive is only valid on the React build group —
  // the variants/tokens and seasonal groups are framework-agnostic and must
  // NOT be marked client-only (see issue #116).
  {
    entry: {
      'components/index': 'src/components/index.ts',
      'components/lv1/index': 'src/components/lv1/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    external: ['react', 'react-dom', 'lucide-react'],
    banner: {
      js: "'use client';",
    },
    esbuildOptions(options) {
      options.jsx = 'automatic'
    },
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
