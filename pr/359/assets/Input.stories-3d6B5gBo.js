import{i as e}from"./preload-helper-ChaSUgV0.js";import{t}from"./iframe-DK9TY03R.js";import{A as n,C as r,D as i,I as a,L as o,M as s,S as c,T as l,_ as u,b as d,c as f,d as p,f as m,g as h,k as g,l as _,n as v,o as y,p as b,s as x,t as S,y as C}from"./lucide-react-DLEtKJ8w.js";import{n as w,t as T}from"./Input-CMbuWl7o.js";var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;e((()=>{S(),w(),E=t(),D={title:`Components/lv1/Input`,component:T,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{description:`Size of the input.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},isError:{description:`Displays the input in an error state with error border and ring.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},textLeft:{description:`Text displayed before the input. Takes priority over iconLeft.`,control:`text`,table:{type:{summary:`string`}}},textRight:{description:`Text displayed after the input. Takes priority over iconRight.`,control:`text`,table:{type:{summary:`string`}}},iconLeft:{description:"Lucide icon component rendered before the input. Ignored when textLeft is set. Import the icon from `lucide-react` and pass it directly (e.g. `iconLeft={Search}`).",control:`select`,options:[`ArrowLeft`,`ArrowRight`,`Check`,`ChevronLeft`,`ChevronRight`,`CircleAlert`,`Clock`,`Download`,`ExternalLink`,`Eye`,`Globe`,`Lock`,`Mail`,`Plus`,`Search`,`Send`,`Sparkles`,`Star`,`Tag`,`Trash2`,`X`],mapping:{ArrowLeft:o,ArrowRight:a,Check:s,ChevronLeft:n,ChevronRight:g,CircleAlert:i,Clock:l,Download:r,ExternalLink:c,Eye:d,Globe:C,Lock:u,Mail:h,Plus:b,Search:m,Send:p,Sparkles:_,Star:f,Tag:x,Trash2:y,X:v},table:{type:{summary:`LucideIcon`}}},iconRight:{description:"Lucide icon component rendered after the input. Ignored when textRight is set. Import the icon from `lucide-react` and pass it directly.",control:`select`,options:[`ArrowLeft`,`ArrowRight`,`Check`,`ChevronLeft`,`ChevronRight`,`CircleAlert`,`Clock`,`Download`,`ExternalLink`,`Eye`,`Globe`,`Lock`,`Mail`,`Plus`,`Search`,`Send`,`Sparkles`,`Star`,`Tag`,`Trash2`,`X`],mapping:{ArrowLeft:o,ArrowRight:a,Check:s,ChevronLeft:n,ChevronRight:g,CircleAlert:i,Clock:l,Download:r,ExternalLink:c,Eye:d,Globe:C,Lock:u,Mail:h,Plus:b,Search:m,Send:p,Sparkles:_,Star:f,Tag:x,Trash2:y,X:v},table:{type:{summary:`LucideIcon`}}},placeholder:{description:`Placeholder text displayed when the input is empty.`,control:`text`,table:{type:{summary:`string`}}},disabled:{description:`Disables the input and applies disabled styling.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`Makes the input read-only. The value is focusable and selectable but not editable, and is still submitted with the form. Renders with a warm-tinted readOnly surface to differentiate from disabled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},type:{description:`HTML input type.`,control:`select`,options:[`text`,`email`,`password`,`number`,`search`,`tel`,`url`,`date`,`datetime-local`],table:{type:{summary:`string`},defaultValue:{summary:`text`}}}}},O={name:`Playground`,args:{placeholder:`Enter text...`,size:`md`}},k={name:`Sizes`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,E.jsx)(T,{size:`sm`,placeholder:`Small`}),(0,E.jsx)(T,{size:`md`,placeholder:`Medium`}),(0,E.jsx)(T,{size:`lg`,placeholder:`Large`})]})},A={name:`Types`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,E.jsx)(T,{type:`text`,placeholder:`Text`}),(0,E.jsx)(T,{type:`email`,placeholder:`Email`}),(0,E.jsx)(T,{type:`password`,placeholder:`Password`}),(0,E.jsx)(T,{type:`number`,placeholder:`Number`}),(0,E.jsx)(T,{type:`search`,placeholder:`Search`}),(0,E.jsx)(T,{type:`date`}),(0,E.jsx)(T,{type:`datetime-local`})]})},j={name:`With Text`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 w-80`,children:[(0,E.jsx)(T,{textLeft:`https://`,placeholder:`example.com`}),(0,E.jsx)(T,{textRight:`.com`,placeholder:`domain`}),(0,E.jsx)(T,{textLeft:`$`,textRight:`USD`,placeholder:`0.00`})]})},M={name:`With Icons`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,E.jsx)(T,{iconLeft:m,placeholder:`Search...`}),(0,E.jsx)(T,{iconLeft:h,placeholder:`Email`}),(0,E.jsx)(T,{iconRight:d,type:`password`,placeholder:`Password`})]})},N={name:`Text Priority over Icon`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 w-80`,children:[(0,E.jsx)(T,{textLeft:`https://`,iconLeft:C,placeholder:`textLeft wins over iconLeft`}),(0,E.jsx)(T,{textRight:`@gmail.com`,iconRight:h,placeholder:`textRight wins over iconRight`})]})},P={name:`Error`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,E.jsx)(T,{isError:!0,placeholder:`Error state`}),(0,E.jsx)(T,{isError:!0,defaultValue:`Invalid input`}),(0,E.jsx)(T,{isError:!0,iconLeft:i,placeholder:`With icon`})]})},F={name:`Disabled`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,E.jsx)(T,{disabled:!0,placeholder:`Disabled`}),(0,E.jsx)(T,{disabled:!0,defaultValue:`Disabled with value`})]})},I={name:`Disabled with error`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,E.jsx)(T,{disabled:!0,isError:!0,placeholder:`Disabled + error`}),(0,E.jsx)(T,{disabled:!0,isError:!0,defaultValue:`Disabled + error`})]})},L={name:`ReadOnly`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,E.jsx)(T,{readOnly:!0,defaultValue:`Read-only value`}),(0,E.jsx)(T,{readOnly:!0,iconLeft:u,defaultValue:`With icon`}),(0,E.jsx)(T,{readOnly:!0,textLeft:`ID`,defaultValue:`usr_123456`})]})},R={name:`Disabled vs ReadOnly`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-3 w-72`,children:[(0,E.jsx)(`div`,{className:`text-xs text-foreground-muted`,children:`Default`}),(0,E.jsx)(T,{defaultValue:`Editable value`}),(0,E.jsx)(`div`,{className:`text-xs text-foreground-muted mt-2`,children:`ReadOnly (informational)`}),(0,E.jsx)(T,{readOnly:!0,defaultValue:`Read-only value`}),(0,E.jsx)(`div`,{className:`text-xs text-foreground-muted mt-2`,children:`Disabled (cannot interact)`}),(0,E.jsx)(T,{disabled:!0,defaultValue:`Disabled value`})]})},z={name:`ReadOnly with error`,render:()=>(0,E.jsx)(`div`,{className:`flex flex-col gap-4 w-72`,children:(0,E.jsx)(T,{readOnly:!0,isError:!0,defaultValue:`ReadOnly + error`})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'With Text',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" placeholder="example.com" />
      <Input textRight=".com" placeholder="domain" />
      <Input textLeft="$" textRight="USD" placeholder="0.00" />
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'With Icons',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input iconLeft={Search} placeholder="Search..." />
      <Input iconLeft={Mail} placeholder="Email" />
      <Input iconRight={Eye} type="password" placeholder="Password" />
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Text Priority over Icon',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" iconLeft={Globe} placeholder="textLeft wins over iconLeft" />
      <Input textRight="@gmail.com" iconRight={Mail} placeholder="textRight wins over iconRight" />
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input isError placeholder="Error state" />
      <Input isError defaultValue="Invalid input" />
      <Input isError iconLeft={CircleAlert} placeholder="With icon" />
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled placeholder="Disabled" />
      <Input disabled defaultValue="Disabled with value" />
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled isError placeholder="Disabled + error" />
      <Input disabled isError defaultValue="Disabled + error" />
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input readOnly defaultValue="Read-only value" />
      <Input readOnly iconLeft={Lock} defaultValue="With icon" />
      <Input readOnly textLeft="ID" defaultValue="usr_123456" />
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Disabled vs ReadOnly',
  render: () => <div className="flex flex-col gap-3 w-72">
      <div className="text-xs text-foreground-muted">Default</div>
      <Input defaultValue="Editable value" />
      <div className="text-xs text-foreground-muted mt-2">ReadOnly (informational)</div>
      <Input readOnly defaultValue="Read-only value" />
      <div className="text-xs text-foreground-muted mt-2">Disabled (cannot interact)</div>
      <Input disabled defaultValue="Disabled value" />
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly with error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input readOnly isError defaultValue="ReadOnly + error" />
    </div>
}`,...z.parameters?.docs?.source}}},B=[`Playground`,`Sizes`,`Types`,`WithText`,`WithIcons`,`TextOverridesIcon`,`ErrorState`,`Disabled`,`DisabledWithError`,`ReadOnly`,`DisabledVsReadOnly`,`ReadOnlyWithError`]}))();export{F as Disabled,R as DisabledVsReadOnly,I as DisabledWithError,P as ErrorState,O as Playground,L as ReadOnly,z as ReadOnlyWithError,k as Sizes,N as TextOverridesIcon,A as Types,M as WithIcons,j as WithText,B as __namedExportsOrder,D as default};