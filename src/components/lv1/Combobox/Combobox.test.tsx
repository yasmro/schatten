import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef, type RefAttributes } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { Field } from '../Field'
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  type ComboboxProps,
  ComboboxTrigger,
  type ComboboxTriggerProps,
  ComboboxValue,
} from './Combobox'

function BasicCombobox({
  trigger,
  ...props
}: ComboboxProps & { trigger?: ComboboxTriggerProps & RefAttributes<HTMLButtonElement> }) {
  return (
    <Combobox {...props}>
      <ComboboxTrigger aria-label="Fruit" {...trigger}>
        <ComboboxValue placeholder="Pick a fruit" />
      </ComboboxTrigger>
      <ComboboxContent data-testid="content">
        <ComboboxInput placeholder="Search" />
        <ComboboxList>
          <ComboboxItem value="apple">Apple</ComboboxItem>
          <ComboboxItem value="banana">Banana</ComboboxItem>
          <ComboboxItem value="cherry" disabled>
            Cherry
          </ComboboxItem>
        </ComboboxList>
        <ComboboxEmpty>No results</ComboboxEmpty>
      </ComboboxContent>
    </Combobox>
  )
}

const options = () => screen.getAllByRole('option').map((option) => option.textContent)
const trigger = () => screen.getByRole('combobox')
const search = () => screen.getByRole('searchbox')
const highlighted = () => document.querySelector('[data-highlighted]')

describe('Combobox', () => {
  describe('trigger', () => {
    it('exposes role combobox with an accessible name', () => {
      render(<BasicCombobox />)
      expect(screen.getByRole('combobox', { name: 'Fruit' })).toBeInTheDocument()
    })

    it('shows the placeholder while no value is selected', () => {
      render(<BasicCombobox />)
      expect(trigger()).toHaveTextContent('Pick a fruit')
    })

    it('shows the selected item text while closed', () => {
      render(<BasicCombobox defaultValue="banana" />)
      expect(trigger()).toHaveTextContent('Banana')
    })

    it('forwards ref, className and data-testid to the button', () => {
      const ref = createRef<HTMLButtonElement>()
      const testId = { 'data-testid': 't' }
      render(<BasicCombobox trigger={{ ref, className: 'custom', ...testId }} />)
      expect(ref.current).toBe(screen.getByTestId('t'))
      expect(ref.current).toHaveClass('custom')
    })

    it('applies a distinct class for each size', () => {
      render(<BasicCombobox trigger={{ size: 'lg' }} />)
      expect(trigger()).toHaveClass('st-combobox__trigger', 'st-combobox__trigger--lg')
    })

    it('opens with ArrowDown', () => {
      render(<BasicCombobox />)
      fireEvent.keyDown(trigger(), { key: 'ArrowDown' })
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    it('sets aria-invalid when isError is true', () => {
      render(<BasicCombobox trigger={{ isError: true }} />)
      expect(trigger()).toHaveAttribute('aria-invalid', 'true')
    })

    it('does not open when disabled', async () => {
      const user = userEvent.setup()
      render(<BasicCombobox disabled />)
      await user.click(trigger())
      expect(trigger()).toBeDisabled()
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })
  })

  describe('open panel', () => {
    it('renders into a portal, named by the trigger, and focuses the search', async () => {
      const user = userEvent.setup()
      render(<BasicCombobox />)
      await user.click(trigger())
      expect(screen.getByRole('dialog', { name: 'Fruit' })).toBe(screen.getByTestId('content'))
      expect(screen.getByRole('listbox', { name: 'Fruit' })).toBeInTheDocument()
      expect(search()).toHaveFocus()
    })

    it('fires onOpenChange', async () => {
      const user = userEvent.setup()
      const onOpenChange = vi.fn()
      render(<BasicCombobox onOpenChange={onOpenChange} />)
      await user.click(trigger())
      expect(onOpenChange).toHaveBeenCalledWith(true)
    })

    it('highlights the selected option first', () => {
      render(<BasicCombobox defaultOpen defaultValue="banana" />)
      expect(highlighted()).toHaveTextContent('Banana')
      expect(search()).toHaveAttribute('aria-activedescendant', highlighted()?.id)
    })

    it('marks the selected option', () => {
      render(<BasicCombobox defaultOpen defaultValue="banana" />)
      expect(screen.getByRole('option', { name: 'Banana' })).toHaveAttribute(
        'aria-selected',
        'true',
      )
    })
  })

  describe('selecting', () => {
    it('fires onValueChange and closes on click', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(<BasicCombobox defaultOpen onValueChange={onValueChange} />)
      await user.click(screen.getByRole('option', { name: 'Banana' }))
      expect(onValueChange).toHaveBeenCalledWith('banana')
      expect(screen.getByRole('combobox')).toHaveTextContent('Banana')
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    it('keeps value as the source of truth when controlled', async () => {
      const user = userEvent.setup()
      render(<BasicCombobox defaultOpen value="apple" />)
      await user.click(screen.getByRole('option', { name: 'Banana' }))
      expect(trigger()).toHaveTextContent('Apple')
    })

    it('ignores a disabled option', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(<BasicCombobox defaultOpen onValueChange={onValueChange} />)
      fireEvent.click(screen.getByRole('option', { name: 'Cherry' }))
      await user.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}')
      expect(highlighted()).toHaveTextContent('Banana')
      expect(onValueChange).not.toHaveBeenCalled()
    })

    it('selects the highlighted option with Enter', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(<BasicCombobox defaultOpen onValueChange={onValueChange} />)
      await user.keyboard('{ArrowDown}{Enter}')
      expect(onValueChange).toHaveBeenCalledWith('banana')
    })

    it('does not select with the Enter that confirms an IME conversion', () => {
      const onValueChange = vi.fn()
      render(<BasicCombobox defaultOpen onValueChange={onValueChange} />)
      fireEvent.keyDown(search(), { key: 'Enter', isComposing: true })
      expect(onValueChange).not.toHaveBeenCalled()
    })

    it('closes with Tab and returns focus to the trigger', async () => {
      const user = userEvent.setup()
      render(<BasicCombobox defaultOpen />)
      await user.keyboard('{Tab}')
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
      expect(trigger()).toHaveFocus()
    })
  })

  describe('filtering', () => {
    it('narrows the options as the user types', async () => {
      const user = userEvent.setup()
      render(<BasicCombobox defaultOpen />)
      await user.type(search(), 'ban')
      expect(options()).toEqual(['Banana'])
    })

    it('ignores case and character width', async () => {
      const user = userEvent.setup()
      render(<BasicCombobox defaultOpen />)
      await user.type(search(), 'ＡＰＰ')
      expect(options()).toEqual(['Apple'])
    })

    it('highlights the first match after the search changes', async () => {
      const user = userEvent.setup()
      render(<BasicCombobox defaultOpen defaultValue="apple" />)
      await user.type(search(), 'b')
      expect(highlighted()).toHaveTextContent('Banana')
    })

    it('shows the empty message when nothing matches', async () => {
      const user = userEvent.setup()
      render(<BasicCombobox defaultOpen />)
      expect(screen.getByRole('status')).toBeEmptyDOMElement()
      await user.type(search(), 'zzz')
      expect(screen.getByRole('status')).toHaveTextContent('No results')
    })

    it('uses a custom filter', async () => {
      const user = userEvent.setup()
      render(
        <BasicCombobox
          defaultOpen
          filter={(text, query) => text.startsWith(query.toUpperCase())}
        />,
      )
      await user.type(search(), 'b')
      expect(options()).toEqual(['Banana'])
    })

    it('leaves the options alone with filter={false} and reports the search', async () => {
      const user = userEvent.setup()
      const onSearchChange = vi.fn()
      render(<BasicCombobox defaultOpen filter={false} onSearchChange={onSearchChange} />)
      await user.type(search(), 'z')
      expect(onSearchChange).toHaveBeenCalledWith('z')
      expect(options()).toEqual(['Apple', 'Banana', 'Cherry'])
    })

    it('matches on textValue when the children render no text', async () => {
      const user = userEvent.setup()
      render(
        <Combobox defaultOpen>
          <ComboboxTrigger aria-label="Icon" />
          <ComboboxContent>
            <ComboboxInput />
            <ComboboxList>
              <ComboboxItem value="star" textValue="Star">
                <svg aria-hidden="true" />
              </ComboboxItem>
              <ComboboxItem value="moon" textValue="Moon">
                <svg aria-hidden="true" />
              </ComboboxItem>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>,
      )
      await user.type(search(), 'sta')
      expect(screen.getAllByRole('option')).toHaveLength(1)
    })

    it('reads the option text from nested elements', async () => {
      const user = userEvent.setup()
      render(
        <Combobox defaultOpen>
          <ComboboxTrigger aria-label="Fruit" />
          <ComboboxContent>
            <ComboboxInput />
            <ComboboxList>
              <ComboboxItem value="kiwi">
                <strong>Kiwi</strong> fruit
              </ComboboxItem>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>,
      )
      await user.type(search(), 'kiwi f')
      expect(options()).toEqual(['Kiwi fruit'])
    })

    it('names a group by its label', () => {
      render(
        <Combobox defaultOpen>
          <ComboboxTrigger aria-label="Fruit" />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxGroup>
                <ComboboxLabel>Pome</ComboboxLabel>
                <ComboboxItem value="apple">Apple</ComboboxItem>
              </ComboboxGroup>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>,
      )
      expect(screen.getByRole('group', { name: 'Pome' })).toBeInTheDocument()
    })
  })

  describe('inside <Field>', () => {
    it('names the trigger through the Field label', () => {
      render(
        <Field label="Fruit">
          <Combobox>
            <ComboboxTrigger>
              <ComboboxValue />
            </ComboboxTrigger>
          </Combobox>
        </Field>,
      )
      expect(screen.getByRole('combobox', { name: 'Fruit' })).toBeInTheDocument()
    })

    it('inherits error, description, disabled and required', () => {
      render(
        <Field label="Fruit" error="Pick one" required disabled>
          <Combobox>
            <ComboboxTrigger>
              <ComboboxValue />
            </ComboboxTrigger>
          </Combobox>
        </Field>,
      )
      expect(trigger()).toHaveAttribute('aria-invalid', 'true')
      expect(trigger()).toHaveAttribute('aria-required', 'true')
      expect(trigger()).toHaveAccessibleDescription(expect.stringContaining('Pick one'))
      expect(trigger()).toBeDisabled()
    })
  })

  describe('in a form', () => {
    it('submits the value under name', () => {
      render(
        <form data-testid="form">
          <BasicCombobox name="fruit" defaultValue="apple" />
        </form>,
      )
      const form = screen.getByTestId('form') as HTMLFormElement
      expect(new FormData(form).get('fruit')).toBe('apple')
    })

    it('blocks native validation only when required is set on the combobox', () => {
      render(
        <form data-testid="form">
          <BasicCombobox required />
        </form>,
      )
      expect((screen.getByTestId('form') as HTMLFormElement).checkValidity()).toBe(false)
    })

    it('returns to defaultValue on form reset', async () => {
      const user = userEvent.setup()
      render(
        <form data-testid="form">
          <BasicCombobox name="fruit" defaultValue="apple" />
        </form>,
      )
      await user.click(trigger())
      await user.click(screen.getByRole('option', { name: 'Banana' }))
      fireEvent.reset(screen.getByTestId('form'))
      expect(trigger()).toHaveTextContent('Apple')
    })
  })
})
