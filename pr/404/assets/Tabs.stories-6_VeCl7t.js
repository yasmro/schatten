import{r as m,j as e}from"./iframe-XYuRiXRV.js";import{u as B,a as X,P as j,b as Y,R as J,I as Q,c as P,d as Z,e as A,f as ee}from"./index-D8fDDa-9.js";import{m as ae}from"./merge-refs-j8gEik9F.js";import{a as N}from"./utils-DclmTqRz.js";import{U as te}from"./user-s-SJ9qwR.js";import{L as se}from"./lock-D-YjJsEU.js";import{c as re}from"./createLucideIcon-DDxsnHnV.js";import"./preload-helper-DEYMk7Xz.js";import"./index-BIhQCUWH.js";import"./index-DU9epajf.js";const ne=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],oe=re("users",ne);var I="Tabs",[ie]=ee(I,[A]),R=A(),[ce,L]=ie(I),k=m.forwardRef((a,t)=>{const{__scopeTabs:i,value:r,onValueChange:d,defaultValue:s,orientation:c="horizontal",dir:p,activationMode:g="automatic",...v}=a,l=B(p),[u,T]=X({prop:r,onChange:d,defaultProp:s??"",caller:I});return e.jsx(ce,{scope:i,baseId:Y(),value:u,onValueChange:T,orientation:c,dir:l,activationMode:g,children:e.jsx(j.div,{dir:l,"data-orientation":c,...v,ref:t})})});k.displayName=I;var S="TabsList",D=m.forwardRef((a,t)=>{const{__scopeTabs:i,loop:r=!0,...d}=a,s=L(S,i),c=R(i);return e.jsx(J,{asChild:!0,...c,orientation:s.orientation,dir:s.dir,loop:r,children:e.jsx(j.div,{role:"tablist","aria-orientation":s.orientation,...d,ref:t})})});D.displayName=S;var E="TabsTrigger",z=m.forwardRef((a,t)=>{const{__scopeTabs:i,value:r,disabled:d=!1,...s}=a,c=L(E,i),p=R(i),g=q(c.baseId,r),v=U(c.baseId,r),l=r===c.value;return e.jsx(Q,{asChild:!0,...p,focusable:!d,active:l,children:e.jsx(j.button,{type:"button",role:"tab","aria-selected":l,"aria-controls":v,"data-state":l?"active":"inactive","data-disabled":d?"":void 0,disabled:d,id:g,...s,ref:t,onMouseDown:P(a.onMouseDown,u=>{!d&&u.button===0&&u.ctrlKey===!1?c.onValueChange(r):u.preventDefault()}),onKeyDown:P(a.onKeyDown,u=>{[" ","Enter"].includes(u.key)&&c.onValueChange(r)}),onFocus:P(a.onFocus,()=>{const u=c.activationMode!=="manual";!l&&!d&&u&&c.onValueChange(r)})})})});z.displayName=E;var F="TabsContent",$=m.forwardRef((a,t)=>{const{__scopeTabs:i,value:r,forceMount:d,children:s,...c}=a,p=L(F,i),g=q(p.baseId,r),v=U(p.baseId,r),l=r===p.value,u=m.useRef(l);return m.useEffect(()=>{const T=requestAnimationFrame(()=>u.current=!1);return()=>cancelAnimationFrame(T)},[]),e.jsx(Z,{present:d||l,children:({present:T})=>e.jsx(j.div,{"data-state":l?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":g,hidden:!T,id:v,tabIndex:0,...c,ref:t,style:{...a.style,animationDuration:u.current?"0s":void 0},children:T&&s})})});$.displayName=F;function q(a,t){return`${a}-trigger-${t}`}function U(a,t){return`${a}-content-${t}`}var O=k,W=D,G=z,H=$;const le=typeof window<"u"?m.useLayoutEffect:m.useEffect,b=m.forwardRef(({className:a,...t},i)=>e.jsx(O,{ref:i,className:N("st-tabs",a),...t}));b.displayName=O.displayName;const h=m.forwardRef(({className:a,children:t,...i},r)=>{const d=m.useRef(null),[s,c]=m.useState(null),[p,g]=m.useState(!1);le(()=>{const l=d.current;if(!l)return;const u=()=>{const f=l.querySelector('[role="tab"][data-state="active"]');if(!(f instanceof HTMLElement)){c(null);return}const K=l.getAttribute("data-orientation")==="vertical";c(K?{vertical:!0,offset:f.offsetTop,size:f.offsetHeight}:{vertical:!1,offset:f.offsetLeft,size:f.offsetWidth})};u();const T=requestAnimationFrame(()=>g(!0)),M=new MutationObserver(u);M.observe(l,{attributes:!0,attributeFilter:["data-state","data-orientation"],subtree:!0});const V=new ResizeObserver(u);return V.observe(l),()=>{cancelAnimationFrame(T),M.disconnect(),V.disconnect()}},[]);const v=s?{opacity:1,transition:p?void 0:"none",...s.vertical?{transform:`translateY(${s.offset}px)`,height:`${s.size}px`}:{transform:`translateX(${s.offset}px)`,width:`${s.size}px`}}:{opacity:0};return e.jsxs(W,{ref:ae(r,d),className:N("st-tabs__list",a),...i,children:[t,e.jsx("span",{className:"st-tabs__indicator","aria-hidden":"true",style:v})]})});h.displayName=W.displayName;const n=m.forwardRef(({className:a,icon:t,children:i,...r},d)=>{const s=t??null;return e.jsxs(G,{ref:d,className:N("st-tabs__trigger",a),...r,children:[s&&e.jsx(s,{className:"st-tabs__trigger-icon","aria-hidden":"true"}),i]})});n.displayName=G.displayName;const o=m.forwardRef(({className:a,...t},i)=>e.jsx(H,{ref:i,className:N("st-tabs__content",a),...t}));o.displayName=H.displayName;try{b.displayName="Tabs",b.__docgenInfo={description:"",displayName:"Tabs",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Tabs/Tabs.tsx",methods:[],props:{orientation:{defaultValue:{value:"'horizontal'"},declarations:[{fileName:"schatten/src/components/lv1/Tabs/Tabs.tsx",name:"TabsProps"}],description:"Orientation of the tabs. Controls arrow-key direction (Left/Right for\nhorizontal, Up/Down for vertical) and the list layout. Radix mirrors the\nvalue onto a `data-orientation` attribute that the `.st-tabs__*` rules\nread.",name:"orientation",parent:{fileName:"schatten/src/components/lv1/Tabs/Tabs.tsx",name:"TabsProps"},required:!1,tags:{default:"'horizontal'"},type:{name:"enum",raw:'"horizontal" | "vertical"',value:[{value:'"horizontal"'},{value:'"vertical"'}]}},activationMode:{defaultValue:{value:"'automatic'"},declarations:[{fileName:"schatten/src/components/lv1/Tabs/Tabs.tsx",name:"TabsProps"}],description:"Whether a tab activates automatically on focus, or only after the user\nconfirms.\n- `automatic` — moving focus with the arrow keys also selects the tab\n- `manual` — focus moves without selecting; the user confirms with Enter/Space",name:"activationMode",parent:{fileName:"schatten/src/components/lv1/Tabs/Tabs.tsx",name:"TabsProps"},required:!1,tags:{default:"'automatic'"},type:{name:"enum",raw:'"manual" | "automatic"',value:[{value:'"manual"'},{value:'"automatic"'}]}},asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.5_@types+react-dom@19.2.3_@types+react@19.2.15__@types+re_859fe5701657306b7ae1c013ff1125f7/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}try{o.displayName="TabsContent",o.__docgenInfo={description:"",displayName:"TabsContent",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Tabs/Tabs.tsx",methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.5_@types+react-dom@19.2.3_@types+react@19.2.15__@types+re_859fe5701657306b7ae1c013ff1125f7/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}try{h.displayName="TabsList",h.__docgenInfo={description:'The tablist. Renders a single sliding `.st-tabs__indicator` that animates to\nthe active tab — measured from the live DOM (the active trigger carries\n`data-state="active"`), so it tracks whichever tab Radix selects regardless\nof controlled / uncontrolled / keyboard-driven changes. The per-trigger\nborder is only a hover preview; the active marker is this indicator.',displayName:"TabsList",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Tabs/Tabs.tsx",methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.5_@types+react-dom@19.2.3_@types+react@19.2.15__@types+re_859fe5701657306b7ae1c013ff1125f7/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}try{n.displayName="TabsTrigger",n.__docgenInfo={description:"",displayName:"TabsTrigger",filePath:"/home/runner/work/schatten/schatten/src/components/lv1/Tabs/Tabs.tsx",methods:[],props:{icon:{defaultValue:null,declarations:[{fileName:"schatten/src/components/lv1/Tabs/Tabs.tsx",name:"TabsTriggerProps"}],description:"Leading Lucide icon component, rendered `aria-hidden` before the label.\nImport from `lucide-react` and pass the component directly — e.g.\n`import { User } from 'lucide-react'` then `<TabsTrigger icon={User} />`.",name:"icon",parent:{fileName:"schatten/src/components/lv1/Tabs/Tabs.tsx",name:"TabsTriggerProps"},required:!1,tags:{},type:{name:"LucideIcon"}},asChild:{defaultValue:null,declarations:[{fileName:"schatten/node_modules/.pnpm/@radix-ui+react-primitive@2.1.5_@types+react-dom@19.2.3_@types+react@19.2.15__@types+re_859fe5701657306b7ae1c013ff1125f7/node_modules/@radix-ui/react-primitive/dist/index.d.mts",name:"TypeLiteral"}],description:"",name:"asChild",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const ye={title:"Components/lv1/Tabs",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{description:"Orientation of the tabs. Affects arrow-key direction and layout.",control:"inline-radio",options:["horizontal","vertical"],table:{type:{summary:'"horizontal" | "vertical"'},defaultValue:{summary:"horizontal"}}},activationMode:{description:"Whether a tab activates on focus (automatic) or on Enter/Space (manual).",control:"inline-radio",options:["automatic","manual"],table:{type:{summary:'"automatic" | "manual"'},defaultValue:{summary:"automatic"}}}}},C={name:"Playground",args:{orientation:"horizontal",activationMode:"automatic"},render:a=>e.jsxs(b,{defaultValue:"account",...a,style:{width:360},children:[e.jsxs(h,{children:[e.jsx(n,{value:"account",children:"Account"}),e.jsx(n,{value:"password",children:"Password"}),e.jsx(n,{value:"team",children:"Team"})]}),e.jsx(o,{value:"account",children:"Manage your account details and email."}),e.jsx(o,{value:"password",children:"Change your password here."}),e.jsx(o,{value:"team",children:"Invite and manage team members."})]})},y={name:"Default",render:()=>e.jsxs(b,{defaultValue:"account",style:{width:360},children:[e.jsxs(h,{children:[e.jsx(n,{value:"account",children:"Account"}),e.jsx(n,{value:"password",children:"Password"}),e.jsx(n,{value:"team",children:"Team"})]}),e.jsx(o,{value:"account",children:"Manage your account details and email."}),e.jsx(o,{value:"password",children:"Change your password here."}),e.jsx(o,{value:"team",children:"Invite and manage team members."})]})},x={name:"With Icons",render:()=>e.jsxs(b,{defaultValue:"account",style:{width:400},children:[e.jsxs(h,{children:[e.jsx(n,{value:"account",icon:te,children:"Account"}),e.jsx(n,{value:"password",icon:se,children:"Password"}),e.jsx(n,{value:"team",icon:oe,children:"Team"})]}),e.jsx(o,{value:"account",children:"Manage your account details and email."}),e.jsx(o,{value:"password",children:"Change your password here."}),e.jsx(o,{value:"team",children:"Invite and manage team members."})]})},_={name:"Vertical",render:()=>e.jsxs(b,{defaultValue:"account",orientation:"vertical",style:{width:420},children:[e.jsxs(h,{children:[e.jsx(n,{value:"account",children:"Account"}),e.jsx(n,{value:"password",children:"Password"}),e.jsx(n,{value:"team",children:"Team"})]}),e.jsx(o,{value:"account",children:"Manage your account details and email."}),e.jsx(o,{value:"password",children:"Change your password here."}),e.jsx(o,{value:"team",children:"Invite and manage team members."})]})},w={name:"Disabled Tab",render:()=>e.jsxs(b,{defaultValue:"account",style:{width:360},children:[e.jsxs(h,{children:[e.jsx(n,{value:"account",children:"Account"}),e.jsx(n,{value:"password",disabled:!0,children:"Password"}),e.jsx(n,{value:"team",children:"Team"})]}),e.jsx(o,{value:"account",children:"Manage your account details and email."}),e.jsx(o,{value:"password",children:"Change your password here."}),e.jsx(o,{value:"team",children:"Invite and manage team members."})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    orientation: 'horizontal',
    activationMode: 'automatic'
  },
  render: args => <Tabs defaultValue="account" {...args} style={{
    width: 360
  }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <Tabs defaultValue="account" style={{
    width: 360
  }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
}`,...y.parameters?.docs?.source},description:{story:`The default horizontal "line" treatment — the active tab is underlined with
the foreground color, inactive tabs sit muted.`,...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With Icons',
  render: () => <Tabs defaultValue="account" style={{
    width: 400
  }}>
      <TabsList>
        <TabsTrigger value="account" icon={User}>
          Account
        </TabsTrigger>
        <TabsTrigger value="password" icon={Lock}>
          Password
        </TabsTrigger>
        <TabsTrigger value="team" icon={Users}>
          Team
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
}`,...x.parameters?.docs?.source},description:{story:"A leading icon can be injected into each tab via the `icon` prop (a Lucide\ncomponent). The icon is `aria-hidden`, so the tab's accessible name stays the\nlabel text.",...x.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Vertical',
  render: () => <Tabs defaultValue="account" orientation="vertical" style={{
    width: 420
  }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
}`,..._.parameters?.docs?.source},description:{story:`Vertical orientation places the tablist beside the panels; arrow keys move
Up/Down. The active indicator shifts to the trailing edge of the list.`,..._.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Tab',
  render: () => <Tabs defaultValue="account" style={{
    width: 360
  }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled>
          Password
        </TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account details and email.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
      <TabsContent value="team">Invite and manage team members.</TabsContent>
    </Tabs>
}`,...w.parameters?.docs?.source},description:{story:"A disabled tab is skipped by keyboard navigation and cannot be activated.",...w.parameters?.docs?.description}}};const xe=["Playground","Default","WithIcons","Vertical","DisabledTab"];export{y as Default,w as DisabledTab,C as Playground,_ as Vertical,x as WithIcons,xe as __namedExportsOrder,ye as default};
