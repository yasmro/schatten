import { describe, expect, it } from 'vitest'
import { extractManifest } from '../generate-manifest.mjs'

// Unit tests for the pure `extractManifest` function. Feeding it fixture
// CSS keeps the assertions independent of `dist/schatten.css` — the CI
// `check:manifest` gate is what diffs the regenerated output against the
// committed snapshot at the integration layer.

describe('extractManifest', () => {
  describe('classes', () => {
    it('extracts st-* classes', () => {
      const css = `
        .st-btn { color: red; }
        .st-btn--primary { background: blue; }
      `
      expect(extractManifest(css).classes).toEqual(['st-btn', 'st-btn--primary'])
    })

    it('ignores legacy non-st classes (the pre-sweep CSS will drop these)', () => {
      const css = `
        .tooltip-content { opacity: 0; }
        .dialog-overlay { opacity: 0; }
        .toast-item { transform: translateY(100%); }
        .spinner-dot { animation: ripple 1s; }
      `
      expect(extractManifest(css).classes).toEqual([])
    })

    it('ignores consumer-side class names', () => {
      const css = `.my-app-class { color: green; } .btn { color: blue; }`
      expect(extractManifest(css).classes).toEqual([])
    })

    it('deduplicates and sorts alphabetically', () => {
      const css = `
        .st-btn--primary { color: red; }
        .st-btn { color: green; }
        .st-btn--primary[data-state="open"] { color: blue; }
        .st-btn { color: yellow; }
      `
      expect(extractManifest(css).classes).toEqual(['st-btn', 'st-btn--primary'])
    })
  })

  describe('dataAttributes', () => {
    it('captures data-* attribute names', () => {
      const css = `
        .st-dialog__content[data-state="open"] {}
        .st-toast[data-swipe="end"] {}
        .st-separator[data-orientation="horizontal"] {}
        .st-tooltip__content[data-side="bottom"] {}
        :root[data-theme="season--spring-early"] {}
        .st-field[data-error="true"] {}
        .st-field[data-disabled="true"] {}
      `
      expect(extractManifest(css).dataAttributes).toEqual([
        'data-disabled',
        'data-error',
        'data-orientation',
        'data-side',
        'data-state',
        'data-swipe',
        'data-theme',
      ])
    })

    it('captures aria-invalid and aria-busy (the two ARIA state hooks)', () => {
      const css = `
        .st-input[aria-invalid="true"] { border-color: red; }
        .st-btn[aria-busy="true"] { cursor: wait; }
      `
      expect(extractManifest(css).dataAttributes).toEqual(['aria-busy', 'aria-invalid'])
    })

    it('does not capture other aria-* attributes', () => {
      const css = `
        .st-foo[role="status"] {}
        .st-foo[aria-label="close"] {}
        .st-foo[aria-labelledby="x"] {}
        .st-foo[aria-describedby="y"] {}
      `
      expect(extractManifest(css).dataAttributes).toEqual([])
    })

    it('records attribute names only, not their values', () => {
      const css = `
        .st-dialog__content[data-state="open"] {}
        .st-dialog__content[data-state="closed"] {}
      `
      expect(extractManifest(css).dataAttributes).toEqual(['data-state'])
    })

    it('handles all selector match operators', () => {
      const css = `
        .a[data-x] {}
        .b[data-y="v"] {}
        .c[data-z~="v"] {}
        .d[data-a^="v"] {}
        .e[data-b$="v"] {}
        .f[data-c*="v"] {}
      `
      expect(extractManifest(css).dataAttributes).toEqual([
        'data-a',
        'data-b',
        'data-c',
        'data-x',
        'data-y',
        'data-z',
      ])
    })
  })

  describe('cssVariables', () => {
    it('captures public-prefix custom properties', () => {
      const css = `
        :root {
          --color-error: oklch(0.6 0.2 22);
          --color-foreground: oklch(0.18 0 0);
          --spacing-4: 1rem;
          --radius-md: 0.375rem;
          --font-sans: ui-sans-serif;
          --shadow-md: 0 1px 2px black;
          --z-modal: 50;
          --text-body-md-size: 1rem;
        }
      `
      expect(extractManifest(css).cssVariables).toEqual([
        '--color-error',
        '--color-foreground',
        '--font-sans',
        '--radius-md',
        '--shadow-md',
        '--spacing-4',
        '--text-body-md-size',
        '--z-modal',
      ])
    })

    it('excludes non-public custom properties', () => {
      const css = `
        :root {
          --internal-magic: 42;
          --schatten-spinner-duration: 2s;
          --my-app-var: blue;
        }
      `
      expect(extractManifest(css).cssVariables).toEqual([])
    })

    it('captures from dark-mode and theme selectors', () => {
      const css = `
        :root[data-theme="season--winter-deep"] {
          --color-theme-500: oklch(0.5 0.15 240);
        }
        .dark {
          --color-error: oklch(0.55 0.2 22);
        }
      `
      expect(extractManifest(css).cssVariables).toEqual(['--color-error', '--color-theme-500'])
    })
  })

  describe('schema', () => {
    it('locks $schemaVersion at 1', () => {
      expect(extractManifest('').$schemaVersion).toBe(1)
    })

    it('returns empty arrays for empty input', () => {
      expect(extractManifest('')).toEqual({
        $schemaVersion: 1,
        classes: [],
        dataAttributes: [],
        cssVariables: [],
      })
    })
  })
})
