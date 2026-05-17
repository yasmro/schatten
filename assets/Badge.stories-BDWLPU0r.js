import{j as e}from"./iframe-B3yEXAcV.js";import{B as a}from"./Badge-DhG2zvGE.js";import"./preload-helper-hmmh1zBP.js";import"./index-vrVUoB5a.js";import"./chevron-up-DNu7n8Ic.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";const Z={title:"Components/lv1/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:'Badge displays small status descriptors. Two axes drive its\nappearance:\n\n- **`variant`** — semantic tone (`neutral` / `success` / `error` /\n  `warning` / `info`). State variants reuse the same state semantic\n  tokens as Toast and Callout.\n- **`appearance`** — visual weight (`subtle` (default) / `solid` /\n  `outline`). Value names align 1:1 with the underlying token\n  suffix (`bg-{state}-subtle`, `bg-{state}`).\n\nReach for `subtle` for ambient list rows and status tags, `solid` for\nemphasis, and `outline` for the lightest, border-only style.\n\nBadge is intentionally state-oriented (no `destructive` variant) —\nuse `error` for "failed/invalid" tags. For destructive *actions*,\nuse `<Button variant="destructive">`. There is intentionally **no\nbrand-accent variant** — Pattern B keeps a single non-state surface\n(`neutral`) plus the four state variants.'}}},tags:["autodocs"],argTypes:{variant:{description:"Semantic tone of the badge. State variants (success / error / warning / info) share the same state semantic tokens as Toast and Callout.",control:"select",options:["neutral","success","error","warning","info"],table:{type:{summary:'"neutral" | "success" | "error" | "warning" | "info"'},defaultValue:{summary:"neutral"}}},appearance:{description:"Visual appearance — `subtle` for soft tinted background (default), `solid` for filled emphasis, `outline` for outline-only.",control:"select",options:["solid","subtle","outline"],table:{type:{summary:'"solid" | "subtle" | "outline"'},defaultValue:{summary:"subtle"}}},size:{description:"Size of the badge.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},icon:{description:'Lucide icon name in PascalCase (e.g. "Check", "CircleAlert").',control:"text",table:{type:{summary:"IconName"},defaultValue:{summary:"-"}}},iconPosition:{description:"Position of the icon relative to the label text.",control:"select",options:["start","end"],table:{type:{summary:'"start" | "end"'},defaultValue:{summary:"start"}}},children:{description:"Content displayed inside the badge.",control:"text",table:{type:{summary:"ReactNode"}}}}},u=["neutral","success","error","warning","info"],G=["solid","subtle","outline"],n={name:"Playground",args:{variant:"neutral",appearance:"subtle",size:"md",children:"Badge"}},s={name:"Solid Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:u.map(r=>e.jsx(a,{variant:r,appearance:"solid",children:r},r))})},t={name:"Subtle Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:u.map(r=>e.jsx(a,{variant:r,appearance:"subtle",children:r},r))})},i={name:"Outline Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:u.map(r=>e.jsx(a,{variant:r,appearance:"outline",children:r},r))})},o={name:"Full Matrix",parameters:{docs:{description:{story:"Every defined `variant` × `appearance` combination. All five variants support all three appearances."}}},render:()=>e.jsx("div",{className:"flex flex-col gap-3",children:G.map(r=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:r}),u.map(g=>e.jsx(a,{variant:g,appearance:r,children:g},`${r}-${g}`))]},r))})},c={name:"States",parameters:{docs:{description:{story:"Typical status-tag use cases. The default `subtle` appearance (top row) sits comfortably in list rows and tables; `solid` (bottom row) draws more attention when a status needs emphasis."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",icon:"Check",children:"Active"}),e.jsx(a,{variant:"warning",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"error",icon:"X",children:"Failed"}),e.jsx(a,{variant:"info",icon:"Sparkles",children:"Beta"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",appearance:"solid",icon:"Check",children:"Active"}),e.jsx(a,{variant:"warning",appearance:"solid",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"error",appearance:"solid",icon:"X",children:"Failed"}),e.jsx(a,{variant:"info",appearance:"solid",icon:"Sparkles",children:"Beta"})]})]})},l={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},d={name:"Icons",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",icon:"Check",children:"Success"}),e.jsx(a,{variant:"error",icon:"CircleAlert",children:"Error"}),e.jsx(a,{variant:"neutral",appearance:"subtle",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"neutral",appearance:"outline",icon:"Tag",children:"Label"})]})},p={name:"Icon Positions",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"ArrowLeft",children:"Start"}),e.jsx(a,{icon:"ArrowRight",iconPosition:"end",children:"End"})]})},m={name:"Icon Only",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"Check",size:"sm","aria-label":"Success"}),e.jsx(a,{icon:"Check","aria-label":"Success"}),e.jsx(a,{icon:"Check",size:"lg","aria-label":"Success"}),e.jsx(a,{variant:"error",icon:"X","aria-label":"Error"}),e.jsx(a,{variant:"neutral",appearance:"outline",icon:"Star","aria-label":"Starred"})]})};var v,x,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'neutral',
    appearance: 'subtle',
    size: 'md',
    children: 'Badge'
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,B,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="solid">
          {variant}
        </Badge>)}
    </div>
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var b,y,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="subtle">
          {variant}
        </Badge>)}
    </div>
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var j,N,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Outline Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="outline">
          {variant}
        </Badge>)}
    </div>
}`,...(k=(N=i.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var A,C,T;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Full Matrix',
  parameters: {
    docs: {
      description: {
        story: 'Every defined \`variant\` × \`appearance\` combination. All five variants support all three appearances.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      {APPEARANCES.map(appearance => <div key={appearance} className="flex flex-wrap items-center gap-3">
          <span className="w-20 text-xs font-mono text-foreground-muted">{appearance}</span>
          {VARIANTS.map(variant => <Badge key={\`\${appearance}-\${variant}\`} variant={variant} appearance={appearance}>
              {variant}
            </Badge>)}
        </div>)}
    </div>
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var P,z,I;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'States',
  parameters: {
    docs: {
      description: {
        story: 'Typical status-tag use cases. The default \`subtle\` appearance (top row) sits comfortably in list rows and tables; \`solid\` (bottom row) draws more attention when a status needs emphasis.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Badge variant="success" icon="Check">
          Active
        </Badge>
        <Badge variant="warning" icon="Clock">
          Pending
        </Badge>
        <Badge variant="error" icon="X">
          Failed
        </Badge>
        <Badge variant="info" icon="Sparkles">
          Beta
        </Badge>
      </div>
      <div className="flex flex-wrap gap-4">
        <Badge variant="success" appearance="solid" icon="Check">
          Active
        </Badge>
        <Badge variant="warning" appearance="solid" icon="Clock">
          Pending
        </Badge>
        <Badge variant="error" appearance="solid" icon="X">
          Failed
        </Badge>
        <Badge variant="info" appearance="solid" icon="Sparkles">
          Beta
        </Badge>
      </div>
    </div>
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var E,R,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var F,O,L;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Icons',
  render: () => <div className="flex flex-wrap gap-4">
      <Badge variant="success" icon="Check">
        Success
      </Badge>
      <Badge variant="error" icon="CircleAlert">
        Error
      </Badge>
      <Badge variant="neutral" appearance="subtle" icon="Clock">
        Pending
      </Badge>
      <Badge variant="neutral" appearance="outline" icon="Tag">
        Label
      </Badge>
    </div>
}`,...(L=(O=d.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var M,X,$;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Badge icon="ArrowLeft">Start</Badge>
      <Badge icon="ArrowRight" iconPosition="end">
        End
      </Badge>
    </div>
}`,...($=(X=p.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var _,q,D;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Icon Only',
  render: () => <div className="flex items-center gap-4">
      <Badge icon="Check" size="sm" aria-label="Success" />
      <Badge icon="Check" aria-label="Success" />
      <Badge icon="Check" size="lg" aria-label="Success" />
      <Badge variant="error" icon="X" aria-label="Error" />
      <Badge variant="neutral" appearance="outline" icon="Star" aria-label="Starred" />
    </div>
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const ee=["Playground","SolidTreatments","SubtleTreatments","OutlineTreatments","FullMatrix","States","Sizes","Icons","IconPositions","IconOnly"];export{o as FullMatrix,m as IconOnly,p as IconPositions,d as Icons,i as OutlineTreatments,n as Playground,l as Sizes,s as SolidTreatments,c as States,t as SubtleTreatments,ee as __namedExportsOrder,Z as default};
