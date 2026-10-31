import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { Field } from '../../lv1/Field'
import { DatePicker, DateRangePicker } from './DatePicker'

const dateInput = () => screen.getByRole('textbox', { name: 'Birthday' })
const calendarButton = () => screen.getByRole('button', { name: 'Choose date' })
const rangeButton = () => screen.getByRole('button', { name: 'Choose date range' })
const startInput = () => screen.getByRole('textbox', { name: 'Start date' })
const endInput = () => screen.getByRole('textbox', { name: 'End date' })
const day = (date: string) => document.querySelector<HTMLElement>(`[data-date="${date}"]`)

describe('DatePicker', () => {
  it('names the input through aria-label', () => {
    render(<DatePicker aria-label="Birthday" />)
    expect(dateInput()).toHaveAttribute('placeholder', 'YYYY-MM-DD')
  })

  it('forwards className, data-testid and ref to the root', () => {
    const ref = createRef<HTMLDivElement>()
    render(<DatePicker ref={ref} className="custom" data-testid="picker" aria-label="Birthday" />)
    const root = screen.getByTestId('picker')
    expect(root).toHaveClass('st-date-picker', 'custom')
    expect(ref.current).toBe(root)
  })

  it('passes id to the input', () => {
    render(<DatePicker id="birthday" aria-label="Birthday" />)
    expect(dateInput()).toHaveAttribute('id', 'birthday')
  })

  it('sizes the input and the button together', () => {
    render(<DatePicker size="lg" aria-label="Birthday" />)
    expect(calendarButton()).toHaveClass('st-btn--lg')
    expect(dateInput().parentElement).toHaveClass('st-input-wrapper--lg')
  })

  describe('value', () => {
    it('shows a controlled value', () => {
      render(<DatePicker value="2026-10-24" aria-label="Birthday" />)
      expect(dateInput()).toHaveValue('2026-10-24')
    })

    it('shows an uncontrolled default and keeps typed text', async () => {
      const user = userEvent.setup()
      render(<DatePicker defaultValue="2026-10-24" aria-label="Birthday" />)
      await user.clear(dateInput())
      await user.type(dateInput(), '2026-11-01')
      expect(dateInput()).toHaveValue('2026-11-01')
    })

    it('shows nothing for an invalid value', () => {
      render(<DatePicker value="not-a-date" aria-label="Birthday" />)
      expect(dateInput()).toHaveValue('')
    })

    it('fires onValueChange once the typed date is complete', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(<DatePicker onValueChange={onValueChange} aria-label="Birthday" />)
      await user.type(dateInput(), '2026-10-2')
      expect(onValueChange).not.toHaveBeenCalled()
      await user.type(dateInput(), '4')
      expect(onValueChange).toHaveBeenCalledExactlyOnceWith('2026-10-24')
    })

    it('fires an empty value when a complete date is broken, and keeps the text', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(
        <DatePicker
          defaultValue="2026-10-24"
          onValueChange={onValueChange}
          aria-label="Birthday"
        />,
      )
      await user.type(dateInput(), '{Backspace}')
      expect(onValueChange).toHaveBeenLastCalledWith('')
      expect(dateInput()).toHaveValue('2026-10-2')
    })

    it('treats a date outside min as no value', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(<DatePicker min="2026-10-10" onValueChange={onValueChange} aria-label="Birthday" />)
      await user.type(dateInput(), '2026-10-01')
      expect(onValueChange).not.toHaveBeenCalled()
      await user.tab()
      expect(dateInput()).toHaveAttribute('aria-invalid', 'true')
    })

    it('holds the error state back until blur', async () => {
      const user = userEvent.setup()
      render(<DatePicker aria-label="Birthday" />)
      await user.type(dateInput(), '2026-13')
      expect(dateInput()).not.toHaveAttribute('aria-invalid')
      await user.tab()
      expect(dateInput()).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('calendar', () => {
    it('opens from the button, showing the typed month', async () => {
      const user = userEvent.setup()
      render(<DatePicker aria-label="Birthday" />)
      await user.type(dateInput(), '2026-03-15')
      await user.click(calendarButton())
      expect(screen.getByRole('dialog', { name: 'Choose date' })).toBeInTheDocument()
      expect(within(screen.getByRole('dialog')).getByText('March 2026')).toBeInTheDocument()
    })

    it('does not open when the input is clicked', async () => {
      const user = userEvent.setup()
      render(<DatePicker aria-label="Birthday" />)
      await user.click(dateInput())
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('opens with Alt+ArrowDown', async () => {
      const user = userEvent.setup()
      render(<DatePicker aria-label="Birthday" />)
      await user.click(dateInput())
      await user.keyboard('{Alt>}{ArrowDown}{/Alt}')
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('moves focus to the selected day on open', async () => {
      const user = userEvent.setup()
      render(<DatePicker defaultValue="2026-10-24" aria-label="Birthday" />)
      await user.click(calendarButton())
      expect(day('2026-10-24')).toHaveFocus()
    })

    it('fills the input, closes, and returns focus to the button', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(
        <DatePicker
          defaultValue="2026-10-24"
          onValueChange={onValueChange}
          aria-label="Birthday"
        />,
      )
      await user.click(calendarButton())
      await user.click(day('2026-10-15') as HTMLElement)
      expect(onValueChange).toHaveBeenCalledExactlyOnceWith('2026-10-15')
      expect(dateInput()).toHaveValue('2026-10-15')
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(calendarButton()).toHaveFocus()
    })

    it('closes when the selected day is picked again', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(
        <DatePicker
          defaultValue="2026-10-24"
          onValueChange={onValueChange}
          aria-label="Birthday"
        />,
      )
      await user.click(calendarButton())
      await user.click(day('2026-10-24') as HTMLElement)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(onValueChange).not.toHaveBeenCalled()
    })

    it('passes min to the calendar', async () => {
      const user = userEvent.setup()
      render(<DatePicker defaultValue="2026-10-24" min="2026-10-10" aria-label="Birthday" />)
      await user.click(calendarButton())
      expect(day('2026-10-09')).toHaveAttribute('aria-disabled', 'true')
    })

    it('uses labels.openCalendar for the button and the panel', async () => {
      const user = userEvent.setup()
      render(<DatePicker labels={{ openCalendar: 'Pick' }} aria-label="Birthday" />)
      await user.click(screen.getByRole('button', { name: 'Pick' }))
      expect(screen.getByRole('dialog', { name: 'Pick' })).toBeInTheDocument()
    })
  })

  describe('disabled and readOnly', () => {
    it('disables the input and the button', () => {
      render(<DatePicker disabled aria-label="Birthday" />)
      expect(dateInput()).toBeDisabled()
      expect(calendarButton()).toBeDisabled()
    })

    it('keeps a readOnly value focusable but not openable', async () => {
      const user = userEvent.setup()
      render(<DatePicker readOnly aria-label="Birthday" />)
      expect(dateInput()).toHaveAttribute('readonly')
      expect(calendarButton()).toBeDisabled()
      await user.click(dateInput())
      await user.keyboard('{Alt>}{ArrowDown}{/Alt}')
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  it('sets aria-invalid from isError', () => {
    render(<DatePicker isError aria-label="Birthday" />)
    expect(dateInput()).toHaveAttribute('aria-invalid', 'true')
  })

  describe('in a form', () => {
    it('submits the date under name', () => {
      const { container } = render(
        <form>
          <DatePicker name="birthday" value="2026-10-24" aria-label="Birthday" />
        </form>,
      )
      const data = new FormData(container.querySelector('form') as HTMLFormElement)
      expect(data.get('birthday')).toBe('2026-10-24')
    })

    it('submits an empty value for an invalid draft', async () => {
      const user = userEvent.setup()
      const { container } = render(
        <form>
          <DatePicker name="birthday" aria-label="Birthday" />
        </form>,
      )
      await user.type(dateInput(), '2026-13-99')
      const data = new FormData(container.querySelector('form') as HTMLFormElement)
      expect(data.get('birthday')).toBe('')
    })

    it('does not submit when disabled', () => {
      const { container } = render(
        <form>
          <DatePicker name="birthday" value="2026-10-24" disabled aria-label="Birthday" />
        </form>,
      )
      const data = new FormData(container.querySelector('form') as HTMLFormElement)
      expect(data.has('birthday')).toBe(false)
    })

    it('does not submit the form from the calendar button', async () => {
      const user = userEvent.setup()
      const onSubmit = vi.fn((event) => event.preventDefault())
      render(
        <form onSubmit={onSubmit}>
          <DatePicker aria-label="Birthday" />
        </form>,
      )
      await user.click(calendarButton())
      expect(onSubmit).not.toHaveBeenCalled()
    })
  })

  describe('inside <Field>', () => {
    it('is named by the Field label', () => {
      render(
        <Field label="Birthday">
          <DatePicker />
        </Field>,
      )
      expect(dateInput()).toBeInTheDocument()
    })

    it('inherits error, disabled, description and required', () => {
      render(
        <Field label="Birthday" error="Pick a date" disabled required>
          <DatePicker />
        </Field>,
      )
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true')
      expect(screen.getByRole('textbox')).toHaveAccessibleDescription('Pick a date')
      expect(screen.getByRole('textbox')).toBeDisabled()
      expect(calendarButton()).toBeDisabled()
    })

    it('shows an invalid draft even when the Field has no error', async () => {
      const user = userEvent.setup()
      render(
        <Field label="Birthday">
          <DatePicker />
        </Field>,
      )
      await user.type(dateInput(), 'nope')
      await user.tab()
      expect(dateInput()).toHaveAttribute('aria-invalid', 'true')
    })

    it('keeps the Field error out of the calendar', async () => {
      const user = userEvent.setup()
      render(
        <Field label="Birthday" error="Pick a date">
          <DatePicker />
        </Field>,
      )
      await user.click(calendarButton())
      const calendar = within(screen.getByRole('dialog')).getAllByRole('group')[0]
      expect(calendar).not.toHaveAttribute('aria-invalid')
      expect(calendar).not.toHaveAccessibleName()
    })
  })
})

describe('DateRangePicker', () => {
  it('exposes a named group with named inputs', () => {
    render(<DateRangePicker aria-label="Stay" />)
    const group = screen.getByRole('group', { name: 'Stay' })
    expect(within(group).getByRole('textbox', { name: 'Start date' })).toBeInTheDocument()
    expect(within(group).getByRole('textbox', { name: 'End date' })).toBeInTheDocument()
  })

  it('forwards className, data-testid and ref to the root', () => {
    const ref = createRef<HTMLDivElement>()
    render(<DateRangePicker ref={ref} className="custom" data-testid="picker" aria-label="Stay" />)
    const root = screen.getByTestId('picker')
    expect(root).toHaveClass('st-date-range-picker', 'custom')
    expect(ref.current).toBe(root)
  })

  it('renames the inputs through labels', () => {
    render(<DateRangePicker labels={{ startDate: 'Check-in' }} aria-label="Stay" />)
    expect(screen.getByRole('textbox', { name: 'Check-in' })).toBeInTheDocument()
  })

  describe('value', () => {
    it('shows both ends', () => {
      render(<DateRangePicker value={{ from: '2026-10-20', to: '2026-10-24' }} aria-label="Stay" />)
      expect(startInput()).toHaveValue('2026-10-20')
      expect(endInput()).toHaveValue('2026-10-24')
    })

    it('commits each typed end', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(<DateRangePicker onValueChange={onValueChange} aria-label="Stay" />)
      await user.type(startInput(), '2026-10-20')
      expect(onValueChange).toHaveBeenLastCalledWith({ from: '2026-10-20' })
      await user.type(endInput(), '2026-10-24')
      expect(onValueChange).toHaveBeenLastCalledWith({ from: '2026-10-20', to: '2026-10-24' })
    })

    it('leaves out a typed end before the start, without swapping', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(
        <DateRangePicker
          defaultValue={{ from: '2026-10-20' }}
          onValueChange={onValueChange}
          aria-label="Stay"
        />,
      )
      await user.type(endInput(), '2026-10-01')
      expect(onValueChange).not.toHaveBeenCalled()
      expect(startInput()).toHaveValue('2026-10-20')
      expect(endInput()).toHaveValue('2026-10-01')
      await user.tab()
      expect(endInput()).toHaveAttribute('aria-invalid', 'true')
    })

    it('marks the end when the start moves past it', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(
        <DateRangePicker
          defaultValue={{ from: '2026-10-20', to: '2026-10-24' }}
          onValueChange={onValueChange}
          aria-label="Stay"
        />,
      )
      await user.clear(startInput())
      await user.type(startInput(), '2026-10-30')
      await user.tab()
      expect(onValueChange).toHaveBeenLastCalledWith({ from: '2026-10-30' })
      expect(endInput()).toHaveValue('2026-10-24')
      expect(endInput()).toHaveAttribute('aria-invalid', 'true')
    })

    it('commits the kept end again once the start is fixed', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(
        <DateRangePicker
          defaultValue={{ from: '2026-10-30', to: undefined }}
          onValueChange={onValueChange}
          aria-label="Stay"
        />,
      )
      await user.type(endInput(), '2026-10-24')
      await user.clear(startInput())
      await user.type(startInput(), '2026-10-01')
      expect(onValueChange).toHaveBeenLastCalledWith({ from: '2026-10-01', to: '2026-10-24' })
    })
  })

  describe('calendar', () => {
    it('stays open after the first pick and closes after the second', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(
        <DateRangePicker
          defaultValue={{ from: '2026-10-20', to: '2026-10-24' }}
          onValueChange={onValueChange}
          aria-label="Stay"
        />,
      )
      await user.click(rangeButton())
      await user.click(day('2026-10-05') as HTMLElement)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(startInput()).toHaveValue('2026-10-05')
      expect(endInput()).toHaveValue('')

      await user.click(day('2026-10-08') as HTMLElement)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(onValueChange).toHaveBeenLastCalledWith({ from: '2026-10-05', to: '2026-10-08' })
      expect(endInput()).toHaveValue('2026-10-08')
      expect(rangeButton()).toHaveFocus()
    })

    it('keeps a half-picked range after Escape', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(
        <DateRangePicker
          defaultValue={{ from: '2026-10-20', to: '2026-10-24' }}
          onValueChange={onValueChange}
          aria-label="Stay"
        />,
      )
      await user.click(rangeButton())
      await user.click(day('2026-10-05') as HTMLElement)
      await user.keyboard('{Escape}')
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(onValueChange).toHaveBeenLastCalledWith({ from: '2026-10-05' })
    })

    it('opens with Alt+ArrowDown from either input', async () => {
      const user = userEvent.setup()
      render(<DateRangePicker aria-label="Stay" />)
      await user.click(endInput())
      await user.keyboard('{Alt>}{ArrowDown}{/Alt}')
      expect(screen.getByRole('dialog', { name: 'Choose date range' })).toBeInTheDocument()
    })
  })

  describe('disabled and readOnly', () => {
    it('disables both inputs and the button', () => {
      render(<DateRangePicker disabled aria-label="Stay" />)
      expect(startInput()).toBeDisabled()
      expect(endInput()).toBeDisabled()
      expect(rangeButton()).toBeDisabled()
    })

    it('disables only the button when readOnly', () => {
      render(<DateRangePicker readOnly aria-label="Stay" />)
      expect(startInput()).toHaveAttribute('readonly')
      expect(endInput()).toHaveAttribute('readonly')
      expect(rangeButton()).toBeDisabled()
    })
  })

  it('submits both ends under their own names', () => {
    const { container } = render(
      <form>
        <DateRangePicker
          startName="checkIn"
          endName="checkOut"
          value={{ from: '2026-10-20', to: '2026-10-24' }}
          aria-label="Stay"
        />
      </form>,
    )
    const data = new FormData(container.querySelector('form') as HTMLFormElement)
    expect(data.get('checkIn')).toBe('2026-10-20')
    expect(data.get('checkOut')).toBe('2026-10-24')
  })

  describe('inside <Field>', () => {
    it('names the group with the Field label', () => {
      render(
        <Field label="Stay">
          <DateRangePicker />
        </Field>,
      )
      expect(screen.getByRole('group', { name: 'Stay' })).toBeInTheDocument()
    })

    it('prefers an explicit aria-label over the Field label', () => {
      render(
        <Field label="Stay">
          <DateRangePicker aria-label="Trip" />
        </Field>,
      )
      expect(screen.getByRole('group', { name: 'Trip' })).toBeInTheDocument()
    })

    it('gives each input its own id', () => {
      render(
        <Field label="Stay">
          <DateRangePicker />
        </Field>,
      )
      expect(startInput().id).not.toBe(endInput().id)
    })

    it('passes error, disabled, description and required to both inputs', () => {
      render(
        <Field label="Stay" error="Pick dates" disabled required>
          <DateRangePicker />
        </Field>,
      )
      for (const input of [startInput(), endInput()]) {
        expect(input).toHaveAttribute('aria-invalid', 'true')
        expect(input).toHaveAttribute('aria-required', 'true')
        expect(input).toHaveAccessibleDescription('Pick dates')
        expect(input).toBeDisabled()
      }
      expect(rangeButton()).toBeDisabled()
    })
  })
})
