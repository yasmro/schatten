import type { LucideIcon } from 'lucide-react'
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../../lib/utils'
import { type EmptyStateVariants, emptyStateVariants } from '../../../variants/empty-state'
import { Icon } from '../../lv1/Icon'
import { Text, type TextProps } from '../../lv1/Text'
import './EmptyState.css'

type EmptyStateSize = NonNullable<EmptyStateVariants['size']>

// The type scale each `size` freezes. `Text` owns the semantic element and the
// typography; EmptyState only picks the step.
const TITLE_SIZE: Record<EmptyStateSize, TextProps['size']> = { sm: 'sm', md: 'md', lg: 'lg' }
const DESCRIPTION_SIZE: Record<EmptyStateSize, TextProps['size']> = { sm: 'sm', md: 'sm', lg: 'md' }

export interface EmptyStateProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'children'>,
    EmptyStateVariants {
  /**
   * Decorative Lucide icon shown above the title. Pass the component itself
   * (`import { Inbox } from 'lucide-react'`). It is rendered `aria-hidden` —
   * the title carries the meaning. Omit for a text-only empty state.
   */
  icon?: LucideIcon
  /**
   * Heading text. Rendered as a heading through `Text`; pick the level with
   * `headingLevel`.
   */
  title: ReactNode
  /**
   * Supporting copy below the title. Rendered inside a `<p>`, so pass inline
   * content only (no block elements).
   */
  description?: ReactNode
  /**
   * The next step the user can take — usually one `Button`, or several wrapped
   * in a fragment (`<><Button /><Button /></>`). Items sit in a wrapping row.
   */
  action?: ReactNode
  /**
   * Heading level of the title. The consumer decides the page outline;
   * EmptyState does not.
   * @default 2
   */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6
  /**
   * Overall scale — icon size, type size and spacing.
   * - `sm` — inside a card or a table body
   * - `md` — a panel or a section
   * - `lg` — a whole page (first run, zero data)
   * @default 'md'
   */
  size?: EmptyStateVariants['size']
  /**
   * Horizontal placement of the content.
   * - `center` — a centered column (the common empty state)
   * - `start` — aligned to the inline start, for left-aligned layouts
   * @default 'center'
   */
  align?: EmptyStateVariants['align']
}

/**
 * The "nothing here yet" pattern: icon, title, description and a next step in
 * one frozen layout.
 *
 * Ships role-less, like `Callout`: a static empty state needs no role. When it
 * appears at runtime (e.g. search results emptying out) and that should be
 * announced, wrap it in an element that carries `role="status"` and stays
 * mounted: a live region announces changes to its content, so one that mounts
 * together with its content is usually not read out. A `role` on EmptyState
 * itself only works when EmptyState is already mounted before its text changes.
 *
 * lv2 — React only. Without React, compose the `.st-icon` / `.st-text` /
 * `.st-btn` classes directly.
 */
export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    { icon, title, description, action, headingLevel = 2, size, align, className, ...props },
    ref,
  ) => {
    const resolvedSize = size ?? 'md'

    return (
      <div ref={ref} className={cn(emptyStateVariants({ size, align }), className)} {...props}>
        {icon ? <Icon icon={icon} size="lg" color="muted" /> : null}
        <Text as={`h${headingLevel}`} variant="heading" size={TITLE_SIZE[resolvedSize]}>
          {title}
        </Text>
        {description ? (
          <Text as="p" variant="body" size={DESCRIPTION_SIZE[resolvedSize]} color="muted">
            {description}
          </Text>
        ) : null}
        {action ? <div>{action}</div> : null}
      </div>
    )
  },
)

EmptyState.displayName = 'EmptyState'
