import { describe, expect, it } from 'vitest'
import { buildThemeInitScript, THEME_INIT_SCRIPT } from '../../src/theme-init'
import { computeCspHash } from '../csp-hash.mjs'

// Pins the CLI's hashing logic against the published CSP source expression.
// The byte-level pin lives in src/theme-init.test.ts; this test guards the
// other half of the contract — that `pnpm schatten:csp-hash` emits the SAME
// string a consumer pastes into `script-src`. It imports the snippet from
// `src/` (not from `dist/`) so it runs without a build; the CLI's dist-reading
// glue is trivial and exercised at release time by `pnpm build` + a manual run.

describe('computeCspHash', () => {
  it('reproduces the published default-key hash', () => {
    expect(computeCspHash(THEME_INIT_SCRIPT)).toBe(
      'sha256-YKmfjVUKTYOL4QdVTkV/AUzMrHhhfPw//OthidDmEEE=',
    )
  })

  it('matches the default build of buildThemeInitScript', () => {
    expect(computeCspHash(buildThemeInitScript('schatten-theme'))).toBe(
      computeCspHash(THEME_INIT_SCRIPT),
    )
  })

  it('produces a different hash for a custom storageKey', () => {
    // The availability trap documented in the README: a custom key changes the
    // bytes, so the default-key pin no longer matches and CSP would block the
    // script. The hashes must differ for that warning to be real.
    expect(computeCspHash(buildThemeInitScript('my-app-theme'))).not.toBe(
      computeCspHash(THEME_INIT_SCRIPT),
    )
  })

  it('emits the sha256- prefix CSP expects', () => {
    expect(computeCspHash('anything')).toMatch(/^sha256-[A-Za-z0-9+/]+=*$/)
  })
})
