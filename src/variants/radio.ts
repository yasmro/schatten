import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Radio` component — class-name concatenation only.
 *
 * Visual rules live in
 * `src/components/lv1/Radio/Radio.css` under `@layer components`. The
 * group root (`.st-radio-group`), the per-item wrapper
 * (`.st-radio-wrapper` + `.st-radio-wrapper__label`), and the indicator
 * sub-elements (`.st-radio__indicator` / `.st-radio__dot`) are emitted
 * by Radio.tsx directly — only the block + size axes flow through CVA.
 *
 * See: .claude/rules/css-api.md, #269 sweep-4.
 */
export const radioVariants = cva('st-radio', {
  variants: {
    size: {
      sm: 'st-radio--sm',
      md: 'st-radio--md',
      lg: 'st-radio--lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type RadioVariants = VariantProps<typeof radioVariants>
