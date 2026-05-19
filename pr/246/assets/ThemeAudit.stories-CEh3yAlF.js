import{j as e,r as E}from"./iframe-cH3Goxxo.js";import{s as T}from"./themes-GIud1ko9.js";import{C as A}from"./Callout-BXNRupf8.js";import{B as d}from"./Button-8jBacqkX.js";import{B as c}from"./Badge-uYXFAK49.js";import"./preload-helper-BfaLnbZ_.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./circle-alert-HCulbnHI.js";import"./createLucideIcon-GExp851Y.js";import"./triangle-alert-C7RDC7To.js";import"./info-Dn3vi5c0.js";import"./x-DIbcVX24.js";import"./index-e6tzoGKZ.js";import"./index-Ds15pGpv.js";import"./Spinner-Bx2XNhP6.js";const l=[{name:"season--spring-early",label:"Spring Early",jpn:"桜色・薄紅"},{name:"season--spring-late",label:"Spring Late",jpn:"若草色・萌黄"},{name:"season--summer-early",label:"Summer Early",jpn:"萌葱色・常磐色"},{name:"season--summer-peak",label:"Summer Peak",jpn:"朱色・柿色"},{name:"season--autumn-early",label:"Autumn Early",jpn:"浅葱色・薄藍"},{name:"season--autumn-late",label:"Autumn Late",jpn:"山吹色・飴色"},{name:"season--winter-early",label:"Winter Early",jpn:"銀鼠・薄墨"},{name:"season--winter-deep",label:"Winter Deep",jpn:"深紅・墨"}],P=["light","dark"],$=T.replace(/:root\[/g,".theme-audit-cell[");function i(){return e.jsx("style",{children:$})}function O(){return e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(d,{variant:"primary",size:"sm",children:"Primary"}),e.jsx(d,{variant:"secondary",size:"sm",children:"Secondary"}),e.jsx(c,{variant:"neutral",appearance:"solid",children:"Neutral"}),e.jsx(c,{variant:"success",appearance:"subtle",children:"Success"}),e.jsx("span",{className:"size-4 rounded bg-theme-500","aria-hidden":"true"}),e.jsx("span",{className:"size-4 rounded bg-theme-200","aria-hidden":"true"}),e.jsx("span",{className:"size-4 rounded bg-theme-700","aria-hidden":"true"})]})}function M({mode:s,special:a}){const o=s==="dark";return e.jsxs("div",{className:`theme-audit-cell ${o?"dark":""} flex flex-col gap-3 rounded-lg border border-border bg-background p-4`,"data-theme":a??void 0,children:[e.jsxs("div",{className:"flex items-center justify-between text-xs",children:[e.jsx("span",{className:"font-mono text-foreground-muted",children:a??"(no theme)"}),e.jsx("span",{className:"rounded bg-surface px-1.5 py-0.5 font-mono text-foreground-subtle uppercase",children:s})]}),e.jsx(O,{}),e.jsx(A,{variant:"info",appearance:"subtle",title:"Info",children:"Theme scale and Mode tokens combine here."})]})}const Y={title:"Foundation/ThemeAudit",parameters:{layout:"fullscreen"}},n={name:"Overview (16 patterns)",parameters:{docs:{description:{story:"8 Specials × 2 Modes = 16 patterns. Rows = Special (seasonal palette); columns = Mode (light/dark). Use this grid to verify orthogonality and to spot regressions when a new Special is added."}}},render:()=>e.jsxs("div",{className:"theme-audit-overview p-6",children:[e.jsx(i,{}),e.jsxs("header",{className:"mx-auto mb-6 max-w-6xl",children:[e.jsx("h1",{className:"mb-2 font-bold text-3xl text-foreground",children:"Theme Composition Audit"}),e.jsx("p",{className:"text-foreground-muted text-sm leading-relaxed",children:"Mode (light/dark) and Special (seasonal palette) are independent axes. This grid renders every combination so visual regressions across the matrix can be spotted in one screen."})]}),e.jsx("div",{className:"mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-2",children:l.map(s=>e.jsxs("div",{className:"contents",children:[e.jsxs("div",{className:"col-span-2 mt-4 flex items-baseline gap-2 first:mt-0",children:[e.jsx("h2",{className:"font-semibold text-base text-foreground",children:s.label}),e.jsx("span",{className:"text-foreground-muted text-xs",children:s.jpn}),e.jsx("span",{className:"ml-auto font-mono text-foreground-subtle text-xs",children:s.name})]}),P.map(a=>e.jsx(M,{mode:a,special:s.name},`${s.name}-${a}`))]},s.name))})]})},r={name:"Per Special",argTypes:{special:{description:"Which Special palette to apply on this story.",control:"select",options:["none",...l.map(s=>s.name)],table:{type:{summary:`${l.map(s=>`"${s.name}"`).join(" | ")} | "none"`},defaultValue:{summary:"none"}}},mode:{description:"Mode for this story (independent of the toolbar).",control:"select",options:["light","dark"],table:{type:{summary:'"light" | "dark"'},defaultValue:{summary:"light"}}}},args:{special:"none",mode:"light"},render:s=>{const{special:a,mode:o}=s;return e.jsxs("div",{className:"p-6",children:[e.jsx(i,{}),e.jsx("div",{className:"mx-auto max-w-3xl",children:e.jsx(M,{mode:o,special:a==="none"?null:a})})]})}},D=[{name:"--color-theme-500",owner:"Special",purpose:"Theme scale mid-tone"},{name:"--color-theme-200",owner:"Special",purpose:"Theme scale tint"},{name:"--color-background",owner:"Mode",purpose:"Page background"},{name:"--color-surface",owner:"Mode",purpose:"Card / container"},{name:"--color-foreground",owner:"Mode",purpose:"Primary text"},{name:"--color-border",owner:"Mode",purpose:"Default border"},{name:"--color-surface-disabled",owner:"Mode",purpose:"Disabled (Specials must not override)"},{name:"--color-info",owner:"Pinned",purpose:"Pinned to blue; never moves with Special"}],m=[{id:"l-none",label:"light · (none)",mode:"light",special:null},{id:"l-spring",label:"light · spring-early",mode:"light",special:"season--spring-early"},{id:"d-none",label:"dark · (none)",mode:"dark",special:null},{id:"d-spring",label:"dark · spring-early",mode:"dark",special:"season--spring-early"}];function R(){const s=E.useId();return e.jsxs("div",{children:[e.jsx("h2",{id:s,className:"mb-2 font-semibold text-foreground text-xl",children:"Cascade verification"}),e.jsxs("p",{className:"mb-4 text-foreground-muted text-sm leading-relaxed",children:["Each column is a sample point: a wrapper with the indicated Mode class and"," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono",children:"data-theme"}),". Per the two-axis model, Mode-owned tokens (background, foreground, border, disabled) must change between the light/dark columns; Special-owned tokens (",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono",children:"--color-theme-*"}),") must change between the (none) / (spring-early) columns;"," ",e.jsx("code",{className:"rounded bg-surface-hover px-1 font-mono",children:"--color-info"})," must remain pinned to blue everywhere."]}),e.jsx("div",{className:"overflow-x-auto rounded-lg border border-border",children:e.jsxs("table",{"aria-labelledby":s,className:"w-full border-collapse text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-surface-hover text-left",children:[e.jsx("th",{className:"px-3 py-2 font-mono font-semibold text-foreground",children:"token"}),e.jsx("th",{className:"px-3 py-2 font-semibold text-foreground",children:"owner"}),m.map(a=>e.jsx("th",{className:"px-3 py-2 font-mono text-foreground text-xs",children:a.label},a.id))]})}),e.jsx("tbody",{children:D.map(a=>e.jsxs("tr",{className:"border-border border-t",children:[e.jsx("td",{className:"px-3 py-2 font-mono text-foreground text-xs",children:a.name}),e.jsxs("td",{className:"px-3 py-2",children:[e.jsx("span",{className:`rounded px-1.5 py-0.5 font-mono text-xs ${a.owner==="Special"?"bg-theme-100 text-theme-900":a.owner==="Mode"?"bg-info-subtle text-info":"bg-warning-subtle text-warning"}`,children:a.owner}),e.jsx("div",{className:"text-foreground-muted text-xs",children:a.purpose})]}),m.map(o=>e.jsx("td",{className:"px-3 py-2",children:e.jsx("div",{className:`theme-audit-cell ${o.mode==="dark"?"dark":""} inline-flex items-center gap-2 rounded border border-border bg-background p-1`,"data-theme":o.special??void 0,children:e.jsx("span",{className:"inline-block size-5 rounded border border-border",style:{background:`var(${a.name})`},"aria-hidden":"true"})})},o.id))]},a.name))})]})})]})}const t={name:"Cascade Verification",render:()=>e.jsxs("div",{className:"p-6",children:[e.jsx(i,{}),e.jsx("div",{className:"mx-auto max-w-5xl",children:e.jsx(R,{})})]})};var p,u,h,x,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:`8 Specials × 2 Modes = 16 cells. Each cell is a scoped theme context, so
seasonal palettes and dark mode compose visually without affecting the
surrounding Storybook chrome. Mode-owned tokens (background, foreground,
border) must shift between rows; Special-owned tokens (\`--color-theme-*\`)
must shift between columns. Any allowlist violation (e.g. a Special
overriding \`--color-foreground\`) shows up immediately here.`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};var b,f,y,v,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source},description:{story:`Renders the showcase for one Special × one Mode at a time, both selected via
argTypes. The Storybook Theme / Season toolbar is intentionally bypassed
here — this story is for inspecting a single combination in isolation, and
the VRT spec drives the 16 patterns by varying these args via the URL
(\`&args=special:...;mode:...\`).`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};var j,w,N,k,C;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Cascade Verification',
  render: () => <div className="p-6">
      <ScopedSeasonalStyles />
      <div className="mx-auto max-w-5xl">
        <CascadeTable />
      </div>
    </div>
}`,...(N=(w=t.parameters)==null?void 0:w.docs)==null?void 0:N.source},description:{story:"For each canonical token, renders a color swatch inside a scoped wrapper\n(Mode class + `data-theme`) across four scenarios — light/no-Special,\nlight/spring-early, dark/no-Special, dark/spring-early. The browser's CSS\ncascade resolves `var(--color-X)` per scenario, so the swatch colors\nempirically prove which axis each token follows: Special-owned tokens shift\nbetween the (none) and (spring-early) columns; Mode-owned tokens shift\nbetween the light and dark columns; `--color-info` stays pinned to blue.",...(C=(k=t.parameters)==null?void 0:k.docs)==null?void 0:C.description}}};const Z=["Overview","PerSpecial","CascadeVerification"];export{t as CascadeVerification,n as Overview,r as PerSpecial,Z as __namedExportsOrder,Y as default};
