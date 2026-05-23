import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Textarea` component — class-name concatenation only.
 *
 * Visual rules live in
 * `src/components/lv1/Textarea/Textarea.css` under `@layer components`.
 * State (`[aria-invalid]` / `:read-only` / `:disabled`) is read directly
 * off the `<textarea>` element via attribute selectors — no class flows
 * through CVA for state.
 *
 * See: .claude/rules/css-api.md, #269 sweep-4.
 */
export const textareaVariants = cva('st-textarea', {
  variants: {
    size: {
      sm: 'st-textarea--sm',
      md: 'st-textarea--md',
      lg: 'st-textarea--lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type TextareaVariants = VariantProps<typeof textareaVariants>
