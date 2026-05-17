import { cva, type VariantProps } from 'class-variance-authority'

export const calloutVariants = cva('relative w-full border p-4', {
  variants: {
    variant: {
      neutral: '',
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
    // neutral — non-state baseline. 1:1 successor of legacy `default`
    // (renamed in v0.7.0, no visual change). `solid` reuses the
    // `--color-solid` token that also powers Button primary.
    {
      variant: 'neutral',
      appearance: 'solid',
      class: 'bg-solid text-solid-foreground border-transparent',
    },
    {
      variant: 'neutral',
      appearance: 'subtle',
      class: 'bg-surface text-foreground border-border-strong',
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
