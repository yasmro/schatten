import{S as t}from"./index-BjhfJjZn.js";const i=`/*
 * Semantic Tokens (lv2)
 * Assign meaning to primitives
 *
 * Components should ONLY reference these tokens, never primitives directly.
 * Dark mode is handled entirely at this layer by remapping to different primitives.
 */

:root {
  /*
   * Theme scale — overridden by Special themes via [data-theme].
   * The default ramp is the neutral alabaster scale: with no Special
   * active the expressive layer rests at Schatten's neutral ink look,
   * and a Special breathes color into the same rungs. The solid family
   * below consumes rungs of this ramp, so a Special recolors every
   * solid surface (Button primary, Badge/Callout/Toast neutral × solid)
   * without touching any Mode-owned token.
   * \`themes/default/colors.css\` mirrors this ramp 1:1 — the sync is
   * pinned by resolution.test.ts ("default theme mirror").
   */
  --color-theme-50: var(--alabaster-50);
  --color-theme-100: var(--alabaster-100);
  --color-theme-200: var(--alabaster-200);
  --color-theme-300: var(--alabaster-300);
  --color-theme-400: var(--alabaster-400);
  --color-theme-500: var(--alabaster-500);
  --color-theme-600: var(--alabaster-600);
  --color-theme-700: var(--alabaster-700);
  --color-theme-800: var(--alabaster-800);
  --color-theme-900: var(--alabaster-900);
  --color-theme-950: var(--alabaster-950);

  /* Surfaces */
  --color-background: var(--paper-warm);
  --color-surface: var(--paper-white);
  --color-surface-hover: var(--alabaster-200);

  /*
   * Foreground tiers (most → least prominent)
   *   foreground         primary text
   *   foreground-muted   secondary / helper text  — WCAG AA small-text ≥ 4.5:1
   *   foreground-subtle  tertiary text (faint, lighter than muted) — large /
   *                      incidental text only (AA large-text 3:1; below 4.5:1
   *                      for small text by design — do NOT use for body copy)
   *
   * Tuned for AA in #344: muted/subtle were one ink rung too light, failing
   * small-text contrast on white and the warm surface. Both shifted darker
   * (muted ink-light→ink-medium, subtle ink-subtle→ink-faint) while keeping a
   * one-rung gap so the tier hierarchy stays legible.
   */
  --color-foreground: var(--ink-black);
  --color-foreground-muted: var(--ink-medium);
  --color-foreground-subtle: var(--ink-faint);

  /*
   * Solid (filled component backgrounds) — rides the theme ramp.
   * Mode picks the rung (light: 700-on-100; dark: 300-on-800); the
   * active Special supplies the ramp. With no Special the default
   * (alabaster) ramp resolves to the exact pre-rewiring values, so the
   * default look is unchanged. See theme-architecture.md
   * "Solid rides the theme ramp".
   */
  --color-solid: var(--color-theme-700);
  --color-solid-hover: var(--color-theme-900);
  --color-solid-foreground: var(--color-theme-100);
  --color-solid-foreground-hover: var(--color-theme-300);

  /* Destructive — destructive actions (delete, remove). Shares the \`red\` primitive with \`error\`. */
  --color-destructive: var(--red-600);
  --color-destructive-hover: var(--red-700);
  --color-destructive-foreground: var(--paper-white);
  --color-destructive-subtle: var(--red-50);

  /*
   * Brand-named tokens — the two Schatten brand colors exposed as
   * themselves (朱 vermillion / 藍 indigo). Unlike state tokens, these
   * name the color, not a meaning. Themes / Specials may retune them;
   * \`info\` and Mode-owned tokens may not.
   *
   * Both brand colors share one shade rule: \`-600\` in light, \`-400\`
   * in dark. This is the only pair where every \`*-foreground\`-on-base
   * solid pairing clears WCAG AA for both hues (vermillion light 5.04 /
   * dark 6.53, indigo light 7.03 / dark 5.73). A 1-step shift (\`-600\`/
   * \`-500\`) would fail indigo dark; \`-500\`/\`-400\` would fail vermillion
   * light — the hue ramps differ, so the AA-safe shade is mode-driven,
   * not 1-step-driven.
   */
  --color-vermillion: var(--vermillion-600);
  --color-vermillion-foreground: var(--paper-white);
  --color-indigo: var(--indigo-600);
  --color-indigo-foreground: var(--paper-white);

  /* Borders */
  --color-border: var(--gray-200);
  --color-border-strong: var(--ink-black);

  /* Focus ring */
  --color-ring: var(--ink-black);
  --color-ring-offset: var(--paper-warm);

  /*
   * Inverted foreground tiers — for text on saturated / dark-background
   * containers (solid Toast / Callout, theme-colored fills, …).
   * Each tier becomes progressively less prominent against the
   * saturated background, mirroring the foreground / -muted / -subtle
   * hierarchy.
   */
  --color-inverted-foreground: var(--paper-white);
  --color-inverted-foreground-muted: var(--alabaster-300);
  --color-inverted-foreground-subtle: var(--alabaster-400);

  /*
   * State tokens — each provides { base, hover, foreground, subtle }.
   *   base       : main color (saturated)         — fills, borders, icons, text
   *   hover      : darker/lighter sibling of base — interactive hover
   *   foreground : on-base text/icon color        — readable atop base
   *   subtle     : faint tinted background        — soft state surfaces
   */

  /* Error — form validation, error notifications (visually shares the \`red\` primitive with destructive) */
  --color-error: var(--red-600);
  --color-error-hover: var(--red-700);
  --color-error-foreground: var(--paper-white);
  --color-error-subtle: var(--red-50);

  /* Success */
  --color-success: var(--green-600);
  --color-success-hover: var(--green-700);
  --color-success-foreground: var(--paper-white);
  --color-success-subtle: var(--green-50);

  /* Warning */
  --color-warning: var(--amber-600);
  --color-warning-hover: var(--amber-700);
  --color-warning-foreground: var(--paper-white);
  --color-warning-subtle: var(--amber-50);

  /* Info — references blue directly so themes that retune the theme scale do not affect info */
  --color-info: var(--blue-600);
  --color-info-hover: var(--blue-700);
  --color-info-foreground: var(--paper-white);
  --color-info-subtle: var(--blue-50);

  /*
   * Non-interactive state tokens — for \`disabled\` and \`readOnly\` form controls.
   * These describe a control that cannot be acted on (disabled) or whose value
   * is displayed but not editable (readOnly). They are NOT state semantic
   * tokens in the \`error\`/\`success\`/… sense (no \`hover\` slot), so they do
   * not follow the 4-token shape.
   *
   * Visual direction
   *   disabled  — muted / faded (cool gray). "this is not usable"
   *   readOnly  — subtle / static (warm tint). "this is informational"
   *
   * Token shape
   *   disabled  : surface + foreground + border
   *   readOnly  : surface + border (foreground stays normal — the value
   *               must remain readable)
   */
  --color-surface-disabled: var(--gray-100);
  --color-foreground-disabled: var(--gray-500);
  --color-border-disabled: var(--gray-200);

  --color-surface-readonly: var(--alabaster-100);
  --color-border-readonly: var(--gray-200);
}

/* Dark mode - System preference fallback */
@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    --color-background: var(--paper-warm-inverted);
    --color-surface: var(--paper-white-inverted);
    --color-surface-hover: var(--paper-cream-inverted);

    --color-foreground: var(--ink-black-inverted);
    /* AA-tuned (#344): muted → alabaster-400, subtle → alabaster-500. The
       inverted ink ladder is contiguous, so the one-rung-darker shift lands on
       existing aliases (ink-medium-inverted / ink-light-inverted). */
    --color-foreground-muted: var(--ink-medium-inverted);
    --color-foreground-subtle: var(--ink-light-inverted);

    --color-solid: var(--color-theme-300);
    --color-solid-hover: var(--color-theme-100);
    --color-solid-foreground: var(--color-theme-800);
    --color-solid-foreground-hover: var(--color-theme-700);

    --color-destructive: var(--red-500);
    --color-destructive-hover: var(--red-400);
    --color-destructive-foreground: var(--paper-white-inverted);
    --color-destructive-subtle: var(--red-900);

    --color-vermillion: var(--vermillion-400);
    --color-vermillion-foreground: var(--paper-white-inverted);
    --color-indigo: var(--indigo-400);
    --color-indigo-foreground: var(--paper-white-inverted);

    --color-border: var(--gray-700);
    --color-border-strong: var(--ink-black-inverted);

    --color-ring: var(--ink-black-inverted);
    --color-ring-offset: var(--paper-warm-inverted);

    --color-inverted-foreground: var(--paper-white-inverted);
    --color-inverted-foreground-muted: var(--alabaster-700);
    --color-inverted-foreground-subtle: var(--alabaster-600);

    /* State tokens — dark mode mappings */

    --color-error: var(--red-500);
    --color-error-hover: var(--red-400);
    --color-error-foreground: var(--paper-white-inverted);
    --color-error-subtle: var(--red-900);

    --color-success: var(--green-500);
    --color-success-hover: var(--green-400);
    --color-success-foreground: var(--paper-white-inverted);
    --color-success-subtle: var(--green-900);

    --color-warning: var(--amber-500);
    --color-warning-hover: var(--amber-400);
    --color-warning-foreground: var(--paper-white-inverted);
    --color-warning-subtle: var(--amber-900);

    --color-info: var(--blue-500);
    --color-info-hover: var(--blue-400);
    --color-info-foreground: var(--paper-white-inverted);
    --color-info-subtle: var(--blue-900);

    /* Non-interactive state tokens — dark mode mappings */
    --color-surface-disabled: var(--gray-800);
    --color-foreground-disabled: var(--gray-500);
    --color-border-disabled: var(--gray-700);

    --color-surface-readonly: var(--alabaster-800);
    --color-border-readonly: var(--gray-700);
  }
}

/* Dark mode - Explicit class */
.dark {
  --color-background: var(--paper-warm-inverted);
  --color-surface: var(--paper-white-inverted);
  --color-surface-hover: var(--paper-cream-inverted);

  --color-foreground: var(--ink-black-inverted);
  /* AA-tuned (#344): muted → alabaster-400, subtle → alabaster-500. The
     inverted ink ladder is contiguous, so the one-rung-darker shift lands on
     existing aliases (ink-medium-inverted / ink-light-inverted). */
  --color-foreground-muted: var(--ink-medium-inverted);
  --color-foreground-subtle: var(--ink-light-inverted);

  --color-solid: var(--color-theme-300);
  --color-solid-hover: var(--color-theme-100);
  --color-solid-foreground: var(--color-theme-800);
  --color-solid-foreground-hover: var(--color-theme-700);

  --color-destructive: var(--red-500);
  --color-destructive-hover: var(--red-400);
  --color-destructive-foreground: var(--paper-white-inverted);
  --color-destructive-subtle: var(--red-900);

  --color-vermillion: var(--vermillion-400);
  --color-vermillion-foreground: var(--paper-white-inverted);
  --color-indigo: var(--indigo-400);
  --color-indigo-foreground: var(--paper-white-inverted);

  --color-border: var(--gray-700);
  --color-border-strong: var(--ink-black-inverted);

  --color-ring: var(--ink-black-inverted);
  --color-ring-offset: var(--paper-warm-inverted);

  --color-inverted-foreground: var(--paper-white-inverted);
  --color-inverted-foreground-muted: var(--alabaster-700);
  --color-inverted-foreground-subtle: var(--alabaster-600);

  /* State tokens — dark mode mappings */

  --color-error: var(--red-500);
  --color-error-hover: var(--red-400);
  --color-error-foreground: var(--paper-white-inverted);
  --color-error-subtle: var(--red-900);

  --color-success: var(--green-500);
  --color-success-hover: var(--green-400);
  --color-success-foreground: var(--paper-white-inverted);
  --color-success-subtle: var(--green-900);

  --color-warning: var(--amber-500);
  --color-warning-hover: var(--amber-400);
  --color-warning-foreground: var(--paper-white-inverted);
  --color-warning-subtle: var(--amber-900);

  --color-info: var(--blue-500);
  --color-info-hover: var(--blue-400);
  --color-info-foreground: var(--paper-white-inverted);
  --color-info-subtle: var(--blue-900);

  /* Non-interactive state tokens — dark mode mappings */
  --color-surface-disabled: var(--gray-800);
  --color-foreground-disabled: var(--gray-500);
  --color-border-disabled: var(--gray-700);

  --color-surface-readonly: var(--alabaster-800);
  --color-border-readonly: var(--gray-700);
}
`,h=`/*
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
`,d=Object.values(t).map(e=>{const[o="",n=""]=(e.description??"").split(": ");return{id:e.name,label:e.name.replace("season--","").split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(" "),term:o,colors:n}});function l(e,o){const n=e.replace(/\/\*[\s\S]*?\*\//g,""),r=n.indexOf(o);if(r===-1)throw new Error(`scoped-theme-css: block "${o}" not found in semantic.css`);const a=n.slice(r,n.indexOf("}",r)).match(/--color-solid[\w-]*:\s*[^;]+;/g);if(!a||a.length===0)throw new Error(`scoped-theme-css: no --color-solid* declarations in "${o}"`);return a.join(`
  `)}function m(e,o){const n=o.seasonalCss.replace(/:root\[/g,`${e}[`),r=[`${e}[data-theme] {
  ${l(o.semanticCss,":root {")}
}`,`${e}.dark[data-theme] {
  ${l(o.semanticCss,".dark {")}
}`].join(`
`);return`${n}
${r}`}export{d as S,i as a,m as b,h as s};
