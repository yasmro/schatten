import{j as e}from"./iframe-B0AG0UWp.js";import{I as r}from"./Input-De2zTL4O.js";import{X as v}from"./x-ldPEN0Yd.js";import{T as w}from"./trash-2-DGQDq59A.js";import{T as I,S as j,a as L,L as h,G as f,C as R}from"./tag-DGpG0VOd.js";import{S,E as y,b as E,D,C as O,a as N,A as T}from"./star-LBdwpYkq.js";import{S as g}from"./search-Q7bTNTPU.js";import{P as V}from"./plus-p0D7mAMQ.js";import{M as x}from"./mail-D_GxUPi-.js";import{C as b}from"./circle-alert-DOVBel6K.js";import{C}from"./check-By122UuY.js";import{A as k}from"./arrow-right-6hRS2n49.js";import"./preload-helper-BYP2re__.js";import"./field-CA0hoLiR.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css              */import"./createLucideIcon-YIwsTe06.js";const Z={title:"Components/lv1/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the input.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the input in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},textLeft:{description:"Text displayed before the input. Takes priority over iconLeft.",control:"text",table:{type:{summary:"string"}}},textRight:{description:"Text displayed after the input. Takes priority over iconRight.",control:"text",table:{type:{summary:"string"}}},iconLeft:{description:"Lucide icon component rendered before the input. Ignored when textLeft is set. Import the icon from `lucide-react` and pass it directly (e.g. `iconLeft={Search}`).",control:"select",options:["ArrowLeft","ArrowRight","Check","ChevronLeft","ChevronRight","CircleAlert","Clock","Download","ExternalLink","Eye","Globe","Lock","Mail","Plus","Search","Send","Sparkles","Star","Tag","Trash2","X"],mapping:{ArrowLeft:T,ArrowRight:k,Check:C,ChevronLeft:N,ChevronRight:O,CircleAlert:b,Clock:R,Download:D,ExternalLink:E,Eye:y,Globe:f,Lock:h,Mail:x,Plus:V,Search:g,Send:L,Sparkles:j,Star:S,Tag:I,Trash2:w,X:v},table:{type:{summary:"LucideIcon"}}},iconRight:{description:"Lucide icon component rendered after the input. Ignored when textRight is set. Import the icon from `lucide-react` and pass it directly.",control:"select",options:["ArrowLeft","ArrowRight","Check","ChevronLeft","ChevronRight","CircleAlert","Clock","Download","ExternalLink","Eye","Globe","Lock","Mail","Plus","Search","Send","Sparkles","Star","Tag","Trash2","X"],mapping:{ArrowLeft:T,ArrowRight:k,Check:C,ChevronLeft:N,ChevronRight:O,CircleAlert:b,Clock:R,Download:D,ExternalLink:E,Eye:y,Globe:f,Lock:h,Mail:x,Plus:V,Search:g,Send:L,Sparkles:j,Star:S,Tag:I,Trash2:w,X:v},table:{type:{summary:"LucideIcon"}}},placeholder:{description:"Placeholder text displayed when the input is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the input and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{description:"Makes the input read-only. The value is focusable and selectable but not editable, and is still submitted with the form. Renders with a warm-tinted readOnly surface to differentiate from disabled.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},type:{description:"HTML input type.",control:"select",options:["text","email","password","number","search","tel","url","date","datetime-local"],table:{type:{summary:"string"},defaultValue:{summary:"text"}}}}},a={name:"Playground",args:{placeholder:"Enter text...",size:"md"}},t={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"})]})},s={name:"Types",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{type:"text",placeholder:"Text"}),e.jsx(r,{type:"email",placeholder:"Email"}),e.jsx(r,{type:"password",placeholder:"Password"}),e.jsx(r,{type:"number",placeholder:"Number"}),e.jsx(r,{type:"search",placeholder:"Search"}),e.jsx(r,{type:"date"}),e.jsx(r,{type:"datetime-local"})]})},l={name:"With Text",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{textLeft:"https://",placeholder:"example.com"}),e.jsx(r,{textRight:".com",placeholder:"domain"}),e.jsx(r,{textLeft:"$",textRight:"USD",placeholder:"0.00"})]})},o={name:"With Icons",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{iconLeft:g,placeholder:"Search..."}),e.jsx(r,{iconLeft:x,placeholder:"Email"}),e.jsx(r,{iconRight:y,type:"password",placeholder:"Password"})]})},i={name:"Text Priority over Icon",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{textLeft:"https://",iconLeft:f,placeholder:"textLeft wins over iconLeft"}),e.jsx(r,{textRight:"@gmail.com",iconRight:x,placeholder:"textRight wins over iconRight"})]})},d={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{isError:!0,placeholder:"Error state"}),e.jsx(r,{isError:!0,defaultValue:"Invalid input"}),e.jsx(r,{isError:!0,iconLeft:b,placeholder:"With icon"})]})},n={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{disabled:!0,placeholder:"Disabled"}),e.jsx(r,{disabled:!0,defaultValue:"Disabled with value"})]})},c={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{disabled:!0,isError:!0,placeholder:"Disabled + error"}),e.jsx(r,{disabled:!0,isError:!0,defaultValue:"Disabled + error"})]})},p={name:"ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(r,{readOnly:!0,defaultValue:"Read-only value"}),e.jsx(r,{readOnly:!0,iconLeft:h,defaultValue:"With icon"}),e.jsx(r,{readOnly:!0,textLeft:"ID",defaultValue:"usr_123456"})]})},m={name:"Disabled vs ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 w-72",children:[e.jsx("div",{className:"text-xs text-foreground-muted",children:"Default"}),e.jsx(r,{defaultValue:"Editable value"}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"ReadOnly (informational)"}),e.jsx(r,{readOnly:!0,defaultValue:"Read-only value"}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"Disabled (cannot interact)"}),e.jsx(r,{disabled:!0,defaultValue:"Disabled value"})]})},u={name:"ReadOnly with error",render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-72",children:e.jsx(r,{readOnly:!0,isError:!0,defaultValue:"ReadOnly + error"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Text',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" placeholder="example.com" />
      <Input textRight=".com" placeholder="domain" />
      <Input textLeft="$" textRight="USD" placeholder="0.00" />
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Icons',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input iconLeft={Search} placeholder="Search..." />
      <Input iconLeft={Mail} placeholder="Email" />
      <Input iconRight={Eye} type="password" placeholder="Password" />
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Text Priority over Icon',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" iconLeft={Globe} placeholder="textLeft wins over iconLeft" />
      <Input textRight="@gmail.com" iconRight={Mail} placeholder="textRight wins over iconRight" />
    </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input isError placeholder="Error state" />
      <Input isError defaultValue="Invalid input" />
      <Input isError iconLeft={CircleAlert} placeholder="With icon" />
    </div>
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled placeholder="Disabled" />
      <Input disabled defaultValue="Disabled with value" />
    </div>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled isError placeholder="Disabled + error" />
      <Input disabled isError defaultValue="Disabled + error" />
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input readOnly defaultValue="Read-only value" />
      <Input readOnly iconLeft={Lock} defaultValue="With icon" />
      <Input readOnly textLeft="ID" defaultValue="usr_123456" />
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Disabled vs ReadOnly',
  render: () => <div className="flex flex-col gap-3 w-72">
      <div className="text-xs text-foreground-muted">Default</div>
      <Input defaultValue="Editable value" />
      <div className="text-xs text-foreground-muted mt-2">ReadOnly (informational)</div>
      <Input readOnly defaultValue="Read-only value" />
      <div className="text-xs text-foreground-muted mt-2">Disabled (cannot interact)</div>
      <Input disabled defaultValue="Disabled value" />
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly with error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input readOnly isError defaultValue="ReadOnly + error" />
    </div>
}`,...u.parameters?.docs?.source}}};const ee=["Playground","Sizes","Types","WithText","WithIcons","TextOverridesIcon","ErrorState","Disabled","DisabledWithError","ReadOnly","DisabledVsReadOnly","ReadOnlyWithError"];export{n as Disabled,m as DisabledVsReadOnly,c as DisabledWithError,d as ErrorState,a as Playground,p as ReadOnly,u as ReadOnlyWithError,t as Sizes,i as TextOverridesIcon,s as Types,o as WithIcons,l as WithText,ee as __namedExportsOrder,Z as default};
