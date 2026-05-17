---
'@yasmro/schatten': minor
---

BREAKING: Pattern B (Badge / Callout / Toast) prop name and variant vocabulary
unification per [`component-api-conventions.md`](.claude/rules/component-api-conventions.md).
Closes [#108](https://github.com/yasmro/schatten/issues/108).

**Prop rename**: `treatment` → `appearance` on `Badge`, `Callout`, `Toast`
(and `ToastInput`).

```diff
- <Badge treatment="subtle">Active</Badge>
+ <Badge appearance="subtle">Active</Badge>

- <Callout treatment="solid" variant="error">Failed</Callout>
+ <Callout appearance="solid" variant="error">Failed</Callout>

- toast({ title: 'Saved', treatment: 'subtle' })
+ toast({ title: 'Saved', appearance: 'subtle' })
```

**Appearance values are unchanged**: `solid` / `subtle` / `outline` (Badge)
and `solid` / `subtle` (Callout / Toast) are kept as-is because they already
align 1:1 with the semantic token suffixes (`bg-{state}-subtle`,
`bg-{state}`) and CSS class names — renaming would have introduced a
translation layer between props and tokens.

**Variant rename**: `variant="default"` is renamed to `variant="neutral"`.
There is intentionally **no separate brand-accent tone** — Pattern B
keeps a single non-state surface (`neutral`) plus the four state variants.

```diff
- <Badge variant="default" treatment="subtle">tag</Badge>
+ <Badge variant="neutral" appearance="subtle">tag</Badge>

- <Badge variant="default" treatment="solid">tag</Badge>
+ <Badge variant="neutral" appearance="solid">tag</Badge>
```

**Visual change for legacy `default + solid`**: the legacy
`default + solid` combination used `bg-solid` (alabaster, warm dark).
The new `neutral + solid` uses `bg-foreground-muted` + `text-inverted-foreground`
(cool mid-tone gray that swaps with mode). This is a deliberate pre-1.0
visual change — the new gray reads more "neutral" and matches the variant
name. All other previously valid combinations produce the same CSS classes
as before.

**Type renames**: `CalloutTreatment` → `CalloutAppearance`,
`ToastTreatment` → `ToastAppearance`. `CalloutVariant` / `ToastVariant`
union types narrow to `'neutral' | 'success' | 'error' | 'warning' | 'info'`.

**Not in this release** (intentionally deferred):
- Pattern B appearance value renames (`solid` → `filled`, etc.) — declined
  to preserve token / prop alignment.
- Spinner `variant="inverted"` removal — kept as a small out-of-pattern
  special case.
- `--color-solid` token rename — entangled with Pattern A Button primary,
  to be addressed as a separate issue.
