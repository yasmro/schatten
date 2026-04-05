import { cva, type VariantProps } from 'class-variance-authority'

export const inputWrapperVariants = cva(
  'flex w-full items-center border bg-transparent text-foreground transition-colors duration-200 has-focus-visible:outline-none has-focus-visible:ring-2 has-focus-visible:ring-ring has-focus-visible:ring-offset-2 has-focus-visible:ring-offset-ring-offset',
  {
    variants: {
      size: {
        sm: 'h-8 px-3 text-xs gap-1.5',
        md: 'h-10 px-4 text-sm gap-2',
        lg: 'h-12 px-5 text-base gap-2.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export const inputVariants = cva(
  'flex-1 min-w-0 bg-transparent text-foreground outline-none placeholder:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium',
)

export type InputVariants = VariantProps<typeof inputWrapperVariants>
