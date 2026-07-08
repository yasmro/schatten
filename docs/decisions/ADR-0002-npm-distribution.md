# ADR-0002: npm パッケージとして配布する（copy-in ではなく）

- **Status**: Accepted
- **Date**: 2026-03（発足期。遡及記録）
- **Related**: #158（本 ADR 群） / [api-stability.md](../../.claude/rules/api-stability.md),
  [ADR-0001](ADR-0001-shadcn-base.md)（shadcn ベース）,
  [ADR-0003](ADR-0003-framework-agnostic.md)（framework-agnostic 層）

## Context

ベースの shadcn/ui は「コンポーネントをリポジトリに copy-in してから所有・改変する」
配布モデルを採る。一方 Schatten は複数の消費側（React アプリ、および将来的な
vanilla / Vue / Astro などの非 React 経路）から**同一のバージョン付き契約**として
参照される必要があった。copy-in はバージョン管理・更新伝播・公開 API 契約の凍結
（1.0 の api-stability）と相性が悪い。

## Decision

**`@yasmro/schatten` を npm パッケージとして配布する。**

- **単一パッケージのまま** tsup の multi-entry で複数サブパスを公開する
  （`.` / `./variants` / `./tokens` / `./themes/*` / `./css/*` / `./providers` /
  `./theme-init` / `./schatten.css` / `./schatten.manifest.json` …）。
- React は **`peerDependenciesMeta.react.optional = true`**。CSS 層と
  トークン / variants サブパスは React 非依存で、React を入れない消費者でも解決できる
  （[ADR-0003](ADR-0003-framework-agnostic.md)）。
- 公開面は `dist/schatten.manifest.json` に列挙され、1.0 以降は
  [api-stability.md](../../.claude/rules/api-stability.md) の破壊的変更ポリシーで凍結される。

## Rationale

- **検討した他案:**
  - **copy-in（shadcn 素の方式）** — バージョン契約・更新伝播ができず、`.st-*` の manifest
    凍結や CSP hash 固定（`THEME_INIT_SCRIPT`）のような「バイト単位の公開契約」を持てない。棄却。
  - **monorepo で React 版 / CSS 版をパッケージ分割** — 境界は綺麗になるが、発足段階では
    実需（React を入れたくない消費者の具体例）が薄く、公開・バージョニング・リリースの
    運用コストだけが先行する。**v1.x で実需が出てから**に先送りし、当面は 1 パッケージ +
    `peerDependenciesMeta.optional` + Biome の境界 lint（`src/core|variants|themes` から
    React/Radix import を禁止、[lint-rules-guideline.md](../../.claude/rules/lint-rules-guideline.md)）で
    core / react を分離する。
- **単一パッケージを選んだ決め手:** multi-entry で「framework-agnostic なサブパス」を
  提供でき、per-component CSS subpath（`@yasmro/schatten/css/<slug>`、PageSpeed 対策）も
  同一パッケージ内で完結する。境界維持は [lint-rules-guideline.md](../../.claude/rules/lint-rules-guideline.md)
  の `noRestrictedImports` scope で機構的に守る。

## Consequences

- (+) バージョン付き公開契約（manifest / api-stability / size budgets）が成立する。
- (+) 消費者は `import '@yasmro/schatten/schatten.css'` 一発で CSS を使え、React も
  optional peer なので非 React 経路が壊れない。
- (−) 単一パッケージゆえ、tree-shaking と境界維持を lint / exports で機構的に守る必要がある
  （Biome 境界 lint、`peerDependenciesMeta`、multi-entry）。
- (future) monorepo split は v1.x の実需待ち。判断を本 ADR に固定しておく。

## Review

- 2026-03 — 発足時に npm 配布を採用（遡及記録）。
- v0.9.0（#291）— multi-entry exports と per-component CSS subpath を確定。
