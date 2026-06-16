import{j as e}from"./iframe-D7mG3oyW.js";import{B as t}from"./Badge-6El59UF1.js";import{C as d}from"./check-Bq-F8Tyj.js";import"./preload-helper-o4VUtNp3.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css              */import"./createLucideIcon-DELRHoH6.js";const v={title:"Components/lv1/Badge",component:t,parameters:{layout:"centered",docs:{description:{component:"Parity stories — React `<Badge>` and a hand-written vanilla `<div>` with\nthe matching `.st-badge` class chain must render pixel-identical. Backs\nthe VRT in `Badge.parity.vrt.spec.ts`.\n\nThe vanilla side reproduces every tone × appearance combination plus an\nicon-only case (`.st-badge--icon-only` modifier is conditionally emitted\nby Badge.tsx outside CVA)."}}}},i=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"M20 6 9 17l-5-5"})}),r=["neutral","success","error","warning","info"],l=["subtle","solid","outline"],n={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"React"}),l.map(s=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:s}),r.map(a=>e.jsx(t,{variant:a,appearance:s,children:a},`${a}-${s}`))]},s)),e.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:"sizes"}),e.jsx(t,{size:"sm",children:"small"}),e.jsx(t,{size:"md",children:"medium"}),e.jsx(t,{size:"lg",children:"large"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:"icon"}),e.jsx(t,{variant:"success",icon:d,children:"Done"}),e.jsx(t,{variant:"success",icon:d,"aria-label":"Done"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-xs mb-2 text-foreground-muted",children:"Vanilla HTML"}),l.map(s=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:s}),r.map(a=>e.jsx("div",{className:`st-badge st-badge--${a} st-badge--${s} st-badge--md`,children:a},`${a}-${s}`))]},s)),e.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:"sizes"}),e.jsx("div",{className:"st-badge st-badge--neutral st-badge--subtle st-badge--sm",children:"small"}),e.jsx("div",{className:"st-badge st-badge--neutral st-badge--subtle st-badge--md",children:"medium"}),e.jsx("div",{className:"st-badge st-badge--neutral st-badge--subtle st-badge--lg",children:"large"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:"icon"}),e.jsxs("div",{className:"st-badge st-badge--success st-badge--subtle st-badge--md",children:[e.jsx(i,{}),"Done"]}),e.jsx("div",{className:"st-badge st-badge--success st-badge--subtle st-badge--md st-badge--icon-only",role:"img","aria-label":"Done",children:e.jsx(i,{})})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12">
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">React</p>
        {APPEARANCES.map(appearance => <div key={appearance} className="flex flex-wrap items-center gap-3">
            <span className="w-20 text-xs font-mono text-foreground-muted">{appearance}</span>
            {VARIANTS.map(variant => <Badge key={\`\${variant}-\${appearance}\`} variant={variant} appearance={appearance}>
                {variant}
              </Badge>)}
          </div>)}
        <div className="flex items-center gap-3 pt-2">
          <span className="w-20 text-xs font-mono text-foreground-muted">sizes</span>
          <Badge size="sm">small</Badge>
          <Badge size="md">medium</Badge>
          <Badge size="lg">large</Badge>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-20 text-xs font-mono text-foreground-muted">icon</span>
          <Badge variant="success" icon={Check}>
            Done
          </Badge>
          <Badge variant="success" icon={Check} aria-label="Done" />
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs mb-2 text-foreground-muted">Vanilla HTML</p>
        {APPEARANCES.map(appearance => <div key={appearance} className="flex flex-wrap items-center gap-3">
            <span className="w-20 text-xs font-mono text-foreground-muted">{appearance}</span>
            {VARIANTS.map(variant => <div key={\`\${variant}-\${appearance}\`} className={\`st-badge st-badge--\${variant} st-badge--\${appearance} st-badge--md\`}>
                {variant}
              </div>)}
          </div>)}
        <div className="flex items-center gap-3 pt-2">
          <span className="w-20 text-xs font-mono text-foreground-muted">sizes</span>
          <div className="st-badge st-badge--neutral st-badge--subtle st-badge--sm">small</div>
          <div className="st-badge st-badge--neutral st-badge--subtle st-badge--md">medium</div>
          <div className="st-badge st-badge--neutral st-badge--subtle st-badge--lg">large</div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-20 text-xs font-mono text-foreground-muted">icon</span>
          <div className="st-badge st-badge--success st-badge--subtle st-badge--md">
            <CheckVanilla />
            Done
          </div>
          {/* role="img" mirrors the React \`<Badge>\` icon-only auto-role: a bare
              <div> (role generic) can't hold an accessible name, so aria-label
              would be dropped from the a11y tree without it. */}
          <div className="st-badge st-badge--success st-badge--subtle st-badge--md st-badge--icon-only" role="img" aria-label="Done">
            <CheckVanilla />
          </div>
        </div>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};const f=["Parity"];export{n as Parity,f as __namedExportsOrder,v as default};
