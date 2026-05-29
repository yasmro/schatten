import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { buildThemeInitScript, THEME_INIT_SCRIPT } from './init-script'

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

  it('preserves the key value at runtime despite the escape', () => {
    // `<` decodes back to `<` when the JS runs, so the key the snippet
    // actually reads is the original string — only its raw HTML bytes change.
    const key = 'pre<post'
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
})
