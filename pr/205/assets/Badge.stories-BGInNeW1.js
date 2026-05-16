import{j as e}from"./iframe-DpyswGKM.js";import{B as a}from"./Badge-pxRwVyUy.js";import"./preload-helper-DUEUtxdG.js";import"./index-BHFy0lnD.js";import"./chevron-up-BOZIja0B.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";const ae={title:"Components/lv1/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:'Badge displays small status descriptors. Two axes drive its\nappearance:\n\n- **`variant`** — semantic tone (`neutral` / `accent` / `success` /\n  `error` / `warning` / `info`). State variants reuse the same state\n  semantic tokens as Toast and Callout.\n- **`appearance`** — visual weight (`subtle` (default) / `solid` /\n  `outline`). Value names align 1:1 with the underlying token\n  suffix (`bg-{state}-subtle`, `bg-{state}`).\n\nReach for `subtle` for ambient list rows and status tags, `solid` for\nemphasis, and `outline` for the lightest, border-only style.\n\nBadge is intentionally state-oriented (no `destructive` variant) —\nuse `error` for "failed/invalid" tags. For destructive *actions*,\nuse `<Button variant="destructive">`.\n\n**Coverage note**: today `neutral` is defined for `subtle` / `outline`,\nand `accent` only for `solid`. Other combinations (`neutral + solid`,\n`accent + subtle`, `accent + outline`) emit no fill classes — pick a\nstate variant if you need a defined visual treatment.'}}},tags:["autodocs"],argTypes:{variant:{description:"Semantic tone of the badge. State variants (success / error / warning / info) share the same state semantic tokens as Toast and Callout.",control:"select",options:["neutral","accent","success","error","warning","info"],table:{type:{summary:'"neutral" | "accent" | "success" | "error" | "warning" | "info"'},defaultValue:{summary:"neutral"}}},appearance:{description:"Visual appearance — `subtle` for soft tinted background (default), `solid` for filled emphasis, `outline` for outline-only.",control:"select",options:["solid","subtle","outline"],table:{type:{summary:'"solid" | "subtle" | "outline"'},defaultValue:{summary:"subtle"}}},size:{description:"Size of the badge.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},icon:{description:'Lucide icon name in PascalCase (e.g. "Check", "CircleAlert").',control:"text",table:{type:{summary:"IconName"},defaultValue:{summary:"-"}}},iconPosition:{description:"Position of the icon relative to the label text.",control:"select",options:["start","end"],table:{type:{summary:'"start" | "end"'},defaultValue:{summary:"start"}}},children:{description:"Content displayed inside the badge.",control:"text",table:{type:{summary:"ReactNode"}}}}},$=["accent","success","error","warning","info"],q=["neutral","success","error","warning","info"],G=["neutral","success","error","warning","info"],r={name:"Playground",args:{variant:"neutral",appearance:"subtle",size:"md",children:"Badge"}},s={name:"Solid Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:$.map(n=>e.jsx(a,{variant:n,appearance:"solid",children:n},n))})},t={name:"Subtle Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:q.map(n=>e.jsx(a,{variant:n,appearance:"subtle",children:n},n))})},i={name:"Outline Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:G.map(n=>e.jsx(a,{variant:n,appearance:"outline",children:n},n))})},o={name:"Full Matrix",parameters:{docs:{description:{story:"Defined `variant` × `appearance` combinations. `neutral` is paired with `subtle` / `outline`; `accent` is paired with `solid`; state variants support all three appearances."}}},render:()=>e.jsx("div",{className:"flex flex-col gap-3",children:["solid","subtle","outline"].map(n=>{const H=n==="solid"?$:n==="subtle"?q:G;return e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:n}),H.map(u=>e.jsx(a,{variant:u,appearance:n,children:u},`${n}-${u}`))]},n)})})},c={name:"States",parameters:{docs:{description:{story:"Typical status-tag use cases. The default `subtle` appearance (top row) sits comfortably in list rows and tables; `solid` (bottom row) draws more attention when a status needs emphasis."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",icon:"Check",children:"Active"}),e.jsx(a,{variant:"warning",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"error",icon:"X",children:"Failed"}),e.jsx(a,{variant:"info",icon:"Sparkles",children:"Beta"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",appearance:"solid",icon:"Check",children:"Active"}),e.jsx(a,{variant:"warning",appearance:"solid",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"error",appearance:"solid",icon:"X",children:"Failed"}),e.jsx(a,{variant:"info",appearance:"solid",icon:"Sparkles",children:"Beta"})]})]})},l={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},d={name:"Icons",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",icon:"Check",children:"Success"}),e.jsx(a,{variant:"error",icon:"CircleAlert",children:"Error"}),e.jsx(a,{variant:"neutral",appearance:"subtle",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"neutral",appearance:"outline",icon:"Tag",children:"Label"})]})},p={name:"Icon Positions",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"ArrowLeft",children:"Start"}),e.jsx(a,{icon:"ArrowRight",iconPosition:"end",children:"End"})]})},m={name:"Icon Only",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"Check",size:"sm","aria-label":"Success"}),e.jsx(a,{icon:"Check","aria-label":"Success"}),e.jsx(a,{icon:"Check",size:"lg","aria-label":"Success"}),e.jsx(a,{variant:"error",icon:"X","aria-label":"Error"}),e.jsx(a,{variant:"neutral",appearance:"outline",icon:"Star","aria-label":"Starred"})]})};var g,v,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'neutral',
    appearance: 'subtle',
    size: 'md',
    children: 'Badge'
  }
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,h,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {SOLID_VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="solid">
          {variant}
        </Badge>)}
    </div>
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,B,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {SUBTLE_VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="subtle">
          {variant}
        </Badge>)}
    </div>
}`,...(y=(B=t.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var w,j,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Outline Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {OUTLINE_VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="outline">
          {variant}
        </Badge>)}
    </div>
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var T,k,A;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Full Matrix',
  parameters: {
    docs: {
      description: {
        story: 'Defined \`variant\` × \`appearance\` combinations. \`neutral\` is paired with \`subtle\` / \`outline\`; \`accent\` is paired with \`solid\`; state variants support all three appearances.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      {(['solid', 'subtle', 'outline'] as const).map(appearance => {
      const variants = appearance === 'solid' ? SOLID_VARIANTS : appearance === 'subtle' ? SUBTLE_VARIANTS : OUTLINE_VARIANTS;
      return <div key={appearance} className="flex flex-wrap items-center gap-3">
            <span className="w-20 text-xs font-mono text-foreground-muted">{appearance}</span>
            {variants.map(variant => <Badge key={\`\${appearance}-\${variant}\`} variant={variant} appearance={appearance}>
                {variant}
              </Badge>)}
          </div>;
    })}
    </div>
}`,...(A=(k=o.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var C,I,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var z,L,O;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(O=(L=l.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var V,E,R;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var _,F,M;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Badge icon="ArrowLeft">Start</Badge>
      <Badge icon="ArrowRight" iconPosition="end">
        End
      </Badge>
    </div>
}`,...(M=(F=p.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var U,X,D;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Icon Only',
  render: () => <div className="flex items-center gap-4">
      <Badge icon="Check" size="sm" aria-label="Success" />
      <Badge icon="Check" aria-label="Success" />
      <Badge icon="Check" size="lg" aria-label="Success" />
      <Badge variant="error" icon="X" aria-label="Error" />
      <Badge variant="neutral" appearance="outline" icon="Star" aria-label="Starred" />
    </div>
}`,...(D=(X=m.parameters)==null?void 0:X.docs)==null?void 0:D.source}}};const ne=["Playground","SolidTreatments","SubtleTreatments","OutlineTreatments","FullMatrix","States","Sizes","Icons","IconPositions","IconOnly"];export{o as FullMatrix,m as IconOnly,p as IconPositions,d as Icons,i as OutlineTreatments,r as Playground,l as Sizes,s as SolidTreatments,c as States,t as SubtleTreatments,ne as __namedExportsOrder,ae as default};
