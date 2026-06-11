import{j as e,r as u}from"./iframe--BE6v2h7.js";import{C as v}from"./Callout-BeFVTRJc.js";import{B as s}from"./Button-COofn7mt.js";import{B as d}from"./Badge-DFl0samn.js";import"./preload-helper-CrztxVc4.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css                */import"./circle-alert-CzB6VBYb.js";import"./createLucideIcon-DdSw9KTP.js";import"./triangle-alert-BJK7HWqA.js";import"./info-Cs20w5qU.js";import"./x-DTORevlD.js";import"./index-DfMBjkzT.js";import"./index-Cc0seQO0.js";/* empty css               */import"./Spinner-Bl7malZX.js";/* empty css                *//* empty css              */const g=`/*
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
   *   foreground-muted   secondary / helper text
   *   foreground-subtle  tertiary text (genuinely faint, lighter than muted)
   */
  --color-foreground: var(--ink-black);
  --color-foreground-muted: var(--ink-light);
  --color-foreground-subtle: var(--ink-subtle);

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
    --color-foreground-muted: var(--ink-light-inverted);
    --color-foreground-subtle: var(--ink-subtle-inverted);

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
  --color-foreground-muted: var(--ink-light-inverted);
  --color-foreground-subtle: var(--ink-subtle-inverted);

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
`,b=`/*
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
`,c=[{name:"season--spring-early",label:"Spring Early",jpn:"桜色・薄紅"},{name:"season--spring-late",label:"Spring Late",jpn:"若草色・萌黄"},{name:"season--summer-early",label:"Summer Early",jpn:"萌葱色・常磐色"},{name:"season--summer-peak",label:"Summer Peak",jpn:"朱色・柿色"},{name:"season--autumn-early",label:"Autumn Early",jpn:"浅葱色・薄藍"},{name:"season--autumn-late",label:"Autumn Late",jpn:"山吹色・飴色"},{name:"season--winter-early",label:"Winter Early",jpn:"銀鼠・薄墨"},{name:"season--winter-deep",label:"Winter Deep",jpn:"深紅・墨"}],f=["light","dark"],k=b.replace(/:root\[/g,".theme-audit-cell[");function m(r){const o=g.replace(/\/\*[\s\S]*?\*\//g,""),n=o.indexOf(r);return(o.slice(n,o.indexOf("}",n)).match(/--color-solid[\w-]*:\s*[^;]+;/g)??[]).join(`
  `)}const x=[`.theme-audit-cell[data-theme] {
  ${m(":root {")}
}`,`.theme-audit-cell.dark[data-theme] {
  ${m(".dark {")}
}`].join(`
`);function i(){return e.jsx("style",{children:`${k}
${x}`})}function y(){return e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(s,{variant:"primary",size:"sm",children:"Primary"}),e.jsx(s,{variant:"destructive",size:"sm",children:"Delete"}),e.jsx(s,{variant:"secondary",size:"sm",children:"Secondary"}),e.jsx(d,{variant:"neutral",appearance:"solid",children:"Neutral"}),e.jsx(d,{variant:"success",appearance:"subtle",children:"Success"}),e.jsx("span",{className:"rounded bg-solid px-2 py-0.5 font-medium text-solid-foreground text-xs",children:"Aa"}),e.jsx("span",{className:"size-4 rounded bg-theme-500","aria-hidden":"true"}),e.jsx("span",{className:"size-4 rounded bg-theme-200","aria-hidden":"true"}),e.jsx("span",{className:"size-4 rounded bg-theme-700","aria-hidden":"true"})]})}function p({mode:r,special:o}){const n=r==="dark";return e.jsxs("div",{className:`theme-audit-cell ${n?"dark":""} flex flex-col gap-3 rounded-lg border border-border bg-background p-4`,"data-theme":o??void 0,children:[e.jsxs("div",{className:"flex items-center justify-between text-xs",children:[e.jsx("span",{className:"font-mono text-foreground-muted",children:o??"(no theme)"}),e.jsx("span",{className:"rounded bg-surface px-1.5 py-0.5 font-mono text-foreground-subtle uppercase",children:r})]}),e.jsx(y,{}),e.jsx(v,{variant:"info",appearance:"subtle",title:"Info",children:"Theme scale and Mode tokens combine here."})]})}const F={title:"Theming/Theme Audit",parameters:{layout:"fullscreen"}},a={name:"Overview (16 patterns)",parameters:{docs:{description:{story:"8 Specials × 2 Modes = 16 patterns. Rows = Special (seasonal palette); columns = Mode (light/dark). Use this grid to verify orthogonality and to spot regressions when a new Special is added."}}},render:()=>e.jsxs("div",{className:"theme-audit-overview p-6",children:[e.jsx(i,{}),e.jsxs("header",{className:"mx-auto mb-6 max-w-6xl",children:[e.jsx("h1",{className:"mb-2 font-bold text-3xl text-foreground",children:"Theme Composition Audit"}),e.jsx("p",{className:"text-foreground-muted text-sm leading-relaxed",children:"Mode (light/dark) and Special (seasonal palette) are independent axes. This grid renders every combination so visual regressions across the matrix can be spotted in one screen."})]}),e.jsx("div",{className:"mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-2",children:c.map(r=>e.jsxs("div",{className:"contents",children:[e.jsxs("div",{className:"col-span-2 mt-4 flex items-baseline gap-2 first:mt-0",children:[e.jsx("h2",{className:"font-semibold text-base text-foreground",children:r.label}),e.jsx("span",{className:"text-foreground-muted text-xs",children:r.jpn}),e.jsx("span",{className:"ml-auto font-mono text-foreground-subtle text-xs",children:r.name})]}),f.map(o=>e.jsx(p,{mode:o,special:r.name},`${r.name}-${o}`))]},r.name))})]})},t={name:"Per Special",argTypes:{special:{description:"Which Special palette to apply on this story.",control:"select",options:["none",...c.map(r=>r.name)],table:{type:{summary:`${c.map(r=>`"${r.name}"`).join(" | ")} | "none"`},defaultValue:{summary:"none"}}},mode:{description:"Mode for this story (independent of the toolbar).",control:"select",options:["light","dark"],table:{type:{summary:'"light" | "dark"'},defaultValue:{summary:"light"}}}},args:{special:"none",mode:"light"},render:r=>{const{special:o,mode:n}=r;return e.jsxs("div",{className:"p-6",children:[e.jsx(i,{}),e.jsx("div",{className:"mx-auto max-w-3xl",children:e.jsx(p,{mode:n,special:o==="none"?null:o})})]})}},w=[{name:"--color-theme-500",owner:"Special",purpose:"Theme scale mid-tone"},{name:"--color-theme-200",owner:"Special",purpose:"Theme scale tint"},{name:"--color-background",owner:"Mode",purpose:"Page background"},{name:"--color-surface",owner:"Mode",purpose:"Card / container"},{name:"--color-foreground",owner:"Mode",purpose:"Primary text"},{name:"--color-border",owner:"Mode",purpose:"Default border"},{name:"--color-surface-disabled",owner:"Mode",purpose:"Disabled (Specials must not override)"},{name:"--color-info",owner:"Pinned",purpose:"Pinned to blue; never moves with Special"}],h=[{id:"l-none",label:"light · (none)",mode:"light",special:null},{id:"l-spring",label:"light · spring-early",mode:"light",special:"season--spring-early"},{id:"d-none",label:"dark · (none)",mode:"dark",special:null},{id:"d-spring",label:"dark · spring-early",mode:"dark",special:"season--spring-early"}];function S(){const r=u.useId();return e.jsxs("div",{children:[e.jsx("h2",{id:r,className:"mb-2 font-semibold text-foreground text-xl",children:"Cascade verification"}),e.jsxs("p",{className:"mb-4 text-foreground-muted text-sm leading-relaxed",children:["Each column is a sample point: a wrapper with the indicated Mode class and"," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono",children:"data-theme"}),". Per the two-axis model, Mode-owned tokens (background, foreground, border, disabled) must change between the light/dark columns; Special-owned tokens (",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono",children:"--color-theme-*"}),") must change between the (none) / (spring-early) columns;"," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono",children:"--color-info"})," must remain pinned to blue everywhere."]}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-border",children:e.jsxs("table",{"aria-labelledby":r,className:"w-full border-collapse text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-surface-hover text-left",children:[e.jsx("th",{className:"px-3 py-2 font-mono font-semibold text-foreground",children:"token"}),e.jsx("th",{className:"px-3 py-2 font-semibold text-foreground",children:"owner"}),h.map(o=>e.jsx("th",{className:"px-3 py-2 font-mono text-foreground text-xs",children:o.label},o.id))]})}),e.jsx("tbody",{children:w.map(o=>e.jsxs("tr",{className:"border-border border-t",children:[e.jsx("td",{className:"px-3 py-2 font-mono text-foreground text-xs",children:o.name}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`rounded px-1.5 py-0.5 font-mono text-xs ${o.owner==="Special"?"bg-theme-100 text-theme-900":o.owner==="Mode"?"bg-info-subtle text-info":"bg-warning-subtle text-warning"}`,children:o.owner}),e.jsx("div",{className:"text-foreground-muted text-xs",children:o.purpose})]}),h.map(n=>e.jsx("td",{className:"px-3 py-2",children:e.jsx("div",{className:`theme-audit-cell ${n.mode==="dark"?"dark":""} inline-flex items-center gap-2 rounded border border-border bg-background p-1`,"data-theme":n.special??void 0,children:e.jsx("span",{className:"inline-block size-5 rounded border border-border",style:{background:`var(${o.name})`},"aria-hidden":"true"})})},n.id))]},o.name))})]})})]})}const l={name:"Cascade Verification",render:()=>e.jsxs("div",{className:"p-6",children:[e.jsx(i,{}),e.jsx("div",{className:"mx-auto max-w-5xl",children:e.jsx(S,{})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Overview (16 patterns)',
  parameters: {
    docs: {
      description: {
        story: '8 Specials × 2 Modes = 16 patterns. Rows = Special (seasonal palette); columns = Mode (light/dark). Use this grid to verify orthogonality and to spot regressions when a new Special is added.'
      }
    }
  },
  render: () => <div className="theme-audit-overview p-6">
      <ScopedSeasonalStyles />
      <header className="mx-auto mb-6 max-w-6xl">
        <h1 className="mb-2 font-bold text-3xl text-foreground">Theme Composition Audit</h1>
        <p className="text-foreground-muted text-sm leading-relaxed">
          Mode (light/dark) and Special (seasonal palette) are independent axes. This grid renders
          every combination so visual regressions across the matrix can be spotted in one screen.
        </p>
      </header>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-2">
        {SPECIALS.map(s => <div key={s.name} className="contents">
            <div className="col-span-2 mt-4 flex items-baseline gap-2 first:mt-0">
              <h2 className="font-semibold text-base text-foreground">{s.label}</h2>
              <span className="text-foreground-muted text-xs">{s.jpn}</span>
              <span className="ml-auto font-mono text-foreground-subtle text-xs">{s.name}</span>
            </div>
            {MODES.map(m => <ThemeCell key={\`\${s.name}-\${m}\`} mode={m} special={s.name} />)}
          </div>)}
      </div>
    </div>
}`,...a.parameters?.docs?.source},description:{story:"8 Specials × 2 Modes = 16 cells. Each cell is a scoped theme context, so\nseasonal palettes and dark mode compose visually without affecting the\nsurrounding Storybook chrome. Mode-owned tokens (background, foreground,\nborder) must shift between rows; Special-owned tokens (`--color-theme-*`)\nmust shift between columns. Any allowlist violation (e.g. a Special\noverriding `--color-foreground`) shows up immediately here.\n\nSince #150 the solid family rides the theme ramp: Button `primary`, the\nneutral × solid Badge, and the `Aa` fg-on-solid chip must tint per\nSpecial, while `destructive` stays pinned to red (adjacency audit) and\nthe Callout `info` stays pinned to blue.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Per Special',
  argTypes: {
    special: {
      description: 'Which Special palette to apply on this story.',
      control: 'select',
      options: ['none', ...SPECIALS.map(s => s.name)],
      table: {
        type: {
          summary: \`\${SPECIALS.map(s => \`"\${s.name}"\`).join(' | ')} | "none"\`
        },
        defaultValue: {
          summary: 'none'
        }
      }
    },
    mode: {
      description: 'Mode for this story (independent of the toolbar).',
      control: 'select',
      options: ['light', 'dark'],
      table: {
        type: {
          summary: '"light" | "dark"'
        },
        defaultValue: {
          summary: 'light'
        }
      }
    }
  },
  args: {
    special: 'none',
    mode: 'light'
  },
  render: args => {
    const {
      special,
      mode
    } = args as {
      special: string;
      mode: Mode;
    };
    return <div className="p-6">
        <ScopedSeasonalStyles />
        <div className="mx-auto max-w-3xl">
          <ThemeCell mode={mode} special={special === 'none' ? null : special as SpecialName} />
        </div>
      </div>;
  }
}`,...t.parameters?.docs?.source},description:{story:`Renders the showcase for one Special × one Mode at a time, both selected via
argTypes. The Storybook Theme / Season toolbar is intentionally bypassed
here — this story is for inspecting a single combination in isolation, and
the VRT spec drives the 16 patterns by varying these args via the URL
(\`&args=special:...;mode:...\`).`,...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Cascade Verification',
  render: () => <div className="p-6">
      <ScopedSeasonalStyles />
      <div className="mx-auto max-w-5xl">
        <CascadeTable />
      </div>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"For each canonical token, renders a color swatch inside a scoped wrapper\n(Mode class + `data-theme`) across four scenarios — light/no-Special,\nlight/spring-early, dark/no-Special, dark/spring-early. The browser's CSS\ncascade resolves `var(--color-X)` per scenario, so the swatch colors\nempirically prove which axis each token follows: Special-owned tokens shift\nbetween the (none) and (spring-early) columns; Mode-owned tokens shift\nbetween the light and dark columns; `--color-info` stays pinned to blue.",...l.parameters?.docs?.description}}};const H=["Overview","PerSpecial","CascadeVerification"];export{l as CascadeVerification,a as Overview,t as PerSpecial,H as __namedExportsOrder,F as default};
