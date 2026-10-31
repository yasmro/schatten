import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-MeEjWD1d.js";import{n,t as r}from"./createLucideIcon-CG07AQVy.js";import{n as i,t as a}from"./lock-DkW0iHfD.js";import{n as o,t as s}from"./user-CS_1p2Be.js";import{a as c,i as l,n as u,r as d,t as f}from"./Tabs-D-xHwP5m.js";var p,m;function h(){return(h=e((()=>{n(),p=[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]],m=r(`users`,p)})))()}var g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{i(),o(),h(),c(),g=t(),_={title:`Components/lv1/Tabs`,component:f,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{description:`Orientation of the tabs. Affects arrow-key direction and layout.`,control:`inline-radio`,options:[`horizontal`,`vertical`],table:{type:{summary:`"horizontal" | "vertical"`},defaultValue:{summary:`horizontal`}}},activationMode:{description:`Whether a tab activates on focus (automatic) or on Enter/Space (manual).`,control:`inline-radio`,options:[`automatic`,`manual`],table:{type:{summary:`"automatic" | "manual"`},defaultValue:{summary:`automatic`}}}}},v={name:`Playground`,args:{orientation:`horizontal`,activationMode:`automatic`},render:e=>(0,g.jsxs)(f,{defaultValue:`account`,...e,style:{width:360},children:[(0,g.jsxs)(d,{children:[(0,g.jsx)(l,{value:`account`,children:`Account`}),(0,g.jsx)(l,{value:`password`,children:`Password`}),(0,g.jsx)(l,{value:`team`,children:`Team`})]}),(0,g.jsx)(u,{value:`account`,children:`Manage your account details and email.`}),(0,g.jsx)(u,{value:`password`,children:`Change your password here.`}),(0,g.jsx)(u,{value:`team`,children:`Invite and manage team members.`})]})},y={name:`Default`,render:()=>(0,g.jsxs)(f,{defaultValue:`account`,style:{width:360},children:[(0,g.jsxs)(d,{children:[(0,g.jsx)(l,{value:`account`,children:`Account`}),(0,g.jsx)(l,{value:`password`,children:`Password`}),(0,g.jsx)(l,{value:`team`,children:`Team`})]}),(0,g.jsx)(u,{value:`account`,children:`Manage your account details and email.`}),(0,g.jsx)(u,{value:`password`,children:`Change your password here.`}),(0,g.jsx)(u,{value:`team`,children:`Invite and manage team members.`})]})},b={name:`With Icons`,render:()=>(0,g.jsxs)(f,{defaultValue:`account`,style:{width:400},children:[(0,g.jsxs)(d,{children:[(0,g.jsx)(l,{value:`account`,icon:s,children:`Account`}),(0,g.jsx)(l,{value:`password`,icon:a,children:`Password`}),(0,g.jsx)(l,{value:`team`,icon:m,children:`Team`})]}),(0,g.jsx)(u,{value:`account`,children:`Manage your account details and email.`}),(0,g.jsx)(u,{value:`password`,children:`Change your password here.`}),(0,g.jsx)(u,{value:`team`,children:`Invite and manage team members.`})]})},x={name:`Vertical`,render:()=>(0,g.jsxs)(f,{defaultValue:`account`,orientation:`vertical`,style:{width:420},children:[(0,g.jsxs)(d,{children:[(0,g.jsx)(l,{value:`account`,children:`Account`}),(0,g.jsx)(l,{value:`password`,children:`Password`}),(0,g.jsx)(l,{value:`team`,children:`Team`})]}),(0,g.jsx)(u,{value:`account`,children:`Manage your account details and email.`}),(0,g.jsx)(u,{value:`password`,children:`Change your password here.`}),(0,g.jsx)(u,{value:`team`,children:`Invite and manage team members.`})]})},S={name:`Many Tabs (scroll)`,render:()=>(0,g.jsxs)(f,{defaultValue:`tab-1`,style:{width:320},children:[(0,g.jsx)(d,{children:Array.from({length:12},(e,t)=>`tab-${t+1}`).map((e,t)=>(0,g.jsxs)(l,{value:e,children:[`Section `,t+1]},e))}),Array.from({length:12},(e,t)=>`tab-${t+1}`).map((e,t)=>(0,g.jsxs)(u,{value:e,children:[`Content for section `,t+1,`.`]},e))]})},C={name:`Disabled Tab`,render:()=>(0,g.jsxs)(f,{defaultValue:`account`,style:{width:360},children:[(0,g.jsxs)(d,{children:[(0,g.jsx)(l,{value:`account`,children:`Account`}),(0,g.jsx)(l,{value:`password`,disabled:!0,children:`Password`}),(0,g.jsx)(l,{value:`team`,children:`Team`})]}),(0,g.jsx)(u,{value:`account`,children:`Manage your account details and email.`}),(0,g.jsx)(u,{value:`password`,children:`Change your password here.`}),(0,g.jsx)(u,{value:`team`,children:`Invite and manage team members.`})]})},w=[`Playground`,`Default`,`WithIcons`,`Vertical`,`ManyTabs`,`DisabledTab`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
the foreground color, inactive tabs sit muted.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"A leading icon can be injected into each tab via the `icon` prop (a Lucide\ncomponent). The icon is `aria-hidden`, so the tab's accessible name stays the\nlabel text.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Vertical orientation places the tablist beside the panels; arrow keys move
Up/Down. The active indicator shifts to the trailing edge of the list.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`When the tabs exceed the container width they scroll horizontally (the
scrollbar is hidden — scroll via trackpad / touch / Shift+wheel). Selecting a
tab that is off-screen scrolls it into view. The active indicator tracks the
selected tab as the list scrolls.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`A disabled tab is skipped by keyboard navigation and cannot be activated.`,...C.parameters?.docs?.description}}}})))()}T();export{y as Default,C as DisabledTab,S as ManyTabs,v as Playground,x as Vertical,b as WithIcons,w as __namedExportsOrder,_ as default};