import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import {
  LV2_INTERACTIVE,
  ROLE_NAME_CONTRACT,
  ROLE_NAME_EXEMPT,
} from '../../../scripts/audit-coverage.mjs'
import { WELCOME_CARD_EXEMPT, WELCOME_COMPONENT_SLUGS } from '../../../src/docs/Welcome.links'

// SKILL.md names identifiers and sections that live elsewhere and can move. A
// stale name here sends the next lv2 to a place that no longer exists, so each
// reference is pinned to the file that owns it.

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..', '..', '..')
const skill = readFileSync(join(here, 'SKILL.md'), 'utf8')
const guideline = readFileSync(join(root, '.claude/rules/lv2-composition-guideline.md'), 'utf8')

describe('add-lv2-component SKILL.md', () => {
  it('names the registries the gates read, and they exist', () => {
    expect(LV2_INTERACTIVE.size).toBeGreaterThan(0)
    expect(Object.keys(ROLE_NAME_CONTRACT).length).toBeGreaterThan(0)
    expect(ROLE_NAME_EXEMPT.size).toBeGreaterThan(0)
    expect(WELCOME_COMPONENT_SLUGS.length).toBeGreaterThan(0)
    expect(WELCOME_CARD_EXEMPT.length).toBeGreaterThan(0)

    for (const name of [
      'LV2_INTERACTIVE',
      'ROLE_NAME_CONTRACT',
      'ROLE_NAME_EXEMPT',
      'WELCOME_COMPONENT_SLUGS',
      'WELCOME_CARD_EXEMPT',
    ]) {
      expect(skill).toContain(name)
    }
  })

  it('cites only sections the guideline has', () => {
    const sections = new Set(
      [...guideline.matchAll(/^#{2,3} (\d+(?:\.\d+)?)\.? /gm)].map((match) => match[1]),
    )
    const cited = [...skill.matchAll(/§(\d+(?:\.\d+)?)/g)].map((match) => match[1])

    expect(cited.length).toBeGreaterThan(0)
    expect(cited.filter((section) => !sections.has(section))).toEqual([])
  })

  it('runs the promotion criterion before asking about the file set', () => {
    expect(skill.indexOf('promotion criterion (§2)')).toBeLessThan(
      skill.indexOf('Gather the decisions'),
    )
  })

  it('lists the lv1 habits to leave alone', () => {
    const section = skill.match(/\*\*Leave these alone\.\*\*[\s\S]*?^### /m)?.[0]

    expect(section).toBeDefined()
    for (const name of ['src/variants/index.ts', 'cssApiSamples', 'PARITY_EXEMPT', 'tsup.config.ts']) {
      expect(section).toContain(name)
    }
  })
})

describe('lv2-composition-guideline.md', () => {
  it('points at the skill instead of deferring it', () => {
    expect(guideline).toContain('../skills/add-lv2-component/SKILL.md')
    expect(guideline).not.toContain('there is no `add-lv2-component` skill')
  })
})
