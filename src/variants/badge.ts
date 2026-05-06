import { cva, type VariantProps } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border font-semibold leading-none antialiased transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-[1em]',
  {
    variants: {
      variant: {
        default: '',
        success: '',
        error: '',
        warning: '',
        info: '',
      },
      treatment: {
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
      // default — neutral state
      {
        variant: 'default',
        treatment: 'solid',
        class: 'border-transparent bg-solid text-solid-foreground',
      },
      {
        variant: 'default',
        treatment: 'subtle',
        class: 'bg-surface-hover text-foreground border-border-strong',
      },
      { variant: 'default', treatment: 'outline', class: 'text-foreground border-border-strong' },
      // success
      {
        variant: 'success',
        treatment: 'solid',
        class: 'border-transparent bg-success text-success-foreground',
      },
      {
        variant: 'success',
        treatment: 'subtle',
        class: 'bg-success-subtle text-success border-success',
      },
      { variant: 'success', treatment: 'outline', class: 'text-success border-success' },
      // error
      {
        variant: 'error',
        treatment: 'solid',
        class: 'border-transparent bg-error text-error-foreground',
      },
      {
        variant: 'error',
        treatment: 'subtle',
        class: 'bg-error-subtle text-error border-error',
      },
      { variant: 'error', treatment: 'outline', class: 'text-error border-error' },
      // warning
      {
        variant: 'warning',
        treatment: 'solid',
        class: 'border-transparent bg-warning text-warning-foreground',
      },
      {
        variant: 'warning',
        treatment: 'subtle',
        class: 'bg-warning-subtle text-warning border-warning',
      },
      { variant: 'warning', treatment: 'outline', class: 'text-warning border-warning' },
      // info
      {
        variant: 'info',
        treatment: 'solid',
        class: 'border-transparent bg-info text-info-foreground',
      },
      {
        variant: 'info',
        treatment: 'subtle',
        class: 'bg-info-subtle text-info border-info',
      },
      { variant: 'info', treatment: 'outline', class: 'text-info border-info' },
    ],
    defaultVariants: {
      variant: 'default',
      treatment: 'solid',
      size: 'md',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
