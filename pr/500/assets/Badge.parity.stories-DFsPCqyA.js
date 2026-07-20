import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{St as n,t as r}from"./lucide-react-CwYeROqo.js";import{n as i,t as a}from"./Badge-CcUSgikm.js";var o,s,c,l,u,d,f;e((()=>{r(),i(),o=t(),s={title:`Components/lv1/Badge`,component:a,parameters:{layout:`centered`,docs:{description:{component:"Parity stories — React `<Badge>` and a hand-written vanilla `<div>` with\nthe matching `.st-badge` class chain must render pixel-identical. Backs\nthe VRT in `Badge.parity.vrt.spec.ts`.\n\nThe vanilla side reproduces every tone × appearance combination plus an\nicon-only case (`.st-badge--icon-only` modifier is conditionally emitted\nby Badge.tsx outside CVA)."}}}},c=()=>(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,o.jsx)(`path`,{d:`M20 6 9 17l-5-5`})}),l=[`neutral`,`success`,`error`,`warning`,`info`],u=[`subtle`,`solid`,`outline`],d={name:`React vs Vanilla HTML`,render:()=>(0,o.jsxs)(`div`,{className:`grid grid-cols-2 gap-12`,children:[(0,o.jsxs)(`div`,{className:`space-y-3`,children:[(0,o.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`React`}),u.map(e=>(0,o.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,o.jsx)(`span`,{className:`w-20 text-xs font-mono text-foreground-muted`,children:e}),l.map(t=>(0,o.jsx)(a,{variant:t,appearance:e,children:t},`${t}-${e}`))]},e)),(0,o.jsxs)(`div`,{className:`flex items-center gap-3 pt-2`,children:[(0,o.jsx)(`span`,{className:`w-20 text-xs font-mono text-foreground-muted`,children:`sizes`}),(0,o.jsx)(a,{size:`sm`,children:`small`}),(0,o.jsx)(a,{size:`md`,children:`medium`}),(0,o.jsx)(a,{size:`lg`,children:`large`})]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,o.jsx)(`span`,{className:`w-20 text-xs font-mono text-foreground-muted`,children:`icon`}),(0,o.jsx)(a,{variant:`success`,icon:n,children:`Done`}),(0,o.jsx)(a,{variant:`success`,icon:n,"aria-label":`Done`})]})]}),(0,o.jsxs)(`div`,{className:`space-y-3`,children:[(0,o.jsx)(`p`,{className:`text-xs mb-2 text-foreground-muted`,children:`Vanilla HTML`}),u.map(e=>(0,o.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,o.jsx)(`span`,{className:`w-20 text-xs font-mono text-foreground-muted`,children:e}),l.map(t=>(0,o.jsx)(`div`,{className:`st-badge st-badge--${t} st-badge--${e} st-badge--md`,children:t},`${t}-${e}`))]},e)),(0,o.jsxs)(`div`,{className:`flex items-center gap-3 pt-2`,children:[(0,o.jsx)(`span`,{className:`w-20 text-xs font-mono text-foreground-muted`,children:`sizes`}),(0,o.jsx)(`div`,{className:`st-badge st-badge--neutral st-badge--subtle st-badge--sm`,children:`small`}),(0,o.jsx)(`div`,{className:`st-badge st-badge--neutral st-badge--subtle st-badge--md`,children:`medium`}),(0,o.jsx)(`div`,{className:`st-badge st-badge--neutral st-badge--subtle st-badge--lg`,children:`large`})]}),(0,o.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,o.jsx)(`span`,{className:`w-20 text-xs font-mono text-foreground-muted`,children:`icon`}),(0,o.jsxs)(`div`,{className:`st-badge st-badge--success st-badge--subtle st-badge--md`,children:[(0,o.jsx)(c,{}),`Done`]}),(0,o.jsx)(`div`,{className:`st-badge st-badge--success st-badge--subtle st-badge--md st-badge--icon-only`,role:`img`,"aria-label":`Done`,children:(0,o.jsx)(c,{})})]})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Parity`]}))();export{d as Parity,f as __namedExportsOrder,s as default};