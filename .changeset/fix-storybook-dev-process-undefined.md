---
'@yasmro/schatten': patch
---

Fix `pnpm dev` failing to render any Storybook story with `ReferenceError: process is not defined`.

`.storybook/preview.tsx` read `process.env.STORYBOOK_CHANNEL` at module scope, but the file is bundled into the browser preview iframe where `process` is not a global. The bare reference threw on module evaluation and left `#storybook-root` empty. It now reads `import.meta.env.STORYBOOK_CHANNEL`, which Storybook's Vite builder populates for `STORYBOOK_`-prefixed vars in both the dev server and the production build. The published `@yasmro/schatten` package is unchanged — this is a tooling-only fix.
