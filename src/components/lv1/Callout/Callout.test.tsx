import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '../Button'
import { Callout } from './Callout'

describe('Callout', () => {
  it('renders title and body (children form)', () => {
    render(
      <Callout title="Heads up" variant="info">
        Body content
      </Callout>,
    )
    expect(screen.getByText('Heads up')).toBeInTheDocument()
    expect(screen.getByText('Body content')).toBeInTheDocument()
  })

  it('emits the canonical st-callout class chain for default props', () => {
    const { container } = render(<Callout title="Hello" />)
    expect(container.firstChild as HTMLElement).toHaveClass(
      'st-callout',
      'st-callout--neutral',
      'st-callout--subtle',
    )
  })

  it('renders body via the `description` prop', () => {
    render(<Callout title="Heads up" description="From the prop" />)
    expect(screen.getByText('From the prop')).toBeInTheDocument()
  })

  it('prefers `description` over `children` when both are provided', () => {
    render(
      <Callout title="Heads up" description="from prop">
        from children
      </Callout>,
    )
    expect(screen.getByText('from prop')).toBeInTheDocument()
    expect(screen.queryByText('from children')).not.toBeInTheDocument()
  })

  it('renders the variant icon with the __icon sub-element class (decorative)', () => {
    const { container } = render(
      <Callout variant="success" title="Saved">
        Done.
      </Callout>,
    )
    const icon = container.querySelector('svg.st-callout__icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders title with the __title sub-element class', () => {
    render(<Callout title="Heads up">Body</Callout>)
    expect(screen.getByText('Heads up')).toHaveClass('st-callout__title')
  })

  it('renders body with the __body sub-element class', () => {
    render(<Callout title="Heads up">Body content</Callout>)
    expect(screen.getByText('Body content')).toHaveClass('st-callout__body')
  })

  it('does not render a close button by default', () => {
    render(<Callout title="Hello">Body</Callout>)
    expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument()
  })

  it('renders a close button when onClose is provided and fires it on click', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(
      <Callout title="Hello" onClose={onClose}>
        Body
      </Callout>,
    )
    const closeBtn = screen.getByRole('button', { name: 'Close' })
    expect(closeBtn).toBeInTheDocument()
    await user.click(closeBtn)
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('renders both an action and a close button when both are provided', () => {
    render(
      <Callout title="Both" action={<Button size="sm">Save</Button>} onClose={() => {}}>
        Body
      </Callout>,
    )
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
  })

  it('wraps the action node in a __action sub-element slot', () => {
    const { container } = render(
      <Callout title="With action" action={<Button size="sm">Save</Button>}>
        Body
      </Callout>,
    )
    const actionSlot = container.querySelector('.st-callout__action')
    expect(actionSlot).toBeInTheDocument()
    expect(actionSlot?.querySelector('button')).toHaveTextContent('Save')
  })

  it('applies __action to the close button so it inherits the trailing-slot layout', () => {
    const { container } = render(<Callout title="X" onClose={() => {}} />)
    const closeBtn = container.querySelector('button[aria-label="Close"]')
    expect(closeBtn).toHaveClass('st-callout__action')
  })

  it('applies the subtle modifier for the chosen variant', () => {
    const { container } = render(<Callout variant="success" appearance="subtle" />)
    const root = container.firstChild as HTMLElement
    expect(root).toHaveClass('st-callout--success', 'st-callout--subtle')
  })

  it('applies the solid modifier for the chosen variant', () => {
    const { container } = render(<Callout variant="error" appearance="solid" />)
    const root = container.firstChild as HTMLElement
    expect(root).toHaveClass('st-callout--error', 'st-callout--solid')
  })

  it('renders icon + content as direct children of the root (no inner flex wrapper)', () => {
    const { container } = render(<Callout title="Only" />)
    const root = container.firstChild as HTMLElement
    // Layout is on `.st-callout` itself — children sit directly under
    // it rather than inside an extra flex `<div>`. This guarantees that
    // the CSS-driven `:has()` align-items rule works (it targets
    // immediate descendants).
    expect(root.querySelector('svg.st-callout__icon')?.parentElement).toBe(root)
    expect(root.querySelector('.st-callout__content')?.parentElement).toBe(root)
  })

  it('renders both title and body inside the __content sub-element when both are present', () => {
    const { container } = render(<Callout title="Heading">Body</Callout>)
    const content = container.querySelector('.st-callout__content') as HTMLElement
    expect(content).toBeInTheDocument()
    expect(content.querySelector('.st-callout__title')).toHaveTextContent('Heading')
    expect(content.querySelector('.st-callout__body')).toHaveTextContent('Body')
  })

  it('forwards ref to the root element', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(
      <Callout ref={ref} title="Hello">
        Body
      </Callout>,
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('uses the inverted Button variant for the close button on solid appearance', () => {
    const { container } = render(
      <Callout variant="error" appearance="solid" onClose={() => {}} title="Failed" />,
    )
    const closeBtn = container.querySelector('button[aria-label="Close"]')
    // The inverted Button variant adds `text-inverted-foreground`; the
    // tertiary variant uses `text-foreground`. Asserting against the
    // inverted token is enough to discriminate.
    expect(closeBtn?.className).toContain('text-inverted-foreground')
  })

  it('uses the tertiary Button variant for the close button on subtle appearance', () => {
    const { container } = render(
      <Callout variant="info" appearance="subtle" onClose={() => {}} title="Heads up" />,
    )
    const closeBtn = container.querySelector('button[aria-label="Close"]')
    expect(closeBtn?.className).toContain('text-foreground')
    expect(closeBtn?.className).not.toContain('text-inverted-foreground')
  })

  it('passes through arbitrary HTML attributes (role, data-*)', () => {
    const { container } = render(
      <Callout role="alert" data-testid="my-callout" title="Alert">
        Important
      </Callout>,
    )
    const el = container.firstChild as HTMLElement
    expect(el.getAttribute('role')).toBe('alert')
    expect(el.getAttribute('data-testid')).toBe('my-callout')
  })
})
