import { CircleAlert, CircleCheck, Info, type LucideIcon, TriangleAlert, X } from 'lucide-react'
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../../lib/utils'
import { type CalloutVariants, calloutVariants } from '../../../variants/callout'
import { Button } from '../Button'
import './Callout.css'

export type CalloutVariant = 'neutral' | 'success' | 'error' | 'warning' | 'info'
export type CalloutAppearance = 'subtle' | 'solid'

const iconByVariant: Record<CalloutVariant, LucideIcon> = {
  neutral: Info,
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleAlert,
}

export interface CalloutProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    CalloutVariants {
  /**
   * State variant. Drives the icon, color treatment, and accent.
   * Shares the state semantic tokens with `Toast` and `Badge`.
   * @default 'neutral'
   */
  variant?: CalloutVariants['variant']
  /**
   * Visual appearance — `subtle` for soft tinted background, `solid` for filled.
   * Value names align 1:1 with the underlying token suffix.
   * @default 'subtle'
   */
  appearance?: CalloutVariants['appearance']
  /** Optional heading rendered in bold above the body content. */
  title?: ReactNode
  /**
   * Body content. Use this prop form when the body is plain text — it
   * matches `Toast`'s API shape, so callsites that already build
   * `{ title, description }` objects (e.g. for shared notification
   * factories) can hand them straight to Callout. For rich JSX content
   * pass via `children` instead.
   *
   * If both `description` and `children` are provided, `description`
   * wins.
   */
  description?: ReactNode
  /**
   * Free-form action area shown at the right of the callout (e.g. a Button
   * or link). Use a ReactNode rather than a `{label, onClick}` object so
   * complex action UIs are possible — Callouts often persist on screen and
   * may need richer affordances than Toast actions.
   *
   * Tip: when `appearance="solid"`, prefer `<Button variant="inverted">`
   * for action buttons so they remain legible against the saturated
   * background.
   */
  action?: ReactNode
  /**
   * When provided, a close (X) button is rendered at the top-right and
   * invokes this callback on click. Omit to render a non-dismissible
   * callout.
   */
  onClose?: () => void
}

/**
 * Inline status block — used to highlight contextual information within a
 * page (form notes, banner-style notices, content callouts). Mirrors the
 * variants and two appearances of {@link Toast}, but renders in
 * place rather than overlaying the viewport.
 *
 * Body content can be passed either as `children` (for rich JSX) or as
 * the `description` prop (matches Toast's API for plain-text bodies).
 *
 * The component does not assign an ARIA role by default. For dynamic
 * callouts that should be announced when they appear, pass
 * `role="status"` (polite) or `role="alert"` (assertive). For static
 * informational callouts no role is needed.
 */
export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      variant = 'neutral',
      appearance = 'subtle',
      title,
      description,
      action,
      onClose,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Icon = iconByVariant[variant ?? 'neutral']
    const buttonVariant = appearance === 'solid' ? 'inverted' : 'tertiary'
    // `description` prop wins over `children` when both are supplied so
    // that callsites can normalise on the prop form without worrying that
    // a stray `{children}` from a wrapper will silently take precedence.
    const body = description ?? children
    // Layout-mode signal kept for accessibility wiring only — the visual
    // alignment (icon-next-to-title vs icon-centered) is driven entirely
    // by the `:has(.st-callout__title):has(.st-callout__body)` selector
    // in Callout.css, so this component carries no flex/items utility
    // classes anymore.

    return (
      <div ref={ref} className={cn(calloutVariants({ variant, appearance }), className)} {...props}>
        <Icon className="st-callout__icon" aria-hidden="true" />
        <div className="st-callout__content">
          {title && <div className="st-callout__title">{title}</div>}
          {body && <div className="st-callout__body">{body}</div>}
        </div>

        {action && <div className="st-callout__action">{action}</div>}

        {onClose && (
          <Button
            variant={buttonVariant}
            size="sm"
            icon={X}
            aria-label="Close"
            className="st-callout__action"
            onClick={onClose}
          />
        )}
      </div>
    )
  },
)

Callout.displayName = 'Callout'
