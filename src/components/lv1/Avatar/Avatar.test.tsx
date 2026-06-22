import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { Avatar } from './Avatar'

// Note: Radix mounts the <img> only after the image reports `loaded`, and jsdom
// never loads images / fires the load event — so in unit tests the fallback is
// always what renders. The image element and the image→fallback swap are covered
// in a real browser by Avatar.vrt.spec.ts (the interaction test), not here.

describe('Avatar', () => {
  it('renders the fallback initials', () => {
    render(<Avatar fallback="JD" />)
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('applies the default size class (md) to the root', () => {
    const { container } = render(<Avatar fallback="JD" />)
    expect(container.firstChild).toHaveClass('st-avatar', 'st-avatar--md')
  })

  it('applies a distinct class for each size', () => {
    const { container: sm } = render(<Avatar fallback="JD" size="sm" />)
    expect(sm.firstChild).toHaveClass('st-avatar--sm')

    const { container: lg } = render(<Avatar fallback="JD" size="lg" />)
    expect(lg.firstChild).toHaveClass('st-avatar--lg')
  })

  it('forwards className to the root element', () => {
    const { container } = render(<Avatar fallback="JD" className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLSpanElement>()
    render(<Avatar fallback="JD" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })

  it('forwards data-* and other HTML attributes (testid pass-through)', () => {
    // component-testid-guideline.md — every lv1 forwards `...props` to its root.
    render(<Avatar fallback="JD" data-testid="my-avatar" />)
    expect(screen.getByTestId('my-avatar')).toBeInTheDocument()
  })

  it('forwards aria-label to the root for a fallback-only accessible name', () => {
    render(<Avatar fallback="JD" aria-label="John Doe" data-testid="named" />)
    expect(screen.getByTestId('named')).toHaveAttribute('aria-label', 'John Doe')
  })

  describe('alt accessibility warning', () => {
    it('warns when src is provided without alt', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      render(<Avatar src="/u.jpg" fallback="JD" />)
      expect(warn).toHaveBeenCalledWith(expect.stringContaining('without `alt`'))
      warn.mockRestore()
    })

    it('does not warn when alt is provided', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      render(<Avatar src="/u.jpg" alt="Jane Doe" fallback="JD" />)
      expect(warn).not.toHaveBeenCalled()
      warn.mockRestore()
    })

    it('does not warn for an explicit empty alt (decorative)', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      render(<Avatar src="/u.jpg" alt="" fallback="JD" />)
      expect(warn).not.toHaveBeenCalled()
      warn.mockRestore()
    })

    it('does not warn when there is no image (fallback only)', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      render(<Avatar fallback="JD" />)
      expect(warn).not.toHaveBeenCalled()
      warn.mockRestore()
    })
  })

  describe('class API', () => {
    it('emits the root + fallback sub-element classes', () => {
      const { container } = render(<Avatar fallback="JD" size="lg" />)
      const root = container.firstChild as HTMLElement
      expect(root).toHaveClass('st-avatar', 'st-avatar--lg')
      expect(root.querySelector('.st-avatar__fallback')).not.toBeNull()
    })
  })
})
