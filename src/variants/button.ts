import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'btn inline-flex items-center justify-center gap-2 whitespace-nowrap leading-none font-medium antialiased cursor-pointer no-underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-solid text-solid-foreground not-disabled:hover:bg-solid-hover not-disabled:hover:text-solid-foreground-hover disabled:bg-surface-disabled disabled:text-foreground-disabled',
        secondary:
          'border border-border-strong bg-transparent text-foreground not-disabled:hover:bg-surface-hover disabled:border-border-disabled disabled:text-foreground-disabled',
        tertiary:
          'text-foreground not-disabled:hover:bg-surface-hover disabled:text-foreground-disabled',
        /**
         * Borderless ghost button intended for use *on top of* a saturated
         * surface (e.g. solid Toast, primary-colored banner). Inherits the
         * inverted foreground color and hover-tints with a translucent
         * overlay so it stays legible regardless of the surrounding fill.
         */
        inverted:
          'text-inverted-foreground not-disabled:hover:bg-current/10 disabled:text-foreground-disabled',
        destructive:
          'bg-destructive text-destructive-foreground not-disabled:hover:bg-destructive-hover disabled:bg-surface-disabled disabled:text-foreground-disabled',
        link: '',
      },
      size: {
        md: 'h-10 px-5 py-2 text-sm [&_svg]:size-4',
        sm: 'h-8 px-3 text-xs [&_svg]:size-3.5',
        lg: 'h-12 px-8 text-base [&_svg]:size-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
