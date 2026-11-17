# Storybook Guideline

## Story Structure

- **Always define a `Playground` story as the first export.** This is an `args`-based story so that users can interactively test a single component instance via the Controls panel in the Docs tab.
- **Do NOT create individual stories for each prop value** (e.g. `Default`, `Secondary`, `Outline` as separate stories).
  - Instead, group related states into a single render story (e.g. `AllVariants`, `Sizes`).
- **Group stories by prop or concern**, such as:
  - `AllVariants` — all visual variants side by side
  - `Sizes` — all size options
  - `Icons` / `IconPositions` — icon-related combinations
  - `Disabled` — disabled states across variants
- Keep the number of stories minimal and scannable. Each story should demonstrate a meaningful dimension of the component.

## argTypes & Descriptions

- Always define `argTypes` for all public props.
- Write `description` values in **English**.
- Include `table.type.summary` and `table.defaultValue.summary` for documentation clarity.

Example:

```ts
argTypes: {
  variant: {
    description: 'Visual style of the button.',
    control: 'select',
    options: ['primary', 'secondary'],
    table: {
      type: { summary: '"primary" | "secondary"' },
      defaultValue: { summary: 'primary' },
    },
  },
}
```

## TSDoc on Props (source of truth)

Every public prop on a lv1 component's `Props` interface MUST carry a TSDoc
comment (`/** ... */`). This is the **source of truth** for prop documentation —
Storybook's `argTypes.description` is a secondary surface that mirrors TSDoc
for the Docs tab. When TSDoc and `argTypes.description` disagree, **TSDoc wins**.

Why TSDoc is the master:

- IDE hover (VS Code, etc.) reads TSDoc.
- AI coding assistants (Copilot, Cursor, v0, Claude Code) consume TSDoc through
  the TypeScript language server.
- Storybook addon-docs *also* reads TSDoc via `react-docgen-typescript` when
  `argTypes.description` is absent.

### Rules

- Add TSDoc to every prop the component defines, including props redeclared
  from CVA `VariantProps` (so `@default` and per-option descriptions are
  visible on hover).
- For `variant` / `size` and other enum props, list each option's purpose
  with a bullet list inside the TSDoc.
- Add a `@default` tag matching the CVA `defaultVariants` value.
- **Do NOT** add TSDoc to inherited HTML standard props (`onClick`, `className`,
  `disabled`, etc.). Redeclaring them adds noise without adding value, since
  React's built-in types already document them.
- For Radix-derived props (e.g. `orientation` on Separator, `side` on
  Tooltip), redeclare with TSDoc when the description is non-obvious. Skip
  redeclaration when the Radix type's own comment is sufficient.

### Example

```tsx
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  /**
   * Visual style of the button.
   * - `primary` — solid fill, main CTA
   * - `secondary` — outlined, secondary actions
   * - `destructive` — for delete/remove actions (red)
   * @default 'primary'
   */
  variant?: ButtonVariants['variant']
  /**
   * Size of the button.
   * @default 'md'
   */
  size?: ButtonVariants['size']
  // ...
}
```

Then in the story:

```ts
argTypes: {
  variant: {
    description: 'Visual style of the button.',  // mirrors TSDoc, may be shorter
    control: 'select',
    options: ['primary', 'secondary', 'destructive'],
    table: {
      type: { summary: '"primary" | "secondary" | "destructive"' },
      defaultValue: { summary: 'primary' },
    },
  },
}
```

When you change a prop's description, **update TSDoc first**, then sync
`argTypes.description` if the Storybook wording needs the same change.

## Language

- All `description` text and Storybook labels should be written in **English**.
- Button labels and content inside stories should also use **English** (e.g. "Search", "Delete", not "検索", "削除").

## Render Stories

- Use `render: () => (...)` for grouped display stories.
- Use `name` property for human-readable story titles (e.g. `name: 'All Variants'`).
- Use Tailwind utility classes (`flex`, `gap-4`, `items-center`, etc.) for layout inside render stories.

## Meta Configuration

- Always include `tags: ['autodocs']` to enable auto-generated documentation.
- Set `parameters: { layout: 'centered' }` unless the component requires full-width layout.

## Hand-built docs pages (Patterns / Tokens) — render prose inline

Component stories carry `tags: ['autodocs']`, so Storybook generates an
autodocs **Docs page** for them — and that Docs page is the only surface on
which `parameters.docs.description.component` / `.story` render.

The hand-built pages under `Patterns/*` and `Tokens/*` (e.g.
[`FormStates.stories.tsx`](../../src/docs/FormStates.stories.tsx),
[`FormComposition.stories.tsx`](../../src/docs/FormComposition.stories.tsx))
are **different**: they are authored as full-bleed Canvas pages
(`parameters: { layout: 'fullscreen' }`) and **must NOT** carry
`tags: ['autodocs']`. Consequently **no Docs page is generated for them**, so
anything placed in `parameters.docs.description.*` renders **nowhere** — it is
silently dormant.

The rule for these pages:

- **Render every piece of prose inline as JSX** inside the story `render` —
  page intro, per-recipe captions, a11y notes, and code snippets. Use the
  shared [`docs-ui.tsx`](../../src/docs/docs-ui.tsx) helpers (`PageTitle` /
  `SectionTitle` / `SubsectionTitle` / `Lead` / `Note`) so the typography
  matches the other docs pages.
- **Do NOT** put narrative in `parameters.docs.description.component` /
  `.story` on a `fullscreen` / no-`autodocs` page and assume it shows. It does
  not. A note that reads "see the code in the Docs panel above" on such a page
  is a dangling reference — there is no Docs panel.
- Show code samples with an inline `<pre><code>{`…`}</code></pre>` block, not a
  `description.story` markdown fence.

If a page genuinely needs the autodocs Docs surface, add `tags: ['autodocs']`
deliberately and drop `layout: 'fullscreen'` — but for narrative recipe pages
the inline-prose Canvas pattern is preferred (the args table autodocs injects
adds noise a recipe page doesn't want).

## a11y (addon-a11y)

`@storybook/addon-a11y` runs an [axe-core](https://github.com/dequelabs/axe-core)
scan against the rendered story and surfaces violations / passes / incomplete
in the **Accessibility** panel. It is the **dev-time companion** to the
`@axe-core/playwright` VRT assertions ([#147](https://github.com/yasmro/schatten/issues/147)):
the panel lets you catch an a11y regression *while editing*, the VRT specs gate
it in CI. The two are deliberately the same axe surface — see below.

### Configuration is global, in `.storybook/preview.tsx`

The addon is registered in [`.storybook/main.ts`](../../.storybook/main.ts)
(`addons: ['@storybook/addon-docs', '@storybook/addon-a11y']`) and configured
once via `parameters.a11y` in [`.storybook/preview.tsx`](../../.storybook/preview.tsx):

```tsx
parameters: {
  a11y: {
    options: {
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
    },
  },
},
initialGlobals: {
  a11y: { manual: true },
},
```

- **`options.runOnly` MUST pin the same WCAG tag set the VRT specs use**
  (`.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])` — see
  [vrt-spec-guideline §a11y assertions](vrt-spec-guideline.md#a11y-assertions-axe--paired-with-every-vrt-test)).
  Without it, axe also runs *best-practice* rules (`region` /
  `landmark-one-main` / `page-has-heading-one`) that flag the Storybook iframe
  itself on every story — pure noise. Keeping the tag set identical means
  "green in the dev panel" maps to the same contract CI enforces.
- **Manual mode (`initialGlobals.a11y.manual: true`) is required — not
  `test: 'off'`.** addon-a11y's preview `afterEach` runs axe on every
  `viewMode=story` render unless `test === 'off'` **or** `globals.a11y.manual`
  is true (the `shouldRunEnvironmentIndependent` guard in the addon's preview
  chunk). `@axe-core/playwright` loads exactly those `iframe.html?viewMode=story`
  URLs, so an automatic run **races** our Playwright `.analyze()` in the same
  frame → intermittent `Error: Axe is already running` (worst on Toast, which
  mounts toasts in a `useEffect`, forcing a second render → a second axe run).
  The Phase-1 observe-only exit-0 shim hid this; flipping the gate to blocking
  ([#346](https://github.com/yasmro/schatten/issues/346)) surfaced it. Our a11y
  **test runner** is `@axe-core/playwright` (the CI `a11y` job), so the addon's
  automatic run is redundant.
  - **Why not `test: 'off'`.** It also stops the race, and #346 shipped it — but
    the panel then renders only "Accessibility tests are disabled for this
    story", with **no** scan button (the manager checks `parameters.test ===
    'off'` before anything else). The panel was unusable from #346 on; the old
    text here claimed a "Rerun" button still worked, which was never true —
    checked against addon-a11y 10.4.1 (the version #346 shipped with) and
    10.6.6. Manual mode stops the same automatic run and keeps a **"Run
    accessibility scan"** button in the panel.
  - **Re-check on an addon-a11y bump.** Both claims above are addon behaviour,
    not ours, and no test exercises the panel. Our side — manual mode on, no
    `test` flag, the WCAG tag set — is pinned by
    [`StorybookA11y.drift.test.ts`](../../src/docs/StorybookA11y.drift.test.ts).
    The addon side is re-checked by hand: the
    [`prepare-release`](../skills/prepare-release/SKILL.md) skill's Step 3
    detects the bump and lists the guard in the preview chunk, the panel's
    render condition in `manager.js`, and a Toast repeat run to check.
  - If `@storybook/addon-vitest` is ever wired up as a second runner, reconcile
    the two before turning manual mode off.
- **Dark mode / seasonal violations come for free.** The addon scans the
  rendered DOM *after* the global theme decorator applies `.dark` /
  `data-theme` to `<html>`, so toggling the Theme toolbar surfaces dark-mode
  contrast issues in the panel with no extra config.

### Per-story rule disable — last resort, with a reason

A known false positive or an intentionally-bare control story can disable a
rule locally:

```tsx
export const SomeStory: Story = {
  parameters: { a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } } },
}
```

Treat this like a `// biome-ignore` — **never silent**. The panel's whole
value during the Phase-1 backlog cleanup (state-token contrast
[#344](https://github.com/yasmro/schatten/issues/344), bare-control stories
[#345](https://github.com/yasmro/schatten/issues/345)) is making pre-existing
violations visible, so do not blanket-disable a rule globally. When a per-story
disable is genuinely warranted, leave a one-line comment naming the reason and,
if it tracks a backlog item, the issue.

## Tests tab — the test catalog

The addon panel has a **Tests** tab ([`.storybook/TestsPanel.tsx`](../../.storybook/TestsPanel.tsx),
registered in [`.storybook/manager.ts`](../../.storybook/manager.ts), #641).
For the component being viewed it lists the tests by the quality aspects of
[docs/quality-definition.md](../../docs/quality-definition.md), and shows
whether the open story is in the VRT roster.

- **It reads a committed catalog, it runs nothing.**
  [`scripts/generate-test-catalog.mjs`](../../scripts/generate-test-catalog.mjs)
  lists test titles (`vitest list`, `playwright test --list`) into
  `src/docs/__generated__/test-catalog.json`. After adding, renaming, or
  removing a test, run `pnpm update:test-catalog` and commit the JSON — the
  required `test` CI job runs `pnpm check:test-catalog` and fails on a stale
  catalog. The diff is the point: a reviewer reads what a PR now checks.
- **It shows stage 1 only.** "Prepared" means the required tests exist, not
  that they pass (CI) or that they are enough (review) — the three stages in
  [docs/quality-definition.md §3](../../docs/quality-definition.md).
- **Aspect names follow the document.** Rename an aspect in both places at once.
- **The manager bundle uses the classic JSX runtime.** `TestsPanel.tsx` imports
  `React` for that reason; the automatic runtime bundles a second React and
  fails at render. Manager-side changes also need a Storybook restart.

## Story title taxonomy (IA)

The Storybook sidebar's **top level is a fixed set of 7 groups** (depth ≤ 2),
confirmed in the docs IA spike [#320](https://github.com/yasmro/schatten/issues/320).
This is the **single source of truth** for docs information architecture —
README and CLAUDE.md only point here, they do not restate it.

| Top-level group | What belongs there | Examples |
|---|---|---|
| `Welcome` | Landing / overview | `Welcome` |
| `Getting Started` | Integration on-ramp — **currently empty, reserved**. The README owns the on-ramp narrative ([#112](https://github.com/yasmro/schatten/issues/112) / [#113](https://github.com/yasmro/schatten/issues/113) closed as superseded by it); the group stays in `storySort` as a reserved seat. Fill it only with *differentiated* onboarding (seasonal themes / Mode × Special live demos — see #113's closing note), never with README-duplicating Quick Start prose. | (none yet) |
| `Tokens` | Design-token vocabulary (the *values*) | `Color`, `Typography`, `Spacing`, `Elevation`, `Motion`, `Iconography` |
| `Theming` | The Mode × Special theme machinery | `Overview`, `Theme Audit`, `Customization` |
| `CSS API` | The framework-agnostic `.st-*` class contract | `Overview`, `Class Reference` |
| `Patterns` | Recipes spanning multiple lv1s + cross-cutting principles | `Form States`, `Accessibility`, `Form Composition`, `asChild`, `Layout`, `Testing`, `Data Table` |
| `Components` | The `lv1/<Name>` and `lv2/<Name>` catalogs | `lv1/Button`, `lv1/Input`, `lv2/EmptyState`, … |

### Where does a new page go?

- **A vocabulary of values** (a token scale) → `Tokens`.
- **Anything about Mode × Special** → `Theming`.
- **The `.st-*` class contract** → `CSS API`.
- **A "how to use" recipe that spans more than one component, or a
  cross-cutting principle** → `Patterns`.
- **Do not invent an 8th top-level group.** The 7-group cap exists so the
  sidebar stays at-a-glance coherent for an evaluator skimming it (#320
  persona #2). A page that fits none of the seven is a signal to discuss,
  not to add a category.

### Renaming a story title (or export) is a story-ID change

A story ID has two halves and **both** are derived from source, so a rename of
either silently breaks any hard-coded link:

- the **slug** (left of `--`) comes from `meta.title` — Storybook kebab-cases
  it: `Tokens/Color` → `tokens-color`.
- the **suffix** (right of `--`) comes from the **story export name**, not the
  story's `name:` field. `export const ButtonAsLink` → `…--button-as-link`
  regardless of any `name: '…'`. Renaming the export changes the URL; changing
  only `name:` does **not** (e.g. CSSApi's `export const Reference` keeps
  `…--reference` despite `name: 'Reference (all 18 lv1 components)'`).

When you change a `title` **or rename a story export that something links to**,
fix all of these **in the same PR**:

- the VRT spec's `STORY_ID_PREFIX` (e.g. `src/docs/CSSApi.vrt.spec.ts`)
- any deep link in `Welcome.stories.tsx` — these live in the exported
  `WELCOME_DEEP_LINKS` manifest, mechanically guarded by
  [`Welcome.drift.test.ts`](../../src/docs/Welcome.drift.test.ts) (#375): it
  reconstructs each target's real id with Storybook's own `sanitize` /
  `storyNameFromExport` and fails on a slug **or** suffix mismatch, plus on a
  `viewMode` ↔ entry-type drift (`'docs'` needs autodocs, `'story'` needs a
  Canvas export) and on a `Patterns/*` page that isn't linked. A title/export
  rename that misses the manifest turns this test red rather than shipping a
  dead link.
- the top-level group order in `options.storySort` in `.storybook/preview.tsx`
  if a top-level group name changed (it's a comparator function — update the
  `order` array inside it; the comparator also forces each component's parity
  story, story id `…--parity`, to sort last)

Story IDs are **internal** per [api-stability.md](api-stability.md) (Storybook
is not part of the published package), so an IA rename needs **no changeset and
no major bump** — but the in-repo references above are not optional. `__snapshots__/`
PNGs are named explicitly by each spec, so a prefix change does not rename them;
when the render is unchanged the VRT must pass with **zero diff** (run
`pnpm test:vrt` first, never blind-update — see
[vrt-spec-guideline.md](vrt-spec-guideline.md)).
