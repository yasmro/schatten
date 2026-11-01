/// <reference types="vite/client" />
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as ts from 'typescript'
import { describe, expect, it } from 'vitest'
import pkg from '../package.json'

/*
 * Every package the shipped source imports must be a dependency or a peer.
 *
 * tsup externalizes `dependencies` and `peerDependencies` and inlines
 * everything else. A package that sits in `devDependencies` but is imported
 * by shipped code therefore does not fail the build — it is silently bundled
 * into dist. That is how `@radix-ui/react-dialog` shipped for every release
 * up to v1.1.0: dist carried its own copy of Radix's DismissableLayer, so in
 * a consumer app Dialog and Select tracked layers in two separate module
 * instances, and pressing ESC in a Select inside a Dialog closed both.
 *
 * Nothing else sees this bug class. Storybook and the unit tests run from
 * source, where pnpm resolves one copy, and the type check passes either
 * way. Type-only imports are checked too: they are erased from the JS but
 * stay in the emitted `.d.ts`, where a consumer has to resolve them.
 *
 * Sources are read as text and walked through the TypeScript AST, the same
 * approach as `components/__tests__/no-tailwind-in-component-jsx.test.ts`.
 */

const here = dirname(fileURLToPath(import.meta.url))

const shippedPaths = Object.keys(import.meta.glob(['./**/*.ts', './**/*.tsx'])).filter(
  (path) =>
    !/\.(test|stories|spec)\.tsx?$/.test(path) &&
    !path.endsWith('.d.ts') &&
    !/\/(__tests__|__fixtures__|__generated__|docs)\//.test(path),
)

const allowed = new Set([
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
])

/** `@scope/name/sub` → `@scope/name`, `name/sub` → `name`. */
function packageName(specifier: string): string {
  const parts = specifier.split('/')
  return specifier.startsWith('@') ? parts.slice(0, 2).join('/') : parts[0]
}

function bareSpecifiers(source: string): string[] {
  const file = ts.createSourceFile(
    'source',
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  )
  const specifiers: string[] = []
  const visit = (node: ts.Node) => {
    if (
      (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
      node.moduleSpecifier &&
      ts.isStringLiteral(node.moduleSpecifier)
    ) {
      specifiers.push(node.moduleSpecifier.text)
    } else if (
      ts.isCallExpression(node) &&
      node.expression.kind === ts.SyntaxKind.ImportKeyword &&
      node.arguments[0] &&
      ts.isStringLiteral(node.arguments[0])
    ) {
      specifiers.push(node.arguments[0].text)
    }
    ts.forEachChild(node, visit)
  }
  visit(file)
  return specifiers.filter((s) => !s.startsWith('.') && !s.startsWith('/'))
}

describe('runtime dependencies', () => {
  it('finds the shipped sources', () => {
    expect(shippedPaths).toContain('./components/lv1/Dialog/Dialog.tsx')
    expect(shippedPaths.some((path) => path.includes('.test.'))).toBe(false)
  })

  it.each(shippedPaths)('%s imports only dependencies and peers', (path) => {
    const source = readFileSync(resolve(here, path), 'utf8')
    const missing = bareSpecifiers(source)
      .map(packageName)
      .filter((name) => !allowed.has(name))
    expect(missing).toEqual([])
  })
})
