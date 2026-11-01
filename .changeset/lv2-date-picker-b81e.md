---
'@yasmro/schatten': minor
---

Add `DatePicker` and `DateRangePicker` (lv2), which combine typed `YYYY-MM-DD` input with a calendar in a popover. Values are ISO strings. Typing and the calendar stay in sync. A click on the input opens the panel with focus left there, and typing closes it. The calendar button or Alt+ArrowDown opens it with focus on the selected day, and closing returns focus to where it came from. An unfinished or invalid date reports `''` through `onValueChange`, shows the error state after blur, and fails native form validation. A `<form>` reset restores `defaultValue`. Both read `Field`: `DatePicker` is named through `htmlFor`, `DateRangePicker` is a `role="group"` named by the Field label. `DateRangePicker` submits through `startName` / `endName`.


`PopoverContent` gains `onCloseAutoFocus` and `onInteractOutside`.

CSS API: add `.st-date-picker` and `.st-date-range-picker`, plus the `@yasmro/schatten/css/datepicker` subpath. The size budgets gain `css/datepicker`, and `components/lv2 (all)` goes up to fit the calendar, popover and input these pickers bundle.
