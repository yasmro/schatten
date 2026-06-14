import { CircleAlert, CircleCheck, Info, type LucideIcon, TriangleAlert, X } from 'lucide-react'
import type { ReactNode } from 'react'
import { toast as sonnerToast } from 'sonner'
import { cn } from '../../../lib/utils'
import { toastVariants } from '../../../variants/toast'
import { Button } from '../Button'
import { Spinner } from '../Spinner'

export type ToastVariant = 'neutral' | 'success' | 'error' | 'warning' | 'info'
export type ToastAppearance = 'subtle' | 'solid'

export interface ToastAction {
  /** Action button label. */
  label: ReactNode
  /** Invoked when the action button is clicked. The toast is also dismissed automatically. */
  onClick: () => void
  /** Screen reader text. Used as the button's `aria-label` when `label` is not a string. */
  altText?: string
}

export interface ToastInput {
  /** Optional bold heading shown at the top of the toast. */
  title?: ReactNode
  /** Body text rendered below the title. */
  description?: ReactNode
  /**
   * Tone / state variant. Drives the icon, color treatment, and accent.
   * Shares the state semantic tokens with `Callout` and `Badge`.
   * @default 'neutral'
   */
  variant?: ToastVariant
  /**
   * Visual appearance — `subtle` for soft tinted background, `solid` for filled.
   * Value names align 1:1 with the underlying token suffix.
   * @default 'subtle'
   */
  appearance?: ToastAppearance
  /**
   * Auto-dismiss after this many milliseconds.
   * @default 5000
   */
  duration?: number
  /**
   * Optional action button rendered on the right. When present, the close (✕) button is
   * suppressed — clicking the action also dismisses the toast.
   */
  action?: ToastAction
}

export interface ToastHandle {
  id: string | number
  /** Dismiss the toast (runs the exit animation). */
  dismiss: () => void
  /** Merge new fields into the toast and re-render it in place. */
  update: (input: Partial<ToastInput>) => void
}

/** Handle returned by {@link ToastFn.promise}. */
export interface ToastPromiseHandle<T> {
  id: string | number
  /** Dismiss the toast. */
  dismiss: () => void
  /** The original promise — `await` it (or `.then`) to run side effects after settle. */
  unwrap: () => Promise<T>
}

/** Options for {@link ToastFn.promise}. */
export interface ToastPromiseOptions<T> {
  /** Shown while the promise is pending. Rendered with a spinner. */
  loading: ToastInput | string
  /** Shown when the promise resolves. A function receives the resolved value. */
  success: ToastInput | string | ((data: T) => ToastInput | string)
  /** Shown when the promise rejects. A function receives the rejection reason. */
  error: ToastInput | string | ((err: unknown) => ToastInput | string)
  /** Runs after the promise settles, regardless of outcome. */
  finally?: () => void | Promise<void>
}

/** The imperative `toast` API: a callable plus `loading` / `promise` helpers. */
export interface ToastFn {
  (input: ToastInput): ToastHandle
  /**
   * Show a loading toast: a spinner replaces the variant icon, the close button is
   * suppressed, and it does not auto-dismiss. Resolve it via the returned handle's
   * `update()` / `dismiss()`. A `title` is required for screen-reader announcement.
   */
  loading: (input: ToastInput) => ToastHandle
  /**
   * Drive a toast from a promise: a loading toast is shown while pending, then it
   * transitions to `success` on resolve or `error` on reject. The returned handle's
   * `.unwrap()` yields the original promise so side effects (e.g. navigation) can run
   * after success.
   */
  promise: <T>(
    promise: Promise<T> | (() => Promise<T>),
    opts: ToastPromiseOptions<T>,
  ) => ToastPromiseHandle<T>
}

const DEFAULT_DURATION = 5000

const iconByVariant: Record<ToastVariant, LucideIcon> = {
  neutral: Info,
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleAlert,
}

interface ToastItemProps extends ToastInput {
  id: string | number
  loading?: boolean
}

/**
 * The toast body. Rendered via Sonner's `toast.custom()` so the markup is fully
 * ours — real `<Icon>` / `<Spinner>` / `<Button>` and the `.st-toast__*` classes —
 * mirroring `Callout`. Sonner's own `[data-title]` / `[data-close-button]` styles
 * never apply because we don't use its slots. Sonner wraps custom content in its
 * own `<div>`, so the `.st-toast` block is rendered here as the wrapper element
 * (NOT on Sonner's `<li>`) — that keeps icon / content / action as its direct
 * children, which `:has(.st-toast__description)` in Toast.css relies on.
 */
function ToastBody({
  id,
  title,
  description,
  variant = 'neutral',
  appearance = 'subtle',
  action,
  loading,
}: ToastItemProps) {
  const Icon = iconByVariant[variant]
  const buttonVariant = appearance === 'solid' ? 'inverted' : 'tertiary'

  return (
    <div className={cn(toastVariants({ variant, appearance }))}>
      {loading ? (
        <Spinner
          size="sm"
          variant={appearance === 'solid' ? 'inverted' : 'default'}
          className="st-toast__icon"
          label=""
          aria-hidden="true"
        />
      ) : (
        <Icon className="st-toast__icon" aria-hidden="true" />
      )}
      <div className="st-toast__content">
        {title && <div className="st-toast__title">{title}</div>}
        {description && <div className="st-toast__description">{description}</div>}
      </div>

      {action ? (
        <Button
          variant={buttonVariant}
          size="sm"
          className="st-toast__action"
          aria-label={typeof action.label === 'string' ? undefined : action.altText}
          onClick={() => {
            action.onClick()
            sonnerToast.dismiss(id)
          }}
        >
          {action.label}
        </Button>
      ) : (
        !loading && (
          <Button
            variant={buttonVariant}
            size="sm"
            icon={X}
            aria-label="Close"
            className="st-toast__action"
            onClick={() => sonnerToast.dismiss(id)}
          />
        )
      )}
    </div>
  )
}

/** Render (or re-render, when `id` is given) a toast via Sonner's custom renderer. */
function render(input: ToastInput, opts: { id?: string | number; loading?: boolean } = {}) {
  const { id, loading } = opts
  return sonnerToast.custom((sid) => <ToastBody id={sid} loading={loading} {...input} />, {
    // Only include `id` when re-rendering. Sonner computes `data?.id || counter++`
    // then spreads `...data` over it — so passing `id: undefined` for a NEW toast
    // would clobber the computed id back to undefined, and dismiss(id) would never
    // match. Omitting it lets Sonner keep its generated id.
    ...(id !== undefined ? { id } : {}),
    duration: loading
      ? (input.duration ?? Number.POSITIVE_INFINITY)
      : (input.duration ?? DEFAULT_DURATION),
    // Sonner's content wrapper should fill the toast width so our block does too.
    style: { width: '100%' },
  })
}

function makeHandle(id: string | number, initial: ToastInput): ToastHandle {
  let current = initial
  return {
    id,
    dismiss: () => sonnerToast.dismiss(id),
    update: (next) => {
      current = { ...current, ...next }
      // Re-render in place as a normal (non-loading) toast so a loading→done
      // transition swaps the spinner for the tone icon and restores auto-dismiss.
      render(current, { id })
    },
  }
}

function normalizeInput(spec: ToastInput | string): ToastInput {
  return typeof spec === 'string' ? { title: spec } : spec
}

function resolveInput(
  spec: ToastInput | string | ((arg: unknown) => ToastInput | string),
  arg: unknown,
  fallbackVariant: ToastVariant,
): ToastInput {
  const resolved = typeof spec === 'function' ? spec(arg) : spec
  if (typeof resolved === 'string') return { title: resolved, variant: fallbackVariant }
  return { variant: fallbackVariant, ...resolved }
}

export const toast: ToastFn = Object.assign(
  (input: ToastInput): ToastHandle => makeHandle(render(input), input),
  {
    loading: (input: ToastInput): ToastHandle =>
      makeHandle(render(input, { loading: true }), input),
    promise: <T,>(
      promise: Promise<T> | (() => Promise<T>),
      opts: ToastPromiseOptions<T>,
    ): ToastPromiseHandle<T> => {
      const p = typeof promise === 'function' ? promise() : promise
      const id = render(normalizeInput(opts.loading), { loading: true })
      p.then(
        (data) => render(resolveInput(opts.success as never, data, 'success'), { id }),
        (err) => render(resolveInput(opts.error as never, err, 'error'), { id }),
      )
      if (opts.finally) p.finally(opts.finally)
      return { id, dismiss: () => sonnerToast.dismiss(id), unwrap: () => p }
    },
  },
)

/** Dismiss a single toast by id. */
export function dismiss(id: string | number) {
  sonnerToast.dismiss(id)
}

/** Dismiss every visible toast. */
export function dismissAll() {
  sonnerToast.dismiss()
}
