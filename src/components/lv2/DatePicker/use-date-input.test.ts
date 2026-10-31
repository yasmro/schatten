import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import {
  isValidISOTime,
  isValidValue,
  joinDateTime,
  parseDate,
  splitDateTime,
  useDateInput,
  useDateTimeDraft,
  useTimeInput,
  useValueBounds,
} from './use-date-input'

describe('isValidISOTime', () => {
  it('takes the 24-hour clock', () => {
    expect(isValidISOTime('00:00')).toBe(true)
    expect(isValidISOTime('23:59')).toBe(true)
  })

  it('rejects impossible and unfinished times', () => {
    expect(isValidISOTime('24:00')).toBe(false)
    expect(isValidISOTime('13:60')).toBe(false)
    expect(isValidISOTime('9:00')).toBe(false)
  })
})

describe('isValidValue', () => {
  it('takes a bare date at the day granularity', () => {
    expect(isValidValue('2026-10-24', 'day')).toBe(true)
    expect(isValidValue('2026-10-24T13:30', 'day')).toBe(false)
  })

  it('takes a date and a time at the minute granularity', () => {
    expect(isValidValue('2026-10-24T13:30', 'minute')).toBe(true)
  })

  it('rejects other shapes at the minute granularity', () => {
    expect(isValidValue('2026-10-24', 'minute')).toBe(false)
    expect(isValidValue('2026-10-24T13:30:00', 'minute')).toBe(false)
    expect(isValidValue('2026-10-24T13:30Z', 'minute')).toBe(false)
    expect(isValidValue('2026-02-30T13:30', 'minute')).toBe(false)
  })
})

describe('splitDateTime and joinDateTime', () => {
  it('round-trips a value', () => {
    expect(joinDateTime(splitDateTime('2026-10-24T13:30'), true)).toBe('2026-10-24T13:30')
    expect(joinDateTime(splitDateTime('2026-10-24'), false)).toBe('2026-10-24')
    expect(joinDateTime(splitDateTime(''), true)).toBe('')
  })

  it('holds a value back until both halves are there', () => {
    expect(joinDateTime({ date: '2026-10-24', time: '' }, true)).toBe('')
    expect(joinDateTime({ date: '', time: '13:30' }, true)).toBe('')
  })
})

describe('useValueBounds', () => {
  const bounds = (min?: string, max?: string) =>
    renderHook(() => useValueBounds(min, max, 'minute')).result.current

  it('accepts everything at the day granularity, leaving the checks to the date', () => {
    const { result } = renderHook(() => useValueBounds('2026-10-10', undefined, 'day'))
    expect(result.current.accept('2026-01-01')).toBe('2026-01-01')
    expect(result.current.dateMin).toBe('2026-10-10')
  })

  it('compares the time on the day of the bound', () => {
    const { accept } = bounds('2026-10-24T09:00', '2026-10-24T18:00')
    expect(accept('2026-10-24T08:59')).toBe('')
    expect(accept('2026-10-24T09:00')).toBe('2026-10-24T09:00')
    expect(accept('2026-10-24T18:01')).toBe('')
  })

  it('gives the calendar the dates', () => {
    expect(bounds('2026-10-24T09:00', '2026-10-30T18:00')).toMatchObject({
      dateMin: '2026-10-24',
      dateMax: '2026-10-30',
    })
  })

  it('warns about a bound without a time, and ignores it', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const { accept, dateMin } = bounds('2026-10-24')
    expect(warn).toHaveBeenCalledOnce()
    expect(dateMin).toBeUndefined()
    expect(accept('2026-01-01T00:00')).toBe('2026-01-01T00:00')
    warn.mockRestore()
  })

  it('ignores an inverted pair on the same day', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const { accept, dateMin } = bounds('2026-10-24T18:00', '2026-10-24T09:00')
    expect(warn).toHaveBeenCalledOnce()
    expect(dateMin).toBeUndefined()
    expect(accept('2026-10-24T12:00')).toBe('2026-10-24T12:00')
    warn.mockRestore()
  })
})

describe('useDateTimeDraft', () => {
  const accept = (value: string) => value

  function setup(initial: string, acceptValue = accept) {
    return renderHook(({ value }) => useDateTimeDraft(value, true, acceptValue), {
      initialProps: { value: initial },
    })
  }

  it('keeps a date waiting for its time while the value is empty', () => {
    const { result, rerender } = setup('')
    act(() => result.current[1]({ date: '2026-10-24', time: '' }))
    rerender({ value: '' })
    expect(result.current[0]).toEqual({ date: '2026-10-24', time: '' })
  })

  it('follows a new value', () => {
    const { result, rerender } = setup('2026-10-24T13:30')
    rerender({ value: '2026-10-25T08:00' })
    expect(result.current[0]).toEqual({ date: '2026-10-25', time: '08:00' })
  })

  it('keeps a complete draft that accept refuses', () => {
    const { result, rerender } = setup('', () => '')
    act(() => result.current[1]({ date: '2026-10-24', time: '13:30' }))
    rerender({ value: '' })
    expect(result.current[0]).toEqual({ date: '2026-10-24', time: '13:30' })
  })

  it('settles on a value accept refuses instead of looping', () => {
    const { result } = setup('2026-10-24T13:30', () => '')
    expect(result.current[0]).toEqual({ date: '2026-10-24', time: '13:30' })
  })
})

describe('useTimeInput', () => {
  it('reports a refused time only after blur', () => {
    const { result } = renderHook(() => useTimeInput(true, false))
    expect(result.current.isInvalid).toBe(false)
    act(() => result.current.markBlurred())
    expect(result.current.isInvalid).toBe(true)
  })

  it('never reports a missing time', () => {
    const { result } = renderHook(() => useTimeInput(false, true))
    act(() => result.current.markBlurred())
    expect(result.current.isInvalid).toBe(false)
  })

  it('clears the report on reset', () => {
    const { result } = renderHook(() => useTimeInput(true, false))
    act(() => result.current.markBlurred())
    act(() => result.current.reset())
    expect(result.current.isInvalid).toBe(false)
  })
})

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
