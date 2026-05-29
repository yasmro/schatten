import { createHash } from 'node:crypto'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { buildThemeInitScript, THEME_INIT_SCRIPT } from './theme-init'

// The exact byte sequence of the default snippet. This is the public runtime
// contract (#262 will publish a SHA-256 of these bytes), so pin it explicitly
// rather than re-deriving it from the builder — a change here must be a
// conscious edit, not an accident.
const DEFAULT_SNIPPET = `(function(){try{var s=localStorage.getItem("schatten-theme");var t=s?JSON.parse(s):{};var m=t.mode||'system';var d=m==='dark'||(m==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');if(t.special)document.documentElement.setAttribute('data-theme',t.special)}catch(e){}})();`

beforeEach(() => {
  // The snippet reaches for matchMedia on the `system` path; jsdom doesn't
  // ship it. Stub it so a `new Function(...)` eval doesn't throw.
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string) => ({ matches: false, media: query }),
  })
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('buildThemeInitScript', () => {
  it('embeds the default key as a JSON string literal', () => {
    expect(buildThemeInitScript('schatten-theme')).toBe(DEFAULT_SNIPPET)
  })

  it('embeds a custom key', () => {
    expect(buildThemeInitScript('my-app-theme')).toContain('localStorage.getItem("my-app-theme")')
  })

  it('escapes `<` so the snippet cannot break out of a <script> element', () => {
    const malicious = '</script><script>globalThis.__pwned=1//'
    const script = buildThemeInitScript(malicious)
    expect(script).not.toContain('</script>')
    expect(script).toContain('\\u003c')
  })

  it('escapes line/paragraph separators that JSON.stringify leaves raw', () => {
    // U+2028 / U+2029 are line terminators in pre-ES2019 parsers; an
    // un-escaped one can break the inline <script> in an older engine.
    const key = 'a\u2028b\u2029c'
    const script = buildThemeInitScript(key)
    expect(script).not.toContain('\u2028')
    expect(script).not.toContain('\u2029')
    expect(script).toContain('\\u2028')
    expect(script).toContain('\\u2029')
  })

  it('preserves the key value at runtime despite the escape', () => {
    // `<` / U+2028 / U+2029 decode back to the original character when the
    // JS runs, so the key the snippet actually reads is the original string
    // — only its raw bytes change.
    const key = 'pre<mid\u2028end\u2029tail'
    const seen: (string | null)[] = []
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation((k) => {
      seen.push(k)
      return null
    })
    new Function(buildThemeInitScript(key))()
    expect(seen).toEqual([key])
  })
})

describe('THEME_INIT_SCRIPT', () => {
  it('is the default-key build', () => {
    expect(THEME_INIT_SCRIPT).toBe(DEFAULT_SNIPPET)
    expect(THEME_INIT_SCRIPT).toBe(buildThemeInitScript('schatten-theme'))
  })

  // Pre-stages #262: the CSP-hash publication. A consumer who can't use a
  // nonce pins the snippet with `script-src 'sha256-…'`; that directive is
  // computed from these exact bytes. Pinning the digest here makes any byte
  // drift fail loudly with the new hash a consumer would have to re-publish,
  // rather than silently invalidating their CSP. When #262 publishes the
  // hash for consumers, it MUST match these values.
  it('hashes to the published SHA-256 (CSP pin)', () => {
    const hex = createHash('sha256').update(THEME_INIT_SCRIPT, 'utf8').digest('hex')
    const csp = `sha256-${createHash('sha256').update(THEME_INIT_SCRIPT, 'utf8').digest('base64')}`
    expect(hex).toBe('60a99f8d550a4d838be107554e457f014cccac78617cfc3ffceb6189d0e61041')
    expect(csp).toBe('sha256-YKmfjVUKTYOL4QdVTkV/AUzMrHhhfPw//OthidDmEEE=')
  })
})
