/// <reference types="vite/client" />
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

/*
 * Field context combine guard (#615).
 *
 * Inside a Field, a control combines three FieldContext values with its own
 * props instead of letting the Field override them — see
 * component-architecture.md §5 "Precedence":
 *
 *   - `isError` / `disabled`: `field?.x || xProp` (either side turns it on)
 *   - `describedBy`:          `mergeIds(field?.describedBy, prop)`
 *
 * `field?.x ?? xProp` silently drops the prop: Field always provides a boolean,
 * and `false` is not nullish, so the Field's `false` beats a direct `true`; a
 * Field with a description drops the control's own ids. All nine call sites
 * were written that way before #615, the same shape as the rule docs' examples.
 *
 * The guard checks whatever name the context is bound to, not only `field`, and
 * fails a file that reads the context without a plain `const x = …` binding,
 * since it could not check that file. Out of scope on purpose:
 * `field?.id ?? idProp` (the Field id wins for Input / Textarea / Select) and
 * `fieldSet?.isError ?? …` in Field (a Field may opt out of a FieldSet error);
 * `useFieldSetContext()` is not a FieldContext read.
 *
 * This shape is the one that broke; the per-component tests required by
 * testing-guideline.md catch the others (a prop that is never read, ids joined
 * in the wrong order).
 *
 * Files are read as TEXT, never imported, like radix-type-boundary.test.tsx.
 */

const here = dirname(fileURLToPath(import.meta.url))

const implPaths = Object.keys(import.meta.glob(['../lv1/**/*.tsx', '../lv2/**/*.tsx'])).filter(
  (p) => !/\.(test|stories|vrt\.spec)\.tsx$/.test(p),
)

/** Strip comments so prose mentioning the banned shape can't false-positive. */
function stripComments(src: string): string {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '')
}

const FIELD_CONTEXT_READ = /\buseFieldContext\(\)|\buseContext\(\s*FieldContext\s*\)/g
const FIELD_CONTEXT_BINDING =
  /\bconst\s+(\w+)\s*=\s*(?:useFieldContext\(\)|useContext\(\s*FieldContext\s*\))/g

/** The names a file binds the Field context to. */
function fieldBindings(src: string): string[] {
  return [...src.matchAll(FIELD_CONTEXT_BINDING)].map((match) => match[1])
}

/** `<name>?.isError ??` and its siblings: the Field value overriding the prop. */
function overridesProp(name: string): RegExp {
  return new RegExp(`\\b${name}\\?\\.(?:isError|disabled|describedBy)\\s*\\?\\?`)
}

describe('Field context combine (drift guard)', () => {
  it('scans the lv1 and lv2 implementation files', () => {
    // Guard against a glob typo silently scanning nothing.
    expect(implPaths.length).toBeGreaterThan(20)
    expect(implPaths.some((p) => p.startsWith('../lv2/'))).toBe(true)
  })

  it('finds the binding and matches only the banned shape', () => {
    expect(fieldBindings('const field = useFieldContext()')).toEqual(['field'])
    expect(fieldBindings('const ctx = useContext(FieldContext)')).toEqual(['ctx'])
    expect(fieldBindings('const fieldSet = useFieldSetContext()')).toEqual([])
    expect('field?.disabled ?? disabledProp').toMatch(overridesProp('field'))
    expect('ctx?.describedBy ?? ariaDescribedByProp').toMatch(overridesProp('ctx'))
    expect('field?.disabled || disabledProp').not.toMatch(overridesProp('field'))
    expect('field?.id ?? idProp').not.toMatch(overridesProp('field'))
    expect('fieldSet?.isError ?? false').not.toMatch(overridesProp('field'))
  })

  it.each(implPaths)('%s combines Field state with its own props', (path) => {
    const src = stripComments(readFileSync(resolve(here, path), 'utf-8'))
    const reads = src.match(FIELD_CONTEXT_READ)?.length ?? 0
    const names = fieldBindings(src)
    // A read the guard cannot name (destructuring, a non-const binding) is
    // one it cannot check.
    expect(names).toHaveLength(reads)
    for (const name of names) expect(src).not.toMatch(overridesProp(name))
  })
})
