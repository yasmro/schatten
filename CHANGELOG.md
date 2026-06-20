# @yasmro/schatten

## 0.12.0

### Minor Changes

- [#411](https://github.com/yasmro/schatten/pull/411) [`7666aba`](https://github.com/yasmro/schatten/commit/7666aba58cb615ef89fb57ea01a1d8dc7d4f6c97) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: Callout / Toast のアイコン整列とアクション/クローズのレイアウトを調整。

  - **アイコンの垂直中心を title の 1 行目に合わせた。** title+body（Toast は
    title+description）の multi-line regime で、アイコン（1.25rem）が title の
    line-box（0.875rem×1.25 = 1.09375rem）より背が高いため、従来の `flex-start`
    - `margin-top: 0.125rem` ではアイコン中心が title 中心より約 3px 下にずれて
      いた。`margin-top: calc((0.875rem * 1.25 - 1.25rem) / 2)` で title の 1 行目に
      乗せる（icon + title を `align-items: center` の行で囲ったのと数学的に等価、
      DOM 再構成なし）。Toast は regime トリガを `:has(.st-toast__description)` →
      `:has(.st-toast__title):has(.st-toast__description)` に変更して Callout と
      ミラー（description 単独の Toast はアイコンが 1 行にセンタリングされる）。
  - **action を body の下へ移動。** `.st-callout__action` / `.st-toast__action`
    は trailing slot（右）ではなく `__content` 列内の body 下
    （`align-self: flex-start`）に描画。
  - **close (X) を専用ボタン化。** 従来は `<Button size="sm" icon={X}>`
    （= `.st-btn--sm.st-btn--icon-only`、2rem 角）を流用していたが text-button の
    padding でコーナーでは過大に見えたため、専用の `.st-callout__close` /
    `.st-toast__close`（1.5rem 角・`currentColor` で tone 非依存・DS の focus
    ring）に置換。`.st-btn` は付与しない。multi-line regime では close を
    `margin-top: -0.25rem` 上げて title 行／コーナーに寄せる（single-line は
    `align-items: center` でセンタリング維持）。

  クラス追加: `.st-callout__close` / `.st-toast__close`（additive）。
  `.st-callout__action` / `.st-toast__action` は配置が trailing → below-body に
  変わる（既存クラスの意味変更）。React の `action` / `onClose` props は不変。
  Sonner swipe 対策（`.st-toast__close svg { pointer-events: none }`、[#318](https://github.com/yasmro/schatten/issues/318)）は
  専用ボタンへ引き継ぎ済み。Callout / Toast の VRT baseline 再生成が必要。

- [#403](https://github.com/yasmro/schatten/pull/403) [`6ba8074`](https://github.com/yasmro/schatten/commit/6ba8074b12907b67759186b336e8dca4578b669c) Thanks [@yasmro](https://github.com/yasmro)! - feat(lv1): add DropdownMenu component (Radix-based compound, closes [#41](https://github.com/yasmro/schatten/issues/41))

  トリガーからメニューを表示する複合コンポーネント。`@radix-ui/react-dropdown-menu`
  ラッパー。`DropdownMenuItem`(`variant` `default`/`destructive`、`inset`、`icon`)、
  `CheckboxItem`、`RadioGroup`/`RadioItem`、`Sub*`(サブメニュー)、`Label` /
  `Separator` / `Group` / `Shortcut` をフルセットで同梱。`区分 D`(JS 必須)のため
  parity は持たず、manifest + class API unit test + React VRT で契約を担保。

  CSS API: adds `.st-dropdown-menu__content` / `__sub-content` / `__item` /
  `__item--destructive` / `__item-icon` / `__checkbox-item` / `__radio-item` /
  `__item-indicator` / `__label` / `__separator` / `__group` / `__shortcut` /
  `__sub-trigger` / `__sub-trigger-chevron`, served at
  `@yasmro/schatten/css/dropdownmenu`.

- [#412](https://github.com/yasmro/schatten/pull/412) [`816ea9c`](https://github.com/yasmro/schatten/commit/816ea9cb8101cf6c380353da74553d7bbe893af7) Thanks [@yasmro](https://github.com/yasmro)! - a11y: foreground-muted / foreground-subtle のコントラストを WCAG 2.1 AA に合わせて引き上げ ([#344](https://github.com/yasmro/schatten/issues/344) / [#147](https://github.com/yasmro/schatten/issues/147) Phase 2)。

  - `--color-foreground-muted` を 1 ink rung 暗く（light `ink-light`/sumi-400 → `ink-medium`/sumi-600、dark alabaster-500 → alabaster-400）。小テキストで ≥ 4.5:1 を満たす。
  - `--color-foreground-subtle` を 1 ink rung 暗く（light `ink-subtle`/sumi-300 → 新設 `ink-faint`/sumi-500、dark alabaster-600 → alabaster-500）。三次テキスト段は維持しつつ大テキスト 3:1 を満たす。subtle は小/本文テキスト不可（大・付随テキスト専用）として明文化。
  - 変数名は不変のため CSS API surface（manifest）に変更なし。トークン値の更新のみ。

- [#409](https://github.com/yasmro/schatten/pull/409) [`cc68f5c`](https://github.com/yasmro/schatten/commit/cc68f5c8711a43e8c9da45e02d70fb0bb5357137) Thanks [@yasmro](https://github.com/yasmro)! - feat(lv1): Popover コンポーネントを追加

  クリックでトリガーするポップオーバーパネル（日付/カラーピッカー・フィルター設定などの土台）。`@radix-ui/react-popover` ベースの compound primitive で、`Popover` / `PopoverAnchor` / `PopoverTrigger` / `PopoverContent` / `PopoverClose` を公開。既定は非モーダル（`modal={false}` 透過）。

  CSS API: `.st-popover__content`（portal パネル）を追加。状態は `[data-state]` / `[data-side]` で表現し、`@yasmro/schatten/css/popover` サブパスで配信。`components/lv1 (all)` の size budget を 60 KB → 64 KB に引き上げ（新規コンポーネント + Radix 依存追加に伴う additive な増分）。

- [#413](https://github.com/yasmro/schatten/pull/413) [`05ee2c7`](https://github.com/yasmro/schatten/commit/05ee2c75b231732bac9a97971a247e96b6e50c6d) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: state token に `emphasis` rung を新設し、淡背景/白地の色文字を WCAG 2.1 AA small-text 4.5:1 に引き上げ ([#344](https://github.com/yasmro/schatten/issues/344) Phase B / [#147](https://github.com/yasmro/schatten/issues/147) Phase 2)。

  state token の 4-token 形（`base` / `hover` / `foreground` / `subtle`）を **5-token 形**に拡張し、5 state（`error` / `success` / `warning` / `info` / `destructive`）それぞれに `--color-{state}-emphasis` を追加。

  - **新トークン**: `--color-{state}-emphasis`（light `-700` / dark `-400`）= 「淡背景・白地の読みやすい色文字」専用。`base`（`-600`/`-500`）は塗り・ボーダー・アイコンが兼用していたが、文字としては subtle(`-50`)・白地で 4.2〜4.4:1 と AA small-text 4.5 未達だった。`emphasis` は文字役を `base` から分離し、塗りを暗くせずに AA を満たす。値は `hover` と一致するが意味が別（文字 vs インタラクティブ塗り）— `destructive` vs `error` と同じ same-value / distinct-name 方針。
  - **コンポーネント影響**: 非 solid 面の色文字を `base` → `emphasis` に統一 — Callout / Toast / Badge の `subtle`（および Badge `outline`）の色文字、`Text color="error|success|warning|info"` の standalone、`Field` / `FieldSet` の error メッセージ・required `*`、`DropdownMenu` の destructive item。塗り・ボーダー・`foreground`（solid の白文字）・`subtle` 背景は不変。
  - **solid は意図的に据え置き**: 「白文字・鮮やかな塗り・4.5:1」の trilemma は `-600`/`-500` 塗りでは同時成立しないため、solid は高強調 treat の AA 例外として維持（意味は色のみでなくアイコン＋ラベルで担保 / WCAG 1.4.1）。`inverted-foreground-muted`/`-subtle`（彩色塗り上の淡い白系文字）も同根で incidental/large 専用と明文化。
  - `--color-destructive-emphasis` は `DropdownMenu` destructive item（メニュー面の赤テキスト）が消費。`Button(destructive)` は solid（白 `foreground`）のため emphasis 非消費。
  - manifest に CSS 変数 5 件を追加（クラス・状態属性は不変）。`resolution.test.ts` に leaf 解決と `state emphasis WCAG contrast` の AA テストを追加。
  - VRT baseline は **色文字が閾値を超えて変化する分だけ**を faithful 再撮影（Badge / Callout subtle 系 / Toast subtle 系 / Text colors・state-colors・parity の計 33 件 + Color story の emphasis swatch 行追加 2 件）。Callout/Toast の solid 系・neutral は byte 一致で不変。CSSApi / CSSApiDist 等の集約 docs は emphasis 変化が `maxDiffPixelRatio` (1%) 閾値以下で既存 baseline のまま pass（docs の fullPage 再撮影は sub-pixel ノイズを持つため、guideline の mirror trap を避け再撮影しない）。コントラスト保証は `resolution.test.ts` の AA テストが担保。

- [#404](https://github.com/yasmro/schatten/pull/404) [`403091a`](https://github.com/yasmro/schatten/commit/403091a03a9158540644b30e13d342f354bdcaf5) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: Tabs コンポーネント（lv1）を追加。`@radix-ui/react-tabs` ベースの
  compound（`Tabs` / `TabsList` / `TabsTrigger` / `TabsContent`）。`.st-tabs` /
  `.st-tabs__list` / `.st-tabs__trigger` / `.st-tabs__content` クラスと、
  アクティブ表示の `[data-state="active"]`・縦横レイアウトの `[data-orientation]`
  state hook を新規公開（closes [#44](https://github.com/yasmro/schatten/issues/44)）。

  単一スタイルの line 型（アクティブ tab を foreground 下線、非アクティブを muted）。
  `orientation`（horizontal/vertical）と `activationMode`（automatic/manual）を
  公開 API として持つ。orientation のスタイル分岐は、List/Trigger が Root の値を
  prop で受け取れない compound 構造のため Radix の `[data-orientation]` 属性
  セレクタで行う（css-api.md §state に compound 例外として明文化）。

- [#400](https://github.com/yasmro/schatten/pull/400) [`22c2c36`](https://github.com/yasmro/schatten/commit/22c2c3684bda875206660a86e89f3ced222df8f2) Thanks [@yasmro](https://github.com/yasmro)! - feat(lv1): Text に serif family + leading variants + JP/EN size 補正を追加

  `Text` に直交軸を 2 つ追加: `family`（`sans` / `serif`）と `leading`（`--leading-*` スケールの override）。`serif` は EB Garamond / Noto Serif JP スタックに切替え（フォントは同梱せず consumer がロード）。

  あわせて JP/EN の cap-height 補正を **body の reset 層にライブラリ全体で適用**: `font-size-adjust: var(--st-font-size-adjust, cap-height 0.7)`。Latin 系フォント（EB Garamond / Hanken Grotesk）の cap-height を CJK の高さに揃えるため、Button / Input / Badge / Text など**全コンポーネントの欧文混じりテキストの見た目が僅かに変わる**。font-agnostic な目標値なので単一の値で全 family・consumer フォントに効き、`--st-font-size-adjust` で上書き / 無効化できる（非対応ブラウザは補正なしに graceful degrade）。

  CSS API: `.st-text--sans` / `.st-text--serif` / `.st-text--leading-{none,tight,snug,normal,relaxed,loose}` を追加。`--font-serif` セマンティックトークンを default theme で実体化し、`.st-text--serif` から参照されることで manifest に公開 surface 化。

- [#396](https://github.com/yasmro/schatten/pull/396) [`b7d6969`](https://github.com/yasmro/schatten/commit/b7d6969c304aafb5ccf03f7f90e82e019f66ea46) Thanks [@yasmro](https://github.com/yasmro)! - Toast の内部実装を `@radix-ui/react-toast` から [sonner](https://sonner.emilkowal.ski/) に置き換え、loading 機能を追加 ([#318](https://github.com/yasmro/schatten/issues/318))。stacking / swipe / enter-exit / auto-dismiss は Sonner が所有し、各 toast の中身は Schatten が `toast.custom()` で描画する — 実コンポーネント (`Icon` / `Spinner` / `Button`) と `.st-toast*` クラスを使い、`Callout` と構造的に一致させた。

  新機能 (additive):

  - `toast.loading(input)` — spinner 表示・自動 dismiss 無効の loading toast。
  - `toast.promise(promise, { loading, success, error, finally? })` — promise から loading→success/error を自動遷移。戻り値の `.unwrap()` で元の promise を取り戻して成功後の副作用 (遷移など) を繋げる。
  - `<Toaster>` に additive な `expand` / `visibleToasts` props。
  - `ToastFn` / `ToastPromiseOptions` / `ToastPromiseHandle` 型を公開。

  BREAKING (pre-1.0):

  - CSS API: viewport クラス `.st-toaster` と `.st-toaster--{6 position}` を撤去 (位置決めは `<Toaster position>` prop → Sonner に一本化)。`[data-swipe]` 状態属性を撤去 (swipe は Sonner 所有)。`.st-toast` の `[data-state]` 駆動 enter/exit アニメーションを撤去 (Sonner 所有)。新規 sub-element クラス `.st-toast__action` (action / close `<Button>` のスロット) を追加。
  - Types: 公開 hook `useToast()` と型 `ToastData` を撤去 (自前 store を廃止)。

  維持される surface: `toast()` の signature・`ToastInput` 全プロパティ・`ToastVariant` / `ToastAppearance` union・per-toast の `.st-toast--{tone}` / `.st-toast--{shape}` クラス・`.st-toast__{icon,content,title,description}` sub-element。action / close は実 lv1 `<Button>`、title / description のタイポグラフィは `Callout` と一致。

  依存: `@radix-ui/react-toast` を削除、`sonner@2.0.7` を exact pin で追加 (Sonner は視覚契約に影響しうるため、api-stability の visual-contract-affecting 表 / prepare-release の dep 表に登録済み)。

### Patch Changes

- [#401](https://github.com/yasmro/schatten/pull/401) [`269be4f`](https://github.com/yasmro/schatten/commit/269be4fd2f4fd5f0012b526b4866d5a0d95506d4) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: `.st-btn` のラベル font-weight を 500 (medium) から 700 (bold) に変更し、ボタンテキストを太字に。あわせて `destructive` variant の hover でラベル文字色も沈むよう調整（背景の暗色化だけでなく文字色も `color-mix` で destructive base 側へシフト — primary の `--color-solid-foreground-hover` 相当の挙動を、state トークンの 4-token shape を崩さず CSS 側で表現）。

  いずれもクラス API・状態属性・CSS 変数の追加/改名/削除はなく、既存 `.st-btn` ルールの値変更のみ。`link` variant は `font-weight: inherit` のままなので、段落に埋め込まれたリンクテキストは周囲のウェイトに追従し影響を受けない。ボタンを描画する全 VRT baseline（Button / parity / Dialog / Toast / CSSApi / CSSApiDist / Composition / Spacing / ThemeAudit / SeasonalShowcase）を再生成済み。

- [#406](https://github.com/yasmro/schatten/pull/406) [`68feb59`](https://github.com/yasmro/schatten/commit/68feb5909c02aedd1034e77f1aab09ac96133b1b) Thanks [@yasmro](https://github.com/yasmro)! - perf(lv1): Button のローディングスピナーをアイドル時に停止

  非 link / 非 asChild の Button は、ローディング transition をレイアウトシフトなしでクロスフェードさせるため、`.st-btn__spinner-overlay`（中の `Spinner`）を常に DOM に保持し、アイドル時は `opacity: 0` で隠している。だが `opacity: 0` の要素もコンポジット対象なので、Spinner の `animation: schatten-spin … infinite` が**全アイドルボタン上で回り続け**、ローディング中のボタン数ではなく描画ボタン数に比例した無駄なコンポジタ処理が発生していた（タブが idle に落ちず、低スペック / モバイルでの電力影響、`O(全ボタン数)` のスケール特性）。

  `.st-btn__spinner-overlay .st-spinner__rotor` を既定で `animation-play-state: paused` にし、`.st-btn[aria-busy="true"]` 配下でのみ `running` に切り替える。クロスフェードの UX（overlay の `opacity` 0↔1 transition）と DOM 常駐はそのまま、見えていないスピナーのアニメーション tick だけを止める。

  CSS API: クラス・状態属性・CSS 変数の追加 / 改名 / 削除はなし（既存 `.st-btn__spinner-overlay` / `.st-spinner__rotor` / `[aria-busy="true"]` を使った `animation-play-state` の付与のみ — component-architecture.md §7 が lv1-local CSS で許可する「`animation-play-state` を状態属性に紐づける」パターン）。静止画の見た目は不変（アイドル時は `opacity: 0`、ローディング時は停止フレームと実行中フレームが静止画では区別不能）なため、VRT baseline の再生成は不要。

- [#402](https://github.com/yasmro/schatten/pull/402) [`4585e56`](https://github.com/yasmro/schatten/commit/4585e560d6c87ac3b4bff4bf590b0374146dc8ae) Thanks [@yasmro](https://github.com/yasmro)! - fix(lv1): Checkbox / Radio / Switch の `disabled + isError` で disabled を優先

  `disabled` かつ `isError`（`aria-invalid="true"`）のとき、Checkbox / Radio / Switch がエラーの赤系トークンを表示していたのを修正。disabled なコントロールは送信されず error 状態を表示する意味がないため、disabled の grey トークンが勝つべき。Input / Textarea は既にこの優先順位（`default < [aria-invalid="true"] < :disabled`）だったので、3 コンポーネントを揃えた。

  CSS API: `.st-checkbox` / `.st-radio` / `.st-switch` の `:disabled` ルールを `[aria-invalid="true"]` ルールより後ろに移動し、同一 specificity を source order で解決させる。クラス名・属性 hook の追加 / 削除はなし（cascade 優先順位のみの変更）。`aria-invalid="true"` は引き続き emit されるので assistive tech 向けの contract は不変。

- [#399](https://github.com/yasmro/schatten/pull/399) [`775d1da`](https://github.com/yasmro/schatten/commit/775d1da80cdd0cc89903345f32b8df73243e91a9) Thanks [@yasmro](https://github.com/yasmro)! - refactor(docs): Welcome のリンクマニフェスト (`WELCOME_DEEP_LINKS` /
  `WELCOME_COMPONENT_SLUGS`) を `Welcome.stories.tsx` の named export から
  非 stories モジュール `Welcome.links.ts` へ切り出し。Storybook の CSF
  スキャナがこれらの定数をストーリーと誤認し、空の `WELCOME DEEP LINKS` /
  `WELCOME COMPONENT SLUGS` というサイドバー項目を生成していた不具合を解消する
  (CSF は `*.stories.tsx` のみ走査するため構造的に解決し、`excludeStories` の
  ような後付け抑制が不要)。Welcome ページの deep-link カードと drift テストは
  新モジュールから import するよう更新。公開 API (React props / CSS class /
  CSS variable / types) の変更なし。

## 0.11.0

### Minor Changes

- [#379](https://github.com/yasmro/schatten/pull/379) [`29a272c`](https://github.com/yasmro/schatten/commit/29a272c6eb173733b04c8d894c9be56ebad11b11) Thanks [@yasmro](https://github.com/yasmro)! - feat(lv1): FieldContext に `labelId` を追加 — Field label が self-labelled / group コンポーネントの accessible name になるように ([#345](https://github.com/yasmro/schatten/issues/345))

  - `FieldContextValue` に `labelId?: string` を追加 (additive)。`<Field label>` が描画する `<label>` 要素に id が付き、context 経由で参照できます。
  - `Checkbox` / `Switch` は自前の `label` prop が無く、`aria-label` / `aria-labelledby` の明示指定も無い場合に限り、Field の label を `aria-labelledby` で参照します。`<Field label="Notifications"><Switch /></Field>` がスクリーンリーダーで「Notifications」と読み上げられるようになります (従来は無名 — axe `button-name` 違反)。
  - `RadioGroup` は group root (`role="radiogroup"`) で Field label を `aria-labelledby` 参照します (radiogroup は `htmlFor` では命名できないため)。
  - 優先順位: 明示の `aria-label` / `aria-labelledby` > 自前 `label` > Field の `labelId`。既存の利用形 (自前 label あり / Field 外) の出力 DOM は不変です。
  - 既知の限界: Field label クリックでの focus / toggle 連動は self-labelled コンポーネントでは効きません (SR 名の配線のみ)。

- [#378](https://github.com/yasmro/schatten/pull/378) [`9c8dcd1`](https://github.com/yasmro/schatten/commit/9c8dcd187e4a763e532303bd71f19506f5612b4d) Thanks [@yasmro](https://github.com/yasmro)! - BREAKING: 死蔵されていた `--transition-fast` / `--transition-normal` / `--transition-slow`（CSS 変数）、`tokens.transition.*`、`TransitionToken` 型を削除。[#145](https://github.com/yasmro/schatten/issues/145) で deprecated 化済み・参照ゼロのため、pre-1.0 のうちに削除（[#350](https://github.com/yasmro/schatten/issues/350)）。

  移行表:

  | 旧                                        | 新                                                   |
  | ----------------------------------------- | ---------------------------------------------------- |
  | `var(--transition-fast)`（150ms ease）    | `var(--motion-base)`（150ms）+ easing は自分で指定   |
  | `var(--transition-normal)`（200ms ease）  | `var(--motion-expressive)`（200ms）+ 同上            |
  | `var(--transition-slow)`（300ms ease）    | 対応 step なし — 300ms 直書き、または 200ms へ寄せる |
  | `tokens.transition.*` / `TransitionToken` | `tokens.motion.*` / `MotionToken`                    |

  旧トークンは duration + easing を束ねた値（例 `150ms ease`）、新 `--motion-*` は duration 単体である点に注意（名前の対応も `fast` → `--motion-quick` ではなく `--motion-base`）。

  CSS API: `dist/schatten.css` の tokens layer から上記 3 変数が消える（`@theme` 未登録のため manifest 差分はなし）。再導入は `src/core/tokens/__tests__/no-transition-tokens.test.ts` のソース走査ガードが防ぐ。

- [#348](https://github.com/yasmro/schatten/pull/348) [`1f2538b`](https://github.com/yasmro/schatten/commit/1f2538b2f459c73f2b2a2c95d4881d19c015cf2d) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: 用途別 semantic token を追加（shadow: `--shadow-card/popover/modal/toast`、radius: `--radius-control/surface/pill`、motion: `--motion-quick/base/expressive`）。`@theme` 登録済みで `tokens.ts` からも参照可能（`shadow.card` 等、新規 `motion` セクション + `MotionToken` 型）。

  既存コンポーネントは value-preserving に置換（視覚変更なし・VRT zero diff）: Dialog/Toast/Tooltip/Select の elevation を `--shadow-modal`(=lg)/`--shadow-toast`(=md)/`--shadow-popover`(=md) 経由に、Badge/Radio/Switch の pill を `--radius-pill`(=full) 経由に。standalone CSS 向けに literal fallback 付き。

  motion semantic は死蔵していた `--transition-*` ではなく生きている `--st-duration-*` のエイリアスとして定義。`tokens.ts` の `transition` セクションは `@deprecated` 注記。`--radius-control/surface` は定義のみ（Button/Input 等への角丸適用は別 spike）。

- [#354](https://github.com/yasmro/schatten/pull/354) [`84de0d0`](https://github.com/yasmro/schatten/commit/84de0d00847c0fc40622e12835cb3b117db94afb) Thanks [@yasmro](https://github.com/yasmro)! - feat(tokens): route Select content z-index through the `--z-popover` semantic
  token (was a hard-coded `50`). Visual no-op (50→60, the 51–60 band is otherwise
  empty) but fixes a latent Select-in-Dialog stacking case and removes the last
  hard-coded z-index in a component. Documents the reserved `0–100` z-index band
  in the README.

- [#374](https://github.com/yasmro/schatten/pull/374) [`4a5df43`](https://github.com/yasmro/schatten/commit/4a5df43e50741821cf652dabdb7740afc5730515) Thanks [@yasmro](https://github.com/yasmro)! - feat(theme): seasonal payoff 強化 — `--color-solid` ファミリーを theme ramp の段参照に再配線 ([#150](https://github.com/yasmro/schatten/issues/150))

  - `--color-solid` / `--color-solid-hover` / `--color-solid-foreground` / `--color-solid-foreground-hover` が theme ramp の段 (light: 700/900/100/300、dark: 300/100/800/700) を参照するようになりました。「Mode が段を選び、Special が ramp を供給する」モデルです。seasonal テーマ (`data-theme="season--*"`) を有効にすると、Button primary / Badge・Callout・Toast の neutral × solid が季節色で再着色されます。
  - default の theme scale (`--color-theme-50..950`) の解決先が blue → alabaster (中立 ramp) に変わりました。**Special 非適用時の solid 面の見た目は再配線前と完全に同一** (value-preserving) ですが、`bg-theme-*` ユーティリティや `tokens.theme*` (JS) を直接使っている場合は default 値が blue から warm neutral に変わります。
  - CSS 変数名・`.st-*` クラスの増減はありません (manifest 不変)。seasonal の allowlist (`['--color-theme-*']`) も不変で、Special が solid を直接書くことは引き続き禁止です。
  - 注意: custom property 連鎖の置換は宣言要素 (`:root`) で確定するため、`data-theme` は `<html>` に設定してください (サブツリーの wrapper では solid が再着色されません)。

- [#338](https://github.com/yasmro/schatten/pull/338) [`825a1e5`](https://github.com/yasmro/schatten/commit/825a1e59fd5556dcf3aa1945072910ac2ec6d619) Thanks [@yasmro](https://github.com/yasmro)! - BREAKING: `<Text>` no longer exposes the `asChild` prop. Text's
  polymorphism is already covered by two non-overlapping escape hatches —
  `as` (a closed enum of semantic tags `p` / `span` / `h1`–`h6`) for swapping
  the element, and `textVariants()` for applying Text's classes to an
  arbitrary element — so `asChild` was redundant (it merged nothing beyond
  `className` + spread DOM props, which `textVariants()` does with full
  typing).

  Migration: replace `<Text asChild><a href="…">…</a></Text>` with
  `<a href="…" className={textVariants({ /* variant, size, color, … */ })}>…</a>`.
  `textVariants` is exported from `@yasmro/schatten/variants`.

  Public `asChild` is now `Button` only. See `component-api-conventions.md`
  §"asChild vs `*Variants()` — which to reach for" for the boundary.

- [#351](https://github.com/yasmro/schatten/pull/351) [`0724e64`](https://github.com/yasmro/schatten/commit/0724e64f88949dd71a24c189f22ec344f17969e4) Thanks [@yasmro](https://github.com/yasmro)! - BREAKING: `--text-{body,label,heading}-{xs..2xl}-{size,leading,weight}` の 39 個の
  composite typography 変数を公開サーフェスから撤去。タイポグラフィの shorthand は
  `.st-text--{variant}.st-text--{size}` クラス API（および React `<Text>`）に一本化。

  CSS API: 上記 39 変数を manifest から削除。基底スケール（`--text-*` / `--leading-*`
  / `--font-*`）は存続。独自 CSS で composite 変数を参照していた利用者は、`.st-text`
  クラスへ移行するか基底スケール変数を直接束ねること。視覚は不変（値保存リファクタ）。

### Patch Changes

- [#340](https://github.com/yasmro/schatten/pull/340) [`b2b3658`](https://github.com/yasmro/schatten/commit/b2b365825284c5c16bf7115ce43258676d1ae120) Thanks [@yasmro](https://github.com/yasmro)! - Fix: `<Button asChild variant="link">` no longer throws `React.Children.only
expected to receive a single React element child`. The `link` branch wraps
  `children` with two icon-conditional siblings, so combining it with
  `asChild` handed Radix `Slot` more than one child. The `asChild` path is now
  resolved before the `link` branch, so a single child always reaches `Slot`.
  As with the other `asChild` paths, `icon` / `isLoading` are not projected
  onto the child — author the inner content yourself.

- [#379](https://github.com/yasmro/schatten/pull/379) [`29a272c`](https://github.com/yasmro/schatten/commit/29a272c6eb173733b04c8d894c9be56ebad11b11) Thanks [@yasmro](https://github.com/yasmro)! - fix(lv1): Dialog の本文スクロール領域をキーボードフォーカス可能に ([#345](https://github.com/yasmro/schatten/issues/345))

  `.st-dialog__body` は内容がオーバーフローした時のみ `tabIndex={0}` を持つようになり、focusable な子要素を含まない長文ダイアログでもキーボードでスクロールできます (WCAG 2.1.1 / axe `scrollable-region-focusable`)。オーバーフローしていない通常のダイアログには tab stop を追加しません。focus ring は Button と同じ ring トークンの 2 段 box-shadow です。CSS クラス・属性セレクタの増減はありません (manifest 不変)。

- [#386](https://github.com/yasmro/schatten/pull/386) [`45f2fe4`](https://github.com/yasmro/schatten/commit/45f2fe4d6835746b899b9befb74ce600396ed8e1) Thanks [@yasmro](https://github.com/yasmro)! - docs(a11y): ハンドビルド docs ページの table を共有 `DocsTable` に集約し、`<th scope="col">` を構造的に強制 (closes [#384](https://github.com/yasmro/schatten/issues/384))

  `Accessibility` / `Testing` が二重定義していた `RefTable` を `docs-ui.tsx` の `DocsTable` に統合し、`scope` 欠落・`<th>`/`<td>` 不整合を構造で防ぐ。`CompositionWithAsChild` の比較表も `DocsTable` 化、`CSSApi` の bespoke table には `scope="col"` を直書き。`scope` 欠落は axe の WCAG 2.1 A/AA タグでは検出されないため、per-page axe spec ではなくコンポーネント + `docs-ui.test.tsx` で担保する方針を `vrt-spec-guideline.md` に明文化。docs / internal のみで公開 API は不変。

- [#334](https://github.com/yasmro/schatten/pull/334) [`f3b68f6`](https://github.com/yasmro/schatten/commit/f3b68f68bd15ab9a379878191307bbb8bb6f0328) Thanks [@yasmro](https://github.com/yasmro)! - docs(perf): record measured Lighthouse scores for
  `examples/lighthouse-100/` (nextjs + vanilla) and fix three issues the
  real measurement surfaced so both examples genuinely score
  100/100/100/100. Closes [#304](https://github.com/yasmro/schatten/issues/304).

  - Both examples now establish the page surface from Schatten tokens
    (`background-color: var(--color-background)` /
    `color: var(--color-foreground)` on `<body>`). Without it, a
    dark-mode host flipped `--color-foreground` to a light value while
    the body stayed white, failing the color-contrast a11y audit.
  - vanilla `prepare-css.mjs` now flattens the token `@import` graph
    before inlining it. The entry files are only `@import` directives;
    pasting them verbatim into an inline `<style>` left the tokens
    unresolved, so they never loaded. It also emits a valid `robots.txt`
    (previously `serve -s` fell through to `index.html`, a −9 on SEO).
  - Both examples ship an inline SVG favicon so the browser's automatic
    `/favicon.ico` request never 404s (a Best Practices console error).

  No public API surface change — examples / docs only.

- [#365](https://github.com/yasmro/schatten/pull/365) [`fc05c57`](https://github.com/yasmro/schatten/commit/fc05c57148aaabbfe83389f34824399e57f8d924) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Patterns/Accessibility` ストーリーを追加 (closes [#139](https://github.com/yasmro/schatten/issues/139))

  WCAG 2.1 AA を目標水準に、フォーカス可視性 / ARIA 規約 / コントラスト /
  キーボード操作 / スクリーンリーダ対応 / 自動テスト (axe・addon-a11y) を
  live demo 付きで 7 section にまとめた docs story。最も近い兄弟
  `Patterns/Form States` に倣い VRT spec は持たない (dev-time の addon-a11y で
  検証)。公開 API (props / CSS class / CSS variable) の変更なし。

- [#369](https://github.com/yasmro/schatten/pull/369) [`a89167b`](https://github.com/yasmro/schatten/commit/a89167bacf2d356e43c36f5178af5715df2c1c01) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Patterns/Layout` ストーリーを追加 (closes [#142](https://github.com/yasmro/schatten/issues/142))

  Stack / HStack / VStack を採用せず Tailwind utility で直接組むためのレシピ集
  (Flex 横+縦 / Grid / Container max-width / Responsive)。不採用の根拠は
  `Tokens/Spacing › Why No Layout Primitives` に委ね prose で相互リンク。Container は
  Tailwind v4 で廃止された `max-w-screen-*` を避け、content 幅スケールと breakpoint
  変数参照 (`max-w-(--breakpoint-*)`) の両系統を提示。兄弟 `Patterns/*` docs 同様
  VRT spec は持たない。公開 API (React props / CSS class / CSS variable / types) は不変。

- [#371](https://github.com/yasmro/schatten/pull/371) [`38ee0cd`](https://github.com/yasmro/schatten/commit/38ee0cdf30f3adc23992bc831a312c872b2f7aef) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Patterns/Testing` ストーリーを追加 (closes [#143](https://github.com/yasmro/schatten/issues/143))。consumer の
  E2E (Playwright / Cypress / RTL) 向けに `data-testid` の受け渡し契約を live demo で
  実演する — root pass-through / compound (Select) / asChild caveat (Tooltip) /
  Portal content / curated-props 例外 (Dialog・Toast) / flat Field の form ケース /
  命名は利用者責任 / no-auto-testid。`component-testid-guideline.md` ([#106](https://github.com/yasmro/schatten/issues/106)) から本
  ストーリーへの pointer を追加。最も近い兄弟 `Patterns/Form States` に倣い VRT spec
  は持たない。公開 API (React props / CSS class / CSS variable / types) の変更なし。

- [#380](https://github.com/yasmro/schatten/pull/380) [`7bf2444`](https://github.com/yasmro/schatten/commit/7bf2444491f3e46dc5c7d1773da1a8d07723d730) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Providers/*` ストーリーを docs IA 7 グループ内の `Theming/*` へ移設

  `Providers/ThemeProvider` / `Providers/ThemeInitScript` は [#320](https://github.com/yasmro/schatten/issues/320) で確定した
  7 グループ IA (storybook-guideline §Story title taxonomy) の外側に 8 番目の
  トップレベルを作っていた。両者は Mode × Special のランタイム機構なので
  決定表「Anything about Mode × Special → Theming」に従い
  `Theming/ThemeProvider` / `Theming/ThemeInitScript` へ retitle。
  旧 story ID (`providers-*`) への参照は VRT spec / Welcome deep link /
  storySort のいずれにも存在しないことを確認済み。公開 API の変更なし。

- [#381](https://github.com/yasmro/schatten/pull/381) [`30e1694`](https://github.com/yasmro/schatten/commit/30e1694a4f4d63ba287b5d2b602cd201a2f8ebb2) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Theming/Seasonal Showcase` ストーリーを追加 (closes [#151](https://github.com/yasmro/schatten/issues/151))

  8 季節 × solid 面 ([#150](https://github.com/yasmro/schatten/issues/150) の rung model payoff) を魅せる showcase。
  Eight Seasons (8 季節カード × light/dark) / Side by Side (任意 2 季節対比) /
  Dashboard Mockup (lv1 のみで組んだ実画面) / Auto Season (`getCurrentSeason()`
  の date デモ) の 4 stories。per-cell スコープの substitution freeze 対策は
  ThemeAudit から共有 helper (`scoped-theme-css.ts`) に昇格し、季節表示メタを
  `SEASONAL_THEME_METADATA` 由来の SSOT に統合 (ThemeAudit の winter-deep
  表示「深紅・墨」→ 実 ramp hue 255 に一致する「藍色・濃紺」へ修正)。
  公開 API (props / CSS class / CSS variable) の変更なし。

- [#338](https://github.com/yasmro/schatten/pull/338) [`825a1e5`](https://github.com/yasmro/schatten/commit/825a1e59fd5556dcf3aa1945072910ac2ec6d619) Thanks [@yasmro](https://github.com/yasmro)! - Types: `SelectTrigger` no longer accepts `asChild`. The prop was leaking
  through Radix's `SelectPrimitive.Trigger` type inheritance (the interface
  only omitted `size`), even though Select triggers are form controls that
  fall under the `asChild` hard exclusion in `component-architecture.md §3`.
  The interface now omits `'size' | 'asChild'`, closing the unintended
  surface. No runtime behavior change — `asChild` was never a documented or
  supported prop on `SelectTrigger`.

- [#347](https://github.com/yasmro/schatten/pull/347) [`bc26bde`](https://github.com/yasmro/schatten/commit/bc26bdeb0e7ed2062e86a6b038040e15b2d342d3) Thanks [@yasmro](https://github.com/yasmro)! - Storybook に `@storybook/addon-a11y` を導入し、dev 時に各 story の a11y 違反を
  パネル表示する。axe の scan 面は VRT (`@axe-core/playwright`, [#147](https://github.com/yasmro/schatten/issues/147)) と同じ
  WCAG 2.1 A/AA タグに pin し、Phase 1 は observe-only (`test: 'todo'`)。

- [#355](https://github.com/yasmro/schatten/pull/355) [`385551f`](https://github.com/yasmro/schatten/commit/385551f635c2a96505368ec96341518793d4324b) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Tokens/Elevation` ストーリーを追加。shadow primitive scale
  (sm/md/lg/xl) と semantic elevation token (popover/modal/toast/card) を、用途名 →
  primitive→ 消費 component の対応・適用済み/定義のみの区別付きで視覚化し、使い分け
  ガイドと dark mode での挙動を整理した。公開 API は不変。

- [#363](https://github.com/yasmro/schatten/pull/363) [`f431588`](https://github.com/yasmro/schatten/commit/f4315882845ef0c046e21d5e108b830b59dd878d) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Tokens/Iconography` ストーリーを追加。lucide-react の採用理由、
  `Icon` の `icon`（コンポーネント渡し）/ `size` / `color` API、コンポーネント渡しに
  よる tree-shake と typo の build error 化、代表アイコンギャラリー、a11y（装飾 vs
  意味あり）、NG パターンを整理した。公開 API（React props / CSS class /
  CSS variables / types）は不変。

- [#362](https://github.com/yasmro/schatten/pull/362) [`ae6a586`](https://github.com/yasmro/schatten/commit/ae6a5862c091aeb07c266e2bc4ef83862441d447) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Tokens/Motion` ストーリーを追加。共有 duration scale
  (`--st-duration-fast/base/slow` = 100/150/200ms) を用途名・semantic alias
  (`--motion-*`)・消費 component 付きで可視化し、各値を体感できるインタラクティブ
  demo (prefers-reduced-motion 自己対応) を載せた。`--motion-*` は applied 0 の
  define-only として明示し、用途別ガイドと設計原則 (reduced-motion 必須 / loop は
  component CSS / 不要 animation 禁止) を整理。時間 token は静止 PNG に写らないため
  VRT は付けず、値は `Motion.drift.test.ts` + `resolution.test.ts` で pin。可視化
  対象 token は [#145](https://github.com/yasmro/schatten/issues/145) で追加済のため公開 API は不変。

- [#352](https://github.com/yasmro/schatten/pull/352) [`709394c`](https://github.com/yasmro/schatten/commit/709394cf74d3b7ee3a5bd195024c8db2946235d3) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): `Tokens/Spacing` ストーリーを追加。4px base scale の全 token
  を curated (@theme 登録) / raw-only の区分付きで視覚化し、推奨スケール・
  Do&Don't・Layout primitives 不採用の根拠・half step の内部 CVA 用途を整理した。
  公開 API（React props / CSS class / CSS variables / types）は不変。

- [#377](https://github.com/yasmro/schatten/pull/377) [`5bf6b5a`](https://github.com/yasmro/schatten/commit/5bf6b5a0d347b079353f2e82c7fbd6fa5612cdce) Thanks [@yasmro](https://github.com/yasmro)! - docs(storybook): Welcome に Patterns 節を新設し、全 6 Patterns ページ
  (Accessibility / Composition with asChild / Form Composition / Form States /
  Layout / Testing) へのリンクカードを追加 (closes [#364](https://github.com/yasmro/schatten/issues/364))。7 グループ IA ([#320](https://github.com/yasmro/schatten/issues/320) /
  [#332](https://github.com/yasmro/schatten/issues/332)) の入口が Welcome から完結する。あわせて `navigateToStory` に `viewMode`
  引数を追加し、autodocs を持たない Canvas ストーリーへの既存 deep link 5 本
  (CSS API / Theme Audit / Patterns Accessibility / Tokens Color / Typography)
  が「No Preview」になる不具合を修正。公開 API (React props / CSS class /
  CSS variable / types) の変更なし。

## 0.10.0

### Minor Changes

- [#325](https://github.com/yasmro/schatten/pull/325) [`a9f8a03`](https://github.com/yasmro/schatten/commit/a9f8a036cf75d15705fcb8a850c0f426702fb089) Thanks [@yasmro](https://github.com/yasmro)! - BREAKING(pre-1.0): ripple 型 Spinner のアニメーション timing 変数を `--schatten-spinner-*` から `--st-*` prefix に rename（class API と prefix を揃え、v1.0 freeze 前に変数契約を確定）。

  - `--schatten-spinner-duration` → `--st-spinner-duration`（default `2.8s`）
  - `--schatten-spinner-ripple-delay` → `--st-spinner-ripple-delay`（default `1.1s`）

  消費者で override していた場合は sed 一発で移行できます:

  ```sh
  sed -i '' 's/--schatten-spinner-/--st-spinner-/g' <your-css>
  ```

  CSS API: 上記 2 変数を `src/core/tokens/animation.css`（raw `:root` 宣言の SSOT）に集約し、`base.css` の `@theme { … }` で自己参照 idiom (`--st-spinner-duration: var(--st-spinner-duration);`) として登録。これにより両変数が初めて `@theme`-registered の public surface に乗り、`dist/schatten.manifest.json` の `cssVariables` に出現します（145 → 147 vars）。`animation.css` は color token の `semantic.css` + `base.css` 二層パターンと同形で、`index.css`（`/core/tokens` raw entry、`@theme` 無し）からも import されます。

  Spinner.css の 3 箇所の参照（`__dot` / `__ripple-1` / `__ripple-2`）は `var(--st-spinner-duration, 2.8s)` / `var(--st-spinner-ripple-delay, 1.1s)` の形に変更。fallback は per-component standalone build (`dist/css/spinner.css`、[#291](https://github.com/yasmro/schatten/issues/291) — token を bundle しない) で timing が空に解決されるのを防ぐためで、統合 build + `/core/tokens` 経由では override 可能な変数が供給されます。

  React 利用は無変更。

  closes [#286](https://github.com/yasmro/schatten/issues/286)

- [#325](https://github.com/yasmro/schatten/pull/325) [`a9f8a03`](https://github.com/yasmro/schatten/commit/a9f8a036cf75d15705fcb8a850c0f426702fb089) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: enter/exit のトランジション timing を集約する共有スケール `--st-duration-*`（`fast` 100ms / `base` 150ms / `slow` 200ms）を新設。`[#286](https://github.com/yasmro/schatten/issues/286)` の Spinner timing で確立した二層パターン（raw `:root` 宣言を `src/core/tokens/animation.css` に置き、`base.css` の `@theme { … }` で自己参照 idiom 登録）をそのまま雛形にしています。これにより 3 変数が `@theme`-registered の public surface に乗り、`dist/schatten.manifest.json` の `cssVariables` に出現します（147 → 150 vars）。consumer は 1 つの override で base motion を一括調整できます。

  これは **value-preserving な集約**です。移行した各参照は元のハードコード値と完全一致するため、見た目は一切変わりません（VRT 再ベースライン不要 — Tooltip / Dialog / Toast の既存スナップショット 32 件がそのまま緑）:

  - **Tooltip.css** — enter `--st-duration-base`（150ms）/ exit `--st-duration-fast`（100ms）
  - **Dialog.css** — open `--st-duration-slow`（200ms）/ close `--st-duration-base`（150ms）
  - **Toast.css** — swipe-cancel snap-back + swipe-end dissolve が `--st-duration-slow`（200ms）

  各参照は `var(--st-duration-*, <fallback>)` 形で、per-component standalone build（`dist/css/*.css`、[#291](https://github.com/yasmro/schatten/issues/291) — token を bundle しない）でも fallback により同じ cadence で動作します。

  Toast の dissolve enter/exit（320ms / 220ms）は意図的にスケールの **外**に残しました — Tooltip/Dialog より重い独自 cadence で、スケールの 3 段（fast/base/slow）をきれいに保つためハードコードを維持。スケールに畳むべきかは将来の motion-retune spike に委ねる aesthetic な判断で、この seam の対象外です（`animation.css` / `Toast.css` のコメントに明記）。

  また、icon-only / symbol-only な静的要素の role 選択基準を `component-architecture.md` §8 に追記（static meaning → `role="img"`、変化する meaning → live-region role、consumer 指定の role が常に優先）。doc のみの変更で public surface 影響なし。

  React 利用は無変更。

- [#321](https://github.com/yasmro/schatten/pull/321) [`2d26016`](https://github.com/yasmro/schatten/commit/2d2601624d319c74350ee311eac847603c377225) Thanks [@yasmro](https://github.com/yasmro)! - Add `<ThemeInitScript>` (from `@yasmro/schatten/providers`) and a new
  framework-agnostic `@yasmro/schatten/theme-init` entry exporting the
  FOUC-avoidance snippet as `THEME_INIT_SCRIPT` / `buildThemeInitScript(storageKey)`.
  Previously the synchronous `<head>` script that applies the persisted Mode
  (`.dark`) and Special (`data-theme`) before first paint lived only as a
  copy-paste block in the README; consumers had to keep their hand-pasted copy
  in sync with the Provider's `localStorage` contract by hand.

  - `<ThemeInitScript nonce? storageKey? />` (from `@yasmro/schatten/providers`)
    — a zero-dependency component that serializes the snippet into a `<script>`
    for `<head>`. It renders to a static `<script>` string under SSR without
    touching any DOM global (verified by `ThemeInitScript.ssr.test.tsx`), so
    even though the `providers` entry is a Client Component (`'use client'`),
    you can render it directly inside a React Server Component / SSR `<head>`
    — Next.js serializes it before hydration. Forwards a CSP `nonce` and
    accepts a custom `storageKey` (default `'schatten-theme'`).
  - `THEME_INIT_SCRIPT` / `buildThemeInitScript(storageKey)` (from
    **`@yasmro/schatten/theme-init`**) — the raw snippet bytes for the default
    key, and a builder for a custom key. This entry is **framework-agnostic**
    (no `'use client'` banner, unlike `providers`), so a React Server Component
    or a non-React server can `import` the string directly and inline it. The
    same string imported from a `'use client'` module would resolve to a client
    reference, not the literal bytes — that's why the string lives on its own
    entry, not on `providers`. `buildThemeInitScript` JSON-escapes the key and
    escapes three byte sequences that are inert inside a JS string literal but
    dangerous in a raw `<script>`: `<` (so the key can't close the `<script>`
    element) and the `U+2028` / `U+2029` line/paragraph separators
    (`JSON.stringify` leaves them raw, but they are line terminators in
    pre-ES2019 parsers). Each escape decodes back at runtime, so the key value
    is unchanged — only the raw bytes are made inert, making the snippet safe to
    inject via `dangerouslySetInnerHTML` / server-rendered HTML.

  The snippet is the single source of truth shared by the README, the
  component, and the Provider's persistence contract (`{ mode, special }`
  under `storageKey`) — see the "Provider runtime contract" row in
  `.claude/rules/api-stability.md`. A SHA-256 hash of the snippet bytes
  will be published separately ([#262](https://github.com/yasmro/schatten/issues/262)) to let CSP consumers pin it.

  Component / lv1 / lv2 / CSS API: unchanged.

### Patch Changes

- [#325](https://github.com/yasmro/schatten/pull/325) [`a9f8a03`](https://github.com/yasmro/schatten/commit/a9f8a036cf75d15705fcb8a850c0f426702fb089) Thanks [@yasmro](https://github.com/yasmro)! - Badge の icon-only（`icon` あり・`children` なし）時に `role="img"` を自動付与し、`aria-label` が a11y tree に確実に露出するよう修正。

  bare な `<div>` は default role が `generic` で、これは accessible name を持てないため、`<Badge icon={Check} aria-label="Done" />` の `aria-label` は screen reader から無視されていました。`role="img"` を付けることでラベルが addressable になり、`getByRole('img', { name: 'Done' })` で参照できます（component-architecture.md §8 の "queryable accessible name" 契約を満たす）。

  - consumer が `role` を明示した場合は常にそちらが勝ちます（`role` を destructure し、末尾の `{...props}` spread に上書きされないようにしています）。
  - `children` を持つ Badge には role を付与しません（text node が accessible name を担うため）。

  CSS-only consumer 向けにも同じ契約を文書化: icon-only の `.st-badge--icon-only` には `role="img"` + `aria-label` の両方が必要（`CSSApi.stories.tsx` の attribute 表と code 例、`Badge.parity.stories.tsx` を更新）。`role` は manifest の data-attribute surface には含まれないため manifest 変化なし。

  closes [#287](https://github.com/yasmro/schatten/issues/287)

- [#328](https://github.com/yasmro/schatten/pull/328) [`08537b2`](https://github.com/yasmro/schatten/commit/08537b205ac1d7cf999f05a1ad48aaafb390e08c) Thanks [@yasmro](https://github.com/yasmro)! - Document how to run the FOUC-avoidance snippet under a strict Content-Security-Policy,
  and pin its byte stability as a contract ([#262](https://github.com/yasmro/schatten/issues/262)).

  - **README `### CSP setup guide`** — promotes the former inline "Strict CSP
    environments" note into a full section: nonce recipes for Next.js / Astro /
    Remix (with the CSPRNG-per-response requirement and the Next.js
    nonce × static-cache footgun called out), the hash-pin recipe with the
    published `sha256-…` and a standalone Node one-liner for custom `storageKey`,
    the externalized-`.js` fallback, recommended baseline directives
    (`object-src 'none'` / `base-uri 'self'`), and the anti-patterns to avoid
    (never `'unsafe-inline'`, never a static/`Math.random()` nonce).
  - **`pnpm schatten:csp-hash`** (`scripts/print-csp-hash.mjs`) — a maintainer
    CLI that prints the `script-src` source expression for the snippet, reading
    the shipped `dist/theme-init/index.js`. Pass `--key=<storageKey>` for a
    custom key. Not consumer-facing.
  - **API stability contract** — `.claude/rules/api-stability.md` now records the
    FOUC snippet bytes (`THEME_INIT_SCRIPT` / `buildThemeInitScript()`) as public
    surface: changing them is a `major`, and such a changeset must include the
    regenerated `sha256-…` so CSP consumers can re-pin.

  Docs + maintainer tooling only — no component / lv1 / lv2 / CSS API change.
  The `<ThemeInitScript>` component and `@yasmro/schatten/theme-init` entry
  themselves shipped in [#261](https://github.com/yasmro/schatten/issues/261).

- [#327](https://github.com/yasmro/schatten/pull/327) [`02fc10e`](https://github.com/yasmro/schatten/commit/02fc10e3db186dde6f50b2c7978329766c934dec) Thanks [@yasmro](https://github.com/yasmro)! - ブランド朱 `vermillion-*` の hue/彩度を伝統的な真朱（Figma vermilion `#E73121` 系）へ retune。hue 22（crimson 寄り）→ hue 30（橙寄り・高彩度）に全 shade を引き直した。鮮やかなブランドアンカーは `-500`（≈ `#ed3726`）、実表示の brand solid 面は AA 安全な `-600`（≈ `#d02718`）。solid AA は light `#fafafa`×600 = 5.04:1 / dark `#1a1a1a`×400 = 6.53:1 で両方 PASS、全 shade sRGB gamut 内。semantic 名（`--color-vermillion` / `--color-vermillion-foreground`）は不変で値のみ変更（非破壊）。危険色 `red-*`（`--color-error` / `--color-destructive`）は [#239](https://github.com/yasmro/schatten/issues/239) の結論どおり hue 22 据え置きで無影響。VRT 再ベースラインを伴う。

## 0.9.0

### Minor Changes

- [#275](https://github.com/yasmro/schatten/pull/275) [`c7eaf29`](https://github.com/yasmro/schatten/commit/c7eaf297d0fb8046e19673bed664dee5bf6f0ccf) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: `dist/schatten.css` is now compiled by `@tailwindcss/cli` from a
  dedicated entry (`src/styles/entry.css`), replacing the previous
  `lightningcss --bundle src/schatten.css` pipeline. This lays the
  infrastructure for the `.st-*` component classes that [#154](https://github.com/yasmro/schatten/issues/154) sweep PRs add
  in v0.9.0 — those rules will live under `@layer components` inside the
  same entry.

  Highlights:

  - New build entry `src/styles/entry.css`:
    - `@import "tailwindcss" source(none);` (no auto source scanning — the
      dist intentionally ships only static rules; the Storybook entry at
      `src/styles/globals.css` keeps its source-scanning behaviour).
    - Declares the canonical `@layer reset, tokens, components, utilities;`
      order from `.claude/rules/css-api.md`, so sweep PRs that add
      `@layer components { .st-* … }` rules land at the right cascade tier.
    - Imports tokens (`base.css`), default + seasonal themes, and **all
      four** existing component CSS files (Spinner, Toast, **Tooltip**,
      **Dialog**) — Tooltip and Dialog were previously absent from
      `dist/schatten.css` and only reached the page via React `.tsx`
      side-effect imports, leaving vanilla-HTML consumers without their
      enter/exit animations. That gap is closed here.
  - `package.json#scripts.build:css`: `lightningcss src/schatten.css …` →
    `tailwindcss -i src/styles/entry.css -o dist/schatten.css --minify`.
  - `devDependencies`: `+ @tailwindcss/cli ^4.2.2`, `- lightningcss-cli`,
    `- lightningcss`. `pnpm.onlyBuiltDependencies` (package.json) is
    removed and `pnpm-workspace.yaml#onlyBuiltDependencies` drops
    `lightningcss-cli` (no native postinstall is needed anymore).
  - `src/schatten.css` is removed in favour of `src/styles/entry.css`.
  - `.size-limit.json` CSS budget bumped from 5 KB → 50 KB to accommodate
    the wider token surface this entry now bundles and to leave headroom
    for the `.st-*` rules sweep-1..7 will add. Current dist size:
    ~32 KB minified.

  README has been synced with the current roadmap: stale `v0.14.0` /
  `v0.7.0` references are now `v0.9.0` / `v0.8.0`, and the legacy
  `<button class="btn" data-variant="solid">` example markup is updated to
  the BEM shape (`<button class="st-btn st-btn--primary">`) defined in
  `.claude/rules/css-api.md`.

  Component / lv1 / public CSS class API: unchanged. This sub-issue
  ([#264](https://github.com/yasmro/schatten/issues/264), part of [#154](https://github.com/yasmro/schatten/issues/154)) only swaps the build pipeline and closes the
  Tooltip / Dialog import gap; the `.st-*` class API itself lands in the
  sweep PRs that follow.

  Follow-ups tracked separately:

  - [#276](https://github.com/yasmro/schatten/issues/276) — sweep-3 着地時に CSS size budget を実測再評価
  - [#277](https://github.com/yasmro/schatten/issues/277) — vanilla-HTML 実機検証 Storybook + VRT story (sweep-1 で骨組み)

- [#282](https://github.com/yasmro/schatten/pull/282) [`f16b605`](https://github.com/yasmro/schatten/commit/f16b6057c7714d7c0f1b8286997bab26742a8bf2) Thanks [@yasmro](https://github.com/yasmro)! - BREAKING(pre-1.0): Separator / Text / Icon の class 出力を Tailwind utility（`shrink-0 bg-border h-px w-full` / `text-error text-center truncate` / `size-5 text-inherit`）から `.st-*` semantic class chain（`st-separator` / `st-text st-text--body st-text--md st-text--default` / `st-icon st-icon--md st-icon--inherit`）に変更。React 利用は `<Separator>` / `<Text>` / `<Icon>` の prop 経由のままで影響なし。

  消費者影響:

  - `cn(textVariants(...), 'truncate')` のような **CVA 出力との重複 utility 指定** をしているケースは、出力 class セットの内訳が変わる（動作は等価）。
  - `<Text className="font-bold">` 等の `className` override は、`@layer components` → `@layer utilities` の順序で従来より**確実に勝つ方向**になる。意図せず CVA 出力に依存していたケースのみ要確認。
  - VRT baseline を持つ消費者は再生成が必要。

  CSS API: 3 コンポを `@layer components` 配下に追加（44 クラス、`data-orientation` 1 属性が新規）。vanilla HTML から以下が動く:

  ```html
  <div class="st-separator" data-orientation="horizontal" role="none"></div>
  <p class="st-text st-text--body st-text--md st-text--default">Body text.</p>
  <svg class="st-icon st-icon--md st-icon--inherit">...</svg>
  ```

  Note: Icon の root class `.st-icon` 自体は CSS rule を持たない（全 visual property は modifier 側）。Tailwind の minify が空ルールを除去するため、`dist/schatten.css` には `.st-icon` 規則が含まれない（modifier `st-icon--{sm/md/lg}` / `st-icon--{color}` は全て存在）。

- [#283](https://github.com/yasmro/schatten/pull/283) [`f1ca54d`](https://github.com/yasmro/schatten/commit/f1ca54dc12b77c440c0ad6568e2326c5c3af6ae6) Thanks [@yasmro](https://github.com/yasmro)! - BREAKING(pre-1.0): Spinner / Badge / Callout の class 出力を Tailwind utility から `.st-*` semantic class chain に変更。React 利用は `<Spinner>` / `<Badge>` / `<Callout>` の prop 経由のままで影響なし。

  消費者影響:

  - **Spinner の内部 ripple SVG class が rename されました。** CSS 直接参照している消費者は以下に sed-migrate してください:
    - `.schatten-spinner-dot` → `.st-spinner__dot`
    - `.schatten-spinner-ripple-1` → `.st-spinner__ripple-1`
    - `.schatten-spinner-ripple-2` → `.st-spinner__ripple-2`
    - 共有 utility だった `.schatten-spinner-ripple` は削除（個別の `__ripple-1` / `__ripple-2` に統合済）
  - **Spinner の public CSS 変数は維持されます** — `--schatten-spinner-duration` / `--schatten-spinner-ripple-delay` は変更なしで consumer override 可能。`@theme` 化（manifest 掲載）は別 issue で扱います。
  - `cn(badgeVariants(...), 'aspect-square p-1')` のような **CVA 出力の icon-only utility 上書き** は `.st-badge--icon-only` modifier に置き換わります。Badge.tsx 側で `!children && !!icon` 判定により conditional emit されるので、消費者コードは無変更。CSS-only 利用者は `<div class="st-badge ... st-badge--icon-only" aria-label="...">` で表現してください。
  - VRT baseline を持つ消費者は再生成が必要。

  CSS API: 3 コンポを `@layer components` 配下に追加（+33 classes: Spinner 9 / Badge 13 / Callout 11）。vanilla HTML から以下が動く:

  ```html
  <!-- Spinner -->
  <div class="st-spinner st-spinner--default st-spinner--md" role="status">
    <svg viewBox="0 0 24 24" aria-hidden="true">…</svg>
    <span class="sr-only">Loading</span>
  </div>

  <!-- Badge (Pattern B: variant × appearance double-class) -->
  <span class="st-badge st-badge--success st-badge--subtle st-badge--md"
    >Active</span
  >
  <span class="st-badge st-badge--error st-badge--solid st-badge--md"
    >Failed</span
  >

  <!-- Callout -->
  <div class="st-callout st-callout--info st-callout--subtle" role="status">
    <div class="flex gap-3 items-start">
      <svg class="st-callout__icon" aria-hidden="true">…</svg>
      <div>
        <div class="st-callout__title">Heads up</div>
        <div class="st-callout__body">…</div>
      </div>
    </div>
  </div>
  ```

  Note: Pattern B (Badge / Callout) は **double-class selector** (`.st-badge--success.st-badge--subtle` 等) で variant × appearance 組み合わせを解決します。default `subtle` も first-class — `solid` / `outline` と同じ specificity (0,2,0) で CSS rule を持ちます（sweep-1 Icon precedent と整合）。

- [#290](https://github.com/yasmro/schatten/pull/290) [`7787fc1`](https://github.com/yasmro/schatten/commit/7787fc1b9f7cc1ce9caec1f2c50f2cb8ed75a0cc) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: Button / Checkbox / Switch を `.st-btn` / `.st-checkbox` / `.st-switch`
  クラス API に移行（[#268](https://github.com/yasmro/schatten/issues/268) / [#154](https://github.com/yasmro/schatten/issues/154) sweep-3）。3 コンポの視覚規則が
  `@layer components` に集約され、vanilla HTML / WordPress でも同一見た目で利用可能に。

  - **Button**: `.st-btn` + 6 variants × 3 sizes + `.st-btn--icon-only` + sub-elements
    `.st-btn__spinner-overlay` / `.st-btn__content`。`link` variant は
    `.st-btn--link.st-btn--{size}` で font-size のみ切替（height/padding はリセット、
    base font-size は `inherit`）。Loading 状態は `[aria-busy="true"]` で CSS が
    overlay の opacity と cursor: wait を切替。
  - **Checkbox**: `.st-checkbox-wrapper` + `.st-checkbox` + `.st-checkbox__indicator`。
    error は `[aria-invalid="true"]`、checked 状態は Radix の `[data-state]`。
    wrapper 内 label の sizing は `:has()` で派生。
  - **Switch**: `.st-switch-wrapper` + `.st-switch` + `.st-switch__thumb` + `.st-switch__check`。
    thumb 位置 / check icon の opacity は `.st-switch[data-state="checked"]` で表現
    （`group` Tailwind utility は不要に）。

  manifest snapshot: classes +28（13 / 7 / 8）、dataAttributes +2（`aria-busy` / `aria-invalid`）。

  BREAKING(pre-1.0): 3 コンポが出力する className 文字列が Tailwind utility 列から
  semantic class（`st-btn st-btn--primary st-btn--md` 等）に変更。`className` prop
  の追加マージは不変。`buttonVariants()` / `checkboxVariants()` / `switchVariants()` /
  `switchThumbVariants()` の戻り値も同様。

  - 消費者影響: `cn(buttonVariants(...), 'inline-flex')` 等で utility を重複指定して
    いる場合のみ visible。通常の `<Button>` / `<Checkbox>` / `<Switch>` 利用は無影響。
  - VRT baseline を持つ消費者は再生成が必要。
  - Dialog / Callout の Button 内部利用は transitive に class chain が変わる
    （visual contract は保持されているので React API 経由なら無影響）。

- [#296](https://github.com/yasmro/schatten/pull/296) [`44ca718`](https://github.com/yasmro/schatten/commit/44ca7188748d1b28091926cc9831230433acbfff) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: Input / Textarea / Radio を `.st-input-wrapper` / `.st-input` /
  `.st-textarea` / `.st-radio-group` / `.st-radio-wrapper` / `.st-radio`
  クラス API に移行（[#269](https://github.com/yasmro/schatten/issues/269) / [#154](https://github.com/yasmro/schatten/issues/154) sweep-4）。3 コンポの視覚規則が
  `@layer components` に集約され、vanilla HTML / WordPress でも同一見た目で利用可能に。

  - **Input**: `.st-input-wrapper` + 3 sizes（wrapper 側）+ `.st-input`
    - sub-elements `.st-input__icon-left/right` / `.st-input__text-left/right`
    - 派生 modifier `.st-input--date`。focus-visible ring は
      `.st-input-wrapper:has(.st-input:focus-visible)` で wrapper 側に。
      state precedence は CSS source order で `error < readOnly < disabled`
      （pre-sweep の tailwind-merge dedupe と意味的に等価）。
  - **Textarea**: `.st-textarea` + 3 sizes。error / readOnly / disabled の
    precedence は単一要素の source order で表現。
  - **Radio**: `.st-radio-group` + `.st-radio-wrapper` + `.st-radio` + 3 sizes
    - `.st-radio__indicator` + `.st-radio__dot`。label sizing と dot sizing は
      `:has()` 経由で size modifier から派生。Radix Radio が unchecked 時に
      indicator を unmount するため CSS 側に hide 規則は不要。

  manifest snapshot: classes +23（Input 10 / Textarea 4 / Radio 9）。
  `dataAttributes` への新規追加なし（`aria-invalid` は sweep-3 で導入済）。

  BREAKING(pre-1.0): 3 コンポが出力する className 文字列が Tailwind utility 列から
  semantic class（`st-input-wrapper st-input-wrapper--md` 等）に変更。`className`
  prop の追加マージは不変。`inputWrapperVariants()` / `inputVariants()` /
  `textareaVariants()` / `radioVariants()` の戻り値も同様。

  - 消費者影響: `cn(textareaVariants(...), 'border-error')` 等で utility を重複
    指定している場合のみ visible。通常の `<Input>` / `<Textarea>` / `<Radio>` 利用は
    無影響。
  - VRT baseline を持つ消費者は再生成が必要。
  - Input のラッパクリックで input にフォーカスする挙動は **React のみ** の
    ergonomic 機能（Input.tsx の `onClick` 経由）。vanilla HTML 利用者は input
    自身をクリックする必要がある（CSSApi reference に明記）。
  - Field 経由の Input / Textarea / RadioGroup transitive 影響は visual contract
    が保持されているため React API 経由なら無影響。

- [#298](https://github.com/yasmro/schatten/pull/298) [`c9fff03`](https://github.com/yasmro/schatten/commit/c9fff0326aed73df20f83254706f8b0bfc97611b) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: sweep-5 compound (heavy) — Select と Tooltip の公開クラス API を追加。`<button class="st-select__trigger st-select__trigger--md">` 形式の semantic class が `dist/schatten.css` に同梱され、React 利用と同じ trigger の見た目が `dist/schatten.manifest.json` 経由で確定的に消費可能になる（Tooltip も同様に `.st-tooltip__content` / `.st-tooltip__arrow`）。

  BREAKING(pre-1.0): Select と Tooltip が出力するクラス文字列が Tailwind utility (`flex w-full ...` / `tooltip-content z-[var(--z-tooltip)] ...`) から semantic class (`st-select__trigger st-select__trigger--md` / `st-tooltip__content`) に変更。`className` prop のマージは不変。

  - `selectTriggerVariants()` の戻り値も同様に変更
  - 消費者影響: `cn(selectTriggerVariants(...), 'h-12')` のような Tailwind utility 重複指定をしているケースのみ。通常の `<SelectTrigger>` / `<Tooltip>` 利用は無影響
  - VRT baseline を持つ消費者は再生成が必要

  CSS API: `.tooltip-content` クラスを `.st-tooltip__content` に rename（pre-1.0 のクラス命名揃え）。`.st-tooltip__arrow` を新規追加（Tooltip Arrow に dedicated class を提供）。

  Note: Select / Tooltip は [#297](https://github.com/yasmro/schatten/issues/297) の区分 D (JS 必須) / C (静的描画のみ) なので vanilla HTML での realistic な利用シナリオは無い (compound 動作 / 位置決めに JS 必須)。クラス API は manifest と unit test の `class API` describe block で defended、parity story は意図的に **作らない**。判定基準は [vrt-spec-guideline.md §Parity stories](.claude/rules/vrt-spec-guideline.md) に追記。

  closes [#270](https://github.com/yasmro/schatten/issues/270)

- [#299](https://github.com/yasmro/schatten/pull/299) [`f1cf795`](https://github.com/yasmro/schatten/commit/f1cf7950a63f9ae7cc307f7a6501cdfc1f7ed45d) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: Toast / Dialog を `.st-toast` + `.st-toaster` / `.st-dialog__*`
  クラス API に移行（[#271](https://github.com/yasmro/schatten/issues/271) / [#154](https://github.com/yasmro/schatten/issues/154) sweep-6）。2 コンポの視覚規則が
  `@layer components` に集約され、portal compound 系コンポにもクラス API が
  行き渡る。

  - **Toast**: `.st-toast` (per-toast `<li>`) + Pattern B double-class
    (`--neutral/--success/--error/--warning/--info` × `--subtle/--solid`)
    - sub-elements `.st-toast__icon/__content/__title/__description`。
      viewport は `.st-toaster` + 6 値の position modifier
      (`--top-left/--top-center/--top-right/--bottom-left/--bottom-center/--bottom-right`)。
      title-only vs title+description のアライメント分岐は
      `:has(.st-toast__description)` で JSX 側 conditional 廃止
      （Callout sweep-2 の `:has()` precedent 踏襲）。`[data-state]` /
      `[data-swipe]` 駆動の dissolve enter/exit / swipe handoff /
      `prefers-reduced-motion` は CSS に温存。
  - **Dialog**: `.st-dialog__overlay` / `.st-dialog__content` /
    `.st-dialog__header/__title/__description/__body/__footer/__close`
    の 8 sub-element。**`.st-dialog` block ルートは出さない** — Radix の
    `DialogPrimitive.Root` が DOM を吐かず、Overlay / Content が portal の
    独立兄弟になるため。Footer 内 Button の `order-N` は Radix focus 都合
    (DOM 順 ≠ 視覚順) で JSX 側 Tailwind utility に温存し、`.st-dialog__footer`
    は flex container だけに責任を持つ（vanilla HTML 消費者は DOM 順 =
    視覚順で書けば良いことを CSSApi で明文化）。`translate: -50% -50%` は
    standalone プロパティ、keyframes は `transform: scale(...)` のみで
    Tailwind v4 centering との合成を避ける既存仕様を継承。

  manifest snapshot: classes +27（Toast 12 / Toaster 7 / Dialog 8）。
  `dataAttributes` への新規追加なし（`data-state` / `data-swipe` は sweep
  前から計上済）。

  BREAKING(pre-1.0): 2 コンポが出力する className 文字列が Tailwind utility
  列から semantic class（`st-toast st-toast--error st-toast--solid`、
  `st-dialog__content` 等）に変更。`className` prop の追加マージは不変。
  `toastVariants()` / `toastViewportVariants()` の戻り値も同様。

  - 内部実装クラス rename: `.toast-item` → `.st-toast`、`.dialog-overlay` →
    `.st-dialog__overlay`、`.dialog-content` → `.st-dialog__content`。
    Toast.css / Dialog.css に直接アクセスしていた消費者のみ影響
    （通常の `<Dialog>` / `<Toaster>` / `toast()` 利用は無影響）。
  - React 公開 API (`<Dialog>` / `<Toaster>` / `toast()` / `DialogProps` /
    `ToastInput` etc.) は完全に不変。
  - VRT baseline を持つ消費者は再生成が必要（描画値は token 経由で不変、
    sub-pixel diff のみ想定）。
  - Toast / Dialog の portal-only な挙動（focus trap、dismissal、auto-dismiss、
    swipe、enter/exit アニメ）は **React 経由のみ**で、vanilla HTML 消費者は
    静的な視覚フレームしか得られない。これは PR [#298](https://github.com/yasmro/schatten/issues/298) (sweep-5) と同じ判断で、
    portal compound には parity story を出さない方針を継承。CSSApi リファレンス
    に Toast / Dialog 章を追加し、vanilla 利用時の必須 ARIA 属性
    (`role="status"`/`role="dialog"`/`aria-modal`/`aria-labelledby` 等) を
    明文化。

- [#300](https://github.com/yasmro/schatten/pull/300) [`d1b0416`](https://github.com/yasmro/schatten/commit/d1b0416f194758956ccfa2b5ee9804cbcf0dbe9f) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: Field / FieldSet を `.st-field` / `.st-fieldset` クラス API に
  移行（[#272](https://github.com/yasmro/schatten/issues/272) / [#154](https://github.com/yasmro/schatten/issues/154) sweep-7）。**本 sub-issue 完了で全 18 lv1 コンポの
  class API が出揃い、v0.9.0 の「消費者 Tailwind 不要化」が達成される**。

  - **Field**: `.st-field` (root) + `.st-field__label-row/__label/__required-marker/__info/__description/__error` の 6 sub-element。
    `flexGrow` / `flexShrink` から派生する `--grow/--grow-0/--shrink/--shrink-0`
    4 modifier は CVA 外で `cn()` 経由付与（Badge `--icon-only` / Input
    `--date` precedent）。`flexBasis` は任意 CSS 値を取るため inline
    `style` のまま継続。**Field root に `[data-error]` 属性を新規 emit**
    （FieldSet → Field の collapse 経路を消費者が外部から observability
    できるよう、root 属性として開示）。Field 自身の error 視覚は引き続き
    内部 form input 側で表現（`.st-input-wrapper:has([aria-invalid])`）。
  - **FieldSet**: `.st-fieldset` (root `<fieldset>` reset chrome) +
    `.st-fieldset__legend/__description/__children/__error` の 4
    sub-element。`direction="row"` / `wrap` は `__children` 側の 2
    modifier (`--row` / `--wrap`)。header (legend or description) 存在時
    の `margin-top:1rem` 分岐は `.st-fieldset:has(> .st-fieldset__legend)`
    / `:has(> .st-fieldset__description)` で CSS 側に閉じる（Callout
    sweep-2 / Toast sweep-6 の `:has()` precedent 踏襲）。`<fieldset>` の
    ブラウザ既定 border / padding / margin / min-width を root リセット。

  ### 完了処理（[#154](https://github.com/yasmro/schatten/issues/154) / [#58](https://github.com/yasmro/schatten/issues/58) phase-2 同時クローズ）

  - `src/docs/CSSApi.stories.tsx` を全 18 コンポ chrome ベースに書換。
    Section / CodeBlock 等の page chrome は **page-local `<style>` ブロック**
    で吸収（`.cssapi-doc__*` プレフィックス — 公開 `.st-*` 面は増やさない、
    api-stability 配慮）。Field / FieldSet 章を追加し、必須 ARIA 属性
    チェックリストと vanilla HTML markup 例を明文化。末尾「Coming in
    subsequent sweeps」を削除し「Reference (all 18 lv1 components)」体に。
  - README から「Tailwind v4 セットアップが必要」記述削除。Quick start /
    Two-layer architecture を「v0.9.0 完了済」体に更新。
  - AGENTS.md に「**消費者は Tailwind 不要**」のコールアウトを追加
    （Schatten 内部は Tailwind v4 だが、`import '@yasmro/schatten/schatten.css'`
    1 行で動く旨）。

  manifest snapshot: classes +18（Field 11 + FieldSet 7）。
  `dataAttributes` / `cssVariables` には新規追加なし（`data-error` /
  `data-disabled` は既出のため snapshot 差分なし）。

  BREAKING(pre-1.0): 2 コンポが出力する className 文字列が Tailwind
  utility 列（`flex flex-col gap-1.5` / `flex flex-col` / `flex-row` /
  `flex-wrap` / `mt-4` / `text-base font-bold text-foreground` /
  `text-sm text-foreground-muted` / `text-sm text-error` 等）から
  semantic class（`st-field`、`st-fieldset st-fieldset__*`）に変更。
  **Field root に `data-error="true"` 属性が新規 emit される**（観察可能な
  追加 — React Props / `FieldContext` / `FieldSetContext` の shape は不変）。
  VRT baseline を持つ消費者は再生成が必要（描画値は token 経由で不変、
  sub-pixel diff のみ想定）。

  closes [#272](https://github.com/yasmro/schatten/issues/272)
  closes [#154](https://github.com/yasmro/schatten/issues/154)

- [#255](https://github.com/yasmro/schatten/pull/255) [`400be06`](https://github.com/yasmro/schatten/commit/400be064a71ca724f8ea4288ff2e914f7a87df35) Thanks [@yasmro](https://github.com/yasmro)! - Add `<Icon>` (lv1) — a thin wrapper around lucide-react icons that normalizes
  sizing (`sm`/`md`/`lg`) and color (a `color` prop whose vocabulary mirrors
  `Text` — foreground tiers, state, inverted, and brand tokens; defaults to
  `inherit`), and applies a11y defaults: `aria-hidden="true"` for decorative
  icons, and `role="img"` when a label (`aria-label` / `aria-labelledby`) is
  given. Also exports `iconVariants` from `@yasmro/schatten/variants`.

- [#279](https://github.com/yasmro/schatten/pull/279) [`205b3a5`](https://github.com/yasmro/schatten/commit/205b3a59023e4cf0c9607fcfc1aeec465cdb5dbe) Thanks [@yasmro](https://github.com/yasmro)! - Types: `dist/schatten.manifest.json` を新規 export。`@yasmro/schatten` の公開 CSS surface（`.st-*` クラス・`data-*` / `aria-invalid` / `aria-busy` の state hook 属性・`@theme` 登録済の CSS 変数）を機械可読 JSON として配布する。

  - 新しい export エントリ: `@yasmro/schatten/schatten.manifest.json`
  - スキーマ: `{ $schemaVersion: 1, package, version, generatedAt, classes, dataAttributes, cssVariables }`。すべての配列はアルファベット昇順ソート + 重複排除
  - 内部の API gate として `src/__generated__/schatten.manifest.json` を commit、CI の `manifest` ジョブ (`pnpm check:manifest`) で diff 検知（差分時は集合差分を CI ログに整形出力 + `CSS API:` 付き changeset の要求メッセージ）
  - 新スクリプト: `pnpm build:manifest` (build chain に組込)、`pnpm update:manifest` (commit 版を意図的に再生成)、`pnpm check:manifest` (CI gate / ローカル検証)
  - `.claude/rules/api-stability.md` の「Manifest as the authoritative API listing (planned)」節を **"shipped"** に書き換え。以降は **manifest が public surface の authoritative listing**、本文書と食い違う場合は manifest を信じる運用に切り替わる

  infra-3 着地時点では `classes: []`（sweep-1〜7 が実体を追加していく）。sweep PR が `.st-*` を増やすたび manifest diff が出て、reviewer に変化が見える仕組みが整う。

- [#281](https://github.com/yasmro/schatten/pull/281) [`ab86095`](https://github.com/yasmro/schatten/commit/ab86095bcb8d04cc51dce42f73650a4752e9c448) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: manifest の `cssVariables` 抽出を **Tailwind v4 `@theme` 登録分** に限定。`scripts/generate-manifest.mjs` を `:root` 直下の `--*` 全部から prefix で絞る方式 → `@layer theme { :root, :host { … } }` (Tailwind が `@theme` ディレクティブを compile した出力) 配下に限定する方式に書き換えた。

  これにより `dist/schatten.manifest.json#cssVariables` から以下のような **`@theme` 未登録の内部トークン** が除外される:

  - font weight 数値 (`--font-bold` / `--font-medium` / `--font-normal` / `--font-semibold`)
  - font fallback stack (`--font-sans-fallback` / `--font-serif-fallback` / `--font-mono-fallback`)
  - 生 typography スケール (`--text-xs` / `--text-sm` / `--text-2xl` 等 — Tailwind utility `text-xs` 経由で参照する内部値)
  - spacing の sub-step 値 (`--spacing-0-5` / `--spacing-1-5` / `--spacing-2-5` / `--spacing-3-5` / `--spacing-7` / `--spacing-9` / `--spacing-14`)

  代わりに、prefix list で見落としていた `@theme` 由来トークンが正しく capture されるように:

  - `--default-font-family` / `--default-mono-font-family` (Tailwind v4 が `@theme { --font-sans }` から自動で emit するもの)
  - `--leading-normal` / `--leading-snug` / `--leading-tight` (line-height utility)

  Pre-1.0 の保守的縮小 — manifest を依存していた consumer はまだ存在しないと想定。**v1.0 凍結前に「公開 = `@theme` 登録分」原則を機械的に確立**し、内部 primitive を後から rename する自由を確保する。closes [#280](https://github.com/yasmro/schatten/issues/280)

- [#301](https://github.com/yasmro/schatten/pull/301) [`b4b5eb9`](https://github.com/yasmro/schatten/commit/b4b5eb951d066dc6c67c4d3d4833fdba5fb0960a) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: per-component CSS subpath `@yasmro/schatten/css/<component>` を
  追加（[#291](https://github.com/yasmro/schatten/issues/291)）。**18 lv1 全コンポ**（`badge` / `button` / `callout` /
  `checkbox` / `dialog` / `field` / `fieldset` / `icon` / `input` / `radio`
  / `select` / `separator` / `spinner` / `switch` / `text` / `textarea` /
  `toast` / `tooltip`）がそれぞれ独立した CSS subpath で配布されるように
  なる。

  - **新規 build step `build:component-css`** — `scripts/build-component-css.mjs`
    が `src/components/lv1/<Name>/<Name>.css` をそれぞれ
    `dist/css/<slug>.css` に minify 出力（Tailwind v4 CLI 経由 = 既存
    `build:css` と同じ lightningcss パス）。`pnpm build` の chain に
    `build:css` 直後で組み込み。
  - **`package.json#exports` に `./css/*` wildcard を追加**。`./dist/css/*.css`
    にマップ。consumer は `import '@yasmro/schatten/css/button'` 1 行で
    Button だけのスタイルを読み込める（前提: `./tokens` も別 import）。
  - **size-limit per-component budget** — `.size-limit.json` に 18 件 + 集約
    1 件を追加。各コンポ 1.5 KB（brotli）、集約 20 KB。現状最大は
    `css/select` の 815 B（45% 余裕）、最小は `css/separator` の 88 B。
  - **`@yasmro/schatten/variants` の React-free 性を再確認** — 既存の
    multi-entry tsup + `peerDependenciesMeta.react.optional`（v0.8.0 で
    着地済）の上に乗る形。`dist/variants/index.js` / `dist/variants/index.cjs`
    / `dist/tokens/index.js` / `dist/tokens/index.cjs` いずれも `react` /
    `react-dom` への import なし（grep で 0 件確認、DoD [#3](https://github.com/yasmro/schatten/issues/3)）。
  - **README に "Per-component CSS" セクション追加**。vanilla HTML / bundler
    両系統のサンプル + 必要 import の説明 + 詳細な Lighthouse / critical
    CSS recipe への参照（[#293](https://github.com/yasmro/schatten/issues/293) — 別 issue）。
  - **lv2 / monorepo split は対象外** — `./components/lv2` subpath は
    post-1.0 で別途、`@yasmro/schatten-core` / `-react` の物理分割は v1.x
    で実需が立った時点で再検討。

  DoD（全 6 項目完了）:

  1. `package.json#exports` に subpath 宣言 → `./css/*` wildcard で 18 件
     をまとめて宣言。
  2. `dist/css/<component>.css` × 18 生成 → `pnpm build` で確認。
  3. `dist/variants/index.{js,cjs}` に react 参照なし → grep 0 件。
  4. `@yasmro/schatten/css/button` 単独 import で Button スタイル適用
     （vanilla HTML）→ `var(--color-solid)` 等の参照が `dist/core/tokens/`
     で resolve することを構造確認。
  5. size-limit per-component budget → 18 件追加、`pnpm size` で all green。
  6. CHANGELOG `CSS API:` prefix → 本エントリ。

  closes [#291](https://github.com/yasmro/schatten/issues/291)

- [#260](https://github.com/yasmro/schatten/pull/260) [`75d5348`](https://github.com/yasmro/schatten/commit/75d5348fe6f00fb99ab41d2df76dbd554249d072) Thanks [@yasmro](https://github.com/yasmro)! - Add `<ThemeProvider>` / `useTheme()` — a declarative API for managing the
  Mode (light/dark) and Special (`data-theme`) axes from a React tree. Wraps
  the previously-manual `document.documentElement.classList.toggle('dark')`

  - `setAttribute('data-theme', …)` plumbing into a client-only Provider:

  * `defaultMode` accepts `'light' | 'dark' | 'system'`; `'system'` subscribes
    to `matchMedia('(prefers-color-scheme: dark)')`.
  * `defaultSpecial` accepts an explicit `SpecialThemeId`, `'auto-seasonal'`
    (resolves the current date via `getCurrentSeason()`), or `null`.
  * State persists to `localStorage` under `storageKey` (default
    `'schatten-theme'`); pass `null` to disable. Cross-tab updates sync via
    the native `storage` event.
  * `useTheme()` exposes both the resolved `mode` (`'light' | 'dark'`) and
    the user-facing `modeSetting` (which can include `'system'`).
  * Optional `disableTransitionOnChange` strips CSS transitions during a swap
    for instant feedback.

  The README now documents the Provider, the `useTheme()` hook, and a
  synchronous FOUC-avoidance inline script (Next.js App Router / Vite /
  Remix variants + strict-CSP fallback) that mirrors the Provider's
  `localStorage` contract. The storage shape `{ mode, special }` under the
  default `storageKey` `'schatten-theme'` is part of the public API surface.

  New entry point: `@yasmro/schatten/providers`.

  Component / lv1 / lv2 / CSS API: unchanged.

### Patch Changes

- [#305](https://github.com/yasmro/schatten/pull/305) [`b5c5b39`](https://github.com/yasmro/schatten/commit/b5c5b39f10aba6e5b33df7f6677af19a9e66ab61) Thanks [@yasmro](https://github.com/yasmro)! - chore(tooling): `/audit-coverage` slash command と `scripts/audit-coverage.mjs`
  を新設。lv1 全体で test / VRT / class-API CSS (`.st-*` SSOT) /
  `__snapshots__/` baseline / `index.ts` re-export の過不足を一括スキャンする。

  `scripts/check-lv1-companions.mjs` (PostToolUse, single component) と
  `scripts/check-lv1-export-integrity.mjs` (Stop, export integrity only) が
  **編集 / セッション単位**で動くのに対し、本コマンドは**任意タイミングで全
  lv1** の充足度を markdown 表として出す。区分 A/B のコンポーネントは
  `*.parity.stories.tsx` / `*.parity.vrt.spec.ts` も判定対象に含み、区分 C/D
  (`Dialog` / `Select` / `Toast` / `Tooltip`) は `vrt-spec-guideline.md`
  §"Parity stories — when to write one, when to skip" に従って parity 列を
  `—` 表示で除外する。

  CLI:

  - `pnpm audit:coverage` — markdown 表
  - `pnpm audit:coverage --check` — 不足検出時 exit 1 (CI 向け)
  - `pnpm audit:coverage --json` — `$schemaVersion: 1` の JSON 出力

  公開 API (React props / CSS class / CSS variables / TypeScript types) に
  変更なし — 内部 tooling のみ。

- [#288](https://github.com/yasmro/schatten/pull/288) [`cfc56da`](https://github.com/yasmro/schatten/commit/cfc56da8eb1eae1955548712cf5e99a89a191580) Thanks [@yasmro](https://github.com/yasmro)! - Callout の内部 flex layout を `.st-callout` に昇格し、新しい sub-element class (`.st-callout__content` / `.st-callout__action`) を追加。CSS-only consumer の markup が冗長な inner `<div class="flex …">` を必要としなくなった。React 利用は無変更。

  Before — vanilla HTML markup:

  ```html
  <div class="st-callout st-callout--info st-callout--subtle">
    <div class="flex gap-3 items-start">
      <!-- 消費者が手書きしていた wrapper -->
      <svg class="st-callout__icon">…</svg>
      <div class="flex min-w-0 flex-1 flex-col gap-1">
        <!-- consumer が手書きしていた wrapper -->
        <div class="st-callout__title">…</div>
        <div class="st-callout__body">…</div>
      </div>
    </div>
  </div>
  ```

  After:

  ```html
  <div class="st-callout st-callout--info st-callout--subtle">
    <svg class="st-callout__icon">…</svg>
    <div class="st-callout__content">
      <div class="st-callout__title">…</div>
      <div class="st-callout__body">…</div>
    </div>
  </div>
  ```

  CSS API: 2 sub-element classes が追加 (`.st-callout__content` / `.st-callout__action`)、Callout のレイアウト責務が `.st-callout { display: flex; … }` に集約。multi-line 時の `align-items: flex-start` は `:has(.st-callout__title):has(.st-callout__body)` で自動分岐 — JSX / Tailwind 条件不要。

  VRT: 既存 14 baseline + parity 2 baseline すべて pixel-identical で pass (visual contract 完全保持)。

  closes [#284](https://github.com/yasmro/schatten/issues/284)

- [#313](https://github.com/yasmro/schatten/pull/313) [`2c10a32`](https://github.com/yasmro/schatten/commit/2c10a32581999e6898d0aa7cad582c1c7e4b888c) Thanks [@yasmro](https://github.com/yasmro)! - Add integration-level VRT for the `Foundation/CSS API` page and a separate
  dist-artifact verification spec — **and fix a `dist/schatten.css` cascade
  bug the new VRT immediately surfaced**.

  **Fix**: `src/styles/entry.css` was declaring `@layer reset, tokens,
components, utilities;` without naming Tailwind v4's own `theme` and
  `base` layers. Tailwind's `@import "tailwindcss"` then registered
  `theme` / `base` _after_ schatten's layers in cascade order, putting
  the preflight reset `button { background-color: #0000 }` _higher_ in
  priority than `@layer components { .st-btn--primary { … } }`. A
  consumer importing `@yasmro/schatten/schatten.css` and writing
  `<button class="st-btn st-btn--primary">` got an _un-styled_ button.
  Declaring `@layer theme, base, reset, tokens, components, utilities;`
  explicitly puts preflight at the lowest priority where it belongs.
  The integrated `dist/schatten.css` now matches the per-component
  `dist/css/<slug>.css` rendering for Button, Dialog footer, and every
  other `<button>`-rooted primitive. Per-component subpath snapshots
  were unaffected — they bypass Tailwind preflight entirely.

  **New test infrastructure**:

  - `src/docs/__fixtures__/cssApiSamples.html.ts` — string-only payload
    (vanilla HTML + scaffolding CSS) consumed by both the parity story
    and the dist VRT spec. Splitting the React tree out keeps the
    Playwright Babel pipeline from mis-parsing `Component.css`
    side-effect imports as TypeScript decorators.
  - `src/docs/__fixtures__/cssApiSamples.tsx` — React-side companion
    with `<ReactSamples />` covering the 14 区 A/B components. Re-exports
    the string payloads so the story has one import site.
  - `src/docs/CSSApiParity.stories.tsx` — side-by-side React ↔ vanilla
    HTML comparison covering all 18 lv1 components. 区 C/D
    Tooltip / Select / Dialog / Toast show vanilla-only because their
    React equivalents portal-mount.
  - `src/docs/CSSApi.vrt.spec.ts` — pins the `Reference` and
    `ParityComparison` stories in light + dark.
  - `src/docs/CSSApiDist.vrt.spec.ts` — loads the built
    `dist/schatten.css` and each per-component `dist/css/<slug>.css`
    subpath ([#291](https://github.com/yasmro/schatten/issues/291)) via `page.setContent()` and verifies they render
    identically to source-mode. Closes the [#291](https://github.com/yasmro/schatten/issues/291) DoD [#4](https://github.com/yasmro/schatten/issues/4) promise
    ("import the subpath and the styles apply") with a real visual
    contract — and is what surfaced the entry.css cascade bug above.
  - `src/docs/__snapshots__/` — 42 light/dark baselines.
  - `scripts/ensure-dist.mjs` + `pnpm test:vrt:dist` — pre-run check
    that `dist/` artifacts exist before the dist VRT runs locally.
  - `.github/workflows/vrt.yml` — `pnpm build` is now prepended to the
    VRT job so CI never runs the dist spec against a stale dist.

- [#289](https://github.com/yasmro/schatten/pull/289) [`c7b7c49`](https://github.com/yasmro/schatten/commit/c7b7c49e55a28281c4f6c478da38be45fc1b990a) Thanks [@yasmro](https://github.com/yasmro)! - DefaultSpinner の Tailwind utility 依存 (`size-full animate-spin opacity-25/75`) を raw CSS + `.st-spinner__*` sub-element class に置き換え、Spinner が default 型でも CSS-only consumer から Tailwind 無しで動作するようになりました。`[#154](https://github.com/yasmro/schatten/issues/154)` の "Tailwind 不要" 公約に default 型 Spinner だけが空けていた穴を解消。

  新しい sub-element class:

  - `.st-spinner__rotor` — default 型の SVG (回転、`animation: schatten-spin 1s linear infinite`)
  - `.st-spinner__track` — 背景 ring (`opacity: 0.25`)
  - `.st-spinner__arc` — 移動 arc (`opacity: 0.75`)
  - `.st-spinner > svg` — 子セレクタで SVG sizing を universal 化 (default / ripple 共通)

  `@keyframes schatten-spin` を Spinner.css に追加 (既存の `schatten-dot-breathe` / `schatten-ripple-wave` と同じ private namespace)。

  React 利用は無変更。CSS-only consumer 向けに `size-full` / `animate-spin` / `opacity-25` / `opacity-75` の Tailwind class を SVG に書く必要が無くなりました:

  ```html
  <!-- Before (sweep-2): Tailwind 依存 -->
  <div class="st-spinner st-spinner--default st-spinner--md" role="status">
    <svg
      class="size-full animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="3"
      />
      <path
        class="opacity-75"
        d="M22 12a10 10 0 0 0-10-10"
        stroke="currentColor"
        stroke-width="3"
      />
    </svg>
    <span class="sr-only">Loading</span>
  </div>

  <!-- After: .st-spinner__* chain で完結 -->
  <div class="st-spinner st-spinner--default st-spinner--md" role="status">
    <svg
      class="st-spinner__rotor"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        class="st-spinner__track"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="3"
      />
      <path
        class="st-spinner__arc"
        d="M22 12a10 10 0 0 0-10-10"
        stroke="currentColor"
        stroke-width="3"
      />
    </svg>
    <span class="sr-only">Loading</span>
  </div>
  ```

  CSS API: 3 sub-element classes 追加 (`.st-spinner__rotor` / `.st-spinner__track` / `.st-spinner__arc`)。manifest は 79 → 82 classes。

  Notes:

  - Default 型の rotation duration は `1s linear infinite` を hardcode (Tailwind `animate-spin` と一致)。ripple 型の `--schatten-spinner-duration` (2.8s, ease-in-out) とは意図的に別の cadence — 異なるアニメーション性格のため。
  - `--schatten-spinner-default-duration` のような新規 public CSS variable は本 PR で追加せず、`--st-*` rename を扱う [#286](https://github.com/yasmro/schatten/issues/286) でまとめて整理。
  - VRT: 既存 6 baseline + parity 2 baseline + 内部利用先の Button 14 baseline すべて pixel-identical で pass (visual contract 完全保持)。

  closes [#285](https://github.com/yasmro/schatten/issues/285)

- [#302](https://github.com/yasmro/schatten/pull/302) [`0c3327b`](https://github.com/yasmro/schatten/commit/0c3327b6718faa822554213417107863b0735c05) Thanks [@yasmro](https://github.com/yasmro)! - Fix: `<Button variant="link" icon={…}>` 内の icon が段落内で次行に孤立する不具合を
  修正し、テキストとアイコンのあいだに 4px の隙間を追加(sweep-3 [#268](https://github.com/yasmro/schatten/issues/268) のリグレッション)。

  原因は 2 つの相互作用:

  1. Tailwind v4 preflight が `svg { display: block }` を強制。`.st-btn--link` は
     `.st-btn__content` のような inline-flex ラッパーを持たず svg を直接の子として
     レンダリングするため、`display: block` の svg が独立ブロックとなり強制改行
     を発生させる(他 variant は inline-flex ラッパー内の flex item なので影響なし)。
  2. `.st-btn--link { white-space: normal }` がテキストノードと隣接 svg のあいだの
     行分割を許容していた。

  加えて、icon とテキストのあいだに視覚的な間が無く貼り付いて見える問題もあり、
  これら 3 つを 1 つの修正で解決するため `.st-btn--link` を
  `display: inline-flex; align-items: baseline; gap: 0.25rem` に変更:

  - svg が flex item となり `display: block` でも改行を起こさない。
  - `gap: 0.25rem` で text↔icon 間に 4px の固定余白(iconPosition `start` /
    `end` どちらでも対称に効く)。
  - `align-items: baseline` でアイコンを段落テキストのベースラインに揃える。
  - `white-space: nowrap` を併用し、長い link テキストの mid-text wrap を抑制
    (link variant は短い inline affordance "Learn more →" 用途を想定)。

  `Button.vrt.spec.ts` に `link-variant` story(light / dark の 2 baseline)を追加
  してリグレッションを CI で検知できるようにした。manifest snapshot に差分なし
  (195 classes / 8 attrs / 145 vars — 公開 API surface は不変)。

- [#256](https://github.com/yasmro/schatten/pull/256) [`7377da1`](https://github.com/yasmro/schatten/commit/7377da1fb18bf91751ebf316ec086a01aadd1dc5) Thanks [@yasmro](https://github.com/yasmro)! - Fix `pnpm dev` failing to render any Storybook story with `ReferenceError: process is not defined`.

  `.storybook/preview.tsx` read `process.env.STORYBOOK_CHANNEL` at module scope, but the file is bundled into the browser preview iframe where `process` is not a global. The bare reference threw on module evaluation and left `#storybook-root` empty. It now reads `import.meta.env.STORYBOOK_CHANNEL`, which Storybook's Vite builder populates for `STORYBOOK_`-prefixed vars in both the dev server and the production build. The published `@yasmro/schatten` package is unchanged — this is a tooling-only fix.

- [#294](https://github.com/yasmro/schatten/pull/294) [`91b2b16`](https://github.com/yasmro/schatten/commit/91b2b1686256e6d578fe436bb3a04f7f42cd8af8) Thanks [@yasmro](https://github.com/yasmro)! - chore(lint): Biome `style/noRestrictedImports` で `src/core/**` /
  `src/variants/**` / `src/themes/**` / `src/tokens.ts` からの
  `react` / `react-dom` / `@radix-ui/*` import を error として禁止
  (closes [#292](https://github.com/yasmro/schatten/issues/292))。v0.9.0 の framework-agnostic 境界 ([#291](https://github.com/yasmro/schatten/issues/291))
  を `package.json` の `exports` map に頼らず source level でも CI ゲートで
  担保する。`no-primitive-color` plugin と同じ「構造的不変条件は lint で
  機械化する」哲学。

  消費者影響なし — 公開 API / CSS classes / CVA 出力はすべて不変。詳細は
  [`.claude/rules/lint-rules-guideline.md`](https://github.com/yasmro/schatten/blob/develop/.claude/rules/lint-rules-guideline.md)
  の `style/noRestrictedImports` 節。回帰テストは
  [`biome-plugins/boundary-no-react.test.ts`](https://github.com/yasmro/schatten/blob/develop/biome-plugins/boundary-no-react.test.ts)。

- [#309](https://github.com/yasmro/schatten/pull/309) [`9900cef`](https://github.com/yasmro/schatten/commit/9900cef94fa589e67c3736fdc9eb6bdb62c29a46) Thanks [@yasmro](https://github.com/yasmro)! - chore(tooling): `.claude/skills/prepare-release/` を新設 (closes [#133](https://github.com/yasmro/schatten/issues/133))。
  リリース直前に走らせる、非破壊な pre-flight skill とその執行装置一式。

  - `.claude/skills/prepare-release/SKILL.md`: 5 step の対話 skill 本体。
    - 未消費 changeset の inventory + 予測 version の提示
    - 非破壊な quality gate (`lint` / `typecheck` / `test --run` / `build` /
      `check:manifest` / `size` / `lint:pkg` / `check:readme`) を一括実行
    - **dependency-bump-aware sanity check**: 直近 release tag との
      `package.json` diff で `lucide-react` / `@radix-ui/*` / `tailwindcss`
      の bump を検出し、該当ファミリの parity VRT (`Icon parity` /
      Checkbox / Radio / Separator / Switch parity / manifest 再生成) を
      強制実行。Radix の Tooltip / Dialog / Toast / Select (区分 C/D —
      parity story 無し) と `react-slot` は manual 検証行で別立て扱い。
      PR [#282](https://github.com/yasmro/schatten/issues/282) の Lucide path-inline pin 事故を構造的に防ぐ。
    - 不可逆操作 (version bump / tag / npm publish / GitHub Release) は
      既存 `/release` slash command に hand-off。skill 側は一切 mutate
      しない (人間の承認境界を保つ設計)。
  - `.claude/skills/prepare-release/grep.test.ts`: SKILL.md 内の parity
    grep パターンと、ディスク上の `*.parity.stories.tsx` /
    `*.parity.vrt.spec.ts` の整合を CI で pin する Vitest gate。grep に
    実在しない component 名が紛れ込んで Playwright `--grep` が 0 マッチで
    exit 0 を返す (= false greenlight) のを防ぐ。
  - `.claude/rules/api-stability.md`: "Visual-contract-affecting dependencies"
    セクションを新設。`lucide-react` / `@radix-ui/*` / `react-slot` /
    `tailwindcss` の SSOT 化。今後同種の dep が増えたとき skill / 他 tooling
    はこのテーブルを参照する。

  公開 API (React props / CSS class / CSS variables / TypeScript types) に
  変更なし — 内部 tooling のみ。

## 0.8.0

### Minor Changes

- [#236](https://github.com/yasmro/schatten/pull/236) [`4cc34a1`](https://github.com/yasmro/schatten/commit/4cc34a1436a0f7ea7625af7c88205f8ab26ac9f4) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: introduce brand-named semantic tokens `--color-vermillion` (朱) and
  `--color-indigo` (藍), each with a `-foreground` pair. They expose the two
  Schatten brand colors at the semantic layer — naming the _color itself_ rather
  than a meaning — so consumers and internal code reference `--color-vermillion`
  instead of the `--vermillion-*` primitive scale. Registered in the Tailwind
  `@theme`, so `text-vermillion` / `bg-vermillion` / `text-indigo` / `bg-indigo`
  utilities are available.

  Both brand colors share one shade rule: `-600` in light, `-400` in dark, with
  the `-foreground` pair `paper-white` (light) / `paper-white-inverted` (dark).
  This is the only pair where every `*-foreground`-on-base solid pairing clears
  WCAG AA for normal text in both hues — vermillion 4.86 (light) / 6.84 (dark),
  indigo 7.03 (light) / 5.73 (dark). A 1-step shift (`-600`/`-500`) would fail
  indigo dark and `-500`/`-400` would fail vermillion light, because the two hue
  ramps differ; the AA-safe shade is therefore mode-driven, not 1-step-driven.

  BREAKING: the `--color-accent` / `--color-accent-foreground` semantic tokens are
  removed, and `Text`'s `color` prop no longer accepts `"accent"`. With the
  Pattern B `accent` tone already gone ([#205](https://github.com/yasmro/schatten/issues/205)), `--color-accent`'s only consumer
  was `Text` — rather than keep a redundant role token aliasing vermillion, brand
  color on `Text` now goes through the new brand-named tokens directly.

  Migration:

  - `<Text color="accent">` → `<Text color="vermillion">`. `Text` also gains
    `color="indigo"` for the second brand color.
  - Replace `bg-accent` / `text-accent` / `var(--color-accent)` (and the
    `-foreground` variants) with the `vermillion` equivalent.
  - The `tokens` export drops `tokens.color.accent` / `tokens.color.accentForeground`;
    use `tokens.color.vermillion` / `.vermillionForeground` (or `.indigo` /
    `.indigoForeground`) instead.

  This is settled now (pre-1.0) deliberately: `api-stability.md` freezes CSS
  variable names as BREAKING from v1.0.0, so the brand-named tokens land in
  v0.8.0 to bake before the contract goes live. Closes [#185](https://github.com/yasmro/schatten/issues/185).

- [#232](https://github.com/yasmro/schatten/pull/232) [`18a172e`](https://github.com/yasmro/schatten/commit/18a172e0e1ad1d5487254dcb838759d7ea8731c5) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: add the `--indigo-*` primitive color scale (`--indigo-50` … `--indigo-950`),
  a traditional Japanese indigo (藍) intended as the second brand color alongside
  vermillion (朱). Registered in the Tailwind `@theme` so `bg-indigo-*` / `text-indigo-*`
  utilities are available, and shown in the Foundation/Color story next to the
  vermillion scale.

  This is purely additive — `--blue-*` is untouched and stays pinned to the
  `info` semantic. The indigo scale is hue-shifted toward purple (hue 265) and
  more saturated than `blue`, giving a deeper, darker character. OKLCH values and
  WCAG AA contrast were verified in [#181](https://github.com/yasmro/schatten/issues/181): solid treatment reaches 4.78 (light, on
  `-500`) and 5.73 (dark, on `-400`).

  Semantic-layer integration (`--color-indigo`) lands separately in [#185](https://github.com/yasmro/schatten/issues/185).

- [#223](https://github.com/yasmro/schatten/pull/223) [`2a23290`](https://github.com/yasmro/schatten/commit/2a232904191d589b961097081d3f11730f9bac8b) Thanks [@yasmro](https://github.com/yasmro)! - BREAKING: `lucide-react` is now an **optional peer dependency** instead of a
  bundled `dependency`, and the `icon` props on `Button`, `Badge`, `Input`, and
  `Dialog` accept a Lucide **icon component** instead of a string name.

  Why: `Button` / `Badge` / `Input` imported the whole icon barrel from
  `lucide-react` (`import { icons }`) and resolved icons dynamically
  (`icons[name]`). A dynamic lookup is not statically analyzable, so consumer
  bundlers could not tree-shake it — importing _any_ schatten component pulled
  all 1952 Lucide icon modules (~1.37 MB of unminified icon source) into the
  consumer bundle. schatten's own `dist` now contains zero whole-barrel imports.

  Migration:

  - Install `lucide-react` yourself when you use schatten's React components —
    it is now a peer dependency (`pnpm add lucide-react`). `Toast`, `Callout`,
    `Select`, `Field`, and `Dialog` render Lucide icons internally, and
    `Button` / `Badge` / `Input` accept Lucide icons via `icon` props. It is
    declared `optional` in `peerDependenciesMeta` only so that Layer A
    (CSS / token-only) consumers are not warned about it.
  - Pass the icon **component** imported from `lucide-react`, not a name string:

    ```tsx
    // Before
    import { Button } from "@yasmro/schatten";
    <Button icon="Search" />;

    // After
    import { Search } from "lucide-react";
    import { Button } from "@yasmro/schatten";
    <Button icon={Search} />;
    ```

    This applies to `Button` / `Badge` `icon`, `Input` `iconLeft` / `iconRight`,
    and `Dialog`'s `actionButton.icon` / `cancelButton.icon` /
    `subActionButton.icon`.

  Types: the `IconName` type export (previously `keyof typeof icons`) is removed.
  Icon props are now typed as `LucideIcon` — import that type from `lucide-react`
  if you need it.

- [#240](https://github.com/yasmro/schatten/pull/240) [`236948e`](https://github.com/yasmro/schatten/commit/236948e21e31da7611fd27f9d4225d36fe562d83) Thanks [@yasmro](https://github.com/yasmro)! - CSS API: add the `--red-*` primitive color scale (`--red-50` … `--red-950`) and
  repoint the `error` / `destructive` semantics off `vermillion` onto it.

  `vermillion` previously backed both the brand 朱 (`--color-vermillion`) and the
  danger colors (`--color-error` / `--color-destructive`), so retuning brand
  vermillion would drag every error state along (and vice versa). The new `red`
  scale is a dedicated danger primitive — `error` / `destructive` now reference
  `--red-*`, while `--color-vermillion` keeps referencing `--vermillion-*`.

  `red` is a **value-identical copy** of `vermillion` today (hue 22, same L/C at
  every shade), so this is a governance seam, not a visual change — **no token
  value moves and VRT snapshots are unchanged**. The split exists purely to make
  brand 朱 and danger red independently retunable. Whether danger red _should_
  diverge in hue from brand vermillion is a designer-owned call tracked in design
  spike [#239](https://github.com/yasmro/schatten/issues/239).

  Registered in the Tailwind `@theme` so `bg-red-*` / `text-red-*` utilities are
  available, and shown in the Foundation/Color story next to the vermillion scale.

### Patch Changes

- [#228](https://github.com/yasmro/schatten/pull/228) [`63e1744`](https://github.com/yasmro/schatten/commit/63e1744d9960f7532ff933d4ab1a1796abf18b93) Thanks [@yasmro](https://github.com/yasmro)! - Make the `components/lv1` barrel tree-shakeable. `tsup` now builds each lv1
  component as its own ESM entry with code splitting, instead of bundling all 17
  components into one shared chunk. A consumer importing a single component drops
  ~81 % — `import { Button }` goes from ~48 KB to ~9.7 KB (minified + brotlied).

  No public API change: the `package.json#exports` map is unchanged (same `.`
  and `./components/lv1` entry points), and consumers write imports exactly as
  before. CJS keeps the single-barrel build (`require()` does not tree-shake).
  See `docs/decisions/2026-05-lv1-barrel-tree-shaking.md` for the root-cause
  analysis and the alternatives that were rejected.

- [#223](https://github.com/yasmro/schatten/pull/223) [`2a23290`](https://github.com/yasmro/schatten/commit/2a232904191d589b961097081d3f11730f9bac8b) Thanks [@yasmro](https://github.com/yasmro)! - Normalize the `package.json` `sideEffects` field to `["*.css", "**/*.css"]`.
  This declares that only CSS imports carry side effects, so consumer bundlers
  can tree-shake unused component exports more aggressively. No public API
  change.

- [#220](https://github.com/yasmro/schatten/pull/220) [`68b0be2`](https://github.com/yasmro/schatten/commit/68b0be2b23e12d70759e55d7bff67784c1a5e098) Thanks [@yasmro](https://github.com/yasmro)! - Add the `no-primitive-color` Biome GritQL linter plugin. It bans Tailwind
  primitive color utility classes (`bg-red-500`, `text-gray-700`,
  `ring-vermillion-600`, …) in component JSX, enforcing the
  state-token-guideline contract that components consume only Layer-2 semantic
  tokens. Scoped to `src/components/**/*.tsx` (stories and tests are exempt).
  Internal tooling only — no change to the published package surface.

- [#225](https://github.com/yasmro/schatten/pull/225) [`94ecae0`](https://github.com/yasmro/schatten/commit/94ecae0a0162fb40b9ac2aff7fc3a8e9ec320ddf) Thanks [@yasmro](https://github.com/yasmro)! - SSR (Next.js App Router) support: the React component build now carries a
  `'use client'` directive at the top of every emitted bundle.

  Why: `src/` declares zero `'use client'` directives, so importing Schatten
  components from a Next.js App Router **Server Component** failed the build —
  the bundled output relies on client-only React features (hooks, context,
  Radix event wiring) that a Server Component cannot run.

  The directive is injected via tsup's `banner.js` on the React build group
  only. `dist/components/index.{js,cjs}` and `dist/components/lv1/index.{js,cjs}`
  (and their shared chunk) now start with `'use client';`. The framework-agnostic
  build groups — `variants` / `tokens` / `themes/seasonal` — are intentionally
  left untouched so non-React consumers (Astro, plain CSS) are not marked
  client-only. Type definitions (`.d.ts`) are unaffected.

## 0.7.0

### Minor Changes

- [#205](https://github.com/yasmro/schatten/pull/205) [`192b6ab`](https://github.com/yasmro/schatten/commit/192b6ab271bacf84dad80d596d022348588d4a0b) Thanks [@yasmro](https://github.com/yasmro)! - BREAKING: Pattern B (Badge / Callout / Toast) prop name and variant vocabulary
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

- [#217](https://github.com/yasmro/schatten/pull/217) [`2a3ed83`](https://github.com/yasmro/schatten/commit/2a3ed83e1550139a66e2409ac49504b0a857a61e) Thanks [@yasmro](https://github.com/yasmro)! - feat(theme): seasonal Special themes now declare an explicit token allowlist
  per [`theme-architecture.md`](.claude/rules/theme-architecture.md) ("Allowlist
  mechanism"). Closes [#114](https://github.com/yasmro/schatten/issues/114).

  **New exports** from `@yasmro/schatten/themes/seasonal`:

  - `SeasonalThemeId` — full `data-theme` value type
    (`'season--spring-early' | … | 'season--winter-deep'`), matching the
    attribute emitted by `getSeasonAttribute()` / `applySeasonTheme()`.
  - `SeasonalThemeMetadata` — `{ name, allowedTokens, description? }`. The
    per-theme contract for which CSS custom properties this theme may
    override.
  - `SEASONAL_THEME_METADATA` — `Record<SeasonalThemeId, SeasonalThemeMetadata>`
    covering all eight shipped seasonal palettes. Today every theme allows
    only `--color-theme-*`; Mode-owned tokens (surfaces, foregrounds,
    borders, disabled/readOnly) and `--color-info-*` are explicitly out of
    bounds.

  **Per-theme CSS comments** in
  [`src/themes/seasonal/themes.css`](src/themes/seasonal/themes.css) now
  state each block's allowlist next to the selector, mirroring the
  machine-readable contract.

  **Phase 5 placeholder**: [`scripts/check-theme-allowlist.mjs`](scripts/check-theme-allowlist.mjs)
  is a no-op stub. Mechanical enforcement (fail the build when a Special
  overrides a token outside its allowlist) will ship in a later release
  sharing the scan pipeline with
  [#200](https://github.com/yasmro/schatten/issues/200).

  **No runtime change**: existing seasonal themes already only override
  `--color-theme-*`. This change pins the contract — it does not move any
  pixels.

- [#218](https://github.com/yasmro/schatten/pull/218) [`36afa8e`](https://github.com/yasmro/schatten/commit/36afa8e6436d78de8e892d2a109880dd126cfdea) Thanks [@yasmro](https://github.com/yasmro)! - feat(docs): add `Foundation/ThemeAudit` Storybook story for 16-pattern visual verification.

  Implements the audit story called for in
  [`theme-architecture.md` §"v0.7.0 migration plan"](.claude/rules/theme-architecture.md#v070-migration-plan):
  the Mode (light/dark) × Special (8 seasonal) matrix is now visible in a single
  viewport, and pinned by VRT.

  Closes [#115](https://github.com/yasmro/schatten/issues/115).

  **Stories** (under `src/docs/foundations/ThemeAudit.stories.tsx`)

  - **Overview (16 patterns)** — 8 Specials × 2 Modes grid in one render.
    Rows = Special palette, columns = Mode. Regressions to any of the 16 cells
    surface in one screenshot.
  - **Per Special** — argTypes-driven, single-cell inspection of one (Special,
    Mode) at a time. Bypasses the Storybook toolbar so the URL `args=` selector
    is the only source of theming (this is what the VRT spec drives).
  - **Cascade Verification** — table showing canonical tokens against four
    scenarios (light/dark × none/spring-early), so the two-axis ownership
    contract is empirically observable: theme-\* tokens move along the Special
    axis, foreground / background / border / disabled along the Mode axis,
    and `--color-info` stays pinned to blue everywhere.

  **VRT** — `src/docs/foundations/ThemeAudit.vrt.spec.ts` ships 18 baselines:
  overview (full grid), 16 per-special cells, and the cascade table.

  **Implementation note** — the overview renders every Special in the same
  viewport by injecting a one-line transform of the production seasonal CSS
  (`:root[data-theme=...]` → `.theme-audit-cell[data-theme=...]`), loaded via
  Vite's `?raw` import. Zero parallel CSS to maintain: when
  [`src/themes/seasonal/themes.css`](src/themes/seasonal/themes.css) changes,
  the audit story picks the update up automatically.

  **Consumer impact** — none. Storybook-only docs surface; nothing changes in
  `dist/` or the public component / token APIs.

### Patch Changes

- [#210](https://github.com/yasmro/schatten/pull/210) [`67149e2`](https://github.com/yasmro/schatten/commit/67149e25400591124b2d27c2d9e9f20994e19468) Thanks [@yasmro](https://github.com/yasmro)! - chore(build): drop the empty `./components/lv2` exports entry until lv2 lands.

  `src/components/lv2/index.ts` is still `export {}` and the matching
  `package.json#exports["./components/lv2"]` plus the `tsup` entry were
  exposing an empty surface to consumers — a signal that "an API is here but
  incomplete." Until lv2 components ship in v0.9.0, the cleaner posture is
  to not advertise the sub-path at all.

  Closes [#110](https://github.com/yasmro/schatten/issues/110).

  **Changes**

  - `package.json#exports["./components/lv2"]` is removed. The remaining
    entries (`.`, `./components`, `./components/lv1`, …) are unchanged.
  - `tsup.config.ts` no longer lists `components/lv2/index` as an entry, so
    `pnpm build` does not emit `dist/components/lv2/`.
  - `src/components/lv2/index.ts` is **kept** as `export {}` — it's the
    placeholder that v0.9.0 will populate when the first lv2 lands. Removing
    the file would force re-creating it (and re-wiring the tsup / exports
    config) later for no gain today.

  **Restoration plan (v0.9.0)**

  When the first lv2 components (`FormField`, …) ship, re-add the
  `./components/lv2` exports entry and the `components/lv2/index` tsup entry
  in the same change.

  **Consumer impact**

  Effectively none — `import … from '@yasmro/schatten/components/lv2'`
  previously resolved to an empty module, so no real callsite exists. Anyone
  who somehow had that import will get a clear resolution error pointing
  back at this changeset rather than a silent empty import.

- [#207](https://github.com/yasmro/schatten/pull/207) [`99a613b`](https://github.com/yasmro/schatten/commit/99a613b119744f35f15d5cef22ca43fc3d571658) Thanks [@yasmro](https://github.com/yasmro)! - fix(build): root entry (`.`) now resolves to the components bundle, plus
  build-hygiene cleanup.

  Until now, `package.json#exports["."]` only declared `style`, so
  `import { Button } from '@yasmro/schatten'` failed (`ERR_PACKAGE_PATH_NOT_EXPORTED`).
  This was a build-config oversight, not a deliberate design choice — the
  sub-path entries (`./components/lv1`, `./variants`, …) continued to work.

  Closes [#109](https://github.com/yasmro/schatten/issues/109).

  **Resolution after this fix**

  ```ts
  import { Button } from "@yasmro/schatten"; // ✅ now works
  import { Button } from "@yasmro/schatten/components/lv1"; // ✅ still works
  import "@yasmro/schatten/schatten.css"; // ✅ still works
  ```

  **Primary changes**

  - `exports["."]` gains `types` / `import` / `require` entries pointing at
    `dist/components/index.{d.ts,js,cjs}` so the root specifier resolves to
    the full lv1 surface. `style` is reordered above the JS conditions so
    bundlers that use the `style` pipeline still pick up `dist/schatten.css`
    (Node's conditional-exports resolution short-circuits at the first
    matching condition).
  - Top-level `main` / `module` / `types` are repointed at the components
    bundle, replacing stale `./dist/index.{js,d.ts}` paths that never
    existed in `dist/`.
  - `src/components/index.ts` no longer re-exports the (currently empty)
    lv2 barrel, so the root entry has no transitive dependency on lv2. The
    `./components/lv2` sub-path entry is unchanged — its removal is scoped
    to the next issue.

  **Build-hygiene additions (in scope for this fix)**

  - `sideEffects: ["**/*.css", "./dist/**/*.css"]` declared so bundlers can
    tree-shake unused components from the new root entry. No Schatten
    module has top-level DOM / timer / network side effects.
  - `types` conditions are split into `import` / `require` sub-conditions
    pointing at `.d.ts` / `.d.cts` respectively. Without this split,
    publint warned that `types` would be interpreted as ESM under the
    `require` condition.
  - `publint` is added as a dev dependency with a `pnpm lint:pkg` script,
    to mechanize the four classes of bug uncovered while triaging this
    issue (missing JS conditions, condition-order conflicts, non-existent
    `main` paths, dual-format `types` mismatch).
  - The pre-existing `clean: true` on the first `tsup` config block is
    moved to a top-level `pnpm clean:dist` (rimraf) step. Running clean
    from one config inside a parallel `defineConfig([…])` array was
    racing with the other configs' DTS emit and silently wiping
    `dist/themes/seasonal/index.d.{ts,cts}`. Both files now persist after
    build.
  - CSS-only export entries (`./schatten.css`, `./core/tokens`,
    `./themes/default`, `./themes/seasonal/themes.css`) are collapsed to
    string-form values — they resolved identically under `import` and
    `require`, so the conditional wrapper added noise.
  - README is updated to recommend `import { Button } from '@yasmro/schatten'`
    as the canonical form, with the sub-path imports documented as the
    bundle-size-sensitive alternative.

  No public API surface changes — this is strictly an additive fix to make
  the documented convenience entry resolve, plus the build-hygiene
  follow-ups it surfaced.

## 0.6.0

### Minor Changes

- [#202](https://github.com/yasmro/schatten/pull/202) [`55b5e5d`](https://github.com/yasmro/schatten/commit/55b5e5d1cf6fb3ac3c0d8961e9ee2bb83cc700c7) Thanks [@yasmro](https://github.com/yasmro)! - feat(lv1): add `readOnly` styling to `Input` and `Textarea` (closes [#183](https://github.com/yasmro/schatten/issues/183))

  `Input` and `Textarea` now render with a warm-tinted, non-interactive
  surface when `readOnly` is set, using the
  [`--color-surface-readonly`](src/core/tokens/semantic.css) /
  [`--color-border-readonly`](src/core/tokens/semantic.css) tokens
  introduced in [#180](https://github.com/yasmro/schatten/issues/180). Until now the two components forwarded the HTML
  `readonly` attribute but were visually indistinguishable from the
  editable default, which made the "this value is informational, not
  editable" intent invisible to users.

  The styling intentionally differs from `disabled`:

  |                 | `disabled`                         | `readOnly`                                |
  | --------------- | ---------------------------------- | ----------------------------------------- |
  | Surface         | Cool gray (`bg-surface-disabled`)  | Warm tint (`bg-surface-readonly`)         |
  | Foreground      | Muted (`text-foreground-disabled`) | Normal — the value stays readable         |
  | Cursor          | `cursor-not-allowed`               | `cursor-text`                             |
  | Focus           | Not focusable                      | Focusable, value is selectable / copyable |
  | Form submission | Value omitted                      | Value submitted                           |

  ### Priority when states stack

  The wrapper (`Input`) and the textarea element (`Textarea`) use the same
  priority chain via `cn()` + `tailwind-merge`:

  ```
  disabled  >  readOnly  >  isError
  ```

  - `readOnly + isError` → readOnly surface wins visually, but
    `aria-invalid="true"` is still emitted so assistive tech sees the error.
  - `disabled + readOnly` → disabled wins visually (stronger constraint).

  This mirrors the existing `disabled > isError` policy from [#182](https://github.com/yasmro/schatten/issues/182).

  ### Out of scope

  - `Field` does not yet propagate `readOnly` through `FieldContext` — that
    is tracked separately. Consumers wanting field-driven readOnly should
    pass `readOnly` directly to `Input` / `Textarea` for now.
  - `Select` (HTML has no `readonly` attribute on `<select>`),
    `Checkbox` / `Radio` / `Switch` (UX intent of read-only is unclear for
    binary controls) are intentionally not included.

  Stories added per component: `ReadOnly`, `Disabled vs ReadOnly`,
  `ReadOnly with error`. VRT specs cover all three across light / dark.

- [#197](https://github.com/yasmro/schatten/pull/197) [`7d49b5a`](https://github.com/yasmro/schatten/commit/7d49b5a8fd5ecf3cabf58e4bdb10fec049867346) Thanks [@yasmro](https://github.com/yasmro)! - feat(tokens): add non-interactive state semantic tokens (`disabled` / `readOnly`)

  Adds five new semantic CSS variables in
  [`semantic.css`](src/core/tokens/semantic.css) and registers them with
  Tailwind v4 via [`base.css`](src/core/tokens/base.css), so form-control
  authors can express `disabled` and `readOnly` through token names instead
  of the current cross-component `cursor-not-allowed opacity-50` pattern.

  The two non-interactive states have intentionally different visual
  directions:

  |                 | `disabled`                 | `readOnly`                                        |
  | --------------- | -------------------------- | ------------------------------------------------- |
  | Intent          | This control is not usable | The value is informational, the control is static |
  | Form submission | Value is not submitted     | Value is submitted                                |
  | Focus           | Not focusable              | Focusable                                         |
  | Visual          | Muted / faded (cool gray)  | Subtle / static (warm tint)                       |

  Tokens added:

  ```css
  /* disabled — surface + foreground + border */
  --color-surface-disabled
  --color-foreground-disabled
  --color-border-disabled

  /* readOnly — surface + border (foreground stays normal so the value stays readable) */
  --color-surface-readonly
  --color-border-readonly
  ```

  All five are defined in both modes (`:root`, `@media (prefers-color-scheme: dark)`,
  and `.dark`). Tailwind utilities — `bg-surface-disabled`,
  `text-foreground-disabled`, `border-border-disabled`, `bg-surface-readonly`,
  `border-border-readonly` — are generated via the
  [`@theme`](src/core/tokens/base.css) registration.

  The tokens follow the existing 3-layer hierarchy
  ([state-token-guideline.md](.claude/rules/state-token-guideline.md)): they
  sit at the semantic layer and reference primitives. They are NOT state
  semantic tokens in the `error`/`success`/… sense — there is no `hover` slot —
  so they do not follow the 4-token shape.

  A new "Non-Interactive States" + "Disabled vs ReadOnly (a11y audit)"
  section is added to `Foundation/Color` so designers can verify both
  modes visually.

  This change is additive — no component currently consumes the tokens, so
  no VRT impact. Component-side adoption (replacing `opacity-50` and
  introducing readOnly styling on Input/Textarea) lands in separate
  follow-up issues.

  Also updates two rule docs to acknowledge the new category:

  - [`state-token-guideline.md`](.claude/rules/state-token-guideline.md) gains
    a "Non-interactive state tokens" section explaining the 3 / 2-slot shape,
    why there is no `hover` slot, and why `disabled` / `readOnly` use cool
    and warm hue families respectively.
  - [`theme-architecture.md`](.claude/rules/theme-architecture.md) pins the
    five new tokens to the Mode axis and forbids Specials from overriding
    them — disabled means the same thing regardless of season or brand.

  A new [`docs/decisions/`](docs/decisions/) directory is introduced for
  design decision logs, with
  [`2026-05-non-interactive-state-tokens.md`](docs/decisions/2026-05-non-interactive-state-tokens.md)
  as its first entry. The log captures the alternatives considered (lightness
  shifts, pattern overlays, dashed borders) and explains why hue family was
  the chosen differentiator.

  Closes [#180](https://github.com/yasmro/schatten/issues/180). Follow-ups: [#198](https://github.com/yasmro/schatten/issues/198) (designer-review step), [#199](https://github.com/yasmro/schatten/issues/199) (Form States
  foundation page), [#200](https://github.com/yasmro/schatten/issues/200) (semantic→primitive resolve test).

- [#201](https://github.com/yasmro/schatten/pull/201) [`3dad419`](https://github.com/yasmro/schatten/commit/3dad419b38601ad3128b5680c4f2acec9ae92fc4) Thanks [@yasmro](https://github.com/yasmro)! - refactor(lv1): replace `opacity-50` disabled treatment with semantic disabled tokens (system-wide sweep)

  Adopts the non-interactive state tokens introduced in [#197](https://github.com/yasmro/schatten/issues/197)
  (`--color-surface-disabled`, `--color-foreground-disabled`,
  `--color-border-disabled`) across all seven lv1 form / action components
  that previously expressed disabled via the cross-cutting
  `cursor-not-allowed opacity-50` pattern.

  `cursor-not-allowed` is preserved. `opacity-50` is removed entirely
  from the lv1 surface — the disabled look now flows through the same
  semantic token layer as every other Schatten chrome decision, instead
  of a global alpha multiplier.

  ## Per-component mapping

  | Component                                    | Disabled treatment now applies                                                                                                                                                                                                    |
  | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `Input`                                      | wrapper: `bg-surface-disabled` + `border-border-disabled` + `text-foreground-disabled`; `<input>`: `text-foreground-disabled`                                                                                                     |
  | `Textarea`                                   | `bg-surface-disabled` + `border-border-disabled` + `text-foreground-disabled`                                                                                                                                                     |
  | `Select` (trigger)                           | `bg-surface-disabled` + `border-border-disabled` + `text-foreground-disabled`                                                                                                                                                     |
  | `Select` (item)                              | `text-foreground-disabled` only — items are rows inside a popup; recolouring the surface would make disabled items more prominent than enabled ones                                                                               |
  | `Checkbox`                                   | Root: `bg-surface-disabled` + `border-border-disabled` + `text-foreground-disabled`; indicator switched to `text-current` so the check-mark inherits the muted foreground                                                         |
  | `Radio`                                      | Root: same triple as Checkbox; indicator dot switched to `bg-current` so it inherits the muted foreground                                                                                                                         |
  | `Switch`                                     | Root: `bg-surface-disabled` + `border-border-disabled`, doubled with `disabled:data-[state=checked]:*` so the disabled tone wins over the checked tone; thumb: `group-disabled:bg-foreground-disabled` (also doubled for checked) |
  | `Button` (filled — `primary`, `destructive`) | `bg-surface-disabled` + `text-foreground-disabled`                                                                                                                                                                                |
  | `Button` (`secondary`)                       | `border-border-disabled` + `text-foreground-disabled`                                                                                                                                                                             |
  | `Button` (`tertiary`, `inverted`, `link`)    | `text-foreground-disabled`                                                                                                                                                                                                        |

  External-label adjacencies (`<label>` rendered by `Checkbox` /
  `Radio` / `Switch` alongside the control) also moved from
  `opacity-50` to `text-foreground-disabled` for consistency.

  ## Why

  - **Semantic over alpha.** `opacity-50` is a blunt instrument: it
    dims everything in the subtree uniformly, including focus rings,
    borders, and any nested icons. With tokens, each piece of the
    control reads its disabled colour from a named slot, so designers
    and theme authors can retune the disabled aesthetic at one place.
  - **Theme-safe.** The five non-interactive tokens are pinned to the
    Mode axis (see [theme-architecture.md](.claude/rules/theme-architecture.md))
    — Specials cannot override them. A seasonal palette that brand-tints
    the disabled state would be semantically wrong, and the token system
    enforces this mechanically.
  - **Better dark-mode behaviour.** A 50%-alpha element on a dark
    background loses too much luminance contrast against the surround.
    Disabled-state tokens use mode-specific primitives, so the muted
    feel is intentional in both Modes rather than being whatever
    alpha-50 happens to produce.

  ## Priority over `isError`

  When a form control is both `disabled` and `isError`, the disabled
  visual now wins via Tailwind's `disabled:` modifier specificity
  (`:disabled` pseudo-class adds one specificity over the unscoped
  `bg-error-subtle` / `border-error`). This matches the user's mental
  model: an unusable control should not advertise validation state.

  ## VRT impact

  Disabled-state baselines regenerated for `Button`, `Input`, `Select`,
  `Switch`, `Textarea`, and `FieldSet` (the latter renders disabled
  child inputs). `Checkbox` and `Radio` disabled snapshots came out
  pixel-identical to their old `opacity-50` baselines under the
  existing 1% diff threshold — the visual delta on a 5-pixel control
  is below that bound. `Button`'s `loading-*` snapshots also
  regenerated because `isLoading` internally sets `disabled`.

  Closes [#182](https://github.com/yasmro/schatten/issues/182). Depends on [#197](https://github.com/yasmro/schatten/issues/197) (token definitions).

### Patch Changes

- [#194](https://github.com/yasmro/schatten/pull/194) [`1ba6462`](https://github.com/yasmro/schatten/commit/1ba6462861ac0aa44ef1ccdce9ca4ca519cbc0b3) Thanks [@yasmro](https://github.com/yasmro)! - docs(rule): add `.claude/rules/component-architecture.md` (lv1/lv2 folders, compound vs flat, `asChild` no-new-additions default, polymorphic `as` not adopted, unified context consumption, one-way dependency direction, lv1-local `.css` allowlist)

  Codifies the component-level design choices that have been implicit until now.
  Complements [`component-api-conventions.md`](.claude/rules/component-api-conventions.md)
  (added in [#192](https://github.com/yasmro/schatten/issues/192), which holds the authoritative public prop API shape).

  - **lv1 vs lv2 folders**: lv1 is single-responsibility primitives, lv2 is
    composition. The promotion criterion ("when does a recurring composition
    become an lv2?") is intentionally deferred — it will be defined as a
    follow-up rule when the first lv2 lands (~v0.9.0).
  - **Compound vs flat**: Radix-wrapping components ship as compound (mirror
    Radix part names one-to-one to preserve ref / context / aria wires);
    self-built primitives ship as flat. Self-built composition belongs in lv2,
    not in a compound lv1. `Toast`'s imperative API is called out as the
    notification-class special case.
  - **`asChild` — no new lv1 additions by default**. Cross-references
    `component-api-conventions.md` for the authoritative adoption list and
    the 3 criteria. Adds two further constraints on top: form inputs and
    portal content must never expose `asChild`, regardless of how the 3
    criteria appear to fit. The variants-function pattern (`buttonVariants` /
    `textVariants` from `@yasmro/schatten/variants`) is documented as the
    preferred alternative for "render as a different element" needs.
  - **Polymorphic `as` prop is not adopted** as a general pattern. Carved
    exception: `Text` exposes a fixed enumeration
    `as?: 'p' | 'span' | 'h1'…'h6'` — the union is closed, the attribute
    surface is uniform, and inference cost is zero.
  - **Context consumption is unified into one rule**: every form lv1 reads
    `isError` / `disabled` / `describedBy` from `FieldContext` with prop
    fallback. Only externally-labelled components (`Input`, `Textarea`,
    `Select`) additionally consume `field.id`. `FieldSetContext` is consumed
    only by `Field`, which collapses-and-re-provides — form lv1s never read
    `FieldSetContext` directly.
  - **Dependency direction is strictly one-way**:
    `lib` / `contexts` / `variants` → `lv1` → `lv2`. `lv1 → lv2` is forbidden
    (an lv1 needing an lv2 is misclassified); `lv1 → other lv1` is allowed
    (e.g. `Dialog` embedding `Button` in its action row); barrel-export
    laundering (reaching `lib` via `lv1/index.ts`) is forbidden.
  - **lv1-local `.css` allowlist**: only for things Tailwind / CVA cannot
    express — `@keyframes`, `animation-play-state` conditional on data-state,
    `prefers-reduced-motion`, component-scoped CSS variables. The four
    existing files (Tooltip.css, Dialog.css, Toast.css, Spinner.css) are all
    animation-only and comply.

  The rule is referenced from CLAUDE.md / AGENTS.md and the `review-pr`
  command checklist.

  No public API or component behaviour changes.

- [#196](https://github.com/yasmro/schatten/pull/196) [`2952fb5`](https://github.com/yasmro/schatten/commit/2952fb5bfdabc1cecd55ac25437c9ab2901a44e7) Thanks [@yasmro](https://github.com/yasmro)! - chore(hook): add `.claude/settings.json` hooks for lv1 edit-time checks

  Adds two non-blocking Claude Code hooks so test/vrt-less `lv1` additions
  get caught at edit time (AI or human), without relying on post-hoc CI.

  - **PostToolUse(Edit|Write|MultiEdit)** → [`scripts/check-lv1-companions.mjs`](scripts/check-lv1-companions.mjs).
    When the edit lands on `src/components/lv1/{X}/{X}.tsx`, verifies that
    `{X}.test.tsx` and `{X}.vrt.spec.ts` exist as siblings; surfaces a
    system-reminder via `hookSpecificOutput.additionalContext` if missing.
  - **Stop** → [`scripts/check-lv1-export-integrity.mjs`](scripts/check-lv1-export-integrity.mjs).
    Diffs `lv1` component directories against the `from './...'` re-exports
    in `src/components/lv1/index.ts` (both directions, so orphan exports
    are flagged too).

  Both scripts read the Claude Code stdin JSON contract
  (`tool_input.file_path`, `$CLAUDE_PROJECT_DIR`), exit `0` always, and
  emit messages via `additionalContext` so they reach Claude as a
  system-reminder. node-only, no shell dependencies — works on Windows.
  Complements (does not replace) the existing lefthook pre-commit step.

  Repo-tooling change only — no source, no published artifact change.

  Closes [#107](https://github.com/yasmro/schatten/issues/107).

- [#195](https://github.com/yasmro/schatten/pull/195) [`8e35e30`](https://github.com/yasmro/schatten/commit/8e35e3024bfd79980522d2f618ac2588342a9f57) Thanks [@yasmro](https://github.com/yasmro)! - refactor(tokens): rename `--color-primary-*` → `--color-theme-*` (and `bg-primary-*` utilities → `bg-theme-*`)

  The CSS variable that drives the Special-axis color scale is renamed from
  `--color-primary-*` to `--color-theme-*`, matching the `data-theme` attribute
  that controls it. The legacy `--color-primary-*` name conflated "the brand's
  primary color" with "the slot the active theme drives" — the new name fixes
  the conflation. See [`.claude/rules/theme-architecture.md`](.claude/rules/theme-architecture.md)
  (PR [#189](https://github.com/yasmro/schatten/issues/189)) for the full Mode × Special two-axis model.

  Changes:

  - [`src/core/tokens/semantic.css`](src/core/tokens/semantic.css) — the default
    chain `--color-primary-50..950: var(--blue-*)` becomes `--color-theme-50..950`.
  - [`src/core/tokens/base.css`](src/core/tokens/base.css) — Tailwind v4 `@theme`
    registration updated, so `bg-theme-500` / `text-theme-600` / etc. are the
    generated utility classes.
  - [`src/themes/default/colors.css`](src/themes/default/colors.css) — default
    theme references the new names.
  - [`src/themes/seasonal/themes.css`](src/themes/seasonal/themes.css) — eight
    seasonal palettes (88 declarations + the transition list) use the new names.
  - [`src/tokens.ts`](src/tokens.ts) — the TS-typed `tokens.color` export renames
    `primary50..primary950` keys to `theme50..theme950`, pointing at
    `var(--color-theme-*)`.
  - [`src/docs/Color.stories.tsx`](src/docs/Color.stories.tsx) — the "Primary"
    scale subsection becomes "Theme" and uses `bg-theme-*` utilities.

  This is a breaking change for any consumer that references `--color-primary-*`,
  `bg-primary-*` / `text-primary-*` / `border-primary-*` utility classes, or the
  `tokens.color.primary*` TS keys. Migrate via:

  ```diff
  - background-color: var(--color-primary-500);
  + background-color: var(--color-theme-500);

  - <div className="bg-primary-500" />
  + <div className="bg-theme-500" />

  - const fill = tokens.color.primary500
  + const fill = tokens.color.theme500
  ```

  The `info` semantic is unaffected — it remains pinned to `blue-*` directly,
  independent of the theme scale. Action-component `variant="primary"` (on
  `Button`) is also unaffected — that's a _role_ name, not a token name.

  Out of scope (lands in v0.7.0): allowlist enforcement, 16-pattern audit story,
  and the matching `data-season` → `data-theme` rename (shipped separately).

- [#195](https://github.com/yasmro/schatten/pull/195) [`8e35e30`](https://github.com/yasmro/schatten/commit/8e35e3024bfd79980522d2f618ac2588342a9f57) Thanks [@yasmro](https://github.com/yasmro)! - refactor(themes): rename `data-season` → `data-theme` with `season--*` value prefix

  The seasonal theming attribute is renamed from `data-season="<name>"` to the
  unified `data-theme="season--<name>"`, matching the Mode × Special two-axis
  model documented in [`.claude/rules/theme-architecture.md`](.claude/rules/theme-architecture.md)
  (PR [#189](https://github.com/yasmro/schatten/issues/189)). The single `data-theme` attribute is now the channel for _every_
  Special theme (seasonal, brand, vendor, one-off) — the family is encoded in
  the value, not in a proliferation of attribute names.

  Changes:

  - [`src/themes/seasonal/themes.css`](src/themes/seasonal/themes.css) — the eight
    `:root[data-season="X"]` selectors become `:root[data-theme="season--X"]`.
  - [`src/themes/seasonal/index.ts`](src/themes/seasonal/index.ts) — `applySeasonTheme`
    / `getSeasonAttribute` / `removeSeasonTheme` keep their function names; only
    the underlying attribute name + value transform change.
  - [`.storybook/preview.tsx`](.storybook/preview.tsx) — the Storybook theme toolbar
    decorator follows the same transform.
  - [`src/docs/Color.stories.tsx`](src/docs/Color.stories.tsx) — text reference updated.

  This is a breaking change for any consumer that targets `[data-season=...]` in
  their own CSS, or sets the attribute manually. Migrate via:

  ```diff
  - <html data-season="spring-early">
  + <html data-theme="season--spring-early">
  ```

  Consumers using the SDK helpers (`applySeasonTheme`, `getSeasonAttribute`,
  `removeSeasonTheme`) require no code change — the new attribute is applied
  transparently.

  Out of scope (lands in v0.7.0): allowlist enforcement, 16-pattern (8 Specials
  × 2 Modes) Storybook audit story.

- [#190](https://github.com/yasmro/schatten/pull/190) [`e3f3db3`](https://github.com/yasmro/schatten/commit/e3f3db3c794cceb6db179181be45b7e1efbb553d) Thanks [@yasmro](https://github.com/yasmro)! - docs(rule): add `.claude/rules/testing-guideline.md`

  The repo had VRT conventions written down ([vrt-spec-guideline.md](.claude/rules/vrt-spec-guideline.md))
  but no equivalent rule for **unit tests**, even though 16 `lv1` components
  shipped with ~290 test cases across them. The conventions were enforced by
  PR review and "follow Button.test.tsx style" — fine for humans, but a thin
  contract for AI-assisted contributions and new contributors.

  New rule codifies:

  - **Responsibility split** with [vrt-spec-guideline](.claude/rules/vrt-spec-guideline.md):
    unit tests assert behavior + a11y wiring, VRT specs assert pixels.
  - **Required cases per component type** — Form / Compound / Action / Display.
    Form-input components must cover controlled+uncontrolled, error state, and
    Field-context propagation; compound components must cover open/close
    transitions and portal rendering; action components must cover handler
    firing and `asChild`.
  - **Writing style** — BDD-style `it` names, `describe` as the Given
    container, typed factories for non-trivial setup, no `// Arrange / Act /
Assert` labels (tests are too small to benefit).
  - **What NOT to test** — Radix internals, Tailwind class strings verbatim,
    coverage as a number, Storybook stories.
  - **Canonical examples** cross-linked to real test files:
    [`BasicSelect`](src/components/lv1/Select/Select.test.tsx) (typed
    factory), [`ContextConsumer`](src/components/lv1/Field/Field.test.tsx)
    (context wiring helper),
    [`Controlled`](src/components/lv1/Dialog/Dialog.test.tsx) (stateful
    wrapper), [`renderTooltip`](src/components/lv1/Tooltip/Tooltip.test.tsx)
    (provider wrapper).

  Linked from CLAUDE.md `Guidelines` and AGENTS.md `Required reading` + Resource
  Map, alongside the other rule files. No source / test changes; existing tests
  already match the codified conventions.

  Closes [#103](https://github.com/yasmro/schatten/issues/103).

- [#189](https://github.com/yasmro/schatten/pull/189) [`3cab2a4`](https://github.com/yasmro/schatten/commit/3cab2a4fad5cbbd2356b246e95d1d4e12c158fa3) Thanks [@yasmro](https://github.com/yasmro)! - docs(rule): add `.claude/rules/theme-architecture.md` (Mode × Special two-axis model)

  Theming is now modelled as two independent **exclusive** axes: **Mode**
  (`light` / `dark`) owns the base layer (surfaces, foregrounds, borders, state
  shade-shifts); **Special** (`<none>` / `season--*` / brand themes / customer
  palettes) owns the expressive layer — the **`--color-theme-*` scale**,
  optionally `accent`. At most one Special is active at a time, set via
  `data-theme="<value>"` on `<html>`.

  The cascade resolves as `Special > Mode > base semantic` — Specials win on
  specificity (single-attribute selector beats `:root` / `.dark`), not on
  stylesheet load order.

  The new rule documents:

  - The two-axis model and which tokens each axis owns
  - Cascade rules (specificity-based, with load order as tie-breaker for the
    stylesheet chain only)
  - A **token allowlist** mechanism — each Special declares which tokens it may
    override (design only; enforcement lint lands in v0.7.0)
  - DOM application: `.dark` for Mode, single `data-theme` attribute for Special
  - A **`data-theme` value convention**: `<theme>` for one-offs or
    `<theme>--<subtheme>` for families (e.g. `season--spring-early`,
    `brand--acme`, `halloween`). One attribute, one value namespace, no
    `data-season` / `data-event` / `data-brand` proliferation.
  - A mapping table for the eight existing seasonal palettes, showing both the
    canonical `data-theme` form (`season--spring-early`) and the legacy
    `data-season` form
  - Process for adding a new Special today (pre-v0.7.0)

  **Deprecations** (both rename in v0.7.0 alongside the allowlist enforcement
  and the 8 × 2 = 16-pattern Storybook audit story):

  - `data-season="<name>"` → `data-theme="season--<name>"`. Family encoded in
    the value, not in a separate attribute.
  - `--color-primary-*` / `bg-primary-*` → `--color-theme-*` / `bg-theme-*`.
    The token name now matches the attribute that drives it (`data-theme`),
    removing the "primary brand color" vs "theme-driven slot" conflation.

  New code MUST use the canonical names (`data-theme`, `--color-theme-*`,
  `bg-theme-*`); do not introduce new `data-season` or `*-primary-*` usage.

  No public API or component behaviour changes in this PR — only the rule.

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
