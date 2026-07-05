/// <reference types="vite/client" />
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { DropdownMenuContent } from '../lv1/DropdownMenu/DropdownMenu'
import { PopoverClose, PopoverContent } from '../lv1/Popover/Popover'
import { SelectContent } from '../lv1/Select/Select'
import { Switch } from '../lv1/Switch/Switch'
import { Tabs } from '../lv1/Tabs/Tabs'

/*
 * Radix type boundary guard (#156).
 *
 * Public lv1 signatures must never expose Radix-derived types: Props types are
 * native-element props (`ComponentPropsWithoutRef<'button'>` …) plus curated
 * literal redeclarations, and forwardRef element types are concrete DOM types
 * (`HTMLButtonElement` …) — see api-stability.md §Radix type boundary. Radix
 * types flowing into a public signature would make the published API surface
 * track whatever Radix version the consumer's lockfile resolves, breaking the
 * 1.0 stability contract without any source diff.
 *
 * Two mechanically checkable shapes are banned from lv1 implementation files
 * (the value-level compatibility of curated props is NOT asserted here — the
 * spread into each `*Primitive.*` element already fails `pnpm typecheck` when
 * Radix renames or narrows a prop):
 *
 *   1. `ComponentPropsWithoutRef<typeof XPrimitive.Y>` / `ComponentRef<…>` /
 *      `ElementRef<…>` — Radix-derived prop/ref types.
 *   2. `const X = XPrimitive.Y` — re-exporting a Radix component *instance*
 *      directly (props type, displayName, and future Radix prop changes all
 *      pass through untouched).
 *
 * Files are read as TEXT (readFileSync, established *.drift.test.ts approach)
 * — never imported — so no story/component side effects run.
 */

const here = dirname(fileURLToPath(import.meta.url))

// Glob KEYS only (paths) — the loaders are never called. `../lv1/**/*.tsx`
// resolves to every lv1 module; tests and stories are excluded (the boundary
// applies to implementation files, not to test fixtures like the shielded-prop
// pins below). This file lives in src/components/__tests__/ (NOT inside lv1/)
// so the lv1 companion/export-integrity tooling doesn't mistake it for a
// component directory.
const implPaths = Object.keys(import.meta.glob('../lv1/**/*.tsx')).filter(
  (p) => !/\.(test|stories|vrt\.spec)\.tsx$/.test(p),
)

/** Strip comments so prose mentioning the banned shapes can't false-positive. */
function stripComments(src: string): string {
  return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '')
}

const RADIX_DERIVED_TYPE =
  /(ComponentPropsWithoutRef|ComponentRef|ElementRef)\s*<\s*typeof\s+[A-Za-z]*Primitive\b/
const DIRECT_REEXPORT = /^\s*(?:export\s+)?const\s+\w+\s*=\s*[A-Za-z]*Primitive\.\w+\s*$/m

describe('Radix type boundary (drift guard)', () => {
  it('scans the lv1 implementation files', () => {
    // Guard against a glob typo silently scanning nothing.
    expect(implPaths.length).toBeGreaterThan(20)
  })

  it.each(implPaths)('%s keeps Radix types out of its signatures', (path) => {
    const src = stripComments(readFileSync(resolve(here, path), 'utf-8'))
    expect(src).not.toMatch(RADIX_DERIVED_TYPE)
    expect(src).not.toMatch(DIRECT_REEXPORT)
  })
})

describe('shielded Radix props stay rejected at the type level', () => {
  // Each entry pins one representative prop that the curated surface dropped.
  // If a refactor accidentally re-inherits the Radix type, the error disappears
  // and `pnpm typecheck` fails on the now-unused @ts-expect-error directive.
  it('rejects props outside the curated surface', () => {
    const shielded = [
      // @ts-expect-error — onCloseAutoFocus is not part of the curated SelectContent surface (#156)
      <SelectContent key="select-content" onCloseAutoFocus={() => {}} />,
      // @ts-expect-error — dismiss-control callbacks are not part of the curated PopoverContent surface (#156)
      <PopoverContent key="popover-content" onEscapeKeyDown={() => {}} />,
      // @ts-expect-error — asChild is internal (element child → asChild); not public API (#156)
      <PopoverClose key="popover-close" asChild />,
      // @ts-expect-error — forceMount is not part of the curated DropdownMenuContent surface (#156)
      <DropdownMenuContent key="dropdown-content" forceMount />,
      // @ts-expect-error — dir (RTL) is not part of the curated Tabs surface (#156)
      <Tabs key="tabs" dir="rtl" />,
      // @ts-expect-error — asChild is hard-excluded on form controls (component-architecture §3)
      <Switch key="switch" asChild />,
    ]
    expect(shielded).toHaveLength(6)
  })
})
