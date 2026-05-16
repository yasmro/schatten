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

**Variant rename**: `variant="default"` is split into `neutral` / `accent` to
disambiguate the overloaded "default" name:

```diff
- <Badge variant="default" treatment="subtle">tag</Badge>
+ <Badge variant="neutral" appearance="subtle">tag</Badge>

- <Badge variant="default" treatment="solid">tag</Badge>
+ <Badge variant="accent" appearance="solid">tag</Badge>
```

`neutral` is paired with `subtle` / `outline`; `accent` is paired with
`solid`. Other combinations (`neutral + solid`, `accent + subtle`,
`accent + outline`) emit no fill classes today — pick a state variant if
you need a defined visual treatment.

**Type renames**: `CalloutTreatment` → `CalloutAppearance`,
`ToastTreatment` → `ToastAppearance`.

**Visuals unchanged**: every previously valid combination produces the same
CSS classes as before. VRT snapshots only update where story content changed
(e.g. "default" labels became "neutral").

**Not in this release** (intentionally deferred):
- Pattern B appearance value renames (`solid` → `filled`, etc.) — declined
  to preserve token / prop alignment.
- Spinner `variant="inverted"` removal — kept as a small out-of-pattern
  special case.
- `--color-solid` token rename — entangled with Pattern A Button primary,
  to be addressed as a separate issue.
