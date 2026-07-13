#!/usr/bin/env node
// Structural sanity check for the GitHub issue-form + PR templates under
// `.github/`. GitHub validates issue forms only when you open the new-issue
// page, so a malformed template (a deleted required key, a renamed file) ships
// silently and only breaks a contributor's first interaction. This gate makes
// that a lint-time failure instead.
//
// SCOPE — deliberately NOT a full YAML validator. Pulling in a YAML parser
// (`yaml` / `js-yaml`) as a devDependency just to lint three rarely-changing
// files is disproportionate, so this does a line-based structural check of the
// realistic regression modes:
//   1. each expected file exists;
//   2. each issue *form* declares the top-level keys GitHub requires
//      (`name` / `description` / `body`);
//   3. `config.yml` declares `blank_issues_enabled` or `contact_links`.
// It does NOT catch deep indentation errors inside `body:` — GitHub's own
// render-time validation remains the backstop for those. If the templates ever
// grow complex enough to warrant real YAML parsing, add the dep then.
//
// Run as `pnpm check:issue-templates`. Wired into CI's `lint` job.

import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const REPO_ROOT = process.cwd()
const ISSUE_DIR = '.github/ISSUE_TEMPLATE'
const PR_TEMPLATE = '.github/PULL_REQUEST_TEMPLATE.md'

// Expected files and the top-level keys each must declare. `config.yml` is the
// special issue-template config, not a form, so it has its own required set.
const FORM_REQUIRED = ['name', 'description', 'body']
const CONFIG_ANY = ['blank_issues_enabled', 'contact_links']

const forms = ['bug_report.yml', 'feature_request.yml']

/** @type {string[]} */
const errors = []

/** A top-level YAML key is `^key:` at column 0 (no leading whitespace). */
function hasTopLevelKey(source, key) {
  return new RegExp(`^${key}:`, 'm').test(source)
}

function checkFile(relPath) {
  const abs = resolve(REPO_ROOT, relPath)
  if (!existsSync(abs)) {
    errors.push(`missing file: ${relPath}`)
    return null
  }
  return readFileSync(abs, 'utf8')
}

// 1. Issue forms.
for (const form of forms) {
  const relPath = `${ISSUE_DIR}/${form}`
  const src = checkFile(relPath)
  if (src == null) continue
  for (const key of FORM_REQUIRED) {
    if (!hasTopLevelKey(src, key)) {
      errors.push(`${relPath}: missing required top-level key \`${key}:\``)
    }
  }
}

// 2. Issue-template config.
{
  const relPath = `${ISSUE_DIR}/config.yml`
  const src = checkFile(relPath)
  if (src != null && !CONFIG_ANY.some((k) => hasTopLevelKey(src, k))) {
    errors.push(`${relPath}: expected one of ${CONFIG_ANY.map((k) => `\`${k}:\``).join(' / ')}`)
  }
}

// 3. PR template.
checkFile(PR_TEMPLATE)

if (errors.length > 0) {
  console.error(`check-issue-templates: ${errors.length} problem(s) found\n`)
  for (const e of errors) console.error(`  ${e}`)
  console.error('\nSee .github/ISSUE_TEMPLATE/ and CONTRIBUTING.md § Issue & pull-request templates.')
  process.exit(1)
}

console.log(`check-issue-templates: OK — ${forms.length} form(s) + config + PR template`)
