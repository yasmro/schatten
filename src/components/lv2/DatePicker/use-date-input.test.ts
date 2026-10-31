import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { parseDate, useDateInput } from './use-date-input'

describe('parseDate', () => {
  it('returns a real date, trimmed', () => {
    expect(parseDate(' 2026-10-24 ', {})).toBe('2026-10-24')
  })

  it('rejects unfinished text and impossible dates', () => {
    expect(parseDate('2026-10', {})).toBe('')
    expect(parseDate('2026-02-30', {})).toBe('')
  })

  it('rejects dates outside min and max', () => {
    const bounds = { min: '2026-10-10', max: '2026-10-20' }
    expect(parseDate('2026-10-09', bounds)).toBe('')
    expect(parseDate('2026-10-21', bounds)).toBe('')
    expect(parseDate('2026-10-10', bounds)).toBe('2026-10-10')
  })

  it('ignores inverted bounds, like DateCalendar', () => {
    expect(parseDate('2026-10-24', { min: '2026-12-01', max: '2026-01-01' })).toBe('2026-10-24')
  })

  it('rejects dates marked by isDateDisabled', () => {
    expect(parseDate('2026-10-24', { isDateDisabled: () => true })).toBe('')
  })
})

describe('useDateInput', () => {
  const parse = (text: string) => parseDate(text, {})

  function setup(initial: string) {
    const onCommit = vi.fn()
    const view = renderHook(({ value }) => useDateInput(value, parse, onCommit), {
      initialProps: { value: initial },
    })
    return { ...view, onCommit }
  }

  it('keeps an unfinished draft while the value is empty', () => {
    const { result, rerender } = setup('')
    act(() => result.current.edit('2026-1'))
    rerender({ value: '' })
    expect(result.current.text).toBe('2026-1')
  })

  it('follows the value when the draft disagrees with it', () => {
    const { result, rerender } = setup('2026-10-24')
    rerender({ value: '2026-10-25' })
    expect(result.current.text).toBe('2026-10-25')
  })

  it('reports an invalid draft only after blur', () => {
    const { result } = setup('')
    act(() => result.current.edit('nope'))
    expect(result.current.isInvalid).toBe(false)
    act(() => result.current.markBlurred())
    expect(result.current.isInvalid).toBe(true)
  })

  it('clears the invalid report on the next edit', () => {
    const { result } = setup('')
    act(() => result.current.edit('nope'))
    act(() => result.current.markBlurred())
    act(() => result.current.edit('nope2'))
    expect(result.current.isInvalid).toBe(false)
  })

  it('does not report an empty input as invalid', () => {
    const { result } = setup('')
    act(() => result.current.markBlurred())
    expect(result.current.isInvalid).toBe(false)
  })

  it('settles on a value its parser rejects instead of looping', () => {
    const { result } = renderHook(() => useDateInput('2026-10-24', () => '', vi.fn()))
    expect(result.current.text).toBe('2026-10-24')
  })
})
