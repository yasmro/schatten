import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

// `STORYBOOK_CHANNEL` is injected by `.github/workflows/deploy-storybook.yml`:
// the `develop` build (published at /schatten/next/) sets it to `next`, the
// `main` build leaves it `stable`. Storybook exposes `STORYBOOK_`-prefixed env
// vars to the manager bundle too, so this is `undefined` in local dev / VRT.
// Mirrors the same check in `.storybook/preview.tsx`.
const isNextChannel = process.env.STORYBOOK_CHANNEL === 'next'

// On the develop (/next/) build, brand the sidebar header with a persistent
// "unreleased" badge. Unlike the preview-canvas banner this survives every
// story / docs navigation and never overlaps itself. The brand links back to
// the canonical (main) Storybook so a viewer can leave the unreleased surface.
if (isNextChannel) {
  addons.setConfig({
    theme: create({
      base: 'light',
      brandTitle:
        'Schatten <span style="margin-left:6px;padding:1px 6px;border-radius:4px;background:#92400e;color:#fff;font-size:10px;font-weight:700;vertical-align:middle">未リリース · develop</span>',
      brandUrl: 'https://yasmro.github.io/schatten/',
      brandTarget: '_blank',
    }),
  })
}
