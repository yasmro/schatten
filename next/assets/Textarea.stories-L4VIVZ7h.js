import{j as e}from"./iframe-BV15SU4D.js";import{T as a}from"./Textarea-ix4jflo0.js";import"./preload-helper-CrztxVc4.js";import"./field-DNJAwjXM.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css                 */const y={title:"Components/lv1/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the textarea.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the textarea in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{description:"Placeholder text displayed when the textarea is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the textarea and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{description:"Makes the textarea read-only. The value is focusable and selectable but not editable, and is still submitted with the form. Renders with a warm-tinted readOnly surface to differentiate from disabled.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rows:{description:"Number of visible text lines.",control:"number",table:{type:{summary:"number"}}}}},r={name:"Playground",args:{placeholder:"Enter text...",size:"md",rows:4}},l={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{size:"sm",placeholder:"Small",rows:3}),e.jsx(a,{size:"md",placeholder:"Medium",rows:3}),e.jsx(a,{size:"lg",placeholder:"Large",rows:3})]})},s={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{isError:!0,placeholder:"Error state",rows:3}),e.jsx(a,{isError:!0,defaultValue:"Invalid input",rows:3,"aria-label":"Invalid input"})]})},t={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{disabled:!0,placeholder:"Disabled",rows:3}),e.jsx(a,{disabled:!0,defaultValue:"Disabled with value",rows:3,"aria-label":"Disabled with value"})]})},o={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{disabled:!0,isError:!0,placeholder:"Disabled + error",rows:3}),e.jsx(a,{disabled:!0,isError:!0,defaultValue:"Disabled + error",rows:3,"aria-label":"Disabled with error"})]})},d={name:"ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{readOnly:!0,defaultValue:"Read-only value.",rows:3,"aria-label":"Read-only value"}),e.jsx(a,{readOnly:!0,defaultValue:`Multi-line read-only content.
Selectable, but not editable.`,rows:4,"aria-label":"Multi-line read-only content"})]})},i={name:"Disabled vs ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 w-80",children:[e.jsx("div",{className:"text-xs text-foreground-muted",children:"Default"}),e.jsx(a,{defaultValue:"Editable content.",rows:2,"aria-label":"Editable content"}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"ReadOnly (informational)"}),e.jsx(a,{readOnly:!0,defaultValue:"Read-only content.",rows:2,"aria-label":"Read-only content"}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"Disabled (cannot interact)"}),e.jsx(a,{disabled:!0,defaultValue:"Disabled content.",rows:2,"aria-label":"Disabled content"})]})},n={name:"ReadOnly with error",render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-80",children:e.jsx(a,{readOnly:!0,isError:!0,defaultValue:"ReadOnly + error",rows:3,"aria-label":"ReadOnly with error"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    rows: 4
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea size="sm" placeholder="Small" rows={3} />
      <Textarea size="md" placeholder="Medium" rows={3} />
      <Textarea size="lg" placeholder="Large" rows={3} />
    </div>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea isError placeholder="Error state" rows={3} />
      {/* Value-only textareas have no accessible name — these stories carry
       * aria-label so the axe \`label\` rule passes without changing a pixel
       * (#345). */}
      <Textarea isError defaultValue="Invalid input" rows={3} aria-label="Invalid input" />
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea disabled placeholder="Disabled" rows={3} />
      <Textarea disabled defaultValue="Disabled with value" rows={3} aria-label="Disabled with value" />
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea disabled isError placeholder="Disabled + error" rows={3} />
      <Textarea disabled isError defaultValue="Disabled + error" rows={3} aria-label="Disabled with error" />
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea readOnly defaultValue="Read-only value." rows={3} aria-label="Read-only value" />
      <Textarea readOnly defaultValue={'Multi-line read-only content.\\nSelectable, but not editable.'} rows={4} aria-label="Multi-line read-only content" />
    </div>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Disabled vs ReadOnly',
  render: () => <div className="flex flex-col gap-3 w-80">
      <div className="text-xs text-foreground-muted">Default</div>
      <Textarea defaultValue="Editable content." rows={2} aria-label="Editable content" />
      <div className="text-xs text-foreground-muted mt-2">ReadOnly (informational)</div>
      <Textarea readOnly defaultValue="Read-only content." rows={2} aria-label="Read-only content" />
      <div className="text-xs text-foreground-muted mt-2">Disabled (cannot interact)</div>
      <Textarea disabled defaultValue="Disabled content." rows={2} aria-label="Disabled content" />
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly with error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea readOnly isError defaultValue="ReadOnly + error" rows={3} aria-label="ReadOnly with error" />
    </div>
}`,...n.parameters?.docs?.source}}};const w=["Playground","Sizes","ErrorState","Disabled","DisabledWithError","ReadOnly","DisabledVsReadOnly","ReadOnlyWithError"];export{t as Disabled,i as DisabledVsReadOnly,o as DisabledWithError,s as ErrorState,r as Playground,d as ReadOnly,n as ReadOnlyWithError,l as Sizes,w as __namedExportsOrder,y as default};
