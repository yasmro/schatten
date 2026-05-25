import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Icon` component — class-name concatenation only.
 *
 * The actual size/color rules live in
 * `src/components/lv1/Icon/Icon.css` under `@layer components`. The
 * `color` vocabulary mirrors `textVariants` so an icon and the text it
 * sits next to can be tinted with the same token. `color` defaults to
 * `inherit` (the icon takes the surrounding `currentColor`) so `Icon`
 * stays composition-safe inside already-colored surfaces such as a solid
 * Button.
 *
 * See: .claude/rules/css-api.md, #266 詳細設計 §4.3.
 */
export const iconVariants = cva('st-icon', {
  variants: {
    size: {
      sm: 'st-icon--sm', // 16px
      md: 'st-icon--md', // 20px
      lg: 'st-icon--lg', // 24px
    },
    color: {
      inherit: 'st-icon--inherit',
      default: 'st-icon--default',
      muted: 'st-icon--muted',
      subtle: 'st-icon--subtle',
      vermillion: 'st-icon--vermillion',
      indigo: 'st-icon--indigo',
      error: 'st-icon--error',
      success: 'st-icon--success',
      warning: 'st-icon--warning',
      info: 'st-icon--info',
      inverted: 'st-icon--inverted',
      'inverted-muted': 'st-icon--inverted-muted',
      'inverted-subtle': 'st-icon--inverted-subtle',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'inherit',
  },
})

export type IconVariants = VariantProps<typeof iconVariants>
