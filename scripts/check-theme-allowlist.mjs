#!/usr/bin/env node
// Phase 5 stub — verify that each Special theme only overrides CSS custom
// properties declared in its `allowedTokens`.
//
// Contract: .claude/rules/theme-architecture.md "Allowlist mechanism" and
// .claude/rules/state-token-guideline.md "Specials must not override
// non-interactive state tokens / info-*".
//
// Implementation outline (Phase 5):
//   1. Read SEASONAL_THEME_METADATA from src/themes/seasonal/index.ts
//      (and future Special metadata exports — brand-*, vendor-*).
//   2. Parse the matching CSS (src/themes/seasonal/themes.css, …) into
//      per-`:root[data-theme="<id>"]` blocks.
//   3. For each block, list CSS custom property declarations and match
//      against the theme's `allowedTokens` globs.
//   4. Exit non-zero with a per-token diagnostic when a block writes a
//      token outside its allowlist.
//
// The scan pipeline is intended to be shared with #200 (semantic →
// primitive resolution test) so both checks read the CSS once.
//
// Until this script is implemented, the allowlist is a hand-checked
// convention enforced by code review and by the per-theme block comments
// in themes.css.

console.warn(
  'check-theme-allowlist: stub — Phase 5 will implement allowlist enforcement.\n' +
    '  See .claude/rules/theme-architecture.md ("Allowlist mechanism") for the contract.',
)
process.exit(0)
