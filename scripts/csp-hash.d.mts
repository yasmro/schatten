// TypeScript declarations for scripts/csp-hash.mjs. The .mjs carries the
// implementation; the test imports `computeCspHash` from a .ts module, so an
// explicit .d.mts gives TypeScript a typed view of the export without
// converting the script to .ts.

export function computeCspHash(script: string): string
