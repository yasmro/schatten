import { type ReactNode, useEffect, useState } from 'react'

export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info'
export type ToastTreatment = 'subtle' | 'solid'

export interface ToastAction {
  /** Action button label. */
  label: ReactNode
  /** Invoked when the action button is clicked. The toast is also dismissed automatically. */
  onClick: () => void
  /** Screen reader text. Required when `label` is not a string. */
  altText?: string
}

export interface ToastInput {
  /** Optional bold heading shown at the top of the toast. */
  title?: ReactNode
  /** Body text rendered below the title. */
  description?: ReactNode
  /**
   * State variant. Drives the icon, color treatment, and accent.
   * Shares the state semantic tokens with `Callout` and `Badge`.
   * @default 'default'
   */
  variant?: ToastVariant
  /**
   * Visual treatment — `subtle` for soft tinted background, `solid` for filled.
   * @default 'subtle'
   */
  treatment?: ToastTreatment
  /**
   * Auto-dismiss after this many milliseconds.
   * @default 5000
   */
  duration?: number
  /**
   * Optional action button rendered on the right. When present, the close (✕) button is suppressed
   * — clicking the action also dismisses the toast.
   */
  action?: ToastAction
}

export interface ToastData extends ToastInput {
  id: string
  open: boolean
}

const DEFAULT_DURATION = 5000

/**
 * Buffer over the CSS exit animation duration (`Toast.css` ends at ~220ms).
 * Removing the store entry sooner would unmount the toast and skip the
 * close animation, so we wait until it has visually finished.
 */
const TOAST_EXIT_DURATION_MS = 280

let count = 0
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return String(count)
}

interface State {
  toasts: ToastData[]
}

/**
 * Module-scoped store. Designed for client-side use — `toast()` is invoked
 * in response to user interaction, so this state is always empty during
 * SSR and on initial hydration. Do not call `toast()` from server code:
 * because the module is shared across requests in long-lived Node
 * processes, server-side mutations would leak between users.
 */
let memoryState: State = { toasts: [] }
const listeners = new Set<(state: State) => void>()

function setState(updater: (prev: State) => State) {
  memoryState = updater(memoryState)
  for (const listener of listeners) listener(memoryState)
}

/**
 * Two-phase close: flip `open` to false so Radix runs its exit animation,
 * then drop the entry from the store after the animation has visually
 * finished.
 */
function closeToast(id: string) {
  setState((prev) => ({
    toasts: prev.toasts.map((t) => (t.id === id ? { ...t, open: false } : t)),
  }))
  setTimeout(() => {
    setState((prev) => ({ toasts: prev.toasts.filter((t) => t.id !== id) }))
  }, TOAST_EXIT_DURATION_MS)
}

export interface ToastHandle {
  id: string
  dismiss: () => void
  update: (input: Partial<ToastInput>) => void
}

export function toast(input: ToastInput): ToastHandle {
  const id = genId()
  const data: ToastData = {
    id,
    open: true,
    duration: DEFAULT_DURATION,
    ...input,
  }
  setState((prev) => ({ toasts: [...prev.toasts, data] }))

  return {
    id,
    dismiss: () => closeToast(id),
    update: (next: Partial<ToastInput>) =>
      setState((prev) => ({
        toasts: prev.toasts.map((t) => (t.id === id ? { ...t, ...next } : t)),
      })),
  }
}

export function dismiss(id: string) {
  closeToast(id)
}

export function dismissAll() {
  const ids = memoryState.toasts.map((t) => t.id)
  setState((prev) => ({ toasts: prev.toasts.map((t) => ({ ...t, open: false })) }))
  setTimeout(() => {
    setState((prev) => ({ toasts: prev.toasts.filter((t) => !ids.includes(t.id)) }))
  }, TOAST_EXIT_DURATION_MS)
}

export function useToast() {
  const [state, setLocal] = useState<State>(memoryState)

  useEffect(() => {
    listeners.add(setLocal)
    return () => {
      listeners.delete(setLocal)
    }
  }, [])

  return {
    toasts: state.toasts,
    toast,
    dismiss,
    dismissAll,
  }
}

/**
 * Test-only helper. Resets the in-memory store between tests so leaked
 * toasts from a previous test do not bleed into the next render.
 */
export function __resetToastStoreForTesting() {
  memoryState = { toasts: [] }
  for (const listener of listeners) listener(memoryState)
}
