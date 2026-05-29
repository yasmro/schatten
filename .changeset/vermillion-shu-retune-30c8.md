---
'@yasmro/schatten': patch
---

ブランド朱 `vermillion-*` の hue/彩度を伝統的な真朱（Figma vermilion `#E73121` 系）へ retune。hue 22（crimson 寄り）→ hue 30（橙寄り・高彩度）に全 shade を引き直した。鮮やかなブランドアンカーは `-500`（≈ `#ed3726`）、実表示の brand solid 面は AA 安全な `-600`（≈ `#d02718`）。solid AA は light `#fafafa`×600 = 5.04:1 / dark `#1a1a1a`×400 = 6.53:1 で両方 PASS、全 shade sRGB gamut 内。semantic 名（`--color-vermillion` / `--color-vermillion-foreground`）は不変で値のみ変更（非破壊）。危険色 `red-*`（`--color-error` / `--color-destructive`）は #239 の結論どおり hue 22 据え置きで無影響。VRT 再ベースラインを伴う。
