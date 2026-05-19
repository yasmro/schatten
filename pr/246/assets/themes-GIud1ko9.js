const o=`/*
 * Seasonal Color Themes
 * Based on 二十四節気 (24 solar terms) and Japanese traditional colors
 * Using OKLCH color space for perceptually uniform scaling
 *
 * Allowlist contract (see .claude/rules/theme-architecture.md "Allowlist
 * mechanism"): every seasonal block below may only override
 *   --color-theme-50 … --color-theme-950
 * Mode-owned tokens — surfaces, foregrounds, borders, focus ring,
 * disabled/readOnly, --color-info-* — must NOT be overridden here.
 * The machine-readable mirror lives in SEASONAL_THEME_METADATA
 * (./index.ts); a lint script will enforce this contract in Phase 5
 * (scripts/check-theme-allowlist.mjs).
 */

/* Spring Early (立春 - 春分前): 桜色・薄紅
 * allowedTokens: --color-theme-* */
:root[data-theme="season--spring-early"] {
  --color-theme-50: oklch(0.98 0.02 12);
  --color-theme-100: oklch(0.96 0.04 12);
  --color-theme-200: oklch(0.91 0.06 12);
  --color-theme-300: oklch(0.83 0.08 12);
  --color-theme-400: oklch(0.74 0.09 12);
  --color-theme-500: oklch(0.64 0.1 12);
  --color-theme-600: oklch(0.56 0.09 12);
  --color-theme-700: oklch(0.46 0.08 12);
  --color-theme-800: oklch(0.36 0.06 12);
  --color-theme-900: oklch(0.27 0.04 12);
  --color-theme-950: oklch(0.15 0.03 12);
}

/* Spring Late (春分 - 立夏前): 若草色・萌黄
 * allowedTokens: --color-theme-* */
:root[data-theme="season--spring-late"] {
  --color-theme-50: oklch(0.98 0.02 138);
  --color-theme-100: oklch(0.96 0.04 138);
  --color-theme-200: oklch(0.91 0.06 138);
  --color-theme-300: oklch(0.83 0.08 138);
  --color-theme-400: oklch(0.74 0.09 138);
  --color-theme-500: oklch(0.64 0.1 138);
  --color-theme-600: oklch(0.56 0.09 138);
  --color-theme-700: oklch(0.46 0.08 138);
  --color-theme-800: oklch(0.36 0.06 138);
  --color-theme-900: oklch(0.27 0.04 138);
  --color-theme-950: oklch(0.15 0.03 138);
}

/* Summer Early (立夏 - 夏至前): 萌葱色・常磐色
 * allowedTokens: --color-theme-* */
:root[data-theme="season--summer-early"] {
  --color-theme-50: oklch(0.98 0.015 162);
  --color-theme-100: oklch(0.96 0.03 162);
  --color-theme-200: oklch(0.91 0.05 162);
  --color-theme-300: oklch(0.83 0.07 162);
  --color-theme-400: oklch(0.74 0.08 162);
  --color-theme-500: oklch(0.64 0.09 162);
  --color-theme-600: oklch(0.56 0.08 162);
  --color-theme-700: oklch(0.46 0.07 162);
  --color-theme-800: oklch(0.36 0.05 162);
  --color-theme-900: oklch(0.27 0.03 162);
  --color-theme-950: oklch(0.15 0.02 162);
}

/* Summer Peak (夏至 - 立秋前): 朱色・柿色
 * allowedTokens: --color-theme-* */
:root[data-theme="season--summer-peak"] {
  --color-theme-50: oklch(0.98 0.02 45);
  --color-theme-100: oklch(0.96 0.04 45);
  --color-theme-200: oklch(0.91 0.07 45);
  --color-theme-300: oklch(0.83 0.09 45);
  --color-theme-400: oklch(0.74 0.1 45);
  --color-theme-500: oklch(0.64 0.11 45);
  --color-theme-600: oklch(0.56 0.1 45);
  --color-theme-700: oklch(0.46 0.08 45);
  --color-theme-800: oklch(0.36 0.06 45);
  --color-theme-900: oklch(0.27 0.04 45);
  --color-theme-950: oklch(0.15 0.03 45);
}

/* Autumn Early (立秋 - 秋分前): 浅葱色・薄藍
 * allowedTokens: --color-theme-* */
:root[data-theme="season--autumn-early"] {
  --color-theme-50: oklch(0.98 0.015 230);
  --color-theme-100: oklch(0.96 0.03 230);
  --color-theme-200: oklch(0.91 0.05 230);
  --color-theme-300: oklch(0.83 0.07 230);
  --color-theme-400: oklch(0.74 0.08 230);
  --color-theme-500: oklch(0.64 0.085 230);
  --color-theme-600: oklch(0.56 0.08 230);
  --color-theme-700: oklch(0.46 0.07 230);
  --color-theme-800: oklch(0.36 0.05 230);
  --color-theme-900: oklch(0.27 0.03 230);
  --color-theme-950: oklch(0.15 0.02 230);
}

/* Autumn Late (秋分 - 立冬前): 山吹色・飴色
 * allowedTokens: --color-theme-* */
:root[data-theme="season--autumn-late"] {
  --color-theme-50: oklch(0.98 0.02 70);
  --color-theme-100: oklch(0.96 0.04 70);
  --color-theme-200: oklch(0.91 0.06 70);
  --color-theme-300: oklch(0.83 0.08 70);
  --color-theme-400: oklch(0.74 0.09 70);
  --color-theme-500: oklch(0.64 0.1 70);
  --color-theme-600: oklch(0.56 0.09 70);
  --color-theme-700: oklch(0.46 0.08 70);
  --color-theme-800: oklch(0.36 0.06 70);
  --color-theme-900: oklch(0.27 0.04 70);
  --color-theme-950: oklch(0.15 0.03 70);
}

/* Winter Early (立冬 - 冬至前): 銀鼠・薄墨
 * allowedTokens: --color-theme-* */
:root[data-theme="season--winter-early"] {
  --color-theme-50: oklch(0.98 0.01 250);
  --color-theme-100: oklch(0.96 0.02 250);
  --color-theme-200: oklch(0.91 0.03 250);
  --color-theme-300: oklch(0.83 0.04 250);
  --color-theme-400: oklch(0.74 0.045 250);
  --color-theme-500: oklch(0.64 0.048 250);
  --color-theme-600: oklch(0.56 0.045 250);
  --color-theme-700: oklch(0.46 0.04 250);
  --color-theme-800: oklch(0.36 0.03 250);
  --color-theme-900: oklch(0.27 0.02 250);
  --color-theme-950: oklch(0.15 0.015 250);
}

/* Winter Deep (冬至 - 立春前): 藍色・濃紺
 * allowedTokens: --color-theme-* */
:root[data-theme="season--winter-deep"] {
  --color-theme-50: oklch(0.98 0.015 255);
  --color-theme-100: oklch(0.96 0.03 255);
  --color-theme-200: oklch(0.91 0.05 255);
  --color-theme-300: oklch(0.83 0.06 255);
  --color-theme-400: oklch(0.74 0.07 255);
  --color-theme-500: oklch(0.64 0.08 255);
  --color-theme-600: oklch(0.56 0.07 255);
  --color-theme-700: oklch(0.46 0.06 255);
  --color-theme-800: oklch(0.36 0.05 255);
  --color-theme-900: oklch(0.27 0.03 255);
  --color-theme-950: oklch(0.15 0.02 255);
}

/* Theme transition */
:root {
  transition:
    --color-theme-50 0.6s ease,
    --color-theme-100 0.6s ease,
    --color-theme-200 0.6s ease,
    --color-theme-300 0.6s ease,
    --color-theme-400 0.6s ease,
    --color-theme-500 0.6s ease,
    --color-theme-600 0.6s ease,
    --color-theme-700 0.6s ease,
    --color-theme-800 0.6s ease,
    --color-theme-900 0.6s ease,
    --color-theme-950 0.6s ease;
}
`;export{o as s};
