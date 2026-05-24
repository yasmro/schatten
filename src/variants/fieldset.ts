import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `FieldSet` component — class-name concatenation only.
 *
 * Visual rules live in `src/components/lv1/FieldSet/FieldSet.css` under
 * `@layer components`.
 *
 * - `fieldsetVariants` emits the root `st-fieldset`. No modifiers —
 *   the root just resets the native fieldset chrome and stacks
 *   legend / description / children / error vertically.
 * - `fieldsetChildrenVariants` emits the inner children-wrapper class
 *   (`st-fieldset__children [--row] [--wrap]`). `direction` and `wrap`
 *   are author config (one axis per modifier per css-api.md), so they
 *   ride CVA variants rather than attributes.
 *
 * Header-spacing (`margin-top: 1rem` on `__children` when legend or
 * description is present) is structural and lives in CSS via
 * `:has(> .st-fieldset__legend)` / `:has(> .st-fieldset__description)`
 * rather than a JSX-side boolean — Callout sweep-2 / Toast sweep-6
 * precedent for moving "DOM-shape decides layout" calls to `:has()`.
 *
 * State (`isError` / `disabled`) is reflected on the root as
 * `[data-error]` / `[data-disabled]` / `[aria-invalid]` attributes —
 * no state class flows through CVA (per css-api.md §state).
 *
 * See: .claude/rules/css-api.md, #272 sweep-7.
 */
export const fieldsetVariants = cva('st-fieldset')

export const fieldsetChildrenVariants = cva('st-fieldset__children', {
  variants: {
    direction: {
      row: 'st-fieldset__children--row',
      column: '',
    },
    wrap: {
      true: 'st-fieldset__children--wrap',
      false: '',
    },
  },
  defaultVariants: {
    direction: 'column',
    wrap: false,
  },
})

export type FieldSetVariants = VariantProps<typeof fieldsetVariants>
