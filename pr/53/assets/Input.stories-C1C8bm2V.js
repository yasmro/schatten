import{j as e}from"./iframe-n1BJsO9R.js";import{I as t}from"./Input-2ilzF_BU.js";import"./preload-helper-DT5D8Vit.js";import"./index-oZ4zNgGF.js";import"./chevron-up-BHoUPFQv.js";import"./field-Ffplr6-m.js";import"./index-DHk-Frat.js";const U={title:"Components/lv1/Input",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the input.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the input in an error state with destructive border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},textLeft:{description:"Text displayed before the input. Takes priority over iconLeft.",control:"text",table:{type:{summary:"string"}}},textRight:{description:"Text displayed after the input. Takes priority over iconRight.",control:"text",table:{type:{summary:"string"}}},iconLeft:{description:"Lucide icon name rendered before the input. Ignored when textLeft is set.",control:"text",table:{type:{summary:"IconName"}}},iconRight:{description:"Lucide icon name rendered after the input. Ignored when textRight is set.",control:"text",table:{type:{summary:"IconName"}}},placeholder:{description:"Placeholder text displayed when the input is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the input and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},type:{description:"HTML input type.",control:"select",options:["text","email","password","number","search","tel","url","date","datetime-local"],table:{type:{summary:"string"},defaultValue:{summary:"text"}}}}},r={name:"Playground",args:{placeholder:"Enter text...",size:"md"}},a={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(t,{size:"sm",placeholder:"Small"}),e.jsx(t,{size:"md",placeholder:"Medium"}),e.jsx(t,{size:"lg",placeholder:"Large"})]})},s={name:"Types",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(t,{type:"text",placeholder:"Text"}),e.jsx(t,{type:"email",placeholder:"Email"}),e.jsx(t,{type:"password",placeholder:"Password"}),e.jsx(t,{type:"number",placeholder:"Number"}),e.jsx(t,{type:"search",placeholder:"Search"}),e.jsx(t,{type:"date"}),e.jsx(t,{type:"datetime-local"})]})},o={name:"With Text",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(t,{textLeft:"https://",placeholder:"example.com"}),e.jsx(t,{textRight:".com",placeholder:"domain"}),e.jsx(t,{textLeft:"$",textRight:"USD",placeholder:"0.00"})]})},l={name:"With Icons",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(t,{iconLeft:"Search",placeholder:"Search..."}),e.jsx(t,{iconLeft:"Mail",placeholder:"Email"}),e.jsx(t,{iconRight:"Eye",type:"password",placeholder:"Password"})]})},i={name:"Text Priority over Icon",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(t,{textLeft:"https://",iconLeft:"Globe",placeholder:"textLeft wins over iconLeft"}),e.jsx(t,{textRight:"@gmail.com",iconRight:"Mail",placeholder:"textRight wins over iconRight"})]})},c={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(t,{isError:!0,placeholder:"Error state"}),e.jsx(t,{isError:!0,defaultValue:"Invalid input"}),e.jsx(t,{isError:!0,iconLeft:"CircleAlert",placeholder:"With icon"})]})},d={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(t,{disabled:!0,placeholder:"Disabled"}),e.jsx(t,{disabled:!0,defaultValue:"Disabled with value"})]})};var p,n,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md'
  }
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var u,x,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,g,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var I,b,v;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With Text',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" placeholder="example.com" />
      <Input textRight=".com" placeholder="domain" />
      <Input textLeft="$" textRight="USD" placeholder="0.00" />
    </div>
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var w,j,L;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With Icons',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input iconLeft="Search" placeholder="Search..." />
      <Input iconLeft="Mail" placeholder="Email" />
      <Input iconRight="Eye" type="password" placeholder="Password" />
    </div>
}`,...(L=(j=l.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var S,E,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Text Priority over Icon',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" iconLeft="Globe" placeholder="textLeft wins over iconLeft" />
      <Input textRight="@gmail.com" iconRight="Mail" placeholder="textRight wins over iconRight" />
    </div>
}`,...(T=(E=i.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var R,N,z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input isError placeholder="Error state" />
      <Input isError defaultValue="Invalid input" />
      <Input isError iconLeft="CircleAlert" placeholder="With icon" />
    </div>
}`,...(z=(N=c.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var D,P,W;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled placeholder="Disabled" />
      <Input disabled defaultValue="Disabled with value" />
    </div>
}`,...(W=(P=d.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const _=["Playground","Sizes","Types","WithText","WithIcons","TextOverridesIcon","ErrorState","Disabled"];export{d as Disabled,c as ErrorState,r as Playground,a as Sizes,i as TextOverridesIcon,s as Types,l as WithIcons,o as WithText,_ as __namedExportsOrder,U as default};
