// TypeScript declarations for scripts/is-cli-entry.mjs (see that file for why
// the URL-to-URL comparison matters).

/**
 * True when the module whose `import.meta.url` is `moduleUrl` is the script
 * Node was asked to run. `entry` defaults to `process.argv[1]`.
 */
export function isCliEntry(moduleUrl: string, entry?: string): boolean
