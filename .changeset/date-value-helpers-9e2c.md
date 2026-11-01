---
'@yasmro/schatten': minor
---

Add the `@yasmro/schatten/date` subpath, for the string values of the date components. `toDate(value)` reads a `YYYY-MM-DD` or `YYYY-MM-DDTHH:mm` value as local time, and `toDateString(date, granularity?)` writes the local date back, so neither can shift a day the way `new Date('2026-10-24')` and `toISOString()` do. `isDateValue` and `isDateTimeValue` check that a `string` from an API or a form is a value that exists, and narrow it to `DateValue` / `DateTimeValue`. The subpath has no React and no `'use client'` banner, so a server can use it.
