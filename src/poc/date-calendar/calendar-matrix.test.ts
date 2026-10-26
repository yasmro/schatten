import { describe, expect, it } from 'vitest'
import {
  addMonths,
  dayOfWeek,
  formatCaption,
  formatDayNumber,
  isoWeek,
  monthMatrix,
  weekdayNames,
} from './calendar-matrix'

describe('calendar-matrix', () => {
  it('computes weekday from ISO without TZ drift', () => {
    expect(dayOfWeek('2026-10-25')).toBe(0) // Sunday
    expect(dayOfWeek('2024-02-29')).toBe(4)
  })
  it('builds a 6x7 matrix starting on weekStartsOn', () => {
    const m = monthMatrix('2026-10-01', 0)
    expect(m).toHaveLength(6)
    expect(m[0][0]).toBe('2026-09-27')
    expect(m[0][4]).toBe('2026-10-01')
    expect(monthMatrix('2026-10-01', 1)[0][0]).toBe('2026-09-28')
  })
  it('clamps day on month add', () => {
    expect(addMonths('2026-01-31', 1)).toBe('2026-02-28')
    expect(addMonths('2024-01-31', 1)).toBe('2024-02-29')
    expect(addMonths('2026-12-15', 1)).toBe('2027-01-15')
  })
  it('formats via Intl', () => {
    expect(weekdayNames('en-US', 1)[0].short).toBe('Mon')
    expect(formatCaption('2026-10-01', 'ja-JP')).toBe('2026年10月')
  })
})
describe('isoWeek', () => {
  it('matches known ISO weeks', () => {
    expect(isoWeek('2026-01-01')).toBe(1)
    expect(isoWeek('2027-01-01')).toBe(53) // 2026 has 53 ISO weeks
    expect(isoWeek('2024-12-30')).toBe(1)
    expect(isoWeek('2026-10-24')).toBe(43)
  })
})
describe('Gregorian pin', () => {
  it('fa-IR prints the Gregorian day in Persian digits, not the Persian-calendar day', () => {
    expect(formatDayNumber('2026-10-24', 'fa-IR')).toBe('۲۴')
  })
  it('fa-IR caption names October (Gregorian), not Aban', () => {
    const october = new Intl.DateTimeFormat('fa-IR', {
      month: 'long',
      calendar: 'gregory',
      timeZone: 'UTC',
    }).format(new Date(Date.UTC(2026, 9, 1)))
    const cap = formatCaption('2026-10-01', 'fa-IR')
    expect(cap).toContain(october)
    expect(cap).not.toContain('آبان')
  })
})
