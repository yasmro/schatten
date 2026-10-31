import { CalendarDays } from 'lucide-react'
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useRef,
} from 'react'
import { FieldContext } from '../../../contexts/field'
import { mergeRefs } from '../../../lib/merge-refs'
import { Button } from '../../lv1/Button'
import { Input, type InputProps } from '../../lv1/Input'
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '../../lv1/Popover'
import type { useTimeInput } from './use-date-input'

/**
 * The date input an event landed on, including the padding of its wrapper. A
 * time input opens nothing: the calendar only answers for the date.
 */
const inputOf = (target: EventTarget) =>
  (target as Element)
    .closest('.st-input-wrapper')
    ?.querySelector<HTMLElement>('.st-input:not([type="time"])')

const isTimeInput = (target: EventTarget) => !!(target as Element).closest('.st-input[type="time"]')

export interface PickerShellProps extends ComponentPropsWithoutRef<'div'> {
  size: 'sm' | 'md' | 'lg' | undefined
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Accessible name of the calendar button and of the panel it opens. */
  label: string
  /** `disabled` or `readOnly`: nothing may open the panel. */
  isBlocked: boolean
  calendar: ReactNode
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
      onClick,
      onKeyDown,
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

    function prepareOpen(origin: HTMLElement | null, movesFocusIn: boolean) {
      originRef.current = origin
      movesFocusInRef.current = movesFocusIn
      hasLeftRef.current = false
    }

    const focusCalendar = () =>
      contentRef.current
        ?.querySelector<HTMLElement>('.st-date-calendar__day[tabindex="0"]')
        ?.focus()

    function onRootClick(event: MouseEvent<HTMLDivElement>) {
      onClick?.(event)
      const input = inputOf(event.target)
      if (!input || isBlocked) return
      prepareOpen(input, false)
      onOpenChange(true)
    }

    function onRootKeyDown(event: KeyboardEvent<HTMLDivElement>) {
      onKeyDown?.(event)
      const input = inputOf(event.target)
      if (!input || isBlocked || !event.altKey || event.key !== 'ArrowDown') return
      event.preventDefault()
      if (open) {
        focusCalendar()
      } else {
        prepareOpen(input, true)
        onOpenChange(true)
      }
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
            // The date inputs live in the root: clicking one must not close the
            // panel. Moving to a time input leaves the calendar behind.
            const target = event.target as Node
            if (rootRef.current?.contains(target) && !isTimeInput(target)) event.preventDefault()
            else hasLeftRef.current = true
          }}
        >
          {/* A portal keeps React context, so the calendar would otherwise take
           * the Field's error outline and label. The panel has its own name. */}
          <FieldContext.Provider value={null}>{calendar}</FieldContext.Provider>
        </PopoverContent>
      </Popover>
    )
  },
)
PickerShell.displayName = 'PickerShell'

interface PickerTimeInputProps extends Omit<InputProps, 'type' | 'isError' | 'value' | 'onChange'> {
  control: ReturnType<typeof useTimeInput>
  /** The error from outside: the prop or the Field. */
  isError: boolean
  value: string
  onTimeChange: (time: string) => void
}

/** The time input of a picker. `Field` has to be cut off around it. */
export function PickerTimeInput({
  control,
  isError,
  onTimeChange,
  ...props
}: PickerTimeInputProps) {
  return (
    <Input
      {...props}
      ref={control.inputRef}
      type="time"
      autoComplete="off"
      aria-invalid={isError || control.isInvalid || undefined}
      onChange={(event) => {
        control.reset()
        onTimeChange(event.target.value)
      }}
    />
  )
}
