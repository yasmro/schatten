import{j as e}from"./iframe-Cc62uNaa.js";import{I as r}from"./Input-CtNAvjfb.js";import"./preload-helper-hmmh1zBP.js";import"./index-D2Keubu8.js";import"./chevron-up-DykreQ0z.js";import"./field-CBhKn-i_.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";const le={title:"Components/lv1/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the input.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the input in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},textLeft:{description:"Text displayed before the input. Takes priority over iconLeft.",control:"text",table:{type:{summary:"string"}}},textRight:{description:"Text displayed after the input. Takes priority over iconRight.",control:"text",table:{type:{summary:"string"}}},iconLeft:{description:"Lucide icon name rendered before the input. Ignored when textLeft is set.",control:"text",table:{type:{summary:"IconName"}}},iconRight:{description:"Lucide icon name rendered after the input. Ignored when textRight is set.",control:"text",table:{type:{summary:"IconName"}}},placeholder:{description:"Placeholder text displayed when the input is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the input and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{description:"Makes the input read-only. The value is focusable and selectable but not editable, and is still submitted with the form. Renders with a warm-tinted readOnly surface to differentiate from disabled.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},type:{description:"HTML input type.",control:"select",options:["text","email","password","number","search","tel","url","date","datetime-local"],table:{type:{summary:"string"},defaultValue:{summary:"text"}}}}},a={name:"Playground",args:{placeholder:"Enter text...",size:"md"}},t={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"})]})},l={name:"Types",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{type:"text",placeholder:"Text"}),e.jsx(r,{type:"email",placeholder:"Email"}),e.jsx(r,{type:"password",placeholder:"Password"}),e.jsx(r,{type:"number",placeholder:"Number"}),e.jsx(r,{type:"search",placeholder:"Search"}),e.jsx(r,{type:"date"}),e.jsx(r,{type:"datetime-local"})]})},s={name:"With Text",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{textLeft:"https://",placeholder:"example.com"}),e.jsx(r,{textRight:".com",placeholder:"domain"}),e.jsx(r,{textLeft:"$",textRight:"USD",placeholder:"0.00"})]})},o={name:"With Icons",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{iconLeft:"Search",placeholder:"Search..."}),e.jsx(r,{iconLeft:"Mail",placeholder:"Email"}),e.jsx(r,{iconRight:"Eye",type:"password",placeholder:"Password"})]})},d={name:"Text Priority over Icon",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{textLeft:"https://",iconLeft:"Globe",placeholder:"textLeft wins over iconLeft"}),e.jsx(r,{textRight:"@gmail.com",iconRight:"Mail",placeholder:"textRight wins over iconRight"})]})},i={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{isError:!0,placeholder:"Error state"}),e.jsx(r,{isError:!0,defaultValue:"Invalid input"}),e.jsx(r,{isError:!0,iconLeft:"CircleAlert",placeholder:"With icon"})]})},n={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{disabled:!0,placeholder:"Disabled"}),e.jsx(r,{disabled:!0,defaultValue:"Disabled with value"})]})},c={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{disabled:!0,isError:!0,placeholder:"Disabled + error"}),e.jsx(r,{disabled:!0,isError:!0,defaultValue:"Disabled + error"})]})},p={name:"ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{readOnly:!0,defaultValue:"Read-only value"}),e.jsx(r,{readOnly:!0,iconLeft:"Lock",defaultValue:"With icon"}),e.jsx(r,{readOnly:!0,textLeft:"ID",defaultValue:"usr_123456"})]})},u={name:"Disabled vs ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 w-72",children:[e.jsx("div",{className:"text-xs text-foreground-muted",children:"Default"}),e.jsx(r,{defaultValue:"Editable value"}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"ReadOnly (informational)"}),e.jsx(r,{readOnly:!0,defaultValue:"Read-only value"}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"Disabled (cannot interact)"}),e.jsx(r,{disabled:!0,defaultValue:"Disabled value"})]})},m={name:"ReadOnly with error",render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-72",children:e.jsx(r,{readOnly:!0,isError:!0,defaultValue:"ReadOnly + error"})})};var x,h,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md'
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,g,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,I,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(I=l.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var w,R,E;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'With Text',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" placeholder="example.com" />
      <Input textRight=".com" placeholder="domain" />
      <Input textLeft="$" textRight="USD" placeholder="0.00" />
    </div>
}`,...(E=(R=s.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var L,D,N;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With Icons',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input iconLeft="Search" placeholder="Search..." />
      <Input iconLeft="Mail" placeholder="Email" />
      <Input iconRight="Eye" type="password" placeholder="Password" />
    </div>
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var O,S,V;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Text Priority over Icon',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" iconLeft="Globe" placeholder="textLeft wins over iconLeft" />
      <Input textRight="@gmail.com" iconRight="Mail" placeholder="textRight wins over iconRight" />
    </div>
}`,...(V=(S=d.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var T,W,z;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input isError placeholder="Error state" />
      <Input isError defaultValue="Invalid input" />
      <Input isError iconLeft="CircleAlert" placeholder="With icon" />
    </div>
}`,...(z=(W=i.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var P,M,k;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled placeholder="Disabled" />
      <Input disabled defaultValue="Disabled with value" />
    </div>
}`,...(k=(M=n.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var _,C,A;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled isError placeholder="Disabled + error" />
      <Input disabled isError defaultValue="Disabled + error" />
    </div>
}`,...(A=(C=c.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var G,U,$;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'ReadOnly',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input readOnly defaultValue="Read-only value" />
      <Input readOnly iconLeft="Lock" defaultValue="With icon" />
      <Input readOnly textLeft="ID" defaultValue="usr_123456" />
    </div>
}`,...($=(U=p.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var H,q,B;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Disabled vs ReadOnly',
  render: () => <div className="flex flex-col gap-3 w-72">
      <div className="text-xs text-foreground-muted">Default</div>
      <Input defaultValue="Editable value" />
      <div className="text-xs text-foreground-muted mt-2">ReadOnly (informational)</div>
      <Input readOnly defaultValue="Read-only value" />
      <div className="text-xs text-foreground-muted mt-2">Disabled (cannot interact)</div>
      <Input disabled defaultValue="Disabled value" />
    </div>
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var F,J,K;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'ReadOnly with error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input readOnly isError defaultValue="ReadOnly + error" />
    </div>
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const se=["Playground","Sizes","Types","WithText","WithIcons","TextOverridesIcon","ErrorState","Disabled","DisabledWithError","ReadOnly","DisabledVsReadOnly","ReadOnlyWithError"];export{n as Disabled,u as DisabledVsReadOnly,c as DisabledWithError,i as ErrorState,a as Playground,p as ReadOnly,m as ReadOnlyWithError,t as Sizes,d as TextOverridesIcon,l as Types,o as WithIcons,s as WithText,se as __namedExportsOrder,le as default};
