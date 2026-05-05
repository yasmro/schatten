import { cva, type VariantProps } from 'class-variance-authority'

export const toastVariants = cva(
  [
    'toast-item group pointer-events-auto relative w-full overflow-hidden border p-4 shadow-md',
    'data-[swipe=move]:transition-none',
    'data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:translate-y-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out]',
  ].join(' '),
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
  },
)

export type ToastVariants = VariantProps<typeof toastVariants>

export const toastViewportVariants = cva(
  'fixed z-toast flex max-h-screen w-full max-w-sm flex-col gap-2 p-4 outline-none',
  {
    variants: {
      position: {
        'top-left': 'top-0 left-0',
        'top-center': 'top-0 left-1/2 -translate-x-1/2',
        'top-right': 'top-0 right-0',
        'bottom-left': 'bottom-0 left-0',
        'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
        'bottom-right': 'bottom-0 right-0',
      },
    },
    defaultVariants: {
      position: 'bottom-center',
    },
  },
)

export type ToastViewportVariants = VariantProps<typeof toastViewportVariants>

export type ToastPosition = NonNullable<ToastViewportVariants['position']>
