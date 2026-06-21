#!/usr/bin/env node
// PostToolUse hook: when Claude Code edits src/components/lv1/{X}/{X}.tsx,
// verify that the sibling unit test (`{X}.test.tsx`), VRT spec
// (`{X}.vrt.spec.ts`), and class-API CSS file (`{X}.css`) exist.
// Emits a non-blocking system-reminder so that "test-less / vrt-less /
// css-less" lv1 additions get caught at edit time.
//
// The `.css` companion is required because post-#154 every lv1 ships its
// `.st-*` class API as a per-component `.css` file under
// `src/components/lv1/{X}/{X}.css`, and the `dist/css/<slug>.css`
// per-component subpath (#291) is built from those files. A new lv1 added
// without a `.css` file silently gets no per-component CSS subpath — this
// hook surfaces that gap immediately.
//
// Contract with Claude Code:
//  - Reads a JSON payload from stdin containing { tool_name, tool_input, ... }.
//  - Exits 0 always (this hook never blocks the edit).
//  - When a problem is found, prints a JSON response with
//    hookSpecificOutput.additionalContext so the message reaches Claude.

import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

const LV1_TSX_RE = /(?:^|\/)src\/components\/lv1\/([^/]+)\/\1\.tsx$/

function readStdin() {
  try {
    return readFileSync(0, 'utf8')
  } catch {
    return ''
  }
}

function extractFilePath(payload) {
  if (!payload) return null
  let parsed
  try {
    parsed = JSON.parse(payload)
  } catch {
    return null
  }
  const input = parsed?.tool_input
  if (!input) return null
  // Edit / Write: { file_path }
  if (typeof input.file_path === 'string') return input.file_path
  // MultiEdit: { file_path } too (single path)
  return null
}

function emit(additionalContext) {
  const response = {
    hookSpecificOutput: {
      hookEventName: 'PostToolUse',
      additionalContext,
    },
  }
  process.stdout.write(JSON.stringify(response))
}

function main() {
  const raw = readStdin()
  const filePath = extractFilePath(raw)
  if (!filePath) return

  const projectDir = process.env.CLAUDE_PROJECT_DIR ?? process.cwd()
  const relative = path.relative(projectDir, path.resolve(projectDir, filePath))
  if (relative.startsWith('..')) return

  const match = relative.match(LV1_TSX_RE)
  if (!match) return

  const componentName = match[1]
  const dir = path.join(projectDir, 'src/components/lv1', componentName)
  const testFile = path.join(dir, `${componentName}.test.tsx`)
  const vrtFile = path.join(dir, `${componentName}.vrt.spec.ts`)
  const cssFile = path.join(dir, `${componentName}.css`)

  const missing = []
  if (!existsSync(testFile)) missing.push(`${componentName}.test.tsx`)
  if (!existsSync(vrtFile)) missing.push(`${componentName}.vrt.spec.ts`)
  if (!existsSync(cssFile)) missing.push(`${componentName}.css`)

  // CSS API fixture: src/docs/CSSApiDist.vrt.spec.ts auto-discovers every lv1
  // with a {X}.tsx + {X}.css and requires a `<section data-component="<slug>">`
  // in the shared vanilla-HTML fixture — without it the dist-CSS VRT throws.
  // The section must live in BOTH the .html.ts SSOT and the .tsx parity
  // companion (they drift silently otherwise). Check only once the `.css`
  // exists (the discovery condition), so a WIP scaffold without CSS yet isn't
  // nagged prematurely. PR-time blocking counterpart: `pnpm audit:coverage --check`.
  const slug = componentName.toLowerCase()
  const fixtureFiles = [
    'src/docs/__fixtures__/cssApiSamples.html.ts',
    'src/docs/__fixtures__/cssApiSamples.tsx',
  ]
  const missingFixtures = []
  if (existsSync(cssFile)) {
    for (const rel of fixtureFiles) {
      const file = path.join(projectDir, rel)
      if (!existsSync(file)) continue
      try {
        if (!readFileSync(file, 'utf8').includes(`data-component="${slug}"`)) {
          missingFixtures.push(rel)
        }
      } catch {
        // unreadable — skip
      }
    }
  }
  const fixtureMissing = missingFixtures.length > 0

  if (missing.length === 0 && !fixtureMissing) return

  const lines = []
  if (missing.length > 0) {
    lines.push(
      `[lv1 companion check] ${componentName} is missing companion file(s): ${missing.join(', ')}.`,
      `Every lv1 component must ship with a sibling unit test, VRT spec, and class-API CSS file.`,
      `See .claude/rules/testing-guideline.md (Required test cases), .claude/rules/vrt-spec-guideline.md,`,
      `and .claude/rules/css-api.md (the .css file is the SSOT for the public .st-* class API and feeds`,
      `the per-component CSS subpath at @yasmro/schatten/css/${slug}).`,
      `Create the missing file(s) in src/components/lv1/${componentName}/ before completing this change.`,
    )
  }
  if (fixtureMissing) {
    if (lines.length > 0) lines.push('')
    lines.push(
      `[lv1 companion check] ${componentName} is missing its CSS API fixture <section data-component="${slug}"> in: ${missingFixtures.join(', ')}.`,
      `CSSApiDist.vrt.spec.ts auto-discovers every lv1 (with {X}.tsx + {X}.css) and throws without the`,
      `.html.ts section; the .tsx parity companion must mirror it (区分 C/D render an "omitted" placeholder).`,
      `Mirror an existing section (card / skeleton are the simplest).`,
    )
  }
  emit(lines.join('\n'))
}

main()
