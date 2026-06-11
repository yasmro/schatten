import { readdirSync, readFileSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

/*
 * Re-introduction guard for the removed transition vocabulary (#350).
 *
 * #145 deprecated `--transition-fast/normal/slow` (spacing.css) and
 * `tokens.transition` / `TransitionToken` (tokens.ts) in favour of the
 * `--st-duration-*` scale and its `--motion-*` semantic aliases; #350
 * removed them. A JSDoc `@deprecated` note alone cannot stop a new
 * reference from slipping in — CSS has no deprecation surface at all, and
 * a removed custom property fails *silently* (`var(--transition-fast)`
 * resolves to nothing, no error). This test scans the real source tree
 * for any functional reference so the timing vocabulary stays singular.
 *
 * Patterns deliberately target *functional* references (declaration,
 * `var()` use, quoted property name, TS access) — historical prose
 * mentions in comments and docs (e.g. the Motion page's "Removed"
 * tombstone, animation.css's vocabulary note) stay legal. Docs prose
 * that must name the removed API verbatim is exempted per line via
 * `<code>` markup detection (see isProseMention) — no per-file
 * allowlist to keep in sync.
 *
 * Same regex-over-source approach as Motion.drift.test.ts /
 * Elevation.drift.test.ts.
 */

const SRC_ROOT = resolve(process.cwd(), 'src')
const SELF = resolve(__dirname, 'no-transition-tokens.test.ts')

const SCANNED_FILE = /\.(?:ts|tsx|css)$/
const SKIPPED_DIRS = new Set(['__snapshots__'])

const PATTERNS = [
  // The whole `--transition-` namespace is retired, not just the three
  // removed names — component-scoped variables use the `--st-*` /
  // `--schatten-*` prefixes, so any new `--transition-*` declaration is
  // vocabulary re-pluralisation by definition.
  { name: 'CSS declaration', re: /--transition-[\w-]+\s*:/ },
  { name: 'var() reference', re: /var\(\s*--transition-/ },
  { name: 'quoted property name', re: /['"`]--transition-(?:fast|normal|slow)/ },
  { name: 'tokens.transition access', re: /\btokens\.transition\b/ },
  { name: 'TransitionToken type', re: /\bTransitionToken\b/ },
] as const

type PatternName = (typeof PATTERNS)[number]['name']

/**
 * Docs prose may name the removed API verbatim (the Motion page's
 * "Removed" tombstone). A mention only counts as prose when the line
 * wraps it in `<code>` markup — functional code never does, so the
 * exemption cannot hide a real reference. Deliberately line-scoped
 * rather than per-file: functional lines in docs files stay guarded,
 * and future docs pages need no allowlist edit.
 */
function isProseMention(line: string): boolean {
  return line.includes('<code>')
}

function* walk(dir: string): Generator<string> {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (!SKIPPED_DIRS.has(entry.name)) yield* walk(path)
    } else if (SCANNED_FILE.test(entry.name)) {
      yield path
    }
  }
}

function findViolations(): string[] {
  const violations: string[] = []
  for (const file of walk(SRC_ROOT)) {
    if (file === SELF) continue
    const rel = relative(process.cwd(), file)
    const lines = readFileSync(file, 'utf8').split('\n')
    for (const { name, re } of PATTERNS) {
      lines.forEach((line, index) => {
        if (re.test(line) && !isProseMention(line)) {
          violations.push(`${rel}:${index + 1} — ${name}`)
        }
      })
    }
  }
  return violations
}

describe('removed --transition-* vocabulary (#350)', () => {
  it('has no functional reference anywhere under src/', () => {
    expect(findViolations()).toEqual([])
  })
})

describe('guard self-check — each pattern detects a synthetic violation', () => {
  // A regex typo would turn the scan above into an always-green no-op;
  // pin each pattern against an inline positive sample (same philosophy
  // as boundary-no-react.test.ts pinning that the lint rule fires).
  const SAMPLES: ReadonlyArray<{ pattern: PatternName; sample: string }> = [
    { pattern: 'CSS declaration', sample: '  --transition-fast: 150ms ease;' },
    // A *new* name in the retired namespace must be caught too — the
    // declaration ban covers the whole `--transition-` prefix.
    { pattern: 'CSS declaration', sample: '  --transition-medium: 250ms;' },
    { pattern: 'var() reference', sample: 'transition: opacity var(--transition-fast);' },
    { pattern: 'quoted property name', sample: "el.style.setProperty('--transition-slow', v)" },
    { pattern: 'tokens.transition access', sample: 'const duration = tokens.transition.normal' },
    { pattern: 'TransitionToken type', sample: 'declare function f(t: TransitionToken): void' },
  ]

  for (const { pattern, sample } of SAMPLES) {
    it(`detects: ${pattern} — ${sample.trim()}`, () => {
      const found = PATTERNS.find((p) => p.name === pattern)
      if (!found) throw new Error(`pattern not registered: ${pattern}`)
      expect(found.re.test(sample)).toBe(true)
    })
  }

  it('covers every registered pattern with at least one sample', () => {
    expect([...new Set(SAMPLES.map((s) => s.pattern))].sort()).toEqual(
      PATTERNS.map((p) => p.name).sort(),
    )
  })
})

describe('prose exemption — <code>-wrapped mentions stay legal', () => {
  it('exempts a docs line that wraps the mention in <code>', () => {
    expect(isProseMention('<code>tokens.transition.*</code> / <code>TransitionToken</code>')).toBe(
      true,
    )
  })

  it('does not exempt a functional line', () => {
    expect(isProseMention('const duration = tokens.transition.normal')).toBe(false)
  })
})
