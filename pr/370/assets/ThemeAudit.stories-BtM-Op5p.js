import{j as e,r as p}from"./iframe-sv7dtOF6.js";import{C as u}from"./Callout-Cgj8X480.js";import{B as m}from"./Button-CKNf7PF1.js";import{B as i}from"./Badge-g0eqG96y.js";import"./preload-helper-si4zZkj8.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css                */import"./circle-alert-RwXPlTVV.js";import"./createLucideIcon-BEbrVN-4.js";import"./triangle-alert-D10Tn76n.js";import"./info-BxbWxxRz.js";import"./x-D6F1ZmvP.js";import"./index-Bq-GhWIc.js";import"./index-CwBHypIp.js";/* empty css               */import"./Spinner-CZgZsuAx.js";/* empty css                *//* empty css              */const x=`/*
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
`,t=[{name:"season--spring-early",label:"Spring Early",jpn:"桜色・薄紅"},{name:"season--spring-late",label:"Spring Late",jpn:"若草色・萌黄"},{name:"season--summer-early",label:"Summer Early",jpn:"萌葱色・常磐色"},{name:"season--summer-peak",label:"Summer Peak",jpn:"朱色・柿色"},{name:"season--autumn-early",label:"Autumn Early",jpn:"浅葱色・薄藍"},{name:"season--autumn-late",label:"Autumn Late",jpn:"山吹色・飴色"},{name:"season--winter-early",label:"Winter Early",jpn:"銀鼠・薄墨"},{name:"season--winter-deep",label:"Winter Deep",jpn:"深紅・墨"}],k=["light","dark"],g=x.replace(/:root\[/g,".theme-audit-cell[");function c(){return e.jsx("style",{children:g})}function b(){return e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(m,{variant:"primary",size:"sm",children:"Primary"}),e.jsx(m,{variant:"secondary",size:"sm",children:"Secondary"}),e.jsx(i,{variant:"neutral",appearance:"solid",children:"Neutral"}),e.jsx(i,{variant:"success",appearance:"subtle",children:"Success"}),e.jsx("span",{className:"size-4 rounded bg-theme-500","aria-hidden":"true"}),e.jsx("span",{className:"size-4 rounded bg-theme-200","aria-hidden":"true"}),e.jsx("span",{className:"size-4 rounded bg-theme-700","aria-hidden":"true"})]})}function h({mode:n,special:o}){const r=n==="dark";return e.jsxs("div",{className:`theme-audit-cell ${r?"dark":""} flex flex-col gap-3 rounded-lg border border-border bg-background p-4`,"data-theme":o??void 0,children:[e.jsxs("div",{className:"flex items-center justify-between text-xs",children:[e.jsx("span",{className:"font-mono text-foreground-muted",children:o??"(no theme)"}),e.jsx("span",{className:"rounded bg-surface px-1.5 py-0.5 font-mono text-foreground-subtle uppercase",children:n})]}),e.jsx(b,{}),e.jsx(u,{variant:"info",appearance:"subtle",title:"Info",children:"Theme scale and Mode tokens combine here."})]})}const z={title:"Theming/Theme Audit",parameters:{layout:"fullscreen"}},a={name:"Overview (16 patterns)",parameters:{docs:{description:{story:"8 Specials × 2 Modes = 16 patterns. Rows = Special (seasonal palette); columns = Mode (light/dark). Use this grid to verify orthogonality and to spot regressions when a new Special is added."}}},render:()=>e.jsxs("div",{className:"theme-audit-overview p-6",children:[e.jsx(c,{}),e.jsxs("header",{className:"mx-auto mb-6 max-w-6xl",children:[e.jsx("h1",{className:"mb-2 font-bold text-3xl text-foreground",children:"Theme Composition Audit"}),e.jsx("p",{className:"text-foreground-muted text-sm leading-relaxed",children:"Mode (light/dark) and Special (seasonal palette) are independent axes. This grid renders every combination so visual regressions across the matrix can be spotted in one screen."})]}),e.jsx("div",{className:"mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-2",children:t.map(n=>e.jsxs("div",{className:"contents",children:[e.jsxs("div",{className:"col-span-2 mt-4 flex items-baseline gap-2 first:mt-0",children:[e.jsx("h2",{className:"font-semibold text-base text-foreground",children:n.label}),e.jsx("span",{className:"text-foreground-muted text-xs",children:n.jpn}),e.jsx("span",{className:"ml-auto font-mono text-foreground-subtle text-xs",children:n.name})]}),k.map(o=>e.jsx(h,{mode:o,special:n.name},`${n.name}-${o}`))]},n.name))})]})},s={name:"Per Special",argTypes:{special:{description:"Which Special palette to apply on this story.",control:"select",options:["none",...t.map(n=>n.name)],table:{type:{summary:`${t.map(n=>`"${n.name}"`).join(" | ")} | "none"`},defaultValue:{summary:"none"}}},mode:{description:"Mode for this story (independent of the toolbar).",control:"select",options:["light","dark"],table:{type:{summary:'"light" | "dark"'},defaultValue:{summary:"light"}}}},args:{special:"none",mode:"light"},render:n=>{const{special:o,mode:r}=n;return e.jsxs("div",{className:"p-6",children:[e.jsx(c,{}),e.jsx("div",{className:"mx-auto max-w-3xl",children:e.jsx(h,{mode:r,special:o==="none"?null:o})})]})}},f=[{name:"--color-theme-500",owner:"Special",purpose:"Theme scale mid-tone"},{name:"--color-theme-200",owner:"Special",purpose:"Theme scale tint"},{name:"--color-background",owner:"Mode",purpose:"Page background"},{name:"--color-surface",owner:"Mode",purpose:"Card / container"},{name:"--color-foreground",owner:"Mode",purpose:"Primary text"},{name:"--color-border",owner:"Mode",purpose:"Default border"},{name:"--color-surface-disabled",owner:"Mode",purpose:"Disabled (Specials must not override)"},{name:"--color-info",owner:"Pinned",purpose:"Pinned to blue; never moves with Special"}],d=[{id:"l-none",label:"light · (none)",mode:"light",special:null},{id:"l-spring",label:"light · spring-early",mode:"light",special:"season--spring-early"},{id:"d-none",label:"dark · (none)",mode:"dark",special:null},{id:"d-spring",label:"dark · spring-early",mode:"dark",special:"season--spring-early"}];function y(){const n=p.useId();return e.jsxs("div",{children:[e.jsx("h2",{id:n,className:"mb-2 font-semibold text-foreground text-xl",children:"Cascade verification"}),e.jsxs("p",{className:"mb-4 text-foreground-muted text-sm leading-relaxed",children:["Each column is a sample point: a wrapper with the indicated Mode class and"," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono",children:"data-theme"}),". Per the two-axis model, Mode-owned tokens (background, foreground, border, disabled) must change between the light/dark columns; Special-owned tokens (",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono",children:"--color-theme-*"}),") must change between the (none) / (spring-early) columns;"," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono",children:"--color-info"})," must remain pinned to blue everywhere."]}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-border",children:e.jsxs("table",{"aria-labelledby":n,className:"w-full border-collapse text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-surface-hover text-left",children:[e.jsx("th",{className:"px-3 py-2 font-mono font-semibold text-foreground",children:"token"}),e.jsx("th",{className:"px-3 py-2 font-semibold text-foreground",children:"owner"}),d.map(o=>e.jsx("th",{className:"px-3 py-2 font-mono text-foreground text-xs",children:o.label},o.id))]})}),e.jsx("tbody",{children:f.map(o=>e.jsxs("tr",{className:"border-border border-t",children:[e.jsx("td",{className:"px-3 py-2 font-mono text-foreground text-xs",children:o.name}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`rounded px-1.5 py-0.5 font-mono text-xs ${o.owner==="Special"?"bg-theme-100 text-theme-900":o.owner==="Mode"?"bg-info-subtle text-info":"bg-warning-subtle text-warning"}`,children:o.owner}),e.jsx("div",{className:"text-foreground-muted text-xs",children:o.purpose})]}),d.map(r=>e.jsx("td",{className:"px-3 py-2",children:e.jsx("div",{className:`theme-audit-cell ${r.mode==="dark"?"dark":""} inline-flex items-center gap-2 rounded border border-border bg-background p-1`,"data-theme":r.special??void 0,children:e.jsx("span",{className:"inline-block size-5 rounded border border-border",style:{background:`var(${o.name})`},"aria-hidden":"true"})})},r.id))]},o.name))})]})})]})}const l={name:"Cascade Verification",render:()=>e.jsxs("div",{className:"p-6",children:[e.jsx(c,{}),e.jsx("div",{className:"mx-auto max-w-5xl",children:e.jsx(y,{})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:`8 Specials × 2 Modes = 16 cells. Each cell is a scoped theme context, so
seasonal palettes and dark mode compose visually without affecting the
surrounding Storybook chrome. Mode-owned tokens (background, foreground,
border) must shift between rows; Special-owned tokens (\`--color-theme-*\`)
must shift between columns. Any allowlist violation (e.g. a Special
overriding \`--color-foreground\`) shows up immediately here.`,...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:`Renders the showcase for one Special × one Mode at a time, both selected via
argTypes. The Storybook Theme / Season toolbar is intentionally bypassed
here — this story is for inspecting a single combination in isolation, and
the VRT spec drives the 16 patterns by varying these args via the URL
(\`&args=special:...;mode:...\`).`,...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Cascade Verification',
  render: () => <div className="p-6">
      <ScopedSeasonalStyles />
      <div className="mx-auto max-w-5xl">
        <CascadeTable />
      </div>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"For each canonical token, renders a color swatch inside a scoped wrapper\n(Mode class + `data-theme`) across four scenarios — light/no-Special,\nlight/spring-early, dark/no-Special, dark/spring-early. The browser's CSS\ncascade resolves `var(--color-X)` per scenario, so the swatch colors\nempirically prove which axis each token follows: Special-owned tokens shift\nbetween the (none) and (spring-early) columns; Mode-owned tokens shift\nbetween the light and dark columns; `--color-info` stays pinned to blue.",...l.parameters?.docs?.description}}};const W=["Overview","PerSpecial","CascadeVerification"];export{l as CascadeVerification,a as Overview,s as PerSpecial,W as __namedExportsOrder,z as default};
