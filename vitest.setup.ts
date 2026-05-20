import '@testing-library/jest-dom/vitest'

// Mock ResizeObserver for Radix UI components that use it
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// jsdom does not implement `matchMedia`. ThemeProvider reads it to
// resolve `prefers-color-scheme: dark` when `defaultMode="system"`.
// Individual tests can `vi.stubGlobal('matchMedia', …)` to control
// per-test behavior — this baseline polyfill ensures default `light`
// resolution and no throws.
if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }),
  })
}

// jsdom does not implement Pointer Events; polyfill the methods Radix calls.
if (typeof Element !== 'undefined') {
  if (!Element.prototype.hasPointerCapture) {
    Element.prototype.hasPointerCapture = () => false
  }
  if (!Element.prototype.setPointerCapture) {
    Element.prototype.setPointerCapture = () => {}
  }
  if (!Element.prototype.releasePointerCapture) {
    Element.prototype.releasePointerCapture = () => {}
  }
  // Radix Select calls scrollIntoView on the active item when opening.
  if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = () => {}
  }
}
