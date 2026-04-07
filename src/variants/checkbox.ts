import { cva, type VariantProps } from 'class-variance-authority'

export const checkboxVariants = cva(
  'peer relative inline-flex shrink-0 items-center justify-center border border-border-strong bg-transparent transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'size-4',
        md: 'size-5',
        lg: 'size-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export type CheckboxVariants = VariantProps<typeof checkboxVariants>
