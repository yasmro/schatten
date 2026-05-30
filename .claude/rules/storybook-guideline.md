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
a11y: {
  options: {
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
  },
  test: 'todo',
}
```

- **`options.runOnly` MUST pin the same WCAG tag set the VRT specs use**
  (`.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])` — see
  [vrt-spec-guideline §a11y assertions](vrt-spec-guideline.md#a11y-assertions-axe--paired-with-every-vrt-test)).
  Without it, axe also runs *best-practice* rules (`region` /
  `landmark-one-main` / `page-has-heading-one`) that flag the Storybook iframe
  itself on every story — pure noise. Keeping the tag set identical means
  "green in the dev panel" maps to the same contract CI enforces.
- **`test: 'todo'`** keeps the addon observe-only. The `test` flag only bites
  through the test addon (`@storybook/addon-vitest`), which is not wired up
  today, so it is inert — but it documents the Phase-1 stance. Promotion to
  `'error'` rides with the CI blocking-gate work
  ([#346](https://github.com/yasmro/schatten/issues/346)).
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

## Story title taxonomy (IA)

The Storybook sidebar's **top level is a fixed set of 7 groups** (depth ≤ 2),
confirmed in the docs IA spike [#320](https://github.com/yasmro/schatten/issues/320).
This is the **single source of truth** for docs information architecture —
README and CLAUDE.md only point here, they do not restate it.

| Top-level group | What belongs there | Examples |
|---|---|---|
| `Welcome` | Landing / overview | `Welcome` |
| `Getting Started` | Integration on-ramp | `Quick Start`, `Installation` |
| `Tokens` | Design-token vocabulary (the *values*) | `Color`, `Typography`, `Spacing`, `Elevation`, `Motion`, `Iconography` |
| `Theming` | The Mode × Special theme machinery | `Overview`, `Theme Audit`, `Customization` |
| `CSS API` | The framework-agnostic `.st-*` class contract | `Overview`, `Class Reference` |
| `Patterns` | Recipes spanning multiple lv1s + cross-cutting principles | `Form States`, `Accessibility`, `Form Composition`, `asChild`, `Layout`, `Testing` |
| `Components` | The `lv1/<Name>` catalog | `lv1/Button`, `lv1/Input`, … |

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

### Renaming a story title is a story-ID change

A story's `title` determines its story ID (URL slug — Storybook kebab-cases
it: `Tokens/Color` → `tokens-color`). Renaming a title therefore breaks every
place that hard-codes the old slug. When you change a `title`, fix all of
these **in the same PR**:

- the VRT spec's `STORY_ID_PREFIX` (e.g. `src/docs/CSSApi.vrt.spec.ts`)
- any deep link in `Welcome.stories.tsx` (`navigateToStory(...)` + `href`)
- `options.storySort.order` in `.storybook/preview.tsx` if a top-level group
  name changed

Story IDs are **internal** per [api-stability.md](api-stability.md) (Storybook
is not part of the published package), so an IA rename needs **no changeset and
no major bump** — but the in-repo references above are not optional. `__snapshots__/`
PNGs are named explicitly by each spec, so a prefix change does not rename them;
when the render is unchanged the VRT must pass with **zero diff** (run
`pnpm test:vrt` first, never blind-update — see
[vrt-spec-guideline.md](vrt-spec-guideline.md)).
