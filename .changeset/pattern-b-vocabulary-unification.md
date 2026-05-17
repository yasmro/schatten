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

**Variant rename**: `variant="default"` → `variant="neutral"`. Pure rename —
all `default` callsites map 1:1 to `neutral` regardless of appearance, and
the visual is unchanged.

```diff
- <Badge variant="default" treatment="solid">tag</Badge>
+ <Badge variant="neutral" appearance="solid">tag</Badge>
```

**Pattern B has no `accent` tone.** During the review of [PR #205](https://github.com/yasmro/schatten/pull/205)
we found that `accent + solid` and `neutral + solid` were visually serving
the same role (non-state filled chip). The `accent` tone has therefore
been dropped — Pattern B's tone vocabulary is now `neutral / success /
error / warning / info`. Brand expression on Pattern B happens through
state variants (e.g. `error` is vermillion) or the theme layer (Mode ×
Special), not a dedicated tone.

**Appearance values are unchanged**: `solid` / `subtle` / `outline` (Badge)
and `solid` / `subtle` (Callout / Toast) are kept as-is because they
already align 1:1 with the semantic token suffixes (`bg-{state}-subtle`,
`bg-{state}`) and CSS class names — renaming would have introduced a
translation layer between props and tokens.

**Type renames**: `CalloutTreatment` → `CalloutAppearance`,
`ToastTreatment` → `ToastAppearance`. `CalloutVariant` / `ToastVariant`
narrow to `'neutral' | 'success' | 'error' | 'warning' | 'info'`.

**Visuals unchanged**: every previously valid combination produces the
same CSS classes as before. VRT snapshots only update where story content
labels changed (e.g. "default" labels became "neutral", the `accent`
column is removed from playground matrices).

**Not in this release** (intentionally deferred):
- Pattern B appearance value renames (`solid` → `filled`, etc.) — declined
  to preserve token / prop alignment.
- Spinner `variant="inverted"` removal — kept as a small out-of-pattern
  special case.
- `--color-solid` token rename — entangled with Pattern A Button primary,
  to be addressed as a separate issue.
