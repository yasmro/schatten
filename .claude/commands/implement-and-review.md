# implement-and-review

`develop` から派生したブランチで実装 → 品質ゲート → PR 作成 → 同セッション内で
`/review-pr` を走らせるまでをワンコマンドで通す。

`develop → main` フロー (リリース PR が develop→main を流す運用) を前提にしている
ので、**PR の base は常に `develop`**。`main` 直接の PR には使わない。

## Usage

```
/project:implement-and-review <タスク内容を自由文で>
/project:implement-and-review #123                       # issue 番号だけ渡す
/project:implement-and-review #123 <補足する指示>         # issue + 追加指示
```

引数は `$ARGUMENTS` で受け取る。空の場合は何を実装するかをユーザに聞き返してから
着手する (曖昧なまま走り出さない)。

`#<番号>` で始まる引数は GitHub issue 番号として扱い、`gh issue view <番号>
--json title,body,labels` で本文を取りに行く。

## Flow Summary

0. **Parse arguments** — `$ARGUMENTS` を解釈し、タスク要件を確定
1. **Pre-flight** — リポジトリ状態 / 認証 / `origin/develop` の確認
2. **Decide work branch** — 既存の作業ブランチを再利用するか、新規に `feat/...`
   を切るかを判定
3. **Implement** — タスクに従って実装する。関連する `.claude/rules/*.md` は
   実装前に読む
4. **Quality gates** — `pnpm lint` / `pnpm test --run` / `pnpm typecheck` を順に通す
5. **Changeset** — ユーザ向け変更なら `.changeset/*.md` を追加 (内部限定 PR は
   後段の `no-changeset` ラベルでスキップする旨を覚えておく)
6. **Approval gate** — 差分・コミットメッセージ・PR タイトル / body をプレビュー
   してユーザの承認を取る (1 回目の承認)
7. **Commit & push** — 承認後にコミット → push
8. **Create PR** — `gh pr create --base develop` で PR を作成
9. **Hand off to /review-pr** — 作成された PR 番号で `/review-pr` を同セッション
   内で起動

## Step 0. Parse arguments

`$ARGUMENTS` を trim して以下に分類する。

| パターン | 例 | 扱い |
|---|---|---|
| 空文字列 | `/project:implement-and-review` | ユーザにタスク内容を質問してから続行 |
| `#<番号>` のみ | `#127` | `gh issue view 127 --json title,body,labels` で本文を取得し、それをタスクとする |
| `#<番号> <追記>` | `#127 ただし lv1 のみ` | 上記 + 追記をユーザからの追加指示として保持 |
| それ以外 | `Button に loading variant を足して` | そのまま自由文タスクとして扱う |

issue 番号が含まれている場合、後の PR 本文に **`closes #<番号>`** を入れる前提に
する (close すべきでないとユーザが言ったら外す)。

## Step 1. Pre-flight checks

順に実行し、いずれか失敗したら abort する。

```bash
# 1-1. 認証
gh auth status

# 1-2. develop の最新化
git fetch origin

# 1-3. develop が存在すること (このリポは develop→main フロー)
git rev-parse --verify origin/develop

# 1-4. 作業ツリーが clean
git status --porcelain   # → empty (未コミット差分があれば abort して相談)
```

`1-4` で未コミット差分があった場合は、ユーザに次のどれかを選んでもらう:

- 既存の差分を含めたまま PR まで通す (作業ブランチが現状ブランチで OK のとき)
- 差分を一旦 stash してから新規ブランチを切る
- 差分を捨てて新規ブランチを切る

選んでもらわずに `git stash` / `git checkout -B` を**自動で実行しない**。

## Step 2. Decide work branch

現在のブランチ名と base commit を見て、次の表で判定する。

```bash
CURRENT=$(git rev-parse --abbrev-ref HEAD)
BASE=$(git merge-base HEAD origin/develop 2>/dev/null || echo "")
```

| `CURRENT` | 判定 | 動作 |
|---|---|---|
| `main` / `develop` | 新規ブランチを切る必要あり | `git switch -c <branch>` で新規。元 ブランチには戻さない |
| `feat/...` / `fix/...` / `chore/...` / `claude/...` (Claude Code worktree) | 既存ブランチを使う | そのまま続行。ただし `git log origin/develop..HEAD` が空でない場合は「既存差分が乗っている」旨をユーザに告げて、それを含めて PR にしてよいか確認 |
| その他 | 判断付かず | ユーザに聞く |

### 新規ブランチ名の決め方

- issue 番号がある場合: `feat/<番号>-<kebab-case-slug>` (例: `feat/127-icon-component`)
- issue 番号がない場合: `feat/<kebab-case-slug>` (例: `feat/button-loading-variant`)
- bug fix / chore は prefix を `fix/` / `chore/` に置き換える。タスク文の動詞か
  ら判定 (「直す」「修正」→ `fix/`、「ドキュメント」「整理」→ `chore/`、それ
  以外 → `feat/`)
- slug は半角英数とハイフンのみ。日本語のタスク文は要約して英語にする (Storybook
  と同じく Storybook surface / branch name は英語に揃える方針)

### ブランチ作成コマンド

```bash
git switch -c "$BRANCH" origin/develop
```

`-c` は既存ブランチがあると失敗するので、その場合は別 slug を提案するか、ユーザ
に既存を使うかを聞く。

## Step 3. Implement

### 3-1. 関連 rule の事前読み込み

タスクの種類に応じて、対応する `.claude/rules/*.md` を **実装前に読む**。判断
基準:

| タスクの種類 | 読むべき rule |
|---|---|
| 新規 lv1 / lv2 component 追加 | `component-architecture.md` / `component-api-conventions.md` / `storybook-guideline.md` / `testing-guideline.md` / `vrt-spec-guideline.md` / `component-testid-guideline.md` |
| 既存 component の variant / prop 追加 | `component-api-conventions.md` + 該当 component の現状 |
| トークン / theme 関連 | `state-token-guideline.md` / `theme-architecture.md` |
| Field / Form 系 | `field-context-guideline.md` |
| Lint rule / Biome plugin | `lint-rules-guideline.md` |
| Storybook 改善 | `storybook-guideline.md` |
| テスト追加 | `testing-guideline.md` |
| VRT spec 追加 | `vrt-spec-guideline.md` |
| API 周り (rename / remove / 破壊的変更含む) | `api-stability.md` |

該当 rule が複数ある場合は両方読む。「読んだ」だけで終わらせず、判断にどう使った
かは後の PR body / commit message に反映させる。

### 3-2. 実装の進め方

- 単一の component / file で完結する変更でも、新規 lv1 を追加するなら必ず
  `Component.tsx` + `Component.stories.tsx` + `Component.test.tsx` +
  `Component.vrt.spec.ts` をワンセットで揃える ([CLAUDE.md](../../CLAUDE.md)
  の `Things you MUST NOT do` 参照)。
- Primitive color class (`bg-red-500` 等) を JSX に書かない。`bg-error` /
  `bg-error-subtle` / `bg-destructive` などセマンティックを使う。`biome-plugins/no-primitive-color.grit`
  が CI で検出するが、手元でも `pnpm lint` で見える。
- 既存ファイルを編集するときは、周辺コードのコメント密度・命名・idiom に合わ
  せる。同じレイヤーの他 component が `is*` boolean prefix で書いているなら
  従う。

### 3-3. 進捗の刻み方

実装が複数 commit に分かれる規模の場合 (例: lv1 新設 → story → test → VRT)、
**個別 commit はこの段階では作らず、最後にまとめて 1 commit に集約する**
([CLAUDE.md] 上のコミット方針)。途中の小コミットを残したい場合はユーザに
明示的に許可を取る。

## Step 4. Quality gates

順に走らせ、失敗したら **そのまま放置しない** で原因を特定して直す。

```bash
pnpm lint           # Biome ci checks (auto-fix では走らせない — 何が変わるか不可視になる)
pnpm test --run     # Vitest single-pass
pnpm typecheck      # tsc --noEmit -p tsconfig.test.json
```

### 失敗時の方針

- `pnpm lint` の Biome 違反 → 手で直す。`pnpm lint:fix` を**ユーザに無断で**
  走らせない (formatter の自動整形が意図しない範囲に届くことがある)。
- `pnpm test --run` の失敗 → 失敗テストの assertion を読み、実装側の bug か
  テストの過剰な厳密化か判断する。テストを緩めるのは最終手段。
- `pnpm typecheck` の型エラー → 型を直す。`any` / `@ts-ignore` で塞ぐのは
  最終手段で、塞ぐなら必ず 1 行コメントで理由を残す。

VRT (`pnpm test:vrt`) は **このコマンドからは走らせない**。新規 component を
追加した場合は `*.vrt.spec.ts` を置くだけで OK で、baseline 生成は CI 側で行う
方針 (手元で `test:vrt:update` を blindly 走らせるのは [vrt-spec-guideline](../rules/vrt-spec-guideline.md)
で禁止されている)。VRT spec をローカル検証したい場合はユーザが明示的に依頼した
ときだけ。

## Step 5. Changeset

### 5-1. 必要かどうかの判定

[AGENTS.md] の方針:

- **必要**: 公開 API の追加 / 変更 / 削除 (component / prop / token / variant /
  CSS class / CSS var)、ユーザ向け振る舞いの変更、リリースノートに載るべきもの
- **不要 (`no-changeset` ラベル)**: `.github/` workflow / docs-only / test-only
  / `.claude/` / `AGENTS.md` / `CLAUDE.md` 等の内部ファイルのみ変更
- **不要 (dependabot)**: dependabot 自動 PR (人手の関与外)

判断付かないときはユーザに聞く。

### 5-2. 必要な場合の手順

`pnpm changeset` は対話的なので、**直接 `.changeset/<slug>.md` を Write で作る**:

```md
---
'@yasmro/schatten': <patch | minor | major>
---

<1-2 行で要約。後の CHANGELOG に出る>
```

slug は `<kebab>-<rand>` 形式 (`pnpm changeset` が生成するのと同じ命名感)。例:
`button-loading-variant-aa12`。

bump level の選び方:

- `patch` — bug fix / 内部リファクタで API 変化なし
- `minor` — 新規 component / 新規 variant / 新規 prop / 新規 token (追加のみ)
- `major` — rename / remove / 破壊的シグネチャ変更 ([api-stability](../rules/api-stability.md)
  参照、ただし 1.0 前なので minor 扱いでも OK のケースあり)

### 5-3. 不要な場合

`gh pr create` 後に `no-changeset` ラベルを付ける手順を覚えておく (Step 8 で実行)。

## Step 6. Approval gate (pre-commit)

以下を 1 つのメッセージにまとめてユーザに提示し、明示的な承認を得る。

- 確定したタスク要件 (Step 0 で確定したもの)
- 使う作業ブランチ名 (新規 / 既存どちらか明示)
- `git status` / `git diff --stat` の出力
- 起草した **commit message** のフルテキスト
- 起草した **PR タイトル** と **PR body** のフルテキスト
- 追加した changeset の中身 (該当する場合)
- `no-changeset` ラベルを付ける予定かどうか

### Commit message テンプレート

[Conventional Commits] スタイル。close 対象の issue があれば末尾に。最近の
develop の PR タイトル (例: `feat(lv1): Icon 共通コンポーネントを追加 (closes #127)`)
を参考に揃える。

```
<type>(<scope>): <要約 — 50 文字目安>

<必要なら詳細を 1-2 段落>

closes #<番号>     # 任意

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

- `<type>` は `feat` / `fix` / `chore` / `refactor` / `docs` / `test` / `ci` /
  `style` から
- `<scope>` は `lv1` / `lv2` / `tokens` / `theme` / `storybook` / `ci` /
  `skill` 等、最近の develop の PR タイトルの scope に揃える

### PR タイトル / body テンプレート

```
タイトル: <commit message と同じ 1 行目。issue close を含める>

body:
## What

<2-3 文で何を変えたか>

## Why

<2-3 文で why。直す bug / 達成する value / 関連 issue>

## Related rules

- <.claude/rules/xxx.md を参照したならリンク>

## Test plan

- [ ] `pnpm lint` 緑
- [ ] `pnpm test --run` 緑
- [ ] `pnpm typecheck` 緑
- [ ] Storybook で手動確認 (該当する場合)

closes #<番号>     # 任意

🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

承認後に Step 7 へ。修正要求があればその場で更新して再度同じプレビューを出し直す。

## Step 7. Commit & push

```bash
git add -A
git commit -F /tmp/commit-msg.txt
git log -1 --oneline                          # 検証

git push -u origin "$BRANCH"
git rev-parse "origin/$BRANCH"                # 検証: 届いた
```

`-u` を必ず付ける (後で `gh pr create` が tracking branch を要求するので)。

## Step 8. Create PR

```bash
gh pr create \
  --base develop \
  --head "$BRANCH" \
  --title "$PR_TITLE" \
  --body-file /tmp/pr-body.md \
  --repo yasmro/schatten
```

返ってきた URL から PR 番号を抽出する:

```bash
PR_NUMBER=$(gh pr view --json number --jq .number)
```

### `no-changeset` ラベル (該当時)

Step 5 で changeset 不要と判断した場合:

```bash
gh pr edit "$PR_NUMBER" --add-label no-changeset
```

ラベルが存在しないリポなら `gh label create no-changeset` で作る (このリポでは
既存)。

### PR 作成後の確認

```bash
gh pr view "$PR_NUMBER" --json title,baseRefName,headRefName,labels
```

`baseRefName` が `develop` になっていることを必ず確認 (誤って `main` に向いていたら
即修正する: `gh pr edit "$PR_NUMBER" --base develop`)。

## Step 9. Hand off to /review-pr

同じセッション内で `/review-pr <PR_NUMBER>` を Skill 経由で起動する。

- Skill tool を呼び、`skill="review-pr"` / `args="$PR_NUMBER"` を渡す
- review-pr の出力 (3 セクション: 2 つの目線 / マージ可否 / 次の改善レコメンド)
  をそのままユーザに見せる
- Claude が自分で `gh pr review` を叩いて approve / request-changes を**しない**。
  review-pr は判断材料を出すだけで、最終的な merge / approve はユーザの操作

## Step 10. Final report

完了時にまとめてユーザに渡す:

- 作成した PR の URL と番号
- 使ったブランチ名
- 追加した changeset (該当時)
- `/review-pr` の出力サマリ (1-2 行 — 「✅ Ship」「🟡 Ship with notes」「🔴 Block」
  のどれだったか + 次にやることの top-1)
- 後続でユーザが取るべきアクション (例: 「VRT baseline を CI で生成する」「VRT
  失敗した場合の対処」など)

## Gotchas

- **PR の base は必ず `develop`**。`gh pr create` の `--base develop` を省略
  すると repo の default branch (`main`) に向く。これは develop→main フローを
  壊すのでガードしている (Step 8 の確認)。
- **既存の Claude worktree ブランチで走らせると、過去の差分を巻き込む**。
  Step 2 で `git log origin/develop..HEAD` をチェックしているのはこのため。
- **VRT を勝手に update しない**。`*.vrt.spec.ts` を新規追加するだけに留め、
  baseline 生成は CI に任せる。`pnpm test:vrt:update` を agent から無断で
  走らせると [vrt-spec-guideline](../rules/vrt-spec-guideline.md) の "blind
  update 禁止" 違反になる。
- **Storybook surface は英語**。タスク文が日本語でも、Story の `argTypes
  description` / Storybook ラベル / Button label は英語で書く。Commit message と
  PR body は日本語 OK (既存の develop の PR タイトルも日本語混在)。
- **changeset の slug 衝突**。`.changeset/<slug>.md` を Write で作るときは既存
  ファイル名をチェック。被ったらランダム接尾辞を変える。
- **`gh pr create` が auth に失敗した**ら、`gh auth status` で再確認する。
  Step 1 で確認しているので通常は起きないが、長時間セッションでトークン期限
  切れの可能性あり。
- **`/review-pr` の出力を加工しない**。Skill 経由で受け取った文字列はその
  ままユーザに渡す。サマリは Step 10 の "Final report" で別に出すので、
  本文を要約 / 圧縮しない。
- **同じ PR に対して `/review-pr` を 2 回走らせない**。Step 9 で 1 回呼んだら
  終わり。ユーザが追加でレビューを依頼したら別途 `/review-pr` を起動する。

$ARGUMENTS
