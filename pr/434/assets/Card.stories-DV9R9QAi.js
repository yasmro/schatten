import{j as e}from"./iframe-CowPqI5l.js";import{C as a,a as t,b as s,c,d as r,e as C}from"./Card-CmQ9d2j6.js";import{B as p}from"./Button-Df3YoJQo.js";import"./preload-helper-C24ok2nv.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css             */import"./index-piipFR6o.js";import"./index-BT4JVsK8.js";/* empty css               */import"./Spinner-6DzPSs8x.js";/* empty css                */const H={title:"Components/lv1/Card",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{description:"Background treatment — filled surface vs transparent.",control:"inline-radio",options:["filled","plain"],table:{type:{summary:'"filled" | "plain"'},defaultValue:{summary:"filled"}}}}},n={args:{variant:"filled"},render:h=>e.jsxs(a,{...h,className:"w-[320px]",children:[e.jsxs(t,{children:[e.jsx(s,{children:"Notifications"}),e.jsx(c,{children:"You have 3 unread messages."})]}),e.jsx(r,{children:"Choose how you want to be notified about activity."}),e.jsxs(C,{children:[e.jsx(p,{variant:"primary",children:"Save"}),e.jsx(p,{variant:"tertiary",children:"Cancel"})]})]})},i={name:"Composition",render:()=>e.jsxs(a,{className:"w-[320px]",children:[e.jsxs(t,{children:[e.jsx(s,{children:"Project settings"}),e.jsx(c,{children:"Manage your project name and visibility."})]}),e.jsx(r,{children:"Updating these values affects every collaborator on the project."}),e.jsxs(C,{children:[e.jsx(p,{variant:"primary",children:"Save changes"}),e.jsx(p,{variant:"tertiary",children:"Discard"})]})]})},o={name:"Content Only",render:()=>e.jsx(a,{className:"w-[320px]",children:e.jsx(r,{children:"A bare card with a single content region — useful as a plain panel or widget shell."})})},d={name:"Variants",render:()=>e.jsxs("div",{className:"flex gap-6",children:[e.jsxs(a,{variant:"filled",className:"w-[260px]",children:[e.jsxs(t,{children:[e.jsx(s,{children:"Filled"}),e.jsx(c,{children:"Surface fill with shadow."})]}),e.jsx(r,{children:"The default treatment — a raised card."})]}),e.jsxs(a,{variant:"plain",className:"w-[260px]",children:[e.jsxs(t,{children:[e.jsx(s,{children:"Plain"}),e.jsx(c,{children:"Transparent, border only."})]}),e.jsx(r,{children:"No fill or shadow — the page shows through."})]})]})},l={name:"On a tinted surface",render:()=>e.jsxs("div",{className:"flex gap-6 rounded-lg bg-surface-hover p-8",children:[e.jsxs(a,{variant:"filled",className:"w-[220px]",children:[e.jsx(t,{children:e.jsx(s,{children:"Filled"})}),e.jsx(r,{children:"Own white fill — sits on top of the surface."})]}),e.jsxs(a,{variant:"plain",className:"w-[220px]",children:[e.jsx(t,{children:e.jsx(s,{children:"Plain"})}),e.jsx(r,{children:"Transparent — the surface shows through."})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Interactive single instance — toggle `variant` (filled / plain) in the\nControls panel.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Full composition — header (title + description), content, and footer actions.",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Content Only',
  render: () => <Card className="w-[320px]">
      <CardContent>
        A bare card with a single content region — useful as a plain panel or widget shell.
      </CardContent>
    </Card>
}`,...o.parameters?.docs?.source},description:{story:"Content-only card — no header / footer. Exercises the `:first-child` padding\nrule so the single region keeps its top padding.",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Background treatments side by side — `filled` (default) vs `plain`.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:"`plain` reads best on a non-default surface. On a tinted panel, `filled` keeps\nits own white fill and stands out, while `plain` lets the surface show through\n— useful for nested or low-emphasis grouping.",...l.parameters?.docs?.description}}};const S=["Playground","Composition","ContentOnly","Variants","OnSurface"];export{i as Composition,o as ContentOnly,l as OnSurface,n as Playground,d as Variants,S as __namedExportsOrder,H as default};
