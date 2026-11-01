import fc from 'fast-check'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { isDateTimeValue, isDateValue, toDate, toDateString } from '.'

afterEach(() => vi.unstubAllEnvs())

describe('isDateValue', () => {
  it.each(['2026-10-24', '2024-02-29', '2000-02-29', '0001-01-01', '9999-12-31'])(
    'accepts %s',
    (date) => {
      expect(isDateValue(date)).toBe(true)
    },
  )

  it.each([
    '2026-02-30',
    '2023-02-29',
    '1900-02-29',
    '2026-13-01',
    '2026-00-10',
    '0000-01-01',
    '2026-1-1',
    '2026/10/24',
    '20261024',
    '2026-10-24T13:30',
    '',
  ])('rejects %s', (date) => {
    expect(isDateValue(date)).toBe(false)
  })
})

describe('isDateTimeValue', () => {
  it.each(['2026-10-24T13:30', '2024-02-29T00:00', '0001-01-01T23:59'])('accepts %s', (value) => {
    expect(isDateTimeValue(value)).toBe(true)
  })

  it.each([
    '2026-10-24',
    '2026-10-24 13:30',
    '2026-10-24T13:30:00',
    '2026-10-24T13:30Z',
    '2026-10-24T24:00',
    '2026-10-24T13:60',
    '2026-02-30T13:30',
    '',
  ])('rejects %s', (value) => {
    expect(isDateTimeValue(value)).toBe(false)
  })
})

// `process.env.TZ` applies to the next Date read in Node, so each case stubs it.
describe.each(['America/Los_Angeles', 'UTC', 'Asia/Tokyo', 'Pacific/Kiritimati'])(
  'in %s',
  (zone) => {
    it('reads a date as local midnight', () => {
      vi.stubEnv('TZ', zone)
      const date = toDate('2026-10-24') as Date
      expect([date.getFullYear(), date.getMonth(), date.getDate()]).toEqual([2026, 9, 24])
      expect([date.getHours(), date.getMinutes()]).toEqual([0, 0])
    })

    it('reads a date and time as local time', () => {
      vi.stubEnv('TZ', zone)
      const date = toDate('2026-10-24T13:30') as Date
      expect([date.getDate(), date.getHours(), date.getMinutes()]).toEqual([24, 13, 30])
    })

    it.each(['2024-02-29', '0001-01-01', '0099-12-31', '9999-12-31'])('round-trips %s', (value) => {
      vi.stubEnv('TZ', zone)
      expect(toDateString(toDate(value) as Date)).toBe(value)
    })

    it.each(['2024-02-29T23:59', '0001-01-01T00:00', '9999-12-31T23:59'])(
      'round-trips %s with minute',
      (value) => {
        vi.stubEnv('TZ', zone)
        expect(toDateString(toDate(value) as Date, 'minute')).toBe(value)
      },
    )

    it('writes the local date, not the UTC one', () => {
      vi.stubEnv('TZ', zone)
      expect(toDateString(new Date(2026, 9, 24, 23, 59))).toBe('2026-10-24')
      expect(toDateString(new Date(2026, 9, 24, 0, 0))).toBe('2026-10-24')
    })
  },
)

describe('toDate', () => {
  it.each(['', 'not-a-date', '2026-02-30', '2026-10-24T24:00', '2026-10-24 13:30'])(
    'is undefined for "%s"',
    (value) => {
      expect(toDate(value)).toBeUndefined()
    },
  )

  it('moves a time that daylight saving skips forward, as Date does', () => {
    vi.stubEnv('TZ', 'America/New_York')
    expect(toDateString(toDate('2026-03-08T02:30') as Date, 'minute')).toBe('2026-03-08T03:30')
  })

  it('keeps the day when daylight saving skips midnight', () => {
    vi.stubEnv('TZ', 'America/Havana')
    expect(toDateString(toDate('2026-03-08') as Date)).toBe('2026-03-08')
  })

  it('round-trips every date', () => {
    const value = fc
      .integer({ min: -62_135_596_800_000, max: 253_402_214_400_000 })
      .map((ms) => new Date(ms).toISOString().slice(0, 10))
      .filter(isDateValue)
    fc.assert(fc.property(value, (date) => toDateString(toDate(date) as Date) === date))
  })
})

describe('toDateString', () => {
  it('leaves the time out by default', () => {
    expect(toDateString(new Date(2026, 9, 24, 13, 30))).toBe('2026-10-24')
    expect(toDateString(new Date(2026, 9, 24, 13, 30), 'day')).toBe('2026-10-24')
  })

  it('adds the time with minute, without seconds', () => {
    expect(toDateString(new Date(2026, 9, 24, 13, 30, 45), 'minute')).toBe('2026-10-24T13:30')
  })

  it('is empty for an invalid Date', () => {
    expect(toDateString(new Date(Number.NaN))).toBe('')
    expect(toDateString(new Date(Number.NaN), 'minute')).toBe('')
  })

  it('is empty for a year outside the format', () => {
    const date = new Date(0)
    date.setFullYear(10000, 0, 1)
    expect(toDateString(date)).toBe('')
    date.setFullYear(0, 0, 1)
    expect(toDateString(date)).toBe('')
  })
})
