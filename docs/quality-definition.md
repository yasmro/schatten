# Quality Definition

> 本書は、Schatten が何を品質として保証し、それを何で確かめているかを定める。
> コンポーネントを足す人・直す人（人と AI）と、そのレビュアーが、
> 「この変更は品質として OK か」を判断するときの基準にする。
>
> 個々の書き方は `.claude/rules/` の各文書が決めている。本書はそれらを
> 「何を保証するか」の観点で並べ直したもので、新しい決まりは足さない。
> 本書とルールの文書が食い違ったら、ルールの文書を正として本書を直す。
> コマンドごとの一覧は [CONTRIBUTING.md の Quality gates](../CONTRIBUTING.md#quality-gates) にある。
>
> 置き場所について: 本書は実装者の correctness 違反を新しく定めないので、
> `.claude/rules/` の採用基準を満たさない。[brand-concept.md](brand-concept.md) と
> 同じく `docs/` に置く。
>
> 記述は develop の `ab6e475`（v1.2.0 の後）時点。

---

## 要旨

Schatten の品質とは次の2つがそろっていることを言う。

1. 保証することが、観点ごとに決まっていて、それぞれに機械で確かめる仕組みがある
2. 仕組みで確かめられない所と、例外にした所が、決まった場所に理由付きで書いてある

観点は7つあり、2つの層に分かれる。コンポーネントごとに確かめる「コンポーネントの品質」（観点 1〜5）と、ライブラリ全体で一度に確かめる「ライブラリの品質」（観点 6・7）である。

また、OK かどうかは3つの段階で判断する。「必要なテストケースの用意」「全テストケースの成功」「目視によるレビュー」の3つで、機械が確かめるのは2つ目までである。3つ目は人が判断する。

---

## 1. コンポーネントの品質（観点 1〜5）

コンポーネント1つずつについて、次の5つを保証する。

「CI 失敗時の挙動」の列は、確かめるテストやチェックが失敗したときに PR がどうなるかを表す。develop には GitHub の ruleset（`protect-default`）で6つの必須チェック（`lint`・`typecheck`・`test`・`size`・`a11y`・`audit`）が指定されていて、このどれかが失敗した PR はマージできない。それ以外のジョブ（`vrt`・`manifest`・`changeset`）は、失敗しても PR をマージできる。

| # | 観点 | 保証すること | 確かめる仕組み | CI 失敗時の挙動 | 決めている文書 |
|---|---|---|---|---|---|
| 1 | 振る舞い | props のとおりに DOM と ARIA の属性が出力され、イベントが発火する | 単体テスト（Vitest、jsdom）。種類ごとの必須ケースがある。CSS で決まる見た目と、本物の入力でしか起きない動きは、本物のブラウザで動く単体テスト（`*.browser.test.tsx`）で確かめる | マージできない（`test`）。ただし、必須ケースの一部（`ref`・`data-testid`・`role`）が欠けていても警告だけで、ジョブは成功する（#474） | [testing-guideline](../.claude/rules/testing-guideline.md) |
| 2 | アクセシビリティ | role・名前・キーボード・状態の `aria-*` | 単体テストの `getByRole(role, { name })`。VRT の story × テーマごとの axe（WCAG 2.1 A/AA） | マージできない（`test`・`a11y`） | [component-architecture §8](../.claude/rules/component-architecture.md#8-accessibility-contract) |
| 3 | 見た目 | story ごとに、light と dark の両方で、見た目が変わっていない | VRT のスクリーンショット。対象外の story には理由のコメントがあるか（`audit:coverage` の `vrt.roster`） | スクリーンショットが違うときは `vrt` のジョブが失敗するが、マージはできる。理由のない対象外の story があるとマージできない（`audit`） | [vrt-spec-guideline](../.claude/rules/vrt-spec-guideline.md) |
| 4 | 本物のブラウザでの操作 | 開く・閉じる・選ぶ・消すが、本物のポインタで動く | Playwright の操作テスト。区分 C/D の lv1 と、操作のある lv2 に必要 | テストがないとマージできない（`audit`）。テストが失敗したときは `vrt` のジョブが失敗するが、マージはできる | [vrt-spec-guideline §区分 C/D](../.claude/rules/vrt-spec-guideline.md#区分-cd-js-必須--a-playwright-interaction-test-is-required) |
| 5 | CSS だけで使ったときの一致 | React で描いたものと、`.st-*` を書いた HTML の見た目が同じ | parity の VRT（区分 A/B の lv1）。配布物の CSS で描く VRT（`CSSApiDist`） | parity の story がないとマージできない（`audit`）。見た目が違うときは `vrt` のジョブが失敗するが、マージはできる | [css-api](../.claude/rules/css-api.md)、[vrt-spec-guideline §Parity](../.claude/rules/vrt-spec-guideline.md#parity-stories--when-to-write-one-when-to-skip) |

観点 4 と 5 はコンポーネントの区分で要るかどうかが決まる。区分 A/B は素の HTML でも動くので 5 が要り、区分 C/D は JavaScript がないと動かないので 4 が要る。lv2 は React 専用なので 5 は要らず、操作のあるもの（`LV2_INTERACTIVE`）だけ 4 が要る。

観点 1 の単体テストのほとんどは jsdom で動くので、CSS が読み込まれない。そのため、色や大きさのように CSS で決まるものは、本物のブラウザで動く単体テスト（`*.browser.test.tsx`、#650）か、観点 3 の VRT、観点 7 のテストで確かめる。使い分けは [testing-guideline](../.claude/rules/testing-guideline.md#jsdom-or-a-real-browser) にある。

## 2. ライブラリの品質（観点 6・7）

次の2つは、どのコンポーネントにも同じように関わるので、ライブラリ全体で一度に確かめる。列の意味は §1 の表と同じである。

| # | 観点 | 保証すること | 確かめる仕組み | CI 失敗時の挙動 | 決めている文書 |
|---|---|---|---|---|---|
| 6 | 公開 API | props の型、`.st-*` のクラス、CSS 変数、モジュールの形式、サイズが、予告なく変わらない | 型チェック、Radix の型の境界テスト、公開する CSS 変数の登録（`check:registrar`）、ESM だけであることの確認、size-limit、manifest の差分（`check:manifest`）、changeset | 型チェック・境界テスト・CSS 変数の登録・ESM の確認・サイズは、マージできない（`typecheck`・`test`・`lint`・`size`）。manifest の差分と changeset は、ジョブは失敗するが、マージはできる | [api-stability](../.claude/rules/api-stability.md) |
| 7 | テーマと状態の色 | トークンが意図した値を指し、状態に合わせて色が変わっても文字が読める | `resolution.test.ts`（トークンが指す値と、状態の文字色のコントラスト）、`solid-contrast.test.ts`（塗りの上の文字のコントラスト、すべての季節で）、`state-color-inheritance.test.ts`（子要素の色が親の状態に従うか） | マージできない（`test`） | [theme-architecture](../.claude/rules/theme-architecture.md)、[state-token-guideline](../.claude/rules/state-token-guideline.md)、[css-api §State-driven color](../.claude/rules/css-api.md#state-driven-color-lives-on-the-block-sub-elements-inherit-currentcolor) |

コンポーネントの PR でも、この2つの観点のテストが失敗することがある。たとえば、新しいクラスを足せば観点 6 の manifest が変わり、子要素の色を固定すれば観点 7 の `state-color-inheritance.test.ts` が失敗する。層を分けるのは、確かめる場所が違うからで、コンポーネントの PR で気にしなくてよいという意味ではない。

## 3. OK かどうかを判断する3つの段階

観点ごとに、次の3段階で OK かを判断する。

| 段階 | 意味 | 誰が確かめるか |
|---|---|---|
| 1. 必要なテストケースの用意 | 必要なテストのファイル・story・spec がそろっている | 機械。`audit:coverage`（`audit` のジョブ。必須チェック）と、編集中のフック（警告だけ） |
| 2. 全テストケースの成功 | テストがすべて成功している | 機械。CI |
| 3. 目視によるレビュー | 必要なケースを、テストがきちんと確かめている | 人。レビュー |

たとえば Select の観点 4 は、操作テストが1件あるので段階 1 を満たし、CI で成功しているので段階 2 も満たす。しかし、開く・選ぶ・キーボードで動かす・閉じる、のどこまでを確かめれば十分かは、機械では判断できない。これは、段階ごとに確かめる人が違うことの例になっている。

段階 3 を判断する材料として、Storybook の Tests タブが、開いているコンポーネントのテストの名前を観点ごとに並べて見せる（#641）。タブが示すのは段階 1 までで、テストが成功しているか（段階 2）は CI を見る。

## 4. 例外は、決まった場所に理由を書く

保証を外すことは認める。ただし、外す場所と書き方を決めておき、理由のない例外を作らない。今ある例外は次の4種類である。

| 例外 | 書く場所 | 認める理由 |
|---|---|---|
| axe のルールを外す | その story の spec の `disableRules([...])` と、story の `parameters.a11y` の両方 | `color-contrast`（意図したデザイン上の例外）と `aria-hidden-focus`（Radix の popper を開いたとき）の2つだけ |
| story を VRT の対象から外す | spec の `stories` 配列に `// '<id>' — <理由>` | Playground、ほかの story で見た目を確かめている、描画が毎回変わる、の3つ |
| 子要素の色を固定する | `state-color-inheritance.test.ts` の `EXEMPT` | `region`・`specificity`・`a11y` の3つ |
| parity の VRT を作らない | `scripts/audit-coverage.mjs` の `PARITY_EXEMPT` | 区分 C/D であること |

この4つ以外の形で保証を外すこと（ファイル全体で axe を止める、理由を書かずに story を外す、など）は、品質の低下として扱う。

## 5. わかっている穴

今の仕組みでは確かめられていない所を、次に挙げる。穴があること自体は認める。ただし、見つけた穴はここに書き、issue で追う。

| 観点 | 穴 | 対応 |
|---|---|---|
| 1 | 必須ケースのうち、種類ごとのもの（フォーム部品の制御・非制御など）は、テストがあるかを機械で調べていない | テストの名前を並べて人が見る（#641） |
| 3 | VRT は 1% までの差を許すので、小さな要素の変化を見逃す | story の作り方で補う（[vrt-spec-guideline §Sub-threshold drift](../.claude/rules/vrt-spec-guideline.md#sub-threshold-drift--a-stale-baseline-trap)）。根本の対応は #237 |
| 3・5・6 | `vrt`・`manifest`・`changeset` のジョブは必須チェックではないので、失敗しても PR をマージできる。見た目の変化や、公開 API の変化に changeset がないことを、レビューで見落とすと、そのまま develop に入る | なし |
| 7 | Special のテーマが、許された CSS 変数だけを上書きしているかを確かめていない。`scripts/check-theme-allowlist.mjs` は中身のない仮置きで、CI からも呼ばれていない | レビューで確かめている（[theme-architecture §Allowlist](../.claude/rules/theme-architecture.md#allowlist-mechanism-design--implementation-in-v070)） |
| 6 | `peerDependencies` は React 18 と 19 を受け入れると宣言しているが、CI は React 19 でしか動かしていない | なし |
| — | ルールの文書に書いた外部ライブラリの動きを、確かめる仕組みがない。#346 から #638 まで、Storybook の a11y パネルが使えないことに気づけなかった | 版上げのときに読み直す手順を、prepare-release のスキルに足した（#639） |

## 6. 保証しないこと

次のことは Schatten の品質の範囲に入れない。

- Chromium 以外での見た目。スクリーンショットと axe は Chromium だけで撮っている。WebKit は DateCalendar と DatePicker の操作テストを手元で流すだけである
- lv2 を素の HTML で使うこと。lv2 は React 専用で、クラスは React の利用者が上書きするために公開している（[lv2-composition-guideline §5.0](../.claude/rules/lv2-composition-guideline.md#50-lv2-is-react-only)）
- 区分 C/D の lv1 を素の HTML で動かすこと。クラスは公開しているが、開く・閉じるなどは JavaScript がないと動かない
- primitive の CSS 変数（`--vermillion-*` など）。公開 API ではないので、値も名前も予告なく変わる（[api-stability](../.claude/rules/api-stability.md#what-is-not-public-api)）
- 利用者が組み合わせた画面の品質。Schatten が保証するのは部品の品質までで、部品を組み合わせた画面のアクセシビリティや見た目は、利用者が確かめる

## 7. 本書を直すとき

- 観点に新しい仕組みを足したとき、または仕組みを外したときは、§1・§2 の表を直す
- 例外の種類を足すときは、§4 に足す。足す前に、ルールの文書で認められているかを確かめる
- 穴を埋めたときは、§5 から消す。新しい穴を見つけたときは、issue を作って §5 に足す
- 冒頭の「記述は … 時点」を、直した時点の develop に合わせる

---

## まとめ

Schatten はコンポーネントごとに5つ、ライブラリ全体で2つの観点を保証する。機械が確かめるのは「必要なテストケースの用意」と「全テストケースの成功」までで、十分かどうかは「目視によるレビュー」で人が判断する。保証を外すときは §4 の4つの場所に理由を書き、確かめられていない所は §5 に挙げて issue で追う。この3つ（観点・段階・例外と穴の書き方）がそろっていることを、Schatten の品質と呼ぶ。
