/**
 * Test-only `@font-face` that maps `ui-monospace` to Menlo.
 *
 * `ui-monospace` leads `--font-mono` and resolves to whatever the OS calls its
 * monospace font: Menlo on the macOS CI runner, SF Mono on macOS 27. SF Mono has
 * a taller line box at small sizes, so a local render drifts from every baseline
 * that contains mono text (+1px per row at 0.7rem, +21px on `CSS API / reference`,
 * #581). Pinning the face makes the renders agree without touching the public
 * token.
 *
 * Applied only under automation: Storybook checks `navigator.webdriver`
 * (`.storybook/preview.tsx`), and `CSSApiDist.vrt.spec.ts` adds it to its page.
 * String-only so Playwright specs can import it.
 */
export const vrtFontPinCss = `
  @font-face {
    font-family: ui-monospace;
    font-weight: 400;
    src: local('Menlo-Regular');
  }
  @font-face {
    font-family: ui-monospace;
    font-weight: 700;
    src: local('Menlo-Bold');
  }
`
