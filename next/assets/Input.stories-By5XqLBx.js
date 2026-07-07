import{j as e}from"./iframe-CdBgxVjk.js";import{I as a}from"./Input-Bb3QjrQk.js";import{X as v}from"./x-CZpKVlQd.js";import{T as w}from"./trash-2-Dtl3Ld4F.js";import{T as I,S as R,a as j,G as x,C as D}from"./tag-BHqRrdkz.js";import{S as L,E as f,a as S,D as E,C as O,A as N}from"./star-jb1bOz4n.js";import{S as y}from"./search-CwCaQ_8o.js";import{P as T}from"./plus-C7CBqraX.js";import{M as h}from"./mail-DlPesb6L.js";import{L as b}from"./lock-mNHucEFn.js";import{C as g}from"./circle-alert-DJFlTw27.js";import{C as V}from"./chevron-right-Cl0FDb99.js";import{C}from"./check-mO_kLCMg.js";import{A as k}from"./arrow-right-DMP3d1bC.js";import"./preload-helper-CrztxVc4.js";import"./field-H5Ua9umf.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css              */import"./createLucideIcon-Cmo7dyAr.js";const ae={title:"Components/lv1/Input",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the input.",control:"select",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},isError:{description:"Displays the input in an error state with error border and ring.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},textLeft:{description:"Text displayed before the input. Takes priority over iconLeft.",control:"text",table:{type:{summary:"string"}}},textRight:{description:"Text displayed after the input. Takes priority over iconRight.",control:"text",table:{type:{summary:"string"}}},iconLeft:{description:"Lucide icon component rendered before the input. Ignored when textLeft is set. Import the icon from `lucide-react` and pass it directly (e.g. `iconLeft={Search}`).",control:"select",options:["ArrowLeft","ArrowRight","Check","ChevronLeft","ChevronRight","CircleAlert","Clock","Download","ExternalLink","Eye","Globe","Lock","Mail","Plus","Search","Send","Sparkles","Star","Tag","Trash2","X"],mapping:{ArrowLeft:N,ArrowRight:k,Check:C,ChevronLeft:O,ChevronRight:V,CircleAlert:g,Clock:D,Download:E,ExternalLink:S,Eye:f,Globe:x,Lock:b,Mail:h,Plus:T,Search:y,Send:j,Sparkles:R,Star:L,Tag:I,Trash2:w,X:v},table:{type:{summary:"LucideIcon"}}},iconRight:{description:"Lucide icon component rendered after the input. Ignored when textRight is set. Import the icon from `lucide-react` and pass it directly.",control:"select",options:["ArrowLeft","ArrowRight","Check","ChevronLeft","ChevronRight","CircleAlert","Clock","Download","ExternalLink","Eye","Globe","Lock","Mail","Plus","Search","Send","Sparkles","Star","Tag","Trash2","X"],mapping:{ArrowLeft:N,ArrowRight:k,Check:C,ChevronLeft:O,ChevronRight:V,CircleAlert:g,Clock:D,Download:E,ExternalLink:S,Eye:f,Globe:x,Lock:b,Mail:h,Plus:T,Search:y,Send:j,Sparkles:R,Star:L,Tag:I,Trash2:w,X:v},table:{type:{summary:"LucideIcon"}}},placeholder:{description:"Placeholder text displayed when the input is empty.",control:"text",table:{type:{summary:"string"}}},disabled:{description:"Disables the input and applies disabled styling.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{description:"Makes the input read-only. The value is focusable and selectable but not editable, and is still submitted with the form. Renders with a warm-tinted readOnly surface to differentiate from disabled.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},type:{description:"HTML input type.",control:"select",options:["text","email","password","number","search","tel","url","date","datetime-local"],table:{type:{summary:"string"},defaultValue:{summary:"text"}}}}},r={name:"Playground",args:{placeholder:"Enter text...",size:"md"}},t={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(a,{size:"sm",placeholder:"Small"}),e.jsx(a,{size:"md",placeholder:"Medium"}),e.jsx(a,{size:"lg",placeholder:"Large"})]})},l={name:"Types",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(a,{type:"text",placeholder:"Text"}),e.jsx(a,{type:"email",placeholder:"Email"}),e.jsx(a,{type:"password",placeholder:"Password"}),e.jsx(a,{type:"number",placeholder:"Number"}),e.jsx(a,{type:"search",placeholder:"Search"}),e.jsx(a,{type:"date","aria-label":"Date"}),e.jsx(a,{type:"datetime-local","aria-label":"Date and time"})]})},s={name:"With Text",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{textLeft:"https://",placeholder:"example.com"}),e.jsx(a,{textRight:".com",placeholder:"domain"}),e.jsx(a,{textLeft:"$",textRight:"USD",placeholder:"0.00"})]})},o={name:"With Icons",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(a,{iconLeft:y,placeholder:"Search..."}),e.jsx(a,{iconLeft:h,placeholder:"Email"}),e.jsx(a,{iconRight:f,type:"password",placeholder:"Password"})]})},i={name:"Text Priority over Icon",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{textLeft:"https://",iconLeft:x,placeholder:"textLeft wins over iconLeft"}),e.jsx(a,{textRight:"@gmail.com",iconRight:h,placeholder:"textRight wins over iconRight"})]})},d={name:"Error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(a,{isError:!0,placeholder:"Error state"}),e.jsx(a,{isError:!0,defaultValue:"Invalid input","aria-label":"Invalid input"}),e.jsx(a,{isError:!0,iconLeft:g,placeholder:"With icon"})]})},n={name:"Disabled",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(a,{disabled:!0,placeholder:"Disabled"}),e.jsx(a,{disabled:!0,defaultValue:"Disabled with value","aria-label":"Disabled with value"})]})},c={name:"Disabled with error",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(a,{disabled:!0,isError:!0,placeholder:"Disabled + error"}),e.jsx(a,{disabled:!0,isError:!0,defaultValue:"Disabled + error","aria-label":"Disabled with error"})]})},p={name:"ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(a,{readOnly:!0,defaultValue:"Read-only value","aria-label":"Read-only value"}),e.jsx(a,{readOnly:!0,iconLeft:b,defaultValue:"With icon","aria-label":"With icon"}),e.jsx(a,{readOnly:!0,textLeft:"ID",defaultValue:"usr_123456","aria-label":"User ID"})]})},m={name:"Disabled vs ReadOnly",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 w-72",children:[e.jsx("div",{className:"text-xs text-foreground-muted",children:"Default"}),e.jsx(a,{defaultValue:"Editable value","aria-label":"Editable value"}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"ReadOnly (informational)"}),e.jsx(a,{readOnly:!0,defaultValue:"Read-only value","aria-label":"Read-only value"}),e.jsx("div",{className:"text-xs text-foreground-muted mt-2",children:"Disabled (cannot interact)"}),e.jsx(a,{disabled:!0,defaultValue:"Disabled value","aria-label":"Disabled value"})]})},u={name:"ReadOnly with error",render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-72",children:e.jsx(a,{readOnly:!0,isError:!0,defaultValue:"ReadOnly + error","aria-label":"ReadOnly with error"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Types',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input type="text" placeholder="Text" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="search" placeholder="Search" />
      {/* date/datetime-local don't support placeholder, and value-only inputs
       * have no accessible name — these stories carry aria-label so the axe
       * \`label\` rule passes without changing a pixel (#345). */}
      <Input type="date" aria-label="Date" />
      <Input type="datetime-local" aria-label="Date and time" />
    </div>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Text',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" placeholder="example.com" />
      <Input textRight=".com" placeholder="domain" />
      <Input textLeft="$" textRight="USD" placeholder="0.00" />
    </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      <Input isError defaultValue="Invalid input" aria-label="Invalid input" />
      <Input isError iconLeft={CircleAlert} placeholder="With icon" />
    </div>
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled placeholder="Disabled" />
      <Input disabled defaultValue="Disabled with value" aria-label="Disabled with value" />
    </div>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled isError placeholder="Disabled + error" />
      <Input disabled isError defaultValue="Disabled + error" aria-label="Disabled with error" />
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input readOnly defaultValue="Read-only value" aria-label="Read-only value" />
      <Input readOnly iconLeft={Lock} defaultValue="With icon" aria-label="With icon" />
      <Input readOnly textLeft="ID" defaultValue="usr_123456" aria-label="User ID" />
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Disabled vs ReadOnly',
  render: () => <div className="flex flex-col gap-3 w-72">
      <div className="text-xs text-foreground-muted">Default</div>
      <Input defaultValue="Editable value" aria-label="Editable value" />
      <div className="text-xs text-foreground-muted mt-2">ReadOnly (informational)</div>
      <Input readOnly defaultValue="Read-only value" aria-label="Read-only value" />
      <div className="text-xs text-foreground-muted mt-2">Disabled (cannot interact)</div>
      <Input disabled defaultValue="Disabled value" aria-label="Disabled value" />
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly with error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input readOnly isError defaultValue="ReadOnly + error" aria-label="ReadOnly with error" />
    </div>
}`,...u.parameters?.docs?.source}}};const re=["Playground","Sizes","Types","WithText","WithIcons","TextOverridesIcon","ErrorState","Disabled","DisabledWithError","ReadOnly","DisabledVsReadOnly","ReadOnlyWithError"];export{n as Disabled,m as DisabledVsReadOnly,c as DisabledWithError,d as ErrorState,r as Playground,p as ReadOnly,u as ReadOnlyWithError,t as Sizes,i as TextOverridesIcon,l as Types,o as WithIcons,s as WithText,re as __namedExportsOrder,ae as default};
