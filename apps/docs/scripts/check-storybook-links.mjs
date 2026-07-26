#!/usr/bin/env node
// Drift gate for the site → Storybook links (Welcome.drift.test.ts の
// site 版 — #449 論点 (2))。/components/ の一覧とヘッダーが張る Storybook
// URL が、実在する story に対応することをビルド時に検証する。
//
// The link derivation (src/lib/storybook-links.mjs) assumes each lv1 ships a
// stories file titled `Components/lv1/{Name}` with autodocs enabled, and that
// {Name} is plain alphanumeric (so Storybook's sanitize() equals
// name.toLowerCase()). A rename that breaks any of those assumptions turns
// this script red instead of shipping a dead link.
//
// Run: `pnpm check:links` (wired into the CI docs job).
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookDocsUrl } from '../src/lib/storybook-links.mjs'

const lv1Dir = fileURLToPath(new URL('../../../src/components/lv1/', import.meta.url))

// Same filter as the /components/ page (and scripts/sync-readme-components.mjs).
const components = readdirSync(lv1Dir)
  .filter((name) => {
    const dir = join(lv1Dir, name)
    return (
      statSync(dir).isDirectory() &&
      existsSync(join(dir, `${name}.tsx`)) &&
      existsSync(join(dir, `${name}.css`))
    )
  })
  .sort()

const failures = []

for (const name of components) {
  // sanitize() === toLowerCase() only holds for plain-alphanumeric names.
  if (!/^[A-Za-z0-9]+$/.test(name)) {
    failures.push(`${name}: 名前が英数字以外を含む — storybookDocsUrl の slug 導出が壊れる`)
    continue
  }

  const storiesPath = join(lv1Dir, name, `${name}.stories.tsx`)
  if (!existsSync(storiesPath)) {
    failures.push(`${name}: ${name}.stories.tsx が無い — リンク先の story が存在しない`)
    continue
  }

  const src = readFileSync(storiesPath, 'utf8')
  const expectedTitle = `Components/lv1/${name}`
  if (!src.includes(`title: '${expectedTitle}'`) && !src.includes(`title: "${expectedTitle}"`)) {
    failures.push(`${name}: stories の title が '${expectedTitle}' でない — 導出 URL とズレる`)
  }
  if (!/tags:\s*\[[^\]]*['"]autodocs['"]/.test(src)) {
    failures.push(`${name}: autodocs タグが無い — --docs ページが生成されない`)
  }
}

if (failures.length > 0) {
  console.error(`check-storybook-links: ${failures.length} 件の drift\n`)
  for (const f of failures) console.error(`  ✗ ${f}`)
  process.exit(1)
}

console.log(
  `check-storybook-links: OK — ${components.length} components, e.g. ${storybookDocsUrl(components[0])}`,
)
