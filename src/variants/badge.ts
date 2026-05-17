import { cva, type VariantProps } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border font-semibold leading-none antialiased transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-[1em]',
  {
    variants: {
      variant: {
        neutral: '',
        success: '',
        error: '',
        warning: '',
        info: '',
      },
      appearance: {
        solid: '',
        subtle: '',
        outline: '',
      },
      size: {
        sm: 'px-2 py-1 text-[10px] gap-1',
        md: 'px-2.5 py-1 text-xs gap-1.5',
        lg: 'px-3 py-1.5 text-sm gap-1.5',
      },
    },
    compoundVariants: [
      // neutral — non-state baseline.
      // `solid` uses `--color-foreground-muted` + inverted foreground for
      // a muted-but-emphatic surface. This is the only "non-state filled
      // chip" — there is no separate brand-accent variant in Pattern B.
      {
        variant: 'neutral',
        appearance: 'solid',
        class: 'bg-foreground-muted text-inverted-foreground border-transparent',
      },
      {
        variant: 'neutral',
        appearance: 'subtle',
        class: 'bg-surface-hover text-foreground border-border-strong',
      },
      { variant: 'neutral', appearance: 'outline', class: 'text-foreground border-border-strong' },
      // success
      {
        variant: 'success',
        appearance: 'solid',
        class: 'border-transparent bg-success text-success-foreground',
      },
      {
        variant: 'success',
        appearance: 'subtle',
        class: 'bg-success-subtle text-success border-success',
      },
      { variant: 'success', appearance: 'outline', class: 'text-success border-success' },
      // error
      {
        variant: 'error',
        appearance: 'solid',
        class: 'border-transparent bg-error text-error-foreground',
      },
      {
        variant: 'error',
        appearance: 'subtle',
        class: 'bg-error-subtle text-error border-error',
      },
      { variant: 'error', appearance: 'outline', class: 'text-error border-error' },
      // warning
      {
        variant: 'warning',
        appearance: 'solid',
        class: 'border-transparent bg-warning text-warning-foreground',
      },
      {
        variant: 'warning',
        appearance: 'subtle',
        class: 'bg-warning-subtle text-warning border-warning',
      },
      { variant: 'warning', appearance: 'outline', class: 'text-warning border-warning' },
      // info
      {
        variant: 'info',
        appearance: 'solid',
        class: 'border-transparent bg-info text-info-foreground',
      },
      {
        variant: 'info',
        appearance: 'subtle',
        class: 'bg-info-subtle text-info border-info',
      },
      { variant: 'info', appearance: 'outline', class: 'text-info border-info' },
    ],
    defaultVariants: {
      variant: 'neutral',
      appearance: 'subtle',
      size: 'md',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
