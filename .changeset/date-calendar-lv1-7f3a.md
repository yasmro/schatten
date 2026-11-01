---
'@yasmro/schatten': minor
---

Add `DateCalendar` and `DateRangeCalendar`: always-visible month grids for picking a date or a range. Values are ISO `YYYY-MM-DD` strings, so a time zone can never shift a date by one day. Self-implemented on `Date` + `Intl` with no new runtime dependency. Gregorian only.

CSS API: new blocks `.st-date-calendar` and `.st-date-range-calendar` with their sub-elements, published at `@yasmro/schatten/css/datecalendar`, plus the state hooks `[data-range-start]` / `[data-range-end]` / `[data-range-middle]` / `[data-outside]`. The manifest now also lists `aria-selected`, `aria-disabled` and `aria-current`, which were already styling hooks but were not recorded.
