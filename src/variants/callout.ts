import { cva, type VariantProps } from 'class-variance-authority'

export const calloutVariants = cva('relative w-full border p-4', {
  variants: {
    variant: {
      neutral: '',
      accent: '',
      success: '',
      error: '',
      warning: '',
      info: '',
    },
    appearance: {
      subtle: '',
      solid: '',
    },
  },
  compoundVariants: [
    // neutral — non-state baseline. Solid is intentionally absent: the
    // brand-accent `bg-solid` token is owned by `accent`.
    {
      variant: 'neutral',
      appearance: 'subtle',
      class: 'bg-surface text-foreground border-border-strong',
    },
    // accent — brand-accent surface. Only solid is defined today.
    {
      variant: 'accent',
      appearance: 'solid',
      class: 'bg-solid text-solid-foreground border-transparent',
    },
    // success
    {
      variant: 'success',
      appearance: 'subtle',
      class: 'bg-success-subtle text-success border-success',
    },
    {
      variant: 'success',
      appearance: 'solid',
      class: 'bg-success text-success-foreground border-transparent',
    },
    // error
    {
      variant: 'error',
      appearance: 'subtle',
      class: 'bg-error-subtle text-error border-error',
    },
    {
      variant: 'error',
      appearance: 'solid',
      class: 'bg-error text-error-foreground border-transparent',
    },
    // warning
    {
      variant: 'warning',
      appearance: 'subtle',
      class: 'bg-warning-subtle text-warning border-warning',
    },
    {
      variant: 'warning',
      appearance: 'solid',
      class: 'bg-warning text-warning-foreground border-transparent',
    },
    // info
    {
      variant: 'info',
      appearance: 'subtle',
      class: 'bg-info-subtle text-info border-info',
    },
    {
      variant: 'info',
      appearance: 'solid',
      class: 'bg-info text-info-foreground border-transparent',
    },
  ],
  defaultVariants: {
    variant: 'neutral',
    appearance: 'subtle',
  },
})

export type CalloutVariants = VariantProps<typeof calloutVariants>
