# @yasmro/schatten

## 0.5.0

### Minor Changes

- [#172](https://github.com/yasmro/schatten/pull/172) [`19bcdda`](https://github.com/yasmro/schatten/commit/19bcddaa28f2583d312617d7de1048d610b7cb4a) Thanks [@yasmro](https://github.com/yasmro)! - Add TSDoc on `Props` interfaces for every lv1 component, so IDE hover and
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

- [#171](https://github.com/yasmro/schatten/pull/171) [`1ca9c6b`](https://github.com/yasmro/schatten/commit/1ca9c6be05ef70dd0c088d8fc4799d51ca97a942) Thanks [@yasmro](https://github.com/yasmro)! - feat(tokens): export TS-typed design tokens via `@yasmro/schatten/tokens`

  Adds `src/tokens.ts` that re-exports all semantic CSS custom properties as a hierarchical `as const` object, plus `*Token` literal-union types per category (color, spacing, radius, shadow, transition, zIndex, font, fontSize, lineHeight, fontWeight, letterSpacing). CSS remains the single source of truth — this is a thin pointer layer so AI / IDE completion can surface the available tokens.

  Prefer Tailwind utilities for everyday styling; reach for `tokens` only for inline style or CSS-in-JS.

  ```ts
  import { tokens } from "@yasmro/schatten/tokens";

  <div
    style={{ background: tokens.color.errorSubtle, color: tokens.color.error }}
  />;
  ```

### Patch Changes

- [#177](https://github.com/yasmro/schatten/pull/177) [`025e98e`](https://github.com/yasmro/schatten/commit/025e98e5d104a3e25af90eee4d004547677d7eb4) Thanks [@yasmro](https://github.com/yasmro)! - chore(lint): strengthen Biome rules on top of `recommended`

  [biome.json](biome.json) previously enabled only `recommended: true`. That
  left a few classes of bug uncaught — stale `useEffect` deps, unused imports
  left over from refactors, value-imports for type-only symbols, stray
  `console.log` shipped to consumers. None of those are caught by
  `recommended`, but all are mechanical to enforce.

  The internal codebase already followed these conventions, so enabling the
  rules produced **zero violations**.

  Rules added (see [.claude/rules/lint-rules-guideline.md](.claude/rules/lint-rules-guideline.md)
  for the rationale on each):

  - `correctness/useExhaustiveDependencies` — `error`
  - `correctness/noUnusedImports` — `error`
  - `correctness/noUnusedVariables` — `error`
  - `style/useImportType` — `error`
  - `style/useExportType` — `error`
  - `style/noNonNullAssertion` — `warn`
  - `suspicious/noConsole` — `error` with `allow: ["warn", "error"]` (the two
    variants the library uses to flag developer misuse — e.g. Button's
    `isLoading + asChild` warning)

  Also aligned the `$schema` URL to the installed Biome version (`2.4.14`),
  silencing the schema-mismatch info on every `pnpm lint` run.

  No public API change.

- [#175](https://github.com/yasmro/schatten/pull/175) [`aa77924`](https://github.com/yasmro/schatten/commit/aa7792491de8f1e23ed2484c70a35d12916b5381) Thanks [@yasmro](https://github.com/yasmro)! - chore(types): typecheck stories and tests via a dedicated `tsconfig.test.json`

  `tsconfig.json` previously excluded `**/*.stories.tsx` and `**/*.test.tsx`,
  which meant `pnpm typecheck` skipped them and let type errors slip past CI.
  The dist build needs that exclude (so generated `.d.ts` files don't pick up
  story/test types), but typecheck does not — and the gap masked real bugs.

  This split separates the two concerns:

  - `tsconfig.json` — dist build target (still excludes stories/test), unchanged
    for `tsup`.
  - `tsconfig.test.json` (new) — extends `tsconfig.json` but includes stories,
    tests, and `vitest.setup.ts` (the latter pulls in
    `@testing-library/jest-dom/vitest` so matcher type augmentation is visible).
  - `pnpm typecheck` now runs against `tsconfig.test.json`.

  Bugs surfaced and fixed while turning typecheck back on:

  - `Badge.stories.tsx` used `icon="AlertCircle"`, which is a deprecated
    lucide-react alias that is **not** present in the `icons` object. The
    story rendered no icon at runtime. Updated to `"CircleAlert"` and refreshed
    the matching JSDoc / argTypes examples on `BadgeProps.icon`.
  - `Tooltip.stories.tsx` declared an `argTypes` entry for `hideArrow`, a prop
    that does not exist on `TooltipContentProps`. Removed the stale entry.

  No public API change.

- [#176](https://github.com/yasmro/schatten/pull/176) [`423e3d6`](https://github.com/yasmro/schatten/commit/423e3d63314538a2a818a6b46d3cc226510bd7b7) Thanks [@yasmro](https://github.com/yasmro)! - test: add unit tests for 8 lv1 components

  Add `*.test.tsx` for the 8 lv1 components that previously only had VRT coverage:
  Badge, Checkbox, Radio (+ RadioGroup), Select, Spinner, Switch, Text, Textarea.
  VRT keeps the look in check; unit tests now cover the logic that VRT cannot
  catch — props handling, `aria-*` attributes, keyboard / click events, controlled
  vs. uncontrolled state, and `<Field>` / `<RadioGroup>` context propagation.

  For Radix-backed components (Checkbox / Radio / Select / Switch), tests focus
  on the Schatten wrapping layer (variant classes, `isError`, `disabled`, context
  inheritance) rather than re-testing Radix internals.

  Adds a `scrollIntoView` polyfill to `vitest.setup.ts` so jsdom can run Radix
  Select tests that open the dropdown.

  No public API change.

- [#179](https://github.com/yasmro/schatten/pull/179) [`d7d066c`](https://github.com/yasmro/schatten/commit/d7d066c5ce862d297dae708897e984185364ef81) Thanks [@yasmro](https://github.com/yasmro)! - test(vrt): add VRT specs for Field, FieldSet, Tooltip

  Three lv1 components — Field, FieldSet, Tooltip — previously had no visual
  regression coverage, leaving token changes or Tailwind upgrades free to
  silently break their appearance. Each now has a `*.vrt.spec.ts` plus
  baseline snapshots in light and dark themes.

  - **Field** covers `WithInput`, `WithSelect`, `WithTooltip`, `Required`,
    `ErrorState`, and `Disabled` to lock down label / description / error /
    required-marker positioning across the common children (Input, Select,
    Tooltip-info-icon).
  - **FieldSet** covers `Address`, `ErrorState`, `Disabled`, and
    `ErrorPropagation` to lock down legend / description / nested-field
    layout and the visual surface of context-propagated `disabled` / `isError`.
  - **Tooltip** uses Portals into `document.body`, so VRT screenshots the full
    page rather than `#storybook-root`. Three new `Open / *` stories
    (`OpenAllSides`, `OpenLongContent`, `OpenRichContent`) pin `<Tooltip open>`
    so the popover is always rendered — animations are paused before snapshot.

  `.claude/rules/vrt-spec-guideline.md` gains a new "Components rendered into
  a Portal" section documenting the three strategies (pinned `open` + full-page
  screenshot / `container` prop / click-to-open in spec) and when to reach for
  each.

## 0.4.0

### Minor Changes

- [#66](https://github.com/yasmro/schatten/pull/66) [`14a2a88`](https://github.com/yasmro/schatten/commit/14a2a88253d1212dbd37c5d9b949ddd7b626408c) Thanks [@yasmro](https://github.com/yasmro)! - Add `Dialog` component — modal overlay for confirmations, form input, and
  detail views. The API is **flat**: state, header, and footer are passed as
  props; only the body is `children`.

  ```tsx
  <Dialog
    isOpen={isOpen}
    onOpenChange={setIsOpen}
    title="Delete account"
    description="This action cannot be undone."
    actionButton={{
      label: "Delete",
      variant: "destructive",
      onClick: handleDelete,
      isLoading: isDeleting,
    }}
    cancelButton={{ label: "Cancel" }}
    subActionButton={{ label: "Save as draft", onClick: handleDraft }}
  >
    <p>All data will be permanently removed.</p>
  </Dialog>
  ```

  **Highlights:**

  - **Controlled-only** open state — parent owns `isOpen` / `onOpenChange`.
    No `<DialogTrigger>`; any button can open the dialog.
  - **Per-slot `isLoading`** — set `isLoading: true` on `actionButton` or
    `subActionButton` to show a spinner on that button. Dialog disables
    the other footer buttons (and close ✕) and blocks ESC / overlay click
    / close ✕ dismissal while _any_ footer button is loading. Parent owns
    the state; symmetric with `Button.isLoading`.
  - **Three footer slots** with constrained variants:
    - `actionButton` (required): `primary | destructive`
    - `cancelButton` (optional): `secondary` (fixed)
    - `subActionButton` (optional): `tertiary` (fixed)
  - **Responsive footer layout**:
    - Desktop: `[SubAction] ────── [Cancel] [Action]`
    - Mobile: `[Action] / [Cancel] / ── separator ── / [SubAction]`
      (separator only when `subActionButton` is present)
  - **Long body content** scrolls inside the dialog automatically — Content
    caps at `calc(100vh - 2rem)` and the body region is the only scrolling
    surface (header / footer stay pinned).
  - **Built on** `@radix-ui/react-dialog` for focus trap, scroll lock, and
    a11y wiring (`aria-modal`, `aria-labelledby`, `aria-describedby`).

- [#65](https://github.com/yasmro/schatten/pull/65) [`4719c9c`](https://github.com/yasmro/schatten/commit/4719c9cd412fae571b3c4cb31c8d69222b8a0e19) Thanks [@yasmro](https://github.com/yasmro)! - Unify naming of "inverted" color treatment across tokens, primitives, and
  component variants. Previously the codebase had three forms — `inverse`
  (semantic tokens, Spinner variant), `inverted` (Button / Text / Callout /
  Toast variants), and the `-inv` suffix (primitive variables) — for the
  same concept. They are now all `inverted`.

  **Token renames** (Tailwind utilities, CSS custom properties):

  - `--color-inverse-foreground{,-muted,-subtle}` →
    `--color-inverted-foreground{,-muted,-subtle}`
  - Tailwind utilities: `bg-inverse-foreground` / `text-inverse-foreground`
    / `border-inverse-foreground` (and `-muted` / `-subtle` variants) →
    `bg-inverted-foreground` etc.

  **Component variant renames:**

  - `Spinner` `variant="inverse"` → `variant="inverted"`

  **Primitive renames** (internal — components should not consume these
  directly per the layer rules in `state-token-guideline.md`):

  - `--ink-{black,dark,medium,light,subtle}-inv` →
    `--ink-{...}-inverted`
  - `--paper-{white,warm,cream}-inv` → `--paper-{...}-inverted`

  Other component variant names (`Button` `variant="inverted"`, `Text`
  `color="inverted" | "inverted-muted" | "inverted-subtle"`) were already
  on the `inverted` form and are unchanged.

- [#75](https://github.com/yasmro/schatten/pull/75) [`23d816e`](https://github.com/yasmro/schatten/commit/23d816e5478ca310d6c2469befaf7d034836ac35) Thanks [@dependabot](https://github.com/apps/dependabot)! - Upgrade `tailwind-merge` from v2 to v3 for native Tailwind CSS v4
  alignment. Public API is unchanged; the internal `cn()` utility
  (`twMerge(clsx(...))`) continues to work exactly as before.

  **Consumer impact:** the bundled `tailwind-merge` peer/runtime
  resolution shifts from `^2.x` to `^3.x`. Apps that import
  `tailwind-merge` directly alongside `@yasmro/schatten` will now
  resolve to v3 — review the [tailwind-merge v3 migration notes](https://github.com/dcastil/tailwind-merge/releases/tag/v3.0.0)
  if you rely on advanced configuration (custom validators,
  `extendTailwindMerge`, etc.). Default `twMerge` behavior is
  preserved.

## 0.3.0

### Minor Changes

- [#61](https://github.com/yasmro/schatten/pull/61) [`dd169b3`](https://github.com/yasmro/schatten/commit/dd169b3ae9858ede756970f3a2294e4428e626a7) Thanks [@yasmro](https://github.com/yasmro)! - Add Callout component — inline status block for contextual notices, form
  warnings, and page-level announcements.

  - Same five variants (`default | success | error | warning | info`) and two
    treatments (`subtle` / `solid`) as Toast, sharing the state semantic
    tokens and variant icons (`Info` / `CircleCheck` / `TriangleAlert` /
    `CircleAlert`).
  - Renders inline (no portal, no auto-dismiss). Pass `onClose` to render a
    close button; omit it for a static, non-dismissible callout.
  - `action` accepts a free-form `ReactNode` so consumers can drop in a
    Button, link, or richer affordance — Callouts often persist on screen
    and may need more than the imperative `{label, onClick}` shape Toast
    uses.
  - Forwards refs and arbitrary HTML attributes (incl. `role`/`aria-*`) so
    consumers can opt into ARIA live regions for dynamic notices.

- [#64](https://github.com/yasmro/schatten/pull/64) [`ed586d8`](https://github.com/yasmro/schatten/commit/ed586d8b729d9c133991653b99f9a8ba52d1dab3) Thanks [@yasmro](https://github.com/yasmro)! - Add Separator component — visual divider for splitting content into
  sections, grouping menu items, or separating sidebar regions.

  - Built on `@radix-ui/react-separator` (Radix UI primitive).
  - Supports both `horizontal` (default) and `vertical` orientations.
  - `decorative` defaults to `true` so the divider is hidden from
    assistive technologies; pass `decorative={false}` to expose it as a
    semantic divider via `role="separator"` with the appropriate
    `aria-orientation`.
  - Styled with the `border` semantic token so it picks up theme + dark
    mode mappings automatically.

  Also bumps the dark-mode `--color-border` mapping from `gray-800` to
  `gray-700` so divider lines (the documented purpose of `--color-border`)
  stay visible against the `paper-warm-inv` background. Light mode is
  unchanged. No other lv1 component uses `border-border` directly — they
  all use `border-border-strong` — so the visual impact is limited to
  Separator and the dark-mode neutral-color audit cards in
  `Foundation/Color`.

- [#63](https://github.com/yasmro/schatten/pull/63) [`a0523bd`](https://github.com/yasmro/schatten/commit/a0523bdad0602dafc7ded9699c791fc7e744a2f6) Thanks [@yasmro](https://github.com/yasmro)! - Restructure Badge around state semantics, and extend state colors to
  Text — finishing the rollout that began with PR [#59](https://github.com/yasmro/schatten/issues/59) (state tokens) and
  continued with Toast and Callout.

  ### Badge — restructured (BREAKING)

  Badge now mirrors Toast / Callout's two-axis API:

  - **`variant`**: `default` | `success` | `error` | `warning` | `info`
    (state semantic, default `default`)
  - **`treatment`**: `subtle` | `solid` | `outline` (default `subtle` —
    picked because soft state tags blend better in list rows and tables;
    reach for `solid` when a Badge needs to stand out)
  - **`size`**: unchanged (`sm` | `md` | `lg`, default `md`)

  Badge is now state-oriented — there is no `destructive` variant. Use
  `<Badge variant="error">` for "failed/invalid" tags. For destructive
  _actions_, continue using `<Button variant="destructive">`.

  **Migration:**

  | Before                             | After                                                 |
  | ---------------------------------- | ----------------------------------------------------- |
  | `<Badge>` / `variant="primary"`    | `<Badge treatment="solid">` (filled neutral)          |
  | `<Badge variant="secondary">`      | `<Badge>` (default+subtle is the new default)         |
  | `<Badge variant="outline">`        | `<Badge treatment="outline">`                         |
  | `<Badge variant="destructive">`    | `<Badge variant="error" treatment="solid">`           |
  | `<Badge variant="success">` (etc.) | `<Badge variant="success" treatment="solid">` for the |
  |                                    | old filled look, or omit `treatment` for the new soft |
  |                                    | default                                               |

  The new shape unlocks combinations that weren't previously possible —
  e.g. `variant="error" treatment="subtle"` for a soft "Failed" tag in
  list rows, or `variant="success" treatment="outline"` for an ambient
  indicator.

  ### Text — extended

  Extends the `color` prop along three dimensions:

  - **Foreground hierarchy** — adds `subtle` for tertiary text (faintest
    of `default` / `muted` / `subtle`), so callsites can stop reaching
    for ad-hoc `text-foreground-subtle` className overrides.
  - **State** — adds `error`, `success`, `warning`, `info` for inline
    status text (form errors, success notes, beta callouts).
  - **Inverted hierarchy** — adds `inverted`, `inverted-muted`, and
    `inverted-subtle` (resolving to `text-inverse-foreground[-muted]
[-subtle]`) for placing Text on saturated surfaces such as a solid
    Toast / Callout or a primary-colored fill. Mirrors Button's
    `inverted` naming and the `default` / `muted` / `subtle` shape.

  ### Token corrections

  The existing `--color-foreground-subtle` token was previously mapped to
  `--ink-medium`, which made it visually _more_ prominent than
  `--color-foreground-muted` despite the docs labelling it as "tertiary
  text". This release re-maps `foreground-subtle` to a new
  `--ink-subtle` primitive (`sumi-300` light / `alabaster-600` dark) so
  the hierarchy is consistent: `default` > `muted` > `subtle` in both
  modes.

  Two new semantic tokens — `--color-inverse-foreground-muted` and
  `--color-inverse-foreground-subtle` — back the new Text inverted
  colors.

  ### Knock-on fix

  The `Button` `link` variant previously faded to `text-foreground-subtle`
  on hover. Because the corrected `subtle` is now a much fainter tier,
  that hover felt like the text was disappearing. Switched to
  `text-foreground-muted` and replaced the abrupt `hover:no-underline`
  with `hover:decoration-transparent` so the underline animates out
  alongside the existing color transition.

- [#59](https://github.com/yasmro/schatten/pull/59) [`a3eed42`](https://github.com/yasmro/schatten/commit/a3eed422f3d9c2db3c97496127565a7ea9f5e0a0) Thanks [@yasmro](https://github.com/yasmro)! - Add full state semantic tokens (`error`, `success`, `warning`, `info`), each with `{ base, hover, foreground, subtle }`.

  - New tokens: `error-*`, `info-*`, plus completed `success-foreground` / `success-subtle` / `warning-foreground` / `warning-subtle`.
  - Form components (`Input`, `Textarea`, `Select`, `Field`) now reference `error-*` instead of `destructive-*`. `destructive` remains for destructive actions (Button, Badge). `error` and `destructive` share vermillion under the hood, so visuals are unchanged.
  - `success` and `warning` base shades shifted from `500/400` to `600/500` (light/dark) for consistency with `destructive` / `error` / `info`. No component currently surfaces these visually outside Storybook docs.

- [#60](https://github.com/yasmro/schatten/pull/60) [`18a68c2`](https://github.com/yasmro/schatten/commit/18a68c207878ad5802a785da3b353f06ac299371) Thanks [@yasmro](https://github.com/yasmro)! - Add Toast component for transient, non-blocking notifications. Closes [#45](https://github.com/yasmro/schatten/issues/45).

  - Imperative API: `toast({ title, description, variant, treatment, duration, action })` callable from anywhere (no React context required). `useToast()` returns `{ toasts, toast, dismiss, dismissAll }` for hook-based access.
  - Mount `<Toaster position="bottom-center" />` once at the app root.
  - 5 variants — `default | success | error | warning | info` — mapped to the new state semantic tokens.
  - 2 treatments — `subtle` (default, soft colored background) and `solid` (filled saturated background) — selectable per toast.
  - Action button rendered from a simple `{ label, onClick, altText? }` shape; users do not need to wrap their own Button.
  - Always-visible icon-only close button (tertiary).
  - 6 viewport positions: top/bottom × left/center/right.
  - Dissolve enter/exit animation (opacity + subtle scale) defined in Toast.css; respects `prefers-reduced-motion`.
  - New peer dependency: `@radix-ui/react-toast`.

  The `vitest.setup.ts` now polyfills `Element.prototype.{has,set,release}PointerCapture` so jsdom-based tests can render Radix components that use Pointer Events.

## 0.2.1

### Patch Changes

- Fix: FieldSet `disabled` prop now propagates to all child Field components via context.

## 0.2.0

### Minor Changes

- ## New Components

  - **Field**: Form field wrapper with label, description, error, and tooltip support
  - **FieldSet**: Group multiple Field components with shared layout and error state
  - **Tooltip**: Radix-based tooltip component

  ## Enhancements

  - Field: Add `tooltip` prop for supplementary information with info icon
  - Input: Click on wrapper padding now focuses the input
  - Input: Show text cursor on wrapper hover

  ## Developer Experience

  - Add `/review-pr` command for structured PR self-review
  - Add `mergeRefs` utility for combining refs
  - Add Field context guideline documentation

## 0.1.0

### Minor Changes

- Add standalone CSS build with Lightning CSS

  - Add pre-compiled CSS distribution (`schatten.css`) that works without build tools
  - Users can link directly via CDN for zero-config usage
  - Uses Lightning CSS for bundling and minification
