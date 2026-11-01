import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `EmptyState` lv2 component — class-name concatenation only.
 *
 * Two **out-of-pattern** single axes (component-api-conventions): `size` scales
 * the whole composition, and `align` places the column. There is no tone — an
 * empty state is not a state surface, so neither Pattern A nor Pattern B fits.
 *
 * Deliberately NOT re-exported from `src/variants/index.ts`. The `/variants`
 * entry is the way into Schatten for non-React consumers, and rendering an
 * lv2's classes without its React component is outside the contract
 * (lv2-composition-guideline §5.0). Exporting it later is additive (`minor`).
 *
 * The actual rules live in `src/components/lv2/EmptyState/EmptyState.css`
 * under `@layer components`.
 *
 * See: .claude/rules/lv2-composition-guideline.md, #125.
 */
export const emptyStateVariants = cva('st-empty-state', {
  variants: {
    size: {
      sm: 'st-empty-state--sm',
      md: 'st-empty-state--md',
      lg: 'st-empty-state--lg',
    },
    align: {
      center: 'st-empty-state--center',
      start: 'st-empty-state--start',
    },
  },
  defaultVariants: {
    size: 'md',
    align: 'center',
  },
})

export type EmptyStateVariants = VariantProps<typeof emptyStateVariants>
