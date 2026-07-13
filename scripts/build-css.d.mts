// TypeScript declarations for scripts/build-css.mjs — same pattern as
// scripts/generate-manifest.d.mts: the .mjs carries JSDoc, this file gives
// the Vitest smoke test a strongly-typed import without dragging ts-node
// into the build chain.

export interface LightningcssTargets {
  readonly safari: number
  readonly chrome: number
  readonly firefox: number
}

export const TW4_BASELINE_TARGETS: LightningcssTargets

export const DIST_BANNER: string

export function buildSchattenCss(entry?: string): string
