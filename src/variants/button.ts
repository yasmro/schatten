import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Button` component — class-name concatenation only.
 *
 * The actual visual rules live in
 * `src/components/lv1/Button/Button.css` under `@layer components`. CVA
 * here is the public class-string mapper: a `(variant, size)` tuple
 * translates to a side-by-side chain of `.st-btn--*` modifiers.
 *
 * Pattern A (single-axis role) — `variant` carries the role + colour and
 * `size` carries the dimensions. The `link` variant emits the same `--sm/md/lg`
 * size modifier as the others; the CSS rule for `.st-btn--link` resets the
 * non-applicable axes (height / padding) so only font-size matters for
 * link sizing. The `--icon-only` modifier is added outside CVA by
 * `Button.tsx` (see Badge precedent — #267 sweep-2).
 *
 * See: .claude/rules/css-api.md, #268 sweep-3.
 */
export const buttonVariants = cva('st-btn', {
  variants: {
    variant: {
      primary: 'st-btn--primary',
      secondary: 'st-btn--secondary',
      tertiary: 'st-btn--tertiary',
      inverted: 'st-btn--inverted',
      destructive: 'st-btn--destructive',
      link: 'st-btn--link',
    },
    size: {
      sm: 'st-btn--sm',
      md: 'st-btn--md',
      lg: 'st-btn--lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>
