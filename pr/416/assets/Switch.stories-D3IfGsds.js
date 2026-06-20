import{i as e}from"./preload-helper-ylcYtS7T.js";import{t}from"./iframe-1y-Fr_Ay.js";import{n,t as r}from"./Switch-3h7TqPsa.js";var i,a,o,s,c,l,u,d,f,p,m;e((()=>{n(),i=t(),a={title:`Components/lv1/Switch`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{description:`Size of the switch.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},label:{description:`Label text displayed next to the switch. Automatically associates via id.`,control:`text`,table:{type:{summary:`ReactNode`}}},checked:{description:`Controlled checked state.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},defaultChecked:{description:`Default checked state for uncontrolled usage.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isError:{description:`Displays the switch in an error state with error border and ring.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disables the switch and applies disabled styling.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Marks the switch as required for form validation.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}}},o={name:`Playground`,args:{size:`md`,label:`Enable notifications`,defaultChecked:!1}},s={name:`Sizes`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsx)(r,{size:`sm`,label:`Small`,defaultChecked:!0}),(0,i.jsx)(r,{size:`md`,label:`Medium`,defaultChecked:!0}),(0,i.jsx)(r,{size:`lg`,label:`Large`,defaultChecked:!0})]})},c={name:`States`,render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,i.jsx)(r,{"aria-label":`Off`}),(0,i.jsx)(r,{defaultChecked:!0,"aria-label":`On`})]})},l={name:`With Labels`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsx)(r,{label:`Enable notifications`,defaultChecked:!0}),(0,i.jsx)(r,{label:`Dark mode`}),(0,i.jsx)(r,{label:`Unavailable option`,disabled:!0})]})},u={name:`Error`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsx)(r,{label:`Unchecked error`,isError:!0}),(0,i.jsx)(r,{label:`Checked error`,isError:!0,defaultChecked:!0})]})},d={name:`Disabled`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsx)(r,{label:`Disabled unchecked`,disabled:!0}),(0,i.jsx)(r,{label:`Disabled checked`,disabled:!0,defaultChecked:!0})]})},f={name:`Disabled with error`,render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,i.jsx)(r,{label:`Disabled + error`,disabled:!0,isError:!0}),(0,i.jsx)(r,{label:`Disabled + error, checked`,disabled:!0,isError:!0,defaultChecked:!0})]})},p={name:`All states (cognitive review)`,render:()=>(0,i.jsxs)(`div`,{className:`grid grid-cols-2 gap-x-8 gap-y-3 items-start`,children:[(0,i.jsx)(`div`,{className:`font-medium text-foreground`,children:`Enabled`}),(0,i.jsx)(`div`,{className:`font-medium text-foreground`,children:`Disabled`}),(0,i.jsx)(r,{label:`Off`}),(0,i.jsx)(r,{label:`Off (disabled)`,disabled:!0}),(0,i.jsx)(r,{label:`On`,defaultChecked:!0}),(0,i.jsx)(r,{label:`On (disabled)`,defaultChecked:!0,disabled:!0})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Enable notifications',
    defaultChecked: false
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-3">
      <Switch size="sm" label="Small" defaultChecked />
      <Switch size="md" label="Medium" defaultChecked />
      <Switch size="lg" label="Large" defaultChecked />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div className="flex items-center gap-4">
      {/* Bare state-matrix switches have no visible label by design —
       * aria-label keeps the axe \`button-name\` rule green without changing
       * a pixel (#345). */}
      <Switch aria-label="Off" />
      <Switch defaultChecked aria-label="On" />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Enable notifications" defaultChecked />
      <Switch label="Dark mode" />
      <Switch label="Unavailable option" disabled />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Unchecked error" isError />
      <Switch label="Checked error" isError defaultChecked />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Disabled unchecked" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Disabled + error" disabled isError />
      <Switch label="Disabled + error, checked" disabled isError defaultChecked />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'All states (cognitive review)',
  render: () => <div className="grid grid-cols-2 gap-x-8 gap-y-3 items-start">
      <div className="font-medium text-foreground">Enabled</div>
      <div className="font-medium text-foreground">Disabled</div>
      <Switch label="Off" />
      <Switch label="Off (disabled)" disabled />
      <Switch label="On" defaultChecked />
      <Switch label="On (disabled)" defaultChecked disabled />
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Sizes`,`States`,`WithLabels`,`ErrorState`,`Disabled`,`DisabledWithError`,`AllStates`]}))();export{p as AllStates,d as Disabled,f as DisabledWithError,u as ErrorState,o as Playground,s as Sizes,c as States,l as WithLabels,m as __namedExportsOrder,a as default};