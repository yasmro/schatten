import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

// Two delivery layers, dogfooded on one site (#449 candidate A):
// every page is static `.st-*` + dist CSS by default, and React mounts ONLY
// as islands where a live component demo needs it (the /components page).
// The islands consume `@yasmro/schatten` through the exports map — the same
// path a real React consumer takes.
export default defineConfig({
  integrations: [react()],
})
