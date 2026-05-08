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
import { expect, test } from '../../../test/vrt'

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

## Why specs import from `src/test/vrt`

The shared fixture at `src/test/vrt.ts` aborts requests to
`fonts.googleapis.com` / `fonts.gstatic.com` so VRT runs do not depend on
external network access. This avoids two failure modes:

- **CI hangs**: Google Fonts CSS is loaded via `<link rel="stylesheet">` in
  `preview-head.html`, which is parser-blocking. When the fonts CDN is slow
  or unreachable from a CI runner, deferred module scripts (Storybook's
  iframe bundle) never execute and `#storybook-root` stays hidden.
- **Snapshot drift**: snapshots taken with Google Fonts loaded shift when
  the CDN serves different glyphs over time.

Snapshots are therefore captured with system fallback fonts, which makes
them deterministic across machines and CI environments. Always use the
shared fixture; do not import from `@playwright/test` directly.
