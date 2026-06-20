import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { LucideIcon } from 'lucide-react'
import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type CSSProperties,
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { cn } from '../../../lib/utils'
import './Tabs.css'

// Position the sliding indicator before paint on the client (no first-frame
// flash); fall back to useEffect during SSR so the client-only layout read
// doesn't warn. The module is client-only (`'use client'` banner), so this
// only ever runs in the browser at runtime.
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

/* ----- Root ----- */

/**
 * Props for the Tabs root.
 *
 * `value` / `defaultValue` / `onValueChange` come from Radix and cover the
 * controlled and uncontrolled modes. The two props below are redeclared from
 * Radix purely to attach TSDoc and pin the closed enums.
 */
export interface TabsProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  /**
   * Orientation of the tabs. Controls arrow-key direction (Left/Right for
   * horizontal, Up/Down for vertical) and the list layout. Radix mirrors the
   * value onto a `data-orientation` attribute that the `.st-tabs__*` rules
   * read.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * Whether a tab activates automatically on focus, or only after the user
   * confirms.
   * - `automatic` — moving focus with the arrow keys also selects the tab
   * - `manual` — focus moves without selecting; the user confirms with Enter/Space
   * @default 'automatic'
   */
  activationMode?: 'automatic' | 'manual'
}

const Tabs = forwardRef<ComponentRef<typeof TabsPrimitive.Root>, TabsProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Root ref={ref} className={cn('st-tabs', className)} {...props} />
  ),
)
Tabs.displayName = TabsPrimitive.Root.displayName

/* ----- List ----- */

type IndicatorPosition = { vertical: boolean; offset: number; size: number } | null

/**
 * The tablist. Renders a single sliding `.st-tabs__indicator` that animates to
 * the active tab — measured from the live DOM (the active trigger carries
 * `data-state="active"`), so it tracks whichever tab Radix selects regardless
 * of controlled / uncontrolled / keyboard-driven changes. The per-trigger
 * border is only a hover preview; the active marker is this indicator.
 */
const TabsList = forwardRef<
  ComponentRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, ref) => {
  const listRef = useRef<HTMLDivElement>(null)
  // Stable merged ref so the List ref isn't detached/re-attached every render.
  const setListRef = useCallback(
    (node: HTMLDivElement | null) => {
      listRef.current = node
      if (typeof ref === 'function') ref(node)
      else if (ref) ref.current = node
    },
    [ref],
  )
  const [position, setPosition] = useState<IndicatorPosition>(null)
  // Transitions stay off until the first measurement lands, so the indicator
  // appears at the active tab instead of sliding in from the corner on mount.
  const [animated, setAnimated] = useState(false)
  // Tracks the last active tab so scroll-into-view only fires when the
  // selection changes, never on every resize re-measure.
  const lastActiveRef = useRef<string | null>(null)

  useIsoLayoutEffect(() => {
    const list = listRef.current
    if (!list) return

    const update = () => {
      const active = list.querySelector('[role="tab"][data-state="active"]')
      if (!(active instanceof HTMLElement)) {
        setPosition(null)
        return
      }
      const vertical = list.getAttribute('data-orientation') === 'vertical'
      setPosition(
        vertical
          ? { vertical: true, offset: active.offsetTop, size: active.offsetHeight }
          : { vertical: false, offset: active.offsetLeft, size: active.offsetWidth },
      )

      // When tabs overflow, reveal the newly-selected tab. Adjust ONLY the
      // list's own scroll offset (never `scrollIntoView`, which would also
      // scroll the page). Gated on a real selection change so manual scrolling
      // isn't fought on resize.
      const activeKey = active.id || active.textContent || ''
      if (activeKey !== lastActiveRef.current) {
        lastActiveRef.current = activeKey
        const PAD = 8
        if (vertical) {
          const top = active.offsetTop
          const bottom = top + active.offsetHeight
          if (top < list.scrollTop) list.scrollTop = top - PAD
          else if (bottom > list.scrollTop + list.clientHeight) {
            list.scrollTop = bottom - list.clientHeight + PAD
          }
        } else {
          const left = active.offsetLeft
          const right = left + active.offsetWidth
          if (left < list.scrollLeft) list.scrollLeft = left - PAD
          else if (right > list.scrollLeft + list.clientWidth) {
            list.scrollLeft = right - list.clientWidth + PAD
          }
        }
      }
    }

    update()
    const raf = requestAnimationFrame(() => setAnimated(true))

    // Re-measure when the active tab changes (Radix flips `data-state`) and
    // when the list resizes (responsive layout / font load).
    const mo = new MutationObserver(update)
    mo.observe(list, {
      attributes: true,
      attributeFilter: ['data-state', 'data-orientation'],
      subtree: true,
    })
    const ro = new ResizeObserver(update)
    ro.observe(list)

    return () => {
      cancelAnimationFrame(raf)
      mo.disconnect()
      ro.disconnect()
    }
  }, [])

  const indicatorStyle: CSSProperties = position
    ? {
        opacity: 1,
        transition: animated ? undefined : 'none',
        ...(position.vertical
          ? { transform: `translateY(${position.offset}px)`, height: `${position.size}px` }
          : { transform: `translateX(${position.offset}px)`, width: `${position.size}px` }),
      }
    : { opacity: 0 }

  return (
    <TabsPrimitive.List ref={setListRef} className={cn('st-tabs__list', className)} {...props}>
      {children}
      <span className="st-tabs__indicator" aria-hidden="true" style={indicatorStyle} />
    </TabsPrimitive.List>
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

/* ----- Trigger ----- */

export interface TabsTriggerProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  /**
   * Leading Lucide icon component, rendered `aria-hidden` before the label.
   * Import from `lucide-react` and pass the component directly — e.g.
   * `import { User } from 'lucide-react'` then `<TabsTrigger icon={User} />`.
   */
  icon?: LucideIcon
}

const TabsTrigger = forwardRef<ComponentRef<typeof TabsPrimitive.Trigger>, TabsTriggerProps>(
  ({ className, icon, children, ...props }, ref) => {
    const IconComponent = icon ?? null
    return (
      <TabsPrimitive.Trigger ref={ref} className={cn('st-tabs__trigger', className)} {...props}>
        {IconComponent && <IconComponent className="st-tabs__trigger-icon" aria-hidden="true" />}
        {children}
      </TabsPrimitive.Trigger>
    )
  },
)
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

/* ----- Content ----- */

const TabsContent = forwardRef<
  ComponentRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn('st-tabs__content', className)} {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsContent, TabsList, TabsTrigger }
