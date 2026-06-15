import{j as e}from"./iframe-XYuRiXRV.js";import{B as a}from"./Badge-SNLNc1CT.js";import{X as g}from"./x-C0Db-PkX.js";import{T as j}from"./trash-2-Bzu-F9d5.js";import{T as S,S as h,a as N,G as A,C as v}from"./tag-Bg6n9Xcm.js";import{S as B,E as T,a as k,D as C,C as P,A as b}from"./star-DWb-pwTG.js";import{S as E}from"./search-Dr9GEZxC.js";import{P as I}from"./plus-fNMNxu6R.js";import{M as z}from"./mail-EtwnoIAJ.js";import{L}from"./lock-D-YjJsEU.js";import{C as y}from"./circle-alert-Bw8K1YPP.js";import{C as R}from"./chevron-right-BoWInCCm.js";import{C as n}from"./check-BSbHSVoZ.js";import{A as w}from"./arrow-right-HyHRrBI4.js";import"./preload-helper-DEYMk7Xz.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css              */import"./createLucideIcon-DDxsnHnV.js";const re={title:"Components/lv1/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:'Badge displays small status descriptors. Two axes drive its\nappearance:\n\n- **`variant`** — semantic tone (`neutral` / `success` / `error` /\n  `warning` / `info`). State variants reuse the same state semantic\n  tokens as Toast and Callout.\n- **`appearance`** — visual weight (`subtle` (default) / `solid` /\n  `outline`). Value names align 1:1 with the underlying token\n  suffix (`bg-{state}-subtle`, `bg-{state}`).\n\nReach for `subtle` for ambient list rows and status tags, `solid` for\nemphasis, and `outline` for the lightest, border-only style.\n\nBadge is intentionally state-oriented (no `destructive` variant) —\nuse `error` for "failed/invalid" tags. For destructive *actions*,\nuse `<Button variant="destructive">`. There is intentionally **no\nbrand-accent variant** — Pattern B keeps a single non-state surface\n(`neutral`) plus the four state variants.'}}},tags:["autodocs"],argTypes:{variant:{description:"Semantic tone of the badge. State variants (success / error / warning / info) share the same state semantic tokens as Toast and Callout.",control:"select",options:["neutral","success","error","warning","info"],table:{type:{summary:'"neutral" | "success" | "error" | "warning" | "info"'},defaultValue:{summary:"neutral"}}},appearance:{description:"Visual appearance — `subtle` for soft tinted background (default), `solid` for filled emphasis, `outline` for outline-only.",control:"select",options:["solid","subtle","outline"],table:{type:{summary:'"solid" | "subtle" | "outline"'},defaultValue:{summary:"subtle"}}},size:{description:"Size of the badge.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},icon:{description:"Lucide icon component to render. Import the icon from `lucide-react` and pass it directly (e.g. `icon={Check}`).",control:"select",options:["ArrowLeft","ArrowRight","Check","ChevronLeft","ChevronRight","CircleAlert","Clock","Download","ExternalLink","Eye","Globe","Lock","Mail","Plus","Search","Send","Sparkles","Star","Tag","Trash2","X"],mapping:{ArrowLeft:b,ArrowRight:w,Check:n,ChevronLeft:P,ChevronRight:R,CircleAlert:y,Clock:v,Download:C,ExternalLink:k,Eye:T,Globe:A,Lock:L,Mail:z,Plus:I,Search:E,Send:N,Sparkles:h,Star:B,Tag:S,Trash2:j,X:g},table:{type:{summary:"LucideIcon"},defaultValue:{summary:"-"}}},iconPosition:{description:"Position of the icon relative to the label text.",control:"select",options:["start","end"],table:{type:{summary:'"start" | "end"'},defaultValue:{summary:"start"}}},children:{description:"Content displayed inside the badge.",control:"text",table:{type:{summary:"ReactNode"}}}}},f=["neutral","success","error","warning","info"],V=["solid","subtle","outline"],s={name:"Playground",args:{variant:"neutral",appearance:"subtle",size:"md",children:"Badge"}},t={name:"Solid Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:f.map(r=>e.jsx(a,{variant:r,appearance:"solid",children:r},r))})},i={name:"Subtle Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:f.map(r=>e.jsx(a,{variant:r,appearance:"subtle",children:r},r))})},o={name:"Outline Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:f.map(r=>e.jsx(a,{variant:r,appearance:"outline",children:r},r))})},c={name:"Full Matrix",parameters:{docs:{description:{story:"Every defined `variant` × `appearance` combination. All five variants support all three appearances."}}},render:()=>e.jsx("div",{className:"flex flex-col gap-3",children:V.map(r=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:r}),f.map(x=>e.jsx(a,{variant:x,appearance:r,children:x},`${r}-${x}`))]},r))})},l={name:"States",parameters:{docs:{description:{story:"Typical status-tag use cases. The default `subtle` appearance (top row) sits comfortably in list rows and tables; `solid` (bottom row) draws more attention when a status needs emphasis."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",icon:n,children:"Active"}),e.jsx(a,{variant:"warning",icon:v,children:"Pending"}),e.jsx(a,{variant:"error",icon:g,children:"Failed"}),e.jsx(a,{variant:"info",icon:h,children:"Beta"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",appearance:"solid",icon:n,children:"Active"}),e.jsx(a,{variant:"warning",appearance:"solid",icon:v,children:"Pending"}),e.jsx(a,{variant:"error",appearance:"solid",icon:g,children:"Failed"}),e.jsx(a,{variant:"info",appearance:"solid",icon:h,children:"Beta"})]})]})},d={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},p={name:"Icons",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",icon:n,children:"Success"}),e.jsx(a,{variant:"error",icon:y,children:"Error"}),e.jsx(a,{variant:"neutral",appearance:"subtle",icon:v,children:"Pending"}),e.jsx(a,{variant:"neutral",appearance:"outline",icon:S,children:"Label"})]})},m={name:"Icon Positions",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:b,children:"Start"}),e.jsx(a,{icon:w,iconPosition:"end",children:"End"})]})},u={name:"Icon Only",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:n,size:"sm","aria-label":"Success"}),e.jsx(a,{icon:n,"aria-label":"Success"}),e.jsx(a,{icon:n,size:"lg","aria-label":"Success"}),e.jsx(a,{variant:"error",icon:g,"aria-label":"Error"}),e.jsx(a,{variant:"neutral",appearance:"outline",icon:B,"aria-label":"Starred"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'neutral',
    appearance: 'subtle',
    size: 'md',
    children: 'Badge'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="solid">
          {variant}
        </Badge>)}
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="subtle">
          {variant}
        </Badge>)}
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Outline Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} appearance="outline">
          {variant}
        </Badge>)}
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Badge icon={ArrowLeft}>Start</Badge>
      <Badge icon={ArrowRight} iconPosition="end">
        End
      </Badge>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Icon Only',
  render: () => <div className="flex items-center gap-4">
      <Badge icon={Check} size="sm" aria-label="Success" />
      <Badge icon={Check} aria-label="Success" />
      <Badge icon={Check} size="lg" aria-label="Success" />
      <Badge variant="error" icon={X} aria-label="Error" />
      <Badge variant="neutral" appearance="outline" icon={Star} aria-label="Starred" />
    </div>
}`,...u.parameters?.docs?.source}}};const ne=["Playground","SolidTreatments","SubtleTreatments","OutlineTreatments","FullMatrix","States","Sizes","Icons","IconPositions","IconOnly"];export{c as FullMatrix,u as IconOnly,m as IconPositions,p as Icons,o as OutlineTreatments,s as Playground,d as Sizes,t as SolidTreatments,l as States,i as SubtleTreatments,ne as __namedExportsOrder,re as default};
