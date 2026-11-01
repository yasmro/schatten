import { cva } from 'class-variance-authority'

/**
 * Variants for the `DateCalendar` root — class-name concatenation only.
 *
 * DateCalendar is a form control, so it sits outside Pattern A / B: there is no
 * `variant`, and error state goes through `isError`. There is no `size` axis
 * either — the cell size is fixed, which keeps the per-component CSS inside its
 * budget and can be added later without breaking anything.
 *
 * `DateRangeCalendar` shares every sub-element class with `DateCalendar` and
 * adds its own block on top, so both variants emit `st-date-calendar`.
 *
 * See: .claude/rules/css-api.md, .claude/rules/component-api-conventions.md, #567.
 */
export const dateCalendarVariants = cva('st-date-calendar')

export const dateRangeCalendarVariants = cva('st-date-calendar st-date-range-calendar')
