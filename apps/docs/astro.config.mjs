import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

// Two delivery layers, dogfooded on one site (#449 candidate A):
// every page is static `.st-*` + dist CSS by default, and React mounts ONLY
// as islands where a live component demo needs it (the /components page).
// The islands consume `@yasmro/schatten` through the exports map — the same
// path a real React consumer takes.
//
// DOCS_BASE: subpath the site is served under. Unset locally (= '/');
// the PR-preview workflow sets /schatten/pr/<n>/site/, and the future
// tag-synced production deploy will set its own. Internal links resolve
// through localePath() (src/i18n/ui.ts), which reads import.meta.env.BASE_URL.
export default defineConfig({
  base: process.env.DOCS_BASE || '/',
  integrations: [react()],
})
