// TypeScript declarations for scripts/capture-review-shots.mjs. Typed
// consumers (scripts/__tests__/capture-review-shots.test.ts) import the helpers
// from a .ts module — an explicit .d.mts gives TypeScript a strongly-typed view
// without converting the script to .ts. Mirrors the check-harness-sync.d.mts
// pattern.

/** A Storybook `index.json` entry, narrowed to the fields the script reads. */
export interface StoryEntry {
  id: string
  title: string
  type: string
  importPath: string
}

/** Gitignored directory the screenshots and `manifest.json` are written to. */
export const OUT_DIR: string

/** Stories captured when a token / theme / global-style file changed. */
export const SYSTEM_WIDE_STORIES: string[]

/** Mode × Season combinations captured per story. */
export const SHOT_MATRIX: { mode: 'light' | 'dark'; season: string | null }[]

/** Keep only the changed files that can affect what renders. */
export function selectVisualFiles(files: string[]): string[]

/** Pick the stories to capture, breadth-first across titles. */
export function selectStories(
  visualFiles: string[],
  entries: StoryEntry[],
  options?: { limit?: number; perTitle?: number },
): { selected: StoryEntry[]; omitted: StoryEntry[] }

/** The VRT baseline a story's default-theme shot can be compared to. */
export function baselinePath(
  story: Pick<StoryEntry, 'id' | 'importPath'>,
  mode: 'light' | 'dark',
): string
