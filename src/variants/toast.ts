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
 * `__description` / `__close`) are mapped onto Sonner's slots via the
 * `<Toaster>` `classNames` prop; they are not CVA-managed.
 *
 * Since #318 the per-toast tone × shape chain (plus the derived
 * `.st-toast--loading` modifier) is injected per call by the `toast()`
 * facade in `Toast.tsx`.
 *
 * See: .claude/rules/css-api.md, #271 sweep-6, #318.
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
 * Where the toast viewport sits on screen. Maps 1:1 to Sonner's `position`
 * prop (see `Toaster.tsx`). Since #318 the viewport is positioned by Sonner,
 * not by a `.st-toaster--*` CSS class — this is a plain union, no longer
 * derived from a CVA.
 */
export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
