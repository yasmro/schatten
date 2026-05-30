# VRT Spec Guideline

## Overview

Visual Regression Testing (VRT) specs use Playwright to capture screenshots of Storybook stories and compare them against baseline snapshots.

## File Structure

VRT spec files should be placed alongside the component:
```
src/components/lv1/ComponentName/
├── ComponentName.tsx
├── ComponentName.stories.tsx
├── ComponentName.test.tsx
├── ComponentName.vrt.spec.ts    # VRT spec
└── __snapshots__/               # Auto-generated snapshots
    ├── story-name-light.png
    └── story-name-dark.png
```

### Shared markup fixtures — `__fixtures__/`

When the **same** vanilla HTML or React markup needs to be rendered by
both a Storybook story *and* a Playwright `page.setContent()` spec
(integration-level VRT — see
[`src/docs/CSSApiDist.vrt.spec.ts`](../../src/docs/CSSApiDist.vrt.spec.ts),
#277), keep the markup in a `__fixtures__/` directory next to the
spec, NOT inlined in both places:

```
src/docs/
├── CSSApiParity.stories.tsx        Storybook story (imports React fixture)
├── CSSApi.vrt.spec.ts              Storybook-mode VRT
├── CSSApiDist.vrt.spec.ts          Storybook-free dist VRT
└── __fixtures__/
    ├── cssApiSamples.html.ts       String payloads only (SSOT)
    └── cssApiSamples.tsx           React components + re-exports the strings
```

**Why split into `.html.ts` (strings) and `.tsx` (React)**: Playwright
compiles spec files through Babel, which mis-parses `Component.css`
side-effect imports (which lv1 React components carry) as TypeScript
decorators. Importing the `.tsx` from a Playwright spec breaks; the
`.html.ts` companion strips React imports out so it imports cleanly.
Stories that need both string and React versions import from the
`.tsx`, which re-exports the strings.

**Why a fixture instead of inlined markup**: drift between the story
copy and the spec copy can only be caught by reviewer grep
otherwise. With the fixture, a markup typo can only appear on both
verification paths or neither — the SSOT makes drift structurally
impossible.

## Template

```typescript
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-componentname'

const stories = ['story-one', 'story-two'] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`ComponentName / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })
      await page.waitForFunction(
        () => {
          const el = document.querySelector('#storybook-root')
          return el && el.children.length > 0
        },
        { timeout: 10_000 },
      )

      await expect(root).toHaveScreenshot(`${story}-${theme}.png`)
    })
  }
}
```

## Story ID Mapping

Storybook converts story export names to kebab-case:
- `AllVariants` → `all-variants`
- `WithIcons` → `with-icons`
- `ErrorState` → `error-state`

The story ID prefix follows the Storybook title:
- `title: 'Components/lv1/Button'` → `components-lv1-button`

## Required Wait Logic

Always include these waits for CI reliability:

```typescript
// 1. Wait for network to settle
await page.waitForLoadState('networkidle')

// 2. Wait for root element to be visible
const root = page.locator('#storybook-root')
await root.waitFor({ state: 'visible', timeout: 10_000 })

// 3. Wait for content to render
await page.waitForFunction(
  () => {
    const el = document.querySelector('#storybook-root')
    return el && el.children.length > 0
  },
  { timeout: 10_000 },
)
```

## Handling Animations

For components with animations (e.g., Spinner), pause animations before screenshot:

```typescript
await page.addStyleTag({
  content: `
    *, *::before, *::after {
      animation-play-state: paused !important;
      animation-delay: -0.0001s !important;
    }
  `,
})
```

## a11y assertions (axe) — paired with every VRT test

Since v0.11.0 each lv1 `*.vrt.spec.ts` ships an `@axe-core/playwright`
a11y assertion **alongside** the screenshot test — one paired `… / a11y`
`test()` per story × theme. Visual regression and a11y regression are
verified from the same spec, but as **separate tests** so a screenshot
failure never masks an a11y failure (and vice versa). The a11y test
re-`goto`s independently rather than sharing the screenshot test's page.

```typescript
import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

// … the VRT test for `${story} / ${theme}` …

test(`Button / ${story} / ${theme} / a11y`, async ({ page }) => {
  await page.goto(storyUrl(story, theme))
  await page.waitForLoadState('networkidle')

  const root = page.locator('#storybook-root')
  await root.waitFor({ state: 'visible', timeout: 10_000 })

  const results = await new AxeBuilder({ page })
    .include('#storybook-root')
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze()

  expect(results.violations).toEqual([])
})
```

### Rules

- **Always pin `.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])`.**
  Without it axe also runs *best-practice* rules (`region`,
  `landmark-one-main`, `page-has-heading-one`) that flag the Storybook
  iframe itself (no landmarks, no `<h1>`) — every story would fail on
  noise. The tag list pins the contract to the WCAG 2.1 A/AA surface the
  a11y contract ([component-architecture §8](component-architecture.md#8-accessibility-contract))
  actually promises.
- **Standard components scope to `.include('#storybook-root')`.** The
  visible surface lives in the root; scoping avoids the iframe chrome.
- **Portal components analyze the whole page** (drop `.include(...)`).
  `Dialog` / `Tooltip` / `Toast` / `Select`-open render their content
  into `document.body`, outside `#storybook-root` — the same reason their
  screenshots use `fullPage: true`. Wait for the portal to mount
  (`waitForSelector('[role="dialog"]')` etc.) before `analyze()`, exactly
  as the screenshot test does. The a11y test does **not** need animations
  paused (axe inspects the DOM/CSS, not a still frame).

### Running

```bash
pnpm test:a11y        # playwright test --grep a11y
pnpm test:vrt -- --grep-invert "a11y"   # screenshots only (what the macos VRT job runs)
```

CI splits the two: the macos `vrt` job runs screenshots (`--grep-invert
"a11y"`), and a dedicated **ubuntu** `a11y` job runs `pnpm test:a11y`. axe's
contrast / role checks derive from CSS, not from macos font / sub-pixel
rendering, so the scarce macos runner stays pixel-only.

> **Phase 1 (observe-only).** The `a11y` CI job is `continue-on-error:
> true` while a backlog of pre-existing violations (systemic borderline
> color-contrast on state tokens; bare-control story artifacts) is worked
> off in follow-up issues — mirroring the `audit` job's staged rollout
> (#307). It surfaces the violation list in the job summary without
> blocking. Phase 2 removes `continue-on-error` and adds `a11y` to
> develop's required checks. Until then, **a red a11y test is signal, not
> a merge blocker** — but new components should still land with zero new
> violations.

## Components rendered into a Portal

Components like `Tooltip`, `Dialog`, and `Toast` use Radix Portals — their
content renders into `document.body`, **outside** `#storybook-root`. A normal
`expect(root).toHaveScreenshot()` would miss the portaled content entirely.

There are three strategies, in order of preference:

1. **Pin open state + screenshot the full page** (recommended for `Tooltip`,
   `Dialog`, `Toast`). Add a story that forces the open state (`open` /
   `defaultOpen` / fired-on-mount), then:
   ```typescript
   await expect(page).toHaveScreenshot(`${story}-${theme}.png`, { fullPage: true })
   ```
   Hover/focus-driven components (e.g. Tooltip) need a dedicated story with
   `<Tooltip open>` — there is no reliable way to simulate hover in a way that
   matches both Playwright's screenshot timing and the browser's animation
   cycle. Using controlled `open` is preferred over `defaultOpen` because it
   is unaffected by stray pointer events during page load.

2. **Pass `container={'#storybook-root'}` to the Portal** (only if the
   component exposes a `container` prop AND the portal's positioning logic
   works inside an arbitrary scroll/overflow container). Schatten's Tooltip
   exposes `container`, but most positioning math assumes `body` as the
   reference — verify visually before going this route.

3. **Click a trigger inside the story to open the portal** (used by Dialog
   today). Less ideal because it splits "the story" across Storybook and the
   spec file, but unavoidable when an open-by-default state breaks the docs
   page (e.g. ten dialogs stacking).

In all three cases, **pause animations** with the `addStyleTag` snippet from
the "Handling Animations" section before taking the screenshot — Tooltip,
Dialog, and Toast all animate on enter/exit.

## Story Selection

Only include stories that represent distinct visual states:
- Include: `AllVariants`, `Sizes`, `States`, `Disabled`, `ErrorState`
- Exclude: `Playground` (interactive, not for VRT)

### Adding a new story → add it to the VRT roster (or document the skip)

When you add a new story to `{Component}.stories.tsx`, the **same PR** must do
one of:

1. **Add the story id to the `stories` array in `{Component}.vrt.spec.ts`** and
   generate the light + dark baselines. This is the default and what almost
   every story should do.
2. **Explicitly skip it** by leaving a one-line comment in the spec file's
   `stories` array stating the reason (e.g. `// 'playground' — interactive
   only; not a distinct visual state`). The comment must name the skipped
   story so a reviewer can grep for it.

Why this is a hard rule, not "best effort":

- VRT roster drift is silent — Storybook ships the story regardless of
  whether `{Component}.vrt.spec.ts` knows about it, and a missing story
  produces no failing test. The miss is invisible until a visual
  regression ships to production.
- This is exactly how [#302](https://github.com/yasmro/schatten/pull/302)'s
  Button link-icon orphan bug slipped past CI: `LinkVariant` existed in
  `Button.stories.tsx` from sweep-3 onwards but was never added to the VRT
  roster, so no baseline existed to fail against.
- The cost of adding a story to the roster is two `pnpm test:vrt:update`
  PNGs and a one-line array entry. The cost of letting drift accumulate is
  one bug per component per regression cycle.

What counts as a legitimate skip reason:

- `Playground` and other interactive-only stories that don't have a stable
  visual state (skip with `// '<id>' — Playground / interactive only`).
- Component-specific stories whose visual is already covered by an
  AllVariants-style story (skip with `// '<id>' — visual covered by 'all-variants'`).
- Stories that intentionally have no deterministic baseline (e.g. a story
  showing randomized data — skip with `// '<id>' — non-deterministic data`).

What is **not** a legitimate skip reason:

- "We'll add it later" — file an issue and link it from the skip comment,
  or do it now.
- "It's just a small variant" — small visual states are exactly what VRT
  catches that unit tests don't.
- Silence (no skip comment) — silent skip is what this rule prevents.

When the lefthook pre-commit hook or a future CI lint catches an orphaned
story (defined as: a `*.stories.tsx` export that is neither in the spec's
`stories` array nor mentioned in a skip comment), treat the warning as
blocking — fix the roster, do not bypass.

## Parity stories — when to write one, when to skip

The `#154` sweeps that publish the `.st-*` class API also typically ship a
`{Component}.parity.stories.tsx` whose VRT screenshot proves the React side
and a hand-written vanilla HTML side render pixel-identically. Parity stories
are the structural enforcement of "the class API alone produces the React
visual" — but only for components a vanilla consumer can realistically use.

### Skip parity for compound + JS-driven components

For components in the [#297](https://github.com/yasmro/schatten/issues/297)
classification **区分 C (静的描画のみ)** or **区分 D (JS 必須)** — i.e.,
Tooltip, Select, Dialog, Toast — **do not author a parity story or a
`*.parity.vrt.spec.ts`**. The class API still exists and is documented in the
manifest, but there is no realistic vanilla use case to prove parity against:

- 区分 D (Select / Dialog / Toast): the compound behaviour (open / close /
  select / focus trap) requires Radix-equivalent JS that Schatten does not
  ship. A vanilla consumer who writes `<button class="st-select__trigger">`
  has a styled button that opens nothing — the "parity" is performative.
- 区分 C (Tooltip): static `.st-tooltip__content` is renderable in vanilla
  HTML, but positioning requires Floating UI / Popper logic, and the
  hover / focus trigger requires self-written JS. The visual contract is
  trivial enough (single dark / light box + arrow) that the manifest entry
  and the unit-test `class API` describe block cover it.

Write parity only for **区分 A (完全 vanilla 可)** and **区分 B (ブラウザが
ハンドル)** components:

- 区分 A: Button, Badge, Callout, Text, Icon, Separator, Spinner.
- 区分 B: Input, Textarea, Checkbox, Switch, Radio.

These are where a vanilla consumer plausibly writes
`<button class="st-btn st-btn--primary">` or `<input class="st-input">` and
expects parity with the React render. The parity VRT structurally enforces
that.

### What replaces parity for skipped components

When you skip the parity story, the contract is still defended by:

- **Manifest** (`src/__generated__/schatten.manifest.json`) — the
  `.st-*` classes the component emits are listed there. Renaming or removing
  one fails `pnpm check:manifest` in CI.
- **Unit test `class API` describe block** — a 3-4 line test that calls
  `render(<Component …/>)` and asserts `toHaveClass('st-component__part',
  'st-component__part--modifier')`. Sweep-3/4/5 components carry this
  pattern.
- **Existing component VRT** (`{Component}.vrt.spec.ts`) — visual regression
  on the React side is still captured; the Tailwind utility → semantic class
  translation is verified via diff against existing baselines.

### Decision flow

When adding a new lv1 component or sweeping an existing one, ask:

1. Is the component fully renderable + interactive in vanilla HTML using
   only the `.st-*` class chain and HTML/ARIA attributes?
   - Yes (区分 A/B) → write the parity story + VRT spec.
   - No (区分 C/D) → skip parity; rely on manifest + class API unit test.
2. If borderline (e.g., a static decorative-only compound), default to
   **skip** — adding parity later is non-breaking, removing it later is a
   semver-noisy churn.

The future docs effort in [#297](https://github.com/yasmro/schatten/issues/297)
will document the 5-区分 classification in `css-api.md`; this rule's parity
decision tree references the same classification.

## Running VRT Tests

```bash
# Run all VRT tests
pnpm test:vrt

# Update snapshots
pnpm test:vrt:update

# Run specific component
pnpm test:vrt -- --grep "Button"
```

> **Before trusting a local VRT pass, confirm no *other* worktree is
> serving Storybook on port 6006.** `playwright.config.ts` sets
> `reuseExistingServer: !CI`, and that reuse is **not** scoped to the
> current worktree — if a sibling git worktree already has `pnpm dev`
> running on 6006, Playwright screenshots *that* worktree's branch, so
> your local run can pass (or fail) against code you are not editing.
> This silently masked a real baseline drift in PR #325. Guard with
> `lsof -ti:6006` (kill the stale server, or run with the port free) so
> the fresh `webServer` boots against the worktree under test. CI is
> immune (`reuseExistingServer` is false there) — which is exactly why a
> green local run can still fail CI.

## Re-baselining (updating snapshots)

**Never run `pnpm test:vrt:update` as the first command on a change you
have not visually verified.** This is the single most important rule in
this document.

> The procedure below is an **interim discipline**. The structural fix —
> per-region snapshots, so a state you did not touch can never be
> silently re-baselined — is tracked in
> [#237](https://github.com/yasmro/schatten/issues/237). When that lands,
> this section is replaced by the per-region convention.

### Why blind updates are dangerous

Snapshots are **story-level** — one screenshot per story, not per variant
(the [storybook-guideline](storybook-guideline.md) deliberately groups many
states into one story, e.g. `AllVariants`). So a story's PNG bakes in *every*
state it renders at once.

That means: when you legitimately change *one* thing in a story (remove a
variant, retune a token, add a row), `test:vrt:update` re-captures the
**whole image**. If anything *else* in that same frame regressed at the same
time — a neighbouring variant drifted, a token leaked, spacing shifted — the
regression is silently absorbed into the new baseline. And because git shows
a re-baselined PNG only as `Binary files differ`, **a reviewer cannot tell
an intended change from a smuggled-in regression.** The author is the last
line of defense.

### The procedure — diff before you update

1. **Run plain `pnpm test:vrt` first** and let the affected tests fail.
2. **Open the diff artifacts** Playwright writes under
   `test-results/<test>/` — each failure has `*-actual.png`,
   `*-expected.png`, and `*-diff.png`.
3. **Confirm the `-diff.png` highlights *only* the pixels you intended to
   change.** If anything else lit up, that is a regression — fix it (or
   explain it) *before* re-baselining, not after.
4. **Only then** run `pnpm test:vrt:update` (scope it with `--grep` to the
   story you verified, so unrelated stories are not re-captured).

### Brand-new snapshots

A story with no existing baseline has nothing to diff against — the first
run writes the PNG and reports a failure. **Open the generated file under
`__snapshots__/` and eyeball it** before committing; that view is the only
review the new baseline gets.

### Sub-threshold drift — a stale-baseline trap

`toHaveScreenshot` tolerates up to `maxDiffPixelRatio: 0.01` (see
[`playwright.config.ts`](../../playwright.config.ts)). If you change a token
and the snapshot still **passes**, it may be because the visual delta fell
under that 1% threshold — `test:vrt:update` then writes **nothing**, and the
committed baseline no longer reflects the current values. When you have
intentionally changed something a snapshot covers, force a faithful
re-capture by **deleting the PNG and re-running** `pnpm test:vrt`, rather
than trusting a green `test:vrt:update`.

### The mirror trap — `rm` + regenerate without `test:vrt` first

The complementary mistake is to **delete the PNG and regenerate immediately**
when you *suspect* a change but haven't verified one is needed. Doing so:

1. Bypasses the 1% threshold check that would tell you "actually no real
   diff" — Playwright happily writes a new baseline with whatever
   sub-pixel font / antialiasing noise this run produced.
2. Inflates the PR diff with regenerated PNGs that aren't carrying any
   visual contract change. Reviewers can't tell what the migration
   actually changed visually.
3. Forfeits a free signal: a clean `pnpm test:vrt` pass against the
   existing baseline is **proof that the visual contract held**. For
   token-driven refactors (where the migration *shouldn't* change
   render) this signal is the whole point.

**Always run `pnpm test:vrt` first.** Only delete + regenerate when the
test actually fails and you've confirmed via `*-diff.png` that the
change is intended and unavoidable. This was learned the expensive way
during #266 sweep-1 — see PR #282 for the receipts.

### Bulk re-baseline — Tailwind / `lucide-react` / `@radix-ui/*` major

A small set of dependencies can shift the visual contract **without
any source-file change** — listed in
[api-stability.md §"Visual-contract-affecting dependencies"](api-stability.md#visual-contract-affecting-dependencies).
When one of them gets a major bump, dozens of snapshots may drift
simultaneously. The discipline above (`pnpm test:vrt` first → eyeball
each `*-diff.png` → only then `--update-snapshots`) **does NOT bend**
for these — bulk re-baseline without per-PNG review is exactly how a
cascade-order regression like #277's preflight bug slips into the
new baselines silently.

The procedure:

1. **Bump the dep on a dedicated branch**, separate from any other
   schatten change. Snapshot diffs are otherwise unattributable.
2. **Run `pnpm test:vrt` and let the failures land.** Expect 30+
   diffs for a Tailwind / Radix major. Don't update yet.
3. **Triage the diffs by category**, not by file:
   - *Font / antialiasing micro-shifts* — acceptable, low risk.
   - *Layout shifts* (positions, sizes, gaps) — flag and check the
     dep's CHANGELOG for the cause.
   - *Color / contrast shifts on `.st-*` rules* — **stop**. If a
     `<button>`-rooted primitive is becoming transparent, you're
     looking at #277's preflight bug again. Investigate the
     `@layer` declaration BEFORE re-baselining.
   - *Animation frames* — should never drift; if they do, the
     `addStyleTag` animation-pause snippet is broken or the
     keyframes themselves moved.
4. **Re-baseline category-by-category**, scoped with `--grep`. NOT a
   single `pnpm test:vrt:update` on the whole suite.
5. **Commit per category** (e.g. one commit per affected story file
   group), so a future bisect can locate which category's
   re-baseline introduced a hidden regression.

The category-by-category triage is what saved #277 from shipping the
preflight bug ─ the new baselines for `dist-schatten-css-*` would
have looked "almost right" without that triage. Don't shortcut it.

## Snapshot Naming

Snapshots are named `{story}-{theme}.png`:
- `all-variants-light.png`
- `all-variants-dark.png`
- `sizes-light.png`
- etc.

## CI Considerations

- Timeout is set to 10s to handle slower CI environments
- Use `networkidle` wait state for consistent font loading
- Always test both light and dark themes
