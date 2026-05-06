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

  it('renders the variant icon (decorative, aria-hidden)', () => {
    const { container } = render(
      <Callout variant="success" title="Saved">
        Done.
      </Callout>,
    )
    const icon = container.querySelector('svg[aria-hidden="true"]')
    expect(icon).toBeInTheDocument()
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

  it('applies the subtle compound classes for the chosen variant', () => {
    const { container } = render(<Callout variant="success" treatment="subtle" />)
    const root = container.firstChild as HTMLElement
    expect(root.className).toContain('bg-success-subtle')
    expect(root.className).toContain('text-success')
    expect(root.className).toContain('border-success')
  })

  it('applies the solid compound classes for the chosen variant', () => {
    const { container } = render(<Callout variant="error" treatment="solid" />)
    const root = container.firstChild as HTMLElement
    expect(root.className).toContain('bg-error')
    expect(root.className).toContain('text-error-foreground')
    expect(root.className).toContain('border-transparent')
  })

  it('uses items-center when there is only a title', () => {
    const { container } = render(<Callout title="Only" />)
    expect(container.querySelector('.items-center')).toBeInTheDocument()
    expect(container.querySelector('.items-start')).not.toBeInTheDocument()
  })

  it('uses items-start when both title and body are present', () => {
    const { container } = render(<Callout title="Heading">Body</Callout>)
    expect(container.querySelector('.items-start')).toBeInTheDocument()
    expect(container.querySelector('.items-center')).not.toBeInTheDocument()
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

  it('uses the inverted Button variant for the close button on solid treatment', () => {
    const { container } = render(
      <Callout variant="error" treatment="solid" onClose={() => {}} title="Failed" />,
    )
    const closeBtn = container.querySelector('button[aria-label="Close"]')
    // The inverted Button variant adds `text-inverted-foreground`; the
    // tertiary variant uses `text-foreground`. Asserting against the
    // inverted token is enough to discriminate.
    expect(closeBtn?.className).toContain('text-inverted-foreground')
  })

  it('uses the tertiary Button variant for the close button on subtle treatment', () => {
    const { container } = render(
      <Callout variant="info" treatment="subtle" onClose={() => {}} title="Heads up" />,
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
