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
