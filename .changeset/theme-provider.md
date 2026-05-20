---
'@yasmro/schatten': minor
---

Add `<ThemeProvider>` / `useTheme()` — a declarative API for managing the
Mode (light/dark) and Special (`data-theme`) axes from a React tree. Wraps
the previously-manual `document.documentElement.classList.toggle('dark')`
+ `setAttribute('data-theme', …)` plumbing into a client-only Provider:

- `defaultMode` accepts `'light' | 'dark' | 'system'`; `'system'` subscribes
  to `matchMedia('(prefers-color-scheme: dark)')`.
- `defaultSpecial` accepts an explicit `SpecialThemeId`, `'auto-seasonal'`
  (resolves the current date via `getCurrentSeason()`), or `null`.
- State persists to `localStorage` under `storageKey` (default
  `'schatten-theme'`); pass `null` to disable. Cross-tab updates sync via
  the native `storage` event.
- `useTheme()` exposes both the resolved `mode` (`'light' | 'dark'`) and
  the user-facing `modeSetting` (which can include `'system'`).
- Optional `disableTransitionOnChange` strips CSS transitions during a swap
  for instant feedback.

New entry point: `@yasmro/schatten/providers`.

Component / lv1 / lv2 / CSS API: unchanged.
