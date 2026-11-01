#!/usr/bin/env node
// Stop hook: verify src/components/lv1/index.ts re-exports every lv1
// component directory, and src/components/lv2/index.ts every lv2 one.
// Catches the "added a component but forgot to wire up the barrel"
// failure mode at session end. (lv2 coverage: lv2-composition-guideline
// §6.2 row 4. The file keeps its lv1 name — it is registered by path in
// .claude/settings.json.)
//
// Heuristic:
//  - List subdirectories of src/components/lv1/.
//  - Parse src/components/lv1/index.ts and collect every `from './<name>'`.
//  - Diff the two sets and report directories that are missing from the
//    barrel (and exports that don't have a matching directory).
//
// Exits 0 always — this hook reports, it does not block. When a problem
// is found, the message is emitted via JSON
// (hookSpecificOutput.additionalContext) so Claude sees it.

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'

const LAYERS = [
  { dir: 'src/components/lv1', index: 'src/components/lv1/index.ts' },
  { dir: 'src/components/lv2', index: 'src/components/lv2/index.ts' },
]
const FROM_RE = /from\s+['"]\.\/([^'"/.]+)['"]/g

function listComponentDirs(lv1Dir) {
  if (!existsSync(lv1Dir)) return []
  return readdirSync(lv1Dir)
    .filter((entry) => {
      const full = path.join(lv1Dir, entry)
      try {
        return statSync(full).isDirectory()
      } catch {
        return false
      }
    })
    .sort()
}

function parseExportedNames(indexPath) {
  if (!existsSync(indexPath)) return new Set()
  const source = readFileSync(indexPath, 'utf8')
  const names = new Set()
  FROM_RE.lastIndex = 0
  let m
  while ((m = FROM_RE.exec(source)) !== null) names.add(m[1])
  return names
}

function emit(additionalContext) {
  const response = {
    hookSpecificOutput: {
      hookEventName: 'Stop',
      additionalContext,
    },
  }
  process.stdout.write(JSON.stringify(response))
}

/**
 * Diff one layer's component directories against its barrel. Returns the
 * report lines for that layer, or `[]` when they agree (or the layer has no
 * component directory — lv2 may hold only its barrel).
 */
function checkLayer(projectDir, { dir, index }) {
  const dirs = listComponentDirs(path.join(projectDir, dir))
  if (dirs.length === 0) return []

  const exported = parseExportedNames(path.join(projectDir, index))

  const missingFromIndex = dirs.filter((d) => !exported.has(d))
  const orphanedExports = [...exported].filter((name) => !dirs.includes(name)).sort()

  if (missingFromIndex.length === 0 && orphanedExports.length === 0) return []

  const lines = [`[export integrity] mismatch between ${dir}/ and ${index}:`]
  if (missingFromIndex.length > 0) {
    lines.push(
      `- Directories without a corresponding export in index.ts: ${missingFromIndex.join(', ')}`,
    )
  }
  if (orphanedExports.length > 0) {
    lines.push(
      `- Exports in index.ts without a matching component directory: ${orphanedExports.join(', ')}`,
    )
  }
  lines.push(`Update ${index} so every component dir is re-exported exactly once.`)
  return lines
}

function main() {
  const projectDir = process.env.CLAUDE_PROJECT_DIR ?? process.cwd()
  const reports = LAYERS.map((layer) => checkLayer(projectDir, layer)).filter((l) => l.length > 0)
  if (reports.length === 0) return
  emit(reports.map((lines) => lines.join('\n')).join('\n\n'))
}

main()
