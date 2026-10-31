import { fireEvent, render, screen, within } from '@testing-library/react'
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

const namedInput = (name: string) => screen.getByLabelText(name) as HTMLInputElement
const setTime = (name: string, time: string) =>
  fireEvent.change(namedInput(name), { target: { value: time } })

function ValidatedForm(props: { required?: boolean; invalidDate?: string }) {
  return (
    <form aria-label="Form">
      <DatePicker
        aria-label="Birthday"
        required={props.required}
        labels={{ invalidDate: props.invalidDate }}
      />
    </form>
  )
}

function TimedForm(props: { required?: boolean; invalidDate?: string }) {
  return (
    <form aria-label="Form">
      <DatePicker
        granularity="minute"
        name="departure"
        required={props.required}
        labels={{ invalidDate: props.invalidDate }}
        aria-label="Departure"
      />
      <button type="reset">Reset</button>
    </form>
  )
}

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

    it('opens when the input is clicked, leaving focus there', async () => {
      const user = userEvent.setup()
      render(<DatePicker aria-label="Birthday" />)
      await user.click(dateInput())
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(dateInput()).toHaveFocus()
    })

    it('opens from the padding around the input', async () => {
      const user = userEvent.setup()
      render(<DatePicker aria-label="Birthday" />)
      await user.click(dateInput().parentElement as HTMLElement)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('does not open on focus alone', async () => {
      const user = userEvent.setup()
      render(<DatePicker aria-label="Birthday" />)
      await user.tab()
      expect(dateInput()).toHaveFocus()
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('stays open on a second click in the input', async () => {
      const user = userEvent.setup()
      render(<DatePicker aria-label="Birthday" />)
      await user.click(dateInput())
      await user.click(dateInput())
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('closes when typing starts, keeping focus in the input', async () => {
      const user = userEvent.setup()
      render(<DatePicker aria-label="Birthday" />)
      await user.click(dateInput())
      await user.keyboard('2')
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(dateInput()).toHaveFocus()
      expect(dateInput()).toHaveValue('2')
    })

    it('returns focus to the input after a pick that started there', async () => {
      const user = userEvent.setup()
      render(<DatePicker defaultValue="2026-10-24" aria-label="Birthday" />)
      await user.click(dateInput())
      await user.click(day('2026-10-15') as HTMLElement)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(dateInput()).toHaveFocus()
    })

    it('keeps focus in the input on Escape', async () => {
      const user = userEvent.setup()
      render(<DatePicker aria-label="Birthday" />)
      await user.click(dateInput())
      await user.keyboard('{Escape}')
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(dateInput()).toHaveFocus()
    })

    it('does not pull focus back after a click elsewhere', async () => {
      const user = userEvent.setup()
      render(
        <>
          <DatePicker aria-label="Birthday" />
          <input aria-label="Other" />
        </>,
      )
      await user.click(dateInput())
      await user.click(screen.getByRole('textbox', { name: 'Other' }))
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(screen.getByRole('textbox', { name: 'Other' })).toHaveFocus()
    })

    it('moves into the calendar with Alt+ArrowDown while open', async () => {
      const user = userEvent.setup()
      render(<DatePicker defaultValue="2026-10-24" aria-label="Birthday" />)
      await user.click(dateInput())
      await user.keyboard('{Alt>}{ArrowDown}{/Alt}')
      expect(day('2026-10-24')).toHaveFocus()
    })

    it('fires a consumer onClick on the root', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(<DatePicker onClick={onClick} aria-label="Birthday" />)
      await user.click(dateInput())
      expect(onClick).toHaveBeenCalledOnce()
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
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
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

  describe('native validation', () => {
    const form = () => screen.getByRole('form') as HTMLFormElement

    it('fails while the draft is invalid, even with required satisfied', async () => {
      const user = userEvent.setup()
      render(<ValidatedForm required />)
      await user.type(dateInput(), '2026-13-99')
      expect(form().checkValidity()).toBe(false)
    })

    it('passes once the draft is a real date', async () => {
      const user = userEvent.setup()
      render(<ValidatedForm required />)
      await user.type(dateInput(), '2026-13-99')
      await user.clear(dateInput())
      await user.type(dateInput(), '2026-10-24')
      expect(form().checkValidity()).toBe(true)
    })

    it('does not fail an empty optional input', () => {
      render(<ValidatedForm />)
      expect(form().checkValidity()).toBe(true)
    })

    it('uses labels.invalidDate as the message', async () => {
      const user = userEvent.setup()
      render(<ValidatedForm invalidDate="Bad date" />)
      await user.type(dateInput(), 'nope')
      expect((dateInput() as HTMLInputElement).validationMessage).toBe('Bad date')
    })
  })

  describe('form reset', () => {
    function reset(user: ReturnType<typeof userEvent.setup>) {
      return user.click(screen.getByRole('button', { name: 'Reset' }))
    }
    const hidden = (name: string) =>
      document.querySelector<HTMLInputElement>(`input[type="hidden"][name="${name}"]`)

    it('restores defaultValue', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(
        <form>
          <DatePicker
            name="birthday"
            defaultValue="2026-10-24"
            onValueChange={onValueChange}
            aria-label="Birthday"
          />
          <button type="reset">Reset</button>
        </form>,
      )
      await user.clear(dateInput())
      await user.type(dateInput(), '2026-11-01')
      await reset(user)
      expect(dateInput()).toHaveValue('2026-10-24')
      expect(hidden('birthday')).toHaveValue('2026-10-24')
      expect(onValueChange).toHaveBeenLastCalledWith('2026-10-24')
    })

    it('clears an invalid draft and its error', async () => {
      const user = userEvent.setup()
      render(
        <form>
          <DatePicker aria-label="Birthday" />
          <button type="reset">Reset</button>
        </form>,
      )
      await user.type(dateInput(), 'nope')
      await user.tab()
      await reset(user)
      expect(dateInput()).toHaveValue('')
      expect(dateInput()).not.toHaveAttribute('aria-invalid')
      expect((dateInput() as HTMLInputElement).validity.valid).toBe(true)
    })

    it('leaves a controlled value to the parent, dropping only the draft', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(
        <form>
          <DatePicker value="" onValueChange={onValueChange} aria-label="Birthday" />
          <button type="reset">Reset</button>
        </form>,
      )
      await user.type(dateInput(), 'nope')
      await reset(user)
      expect(dateInput()).toHaveValue('')
      expect(onValueChange).not.toHaveBeenCalled()
    })

    it('ignores the reset of another form', async () => {
      const user = userEvent.setup()
      render(
        <>
          <form>
            <DatePicker defaultValue="2026-10-24" aria-label="Birthday" />
          </form>
          <form>
            <button type="reset">Reset</button>
          </form>
        </>,
      )
      await user.clear(dateInput())
      await user.type(dateInput(), '2026-11-01')
      await reset(user)
      expect(dateInput()).toHaveValue('2026-11-01')
    })

    it('stays put when a handler cancels the reset', async () => {
      const user = userEvent.setup()
      render(
        <form onReset={(event) => event.preventDefault()}>
          <DatePicker defaultValue="2026-10-24" aria-label="Birthday" />
          <button type="reset">Reset</button>
        </form>,
      )
      await user.clear(dateInput())
      await user.type(dateInput(), '2026-11-01')
      await reset(user)
      expect(dateInput()).toHaveValue('2026-11-01')
    })
  })

  it('exposes the input through inputRef', () => {
    const inputRef = createRef<HTMLInputElement>()
    render(<DatePicker inputRef={inputRef} aria-label="Birthday" />)
    expect(inputRef.current).toBe(dateInput())
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

describe('DatePicker with granularity="minute"', () => {
  const departure = () => screen.getByRole('textbox', { name: 'Departure' }) as HTMLInputElement

  it('stays one input in the frame', () => {
    render(<DatePicker granularity="minute" data-testid="picker" aria-label="Departure" />)
    expect(screen.getAllByRole('textbox')).toHaveLength(1)
    expect(screen.getByTestId('picker')).not.toHaveAttribute('role')
    expect(departure()).toHaveAttribute('placeholder', 'YYYY-MM-DD HH:mm')
    expect(screen.queryByLabelText('Time')).not.toBeInTheDocument()
  })

  it('has no time in the panel by default', async () => {
    const user = userEvent.setup()
    render(<DatePicker aria-label="Birthday" />)
    await user.click(calendarButton())
    expect(screen.queryByLabelText('Time')).not.toBeInTheDocument()
  })

  describe('value', () => {
    it('shows a value with a space', () => {
      render(<DatePicker granularity="minute" value="2026-10-24T13:30" aria-label="Departure" />)
      expect(departure()).toHaveValue('2026-10-24 13:30')
    })

    it.each(['2026-10-24', '2026-10-24T13:30:00', '2026-10-24T13:30Z'])(
      'shows nothing for %s',
      (value) => {
        render(<DatePicker granularity="minute" value={value} aria-label="Departure" />)
        expect(departure()).toHaveValue('')
      },
    )

    it('commits a typed date and time', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(
        <DatePicker granularity="minute" onValueChange={onValueChange} aria-label="Departure" />,
      )
      await user.type(departure(), '2026-10-24')
      expect(onValueChange).not.toHaveBeenCalled()
      await user.type(departure(), ' 13:30')
      expect(onValueChange).toHaveBeenCalledExactlyOnceWith('2026-10-24T13:30')
    })

    it('keeps a typed date while a controlled parent holds the value empty', async () => {
      const user = userEvent.setup()
      render(<DatePicker granularity="minute" value="" aria-label="Departure" />)
      await user.type(departure(), '2026-10-24')
      expect(departure()).toHaveValue('2026-10-24')
    })

    it('reports a date without a time after blur', async () => {
      const user = userEvent.setup()
      render(<DatePicker granularity="minute" aria-label="Departure" />)
      await user.type(departure(), '2026-10-24')
      expect(departure()).not.toHaveAttribute('aria-invalid')
      await user.tab()
      expect(departure()).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('min and max', () => {
    it('refuses a time before min on its day', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(
        <DatePicker
          granularity="minute"
          min="2026-10-24T09:00"
          onValueChange={onValueChange}
          aria-label="Departure"
        />,
      )
      await user.type(departure(), '2026-10-24 08:00')
      expect(onValueChange).not.toHaveBeenCalled()
      await user.tab()
      expect(departure()).toHaveAttribute('aria-invalid', 'true')
    })

    it('allows the same time on a later day', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(
        <DatePicker
          granularity="minute"
          min="2026-10-24T09:00"
          onValueChange={onValueChange}
          aria-label="Departure"
        />,
      )
      await user.type(departure(), '2026-10-25 08:00')
      expect(onValueChange).toHaveBeenCalledExactlyOnceWith('2026-10-25T08:00')
    })

    it('passes the date of min to the calendar', async () => {
      const user = userEvent.setup()
      render(
        <DatePicker
          granularity="minute"
          defaultValue="2026-10-24T10:00"
          min="2026-10-24T09:00"
          aria-label="Departure"
        />,
      )
      await user.click(calendarButton())
      expect(day('2026-10-23')).toHaveAttribute('aria-disabled', 'true')
      expect(day('2026-10-24')).not.toHaveAttribute('aria-disabled')
    })
  })

  describe('panel', () => {
    function setup(props: { defaultValue?: string; min?: string } = {}) {
      const onValueChange = vi.fn()
      render(
        <DatePicker
          granularity="minute"
          today="2026-10-24"
          onValueChange={onValueChange}
          aria-label="Departure"
          {...props}
        />,
      )
      return onValueChange
    }

    it('shows the time of the value, in a named input', async () => {
      const user = userEvent.setup()
      setup({ defaultValue: '2026-10-24T13:30' })
      await user.click(calendarButton())
      const time = within(screen.getByRole('dialog')).getByLabelText('Time')
      expect(time).toHaveAttribute('type', 'time')
      expect(time).toHaveValue('13:30')
    })

    it('renames the time through labels', async () => {
      const user = userEvent.setup()
      render(<DatePicker granularity="minute" labels={{ time: 'Hour' }} aria-label="Departure" />)
      await user.click(calendarButton())
      expect(namedInput('Hour')).toBeInTheDocument()
    })

    it('keeps the time disabled until there is a date', async () => {
      const user = userEvent.setup()
      setup()
      await user.click(calendarButton())
      expect(namedInput('Time')).toBeDisabled()
      await user.click(day('2026-10-15') as HTMLElement)
      expect(namedInput('Time')).toBeEnabled()
    })

    it('stays open after a pick and moves focus to the time', async () => {
      const user = userEvent.setup()
      setup()
      await user.click(calendarButton())
      await user.click(day('2026-10-15') as HTMLElement)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(namedInput('Time')).toHaveFocus()
      expect(departure()).toHaveValue('2026-10-15')
    })

    it('moves to the time when the selected day is picked again', async () => {
      const user = userEvent.setup()
      const onValueChange = setup({ defaultValue: '2026-10-24T13:30' })
      await user.click(calendarButton())
      await user.click(day('2026-10-24') as HTMLElement)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(namedInput('Time')).toHaveFocus()
      expect(onValueChange).not.toHaveBeenCalled()
    })

    it('keeps the time when a day is picked', async () => {
      const user = userEvent.setup()
      const onValueChange = setup({ defaultValue: '2026-10-24T13:30' })
      await user.click(calendarButton())
      await user.click(day('2026-10-15') as HTMLElement)
      expect(onValueChange).toHaveBeenCalledExactlyOnceWith('2026-10-15T13:30')
      expect(departure()).toHaveValue('2026-10-15 13:30')
    })

    it('commits a time, leaving the panel open', async () => {
      const user = userEvent.setup()
      const onValueChange = setup({ defaultValue: '2026-10-24T13:30' })
      await user.click(calendarButton())
      setTime('Time', '08:45')
      expect(onValueChange).toHaveBeenCalledExactlyOnceWith('2026-10-24T08:45')
      expect(departure()).toHaveValue('2026-10-24 08:45')
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('reports an empty value when the time goes, keeping the date', async () => {
      const user = userEvent.setup()
      const onValueChange = setup({ defaultValue: '2026-10-24T13:30' })
      await user.click(calendarButton())
      setTime('Time', '')
      expect(onValueChange).toHaveBeenCalledExactlyOnceWith('')
      expect(departure()).toHaveValue('2026-10-24')
    })

    it('marks a kept time the picked day refuses', async () => {
      const user = userEvent.setup()
      const onValueChange = setup({ defaultValue: '2026-10-25T08:00', min: '2026-10-24T09:00' })
      await user.click(calendarButton())
      await user.click(day('2026-10-24') as HTMLElement)
      expect(onValueChange).toHaveBeenLastCalledWith('')
      expect(departure()).toHaveAttribute('aria-invalid', 'true')
      expect(namedInput('Time')).toHaveAttribute('aria-invalid', 'true')
    })

    it('leaves a time waiting clean until the panel closes', async () => {
      const user = userEvent.setup()
      setup()
      await user.click(calendarButton())
      await user.click(day('2026-10-15') as HTMLElement)
      expect(departure()).not.toHaveAttribute('aria-invalid')
      await user.keyboard('{Escape}')
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(departure()).toHaveAttribute('aria-invalid', 'true')
    })

    it('does not treat a click on the time as a click on the input', async () => {
      const user = userEvent.setup()
      setup({ defaultValue: '2026-10-24T13:30' })
      await user.click(calendarButton())
      await user.click(namedInput('Time'))
      await user.keyboard('{Escape}')
      expect(calendarButton()).toHaveFocus()
    })

    it('closes when typing starts in the input', async () => {
      const user = userEvent.setup()
      setup()
      await user.click(departure())
      await user.keyboard('2')
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  describe('in a form', () => {
    const form = () => screen.getByRole('form') as HTMLFormElement

    it('submits the value with a T', async () => {
      const user = userEvent.setup()
      render(<TimedForm />)
      await user.type(departure(), '2026-10-24 13:30')
      expect(new FormData(form()).get('departure')).toBe('2026-10-24T13:30')
    })

    it('fails validation on a date without a time', async () => {
      const user = userEvent.setup()
      render(<TimedForm invalidDate="Add a time" />)
      await user.type(departure(), '2026-10-24')
      expect(form().checkValidity()).toBe(false)
      expect(departure().validationMessage).toBe('Add a time')
      expect(new FormData(form()).get('departure')).toBe('')
    })

    it('uses a message that names the time by default', async () => {
      const user = userEvent.setup()
      render(<TimedForm />)
      await user.type(departure(), 'nope')
      expect(departure().validationMessage).toBe('Enter a valid date and time.')
    })

    it('passes when empty and when complete', async () => {
      const user = userEvent.setup()
      render(<TimedForm />)
      expect(form().checkValidity()).toBe(true)
      await user.type(departure(), '2026-10-24 13:30')
      expect(form().checkValidity()).toBe(true)
    })

    it('restores defaultValue on reset', async () => {
      const user = userEvent.setup()
      render(
        <form>
          <DatePicker granularity="minute" defaultValue="2026-10-24T13:30" aria-label="Departure" />
          <button type="reset">Reset</button>
        </form>,
      )
      await user.type(departure(), '{Backspace}')
      await user.click(screen.getByRole('button', { name: 'Reset' }))
      expect(departure()).toHaveValue('2026-10-24 13:30')
    })
  })

  describe('inside <Field>', () => {
    it('is named by the Field label, like the day granularity', () => {
      render(
        <Field label="Departure">
          <DatePicker granularity="minute" />
        </Field>,
      )
      expect(departure()).toBeInTheDocument()
    })

    it('focuses the input from the Field label', async () => {
      const user = userEvent.setup()
      render(
        <Field label="Departure">
          <DatePicker granularity="minute" />
        </Field>,
      )
      await user.click(screen.getByText('Departure'))
      expect(departure()).toHaveFocus()
    })

    it('keeps the Field out of the time in the panel', async () => {
      const user = userEvent.setup()
      render(
        <Field label="Departure" error="Pick a time">
          <DatePicker granularity="minute" defaultValue="2026-10-24T13:30" />
        </Field>,
      )
      await user.click(calendarButton())
      expect(namedInput('Time').id).not.toBe(departure().id)
      expect(namedInput('Time')).not.toHaveAttribute('aria-invalid')
      expect(namedInput('Time')).not.toHaveAccessibleDescription()
    })
  })
})

describe('DateRangePicker with granularity="minute"', () => {
  const stay = { from: '2026-10-24T09:00', to: '2026-10-24T18:00' }
  const start = () => screen.getByRole('textbox', { name: 'Start date' }) as HTMLInputElement
  const end = () => screen.getByRole('textbox', { name: 'End date' }) as HTMLInputElement

  function setup(props: {
    defaultValue?: typeof stay | { from: string }
    min?: string
    max?: string
    today?: string
  }) {
    const onValueChange = vi.fn()
    render(
      <DateRangePicker
        granularity="minute"
        onValueChange={onValueChange}
        aria-label="Stay"
        {...props}
      />,
    )
    return onValueChange
  }

  it('shows each end with a space', () => {
    render(
      <DateRangePicker granularity="minute" value={stay} data-testid="picker" aria-label="Stay" />,
    )
    expect(screen.getByTestId('picker')).toHaveClass('st-date-range-picker--minute')
    expect(start()).toHaveValue('2026-10-24 09:00')
    expect(end()).toHaveValue('2026-10-24 18:00')
  })

  it('leaves out a side without its time', async () => {
    const user = userEvent.setup()
    const onValueChange = setup({})
    await user.type(start(), '2026-10-24 09:00')
    expect(onValueChange).toHaveBeenLastCalledWith({ from: '2026-10-24T09:00' })
    await user.type(end(), '2026-10-26')
    expect(onValueChange).toHaveBeenCalledOnce()
    await user.type(end(), ' 18:00')
    expect(onValueChange).toHaveBeenLastCalledWith({
      from: '2026-10-24T09:00',
      to: '2026-10-26T18:00',
    })
  })

  describe('on the same day', () => {
    it('leaves out an end before the start, without swapping', async () => {
      const user = userEvent.setup()
      const onValueChange = setup({ defaultValue: stay })
      await user.clear(end())
      await user.type(end(), '2026-10-24 08:00')
      expect(onValueChange).toHaveBeenLastCalledWith({ from: '2026-10-24T09:00' })
      expect(end()).toHaveValue('2026-10-24 08:00')
      expect(end().validity.valid).toBe(false)
      await user.tab()
      expect(end()).toHaveAttribute('aria-invalid', 'true')
      expect(start()).not.toHaveAttribute('aria-invalid')
    })

    it('allows an end at the same moment as the start', async () => {
      const user = userEvent.setup()
      const onValueChange = setup({ defaultValue: stay })
      await user.clear(end())
      await user.type(end(), '2026-10-24 09:00')
      expect(onValueChange).toHaveBeenLastCalledWith({
        from: '2026-10-24T09:00',
        to: '2026-10-24T09:00',
      })
    })

    it('marks the end when the start moves past it, and commits it once fixed', async () => {
      const user = userEvent.setup()
      const onValueChange = setup({ defaultValue: stay })
      await user.click(rangeButton())
      setTime('Start time', '20:00')
      expect(onValueChange).toHaveBeenLastCalledWith({ from: '2026-10-24T20:00' })
      expect(end()).toHaveValue('2026-10-24 18:00')
      setTime('Start time', '10:00')
      expect(onValueChange).toHaveBeenLastCalledWith({
        from: '2026-10-24T10:00',
        to: '2026-10-24T18:00',
      })
    })
  })

  it('takes an end time before the start time on a later day', async () => {
    const user = userEvent.setup()
    const onValueChange = setup({
      defaultValue: { from: '2026-10-24T09:00', to: '2026-10-26T18:00' },
    })
    await user.click(rangeButton())
    setTime('End time', '08:00')
    expect(onValueChange).toHaveBeenLastCalledWith({
      from: '2026-10-24T09:00',
      to: '2026-10-26T08:00',
    })
  })

  it('applies min and max to both ends', async () => {
    const user = userEvent.setup()
    const onValueChange = setup({
      defaultValue: stay,
      min: '2026-10-24T08:00',
      max: '2026-10-24T20:00',
    })
    await user.click(rangeButton())
    setTime('Start time', '07:00')
    expect(onValueChange).toHaveBeenLastCalledWith({ to: '2026-10-24T18:00' })
    setTime('Start time', '09:00')
    setTime('End time', '21:00')
    expect(onValueChange).toHaveBeenLastCalledWith({ from: '2026-10-24T09:00' })
  })

  it('keeps a start outside min while the end is edited', async () => {
    const user = userEvent.setup()
    const onValueChange = setup({
      defaultValue: { from: '2026-10-24T07:00', to: '2026-10-24T10:00' },
      min: '2026-10-24T08:00',
    })
    await user.click(rangeButton())
    setTime('End time', '11:00')
    expect(onValueChange).toHaveBeenLastCalledWith({
      from: '2026-10-24T07:00',
      to: '2026-10-24T11:00',
    })
  })

  describe('panel', () => {
    it('shows the date each time belongs to', async () => {
      const user = userEvent.setup()
      setup({ defaultValue: { from: '2026-10-24T09:00', to: '2026-10-26T18:00' } })
      await user.click(rangeButton())
      expect(namedInput('Start time')).toHaveValue('09:00')
      expect(namedInput('Start time')).toHaveAccessibleDescription('2026-10-24')
      expect(namedInput('End time')).toHaveValue('18:00')
      expect(namedInput('End time')).toHaveAccessibleDescription('2026-10-26')
    })

    it('marks an end without a date, and disables its time', async () => {
      const user = userEvent.setup()
      setup({ defaultValue: { from: '2026-10-24T09:00' } })
      await user.click(rangeButton())
      expect(within(screen.getByRole('dialog')).getByText('—')).toBeInTheDocument()
      expect(namedInput('Start time')).toBeEnabled()
      expect(namedInput('End time')).toBeDisabled()
    })

    it('renames the times through labels', async () => {
      const user = userEvent.setup()
      render(
        <DateRangePicker
          granularity="minute"
          labels={{ startTime: 'From', endTime: 'Until' }}
          aria-label="Stay"
        />,
      )
      await user.click(rangeButton())
      expect(namedInput('From')).toBeInTheDocument()
      expect(namedInput('Until')).toBeInTheDocument()
    })

    it('stays open after both picks and moves focus to the start time', async () => {
      const user = userEvent.setup()
      setup({ today: '2026-10-24' })
      await user.click(rangeButton())
      await user.click(day('2026-10-05') as HTMLElement)
      await user.click(day('2026-10-08') as HTMLElement)
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(namedInput('Start time')).toHaveFocus()
    })

    it('keeps both times across a new range', async () => {
      const user = userEvent.setup()
      const onValueChange = setup({ defaultValue: stay })
      await user.click(rangeButton())
      await user.click(day('2026-10-05') as HTMLElement)
      expect(end()).toHaveValue('')
      await user.click(day('2026-10-08') as HTMLElement)
      expect(onValueChange).toHaveBeenLastCalledWith({
        from: '2026-10-05T09:00',
        to: '2026-10-08T18:00',
      })
    })

    it('marks a range picked on one day, out of order', async () => {
      const user = userEvent.setup()
      setup({ defaultValue: { from: '2026-10-24T18:00', to: '2026-10-26T09:00' } })
      await user.click(rangeButton())
      await user.click(day('2026-10-05') as HTMLElement)
      await user.click(day('2026-10-05') as HTMLElement)
      expect(end()).toHaveAttribute('aria-invalid', 'true')
      expect(namedInput('End time')).toHaveAttribute('aria-invalid', 'true')
    })
  })

  it('renders no separator between the rows', () => {
    render(<DateRangePicker granularity="minute" aria-label="Stay" />)
    expect(screen.queryByText('–')).not.toBeInTheDocument()
  })

  it('submits both ends and restores them on reset', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <form>
        <DateRangePicker
          granularity="minute"
          startName="start"
          endName="end"
          defaultValue={stay}
          aria-label="Stay"
        />
        <button type="reset">Reset</button>
      </form>,
    )
    const form = container.querySelector('form') as HTMLFormElement
    expect(new FormData(form).get('start')).toBe('2026-10-24T09:00')
    expect(new FormData(form).get('end')).toBe('2026-10-24T18:00')
    await user.type(end(), '{Backspace}')
    await user.click(screen.getByRole('button', { name: 'Reset' }))
    expect(end()).toHaveValue('2026-10-24 18:00')
    expect(end().validity.valid).toBe(true)
    expect(new FormData(form).get('end')).toBe('2026-10-24T18:00')
  })

  it('passes error, disabled, description and required to both inputs in a Field', () => {
    render(
      <Field label="Stay" error="Pick times" disabled required>
        <DateRangePicker granularity="minute" />
      </Field>,
    )
    for (const input of [start(), end()]) {
      expect(input).toHaveAttribute('aria-invalid', 'true')
      expect(input).toHaveAttribute('aria-required', 'true')
      expect(input).toHaveAccessibleDescription('Pick times')
      expect(input).toBeDisabled()
    }
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

  it('fails native validation while the end is before the start', async () => {
    const user = userEvent.setup()
    render(<DateRangePicker defaultValue={{ from: '2026-10-20' }} aria-label="Stay" />)
    await user.type(endInput(), '2026-10-01')
    expect((endInput() as HTMLInputElement).validity.valid).toBe(false)
    expect((startInput() as HTMLInputElement).validity.valid).toBe(true)
  })

  it('keeps a start outside min while the end is edited', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    render(
      <DateRangePicker
        defaultValue={{ from: '2026-01-01' }}
        min="2026-10-01"
        onValueChange={onValueChange}
        aria-label="Stay"
      />,
    )
    await user.type(endInput(), '2026-10-24')
    expect(onValueChange).toHaveBeenLastCalledWith({ from: '2026-01-01', to: '2026-10-24' })
  })

  it('restores defaultValue on form reset', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    render(
      <form>
        <DateRangePicker
          startName="checkIn"
          defaultValue={{ from: '2026-10-20', to: '2026-10-24' }}
          onValueChange={onValueChange}
          aria-label="Stay"
        />
        <button type="reset">Reset</button>
      </form>,
    )
    await user.clear(endInput())
    await user.type(startInput(), '{Backspace}')
    await user.click(screen.getByRole('button', { name: 'Reset' }))
    expect(startInput()).toHaveValue('2026-10-20')
    expect(endInput()).toHaveValue('2026-10-24')
    expect(onValueChange).toHaveBeenLastCalledWith({ from: '2026-10-20', to: '2026-10-24' })
  })

  it('does not report a change when the reset changes nothing', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    render(
      <form>
        <DateRangePicker onValueChange={onValueChange} aria-label="Stay" />
        <button type="reset">Reset</button>
      </form>,
    )
    await user.click(screen.getByRole('button', { name: 'Reset' }))
    expect(onValueChange).not.toHaveBeenCalled()
  })

  it('exposes each input through its own ref', () => {
    const startRef = createRef<HTMLInputElement>()
    const endRef = createRef<HTMLInputElement>()
    render(<DateRangePicker startInputRef={startRef} endInputRef={endRef} aria-label="Stay" />)
    expect(startRef.current).toBe(startInput())
    expect(endRef.current).toBe(endInput())
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
      await user.tab()
      await user.tab()
      expect(endInput()).toHaveFocus()
      await user.keyboard('{Alt>}{ArrowDown}{/Alt}')
      expect(screen.getByRole('dialog', { name: 'Choose date range' })).toBeInTheDocument()
    })

    it('stays open when moving from one input to the other', async () => {
      const user = userEvent.setup()
      render(<DateRangePicker aria-label="Stay" />)
      await user.click(startInput())
      await user.click(endInput())
      expect(screen.getByRole('dialog')).toBeInTheDocument()
      expect(endInput()).toHaveFocus()
    })

    it('returns focus to the input that opened it', async () => {
      const user = userEvent.setup()
      render(<DateRangePicker aria-label="Stay" />)
      await user.click(endInput())
      await user.keyboard('{Escape}')
      expect(endInput()).toHaveFocus()
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
