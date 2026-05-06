import { cva, type VariantProps } from 'class-variance-authority'

export const textVariants = cva('text-foreground antialiased', {
  variants: {
    variant: {
      body: '',
      label: '',
      heading: '',
    },
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
      '2xl': '',
    },
    color: {
      default: 'text-foreground',
      muted: 'text-foreground-muted',
      accent: 'text-accent',
      error: 'text-error',
      success: 'text-success',
      warning: 'text-warning',
      info: 'text-info',
      inverted: 'text-inverse-foreground',
      inherit: 'text-inherit',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    truncate: {
      true: 'truncate',
      false: '',
    },
  },
  compoundVariants: [
    // Body
    {
      variant: 'body',
      size: 'xs',
      class:
        'text-[length:var(--text-body-xs-size)] leading-[var(--text-body-xs-leading)] font-[number:var(--text-body-xs-weight)]',
    },
    {
      variant: 'body',
      size: 'sm',
      class:
        'text-[length:var(--text-body-sm-size)] leading-[var(--text-body-sm-leading)] font-[number:var(--text-body-sm-weight)]',
    },
    {
      variant: 'body',
      size: 'md',
      class:
        'text-[length:var(--text-body-md-size)] leading-[var(--text-body-md-leading)] font-[number:var(--text-body-md-weight)]',
    },
    {
      variant: 'body',
      size: 'lg',
      class:
        'text-[length:var(--text-body-lg-size)] leading-[var(--text-body-lg-leading)] font-[number:var(--text-body-lg-weight)]',
    },
    // Label
    {
      variant: 'label',
      size: 'xs',
      class:
        'text-[length:var(--text-label-xs-size)] leading-[var(--text-label-xs-leading)] font-[number:var(--text-label-xs-weight)]',
    },
    {
      variant: 'label',
      size: 'sm',
      class:
        'text-[length:var(--text-label-sm-size)] leading-[var(--text-label-sm-leading)] font-[number:var(--text-label-sm-weight)]',
    },
    {
      variant: 'label',
      size: 'md',
      class:
        'text-[length:var(--text-label-md-size)] leading-[var(--text-label-md-leading)] font-[number:var(--text-label-md-weight)]',
    },
    {
      variant: 'label',
      size: 'lg',
      class:
        'text-[length:var(--text-label-lg-size)] leading-[var(--text-label-lg-leading)] font-[number:var(--text-label-lg-weight)]',
    },
    // Heading
    {
      variant: 'heading',
      size: 'sm',
      class:
        'text-[length:var(--text-heading-sm-size)] leading-[var(--text-heading-sm-leading)] font-[number:var(--text-heading-sm-weight)]',
    },
    {
      variant: 'heading',
      size: 'md',
      class:
        'text-[length:var(--text-heading-md-size)] leading-[var(--text-heading-md-leading)] font-[number:var(--text-heading-md-weight)]',
    },
    {
      variant: 'heading',
      size: 'lg',
      class:
        'text-[length:var(--text-heading-lg-size)] leading-[var(--text-heading-lg-leading)] font-[number:var(--text-heading-lg-weight)]',
    },
    {
      variant: 'heading',
      size: 'xl',
      class:
        'text-[length:var(--text-heading-xl-size)] leading-[var(--text-heading-xl-leading)] font-[number:var(--text-heading-xl-weight)]',
    },
    {
      variant: 'heading',
      size: '2xl',
      class:
        'text-[length:var(--text-heading-2xl-size)] leading-[var(--text-heading-2xl-leading)] font-[number:var(--text-heading-2xl-weight)]',
    },
  ],
  defaultVariants: {
    variant: 'body',
    size: 'md',
    color: 'default',
    truncate: false,
  },
})

export type TextVariants = VariantProps<typeof textVariants>
