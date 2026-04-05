import { cva, type VariantProps } from 'class-variance-authority'

export const textareaVariants = cva(
  'w-full border bg-transparent text-foreground transition-colors duration-200 placeholder:text-foreground-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'px-3 py-2 text-xs',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-5 py-3 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export type TextareaVariants = VariantProps<typeof textareaVariants>
