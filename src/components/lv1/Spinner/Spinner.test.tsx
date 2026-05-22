import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders with role="status"', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('emits the canonical st-spinner class chain for default props', () => {
    render(<Spinner data-testid="s" />)
    expect(screen.getByTestId('s')).toHaveClass(
      'st-spinner',
      'st-spinner--default',
      'st-spinner--md',
    )
  })

  it('renders a visually-hidden default label "Loading"', () => {
    render(<Spinner />)
    const labelEl = screen.getByText('Loading')
    expect(labelEl).toBeInTheDocument()
    expect(labelEl).toHaveClass('sr-only')
  })

  it('renders a custom label', () => {
    render(<Spinner label="Fetching data" />)
    expect(screen.getByText('Fetching data')).toBeInTheDocument()
    expect(screen.queryByText('Loading')).not.toBeInTheDocument()
  })

  describe('type', () => {
    it('renders the default (spinning circle) SVG by default', () => {
      const { container } = render(<Spinner data-testid="s" />)
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
      // Default-type SVG carries the rotor class — its CSS rule applies the
      // `schatten-spin` animation. This is what replaced the legacy
      // `animate-spin` Tailwind utility in #285.
      expect(svg).toHaveClass('st-spinner__rotor')
      // Inner track + arc shapes carry their own sub-element classes for
      // the opacity stack — previously inline `opacity-25` / `opacity-75`.
      expect(container.querySelector('.st-spinner__track')).toBeInTheDocument()
      expect(container.querySelector('.st-spinner__arc')).toBeInTheDocument()
    })

    it('renders the ripple variant when type="ripple"', () => {
      const { container } = render(<Spinner type="ripple" />)
      // Ripple variant: 1 dot + 2 concentric ripples → assert by sub-element
      // class names rather than counting children, which can drift.
      expect(container.querySelector('.st-spinner__dot')).toBeInTheDocument()
      expect(container.querySelector('.st-spinner__ripple-1')).toBeInTheDocument()
      expect(container.querySelector('.st-spinner__ripple-2')).toBeInTheDocument()
    })
  })

  describe('sizes', () => {
    it('applies size modifier classes', () => {
      const { rerender, container } = render(<Spinner size="sm" />)
      const getRoot = () => container.firstChild as HTMLElement
      expect(getRoot()).toHaveClass('st-spinner--sm')

      rerender(<Spinner size="lg" />)
      expect(getRoot()).toHaveClass('st-spinner--lg')
    })

    it('defaults to md size', () => {
      const { container } = render(<Spinner />)
      expect(container.firstChild as HTMLElement).toHaveClass('st-spinner--md')
    })
  })

  describe('variants', () => {
    it('uses --default variant modifier by default', () => {
      const { container } = render(<Spinner />)
      expect(container.firstChild as HTMLElement).toHaveClass('st-spinner--default')
    })

    it('uses --inverted variant modifier when variant="inverted"', () => {
      const { container } = render(<Spinner variant="inverted" />)
      expect(container.firstChild as HTMLElement).toHaveClass('st-spinner--inverted')
    })
  })

  it('marks the inner SVG as aria-hidden', () => {
    const { container } = render(<Spinner />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('forwards className', () => {
    const { container } = render(<Spinner className="custom-class" />)
    expect(container.firstChild as HTMLElement).toHaveClass('custom-class')
  })

  it('forwards arbitrary props like data-* to the root', () => {
    render(<Spinner data-testid="my-spinner" />)
    expect(screen.getByTestId('my-spinner')).toBeInTheDocument()
  })

  it('forwards ref to the root div', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Spinner ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
