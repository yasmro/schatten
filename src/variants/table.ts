import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Table` root — class-name concatenation only.
 *
 * Table is **presentational-only / logic-agnostic** (#152): it ships the
 * chrome and holds no sort / filter / pagination logic. It fits neither
 * Pattern A (role) nor Pattern B (tone × shape), so its axes are documented
 * **out of pattern** (like `Card` / `Spinner` / `Icon`):
 *
 * - `size` — cell density (padding + font-size), cascaded to every cell via
 *   `.st-table--{size} .st-table__cell`.
 * - `striped` / `bordered` / `hoverable` — three **orthogonal** presentational
 *   booleans. They are independent axes (a table can be both striped AND
 *   bordered), so each is its own modifier per css-api "one axis per modifier"
 *   — never a single mutually-exclusive `variant` enum.
 *
 * All four are root modifiers; the visual effects reach `tr` / `td` / `th`
 * through CSS descendant selectors in `src/components/lv1/Table/Table.css`, so
 * no prop is drilled into the sub-parts (the config-free / pass-through
 * contract of #152).
 *
 * Consumers can apply the table chrome to their own `<table>` via
 * `tableVariants({ ... })` — the `*Variants()` pattern (component-architecture
 * §3) preferred over `asChild` for new lv1s.
 *
 * Cell-level alignment (`align`) is NOT modelled here — it is a per-cell axis
 * emitted as `.st-table__cell--{align}` / `.st-table__head--{align}` directly
 * by `Table.tsx`, mirroring how Card writes its sub-element classes.
 *
 * See: .claude/rules/css-api.md, .claude/rules/component-api-conventions.md, #152.
 */
export const tableVariants = cva('st-table', {
  variants: {
    size: {
      sm: 'st-table--sm',
      md: 'st-table--md',
      lg: 'st-table--lg',
    },
    striped: { true: 'st-table--striped' },
    bordered: { true: 'st-table--bordered' },
    hoverable: { true: 'st-table--hoverable' },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type TableVariants = VariantProps<typeof tableVariants>
