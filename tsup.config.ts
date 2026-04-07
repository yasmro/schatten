import { copyFileSync, mkdirSync, readdirSync } from 'node:fs'
import { defineConfig } from 'tsup'

function copyCssAssets() {
  const dirs = ['core/tokens', 'themes/default', 'themes/seasonal']
  for (const dir of dirs) {
    mkdirSync(`dist/${dir}`, { recursive: true })
    for (const file of readdirSync(`src/${dir}`)) {
      if (file.endsWith('.css')) {
        copyFileSync(`src/${dir}/${file}`, `dist/${dir}/${file}`)
      }
    }
  }
}

export default defineConfig([
  // Variants (CSS-only, for Astro)
  {
    entry: {
      'variants/index': 'src/variants/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    external: ['react', 'react-dom'],
  },
  // Components (React)
  {
    entry: {
      'components/index': 'src/components/index.ts',
      'components/lv1/index': 'src/components/lv1/index.ts',
      'components/lv2/index': 'src/components/lv2/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    external: ['react', 'react-dom'],
    esbuildOptions(options) {
      options.jsx = 'automatic'
    },
  },
  // Seasonal theme utilities + CSS asset copy
  {
    entry: {
      'themes/seasonal/index': 'src/themes/seasonal/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    external: ['react', 'react-dom'],
    onSuccess: copyCssAssets,
  },
])
