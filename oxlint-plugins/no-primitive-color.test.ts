import { execFileSync } from 'node:child_process'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterAll, describe, expect, it } from 'vitest'

// The `no-primitive-color` oxlint JS plugin is exercised the way a consumer
// would hit it: run `oxlint` over a fixture file with a minimal config that
// loads the plugin by absolute path, and assert on the emitted diagnostics.
// (Port of the former Biome GritQL plugin test.)

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(here, '..')
const pluginPath = join(here, 'no-primitive-color.js')
const oxlintBin = join(repoRoot, 'node_modules', '.bin', 'oxlint')

const workdir = mkdtempSync(join(tmpdir(), 'schatten-no-primitive-color-'))
writeFileSync(
  join(workdir, '.oxlintrc.json'),
  JSON.stringify({
    jsPlugins: [pluginPath],
    rules: { 'schatten/no-primitive-color': 'error' },
  }),
)

afterAll(() => rmSync(workdir, { recursive: true, force: true }))

/** Lint `code` as a .tsx file and return the count of plugin diagnostics. */
function countViolations(code: string): number {
  const file = join(workdir, 'fixture.tsx')
  writeFileSync(file, code)
  let output = ''
  try {
    // oxlint prints diagnostics and exits non-zero (throwing here) whenever a
    // violation is found.
    output = execFileSync(oxlintBin, ['-c', '.oxlintrc.json', file], {
      cwd: workdir,
      encoding: 'utf8',
    })
  } catch (error) {
    const { stdout, stderr } = error as { stdout?: string; stderr?: string }
    output = `${stdout ?? ''}${stderr ?? ''}`
  }
  return (output.match(/Primitive color utility class/g) ?? []).length
}

describe('no-primitive-color plugin', () => {
  describe('flags primitive color utilities in JSX', () => {
    it('flags a bg- primitive on a self-closing element', () => {
      expect(countViolations('export const A = () => <div className="bg-red-500" />')).toBe(1)
    })

    it('flags a text- primitive on an element with children', () => {
      expect(
        countViolations('export const A = () => <span className="text-gray-700">x</span>'),
      ).toBe(1)
    })

    it('flags border- and ring- primitives', () => {
      expect(countViolations('export const A = () => <div className="border-blue-300" />')).toBe(1)
      expect(countViolations('export const A = () => <div className="ring-green-200" />')).toBe(1)
    })

    it('flags a primitive behind a Tailwind variant prefix', () => {
      expect(countViolations('export const A = () => <div className="dark:bg-amber-500" />')).toBe(
        1,
      )
    })

    it("flags Schatten's own primitive scales (vermillion, sumi)", () => {
      expect(countViolations('export const A = () => <div className="bg-vermillion-600" />')).toBe(
        1,
      )
      expect(countViolations('export const A = () => <div className="text-sumi-800" />')).toBe(1)
    })

    it('flags a primitive class inside a cn() expression', () => {
      expect(
        countViolations("export const A = () => <div className={cn('flex', 'bg-pink-400')} />"),
      ).toBe(1)
    })

    it('flags a primitive across a multi-line attribute list', () => {
      const code = [
        'export const A = () => (',
        '  <div',
        '    id="x"',
        '    className="border-indigo-300"',
        '  />',
        ')',
      ].join('\n')
      expect(countViolations(code)).toBe(1)
    })
  })

  describe('allows semantic tokens', () => {
    it('does not flag state semantic tokens', () => {
      expect(
        countViolations(
          'export const A = () => <div className="bg-error text-error-foreground" />',
        ),
      ).toBe(0)
    })

    it('does not flag foreground / surface tokens', () => {
      expect(
        countViolations(
          'export const A = () => <div className="bg-surface text-foreground-muted" />',
        ),
      ).toBe(0)
    })

    it('does not flag the theme scale (bg-theme-500 is a semantic token)', () => {
      expect(countViolations('export const A = () => <div className="bg-theme-500" />')).toBe(0)
    })

    it('does not flag an element without a primitive color', () => {
      expect(countViolations('export const A = () => <div className="flex gap-2 p-4" />')).toBe(0)
    })
  })

  describe('suppression', () => {
    it('is silenced by an oxlint-disable-next-line comment', () => {
      const code = [
        '// oxlint-disable-next-line schatten/no-primitive-color -- documenting the primitive palette',
        'export const A = () => <div className="bg-red-500" />',
      ].join('\n')
      expect(countViolations(code)).toBe(0)
    })
  })
})
