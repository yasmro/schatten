import * as PopoverPrimitive from '@radix-ui/react-popover'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'
import { cn } from '../../../lib/utils'
import './Popover.css'

// Every public Props type below is native-element props plus curated
// redeclarations — Radix types never appear in the public signature
// (api-stability.md §Radix type boundary).

/* ----- Root ----- */

export interface PopoverProps {
  /**
   * Controlled open state.
   */
  open?: boolean
  /**
   * Initial open state (uncontrolled).
   */
  defaultOpen?: boolean
  /**
   * Fired when the open state changes.
   */
  onOpenChange?: (open: boolean) => void
  /**
   * Whether the popover traps focus and locks scroll.
   *
   * Defaults to `false` — Popover is non-modal: the rest of the page stays
   * interactive, there is no scroll lock, and Tab can leave the panel. Set
   * `modal` when a focus trap + scroll lock is required.
   * @default false
   */
  modal?: boolean
  children?: ReactNode
}

/**
 * Click-triggered popover root. Unlike `Tooltip`, Radix Popover has no
 * `Provider`, so the root wraps `PopoverPrimitive.Root` directly.
 */
const Popover = (props: PopoverProps) => <PopoverPrimitive.Root {...props} />
Popover.displayName = 'Popover'

/* ----- Anchor ----- */

export interface PopoverAnchorProps extends ComponentPropsWithoutRef<'div'> {}

/**
 * Optional positioning anchor. Render it around the element the content should
 * be positioned against when that element is not the `PopoverTrigger`.
 *
 * Like the triggers, `asChild` is not part of the public API — an element
 * child is merged onto directly (internal `asChild`), while a text child gets
 * Radix's own `<div>` wrapper.
 */
const PopoverAnchor = forwardRef<HTMLDivElement, PopoverAnchorProps>(
  ({ children, ...props }, ref) => {
    const isTextOnly = typeof children === 'string' || typeof children === 'number'
    return (
      <PopoverPrimitive.Anchor ref={ref} asChild={!isTextOnly} {...props}>
        {children}
      </PopoverPrimitive.Anchor>
    )
  },
)
PopoverAnchor.displayName = PopoverPrimitive.Anchor.displayName

/* ----- Trigger ----- */

/**
 * The element that opens the popover.
 *
 * Like `TooltipTrigger`, `asChild` is not part of the public API — it is
 * decided internally from the child: an element child (e.g. `<Button>`) is
 * rendered via `asChild` so the popover's behaviour merges onto it, while a
 * string child lets Radix render its own `<button>`. Wrap a `<Button>` for a
 * styled trigger; for an icon-only trigger pass `aria-label` on that Button so
 * the trigger has an accessible name.
 */
export interface PopoverTriggerProps extends ComponentPropsWithoutRef<'button'> {}

const PopoverTrigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ children, ...props }, ref) => {
    const isTextOnly = typeof children === 'string' || typeof children === 'number'
    return (
      <PopoverPrimitive.Trigger ref={ref} asChild={!isTextOnly} {...props}>
        {children}
      </PopoverPrimitive.Trigger>
    )
  },
)
PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName

/* ----- Content ----- */

export interface PopoverContentProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * The preferred side of the trigger to render the popover against.
   * @default 'bottom'
   */
  side?: 'top' | 'right' | 'bottom' | 'left'
  /**
   * The alignment against the trigger.
   * @default 'center'
   */
  align?: 'start' | 'center' | 'end'
  /**
   * Distance from the trigger, in pixels.
   * @default 8
   */
  sideOffset?: number
  /**
   * Fired when focus moves into the panel on open. Call
   * `event.preventDefault()` to keep focus where it was — e.g. when several
   * non-modal popovers are pinned open at once.
   */
  onOpenAutoFocus?: (event: Event) => void
  /**
   * Custom container element for the portal. Useful for rendering inside a
   * Dialog or Drawer.
   */
  container?: Element | DocumentFragment | null
}

const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, align = 'center', sideOffset = 8, container, ...props }, ref) => (
    // The 8px gap comes from Radix `sideOffset` (which moves the popper
    // wrapper), NOT a CSS `translate:` on the content — keeping the gap off the
    // content itself matches the project-wide convention. Popover content holds
    // no nested `position: fixed` child, so the enter/exit animation MAY use
    // `transform` (slide + fade), unlike DropdownMenu. See Popover.css.
    <PopoverPrimitive.Portal container={container}>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn('st-popover__content', className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  ),
)
PopoverContent.displayName = PopoverPrimitive.Content.displayName

/* ----- Close ----- */

export interface PopoverCloseProps extends ComponentPropsWithoutRef<'button'> {}

/**
 * Closes the popover. Like the triggers, `asChild` is not part of the public
 * API — wrap a `<Button>` (element child) and the close behaviour merges onto
 * it, while a string child lets Radix render its own `<button>`.
 */
const PopoverClose = forwardRef<HTMLButtonElement, PopoverCloseProps>(
  ({ children, ...props }, ref) => {
    const isTextOnly = typeof children === 'string' || typeof children === 'number'
    return (
      <PopoverPrimitive.Close ref={ref} asChild={!isTextOnly} {...props}>
        {children}
      </PopoverPrimitive.Close>
    )
  },
)
PopoverClose.displayName = PopoverPrimitive.Close.displayName

export { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger }
