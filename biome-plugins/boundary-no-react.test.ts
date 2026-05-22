import { execFileSync } from 'node:child_process'
import { cpSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterAll, describe, expect, it } from 'vitest'

// `style/noRestrictedImports` is a built-in Biome rule — what we actually
// verify here is the **scope** wired in `biome.json` (`src/core/**` /
// `src/variants/**` / `src/themes/**` / `src/tokens.ts`) and the
// `paths` / `patterns` lists that pin it to `react` / `react-dom` /
// `@radix-ui/*`. A config typo or a Biome version-up that changes the
// rule's surface would silently break the contract; this test catches
// both.
//
// Mechanism mirrors `no-primitive-color.test.ts`: copy the real
// `biome.json` into a throwaway workdir together with the GritQL plugin
// it references, write a fixture at the path under test, and assert on
// the diagnostic output.

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(here, '..')
const biomeBin = join(repoRoot, 'node_modules', '.bin', 'biome')

const workdir = mkdtempSync(join(tmpdir(), 'schatten-boundary-lint-'))
cpSync(join(repoRoot, 'biome.json'), join(workdir, 'biome.json'))
// `biome.json` references `./biome-plugins/no-primitive-color.grit` via a
// relative path, so the plugin file must exist alongside the copied config
// or biome refuses to load it. We only need the .grit file itself.
mkdirSync(join(workdir, 'biome-plugins'), { recursive: true })
cpSync(
  join(repoRoot, 'biome-plugins', 'no-primitive-color.grit'),
  join(workdir, 'biome-plugins', 'no-primitive-color.grit'),
)

afterAll(() => rmSync(workdir, { recursive: true, force: true }))

/** Lint `code` at `relPath` (relative to the workdir) and return raw output. */
function lintAt(relPath: string, code: string): string {
  const file = join(workdir, relPath)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, code)
  try {
    execFileSync(biomeBin, ['lint', '--colors=off', relPath], {
      cwd: workdir,
      encoding: 'utf8',
    })
    return ''
  } catch (error) {
    const { stdout, stderr } = error as { stdout?: string; stderr?: string }
    return `${stdout ?? ''}${stderr ?? ''}`
  }
}

describe('noRestrictedImports — core / variants / themes boundary', () => {
  describe('flags React-tree imports inside the scoped paths', () => {
    it('flags `react` import in src/core/**', () => {
      expect(lintAt('src/core/_fixture.ts', `import * as React from 'react'\n`)).toMatch(
        /noRestrictedImports/,
      )
    })

    it('flags `react-dom` import in src/variants/**', () => {
      expect(
        lintAt('src/variants/_fixture.ts', `import { createPortal } from 'react-dom'\n`),
      ).toMatch(/noRestrictedImports/)
    })

    it('flags `react/jsx-runtime` import in src/themes/**', () => {
      expect(lintAt('src/themes/_fixture.ts', `import { jsx } from 'react/jsx-runtime'\n`)).toMatch(
        /noRestrictedImports/,
      )
    })

    it('flags `react-dom/client` (pattern catch) in src/core/**', () => {
      expect(
        lintAt('src/core/_fixture.ts', `import { createRoot } from 'react-dom/client'\n`),
      ).toMatch(/noRestrictedImports/)
    })

    it('flags `@radix-ui/react-slot` (pattern catch) in src/variants/**', () => {
      expect(
        lintAt('src/variants/_fixture.ts', `import { Slot } from '@radix-ui/react-slot'\n`),
      ).toMatch(/noRestrictedImports/)
    })

    it('flags `src/tokens.ts` (single-file scope entry)', () => {
      expect(lintAt('src/tokens.ts', `import * as React from 'react'\n`)).toMatch(
        /noRestrictedImports/,
      )
    })

    it('flags `react/jsx-dev-runtime` import in src/core/**', () => {
      expect(
        lintAt('src/core/_fixture.ts', `import { jsxDEV } from 'react/jsx-dev-runtime'\n`),
      ).toMatch(/noRestrictedImports/)
    })

    it('flags a dynamic `import("react")` in src/variants/**', () => {
      // Biome documents `noRestrictedImports` as covering dynamic imports;
      // pin that here so a future version-up that drops the coverage
      // fails CI instead of opening a silent hole.
      expect(
        lintAt(
          'src/variants/_fixture.ts',
          `export async function load() { return await import('react') }\n`,
        ),
      ).toMatch(/noRestrictedImports/)
    })
  })

  describe('leaves the rest of src/ alone', () => {
    it('does NOT flag `react` import in src/lib/** (allowed per component-architecture §6)', () => {
      expect(lintAt('src/lib/_fixture.ts', `import type { Ref } from 'react'\n`)).not.toMatch(
        /noRestrictedImports/,
      )
    })

    it('does NOT flag a non-react import inside the scoped paths', () => {
      expect(
        lintAt('src/core/_fixture.ts', `import { cva } from 'class-variance-authority'\n`),
      ).not.toMatch(/noRestrictedImports/)
    })
  })
})
