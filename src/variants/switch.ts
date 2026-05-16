import { cva, type VariantProps } from 'class-variance-authority'

export const switchVariants = cva(
  'peer relative inline-flex shrink-0 cursor-pointer items-center rounded-full border border-border-strong bg-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset data-[state=checked]:border-foreground data-[state=checked]:bg-foreground disabled:cursor-not-allowed disabled:bg-surface-disabled disabled:border-border-disabled disabled:data-[state=checked]:bg-surface-disabled disabled:data-[state=checked]:border-border-disabled',
  {
    variants: {
      size: {
        sm: 'h-4 w-7',
        md: 'h-5 w-9',
        lg: 'h-6 w-11',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export const switchThumbVariants = cva(
  'pointer-events-none block rounded-full bg-foreground shadow-sm transition-transform duration-200 data-[state=checked]:bg-background group-disabled:bg-foreground-disabled group-disabled:data-[state=checked]:bg-foreground-disabled',
  {
    variants: {
      size: {
        sm: 'size-3 data-[state=checked]:translate-x-[13px] data-[state=unchecked]:translate-x-[1px]',
        md: 'size-4 data-[state=checked]:translate-x-[17px] data-[state=unchecked]:translate-x-[1px]',
        lg: 'size-5 data-[state=checked]:translate-x-[21px] data-[state=unchecked]:translate-x-[1px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export type SwitchVariants = VariantProps<typeof switchVariants>
