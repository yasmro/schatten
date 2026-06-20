import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { User } from 'lucide-react'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'

function BasicTabs(props: {
  defaultValue?: string
  value?: string
  onValueChange?: (v: string) => void
  orientation?: 'horizontal' | 'vertical'
  disabledPassword?: boolean
}) {
  return (
    <Tabs
      defaultValue={props.defaultValue ?? 'account'}
      value={props.value}
      onValueChange={props.onValueChange}
      orientation={props.orientation}
    >
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled={props.disabledPassword}>
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account panel</TabsContent>
      <TabsContent value="password">Password panel</TabsContent>
    </Tabs>
  )
}

describe('Tabs', () => {
  it('renders without crashing and shows the default panel', () => {
    render(<BasicTabs />)
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Account panel')
  })

  it('exposes tablist / tab / tabpanel roles with accessible names', () => {
    render(<BasicTabs />)
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Account' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Password' })).toBeInTheDocument()
    expect(screen.getByRole('tabpanel')).toBeInTheDocument()
  })

  it('forwards className and ref to the root', () => {
    const ref = createRef<HTMLDivElement>()
    const { container } = render(
      <Tabs defaultValue="a" className="custom-root" ref={ref}>
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
        <TabsContent value="a">Panel</TabsContent>
      </Tabs>,
    )
    const root = container.querySelector('.st-tabs')
    expect(root).toHaveClass('custom-root')
    expect(ref.current).toBe(root)
  })

  describe('class API', () => {
    it('emits the canonical st-tabs__* class chain', () => {
      render(<BasicTabs />)
      expect(screen.getByRole('tablist')).toHaveClass('st-tabs__list')
      expect(screen.getByRole('tab', { name: 'Account' })).toHaveClass('st-tabs__trigger')
      expect(screen.getByRole('tabpanel')).toHaveClass('st-tabs__content')
    })

    it('renders a single aria-hidden sliding indicator inside the list', () => {
      render(<BasicTabs />)
      const list = screen.getByRole('tablist')
      const indicators = list.querySelectorAll('.st-tabs__indicator')
      expect(indicators).toHaveLength(1)
      expect(indicators[0]).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('icon', () => {
    it('renders a leading aria-hidden icon before the label without changing the name', () => {
      render(
        <Tabs defaultValue="a">
          <TabsList>
            <TabsTrigger value="a" icon={User}>
              Account
            </TabsTrigger>
          </TabsList>
          <TabsContent value="a">Panel</TabsContent>
        </Tabs>,
      )
      const trigger = screen.getByRole('tab', { name: 'Account' })
      const icon = trigger.querySelector('.st-tabs__trigger-icon')
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveAttribute('aria-hidden', 'true')
      // Icon is the first child (leading position).
      expect(trigger.firstElementChild).toBe(icon)
    })
  })

  describe('uncontrolled', () => {
    it('switches the visible panel when another tab is clicked', async () => {
      const user = userEvent.setup()
      render(<BasicTabs defaultValue="account" />)
      expect(screen.getByRole('tabpanel')).toHaveTextContent('Account panel')

      await user.click(screen.getByRole('tab', { name: 'Password' }))
      expect(screen.getByRole('tabpanel')).toHaveTextContent('Password panel')
    })
  })

  describe('controlled', () => {
    it('treats value as the source of truth and fires onValueChange', async () => {
      const user = userEvent.setup()
      const onValueChange = vi.fn()
      render(<BasicTabs value="account" onValueChange={onValueChange} />)

      // Controlled: the panel stays on `account` until the parent updates value.
      expect(screen.getByRole('tabpanel')).toHaveTextContent('Account panel')

      await user.click(screen.getByRole('tab', { name: 'Password' }))
      expect(onValueChange).toHaveBeenCalledWith('password')
      // Value prop did not change, so the panel does not switch on its own.
      expect(screen.getByRole('tabpanel')).toHaveTextContent('Account panel')
    })
  })

  describe('disabled tab', () => {
    it('cannot be activated', async () => {
      const user = userEvent.setup()
      render(<BasicTabs disabledPassword />)
      const password = screen.getByRole('tab', { name: 'Password' })
      expect(password).toBeDisabled()

      await user.click(password)
      expect(screen.getByRole('tabpanel')).toHaveTextContent('Account panel')
    })
  })

  describe('orientation', () => {
    it('marks the tablist vertical via data-orientation', () => {
      render(<BasicTabs orientation="vertical" />)
      expect(screen.getByRole('tablist')).toHaveAttribute('data-orientation', 'vertical')
    })

    it('defaults to horizontal', () => {
      render(<BasicTabs />)
      expect(screen.getByRole('tablist')).toHaveAttribute('data-orientation', 'horizontal')
    })
  })

  describe('testid pass-through', () => {
    it('lands data-testid on each part', () => {
      render(
        <Tabs defaultValue="a">
          <TabsList data-testid="list">
            <TabsTrigger value="a" data-testid="trigger-a">
              A
            </TabsTrigger>
          </TabsList>
          <TabsContent value="a" data-testid="content-a">
            Panel
          </TabsContent>
        </Tabs>,
      )
      expect(screen.getByTestId('list')).toBeInTheDocument()
      expect(screen.getByTestId('trigger-a')).toBeInTheDocument()
      expect(screen.getByTestId('content-a')).toBeInTheDocument()
    })
  })
})
