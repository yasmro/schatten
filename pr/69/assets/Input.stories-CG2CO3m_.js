import{j as e}from"./iframe-BR71pDDo.js";import{I as t}from"./Input-qNt5B1_n.js";import"./preload-helper-BdHZps5x.js";import"./index-Dlp6Wp2P.js";import"./chevron-up-BedBGzaO.js";import"./field-DjjwJueo.js";import"./utils-d2XQ1MEC.js";import"./index-Drd88ecX.js";const y={title:"Components/lv1/Input",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the input.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the input in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},textLeft:{description:"Text displayed before the input. Takes priority over iconLeft.",control:"text",table:{type:{summary:"string"}}},textRight:{description:"Text displayed after the input. Takes priority over iconRight.",control:"text",table:{type:{summary:"string"}}},iconLeft:{description:"Lucide icon name rendered before the input. Ignored when textLeft is set.",control:"text",table:{type:{summary:"IconName"}}},iconRight:{description:"Lucide icon name rendered after the input. Ignored when textRight is set.",control:"text",table:{type:{summary:"IconName"}}},placeholder:{description:"Placeholder text displayed when the input is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the input and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},type:{description:"HTML input type.",control:"select",options:["text","email","password","number","search","tel","url","date","datetime-local"],table:{type:{summary:"string"},defaultValue:{summary:"text"}}}}},r={name:"Playground",args:{placeholder:"Enter text...",size:"md"}},a={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(t,{size:"sm",placeholder:"Small"}),e.jsx(t,{size:"md",placeholder:"Medium"}),e.jsx(t,{size:"lg",placeholder:"Large"})]})},s={name:"Types",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(t,{type:"text",placeholder:"Text"}),e.jsx(t,{type:"email",placeholder:"Email"}),e.jsx(t,{type:"password",placeholder:"Password"}),e.jsx(t,{type:"number",placeholder:"Number"}),e.jsx(t,{type:"search",placeholder:"Search"}),e.jsx(t,{type:"date"}),e.jsx(t,{type:"datetime-local"})]})},o={name:"With Text",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(t,{textLeft:"https://",placeholder:"example.com"}),e.jsx(t,{textRight:".com",placeholder:"domain"}),e.jsx(t,{textLeft:"$",textRight:"USD",placeholder:"0.00"})]})},l={name:"With Icons",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(t,{iconLeft:"Search",placeholder:"Search..."}),e.jsx(t,{iconLeft:"Mail",placeholder:"Email"}),e.jsx(t,{iconRight:"Eye",type:"password",placeholder:"Password"})]})},i={name:"Text Priority over Icon",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(t,{textLeft:"https://",iconLeft:"Globe",placeholder:"textLeft wins over iconLeft"}),e.jsx(t,{textRight:"@gmail.com",iconRight:"Mail",placeholder:"textRight wins over iconRight"})]})},c={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(t,{isError:!0,placeholder:"Error state"}),e.jsx(t,{isError:!0,defaultValue:"Invalid input"}),e.jsx(t,{isError:!0,iconLeft:"CircleAlert",placeholder:"With icon"})]})},d={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(t,{disabled:!0,placeholder:"Disabled"}),e.jsx(t,{disabled:!0,defaultValue:"Disabled with value"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Types',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input type="text" placeholder="Text" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="search" placeholder="Search" />
      <Input type="date" />
      <Input type="datetime-local" />
    </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Text',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" placeholder="example.com" />
      <Input textRight=".com" placeholder="domain" />
      <Input textLeft="$" textRight="USD" placeholder="0.00" />
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Icons',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input iconLeft="Search" placeholder="Search..." />
      <Input iconLeft="Mail" placeholder="Email" />
      <Input iconRight="Eye" type="password" placeholder="Password" />
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Text Priority over Icon',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" iconLeft="Globe" placeholder="textLeft wins over iconLeft" />
      <Input textRight="@gmail.com" iconRight="Mail" placeholder="textRight wins over iconRight" />
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input isError placeholder="Error state" />
      <Input isError defaultValue="Invalid input" />
      <Input isError iconLeft="CircleAlert" placeholder="With icon" />
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled placeholder="Disabled" />
      <Input disabled defaultValue="Disabled with value" />
    </div>
}`,...d.parameters?.docs?.source}}};const I=["Playground","Sizes","Types","WithText","WithIcons","TextOverridesIcon","ErrorState","Disabled"];export{d as Disabled,c as ErrorState,r as Playground,a as Sizes,i as TextOverridesIcon,s as Types,l as WithIcons,o as WithText,I as __namedExportsOrder,y as default};
