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

## Foundation pages

`Foundation/*` stories (Color, Typography, Form States, Theme Audit, …) are
**documentation surfaces**, not component stories. They are governed by a
different set of conventions than the per-component stories above.

- **No `Playground`, no `argTypes`, no Controls.** A Foundation page renders a
  fixed reference layout — there is nothing for a user to tweak. Define the
  page as a single `render`-based story; omit `args` and `argTypes` entirely.
- **One concern per page.** Each Foundation page answers one question — "what
  colours exist" (`Foundation/Color`), "what does every form state look like"
  (`Foundation/Form States`). If a page starts answering two, split it.
- **`layout: 'fullscreen'`** in `meta.parameters` — Foundation pages lay out
  their own page chrome (heading, sections, captions) and should not be
  centred like a single component.
- **Section structure.** Open with an `<h1>` + one-paragraph intro, then a
  series of titled sections. A section is: a `SectionTitle`, a one-paragraph
  `Caption` explaining what to look at, then the visual content. Keep these
  layout primitives local to the file — they are not shared components.
- **Render real components, not re-implementations.** When a Foundation page
  illustrates how a token or state lands on a control, import the actual
  `lv1` component. Hand-rolling a look-alike `<div>` lets the page drift from
  the real components silently.
- **State the limits.** Hover / focus and other runtime pseudo-states cannot
  be pinned in a static grid — render them as live controls and add a note
  rather than faking the appearance.
- **Cross-link sibling pages.** When two Foundation pages cover the raw and
  the applied side of the same concept (Color's token swatches ↔ Form States'
  applied controls), link them with an in-Storybook anchor:
  `<a href="?path=/story/foundation-<page>--<story>">`.
- **Both Modes.** Foundation pages must read correctly under light and dark;
  the Storybook theme global is the switch. Don't hard-code Mode-specific
  colours — use semantic token classes so the global drives the page.

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
