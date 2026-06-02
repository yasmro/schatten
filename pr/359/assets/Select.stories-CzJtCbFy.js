import{i as e}from"./preload-helper-ChaSUgV0.js";import{t}from"./iframe-DK9TY03R.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u}from"./Select-Bj0S47td.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{a(),d=t(),f={title:`Components/lv1/Select`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{description:`Size of the select trigger.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},isError:{description:`Displays the select trigger in an error state with error border and ring.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disables the select and applies disabled styling.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}},decorators:[e=>(0,d.jsx)(`div`,{className:`w-56`,children:(0,d.jsx)(e,{})})]},p={name:`Playground`,args:{size:`md`,isError:!1,disabled:!1},render:e=>(0,d.jsxs)(u,{children:[(0,d.jsx)(l,{...e,children:(0,d.jsx)(r,{placeholder:`Select a fruit`})}),(0,d.jsxs)(o,{children:[(0,d.jsx)(i,{value:`apple`,children:`Apple`}),(0,d.jsx)(i,{value:`banana`,children:`Banana`}),(0,d.jsx)(i,{value:`cherry`,children:`Cherry`}),(0,d.jsx)(i,{value:`grape`,children:`Grape`}),(0,d.jsx)(i,{value:`orange`,children:`Orange`})]})]})},m={name:`Sizes`,render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(l,{size:`sm`,children:(0,d.jsx)(r,{placeholder:`Small`})}),(0,d.jsxs)(o,{children:[(0,d.jsx)(i,{value:`apple`,children:`Apple`}),(0,d.jsx)(i,{value:`banana`,children:`Banana`})]})]}),(0,d.jsxs)(u,{children:[(0,d.jsx)(l,{size:`md`,children:(0,d.jsx)(r,{placeholder:`Medium`})}),(0,d.jsxs)(o,{children:[(0,d.jsx)(i,{value:`apple`,children:`Apple`}),(0,d.jsx)(i,{value:`banana`,children:`Banana`})]})]}),(0,d.jsxs)(u,{children:[(0,d.jsx)(l,{size:`lg`,children:(0,d.jsx)(r,{placeholder:`Large`})}),(0,d.jsxs)(o,{children:[(0,d.jsx)(i,{value:`apple`,children:`Apple`}),(0,d.jsx)(i,{value:`banana`,children:`Banana`})]})]})]})},h={name:`With Groups`,render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(l,{children:(0,d.jsx)(r,{placeholder:`Select a food`})}),(0,d.jsxs)(o,{children:[(0,d.jsxs)(c,{children:[(0,d.jsx)(n,{children:`Fruits`}),(0,d.jsx)(i,{value:`apple`,children:`Apple`}),(0,d.jsx)(i,{value:`banana`,children:`Banana`}),(0,d.jsx)(i,{value:`cherry`,children:`Cherry`})]}),(0,d.jsx)(s,{}),(0,d.jsxs)(c,{children:[(0,d.jsx)(n,{children:`Vegetables`}),(0,d.jsx)(i,{value:`carrot`,children:`Carrot`}),(0,d.jsx)(i,{value:`broccoli`,children:`Broccoli`}),(0,d.jsx)(i,{value:`spinach`,children:`Spinach`})]})]})]})},g={name:`Error`,render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(l,{isError:!0,children:(0,d.jsx)(r,{placeholder:`Error state`})}),(0,d.jsxs)(o,{children:[(0,d.jsx)(i,{value:`apple`,children:`Apple`}),(0,d.jsx)(i,{value:`banana`,children:`Banana`})]})]}),(0,d.jsxs)(u,{defaultValue:`apple`,children:[(0,d.jsx)(l,{isError:!0,children:(0,d.jsx)(r,{})}),(0,d.jsxs)(o,{children:[(0,d.jsx)(i,{value:`apple`,children:`Apple`}),(0,d.jsx)(i,{value:`banana`,children:`Banana`})]})]})]})},_={name:`Disabled`,render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsxs)(u,{disabled:!0,children:[(0,d.jsx)(l,{children:(0,d.jsx)(r,{placeholder:`Disabled`})}),(0,d.jsx)(o,{children:(0,d.jsx)(i,{value:`apple`,children:`Apple`})})]}),(0,d.jsxs)(u,{disabled:!0,defaultValue:`apple`,children:[(0,d.jsx)(l,{children:(0,d.jsx)(r,{})}),(0,d.jsx)(o,{children:(0,d.jsx)(i,{value:`apple`,children:`Apple`})})]})]})},v={name:`Disabled with error`,render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsxs)(u,{disabled:!0,children:[(0,d.jsx)(l,{isError:!0,children:(0,d.jsx)(r,{placeholder:`Disabled + error`})}),(0,d.jsx)(o,{children:(0,d.jsx)(i,{value:`apple`,children:`Apple`})})]}),(0,d.jsxs)(u,{disabled:!0,defaultValue:`apple`,children:[(0,d.jsx)(l,{isError:!0,children:(0,d.jsx)(r,{})}),(0,d.jsx)(o,{children:(0,d.jsx)(i,{value:`apple`,children:`Apple`})})]})]})},y={name:`Many Items`,render:()=>{let e=Array.from({length:50},(e,t)=>`Item ${t+1}`);return(0,d.jsxs)(u,{children:[(0,d.jsx)(l,{children:(0,d.jsx)(r,{placeholder:`50 items`})}),(0,d.jsx)(o,{children:e.map(e=>(0,d.jsx)(i,{value:e,children:e},e))})]})}},b={name:`Long Text`,render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(l,{children:(0,d.jsx)(r,{placeholder:`Select an option`})}),(0,d.jsxs)(o,{children:[(0,d.jsx)(i,{value:`short`,children:`Short`}),(0,d.jsx)(i,{value:`medium`,children:`A medium length option label`}),(0,d.jsx)(i,{value:`long`,children:`This is a very long option label that might cause layout issues in the dropdown`}),(0,d.jsx)(i,{value:`longer`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`})]})]})},x={name:`Disabled Items`,render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(l,{children:(0,d.jsx)(r,{placeholder:`Some items disabled`})}),(0,d.jsxs)(o,{children:[(0,d.jsx)(i,{value:`apple`,children:`Apple`}),(0,d.jsx)(i,{value:`banana`,disabled:!0,children:`Banana (sold out)`}),(0,d.jsx)(i,{value:`cherry`,children:`Cherry`}),(0,d.jsx)(i,{value:`grape`,disabled:!0,children:`Grape (sold out)`})]})]})},S={name:`Open Content (VRT)`,parameters:{layout:`padded`,docs:{disable:!0}},render:()=>(0,d.jsxs)(u,{defaultOpen:!0,children:[(0,d.jsx)(l,{children:(0,d.jsx)(r,{placeholder:`Choose`})}),(0,d.jsxs)(o,{children:[(0,d.jsxs)(c,{children:[(0,d.jsx)(n,{children:`Fruits`}),(0,d.jsx)(i,{value:`apple`,children:`Apple`}),(0,d.jsx)(i,{value:`banana`,children:`Banana`})]}),(0,d.jsx)(s,{}),(0,d.jsxs)(c,{children:[(0,d.jsx)(n,{children:`Vegetables`}),(0,d.jsx)(i,{value:`carrot`,children:`Carrot`}),(0,d.jsx)(i,{value:`broccoli`,disabled:!0,children:`Broccoli (sold out)`})]})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    size: 'md',
    isError: false,
    disabled: false
  },
  render: args => <Select>
      <SelectTrigger {...args}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4">
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Small" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="md">
          <SelectValue placeholder="Medium" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="lg">
          <SelectValue placeholder="Large" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Groups',
  render: () => <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a food" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="spinach">Spinach</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4">
      <Select>
        <SelectTrigger isError>
          <SelectValue placeholder="Error state" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="apple">
        <SelectTrigger isError>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4">
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
      <Select disabled defaultValue="apple">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4">
      <Select disabled>
        <SelectTrigger isError>
          <SelectValue placeholder="Disabled + error" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
      <Select disabled defaultValue="apple">
        <SelectTrigger isError>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Many Items',
  render: () => {
    const items = Array.from({
      length: 50
    }, (_, i) => \`Item \${i + 1}\`);
    return <Select>
        <SelectTrigger>
          <SelectValue placeholder="50 items" />
        </SelectTrigger>
        <SelectContent>
          {items.map(item => <SelectItem key={item} value={item}>
              {item}
            </SelectItem>)}
        </SelectContent>
      </Select>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Long Text',
  render: () => <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="short">Short</SelectItem>
        <SelectItem value="medium">A medium length option label</SelectItem>
        <SelectItem value="long">
          This is a very long option label that might cause layout issues in the dropdown
        </SelectItem>
        <SelectItem value="longer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </SelectItem>
      </SelectContent>
    </Select>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Items',
  render: () => <Select>
      <SelectTrigger>
        <SelectValue placeholder="Some items disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana" disabled>
          Banana (sold out)
        </SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
        <SelectItem value="grape" disabled>
          Grape (sold out)
        </SelectItem>
      </SelectContent>
    </Select>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Open Content (VRT)',
  parameters: {
    layout: 'padded',
    docs: {
      disable: true
    }
  },
  render: () => <Select defaultOpen>
      <SelectTrigger>
        <SelectValue placeholder="Choose" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli" disabled>
            Broccoli (sold out)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
}`,...S.parameters?.docs?.source},description:{story:`Content sub-element coverage in one frame — pins \`defaultOpen\` so VRT
can capture the portaled content (label / item / separator / group /
disabled item / item-indicator) in a single screenshot.

The other stories above (Sizes / ErrorState / Disabled / …) keep
their trigger-only focus on purpose — each one verifies a specific
axis (size, error, disabled), and overloading them with content
would blur the visual diff.

Hidden from Docs (\`docs.disable: true\`) because Radix portals the
open content into \`document.body\`, which on the docs page floats
over the surrounding story descriptions and confuses readers. The
story is still mounted for the dedicated story URL — which is what
VRT targets — so this only suppresses the docs-tab rendering.`,...S.parameters?.docs?.description}}},C=[`Playground`,`Sizes`,`WithGroups`,`ErrorState`,`Disabled`,`DisabledWithError`,`ManyItems`,`LongText`,`DisabledItems`,`OpenContent`]}))();export{_ as Disabled,x as DisabledItems,v as DisabledWithError,g as ErrorState,b as LongText,y as ManyItems,S as OpenContent,p as Playground,m as Sizes,h as WithGroups,C as __namedExportsOrder,f as default};