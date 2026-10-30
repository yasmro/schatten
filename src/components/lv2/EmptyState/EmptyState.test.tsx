import { render, screen } from '@testing-library/react'
import { Inbox } from 'lucide-react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'
import { Button } from '../../lv1/Button'
import { EmptyState } from './EmptyState'

describe('EmptyState', () => {
  it('renders with only a title', () => {
    render(<EmptyState title="No messages yet" />)
    expect(screen.getByRole('heading', { name: 'No messages yet' })).toBeInTheDocument()
  })

  it('forwards ref to the root element', () => {
    const ref = createRef<HTMLDivElement>()
    render(<EmptyState ref={ref} title="Empty" data-testid="root" />)
    expect(ref.current).toBe(screen.getByTestId('root'))
  })

  it('forwards className and data-testid to the root', () => {
    render(<EmptyState title="Empty" className="custom" data-testid="root" />)
    expect(screen.getByTestId('root')).toHaveClass('st-empty-state', 'custom')
  })

  describe('heading', () => {
    it('renders the title as a level 2 heading by default', () => {
      render(<EmptyState title="Empty" />)
      expect(screen.getByRole('heading', { name: 'Empty', level: 2 })).toBeInTheDocument()
    })

    it.each([1, 2, 3, 4, 5, 6] as const)('renders headingLevel %i', (level) => {
      render(<EmptyState title="Empty" headingLevel={level} />)
      expect(screen.getByRole('heading', { name: 'Empty', level })).toBeInTheDocument()
    })

    it('gets the heading from Text instead of writing its own element', () => {
      render(<EmptyState title="Empty" />)
      expect(screen.getByRole('heading', { name: 'Empty' })).toHaveClass(
        'st-text',
        'st-text--heading',
      )
    })
  })

  describe('icon', () => {
    it('renders a decorative icon', () => {
      render(<EmptyState title="Empty" icon={Inbox} data-testid="root" />)
      const svg = screen.getByTestId('root').querySelector('svg')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg).toHaveClass('st-icon', 'st-icon--muted')
    })

    it('renders no icon when none is given', () => {
      render(<EmptyState title="Empty" data-testid="root" />)
      expect(screen.getByTestId('root').querySelector('svg')).toBeNull()
    })
  })

  describe('description', () => {
    it('renders the description as a muted paragraph', () => {
      render(<EmptyState title="Empty" description="Nothing here." />)
      const description = screen.getByText('Nothing here.')
      expect(description.tagName).toBe('P')
      expect(description).toHaveClass('st-text--muted')
    })

    it('renders no paragraph when there is no description', () => {
      render(<EmptyState title="Empty" data-testid="root" />)
      expect(screen.getByTestId('root').querySelector('p')).toBeNull()
    })
  })

  describe('action', () => {
    it('renders the action content', () => {
      render(<EmptyState title="Empty" action={<Button>Create</Button>} />)
      expect(screen.getByRole('button', { name: 'Create' })).toBeInTheDocument()
    })

    it('renders several actions in one wrapper as the last child of the root', () => {
      // EmptyState.css selects this wrapper as the only direct child that is
      // neither `.st-icon` nor `.st-text`, so its position in the DOM is pinned.
      render(
        <EmptyState
          title="Empty"
          data-testid="root"
          action={
            <>
              <Button>Create</Button>
              <Button>Import</Button>
            </>
          }
        />,
      )
      const create = screen.getByRole('button', { name: 'Create' })
      const wrapper = create.parentElement
      expect(wrapper).toContainElement(screen.getByRole('button', { name: 'Import' }))
      expect(wrapper?.parentElement).toBe(screen.getByTestId('root'))
      expect(screen.getByTestId('root').lastElementChild).toBe(wrapper)
    })

    it.each([
      ['undefined', undefined],
      ['null', null],
      ['false', false],
    ])('renders no wrapper when action is %s', (_, action) => {
      render(<EmptyState title="Empty" action={action} data-testid="root" />)
      expect(screen.getByTestId('root').children).toHaveLength(1)
    })
  })

  describe('a11y', () => {
    it('has no role of its own', () => {
      render(<EmptyState title="Empty" data-testid="root" />)
      expect(screen.getByTestId('root')).not.toHaveAttribute('role')
    })

    it('passes a consumer role through to the root', () => {
      render(<EmptyState title="No results" role="status" data-testid="root" />)
      expect(screen.getByRole('status')).toBe(screen.getByTestId('root'))
    })
  })

  describe('class API', () => {
    it('defaults to the md + center modifiers', () => {
      render(<EmptyState title="Empty" data-testid="root" />)
      expect(screen.getByTestId('root')).toHaveClass('st-empty-state--md', 'st-empty-state--center')
    })

    it.each(['sm', 'md', 'lg'] as const)('emits the %s size modifier', (size) => {
      render(<EmptyState title="Empty" size={size} data-testid="root" />)
      expect(screen.getByTestId('root')).toHaveClass(`st-empty-state--${size}`)
    })

    it.each(['center', 'start'] as const)('emits the %s align modifier', (align) => {
      render(<EmptyState title="Empty" align={align} data-testid="root" />)
      expect(screen.getByTestId('root')).toHaveClass(`st-empty-state--${align}`)
    })

    it('publishes no sub-element classes', () => {
      render(
        <EmptyState
          title="Empty"
          description="Nothing here."
          icon={Inbox}
          action={<Button>Create</Button>}
          data-testid="root"
        />,
      )
      expect(screen.getByTestId('root').querySelector('[class*="st-empty-state__"]')).toBeNull()
    })
  })
})
