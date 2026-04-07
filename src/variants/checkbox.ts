import { cva, type VariantProps } from 'class-variance-authority'

export const checkboxVariants = cva(
  'peer relative inline-flex shrink-0 items-center justify-center border border-border-strong bg-transparent transition-colors duration-200 not-disabled:hover:bg-surface-hover hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ring-offset disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-solid data-[state=checked]:text-solid-foreground data-[state=checked]:border-transparent not-disabled:data-[state=checked]:hover:bg-solid-hover data-[state=indeterminate]:bg-solid data-[state=indeterminate]:text-solid-foreground data-[state=indeterminate]:border-transparent not-disabled:data-[state=indeterminate]:hover:bg-solid-hover',
  {
    variants: {
      size: {
        sm: 'size-4 [&_svg]:size-3',
        md: 'size-5 [&_svg]:size-3.5',
        lg: 'size-6 [&_svg]:size-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export type CheckboxVariants = VariantProps<typeof checkboxVariants>
