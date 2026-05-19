import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Icon` component.
 *
 * The `color` vocabulary mirrors `textVariants` so an icon and the text it
 * sits next to can be tinted with the same token. `color` defaults to
 * `inherit` (the icon takes the surrounding `currentColor`) so `Icon` stays
 * composition-safe inside already-colored surfaces such as a solid Button.
 */
export const iconVariants = cva('', {
  variants: {
    size: {
      sm: 'size-4', // 16px
      md: 'size-5', // 20px
      lg: 'size-6', // 24px
    },
    color: {
      inherit: 'text-inherit',
      default: 'text-foreground',
      muted: 'text-foreground-muted',
      subtle: 'text-foreground-subtle',
      vermillion: 'text-vermillion',
      indigo: 'text-indigo',
      error: 'text-error',
      success: 'text-success',
      warning: 'text-warning',
      info: 'text-info',
      inverted: 'text-inverted-foreground',
      'inverted-muted': 'text-inverted-foreground-muted',
      'inverted-subtle': 'text-inverted-foreground-subtle',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'inherit',
  },
})

export type IconVariants = VariantProps<typeof iconVariants>
