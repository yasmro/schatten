import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'
import { describe, expect, it } from 'vitest'

// The 6 placeholder templates in `templates/` are expanded by the
// add-lv1-component skill, but carry a `.template` extension so neither
// `tsc` nor Biome inspects them during normal CI. This test is the standing
// guard: it expands every template with a probe name and asserts the result
// is syntactically valid TypeScript — so a template that drifts into broken
// syntax is caught here, not the next time someone runs the skill.

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
  it('ships exactly the documented 6-file set', () => {
    expect([...templates].sort()).toEqual([
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
