---
'@yasmro/schatten': patch
---

Add integration-level VRT for the `Foundation/CSS API` page and a separate
dist-artifact verification spec.

- `src/docs/CSSApiParity.stories.tsx` — side-by-side React ↔ vanilla HTML
  comparison covering all 18 lv1 components in one page (区 C/D
  Tooltip / Select / Dialog / Toast are shown vanilla-only because
  their React equivalents portal-mount).
- `src/docs/CSSApi.vrt.spec.ts` — pins the `Reference` and
  `ParityComparison` stories in light + dark.
- `src/docs/CSSApiDist.vrt.spec.ts` — loads the built
  `dist/schatten.css` and each per-component `dist/css/<slug>.css`
  subpath (from #291) via `page.setContent()` and verifies they
  render identically to source-mode. Closes the #291 DoD #4 promise
  ("import the subpath and the styles apply") with a real visual
  contract.
- `src/docs/__fixtures__/cssApiSamples.tsx` — shared vanilla markup
  fed into both the parity story and the dist spec, so a markup
  typo can only ever appear on both verification paths or neither.

Consumer-facing surface is unchanged; this is internal test
infrastructure that closes the integration-level gap between the
React layer and the framework-agnostic CSS layer.
