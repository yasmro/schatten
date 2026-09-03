import{j as e}from"./iframe-BEyulySY.js";import{S as a}from"./Switch-CRkvJZ5l.js";import"./preload-helper-DiB7Pwu5.js";import"./index-fgQ7oXxi.js";import"./index-BmTOljdO.js";import"./index-C5YbYRKI.js";import"./index-CAm4xggV.js";import"./index-4Qf6y9Hu.js";import"./index-4P_pCjWA.js";import"./index-Cvj9i6Du.js";import"./field-D-U-vrxT.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css               */const C={title:"Components/lv1/Switch",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the switch.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},label:{description:"Label text displayed next to the switch. Automatically associates via id.",control:"text",table:{type:{summary:"ReactNode"}}},checked:{description:"Controlled checked state.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultChecked:{description:"Default checked state for uncontrolled usage.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isError:{description:"Displays the switch in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"Disables the switch and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:"Marks the switch as required for form validation.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},s={name:"Playground",args:{size:"md",label:"Enable notifications",defaultChecked:!1}},r={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large",defaultChecked:!0})]})},l={name:"States",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{"aria-label":"Off"}),e.jsx(a,{defaultChecked:!0,"aria-label":"On"})]})},t={name:"With Labels",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Enable notifications",defaultChecked:!0}),e.jsx(a,{label:"Dark mode"}),e.jsx(a,{label:"Unavailable option",disabled:!0})]})},i={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Unchecked error",isError:!0}),e.jsx(a,{label:"Checked error",isError:!0,defaultChecked:!0})]})},d={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{size:"sm",label:"Disabled checked (sm)",disabled:!0,defaultChecked:!0}),e.jsx(a,{label:"Disabled checked (md)",disabled:!0,defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Disabled checked (lg)",disabled:!0,defaultChecked:!0})]})},o={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(a,{label:"Disabled + error",disabled:!0,isError:!0}),e.jsx(a,{label:"Disabled + error, checked",disabled:!0,isError:!0,defaultChecked:!0})]})},c={name:"All states (cognitive review)",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-3 items-start",children:[e.jsx("div",{className:"font-medium text-foreground",children:"Enabled"}),e.jsx("div",{className:"font-medium text-foreground",children:"Disabled"}),e.jsx(a,{label:"Off"}),e.jsx(a,{label:"Off (disabled)",disabled:!0}),e.jsx(a,{label:"On",defaultChecked:!0}),e.jsx(a,{label:"On (disabled)",defaultChecked:!0,disabled:!0})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Enable notifications',
    defaultChecked: false
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-3">
      <Switch size="sm" label="Small" defaultChecked />
      <Switch size="md" label="Medium" defaultChecked />
      <Switch size="lg" label="Large" defaultChecked />
    </div>
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div className="flex items-center gap-4">
      {/* Bare state-matrix switches have no visible label by design —
       * aria-label keeps the axe \`button-name\` rule green without changing
       * a pixel (#345). */}
      <Switch aria-label="Off" />
      <Switch defaultChecked aria-label="On" />
    </div>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Enable notifications" defaultChecked />
      <Switch label="Dark mode" />
      <Switch label="Unavailable option" disabled />
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Unchecked error" isError />
      <Switch label="Checked error" isError defaultChecked />
    </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Disabled unchecked" disabled />
      {/* The three rows below show \`disabled + checked\` at every size (#531).
       * Sizes are named in the labels because this story is read in Storybook,
       * where the source comment is not visible.
       *
       * Why the intersection needs its own baseline: the check icon scales
       * with the track (sm 0.625rem / md 0.75rem / lg 0.875rem), so at \`sm\`
       * it is a ~1px stroke — and #524 shipped in the first place because a
       * regression that size fits under \`maxDiffPixelRatio: 0.01\`. Only a
       * frame that actually contains \`sm\` can catch the next one.
       *
       * Measured on these baselines (#531): the stroke reaches the full
       * \`--color-foreground-disabled\` value (\`gray-500\`, \`rgb(122,122,122)\`)
       * at every size — antialiasing does NOT dilute the \`sm\` peak — so \`sm\`
       * is no worse than \`md\`. The resulting ratio is a property of the token
       * pair rather than of this story, and lives in
       * \`docs/decisions/2026-05-non-interactive-state-tokens.md\` §2, pinned by
       * \`resolution.test.ts\` ("non-interactive state WCAG contrast"). */}
      <Switch size="sm" label="Disabled checked (sm)" disabled defaultChecked />
      <Switch label="Disabled checked (md)" disabled defaultChecked />
      <Switch size="lg" label="Disabled checked (lg)" disabled defaultChecked />
    </div>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-3">
      <Switch label="Disabled + error" disabled isError />
      <Switch label="Disabled + error, checked" disabled isError defaultChecked />
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'All states (cognitive review)',
  render: () => <div className="grid grid-cols-2 gap-x-8 gap-y-3 items-start">
      <div className="font-medium text-foreground">Enabled</div>
      <div className="font-medium text-foreground">Disabled</div>
      <Switch label="Off" />
      <Switch label="Off (disabled)" disabled />
      <Switch label="On" defaultChecked />
      <Switch label="On (disabled)" defaultChecked disabled />
    </div>
}`,...c.parameters?.docs?.source}}};const j=["Playground","Sizes","States","WithLabels","ErrorState","Disabled","DisabledWithError","AllStates"];export{c as AllStates,d as Disabled,o as DisabledWithError,i as ErrorState,s as Playground,r as Sizes,l as States,t as WithLabels,j as __namedExportsOrder,C as default};
