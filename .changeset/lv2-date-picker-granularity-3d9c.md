---
'@yasmro/schatten': minor
---

Add `granularity` to `DatePicker` and `DateRangePicker`. With `'minute'`, values and `min` / `max` are local `YYYY-MM-DDTHH:mm` strings, the format of `datetime-local`, and each date gets a time input next to it. A value commits once its date and time are both there; a missing or refused time fails native form validation. A range keeps a same-day end before the start out of the value, without swapping. `DatePicker` then becomes a `role="group"` named by the Field label, like `DateRangePicker`, so `aria-label` and `aria-labelledby` land on the root and clicking the Field label does nothing. New labels: `date` and `time` on `DatePickerLabels`, `startTime` and `endTime` on `DateRangePickerLabels`, and `invalidTime` on both.

CSS API: add `.st-date-picker--minute` and `.st-date-range-picker--minute`.
