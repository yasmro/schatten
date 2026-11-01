import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Class-name connector — actual visual rules live in
 * [src/components/lv1/Combobox/Combobox.css](../components/lv1/Combobox/Combobox.css)
 * (`@layer components`). See css-api.md.
 */
export const comboboxTriggerVariants = cva('st-combobox__trigger', {
  variants: {
    size: {
      sm: 'st-combobox__trigger--sm',
      md: 'st-combobox__trigger--md',
      lg: 'st-combobox__trigger--lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type ComboboxTriggerVariants = VariantProps<typeof comboboxTriggerVariants>
