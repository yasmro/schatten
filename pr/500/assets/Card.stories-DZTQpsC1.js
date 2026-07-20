import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{t as n}from"./Button-Dr82GheM.js";import{t as r}from"./Button-BhCxneLV.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./Card-5DSSbHTP.js";var d,f,p,m,h,g,_,v;e((()=>{r(),l(),d=t(),f={title:`Components/lv1/Card`,component:u,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{variant:{description:`Background treatment — filled surface vs transparent.`,control:`inline-radio`,options:[`filled`,`plain`],table:{type:{summary:`"filled" | "plain"`},defaultValue:{summary:`filled`}}}}},p={args:{variant:`filled`},render:e=>(0,d.jsxs)(u,{...e,className:`w-[320px]`,children:[(0,d.jsxs)(i,{children:[(0,d.jsx)(s,{children:`Notifications`}),(0,d.jsx)(c,{children:`You have 3 unread messages.`})]}),(0,d.jsx)(o,{children:`Choose how you want to be notified about activity.`}),(0,d.jsxs)(a,{children:[(0,d.jsx)(n,{variant:`primary`,children:`Save`}),(0,d.jsx)(n,{variant:`tertiary`,children:`Cancel`})]})]})},m={name:`Composition`,render:()=>(0,d.jsxs)(u,{className:`w-[320px]`,children:[(0,d.jsxs)(i,{children:[(0,d.jsx)(s,{children:`Project settings`}),(0,d.jsx)(c,{children:`Manage your project name and visibility.`})]}),(0,d.jsx)(o,{children:`Updating these values affects every collaborator on the project.`}),(0,d.jsxs)(a,{children:[(0,d.jsx)(n,{variant:`primary`,children:`Save changes`}),(0,d.jsx)(n,{variant:`tertiary`,children:`Discard`})]})]})},h={name:`Content Only`,render:()=>(0,d.jsx)(u,{className:`w-[320px]`,children:(0,d.jsx)(o,{children:`A bare card with a single content region — useful as a plain panel or widget shell.`})})},g={name:`Variants`,render:()=>(0,d.jsxs)(`div`,{className:`flex gap-6`,children:[(0,d.jsxs)(u,{variant:`filled`,className:`w-[260px]`,children:[(0,d.jsxs)(i,{children:[(0,d.jsx)(s,{children:`Filled`}),(0,d.jsx)(c,{children:`Surface fill with shadow.`})]}),(0,d.jsx)(o,{children:`The default treatment — a raised card.`})]}),(0,d.jsxs)(u,{variant:`plain`,className:`w-[260px]`,children:[(0,d.jsxs)(i,{children:[(0,d.jsx)(s,{children:`Plain`}),(0,d.jsx)(c,{children:`Transparent, border only.`})]}),(0,d.jsx)(o,{children:`No fill or shadow — the page shows through.`})]})]})},_={name:`On a tinted surface`,render:()=>(0,d.jsxs)(`div`,{className:`flex gap-6 rounded-lg bg-surface-hover p-8`,children:[(0,d.jsxs)(u,{variant:`filled`,className:`w-[220px]`,children:[(0,d.jsx)(i,{children:(0,d.jsx)(s,{children:`Filled`})}),(0,d.jsx)(o,{children:`Own white fill — sits on top of the surface.`})]}),(0,d.jsxs)(u,{variant:`plain`,className:`w-[220px]`,children:[(0,d.jsx)(i,{children:(0,d.jsx)(s,{children:`Plain`})}),(0,d.jsx)(o,{children:`Transparent — the surface shows through.`})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'filled'
  },
  render: args => <Card {...args} className="w-[320px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>Choose how you want to be notified about activity.</CardContent>
      <CardFooter>
        <Button variant="primary">Save</Button>
        <Button variant="tertiary">Cancel</Button>
      </CardFooter>
    </Card>
}`,...p.parameters?.docs?.source},description:{story:"Interactive single instance — toggle `variant` (filled / plain) in the\nControls panel.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Composition',
  render: () => <Card className="w-[320px]">
      <CardHeader>
        <CardTitle>Project settings</CardTitle>
        <CardDescription>Manage your project name and visibility.</CardDescription>
      </CardHeader>
      <CardContent>Updating these values affects every collaborator on the project.</CardContent>
      <CardFooter>
        <Button variant="primary">Save changes</Button>
        <Button variant="tertiary">Discard</Button>
      </CardFooter>
    </Card>
}`,...m.parameters?.docs?.source},description:{story:`Full composition — header (title + description), content, and footer actions.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Content Only',
  render: () => <Card className="w-[320px]">
      <CardContent>
        A bare card with a single content region — useful as a plain panel or widget shell.
      </CardContent>
    </Card>
}`,...h.parameters?.docs?.source},description:{story:"Content-only card — no header / footer. Exercises the `:first-child` padding\nrule so the single region keeps its top padding.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Variants',
  render: () => <div className="flex gap-6">
      <Card variant="filled" className="w-[260px]">
        <CardHeader>
          <CardTitle>Filled</CardTitle>
          <CardDescription>Surface fill with shadow.</CardDescription>
        </CardHeader>
        <CardContent>The default treatment — a raised card.</CardContent>
      </Card>
      <Card variant="plain" className="w-[260px]">
        <CardHeader>
          <CardTitle>Plain</CardTitle>
          <CardDescription>Transparent, border only.</CardDescription>
        </CardHeader>
        <CardContent>No fill or shadow — the page shows through.</CardContent>
      </Card>
    </div>
}`,...g.parameters?.docs?.source},description:{story:"Background treatments side by side — `filled` (default) vs `plain`.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'On a tinted surface',
  render: () => <div className="flex gap-6 rounded-lg bg-surface-hover p-8">
      <Card variant="filled" className="w-[220px]">
        <CardHeader>
          <CardTitle>Filled</CardTitle>
        </CardHeader>
        <CardContent>Own white fill — sits on top of the surface.</CardContent>
      </Card>
      <Card variant="plain" className="w-[220px]">
        <CardHeader>
          <CardTitle>Plain</CardTitle>
        </CardHeader>
        <CardContent>Transparent — the surface shows through.</CardContent>
      </Card>
    </div>
}`,..._.parameters?.docs?.source},description:{story:"`plain` reads best on a non-default surface. On a tinted panel, `filled` keeps\nits own white fill and stands out, while `plain` lets the surface show through\n— useful for nested or low-emphasis grouping.",..._.parameters?.docs?.description}}},v=[`Playground`,`Composition`,`ContentOnly`,`Variants`,`OnSurface`]}))();export{m as Composition,h as ContentOnly,_ as OnSurface,p as Playground,g as Variants,v as __namedExportsOrder,f as default};