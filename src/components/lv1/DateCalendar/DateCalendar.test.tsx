import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef, useState } from 'react'
import { renderToString } from 'react-dom/server'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Field } from '../Field/Field'
import {
  DateCalendar,
  type DateCalendarProps,
  type DateRange,
  DateRangeCalendar,
} from './DateCalendar'
import { createFormatters } from './date-math'

const TODAY = '2026-10-24'

const dayName = (date: string, locale = 'en-US') => createFormatters(locale).dayLabel(date)
// A prefix match: the ends of a range append "range start" / "range end".
const day = (date: string) =>
  screen.getByRole('button', { name: (name) => name.startsWith(dayName(date)) })
const cell = (date: string) => day(date).closest('td') as HTMLElement
const grid = () => screen.getByRole('grid')

function ControlledMonth(props: { onMonthChange?: (month: string) => void }) {
  const [month, setMonth] = useState('2026-10-01')
  return (
    <DateCalendar
      today={TODAY}
      month={month}
      onMonthChange={(next) => {
        setMonth(next)
        props.onMonthChange?.(next)
      }}
    />
  )
}

function ControlledRange(props: { onValueChange?: (value: DateRange) => void }) {
  const [value, setValue] = useState<DateRange>({})
  return (
    <DateRangeCalendar
      today={TODAY}
      defaultMonth="2026-10-01"
      value={value}
      onValueChange={(next) => {
        setValue(next)
        props.onValueChange?.(next)
      }}
    />
  )
}

function WithInput() {
  const [text, setText] = useState('')
  return (
    <>
      <DateCalendar today={TODAY} defaultValue="2026-10-20" min="2026-10-20" />
      <input aria-label="Other" value={text} onChange={(event) => setText(event.target.value)} />
    </>
  )
}

function Delayed() {
  const [month, setMonth] = useState('2026-10-01')
  return (
    <>
      <DateCalendar today={TODAY} month={month} defaultValue="2026-10-31" />
      <button type="button" onClick={() => setMonth('2026-11-01')}>
        Show November
      </button>
    </>
  )
}

function renderCalendar(props: DateCalendarProps = {}) {
  return render(<DateCalendar today={TODAY} {...props} />)
}

describe('DateCalendar', () => {
  describe('rendering', () => {
    it('renders the month of today by default', () => {
      renderCalendar()
      expect(screen.getByRole('grid', { name: 'October 2026' })).toBeInTheDocument()
    })

    it('renders 6 weeks', () => {
      renderCalendar()
      expect(within(grid()).getAllByRole('row')).toHaveLength(7)
    })

    it('forwards className and the root ref', () => {
      const ref = createRef<HTMLDivElement>()
      render(<DateCalendar ref={ref} today={TODAY} className="custom" />)
      expect(ref.current).toHaveClass('st-date-calendar', 'custom')
    })

    it('passes data-testid to the root', () => {
      renderCalendar({ 'data-testid': 'calendar' } as DateCalendarProps)
      expect(screen.getByTestId('calendar')).toHaveAttribute('role', 'group')
    })
  })

  describe('class API', () => {
    it('emits the documented sub-element classes', () => {
      renderCalendar()
      expect(grid()).toHaveClass('st-date-calendar__grid')
      expect(day(TODAY)).toHaveClass('st-date-calendar__day')
      expect(cell(TODAY)).toHaveClass('st-date-calendar__cell')
      expect(screen.getByRole('button', { name: 'Next month' })).toHaveClass(
        'st-date-calendar__nav',
        'st-date-calendar__nav--next',
      )
    })

    it('keeps DateRangeCalendar on the same block plus its own', () => {
      const { container } = render(<DateRangeCalendar today={TODAY} />)
      expect(container.firstChild).toHaveClass('st-date-calendar', 'st-date-range-calendar')
    })
  })

  describe('value', () => {
    it('reflects a controlled value and fires onValueChange', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      renderCalendar({ value: '2026-10-20', onValueChange })

      await user.click(day('2026-10-22'))

      expect(onValueChange).toHaveBeenCalledWith('2026-10-22')
      expect(cell('2026-10-20')).toHaveAttribute('aria-selected', 'true')
      expect(cell('2026-10-22')).not.toHaveAttribute('aria-selected')
    })

    it('updates on click when uncontrolled', async () => {
      const user = userEvent.setup()
      renderCalendar({ defaultValue: '2026-10-20' })

      await user.click(day('2026-10-22'))

      expect(cell('2026-10-22')).toHaveAttribute('aria-selected', 'true')
      expect(cell('2026-10-20')).not.toHaveAttribute('aria-selected')
    })

    it('opens on the month of the value', () => {
      renderCalendar({ defaultValue: '2026-03-15' })
      expect(screen.getByRole('grid', { name: 'March 2026' })).toBeInTheDocument()
    })

    it('treats an empty value as no selection without warning', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      renderCalendar({ value: '' })
      expect(warn).not.toHaveBeenCalled()
      warn.mockRestore()
    })
  })

  describe('month', () => {
    it('moves with the navigation buttons and fires onMonthChange', async () => {
      const user = userEvent.setup()
      const onMonthChange = vi.fn()
      renderCalendar({ onMonthChange })

      await user.click(screen.getByRole('button', { name: 'Next month' }))

      expect(onMonthChange).toHaveBeenCalledWith('2026-11-01')
      expect(screen.getByRole('grid', { name: 'November 2026' })).toBeInTheDocument()
    })

    it('keeps focus on the navigation button', async () => {
      const user = userEvent.setup()
      renderCalendar()
      const next = screen.getByRole('button', { name: 'Next month' })

      await user.click(next)

      expect(next).toHaveFocus()
    })

    it('follows the controlled month', async () => {
      const user = userEvent.setup()
      const onMonthChange = vi.fn()
      render(<ControlledMonth onMonthChange={onMonthChange} />)

      await user.click(screen.getByRole('button', { name: 'Previous month' }))

      expect(onMonthChange).toHaveBeenCalledWith('2026-09-01')
      expect(screen.getByRole('grid', { name: 'September 2026' })).toBeInTheDocument()
    })

    it('stays put when the parent ignores the change', async () => {
      const user = userEvent.setup()
      renderCalendar({ month: '2026-10-01' })

      await user.click(screen.getByRole('button', { name: 'Next month' }))

      expect(screen.getByRole('grid', { name: 'October 2026' })).toBeInTheDocument()
    })

    it('accepts any date in the month', () => {
      renderCalendar({ month: '2026-02-17' })
      expect(screen.getByRole('grid', { name: 'February 2026' })).toBeInTheDocument()
    })

    it('announces through aria-live on the caption itself', () => {
      renderCalendar()
      expect(screen.getByText('October 2026')).toHaveAttribute('aria-live', 'polite')
    })

    it('keeps the same caption element across months so the change is announced', async () => {
      const user = userEvent.setup()
      renderCalendar()
      const caption = screen.getByText('October 2026')

      await user.click(screen.getByRole('button', { name: 'Next month' }))

      expect(caption).toHaveTextContent('November 2026')
    })
  })

  describe('dropdown caption', () => {
    it('moves with the month and year selects', async () => {
      const user = userEvent.setup()
      renderCalendar({ captionLayout: 'dropdown' })

      await user.selectOptions(screen.getByRole('combobox', { name: 'Month' }), 'March')
      await user.selectOptions(screen.getByRole('combobox', { name: 'Year' }), '2025')

      expect(screen.getByRole('grid', { name: 'March 2025' })).toBeInTheDocument()
    })

    it('disables the months outside min and max', () => {
      renderCalendar({ captionLayout: 'dropdown', min: '2026-03-15', max: '2026-11-15' })
      expect(screen.getByRole('option', { name: 'March' })).toBeEnabled()
      expect(screen.getByRole('option', { name: 'February' })).toBeDisabled()
      expect(screen.getByRole('option', { name: 'November' })).toBeEnabled()
      expect(screen.getByRole('option', { name: 'December' })).toBeDisabled()
    })

    it('offers years around min when min is far from today', () => {
      renderCalendar({ captionLayout: 'dropdown', min: '3000-01-01' })
      const years = within(screen.getByRole('combobox', { name: 'Year' }))
      expect(years.getByRole('option', { name: '3000' })).toBeInTheDocument()
      expect(years.getByRole('option', { name: '3010' })).toBeInTheDocument()
    })

    it('prints the years in the locale digits', () => {
      renderCalendar({ captionLayout: 'dropdown', locale: 'fa-IR', labels: { year: 'Year' } })
      const digits = new Intl.NumberFormat('fa-IR', { useGrouping: false })
      expect(
        within(screen.getByRole('combobox', { name: 'Year' })).getByRole('option', {
          name: digits.format(2026),
        }),
      ).toBeInTheDocument()
    })

    it('keeps the caption for the announcement, visually hidden', () => {
      renderCalendar({ captionLayout: 'dropdown' })
      expect(screen.getByText('October 2026')).toHaveClass('st-date-calendar__caption--hidden')
    })
  })

  describe('min / max / isDateDisabled', () => {
    it('marks out-of-range dates and blocks them', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      renderCalendar({ min: '2026-10-10', max: '2026-10-20', onValueChange })

      expect(cell('2026-10-09')).toHaveAttribute('aria-disabled', 'true')
      expect(day('2026-10-09')).toHaveAttribute('aria-disabled', 'true')
      expect(cell('2026-10-10')).not.toHaveAttribute('aria-disabled')
      expect(cell('2026-10-21')).toHaveAttribute('aria-disabled', 'true')

      await user.click(day('2026-10-09'))

      expect(onValueChange).not.toHaveBeenCalled()
    })

    it('blocks dates from isDateDisabled', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      renderCalendar({ isDateDisabled: (date) => date === '2026-10-15', onValueChange })

      expect(cell('2026-10-15')).toHaveAttribute('aria-disabled', 'true')
      await user.click(day('2026-10-15'))

      expect(onValueChange).not.toHaveBeenCalled()
    })

    it('re-evaluates isDateDisabled when a new function arrives', () => {
      const { rerender } = render(<DateCalendar today={TODAY} isDateDisabled={() => false} />)
      expect(cell('2026-10-15')).not.toHaveAttribute('aria-disabled')

      rerender(<DateCalendar today={TODAY} isDateDisabled={(date) => date === '2026-10-15'} />)

      expect(cell('2026-10-15')).toHaveAttribute('aria-disabled', 'true')
    })

    it('stops the navigation buttons at the limits, without disabling them', async () => {
      const user = userEvent.setup()
      const onMonthChange = vi.fn()
      renderCalendar({ min: '2026-10-05', max: '2026-10-25', onMonthChange })
      const previous = screen.getByRole('button', { name: 'Previous month' })
      const next = screen.getByRole('button', { name: 'Next month' })

      expect(previous).toHaveAttribute('aria-disabled', 'true')
      expect(next).toHaveAttribute('aria-disabled', 'true')
      expect(next).toBeEnabled()

      await user.click(next)

      expect(onMonthChange).not.toHaveBeenCalled()
      expect(next).toHaveFocus()
    })

    it('keeps focus on the button that reaches the limit', async () => {
      const user = userEvent.setup()
      renderCalendar({ max: '2026-11-15' })
      const next = screen.getByRole('button', { name: 'Next month' })

      await user.click(next)

      expect(next).toHaveAttribute('aria-disabled', 'true')
      expect(next).toHaveFocus()
    })

    it('opens inside the limits', () => {
      renderCalendar({ min: '2027-02-01' })
      expect(screen.getByRole('grid', { name: 'February 2027' })).toBeInTheDocument()
    })
  })

  describe('outside days', () => {
    it('shows them as inert cells', () => {
      renderCalendar()
      const outside = screen.getByRole('gridcell', { name: dayName('2026-09-30') })
      expect(outside).toHaveAttribute('data-outside', 'true')
      expect(outside).toHaveAttribute('aria-disabled', 'true')
      expect(within(outside).queryByRole('button')).not.toBeInTheDocument()
    })
  })

  describe('date marks', () => {
    it('marks today with aria-current', () => {
      renderCalendar()
      expect(day(TODAY)).toHaveAttribute('aria-current', 'date')
      expect(day('2026-10-23')).not.toHaveAttribute('aria-current')
    })

    it('names each day with its full date', () => {
      renderCalendar({ locale: 'ja-JP' })
      expect(
        screen.getByRole('button', { name: dayName('2026-10-20', 'ja-JP') }),
      ).toHaveTextContent(/^20$/)
    })
  })

  describe('server rendering', () => {
    afterEach(() => {
      vi.useRealTimers()
    })

    it('does not depend on the local date when the first month is given', () => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date(2026, 9, 24, 12))
      const server = renderToString(<DateCalendar defaultMonth="2026-10-01" id="calendar" />)
      vi.setSystemTime(new Date(2026, 9, 25, 12))
      const client = renderToString(<DateCalendar defaultMonth="2026-10-01" id="calendar" />)
      expect(server).toBe(client)
    })

    it('leaves the default today mark out of the server HTML', () => {
      const html = renderToString(<DateCalendar defaultMonth="2026-10-01" />)
      expect(html).not.toContain('aria-current')
    })

    it('keeps an explicit today in the server HTML', () => {
      expect(renderToString(<DateCalendar today={TODAY} />)).toContain('aria-current="date"')
    })

    it('marks the local date once mounted on the client', () => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date(2026, 9, 24, 12))
      render(<DateCalendar />)
      expect(day('2026-10-24')).toHaveAttribute('aria-current', 'date')
    })
  })

  describe('keyboard', () => {
    async function focusDay(date: string, props: DateCalendarProps = {}) {
      const user = userEvent.setup()
      renderCalendar({ defaultValue: date, ...props })
      await user.tab()
      await user.tab()
      await user.tab()
      expect(day(date)).toHaveFocus()
      return user
    }

    it.each([
      ['{ArrowRight}', '2026-10-21'],
      ['{ArrowLeft}', '2026-10-19'],
      ['{ArrowDown}', '2026-10-27'],
      ['{ArrowUp}', '2026-10-13'],
      ['{Home}', '2026-10-18'],
      ['{End}', '2026-10-24'],
    ])('moves focus with %s', async (key, expected) => {
      const user = await focusDay('2026-10-20')
      await user.keyboard(key)
      expect(day(expected)).toHaveFocus()
    })

    it.each([
      ['{PageDown}', '2026-11-20', 'November 2026'],
      ['{PageUp}', '2026-09-20', 'September 2026'],
      ['{Shift>}{PageDown}{/Shift}', '2027-10-20', 'October 2027'],
      ['{Shift>}{PageUp}{/Shift}', '2025-10-20', 'October 2025'],
    ])('moves by month with %s', async (key, expected, caption) => {
      const user = await focusDay('2026-10-20')
      await user.keyboard(key)
      expect(screen.getByRole('grid', { name: caption })).toBeInTheDocument()
      expect(day(expected)).toHaveFocus()
    })

    it('crosses into the adjacent month', async () => {
      const user = await focusDay('2026-10-31')
      await user.keyboard('{ArrowRight}')
      expect(screen.getByRole('grid', { name: 'November 2026' })).toBeInTheDocument()
      expect(day('2026-11-01')).toHaveFocus()
    })

    it('clamps the day when the target month is shorter', async () => {
      const user = await focusDay('2026-01-31')
      await user.keyboard('{PageDown}')
      expect(day('2026-02-28')).toHaveFocus()
    })

    it('selects with Enter and Space', async () => {
      const onValueChange = vi.fn()
      const user = await focusDay('2026-10-20', { onValueChange })
      await user.keyboard('{ArrowRight}{Enter}')
      expect(onValueChange).toHaveBeenLastCalledWith('2026-10-21')
      await user.keyboard('{ArrowRight} ')
      expect(onValueChange).toHaveBeenLastCalledWith('2026-10-22')
    })

    it('stops at min and max', async () => {
      const user = await focusDay('2026-10-20', { min: '2026-10-20' })
      await user.keyboard('{ArrowLeft}')
      expect(day('2026-10-20')).toHaveFocus()
    })

    it('does not steal focus after an arrow key clamps at min', async () => {
      // Regression (#566 PoC, reintroduced in the first cut of #567): clamping
      // leaves the day unchanged, so no commit ran and a "move focus" flag
      // stayed up until the next render. The day must stay on screen here, or
      // the stale flag finds nothing and the test passes for the wrong reason.
      const user = userEvent.setup()
      render(<WithInput />)
      day('2026-10-20').focus()
      await user.keyboard('{ArrowLeft}')
      const input = screen.getByRole('textbox', { name: 'Other' })

      await user.click(input)
      await user.keyboard('a')

      expect(input).toHaveFocus()
      expect(input).toHaveValue('a')
    })

    it('follows the real focus when the parent refuses the month', async () => {
      const user = userEvent.setup()
      renderCalendar({ month: '2026-10-01', defaultValue: '2026-10-31' })
      day('2026-10-31').focus()

      await user.keyboard('{ArrowRight}')
      expect(day('2026-10-31')).toHaveFocus()

      await user.keyboard('{ArrowLeft}')
      expect(day('2026-10-30')).toHaveFocus()
    })

    it('does not move focus later into a month the parent refused', async () => {
      const user = userEvent.setup()
      render(<Delayed />)
      day('2026-10-31').focus()
      await user.keyboard('{ArrowRight}')
      const show = screen.getByRole('button', { name: 'Show November' })

      await user.click(show)

      expect(show).toHaveFocus()
    })

    it('passes through a disabled date', async () => {
      const user = await focusDay('2026-10-20', {
        isDateDisabled: (date) => date === '2026-10-21',
      })
      await user.keyboard('{ArrowRight}')
      expect(day('2026-10-21')).toHaveFocus()
    })

    it('leaves browser shortcuts alone', async () => {
      const user = await focusDay('2026-10-20')
      await user.keyboard('{Control>}{ArrowRight}{/Control}')
      expect(day('2026-10-20')).toHaveFocus()
    })
  })

  describe('roving tabindex', () => {
    it('keeps exactly one day in the tab order', () => {
      renderCalendar()
      const tabbable = within(grid())
        .getAllByRole('button')
        .filter((button) => button.tabIndex === 0)
      expect(tabbable).toEqual([day(TODAY)])
    })

    it('prefers the selected date over today', () => {
      renderCalendar({ defaultValue: '2026-10-20' })
      expect(day('2026-10-20')).toHaveAttribute('tabindex', '0')
      expect(day(TODAY)).toHaveAttribute('tabindex', '-1')
    })

    it('falls back to the first of the month when the month moves away', async () => {
      const user = userEvent.setup()
      renderCalendar()
      await user.click(screen.getByRole('button', { name: 'Next month' }))
      const tabbable = within(grid())
        .getAllByRole('button')
        .filter((button) => button.tabIndex === 0)
      expect(tabbable).toEqual([day('2026-11-01')])
    })

    it('clamps the tab stop into the limits', () => {
      renderCalendar({ min: '2026-10-28' })
      expect(day('2026-10-28')).toHaveAttribute('tabindex', '0')
    })
  })

  describe('error', () => {
    it('sets aria-invalid when isError is true', () => {
      renderCalendar({ isError: true, 'data-testid': 'calendar' } as DateCalendarProps)
      expect(screen.getByTestId('calendar')).toHaveAttribute('aria-invalid', 'true')
    })

    it('omits aria-invalid otherwise', () => {
      renderCalendar({ 'data-testid': 'calendar' } as DateCalendarProps)
      expect(screen.getByTestId('calendar')).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('disabled', () => {
    it('disables every control and removes the tab stop', async () => {
      const onValueChange = vi.fn()
      renderCalendar({ disabled: true, onValueChange })
      expect(day(TODAY)).toBeDisabled()
      expect(screen.getByRole('button', { name: 'Next month' })).toBeDisabled()
      expect(cell(TODAY)).toHaveAttribute('aria-disabled', 'true')
    })
  })

  describe('readOnly', () => {
    it('navigates but does not select', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      renderCalendar({ readOnly: true, onValueChange })
      expect(grid()).toHaveAttribute('aria-readonly', 'true')

      await user.click(day('2026-10-20'))
      await user.click(screen.getByRole('button', { name: 'Next month' }))

      expect(onValueChange).not.toHaveBeenCalled()
      expect(screen.getByRole('grid', { name: 'November 2026' })).toBeInTheDocument()
    })
  })

  describe('inside <Field>', () => {
    it('is named by the Field label at the group root', () => {
      render(
        <Field label="Check-in">
          <DateCalendar today={TODAY} />
        </Field>,
      )
      expect(screen.getByRole('group', { name: 'Check-in' })).toBeInTheDocument()
    })

    it('prefers an explicit aria-label', () => {
      render(
        <Field label="Check-in">
          <DateCalendar today={TODAY} aria-label="Arrival" />
        </Field>,
      )
      expect(screen.getByRole('group', { name: 'Arrival' })).toBeInTheDocument()
    })

    it('inherits isError and disabled', () => {
      render(
        <Field label="Check-in" error="Pick a date" disabled>
          <DateCalendar today={TODAY} />
        </Field>,
      )
      const group = screen.getByRole('group', { name: 'Check-in' })
      expect(group).toHaveAttribute('aria-invalid', 'true')
      expect(day(TODAY)).toBeDisabled()
    })

    it('picks up aria-describedby', () => {
      render(
        <Field label="Check-in" description="Earliest is today">
          <DateCalendar today={TODAY} />
        </Field>,
      )
      expect(screen.getByRole('group', { name: 'Check-in' })).toHaveAccessibleDescription(
        'Earliest is today',
      )
    })

    it('does not put aria-required on a role that forbids it', () => {
      render(
        <Field label="Check-in" required>
          <DateCalendar today={TODAY} />
        </Field>,
      )
      expect(screen.getByRole('group', { name: /Check-in/ })).not.toHaveAttribute('aria-required')
      expect(grid()).not.toHaveAttribute('aria-required')
    })
  })

  describe('labels', () => {
    it('overrides the navigation names', () => {
      renderCalendar({ labels: { previousMonth: '前の月', nextMonth: '次の月' } })
      expect(screen.getByRole('button', { name: '前の月' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: '次の月' })).toBeInTheDocument()
    })
  })

  describe('locale', () => {
    it('falls back to en-US for an unsupported tag', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      renderCalendar({ locale: 'jp' })
      expect(screen.getByRole('grid', { name: 'October 2026' })).toBeInTheDocument()
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('unsupported `locale`'))
      warn.mockRestore()
    })

    it('builds the caption from Intl', () => {
      renderCalendar({ locale: 'ja-JP' })
      const expected = createFormatters('ja-JP').caption('2026-10-01')
      expect(screen.getByRole('grid', { name: expected })).toBeInTheDocument()
    })
  })

  describe('weekStartsOn', () => {
    it('reorders the header', () => {
      renderCalendar({ weekStartsOn: 1 })
      expect(within(grid()).getAllByRole('columnheader')[0]).toHaveTextContent('Mon')
    })
  })

  describe('showWeekNumber', () => {
    it('adds a named column and the row Thursday week number', () => {
      renderCalendar({ showWeekNumber: true, weekStartsOn: 6 })
      expect(screen.getByRole('columnheader', { name: 'Week' })).toBeInTheDocument()
      expect(screen.getByRole('rowheader', { name: '41' })).toBeInTheDocument()
    })
  })

  describe('invalid props', () => {
    it('warns about an impossible date and ignores it', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      renderCalendar({ value: '2026-02-30' })
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('`value` "2026-02-30"'))
      expect(document.querySelector('[aria-selected]')).toBeNull()
      warn.mockRestore()
    })

    it('warns when min is after max and ignores both', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      renderCalendar({ min: '2026-12-01', max: '2026-01-01' })
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('`min` is after `max`'))
      expect(cell(TODAY)).not.toHaveAttribute('aria-disabled')
      warn.mockRestore()
    })
  })
})

describe('DateCalendar CSS contract', () => {
  // The slash is a few pixels, well under the VRT threshold, and jsdom loads no
  // stylesheet (vrt-spec-guideline §"The same 1% is a permanent blind spot").
  const css = readFileSync(resolve(__dirname, 'DateCalendar.css'), 'utf8')
  const slashRule = css.match(/__day\[aria-disabled="true"\]::after \{([^}]*)\}/)?.[1] ?? ''

  it('draws the unavailable-day slash at 45°, rising to the right', () => {
    expect(slashRule).toContain('rotate: -45deg')
  })

  it('draws it with a border, which forced colors keeps', () => {
    expect(slashRule).toContain('border-top: 1px solid currentColor')
    expect(slashRule).not.toMatch(/gradient|background/)
  })

  it('no longer strikes the digit through', () => {
    expect(css).not.toContain('line-through')
  })
})

describe('DateRangeCalendar', () => {
  const start = '2026-10-20'
  const end = '2026-10-24'

  function renderRange(props: Parameters<typeof DateRangeCalendar>[0] = {}) {
    return render(<DateRangeCalendar today={TODAY} defaultMonth="2026-10-01" {...props} />)
  }

  it('is multiselectable', () => {
    renderRange()
    expect(grid()).toHaveAttribute('aria-multiselectable', 'true')
  })

  describe('selection', () => {
    it('picks a start, then an end', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(<ControlledRange onValueChange={onValueChange} />)

      await user.click(day(start))
      expect(onValueChange).toHaveBeenLastCalledWith({ from: start })

      await user.click(day(end))
      expect(onValueChange).toHaveBeenLastCalledWith({ from: start, to: end })
    })

    it('swaps when the second click is earlier', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(<ControlledRange onValueChange={onValueChange} />)

      await user.click(day(end))
      await user.click(day(start))

      expect(onValueChange).toHaveBeenLastCalledWith({ from: start, to: end })
    })

    it('starts over on a click after a finished range', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(<ControlledRange onValueChange={onValueChange} />)

      await user.click(day(start))
      await user.click(day(end))
      await user.click(day('2026-10-10'))

      expect(onValueChange).toHaveBeenLastCalledWith({ from: '2026-10-10' })
    })

    it('makes a one-day range from the same date twice', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(<ControlledRange onValueChange={onValueChange} />)

      await user.click(day(start))
      await user.click(day(start))

      expect(onValueChange).toHaveBeenLastCalledWith({ from: start, to: start })
    })

    it('works uncontrolled', async () => {
      const user = userEvent.setup()
      renderRange()

      await user.click(day(start))
      await user.click(day(end))

      expect(cell('2026-10-22')).toHaveAttribute('aria-selected', 'true')
    })

    it('swaps a controlled range given backwards', () => {
      renderRange({ value: { from: end, to: start } })
      expect(cell(start)).toHaveAttribute('data-range-start', 'true')
      expect(cell(end)).toHaveAttribute('data-range-end', 'true')
    })
  })

  describe('range marks', () => {
    it('exposes start, middle and end on the cells', () => {
      renderRange({ value: { from: start, to: end } })

      expect(cell(start)).toHaveAttribute('data-range-start', 'true')
      expect(cell(start)).toHaveAttribute('aria-selected', 'true')
      expect(cell('2026-10-22')).toHaveAttribute('data-range-middle', 'true')
      expect(cell('2026-10-22')).toHaveAttribute('aria-selected', 'true')
      expect(cell(end)).toHaveAttribute('data-range-end', 'true')
      expect(cell('2026-10-19')).not.toHaveAttribute('aria-selected')
    })

    it('reads the two ends in the accessible name', () => {
      renderRange({ value: { from: start, to: end } })
      expect(
        screen.getByRole('button', { name: `${dayName(start)}, range start` }),
      ).toBeInTheDocument()
      expect(screen.getByRole('button', { name: `${dayName(end)}, range end` })).toBeInTheDocument()
    })

    it('reads both for a one-day range', () => {
      renderRange({ value: { from: start, to: start } })
      expect(
        screen.getByRole('button', { name: `${dayName(start)}, range start, range end` }),
      ).toBeInTheDocument()
    })

    it('marks only the start while half-picked', () => {
      renderRange({ value: { from: start } })
      const button = screen.getByRole('button', { name: `${dayName(start)}, range start` })
      const td = button.closest('td')
      expect(td).toHaveAttribute('data-range-start', 'true')
      expect(td).not.toHaveAttribute('data-range-end')
    })

    it('uses the supplied labels', () => {
      renderRange({ value: { from: start, to: end }, labels: { rangeStart: '開始日' } })
      expect(screen.getByRole('button', { name: `${dayName(start)}, 開始日` })).toBeInTheDocument()
    })
  })

  describe('minDays / maxDays', () => {
    it('blocks ends that would be too short or too long', () => {
      renderRange({ value: { from: start }, minDays: 3, maxDays: 5 })

      expect(cell('2026-10-21')).toHaveAttribute('aria-disabled', 'true')
      expect(cell('2026-10-22')).not.toHaveAttribute('aria-disabled')
      expect(cell('2026-10-24')).not.toHaveAttribute('aria-disabled')
      expect(cell('2026-10-25')).toHaveAttribute('aria-disabled', 'true')
      expect(cell('2026-10-16')).not.toHaveAttribute('aria-disabled')
      expect(cell('2026-10-15')).toHaveAttribute('aria-disabled', 'true')
    })

    it('does not constrain a finished range', () => {
      renderRange({ value: { from: start, to: end }, maxDays: 2 })
      expect(cell('2026-10-01')).not.toHaveAttribute('aria-disabled')
    })

    it('clears when the start is clicked again under minDays', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      renderRange({ defaultValue: { from: start }, minDays: 3, onValueChange })

      await user.click(screen.getByRole('button', { name: `${dayName(start)}, range start` }))

      expect(onValueChange).toHaveBeenLastCalledWith({})
    })
  })

  describe('disabled days inside a range', () => {
    const isDateDisabled = (date: string) => date === '2026-10-22'

    it('blocks ends past a disabled day by default', () => {
      renderRange({ value: { from: start }, isDateDisabled })
      expect(cell('2026-10-21')).not.toHaveAttribute('aria-disabled')
      expect(cell('2026-10-23')).toHaveAttribute('aria-disabled', 'true')
      expect(cell('2026-10-19')).not.toHaveAttribute('aria-disabled')
    })

    it('blocks in the backward direction too', () => {
      renderRange({ value: { from: '2026-10-24' }, isDateDisabled })
      expect(cell('2026-10-23')).not.toHaveAttribute('aria-disabled')
      expect(cell('2026-10-21')).toHaveAttribute('aria-disabled', 'true')
    })

    it('allows the span with allowDisabledInRange', () => {
      renderRange({ value: { from: start }, isDateDisabled, allowDisabledInRange: true })
      expect(cell('2026-10-23')).not.toHaveAttribute('aria-disabled')
      expect(cell('2026-10-22')).toHaveAttribute('aria-disabled', 'true')
    })
  })

  describe('numberOfMonths', () => {
    it('renders that many grids with one set of navigation', () => {
      renderRange({ numberOfMonths: 2 })
      expect(screen.getAllByRole('grid')).toHaveLength(2)
      expect(screen.getByRole('grid', { name: 'November 2026' })).toBeInTheDocument()
      expect(screen.getAllByRole('button', { name: /month/ })).toHaveLength(2)
    })

    it('leaves outside days empty so no date appears twice', () => {
      renderRange({ numberOfMonths: 2 })
      expect(screen.getAllByRole('button', { name: dayName('2026-10-31') })).toHaveLength(1)
      expect(document.querySelector('[data-outside]')).toBeNull()
    })

    it('keeps one tab stop across the grids', () => {
      renderRange({ numberOfMonths: 2 })
      const tabbable = screen
        .getAllByRole('button')
        .filter(
          (button) => button.classList.contains('st-date-calendar__day') && button.tabIndex === 0,
        )
      expect(tabbable).toHaveLength(1)
    })

    it('scrolls one month when the keyboard passes the last grid', async () => {
      const user = userEvent.setup()
      renderRange({ numberOfMonths: 2, defaultValue: { from: '2026-11-30' } })
      await user.tab()
      await user.tab()
      await user.tab()
      await user.keyboard('{ArrowRight}')
      expect(screen.getByRole('grid', { name: 'December 2026' })).toBeInTheDocument()
      expect(day('2026-12-01')).toHaveFocus()
    })
  })

  it('warns about an invalid bound', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    renderRange({ value: { from: '2026-02-30' } })
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('`value.from` "2026-02-30"'))
    warn.mockRestore()
  })
})
