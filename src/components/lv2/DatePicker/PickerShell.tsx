import { CalendarDays, Clock } from 'lucide-react'
import {
  type ComponentPropsWithoutRef,
  type FocusEvent,
  forwardRef,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useId,
  useRef,
} from 'react'
import { FieldContext } from '../../../contexts/field'
import { mergeRefs } from '../../../lib/merge-refs'
import { Button } from '../../lv1/Button'
import { Input } from '../../lv1/Input'
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '../../lv1/Popover'
import { Text } from '../../lv1/Text'
import { isValidISOTime, useDateInput } from './use-date-input'

/** The input an event landed on, including the padding of its wrapper. */
const inputOf = (target: EventTarget) =>
  (target as Element).closest('.st-input-wrapper')?.querySelector<HTMLElement>('.st-input')

export interface PickerShellProps extends ComponentPropsWithoutRef<'div'> {
  size: 'sm' | 'md' | 'lg' | undefined
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Accessible name of the calendar button and of the panel it opens. */
  label: string
  /** `disabled` or `readOnly`: nothing may open the panel. */
  isBlocked: boolean
  calendar: ReactNode
  /** Focus left the picker while the panel was closed. */
  onFocusLeave?: () => void
}

/**
 * The frame, the calendar button and the panel both pickers share. A click on an
 * input opens the panel and leaves focus there, so typing still works. The
 * calendar button and Alt+ArrowDown move focus into the calendar.
 */
export const PickerShell = forwardRef<HTMLDivElement, PickerShellProps>(
  (
    {
      size,
      open,
      onOpenChange,
      label,
      isBlocked,
      calendar,
      onFocusLeave,
      onClick,
      onKeyDown,
      onBlur,
      children,
      ...props
    },
    ref,
  ) => {
    const rootRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    // Where focus goes back to on close. Without it, Radix uses the trigger.
    const originRef = useRef<HTMLElement | null>(null)
    const movesFocusInRef = useRef(true)
    const hasLeftRef = useRef(false)
    const isPressedRef = useRef(false)

    function prepareOpen(origin: HTMLElement | null, movesFocusIn: boolean) {
      originRef.current = origin
      movesFocusInRef.current = movesFocusIn
      hasLeftRef.current = false
    }

    const focusCalendar = () =>
      contentRef.current
        ?.querySelector<HTMLElement>('.st-date-calendar__day[tabindex="0"]')
        ?.focus()

    // Events from the panel bubble here too: a portal keeps the React tree.
    const ownInput = (target: EventTarget) =>
      rootRef.current?.contains(target as Node) ? inputOf(target) : null

    function onRootClick(event: MouseEvent<HTMLDivElement>) {
      onClick?.(event)
      const input = ownInput(event.target)
      if (!input || isBlocked) return
      prepareOpen(input, false)
      onOpenChange(true)
    }

    function onRootKeyDown(event: KeyboardEvent<HTMLDivElement>) {
      onKeyDown?.(event)
      const input = ownInput(event.target)
      if (!input || isBlocked || !event.altKey || event.key !== 'ArrowDown') return
      event.preventDefault()
      if (open) {
        focusCalendar()
      } else {
        prepareOpen(input, true)
        onOpenChange(true)
      }
    }

    // Moving to the calendar button or into the panel is still part of filling
    // the picker in. Closing the panel reports on its own. Safari does not focus
    // a clicked button, so `relatedTarget` alone would miss a click on it.
    function onRootBlur(event: FocusEvent<HTMLDivElement>) {
      onBlur?.(event)
      const next = event.relatedTarget
      const staysInside =
        isPressedRef.current ||
        rootRef.current?.contains(next) ||
        contentRef.current?.contains(next)
      if (!open && !staysInside) onFocusLeave?.()
    }

    return (
      <Popover
        open={open}
        onOpenChange={(next) => {
          if (next) prepareOpen(null, true)
          onOpenChange(next)
        }}
      >
        <PopoverAnchor>
          {/* biome-ignore lint/a11y/noStaticElementInteractions: the handlers delegate to the input, which keeps its own role and keyboard */}
          <div
            ref={mergeRefs(ref, rootRef)}
            onClick={onRootClick}
            onKeyDown={onRootKeyDown}
            onBlur={onRootBlur}
            onPointerDownCapture={() => {
              isPressedRef.current = true
            }}
            onPointerUpCapture={() => {
              isPressedRef.current = false
            }}
            {...props}
          >
            {children}
            <PopoverTrigger>
              <Button
                variant="tertiary"
                size={size}
                icon={CalendarDays}
                aria-label={label}
                disabled={isBlocked}
              />
            </PopoverTrigger>
          </div>
        </PopoverAnchor>
        <PopoverContent
          ref={contentRef}
          align="start"
          aria-label={label}
          onOpenAutoFocus={(event) => {
            // Radix would focus the first tabbable, the previous-month button.
            event.preventDefault()
            if (movesFocusInRef.current) focusCalendar()
          }}
          onCloseAutoFocus={(event) => {
            if (!originRef.current) return
            event.preventDefault()
            if (!hasLeftRef.current) originRef.current.focus()
          }}
          onInteractOutside={(event) => {
            // The inputs live in the root: clicking one must not close the panel.
            if (rootRef.current?.contains(event.target as Node)) event.preventDefault()
            else hasLeftRef.current = true
          }}
        >
          {/* A portal keeps React context, so the panel would otherwise take the
           * Field's error outline, label and id. It has its own name. */}
          <FieldContext.Provider value={null}>{calendar}</FieldContext.Provider>
        </PopoverContent>
      </Popover>
    )
  },
)
PickerShell.displayName = 'PickerShell'

interface PickerTimeRowProps {
  /** Shown beside the input, and its accessible name. */
  label: string
  /** The date this time belongs to. A range shows it, `''` while unset. */
  date?: string
  value: string
  disabled: boolean
  isInvalid: boolean
  onTimeChange: (time: string) => void
  /** Enter ends the panel: Tab stays inside it. */
  onEnter: () => void
}

const parseTime = (text: string) => (isValidISOTime(text.trim()) ? text.trim() : '')

/**
 * A time input in the panel, below the calendar. It is a text input rather than
 * `type="time"`: the browser would format that one in its own locale, and show
 * `01:30 PM` under an input holding `13:30`.
 */
export const PickerTimeRow = forwardRef<HTMLInputElement, PickerTimeRowProps>(
  ({ label, date, value, disabled, isInvalid, onTimeChange, onEnter }, ref) => {
    const dateId = useId()
    const time = useDateInput(value, parseTime, (text) => onTimeChange(parseTime(text)), '')
    return (
      <>
        <Text as="span" size="xs" color="muted" aria-hidden="true">
          {label}
        </Text>
        {date === undefined ? null : (
          <Text as="span" size="xs" id={dateId}>
            {date || '—'}
          </Text>
        )}
        <Input
          ref={mergeRefs(ref, time.inputRef)}
          size="sm"
          iconLeft={Clock}
          autoComplete="off"
          placeholder="HH:mm"
          aria-label={label}
          aria-describedby={date ? dateId : undefined}
          aria-invalid={isInvalid || time.isInvalid || undefined}
          disabled={disabled}
          value={time.text}
          onChange={(event) => time.edit(event.target.value)}
          onBlur={time.markBlurred}
          onKeyDown={(event) => {
            if (event.key !== 'Enter') return
            event.preventDefault()
            onEnter()
          }}
        />
      </>
    )
  },
)
PickerTimeRow.displayName = 'PickerTimeRow'
