import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

// The `prepare-release` skill's Step 3 pivots on a `pnpm test:vrt --grep`
// pattern of the shape `(Name|Name|…).+parity` to run targeted parity VRT
// when a parity-covered Radix dep bumps. Playwright's `--grep` returns
// exit 0 when zero tests match — so a stale grep entry (a Name with no
// matching `*.parity.stories.tsx`) silently greenlights a regression.
//
// This test is the standing guard: every Name listed in the parity grep
// MUST resolve to a real `<Name>.parity.stories.tsx` (and its accompanying
// `<Name>.parity.vrt.spec.ts`) on disk. It also catches the reverse
// failure mode — a parity-covered Radix lv1 (Checkbox / Radio / Separator
// / Switch and any future siblings) is on disk but the skill's grep
// doesn't list it, so the targeted check never fires.
//
// When you add a new parity-covered Radix lv1, this test fails until you
// extend the skill's grep pattern. When you remove a parity story, this
// test fails until you remove the entry from the grep. Both directions
// matter — the false-greenlight failure mode is exactly the regression
// the skill exists to prevent.

const here = dirname(fileURLToPath(import.meta.url))
const skillPath = join(here, 'SKILL.md')
const lv1Dir = join(here, '..', '..', '..', 'src', 'components', 'lv1')

// Components whose Radix import is purely `@radix-ui/react-slot` (i.e. the
// `asChild` plumbing primitive that emits no DOM of its own). A Slot bump
// is handled by a separate row in the skill's Step 3 table, not by the
// parity grep, so these components are NOT expected in the parity grep
// even though they technically import from `@radix-ui/*`.
const SLOT_ONLY_RADIX = new Set(['Button', 'Text'])

function readSkill(): string {
  return readFileSync(skillPath, 'utf8')
}

/** Extract the names listed in the `(A|B|C).+parity` grep pattern. */
function extractParityGrepNames(skill: string): string[] {
  // Matches: pnpm test:vrt --grep "(Checkbox|Radio|Separator|Switch).+parity"
  // The shell-escaped `\|` form (`"(A\|B).+parity"`) and the unescaped
  // markdown form (`"(A|B).+parity"`) both appear in SKILL.md — accept
  // either by normalising backslashes before splitting.
  const re = /--grep "\(([^)]+)\)\.\+parity"/g
  const all: string[] = []
  for (const match of skill.matchAll(re)) {
    const names = match[1]
      .replace(/\\\|/g, '|')
      .split('|')
      .map((n) => n.trim())
      .filter(Boolean)
    all.push(...names)
  }
  // De-duplicate (the grep appears in both the table and the code block).
  return [...new Set(all)].sort()
}

function listParityStoryComponents(): string[] {
  return readdirSync(lv1Dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) =>
      existsSync(join(lv1Dir, name, `${name}.parity.stories.tsx`)),
    )
    .sort()
}

function listRadixUsingComponents(): string[] {
  return readdirSync(lv1Dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => {
      const tsx = join(lv1Dir, name, `${name}.tsx`)
      if (!existsSync(tsx)) return false
      const source = readFileSync(tsx, 'utf8')
      return /from\s+['"]@radix-ui\//.test(source)
    })
    .sort()
}

describe('prepare-release skill — parity grep contract', () => {
  const skill = readSkill()
  const grepNames = extractParityGrepNames(skill)
  const parityComponents = listParityStoryComponents()
  const radixUsing = listRadixUsingComponents()

  it('SKILL.md contains a parity grep of the shape "(Name|Name).+parity"', () => {
    expect(
      grepNames.length,
      'SKILL.md must contain at least one `pnpm test:vrt --grep "(Name|Name).+parity"` invocation. If this fails, the skill probably no longer pivots on parity VRT for Radix bumps — re-read Step 3 of SKILL.md and re-check.',
    ).toBeGreaterThan(0)
  })

  it('every Name in the parity grep has a matching *.parity.stories.tsx on disk', () => {
    const missing = grepNames.filter((n) => !parityComponents.includes(n))
    expect(
      missing,
      'Components named in the SKILL.md parity grep but with NO `*.parity.stories.tsx` on disk. `pnpm test:vrt --grep "<missing> parity"` would match 0 tests = exit 0 = silently greenlight a dependency bump. This is exactly the false-greenlight failure mode the skill exists to prevent. Either (a) remove the name from the grep, (b) add the parity story, or (c) move the component to the non-parity row of the Step 3 table.',
    ).toEqual([])
  })

  it('every Name in the parity grep has a matching *.parity.vrt.spec.ts on disk', () => {
    const missingSpec = grepNames.filter(
      (n) => !existsSync(join(lv1Dir, n, `${n}.parity.vrt.spec.ts`)),
    )
    expect(
      missingSpec,
      'Components named in the SKILL.md parity grep but with NO `*.parity.vrt.spec.ts`. The story file exists but Playwright has no spec to find — same false-greenlight failure mode as the missing-story case.',
    ).toEqual([])
  })

  it('every parity-covered Radix-using lv1 (excluding Slot-only consumers) is listed in the parity grep', () => {
    const parityAndRadix = parityComponents
      .filter((n) => radixUsing.includes(n))
      .filter((n) => !SLOT_ONLY_RADIX.has(n))
    const missingFromGrep = parityAndRadix.filter((n) => !grepNames.includes(n))
    expect(
      missingFromGrep,
      'Radix-using lv1 components with a parity story that the SKILL.md grep does NOT list. A bump in their `@radix-ui/*` dep would not trigger the targeted parity VRT in Step 3. Either add them to the parity grep in SKILL.md, or — if Slot-only — extend SLOT_ONLY_RADIX in this test file.',
    ).toEqual([])
  })
})
