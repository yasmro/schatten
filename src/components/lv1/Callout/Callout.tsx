import { CircleAlert, CircleCheck, Info, type LucideIcon, TriangleAlert } from 'lucide-react'
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../../lib/utils'
import { type CalloutVariants, calloutVariants } from '../../../variants/callout'
import { Button } from '../Button'

export type CalloutVariant = 'default' | 'success' | 'error' | 'warning' | 'info'
export type CalloutTreatment = 'subtle' | 'solid'

const iconByVariant: Record<CalloutVariant, LucideIcon> = {
  default: Info,
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleAlert,
}

export interface CalloutProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    CalloutVariants {
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
   * Tip: when `treatment="solid"`, prefer `<Button variant="inverted">`
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
 * five state variants and two treatments of {@link Toast}, but renders in
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
      variant = 'default',
      treatment = 'subtle',
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
    const Icon = iconByVariant[variant ?? 'default']
    const buttonVariant = treatment === 'solid' ? 'inverted' : 'tertiary'
    // `description` prop wins over `children` when both are supplied so
    // that callsites can normalise on the prop form without worrying that
    // a stray `{children}` from a wrapper will silently take precedence.
    const body = description ?? children
    // Mirror Toast's two-regime alignment: title-only (or body-only) sits
    // visually centered, title+body uses top alignment so the icon stays
    // next to the heading.
    const hasMultiLine = !!(title && body)

    return (
      <div ref={ref} className={cn(calloutVariants({ variant, treatment }), className)} {...props}>
        <div className={cn('flex gap-3', hasMultiLine ? 'items-start' : 'items-center')}>
          <Icon className={cn('size-5 shrink-0', hasMultiLine && 'mt-0.5')} aria-hidden="true" />
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            {title && <div className="text-sm font-semibold leading-tight">{title}</div>}
            {body && <div className="text-sm leading-snug opacity-90">{body}</div>}
          </div>

          {action && <div className="shrink-0">{action}</div>}

          {onClose && (
            <Button
              variant={buttonVariant}
              size="sm"
              icon="X"
              aria-label="Close"
              className="shrink-0"
              onClick={onClose}
            />
          )}
        </div>
      </div>
    )
  },
)

Callout.displayName = 'Callout'
