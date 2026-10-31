import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type MouseEvent,
  type Ref,
  useRef,
  useState,
} from 'react'
import { FieldContext, useFieldContext } from '../../../contexts/field'
import { mergeRefs } from '../../../lib/merge-refs'
import { useControllable } from '../../../lib/use-controllable'
import { cn } from '../../../lib/utils'
import {
  DateCalendar,
  type DateCalendarLabels,
  type DateCalendarLocale,
  type DateRange,
  DateRangeCalendar,
  type WeekDay,
} from '../../lv1/DateCalendar'
import { Input } from '../../lv1/Input'
import { Text } from '../../lv1/Text'
import { PickerShell, PickerTimeRow } from './PickerShell'
import {
  type DateConstraints,
  type DateGranularity,
  fromText,
  isValidValue,
  joinText,
  parseDate,
  parseDateTime,
  readText,
  toText,
  useDateInput,
  useFocusAfterRender,
  useFormReset,
  useValueBounds,
} from './use-date-input'
import './DatePicker.css'

const placeholderOf = (isTimed: boolean) => (isTimed ? 'YYYY-MM-DD HH:mm' : 'YYYY-MM-DD')
const invalidMessageOf = (isTimed: boolean) =>
  isTimed ? 'Enter a valid date and time.' : undefined

/** An invalid or missing value counts as unset, as it does in DateCalendar. */
const toValue = (value: string | undefined, granularity: DateGranularity) =>
  value && isValidValue(value, granularity) ? value : ''

/** Props shared by `DatePicker` and `DateRangePicker`. */
interface PickerCommonProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'defaultValue' | 'onChange' | 'children'> {
  /**
   * What the value holds.
   * - `day` — a date, `YYYY-MM-DD`
   * - `minute` — a local date and time, `YYYY-MM-DDTHH:mm`, the format of
   *   `<input type="datetime-local">`. It has no time zone. The input shows and
   *   takes `YYYY-MM-DD HH:mm`, and the panel gains a time input.
   * @default 'day'
   */
  granularity?: 'day' | 'minute'
  /**
   * Size of the control.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * The earliest selectable value, in the format of `value`: `YYYY-MM-DD`, or
   * `YYYY-MM-DDTHH:mm` with `granularity="minute"`. Applies to the calendar and
   * to typed values.
   */
  min?: string
  /**
   * The latest selectable value, in the format of `value`: `YYYY-MM-DD`, or
   * `YYYY-MM-DDTHH:mm` with `granularity="minute"`. Applies to the calendar and
   * to typed values.
   */
  max?: string
  /**
   * Marks individual dates unavailable, always by the date. Applies to the
   * calendar and to typed dates.
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
   * @default 'YYYY-MM-DD', or 'YYYY-MM-DD HH:mm' with `granularity="minute"`
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

/* ----- DatePicker ----- */

export interface DatePickerLabels extends DateCalendarLabels {
  /**
   * Accessible name of the calendar button and of the panel it opens.
   * @default 'Choose date'
   */
  openCalendar?: string
  /**
   * Native validation message for an invalid typed date.
   * @default 'Enter a valid date.', or 'Enter a valid date and time.' with
   * `granularity="minute"`
   */
  invalidDate?: string
  /**
   * Label of the time input in the panel.
   * @default 'Time'
   */
  time?: string
}

export interface DatePickerProps extends PickerCommonProps {
  /**
   * The selected value (controlled), in the format of `granularity`. Pass `''`
   * for no selection.
   */
  value?: string
  /**
   * The initially selected value (uncontrolled), in the format of `granularity`.
   * A `<form>` reset restores it.
   */
  defaultValue?: string
  /**
   * Fired when the value changes. While the input holds an unfinished, invalid
   * or unavailable value this is `''`, so the value never lags behind the text.
   * With `granularity="minute"`, that includes a date without a time.
   */
  onValueChange?: (value: string) => void
  /**
   * Submits the selected value under this name. An unfinished or invalid draft
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
 * day stay in sync; a click on the input opens the panel with focus left there,
 * and typing closes it. The calendar button or Alt+ArrowDown opens it with focus
 * lands on the selected day, and closing returns it to the button.
 *
 * Reads `Field` like `Input`: the `Field` label names the input through
 * `htmlFor`. Outside a `Field`, pass `aria-label`. `ref` and unknown props land
 * on the root `<div>`; `id` and the `aria-label*` / `aria-describedby` props
 * land on the input. Out of pattern, like the other form controls.
 *
 * With `granularity="minute"` the input holds `YYYY-MM-DD HH:mm`, and the panel
 * gains a time input. Picking a day moves focus there and leaves the panel open,
 * until a click outside or Escape. A day without a time is an unfinished value:
 * no time is assumed. The browser's locale formats the time in the panel; the
 * input and the value are always 24-hour.
 *
 * lv2 — React only. Without React, use `<input type="date">`, or
 * `<input type="datetime-local">` for a time.
 */
export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      value: valueProp,
      defaultValue = '',
      onValueChange,
      name,
      granularity = 'day',
      size,
      min,
      max,
      isDateDisabled,
      locale,
      weekStartsOn,
      today,
      placeholder,
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

    const isTimed = granularity === 'minute'

    const [open, setOpen] = useState(false)
    const [rawValue, setValue] = useControllable(valueProp, defaultValue, onValueChange)
    const value = toValue(rawValue, granularity)

    const bounds = useValueBounds(min, max, granularity)
    const constraints: DateConstraints = {
      min: bounds.dateMin,
      max: bounds.dateMax,
      isDateDisabled,
    }
    const parse = (text: string) =>
      isTimed ? parseDateTime(text, constraints, bounds.accept) : parseDate(text, constraints)
    const input = useDateInput(
      toText(value),
      parse,
      (text) => setValue(fromText(parse(text))),
      labels?.invalidDate ?? invalidMessageOf(isTimed),
    )
    const parts = readText(input.text)

    const timeRef = useRef<HTMLInputElement>(null)
    const focusTime = useFocusAfterRender(timeRef)

    // A controlled value belongs to the parent; only the draft goes.
    useFormReset(input.inputRef, () => {
      const next = valueProp === undefined ? defaultValue : value
      input.reset(toText(toValue(next, granularity)))
      setValue(next)
    })

    const label = labels?.openCalendar ?? 'Choose date'

    function pickDay(date: string) {
      const text = joinText(date, parts.time)
      input.reset(text)
      setValue(fromText(parse(text)))
      if (!isTimed) {
        setOpen(false)
        return
      }
      // A kept time the day refuses gets no blur to report it.
      if (parts.time) input.markBlurred()
      focusTime()
    }

    // Picking the selected day changes no value, so onValueChange stays silent.
    function onCalendarClick(event: MouseEvent<HTMLDivElement>) {
      if (!(event.target as Element).closest('[aria-selected="true"]')) return
      if (isTimed) timeRef.current?.focus()
      else setOpen(false)
    }

    // The panel is where a time gets lost: nothing else reports it.
    function onOpenChange(next: boolean) {
      if (!next && isTimed) input.markBlurred()
      setOpen(next)
    }

    return (
      <PickerShell
        ref={ref}
        className={cn('st-date-picker', className)}
        size={size}
        open={open}
        onOpenChange={onOpenChange}
        label={label}
        isBlocked={disabled || readOnly}
        calendar={
          <>
            <DateCalendar
              value={isTimed ? parts.date : value}
              onValueChange={pickDay}
              onClick={onCalendarClick}
              min={bounds.dateMin}
              max={bounds.dateMax}
              isDateDisabled={isDateDisabled}
              locale={locale}
              weekStartsOn={weekStartsOn}
              today={today}
              labels={labels}
            />
            {isTimed ? (
              <div className="st-date-picker-time">
                <PickerTimeRow
                  ref={timeRef}
                  label={labels?.time ?? 'Time'}
                  value={parts.time}
                  disabled={!parts.date}
                  isInvalid={input.isInvalid && !!parts.date}
                  onTimeChange={(time) => input.edit(joinText(parts.date, time))}
                />
              </div>
            ) : null}
          </>
        }
        {...props}
      >
        <Input
          ref={mergeRefs(inputRef, input.inputRef)}
          id={id}
          size={size}
          autoComplete="off"
          placeholder={placeholder ?? placeholderOf(isTimed)}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          aria-invalid={isError || input.isInvalid || undefined}
          value={input.text}
          onChange={(event) => {
            input.edit(event.target.value)
            setOpen(false)
          }}
          onBlur={input.markBlurred}
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
   * @default 'Enter a valid date.', or 'Enter a valid date and time.' with
   * `granularity="minute"`
   */
  invalidDate?: string
  /**
   * Label of the first time input in the panel.
   * @default 'Start time'
   */
  startTime?: string
  /**
   * Label of the second time input in the panel.
   * @default 'End time'
   */
  endTime?: string
}

export interface DateRangePickerProps extends PickerCommonProps {
  /**
   * The selected range (controlled), in the format of `granularity`. Pass `{}`
   * for no selection.
   */
  value?: DateRange
  /**
   * The initially selected range (uncontrolled), in the format of `granularity`.
   * A `<form>` reset restores it.
   */
  defaultValue?: DateRange
  /**
   * Fired when the range changes. A side holding an unfinished, invalid or
   * unavailable value is left out, and so is an end before the start: typed
   * values are never swapped. A start and an end at the same moment are fine.
   * The days between two typed dates are not checked against `isDateDisabled`.
   */
  onValueChange?: (value: DateRange) => void
  /**
   * Submits the start under this name.
   */
  startName?: string
  /**
   * Submits the end under this name.
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
 * With `granularity="minute"` each input holds `YYYY-MM-DD HH:mm` and the frame
 * takes two rows. The panel gains a time input per end, next to the date it
 * belongs to, and stays open until a click outside or Escape: picking the end date
 * moves focus to the first time. Its time waits until the date is there.
 *
 * lv2 — React only. Without React, use two `<input type="date">`, or two
 * `<input type="datetime-local">` for a time.
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
      granularity = 'day',
      size,
      min,
      max,
      isDateDisabled,
      locale,
      weekStartsOn,
      today,
      placeholder,
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

    const isTimed = granularity === 'minute'

    const [open, setOpen] = useState(false)
    const [range, setRange] = useControllable(valueProp, defaultValue, onValueChange)
    const from = toText(toValue(range.from, granularity))
    const to = toText(toValue(range.to, granularity))

    const bounds = useValueBounds(min, max, granularity)
    const constraints: DateConstraints = {
      min: bounds.dateMin,
      max: bounds.dateMax,
      isDateDisabled,
    }
    const parse = (text: string) =>
      isTimed ? parseDateTime(text, constraints, bounds.accept) : parseDate(text, constraints)
    const parseEndAfter = (text: string, startText: string) => {
      const parsed = parse(text)
      return startText && parsed < startText ? '' : parsed
    }

    function commit(startText: string, endText: string) {
      // A side the user did not edit stays as given, even outside `min` / `max`.
      const keepOrParse = (text: string, current: string) =>
        text === current ? current : parse(text)
      const nextFrom = keepOrParse(startText, from)
      const parsedTo = keepOrParse(endText, to)
      const nextTo = nextFrom && parsedTo < nextFrom ? '' : parsedTo
      if (nextFrom === from && nextTo === to) return
      setRange({
        ...(nextFrom && { from: fromText(nextFrom) }),
        ...(nextTo && { to: fromText(nextTo) }),
      })
    }

    const invalidMessage = labels?.invalidDate ?? invalidMessageOf(isTimed)
    const start = useDateInput(from, parse, (text) => commit(text, end.text), invalidMessage)
    const end = useDateInput(
      to,
      (text) => parseEndAfter(text, from),
      (text) => commit(start.text, text),
      invalidMessage,
    )
    const startParts = readText(start.text)
    const endParts = readText(end.text)

    // The first pick of a new range clears the end, not the time it had.
    const keptEndTimeRef = useRef('')
    const startTimeRef = useRef<HTMLInputElement>(null)
    const focusStartTime = useFocusAfterRender(startTimeRef)

    // A controlled value belongs to the parent; only the drafts go.
    useFormReset(start.inputRef, () => {
      const isControlled = valueProp !== undefined
      const nextFrom = isControlled ? from : toText(toValue(defaultValue.from, granularity))
      const nextTo = isControlled ? to : toText(toValue(defaultValue.to, granularity))
      start.reset(nextFrom)
      end.reset(nextTo)
      keptEndTimeRef.current = ''
      if (!isControlled && (nextFrom !== from || nextTo !== to)) setRange(defaultValue)
    })

    const label = labels?.openCalendar ?? 'Choose date range'

    // Editing the start can invalidate the end, so both report on any blur.
    function onInputBlur() {
      start.markBlurred()
      end.markBlurred()
    }

    function pickRange(next: DateRange) {
      const endTime = endParts.time || keptEndTimeRef.current
      keptEndTimeRef.current = endTime
      const startText = joinText(next.from ?? '', startParts.time)
      const endText = next.to ? joinText(next.to, endTime) : ''
      start.reset(startText)
      end.reset(endText)
      commit(startText, endText)
      if (!next.from || !next.to) return
      if (!isTimed) {
        setOpen(false)
        return
      }
      // Kept times the days refuse get no blur to report them.
      if (startParts.time && endTime) onInputBlur()
      focusStartTime()
    }

    // The panel is where a time gets lost: nothing else reports it.
    function onOpenChange(next: boolean) {
      if (!next && isTimed) onInputBlur()
      setOpen(next)
    }

    const sharedInputProps = {
      size,
      autoComplete: 'off',
      placeholder: placeholder ?? placeholderOf(isTimed),
      disabled,
      readOnly,
      required,
      'aria-required': field?.required || undefined,
      'aria-describedby': ariaDescribedBy,
      onBlur: onInputBlur,
    }

    return (
      <PickerShell
        ref={ref}
        role="group"
        className={cn('st-date-range-picker', isTimed && 'st-date-range-picker--minute', className)}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        size={size}
        open={open}
        onOpenChange={onOpenChange}
        label={label}
        isBlocked={disabled || readOnly}
        calendar={
          <>
            <DateRangeCalendar
              value={
                isTimed
                  ? { from: startParts.date || undefined, to: endParts.date || undefined }
                  : { from: from || undefined, to: to || undefined }
              }
              onValueChange={pickRange}
              min={bounds.dateMin}
              max={bounds.dateMax}
              isDateDisabled={isDateDisabled}
              locale={locale}
              weekStartsOn={weekStartsOn}
              today={today}
              labels={labels}
            />
            {isTimed ? (
              <div className="st-date-picker-time">
                <PickerTimeRow
                  ref={startTimeRef}
                  label={labels?.startTime ?? 'Start time'}
                  date={startParts.date}
                  value={startParts.time}
                  disabled={!startParts.date}
                  isInvalid={start.isInvalid && !!startParts.date}
                  onTimeChange={(time) => start.edit(joinText(startParts.date, time))}
                />
                <PickerTimeRow
                  label={labels?.endTime ?? 'End time'}
                  date={endParts.date}
                  value={endParts.time}
                  disabled={!endParts.date}
                  isInvalid={end.isInvalid && !!endParts.date}
                  onTimeChange={(time) => end.edit(joinText(endParts.date, time))}
                />
              </div>
            ) : null}
          </>
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
            onChange={(event) => {
              start.edit(event.target.value)
              setOpen(false)
            }}
          />
          {isTimed ? null : (
            <Text as="span" size="sm" color="muted" aria-hidden="true">
              –
            </Text>
          )}
          <Input
            {...sharedInputProps}
            ref={mergeRefs(endInputRef, end.inputRef)}
            aria-label={labels?.endDate ?? 'End date'}
            aria-invalid={isError || end.isInvalid || undefined}
            value={end.text}
            onChange={(event) => {
              end.edit(event.target.value)
              setOpen(false)
            }}
          />
        </FieldContext.Provider>
        {startName ? (
          <input type="hidden" name={startName} value={fromText(from)} disabled={disabled} />
        ) : null}
        {endName ? (
          <input type="hidden" name={endName} value={fromText(to)} disabled={disabled} />
        ) : null}
      </PickerShell>
    )
  },
)
DateRangePicker.displayName = 'DateRangePicker'
