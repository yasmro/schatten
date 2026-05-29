// @vitest-environment node
import { renderToString } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { THEME_INIT_SCRIPT } from '../../theme-init'
import { ThemeInitScript } from './ThemeInitScript'

// The component exists to be rendered in `<head>` during SSR, where
// `window` / `document` are undefined. It must serialize to the snippet
// without touching any DOM global.

describe('ThemeInitScript (SSR / node env)', () => {
  it('renders to a string without touching DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(() => renderToString(<ThemeInitScript />)).not.toThrow()
  })

  it('serializes the default snippet inside a <script>', () => {
    const html = renderToString(<ThemeInitScript />)
    expect(html).toContain('<script')
    expect(html).toContain(THEME_INIT_SCRIPT)
  })

  it('forwards a nonce attribute', () => {
    const html = renderToString(<ThemeInitScript nonce="abc123" />)
    expect(html).toContain('nonce="abc123"')
  })
})
