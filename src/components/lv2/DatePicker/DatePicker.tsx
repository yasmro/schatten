import { CalendarDays } from 'lucide-react'
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  type Ref,
  useRef,
  useState,
} from 'react'
import { FieldContext, useFieldContext } from '../../../contexts/field'
import { mergeRefs } from '../../../lib/merge-refs'
import { useControllable } from '../../../lib/use-controllable'
import { cn } from '../../../lib/utils'
import { Button } from '../../lv1/Button'
import {
  DateCalendar,
  type DateCalendarLabels,
  type DateCalendarLocale,
  type DateRange,
  DateRangeCalendar,
  type WeekDay,
} from '../../lv1/DateCalendar'
import { isValidISODate } from '../../lv1/DateCalendar/date-math'
import { Input } from '../../lv1/Input'
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '../../lv1/Popover'
import { Text } from '../../lv1/Text'
import { type DateConstraints, parseDate, useDateInput, useFormReset } from './use-date-input'
import './DatePicker.css'

const DEFAULT_PLACEHOLDER = 'YYYY-MM-DD'

/** An invalid or missing date counts as unset, as it does in DateCalendar. */
const toValue = (date: string | undefined) => (date && isValidISODate(date) ? date : '')

/** Alt+ArrowDown on an input opens the panel, like a native date input. */
const opensOnAltArrowDown =
  (open: () => void, isBlocked: boolean) => (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.altKey && event.key === 'ArrowDown' && !isBlocked) {
      event.preventDefault()
      open()
    }
  }

/** Props shared by `DatePicker` and `DateRangePicker`. */
interface PickerCommonProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'defaultValue' | 'onChange' | 'children'> {
  /**
   * Size of the control.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * The earliest selectable date, as `YYYY-MM-DD`. Applies to the calendar and
   * to typed dates.
   */
  min?: string
  /**
   * The latest selectable date, as `YYYY-MM-DD`. Applies to the calendar and to
   * typed dates.
   */
  max?: string
  /**
   * Marks individual dates unavailable. Applies to the calendar and to typed
   * dates.
   */
  isDateDisabled?: (date: string) => boolean
  /**
   * BCP 47 language tag for the calendar. Typed dates stay `YYYY-MM-DD`
   * whatever the locale.
   * @default 'en-US'
   */
  locale?: DateCalendarLocale
  /**
   * The first column of the calendar: `0` is Sunday, `1` is Monday.
   * @default 0
   */
  weekStartsOn?: WeekDay
  /**
   * The date the calendar marks as today, as `YYYY-MM-DD`. Defaults to the
   * local date.
   */
  today?: string
  /**
   * Text shown while the input is empty.
   * @default 'YYYY-MM-DD'
   */
  placeholder?: string
  /**
   * Displays the error state. When used inside a `<Field>`, the field's error
   * state takes precedence. An invalid typed date shows the error state on its
   * own after blur.
   * @default false
   */
  isError?: boolean
  disabled?: boolean
  /**
   * Shows the value without allowing edits. The calendar button is disabled.
   * @default false
   */
  readOnly?: boolean
  required?: boolean
}

interface PickerShellProps extends ComponentPropsWithoutRef<'div'> {
  size: PickerCommonProps['size']
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Accessible name of the calendar button and of the panel it opens. */
  label: string
  isTriggerDisabled: boolean
  calendar: ReactNode
}

/** The frame, the calendar button and the panel both pickers share. */
const PickerShell = forwardRef<HTMLDivElement, PickerShellProps>(
  ({ size, open, onOpenChange, label, isTriggerDisabled, calendar, children, ...props }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null)

    return (
      <Popover open={open} onOpenChange={onOpenChange}>
        <PopoverAnchor>
          <div ref={ref} {...props}>
            {children}
            <PopoverTrigger>
              <Button
                variant="tertiary"
                size={size}
                icon={CalendarDays}
                aria-label={label}
                disabled={isTriggerDisabled}
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
            contentRef.current
              ?.querySelector<HTMLElement>('.st-date-calendar__day[tabindex="0"]')
              ?.focus()
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

/* ----- DatePicker ----- */

export interface DatePickerLabels extends DateCalendarLabels {
  /**
   * Accessible name of the calendar button and of the panel it opens.
   * @default 'Choose date'
   */
  openCalendar?: string
  /**
   * Native validation message for an invalid typed date.
   * @default 'Enter a valid date.'
   */
  invalidDate?: string
}

export interface DatePickerProps extends PickerCommonProps {
  /**
   * The selected date as `YYYY-MM-DD` (controlled). Pass `''` for no selection.
   */
  value?: string
  /**
   * The initially selected date as `YYYY-MM-DD` (uncontrolled). A `<form>` reset
   * restores it.
   */
  defaultValue?: string
  /**
   * Fired when the date changes. While the input holds an unfinished, invalid
   * or unavailable date this is `''`, so the value never lags behind the text.
   */
  onValueChange?: (value: string) => void
  /**
   * Submits the selected date under this name. An unfinished or invalid draft
   * submits an empty value, and fails native form validation.
   */
  name?: string
  /**
   * Overrides for the English default labels.
   */
  labels?: DatePickerLabels
  /**
   * Ref to the input, e.g. to focus it after a failed validation. `ref` lands on
   * the root.
   */
  inputRef?: Ref<HTMLInputElement>
}

/**
 * Date input with a calendar in a popover. Typing `YYYY-MM-DD` and picking a
 * day stay in sync; the calendar button or Alt+ArrowDown opens the panel, focus
 * lands on the selected day, and closing returns it to the button.
 *
 * Reads `Field` like `Input`: the `Field` label names the input through
 * `htmlFor`. Outside a `Field`, pass `aria-label`. `ref` and unknown props land
 * on the root `<div>`; `id` and the `aria-label*` / `aria-describedby` props
 * land on the input. Out of pattern, like the other form controls.
 *
 * lv2 — React only. Without React, use `<input type="date">`.
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      value: valueProp,
      defaultValue = '',
      onValueChange,
      name,
      size,
      min,
      max,
      isDateDisabled,
      locale,
      weekStartsOn,
      today,
      placeholder = DEFAULT_PLACEHOLDER,
      labels,
      inputRef,
      isError: isErrorProp = false,
      disabled: disabledProp,
      readOnly = false,
      required,
      id,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      className,
      ...props
    },
    ref,
  ) => {
    const field = useFieldContext()
    const isError = field?.isError ?? isErrorProp
    const disabled = field?.disabled ?? disabledProp ?? false

    const [open, setOpen] = useState(false)
    const [rawValue, setValue] = useControllable(valueProp, defaultValue, onValueChange)
    const value = toValue(rawValue)

    const constraints: DateConstraints = { min, max, isDateDisabled }
    const parse = (text: string) => parseDate(text, constraints)
    const input = useDateInput(value, parse, (text) => setValue(parse(text)), labels?.invalidDate)

    // A controlled value belongs to the parent; only the draft goes.
    useFormReset(input.inputRef, () => {
      const next = valueProp === undefined ? defaultValue : value
      input.reset(toValue(next))
      setValue(next)
    })

    const label = labels?.openCalendar ?? 'Choose date'

    // Picking the selected day changes no value, so onValueChange stays silent.
    function closeOnSelectedDay(event: MouseEvent<HTMLDivElement>) {
      if ((event.target as Element).closest('[aria-selected="true"]')) setOpen(false)
    }

    return (
      <PickerShell
        ref={ref}
        className={cn('st-date-picker', className)}
        size={size}
        open={open}
        onOpenChange={setOpen}
        label={label}
        isTriggerDisabled={disabled || readOnly}
        calendar={
          <DateCalendar
            value={value}
            onValueChange={(date) => {
              input.reset(date)
              setValue(date)
              setOpen(false)
            }}
            onClick={closeOnSelectedDay}
            min={min}
            max={max}
            isDateDisabled={isDateDisabled}
            locale={locale}
            weekStartsOn={weekStartsOn}
            today={today}
            labels={labels}
          />
        }
        {...props}
      >
        <Input
          ref={mergeRefs(inputRef, input.inputRef)}
          id={id}
          size={size}
          autoComplete="off"
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          aria-invalid={isError || input.isInvalid || undefined}
          value={input.text}
          onChange={(event) => input.edit(event.target.value)}
          onBlur={input.markBlurred}
          onKeyDown={opensOnAltArrowDown(() => setOpen(true), disabled || readOnly)}
        />
        {name ? <input type="hidden" name={name} value={value} disabled={disabled} /> : null}
      </PickerShell>
    )
  },
)
DatePicker.displayName = 'DatePicker'

/* ----- DateRangePicker ----- */

export interface DateRangePickerLabels extends DateCalendarLabels {
  /**
   * Accessible name of the calendar button and of the panel it opens.
   * @default 'Choose date range'
   */
  openCalendar?: string
  /**
   * Accessible name of the first input.
   * @default 'Start date'
   */
  startDate?: string
  /**
   * Accessible name of the second input.
   * @default 'End date'
   */
  endDate?: string
  /**
   * Native validation message for an invalid typed date.
   * @default 'Enter a valid date.'
   */
  invalidDate?: string
}

export interface DateRangePickerProps extends PickerCommonProps {
  /**
   * The selected range (controlled). Pass `{}` for no selection.
   */
  value?: DateRange
  /**
   * The initially selected range (uncontrolled). A `<form>` reset restores it.
   */
  defaultValue?: DateRange
  /**
   * Fired when the range changes. A side holding an unfinished, invalid or
   * unavailable date is left out, and so is an end before the start: typed
   * dates are never swapped. The days between two typed dates are not checked
   * against `isDateDisabled`.
   */
  onValueChange?: (value: DateRange) => void
  /**
   * Submits the start date under this name.
   */
  startName?: string
  /**
   * Submits the end date under this name.
   */
  endName?: string
  /**
   * Overrides for the English default labels.
   */
  labels?: DateRangePickerLabels
  /**
   * Ref to the start input. `ref` lands on the root.
   */
  startInputRef?: Ref<HTMLInputElement>
  /**
   * Ref to the end input.
   */
  endInputRef?: Ref<HTMLInputElement>
}

/**
 * Two date inputs in one frame, with a range calendar in a popover. The panel
 * closes once the end date is picked; closing earlier keeps a half-picked
 * range.
 *
 * Reads `Field` like `RadioGroup`: the root is a `role="group"` named by the
 * `Field` label, and each input has its own name. Outside a `Field`, pass
 * `aria-label`. `ref` and unknown props land on the root `<div>`.
 *
 * lv2 — React only. Without React, use two `<input type="date">`.
 */
export const DateRangePicker = forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      value: valueProp,
      defaultValue = {},
      onValueChange,
      startName,
      endName,
      startInputRef,
      endInputRef,
      size,
      min,
      max,
      isDateDisabled,
      locale,
      weekStartsOn,
      today,
      placeholder = DEFAULT_PLACEHOLDER,
      labels,
      isError: isErrorProp = false,
      disabled: disabledProp,
      readOnly = false,
      required,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledByProp,
      'aria-describedby': ariaDescribedByProp,
      className,
      ...props
    },
    ref,
  ) => {
    const field = useFieldContext()
    const isError = field?.isError ?? isErrorProp
    const disabled = field?.disabled ?? disabledProp ?? false
    const ariaDescribedBy = field?.describedBy ?? ariaDescribedByProp
    // A role="group" div cannot be reached by htmlFor, so the Field label names
    // it the same way it names RadioGroup.
    const ariaLabelledBy = ariaLabelledByProp ?? (ariaLabel ? undefined : field?.labelId)

    const [open, setOpen] = useState(false)
    const [range, setRange] = useControllable(valueProp, defaultValue, onValueChange)
    const from = toValue(range.from)
    const to = toValue(range.to)

    const constraints: DateConstraints = { min, max, isDateDisabled }
    const parseStart = (text: string) => parseDate(text, constraints)
    const parseEndAfter = (text: string, start: string) => {
      const date = parseDate(text, constraints)
      return start && date < start ? '' : date
    }

    function commit(startText: string, endText: string) {
      // A side the user did not edit stays as given, even outside `min` / `max`.
      const keepOrParse = (text: string, current: string) =>
        text === current ? current : parseDate(text, constraints)
      const nextFrom = keepOrParse(startText, from)
      const parsedTo = keepOrParse(endText, to)
      const nextTo = nextFrom && parsedTo < nextFrom ? '' : parsedTo
      if (nextFrom === from && nextTo === to) return
      setRange({ ...(nextFrom && { from: nextFrom }), ...(nextTo && { to: nextTo }) })
    }

    const start = useDateInput(
      from,
      parseStart,
      (text) => commit(text, end.text),
      labels?.invalidDate,
    )
    const end = useDateInput(
      to,
      (text) => parseEndAfter(text, from),
      (text) => commit(start.text, text),
      labels?.invalidDate,
    )

    // A controlled value belongs to the parent; only the drafts go.
    useFormReset(start.inputRef, () => {
      const isControlled = valueProp !== undefined
      const nextFrom = isControlled ? from : toValue(defaultValue.from)
      const nextTo = isControlled ? to : toValue(defaultValue.to)
      start.reset(nextFrom)
      end.reset(nextTo)
      if (!isControlled && (nextFrom !== from || nextTo !== to)) setRange(defaultValue)
    })

    const label = labels?.openCalendar ?? 'Choose date range'

    // Editing the start can invalidate the end, so both report on any blur.
    function onInputBlur() {
      start.markBlurred()
      end.markBlurred()
    }

    const sharedInputProps = {
      size,
      autoComplete: 'off',
      placeholder,
      disabled,
      readOnly,
      required,
      'aria-required': field?.required || undefined,
      'aria-describedby': ariaDescribedBy,
      onBlur: onInputBlur,
      onKeyDown: opensOnAltArrowDown(() => setOpen(true), disabled || readOnly),
    }

    return (
      <PickerShell
        ref={ref}
        role="group"
        className={cn('st-date-range-picker', className)}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        size={size}
        open={open}
        onOpenChange={setOpen}
        label={label}
        isTriggerDisabled={disabled || readOnly}
        calendar={
          <DateRangeCalendar
            value={{ from: from || undefined, to: to || undefined }}
            onValueChange={(next) => {
              start.reset(next.from ?? '')
              end.reset(next.to ?? '')
              setRange(next)
              if (next.from && next.to) setOpen(false)
            }}
            min={min}
            max={max}
            isDateDisabled={isDateDisabled}
            locale={locale}
            weekStartsOn={weekStartsOn}
            today={today}
            labels={labels}
          />
        }
        {...props}
      >
        {/* Input would take `field.id` for both inputs, so the group resolves
         * Field itself (lv2-composition-guideline §4.4). */}
        <FieldContext.Provider value={null}>
          <Input
            {...sharedInputProps}
            ref={mergeRefs(startInputRef, start.inputRef)}
            aria-label={labels?.startDate ?? 'Start date'}
            aria-invalid={isError || start.isInvalid || undefined}
            value={start.text}
            onChange={(event) => start.edit(event.target.value)}
          />
          <Text as="span" size="sm" color="muted" aria-hidden="true">
            –
          </Text>
          <Input
            {...sharedInputProps}
            ref={mergeRefs(endInputRef, end.inputRef)}
            aria-label={labels?.endDate ?? 'End date'}
            aria-invalid={isError || end.isInvalid || undefined}
            value={end.text}
            onChange={(event) => end.edit(event.target.value)}
          />
        </FieldContext.Provider>
        {startName ? (
          <input type="hidden" name={startName} value={from} disabled={disabled} />
        ) : null}
        {endName ? <input type="hidden" name={endName} value={to} disabled={disabled} /> : null}
      </PickerShell>
    )
  },
)
DateRangePicker.displayName = 'DateRangePicker'
