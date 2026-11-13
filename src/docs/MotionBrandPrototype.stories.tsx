import type { Meta, StoryObj } from '@storybook/react-vite'
import { type ReactNode, useEffect, useState } from 'react'
import { Button } from '../components/lv1/Button/Button'
import { Dialog } from '../components/lv1/Dialog/Dialog'
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '../components/lv1/Popover/Popover'
import { Text } from '../components/lv1/Text/Text'
import { Lead, Note, PageTitle, SectionTitle, SubsectionTitle } from './docs-ui'

/**
 * SPIKE — brand motion prototype (dissolve + scale + blur). See #630.
 *
 * Throwaway comparison page for deciding Schatten's signature enter/exit
 * motion. It does NOT change any component: every override lives in the
 * <style> block below, scoped under `html[data-motion-proto]`, which the
 * story sets on mount and removes on unmount. Unlayered rules beat
 * `@layer components`, so no specificity escalation is needed.
 *
 * Three candidates:
 * - a — current (the shipped keyframes, untouched)
 * - b — dissolve + scale
 * - c — dissolve + scale + blur
 *
 * No VRT spec: the contract here is motion over time, which a still frame
 * cannot show (same reasoning as Tokens/Motion).
 */
const meta: Meta = {
  title: 'Tokens/Motion Prototype',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

type Variant = 'a' | 'b' | 'c'
type Timing = 'current' | 'transitions-dev'
type ExitStyle = 'mirror' | 'fade'

const VARIANTS: { id: Variant; label: string; summary: string }[] = [
  { id: 'a', label: 'a — Current', summary: 'Shipped keyframes (fade + scale / slide)' },
  { id: 'b', label: 'b — Dissolve + scale', summary: 'opacity + scale from the scale token' },
  { id: 'c', label: 'c — + Blur', summary: 'opacity + scale + blur, settling into focus' },
]

/**
 * Timing presets for b / c. `current` keeps today's durations and keyword
 * easings; `transitions-dev` uses that library's usage-matched values
 * (modal / dropdown open = 250ms, close = 150ms, smooth ease-out).
 */
const TIMING: Record<
  Timing,
  {
    label: string
    dialogEnter: string
    dialogExit: string
    popoverEnter: string
    popoverExit: string
    easeEnter: string
    easeExit: string
  }
> = {
  current: {
    label: 'Schatten (current)',
    dialogEnter: '200ms',
    dialogExit: '150ms',
    popoverEnter: '150ms',
    popoverExit: '100ms',
    easeEnter: 'ease-out',
    easeExit: 'ease-in',
  },
  'transitions-dev': {
    label: 'transitions.dev',
    dialogEnter: '250ms',
    dialogExit: '150ms',
    popoverEnter: '250ms',
    popoverExit: '150ms',
    easeEnter: 'cubic-bezier(0.22, 1, 0.36, 1)',
    easeExit: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },
}

const BLURS = ['2px', '3px', '4px'] as const
const SCALES = ['0.96', '0.97'] as const
const SLOWMO = ['1', '4'] as const

/**
 * Exit timing, decoupled from the enter preset. `preset` keeps the preset's
 * own exit duration / easing; a ratio derives the exit from the enter
 * duration (exit = enter × ratio), so "same motion, played faster" can be
 * tuned directly. A front-loaded exit curve (smooth ease-out) finishes the
 * fade almost immediately and hides the scale / blur, hence the ease-in
 * options.
 */
const EXIT_SPEEDS = [
  { id: 'preset', label: 'Preset' },
  { id: '0.5', label: '×0.5 of enter' },
  { id: '0.6', label: '×0.6 of enter' },
  { id: '0.75', label: '×0.75 of enter' },
] as const
const EXIT_EASES = [
  { id: 'preset', label: 'Preset' },
  { id: 'ease-in', label: 'ease-in' },
  { id: 'ease-in-out', label: 'ease-in-out' },
] as const

const exitDuration = (enter: string, preset: string, speed: (typeof EXIT_SPEEDS)[number]['id']) =>
  speed === 'preset' ? preset : `${Math.round(Number.parseFloat(enter) * Number(speed))}ms`

/*
 * All candidate rules. Durations are multiplied by --proto-slowmo so a
 * reviewer can inspect each frame at ×4. Under prefers-reduced-motion the
 * b / c candidates collapse to an opacity-only fade (no scale, no blur).
 */
const PROTO_CSS = `
@keyframes proto-in-b {
  from { opacity: 0; transform: scale(var(--proto-scale)); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes proto-out-b {
  from { opacity: 1; transform: scale(1); }
  to   { opacity: 0; transform: scale(var(--proto-scale)); }
}
@keyframes proto-in-c {
  from { opacity: 0; transform: scale(var(--proto-scale)); filter: blur(var(--proto-blur)); }
  to   { opacity: 1; transform: scale(1); filter: blur(0); }
}
@keyframes proto-out-c {
  from { opacity: 1; transform: scale(1); filter: blur(0); }
  to   { opacity: 0; transform: scale(var(--proto-scale)); filter: blur(var(--proto-blur)); }
}
@keyframes proto-fade-in  { from { opacity: 0; } to { opacity: 1; } }
@keyframes proto-fade-out { from { opacity: 1; } to { opacity: 0; } }

/* ---- Dialog (specimens always play their own variant) ---- */
html[data-motion-proto="b"] .st-dialog__content[data-state="open"],
html[data-motion-proto] .proto-specimen[data-variant="b"][data-state="open"] {
  animation: proto-in-b calc(var(--proto-dialog-enter) * var(--proto-slowmo)) var(--proto-ease-enter) both;
}
html[data-motion-proto="c"] .st-dialog__content[data-state="open"],
html[data-motion-proto] .proto-specimen[data-variant="c"][data-state="open"] {
  animation: proto-in-c calc(var(--proto-dialog-enter) * var(--proto-slowmo)) var(--proto-ease-enter) both;
}
html[data-motion-proto="b"] .st-dialog__content[data-state="closed"],
html[data-motion-proto] .proto-specimen[data-variant="b"][data-state="closed"] {
  animation: var(--proto-exit-b) calc(var(--proto-dialog-exit) * var(--proto-slowmo)) var(--proto-ease-exit) both;
}
html[data-motion-proto="c"] .st-dialog__content[data-state="closed"],
html[data-motion-proto] .proto-specimen[data-variant="c"][data-state="closed"] {
  animation: var(--proto-exit-c) calc(var(--proto-dialog-exit) * var(--proto-slowmo)) var(--proto-ease-exit) both;
}
html[data-motion-proto]:not([data-motion-proto="a"]) .st-dialog__overlay[data-state="open"] {
  animation: proto-fade-in calc(var(--proto-dialog-enter) * var(--proto-slowmo)) var(--proto-ease-enter);
}
html[data-motion-proto]:not([data-motion-proto="a"]) .st-dialog__overlay[data-state="closed"] {
  animation: proto-fade-out calc(var(--proto-dialog-exit) * var(--proto-slowmo)) var(--proto-ease-exit);
}

/* Specimen a = the shipped Dialog keyframes at the shipped timing. */
html[data-motion-proto] .proto-specimen[data-variant="a"][data-state="open"] {
  animation: dialog-content-zoom-in calc(200ms * var(--proto-slowmo)) ease-out both;
}
html[data-motion-proto] .proto-specimen[data-variant="a"][data-state="closed"] {
  animation: dialog-content-zoom-out calc(150ms * var(--proto-slowmo)) ease-in both;
}

/* ---- Popover (scale grows from the trigger side) ---- */
html[data-motion-proto="b"] .st-popover__content,
html[data-motion-proto="c"] .st-popover__content {
  transform-origin: var(--radix-popover-content-transform-origin);
}
html[data-motion-proto="b"] .st-popover__content[data-state="open"] {
  animation: proto-in-b calc(var(--proto-popover-enter) * var(--proto-slowmo)) var(--proto-ease-enter);
}
html[data-motion-proto="c"] .st-popover__content[data-state="open"] {
  animation: proto-in-c calc(var(--proto-popover-enter) * var(--proto-slowmo)) var(--proto-ease-enter);
}
html[data-motion-proto="b"] .st-popover__content[data-state="closed"] {
  animation: var(--proto-exit-b) calc(var(--proto-popover-exit) * var(--proto-slowmo)) var(--proto-ease-exit);
}
html[data-motion-proto="c"] .st-popover__content[data-state="closed"] {
  animation: var(--proto-exit-c) calc(var(--proto-popover-exit) * var(--proto-slowmo)) var(--proto-ease-exit);
}
/* Shipped popover timing also follows slow-mo so a / b / c compare fairly. */
html[data-motion-proto="a"] .st-popover__content {
  animation-duration: calc(150ms * var(--proto-slowmo));
}
html[data-motion-proto="a"] .st-popover__content[data-state="closed"] {
  animation-duration: calc(100ms * var(--proto-slowmo));
}
html[data-motion-proto="a"] .st-dialog__content[data-state="open"],
html[data-motion-proto="a"] .st-dialog__overlay[data-state="open"] {
  animation-duration: calc(200ms * var(--proto-slowmo));
}
html[data-motion-proto="a"] .st-dialog__content[data-state="closed"],
html[data-motion-proto="a"] .st-dialog__overlay[data-state="closed"] {
  animation-duration: calc(150ms * var(--proto-slowmo));
}

@media (prefers-reduced-motion: reduce) {
  html[data-motion-proto] .st-dialog__content[data-state="open"],
  html[data-motion-proto] .st-popover__content[data-state="open"],
  html[data-motion-proto] .proto-specimen[data-state="open"] {
    animation: proto-fade-in 150ms linear both;
  }
  html[data-motion-proto] .st-dialog__content[data-state="closed"],
  html[data-motion-proto] .st-popover__content[data-state="closed"],
  html[data-motion-proto] .proto-specimen[data-state="closed"] {
    animation: proto-fade-out 100ms linear both;
  }
}
`

/** One row of mutually-exclusive choices, rendered as pressed/unpressed Buttons. */
function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: readonly { id: T; label: string }[]
  value: T
  onChange: (v: T) => void
}) {
  return (
    <fieldset className="flex flex-wrap items-center gap-3">
      <legend className="float-left w-28 shrink-0 text-sm font-medium text-foreground">
        {label}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <Button
            key={o.id}
            size="sm"
            variant={o.id === value ? 'primary' : 'secondary'}
            aria-pressed={o.id === value}
            onClick={() => onChange(o.id)}
          >
            {o.label}
          </Button>
        ))}
      </div>
    </fieldset>
  )
}

/** Fake dialog panel used for the simultaneous a / b / c comparison. */
const Specimen = ({
  variant,
  state,
  children,
}: {
  variant: Variant
  state: 'open' | 'closed'
  children: ReactNode
}) => (
  <div className="flex h-56 items-center justify-center rounded-xl border border-border bg-surface p-4">
    <div
      className="proto-specimen w-full max-w-[14rem] border border-border-strong bg-background p-4"
      style={{ boxShadow: 'var(--shadow-modal)' }}
      data-variant={variant}
      data-state={state}
    >
      {children}
    </div>
  </div>
)

const PrototypePage = () => {
  const [variant, setVariant] = useState<Variant>('c')
  const [timing, setTiming] = useState<Timing>('transitions-dev')
  const [exitStyle, setExitStyle] = useState<ExitStyle>('mirror')
  const [exitSpeed, setExitSpeed] = useState<(typeof EXIT_SPEEDS)[number]['id']>('0.6')
  const [exitEase, setExitEase] = useState<(typeof EXIT_EASES)[number]['id']>('ease-in')
  const [blur, setBlur] = useState<(typeof BLURS)[number]>('3px')
  const [scale, setScale] = useState<(typeof SCALES)[number]>('0.97')
  const [slowmo, setSlowmo] = useState<(typeof SLOWMO)[number]>('1')
  const [specimenState, setSpecimenState] = useState<'open' | 'closed'>('open')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const t = TIMING[timing]
    const vars: Record<string, string> = {
      '--proto-blur': blur,
      '--proto-scale': scale,
      '--proto-slowmo': slowmo,
      '--proto-dialog-enter': t.dialogEnter,
      '--proto-dialog-exit': exitDuration(t.dialogEnter, t.dialogExit, exitSpeed),
      '--proto-popover-enter': t.popoverEnter,
      '--proto-popover-exit': exitDuration(t.popoverEnter, t.popoverExit, exitSpeed),
      '--proto-ease-enter': t.easeEnter,
      '--proto-ease-exit': exitEase === 'preset' ? t.easeExit : exitEase,
      '--proto-exit-b': exitStyle === 'mirror' ? 'proto-out-b' : 'proto-fade-out',
      '--proto-exit-c': exitStyle === 'mirror' ? 'proto-out-c' : 'proto-fade-out',
    }
    root.setAttribute('data-motion-proto', variant)
    for (const [k, v] of Object.entries(vars)) root.style.setProperty(k, v)
    return () => {
      root.removeAttribute('data-motion-proto')
      for (const k of Object.keys(vars)) root.style.removeProperty(k)
    }
  }, [variant, timing, exitStyle, exitSpeed, exitEase, blur, scale, slowmo])

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      <style>{PROTO_CSS}</style>
      <PageTitle>Motion prototype — dissolve, scale, blur</PageTitle>
      <Lead>
        A spike for choosing Schatten&apos;s signature enter / exit motion. Surfaces should come
        into focus as they appear and dissolve into shadow as they leave. Nothing here changes a
        component — all overrides are scoped to this page and removed when you leave it.
      </Lead>

      {reduced && (
        <Note>
          <code>prefers-reduced-motion: reduce</code> is active — every candidate collapses to an
          opacity-only fade, which is the intended reduced-motion behavior.
        </Note>
      )}

      <SectionTitle>Controls</SectionTitle>
      <div className="flex flex-col gap-3 rounded-xl border border-border p-5">
        <Segmented label="Candidate" options={VARIANTS} value={variant} onChange={setVariant} />
        <Segmented
          label="Timing (b/c)"
          options={(Object.keys(TIMING) as Timing[]).map((id) => ({ id, label: TIMING[id].label }))}
          value={timing}
          onChange={setTiming}
        />
        <Segmented
          label="Exit (b/c)"
          options={[
            { id: 'mirror', label: 'Mirror enter' },
            { id: 'fade', label: 'Fade only' },
          ]}
          value={exitStyle}
          onChange={setExitStyle}
        />
        <Segmented
          label="Exit speed"
          options={EXIT_SPEEDS}
          value={exitSpeed}
          onChange={setExitSpeed}
        />
        <Segmented
          label="Exit easing"
          options={EXIT_EASES}
          value={exitEase}
          onChange={setExitEase}
        />
        <Segmented
          label="Blur (c)"
          options={BLURS.map((id) => ({ id, label: id }))}
          value={blur}
          onChange={setBlur}
        />
        <Segmented
          label="Scale (b/c)"
          options={SCALES.map((id) => ({ id, label: id }))}
          value={scale}
          onChange={setScale}
        />
        <Segmented
          label="Slow motion"
          options={SLOWMO.map((id) => ({ id, label: `×${id}` }))}
          value={slowmo}
          onChange={setSlowmo}
        />
      </div>

      <SectionTitle>Side by side</SectionTitle>
      <Note>
        The three candidates play at once on a dialog-like panel. Timing, exit, blur, scale and slow
        motion apply to b and c; a always plays the shipped Dialog keyframes.
      </Note>
      <div className="mb-4 mt-4">
        <Button onClick={() => setSpecimenState((s) => (s === 'open' ? 'closed' : 'open'))}>
          {specimenState === 'open' ? 'Play exit' : 'Play enter'}
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {VARIANTS.map((v) => (
          <div key={v.id} className="flex flex-col gap-2">
            <Specimen variant={v.id} state={specimenState}>
              <Text variant="heading" size="sm">
                Save changes?
              </Text>
              <Text size="sm" color="muted">
                Your edits will be kept in this draft.
              </Text>
            </Specimen>
            <Text variant="label" size="sm">
              {v.label}
            </Text>
            <Text size="sm" color="muted">
              {v.summary}
            </Text>
          </div>
        ))}
      </div>

      <SectionTitle>Real components</SectionTitle>
      <Note>
        These are the shipped Dialog and Popover, re-animated by the candidate selected above.
      </Note>

      <SubsectionTitle>Dialog</SubsectionTitle>
      <Button variant="secondary" onClick={() => setDialogOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        isOpen={dialogOpen}
        onOpenChange={setDialogOpen}
        title="Save changes?"
        description="Your edits will be kept in this draft."
        actionButton={{ label: 'Save', onClick: () => setDialogOpen(false) }}
        cancelButton={{ label: 'Cancel' }}
      />

      <SubsectionTitle>Popover</SubsectionTitle>
      <div className="flex flex-wrap gap-3 py-16">
        {(['bottom', 'top', 'right', 'left'] as const).map((side) => (
          <Popover key={side}>
            <PopoverTrigger>
              <Button variant="secondary">Open ({side})</Button>
            </PopoverTrigger>
            <PopoverContent side={side}>
              <div className="flex flex-col gap-3">
                <Text size="sm">Filters apply to this view only.</Text>
                <PopoverClose>
                  <Button size="sm" variant="secondary">
                    Close
                  </Button>
                </PopoverClose>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  )
}

export const Prototype: Story = {
  name: 'Prototype',
  render: () => <PrototypePage />,
}
