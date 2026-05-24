import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Field` component — class-name concatenation only.
 *
 * Visual rules live in `src/components/lv1/Field/Field.css` under
 * `@layer components`.
 *
 * Root emits `st-field`. The flex modifiers
 * (`--grow` / `--grow-0` / `--shrink` / `--shrink-0`) are derived from
 * the `flexGrow` / `flexShrink` props and emitted outside CVA in
 * Field.tsx via `cn()` — same precedent as Badge's `--icon-only`
 * (sweep-2) and Input's `--date` (sweep-4). `flexBasis` stays inline
 * `style` because it accepts arbitrary CSS values that cannot live in
 * a finite CVA variants tuple.
 *
 * State (`isError` / `disabled`) is reflected on the root as
 * `[data-error]` / `[data-disabled]` attributes — no state class flows
 * through CVA (per css-api.md §state). The `[data-error]` attribute is
 * an observability hook for consumers that want to attach external
 * styling to the FieldSet → Field collapse chain; the Field root itself
 * does not change visually based on it (error visuals live on the
 * inner form input via `.st-input-wrapper:has(.st-input[aria-invalid])`).
 *
 * See: .claude/rules/css-api.md, #272 sweep-7.
 */
export const fieldVariants = cva('st-field')
export type FieldVariants = VariantProps<typeof fieldVariants>
