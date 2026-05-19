---
name: add-vrt-spec
description: >-
  Add a VRT spec to an existing component. Follows the template in
  .claude/rules/vrt-spec-guideline.md and includes an a11y assertion via
  @axe-core/playwright. Triggers on "add a VRT spec", "write VRT for {Component}".
---

# add-vrt-spec

Generates `{Name}.vrt.spec.ts` for an existing component under
`src/components/lv1/{Name}/`. Alongside Playwright screenshot comparison, it
ships an a11y assertion via `@axe-core/playwright`.

This skill **only generates the file** — it does not capture baseline images
(`pnpm test:vrt:update`). Capturing baselines must always be done by a human,
following the "Re-baselining" procedure in
[vrt-spec-guideline.md](../../rules/vrt-spec-guideline.md).

## Required reading first

1. [.claude/rules/vrt-spec-guideline.md](../../rules/vrt-spec-guideline.md)
   — the source of truth for the template, wait logic, Portal strategy, and
   re-baselining procedure. This skill's output must always conform to it.
2. An existing `*.vrt.spec.ts` in the same directory (e.g.
   `src/components/lv1/Button/Button.vrt.spec.ts`) — the repo's current pattern.

If the rule and the skill disagree, **the rule wins** — update the skill.

## Procedure

### 1. Confirm the target component

- Get the component name `{Name}` (PascalCase) from the argument or the
  conversation.
- Confirm `src/components/lv1/{Name}/{Name}.tsx` and `{Name}.stories.tsx`
  exist. If not, stop and ask for the correct name.
- If `{Name}.vrt.spec.ts` already exists, do not overwrite it — ask the user
  whether to treat it as an incremental addition.

### 2. Parse stories.tsx

Extract the following from `{Name}.stories.tsx`:

- **`meta.title`** → `STORY_ID_PREFIX`. Storybook kebab-cases the title:
  `title: 'Components/lv1/Button'` → `components-lv1-button`.
- **Named story exports** → the `stories` array. Kebab-case the export names
  too: `AllVariants` → `all-variants` / `WithIcons` → `with-icons` /
  `ErrorState` → `error-state`.
- **Stories to exclude**: `Playground` (interactive, not a VRT target). Drop
  visually redundant stories too — keep only ones that show a "clearly
  distinct visual state" such as `AllVariants` / `Sizes` / `States` /
  `Disabled` / `ErrorState`.

### 3. Classify the component and pick a template

| Classification | Basis | Template |
|---|---|---|
| **Portal** | `Dialog` / `Tooltip` / `Toast`, or the target story captures Radix Portal content (`role="dialog"` / `tooltip` / `listbox` / `status`) in an open state | Template C (Portal) |
| **Animation** | `*.css` has `@keyframes` (e.g. `Spinner`), or it uses Tailwind `animate-*` | Template B (animation) |
| **Standard** | Anything else | Template A (standard) |

**Note on `Select`.** `Select` uses a Radix Portal, but the template depends
on whether the captured target is the dropdown in its **open** state:

- The story captures only the closed trigger (`Sizes` / `ErrorState` /
  `Disabled`, etc. — the existing
  [`Select.vrt.spec.ts`](../../../src/components/lv1/Select/Select.vrt.spec.ts)
  is this) → **Template A**. No portal content is rendered, so no waiting or
  full-page capture is needed.
- The story captures the `listbox` in an open state → **Template C**.

Classify by "does the target story render portal content?" — not by "is this
a component that uses a Portal?". For Portal components, further pick a
capture strategy from the three in the
[Portal section of vrt-spec-guideline.md](../../rules/vrt-spec-guideline.md#components-rendered-into-a-portal):

- **Strategy 1**: a story pins `open` (e.g. `Tooltip`'s `Sides`)
  → use that story and capture the full `page`.
- **Strategy 3**: an open state breaks the Docs page (e.g. `Dialog` stacks
  multiple overlays) → click a trigger inside the story to open it.
State which strategy you chose in a comment in the spec.

### 4. Check whether axe-core/playwright is installed (do this **before** generating)

Whether the spec includes a11y tests is decided here, before generation.

```sh
node -e "require.resolve('@axe-core/playwright')" 2>/dev/null \
  && echo INSTALLED || echo MISSING
```

- **If INSTALLED**: in step 5, generate the template **as-is** (the full
  version including the axe import and the a11y tests).
- **If MISSING** (`@axe-core/playwright` is planned for v0.11.0 — before
  then, this is the normal case): generate a **VRT-only** spec with the axe
  import line and the `… / a11y` test blocks removed. See step 5,
  "VRT-only generation".

> **Why a11y tests must not be included when MISSING.**
> `import AxeBuilder from '@axe-core/playwright'` is a top-level import at
> the start of the file. If generated while the package is uninstalled,
> module resolution fails during Playwright's test collection, and **the
> VRT screenshot tests in the same file are wiped out along with it** (it
> is not just the a11y tests that fail). So when uninstalled, the a11y
> portion is physically not emitted.

### 5. Generate the spec file

Use the templates below, filling in `{Name}` / `{name-kebab}` / `stories`.

- **INSTALLED**: use Templates A / B / C as-is (pair a VRT test and an a11y
  test per story × theme).
- **MISSING — VRT-only generation**: **remove** the following from each
  template before emitting:
  1. The leading `import AxeBuilder from '@axe-core/playwright'` line
  2. The entire `test(`{Name} / ${story} / ${theme} / a11y`, …)` block
  3. (Portal Template C only) confirm no wait used solely by the a11y test
     remains

  Then add this TODO comment at the top of the file:

  ```ts
  // TODO(#131): add a11y tests once @axe-core/playwright is installed
  // (planned for v0.11.0). See .claude/skills/add-vrt-spec/SKILL.md for the template.
  ```

  After generating, tell the user:
  > Generated VRT tests only, because `@axe-core/playwright` is not
  > installed. To enable a11y tests, run `pnpm add -D @axe-core/playwright`
  > and re-run this skill (or add them by hand per the TODO comment).

### 6. Do not capture baselines — give guidance instead

Once the spec is generated, **the skill stops here**. Tell the user:

> The spec is generated; there are no baseline images yet.
> Run `pnpm test:vrt -- --grep "{Name}"` → eyeball the generated
> `__snapshots__/*.png` → if they look right, commit them.
> See "Brand-new snapshots" in vrt-spec-guideline.md for details.

The skill must not run `pnpm test:vrt:update` (it would create unverified
baselines).

## Templates

Templates A / B / C below are all the **full version (INSTALLED)** — they
include the axe import and a11y tests. **When MISSING, follow step 5's
"VRT-only generation" and emit them with the axe import line and the
`… / a11y` test blocks removed.**

## Template A — standard

```ts
import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-{name-kebab}'

const stories = [
  // named exports from stories.tsx, kebab-cased (exclude Playground)
] as const

const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`{Name} / ${story} / ${theme}`, async ({ page }) => {
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

    test(`{Name} / ${story} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      const results = await new AxeBuilder({ page })
        .include('#storybook-root')
        .analyze()

      expect(results.violations).toEqual([])
    })
  }
}
```

## Template B — animation

In Template A's VRT test, pause animations right before the screenshot. The
a11y test does not need animations paused (it only inspects DOM structure).

```ts
// Inside the VRT test, just before `await expect(root).toHaveScreenshot(...)`:
await page.addStyleTag({
  content: `
    *, *::before, *::after {
      animation-play-state: paused !important;
      animation-delay: -0.0001s !important;
    }
  `,
})
```

## Template C — Portal (Dialog / Select / Tooltip / Toast)

Portal components render their content into `document.body`, outside
`#storybook-root`. Capture the full `page`, and have axe analyze the whole
`page` rather than scoping to `#storybook-root`.

### C-1. When an open-pinned story exists (Strategy 1 — e.g. Tooltip)

```ts
import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const STORY_ID_PREFIX = 'components-lv1-{name-kebab}'

// Only stories that pin the open state (stories.tsx sets `open` / `defaultOpen`)
const stories = [] as const
const themes = ['light', 'dark'] as const

function storyUrl(storyId: string, theme: string) {
  return `/iframe.html?id=${STORY_ID_PREFIX}--${storyId}&globals=theme:${theme}&viewMode=story`
}

for (const story of stories) {
  for (const theme of themes) {
    test(`{Name} / ${story} / ${theme}`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')

      const root = page.locator('#storybook-root')
      await root.waitFor({ state: 'visible', timeout: 10_000 })

      // Wait for the portal content to mount on body (replace the role).
      await page.waitForSelector('[role="{portal-role}"]', { timeout: 10_000 })

      // Pause enter/exit animations.
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-play-state: paused !important;
            animation-delay: -0.0001s !important;
            transition: none !important;
          }
        `,
      })

      await expect(page).toHaveScreenshot(`${story}-${theme}.png`, { fullPage: true })
    })

    test(`{Name} / ${story} / ${theme} / a11y`, async ({ page }) => {
      await page.goto(storyUrl(story, theme))
      await page.waitForLoadState('networkidle')
      await page.waitForSelector('[role="{portal-role}"]', { timeout: 10_000 })

      // Portal content lives directly under body, so analyze the whole page.
      const results = await new AxeBuilder({ page }).analyze()
      expect(results.violations).toEqual([])
    })
  }
}
```

### C-2. When you click a trigger to open (Strategy 3 — e.g. Dialog)

In C-1, insert a trigger click before the `waitForSelector`:

```ts
const root = page.locator('#storybook-root')
await root.waitFor({ state: 'visible', timeout: 10_000 })

// Stories default to closed so the Docs page doesn't stack multiple overlays.
// For VRT, click the trigger to open it.
await root.locator('button').first().click()

await page.waitForSelector('[role="dialog"]', { timeout: 10_000 })
```

### `{portal-role}` mapping

| Component | Role to wait for |
|---|---|
| `Dialog` | `dialog` |
| `Tooltip` | `tooltip` |
| `Select` (content expanded) | `listbox` |
| `Toast` | `status` |

## Recovery on failure

- **`pnpm test:vrt` fails for every test**: the dev server may not be
  running. `playwright.config.ts`'s `webServer` starts `pnpm dev`, but if
  the Storybook build is slow it can time out. Start `pnpm dev` separately
  and re-run.
- **Story not found (blank screenshot)**: `STORY_ID_PREFIX` or the
  kebab-casing of a story is wrong. Open `pnpm storybook` and check the
  actual `id=` in the URL.
- **`Cannot find module '@axe-core/playwright'` — whole file is a collection
  error**: an axe import remains in a spec generated without axe installed.
  Follow steps 4–5 to regenerate as VRT-only (remove the import line and the
  a11y tests), or install it with `pnpm add -D @axe-core/playwright`.
- **Baseline generation fails / the diff is not what you intended**: follow
  "Re-baselining" and "Sub-threshold drift" in vrt-spec-guideline.md. When in
  doubt, delete the PNG and re-capture with `pnpm test:vrt`.

## Completion checklist

- [ ] `{Name}.vrt.spec.ts` is generated in the same directory as the component
- [ ] `STORY_ID_PREFIX` and `stories` match stories.tsx (`Playground` excluded)
- [ ] axe **INSTALLED** → VRT test and a11y test are paired per story × theme /
      **MISSING** → VRT-only (no axe import) + a TODO comment at the top
- [ ] Portal / animation components use the matching template (`Select` was
      classified A vs C by whether the target story opens the listbox)
- [ ] Baseline capture was left to the user (the skill did not run it)
