# ADR-0007: コンポーネントを lv1 / lv2 の二層構造にする

- **Status**: Accepted（lv1 稼働中 / lv2 は post-1.0 で空）
- **Date**: 2026-03（採用。遡及記録）
- **Related**: #158（本 ADR 群） /
  [component-architecture.md](../../.claude/rules/component-architecture.md) §1・§6,
  [ADR-0009](ADR-0009-no-polymorphic-as.md), [ADR-0010](ADR-0010-no-layout-primitives.md)

## Context

コンポーネントには粒度の差がある: 単一責務のプリミティブ（Button / Input …）と、
それらを組み合わせた合成（例: `FormField` = Field + Label + Input + error msg）。両者を
1 つのフォルダ・1 つの依存規約に混ぜると、依存方向が曖昧になり「プリミティブが合成に依存する」
逆流が起きやすい。

## Decision

**二層に分ける**（[component-architecture.md](../../.claude/rules/component-architecture.md) §1）:

- **lv1（primitive）** — `src/components/lv1/`。単一責務の低レベルプリミティブ
  （Button / Input / Field / Select / Dialog / Tooltip …）。
- **lv2（composite）** — `src/components/lv2/`。複数 lv1 を 1 コンポーネントに合成したもの。

**依存方向は厳密に一方向**（§6）: `lib → contexts/variants → lv1 → lv2`。
`lv1 → lv2` は禁止（必要になったらそれは lv1 の誤分類 = lv2 に昇格すべき兆候）。
`lv1 → 他 lv1` は許可（Dialog が Button を構造部品として内包する等）。

## Rationale

- **検討した他案:**
  - **フラットな 1 層** — 依存方向を機械的に守れず、プリミティブが合成に逆流しうる。棄却。
  - **shadcn 素のフラット構成** — Schatten は「合成を機能として自作する」場面（FormField 等）を
    lv2 として隔離したい。1 層だと合成を compound lv1 に押し込む誘惑が生まれる。棄却。
- **二層を選んだ決め手:** 依存方向を層で表現でき、Biome の境界 lint / 依存表で機構的に守れる。

## Consequences

- (+) 依存方向が明示され、逆流を規約 + lint で防げる。
- (+) 「3 つ以上の lv1 の合成」は lv2 候補、という判断基準を持てる。
- (neutral) **lv2 は現在空**。1.0 は lv1 + CSS 契約を凍結し、lv2（lv1 の合成）はその後に
  additive な `minor` として出す（post-1.0 スコープ）。昇格基準（recurring composition →
  lv2）は最初の lv2 が来る時に別ルールで定義する（§1 で意図的に deferred）。
- (−) 層を跨ぐ barrel-export laundering（高層経由で低層に届く）は禁止。直接 import を強制。

## Review

- 2026-03 — lv1 / lv2 の二層を採用（遡及記録）。lv1 のみ稼働。
- lv2 昇格基準・lv0/lv3 の導入は post-1.0 の follow-up
  （[component-architecture.md](../../.claude/rules/component-architecture.md) §1「When this rule changes」）。
