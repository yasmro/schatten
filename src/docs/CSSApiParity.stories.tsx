/**
 * # CSS API / React vs Vanilla HTML parity
 *
 * Side-by-side render of the React component layer and the
 * framework-agnostic `.st-*` CSS class API for every lv1 component.
 * Backs the integration-level VRT in
 * [`CSSApi.vrt.spec.ts`](./CSSApi.vrt.spec.ts) — drift between the
 * two columns surfaces as a snapshot diff.
 *
 * Why this story exists alongside per-component
 * `Component.parity.stories.tsx`:
 *
 * - **Per-component parity** (`Button.parity.stories.tsx`,
 *   `Badge.parity.stories.tsx`, …) verifies one component in
 *   isolation. 14 of 18 lv1 ship one per
 *   .claude/rules/vrt-spec-guideline.md §"Parity stories".
 * - **Integration parity** (this story) verifies all 18 in a single
 *   page. It catches three things the per-component specs cannot:
 *     1. Cross-component CSS leakage (a Toast rule that lands on a
 *        Button because both share `.st-btn` chains).
 *     2. The 4 区 C/D components (Tooltip / Select / Dialog / Toast)
 *        that skip per-component parity — their static `.st-*` shape
 *        is pinned here.
 *     3. The fixture-as-SSOT contract — the same vanilla HTML this
 *        story consumes is what `CSSApiDist.vrt.spec.ts` feeds into
 *        `page.setContent()` against the built `dist/schatten.css`,
 *        so source-mode vs dist drift surfaces as a separate snapshot
 *        comparison without re-authoring the markup.
 *
 * The vanilla side uses `dangerouslySetInnerHTML` to render the
 * fixture string. That's intentional — the same string is the input
 * for the dist VRT, so any change to the markup automatically
 * propagates to both verification paths.
 *
 * Closes part of #277.
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import { fixtureChromeCss, ReactSamples, vanillaHtml } from './__fixtures__/cssApiSamples'

const meta: Meta = {
  title: 'CSS API/Overview',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const ParityComparison: Story = {
  name: 'React vs Vanilla HTML (parity)',
  render: () => (
    <>
      {/* Fixture chrome — scaffolding only, NOT public API. The same
       * CSS string is injected into the dist HTML page so layout
       * matches across verification paths. */}
      <style>{fixtureChromeCss}</style>

      <div className="cssapi-fixture">
        <h1 className="st-text st-text--heading st-text--xl st-text--default">
          React ↔ Vanilla HTML parity
        </h1>
        <p className="st-text st-text--body st-text--sm st-text--muted">
          Left column: the React component layer. Right column: hand-written vanilla HTML with the
          matching `.st-*` class chain. Same fixture is fed into <code>CSSApiDist.vrt.spec.ts</code>{' '}
          to verify the built <code>dist/schatten.css</code> renders identically.
        </p>

        <div className="cssapi-fixture__grid" style={{ marginTop: '1.5rem' }}>
          <div className="cssapi-fixture__column">
            <span className="cssapi-fixture__column-label">React</span>
            {/* Wrap in `.cssapi-fixture__samples` so the gap between
             * sections matches the vanilla side, which renders one
             * wrapper div from `dangerouslySetInnerHTML`. Without the
             * wrapper here, React's Fragment would flatten all
             * sections directly into the column, getting `gap: 1.5rem`
             * from the column itself — but then the vanilla side's
             * sections lose that gap because their wrapper eats it.
             * Mirroring the structure on both sides keeps the gaps
             * symmetric. */}
            <div className="cssapi-fixture__samples">
              <ReactSamples />
            </div>
          </div>
          <div className="cssapi-fixture__column">
            <span className="cssapi-fixture__column-label">Vanilla HTML</span>
            <div
              className="cssapi-fixture__samples"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: The fixture string is authored in this repo and is the single source of truth shared with the dist VRT — see src/docs/__fixtures__/cssApiSamples.tsx file header.
              dangerouslySetInnerHTML={{ __html: vanillaHtml }}
            />
          </div>
        </div>
      </div>
    </>
  ),
}
