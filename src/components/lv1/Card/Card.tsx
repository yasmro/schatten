import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../../lib/utils'
import { cardVariants } from '../../../variants/card'
import './Card.css'

export type CardProps = HTMLAttributes<HTMLDivElement>

/**
 * A bordered, subtly-elevated surface that groups related content — the
 * canonical container for dashboard widgets, list items, and settings panels.
 *
 * Card is a **compound primitive** (no Radix, pure `<div>`s): compose it from
 * the named sub-parts — {@link CardHeader} / {@link CardTitle} /
 * {@link CardDescription} / {@link CardContent} / {@link CardFooter} — each of
 * which is an independently-styled region. All parts forward `...props` to
 * their root element, so `className`, `style`, `data-*`, `id`, and `ref` pass
 * straight through.
 *
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Title</CardTitle>
 *     <CardDescription>Description</CardDescription>
 *   </CardHeader>
 *   <CardContent>…</CardContent>
 *   <CardFooter><Button>Action</Button></CardFooter>
 * </Card>
 * ```
 *
 * **No variant axis.** Card is a single neutral surface — `bg-surface`, a
 * border, and `--shadow-card` elevation. Color/weight is intentionally not a
 * prop (it fits neither the role nor the tone × shape pattern); a future weight
 * axis can be added additively.
 *
 * **Square corners.** Card has no border-radius, matching the system's current
 * square baseline (Dialog is also shadowed + square). Round it per-instance via
 * a `className` (`rounded-lg`) if needed.
 *
 * **Accessibility.** Card carries no role by default — it is a generic
 * container. To expose it as a labelled landmark, pass `role="region"` plus
 * `aria-labelledby` pointing at the `CardTitle`'s `id`:
 * `<Card role="region" aria-labelledby="t"><CardTitle id="t">…</CardTitle></Card>`.
 * To apply the surface styling to your own semantic element instead, use
 * `cardVariants()` from `@yasmro/schatten/variants`.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(cardVariants(), className)} {...props} />
))
Card.displayName = 'Card'

/**
 * Top region of a {@link Card} — stacks {@link CardTitle} and
 * {@link CardDescription} in a column.
 */
export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('st-card__header', className)} {...props} />
  ),
)
CardHeader.displayName = 'CardHeader'

/**
 * Bold heading text inside a {@link CardHeader}.
 *
 * Renders a `<div>`, **not** a heading element — the appropriate heading level
 * depends on the surrounding document outline, so Card does not impose one. If
 * you need heading semantics, nest your own element
 * (`<CardTitle><h2>…</h2></CardTitle>` or style an `<h2>` directly) and, for a
 * labelled-region Card, point `aria-labelledby` at this element's `id`.
 */
export const CardTitle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('st-card__title', className)} {...props} />
  ),
)
CardTitle.displayName = 'CardTitle'

/**
 * Muted secondary text inside a {@link CardHeader}, shown below the title.
 */
export const CardDescription = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('st-card__description', className)} {...props} />
  ),
)
CardDescription.displayName = 'CardDescription'

/**
 * Main content region of a {@link Card}. Holds arbitrary children; pads its
 * sides and bottom but not its top when it follows a {@link CardHeader}.
 */
export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('st-card__content', className)} {...props} />
  ),
)
CardContent.displayName = 'CardContent'

/**
 * Actions row at the bottom of a {@link Card} — lays its children out in a
 * horizontal flex row (e.g. one or more {@link Button}s).
 */
export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('st-card__footer', className)} {...props} />
  ),
)
CardFooter.displayName = 'CardFooter'
