import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { dismissAll, toast } from './Toast'
import { Toaster } from './Toaster'

// Sonner keeps a module-global store; clear it between tests so toasts from one
// test don't leak into the next. Each test also queries by a unique title and
// scopes structural assertions to the toast containing it, so any not-yet-
// removed leftover can't cross-contaminate.
afterEach(() => {
  dismissAll()
  cleanup()
})

/** Find the `.st-toast` element that contains the given (unique) title text. */
async function toastByTitle(title: string) {
  const node = await screen.findByText(title)
  const el = node.closest('.st-toast')
  expect(el).not.toBeNull()
  return el as HTMLElement
}

describe('toast()', () => {
  it('returns a handle with an id', () => {
    render(<Toaster />)
    const handle = toast({ title: 'handle-id' })
    expect(handle.id).toBeDefined()
  })

  it('issues unique ids for each call', () => {
    render(<Toaster />)
    const a = toast({ title: 'uniq-a' })
    const b = toast({ title: 'uniq-b' })
    expect(a.id).not.toBe(b.id)
  })

  it('renders title and description for an open toast', async () => {
    render(<Toaster />)
    toast({ title: 'render-title', description: 'render-desc', variant: 'success' })
    expect(await screen.findByText('render-title')).toBeInTheDocument()
    expect(screen.getByText('render-desc')).toBeInTheDocument()
  })

  it('renders an accessible close button labeled "Close toast" by default', async () => {
    render(<Toaster />)
    toast({ title: 'has-close' })
    await screen.findByText('has-close')
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
  })
})

describe('class API', () => {
  it('emits the canonical st-toast modifier chain on the toast li', async () => {
    render(<Toaster />)
    toast({ title: 'chain-toast', variant: 'error', appearance: 'solid' })
    const li = await toastByTitle('chain-toast')
    expect(li).toHaveClass('st-toast', 'st-toast--error', 'st-toast--solid')
  })

  it('uses the subtle appearance by default', async () => {
    render(<Toaster />)
    toast({ title: 'default-shape', variant: 'success' })
    const li = await toastByTitle('default-shape')
    expect(li).toHaveClass('st-toast--success', 'st-toast--subtle')
    expect(li).not.toHaveClass('st-toast--solid')
  })

  it('names the sub-element slots with st-toast__* classes', async () => {
    render(<Toaster />)
    toast({ title: 'slots-title', description: 'slots-desc' })
    const li = await toastByTitle('slots-title')
    expect(li.querySelector('.st-toast__title')).not.toBeNull()
    expect(li.querySelector('.st-toast__description')).not.toBeNull()
    expect(li.querySelector('.st-toast__icon')).not.toBeNull()
  })
})

describe('action', () => {
  it('renders an action button that fires the provided callback', async () => {
    const onAction = vi.fn()
    const user = userEvent.setup()
    render(<Toaster />)
    toast({ title: 'act-fire', action: { label: 'Undo', onClick: onAction } })
    await screen.findByText('act-fire')
    await user.click(screen.getByRole('button', { name: 'Undo' }))
    expect(onAction).toHaveBeenCalledOnce()
  })

  it('hides the close button when an action is provided', async () => {
    render(<Toaster />)
    toast({ title: 'act-no-close', action: { label: 'Undo', onClick: () => {} } })
    await screen.findByText('act-no-close')
    expect(screen.getByRole('button', { name: 'Undo' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument()
  })

  it('dismisses the toast when the close button is clicked', async () => {
    // Regression: the id passed to ToastBody must match the toast's stored id,
    // otherwise dismiss(id) silently no-ops (the id-clobber bug, #318).
    const user = userEvent.setup()
    render(<Toaster />)
    toast({ title: 'close-dismiss' })
    await screen.findByText('close-dismiss')
    await user.click(screen.getByRole('button', { name: /close/i }))
    await waitFor(() => expect(screen.queryByText('close-dismiss')).not.toBeInTheDocument())
  })

  it('dismisses the toast when the action button is clicked', async () => {
    const user = userEvent.setup()
    render(<Toaster />)
    toast({ title: 'action-dismiss', action: { label: 'Undo', onClick: () => {} } })
    await screen.findByText('action-dismiss')
    await user.click(screen.getByRole('button', { name: 'Undo' }))
    await waitFor(() => expect(screen.queryByText('action-dismiss')).not.toBeInTheDocument())
  })

  it('applies altText as aria-label when the label is not a string', async () => {
    render(<Toaster />)
    toast({
      title: 'act-alt',
      action: {
        label: <span data-testid="icon-label">★</span>,
        altText: 'Open',
        onClick: () => {},
      },
    })
    await screen.findByText('act-alt')
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument()
  })
})

describe('handle.update()', () => {
  it('changes the appearance mid-life and the toast re-renders', async () => {
    render(<Toaster />)
    const handle = toast({ title: 'upd-shape', variant: 'success', appearance: 'subtle' })
    let li = await toastByTitle('upd-shape')
    expect(li).toHaveClass('st-toast--subtle')

    handle.update({ appearance: 'solid' })
    await waitFor(() => {
      li = document.querySelector('.st-toast') as HTMLElement
      expect(li).toHaveClass('st-toast--solid')
    })
    expect(li).not.toHaveClass('st-toast--subtle')
  })
})

describe('toast.loading()', () => {
  it('renders a spinner and no close button (loading state)', async () => {
    render(<Toaster />)
    toast.loading({ title: 'loading-toast' })
    const li = await toastByTitle('loading-toast')
    // Loading is conveyed by the rendered <Spinner> in the icon slot.
    expect(li.querySelector('.st-spinner')).not.toBeNull()
    expect(li.querySelector('.st-toast__icon')).not.toBeNull()
    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument()
  })
})

describe('toast.promise()', () => {
  it('transitions a resolving promise from loading to success', async () => {
    render(<Toaster />)
    toast.promise(Promise.resolve({ name: 'Ada' }), {
      loading: 'promise-loading',
      success: (data) => ({ title: `welcome ${data.name}`, variant: 'success' }),
      error: 'promise-error',
    })
    expect(await screen.findByText('promise-loading')).toBeInTheDocument()
    expect(await screen.findByText('welcome Ada')).toBeInTheDocument()
  })

  it('transitions a rejecting promise to the error toast', async () => {
    render(<Toaster />)
    toast.promise(Promise.reject(new Error('boom')), {
      loading: 'promise-loading-2',
      success: 'promise-success-2',
      error: 'promise-failed',
    })
    expect(await screen.findByText('promise-failed')).toBeInTheDocument()
  })
})

describe('Toaster', () => {
  it('renders the Sonner viewport region once a toast is fired', async () => {
    render(<Toaster position="top-right" />)
    toast({ title: 'viewport-probe' })
    await screen.findByText('viewport-probe')
    expect(document.querySelector('[data-sonner-toaster]')).not.toBeNull()
  })
})
