import { cva, type VariantProps } from 'class-variance-authority'

/**
 * Variants for the `Avatar` component — class-name concatenation only.
 *
 * Single axis: `size` (sm/md/lg → 32/40/48px). The actual visual rules live in
 * `src/components/lv1/Avatar/Avatar.css` under `@layer components`; CVA here is
 * the public class-string mapper. Avatar has no `variant`/`appearance` axis — it
 * is an out-of-pattern display primitive (like `Icon` / `Skeleton` / `Card`),
 * see the per-component matrix in component-api-conventions.md.
 *
 * The `size` modifier lives on the root only; the fallback's font-size tracks it
 * through a CSS descendant selector (`.st-avatar--sm .st-avatar__fallback`), so
 * the sub-elements carry no size class of their own.
 *
 * See: .claude/rules/css-api.md, #36.
 */
export const avatarVariants = cva('st-avatar', {
  variants: {
    size: {
      sm: 'st-avatar--sm', // 32px
      md: 'st-avatar--md', // 40px
      lg: 'st-avatar--lg', // 48px
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type AvatarVariants = VariantProps<typeof avatarVariants>
