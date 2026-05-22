import { render, screen } from '@testing-library/react'
import { Check, Search } from 'lucide-react'
import { describe, expect, it, vi } from 'vitest'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders the passed lucide icon as an svg', () => {
    const { container } = render(<Icon icon={Search} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('emits the canonical st-icon class chain for default props', () => {
    render(<Icon icon={Search} data-testid="i" />)
    expect(screen.getByTestId('i')).toHaveClass('st-icon', 'st-icon--md', 'st-icon--inherit')
  })

  describe('sizes', () => {
    it('applies size modifier classes', () => {
      const { rerender, container } = render(<Icon icon={Search} size="sm" />)
      const getSvg = () => container.querySelector('svg') as SVGElement
      expect(getSvg()).toHaveClass('st-icon--sm')

      rerender(<Icon icon={Search} size="lg" />)
      expect(getSvg()).toHaveClass('st-icon--lg')
    })

    it('defaults to the md size modifier', () => {
      const { container } = render(<Icon icon={Search} />)
      expect(container.querySelector('svg')).toHaveClass('st-icon--md')
    })
  })

  describe('color', () => {
    it('inherits currentColor by default via st-icon--inherit (not a fixed color)', () => {
      const { container } = render(<Icon icon={Search} />)
      const svg = container.querySelector('svg') as SVGElement
      expect(svg).toHaveClass('st-icon--inherit')
      expect(svg).not.toHaveClass('st-icon--default')
    })

    it('applies the semantic color modifier when color is set', () => {
      const { rerender, container } = render(<Icon icon={Search} color="error" />)
      const getSvg = () => container.querySelector('svg') as SVGElement
      expect(getSvg()).toHaveClass('st-icon--error')

      rerender(<Icon icon={Search} color="vermillion" />)
      expect(getSvg()).toHaveClass('st-icon--vermillion')
    })
  })

  describe('accessibility', () => {
    it('is decorative by default — aria-hidden, no role', () => {
      const { container } = render(<Icon icon={Search} />)
      const svg = container.querySelector('svg') as SVGElement
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg).not.toHaveAttribute('role')
    })

    it('exposes role="img" with the accessible name when aria-label is set', () => {
      render(<Icon icon={Search} aria-label="Search" />)
      const svg = screen.getByRole('img', { name: 'Search' })
      expect(svg).toBeInTheDocument()
      expect(svg).not.toHaveAttribute('aria-hidden')
    })

    it('lets an explicit aria-hidden override the decorative default', () => {
      const { container } = render(<Icon icon={Search} aria-hidden={false} />)
      expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'false')
    })

    it('treats an empty-string aria-label as decorative, not a nameless role="img"', () => {
      // Mirrors `aria-label={dynamicValue}` where the value resolves to ''.
      const emptyLabel = ''
      const { container } = render(<Icon icon={Search} aria-label={emptyLabel} />)
      const svg = container.querySelector('svg') as SVGElement
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg).not.toHaveAttribute('role')
    })

    it('treats aria-labelledby as a label (role="img", no aria-hidden)', () => {
      const { container } = render(
        <>
          <span id="icon-label">Search</span>
          <Icon icon={Search} aria-labelledby="icon-label" />
        </>,
      )
      const svg = container.querySelector('svg') as SVGElement
      expect(svg).toHaveAttribute('role', 'img')
      expect(svg).not.toHaveAttribute('aria-hidden')
    })

    it('warns when aria-hidden is set on a labelled icon', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      render(<Icon icon={Search} aria-label="Search" aria-hidden={true} />)
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('aria-hidden'))
      warn.mockRestore()
    })

    it('does not warn for an ordinary decorative or labelled icon', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      render(<Icon icon={Search} />)
      render(<Icon icon={Check} aria-label="Done" />)
      expect(warn).not.toHaveBeenCalled()
      warn.mockRestore()
    })
  })

  it('forwards className alongside the size modifier class', () => {
    const { container } = render(<Icon icon={Search} className="text-info" />)
    const svg = container.querySelector('svg') as SVGElement
    expect(svg).toHaveClass('st-icon--md')
    expect(svg).toHaveClass('text-info')
  })

  it('forwards arbitrary props like data-* and strokeWidth to the svg', () => {
    render(<Icon icon={Check} data-testid="my-icon" strokeWidth={3} />)
    const svg = screen.getByTestId('my-icon')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('stroke-width', '3')
  })

  it('forwards ref to the underlying svg element', () => {
    const ref = { current: null as SVGSVGElement | null }
    render(<Icon icon={Search} ref={ref} />)
    expect(ref.current).toBeInstanceOf(SVGElement)
  })
})
