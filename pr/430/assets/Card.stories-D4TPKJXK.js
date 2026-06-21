import{j as e}from"./iframe-DCWZgwzp.js";import{C as r,a as o,b as d,c as l,d as i,e as p}from"./Card-CK56_7ky.js";import{B as c}from"./Button-OCBNgr6W.js";import"./preload-helper-DJEhU8lg.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";import"./index-SxVM7UGT.js";/* empty css               */import"./Spinner-C0xOzPEo.js";/* empty css                */const N={title:"Components/lv1/Card",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{description:"Background treatment — filled surface vs transparent.",control:"inline-radio",options:["filled","plain"],table:{type:{summary:'"filled" | "plain"'},defaultValue:{summary:"filled"}}}}},a={args:{variant:"filled"},render:C=>e.jsxs(r,{...C,className:"w-[320px]",children:[e.jsxs(o,{children:[e.jsx(d,{children:"Notifications"}),e.jsx(l,{children:"You have 3 unread messages."})]}),e.jsx(i,{children:"Choose how you want to be notified about activity."}),e.jsxs(p,{children:[e.jsx(c,{variant:"primary",children:"Save"}),e.jsx(c,{variant:"tertiary",children:"Cancel"})]})]})},t={name:"Composition",render:()=>e.jsxs(r,{className:"w-[320px]",children:[e.jsxs(o,{children:[e.jsx(d,{children:"Project settings"}),e.jsx(l,{children:"Manage your project name and visibility."})]}),e.jsx(i,{children:"Updating these values affects every collaborator on the project."}),e.jsxs(p,{children:[e.jsx(c,{variant:"primary",children:"Save changes"}),e.jsx(c,{variant:"tertiary",children:"Discard"})]})]})},s={name:"Content Only",render:()=>e.jsx(r,{className:"w-[320px]",children:e.jsx(i,{children:"A bare card with a single content region — useful as a plain panel or widget shell."})})},n={name:"Variants",render:()=>e.jsxs("div",{className:"flex gap-6",children:[e.jsxs(r,{variant:"filled",className:"w-[260px]",children:[e.jsxs(o,{children:[e.jsx(d,{children:"Filled"}),e.jsx(l,{children:"Surface fill with shadow."})]}),e.jsx(i,{children:"The default treatment — a raised card."})]}),e.jsxs(r,{variant:"plain",className:"w-[260px]",children:[e.jsxs(o,{children:[e.jsx(d,{children:"Plain"}),e.jsx(l,{children:"Transparent, border only."})]}),e.jsx(i,{children:"No fill or shadow — the page shows through."})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Interactive single instance — toggle `variant` (filled / plain) in the\nControls panel.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Full composition — header (title + description), content, and footer actions.",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Content Only',
  render: () => <Card className="w-[320px]">
      <CardContent>
        A bare card with a single content region — useful as a plain panel or widget shell.
      </CardContent>
    </Card>
}`,...s.parameters?.docs?.source},description:{story:"Content-only card — no header / footer. Exercises the `:first-child` padding\nrule so the single region keeps its top padding.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"Background treatments side by side — `filled` (default) vs `plain`.",...n.parameters?.docs?.description}}};const b=["Playground","Composition","ContentOnly","Variants"];export{t as Composition,s as ContentOnly,a as Playground,n as Variants,b as __namedExportsOrder,N as default};
