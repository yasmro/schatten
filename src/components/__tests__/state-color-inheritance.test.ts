/// <reference types="vite/client" />
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

/*
 * State-driven color inheritance guard (#530).
 *
 * Contract: css-api.md §"State-driven color lives on the block; sub-elements
 * inherit `currentColor`". When a block declares a color under a state that
 * applies to the whole block (`:disabled` / `[data-disabled]`), a sub-element
 * that pins its own `color: var(--color-*)` opts OUT of that state — the block
 * repaints its surface while the child keeps a token chosen for the surface it
 * no longer sits on. That is #524 (`.st-switch__check` pinned
 * `--color-background`, stayed pale on the pale disabled track, and vanished).
 *
 * This guard exists because no other gate sees that bug class: jsdom loads no
 * stylesheet, axe exempts `disabled` from color-contrast, and the visual delta
 * of a single icon lands under VRT's `maxDiffPixelRatio: 0.01`.
 *
 * Stylesheets are read as TEXT (never imported), the same approach as
 * radix-type-boundary.test.tsx and the *.drift.test.ts family.
 *
 * DOM containment is not derivable from CSS, so the scan cannot decide on its
 * own whether an uncovered sub-element is a bug. It instead pins the INVENTORY:
 * every pinned-color sub-element in a stateful component must be classified in
 * `EXEMPT` below. A new one fails this test until someone classifies it — which
 * is the moment to ask "should this child gray out with the block?".
 */

const here = dirname(fileURLToPath(import.meta.url))

const cssPaths = Object.keys(import.meta.glob('../lv1/**/*.css'))

/** Selector hooks for a state that applies to the whole block. */
const STATE_HOOK = /:disabled|\[data-disabled/
/** A declaration block that pins a color token (rather than inheriting). */
const PINNED_COLOR = /(?:^|;)\s*color\s*:\s*var\(--color-/
/** `.st-block`, `.st-block__element`, `.st-block__element--modifier`. */
const ST_CLASS = /\.st-[a-z0-9-]+(?:__[a-z0-9-]+)?/g

interface Rule {
  selector: string
  declarations: string
}

/** Strip comments so prose in a `.css` header can't be parsed as a selector. */
function parseRules(source: string): Rule[] {
  const withoutComments = source.replace(/\/\*[\s\S]*?\*\//g, '')
  const rules: Rule[] = []
  // Matches innermost blocks only, so `@layer` / `@media` wrappers are skipped.
  const blockPattern = /([^{}]*)\{([^{}]*)\}/g
  let match = blockPattern.exec(withoutComments)
  while (match !== null) {
    const selector = match[1].trim().replace(/\s+/g, ' ')
    if (selector && !selector.startsWith('@')) {
      rules.push({ selector, declarations: match[2] })
    }
    match = blockPattern.exec(withoutComments)
  }
  return rules
}

/** The class a comma-separated selector part actually targets (its last one). */
function targetClass(selectorPart: string): string | undefined {
  const classes = selectorPart.match(ST_CLASS)
  return classes?.[classes.length - 1]
}

interface Finding {
  className: string
  file: string
}

function scan(): { findings: Finding[]; pinnedAnywhere: Set<string> } {
  const findings: Finding[] = []
  const pinnedAnywhere = new Set<string>()

  for (const path of cssPaths) {
    const rules = parseRules(readFileSync(resolve(here, path), 'utf-8'))

    for (const rule of rules) {
      if (!PINNED_COLOR.test(rule.declarations)) continue
      for (const part of rule.selector.split(',')) {
        const className = targetClass(part)
        if (className?.includes('__')) pinnedAnywhere.add(className)
      }
    }

    // Only components that actually have a block-level state color can leak.
    const isStateful = rules.some(
      (rule) => STATE_HOOK.test(rule.selector) && PINNED_COLOR.test(rule.declarations),
    )
    if (!isStateful) continue

    // A sub-element repainted by a state-scoped rule already follows the block.
    const repaintedByState = new Set<string>()
    for (const rule of rules) {
      if (!STATE_HOOK.test(rule.selector)) continue
      for (const className of rule.selector.match(ST_CLASS) ?? []) {
        repaintedByState.add(className)
      }
    }

    for (const rule of rules) {
      if (!PINNED_COLOR.test(rule.declarations) || STATE_HOOK.test(rule.selector)) continue
      for (const part of rule.selector.split(',')) {
        const className = targetClass(part)
        if (!className?.includes('__')) continue
        if (repaintedByState.has(className)) continue
        findings.push({ className, file: path.replace('../lv1/', '') })
      }
    }
  }

  return { findings, pinnedAnywhere }
}

/*
 * Every sub-element that pins a color inside a stateful component, with the
 * reason it is allowed to. Three kinds of reason are legitimate:
 *
 *   region        — the element never renders inside the stateful block (a
 *                   portal panel, a group label, a tab panel), so the block's
 *                   disabled state cannot reach it in the first place.
 *   specificity   — a modifier whose block-state sibling outranks it, so the
 *                   state still wins where they collide.
 *   gray-zone     — a muted adornment that DOES sit inside the stateful block
 *                   and does NOT follow it. Documented as a deliberate
 *                   exemption in css-api.md; revisit as one visual decision.
 *
 * A new entry means a new judgement call — make it before adding the line.
 */
const EXEMPT: Record<string, string> = {
  '.st-dropdown-menu__content':
    'region — the portal panel itself; never rendered inside a disabled item',
  '.st-dropdown-menu__item--destructive':
    'specificity — `.st-dropdown-menu__item[data-disabled]` is (0,2,0) and outranks this (0,1,0), so a disabled destructive item still grays out',
  '.st-dropdown-menu__label': 'region — a group label, not part of any item',
  '.st-dropdown-menu__shortcut':
    'gray-zone — muted adornment inside the item; stays foreground-muted while a disabled item drops to foreground-disabled',
  '.st-dropdown-menu__sub-trigger-chevron':
    'gray-zone — muted adornment inside the sub-trigger item; same shape as __shortcut',
  '.st-input__icon-left':
    'gray-zone — muted adornment inside the wrapper; does not follow `:has(.st-input:disabled)`',
  '.st-input__icon-right': 'gray-zone — see .st-input__icon-left',
  '.st-input__text-left': 'gray-zone — see .st-input__icon-left',
  '.st-input__text-right': 'gray-zone — see .st-input__icon-left',
  '.st-select__content': 'region — the portal panel itself; not inside the trigger',
  '.st-select__icon':
    'gray-zone — the chevron inside the trigger; stays foreground-muted while a disabled trigger drops to foreground-disabled',
  '.st-select__label': 'region — a group label inside the panel, not part of any item',
  '.st-tabs__content': 'region — the tab panel, rendered outside the trigger list',
}

/*
 * The sub-elements css-api.md lists as CONFORMING examples. Pinning a color on
 * any of them would make that table wrong — this keeps the doc from rotting.
 */
const CONFORMING = [
  '.st-checkbox__indicator',
  '.st-switch__check',
  '.st-select__item-indicator',
  '.st-dropdown-menu__item-indicator',
  '.st-tabs__trigger-icon',
] as const

describe('state-driven color inheritance (drift guard)', () => {
  it('scans the lv1 stylesheets', () => {
    // Guard against a glob typo silently scanning nothing.
    expect(cssPaths.length).toBeGreaterThan(20)
  })

  it('classifies every sub-element that pins a color inside a stateful block', () => {
    const { findings } = scan()
    const found = [...new Set(findings.map((f) => f.className))].sort()
    // A new class here is unclassified: decide whether it should follow the
    // block's state (→ `currentColor` + a block-level rule) or is exempt
    // (→ add it to EXEMPT with a reason). A removed class means a stale entry.
    expect(found).toEqual(Object.keys(EXEMPT).sort())
  })

  it('keeps the documented conforming examples free of pinned colors', () => {
    const { pinnedAnywhere } = scan()
    for (const className of CONFORMING) {
      expect(pinnedAnywhere.has(className), `${className} must inherit currentColor`).toBe(false)
    }
  })
})
