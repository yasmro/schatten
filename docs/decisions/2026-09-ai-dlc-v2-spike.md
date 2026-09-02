# AWS AI-DLC v2 — 上流工程の「枠組みを疑う」役割に価値があり、本体導入は不要

- **Status**: Accepted
- **Date**: 2026-09-03
- **Related**: [#526](https://github.com/yasmro/schatten/issues/526)（本 spike / Phase 1） /
  [CLAUDE.md](../../CLAUDE.md)（既存 4 層） /
  [refinement-issue](../../.claude/skills/refinement-issue/SKILL.md),
  [refinement-version](../../.claude/skills/refinement-version/SKILL.md)（比較対象・移植先） /
  検証題材: #492 / 隣接: #425
- **調査方法**: `awslabs/aidlc-workflows` **tag `v2.7.0`** を clone し、
  **Schatten develop の使い捨てクローンに実際にインストールして 1 件回した**（机上調査ではない）

## Context

AWS の AI-DLC v2 を Schatten の開発フローに取り込めるかを検討した。
問いは「導入するか」ではなく**「既存フローのどの穴を埋めるか / 埋めないか」**。

**本 ADR は 2 回目の調査結果である。** 1 回目（PR #536、クローズ済み）は机上調査のみで
「インストールせず 3 機構だけ移植」と結論したが、(a) Bedrock を必須と誤認してコストを過大評価、
(b) 33 stage の価値判定を分類基準なしの主観で実施、(c) 目的 A（学習 / 素振り）を構造的に
満たせない結論だった、という欠陥があり撤回した。今回は #526 の論点 (5)（実地検証）を飛ばさない。

## 実験の設計

- **環境**: Schatten `develop` の使い捨てクローンに `dist/claude/` をインストール。
  Schatten 本体には一切触れていない。`bun` は scratchpad に隔離（`~/.zshrc` の改変は差し戻し）。
- **題材**: **#492（lv2 promotion criterion + 作成規範の策定）** — #526 が指定した候補。
  上流工程（Ideation / Inception）が主で、既存フローが最も薄い領域。
- **対照**: #492 には既に `refinement-issue` による詳細設計（444 行 / 22,787 字）が入っている。
  **同一課題に対する既存フローの出力**が存在するので直接 A/B 比較になる。
- **統制**: AI-DLC 側のエージェントには **#492 とその設計を読むことを禁止**し、独立生成させた。
- **比較軸**（#526 の指定どおり事前固定）: 所要時間 / 生成物の質 / 既存 rule との整合 / 人間の介入回数。

## 実測結果

### セットアップ（4 つの落とし穴、うち 1 つは無音）

| # | 事象 | 重大度 |
|---|---|---|
| 1 | `bun` のインストーラが **`~/.zshrc` を無断改変** | 低（可逆） |
| 2 | **`cp -R` が `.claude/settings.json` を上書きし、Schatten の hook 2 本が無音で消滅** | **高** — 上流手順は「マージせよ」だが失敗が検知されない |
| 3 | `.claude/` だけコピーすると doctor が失敗（`aidlc/` の同梱漏れ） | 低（doctor が検知） |
| 4 | rule 配信は `aidlc-deliver-stage-rules.ts`（PreToolUse hook）前提。フック外から駆動すると手でブリーフに添付が必要 | 中 |

**`--doctor` は Bedrock なしで 50/50 パス。** 1 回目の「AWS Bedrock がハード前提」は**誤り**だった
（上流原文は "to run the framework **as shipped**"、engine 側の Bedrock 参照は 87 ファイル中 2 つ）。

### スケールダウンは実際に機能する

11 preset のどれも当てはまらず（規範定義に対応する scope 語彙がない）、composer が
**custom scope を合成**した（最近傍 `poc` が距離 3、採用閾値 2 超）。結果は
**33 stage → 11 EXECUTE / 22 SKIP、承認ゲート 8**。各 SKIP に個別の理由が付く。

### 生成物 — 既存フローが勝つ領域と、AI-DLC が勝つ領域が明確に分かれた

**既存フロー（`refinement-issue`）が深い領域 — 実装の具体性**

同じ tooling の穴について、両者の記述:

| | AI-DLC (`requirements-analysis`) | #492 の既存設計 |
|---|---|---|
| `audit-coverage.mjs` の lv2 素通し | L741–745 を特定 | **L741–745 と L819–826 の両方** |
| 波及ファイル | 言及のみ | **11 ファイルの具体的変更表** |
| 非自明な点 | — | `discoverLv1WithCss()` の throw 非対称 / `.storybook/preview.tsx` は変更不要でその理由 / size-limit 引き上げは additive surface で changeset 必要 |

ConfirmDialog の判定も、既存設計には **G1–G4 ゲート表 + 各コンポーネント判定表 +
「#124 の G3 が薄い件」**があり、AI-DLC の同趣旨の指摘より精密。
ADR-0010 との線引きも既存設計に専用セクションがある。

**AI-DLC が勝つ領域 — 枠組みそのものを疑う**

既存設計が出せていない、**検証済みの指摘 4 件**:

| # | 指摘 | 検証 |
|---|---|---|
| 1 | 初回 3 件は既存合成の**昇格ではなく新規設計**で、task が継承する「頻出合成を昇格させる」枠組み自体と矛盾 | ✅ `ConfirmDialog` / `EmptyState` / `PageHeader` は `src/` `docs/` `examples/` に**参照ゼロ**。既存設計は ConfirmDialog の G1（反復性）を「OK」としているが根拠がない |
| 2 | **PageHeader は基準を FAIL** させるべき（`Patterns/Layout` レシピへ） | 既存設計は 3 件とも出荷前提。実質的な設計上の異論 |
| 3 | `component-architecture.md` §2「複数スロット注入なら lv2」が既存 lv1 の実態と矛盾 | ✅ §2 は L76-77 に存在、`Card` は **6 パートで lv1** |
| 4 | 既存ドキュメントのドリフト 2 件 | ✅ `api-stability.md:538` = "all 18 lv1 components"（**実測 25**）/ `PARITY_EXEMPT` のコメント "(7 components)"（**実際は 8 要素**） |

さらに §1 が挙げる lv2 の代表例 `FormField` が、AI-DLC の新基準の失格条件に自分で該当する
（`Field` lv1 が既にほぼ提供している）という指摘も出た。

**この差は偶然ではなく構造由来**である。AI-DLC の inception phase rule は
「アーキテクチャ決定には**最低 2 案の trade-off 分析**を要求」「ADR は Context / Decision /
Consequences / **Alternatives Rejected** を必ず含む」を機械的に課す。上の指摘 1・2 は
その「他の案は？」「本当にこの枠組みでよいか？」の強制から出ている。

### コスト

| 軸 | AI-DLC | 既存フロー |
|---|---|---|
| **人間の必須ゲート** | **8**（33 中 11 EXECUTE。`summary_confirmation: required` は 33 stage 中 27 で、プロトコル上「推測・自動承認・スキップ不可」） | **1**（起動 1 回 → 出力 1 本 → 最後にレビュー） |
| **所要時間** | **48 分**（compose + 2 stage、11 stage 中 2 本） | 1 回の起動 |
| **トークン** | **825,185**（subagent 3 本） | 1 回分 |
| **生成量** | 2,617 行 / 131,776 字（7 artifact、2 stage 分） | 444 行 / 22,787 字（完成設計） |

### 同居コストの実態

- **hook は安全**。`aidlc-continue-workflow.ts` 冒頭に "No-op outside AIDLC / **A non-AIDLC
  session is NEVER blocked**"。`state-transition-guard` がブロックするのは `aidlc-state.ts` の
  遷移動詞のみ。ワークフロー非アクティブ時、Schatten の通常作業は無干渉。
- **名前空間**: `.claude/` に 277 ファイル / 5.8 MB。rule 12→13、**skill 6→48**。
- **導入作業の実体はファイル数ではない** — `team.md` / `project.md`（空テンプレート、約 50 行）に
  Schatten の規約を書くこと。同梱 `org.md` の既定は Schatten と 5 点で食い違う
  （trunk-based→main / worktree base main / Prettier / ESLint / 80% coverage floor。
  Schatten は `develop → main`、Biome、[coverage 目標を明示的に拒否](../../.claude/rules/testing-guideline.md)）。
  **埋まっている層が勝つ**ので解消可能（"populated layer wins"）。
- **ただし罠がある**: composer は「Schatten の規約は暗黙知ではなく明文化済み」という**正しい理由**で
  `practices-discovery` を SKIP する。それは `team.md` を埋める唯一の自動経路なので、
  SKIP すると **hardcoded default（base `main` / squash）が適用**される。
  フレームワークは検知する（`PRACTICES_SECTION_EMPTY` + doctor）が、導入者が手で埋める必要がある。

### 交絡（正直に記録する）

composer / stage agent は**本セッションのサブエージェント＝同一モデル**として動き、Schatten の
実ファイルを読んだ。出力の質が *AI-DLC の方法論* に由来するのか *能力あるモデルが明文化された
rule を読んだこと* に由来するのかは、この実験では完全には切り分けられていない。
ただし指摘 1・2 が「最低 2 案」「Alternatives Rejected」という**機械的強制の直下から出ている**点は、
方法論側の寄与を示唆する。

## Decision

**`dist/claude/` を Schatten 本体にはインストールしない。**
**代わりに (a) 長期保持する sandbox クローンで AI-DLC を「上流決定のセカンドオピニオン」として使い、
(b) その価値の源泉である 2 つの規律を既存 skill に移植する。**

目的は #526 の **A（学習）+ B（穴埋め）**。C（置換）は不採用。

### 理由

1. **価値は実在し、位置が特定できた。** AI-DLC は*枠組みを疑う*役割で既存フローに勝ち、
   検証済みの見落とし 4 件を出した。1 回目の「価値なし」寄りの結論は誤りだった。
2. **ただしその価値は本体インストールを必要としない。** 本実験は使い捨てクローンで得た。
   hook が非アクティブ時 no-op である以上インストールしても害は小さいが、**得るものもない** —
   AI-DLC が読むのはリポジトリのファイルであって、リポジトリ内に自分がいる必要はない。
3. **本体に入れると失うものがある。** skill 6→48 の膨張はセッションごとに効く。加えて
   Schatten の資産価値は[持ち出し可能な運用パターン](../../CLAUDE.md)であり、
   `.claude/` に 5.8 MB のベンダーフレームワークが同居するとその主張が薄まる。
4. **Construction / Operation は重複**（14 stage）。しかも Schatten 側はブロッキング CI 9 job、
   AI-DLC の sensor は**実測で 6 種すべて `advisory` 既定**。置き換えれば強度が下がる。
5. **日常フローには重すぎる。** 承認ゲート 8 / 48 分 / 825k トークンは、
   `refinement-issue` 1 回と釣り合わない。**常用ではなく随時のセカンドオピニオン**が適正。

### (a) sandbox 運用

`schatten-aidlc` の長期クローンを 1 つ持ち、`develop` から随時 refresh する。
セットアップは一度きり（`settings.json` マージ、`team.md` / `project.md` に Schatten の規約、
`org.md` の 5 点の食い違いを上書き）。上流の重い決定（新 rule の策定、マイルストーン設計、
アーキテクチャ判断）でセカンドオピニオンが欲しい時に回す。

### (b) 移植する 2 つの規律

| # | 規律 | 移植先 | 根拠 |
|---|---|---|---|
| 1 | **「最低 2 案の trade-off + Alternatives Rejected」を成果物形式として強制** | `refinement-issue` / `docs/decisions/README.md` の必須セクション | 本実験の指摘 1・2 はこの強制の直下から出た。Schatten の decision log は形式に "Rationale" を含むが、**却下案の明示を必須にしていない** |
| 2 | **`produces` / `consumes` の宣言による依存グラフ** | `refinement-version` | エンジンは 122 artifact + edge を機械検証し、`domain-design` の単独実行を `requirements` 未在で正しく拒否した。`refinement-version` は現状 issue 本文から依存を**推測**している |

`review_class`（レビュー強度の成果物ごとの宣言）は候補として残すが、1・2 の後。

## Consequences

- **良い**: 既存 4 層は無傷。value は sandbox で取れる。移植する 2 規律は
  既存 skill の実証された弱点（却下案が残らない / 依存が推測ベース）に当たる。
  本実験の副産物として **Schatten 側の実在する欠陥 4 件**（§2 の矛盾、`18 lv1` ドリフト、
  `PARITY_EXEMPT` コメント、lv2 が CI 素通し）が判明し、これは即座に修正できる。
- **悪い**: sandbox は使うたびに refresh の手間がある。本体インストールなら
  `/aidlc` が常に手元にある。**使用頻度が上がれば本判断は見直すべき**（判断材料: 半年で 3 回以上
  回すなら本体導入を再評価）。
- **限界**: 11 EXECUTE stage 中 **2 本**しか回していない（compose + requirements-analysis +
  domain-design）。Construction / Operation は未実行だが、そこは既存資産が厚く重複と判定済み。
  交絡（同一モデル）は上記のとおり未解消。

## Phase 2 への引き継ぎ

1. **本実験が見つけた Schatten 側の欠陥を直す**（AI-DLC とは独立に価値がある）:
   `component-architecture.md` §2 の矛盾 / `api-stability.md:538` の "18 lv1" → 25 /
   `PARITY_EXEMPT` コメントの "(7 components)" → 8 / lv2 が `audit-coverage` を素通しする件（#492 に反映）
2. **規律 1（Alternatives Rejected の必須化）** を `docs/decisions/README.md` の Format と
   `refinement-issue` に導入
3. **規律 2（`produces` / `consumes`）** を `refinement-version` に導入
4. **sandbox の常設**（`schatten-aidlc`）とセットアップ手順の記録

**やらないこと**: `dist/claude/` の本体導入、既存 4 層の置換・撤去、他ハーネスへの横展開。

## Review history

| Date | Reviewer | Notes |
|---|---|---|
| 2026-09-03 | Yu Ohno (engineering) | 1 回目（机上のみ）を撤回し、実走で再実施。#492 を題材に A/B 比較 |
| _pending_ | _engineering_ | 半年後、sandbox の使用頻度を見て本体導入を再評価 |

## References

- [awslabs/aidlc-workflows](https://github.com/awslabs/aidlc-workflows) **tag `v2.7.0`**
  （`v2` はブランチではなく tag 系列）
- `core/aidlc-common/stages/<phase>/<slug>.md` — 33 stage 定義（5,570 行）
- `core/scopes/*.md` — 11 preset / `core/sensors/*.md` — 6 種（全て `advisory` 既定）
- `core/hooks/aidlc-continue-workflow.ts` — "A non-AIDLC session is NEVER blocked"
- `core/knowledge/aidlc-shared/rules-reading.md` — 層モデル（"populated layer wins" /
  `PRACTICES_SECTION_EMPTY`）
- 実走の生成物（2,617 行 / 131,776 字）は使い捨てクローン内。本 ADR に要点を転記済み
