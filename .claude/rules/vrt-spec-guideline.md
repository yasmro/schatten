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

## Running VRT Tests

```bash
# Run all VRT tests
pnpm test:vrt

# Update snapshots
pnpm test:vrt:update

# Run specific component
pnpm test:vrt -- --grep "Button"
```

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
