import{j as e}from"./iframe-BXp0eDb4.js";import{B as a}from"./Badge-XN5OJvWv.js";import{X as g}from"./x-JPB_hwCA.js";import{T as ee}from"./trash-2-Da-cC-X6.js";import{T as Q,S as U,a as h,b as ae,c as re,P as ne,M as se,L as te,G as ie,E as oe,d as ce,D as le,C as v,e as de,f as pe,A as W,g as Y}from"./tag-Cq0vnDde.js";import{C as Z}from"./circle-alert-wC3OkMnH.js";import{C as n}from"./check-Dbe_30kT.js";import"./preload-helper-C6FthO08.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./createLucideIcon-CWizT8ET.js";const je={title:"Components/lv1/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:'Badge displays small status descriptors. Two axes drive its\nappearance:\n\n- **`variant`** — semantic tone (`neutral` / `success` / `error` /\n  `warning` / `info`). State variants reuse the same state semantic\n  tokens as Toast and Callout.\n- **`appearance`** — visual weight (`subtle` (default) / `solid` /\n  `outline`). Value names align 1:1 with the underlying token\n  suffix (`bg-{state}-subtle`, `bg-{state}`).\n\nReach for `subtle` for ambient list rows and status tags, `solid` for\nemphasis, and `outline` for the lightest, border-only style.\n\nBadge is intentionally state-oriented (no `destructive` variant) —\nuse `error` for "failed/invalid" tags. For destructive *actions*,\nuse `<Button variant="destructive">`. There is intentionally **no\nbrand-accent variant** — Pattern B keeps a single non-state surface\n(`neutral`) plus the four state variants.'}}},tags:["autodocs"],argTypes:{variant:{description:"Semantic tone of the badge. State variants (success / error / warning / info) share the same state semantic tokens as Toast and Callout.",control:"select",options:["neutral","success","error","warning","info"],table:{type:{summary:'"neutral" | "success" | "error" | "warning" | "info"'},defaultValue:{summary:"neutral"}}},appearance:{description:"Visual appearance — `subtle` for soft tinted background (default), `solid` for filled emphasis, `outline` for outline-only.",control:"select",options:["solid","subtle","outline"],table:{type:{summary:'"solid" | "subtle" | "outline"'},defaultValue:{summary:"subtle"}}},size:{description:"Size of the badge.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},icon:{description:"Lucide icon component to render. Import the icon from `lucide-react` and pass it directly (e.g. `icon={Check}`).",control:"select",options:["ArrowLeft","ArrowRight","Check","ChevronLeft","ChevronRight","CircleAlert","Clock","Download","ExternalLink","Eye","Globe","Lock","Mail","Plus","Search","Send","Sparkles","Star","Tag","Trash2","X"],mapping:{ArrowLeft:Y,ArrowRight:W,Check:n,ChevronLeft:pe,ChevronRight:de,CircleAlert:Z,Clock:v,Download:le,ExternalLink:ce,Eye:oe,Globe:ie,Lock:te,Mail:se,Plus:ne,Search:re,Send:ae,Sparkles:h,Star:U,Tag:Q,Trash2:ee,X:g},table:{type:{summary:"LucideIcon"},defaultValue:{summary:"-"}}},iconPosition:{description:"Position of the icon relative to the label text.",control:"select",options:["start","end"],table:{type:{summary:'"start" | "end"'},defaultValue:{summary:"start"}}},children:{description:"Content displayed inside the badge.",control:"text",table:{type:{summary:"ReactNode"}}}}},f=["neutral","success","error","warning","info"],me=["solid","subtle","outline"],s={name:"Playground",args:{variant:"neutral",appearance:"subtle",size:"md",children:"Badge"}},t={name:"Solid Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:f.map(r=>e.jsx(a,{variant:r,appearance:"solid",children:r},r))})},i={name:"Subtle Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:f.map(r=>e.jsx(a,{variant:r,appearance:"subtle",children:r},r))})},o={name:"Outline Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:f.map(r=>e.jsx(a,{variant:r,appearance:"outline",children:r},r))})},c={name:"Full Matrix",parameters:{docs:{description:{story:"Every defined `variant` × `appearance` combination. All five variants support all three appearances."}}},render:()=>e.jsx("div",{className:"flex flex-col gap-3",children:me.map(r=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:r}),f.map(x=>e.jsx(a,{variant:x,appearance:r,children:x},`${r}-${x}`))]},r))})},l={name:"States",parameters:{docs:{description:{story:"Typical status-tag use cases. The default `subtle` appearance (top row) sits comfortably in list rows and tables; `solid` (bottom row) draws more attention when a status needs emphasis."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",icon:n,children:"Active"}),e.jsx(a,{variant:"warning",icon:v,children:"Pending"}),e.jsx(a,{variant:"error",icon:g,children:"Failed"}),e.jsx(a,{variant:"info",icon:h,children:"Beta"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",appearance:"solid",icon:n,children:"Active"}),e.jsx(a,{variant:"warning",appearance:"solid",icon:v,children:"Pending"}),e.jsx(a,{variant:"error",appearance:"solid",icon:g,children:"Failed"}),e.jsx(a,{variant:"info",appearance:"solid",icon:h,children:"Beta"})]})]})},d={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},p={name:"Icons",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",icon:n,children:"Success"}),e.jsx(a,{variant:"error",icon:Z,children:"Error"}),e.jsx(a,{variant:"neutral",appearance:"subtle",icon:v,children:"Pending"}),e.jsx(a,{variant:"neutral",appearance:"outline",icon:Q,children:"Label"})]})},m={name:"Icon Positions",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:Y,children:"Start"}),e.jsx(a,{icon:W,iconPosition:"end",children:"End"})]})},u={name:"Icon Only",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:n,size:"sm","aria-label":"Success"}),e.jsx(a,{icon:n,"aria-label":"Success"}),e.jsx(a,{icon:n,size:"lg","aria-label":"Success"}),e.jsx(a,{variant:"error",icon:g,"aria-label":"Error"}),e.jsx(a,{variant:"neutral",appearance:"outline",icon:U,"aria-label":"Starred"})]})};var S,B,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'neutral',
    appearance: 'subtle',
    size: 'md',
    children: 'Badge'
  }
}`,...(b=(B=s.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var y,w,j;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="solid">
          {variant}
        </Badge>)}
    </div>
}`,...(j=(w=t.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var N,T,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="subtle">
          {variant}
        </Badge>)}
    </div>
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var A,C,P;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Outline Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="outline">
          {variant}
        </Badge>)}
    </div>
}`,...(P=(C=o.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var E,I,z;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(z=(I=c.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var L,R,V;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        <Badge variant="success" icon={Check}>
          Active
        </Badge>
        <Badge variant="warning" icon={Clock}>
          Pending
        </Badge>
        <Badge variant="error" icon={X}>
          Failed
        </Badge>
        <Badge variant="info" icon={Sparkles}>
          Beta
        </Badge>
      </div>
      <div className="flex flex-wrap gap-4">
        <Badge variant="success" appearance="solid" icon={Check}>
          Active
        </Badge>
        <Badge variant="warning" appearance="solid" icon={Clock}>
          Pending
        </Badge>
        <Badge variant="error" appearance="solid" icon={X}>
          Failed
        </Badge>
        <Badge variant="info" appearance="solid" icon={Sparkles}>
          Beta
        </Badge>
      </div>
    </div>
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var F,M,O;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(O=(M=d.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var X,$,D;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Icons',
  render: () => <div className="flex flex-wrap gap-4">
      <Badge variant="success" icon={Check}>
        Success
      </Badge>
      <Badge variant="error" icon={CircleAlert}>
        Error
      </Badge>
      <Badge variant="neutral" appearance="subtle" icon={Clock}>
        Pending
      </Badge>
      <Badge variant="neutral" appearance="outline" icon={Tag}>
        Label
      </Badge>
    </div>
}`,...(D=($=p.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var G,_,q;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Badge icon={ArrowLeft}>Start</Badge>
      <Badge icon={ArrowRight} iconPosition="end">
        End
      </Badge>
    </div>
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Icon Only',
  render: () => <div className="flex items-center gap-4">
      <Badge icon={Check} size="sm" aria-label="Success" />
      <Badge icon={Check} aria-label="Success" />
      <Badge icon={Check} size="lg" aria-label="Success" />
      <Badge variant="error" icon={X} aria-label="Error" />
      <Badge variant="neutral" appearance="outline" icon={Star} aria-label="Starred" />
    </div>
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Ne=["Playground","SolidTreatments","SubtleTreatments","OutlineTreatments","FullMatrix","States","Sizes","Icons","IconPositions","IconOnly"];export{c as FullMatrix,u as IconOnly,m as IconPositions,p as Icons,o as OutlineTreatments,s as Playground,d as Sizes,t as SolidTreatments,l as States,i as SubtleTreatments,Ne as __namedExportsOrder,je as default};
