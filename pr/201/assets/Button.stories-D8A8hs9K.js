import{j as e}from"./iframe-Cur-8YXB.js";import{B as a}from"./Button-BucJIwdb.js";import"./preload-helper-_tVC99vM.js";import"./index-iGw6Q8Fz.js";import"./index-D4ebFkEL.js";import"./index-Du5BJXR2.js";import"./chevron-up-D6cS8oQ9.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./Spinner-MPQEUjVk.js";const K={title:"Components/lv1/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"Visual style of the button.",control:"select",options:["primary","secondary","tertiary","inverted","destructive","link"],table:{type:{summary:'"primary" | "secondary" | "tertiary" | "inverted" | "destructive" | "link"'},defaultValue:{summary:"primary"}}},size:{description:"Size of the button.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},icon:{description:'Lucide icon name in PascalCase (e.g. "Search", "ArrowRight").',control:"text",table:{type:{summary:"IconName"},defaultValue:{summary:"-"}}},iconPosition:{description:"Position of the icon relative to the label text.",control:"select",options:["start","end"],table:{type:{summary:'"start" | "end"'},defaultValue:{summary:"start"}}},asChild:{description:"Delegates props to the child element via Radix Slot.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isLoading:{description:"Shows a loading spinner and disables the button.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the button and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"Label text or content inside the button.",control:"text",table:{type:{summary:"ReactNode"}}}}},t={name:"Playground",args:{variant:"primary",size:"md",children:"Button"}},r={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"tertiary",children:"Tertiary"}),e.jsx(a,{variant:"destructive",children:"Destructive"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 rounded-lg bg-solid p-4",children:[e.jsx(a,{variant:"inverted",children:"Inverted"}),e.jsx(a,{variant:"inverted",icon:"X","aria-label":"Close"})]})]})},n={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"}),e.jsx(a,{icon:"Plus","aria-label":"Add"})]})},s={name:"Icons",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"Search",children:"Search"}),e.jsx(a,{icon:"ArrowRight",iconPosition:"end",children:"Next"}),e.jsx(a,{icon:"Plus","aria-label":"Add"}),e.jsx(a,{variant:"destructive",icon:"Trash2",children:"Delete"})]})},i={name:"Icon Positions",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:"ChevronLeft",children:"Back"}),e.jsx(a,{icon:"ChevronRight",iconPosition:"end",children:"Next"}),e.jsx(a,{icon:"Download",size:"sm",children:"Download"}),e.jsx(a,{icon:"Send",size:"lg",iconPosition:"end",children:"Send"})]})},o={name:"Loading",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{isLoading:!0,children:"Primary"}),e.jsx(a,{variant:"secondary",isLoading:!0,children:"Secondary"}),e.jsx(a,{variant:"tertiary",isLoading:!0,children:"Tertiary"}),e.jsx(a,{variant:"destructive",isLoading:!0,children:"Destructive"})]})},d={name:"Link",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 text-base text-foreground leading-relaxed",children:[e.jsxs("p",{children:["This is a paragraph with a ",e.jsx(a,{variant:"link",children:"link button"})," embedded inline. It behaves like a text link but retains button semantics for accessibility."]}),e.jsxs("p",{children:["You can also add an icon:"," ",e.jsx(a,{variant:"link",icon:"ExternalLink",iconPosition:"end",children:"external link"})," ","to indicate navigation."]})]})},l={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{disabled:!0,children:"Primary"}),e.jsx(a,{variant:"secondary",disabled:!0,children:"Secondary"}),e.jsx(a,{variant:"tertiary",disabled:!0,children:"Tertiary"}),e.jsx(a,{variant:"destructive",disabled:!0,icon:"Trash2",children:"Delete"}),e.jsxs("p",{className:"text-base text-foreground",children:["Disabled"," ",e.jsx(a,{variant:"link",disabled:!0,children:"link button"})," ","in text."]})]})},c={name:"Inverted on saturated surfaces",render:()=>e.jsx("div",{className:"flex flex-col gap-3",children:[{label:"error",cls:"bg-error text-error-foreground"},{label:"success",cls:"bg-success text-success-foreground"},{label:"warning",cls:"bg-warning text-warning-foreground"},{label:"info",cls:"bg-info text-info-foreground"},{label:"destructive",cls:"bg-destructive text-destructive-foreground"},{label:"solid (brand)",cls:"bg-solid text-solid-foreground"}].map(u=>e.jsxs("div",{className:`flex items-center justify-between gap-4 px-4 py-3 rounded ${u.cls}`,children:[e.jsxs("span",{className:"text-sm font-medium",children:["On ",u.label," surface"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"inverted",size:"sm",children:"Enabled"}),e.jsx(a,{variant:"inverted",size:"sm",disabled:!0,children:"Disabled"})]})]},u.label))})};var m,p,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button'
  }
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var v,g,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        <Button variant="inverted" icon="X" aria-label="Close" />
      </div>
    </div>
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,h,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button icon="Plus" aria-label="Add" />
    </div>
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var B,j,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Icons',
  render: () => <div className="flex items-center gap-4">
      <Button icon="Search">Search</Button>
      <Button icon="ArrowRight" iconPosition="end">
        Next
      </Button>
      <Button icon="Plus" aria-label="Add" />
      <Button variant="destructive" icon="Trash2">
        Delete
      </Button>
    </div>
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var N,P,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Button icon="ChevronLeft">Back</Button>
      <Button icon="ChevronRight" iconPosition="end">
        Next
      </Button>
      <Button icon="Download" size="sm">
        Download
      </Button>
      <Button icon="Send" size="lg" iconPosition="end">
        Send
      </Button>
    </div>
}`,...(k=(P=i.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var w,L,z;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(z=(L=o.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var D,I,V;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Link',
  render: () => <div className="flex flex-col gap-4 text-base text-foreground leading-relaxed">
      <p>
        This is a paragraph with a <Button variant="link">link button</Button> embedded inline. It
        behaves like a text link but retains button semantics for accessibility.
      </p>
      <p>
        You can also add an icon:{' '}
        <Button variant="link" icon="ExternalLink" iconPosition="end">
          external link
        </Button>{' '}
        to indicate navigation.
      </p>
    </div>
}`,...(V=(I=d.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var T,A,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-wrap gap-4">
      <Button disabled>Primary</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="tertiary" disabled>
        Tertiary
      </Button>
      <Button variant="destructive" disabled icon="Trash2">
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
}`,...(C=(A=l.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var R,E,O;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(E=c.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const Q=["Playground","AllVariants","Sizes","Icons","IconPositions","Loading","LinkVariant","Disabled","InvertedOnSaturatedSurfaces"];export{r as AllVariants,l as Disabled,i as IconPositions,s as Icons,c as InvertedOnSaturatedSurfaces,d as LinkVariant,o as Loading,t as Playground,n as Sizes,Q as __namedExportsOrder,K as default};
