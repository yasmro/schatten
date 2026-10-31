import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'
import { describe, expect, it } from 'vitest'

// The templates carry a `.template` extension, so neither `tsc` nor Biome reads
// them. This test expands each one and pins its syntax plus the lv2 rules a
// template can break on its own. Conformance to the rest of the rule docs is not
// checked here.

const here = dirname(fileURLToPath(import.meta.url))
const templatesDir = join(here, 'templates')

// A multi-word probe on purpose: with one word, kebab and the slug are the same.
const PLACEHOLDERS: Record<string, string> = {
  __ComponentName__: 'SearchField',
  __componentName__: 'searchField',
  '__component-name__': 'search-field',
  __componentname__: 'searchfield',
}

function expand(source: string): string {
  let out = source
  for (const [token, value] of Object.entries(PLACEHOLDERS)) {
    out = out.split(token).join(value)
  }
  return out
}

const read = (file: string) => expand(readFileSync(join(templatesDir, file), 'utf8'))

const templates = readdirSync(templatesDir).filter((file) => file.endsWith('.template'))

describe('add-lv2-component templates', () => {
  it('ships the always-generated set and the three conditional files', () => {
    expect([...templates].sort()).toEqual([
      'Component.css.template',
      'Component.interaction.vrt.spec.ts.template',
      'Component.stories.tsx.template',
      'Component.test.tsx.template',
      'Component.tsx.template',
      'Component.vrt.spec.ts.template',
      'index.ts.template',
      'variants.ts.template',
    ])
  })

  it('composes an lv1 and provides no context', () => {
    const component = read('Component.tsx.template')
    expect(component).toMatch(/from '\.\.\/\.\.\/lv1\//)
    expect(component).not.toContain('createContext')
  })

  it('spreads the rest props onto the root', () => {
    expect(read('Component.tsx.template')).toContain('{...props}')
  })

  it('titles the story under Components/lv2', () => {
    expect(read('Component.stories.tsx.template')).toContain(
      "title: 'Components/lv2/SearchField'",
    )
  })

  it.each([
    'Component.vrt.spec.ts.template',
    'Component.interaction.vrt.spec.ts.template',
  ])('%s uses the lowercased slug in the story id', (file) => {
    expect(read(file)).toContain("STORY_ID_PREFIX = 'components-lv2-searchfield'")
  })

  it('keeps the interaction spec visible to pnpm test:vrt', () => {
    const spec = read('Component.interaction.vrt.spec.ts.template')
    expect(spec).toMatch(/\btest\(/)
    expect(spec).not.toContain('toHaveScreenshot')
    expect(spec.match(/test\(\s*'[^']*'/g)?.join('')).not.toContain('a11y')
  })

  it('publishes the block and modifiers only', () => {
    const css = read('Component.css.template').replace(/\/\*[\s\S]*?\*\//g, '')
    expect(css).toContain('.st-search-field')
    expect(css).not.toMatch(/\.st-[a-z-]+__/)
  })

  it('names the kebab block and the slug subpath', () => {
    const css = read('Component.css.template')
    expect(css).toContain('@yasmro/schatten/css/searchfield')
    expect(read('variants.ts.template')).toContain("cva('st-search-field'")
  })

  for (const file of templates) {
    describe(file, () => {
      const expanded = read(file)

      it('leaves no un-substituted placeholder token', () => {
        for (const token of Object.keys(PLACEHOLDERS)) {
          expect(expanded).not.toContain(token)
        }
      })

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
