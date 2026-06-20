import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Text` component — class-name concatenation only.
 *
 * The actual typography rules live in
 * `src/components/lv1/Text/Text.css` under `@layer components`. This file
 * is the public class-string mapper: a tuple of `(variant, family,
 * leading, size, color, align, truncate)` translates to a side-by-side
 * chain of `.st-text--*` modifiers that the CSS resolves through
 * specificity (the `variant × size` compound is encoded as a double-class
 * selector in `.st-text--body.st-text--md`; `leading` is an override axis
 * raised to the same specificity — see Text.css).
 *
 * See: .claude/rules/css-api.md, #266 詳細設計 §4.2.
 */
export const textVariants = cva('st-text', {
  variants: {
    variant: {
      body: 'st-text--body',
      label: 'st-text--label',
      heading: 'st-text--heading',
    },
    family: {
      sans: 'st-text--sans',
      serif: 'st-text--serif',
    },
    leading: {
      none: 'st-text--leading-none',
      tight: 'st-text--leading-tight',
      snug: 'st-text--leading-snug',
      normal: 'st-text--leading-normal',
      relaxed: 'st-text--leading-relaxed',
      loose: 'st-text--leading-loose',
    },
    size: {
      xs: 'st-text--xs',
      sm: 'st-text--sm',
      md: 'st-text--md',
      lg: 'st-text--lg',
      xl: 'st-text--xl',
      '2xl': 'st-text--2xl',
    },
    color: {
      default: 'st-text--default',
      muted: 'st-text--muted',
      subtle: 'st-text--subtle',
      vermillion: 'st-text--vermillion',
      indigo: 'st-text--indigo',
      error: 'st-text--error',
      success: 'st-text--success',
      warning: 'st-text--warning',
      info: 'st-text--info',
      inverted: 'st-text--inverted',
      'inverted-muted': 'st-text--inverted-muted',
      'inverted-subtle': 'st-text--inverted-subtle',
      inherit: 'st-text--inherit',
    },
    align: {
      left: 'st-text--align-left',
      center: 'st-text--align-center',
      right: 'st-text--align-right',
    },
    truncate: {
      true: 'st-text--truncate',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'body',
    family: 'sans',
    size: 'md',
    color: 'default',
    truncate: false,
  },
})

export type TextVariants = VariantProps<typeof textVariants>
