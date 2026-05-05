import { cva, type VariantProps } from 'class-variance-authority'

export const calloutVariants = cva('relative w-full border p-4', {
  variants: {
    variant: {
      default: '',
      success: '',
      error: '',
      warning: '',
      info: '',
    },
    treatment: {
      subtle: '',
      solid: '',
    },
  },
  compoundVariants: [
    // default
    {
      variant: 'default',
      treatment: 'subtle',
      class: 'bg-surface text-foreground border-border-strong',
    },
    {
      variant: 'default',
      treatment: 'solid',
      class: 'bg-solid text-solid-foreground border-transparent',
    },
    // success
    {
      variant: 'success',
      treatment: 'subtle',
      class: 'bg-success-subtle text-success border-success',
    },
    {
      variant: 'success',
      treatment: 'solid',
      class: 'bg-success text-success-foreground border-transparent',
    },
    // error
    {
      variant: 'error',
      treatment: 'subtle',
      class: 'bg-error-subtle text-error border-error',
    },
    {
      variant: 'error',
      treatment: 'solid',
      class: 'bg-error text-error-foreground border-transparent',
    },
    // warning
    {
      variant: 'warning',
      treatment: 'subtle',
      class: 'bg-warning-subtle text-warning border-warning',
    },
    {
      variant: 'warning',
      treatment: 'solid',
      class: 'bg-warning text-warning-foreground border-transparent',
    },
    // info
    {
      variant: 'info',
      treatment: 'subtle',
      class: 'bg-info-subtle text-info border-info',
    },
    {
      variant: 'info',
      treatment: 'solid',
      class: 'bg-info text-info-foreground border-transparent',
    },
  ],
  defaultVariants: {
    variant: 'default',
    treatment: 'subtle',
  },
})

export type CalloutVariants = VariantProps<typeof calloutVariants>
