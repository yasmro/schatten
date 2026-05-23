import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Input` component — class-name concatenation only.
 *
 * Visual rules live in
 * `src/components/lv1/Input/Input.css` under `@layer components`.
 *
 * The size modifier lives on the WRAPPER (`.st-input-wrapper--{size}`) —
 * the inner `<input>` inherits font / color from the wrapper, and the
 * icon sub-elements pick up their size via wrapper-scoped descendant
 * rules. `inputVariants` therefore exposes only the base class.
 *
 * The derived `.st-input--date` modifier (aligning the WebKit calendar
 * picker indicator to the right) is emitted by Input.tsx outside CVA —
 * see css-api.md §"CVA-external modifier emission".
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
