---
'@yasmro/schatten': minor
---

Add TSDoc on `Props` interfaces for every lv1 component, so IDE hover and
AI coding assistants (Copilot, Cursor, v0, Claude Code, …) surface the same
descriptions that Storybook's Docs tab does.

Each prop now carries a `/** ... */` comment with a `@default` tag and, for
enum props (`variant` / `size` / `treatment`), a bullet list of per-option
purposes. Inherited HTML standard props (`onClick`, `className`, …) are
intentionally left undocumented.

**Convention** (now codified in `.claude/rules/storybook-guideline.md`):
TSDoc on the Props interface is the **source of truth** for prop docs.
`argTypes.description` is a secondary surface that mirrors TSDoc for
Storybook's Docs tab. When the two disagree, TSDoc wins.

Affected components (all 17 lv1):
Badge, Button, Callout, Checkbox, Dialog, Field, FieldSet, Input, Radio
(+ RadioGroup), Select (SelectTrigger / SelectContent), Separator, Spinner,
Switch, Text, Textarea, Toast (ToastInput / ToastAction) + Toaster, Tooltip
(TooltipContent).
