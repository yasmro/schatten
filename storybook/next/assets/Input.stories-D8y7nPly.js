import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as ee}from"./iframe-Y0FpRvZB.js";import{a as t,c as te,d as n,f as r,i as ne,l as i,n as a,o,r as s,s as c,t as l,u}from"./star-CwoxWL15.js";import{n as d,t as f}from"./arrow-right-CQ66PyCk.js";import{n as re,t as p}from"./check-wnJ2igQD.js";import{n as m,t as h}from"./chevron-right-wyIAN_Gn.js";import{n as ie,t as g}from"./circle-alert-99LHI71d.js";import{a as _,c as v,i as y,l as b,n as ae,o as x,r as S,s as C,t as w,u as T}from"./tag-B0xF_Gh6.js";import{n as E,t as D}from"./lock-CYjmjZ7e.js";import{n as O,t as k}from"./mail-pGwSqAvp.js";import{n as oe,t as A}from"./plus-dx2bFa_j.js";import{n as se,t as j}from"./search-FaZdKQ81.js";import{n as M,t as N}from"./trash-2-CwKBrX7i.js";import{n as P,t as F}from"./x-C39cCJSK.js";import{n as I,t as L}from"./Input-BDebRjkM.js";var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{r(),d(),re(),u(),m(),ie(),T(),te(),o(),ne(),v(),E(),O(),oe(),se(),x(),y(),a(),ae(),M(),P(),I(),R=ee(),z={title:`Components/lv1/Input`,component:L,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{description:`Size of the input.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},isError:{description:`Displays the input in an error state with error border and ring.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},textLeft:{description:`Text displayed before the input. Takes priority over iconLeft.`,control:`text`,table:{type:{summary:`string`}}},textRight:{description:`Text displayed after the input. Takes priority over iconRight.`,control:`text`,table:{type:{summary:`string`}}},iconLeft:{description:"Lucide icon component rendered before the input. Ignored when textLeft is set. Import the icon from `lucide-react` and pass it directly (e.g. `iconLeft={Search}`).",control:`select`,options:[`ArrowLeft`,`ArrowRight`,`Check`,`ChevronLeft`,`ChevronRight`,`CircleAlert`,`Clock`,`Download`,`ExternalLink`,`Eye`,`Globe`,`Lock`,`Mail`,`Plus`,`Search`,`Send`,`Sparkles`,`Star`,`Tag`,`Trash2`,`X`],mapping:{ArrowLeft:n,ArrowRight:f,Check:p,ChevronLeft:i,ChevronRight:h,CircleAlert:g,Clock:b,Download:c,ExternalLink:t,Eye:s,Globe:C,Lock:D,Mail:k,Plus:A,Search:j,Send:_,Sparkles:S,Star:l,Tag:w,Trash2:N,X:F},table:{type:{summary:`LucideIcon`}}},iconRight:{description:"Lucide icon component rendered after the input. Ignored when textRight is set. Import the icon from `lucide-react` and pass it directly.",control:`select`,options:[`ArrowLeft`,`ArrowRight`,`Check`,`ChevronLeft`,`ChevronRight`,`CircleAlert`,`Clock`,`Download`,`ExternalLink`,`Eye`,`Globe`,`Lock`,`Mail`,`Plus`,`Search`,`Send`,`Sparkles`,`Star`,`Tag`,`Trash2`,`X`],mapping:{ArrowLeft:n,ArrowRight:f,Check:p,ChevronLeft:i,ChevronRight:h,CircleAlert:g,Clock:b,Download:c,ExternalLink:t,Eye:s,Globe:C,Lock:D,Mail:k,Plus:A,Search:j,Send:_,Sparkles:S,Star:l,Tag:w,Trash2:N,X:F},table:{type:{summary:`LucideIcon`}}},placeholder:{description:`Placeholder text displayed when the input is empty.`,control:`text`,table:{type:{summary:`string`}}},disabled:{description:`Disables the input and applies disabled styling.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`Makes the input read-only. The value is focusable and selectable but not editable, and is still submitted with the form. Renders with a warm-tinted readOnly surface to differentiate from disabled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},type:{description:`HTML input type.`,control:`select`,options:[`text`,`email`,`password`,`number`,`search`,`tel`,`url`,`date`,`datetime-local`],table:{type:{summary:`string`},defaultValue:{summary:`text`}}}}},B={name:`Playground`,args:{placeholder:`Enter text...`,size:`md`}},V={name:`Sizes`,render:()=>(0,R.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,R.jsx)(L,{size:`sm`,placeholder:`Small`}),(0,R.jsx)(L,{size:`md`,placeholder:`Medium`}),(0,R.jsx)(L,{size:`lg`,placeholder:`Large`})]})},H={name:`Types`,render:()=>(0,R.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,R.jsx)(L,{type:`text`,placeholder:`Text`}),(0,R.jsx)(L,{type:`email`,placeholder:`Email`}),(0,R.jsx)(L,{type:`password`,placeholder:`Password`}),(0,R.jsx)(L,{type:`number`,placeholder:`Number`}),(0,R.jsx)(L,{type:`search`,placeholder:`Search`}),(0,R.jsx)(L,{type:`date`,"aria-label":`Date`}),(0,R.jsx)(L,{type:`datetime-local`,"aria-label":`Date and time`})]})},U={name:`With Text`,render:()=>(0,R.jsxs)(`div`,{className:`flex flex-col gap-4 w-80`,children:[(0,R.jsx)(L,{textLeft:`https://`,placeholder:`example.com`}),(0,R.jsx)(L,{textRight:`.com`,placeholder:`domain`}),(0,R.jsx)(L,{textLeft:`$`,textRight:`USD`,placeholder:`0.00`})]})},W={name:`With Icons`,render:()=>(0,R.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,R.jsx)(L,{iconLeft:j,placeholder:`Search...`}),(0,R.jsx)(L,{iconLeft:k,placeholder:`Email`}),(0,R.jsx)(L,{iconRight:s,type:`password`,placeholder:`Password`})]})},G={name:`Text Priority over Icon`,render:()=>(0,R.jsxs)(`div`,{className:`flex flex-col gap-4 w-80`,children:[(0,R.jsx)(L,{textLeft:`https://`,iconLeft:C,placeholder:`textLeft wins over iconLeft`}),(0,R.jsx)(L,{textRight:`@gmail.com`,iconRight:k,placeholder:`textRight wins over iconRight`})]})},K={name:`Error`,render:()=>(0,R.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,R.jsx)(L,{isError:!0,placeholder:`Error state`}),(0,R.jsx)(L,{isError:!0,defaultValue:`Invalid input`,"aria-label":`Invalid input`}),(0,R.jsx)(L,{isError:!0,iconLeft:g,placeholder:`With icon`})]})},q={name:`Disabled`,render:()=>(0,R.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,R.jsx)(L,{disabled:!0,placeholder:`Disabled`}),(0,R.jsx)(L,{disabled:!0,defaultValue:`Disabled with value`,"aria-label":`Disabled with value`}),(0,R.jsx)(L,{disabled:!0,iconLeft:j,iconRight:s,defaultValue:`Disabled with icons`,"aria-label":`Disabled with icons`}),(0,R.jsx)(L,{disabled:!0,textLeft:`https://`,textRight:`.com`,defaultValue:`Disabled with text`,"aria-label":`Disabled with text affixes`})]})},J={name:`Disabled with error`,render:()=>(0,R.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,R.jsx)(L,{disabled:!0,isError:!0,placeholder:`Disabled + error`}),(0,R.jsx)(L,{disabled:!0,isError:!0,defaultValue:`Disabled + error`,"aria-label":`Disabled with error`})]})},Y={name:`ReadOnly`,render:()=>(0,R.jsxs)(`div`,{className:`flex flex-col gap-4 w-72`,children:[(0,R.jsx)(L,{readOnly:!0,defaultValue:`Read-only value`,"aria-label":`Read-only value`}),(0,R.jsx)(L,{readOnly:!0,iconLeft:D,defaultValue:`With icon`,"aria-label":`With icon`}),(0,R.jsx)(L,{readOnly:!0,textLeft:`ID`,defaultValue:`usr_123456`,"aria-label":`User ID`})]})},X={name:`Disabled vs ReadOnly`,render:()=>(0,R.jsxs)(`div`,{className:`flex flex-col gap-3 w-72`,children:[(0,R.jsx)(`div`,{className:`text-xs text-foreground-muted`,children:`Default`}),(0,R.jsx)(L,{defaultValue:`Editable value`,"aria-label":`Editable value`}),(0,R.jsx)(`div`,{className:`text-xs text-foreground-muted mt-2`,children:`ReadOnly (informational)`}),(0,R.jsx)(L,{readOnly:!0,defaultValue:`Read-only value`,"aria-label":`Read-only value`}),(0,R.jsx)(`div`,{className:`text-xs text-foreground-muted mt-2`,children:`Disabled (cannot interact)`}),(0,R.jsx)(L,{disabled:!0,defaultValue:`Disabled value`,"aria-label":`Disabled value`})]})},Z={name:`ReadOnly with error`,render:()=>(0,R.jsx)(`div`,{className:`flex flex-col gap-4 w-72`,children:(0,R.jsx)(L,{readOnly:!0,isError:!0,defaultValue:`ReadOnly + error`,"aria-label":`ReadOnly with error`})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    placeholder: 'Enter text...',
    size: 'md'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'With Text',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" placeholder="example.com" />
      <Input textRight=".com" placeholder="domain" />
      <Input textLeft="$" textRight="USD" placeholder="0.00" />
    </div>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'With Icons',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input iconLeft={Search} placeholder="Search..." />
      <Input iconLeft={Mail} placeholder="Email" />
      <Input iconRight={Eye} type="password" placeholder="Password" />
    </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Text Priority over Icon',
  render: () => <div className="flex flex-col gap-4 w-80">
      <Input textLeft="https://" iconLeft={Globe} placeholder="textLeft wins over iconLeft" />
      <Input textRight="@gmail.com" iconRight={Mail} placeholder="textRight wins over iconRight" />
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input isError placeholder="Error state" />
      <Input isError defaultValue="Invalid input" aria-label="Invalid input" />
      <Input isError iconLeft={CircleAlert} placeholder="With icon" />
    </div>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled placeholder="Disabled" />
      <Input disabled defaultValue="Disabled with value" aria-label="Disabled with value" />
      {/* Adornments must recede with the block — an icon / text affix that
          kept its resting muted tier would read stronger than the disabled
          value it decorates. */}
      <Input disabled iconLeft={Search} iconRight={Eye} defaultValue="Disabled with icons" aria-label="Disabled with icons" />
      <Input disabled textLeft="https://" textRight=".com" defaultValue="Disabled with text" aria-label="Disabled with text affixes" />
    </div>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Disabled with error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input disabled isError placeholder="Disabled + error" />
      <Input disabled isError defaultValue="Disabled + error" aria-label="Disabled with error" />
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input readOnly defaultValue="Read-only value" aria-label="Read-only value" />
      <Input readOnly iconLeft={Lock} defaultValue="With icon" aria-label="With icon" />
      <Input readOnly textLeft="ID" defaultValue="usr_123456" aria-label="User ID" />
    </div>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Disabled vs ReadOnly',
  render: () => <div className="flex flex-col gap-3 w-72">
      <div className="text-xs text-foreground-muted">Default</div>
      <Input defaultValue="Editable value" aria-label="Editable value" />
      <div className="text-xs text-foreground-muted mt-2">ReadOnly (informational)</div>
      <Input readOnly defaultValue="Read-only value" aria-label="Read-only value" />
      <div className="text-xs text-foreground-muted mt-2">Disabled (cannot interact)</div>
      <Input disabled defaultValue="Disabled value" aria-label="Disabled value" />
    </div>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'ReadOnly with error',
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input readOnly isError defaultValue="ReadOnly + error" aria-label="ReadOnly with error" />
    </div>
}`,...Z.parameters?.docs?.source}}},Q=[`Playground`,`Sizes`,`Types`,`WithText`,`WithIcons`,`TextOverridesIcon`,`ErrorState`,`Disabled`,`DisabledWithError`,`ReadOnly`,`DisabledVsReadOnly`,`ReadOnlyWithError`]})))()}$();export{q as Disabled,X as DisabledVsReadOnly,J as DisabledWithError,K as ErrorState,B as Playground,Y as ReadOnly,Z as ReadOnlyWithError,V as Sizes,G as TextOverridesIcon,H as Types,W as WithIcons,U as WithText,Q as __namedExportsOrder,z as default};