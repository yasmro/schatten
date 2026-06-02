import{i as e}from"./preload-helper-ChaSUgV0.js";import{t}from"./iframe-DK9TY03R.js";import{n,t as r}from"./Textarea-D5yzixXm.js";var i,a,o,s,c,l,u,d,f,p,m;e((()=>{n(),i=t(),a={title:`Components/lv1/Textarea`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{description:`Size of the textarea.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},isError:{description:`Displays the textarea in an error state with error border and ring.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},placeholder:{description:`Placeholder text displayed when the textarea is empty.`,control:`text`,table:{type:{summary:`string`}}},disabled:{description:`Disables the textarea and applies disabled styling.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`Makes the textarea read-only. The value is focusable and selectable but not editable, and is still submitted with the form. Renders with a warm-tinted readOnly surface to differentiate from disabled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},rows:{description:`Number of visible text lines.`,control:`number`,table:{type:{summary:`number`}}}}},o={name:`Playground`,args:{placeholder:`Enter text...`,size:`md`,rows:4}},s={name:`Sizes`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4 w-80`,children:[(0,i.jsx)(r,{size:`sm`,placeholder:`Small`,rows:3}),(0,i.jsx)(r,{size:`md`,placeholder:`Medium`,rows:3}),(0,i.jsx)(r,{size:`lg`,placeholder:`Large`,rows:3})]})},c={name:`Error`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4 w-80`,children:[(0,i.jsx)(r,{isError:!0,placeholder:`Error state`,rows:3}),(0,i.jsx)(r,{isError:!0,defaultValue:`Invalid input`,rows:3})]})},l={name:`Disabled`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4 w-80`,children:[(0,i.jsx)(r,{disabled:!0,placeholder:`Disabled`,rows:3}),(0,i.jsx)(r,{disabled:!0,defaultValue:`Disabled with value`,rows:3})]})},u={name:`Disabled with error`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4 w-80`,children:[(0,i.jsx)(r,{disabled:!0,isError:!0,placeholder:`Disabled + error`,rows:3}),(0,i.jsx)(r,{disabled:!0,isError:!0,defaultValue:`Disabled + error`,rows:3})]})},d={name:`ReadOnly`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4 w-80`,children:[(0,i.jsx)(r,{readOnly:!0,defaultValue:`Read-only value.`,rows:3}),(0,i.jsx)(r,{readOnly:!0,defaultValue:`Multi-line read-only content.
Selectable, but not editable.`,rows:4})]})},f={name:`Disabled vs ReadOnly`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3 w-80`,children:[(0,i.jsx)(`div`,{className:`text-xs text-foreground-muted`,children:`Default`}),(0,i.jsx)(r,{defaultValue:`Editable content.`,rows:2}),(0,i.jsx)(`div`,{className:`text-xs text-foreground-muted mt-2`,children:`ReadOnly (informational)`}),(0,i.jsx)(r,{readOnly:!0,defaultValue:`Read-only content.`,rows:2}),(0,i.jsx)(`div`,{className:`text-xs text-foreground-muted mt-2`,children:`Disabled (cannot interact)`}),(0,i.jsx)(r,{disabled:!0,defaultValue:`Disabled content.`,rows:2})]})},p={name:`ReadOnly with error`,render:()=>(0,i.jsx)(`div`,{className:`flex flex-col gap-4 w-80`,children:(0,i.jsx)(r,{readOnly:!0,isError:!0,defaultValue:`ReadOnly + error`,rows:3})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md',
    rows: 4
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea size="sm" placeholder="Small" rows={3} />
      <Textarea size="md" placeholder="Medium" rows={3} />
      <Textarea size="lg" placeholder="Large" rows={3} />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea isError placeholder="Error state" rows={3} />
      <Textarea isError defaultValue="Invalid input" rows={3} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea disabled placeholder="Disabled" rows={3} />
      <Textarea disabled defaultValue="Disabled with value" rows={3} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea disabled isError placeholder="Disabled + error" rows={3} />
      <Textarea disabled isError defaultValue="Disabled + error" rows={3} />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea readOnly defaultValue="Read-only value." rows={3} />
      <Textarea readOnly defaultValue={'Multi-line read-only content.\\nSelectable, but not editable.'} rows={4} />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Disabled vs ReadOnly',
  render: () => <div className="flex flex-col gap-3 w-80">
      <div className="text-xs text-foreground-muted">Default</div>
      <Textarea defaultValue="Editable content." rows={2} />
      <div className="text-xs text-foreground-muted mt-2">ReadOnly (informational)</div>
      <Textarea readOnly defaultValue="Read-only content." rows={2} />
      <div className="text-xs text-foreground-muted mt-2">Disabled (cannot interact)</div>
      <Textarea disabled defaultValue="Disabled content." rows={2} />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly with error',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Textarea readOnly isError defaultValue="ReadOnly + error" rows={3} />
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Sizes`,`ErrorState`,`Disabled`,`DisabledWithError`,`ReadOnly`,`DisabledVsReadOnly`,`ReadOnlyWithError`]}))();export{l as Disabled,f as DisabledVsReadOnly,u as DisabledWithError,c as ErrorState,o as Playground,d as ReadOnly,p as ReadOnlyWithError,s as Sizes,m as __namedExportsOrder,a as default};