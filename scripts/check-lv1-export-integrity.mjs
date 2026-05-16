#!/usr/bin/env node
// Stop hook: verify src/components/lv1/index.ts re-exports every lv1
// component directory. Catches the "added a component but forgot to wire
// up the barrel" failure mode at session end.
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

const LV1_DIR_REL = 'src/components/lv1'
const INDEX_FILE_REL = 'src/components/lv1/index.ts'
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

function main() {
  const projectDir = process.env.CLAUDE_PROJECT_DIR ?? process.cwd()
  const lv1Dir = path.join(projectDir, LV1_DIR_REL)
  const indexPath = path.join(projectDir, INDEX_FILE_REL)

  const dirs = listComponentDirs(lv1Dir)
  if (dirs.length === 0) return

  const exported = parseExportedNames(indexPath)

  const missingFromIndex = dirs.filter((d) => !exported.has(d))
  const orphanedExports = [...exported].filter((name) => !dirs.includes(name)).sort()

  if (missingFromIndex.length === 0 && orphanedExports.length === 0) return

  const lines = [`[lv1 export integrity] mismatch between ${LV1_DIR_REL}/ and ${INDEX_FILE_REL}:`]
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
  lines.push(
    'Update src/components/lv1/index.ts so every lv1 component dir is re-exported exactly once.',
  )
  emit(lines.join('\n'))
}

main()
