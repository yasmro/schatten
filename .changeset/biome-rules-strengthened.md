---
'@yasmro/schatten': patch
---

chore(lint): strengthen Biome rules on top of `recommended`

[biome.json](biome.json) previously enabled only `recommended: true`. That
left a few classes of bug uncaught — stale `useEffect` deps, unused imports
left over from refactors, value-imports for type-only symbols, stray
`console.log` shipped to consumers. None of those are caught by
`recommended`, but all are mechanical to enforce.

The internal codebase already followed these conventions, so enabling the
rules produced **zero violations**.

Rules added (see [.claude/rules/lint-rules-guideline.md](.claude/rules/lint-rules-guideline.md)
for the rationale on each):

- `correctness/useExhaustiveDependencies` — `error`
- `correctness/noUnusedImports` — `error`
- `correctness/noUnusedVariables` — `error`
- `style/useImportType` — `error`
- `style/useExportType` — `error`
- `style/noNonNullAssertion` — `warn`
- `suspicious/noConsole` — `error` with `allow: ["warn", "error"]` (the two
  variants the library uses to flag developer misuse — e.g. Button's
  `isLoading + asChild` warning)

Also aligned the `$schema` URL to the installed Biome version (`2.4.14`),
silencing the schema-mismatch info on every `pnpm lint` run.

No public API change.
