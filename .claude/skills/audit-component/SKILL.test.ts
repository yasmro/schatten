import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

// The audit-component skill walks every .claude/rules/*.md file and reports
// findings against it. The SKILL.md needs a matching `### <rule>.md`
// checklist section for each rule so the skill knows what to look for. This
// test is the standing guard against drift: a rule renamed / added / removed
// without the SKILL.md being updated stops landing here, not at audit-time
// when a contributor is mid-flight.
//
// The skill's own dynamic-glob fallback still produces a best-effort audit
// when the SKILL.md is stale (see SKILL.md "Recovery / limitations"), but
// the checklist-quality drop is real — pin the contract structurally so the
// fallback is the exception, not the norm.

const here = dirname(fileURLToPath(import.meta.url))
const rulesDir = join(here, '..', '..', 'rules')
const skillFile = join(here, 'SKILL.md')

const ruleFiles = readdirSync(rulesDir).filter((file) => file.endsWith('.md'))
const skill = readFileSync(skillFile, 'utf8')

describe('audit-component SKILL.md ↔ .claude/rules/ integrity', () => {
  it('rules directory is not empty (sanity)', () => {
    // If this ever fires, the path resolution broke — not the actual contract.
    expect(ruleFiles.length).toBeGreaterThan(0)
  })

  describe('every rule file has a matching SKILL.md checklist heading', () => {
    for (const rule of ruleFiles) {
      it(`mentions ${rule} as a ### heading`, () => {
        // Accepts both standalone (`### foo.md`) and combined
        // (`### foo.md + bar.md`) section headings — both forms appear in
        // the current SKILL.md.
        const headingPattern = new RegExp(
          String.raw`^###[^\n]*\b${rule.replace('.', String.raw`\.`)}\b`,
          'm',
        )
        expect(skill, `expected SKILL.md to contain a "### …${rule}…" heading`).toMatch(
          headingPattern,
        )
      })
    }
  })

  it('does not reference removed rules in any ### heading', () => {
    const headingLines = skill.match(/^### [^\n]+\.md\b[^\n]*/gm) ?? []
    const fileSet = new Set(ruleFiles)
    const stale: string[] = []

    for (const line of headingLines) {
      const names = line.match(/\b[\w-]+\.md\b/g) ?? []
      for (const name of names) {
        if (!fileSet.has(name)) stale.push(`${name} (in heading: "${line}")`)
      }
    }

    expect(stale, `SKILL.md references rules that no longer exist: ${stale.join(', ')}`).toEqual([])
  })
})

// The lv2 checkpoints mirror lv2-composition-guideline.md section by section,
// so a section added there must reach the checklist or be excused here. The
// heading guard above cannot see this: the rule file keeps its heading however
// stale the checkpoints under it become.
describe('audit-component SKILL.md ↔ lv2-composition-guideline.md integrity', () => {
  const guideline = readFileSync(join(rulesDir, 'lv2-composition-guideline.md'), 'utf8')

  // Sections with no per-component checkpoint, each for a stated reason.
  const NOT_AUDITED: Record<string, string> = {
    '1': 'the argument for the criterion, not a requirement',
    '4': 'parent heading, its subsections are audited',
    '5': 'parent heading, its subsections are audited',
    '6': 'parent heading, 6.1 is audited',
    '6.2': 'repository tooling, not a property of one component',
    '8': 'the authoring checklist, restates the sections above',
  }

  // Ends at the next `### ` heading so a `§` cited elsewhere in SKILL.md cannot
  // satisfy the check, and fails loudly if the section ever goes missing.
  const lv2Section = skill.match(/^### lv2-composition-guideline\.md\n[\s\S]*?(?=^### )/m)?.[0]
  const sectionNumbers = [...guideline.matchAll(/^#{2,3} (\d+(?:\.\d+)?)\.? /gm)].map(
    (match) => match[1] as string,
  )

  it('finds the guideline sections and the checklist section (sanity)', () => {
    expect(sectionNumbers).toContain('4.1')
    expect(lv2Section).toBeDefined()
  })

  for (const section of sectionNumbers.filter((number) => !(number in NOT_AUDITED))) {
    it(`cites §${section} in the lv2 checklist`, () => {
      // The boundary stops `§4` from matching `§4.1`.
      expect(lv2Section).toMatch(new RegExp(String.raw`§${section.replace('.', String.raw`\.`)}(?![.\d])`))
    })
  }

  it('excuses only sections the guideline still has', () => {
    expect(Object.keys(NOT_AUDITED).filter((number) => !sectionNumbers.includes(number))).toEqual([])
  })

  it('resolves lv2 paths in the file set', () => {
    expect(skill).toContain('src/components/<lv>/<Name>/<Name>.tsx')
    expect(skill).toContain('LV2_INTERACTIVE')
  })

  it('no longer defers lv2 to a follow-up', () => {
    expect(skill).not.toContain('lv2 folder is empty')
    expect(skill).not.toContain('Audit `lv2` in depth')
    expect(skill).not.toMatch(/#311|issues\/311/)
  })
})
