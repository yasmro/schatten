import{j as e}from"./iframe-DERO4QCx.js";import{B as a}from"./Badge-CknsLnL7.js";import"./preload-helper-6VsmarHM.js";import"./index-CCt7_How.js";import"./chevron-up-BcrOCtA9.js";import"./index-DHk-Frat.js";const Y={title:"Components/lv1/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:'Badge displays small status descriptors. Two axes drive its\nappearance:\n\n- **`variant`** — semantic state (`default` / `success` / `error` /\n  `warning` / `info`). Reuses the same state semantic tokens as\n  Toast and Callout.\n- **`treatment`** — visual fill (`solid` / `subtle` / `outline`).\n  Pick `solid` for emphasis, `subtle` for soft tinted tags, and\n  `outline` for the lightest, most ambient style.\n\nBadge is intentionally state-oriented (no `destructive` variant) —\nuse `error` for "failed/invalid" tags. For destructive *actions*,\nuse `<Button variant="destructive">`.'}}},tags:["autodocs"],argTypes:{variant:{description:"Semantic state of the badge. State variants share the same state semantic tokens as Toast and Callout.",control:"select",options:["default","success","error","warning","info"],table:{type:{summary:'"default" | "success" | "error" | "warning" | "info"'},defaultValue:{summary:"default"}}},treatment:{description:"Visual treatment — `solid` for filled emphasis, `subtle` for soft tinted background, `outline` for outline-only.",control:"select",options:["solid","subtle","outline"],table:{type:{summary:'"solid" | "subtle" | "outline"'},defaultValue:{summary:"solid"}}},size:{description:"Size of the badge.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},icon:{description:'Lucide icon name in PascalCase (e.g. "Check", "AlertCircle").',control:"text",table:{type:{summary:"IconName"},defaultValue:{summary:"-"}}},iconPosition:{description:"Position of the icon relative to the label text.",control:"select",options:["start","end"],table:{type:{summary:'"start" | "end"'},defaultValue:{summary:"start"}}},children:{description:"Content displayed inside the badge.",control:"text",table:{type:{summary:"ReactNode"}}}}},p=["default","success","error","warning","info"],D=["solid","subtle","outline"],r={name:"Playground",args:{variant:"default",treatment:"solid",size:"md",children:"Badge"}},n={name:"Solid Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:p.map(t=>e.jsx(a,{variant:t,treatment:"solid",children:t},t))})},s={name:"Subtle Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:p.map(t=>e.jsx(a,{variant:t,treatment:"subtle",children:t},t))})},i={name:"Outline Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:p.map(t=>e.jsx(a,{variant:t,treatment:"outline",children:t},t))})},o={name:"Full Matrix",parameters:{docs:{description:{story:"Every combination of `variant` × `treatment`. Use this view to pick a Badge style that matches the prominence and tone of the surrounding UI."}}},render:()=>e.jsx("div",{className:"flex flex-col gap-3",children:D.map(t=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:t}),p.map(g=>e.jsx(a,{variant:g,treatment:t,children:g},`${t}-${g}`))]},t))})},c={name:"States",parameters:{docs:{description:{story:'Typical status-tag use cases. Pick `treatment="subtle"` for ambient list rows, `solid` for prominent emphasis.'}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",icon:"Check",children:"Active"}),e.jsx(a,{variant:"warning",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"error",icon:"X",children:"Failed"}),e.jsx(a,{variant:"info",icon:"Sparkles",children:"Beta"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",treatment:"subtle",icon:"Check",children:"Active"}),e.jsx(a,{variant:"warning",treatment:"subtle",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"error",treatment:"subtle",icon:"X",children:"Failed"}),e.jsx(a,{variant:"info",treatment:"subtle",icon:"Sparkles",children:"Beta"})]})]})},l={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},d={name:"Icons",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",icon:"Check",children:"Success"}),e.jsx(a,{variant:"error",icon:"AlertCircle",children:"Error"}),e.jsx(a,{variant:"default",treatment:"subtle",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"default",treatment:"outline",icon:"Tag",children:"Label"})]})},m={name:"Icon Positions",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"ArrowLeft",children:"Start"}),e.jsx(a,{icon:"ArrowRight",iconPosition:"end",children:"End"})]})},u={name:"Icon Only",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"Check",size:"sm","aria-label":"Success"}),e.jsx(a,{icon:"Check","aria-label":"Success"}),e.jsx(a,{icon:"Check",size:"lg","aria-label":"Success"}),e.jsx(a,{variant:"error",icon:"X","aria-label":"Error"}),e.jsx(a,{variant:"default",treatment:"outline",icon:"Star","aria-label":"Starred"})]})};var v,f,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'default',
    treatment: 'solid',
    size: 'md',
    children: 'Badge'
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,B,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} treatment="solid">
          {variant}
        </Badge>)}
    </div>
}`,...(S=(B=n.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var b,y,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} treatment="subtle">
          {variant}
        </Badge>)}
    </div>
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var k,N,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Outline Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} treatment="outline">
          {variant}
        </Badge>)}
    </div>
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var T,C,A;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Full Matrix',
  parameters: {
    docs: {
      description: {
        story: 'Every combination of \`variant\` × \`treatment\`. Use this view to pick a Badge style that matches the prominence and tone of the surrounding UI.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      {TREATMENTS.map(treatment => <div key={treatment} className="flex flex-wrap items-center gap-3">
          <span className="w-20 text-xs font-mono text-foreground-muted">{treatment}</span>
          {VARIANTS.map(variant => <Badge key={\`\${treatment}-\${variant}\`} variant={variant} treatment={treatment}>
              {variant}
            </Badge>)}
        </div>)}
    </div>
}`,...(A=(C=o.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var P,I,z;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'States',
  parameters: {
    docs: {
      description: {
        story: 'Typical status-tag use cases. Pick \`treatment="subtle"\` for ambient list rows, \`solid\` for prominent emphasis.'
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
        <Badge variant="success" treatment="subtle" icon="Check">
          Active
        </Badge>
        <Badge variant="warning" treatment="subtle" icon="Clock">
          Pending
        </Badge>
        <Badge variant="error" treatment="subtle" icon="X">
          Failed
        </Badge>
        <Badge variant="info" treatment="subtle" icon="Sparkles">
          Beta
        </Badge>
      </div>
    </div>
}`,...(z=(I=c.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var E,R,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var F,O,M;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Icons',
  render: () => <div className="flex flex-wrap gap-4">
      <Badge variant="success" icon="Check">
        Success
      </Badge>
      <Badge variant="error" icon="AlertCircle">
        Error
      </Badge>
      <Badge variant="default" treatment="subtle" icon="Clock">
        Pending
      </Badge>
      <Badge variant="default" treatment="outline" icon="Tag">
        Label
      </Badge>
    </div>
}`,...(M=(O=d.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var L,X,U;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Badge icon="ArrowLeft">Start</Badge>
      <Badge icon="ArrowRight" iconPosition="end">
        End
      </Badge>
    </div>
}`,...(U=(X=m.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var $,_,q;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Icon Only',
  render: () => <div className="flex items-center gap-4">
      <Badge icon="Check" size="sm" aria-label="Success" />
      <Badge icon="Check" aria-label="Success" />
      <Badge icon="Check" size="lg" aria-label="Success" />
      <Badge variant="error" icon="X" aria-label="Error" />
      <Badge variant="default" treatment="outline" icon="Star" aria-label="Starred" />
    </div>
}`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const Z=["Playground","SolidTreatments","SubtleTreatments","OutlineTreatments","FullMatrix","States","Sizes","Icons","IconPositions","IconOnly"];export{o as FullMatrix,u as IconOnly,m as IconPositions,d as Icons,i as OutlineTreatments,r as Playground,l as Sizes,n as SolidTreatments,c as States,s as SubtleTreatments,Z as __namedExportsOrder,Y as default};
