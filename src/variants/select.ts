import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Class-name connector — actual visual rules live in
 * [src/components/lv1/Select/Select.css](../components/lv1/Select/Select.css)
 * (`@layer components`). See css-api.md and #270 sweep-5.
 */
export const selectTriggerVariants = cva('st-select__trigger', {
  variants: {
    size: {
      sm: 'st-select__trigger--sm',
      md: 'st-select__trigger--md',
      lg: 'st-select__trigger--lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type SelectTriggerVariants = VariantProps<typeof selectTriggerVariants>
