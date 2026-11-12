import { CalendarDays } from 'lucide-react'
import {
  type ComponentPropsWithoutRef,
  type FocusEvent,
  forwardRef,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  type Ref,
  useRef,
} from 'react'
import { FieldContext } from '../../../contexts/field'
import { mergeRefs } from '../../../lib/merge-refs'
import { cn } from '../../../lib/utils'
import { Button } from '../../lv1/Button'
import { Field } from '../../lv1/Field'
import { Input } from '../../lv1/Input'
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '../../lv1/Popover'
import { type DateConstraints, isValidISOTime, parseDate, useDateInput } from './use-date-input'

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
  /** The panel's content: the input fields, if any, and the calendar. */
  panel: ReactNode
  /** Whether the panel holds a range, which shows two months. */
  isRange?: boolean
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
      panel,
      isRange = false,
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
          className={cn('st-date-picker-panel', isRange && 'st-date-picker-panel--range')}
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
          <FieldContext.Provider value={null}>{panel}</FieldContext.Provider>
        </PopoverContent>
      </Popover>
    )
  },
)
PickerShell.displayName = 'PickerShell'

interface PickerFieldsProps {
  /** Visible label of the date input, and its accessible name. */
  dateLabel: string
  /** Visible label of the time input, and its accessible name. */
  timeLabel: string
  /** The date half of the value: a whole date, or `''`. */
  date: string
  /** The time half of the value, `HH:mm`, or `''`. */
  time: string
  /** The checks a typed date goes through, the same as the picker's input. */
  constraints: DateConstraints
  /** The value is invalid. The date takes the blame unless it passes its checks. */
  isInvalid: boolean
  /** Whether a date that passes its checks is still wrong, e.g. before the start. */
  isDateWrong?: boolean
  /** Fired with the date input's text, trimmed, valid or not. */
  onDateChange: (text: string) => void
  /** Fired with a whole time, or `''`. */
  onTimeChange: (time: string) => void
  /** Enter ends the panel: Tab stays inside it. */
  onEnter: () => void
  timeRef?: Ref<HTMLInputElement>
}

const parseTime = (text: string) => (isValidISOTime(text.trim()) ? text.trim() : '')

/**
 * A date input and a time input in the panel, above the calendar, each labelled
 * by a `Field`: once filled, the values alone would not say which input is which.
 * Both are text inputs: `type="time"` would be formatted in the browser's own
 * locale and show `01:30 PM` beside an input holding `13:30`. The time waits
 * until there is a date, because a value without a date cannot hold it.
 */
export function PickerFields({
  dateLabel,
  timeLabel,
  date,
  time,
  constraints,
  isInvalid,
  isDateWrong = false,
  onDateChange,
  onTimeChange,
  onEnter,
  timeRef,
}: PickerFieldsProps) {
  const dateInput = useDateInput(
    date,
    (text) => parseDate(text, constraints),
    (text) => onDateChange(text.trim()),
    '',
  )
  const timeInput = useDateInput(time, parseTime, (text) => onTimeChange(parseTime(text)), '')
  const blamesDate = isDateWrong || !parseDate(date, constraints)

  const endOnEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return
    event.preventDefault()
    onEnter()
  }

  // `Field` names each input through htmlFor; `disabled` has to go through it
  // too, because Input takes the field's state over its own prop.
  return (
    <div>
      <Field label={dateLabel}>
        <Input
          ref={dateInput.inputRef}
          size="md"
          autoComplete="off"
          placeholder="YYYY-MM-DD"
          aria-invalid={(isInvalid && blamesDate) || dateInput.isInvalid || undefined}
          value={dateInput.text}
          onChange={(event) => dateInput.edit(event.target.value)}
          onBlur={dateInput.markBlurred}
          onKeyDown={endOnEnter}
        />
      </Field>
      <Field label={timeLabel} disabled={!date}>
        <Input
          ref={mergeRefs(timeRef, timeInput.inputRef)}
          size="md"
          autoComplete="off"
          placeholder="HH:mm"
          aria-invalid={(isInvalid && !blamesDate) || timeInput.isInvalid || undefined}
          value={timeInput.text}
          onChange={(event) => timeInput.edit(event.target.value)}
          onBlur={timeInput.markBlurred}
          onKeyDown={endOnEnter}
        />
      </Field>
    </div>
  )
}
