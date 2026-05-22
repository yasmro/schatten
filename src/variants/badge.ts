import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Badge` component — class-name concatenation only.
 *
 * The actual visual rules live in
 * `src/components/lv1/Badge/Badge.css` under `@layer components`. CVA
 * here is the public class-string mapper: a `(variant, appearance, size)`
 * tuple translates to a side-by-side chain of `.st-badge--*` modifiers,
 * with the tone × appearance combination resolved by **double-class
 * selectors** in CSS (`.st-badge--success.st-badge--solid` etc.). The
 * default appearance (`subtle`) is first-class — its CSS rule is written
 * via the same double-class form as `solid` and `outline`, mirroring the
 * sweep-1 Icon precedent where the default color also has a CSS rule.
 *
 * The `.st-badge--icon-only` modifier is NOT emitted by CVA — it is
 * conditionally added in `Badge.tsx` based on `!children && !!icon`,
 * because that judgment lives outside CVA's variants model. See css-api.md
 * "Adding or modifying a class" for the CVA-external modifier pattern.
 *
 * See: .claude/rules/css-api.md, #267 sweep-2.
 */
export const badgeVariants = cva('st-badge', {
  variants: {
    variant: {
      neutral: 'st-badge--neutral',
      success: 'st-badge--success',
      error: 'st-badge--error',
      warning: 'st-badge--warning',
      info: 'st-badge--info',
    },
    appearance: {
      solid: 'st-badge--solid',
      subtle: 'st-badge--subtle',
      outline: 'st-badge--outline',
    },
    size: {
      sm: 'st-badge--sm',
      md: 'st-badge--md',
      lg: 'st-badge--lg',
    },
  },
  defaultVariants: {
    variant: 'neutral',
    appearance: 'subtle',
    size: 'md',
  },
})

export type BadgeVariants = VariantProps<typeof badgeVariants>
