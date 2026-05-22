import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Callout` component — class-name concatenation only.
 *
 * The actual visual rules live in
 * `src/components/lv1/Callout/Callout.css` under `@layer components`. CVA
 * here is the public class-string mapper: a `(variant, appearance)` tuple
 * translates to a side-by-side chain of `.st-callout--*` modifiers, with
 * the tone × appearance combination resolved by **double-class selectors**
 * in CSS (`.st-callout--error.st-callout--solid` etc.). The default
 * appearance (`subtle`) is first-class — its CSS rule uses the same
 * double-class form as `solid`, matching the sweep-1 Icon precedent where
 * default values also carry a CSS rule.
 *
 * Sub-element classes (`.st-callout__icon` / `__title` / `__body`) are
 * written by Callout.tsx directly; they are not CVA-managed.
 *
 * See: .claude/rules/css-api.md, #267 sweep-2.
 */
export const calloutVariants = cva('st-callout', {
  variants: {
    variant: {
      neutral: 'st-callout--neutral',
      success: 'st-callout--success',
      error: 'st-callout--error',
      warning: 'st-callout--warning',
      info: 'st-callout--info',
    },
    appearance: {
      subtle: 'st-callout--subtle',
      solid: 'st-callout--solid',
    },
  },
  defaultVariants: {
    variant: 'neutral',
    appearance: 'subtle',
  },
})

export type CalloutVariants = VariantProps<typeof calloutVariants>
