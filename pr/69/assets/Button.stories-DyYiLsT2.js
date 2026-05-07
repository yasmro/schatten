import{j as e}from"./iframe-BR71pDDo.js";import{B as t}from"./Button-fusqHp_n.js";import"./preload-helper-BdHZps5x.js";import"./index-r3lr-Zc6.js";import"./index-CNJc8Daf.js";import"./index-Dlp6Wp2P.js";import"./chevron-up-BedBGzaO.js";import"./utils-d2XQ1MEC.js";import"./index-Drd88ecX.js";import"./Spinner-fJP2C27T.js";const B={title:"Components/lv1/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{description:"Visual style of the button.",control:"select",options:["primary","secondary","tertiary","inverted","destructive","link"],table:{type:{summary:'"primary" | "secondary" | "tertiary" | "inverted" | "destructive" | "link"'},defaultValue:{summary:"primary"}}},size:{description:"Size of the button.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},icon:{description:'Lucide icon name in PascalCase (e.g. "Search", "ArrowRight").',control:"text",table:{type:{summary:"IconName"},defaultValue:{summary:"-"}}},iconPosition:{description:"Position of the icon relative to the label text.",control:"select",options:["start","end"],table:{type:{summary:'"start" | "end"'},defaultValue:{summary:"start"}}},asChild:{description:"Delegates props to the child element via Radix Slot.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isLoading:{description:"Shows a loading spinner and disables the button.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the button and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"Label text or content inside the button.",control:"text",table:{type:{summary:"ReactNode"}}}}},a={name:"Playground",args:{variant:"primary",size:"md",children:"Button"}},n={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"tertiary",children:"Tertiary"}),e.jsx(t,{variant:"destructive",children:"Destructive"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 rounded-lg bg-solid p-4",children:[e.jsx(t,{variant:"inverted",children:"Inverted"}),e.jsx(t,{variant:"inverted",icon:"X","aria-label":"Close"})]})]})},r={name:"Sizes",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{icon:"Plus","aria-label":"Add"})]})},i={name:"Icons",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{icon:"Search",children:"Search"}),e.jsx(t,{icon:"ArrowRight",iconPosition:"end",children:"Next"}),e.jsx(t,{icon:"Plus","aria-label":"Add"}),e.jsx(t,{variant:"destructive",icon:"Trash2",children:"Delete"})]})},s={name:"Icon Positions",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{icon:"ChevronLeft",children:"Back"}),e.jsx(t,{icon:"ChevronRight",iconPosition:"end",children:"Next"}),e.jsx(t,{icon:"Download",size:"sm",children:"Download"}),e.jsx(t,{icon:"Send",size:"lg",iconPosition:"end",children:"Send"})]})},o={name:"Loading",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{isLoading:!0,children:"Primary"}),e.jsx(t,{variant:"secondary",isLoading:!0,children:"Secondary"}),e.jsx(t,{variant:"tertiary",isLoading:!0,children:"Tertiary"}),e.jsx(t,{variant:"destructive",isLoading:!0,children:"Destructive"})]})},d={name:"Link",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 text-base text-foreground leading-relaxed",children:[e.jsxs("p",{children:["This is a paragraph with a ",e.jsx(t,{variant:"link",children:"link button"})," embedded inline. It behaves like a text link but retains button semantics for accessibility."]}),e.jsxs("p",{children:["You can also add an icon:"," ",e.jsx(t,{variant:"link",icon:"ExternalLink",iconPosition:"end",children:"external link"})," ","to indicate navigation."]})]})},l={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{disabled:!0,children:"Primary"}),e.jsx(t,{variant:"secondary",disabled:!0,children:"Secondary"}),e.jsx(t,{variant:"tertiary",disabled:!0,children:"Tertiary"}),e.jsx(t,{variant:"destructive",disabled:!0,icon:"Trash2",children:"Delete"}),e.jsxs("p",{className:"text-base text-foreground",children:["Disabled"," ",e.jsx(t,{variant:"link",disabled:!0,children:"link button"})," ","in text."]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button icon="Plus" aria-label="Add" />
    </div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const f=["Playground","AllVariants","Sizes","Icons","IconPositions","Loading","LinkVariant","Disabled"];export{n as AllVariants,l as Disabled,s as IconPositions,i as Icons,d as LinkVariant,o as Loading,a as Playground,r as Sizes,f as __namedExportsOrder,B as default};
