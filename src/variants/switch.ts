import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Switch` component — class-name concatenation only.
 *
 * Visual rules live in
 * `src/components/lv1/Switch/Switch.css` under `@layer components`.
 * Two CVA functions because the Radix Root and Radix Thumb need distinct
 * class chains, but both axes are simple `(size)` tuples.
 *
 * The wrapper (`.st-switch-wrapper`) and check-icon (`.st-switch__check`)
 * classes are emitted by Switch.tsx directly.
 *
 * See: .claude/rules/css-api.md, #268 sweep-3.
 */
export const switchVariants = cva('st-switch', {
  variants: {
    size: {
      sm: 'st-switch--sm',
      md: 'st-switch--md',
      lg: 'st-switch--lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

/**
 * The Thumb does not need size modifiers — the parent `.st-switch--{size}
 * .st-switch__thumb` selector in Switch.css handles size + translate
 * together. CVA only emits the base class.
 *
 * Kept as a separate export to preserve the public CVA surface and not
 * force Switch.tsx to hand-write the class string.
 */
export const switchThumbVariants = cva('st-switch__thumb', {
  variants: {
    // size kept as a no-op variant so the existing
    // `switchThumbVariants({ size })` callsite continues to type-check.
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type SwitchVariants = VariantProps<typeof switchVariants>
