# Migrating from 0.x to 1.0

This guide lists every breaking change made during Schatten's pre-1.0 period
(v0.1.0 → v0.15.0) so you can upgrade to 1.0 with confidence. Each entry names
the version that introduced it, its severity, why it changed, and a
Before → After you can apply directly.

> **Pre-1.0 recap.** Before 1.0, breaking changes were permitted in any
> release (see [`api-stability.md`](../../.claude/rules/api-stability.md)). From
> 1.0 onward the public surface — React props, `.st-*` classes, CSS variables,
> exported types — is frozen under a semver contract. This guide is the bridge
> across that pre-1.0 churn.

## How to upgrade

1. **Bump the package** to the 1.0 line and install the peers you use:
   ```sh
   pnpm add @yasmro/schatten@^1 lucide-react   # lucide-react only if you use the React layer
   ```
2. **Fix type errors first.** The Radix type-boundary change (item 10) and the
   `<Text asChild>` removal (item 7) surface as TypeScript errors — let `pnpm
   typecheck` (or your editor) drive them.
3. **Update CSS-class and token references.** If you consume the vanilla CSS
   path or read CSS variables directly, walk items 3–6, 8, 9, 11.
4. **Verify visually.** Toast now renders through Sonner (item 9); re-check any
   custom toast styling.

Who is affected by what, at a glance:

| You use… | Read items |
|---|---|
| React props only | 1, 2, 7, 10 |
| The vanilla `.st-*` CSS path | 4, 9 |
| CSS variables / design tokens directly | 3, 5, 6, 8, 11 |

If you use `<Button>` and friends purely through their React props, most CSS
and token items do not affect you.

---

## 1. Pattern B vocabulary unified (`Badge` / `Callout` / `Toast`) — v0.7.0

**Severity: high (React prop rename).** `treatment` → `appearance`,
`variant="default"` → `variant="neutral"`, and the Pattern B `accent` tone was
removed. (#205, #108)

```diff
- <Badge treatment="subtle" variant="default">tag</Badge>
+ <Badge appearance="subtle" variant="neutral">tag</Badge>
- <Callout treatment="solid" variant="error">Failed</Callout>
+ <Callout appearance="solid" variant="error">Failed</Callout>
- toast({ title: 'Saved', treatment: 'subtle' })
+ toast({ title: 'Saved', appearance: 'subtle' })
```

Type renames: `CalloutTreatment` → `CalloutAppearance`, `ToastTreatment` →
`ToastAppearance`. `CalloutVariant` / `ToastVariant` narrowed to
`'neutral' | 'success' | 'error' | 'warning' | 'info'`.

> **`Button` is not affected.** `Button` is Pattern A — its vocabulary
> (`primary` / `secondary` / `tertiary` / `destructive` / `inverted` / `link`)
> is unchanged, and it has no `appearance` prop. See
> [`component-api-conventions.md`](../../.claude/rules/component-api-conventions.md).

## 2. `lucide-react` is now an (optional) peer dependency; `icon` takes a component — v0.8.0

**Severity: high (install + prop shape).** The `icon` prop on `Button` /
`Badge` / `Input` / `Dialog` now takes a Lucide **component**, not a name
string, so consumer bundles tree-shake icons. (#223)

```diff
  # install
- pnpm add @yasmro/schatten
+ pnpm add @yasmro/schatten lucide-react

  # icon prop is a Lucide component, not a name string
- <Button icon="ArrowRight">
+ import { ArrowRight } from 'lucide-react'
+ <Button icon={ArrowRight}>
```

Why: the previous whole-barrel dynamic lookup defeated tree-shaking (~1.37 MB
of icon source pulled in). CSS-only (Layer A) consumers are unaffected —
`lucide-react` is `optional` in `peerDependenciesMeta`.

## 3. `--color-accent` removed → brand-named tokens — v0.8.0

**Severity: medium (token + `Text` prop).** The accent color was split into
two brand-named tokens. (#236, #185)

```diff
- <Text color="accent">
+ <Text color="vermillion">   {/* the second brand color is color="indigo" */}
```

`--color-accent` / `--color-accent-foreground` and `Text color="accent"` were
removed. New: `--color-vermillion` (朱) / `--color-indigo` (藍).
`tokens.color.accent` → `tokens.color.vermillion`.

## 4. className output moved from Tailwind utilities to the `.st-*` class API — v0.9.0

**Severity: medium (CSS-path consumers only).** Component class names became a
public, BEM-shaped `.st-*` API. Consuming through React props is **unaffected**
— only consumers who grabbed the old raw Tailwind utility strings are.
(#154 and follow-ups)

```diff
- <span class="shrink-0 bg-border h-px w-full">   {/* old Separator output */}
+ <span class="st-separator">
```

The full class contract is documented in
[`css-api.md`](../../.claude/rules/css-api.md).

## 5. Spinner animation variables re-prefixed — v0.10.0

**Severity: low (only if you override Spinner timing).** The two
consumer-overridable Spinner variables were renamed to the `--st-` prefix to
match the class API. (#325)

```diff
- --schatten-spinner-duration / --schatten-spinner-ripple-delay
+ --st-spinner-duration / --st-spinner-ripple-delay
```

## 6. Composite typography variables removed — v0.11.0

**Severity: medium (token consumers).** The 39
`--text-{body,label,heading}-{xs..2xl}-{size,leading,weight}` composite
variables were removed. Bind the typography role on the class instead. (#351)

```diff
- <p style={{
-   fontSize: 'var(--text-body-md-size)',
-   lineHeight: 'var(--text-body-md-leading)',
-   fontWeight: 'var(--text-body-md-weight)',
- }}>
+ <p class="st-text st-text--body st-text--md">   {/* or React <Text variant="body" size="md"> */}
```

The base scales (`--text-*` / `--leading-*` / `--font-*`) remain.

## 7. `<Text asChild>` removed — v0.11.0

**Severity: medium (React prop).** `Text` polymorphism is now covered by `as`
(a closed enum of semantic tags) and `textVariants()` (any element). (#338)

```diff
- <Text asChild><h2>…</h2></Text>
+ <Text as="h2">…</Text>                                                  {/* semantic tag via `as` */}
+ <h2 className={textVariants({ variant: 'heading', size: 'lg' })}>…</h2>  {/* arbitrary element */}
```

## 8. Dead transition variables removed — v0.11.0

**Severity: low (deprecated since #145, zero references).**
`--transition-fast` / `-normal` / `-slow`, `tokens.transition.*`, and the
`TransitionToken` type were removed. Motion now flows through the semantic
motion scale (`--st-duration-*`). (#378)

## 9. Toast migrated to Sonner — v0.12.0

**Severity: high (CSS + hook + type).** Toast's internals moved from
`@radix-ui/react-toast` to [Sonner](https://sonner.emilkowal.ski/). (#396;
layout in #412)

- Removed viewport classes `.st-toaster` / `.st-toaster--{position}` —
  positioning is now the `<Toaster position>` prop.
- Removed the `[data-swipe]` and `.st-toast` `[data-state]`-driven animations
  (Sonner owns enter/exit/swipe now).
- Removed the public hook `useToast()` and the `ToastData` type.
- `.st-toast__action` (#412) moved from the trailing slot to **below the body**
  (existing class, changed placement).

```diff
- const { toasts } = useToast()   // removed
+ // rendering goes through <Toaster />; the imperative API stays toast()
```

**Unchanged:** the `toast()` signature, every `ToastInput` property,
`ToastVariant` / `ToastAppearance`, the per-toast tone/shape classes, and the
sub-element classes. **Added:** `toast.loading()`, `toast.promise()`,
`<Toaster expand visibleToasts>`, and the `ToastFn` / `ToastPromiseOptions` /
`ToastPromiseHandle` types.

## 10. Radix-based lv1 Props no longer inherit Radix types — v0.14.0

**Severity: high (types).** The public Props of `Select` / `Tooltip` /
`Popover` / `DropdownMenu` / `Tabs` / `Radio` / `Checkbox` / `Switch` /
`Separator` / `Avatar` are now "native-element props + curated redeclarations."
A Radix prop that was previously exposed through type inheritance but is **not
curated** is now a type error. (#448, #156)

Migration: if the prop you relied on is curated, keep using it; if not, reach
for another mechanism. Un-curated props include `dir`, the Content-level
`forceMount` / `onEscapeKeyDown` / `onPointerDownOutside` / `onInteractOutside`,
and the collision-tuning props. Re-exposing one later is additive (a `minor`).

> **`PopoverAnchor` DOM change.** If you passed an element child to
> `PopoverAnchor` **without** `asChild`, the old wrapping `<div>` is gone — props
> now merge onto your child, so attributes like `data-testid` land on the child.
> (A text child still gets Radix's `<div>` wrapper.)

The rationale is in
[`api-stability.md` § Radix type boundary](../../.claude/rules/api-stability.md#radix-type-boundary-anti-corruption-layer).

## 11. `--default-font-family` / `--default-mono-font-family` removed — v0.15.0

**Severity: low (rarely referenced directly).** The last two Tailwind-preflight
convention names on the public surface were removed; the vendored preflight now
references `--font-sans` / `--font-mono` directly (resolved value unchanged). (#231)

```diff
- font-family: var(--default-font-family);
+ font-family: var(--font-sans);
```

---

## Improvements — no migration required

- **SSR support (v0.8.0, #225).** React bundles now carry `'use client'`
  automatically, so importing Schatten from a Next.js App Router Server
  Component no longer errors. No changes needed.
- **Tailwind removed from the build (v0.15.0, #317).** `dist/schatten.css` is
  now compiled with lightningcss. The public surface (`.st-*` classes, state
  attributes, CSS variables) is **completely unchanged** (manifest 0 diff), and
  consumers never needed Tailwind. No migration item.

## Reference

- [`api-stability.md`](../../.claude/rules/api-stability.md) — the public API
  stability contract in effect from 1.0.
- [`component-api-conventions.md`](../../.claude/rules/component-api-conventions.md)
  — the prop-API vocabulary (the two variant patterns, common props).
- [`css-api.md`](../../.claude/rules/css-api.md) — the framework-agnostic
  `.st-*` class contract.
- [`CHANGELOG.md`](../../CHANGELOG.md) — the authoritative per-release record.
