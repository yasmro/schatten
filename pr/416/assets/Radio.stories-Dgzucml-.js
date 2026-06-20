import{i as e}from"./preload-helper-ylcYtS7T.js";import{t}from"./iframe-1y-Fr_Ay.js";import{n,r,t as i}from"./Radio-fLjNTKK9.js";var a,o,s,c,l,u,d,f,p,m;e((()=>{r(),a=t(),o={title:`Components/lv1/Radio`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{description:`Size of the radio button.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},label:{description:`Label text displayed next to the radio. Automatically associates via id.`,control:`text`,table:{type:{summary:`ReactNode`}}},value:{description:`The value of the radio item.`,control:`text`,table:{type:{summary:`string`}}},isError:{description:`Displays the radio in an error state with error border and ring.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disables the radio and applies disabled styling.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}}},s={name:`Playground`,args:{size:`md`,label:`Option A`,value:`a`},decorators:[e=>(0,a.jsx)(n,{defaultValue:`a`,children:(0,a.jsx)(e,{})})]},c={name:`Sizes`,render:()=>(0,a.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,a.jsx)(n,{defaultValue:`sm`,children:(0,a.jsx)(i,{size:`sm`,value:`sm`,label:`Small`})}),(0,a.jsx)(n,{defaultValue:`md`,children:(0,a.jsx)(i,{size:`md`,value:`md`,label:`Medium`})}),(0,a.jsx)(n,{defaultValue:`lg`,children:(0,a.jsx)(i,{size:`lg`,value:`lg`,label:`Large`})})]})},l={name:`With Labels`,render:()=>(0,a.jsxs)(n,{defaultValue:`comfortable`,children:[(0,a.jsx)(i,{value:`default`,label:`Default`}),(0,a.jsx)(i,{value:`comfortable`,label:`Comfortable`}),(0,a.jsx)(i,{value:`compact`,label:`Compact`})]})},u={name:`Horizontal`,render:()=>(0,a.jsxs)(n,{defaultValue:`option-1`,className:`flex flex-row gap-4`,children:[(0,a.jsx)(i,{value:`option-1`,label:`Option 1`}),(0,a.jsx)(i,{value:`option-2`,label:`Option 2`}),(0,a.jsx)(i,{value:`option-3`,label:`Option 3`})]})},d={name:`Error`,render:()=>(0,a.jsxs)(n,{defaultValue:`error-selected`,isError:!0,children:[(0,a.jsx)(i,{value:`error-unselected`,label:`Unselected error`}),(0,a.jsx)(i,{value:`error-selected`,label:`Selected error`})]})},f={name:`Disabled`,render:()=>(0,a.jsxs)(n,{defaultValue:`disabled-selected`,children:[(0,a.jsx)(i,{value:`disabled-unselected`,label:`Disabled unselected`,disabled:!0}),(0,a.jsx)(i,{value:`disabled-selected`,label:`Disabled selected`,disabled:!0})]})},p={name:`Disabled with error`,render:()=>(0,a.jsxs)(n,{defaultValue:`disabled-error-selected`,isError:!0,disabled:!0,children:[(0,a.jsx)(i,{value:`disabled-error-unselected`,label:`Disabled + error, unselected`}),(0,a.jsx)(i,{value:`disabled-error-selected`,label:`Disabled + error, selected`})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    label: 'Option A',
    value: 'a'
  },
  decorators: [Story => <RadioGroup defaultValue="a">
        <Story />
      </RadioGroup>]
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4">
      <RadioGroup defaultValue="sm">
        <Radio size="sm" value="sm" label="Small" />
      </RadioGroup>
      <RadioGroup defaultValue="md">
        <Radio size="md" value="md" label="Medium" />
      </RadioGroup>
      <RadioGroup defaultValue="lg">
        <Radio size="lg" value="lg" label="Large" />
      </RadioGroup>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Labels',
  render: () => <RadioGroup defaultValue="comfortable">
      <Radio value="default" label="Default" />
      <Radio value="comfortable" label="Comfortable" />
      <Radio value="compact" label="Compact" />
    </RadioGroup>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal',
  render: () => <RadioGroup defaultValue="option-1" className="flex flex-row gap-4">
      <Radio value="option-1" label="Option 1" />
      <Radio value="option-2" label="Option 2" />
      <Radio value="option-3" label="Option 3" />
    </RadioGroup>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <RadioGroup defaultValue="error-selected" isError>
      <Radio value="error-unselected" label="Unselected error" />
      <Radio value="error-selected" label="Selected error" />
    </RadioGroup>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <RadioGroup defaultValue="disabled-selected">
      <Radio value="disabled-unselected" label="Disabled unselected" disabled />
      <Radio value="disabled-selected" label="Disabled selected" disabled />
    </RadioGroup>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <RadioGroup defaultValue="disabled-error-selected" isError disabled>
      <Radio value="disabled-error-unselected" label="Disabled + error, unselected" />
      <Radio value="disabled-error-selected" label="Disabled + error, selected" />
    </RadioGroup>
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Sizes`,`WithLabels`,`Horizontal`,`ErrorState`,`Disabled`,`DisabledWithError`]}))();export{f as Disabled,p as DisabledWithError,d as ErrorState,u as Horizontal,s as Playground,c as Sizes,l as WithLabels,m as __namedExportsOrder,o as default};