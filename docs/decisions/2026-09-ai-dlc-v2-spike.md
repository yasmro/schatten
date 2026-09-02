# AWS AI-DLC v2 は「インストールせず、3 つの機構だけ移植する」

- **Status**: Accepted
- **Date**: 2026-09-03
- **Related**: [#526](https://github.com/yasmro/schatten/issues/526)（本 spike / Phase 1） /
  [CLAUDE.md](../../CLAUDE.md)（既存 4 層の全体像） /
  [refinement-version](../../.claude/skills/refinement-version/SKILL.md),
  [refinement-issue](../../.claude/skills/refinement-issue/SKILL.md)（移植先） /
  隣接: #425（消費者側の AI-native 体験）, #492（検証対象候補）
- **調査対象**: [awslabs/aidlc-workflows](https://github.com/awslabs/aidlc-workflows) **tag `v2.7.0`**
  （clone して `core/` 全体と `dist/claude/` を実読）

## Context

AWS の AI-DLC（AI-Driven Development Lifecycle）v2 を Schatten の開発フローに
取り込めるかを検討した。Schatten には既に 15 リリース分の運用で育った 4 層の
rule-driven フローがあるため、問いは「導入するか」ではなく
**「既存フローのどの穴を AI-DLC が埋めるか / 埋めないか」**である。

### 一次ソースの実測（#526 本文の記述を訂正）

`v2.7.0` を clone して確認した実態。#526 本文は 2026-09-01 時点の二次情報に
基づいており、以下がズレていた。

| #526 の記述 | 実測 |
|---|---|
| `tree/v2`（ブランチ） | **`v2` ブランチは存在しない**。`v2.1.1`〜`v2.7.0` の **tag 系列** |
| `core/04-phases-and-stages.md` / `06-agents.md` | **存在しない**。実体は `core/aidlc-common/stages/<phase>/<slug>.md` と `core/agents/*.md` |
| `dist/claude-code/` | 実際のディレクトリ名は **`dist/claude/`** |
| 既存 rules「11 本」 | **12 本** |
| 既存 skills「7 種」 | **6 種** |
| 5 フェーズ 33 stage | ✅ 正確（INIT 3 / IDEATION 7 / INCEPTION 9 / CONSTRUCTION 7 / OPERATION 7） |
| 14 エージェント（ドメイン 11 + レビュー 2 + composer 1） | ✅ 正確 |

**#526 が触れていなかった重要事実**が 3 つある。これが結論を左右した。

1. **`core/scopes/` — 11 種のスコープ preset**（`express` / `mvp` / `poc` /
   `bugfix` / `refactor` / `infra` / `security-patch` / `classic` / `feature` /
   `enterprise` / `workshop`）。stage ごとに EXECUTE / SKIP / CONDITIONAL を
   割り当てる。`express` は 33 stage 中 9 stage しか回さない。
   → **規模のスケールダウンは方法論に組み込み済み**（論点 4 への直接回答）。
2. **`core/sensors/` — 6 種の決定的センサー**（`required-sections` /
   `traceability` / `linter` / `type-check` / `claim-sources` /
   `upstream-coverage`）。stage の gate で発火する。
3. **ハード前提**: `bun` が非対話シェルの PATH 上にあること、かつ
   **AWS Bedrock のモデルアクセスと認証情報**。同梱 `settings.json` は
   `CLAUDE_CODE_USE_BEDROCK=1` / `AWS_REGION=us-east-1` / `model: opus[1m]` /
   `effortLevel: xhigh` を**セッション全体に**設定する。

## 論点 (2) 重複マップ — 33 stage × 既存資産

各 stage に「カバー済 / 部分カバー / 未カバー / 不要 / engine 固有」を割り当てた。

| 区分 | 数 | stage |
|---|---|---|
| **カバー済**（既存資産が厚い） | 9 | reverse-engineering, practices-discovery, contract-design, code-generation, build-and-test, ci-pipeline, deployment-pipeline, deployment-execution, performance-validation |
| **部分カバー** | 9 | intent-capture, scope-definition, rough-mockups, approval-handoff, refined-mockups, delivery-planning, functional-design, nfr-requirements, nfr-design |
| **未カバー かつ 価値あり** | **3** | **feasibility, requirements-analysis, units-generation** |
| **Schatten には不要** | 9 | market-research, team-formation, user-stories, domain-design, infrastructure-design, environment-provisioning, observability-setup, incident-response, feedback-optimization |
| **engine 固有**（対応概念なし） | 3 | state-init, workspace-detection, workspace-scaffold |

カバー済 stage の対応資産（抜粋）:

| AI-DLC stage | Schatten の既存資産 |
|---|---|
| practices-discovery | `.claude/rules/` 12 本 — **AI-DLC が「探索」する対象が Schatten では既に成文化済み** |
| contract-design | `api-stability.md` + `schatten.manifest.json` + `check:manifest` |
| code-generation | `add-lv1-component` skill（7 ファイル一括生成） |
| build-and-test | `test` / `test:vrt` / `test:a11y` / `typecheck` |
| ci-pipeline | CI 9 job（lint / typecheck / test / docs / size / manifest / changeset / audit / a11y）+ `vrt.yml` |
| deployment-pipeline | `prepare-release` skill + Changesets + `/release` |
| performance-validation | `size` job + `.size-limit.json` の per-component 予算 |

**#526 の事前の見立ては当たっていたが、粒度が粗かった。**「Ideation / Inception が
薄い」は正しい一方、その 16 stage のうち Schatten に**本当に効くのは 3 stage だけ**で、
残りは DS・ソロ開発という性質上そもそも不要（user-stories / team-formation /
market-research）か、既に厚い（practices-discovery / contract-design）。

## 論点 (3) 同居の技術コスト

### 名前空間の衝突 — 「同じ `.claude/` に入る」

`dist/claude/` は **`.claude/` 配下にインストールされる**。Schatten と同じ名前空間。

| ディレクトリ | AI-DLC | Schatten | 衝突 |
|---|---|---|---|
| `.claude/rules/` | 1（`aidlc.md`） | 12 | ファイル名衝突なし。ただし「`.claude/rules/` = Schatten の契約 SSOT」という**意味づけ**が薄まる |
| `.claude/skills/` | **43** | 6 | 全て `aidlc-` prefix でファイル名衝突なし。ただし**skill 一覧が 6 → 49 に膨張** |
| `.claude/hooks/` | 18（TS） | 0（Schatten は `scripts/`） | パス衝突なし |
| `.claude/settings.json` | **同名ファイル** | **同名ファイル** | **手動マージ必須** |
| `.claude/agents` `/tools` `/sensors` `/scopes` `/knowledge` `/aidlc-common` | 201 | なし | 新規 |
| `aidlc/`（リポジトリ直下） | 作業ツリー | なし | 新規。artifacts は**コミット対象** |
| `.mcp.json` | 5 サーバー（context7 + AWS 4） | なし | 新規。`uv`/`uvx` 必要 |

合計 **277 ファイル / 5.8 MB**。`.gitignore` への追記は約 50 行。

### hook の発火条件 — ここが結論を変えた

事前の懸念は「AI-DLC の hook が通常の編集をブロックするのでは」だった。
**実読した結果、これは杞憂だった。**

- `aidlc-continue-workflow.ts`（Stop hook）はソース冒頭で明示している:
  > *No-op outside AIDLC. […] with no active workflow (no `aidlc-state.md` under
  > the project dir) we exit 0 immediately. **A non-AIDLC session is NEVER
  > blocked.*** 例外時も fail-open。
- `aidlc-state-transition-guard.ts` がブロックするのは
  `aidlc-state.ts` の遷移動詞（`advance` / `approve` / `finalize` …）**のみ**。
  任意の Edit / Write は対象外。
- `plan-approval-guard` / `review-freeze` / `reviewer-scope` は
  **AI-DLC の stage 成果物（`produces[]`）と unit スコープに限定**して発火する。

したがって **AI-DLC ワークフローが非アクティブな間、Schatten の通常作業は無干渉**。
Stop hook が Schatten（`check-lv1-export-integrity.mjs`）と AI-DLC の 2 本になるが、
後者は即 exit 0 する。**技術的な同居可否は「可」。**

**ただし settings.json の `env` は no-op ではない。** `CLAUDE_CODE_USE_BEDROCK=1` と
`model` / `effortLevel` は**ワークフローの有無に関わらず全セッションに適用される**。
同梱 settings.json をそのまま採ると、Schatten の通常作業まで Bedrock 経由になる。
（hook 自体は bun スクリプトなので Bedrock 非依存。`env` は落として採用可能。）

### 部分採用は可能か — 論点 (3) の最重要点

**2 つのレイヤーで答えが違う。**

- **stage 選択レベル: 可能。** `scopes`（11 preset）と
  `/aidlc --stage <slug> --single`、および stage ごとの runner skill が公式に用意されている。
  「33 stage のうち 3 stage だけ回す」は**方法論として想定内**。
- **エンジン非依存の抽出: 不可能。** `dist/claude/.claude/skills/` の
  **42 skill 全て**が `bun .claude/tools/aidlc-orchestrate.ts` を呼ぶ薄いラッパー
  （`generated-by: aidlc-runner-gen`）。stage を 1 つ動かすにも
  engine 一式（tools 69 + hooks 18 + aidlc-common 42 + knowledge 59）が要る。

→ **「3 stage が欲しい」に対する最小コストが 277 ファイル + bun + Bedrock。**
これが割に合わない、というのが結論の中心。

**一方、方法論の *散文* は engine から分離できる。** `core/aidlc-common/stages/*/*.md`
（計 5,570 行）は frontmatter（宣言）+ Markdown（手順）で、
frontmatter を読み替えれば engine なしで内容を利用できる。

## Decision

**`dist/claude/` はインストールしない。目的は A（学習）+ B（穴埋め）とし、
B は「導入」ではなく「3 つの機構の既存 skill への移植」で果たす。C（置換）は不採用。**

理由:

1. **費用対効果が成立しない。** 未カバーで価値のある stage は 33 中 **3**。
   その 3 のために 277 ファイル・43 skill・`bun`・**AWS Bedrock 認証**を
   常設する。Schatten は 1 人 + AI の portfolio DS であり、Bedrock 前提は
   [Schatten の目的](../../CLAUDE.md)（持ち出し可能な運用パターンの獲得）に対し
   **移植性を下げる方向**に効く。
2. **既存 4 層は AI-DLC の厚い部分と正面から重複する。** Construction /
   Operation の 14 stage はほぼ全てカバー済で、しかも Schatten 側は
   **ブロッキング CI 9 job で機械強制**されている。AI-DLC の sensor は
   advisory 既定であり、置き換えれば強度が下がる。
3. **AI-DLC が「探索」する practices が、Schatten では既に成文化済み。**
   `practices-discovery` stage の出力＝`.claude/rules/` 12 本。ここが
   最大の重複で、C（置換）が資産の破棄になる理由そのもの。
4. **同居は技術的に安全だが、認知コストは安全ではない。** hook は no-op でも、
   skill 一覧の 6 → 49 という膨張はセッションごとに効く。

### 移植する 3 つの機構

未カバーの 3 stage（feasibility / requirements-analysis / units-generation）は
**stage としてではなく、その背後の機構を既存 skill に取り込む**形で埋める。

| # | AI-DLC の機構 | 実体 | 移植先と効果 |
|---|---|---|---|
| 1 | **`produces` / `consumes` による依存の宣言** | stage frontmatter が成果物単位で入出力と `requires_stage` を宣言 → 依存グラフが**機械導出可能** | `refinement-version`。現状は issue 本文を人が読んで依存を推測している（skill の「依存シグナルの抽出」節）。issue に成果物単位の宣言を持たせれば、waves と critical path が推測でなく導出になる |
| 2 | **`review_class` によるレビュー強度の宣言** | `adversarial` / `advisory` / `none` を**成果物ごとに**宣言。`reviewer_max_iterations` で反復上限 | `/review-pr` と `refinement-issue`。現状レビューは単一強度。「この成果物は敵対的レビュー、これは助言のみ」を宣言できると、#311 の audit checkpoint と噛み合う |
| 3 | **`sensors` — gate 時に発火する決定的チェック** | `required-sections` は成果物の H2 見出し構成を検査。PR 単位ではなく **stage の gate 単位**で発火 | Schatten の gate は全て PR 単位。**成果物が書かれた直後**に shape を検査する層がない。ADR / refinement 出力の必須セクション検査が候補 |

補助的に **`scopes`（同じ方法論を depth で切り替える）** の考え方も、
`refinement-issue` / `audit-component` を「軽い/標準/徹底」で切り替える設計として有用。

## Consequences

- **良い**: 既存 4 層は無傷。`bun` / Bedrock / MCP という新しい常設依存を負わない。
  移植する 3 機構はいずれも**既存 skill の弱点にピンポイントで当たる**
  （とくに 1 は `refinement-version` の推測ベース依存抽出という既知の弱点を潰す）。
- **悪い**: AI-DLC の実運用知見（14 agent の役割分担、conductor ループ、
  human 検証ゲートの置き方）を**実地で得る機会は失う**。机上調査のみの結論である。
- **未検証**: 論点 (5) の実地検証（#492 を AI-DLC で 1 件回す）は**実施していない**。
  上記のとおり「1 件回すために engine 一式 + Bedrock が要る」ため、
  検証コスト自体が結論を裏づける側に倒れた。実地検証を行うなら
  **Schatten 本体ではなく使い捨てリポジトリ**で行うべき。

## Phase 2 への引き継ぎ

Phase 2（別 issue）で扱う範囲:

1. 機構 1（`produces` / `consumes` 宣言）を `refinement-version` に導入。
   issue テンプレート（`check:issue-templates` が既にある）への項目追加を伴う。
2. 機構 3（成果物 shape センサー）を最小形で 1 つ。ADR の必須セクション検査が候補。
3. 機構 2（`review_class`）は 1・3 の後。`/review-pr` と #311 の整理が前提。

**やらないこと**: `dist/claude/` の導入（限定導入も含む）、既存 4 層の置換・撤去、
他ハーネス（Kiro / Cursor / Copilot）への横展開。

## Review history

| Date | Reviewer | Notes |
|---|---|---|
| 2026-09-03 | Yu Ohno (engineering) | Phase 1 調査（`v2.7.0` を clone、`core/` 全体 + `dist/claude/` 実読）と結論 |
| _pending_ | _engineering_ | Phase 2 で機構 1（`produces` / `consumes`）の実装可否を再評価 |

## References

- [awslabs/aidlc-workflows](https://github.com/awslabs/aidlc-workflows) — 一次ソース。
  本調査は **tag `v2.7.0`** を対象（`v2` ブランチは存在しない）
- `core/aidlc-common/stages/<phase>/<slug>.md` — 33 stage の定義（frontmatter + 手順、計 5,570 行）
- `core/scopes/*.md` — 11 種のスコープ preset（stage の EXECUTE / SKIP 割り当て）
- `core/sensors/*.md` — 6 種の決定的センサー
- `core/hooks/aidlc-continue-workflow.ts` — Stop hook。冒頭コメントに
  "No-op outside AIDLC / A non-AIDLC session is NEVER blocked" の明示
- [How AWS's AI-DLC defines an AI-Native methodology](https://ttpsc.com/en/blog/how-aws-ai-dlc-defines-an-ai-native-methodology/) /
  [IBM: AI-DLC](https://www.ibm.com/think/topics/ai-dlc) — 二次情報（#526 本文の出典）
