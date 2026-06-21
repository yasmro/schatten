import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('renders without crashing', () => {
    render(<Skeleton data-testid="s" />)
    expect(screen.getByTestId('s')).toBeInTheDocument()
  })

  it('emits the canonical st-skeleton class', () => {
    render(<Skeleton data-testid="s" />)
    expect(screen.getByTestId('s')).toHaveClass('st-skeleton')
  })

  it('forwards className alongside the base class', () => {
    render(<Skeleton data-testid="s" className="h-4 w-20" />)
    expect(screen.getByTestId('s')).toHaveClass('st-skeleton', 'h-4', 'w-20')
  })

  it('forwards ref to the root div', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Skeleton ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('forwards arbitrary props like data-* to the root', () => {
    render(<Skeleton data-testid="my-skeleton" />)
    expect(screen.getByTestId('my-skeleton')).toBeInTheDocument()
  })

  describe('accessibility', () => {
    // Skeleton is decorative — it has no role and is hidden from the
    // accessibility tree by default. Loading is announced on the container
    // (role="status" / aria-busy), not on the placeholder itself.
    it('is aria-hidden by default', () => {
      render(<Skeleton data-testid="s" />)
      expect(screen.getByTestId('s')).toHaveAttribute('aria-hidden', 'true')
    })

    it('lets consumers override aria-hidden', () => {
      render(<Skeleton data-testid="s" aria-hidden={false} />)
      expect(screen.getByTestId('s')).toHaveAttribute('aria-hidden', 'false')
    })
  })
})
