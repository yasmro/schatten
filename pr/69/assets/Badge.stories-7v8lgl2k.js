import{j as e}from"./iframe-BR71pDDo.js";import{B as a}from"./Badge-BxUFW_ar.js";import"./preload-helper-BdHZps5x.js";import"./index-Dlp6Wp2P.js";import"./chevron-up-BedBGzaO.js";import"./utils-d2XQ1MEC.js";import"./index-Drd88ecX.js";const w={title:"Components/lv1/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:'Badge displays small status descriptors. Two axes drive its\nappearance:\n\n- **`variant`** — semantic state (`default` / `success` / `error` /\n  `warning` / `info`). Reuses the same state semantic tokens as\n  Toast and Callout.\n- **`treatment`** — visual fill (`subtle` (default) / `solid` /\n  `outline`). Reach for `subtle` for ambient list rows and status\n  tags, `solid` for emphasis, and `outline` for the lightest,\n  border-only style.\n\nBadge is intentionally state-oriented (no `destructive` variant) —\nuse `error` for "failed/invalid" tags. For destructive *actions*,\nuse `<Button variant="destructive">`.'}}},tags:["autodocs"],argTypes:{variant:{description:"Semantic state of the badge. State variants share the same state semantic tokens as Toast and Callout.",control:"select",options:["default","success","error","warning","info"],table:{type:{summary:'"default" | "success" | "error" | "warning" | "info"'},defaultValue:{summary:"default"}}},treatment:{description:"Visual treatment — `subtle` for soft tinted background (default), `solid` for filled emphasis, `outline` for outline-only.",control:"select",options:["solid","subtle","outline"],table:{type:{summary:'"solid" | "subtle" | "outline"'},defaultValue:{summary:"subtle"}}},size:{description:"Size of the badge.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},icon:{description:'Lucide icon name in PascalCase (e.g. "Check", "AlertCircle").',control:"text",table:{type:{summary:"IconName"},defaultValue:{summary:"-"}}},iconPosition:{description:"Position of the icon relative to the label text.",control:"select",options:["start","end"],table:{type:{summary:'"start" | "end"'},defaultValue:{summary:"start"}}},children:{description:"Content displayed inside the badge.",control:"text",table:{type:{summary:"ReactNode"}}}}},p=["default","success","error","warning","info"],f=["solid","subtle","outline"],r={name:"Playground",args:{variant:"default",treatment:"subtle",size:"md",children:"Badge"}},s={name:"Solid Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:p.map(t=>e.jsx(a,{variant:t,treatment:"solid",children:t},t))})},n={name:"Subtle Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:p.map(t=>e.jsx(a,{variant:t,treatment:"subtle",children:t},t))})},i={name:"Outline Treatments",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:p.map(t=>e.jsx(a,{variant:t,treatment:"outline",children:t},t))})},o={name:"Full Matrix",parameters:{docs:{description:{story:"Every combination of `variant` × `treatment`. Use this view to pick a Badge style that matches the prominence and tone of the surrounding UI."}}},render:()=>e.jsx("div",{className:"flex flex-col gap-3",children:f.map(t=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"w-20 text-xs font-mono text-foreground-muted",children:t}),p.map(g=>e.jsx(a,{variant:g,treatment:t,children:g},`${t}-${g}`))]},t))})},l={name:"States",parameters:{docs:{description:{story:"Typical status-tag use cases. The default `subtle` treatment (top row) sits comfortably in list rows and tables; `solid` (bottom row) draws more attention when a status needs emphasis."}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",icon:"Check",children:"Active"}),e.jsx(a,{variant:"warning",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"error",icon:"X",children:"Failed"}),e.jsx(a,{variant:"info",icon:"Sparkles",children:"Beta"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",treatment:"solid",icon:"Check",children:"Active"}),e.jsx(a,{variant:"warning",treatment:"solid",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"error",treatment:"solid",icon:"X",children:"Failed"}),e.jsx(a,{variant:"info",treatment:"solid",icon:"Sparkles",children:"Beta"})]})]})},c={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},d={name:"Icons",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"success",icon:"Check",children:"Success"}),e.jsx(a,{variant:"error",icon:"AlertCircle",children:"Error"}),e.jsx(a,{variant:"default",treatment:"subtle",icon:"Clock",children:"Pending"}),e.jsx(a,{variant:"default",treatment:"outline",icon:"Tag",children:"Label"})]})},m={name:"Icon Positions",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"ArrowLeft",children:"Start"}),e.jsx(a,{icon:"ArrowRight",iconPosition:"end",children:"End"})]})},u={name:"Icon Only",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"Check",size:"sm","aria-label":"Success"}),e.jsx(a,{icon:"Check","aria-label":"Success"}),e.jsx(a,{icon:"Check",size:"lg","aria-label":"Success"}),e.jsx(a,{variant:"error",icon:"X","aria-label":"Error"}),e.jsx(a,{variant:"default",treatment:"outline",icon:"Star","aria-label":"Starred"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'default',
    treatment: 'subtle',
    size: 'md',
    children: 'Badge'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} treatment="solid">
          {variant}
        </Badge>)}
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} treatment="subtle">
          {variant}
        </Badge>)}
    </div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Outline Treatments',
  render: () => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <Badge key={variant} variant={variant} treatment="outline">
          {variant}
        </Badge>)}
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'States',
  parameters: {
    docs: {
      description: {
        story: 'Typical status-tag use cases. The default \`subtle\` treatment (top row) sits comfortably in list rows and tables; \`solid\` (bottom row) draws more attention when a status needs emphasis.'
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
        <Badge variant="success" treatment="solid" icon="Check">
          Active
        </Badge>
        <Badge variant="warning" treatment="solid" icon="Clock">
          Pending
        </Badge>
        <Badge variant="error" treatment="solid" icon="X">
          Failed
        </Badge>
        <Badge variant="info" treatment="solid" icon="Sparkles">
          Beta
        </Badge>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Badge icon="ArrowLeft">Start</Badge>
      <Badge icon="ArrowRight" iconPosition="end">
        End
      </Badge>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Icon Only',
  render: () => <div className="flex items-center gap-4">
      <Badge icon="Check" size="sm" aria-label="Success" />
      <Badge icon="Check" aria-label="Success" />
      <Badge icon="Check" size="lg" aria-label="Success" />
      <Badge variant="error" icon="X" aria-label="Error" />
      <Badge variant="default" treatment="outline" icon="Star" aria-label="Starred" />
    </div>
}`,...u.parameters?.docs?.source}}};const j=["Playground","SolidTreatments","SubtleTreatments","OutlineTreatments","FullMatrix","States","Sizes","Icons","IconPositions","IconOnly"];export{o as FullMatrix,u as IconOnly,m as IconPositions,d as Icons,i as OutlineTreatments,r as Playground,c as Sizes,s as SolidTreatments,l as States,n as SubtleTreatments,j as __namedExportsOrder,w as default};
