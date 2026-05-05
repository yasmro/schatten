import { act, render, renderHook, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Toaster } from './Toaster'
import { __resetToastStoreForTesting, dismissAll, toast, useToast } from './use-toast'

describe('toast store', () => {
  afterEach(() => {
    __resetToastStoreForTesting()
  })

  it('adds a toast and returns a handle', () => {
    const handle = toast({ title: 'Hello' })
    expect(handle.id).toBeTruthy()
    const { result } = renderHook(() => useToast())
    expect(result.current.toasts).toHaveLength(1)
    expect(result.current.toasts[0]).toMatchObject({ title: 'Hello', open: true })
  })

  it('applies the default 5000ms duration when none is provided', () => {
    toast({ title: 'Hello' })
    const { result } = renderHook(() => useToast())
    expect(result.current.toasts[0].duration).toBe(5000)
  })

  it('respects per-toast duration', () => {
    toast({ title: 'Hello', duration: 1000 })
    const { result } = renderHook(() => useToast())
    expect(result.current.toasts[0].duration).toBe(1000)
  })

  it('dismiss() closes the toast (sets open=false) without removing it', () => {
    const handle = toast({ title: 'Hello' })
    act(() => handle.dismiss())
    const { result } = renderHook(() => useToast())
    expect(result.current.toasts).toHaveLength(1)
    expect(result.current.toasts[0].open).toBe(false)
  })

  it('update() merges new fields into the toast', () => {
    const handle = toast({ title: 'Original', description: 'first' })
    act(() => handle.update({ title: 'Updated' }))
    const { result } = renderHook(() => useToast())
    expect(result.current.toasts[0].title).toBe('Updated')
    expect(result.current.toasts[0].description).toBe('first')
  })

  it('dismissAll() closes every toast', () => {
    toast({ title: 'A' })
    toast({ title: 'B' })
    toast({ title: 'C' })
    act(() => dismissAll())
    const { result } = renderHook(() => useToast())
    expect(result.current.toasts.every((t) => t.open === false)).toBe(true)
  })

  it('useToast() subscribes to store changes', () => {
    const { result } = renderHook(() => useToast())
    expect(result.current.toasts).toHaveLength(0)
    act(() => {
      toast({ title: 'New' })
    })
    expect(result.current.toasts).toHaveLength(1)
    expect(result.current.toasts[0].title).toBe('New')
  })

  it('useToast().dismiss(id) closes the matching toast', () => {
    const { result } = renderHook(() => useToast())
    let id = ''
    act(() => {
      id = toast({ title: 'Hello' }).id
    })
    act(() => result.current.dismiss(id))
    expect(result.current.toasts[0].open).toBe(false)
  })

  it('issues unique ids for each call', () => {
    const a = toast({ title: 'A' })
    const b = toast({ title: 'B' })
    expect(a.id).not.toBe(b.id)
  })
})

describe('Toaster integration', () => {
  beforeEach(() => {
    __resetToastStoreForTesting()
  })
  afterEach(() => {
    __resetToastStoreForTesting()
  })

  it('renders title and description for an open toast', () => {
    render(<Toaster />)
    act(() => {
      toast({ title: 'Saved', description: 'Your changes are saved.', variant: 'success' })
    })
    expect(screen.getByText('Saved')).toBeInTheDocument()
    expect(screen.getByText('Your changes are saved.')).toBeInTheDocument()
  })

  it('renders an action button that fires the provided callback', async () => {
    const onAction = vi.fn()
    const user = userEvent.setup()
    render(<Toaster />)
    act(() => {
      toast({
        title: 'Saved',
        action: { label: 'Undo', onClick: onAction },
      })
    })
    await user.click(screen.getByRole('button', { name: 'Undo' }))
    expect(onAction).toHaveBeenCalledOnce()
  })

  it('clicking the action button also dismisses the toast', async () => {
    const user = userEvent.setup()
    render(<Toaster />)
    act(() => {
      toast({ title: 'Saved', action: { label: 'Undo', onClick: () => {} } })
    })
    await user.click(screen.getByRole('button', { name: 'Undo' }))
    // Action click triggers a dismiss → store entry flips to open=false synchronously,
    // and is removed after the exit animation buffer.
    const { result } = renderHook(() => useToast())
    expect(result.current.toasts[0].open).toBe(false)
  })

  it('hides the close button when an action is provided', () => {
    render(<Toaster />)
    act(() => {
      toast({ title: 'Saved', action: { label: 'Undo', onClick: () => {} } })
    })
    expect(screen.getByRole('button', { name: 'Undo' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument()
  })

  it('renders an accessible close button labeled "Close"', () => {
    render(<Toaster />)
    act(() => {
      toast({ title: 'Saved' })
    })
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
  })

  it('keeps the toast in the store during the exit animation, then removes it', () => {
    vi.useFakeTimers()
    render(<Toaster />)
    let handle: ReturnType<typeof toast>
    act(() => {
      handle = toast({ title: 'Saved' })
    })
    act(() => handle.dismiss())

    const { result } = renderHook(() => useToast())
    // Mid-animation: still in the store but flagged closed so Radix can fade it out.
    expect(result.current.toasts).toHaveLength(1)
    expect(result.current.toasts[0].open).toBe(false)

    // Advance past the exit animation buffer.
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(result.current.toasts).toHaveLength(0)
    vi.useRealTimers()
  })

  it('auto-dismisses after the configured duration', () => {
    vi.useFakeTimers()
    render(<Toaster />)
    act(() => {
      toast({ title: 'Hello', duration: 1000 })
    })
    expect(screen.getByText('Hello')).toBeInTheDocument()
    // duration (1000ms) + exit animation buffer (280ms) — advance well past both
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    const { result } = renderHook(() => useToast())
    expect(result.current.toasts).toHaveLength(0)
    vi.useRealTimers()
  })
})
