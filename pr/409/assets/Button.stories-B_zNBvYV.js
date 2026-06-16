import{j as e}from"./iframe-26a-m5RM.js";import{B as a}from"./Button-CtVmhjHX.js";import{X as x}from"./x-ByikES3s.js";import{T as m}from"./trash-2-BJgcFnIP.js";import{T as j,S,a as v,G as k,C as L}from"./tag-D67jYn8t.js";import{S as N,E as w,a as g,D as b,C as f,A as P}from"./star-Cfwe60SQ.js";import{S as h}from"./search-DS-GFQ7z.js";import{P as p}from"./plus-D9BYjgZa.js";import{M as D}from"./mail-BuHe0Ksc.js";import{L as z}from"./lock-CgjAzH5Q.js";import{C}from"./circle-alert-BjHteR2W.js";import{C as y}from"./chevron-right-BcIJt0as.js";import{C as I}from"./check-D-e45LS0.js";import{A as B}from"./arrow-right-pN58DeSr.js";import"./preload-helper-o4VUtNp3.js";import"./index-B2cnb4L6.js";import"./index-vmw3tZk_.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css               */import"./Spinner-CACO8iwr.js";/* empty css                */import"./createLucideIcon-CsDzNsxU.js";const te={title:"Components/lv1/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"Visual style of the button.",control:"select",options:["primary","secondary","tertiary","inverted","destructive","link"],table:{type:{summary:'"primary" | "secondary" | "tertiary" | "inverted" | "destructive" | "link"'},defaultValue:{summary:"primary"}}},size:{description:"Size of the button.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},icon:{description:"Lucide icon component to render. Import the icon from `lucide-react` and pass it directly (e.g. `icon={Search}`).",control:"select",options:["ArrowLeft","ArrowRight","Check","ChevronLeft","ChevronRight","CircleAlert","Clock","Download","ExternalLink","Eye","Globe","Lock","Mail","Plus","Search","Send","Sparkles","Star","Tag","Trash2","X"],mapping:{ArrowLeft:P,ArrowRight:B,Check:I,ChevronLeft:f,ChevronRight:y,CircleAlert:C,Clock:L,Download:b,ExternalLink:g,Eye:w,Globe:k,Lock:z,Mail:D,Plus:p,Search:h,Send:v,Sparkles:S,Star:N,Tag:j,Trash2:m,X:x},table:{type:{summary:"LucideIcon"},defaultValue:{summary:"-"}}},iconPosition:{description:"Position of the icon relative to the label text.",control:"select",options:["start","end"],table:{type:{summary:'"start" | "end"'},defaultValue:{summary:"start"}}},asChild:{description:"Delegates props to the child element via Radix Slot.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isLoading:{description:"Shows a loading spinner and disables the button.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the button and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"Label text or content inside the button.",control:"text",table:{type:{summary:"ReactNode"}}}}},t={name:"Playground",args:{variant:"primary",size:"md",children:"Button"}},r={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"tertiary",children:"Tertiary"}),e.jsx(a,{variant:"destructive",children:"Destructive"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 rounded-lg bg-solid p-4",children:[e.jsx(a,{variant:"inverted",children:"Inverted"}),e.jsx(a,{variant:"inverted",icon:x,"aria-label":"Close"})]})]})},n={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"}),e.jsx(a,{icon:p,"aria-label":"Add"})]})},s={name:"Icons",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:h,children:"Search"}),e.jsx(a,{icon:B,iconPosition:"end",children:"Next"}),e.jsx(a,{icon:p,"aria-label":"Add"}),e.jsx(a,{variant:"destructive",icon:m,children:"Delete"})]})},i={name:"Icon Positions",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:f,children:"Back"}),e.jsx(a,{icon:y,iconPosition:"end",children:"Next"}),e.jsx(a,{icon:b,size:"sm",children:"Download"}),e.jsx(a,{icon:v,size:"lg",iconPosition:"end",children:"Send"})]})},o={name:"Loading",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{isLoading:!0,children:"Primary"}),e.jsx(a,{variant:"secondary",isLoading:!0,children:"Secondary"}),e.jsx(a,{variant:"tertiary",isLoading:!0,children:"Tertiary"}),e.jsx(a,{variant:"destructive",isLoading:!0,children:"Destructive"})]})},l={name:"Link",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 text-base text-foreground leading-relaxed",children:[e.jsxs("p",{children:["This is a paragraph with a ",e.jsx(a,{variant:"link",children:"link button"})," embedded inline. It behaves like a text link but retains button semantics for accessibility."]}),e.jsxs("p",{children:["You can also add an icon:"," ",e.jsx(a,{variant:"link",icon:g,iconPosition:"end",children:"external link"})," ","to indicate navigation."]})]})},d={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{disabled:!0,children:"Primary"}),e.jsx(a,{variant:"secondary",disabled:!0,children:"Secondary"}),e.jsx(a,{variant:"tertiary",disabled:!0,children:"Tertiary"}),e.jsx(a,{variant:"destructive",disabled:!0,icon:m,children:"Delete"}),e.jsxs("p",{className:"text-base text-foreground",children:["Disabled"," ",e.jsx(a,{variant:"link",disabled:!0,children:"link button"})," ","in text."]})]})},c={name:"Inverted on saturated surfaces",render:()=>e.jsx("div",{className:"flex flex-col gap-3",children:[{label:"error",cls:"bg-error text-error-foreground"},{label:"success",cls:"bg-success text-success-foreground"},{label:"warning",cls:"bg-warning text-warning-foreground"},{label:"info",cls:"bg-info text-info-foreground"},{label:"destructive",cls:"bg-destructive text-destructive-foreground"},{label:"solid (brand)",cls:"bg-solid text-solid-foreground"}].map(u=>e.jsxs("div",{className:`flex items-center justify-between gap-4 px-4 py-3 rounded ${u.cls}`,children:[e.jsxs("span",{className:"text-sm font-medium",children:["On ",u.label," surface"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"inverted",size:"sm",children:"Enabled"}),e.jsx(a,{variant:"inverted",size:"sm",disabled:!0,children:"Disabled"})]})]},u.label))})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      {/* \`inverted\` is intended for placement on a saturated surface; preview
          it on a solid background so the contrast pattern is visible. */}
      <div className="flex flex-wrap gap-4 rounded-lg bg-solid p-4">
        <Button variant="inverted">Inverted</Button>
        <Button variant="inverted" icon={X} aria-label="Close" />
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button icon={Plus} aria-label="Add" />
    </div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Icons',
  render: () => <div className="flex items-center gap-4">
      <Button icon={Search}>Search</Button>
      <Button icon={ArrowRight} iconPosition="end">
        Next
      </Button>
      <Button icon={Plus} aria-label="Add" />
      <Button variant="destructive" icon={Trash2}>
        Delete
      </Button>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Button icon={ChevronLeft}>Back</Button>
      <Button icon={ChevronRight} iconPosition="end">
        Next
      </Button>
      <Button icon={Download} size="sm">
        Download
      </Button>
      <Button icon={Send} size="lg" iconPosition="end">
        Send
      </Button>
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Loading',
  render: () => <div className="flex flex-wrap gap-4">
      <Button isLoading>Primary</Button>
      <Button variant="secondary" isLoading>
        Secondary
      </Button>
      <Button variant="tertiary" isLoading>
        Tertiary
      </Button>
      <Button variant="destructive" isLoading>
        Destructive
      </Button>
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Link',
  render: () => <div className="flex flex-col gap-4 text-base text-foreground leading-relaxed">
      <p>
        This is a paragraph with a <Button variant="link">link button</Button> embedded inline. It
        behaves like a text link but retains button semantics for accessibility.
      </p>
      <p>
        You can also add an icon:{' '}
        <Button variant="link" icon={ExternalLink} iconPosition="end">
          external link
        </Button>{' '}
        to indicate navigation.
      </p>
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-wrap gap-4">
      <Button disabled>Primary</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="tertiary" disabled>
        Tertiary
      </Button>
      <Button variant="destructive" disabled icon={Trash2}>
        Delete
      </Button>
      <p className="text-base text-foreground">
        Disabled{' '}
        <Button variant="link" disabled>
          link button
        </Button>{' '}
        in text.
      </p>
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Inverted on saturated surfaces',
  render: () => <div className="flex flex-col gap-3">
      {[{
      label: 'error',
      cls: 'bg-error text-error-foreground'
    }, {
      label: 'success',
      cls: 'bg-success text-success-foreground'
    }, {
      label: 'warning',
      cls: 'bg-warning text-warning-foreground'
    }, {
      label: 'info',
      cls: 'bg-info text-info-foreground'
    }, {
      label: 'destructive',
      cls: 'bg-destructive text-destructive-foreground'
    }, {
      label: 'solid (brand)',
      cls: 'bg-solid text-solid-foreground'
    }].map(s => <div key={s.label} className={\`flex items-center justify-between gap-4 px-4 py-3 rounded \${s.cls}\`}>
          <span className="text-sm font-medium">On {s.label} surface</span>
          <div className="flex gap-2">
            <Button variant="inverted" size="sm">
              Enabled
            </Button>
            <Button variant="inverted" size="sm" disabled>
              Disabled
            </Button>
          </div>
        </div>)}
    </div>
}`,...c.parameters?.docs?.source}}};const re=["Playground","AllVariants","Sizes","Icons","IconPositions","Loading","LinkVariant","Disabled","InvertedOnSaturatedSurfaces"];export{r as AllVariants,d as Disabled,i as IconPositions,s as Icons,c as InvertedOnSaturatedSurfaces,l as LinkVariant,o as Loading,t as Playground,n as Sizes,re as __namedExportsOrder,te as default};
