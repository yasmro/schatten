import{j as e,r as h}from"./iframe-DUrBO3lT.js";import{S as d,b as u,s as x,a as g}from"./scoped-theme-css-CD2pOsZn.js";import{C as b}from"./Callout-ZFrGx34r.js";import{B as i}from"./Button-D1pSJ9OP.js";import{B as c}from"./Badge-yk7aCaXA.js";import"./preload-helper-C8C2Cx4B.js";import"./index-BjhfJjZn.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css                */import"./circle-alert-vAyq3qit.js";import"./createLucideIcon-DtdF2U7S.js";import"./triangle-alert-C9ynKcEn.js";import"./info-ChpB6JY1.js";import"./x-CEF_q7g5.js";import"./index-CeASAW-y.js";import"./index-BdFAfiMv.js";/* empty css               */import"./Spinner-B8oqB9qp.js";/* empty css                *//* empty css              */const f=["light","dark"],y=u(".theme-audit-cell",{semanticCss:g,seasonalCss:x});function l(){return e.jsx("style",{children:y})}function v(){return e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(i,{variant:"primary",size:"sm",children:"Primary"}),e.jsx(i,{variant:"destructive",size:"sm",children:"Delete"}),e.jsx(i,{variant:"secondary",size:"sm",children:"Secondary"}),e.jsx(c,{variant:"neutral",appearance:"solid",children:"Neutral"}),e.jsx(c,{variant:"success",appearance:"subtle",children:"Success"}),e.jsx("span",{className:"rounded bg-solid px-2 py-0.5 font-medium text-solid-foreground text-xs",children:"Aa"}),e.jsx("span",{className:"size-4 rounded bg-theme-500","aria-hidden":"true"}),e.jsx("span",{className:"size-4 rounded bg-theme-200","aria-hidden":"true"}),e.jsx("span",{className:"size-4 rounded bg-theme-700","aria-hidden":"true"})]})}function p({mode:a,special:s}){const o=a==="dark";return e.jsxs("div",{className:`theme-audit-cell ${o?"dark":""} flex flex-col gap-3 rounded-lg border border-border bg-background p-4`,"data-theme":s??void 0,children:[e.jsxs("div",{className:"flex items-center justify-between text-xs",children:[e.jsx("span",{className:"font-mono text-foreground-muted",children:s??"(no theme)"}),e.jsx("span",{className:"rounded bg-surface px-1.5 py-0.5 font-mono text-foreground-subtle uppercase",children:a})]}),e.jsx(v,{}),e.jsx(b,{variant:"info",appearance:"subtle",title:"Info",children:"Theme scale and Mode tokens combine here."})]})}const W={title:"Theming/Theme Audit",tags:["!dev"],parameters:{layout:"fullscreen"}},r={name:"Overview (16 patterns)",parameters:{docs:{description:{story:"8 Specials × 2 Modes = 16 patterns. Rows = Special (seasonal palette); columns = Mode (light/dark). Use this grid to verify orthogonality and to spot regressions when a new Special is added."}}},render:()=>e.jsxs("div",{className:"theme-audit-overview p-6",children:[e.jsx(l,{}),e.jsxs("header",{className:"mx-auto mb-6 max-w-6xl",children:[e.jsx("h1",{className:"mb-2 font-bold text-3xl text-foreground",children:"Theme Composition Audit"}),e.jsx("p",{className:"text-foreground-muted text-sm leading-relaxed",children:"Mode (light/dark) and Special (seasonal palette) are independent axes. This grid renders every combination so visual regressions across the matrix can be spotted in one screen."})]}),e.jsx("div",{className:"mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-2",children:d.map(a=>e.jsxs("div",{className:"contents",children:[e.jsxs("div",{className:"col-span-2 mt-4 flex items-baseline gap-2 first:mt-0",children:[e.jsx("h2",{className:"font-semibold text-base text-foreground",children:a.label}),e.jsx("span",{className:"text-foreground-muted text-xs",children:a.colors}),e.jsx("span",{className:"ml-auto font-mono text-foreground-subtle text-xs",children:a.id})]}),f.map(s=>e.jsx(p,{mode:s,special:a.id},`${a.id}-${s}`))]},a.id))})]})},n={name:"Per Special",argTypes:{special:{description:"Which Special palette to apply on this story.",control:"select",options:["none",...d.map(a=>a.id)],table:{type:{summary:`${d.map(a=>`"${a.id}"`).join(" | ")} | "none"`},defaultValue:{summary:"none"}}},mode:{description:"Mode for this story (independent of the toolbar).",control:"select",options:["light","dark"],table:{type:{summary:'"light" | "dark"'},defaultValue:{summary:"light"}}}},args:{special:"none",mode:"light"},render:a=>{const{special:s,mode:o}=a;return e.jsxs("div",{className:"p-6",children:[e.jsx(l,{}),e.jsx("div",{className:"mx-auto max-w-3xl",children:e.jsx(p,{mode:o,special:s==="none"?null:s})})]})}},S=[{name:"--color-theme-500",owner:"Special",purpose:"Theme scale mid-tone"},{name:"--color-theme-200",owner:"Special",purpose:"Theme scale tint"},{name:"--color-background",owner:"Mode",purpose:"Page background"},{name:"--color-surface",owner:"Mode",purpose:"Card / container"},{name:"--color-foreground",owner:"Mode",purpose:"Primary text"},{name:"--color-border",owner:"Mode",purpose:"Default border"},{name:"--color-surface-disabled",owner:"Mode",purpose:"Disabled (Specials must not override)"},{name:"--color-info",owner:"Pinned",purpose:"Pinned to blue; never moves with Special"}],m=[{id:"l-none",label:"light · (none)",mode:"light",special:null},{id:"l-spring",label:"light · spring-early",mode:"light",special:"season--spring-early"},{id:"d-none",label:"dark · (none)",mode:"dark",special:null},{id:"d-spring",label:"dark · spring-early",mode:"dark",special:"season--spring-early"}];function w(){const a=h.useId();return e.jsxs("div",{children:[e.jsx("h2",{id:a,className:"mb-2 font-semibold text-foreground text-xl",children:"Cascade verification"}),e.jsxs("p",{className:"mb-4 text-foreground-muted text-sm leading-relaxed",children:["Each column is a sample point: a wrapper with the indicated Mode class and"," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono",children:"data-theme"}),". Per the two-axis model, Mode-owned tokens (background, foreground, border, disabled) must change between the light/dark columns; Special-owned tokens (",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono",children:"--color-theme-*"}),") must change between the (none) / (spring-early) columns;"," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono",children:"--color-info"})," must remain pinned to blue everywhere."]}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-border",children:e.jsxs("table",{"aria-labelledby":a,className:"w-full border-collapse text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-surface-hover text-left",children:[e.jsx("th",{scope:"col",className:"px-3 py-2 font-mono font-semibold text-foreground",children:"token"}),e.jsx("th",{scope:"col",className:"px-3 py-2 font-semibold text-foreground",children:"owner"}),m.map(s=>e.jsx("th",{scope:"col",className:"px-3 py-2 font-mono text-foreground text-xs",children:s.label},s.id))]})}),e.jsx("tbody",{children:S.map(s=>e.jsxs("tr",{className:"border-border border-t",children:[e.jsx("td",{className:"px-3 py-2 font-mono text-foreground text-xs",children:s.name}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`rounded px-1.5 py-0.5 font-mono text-xs ${s.owner==="Special"?"bg-theme-100 text-theme-900":s.owner==="Mode"?"bg-info-subtle text-info":"bg-warning-subtle text-warning"}`,children:s.owner}),e.jsx("div",{className:"text-foreground-muted text-xs",children:s.purpose})]}),m.map(o=>e.jsx("td",{className:"px-3 py-2",children:e.jsx("div",{className:`theme-audit-cell ${o.mode==="dark"?"dark":""} inline-flex items-center gap-2 rounded border border-border bg-background p-1`,"data-theme":o.special??void 0,children:e.jsx("span",{className:"inline-block size-5 rounded border border-border",style:{background:`var(${s.name})`},"aria-hidden":"true"})})},o.id))]},s.name))})]})})]})}const t={name:"Cascade Verification",render:()=>e.jsxs("div",{className:"p-6",children:[e.jsx(l,{}),e.jsx("div",{className:"mx-auto max-w-5xl",children:e.jsx(w,{})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
        {SEASONAL_DISPLAY.map(s => <div key={s.id} className="contents">
            <div className="col-span-2 mt-4 flex items-baseline gap-2 first:mt-0">
              <h2 className="font-semibold text-base text-foreground">{s.label}</h2>
              <span className="text-foreground-muted text-xs">{s.colors}</span>
              <span className="ml-auto font-mono text-foreground-subtle text-xs">{s.id}</span>
            </div>
            {MODES.map(m => <ThemeCell key={\`\${s.id}-\${m}\`} mode={m} special={s.id} />)}
          </div>)}
      </div>
    </div>
}`,...r.parameters?.docs?.source},description:{story:"8 Specials × 2 Modes = 16 cells. Each cell is a scoped theme context, so\nseasonal palettes and dark mode compose visually without affecting the\nsurrounding Storybook chrome. Mode-owned tokens (background, foreground,\nborder) must shift between rows; Special-owned tokens (`--color-theme-*`)\nmust shift between columns. Any allowlist violation (e.g. a Special\noverriding `--color-foreground`) shows up immediately here.\n\nSince #150 the solid family rides the theme ramp: Button `primary`, the\nneutral × solid Badge, and the `Aa` fg-on-solid chip must tint per\nSpecial, while `destructive` stays pinned to red (adjacency audit) and\nthe Callout `info` stays pinned to blue.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Per Special',
  argTypes: {
    special: {
      description: 'Which Special palette to apply on this story.',
      control: 'select',
      options: ['none', ...SEASONAL_DISPLAY.map(s => s.id)],
      table: {
        type: {
          summary: \`\${SEASONAL_DISPLAY.map(s => \`"\${s.id}"\`).join(' | ')} | "none"\`
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
          <ThemeCell mode={mode} special={special === 'none' ? null : special as SeasonalThemeId} />
        </div>
      </div>;
  }
}`,...n.parameters?.docs?.source},description:{story:`Renders the showcase for one Special × one Mode at a time, both selected via
argTypes. The Storybook Theme / Season toolbar is intentionally bypassed
here — this story is for inspecting a single combination in isolation, and
the VRT spec drives the 16 patterns by varying these args via the URL
(\`&args=special:...;mode:...\`).`,...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Cascade Verification',
  render: () => <div className="p-6">
      <ScopedSeasonalStyles />
      <div className="mx-auto max-w-5xl">
        <CascadeTable />
      </div>
    </div>
}`,...t.parameters?.docs?.source},description:{story:"For each canonical token, renders a color swatch inside a scoped wrapper\n(Mode class + `data-theme`) across four scenarios — light/no-Special,\nlight/spring-early, dark/no-Special, dark/spring-early. The browser's CSS\ncascade resolves `var(--color-X)` per scenario, so the swatch colors\nempirically prove which axis each token follows: Special-owned tokens shift\nbetween the (none) and (spring-early) columns; Mode-owned tokens shift\nbetween the light and dark columns; `--color-info` stays pinned to blue.",...t.parameters?.docs?.description}}};const F=["Overview","PerSpecial","CascadeVerification"];export{t as CascadeVerification,r as Overview,n as PerSpecial,F as __namedExportsOrder,W as default};
