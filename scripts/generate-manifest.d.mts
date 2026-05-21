// TypeScript declarations for scripts/generate-manifest.mjs. The .mjs file
// itself carries JSDoc-typed annotations, but the test file imports the
// function from a .ts module — providing an explicit .d.mts here is the
// least-friction way to give TypeScript a strongly-typed view of the
// exported symbol without converting the script to .ts (which would mean
// dragging tsx/ts-node into the build chain just for one helper).

export interface Manifest {
  readonly $schemaVersion: 1
  readonly classes: readonly string[]
  readonly dataAttributes: readonly string[]
  readonly cssVariables: readonly string[]
}

export function extractManifest(css: string): Manifest
