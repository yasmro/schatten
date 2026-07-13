---
name: prepare-release
description: >-
  Run pre-release sanity checks before bumping the package and publishing.
  Verifies the pending changesets, runs the full quality gate (lint / test /
  typecheck / build / manifest / size / publint), and — most importantly —
  detects `lucide-react` / `@radix-ui/*` / `tailwindcss` / `lightningcss` /
  `vite` (+ `vitest`, which can drag `vite` up via peer) peer/dep bumps since
  the last released tag
  and runs the matching parity / VRT check, so a dependency upgrade can never
  silently break the visual contract (PR #282 の学び).
  Use whenever the user says "次のリリース準備", "release 前にチェック",
  "prepare-release", "リリース直前", or asks whether the current `develop`
  is safe to merge into `main` as the release PR. Hands off the irreversible
  bump / tag / publish to the existing `/release` slash command — does NOT
  perform any mutating operation itself.
---

# prepare-release

Pre-release sanity checks. Verifies that the **next** `/release` will be safe
to run, and catches the failure mode where a dependency bump (`lucide-react`,
`@radix-ui/*`, `tailwindcss`, `lightningcss`, `vite`/`vitest`) silently breaks
the visual contract — the class-API parity stories, the Icon inline-SVG pin,
the manifest extraction, the dist-CSS compile (for `lightningcss`), or (for
`vite`) the whole VRT baseline set at once.

This skill is **complementary to**, not a replacement for, the
[`/release` slash command](../../commands/release.md). The split:

| | `prepare-release` skill (this) | `/release` slash command |
|---|---|---|
| When | Before the release PR is merged (or just after, before publish) | After everything is on `main` and ready to publish |
| What | Checks. Reports. Asks the user. | Bumps version, tags, pushes, publishes. |
| Mutates filesystem | No | Yes (irreversible) |
| Mutates remote / npm | No | Yes (`git push`, `npm publish`, `gh release create`) |

The skill **never invokes `/release` automatically** — the irreversible
boundary is the human's call, not the agent's.

## When to run

- Just before opening the `develop → main` release PR, to catch dependency-
  bump regressions while the diff is still small.
- Just after merging the release PR into `main`, before running `/release`,
  to re-confirm nothing drifted in the merge.
- Whenever pending changesets accumulate and the user wants a "what would
  the next release look like + is it safe?" snapshot.

Don't run for: a fix that ships outside the changeset flow (e.g. a hotfix
branch with no `.changeset/*.md`), or a CI-driven publish where the human is
already absent.

## Required reading first

1. [`.claude/commands/release.md`](../../commands/release.md) — what
   `/release` does, including the `full` / `publish-only` mode split and the
   pre-flight assumptions it relies on.
2. [`.claude/rules/vrt-spec-guideline.md`](../../rules/vrt-spec-guideline.md)
   — the **re-baselining** section in particular. This skill never runs
   `pnpm test:vrt:update` blindly; the rule's "diff before update" procedure
   is in effect.
3. [`.claude/rules/api-stability.md`](../../rules/api-stability.md) — the
   semver classification (`patch` / `minor` / `major`) the changeset bump
   levels must match.

If a rule and this skill disagree, **the rule wins** — update the skill.

## Procedure

### Step 0 — Pre-flight

```bash
# 0-1. Branch + working tree
CURRENT=$(git rev-parse --abbrev-ref HEAD)         # `main` or `develop` or a release PR branch
git status --porcelain                             # → empty

# 0-2. Up-to-date with origin
git fetch origin
git rev-parse --verify origin/develop
git rev-parse --verify origin/main 2>/dev/null || true

# 0-3. Authentication
gh auth status

# 0-4. Lockfile drift (the same gate /release uses)
pnpm install --frozen-lockfile

# 0-5. Last released tag (used in Step 3 for the dependency diff)
LAST_TAG=$(git tag --sort=-creatordate | grep -E '^v[0-9]+\.[0-9]+\.[0-9]+$' | head -1)
LAST_VERSION=${LAST_TAG#v}
```

If any of these fail, abort and explain. Specifically:

- Working tree dirty → ask the user to stash / commit before continuing
  (don't `git stash` automatically — the `/implement-and-review` command's
  Pre-flight section has the precedent: never auto-stash).
- `pnpm install --frozen-lockfile` fails → the lockfile is out of sync with
  `package.json`. Stop and ask the user to either regenerate the lockfile or
  revert the offending `package.json` change.
- No prior release tag exists → this is a first-release situation; skip
  Step 3 (no diff base) and tell the user so explicitly.

### Step 0.5 — develop の version-desync 検出 (v0.11.0 の学び)

このプロジェクトの **`changeset version` は develop に back-merge されない
運用が長く続き**、`develop` の `package.json` version と公開済み (npm /
`origin/main`) が乖離する failure mode がある (v0.11.0 リリースで発覚 —
PR [#387](https://github.com/yasmro/schatten/pull/387) / [#392](https://github.com/yasmro/schatten/pull/392)、恒久対処 [#388](https://github.com/yasmro/schatten/issues/388))。
**desync したまま Step 1 に進むと予測 version が壊れる**: 実際 develop が
`0.8.0` に固着し、`0.10.0` 公開済みなのに `changeset status` が
`0.8.0 → 0.9.0` を予測した (本来 `0.11.0`)。Step 1 の前に必ず検出する。

```bash
LOCAL_VERSION=$(node -p "require('./package.json').version")
NPM_VERSION=$(npm view @yasmro/schatten version --registry=https://registry.npmjs.org/)
MAIN_VERSION=$(git show origin/main:package.json | node -p "JSON.parse(require('fs').readFileSync(0)).version")
```

**判定**: `LOCAL_VERSION` が `NPM_VERSION` / `MAIN_VERSION` より **小さい**、
または develop に**既に公開済みの changeset が残留**していたら desync。
公開済み changeset は 2 方法が一致すれば確実 (両方で確認する):

```bash
# (1) origin/main の到達履歴にファイルがある = 過去リリースで消費=公開済み
git log --oneline origin/main -- ".changeset/<name>.md"   # 非空なら公開済み
# (2) 追加日時が直近 tag より前
git log --diff-filter=A --follow --format=%ct -1 -- ".changeset/<name>.md"
```

desync を検出したら **abort し、リコンサイルをユーザに提示**する (changeset
削除は editorial 判断なので**承認後**・**PR 経由**で。`develop` への直接
push はブランチ保護でも auto-mode でも弾かれる):

1. `package.json` version を `NPM_VERSION` (公開実態) に合わせる。
2. **公開済み changeset を削除** (上記 (1)(2) で確認したもの)。残すのは
   直近リリース後に追加された分のみ。
3. **CHANGELOG.md の履歴乖離も確認**: develop の `## ` 見出し列が公開
   バージョン (例 `0.9.0` / `0.10.0`) を**欠落**していることがある。その
   場合は `origin/main` を develop に **back-merge** して superset に復元
   する (main の CHANGELOG 本体 + develop の新セクションを結合)。
4. これらを `base=develop` の PR にし、`no-changeset` ラベルを付ける
   (release plumbing は changeset 不要 = changeset CI を skip させる)。

リコンサイル後に再度 `changeset status` を取り、予測が正しい
(`NPM_VERSION → 次バージョン`) ことを確認してから Step 1 へ進む。

### Step 1 — Inventory pending changesets

```bash
ls .changeset/*.md 2>/dev/null | grep -v config.json | wc -l
pnpm exec changeset status --output=/tmp/changeset-status.json > /dev/null
```

Parse `/tmp/changeset-status.json`:

```js
const s = require('/tmp/changeset-status.json')
const r = s.releases.find(r => r.name === '@yasmro/schatten')
// r.newVersion   — predicted version
// r.type         — predicted bump level (patch/minor/major)
// s.changesets   — array with { id, summary, releases: [{ name, type }] }
```

Render this back to the user as a table:

```
Current version: 0.8.0  →  Predicted: 0.9.0  (minor)

Consumed changesets:
- audit-coverage-command-9a4b   patch  /audit-coverage slash command と …
- css-api-sweep-1-display-…     patch  Sweep-1: display primitives を …
- icon-component                minor  feat(lv1): Icon component を新設
- per-component-css-subpath-…   minor  feat(build): per-component CSS subpath を …
- theme-provider                minor  feat: <ThemeProvider> を追加
- …
```

Ask the user:

- **Does the predicted bump level match the actual scope?** Compare against
  [`api-stability.md`](../../rules/api-stability.md): a rename / removal /
  semantic change is `major` post-1.0, additive is `minor`, fixes are `patch`.
  Pre-1.0 the boundary is softer but the labels should still be honest.
- **Are there changes on `develop` that are missing a changeset?** Quick
  heuristic — diff the recent PR list against the changeset summaries:
  ```bash
  gh pr list --base develop --state merged --limit 30 \
    --json number,title,mergedAt --jq '.[] | "\(.mergedAt[:10]) #\(.number) \(.title)"'
  ```
  If a merged PR clearly shipped user-facing changes but no changeset shows
  up under its keywords, surface the gap. **Do NOT auto-create a changeset**
  — the bump level / wording is a human decision. Instead, instruct the user
  on how to add one (`pnpm changeset` or write `.changeset/<slug>.md`
  directly).
- **Are there 0 pending changesets?** Two sub-cases:
  - `package.json` version > npm version → tell the user this is a
    `publish-only` scenario; `/release` will detect it. Skip to Step 4.
  - `package.json` version == npm version → there is nothing to release.
    Abort with that explanation.

Once the user confirms the changeset inventory, continue to Step 2.

### Step 2 — Pre-release validation (non-mutating quality gate)

Run the full quality gate sequentially. Each command is non-mutating; never
swap any of them for an `--update` / `--write` / `--fix` variant.

```bash
# 2-1. Lint (Biome CI mode, read-only)
pnpm lint

# 2-2. Type-check
pnpm typecheck

# 2-3. Unit tests
pnpm test --run

# 2-4. Build (produces dist/ — only used to feed 2-5 / 2-6 / 2-7)
pnpm build

# 2-5. Class-API manifest contract
pnpm check:manifest

# 2-6. Per-component CSS size budget
pnpm size

# 2-7. publint — package.json `exports` / `files` / etc. shape
pnpm lint:pkg

# 2-8. README ↔ lv1 directory sync
pnpm check:readme
```

If any of these fail, **stop and report**. Do NOT auto-fix. Specifically:

| Failure | Recovery |
|---|---|
| `pnpm lint` | Read the diagnostic, fix in source. Do NOT run `pnpm lint:fix` from this skill — auto-format can sweep further than intended. |
| `pnpm test --run` | Failing tests are either real regressions (fix the code) or over-strict assertions (fix the test). Don't loosen assertions blindly. |
| `pnpm typecheck` | Fix the types. `any` / `@ts-ignore` is a last-resort escape hatch — never paper over a release blocker with one. |
| `pnpm build` | Read the tsup / Tailwind error. A failing build means `/release` will fail too (`prepublishOnly` re-runs it). |
| `pnpm check:manifest` | The public `.st-*` / `[data-*]` / `--color-*` surface drifted. If intentional, run `pnpm update:manifest` and ship a `CSS API:` changeset. If unintentional, the source change is wrong. |
| `pnpm size` | A `@yasmro/schatten/css/<component>` subpath exceeded its brotli budget. Either trim the CSS or raise the budget in `.size-limit.json` with a written rationale (per [api-stability.md](../../rules/api-stability.md#per-component-css-size-budgets), raising is `minor` and needs a changeset entry). |
| `pnpm lint:pkg` | `publint` flagged an `exports` map / file shape issue. Fix `package.json`. |
| `pnpm check:readme` | A new lv1 was added but the README block wasn't regenerated. Run `pnpm sync:readme`. |

### Step 3 — Dependency-bump-aware sanity check (PR #282 の学び)

This is the unique value-add of this skill. A small set of production
dependencies can break the visual contract **without touching any source
file** — see [`api-stability.md` §Visual-contract-affecting dependencies](../../rules/api-stability.md#visual-contract-affecting-dependencies)
for the canonical list and rationale. This step pivots on those bumps:

| Dependency | Failure mode | Targeted check |
|---|---|---|
| `lucide-react` | The hand-pinned inline `<circle>` + `<path>` in [`Icon.parity.stories.tsx`](../../../src/components/lv1/Icon/Icon.parity.stories.tsx) freezes a specific Lucide rendering. A `lucide-react` bump that adjusts the `<Search>` icon's SVG path (or any of its attributes) makes the parity VRT pixel-diff. | `pnpm test:vrt --grep "Icon parity"` |
| `@radix-ui/*` — **parity-covered** (`react-checkbox` / `react-radio-group` / `react-separator` / `react-switch`) | Radix sometimes adds or renames `data-*` attributes on the rendered primitives. For the 4 components with hand-written parity stories against the Radix output, a new `data-foo="bar"` makes the React side gain an attribute the vanilla HTML doesn't — the parity VRT fails. | `pnpm test:vrt --grep "(Checkbox\|Radio\|Separator\|Switch).+parity"` |
| `@radix-ui/*` — **non-parity** (`react-tooltip` / `react-dialog` / `react-select`) | Same Radix `data-*` bump risk, but these components are 区分 C/D per [vrt-spec-guideline §Parity stories](../../rules/vrt-spec-guideline.md#parity-stories--when-to-write-one-when-to-skip) — no parity story exists, so no automated baseline can fail. The skill **falls back to manual verification**. | (manual) `pnpm test:vrt --grep "(Tooltip\|Dialog\|Select)"` against the normal `*.vrt.spec.ts` + Storybook visual review |
| `sonner` | Renders the `Toast` (since [#318](https://github.com/yasmro/schatten/issues/318)). Schatten renders each toast body via `toast.custom()` under `unstyled`, but Sonner owns the wrapper / positioning / stacking / swipe / animation, so a bump that changes the custom-content wrapper, `unstyled` behavior, or injected positioning styles can shift the Toast visual with no source change. 区分 D — no parity baseline. | (manual) `pnpm test:vrt --grep "Toast"` against `Toast.vrt.spec.ts` + Storybook visual review |
| `@radix-ui/react-slot` | Slot is the `asChild` plumbing primitive — it doesn't emit `data-*` itself, but a bump can change prop-merging behavior (ref forwarding, attribute merge order). Surface area: any component that exposes `asChild` (Button / Text / Tooltip Trigger / Dialog Trigger / Dialog Close / Select Trigger). | (manual) inspect the bump's CHANGELOG for prop-merging behavioral changes; if any are flagged, run the full `pnpm test:vrt` and `pnpm test --run` |
| `tailwindcss` / `@tailwindcss/vite` | **Storybook/dev path only since #317** — the dist build is Tailwind-free, so a Tailwind bump can no longer move the manifest or `dist/schatten.css`. It still renders every story the component VRT screenshots (stories use Tailwind utilities as layout scaffolding), so a bump can drift component/docs VRT baselines. | `pnpm build:storybook` (builder health) + `pnpm test:vrt`, triage per [vrt-spec-guideline §Bulk re-baseline](../../rules/vrt-spec-guideline.md#re-baselining-updating-snapshots) |
| `lightningcss` | Compiles `dist/schatten.css` + every `dist/css/<component>.css` (#317). Its output feeds the `CSSApiDist.vrt.spec.ts` baselines **and** is the source `generate-manifest.mjs` parses — a bump can shift both with zero source diff. Exact-pinned; `scripts/__tests__/build-css.test.ts` smoke-pins the output shape first. | `pnpm test --run scripts/__tests__/build-css.test.ts && pnpm build && pnpm check:manifest && pnpm test:vrt:dist` |
| `vite` | Vite builds the Storybook the VRT specs screenshot against **and** is the Vitest runtime. A major bump can shift font / antialiasing / sub-pixel rendering across the **whole** suite, drifting every `*.png` baseline at once (not one parity story — all of them). It is pinned exact in `package.json`. A Vitest major can also force a Vite major via peer (`vite >= 6` for Vitest 4 — see [#254](https://github.com/yasmro/schatten/issues/254)), so check `vite` whenever `vitest` bumps too. | `pnpm build:storybook` (builder health) + full `pnpm test:vrt`, then triage per [vrt-spec-guideline §Bulk re-baseline](../../rules/vrt-spec-guideline.md#re-baselining-updating-snapshots) |

> **Type-surface detection for any `@radix-ui/*` bump (since #156).** The
> public Props types no longer inherit from Radix — each component redeclares
> its curated props and **spreads them into the Radix primitive**, so a Radix
> bump that renames or narrows a prop fails `pnpm typecheck` (already part of
> Step 2's quality gate). That makes typecheck the **first detector** for
> Radix API drift; the parity / VRT rows above remain the detector for
> *visual/attribute* drift. If typecheck fails after a Radix bump, fix the
> curated redeclaration (or the spread site) per
> [`api-stability.md` §Radix type boundary](../../rules/api-stability.md#radix-type-boundary-anti-corruption-layer)
> — never by re-inheriting the Radix type (the
> `radix-type-boundary.test.tsx` drift guard rejects that).

Detect bumps by diffing the **last released tag's** `package.json` against
`HEAD`:

```bash
# Already in Step 0: LAST_TAG=v0.8.0 (etc.)
git show "${LAST_TAG}:package.json" > /tmp/pkg-last.json

node -e "
  const last = require('/tmp/pkg-last.json');
  const head = require('./package.json');
  const families = {
    'lucide-react': ['dependencies', 'peerDependencies', 'devDependencies'],
    'radix':         ['dependencies', 'peerDependencies', 'devDependencies'],
    'tailwindcss':   ['dependencies', 'peerDependencies', 'devDependencies'],
    'lightningcss':  ['dependencies', 'peerDependencies', 'devDependencies'],
    'vite':          ['dependencies', 'peerDependencies', 'devDependencies'],
    'vitest':        ['dependencies', 'peerDependencies', 'devDependencies'],
  };
  const findRadix = (deps) =>
    Object.entries(deps || {}).filter(([k]) => k.startsWith('@radix-ui/'));

  for (const family of ['lucide-react', 'tailwindcss', 'lightningcss', 'vite', 'vitest']) {
    for (const slot of families[family]) {
      const a = (last[slot] || {})[family];
      const b = (head[slot] || {})[family];
      if (a && b && a !== b) console.log(\`BUMP \${family} \${slot}: \${a} → \${b}\`);
      if (!a && b)           console.log(\`ADDED \${family} \${slot}: \${b}\`);
      if (a && !b)           console.log(\`REMOVED \${family} \${slot}: \${a}\`);
    }
  }
  for (const slot of families.radix) {
    const aMap = Object.fromEntries(findRadix(last[slot]));
    const bMap = Object.fromEntries(findRadix(head[slot]));
    const keys = new Set([...Object.keys(aMap), ...Object.keys(bMap)]);
    for (const k of keys) {
      if (aMap[k] && bMap[k] && aMap[k] !== bMap[k])
        console.log(\`BUMP \${k} \${slot}: \${aMap[k]} → \${bMap[k]}\`);
      if (!aMap[k] && bMap[k])
        console.log(\`ADDED \${k} \${slot}: \${bMap[k]}\`);
      if (aMap[k] && !bMap[k])
        console.log(\`REMOVED \${k} \${slot}: \${aMap[k]}\`);
    }
  }
" > /tmp/dep-bumps.txt
```

For each detected family, run the targeted check:

```bash
# If lucide-react bumped:
pnpm test:vrt --grep "Icon parity"

# If a parity-covered Radix dep bumped (@radix-ui/react-checkbox /
# -radio-group / -separator / -switch):
pnpm test:vrt --grep "(Checkbox|Radio|Separator|Switch).+parity"

# If a non-parity Radix dep bumped (@radix-ui/react-tooltip / -dialog /
# -toast / -select):
#   NOTE: No parity baseline exists for these (区分 C/D). The skill cannot
#   fully verify automatically. Run the normal VRT spec and inspect the
#   stories visually:
pnpm test:vrt --grep "(Tooltip|Dialog|Toast|Select)"
pnpm dev   # then open the rendered stories at /story/<Name>

# If @radix-ui/react-slot bumped:
#   NOTE: Slot doesn't emit visible DOM of its own. Read the bump's
#   CHANGELOG for behavioral changes (prop merging, ref forwarding).
#   If anything is flagged, run the full suite:
pnpm test --run && pnpm test:vrt

# If tailwindcss bumped:
pnpm build && pnpm check:manifest

# If vite (or vitest, which can drag vite up via peer) bumped — especially a
# major:
#   Vite is the VRT render engine + Storybook builder, so a bump can drift
#   EVERY *.png baseline at once. Verify the builder is healthy, then run the
#   full VRT and triage diffs category-by-category (NEVER a blanket
#   test:vrt:update) per vrt-spec-guideline §Bulk re-baseline.
pnpm build:storybook && pnpm test:vrt
```

If a targeted check **passes**, the bump is safe — report the bump and the
clean check to the user and move on.

If a targeted check **fails**, abort with a specific recovery instruction:

| Family | Recovery |
|---|---|
| `lucide-react` | The Icon parity story's inline SVG no longer matches Lucide's `<Search>` icon. Open [`Icon.parity.stories.tsx`](../../../src/components/lv1/Icon/Icon.parity.stories.tsx) and sync the hand-written `<circle>` + `<path>` to the current Lucide version. Update the inline comment that pins the Lucide version. Re-run the parity VRT — only when it passes, ship the bump. |
| `@radix-ui/*` (parity-covered) | A Radix runtime attribute (or DOM shape) changed. Inspect the failing parity story for that component. If a new `data-*` attribute is now emitted by Radix, decide: (a) mirror it on the hand-written vanilla HTML, or (b) declare the new attribute internal and exclude it from the parity surface in the spec. Both are valid; the choice depends on whether the attribute is part of the documented state-attribute table in [css-api.md](../../rules/css-api.md). |
| `@radix-ui/*` (non-parity) | No parity baseline failed — the failure surfaces in the component's own normal VRT spec instead. That's a real visual regression in `Tooltip` / `Dialog` / `Toast` / `Select` itself. Treat it like any source-side VRT failure: open the `*-diff.png` under `test-results/`, confirm the change is unintended, fix the component (or, when justified, re-baseline per [vrt-spec-guideline.md §Re-baselining](../../rules/vrt-spec-guideline.md#re-baselining-updating-snapshots) — never blindly). |
| `@radix-ui/react-slot` | The Slot bump changed prop-merging or ref-forwarding behavior. Re-run `pnpm test --run` and `pnpm test:vrt` against components that consume `asChild` (Button / Text / Tooltip Trigger / Dialog Trigger / Dialog Close / Select Trigger). Fix the broken consumer, then re-verify. |
| `tailwindcss` | The manifest drifted. Run `pnpm build && pnpm check:manifest` and read the per-section diff. If the change is intentional (new variables justified by the bump), `pnpm update:manifest` + ship a `CSS API:` changeset. If unintentional (variables silently dropped), pin Tailwind to the prior minor or investigate the regression upstream before releasing. |
| `vite` / `vitest` | The render engine changed and VRT baselines drifted. Open the `*-diff.png` under `test-results/` and triage **by category** (font/AA micro-shift vs layout vs color) per [vrt-spec-guideline §Bulk re-baseline](../../rules/vrt-spec-guideline.md#re-baselining-updating-snapshots). Re-baseline category-by-category with `--grep` scoping (never a blanket `test:vrt:update`), committing per category so a later bisect can locate a hidden regression. Also confirm `pnpm build:storybook` succeeds — a Vite major can break the builder before VRT even runs. Vite is exact-pinned, so the bump is intentional; if the drift includes anything beyond micro-shifts, investigate before releasing. |

**Never run `pnpm test:vrt:update` from this skill to make the parity check
green.** That violates [vrt-spec-guideline.md §Re-baselining](../../rules/vrt-spec-guideline.md#re-baselining-updating-snapshots).
A failing parity check is the signal — silencing it is the bug.

### Step 4 — Hand off to `/release`

If Steps 1–3 all pass, summarise the green state and tell the user the next
action. **Do not invoke `/release` from this skill** — the user runs it
explicitly so the irreversible boundary stays in the human's hands.

Output template:

```
✅ prepare-release passed.

Predicted next version: 0.9.0 (minor)
Pending changesets:     12
Quality gate:           ✅ lint / typecheck / test / build / manifest / size / publint / readme
Dep-bump checks:        ✅ lucide-react bump (1.6.0 → 1.7.0): Icon parity VRT clean
                        ✅ @radix-ui/react-switch bump (1.2.5 → 1.2.6): Switch parity VRT clean
                        ⚠️  @radix-ui/react-tooltip bump (1.2.7 → 1.2.8): no parity baseline (区分 C);
                              manually verified Tooltip stories in Storybook + normal VRT clean

Next step:
  Run `/release` (no arguments — let changesets choose the bump from the
  pending entries).

  If you need to force a higher bump level than predicted, run
  `/release minor` or `/release major` — the override path is documented
  in the slash command.
```

If something needs the user's attention even though the gates passed (e.g.
a new dependency was *added* without a corresponding parity story, or a
changeset summary is unclear), surface it as a `⚠️` line above the
"Next step" — the user decides whether to act on it before running
`/release`.

## Failure recovery

This skill is non-mutating — there is nothing to roll back if it aborts
partway. The only artifacts it writes are under `/tmp/` (`changeset-status.json`,
`pkg-last.json`, `dep-bumps.txt`); leave them in place so the user can
inspect after the abort. Re-running the skill from Step 0 is always safe.

If `/release` itself fails after this skill greenlit, the recovery is in
[`.claude/commands/release.md`](../../commands/release.md#step-6-execute-post-approval)
— Step 6's "中間失敗が起きたら" section.

## Gotchas

- **Don't auto-invoke `/release`.** The boundary between "checks" (this
  skill) and "irreversible operations" (`/release`) is a deliberate UX
  contract. A future user reading the transcript should be able to point
  to the exact moment the human said "yes, publish."
- **Don't auto-create changesets.** Bump level and wording are editorial
  decisions that affect the published CHANGELOG. Surface gaps; let the
  user write the changeset.
- **Don't run `pnpm test:vrt:update` to fix a parity failure.** A failing
  parity VRT in Step 3 means a dependency bump silently changed the
  visual contract — the right fix is in the source (Icon inline SVG,
  parity story attribute mirror, or the dependency pin), not in the
  baseline. The [vrt-spec-guideline](../../rules/vrt-spec-guideline.md#re-baselining-updating-snapshots)
  "blind update 禁止" rule applies.
- **Don't run `pnpm lint:fix` / `biome check --write`.** Auto-format
  sweeps wider than the immediate fix and pollutes the release diff.
  Hand-fix lint findings.
- **The `LAST_TAG` may not exist on a first release.** If the repo has
  never been tagged, skip Step 3 with a clear "no diff base — first
  release" note. Don't fall back to comparing against an earlier commit;
  the dep-bump heuristic only makes sense against a known-published state.
- **`pnpm test:vrt --grep "<pattern>"` requires Playwright's browser
  binaries to be present.** If `pnpm exec playwright install` has never
  been run on this machine, the grep'd subset will fail at launch with a
  binary-not-found error. That's a setup gap, not a release blocker —
  re-run the install and try again.
- **`@radix-ui/*` covers many packages — only 4 are parity-checkable today.**
  The parity grep pattern (`Checkbox|Radio|Separator|Switch`) lists only the
  lv1 components that **have a `*.parity.stories.tsx` on disk** (区分 A/B per
  [vrt-spec-guideline §Parity stories](../../rules/vrt-spec-guideline.md#parity-stories--when-to-write-one-when-to-skip)).
  The other Radix consumers (`Tooltip` / `Dialog` / `Toast` / `Select` —
  区分 C/D) and `react-slot` are handled by the non-parity / Slot rows in
  the Step 3 table with **manual verification** because no parity baseline
  exists to fail on. When a new lv1 graduates from C/D to A/B and acquires
  a parity story, extend the parity grep in this skill — the matching
  Vitest in [`grep.test.ts`](./grep.test.ts) is the gate that catches the
  drift.
- **The dep-diff heuristic looks only at `package.json`.** A transitive
  dependency upgrade (e.g. `@radix-ui/react-tooltip` pulls a new
  `@radix-ui/react-primitive`) won't show up in this diff but can still
  change Radix's emitted DOM. The parity VRT catches transitive shifts
  only when the direct dependency that surfaces them is also bumped.
  This is acceptable — `pnpm-lock.yaml` diffs are noisy and the parity
  story coverage is intentionally per-component, so a transitive issue
  surfaces on the next direct bump of the same family.
- **Release-plumbing PR は `no-changeset` ラベルを付ける。** version bump
  / desync リコンサイル / main→develop back-merge の PR は changeset を
  持たない (むしろ消費する) ので、`changeset` CI job が「no changeset」で
  落ちる。`gh pr edit <n> --add-label no-changeset` で job を skip させる
  (CI は `base_ref != main` かつ `no-changeset` ラベル無しのときだけ走る)。
  ラベル追加は `labeled` イベントで CI を再トリガーするので、既存の赤い
  run は新 run で skip に置き換わる。
- **リリース後は `main → develop` を back-merge する (#388)。** develop→main
  リリース PR をマージすると main 側に merge commit ができ develop に
  未反映になる。これを放置すると次回リリースで CHANGELOG / version が
  再 desync する (v0.11.0 の根本原因)。リリース完了後、`origin/main` を
  develop に取り込む PR (`base=develop`, `no-changeset` ラベル) を出して
  `main ⊂ develop` を維持する。`origin/develop` が `origin/main` の祖先
  なら単なる fast-forward で済む。

## 全体フロー (develop→main→publish→back-merge)

`/release` は **main 上の publish 工程だけ**を担う。実際のリリースは
複数 PR にまたがる — このスキルはその前段と整合性検査を担当する:

1. **(prepare)** Step 0.5 で develop の version-desync を検出・リコンサイル
   (PR `base=develop` + `no-changeset`)。Step 1–3 で changeset 予測と品質
   ゲートと dep-bump 検査。
2. **(bump)** develop で `pnpm changeset version` → `package.json` /
   CHANGELOG 更新 + changeset 消費。`base=develop` の PR にして merge。
3. **(promote)** `develop → main` の**リリース PR** を **merge commit** で
   マージ (squash / rebase 禁止 — #319)。CHANGELOG 履歴が乖離していれば
   先に Step 0.5 の back-merge で解消しておくと衝突しない。
4. **(publish)** `main` 上で `/release` → `publish-only` モード (version は
   bump 済・npm は旧版・changeset 0) で tag / npm publish / GitHub Release。
   main は別 worktree で checkout 済みのことが多いので、その worktree で
   実行する (サブ worktree からは main を出せない)。
5. **(back-merge)** リリース後 `main → develop` を同期 (上記 Gotcha)。

## Related

- [`.claude/commands/release.md`](../../commands/release.md) — the slash
  command this skill hands off to. The two-mode (`full` /
  `publish-only`) split, the `OVERRIDE_MODE` argument parsing, and the
  final approval gate live there.
- [`.claude/rules/vrt-spec-guideline.md`](../../rules/vrt-spec-guideline.md)
  — re-baselining policy, parity-story classification (区分 A〜D), Portal
  story strategy. The dep-bump check leans on the per-component parity
  spec set per A/B.
- [`.claude/rules/api-stability.md`](../../rules/api-stability.md) — the
  semver classification this skill cross-checks the predicted bump level
  against, plus the manifest pipeline and the per-component CSS size
  budgets that feed Step 2-5 / 2-6.
- [PR #282](https://github.com/yasmro/schatten/pull/282) — the
  `lucide-react` path-inline pin learning that motivated this skill.
- Sibling AI tooling per [issue #133](https://github.com/yasmro/schatten/issues/133):
  - [#132](https://github.com/yasmro/schatten/issues/132) `audit-component`
    — per-component rule audit (different concern: "is this implementation
    correct?", not "is this release safe?").
  - [#134](https://github.com/yasmro/schatten/issues/134) `audit-coverage`
    — already shipped as the [`/audit-coverage`](../../commands/audit-coverage.md)
    slash command. Cross-cutting structural coverage; orthogonal to this
    skill's release-time concern.
