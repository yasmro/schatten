import{j as e}from"./iframe-qMWaZmnf.js";import{I as r}from"./Input-5ANYAMtC.js";import{X as v}from"./x-B9FHCXcK.js";import{T as w}from"./trash-2-B3FHkSwQ.js";import{T as I,S as j,a as L,b as R,c as h,P as S,M as x,L as f,G as y,E as g,d as E,D,C as O,e as N,f as T,A as V,g as C}from"./tag-C_KeRP1w.js";import{C as b}from"./circle-alert-1KJgARKn.js";import{C as k}from"./check-CX9CtybD.js";import"./preload-helper-ioeZ-AYd.js";import"./field-CajHrLL8.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./createLucideIcon-BkOWojh8.js";const Oe={title:"Components/lv1/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the input.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the input in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},textLeft:{description:"Text displayed before the input. Takes priority over iconLeft.",control:"text",table:{type:{summary:"string"}}},textRight:{description:"Text displayed after the input. Takes priority over iconRight.",control:"text",table:{type:{summary:"string"}}},iconLeft:{description:"Lucide icon component rendered before the input. Ignored when textLeft is set. Import the icon from `lucide-react` and pass it directly (e.g. `iconLeft={Search}`).",control:"select",options:["ArrowLeft","ArrowRight","Check","ChevronLeft","ChevronRight","CircleAlert","Clock","Download","ExternalLink","Eye","Globe","Lock","Mail","Plus","Search","Send","Sparkles","Star","Tag","Trash2","X"],mapping:{ArrowLeft:C,ArrowRight:V,Check:k,ChevronLeft:T,ChevronRight:N,CircleAlert:b,Clock:O,Download:D,ExternalLink:E,Eye:g,Globe:y,Lock:f,Mail:x,Plus:S,Search:h,Send:R,Sparkles:L,Star:j,Tag:I,Trash2:w,X:v},table:{type:{summary:"LucideIcon"}}},iconRight:{description:"Lucide icon component rendered after the input. Ignored when textRight is set. Import the icon from `lucide-react` and pass it directly.",control:"select",options:["ArrowLeft","ArrowRight","Check","ChevronLeft","ChevronRight","CircleAlert","Clock","Download","ExternalLink","Eye","Globe","Lock","Mail","Plus","Search","Send","Sparkles","Star","Tag","Trash2","X"],mapping:{ArrowLeft:C,ArrowRight:V,Check:k,ChevronLeft:T,ChevronRight:N,CircleAlert:b,Clock:O,Download:D,ExternalLink:E,Eye:g,Globe:y,Lock:f,Mail:x,Plus:S,Search:h,Send:R,Sparkles:L,Star:j,Tag:I,Trash2:w,X:v},table:{type:{summary:"LucideIcon"}}},placeholder:{description:"Placeholder text displayed when the input is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the input and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{description:"Makes the input read-only. The value is focusable and selectable but not editable, and is still submitted with the form. Renders with a warm-tinted readOnly surface to differentiate from disabled.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},type:{description:"HTML input type.",control:"select",options:["text","email","password","number","search","tel","url","date","datetime-local"],table:{type:{summary:"string"},defaultValue:{summary:"text"}}}}},a={name:"Playground",args:{placeholder:"Enter text...",size:"md"}},t={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"})]})},s={name:"Types",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{type:"text",placeholder:"Text"}),e.jsx(r,{type:"email",placeholder:"Email"}),e.jsx(r,{type:"password",placeholder:"Password"}),e.jsx(r,{type:"number",placeholder:"Number"}),e.jsx(r,{type:"search",placeholder:"Search"}),e.jsx(r,{type:"date"}),e.jsx(r,{type:"datetime-local"})]})},l={name:"With Text",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{textLeft:"https://",placeholder:"example.com"}),e.jsx(r,{textRight:".com",placeholder:"domain"}),e.jsx(r,{textLeft:"$",textRight:"USD",placeholder:"0.00"})]})},o={name:"With Icons",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{iconLeft:h,placeholder:"Search..."}),e.jsx(r,{iconLeft:x,placeholder:"Email"}),e.jsx(r,{iconRight:g,type:"password",placeholder:"Password"})]})},d={name:"Text Priority over Icon",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{textLeft:"https://",iconLeft:y,placeholder:"textLeft wins over iconLeft"}),e.jsx(r,{textRight:"@gmail.com",iconRight:x,placeholder:"textRight wins over iconRight"})]})},i={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{isError:!0,placeholder:"Error state"}),e.jsx(r,{isError:!0,defaultValue:"Invalid input"}),e.jsx(r,{isError:!0,iconLeft:b,placeholder:"With icon"})]})},n={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{disabled:!0,placeholder:"Disabled"}),e.jsx(r,{disabled:!0,defaultValue:"Disabled with value"})]})},c={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{disabled:!0,isError:!0,placeholder:"Disabled + error"}),e.jsx(r,{disabled:!0,isError:!0,defaultValue:"Disabled + error"})]})},p={name:"ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{readOnly:!0,defaultValue:"Read-only value"}),e.jsx(r,{readOnly:!0,iconLeft:f,defaultValue:"With icon"}),e.jsx(r,{readOnly:!0,textLeft:"ID",defaultValue:"usr_123456"})]})},m={name:"Disabled vs ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 w-72",children:[e.jsx("div",{className:"text-xs text-foreground-muted",children:"Default"}),e.jsx(r,{defaultValue:"Editable value"}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"ReadOnly (informational)"}),e.jsx(r,{readOnly:!0,defaultValue:"Read-only value"}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"Disabled (cannot interact)"}),e.jsx(r,{disabled:!0,defaultValue:"Disabled value"})]})},u={name:"ReadOnly with error",render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-72",children:e.jsx(r,{readOnly:!0,isError:!0,defaultValue:"ReadOnly + error"})})};var W,P,z;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md'
  }
}`,...(z=(P=a.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var A,M,G;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
}`,...(G=(M=t.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var _,X,U;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(X=s.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};var $,H,q;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'With Text',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" placeholder="example.com" />
      <Input textRight=".com" placeholder="domain" />
      <Input textLeft="$" textRight="USD" placeholder="0.00" />
    </div>
}`,...(q=(H=l.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var B,F,J;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'With Icons',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input iconLeft={Search} placeholder="Search..." />
      <Input iconLeft={Mail} placeholder="Email" />
      <Input iconRight={Eye} type="password" placeholder="Password" />
    </div>
}`,...(J=(F=o.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,Q,Y;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Text Priority over Icon',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" iconLeft={Globe} placeholder="textLeft wins over iconLeft" />
      <Input textRight="@gmail.com" iconRight={Mail} placeholder="textRight wins over iconRight" />
    </div>
}`,...(Y=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,re;i.parameters={...i.parameters,docs:{...(Z=i.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input isError placeholder="Error state" />
      <Input isError defaultValue="Invalid input" />
      <Input isError iconLeft={CircleAlert} placeholder="With icon" />
    </div>
}`,...(re=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,se;n.parameters={...n.parameters,docs:{...(ae=n.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled placeholder="Disabled" />
      <Input disabled defaultValue="Disabled with value" />
    </div>
}`,...(se=(te=n.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,oe,de;c.parameters={...c.parameters,docs:{...(le=c.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled isError placeholder="Disabled + error" />
      <Input disabled isError defaultValue="Disabled + error" />
    </div>
}`,...(de=(oe=c.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ie,ne,ce;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'ReadOnly',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input readOnly defaultValue="Read-only value" />
      <Input readOnly iconLeft={Lock} defaultValue="With icon" />
      <Input readOnly textLeft="ID" defaultValue="usr_123456" />
    </div>
}`,...(ce=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var pe,me,ue;m.parameters={...m.parameters,docs:{...(pe=m.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Disabled vs ReadOnly',
  render: () => <div className="flex flex-col gap-3 w-72">
      <div className="text-xs text-foreground-muted">Default</div>
      <Input defaultValue="Editable value" />
      <div className="text-xs text-foreground-muted mt-2">ReadOnly (informational)</div>
      <Input readOnly defaultValue="Read-only value" />
      <div className="text-xs text-foreground-muted mt-2">Disabled (cannot interact)</div>
      <Input disabled defaultValue="Disabled value" />
    </div>
}`,...(ue=(me=m.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var xe,he,fe;u.parameters={...u.parameters,docs:{...(xe=u.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'ReadOnly with error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input readOnly isError defaultValue="ReadOnly + error" />
    </div>
}`,...(fe=(he=u.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};const Ne=["Playground","Sizes","Types","WithText","WithIcons","TextOverridesIcon","ErrorState","Disabled","DisabledWithError","ReadOnly","DisabledVsReadOnly","ReadOnlyWithError"];export{n as Disabled,m as DisabledVsReadOnly,c as DisabledWithError,i as ErrorState,a as Playground,p as ReadOnly,u as ReadOnlyWithError,t as Sizes,d as TextOverridesIcon,s as Types,o as WithIcons,l as WithText,Ne as __namedExportsOrder,Oe as default};
