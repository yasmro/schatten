---
'@yasmro/schatten': patch
---

docs(storybook): add `Getting Started / For Astro` and `For Vue` pages.

Closes [#113](https://github.com/yasmro/schatten/issues/113).

The two new MDX pages show how to wire Schatten into Astro and Vue
projects without a React runtime — installing the package, importing
the global stylesheet, and using `buttonVariants(...)` from
`@yasmro/schatten/variants` to compose class strings on any element.
Each page also documents the v0.14.0 migration path to the
data-attribute class API (`<button class="btn" data-variant="solid">`).

**What ships**

- `src/docs/getting-started/ForAstro.mdx` — Astro setup, React island
  mixing example using Pattern A Button vocabulary, tokens-only path.
- `src/docs/getting-started/ForVue.mdx` — Vue 3 setup, `<style scoped>`
  interaction note, `<RouterLink>` / `<NuxtLink>` integration.
- `.storybook/main.ts` — stories glob now matches `*.mdx` as well as
  `*.stories.*`, so the new pages mount.
- `.storybook/preview.tsx` — storySort order picks up `Getting Started`
  so the section appears between `Welcome` and `Foundation`.

**Honesty about the v0.7.0 status**

Both pages lead with a status table that distinguishes:

- Tokens + CVA variant helpers — **production-ready today**.
- Class-based component API (`.btn`, `.input`, …) — phantom in v0.7.0;
  the selector exists in Schatten's CVA strings but the CSS bundle has
  no declarations for it yet. Lands in v0.14.0
  ([#58](https://github.com/yasmro/schatten/issues/58)) and stabilizes
  in v1.0.0 per `.claude/rules/api-stability.md`.

The Astro page recommends `buttonVariants({ variant: 'primary' })` as
the today-bridge — matching the pattern README.md established in
[#111](https://github.com/yasmro/schatten/issues/111) — rather than the
`<button class="btn btn--primary">` form, which doesn't render today.

**Button vocabulary**

Both pages spell out the Pattern A (single-axis, role-based) Button
vocabulary: `primary | secondary | tertiary | destructive | inverted |
link`. Pattern A has no `appearance` prop; cross-references point at
`.claude/rules/component-api-conventions.md` for the full matrix and
the rationale.

**Consumer impact**

Additive. No code paths change.
