---
'@yasmro/schatten': minor
---

Add `granularity` to `DatePicker` and `DateRangePicker`. With `'minute'`, values and `min` / `max` are local `YYYY-MM-DDTHH:mm` strings, the format of `datetime-local`. The input shows and takes `YYYY-MM-DD HH:mm`, and the panel gains a time input: one for `DatePicker`, one per end for `DateRangePicker`, next to the date it belongs to. Picking a day moves focus to the time and leaves the panel open until a click outside or Escape. A day without a time is an unfinished value, so it reports `''` and fails native form validation; no time is assumed. A range keeps a same-day end before the start out of the value, without swapping. New labels: `time` on `DatePickerLabels`, `startTime` and `endTime` on `DateRangePickerLabels`.

CSS API: add `.st-date-range-picker--minute` and `.st-date-picker-time`.
