import{j as a}from"./iframe-CD59Kjnp.js";import{T as n,a as o,b as e,c as t}from"./Tabs-DCG5EkOm.js";import{U as T}from"./user-COPLhfPh.js";import{L as b}from"./lock-COROTDi1.js";import{c as h}from"./createLucideIcon-BYJ1bGBl.js";import"./preload-helper-ChFvbxIx.js";import"./index-Cc3VDbU8.js";import"./index-DqR9Evrl.js";import"./index-BXyw0i55.js";import"./index-YugLyKsl.js";import"./index-YbwLj1OX.js";import"./index-BY0raJ5O.js";import"./index-B-daNU-O.js";import"./index-uys8_jtM.js";import"./index-BBoaADN7.js";import"./utils-DclmTqRz.js";/* empty css             */const g=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],p=h("users",g),z={title:"Components/lv1/Tabs",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{description:"Orientation of the tabs. Affects arrow-key direction and layout.",control:"inline-radio",options:["horizontal","vertical"],table:{type:{summary:'"horizontal" | "vertical"'},defaultValue:{summary:"horizontal"}}},activationMode:{description:"Whether a tab activates on focus (automatic) or on Enter/Space (manual).",control:"inline-radio",options:["automatic","manual"],table:{type:{summary:'"automatic" | "manual"'},defaultValue:{summary:"automatic"}}}}},m={name:"Playground",args:{orientation:"horizontal",activationMode:"automatic"},render:s=>a.jsxs(n,{defaultValue:"account",...s,style:{width:360},children:[a.jsxs(o,{children:[a.jsx(e,{value:"account",children:"Account"}),a.jsx(e,{value:"password",children:"Password"}),a.jsx(e,{value:"team",children:"Team"})]}),a.jsx(t,{value:"account",children:"Manage your account details and email."}),a.jsx(t,{value:"password",children:"Change your password here."}),a.jsx(t,{value:"team",children:"Invite and manage team members."})]})},i={name:"Default",render:()=>a.jsxs(n,{defaultValue:"account",style:{width:360},children:[a.jsxs(o,{children:[a.jsx(e,{value:"account",children:"Account"}),a.jsx(e,{value:"password",children:"Password"}),a.jsx(e,{value:"team",children:"Team"})]}),a.jsx(t,{value:"account",children:"Manage your account details and email."}),a.jsx(t,{value:"password",children:"Change your password here."}),a.jsx(t,{value:"team",children:"Invite and manage team members."})]})},c={name:"With Icons",render:()=>a.jsxs(n,{defaultValue:"account",style:{width:400},children:[a.jsxs(o,{children:[a.jsx(e,{value:"account",icon:T,children:"Account"}),a.jsx(e,{value:"password",icon:b,children:"Password"}),a.jsx(e,{value:"team",icon:p,children:"Team"})]}),a.jsx(t,{value:"account",children:"Manage your account details and email."}),a.jsx(t,{value:"password",children:"Change your password here."}),a.jsx(t,{value:"team",children:"Invite and manage team members."})]})},l={name:"Vertical",render:()=>a.jsxs(n,{defaultValue:"account",orientation:"vertical",style:{width:420},children:[a.jsxs(o,{children:[a.jsx(e,{value:"account",children:"Account"}),a.jsx(e,{value:"password",children:"Password"}),a.jsx(e,{value:"team",children:"Team"})]}),a.jsx(t,{value:"account",children:"Manage your account details and email."}),a.jsx(t,{value:"password",children:"Change your password here."}),a.jsx(t,{value:"team",children:"Invite and manage team members."})]})},d={name:"Many Tabs (scroll)",render:()=>a.jsxs(n,{defaultValue:"tab-1",style:{width:320},children:[a.jsx(o,{children:Array.from({length:12},(s,r)=>`tab-${r+1}`).map((s,r)=>a.jsxs(e,{value:s,children:["Section ",r+1]},s))}),Array.from({length:12},(s,r)=>`tab-${r+1}`).map((s,r)=>a.jsxs(t,{value:s,children:["Content for section ",r+1,"."]},s))]})},u={name:"Disabled Tab",render:()=>a.jsxs(n,{defaultValue:"account",style:{width:360},children:[a.jsxs(o,{children:[a.jsx(e,{value:"account",children:"Account"}),a.jsx(e,{value:"password",disabled:!0,children:"Password"}),a.jsx(e,{value:"team",children:"Team"})]}),a.jsx(t,{value:"account",children:"Manage your account details and email."}),a.jsx(t,{value:"password",children:"Change your password here."}),a.jsx(t,{value:"team",children:"Invite and manage team members."})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:`The default horizontal "line" treatment — the active tab is underlined with
the foreground color, inactive tabs sit muted.`,...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"A leading icon can be injected into each tab via the `icon` prop (a Lucide\ncomponent). The icon is `aria-hidden`, so the tab's accessible name stays the\nlabel text.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:`Vertical orientation places the tablist beside the panels; arrow keys move
Up/Down. The active indicator shifts to the trailing edge of the list.`,...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Many Tabs (scroll)',
  render: () => <Tabs defaultValue="tab-1" style={{
    width: 320
  }}>
      <TabsList>
        {Array.from({
        length: 12
      }, (_, i) => \`tab-\${i + 1}\`).map((value, i) => <TabsTrigger key={value} value={value}>
            Section {i + 1}
          </TabsTrigger>)}
      </TabsList>
      {Array.from({
      length: 12
    }, (_, i) => \`tab-\${i + 1}\`).map((value, i) => <TabsContent key={value} value={value}>
          Content for section {i + 1}.
        </TabsContent>)}
    </Tabs>
}`,...d.parameters?.docs?.source},description:{story:`When the tabs exceed the container width they scroll horizontally (the
scrollbar is hidden — scroll via trackpad / touch / Shift+wheel). Selecting a
tab that is off-screen scrolls it into view. The active indicator tracks the
selected tab as the list scrolls.`,...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"A disabled tab is skipped by keyboard navigation and cannot be activated.",...u.parameters?.docs?.description}}};const U=["Playground","Default","WithIcons","Vertical","ManyTabs","DisabledTab"];export{i as Default,u as DisabledTab,d as ManyTabs,m as Playground,l as Vertical,c as WithIcons,U as __namedExportsOrder,z as default};
