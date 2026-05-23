import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Input` component — class-name concatenation only.
 *
 * Visual rules live in
 * `src/components/lv1/Input/Input.css` under `@layer components`.
 *
 * - `inputWrapperVariants` emits the outer wrapper class chain
 *   (`st-input-wrapper [st-input-wrapper--{size}]`). Size lives on the
 *   wrapper so the inner `<input>` can inherit `font` from it
 *   (Q-S4-6).
 * - `inputVariants` emits the inner block class (`st-input`). Size is
 *   not part of this axis — the wrapper carries it. The `--date`
 *   derived modifier is appended outside CVA in Input.tsx (Q-S4-4,
 *   matching the Badge `--icon-only` precedent from sweep-2).
 *
 * State (`isError` / `readOnly` / `disabled`) is read directly off the
 * inner `<input>`'s native attributes by
 * `.st-input-wrapper:has(.st-input[...])` selectors — no state class
 * flows through CVA.
 *
 * See: .claude/rules/css-api.md, #269 sweep-4.
 */
export const inputWrapperVariants = cva('st-input-wrapper', {
  variants: {
    size: {
      sm: 'st-input-wrapper--sm',
      md: 'st-input-wrapper--md',
      lg: 'st-input-wrapper--lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const inputVariants = cva('st-input')

export type InputVariants = VariantProps<typeof inputWrapperVariants>
