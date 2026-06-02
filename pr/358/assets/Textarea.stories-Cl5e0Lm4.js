import{j as e}from"./iframe-C82QogzV.js";import{T as r}from"./Textarea-Dr1NN3Gh.js";import"./preload-helper-2LrAAYx2.js";import"./field-BCPWK-ed.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css                 */const y={title:"Components/lv1/Textarea",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the textarea.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the textarea in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{description:"Placeholder text displayed when the textarea is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the textarea and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{description:"Makes the textarea read-only. The value is focusable and selectable but not editable, and is still submitted with the form. Renders with a warm-tinted readOnly surface to differentiate from disabled.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rows:{description:"Number of visible text lines.",control:"number",table:{type:{summary:"number"}}}}},a={name:"Playground",args:{placeholder:"Enter text...",size:"md",rows:4}},s={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{size:"sm",placeholder:"Small",rows:3}),e.jsx(r,{size:"md",placeholder:"Medium",rows:3}),e.jsx(r,{size:"lg",placeholder:"Large",rows:3})]})},l={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{isError:!0,placeholder:"Error state",rows:3}),e.jsx(r,{isError:!0,defaultValue:"Invalid input",rows:3})]})},t={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{disabled:!0,placeholder:"Disabled",rows:3}),e.jsx(r,{disabled:!0,defaultValue:"Disabled with value",rows:3})]})},o={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{disabled:!0,isError:!0,placeholder:"Disabled + error",rows:3}),e.jsx(r,{disabled:!0,isError:!0,defaultValue:"Disabled + error",rows:3})]})},d={name:"ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{readOnly:!0,defaultValue:"Read-only value.",rows:3}),e.jsx(r,{readOnly:!0,defaultValue:`Multi-line read-only content.
Selectable, but not editable.`,rows:4})]})},i={name:"Disabled vs ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 w-80",children:[e.jsx("div",{className:"text-xs text-foreground-muted",children:"Default"}),e.jsx(r,{defaultValue:"Editable content.",rows:2}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"ReadOnly (informational)"}),e.jsx(r,{readOnly:!0,defaultValue:"Read-only content.",rows:2}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"Disabled (cannot interact)"}),e.jsx(r,{disabled:!0,defaultValue:"Disabled content.",rows:2})]})},n={name:"ReadOnly with error",render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-80",children:e.jsx(r,{readOnly:!0,isError:!0,defaultValue:"ReadOnly + error",rows:3})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    rows: 4
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea size="sm" placeholder="Small" rows={3} />
      <Textarea size="md" placeholder="Medium" rows={3} />
      <Textarea size="lg" placeholder="Large" rows={3} />
    </div>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea isError placeholder="Error state" rows={3} />
      <Textarea isError defaultValue="Invalid input" rows={3} />
    </div>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea disabled placeholder="Disabled" rows={3} />
      <Textarea disabled defaultValue="Disabled with value" rows={3} />
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea disabled isError placeholder="Disabled + error" rows={3} />
      <Textarea disabled isError defaultValue="Disabled + error" rows={3} />
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea readOnly defaultValue="Read-only value." rows={3} />
      <Textarea readOnly defaultValue={'Multi-line read-only content.\\nSelectable, but not editable.'} rows={4} />
    </div>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Disabled vs ReadOnly',
  render: () => <div className="flex flex-col gap-3 w-80">
      <div className="text-xs text-foreground-muted">Default</div>
      <Textarea defaultValue="Editable content." rows={2} />
      <div className="text-xs text-foreground-muted mt-2">ReadOnly (informational)</div>
      <Textarea readOnly defaultValue="Read-only content." rows={2} />
      <div className="text-xs text-foreground-muted mt-2">Disabled (cannot interact)</div>
      <Textarea disabled defaultValue="Disabled content." rows={2} />
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly with error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea readOnly isError defaultValue="ReadOnly + error" rows={3} />
    </div>
}`,...n.parameters?.docs?.source}}};const w=["Playground","Sizes","ErrorState","Disabled","DisabledWithError","ReadOnly","DisabledVsReadOnly","ReadOnlyWithError"];export{t as Disabled,i as DisabledVsReadOnly,o as DisabledWithError,l as ErrorState,a as Playground,d as ReadOnly,n as ReadOnlyWithError,s as Sizes,w as __namedExportsOrder,y as default};
