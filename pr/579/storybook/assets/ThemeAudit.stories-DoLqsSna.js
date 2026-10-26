import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{X as t,n}from"./iframe-Bp3qfF4A.js";import{n as r,t as i}from"./Badge-DZ9KieF7.js";import{n as a,t as o}from"./Button-CrLa5Zwh.js";import{n as s,t as c}from"./Callout-DiW4OLAw.js";import{a as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./scoped-theme-css-BWmRSm1t.js";function g(){return(0,x.jsx)(`style`,{children:C})}function _(){return(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,x.jsx)(o,{variant:`primary`,size:`sm`,children:`Primary`}),(0,x.jsx)(o,{variant:`destructive`,size:`sm`,children:`Delete`}),(0,x.jsx)(o,{variant:`secondary`,size:`sm`,children:`Secondary`}),(0,x.jsx)(i,{variant:`neutral`,appearance:`solid`,children:`Neutral`}),(0,x.jsx)(i,{variant:`success`,appearance:`subtle`,children:`Success`}),(0,x.jsx)(`span`,{className:`rounded bg-solid px-2 py-0.5 font-medium text-solid-foreground text-xs`,children:`Aa`}),(0,x.jsx)(`span`,{className:`size-4 rounded bg-theme-500`,"aria-hidden":`true`}),(0,x.jsx)(`span`,{className:`size-4 rounded bg-theme-200`,"aria-hidden":`true`}),(0,x.jsx)(`span`,{className:`size-4 rounded bg-theme-700`,"aria-hidden":`true`})]})}function v({mode:e,special:t}){return(0,x.jsxs)(`div`,{className:`theme-audit-cell ${e===`dark`?`dark`:``} flex flex-col gap-3 rounded-lg border border-border bg-background p-4`,"data-theme":t??void 0,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between text-xs`,children:[(0,x.jsx)(`span`,{className:`font-mono text-foreground-muted`,children:t??`(no theme)`}),(0,x.jsx)(`span`,{className:`rounded bg-surface px-1.5 py-0.5 font-mono text-foreground-muted uppercase`,children:e})]}),(0,x.jsx)(_,{}),(0,x.jsx)(c,{variant:`info`,appearance:`subtle`,title:`Info`,children:`Theme scale and Mode tokens combine here.`})]})}function y(){let e=(0,b.useId)();return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{id:e,className:`mb-2 font-semibold text-foreground text-xl`,children:`Cascade verification`}),(0,x.jsxs)(`p`,{className:`mb-4 text-foreground-muted text-sm leading-relaxed`,children:[`Each column is a sample point: a wrapper with the indicated Mode class and`,` `,(0,x.jsx)(`code`,{className:`rounded bg-surface-hover px-1 font-mono text-foreground`,children:`data-theme`}),`. Per the two-axis model, Mode-owned tokens (background, foreground, border, disabled) must change between the light/dark columns; Special-owned tokens (`,(0,x.jsx)(`code`,{className:`rounded bg-surface-hover px-1 font-mono text-foreground`,children:`--color-theme-*`}),`) must change between the (none) / (spring-early) columns;`,` `,(0,x.jsx)(`code`,{className:`rounded bg-surface-hover px-1 font-mono text-foreground`,children:`--color-info`}),` `,`must remain pinned to blue everywhere.`]}),(0,x.jsx)(`div`,{className:`overflow-x-auto rounded-lg border border-border`,children:(0,x.jsxs)(`table`,{"aria-labelledby":e,className:`w-full border-collapse text-sm`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{className:`bg-surface-hover text-left`,children:[(0,x.jsx)(`th`,{scope:`col`,className:`px-3 py-2 font-mono font-semibold text-foreground`,children:`token`}),(0,x.jsx)(`th`,{scope:`col`,className:`px-3 py-2 font-semibold text-foreground`,children:`owner`}),O.map(e=>(0,x.jsx)(`th`,{scope:`col`,className:`px-3 py-2 font-mono text-foreground text-xs`,children:e.label},e.id))]})}),(0,x.jsx)(`tbody`,{children:D.map(e=>(0,x.jsxs)(`tr`,{className:`border-border border-t`,children:[(0,x.jsx)(`td`,{className:`px-3 py-2 font-mono text-foreground text-xs`,children:e.name}),(0,x.jsxs)(`td`,{className:`px-3 py-2`,children:[(0,x.jsx)(`span`,{className:`rounded px-1.5 py-0.5 font-mono text-xs ${e.owner===`Special`?`bg-theme-100 text-theme-900`:e.owner===`Mode`?`bg-info-subtle text-info-emphasis`:`bg-warning-subtle text-warning-emphasis`}`,children:e.owner}),(0,x.jsx)(`div`,{className:`text-foreground-muted text-xs`,children:e.purpose})]}),O.map(t=>(0,x.jsx)(`td`,{className:`px-3 py-2`,children:(0,x.jsx)(`div`,{className:`theme-audit-cell ${t.mode===`dark`?`dark`:``} inline-flex items-center gap-2 rounded border border-border bg-background p-1`,"data-theme":t.special??void 0,children:(0,x.jsx)(`span`,{className:`inline-block size-5 rounded border border-border`,style:{background:`var(${e.name})`},"aria-hidden":`true`})})},t.id))]},e.name))})]})})]})}var b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{b=t(),r(),a(),s(),f(),u(),p(),x=n(),S=[`light`,`dark`],C=d(`.theme-audit-cell`,{semanticCss:m,seasonalCss:l}),w={title:`Theming/Theme Audit`,tags:[`!dev`],parameters:{layout:`fullscreen`}},T={name:`Overview (16 patterns)`,parameters:{docs:{description:{story:`8 Specials × 2 Modes = 16 patterns. Rows = Special (seasonal palette); columns = Mode (light/dark). Use this grid to verify orthogonality and to spot regressions when a new Special is added.`}}},render:()=>(0,x.jsxs)(`div`,{className:`theme-audit-overview p-6`,children:[(0,x.jsx)(g,{}),(0,x.jsxs)(`header`,{className:`mx-auto mb-6 max-w-6xl`,children:[(0,x.jsx)(`h1`,{className:`mb-2 font-bold text-3xl text-foreground`,children:`Theme Composition Audit`}),(0,x.jsx)(`p`,{className:`text-foreground-muted text-sm leading-relaxed`,children:`Mode (light/dark) and Special (seasonal palette) are independent axes. This grid renders every combination so visual regressions across the matrix can be spotted in one screen.`})]}),(0,x.jsx)(`div`,{className:`mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-2`,children:h.map(e=>(0,x.jsxs)(`div`,{className:`contents`,children:[(0,x.jsxs)(`div`,{className:`col-span-2 mt-4 flex items-baseline gap-2 first:mt-0`,children:[(0,x.jsx)(`h2`,{className:`font-semibold text-base text-foreground`,children:e.label}),(0,x.jsx)(`span`,{className:`text-foreground-muted text-xs`,children:e.colors}),(0,x.jsx)(`span`,{className:`ml-auto font-mono text-foreground-muted text-xs`,children:e.id})]}),S.map(t=>(0,x.jsx)(v,{mode:t,special:e.id},`${e.id}-${t}`))]},e.id))})]})},E={name:`Per Special`,argTypes:{special:{description:`Which Special palette to apply on this story.`,control:`select`,options:[`none`,...h.map(e=>e.id)],table:{type:{summary:`${h.map(e=>`"${e.id}"`).join(` | `)} | "none"`},defaultValue:{summary:`none`}}},mode:{description:`Mode for this story (independent of the toolbar).`,control:`select`,options:[`light`,`dark`],table:{type:{summary:`"light" | "dark"`},defaultValue:{summary:`light`}}}},args:{special:`none`,mode:`light`},render:e=>{let{special:t,mode:n}=e;return(0,x.jsxs)(`div`,{className:`p-6`,children:[(0,x.jsx)(g,{}),(0,x.jsx)(`div`,{className:`mx-auto max-w-3xl`,children:(0,x.jsx)(v,{mode:n,special:t===`none`?null:t})})]})}},D=[{name:`--color-theme-500`,owner:`Special`,purpose:`Theme scale mid-tone`},{name:`--color-theme-200`,owner:`Special`,purpose:`Theme scale tint`},{name:`--color-background`,owner:`Mode`,purpose:`Page background`},{name:`--color-surface`,owner:`Mode`,purpose:`Card / container`},{name:`--color-foreground`,owner:`Mode`,purpose:`Primary text`},{name:`--color-border`,owner:`Mode`,purpose:`Default border`},{name:`--color-surface-disabled`,owner:`Mode`,purpose:`Disabled (Specials must not override)`},{name:`--color-info`,owner:`Pinned`,purpose:`Pinned to blue; never moves with Special`}],O=[{id:`l-none`,label:`light · (none)`,mode:`light`,special:null},{id:`l-spring`,label:`light · spring-early`,mode:`light`,special:`season--spring-early`},{id:`d-none`,label:`dark · (none)`,mode:`dark`,special:null},{id:`d-spring`,label:`dark · spring-early`,mode:`dark`,special:`season--spring-early`}],k={name:`Cascade Verification`,render:()=>(0,x.jsxs)(`div`,{className:`p-6`,children:[(0,x.jsx)(g,{}),(0,x.jsx)(`div`,{className:`mx-auto max-w-5xl`,children:(0,x.jsx)(y,{})})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
              <span className="ml-auto font-mono text-foreground-muted text-xs">{s.id}</span>
            </div>
            {MODES.map(m => <ThemeCell key={\`\${s.id}-\${m}\`} mode={m} special={s.id} />)}
          </div>)}
      </div>
    </div>
}`,...T.parameters?.docs?.source},description:{story:"8 Specials × 2 Modes = 16 cells. Each cell is a scoped theme context, so\nseasonal palettes and dark mode compose visually without affecting the\nsurrounding Storybook chrome. Mode-owned tokens (background, foreground,\nborder) must shift between rows; Special-owned tokens (`--color-theme-*`)\nmust shift between columns. Any allowlist violation (e.g. a Special\noverriding `--color-foreground`) shows up immediately here.\n\nSince #150 the solid family rides the theme ramp: Button `primary`, the\nneutral × solid Badge, and the `Aa` fg-on-solid chip must tint per\nSpecial, while `destructive` stays pinned to red (adjacency audit) and\nthe Callout `info` stays pinned to blue.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Renders the showcase for one Special × one Mode at a time, both selected via
argTypes. The Storybook Theme / Season toolbar is intentionally bypassed
here — this story is for inspecting a single combination in isolation, and
the VRT spec drives the 16 patterns by varying these args via the URL
(\`&args=special:...;mode:...\`).`,...E.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Cascade Verification',
  render: () => <div className="p-6">
      <ScopedSeasonalStyles />
      <div className="mx-auto max-w-5xl">
        <CascadeTable />
      </div>
    </div>
}`,...k.parameters?.docs?.source},description:{story:`For each canonical token, renders a color swatch inside a scoped wrapper
(Mode class + \`data-theme\`) across four scenarios — light/no-Special,
light/spring-early, dark/no-Special, dark/spring-early. The browser's CSS
cascade resolves \`var(--color-X)\` per scenario, so the swatch colors
empirically prove which axis each token follows: Special-owned tokens shift
between the (none) and (spring-early) columns; Mode-owned tokens shift
between the light and dark columns; \`--color-info\` stays pinned to blue.`,...k.parameters?.docs?.description}}},A=[`Overview`,`PerSpecial`,`CascadeVerification`]})))()}j();export{k as CascadeVerification,T as Overview,E as PerSpecial,A as __namedExportsOrder,w as default};