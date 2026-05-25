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
