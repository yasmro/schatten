import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Field } from '../Field/Field'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './Select'

function BasicSelect(props: {
  defaultValue?: string
  value?: string
  onValueChange?: (v: string) => void
  isError?: boolean
  disabled?: boolean
  required?: boolean
  size?: 'sm' | 'md' | 'lg'
}) {
  return (
    <Select
      defaultValue={props.defaultValue}
      value={props.value}
      onValueChange={props.onValueChange}
      required={props.required}
    >
      <SelectTrigger isError={props.isError} disabled={props.disabled} size={props.size}>
        <SelectValue placeholder="Pick a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry" disabled>
          Cherry
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

describe('Select', () => {
  it('renders trigger with placeholder when no value is selected', () => {
    render(<BasicSelect />)
    const trigger = screen.getByRole('combobox')
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveTextContent('Pick a fruit')
  })

  it('shows the selected value text when defaultValue is set', () => {
    render(<BasicSelect defaultValue="apple" />)
    expect(screen.getByRole('combobox')).toHaveTextContent('Apple')
  })

  describe('class API', () => {
    it('emits the canonical st-select__trigger class chain', () => {
      render(<BasicSelect size="md" />)
      expect(screen.getByRole('combobox')).toHaveClass(
        'st-select__trigger',
        'st-select__trigger--md',
      )
    })

    it('content carries the st-select__content class when open', async () => {
      const user = userEvent.setup()
      render(<BasicSelect />)
      await user.click(screen.getByRole('combobox'))
      const listbox = await screen.findByRole('listbox')
      expect(listbox).toHaveClass('st-select__content')
    })

    it('items carry the st-select__item class', async () => {
      const user = userEvent.setup()
      render(<BasicSelect />)
      await user.click(screen.getByRole('combobox'))
      const apple = await screen.findByRole('option', { name: 'Apple' })
      expect(apple).toHaveClass('st-select__item')
    })
  })

  describe('sizes', () => {
    it('applies size modifier class to the trigger', () => {
      const { rerender } = render(<BasicSelect size="sm" />)
      expect(screen.getByRole('combobox')).toHaveClass('st-select__trigger--sm')

      rerender(<BasicSelect size="lg" />)
      expect(screen.getByRole('combobox')).toHaveClass('st-select__trigger--lg')
    })

    it('defaults to md size modifier', () => {
      render(<BasicSelect />)
      expect(screen.getByRole('combobox')).toHaveClass('st-select__trigger--md')
    })
  })

  describe('error state', () => {
    it('sets aria-invalid when isError (visual is attribute-driven, no error modifier class)', () => {
      render(<BasicSelect isError />)
      const trigger = screen.getByRole('combobox')
      // Error styling is wired via [aria-invalid="true"] in Select.css.
      // No `--error` modifier class is emitted.
      expect(trigger).toHaveAttribute('aria-invalid', 'true')
      expect(trigger.className).not.toMatch(/st-select__trigger--error/)
    })

    it('does not set aria-invalid when isError is false', () => {
      render(<BasicSelect />)
      expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('disabled', () => {
    it('disables the trigger', () => {
      render(<BasicSelect disabled />)
      expect(screen.getByRole('combobox')).toBeDisabled()
    })
  })

  describe('open / close / select', () => {
    it('opens content on trigger click and shows items', async () => {
      const user = userEvent.setup()
      render(<BasicSelect />)
      await user.click(screen.getByRole('combobox'))
      // Radix renders items in a portal once open.
      expect(await screen.findByRole('option', { name: 'Apple' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: 'Banana' })).toBeInTheDocument()
    })

    it('selecting an item fires onValueChange', async () => {
      const onValueChange = vi.fn()
      const user = userEvent.setup()
      render(<BasicSelect onValueChange={onValueChange} />)
      await user.click(screen.getByRole('combobox'))
      const banana = await screen.findByRole('option', { name: 'Banana' })
      await user.click(banana)
      expect(onValueChange).toHaveBeenCalledWith('banana')
    })

    it('marks disabled items with data-disabled and skips them on selection', async () => {
      const onValueChange = vi.fn()
      const user = userEvent.setup()
      render(<BasicSelect onValueChange={onValueChange} />)
      await user.click(screen.getByRole('combobox'))
      const cherry = await screen.findByRole('option', { name: 'Cherry' })
      expect(cherry).toHaveAttribute('data-disabled')
      await user.click(cherry)
      // Radix swallows the click on disabled items.
      expect(onValueChange).not.toHaveBeenCalled()
    })
  })

  describe('Field context integration', () => {
    it('uses Field id on the trigger', () => {
      render(
        <Field label="Fruit">
          <BasicSelect />
        </Field>,
      )
      const trigger = screen.getByRole('combobox')
      const label = screen.getByText('Fruit')
      expect(label).toHaveAttribute('for', trigger.id)
    })

    it('inherits isError from Field (attribute-driven)', () => {
      render(
        <Field label="Fruit" error="Required">
          <BasicSelect />
        </Field>,
      )
      const trigger = screen.getByRole('combobox')
      // Error styling rides on `[aria-invalid="true"]` (see Select.css).
      expect(trigger).toHaveAttribute('aria-invalid', 'true')
    })

    it('inherits disabled from Field', () => {
      render(
        <Field label="Fruit" disabled>
          <BasicSelect />
        </Field>,
      )
      expect(screen.getByRole('combobox')).toBeDisabled()
    })

    it('inherits aria-describedby from Field', () => {
      render(
        <Field label="Fruit" description="Help text">
          <BasicSelect />
        </Field>,
      )
      const describedBy = screen.getByRole('combobox').getAttribute('aria-describedby')
      expect(describedBy).toContain('-description')
    })

    it('inherits required (aria-required) from Field', () => {
      render(
        <Field label="Fruit" required>
          <BasicSelect />
        </Field>,
      )
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-required', 'true')
    })

    it('does not clobber a direct <Select required> when Field is not required', () => {
      // Regression guard: Field.required is false here, so we must inject
      // nothing — emitting aria-required={undefined} would override the value
      // Radix sets on the combobox from context.required (PR #428).
      render(
        <Field label="Fruit">
          <BasicSelect required />
        </Field>,
      )
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-required', 'true')
    })
  })

  describe('required', () => {
    it('reflects <Select required> as aria-required on the trigger', () => {
      render(<BasicSelect required />)
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-required', 'true')
    })

    it('does not set aria-required when neither Field nor required is set', () => {
      render(<BasicSelect />)
      expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-required')
    })
  })
})
