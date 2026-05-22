import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Checkbox` component — class-name concatenation only.
 *
 * Visual rules live in
 * `src/components/lv1/Checkbox/Checkbox.css` under `@layer components`.
 * The wrapper class (`.st-checkbox-wrapper`) and the indicator class
 * (`.st-checkbox__indicator`) are emitted by Checkbox.tsx directly — only
 * the block + size axes flow through CVA.
 *
 * See: .claude/rules/css-api.md, #268 sweep-3.
 */
export const checkboxVariants = cva('st-checkbox', {
  variants: {
    size: {
      sm: 'st-checkbox--sm',
      md: 'st-checkbox--md',
      lg: 'st-checkbox--lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type CheckboxVariants = VariantProps<typeof checkboxVariants>
