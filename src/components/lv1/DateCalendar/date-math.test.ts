import fc from 'fast-check'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  addDays,
  addMonths,
  compareDates,
  createFormatters,
  dayOfWeek,
  diffDays,
  endOfMonth,
  endOfWeek,
  getLocalToday,
  isoWeek,
  isSameMonth,
  isValidISODate,
  MAX_DATE,
  MIN_DATE,
  monthMatrix,
  resolveLocale,
  startOfMonth,
  startOfWeek,
  type WeekDay,
  weekNumberOfRow,
} from './date-math'

const isoDate = fc
  .integer({ min: -62_135_596_800_000, max: 253_402_214_400_000 })
  .map((ms) => new Date(ms).toISOString().slice(0, 10))
  .filter((date) => date >= MIN_DATE && date <= MAX_DATE)
const weekDay = fc.constantFrom<WeekDay>(0, 1, 2, 3, 4, 5, 6)
const offset = fc.integer({ min: -4000, max: 4000 })

describe('isValidISODate', () => {
  it.each(['2026-10-24', '2024-02-29', '2000-02-29', MIN_DATE, MAX_DATE])('accepts %s', (date) => {
    expect(isValidISODate(date)).toBe(true)
  })

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
    '',
  ])('rejects %s', (date) => {
    expect(isValidISODate(date)).toBe(false)
  })
})

describe('addDays', () => {
  it('crosses a year boundary', () => {
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01')
    expect(addDays('2027-01-01', -1)).toBe('2026-12-31')
  })

  it('handles leap days', () => {
    expect(addDays('2024-02-28', 1)).toBe('2024-02-29')
    expect(addDays('2023-02-28', 1)).toBe('2023-03-01')
    expect(addDays('2000-02-28', 1)).toBe('2000-02-29')
    expect(addDays('1900-02-28', 1)).toBe('1900-03-01')
  })

  it('keeps two-digit years instead of mapping them to the 1900s', () => {
    expect(addDays(MIN_DATE, 0)).toBe(MIN_DATE)
    expect(addDays('0099-12-31', 1)).toBe('0100-01-01')
  })

  it('stops at both ends of the representable range', () => {
    expect(addDays(MAX_DATE, 1)).toBe(MAX_DATE)
    expect(addDays(MIN_DATE, -1)).toBe(MIN_DATE)
  })

  it('round-trips for any date', () => {
    fc.assert(
      fc.property(isoDate, offset, (date, days) => {
        const moved = addDays(date, days)
        fc.pre(diffDays(date, moved) === days)
        expect(addDays(moved, -days)).toBe(date)
      }),
    )
  })

  it('always returns a valid date', () => {
    fc.assert(fc.property(isoDate, offset, (date, days) => isValidISODate(addDays(date, days))))
  })
})

describe('addMonths', () => {
  it('clamps the day to the target month', () => {
    expect(addMonths('2026-01-31', 1)).toBe('2026-02-28')
    expect(addMonths('2024-01-31', 1)).toBe('2024-02-29')
    expect(addMonths('2026-03-31', -1)).toBe('2026-02-28')
    expect(addMonths('2024-02-29', 12)).toBe('2025-02-28')
  })

  it('crosses a year boundary in both directions', () => {
    expect(addMonths('2026-12-15', 1)).toBe('2027-01-15')
    expect(addMonths('2026-01-15', -1)).toBe('2025-12-15')
  })

  it('stops at both ends of the representable range', () => {
    expect(addMonths('9999-12-15', 1)).toBe(MAX_DATE)
    expect(addMonths('0001-01-15', -1)).toBe(MIN_DATE)
  })

  it('never produces a date that does not exist', () => {
    fc.assert(
      fc.property(isoDate, fc.integer({ min: -1200, max: 1200 }), (date, months) =>
        isValidISODate(addMonths(date, months)),
      ),
    )
  })

  it('lands in the expected month', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1000, max: 8000 }),
        fc.integer({ min: 1, max: 12 }),
        fc.integer({ min: -1200, max: 1200 }),
        (year, month, months) => {
          const date = `${year}-${String(month).padStart(2, '0')}-15`
          const index = year * 12 + month - 1 + months
          expect(Number(addMonths(date, months).slice(0, 4))).toBe(Math.floor(index / 12))
          expect(Number(addMonths(date, months).slice(5, 7))).toBe((index % 12) + 1)
        },
      ),
    )
  })
})

describe('endOfMonth', () => {
  it('knows the length of February', () => {
    expect(endOfMonth('2024-02-10')).toBe('2024-02-29')
    expect(endOfMonth('2023-02-10')).toBe('2023-02-28')
    expect(endOfMonth('2026-10-24')).toBe('2026-10-31')
  })
})

describe('dayOfWeek', () => {
  it('matches known dates on both sides of the Unix epoch', () => {
    expect(dayOfWeek('2026-10-24')).toBe(6)
    expect(dayOfWeek('1970-01-01')).toBe(4)
    expect(dayOfWeek('1969-12-31')).toBe(3)
    expect(dayOfWeek('1900-01-01')).toBe(1)
    expect(dayOfWeek(MIN_DATE)).toBe(1)
    expect(dayOfWeek(MAX_DATE)).toBe(5)
  })

  it('stays in 0–6 for any date', () => {
    fc.assert(
      fc.property(isoDate, (date) => {
        const day = dayOfWeek(date)
        return Number.isInteger(day) && day >= 0 && day <= 6
      }),
    )
  })
})

describe('startOfWeek / endOfWeek', () => {
  it('honours weekStartsOn', () => {
    expect(startOfWeek('2026-10-24', 0)).toBe('2026-10-18')
    expect(startOfWeek('2026-10-24', 1)).toBe('2026-10-19')
    expect(startOfWeek('2026-10-24', 6)).toBe('2026-10-24')
    expect(endOfWeek('2026-10-24', 0)).toBe('2026-10-24')
    expect(endOfWeek('2026-10-24', 6)).toBe('2026-10-30')
  })
})

describe('monthMatrix', () => {
  it('starts on the requested weekday', () => {
    expect(monthMatrix('2026-10-01', 0)[0][0]).toBe('2026-09-27')
    expect(monthMatrix('2026-10-01', 1)[0][0]).toBe('2026-09-28')
    expect(monthMatrix('2026-10-01', 6)[0][0]).toBe('2026-09-26')
  })

  it('leaves days past the representable range empty', () => {
    expect(monthMatrix('0001-01-01', 0)[0][0]).toBeNull()
    expect(monthMatrix('0001-01-01', 0)[0][1]).toBe(MIN_DATE)
    expect(monthMatrix('9999-12-01', 0).flat().at(-1)).toBeNull()
    expect(monthMatrix('9999-12-01', 0).flat()).toContain(MAX_DATE)
  })

  it('is always 42 consecutive days holding the whole month once', () => {
    fc.assert(
      fc.property(isoDate, weekDay, (date, weekStartsOn) => {
        const flat = monthMatrix(date, weekStartsOn).flat()
        expect(flat).toHaveLength(42)

        const dates = flat.filter((day) => day !== null)
        for (let i = 1; i < dates.length; i++) {
          expect(diffDays(dates[i - 1], dates[i])).toBe(1)
        }

        const inMonth = dates.filter((day) => isSameMonth(day, date))
        expect(inMonth[0]).toBe(startOfMonth(date))
        expect(inMonth.at(-1)).toBe(endOfMonth(date))
        expect(new Set(inMonth).size).toBe(inMonth.length)
      }),
    )
  })

  it('puts weekStartsOn in the first column of every row', () => {
    fc.assert(
      fc.property(isoDate, weekDay, (date, weekStartsOn) => {
        for (const week of monthMatrix(date, weekStartsOn)) {
          if (week[0] !== null) expect(dayOfWeek(week[0])).toBe(weekStartsOn)
        }
      }),
    )
  })
})

describe('isoWeek', () => {
  it('follows the ISO-8601 year boundaries', () => {
    expect(isoWeek('2021-01-03')).toBe(53)
    expect(isoWeek('2021-01-04')).toBe(1)
    expect(isoWeek('2018-12-31')).toBe(1)
    expect(isoWeek('2020-12-31')).toBe(53)
  })

  it('stays in 1–53 and agrees within a Monday-based week', () => {
    fc.assert(
      fc.property(isoDate, (date) => {
        const week = isoWeek(date)
        expect(week).toBeGreaterThanOrEqual(1)
        expect(week).toBeLessThanOrEqual(53)
        const monday = startOfWeek(date, 1)
        fc.pre(monday >= MIN_DATE)
        expect(isoWeek(monday)).toBe(week)
      }),
    )
  })
})

describe('weekNumberOfRow', () => {
  it('reads the Thursday on a Saturday-start grid', () => {
    // Regression (#566): the second column of this row is a Sunday, which
    // belongs to the previous ISO week.
    const row = monthMatrix('2026-10-01', 6)[1]
    expect(row[0]).toBe('2026-10-03')
    expect(weekNumberOfRow(row)).toBe(isoWeek('2026-10-08'))
    expect(weekNumberOfRow(row)).not.toBe(isoWeek('2026-10-04'))
  })

  it('matches the row Thursday for any weekStartsOn', () => {
    fc.assert(
      fc.property(isoDate, weekDay, (date, weekStartsOn) => {
        for (const week of monthMatrix(date, weekStartsOn)) {
          const thursday = week.find((day) => day !== null && dayOfWeek(day) === 4)
          if (thursday) expect(weekNumberOfRow(week)).toBe(isoWeek(thursday))
        }
      }),
    )
  })
})

describe('compareDates', () => {
  it('orders any two dates like their day difference', () => {
    fc.assert(
      fc.property(isoDate, isoDate, (a, b) => {
        expect(Math.sign(compareDates(a, b))).toBe(Math.sign(diffDays(b, a)))
      }),
    )
  })
})

describe('getLocalToday', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  // Built from local fields, so each moment sits at the edge of the local day
  // in whichever zone `pnpm test:tz` runs this. A UTC-based date fails one of
  // the two in every zone but UTC.
  it.each([
    [0, 0],
    [23, 59],
  ])('stays on the local date at %i:%i', (hours, minutes) => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 9, 24, hours, minutes))
    expect(getLocalToday()).toBe('2026-10-24')
  })
})

describe('resolveLocale', () => {
  it('keeps a supported locale', () => {
    expect(resolveLocale('ja-JP')).toBe('ja-JP')
    expect(resolveLocale('ja')).toBe('ja')
  })

  // `Intl` throws on the second shape and silently uses the runtime locale on
  // the first, which is why neither can be left to `Intl`.
  it.each(['jp', 'japanese', 'xx-YY', 'ja_JP', ''])('falls back to en-US for %j', (locale) => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    expect(resolveLocale(locale)).toBe('en-US')
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('unsupported `locale`'))
    warn.mockRestore()
  })
})

describe('createFormatters', () => {
  const date = '2026-10-20'

  it('prints the bare day number without a locale suffix', () => {
    for (const locale of ['ja-JP', 'zh-CN', 'ko-KR']) {
      expect(createFormatters(locale).dayNumber(date)).toBe('20')
    }
  })

  it('prints the locale digits in the Gregorian calendar', () => {
    const digits = new Intl.NumberFormat('fa-IR', { useGrouping: false })
    expect(createFormatters('fa-IR').dayNumber(date)).toBe(digits.format(20))
    expect(createFormatters('fa-IR').number(2026)).toBe(digits.format(2026))
  })

  it('stays Gregorian for a locale that defaults to another calendar', () => {
    const utc = new Date(Date.UTC(2026, 9, 1))
    const expected = new Intl.DateTimeFormat('th-TH', {
      year: 'numeric',
      month: 'long',
      timeZone: 'UTC',
      calendar: 'gregory',
    })
    expect(createFormatters('th-TH').caption('2026-10-01')).toBe(expected.format(utc))
  })

  it('formats the year without grouping', () => {
    expect(createFormatters('en-US').number(2026)).toBe('2026')
  })

  it('labels the same day in every time zone', () => {
    expect(createFormatters('en-US').dayNumber('2026-09-06')).toBe('6')
  })

  it('agrees with the grid for any date', () => {
    const { dayNumber } = createFormatters('en-US')
    fc.assert(
      fc.property(isoDate, (day) => {
        expect(dayNumber(day)).toBe(String(Number(day.slice(8, 10))))
      }),
    )
  })

  it('orders weekday names from weekStartsOn', () => {
    const { weekdayNames } = createFormatters('en-US')
    expect(weekdayNames(0)[0].short).toBe('Sun')
    expect(weekdayNames(1)[0].short).toBe('Mon')
    expect(weekdayNames(6).map((day) => day.short)).toEqual([
      'Sat',
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
    ])
  })

  it('lists the 12 month names from January', () => {
    const names = createFormatters('en-US').monthNames()
    expect(names).toHaveLength(12)
    expect(names[0]).toBe('January')
    expect(names[11]).toBe('December')
  })
})
