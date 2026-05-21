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
    it('captures declarations from inside `@layer theme { … }` (the @theme output)', () => {
      // Tailwind v4 compiles `@theme { --foo: …; }` to `@layer theme { :root, :host { --foo: …; } }`.
      // The manifest captures every `--*` inside that layer regardless of prefix —
      // `@theme` registration is the authoritative public-surface signal.
      const css = `
        @layer theme {
          :root, :host {
            --color-error: oklch(0.6 0.2 22);
            --font-sans: ui-sans-serif;
            --leading-normal: 1.5;
            --any-public-name-without-a-known-prefix: 7;
          }
        }
      `
      expect(extractManifest(css).cssVariables).toEqual([
        '--any-public-name-without-a-known-prefix',
        '--color-error',
        '--font-sans',
        '--leading-normal',
      ])
    })

    it('ignores declarations outside `@layer theme` even when they share a name shape', () => {
      // This is the central regression that motivated #280: pre-fix the prefix
      // heuristic captured anything matching `--font-*` / `--text-*` / `--spacing-*`,
      // dragging in font-weight scalars and fallback stacks declared in the
      // source token files but never registered via @theme.
      const css = `
        :root {
          --font-bold: 700;
          --font-sans-fallback: ui-sans-serif, system-ui;
          --text-xs: 0.75rem;
          --spacing-1-5: 0.375rem;
        }
        @layer base {
          :root {
            --reset-thing: anything;
          }
        }
      `
      expect(extractManifest(css).cssVariables).toEqual([])
    })

    it('captures across multiple `@layer theme` blocks and dedupes', () => {
      const css = `
        @layer theme {
          :root, :host { --color-error: red; }
        }
        @layer theme {
          :root, :host { --color-error: red; --color-success: green; }
        }
      `
      expect(extractManifest(css).cssVariables).toEqual(['--color-error', '--color-success'])
    })

    it('does not capture non-custom-property decls inside @layer theme', () => {
      const css = `
        @layer theme {
          :root, :host {
            --color-error: red;
            color: blue;            /* not a custom property */
            font-size: 1rem;
          }
        }
      `
      expect(extractManifest(css).cssVariables).toEqual(['--color-error'])
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
