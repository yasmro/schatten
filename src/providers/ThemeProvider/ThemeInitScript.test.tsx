import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { buildThemeInitScript, THEME_INIT_SCRIPT } from './init-script'
import { ThemeInitScript } from './ThemeInitScript'

describe('ThemeInitScript', () => {
  it('renders a <script> carrying the default snippet', () => {
    const { container } = render(<ThemeInitScript />)
    const script = container.querySelector('script')
    expect(script).not.toBeNull()
    expect(script?.innerHTML).toBe(THEME_INIT_SCRIPT)
  })

  it('forwards a CSP nonce', () => {
    const { container } = render(<ThemeInitScript nonce="abc123" />)
    expect(container.querySelector('script')?.getAttribute('nonce')).toBe('abc123')
  })

  it('builds a key-specific snippet when storageKey is customized', () => {
    const { container } = render(<ThemeInitScript storageKey="my-app-theme" />)
    expect(container.querySelector('script')?.innerHTML).toBe(buildThemeInitScript('my-app-theme'))
  })
})
