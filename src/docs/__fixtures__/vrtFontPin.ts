/**
 * Test-only `@font-face` that pins the mono stack to Menlo.
 *
 * `--font-mono` reads `ui-monospace, SFMono-Regular, "SF Mono", Menlo, …`.
 * Chromium treats `ui-monospace` as an ordinary family name and finds nothing,
 * so the stack moves on: to SF Mono where Apple's optional SF Mono package is
 * installed, and to Menlo everywhere else on macOS. The baselines match Menlo.
 * SF Mono has a taller line box at small sizes, so on a Mac with the package
 * every render with mono text drifts (+1px per row at 0.7rem, +21px on
 * `CSS API / reference`, #581). A face named `ui-monospace` gives the first name
 * in the stack a match, without touching the public token.
 *
 * Chromium only: WebKit reads `ui-monospace` as a keyword and ignores this face.
 * If Chromium ever does the same, this stops working and those Macs drift again.
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
