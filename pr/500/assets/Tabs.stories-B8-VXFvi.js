import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{W as n,i as r,o as i,t as a}from"./lucide-react-CwYeROqo.js";import{a as o,i as s,n as c,r as l,t as u}from"./Tabs-C88pYWZv.js";var d,f,p,m,h,g,_,v,y;e((()=>{a(),o(),d=t(),f={title:`Components/lv1/Tabs`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{description:`Orientation of the tabs. Affects arrow-key direction and layout.`,control:`inline-radio`,options:[`horizontal`,`vertical`],table:{type:{summary:`"horizontal" | "vertical"`},defaultValue:{summary:`horizontal`}}},activationMode:{description:`Whether a tab activates on focus (automatic) or on Enter/Space (manual).`,control:`inline-radio`,options:[`automatic`,`manual`],table:{type:{summary:`"automatic" | "manual"`},defaultValue:{summary:`automatic`}}}}},p={name:`Playground`,args:{orientation:`horizontal`,activationMode:`automatic`},render:e=>(0,d.jsxs)(u,{defaultValue:`account`,...e,style:{width:360},children:[(0,d.jsxs)(l,{children:[(0,d.jsx)(s,{value:`account`,children:`Account`}),(0,d.jsx)(s,{value:`password`,children:`Password`}),(0,d.jsx)(s,{value:`team`,children:`Team`})]}),(0,d.jsx)(c,{value:`account`,children:`Manage your account details and email.`}),(0,d.jsx)(c,{value:`password`,children:`Change your password here.`}),(0,d.jsx)(c,{value:`team`,children:`Invite and manage team members.`})]})},m={name:`Default`,render:()=>(0,d.jsxs)(u,{defaultValue:`account`,style:{width:360},children:[(0,d.jsxs)(l,{children:[(0,d.jsx)(s,{value:`account`,children:`Account`}),(0,d.jsx)(s,{value:`password`,children:`Password`}),(0,d.jsx)(s,{value:`team`,children:`Team`})]}),(0,d.jsx)(c,{value:`account`,children:`Manage your account details and email.`}),(0,d.jsx)(c,{value:`password`,children:`Change your password here.`}),(0,d.jsx)(c,{value:`team`,children:`Invite and manage team members.`})]})},h={name:`With Icons`,render:()=>(0,d.jsxs)(u,{defaultValue:`account`,style:{width:400},children:[(0,d.jsxs)(l,{children:[(0,d.jsx)(s,{value:`account`,icon:i,children:`Account`}),(0,d.jsx)(s,{value:`password`,icon:n,children:`Password`}),(0,d.jsx)(s,{value:`team`,icon:r,children:`Team`})]}),(0,d.jsx)(c,{value:`account`,children:`Manage your account details and email.`}),(0,d.jsx)(c,{value:`password`,children:`Change your password here.`}),(0,d.jsx)(c,{value:`team`,children:`Invite and manage team members.`})]})},g={name:`Vertical`,render:()=>(0,d.jsxs)(u,{defaultValue:`account`,orientation:`vertical`,style:{width:420},children:[(0,d.jsxs)(l,{children:[(0,d.jsx)(s,{value:`account`,children:`Account`}),(0,d.jsx)(s,{value:`password`,children:`Password`}),(0,d.jsx)(s,{value:`team`,children:`Team`})]}),(0,d.jsx)(c,{value:`account`,children:`Manage your account details and email.`}),(0,d.jsx)(c,{value:`password`,children:`Change your password here.`}),(0,d.jsx)(c,{value:`team`,children:`Invite and manage team members.`})]})},_={name:`Many Tabs (scroll)`,render:()=>(0,d.jsxs)(u,{defaultValue:`tab-1`,style:{width:320},children:[(0,d.jsx)(l,{children:Array.from({length:12},(e,t)=>`tab-${t+1}`).map((e,t)=>(0,d.jsxs)(s,{value:e,children:[`Section `,t+1]},e))}),Array.from({length:12},(e,t)=>`tab-${t+1}`).map((e,t)=>(0,d.jsxs)(c,{value:e,children:[`Content for section `,t+1,`.`]},e))]})},v={name:`Disabled Tab`,render:()=>(0,d.jsxs)(u,{defaultValue:`account`,style:{width:360},children:[(0,d.jsxs)(l,{children:[(0,d.jsx)(s,{value:`account`,children:`Account`}),(0,d.jsx)(s,{value:`password`,disabled:!0,children:`Password`}),(0,d.jsx)(s,{value:`team`,children:`Team`})]}),(0,d.jsx)(c,{value:`account`,children:`Manage your account details and email.`}),(0,d.jsx)(c,{value:`password`,children:`Change your password here.`}),(0,d.jsx)(c,{value:`team`,children:`Invite and manage team members.`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`The default horizontal "line" treatment — the active tab is underlined with
the foreground color, inactive tabs sit muted.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"A leading icon can be injected into each tab via the `icon` prop (a Lucide\ncomponent). The icon is `aria-hidden`, so the tab's accessible name stays the\nlabel text.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Vertical orientation places the tablist beside the panels; arrow keys move
Up/Down. The active indicator shifts to the trailing edge of the list.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`When the tabs exceed the container width they scroll horizontally (the
scrollbar is hidden — scroll via trackpad / touch / Shift+wheel). Selecting a
tab that is off-screen scrolls it into view. The active indicator tracks the
selected tab as the list scrolls.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`A disabled tab is skipped by keyboard navigation and cannot be activated.`,...v.parameters?.docs?.description}}},y=[`Playground`,`Default`,`WithIcons`,`Vertical`,`ManyTabs`,`DisabledTab`]}))();export{m as Default,v as DisabledTab,_ as ManyTabs,p as Playground,g as Vertical,h as WithIcons,y as __namedExportsOrder,f as default};