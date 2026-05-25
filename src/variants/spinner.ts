import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Spinner` component — class-name concatenation only.
 *
 * The actual layout / color / size rules live in
 * `src/components/lv1/Spinner/Spinner.css` under `@layer components`. CVA
 * here is the public class-string mapper: a `(variant, size)` tuple
 * translates to a side-by-side chain of `.st-spinner--*` modifiers.
 *
 * Spinner is out of Pattern A / B — `default` / `inverted` is a Spinner-
 * specific palette dial that mirrors how Button decides its inner spinner
 * color (inverted on saturated surfaces). See
 * `component-api-conventions.md` for the rationale.
 *
 * See: .claude/rules/css-api.md, #267 sweep-2.
 */
export const spinnerVariants = cva('st-spinner', {
  variants: {
    variant: {
      default: 'st-spinner--default',
      inverted: 'st-spinner--inverted',
    },
    size: {
      sm: 'st-spinner--sm',
      md: 'st-spinner--md',
      lg: 'st-spinner--lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export type SpinnerVariants = VariantProps<typeof spinnerVariants>
