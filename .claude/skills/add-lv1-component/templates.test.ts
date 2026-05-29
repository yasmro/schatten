import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'
import { describe, expect, it } from 'vitest'

// The 9 placeholder templates in `templates/` are expanded by the
// add-lv1-component skill, but carry a `.template` extension so neither
// `tsc` nor Biome inspects them during normal CI. This test is the standing
// guard: it expands every template with a probe name and asserts the result
// is syntactically valid TypeScript (or CSS — see the TS-skip branch below)
// so a template that drifts into broken syntax is caught here, not the
// next time someone runs the skill.
//
// The 9 split into a core-7 set (always generated, every classification)
// and a parity-2 set (`*.parity.*`, generated only for 区分 A / B
// components — 区分 C / D are PARITY_EXEMPT). See
// `.claude/rules/vrt-spec-guideline.md` §"Parity stories".

const here = dirname(fileURLToPath(import.meta.url))
const templatesDir = join(here, 'templates')

const PLACEHOLDERS: Record<string, string> = {
  __ComponentName__: 'TemplateProbe',
  __componentName__: 'templateProbe',
  '__component-name__': 'template-probe',
}

function expand(source: string): string {
  let out = source
  for (const [token, value] of Object.entries(PLACEHOLDERS)) {
    out = out.split(token).join(value)
  }
  return out
}

const templates = readdirSync(templatesDir).filter((file) => file.endsWith('.template'))

describe('add-lv1-component templates', () => {
  it('ships exactly the documented 9-file set', () => {
    expect([...templates].sort()).toEqual([
      'Component.css.template',
      'Component.parity.stories.tsx.template',
      'Component.parity.vrt.spec.ts.template',
      'Component.stories.tsx.template',
      'Component.test.tsx.template',
      'Component.tsx.template',
      'Component.vrt.spec.ts.template',
      'index.ts.template',
      'variants.ts.template',
    ])
  })

  // The 9 templates split by *when* the skill emits them: the core-7 are
  // generated for every new lv1 regardless of classification; the parity-2
  // are emitted only for 区分 A / B components (区分 C / D are PARITY_EXEMPT
  // in scripts/audit-coverage.mjs and ship no parity files).
  it('classifies templates into the core-7 and parity-2 sets', () => {
    const parity = templates.filter((file) => file.includes('.parity.')).sort()
    const core = templates.filter((file) => !file.includes('.parity.')).sort()

    expect(parity).toEqual([
      'Component.parity.stories.tsx.template',
      'Component.parity.vrt.spec.ts.template',
    ])
    expect(core).toEqual([
      'Component.css.template',
      'Component.stories.tsx.template',
      'Component.test.tsx.template',
      'Component.tsx.template',
      'Component.vrt.spec.ts.template',
      'index.ts.template',
      'variants.ts.template',
    ])
  })

  for (const file of templates) {
    describe(file, () => {
      const expanded = expand(readFileSync(join(templatesDir, file), 'utf8'))

      it('leaves no un-substituted placeholder token', () => {
        for (const token of Object.keys(PLACEHOLDERS)) {
          expect(expanded).not.toContain(token)
        }
      })

      // The CSS template is not TypeScript and cannot be transpiled with
      // `ts.transpileModule`. The structural guard for CSS is the
      // "no un-substituted placeholder" test above plus the build-time
      // check in `scripts/build-component-css.mjs` (which fails the build
      // if any lv1 dir is missing its `.css` file post-#291).
      if (file.endsWith('.css.template')) return

      it('expands to syntactically valid TypeScript', () => {
        const isTsx = file.endsWith('.tsx.template')
        const result = ts.transpileModule(expanded, {
          reportDiagnostics: true,
          fileName: isTsx ? 'probe.tsx' : 'probe.ts',
          compilerOptions: {
            jsx: ts.JsxEmit.ReactJSX,
            module: ts.ModuleKind.ESNext,
            target: ts.ScriptTarget.ESNext,
          },
        })
        const syntaxErrors = (result.diagnostics ?? []).map((diagnostic) =>
          ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
        )
        expect(syntaxErrors).toEqual([])
      })
    })
  }
})
