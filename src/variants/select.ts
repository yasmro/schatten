import { cva, type VariantProps } from 'class-variance-authority'

export const selectTriggerVariants = cva(
  'flex w-full cursor-pointer items-center justify-between border bg-transparent text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset disabled:cursor-not-allowed disabled:opacity-50 [&>span]:truncate',
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

export type SelectTriggerVariants = VariantProps<typeof selectTriggerVariants>
