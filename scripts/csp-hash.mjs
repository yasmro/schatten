// The CSP `script-src` source expression (`sha256-<base64>`) for a snippet
// string. Extracted into its own module — with no dynamic `import()` — so the
// unit test (scripts/__tests__/print-csp-hash.test.ts) can pin the hashing
// logic against the published value without Vite's import-analysis tripping
// over the dist-loading dynamic import in print-csp-hash.mjs.

import { createHash } from 'node:crypto'

export function computeCspHash(script) {
  return `sha256-${createHash('sha256').update(script, 'utf8').digest('base64')}`
}
