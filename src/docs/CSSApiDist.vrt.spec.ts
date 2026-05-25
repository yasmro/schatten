import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { expect, test } from '@playwright/test'
// Import from the string-only `.html.ts` module to keep this spec free
// of the React component graph — Playwright's Babel pipeline mis-parses
// `*.css` side-effect imports that the lv1 React layer brings in.
// See `cssApiSamples.html.ts` header for the full rationale.
import { fixtureChromeCss, vanillaHtml } from './__fixtures__/cssApiSamples.html'

/*
 * Dist-artifact VRT for the framework-agnostic CSS surface.
 *
 * Loads the *built* `dist/schatten.css` (and per-component
 * `dist/css/<slug>.css` subpaths from #291) via `page.setContent()` —
 * Storybook is **not** in the loop. Pairs the dist styles with the
 * same vanilla markup the parity story uses
 * (`src/docs/__fixtures__/cssApiSamples.tsx`), so drift between
 * source-mode (Storybook globals.css → Tailwind v4 compile of each
 * `Component.css`) and the built dist file surfaces as a snapshot
 * diff in *this* spec — the parity-comparison snapshot in
 * `CSSApi.vrt.spec.ts` keeps passing because that one renders
 * source-mode on both sides.
 *
 * **Requires a built `dist/`**. `scripts/ensure-dist.mjs` (run by
 * `pnpm test:vrt:dist`) checks for it and prints a friendly error if
 * it is missing. CI's VRT job has `pnpm build` prepended for the
 * same reason — see `.github/workflows/vrt.yml`.
 *
 * Tracked by #277.
 */

const DIST_SCHATTEN_CSS = resolve('dist/schatten.css')
const DIST_CSS_DIR = resolve('dist/css')
const DIST_TOKENS = [
  resolve('dist/core/tokens/primitives.css'),
  resolve('dist/core/tokens/semantic.css'),
  resolve('dist/core/tokens/typography.css'),
  resolve('dist/core/tokens/spacing.css'),
  resolve('dist/core/tokens/z-index.css'),
]
const DIST_DEFAULT_THEME = resolve('dist/themes/default/index.css')

/**
 * Read a CSS file from disk. Throws a friendly error if the dist file
 * is missing — usually means `pnpm build` was skipped before running
 * this spec.
 */
function readCss(absPath: string): string {
  if (!existsSync(absPath)) {
    throw new Error(
      `${absPath} not found. ` +
        'Run `pnpm build` before this spec (or use `pnpm test:vrt:dist` which checks for you). ' +
        'See `scripts/ensure-dist.mjs`.',
    )
  }
  return readFileSync(absPath, 'utf8')
}

/**
 * Wrap a markup body in a standalone HTML document. Theme is applied
 * via `<html class="dark">` so the dist's `.dark`-scoped selectors
 * fire without any JS — matches the production cascade (see
 * src/styles/globals.css and dist's @custom-variant declaration).
 *
 * The fixture chrome `<style>` is included so the layout grid renders
 * identically to the parity-comparison story; it has the
 * `.cssapi-fixture__*` prefix and never collides with `.st-*`.
 */
function buildHtml(theme: 'light' | 'dark', cssBlocks: string[], body: string): string {
  return `<!DOCTYPE html>
<html lang="en"${theme === 'dark' ? ' class="dark"' : ''}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>${cssBlocks.join('\n')}</style>
    <style>${fixtureChromeCss}</style>
  </head>
  <body>
    <div class="cssapi-fixture">${body}</div>
  </body>
</html>`
}

const themes = ['light', 'dark'] as const

/**
 * Pause animations + transitions so portal-mounted Tooltip / Dialog /
 * Toast / Spinner / Select keyframes settle deterministically. Same
 * snippet as `CSSApi.vrt.spec.ts`.
 */
async function pauseAnimations(page: import('@playwright/test').Page) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-play-state: paused !important;
        animation-delay: -0.0001s !important;
        transition: none !important;
      }
    `,
  })
}

// ─────────────────────────────────────────────────────────────────────
// Integrated stylesheet — `@yasmro/schatten/schatten.css`
// ─────────────────────────────────────────────────────────────────────

for (const theme of themes) {
  test(`CSS API dist / schatten.css / ${theme}`, async ({ page }) => {
    const distCss = readCss(DIST_SCHATTEN_CSS)
    const html = buildHtml(theme, [distCss], vanillaHtml)
    await page.setContent(html, { waitUntil: 'load' })
    await pauseAnimations(page)
    await expect(page).toHaveScreenshot(`dist-schatten-css-${theme}.png`, {
      fullPage: true,
    })
  })
}

// ─────────────────────────────────────────────────────────────────────
// Per-component subpaths — `@yasmro/schatten/css/<slug>`
//
// Smoke test that each per-component CSS file ships a usable visual
// when imported alone (the #291 DoD #4 promise: "import the subpath
// and the styles apply"). Tokens + default theme are layered in
// because the per-component CSS deliberately ships *only* the
// component rules — tokens are a separate subpath
// (`@yasmro/schatten/core/tokens`).
// ─────────────────────────────────────────────────────────────────────

/**
 * Discover lv1 component slugs by reading `src/components/lv1/` at
 * spec-load time. This mirrors `scripts/lv1-slugs.mjs` — the
 * authoritative discovery rules live there (used by `pnpm build` /
 * `pnpm test:vrt:dist`). The logic is inlined here rather than
 * imported because Playwright compiles this spec through Babel,
 * which doesn't handle `.mjs` imports from `.ts` cleanly.
 *
 * Discovery contract (kept in sync with `scripts/lv1-slugs.mjs`):
 *
 * - A `src/components/lv1/<Name>/` directory qualifies as an lv1
 *   when it contains `<Name>.tsx`. Excludes `__snapshots__` etc.
 * - The slug is the lowercased component name (matches the
 *   `.st-<block>` class API convention).
 * - Components without `<Name>.css` are skipped (they have no
 *   per-component `dist/css/<slug>.css` to render). `pnpm build`
 *   throws if any lv1 is missing its CSS — see
 *   `discoverLv1WithCss()` in `scripts/lv1-slugs.mjs`.
 *
 * If you change the discovery rules here, update
 * `scripts/lv1-slugs.mjs` in the same commit (and vice versa).
 */
const LV1_DIR = resolve('src/components/lv1')

const PER_COMPONENT: ReadonlyArray<{ slug: string }> = readdirSync(LV1_DIR)
  .filter((name) => {
    const dir = join(LV1_DIR, name)
    if (!statSync(dir).isDirectory()) return false
    if (!existsSync(join(dir, `${name}.tsx`))) return false
    // Skip components without a `.css` file. `pnpm build` will have
    // thrown earlier in that case; this defensive filter keeps the
    // spec self-consistent if a contributor runs VRT against a
    // stale `dist/`.
    if (!existsSync(join(dir, `${name}.css`))) return false
    return true
  })
  .map((name) => ({ slug: name.toLowerCase() }))

/**
 * Extract the `<section data-component="${slug}">…</section>` block
 * out of the fixture. Falls back to the full fixture if the slug
 * isn't found (defensive — would indicate a fixture / spec drift
 * which surfaces as a snapshot diff anyway).
 */
function isolateSection(slug: string): string {
  const re = new RegExp(`<section[^>]*data-component="${slug}"[^>]*>[\\s\\S]*?</section>`, 'i')
  const match = vanillaHtml.match(re)
  if (!match) {
    throw new Error(
      `CSSApiDist: no <section data-component="${slug}"> in vanillaHtml. ` +
        'Add the matching fixture sample, or remove this slug from PER_COMPONENT.',
    )
  }
  return match[0]
}

for (const { slug } of PER_COMPONENT) {
  for (const theme of themes) {
    test(`CSS API dist / css/${slug}.css / ${theme}`, async ({ page }) => {
      const componentCss = readCss(resolve(DIST_CSS_DIR, `${slug}.css`))
      // Tokens + default theme have to be layered in because the
      // per-component file ships only the `.st-*` rules. This is the
      // realistic consumer setup — they `@import` tokens once and
      // each subpath separately.
      const tokenCss = DIST_TOKENS.map((p) => readCss(p)).join('\n')
      const defaultTheme = readCss(DIST_DEFAULT_THEME)
      const section = isolateSection(slug)

      const html = buildHtml(theme, [tokenCss, defaultTheme, componentCss], section)
      await page.setContent(html, { waitUntil: 'load' })
      await pauseAnimations(page)
      await expect(page).toHaveScreenshot(`dist-css-${slug}-${theme}.png`)
    })
  }
}
