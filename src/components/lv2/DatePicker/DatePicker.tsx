import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type MouseEvent,
  type Ref,
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
import { PickerShell, PickerTimeInput } from './PickerShell'
import {
  type DateConstraints,
  type DateGranularity,
  type DateTimeDraft,
  isValidValue,
  joinDateTime,
  parseDate,
  splitDateTime,
  useDateInput,
  useDateTimeDraft,
  useFormReset,
  useTimeInput,
  useValueBounds,
} from './use-date-input'
import './DatePicker.css'

const DEFAULT_PLACEHOLDER = 'YYYY-MM-DD'

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
   *   `<input type="datetime-local">`. It has no time zone. Each date gets a time
   *   input, and the root becomes a `role="group"`.
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
   * Text shown while the date input is empty.
   * @default 'YYYY-MM-DD'
   */
  placeholder?: string
  /**
   * Displays the error state. When used inside a `<Field>`, the field's error
   * state takes precedence. An invalid typed date or time shows the error state
   * on its own after blur.
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
   * @default 'Enter a valid date.'
   */
  invalidDate?: string
  /**
   * Accessible name of the date input with `granularity="minute"`.
   * @default 'Date'
   */
  date?: string
  /**
   * Accessible name of the time input.
   * @default 'Time'
   */
  time?: string
  /**
   * Native validation message for a missing or refused time.
   * @default 'Enter a valid time.'
   */
  invalidTime?: string
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
   * Fired when the value changes. While the inputs hold an unfinished, invalid
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
   * Ref to the date input, e.g. to focus it after a failed validation. `ref`
   * lands on the root.
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
 * With `granularity="minute"` a time input joins the date, outside the panel. Two
 * inputs cannot share one `htmlFor`, so the root becomes a `role="group"` named
 * like `DateRangePicker`: the `Field` label, `aria-label` and `aria-labelledby`
 * name the group, and clicking the `Field` label does nothing. `id` stays on the
 * date input. The browser's locale formats the time; the value is always 24-hour.
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

    const isTimed = granularity === 'minute'

    const [open, setOpen] = useState(false)
    const [rawValue, setValue] = useControllable(valueProp, defaultValue, onValueChange)
    const value = toValue(rawValue, granularity)

    const bounds = useValueBounds(min, max, granularity)
    const { accept } = bounds
    const [draft, setDraft] = useDateTimeDraft(value, isTimed, accept)
    const joined = joinDateTime(draft, isTimed)

    function commit(next: DateTimeDraft) {
      setDraft(next)
      setValue(accept(joinDateTime(next, isTimed)))
    }

    const constraints: DateConstraints = {
      min: bounds.dateMin,
      max: bounds.dateMax,
      isDateDisabled,
    }
    const parse = (text: string) => parseDate(text, constraints)
    const input = useDateInput(
      draft.date,
      parse,
      (text) => commit({ ...draft, date: parse(text) }),
      labels?.invalidDate,
      isTimed && !draft.date && !!draft.time,
    )
    const time = useTimeInput(
      isTimed && !!joined && joined !== value,
      isTimed && !!draft.date && !draft.time,
      labels?.invalidTime,
    )

    // A controlled value belongs to the parent; only the draft goes.
    useFormReset(input.inputRef, () => {
      const next = valueProp === undefined ? defaultValue : value
      const nextDraft = splitDateTime(toValue(next, granularity))
      input.reset(nextDraft.date)
      time.reset()
      setDraft(nextDraft)
      setValue(next)
    })

    const label = labels?.openCalendar ?? 'Choose date'

    // Picking the selected day changes no value, so onValueChange stays silent.
    function closeOnSelectedDay(event: MouseEvent<HTMLDivElement>) {
      if ((event.target as Element).closest('[aria-selected="true"]')) setOpen(false)
    }

    function onInputBlur() {
      input.markBlurred()
      time.markBlurred()
    }

    // Input reads Field on its own while it is the only input. With a time next
    // to it, the group takes the Field label and resolves the rest itself
    // (lv2-composition-guideline §4.4).
    const ariaDescribedByResolved = field?.describedBy ?? ariaDescribedBy
    const groupProps = isTimed
      ? {
          role: 'group',
          'aria-label': ariaLabel,
          'aria-labelledby': ariaLabelledBy ?? (ariaLabel ? undefined : field?.labelId),
        }
      : null
    const namingProps = isTimed
      ? {
          'aria-label': labels?.date ?? 'Date',
          'aria-describedby': ariaDescribedByResolved,
          'aria-required': field?.required || undefined,
        }
      : {
          'aria-label': ariaLabel,
          'aria-labelledby': ariaLabelledBy,
          'aria-describedby': ariaDescribedBy,
        }

    const dateInput = (
      <Input
        ref={mergeRefs(inputRef, input.inputRef)}
        id={id}
        size={size}
        autoComplete="off"
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        {...namingProps}
        aria-invalid={isError || input.isInvalid || undefined}
        value={input.text}
        onChange={(event) => {
          input.edit(event.target.value)
          setOpen(false)
        }}
        onBlur={onInputBlur}
      />
    )

    return (
      <PickerShell
        ref={ref}
        className={cn('st-date-picker', isTimed && 'st-date-picker--minute', className)}
        size={size}
        open={open}
        onOpenChange={setOpen}
        label={label}
        isBlocked={disabled || readOnly}
        calendar={
          <DateCalendar
            value={draft.date}
            onValueChange={(date) => {
              input.reset(date)
              commit({ ...draft, date })
              // The time was never touched, so no blur would report it.
              time.markBlurred()
              setOpen(false)
            }}
            onClick={closeOnSelectedDay}
            min={bounds.dateMin}
            max={bounds.dateMax}
            isDateDisabled={isDateDisabled}
            locale={locale}
            weekStartsOn={weekStartsOn}
            today={today}
            labels={labels}
          />
        }
        {...groupProps}
        {...props}
      >
        {isTimed ? (
          <FieldContext.Provider value={null}>
            {dateInput}
            <PickerTimeInput
              control={time}
              isError={isError}
              size={size}
              disabled={disabled}
              readOnly={readOnly}
              required={required}
              aria-label={labels?.time ?? 'Time'}
              aria-describedby={ariaDescribedByResolved}
              aria-required={field?.required || undefined}
              value={draft.time}
              onTimeChange={(next) => commit({ ...draft, time: next })}
              onBlur={onInputBlur}
            />
          </FieldContext.Provider>
        ) : (
          dateInput
        )}
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
  /**
   * Accessible name of the first time input.
   * @default 'Start time'
   */
  startTime?: string
  /**
   * Accessible name of the second time input.
   * @default 'End time'
   */
  endTime?: string
  /**
   * Native validation message for a missing or refused time.
   * @default 'Enter a valid time.'
   */
  invalidTime?: string
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
 * With `granularity="minute"` each date gets a time input, outside the panel, and
 * the frame takes two rows.
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

    const isTimed = granularity === 'minute'

    const [open, setOpen] = useState(false)
    const [range, setRange] = useControllable(valueProp, defaultValue, onValueChange)
    const from = toValue(range.from, granularity)
    const to = toValue(range.to, granularity)

    const bounds = useValueBounds(min, max, granularity)
    const { accept } = bounds
    const [startDraft, setStartDraft] = useDateTimeDraft(from, isTimed, accept)
    const [endDraft, setEndDraft] = useDateTimeDraft(to, isTimed, (next) =>
      from && next < from ? '' : accept(next),
    )
    const startJoined = joinDateTime(startDraft, isTimed)
    const endJoined = joinDateTime(endDraft, isTimed)

    const constraints: DateConstraints = {
      min: bounds.dateMin,
      max: bounds.dateMax,
      isDateDisabled,
    }
    const parseStart = (text: string) => parseDate(text, constraints)
    const parseEndAfter = (text: string, startDate: string) => {
      const date = parseDate(text, constraints)
      return startDate && date < startDate ? '' : date
    }

    /** Both `date`s are still raw text here. */
    function commit(nextStart: DateTimeDraft, nextEnd: DateTimeDraft) {
      // A side the user did not edit stays as given, even outside `min` / `max`.
      const keepOrParse = (text: string, current: string) =>
        text === current ? current : parseDate(text, constraints)
      const keepOrAccept = (next: string, current: string) =>
        next === current ? current : accept(next)
      const startDate = keepOrParse(nextStart.date, startDraft.date)
      const parsedEnd = keepOrParse(nextEnd.date, endDraft.date)
      const endDate = startDate && parsedEnd < startDate ? '' : parsedEnd
      const settledStart = { date: startDate, time: nextStart.time }
      const settledEnd = { date: endDate, time: nextEnd.time }
      const nextFrom = keepOrAccept(joinDateTime(settledStart, isTimed), from)
      const parsedTo = keepOrAccept(joinDateTime(settledEnd, isTimed), to)
      const nextTo = nextFrom && parsedTo < nextFrom ? '' : parsedTo
      setStartDraft(settledStart)
      setEndDraft(settledEnd)
      if (nextFrom === from && nextTo === to) return
      setRange({ ...(nextFrom && { from: nextFrom }), ...(nextTo && { to: nextTo }) })
    }

    const start = useDateInput(
      startDraft.date,
      parseStart,
      (text) => commit({ ...startDraft, date: text }, { ...endDraft, date: end.text }),
      labels?.invalidDate,
      isTimed && !startDraft.date && !!startDraft.time,
    )
    const end = useDateInput(
      endDraft.date,
      (text) => parseEndAfter(text, startDraft.date),
      (text) => commit({ ...startDraft, date: start.text }, { ...endDraft, date: text }),
      labels?.invalidDate,
      isTimed && !endDraft.date && !!endDraft.time,
    )
    const startTime = useTimeInput(
      isTimed && !!startJoined && startJoined !== from,
      isTimed && !!startDraft.date && !startDraft.time,
      labels?.invalidTime,
    )
    const endTime = useTimeInput(
      isTimed && !!endJoined && endJoined !== to,
      isTimed && !!endDraft.date && !endDraft.time,
      labels?.invalidTime,
    )

    // A controlled value belongs to the parent; only the drafts go.
    useFormReset(start.inputRef, () => {
      const isControlled = valueProp !== undefined
      const nextFrom = isControlled ? from : toValue(defaultValue.from, granularity)
      const nextTo = isControlled ? to : toValue(defaultValue.to, granularity)
      const nextStart = splitDateTime(nextFrom)
      const nextEnd = splitDateTime(nextTo)
      start.reset(nextStart.date)
      end.reset(nextEnd.date)
      startTime.reset()
      endTime.reset()
      setStartDraft(nextStart)
      setEndDraft(nextEnd)
      if (!isControlled && (nextFrom !== from || nextTo !== to)) setRange(defaultValue)
    })

    const label = labels?.openCalendar ?? 'Choose date range'

    // Editing the start can invalidate the end, so both report on any blur.
    function onInputBlur() {
      start.markBlurred()
      end.markBlurred()
      startTime.markBlurred()
      endTime.markBlurred()
    }

    const sharedInputProps = {
      size,
      disabled,
      readOnly,
      required,
      'aria-required': field?.required || undefined,
      'aria-describedby': ariaDescribedBy,
      onBlur: onInputBlur,
    }
    const dateInputProps = { ...sharedInputProps, autoComplete: 'off', placeholder }

    return (
      <PickerShell
        ref={ref}
        role="group"
        className={cn('st-date-range-picker', isTimed && 'st-date-range-picker--minute', className)}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        size={size}
        open={open}
        onOpenChange={setOpen}
        label={label}
        isBlocked={disabled || readOnly}
        calendar={
          <DateRangeCalendar
            value={{ from: startDraft.date || undefined, to: endDraft.date || undefined }}
            onValueChange={(next) => {
              start.reset(next.from ?? '')
              end.reset(next.to ?? '')
              commit({ ...startDraft, date: next.from ?? '' }, { ...endDraft, date: next.to ?? '' })
              // The times were never touched, so no blur would report them.
              startTime.markBlurred()
              endTime.markBlurred()
              if (next.from && next.to) setOpen(false)
            }}
            min={bounds.dateMin}
            max={bounds.dateMax}
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
            {...dateInputProps}
            ref={mergeRefs(startInputRef, start.inputRef)}
            aria-label={labels?.startDate ?? 'Start date'}
            aria-invalid={isError || start.isInvalid || undefined}
            value={start.text}
            onChange={(event) => {
              start.edit(event.target.value)
              setOpen(false)
            }}
          />
          {isTimed ? (
            <PickerTimeInput
              {...sharedInputProps}
              control={startTime}
              isError={isError}
              aria-label={labels?.startTime ?? 'Start time'}
              value={startDraft.time}
              onTimeChange={(next) =>
                commit({ date: start.text, time: next }, { ...endDraft, date: end.text })
              }
            />
          ) : (
            <Text as="span" size="sm" color="muted" aria-hidden="true">
              –
            </Text>
          )}
          <Input
            {...dateInputProps}
            ref={mergeRefs(endInputRef, end.inputRef)}
            aria-label={labels?.endDate ?? 'End date'}
            aria-invalid={isError || end.isInvalid || undefined}
            value={end.text}
            onChange={(event) => {
              end.edit(event.target.value)
              setOpen(false)
            }}
          />
          {isTimed ? (
            <PickerTimeInput
              {...sharedInputProps}
              control={endTime}
              isError={isError}
              aria-label={labels?.endTime ?? 'End time'}
              value={endDraft.time}
              onTimeChange={(next) =>
                commit({ ...startDraft, date: start.text }, { date: end.text, time: next })
              }
            />
          ) : null}
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
