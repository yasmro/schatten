import{j as e}from"./iframe-CJHlUxQb.js";import{I as r}from"./Input-B2Ahfj6t.js";import"./preload-helper-_tVC99vM.js";import"./index-BR2_1SZ7.js";import"./chevron-up-Ch67PgsX.js";import"./field-CzbYAqXU.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";const B={title:"Components/lv1/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the input.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the input in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},textLeft:{description:"Text displayed before the input. Takes priority over iconLeft.",control:"text",table:{type:{summary:"string"}}},textRight:{description:"Text displayed after the input. Takes priority over iconRight.",control:"text",table:{type:{summary:"string"}}},iconLeft:{description:"Lucide icon name rendered before the input. Ignored when textLeft is set.",control:"text",table:{type:{summary:"IconName"}}},iconRight:{description:"Lucide icon name rendered after the input. Ignored when textRight is set.",control:"text",table:{type:{summary:"IconName"}}},placeholder:{description:"Placeholder text displayed when the input is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the input and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},type:{description:"HTML input type.",control:"select",options:["text","email","password","number","search","tel","url","date","datetime-local"],table:{type:{summary:"string"},defaultValue:{summary:"text"}}}}},t={name:"Playground",args:{placeholder:"Enter text...",size:"md"}},a={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"})]})},s={name:"Types",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{type:"text",placeholder:"Text"}),e.jsx(r,{type:"email",placeholder:"Email"}),e.jsx(r,{type:"password",placeholder:"Password"}),e.jsx(r,{type:"number",placeholder:"Number"}),e.jsx(r,{type:"search",placeholder:"Search"}),e.jsx(r,{type:"date"}),e.jsx(r,{type:"datetime-local"})]})},o={name:"With Text",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{textLeft:"https://",placeholder:"example.com"}),e.jsx(r,{textRight:".com",placeholder:"domain"}),e.jsx(r,{textLeft:"$",textRight:"USD",placeholder:"0.00"})]})},l={name:"With Icons",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{iconLeft:"Search",placeholder:"Search..."}),e.jsx(r,{iconLeft:"Mail",placeholder:"Email"}),e.jsx(r,{iconRight:"Eye",type:"password",placeholder:"Password"})]})},i={name:"Text Priority over Icon",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{textLeft:"https://",iconLeft:"Globe",placeholder:"textLeft wins over iconLeft"}),e.jsx(r,{textRight:"@gmail.com",iconRight:"Mail",placeholder:"textRight wins over iconRight"})]})},d={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{isError:!0,placeholder:"Error state"}),e.jsx(r,{isError:!0,defaultValue:"Invalid input"}),e.jsx(r,{isError:!0,iconLeft:"CircleAlert",placeholder:"With icon"})]})},c={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{disabled:!0,placeholder:"Disabled"}),e.jsx(r,{disabled:!0,defaultValue:"Disabled with value"})]})},p={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{disabled:!0,isError:!0,placeholder:"Disabled + error"}),e.jsx(r,{disabled:!0,isError:!0,defaultValue:"Disabled + error"})]})};var n,m,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,h,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,y,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var I,v,w;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'With Text',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" placeholder="example.com" />
      <Input textRight=".com" placeholder="domain" />
      <Input textLeft="$" textRight="USD" placeholder="0.00" />
    </div>
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,E,L;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'With Icons',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input iconLeft="Search" placeholder="Search..." />
      <Input iconLeft="Mail" placeholder="Email" />
      <Input iconRight="Eye" type="password" placeholder="Password" />
    </div>
}`,...(L=(E=l.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var S,D,N;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Text Priority over Icon',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" iconLeft="Globe" placeholder="textLeft wins over iconLeft" />
      <Input textRight="@gmail.com" iconRight="Mail" placeholder="textRight wins over iconRight" />
    </div>
}`,...(N=(D=i.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var T,R,z;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input isError placeholder="Error state" />
      <Input isError defaultValue="Invalid input" />
      <Input isError iconLeft="CircleAlert" placeholder="With icon" />
    </div>
}`,...(z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var W,P,V;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled placeholder="Disabled" />
      <Input disabled defaultValue="Disabled with value" />
    </div>
}`,...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var M,C,O;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled isError placeholder="Disabled + error" />
      <Input disabled isError defaultValue="Disabled + error" />
    </div>
}`,...(O=(C=p.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const F=["Playground","Sizes","Types","WithText","WithIcons","TextOverridesIcon","ErrorState","Disabled","DisabledWithError"];export{c as Disabled,p as DisabledWithError,d as ErrorState,t as Playground,a as Sizes,i as TextOverridesIcon,s as Types,l as WithIcons,o as WithText,F as __namedExportsOrder,B as default};
