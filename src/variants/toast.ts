import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Toast` component — class-name concatenation only.
 *
 * The actual visual rules live in `src/components/lv1/Toast/Toast.css`
 * under `@layer components`. CVA here is the public class-string mapper:
 * a `(variant, appearance)` tuple translates to a side-by-side chain of
 * `.st-toast--*` modifiers, with the tone × appearance combination
 * resolved by **double-class selectors** in CSS
 * (`.st-toast--error.st-toast--solid` etc.). The default appearance
 * (`subtle`) is first-class — its CSS rule uses the same double-class
 * form as `solid`, matching the Callout sweep-2 precedent.
 *
 * Sub-element classes (`.st-toast__icon` / `__content` / `__title` /
 * `__description`) are written by Toast.tsx directly; they are not
 * CVA-managed.
 *
 * See: .claude/rules/css-api.md, #271 sweep-6.
 */
export const toastVariants = cva('st-toast', {
  variants: {
    variant: {
      neutral: 'st-toast--neutral',
      success: 'st-toast--success',
      error: 'st-toast--error',
      warning: 'st-toast--warning',
      info: 'st-toast--info',
    },
    appearance: {
      subtle: 'st-toast--subtle',
      solid: 'st-toast--solid',
    },
  },
  defaultVariants: {
    variant: 'neutral',
    appearance: 'subtle',
  },
})

export type ToastVariants = VariantProps<typeof toastVariants>

/**
 * Viewport variants for the `Toaster` component — class-name concatenation
 * only. Maps a single `position` value to a `.st-toaster--{position}`
 * modifier on the `<ol>` Radix `Toast.Viewport` emits.
 *
 * Visual rules live in `src/components/lv1/Toast/Toast.css`.
 */
export const toastViewportVariants = cva('st-toaster', {
  variants: {
    position: {
      'top-left': 'st-toaster--top-left',
      'top-center': 'st-toaster--top-center',
      'top-right': 'st-toaster--top-right',
      'bottom-left': 'st-toaster--bottom-left',
      'bottom-center': 'st-toaster--bottom-center',
      'bottom-right': 'st-toaster--bottom-right',
    },
  },
  defaultVariants: {
    position: 'bottom-center',
  },
})

export type ToastViewportVariants = VariantProps<typeof toastViewportVariants>

export type ToastPosition = NonNullable<ToastViewportVariants['position']>
