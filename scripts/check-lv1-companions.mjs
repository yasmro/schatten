#!/usr/bin/env node
// PostToolUse hook: when Claude Code edits src/components/lv1/{X}/{X}.tsx,
// verify that the sibling unit test (`{X}.test.tsx`) and VRT spec
// (`{X}.vrt.spec.ts`) exist. Emits a non-blocking system-reminder so that
// "test/vrt-less" lv1 additions get caught at edit time.
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

  const missing = []
  if (!existsSync(testFile)) missing.push(`${componentName}.test.tsx`)
  if (!existsSync(vrtFile)) missing.push(`${componentName}.vrt.spec.ts`)
  if (missing.length === 0) return

  const lines = [
    `[lv1 companion check] ${componentName} is missing companion file(s): ${missing.join(', ')}.`,
    `Every lv1 component must ship with a sibling unit test and VRT spec in the same directory.`,
    `See .claude/rules/testing-guideline.md (Required test cases) and .claude/rules/vrt-spec-guideline.md.`,
    `Create the missing file(s) in src/components/lv1/${componentName}/ before completing this change.`,
  ]
  emit(lines.join('\n'))
}

main()
