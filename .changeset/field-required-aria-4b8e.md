---
'@yasmro/schatten': minor
---

Field `required` now propagates `aria-required` (announce-only) to the wrapped
control (Input / Textarea / Select / Checkbox / Switch / RadioGroup) via
FieldContext, mirroring `isError → aria-invalid`. Native / Radix `required`
validation is unchanged — it stays driven only by a `required` prop set
directly on the control.
