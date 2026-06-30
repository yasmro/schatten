import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from 'react'
import { cn } from '../../../lib/utils'
import { type AvatarVariants, avatarVariants } from '../../../variants/avatar'
import './Avatar.css'

export interface AvatarProps
  extends
    Omit<ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, 'asChild' | 'children'>,
    AvatarVariants {
  /**
   * Image URL. When omitted — or when the image fails to load — the `fallback`
   * initials are shown instead.
   */
  src?: string
  /**
   * Alt text for the image, and the avatar's accessible name while the image is
   * shown. Pass the person's name for a meaningful avatar, or `""` when the
   * avatar is decorative (a visible name sits next to it).
   */
  alt?: string
  /**
   * Initials shown when there is no image, or while/after the image fails to
   * load — e.g. `"JD"`. A short string only; for an icon fallback, compose your
   * own element around `Avatar` (icon support can be added additively later).
   */
  fallback?: string
  /**
   * Size of the avatar.
   * - `sm` — 32px
   * - `md` — 40px
   * - `lg` — 48px
   * @default 'md'
   */
  size?: AvatarVariants['size']
  /**
   * Delay in milliseconds before the fallback is shown, to avoid a flash of
   * initials while a fast-loading image is still in flight. Forwarded to Radix
   * `Avatar.Fallback`.
   */
  delayMs?: number
}

/**
 * A user's profile image, falling back to initials when the image is absent or
 * fails to load — for profile headers, comment authors, and member lists.
 *
 * `Avatar` is a **flat** wrapper over the three-part `@radix-ui/react-avatar`
 * primitive (Root / Image / Fallback): you pass `src` / `alt` / `fallback` as
 * props and Schatten composes the parts internally, keeping Radix's
 * image→fallback load-status wiring intact. This is the sanctioned
 * flat-over-multi-part-Radix exception — see component-architecture §2.
 *
 * **Shape is a fixed circle** in v1 (`--radius-full`); a square variant can be
 * added additively later.
 *
 * **Accessibility.** Avatar carries no role of its own — the `<img alt>` supplies
 * the accessible name while the image is shown. When only the `fallback`
 * initials are visible (no/failed image), the initials are not a reliable name;
 * for a standalone meaningful avatar, pass `aria-label` (the full name) or place
 * a visible label next to it.
 */
export const Avatar = forwardRef<ComponentRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, size, src, alt, fallback, delayMs, ...props }, ref) => {
    // An image with no alt has no accessible name (axe `image-alt`). The
    // component's own a11y VRT can't catch it because every story passes alt,
    // so warn the developer at dev time. `alt=""` (explicit decorative) is
    // intentional and does NOT warn — only an omitted `alt` does.
    if (process.env.NODE_ENV !== 'production' && src != null && alt === undefined) {
      console.warn(
        'Avatar: `src` was provided without `alt`. Pass `alt` (e.g. the person’s name) so the image has an accessible name, or `alt=""` if the avatar is purely decorative.',
      )
    }

    return (
      <AvatarPrimitive.Root
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        {...props}
      >
        {src != null && <AvatarPrimitive.Image src={src} alt={alt} className="st-avatar__image" />}
        <AvatarPrimitive.Fallback className="st-avatar__fallback" delayMs={delayMs}>
          {fallback}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    )
  },
)

Avatar.displayName = 'Avatar'
