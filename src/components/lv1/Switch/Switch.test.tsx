import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Field } from '../Field/Field'
import { Switch } from './Switch'

// Comments are stripped so the rule-body matches below can't be fooled by
// prose in the file header that quotes the very selectors being asserted.
const switchCss = readFileSync(resolve(__dirname, 'Switch.css'), 'utf8').replace(
  /\/\*[\s\S]*?\*\//g,
  '',
)

describe('Switch', () => {
  it('renders an unchecked switch by default', () => {
    render(<Switch aria-label="Notifications" />)
    const sw = screen.getByRole('switch', { name: 'Notifications' })
    expect(sw).toBeInTheDocument()
    expect(sw).toHaveAttribute('data-state', 'unchecked')
  })

  it('emits the canonical st-switch class chain', () => {
    render(<Switch aria-label="sw" />)
    const sw = screen.getByRole('switch')
    expect(sw).toHaveClass('st-switch', 'st-switch--md')
  })

  it('wraps the switch in .st-switch-wrapper', () => {
    const { container } = render(<Switch aria-label="sw" />)
    expect(container.firstChild).toHaveClass('st-switch-wrapper')
  })

  it('renders label and associates it via htmlFor', () => {
    render(<Switch label="Notifications" />)
    const sw = screen.getByRole('switch')
    const label = screen.getByText('Notifications')
    expect(label).toHaveAttribute('for', sw.id)
    expect(label).toHaveClass('st-switch-wrapper__label')
  })

  describe('sizes', () => {
    it('applies size modifier classes', () => {
      const { rerender } = render(<Switch aria-label="sw" size="sm" />)
      expect(screen.getByRole('switch')).toHaveClass('st-switch--sm')

      rerender(<Switch aria-label="sw" size="lg" />)
      expect(screen.getByRole('switch')).toHaveClass('st-switch--lg')
    })

    it('defaults to md size', () => {
      render(<Switch aria-label="sw" />)
      expect(screen.getByRole('switch')).toHaveClass('st-switch--md')
    })
  })

  describe('error state', () => {
    it('sets aria-invalid when isError is true (visual driven by CSS)', () => {
      render(<Switch aria-label="sw" isError />)
      expect(screen.getByRole('switch')).toHaveAttribute('aria-invalid', 'true')
    })

    it('does not set aria-invalid when isError is false', () => {
      render(<Switch aria-label="sw" />)
      expect(screen.getByRole('switch')).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('disabled', () => {
    it('disables the switch', () => {
      render(<Switch aria-label="sw" disabled />)
      expect(screen.getByRole('switch')).toBeDisabled()
    })

    it('does not fire onCheckedChange when disabled', async () => {
      const onCheckedChange = vi.fn()
      const user = userEvent.setup()
      render(<Switch aria-label="sw" disabled onCheckedChange={onCheckedChange} />)
      await user.click(screen.getByRole('switch'))
      expect(onCheckedChange).not.toHaveBeenCalled()
    })
  })

  describe('controlled / uncontrolled', () => {
    it('respects defaultChecked (uncontrolled)', () => {
      render(<Switch aria-label="sw" defaultChecked />)
      expect(screen.getByRole('switch')).toHaveAttribute('data-state', 'checked')
    })

    it('reflects controlled checked', () => {
      render(<Switch aria-label="sw" checked onCheckedChange={() => {}} />)
      expect(screen.getByRole('switch')).toHaveAttribute('data-state', 'checked')
    })

    it('toggles state and fires onCheckedChange on click', async () => {
      const onCheckedChange = vi.fn()
      const user = userEvent.setup()
      render(<Switch aria-label="sw" onCheckedChange={onCheckedChange} />)
      const sw = screen.getByRole('switch')
      await user.click(sw)
      expect(onCheckedChange).toHaveBeenCalledWith(true)
      expect(sw).toHaveAttribute('data-state', 'checked')
    })

    it('toggles via label click', async () => {
      const onCheckedChange = vi.fn()
      const user = userEvent.setup()
      render(<Switch label="Notifications" onCheckedChange={onCheckedChange} />)
      await user.click(screen.getByText('Notifications'))
      expect(onCheckedChange).toHaveBeenCalledWith(true)
    })
  })

  describe('thumb + check icon', () => {
    it('thumb gets st-switch__thumb (position driven by [data-state] in CSS)', () => {
      render(<Switch aria-label="sw" />)
      const sw = screen.getByRole('switch')
      const thumb = sw.querySelector('.st-switch__thumb')
      expect(thumb).toBeInTheDocument()
      // No translate-x utility on JSX — position is set by
      // .st-switch[data-state="checked"] .st-switch__thumb in Switch.css.
      expect(thumb?.className).not.toContain('translate-x-')
    })

    it('check icon span carries .st-switch__check without group-data utilities', () => {
      render(<Switch aria-label="sw" />)
      const sw = screen.getByRole('switch')
      const check = sw.querySelector('.st-switch__check')
      expect(check).toBeInTheDocument()
      expect(check?.className).not.toContain('group-data-')
      expect(check?.className).not.toContain('opacity-')
    })

    it('JSX no longer adds the `group` Tailwind utility', () => {
      render(<Switch aria-label="sw" />)
      // The `group` class was previously needed for `group-data-[state=checked]:`
      // child variants — CSS-driven sibling selectors made it redundant.
      expect(screen.getByRole('switch')).not.toHaveClass('group')
    })
  })

  // #524 — the check icon used to pin `color: var(--color-background)` on
  // `.st-switch__check`, so `:disabled` (which recedes the track to
  // `--color-surface-disabled`) left a pale icon on a pale track. The colour
  // now lives on the block and the check rides `currentColor`, the same way
  // Checkbox wires its indicator.
  //
  // These read the CSS *source* rather than the DOM on purpose: jsdom loads
  // no stylesheet, so a rendered assertion cannot see the colour, and VRT
  // cannot either — the whole icon is smaller than `maxDiffPixelRatio: 0.01`,
  // which is exactly why the original bug shipped with every gate green.
  // The rendered contrast stays the VRT's job; these pin the token wiring
  // the visual hangs off.
  describe('CSS colour contract (#524)', () => {
    /** Body of the first rule whose selector matches `selector`, comments stripped. */
    function ruleBody(selector: string): string {
      const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const match = switchCss.match(new RegExp(`${escaped} \\{[^}]*\\}`))
      // Never fall back to '' — an unmatched selector must fail loudly here
      // rather than make every `not.toContain` below pass vacuously.
      expect(match, `no rule found for \`${selector}\``).not.toBeNull()
      return match?.[0] ?? ''
    }

    it('leaves the check icon colour to the block (no token pinned on the child)', () => {
      const checkRule = ruleBody('.st-switch__check')
      expect(checkRule).toContain('color: currentColor')
      expect(checkRule).not.toContain('var(--color-')
    })

    it('recedes the check icon to --color-foreground-disabled when disabled', () => {
      expect(ruleBody('.st-switch:disabled')).toContain('color: var(--color-foreground-disabled)')
    })

    // The disabled colour above sits at `(0,2,0)` and wins over
    // `.st-switch[data-state="checked"]` (also `(0,2,0)`) by source order
    // alone. Any `color` declared on an error+checked rule would be `(0,3,0)`
    // and would out-rank it, silently restoring #524 — so pin its absence.
    it('declares no colour on the error+checked rule that would out-rank :disabled', () => {
      // `[\s;{]` anchors the match to a `color:` *declaration* — without it
      // the rule's own `background-color:` / `border-color:` match too.
      expect(ruleBody('.st-switch[aria-invalid="true"][data-state="checked"]')).not.toMatch(
        /[\s;{]color\s*:/,
      )
    })

    it('exposes the :disabled + [data-state="checked"] hook that colour rule keys off', () => {
      render(<Switch aria-label="sw" disabled defaultChecked />)
      const sw = screen.getByRole('switch')
      expect(sw).toBeDisabled()
      expect(sw).toHaveAttribute('data-state', 'checked')
      expect(sw.querySelector('.st-switch__check')).toBeInTheDocument()
    })
  })

  describe('Field context integration', () => {
    it('inherits isError from Field', () => {
      render(
        <Field label="Notifications" error="Required">
          <Switch aria-label="sw" />
        </Field>,
      )
      expect(screen.getByRole('switch')).toHaveAttribute('aria-invalid', 'true')
    })

    it('inherits disabled from Field', () => {
      render(
        <Field label="Notifications" disabled>
          <Switch aria-label="sw" />
        </Field>,
      )
      expect(screen.getByRole('switch')).toBeDisabled()
    })

    it('inherits aria-describedby from Field', () => {
      render(
        <Field label="Notifications" description="Help text">
          <Switch aria-label="sw" />
        </Field>,
      )
      const describedBy = screen.getByRole('switch').getAttribute('aria-describedby')
      expect(describedBy).toContain('-description')
    })

    it('does NOT inherit id from Field (Switch has its own label)', () => {
      render(
        <Field label="Notifications">
          <Switch label="Toggle" />
        </Field>,
      )
      const sw = screen.getByRole('switch')
      const internalLabel = screen.getByText('Toggle')
      expect(internalLabel).toHaveAttribute('for', sw.id)
    })

    it('takes its accessible name from the Field label when it has no own label', () => {
      render(
        <Field label="Notifications">
          <Switch />
        </Field>,
      )
      expect(screen.getByRole('switch', { name: 'Notifications' })).toBeInTheDocument()
    })

    it('prefers its own label over the Field label for naming', () => {
      render(
        <Field label="Notifications">
          <Switch label="Toggle" />
        </Field>,
      )
      const sw = screen.getByRole('switch', { name: 'Toggle' })
      expect(sw).not.toHaveAttribute('aria-labelledby')
    })

    it('prefers an explicit aria-label over the Field label', () => {
      render(
        <Field label="Notifications">
          <Switch aria-label="Custom name" />
        </Field>,
      )
      expect(screen.getByRole('switch', { name: 'Custom name' })).toBeInTheDocument()
    })

    it('inherits required (aria-required) from Field', () => {
      render(
        <Field label="Notifications" required>
          <Switch aria-label="sw" />
        </Field>,
      )
      expect(screen.getByRole('switch')).toHaveAttribute('aria-required', 'true')
    })

    it('does not clobber a direct required prop when Field is not required', () => {
      // Regression guard: Field.required is false here, so we must inject
      // nothing — emitting aria-required={undefined} would override the value
      // Radix sets on the button from the `required` prop (PR #428).
      render(
        <Field label="Notifications">
          <Switch aria-label="sw" required />
        </Field>,
      )
      expect(screen.getByRole('switch')).toHaveAttribute('aria-required', 'true')
    })
  })

  describe('required', () => {
    it('reflects a direct required prop as aria-required (Radix)', () => {
      render(<Switch aria-label="sw" required />)
      expect(screen.getByRole('switch')).toHaveAttribute('aria-required', 'true')
    })

    it('does not set aria-required when neither Field nor required is set', () => {
      render(<Switch aria-label="sw" />)
      expect(screen.getByRole('switch')).not.toHaveAttribute('aria-required')
    })
  })

  it('forwards className to the wrapper', () => {
    const { container } = render(<Switch aria-label="sw" className="custom-class" />)
    expect(container.firstChild as HTMLElement).toHaveClass('st-switch-wrapper', 'custom-class')
  })

  it('forwards ref to the switch control', () => {
    const ref = { current: null as HTMLButtonElement | null }
    render(<Switch aria-label="sw" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('forwards data-testid to the switch control', () => {
    render(<Switch aria-label="sw" data-testid="notify" />)
    expect(screen.getByTestId('notify')).toBe(screen.getByRole('switch', { name: 'sw' }))
  })
})
