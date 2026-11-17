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
 * Out of scope on purpose: `field?.id ?? idProp` (the Field id wins for
 * Input / Textarea / Select) and `fieldSet?.isError ?? …` in Field (a Field may
 * opt out of a FieldSet error). `\bfield\?` does not match `fieldSet?.`.
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

const FIELD_OVERRIDES_PROP = /\bfield\?\.(?:isError|disabled|describedBy)\s*\?\?/

describe('Field context combine (drift guard)', () => {
  it('scans the lv1 and lv2 implementation files', () => {
    // Guard against a glob typo silently scanning nothing.
    expect(implPaths.length).toBeGreaterThan(20)
    expect(implPaths.some((p) => p.startsWith('../lv2/'))).toBe(true)
  })

  it('matches the banned shape and nothing that is allowed', () => {
    expect('field?.disabled ?? disabledProp').toMatch(FIELD_OVERRIDES_PROP)
    expect('field?.describedBy ?? ariaDescribedByProp').toMatch(FIELD_OVERRIDES_PROP)
    expect('field?.id ?? idProp').not.toMatch(FIELD_OVERRIDES_PROP)
    expect('fieldSet?.isError ?? false').not.toMatch(FIELD_OVERRIDES_PROP)
  })

  it.each(implPaths)('%s combines Field state with its own props', (path) => {
    const src = stripComments(readFileSync(resolve(here, path), 'utf-8'))
    expect(src).not.toMatch(FIELD_OVERRIDES_PROP)
  })
})
