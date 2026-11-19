// Setup for vitest.browser.config.ts (#650). Loads the same stylesheet chain
// that ships as dist/schatten.css — tokens, the preflight, and every
// component's .st-* rules — so tests can read computed styles. No polyfills:
// the browser has ResizeObserver, Pointer Events and scrollIntoView.
//
// @testing-library/jest-dom is deliberately not loaded here. `vitest/browser`
// brings its own jest-dom matcher types, and the two declarations conflict
// (#642). Browser tests assert on computed values with the built-in matchers.
import './src/styles/entry.css'
