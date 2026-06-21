import{j as e}from"./iframe-DBPRF-b6.js";import{C as a,a as i,b as d,c,d as o,e as p}from"./Card-DwHB8YXn.js";import{B as l}from"./Button-BfoLb7yM.js";import"./preload-helper-DJEhU8lg.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";import"./index-COXvXO1l.js";/* empty css               */import"./Spinner-OB-GCMYf.js";/* empty css                */const b={title:"Components/lv1/Card",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{description:"Surface treatment preset (fill + elevation).",control:"inline-radio",options:["elevated","subtle"],table:{type:{summary:'"elevated" | "subtle"'},defaultValue:{summary:"elevated"}}}}},r={args:{variant:"elevated"},render:C=>e.jsxs(a,{...C,className:"w-[320px]",children:[e.jsxs(i,{children:[e.jsx(d,{children:"Notifications"}),e.jsx(c,{children:"You have 3 unread messages."})]}),e.jsx(o,{children:"Choose how you want to be notified about activity."}),e.jsxs(p,{children:[e.jsx(l,{variant:"primary",children:"Save"}),e.jsx(l,{variant:"tertiary",children:"Cancel"})]})]})},t={name:"Composition",render:()=>e.jsxs(a,{className:"w-[320px]",children:[e.jsxs(i,{children:[e.jsx(d,{children:"Project settings"}),e.jsx(c,{children:"Manage your project name and visibility."})]}),e.jsx(o,{children:"Updating these values affects every collaborator on the project."}),e.jsxs(p,{children:[e.jsx(l,{variant:"primary",children:"Save changes"}),e.jsx(l,{variant:"tertiary",children:"Discard"})]})]})},s={name:"Content Only",render:()=>e.jsx(a,{className:"w-[320px]",children:e.jsx(o,{children:"A bare card with a single content region — useful as a plain panel or widget shell."})})},n={name:"Variants",render:()=>e.jsxs("div",{className:"flex gap-6",children:[e.jsxs(a,{variant:"elevated",className:"w-[260px]",children:[e.jsxs(i,{children:[e.jsx(d,{children:"Elevated"}),e.jsx(c,{children:"Crisp surface with shadow."})]}),e.jsx(o,{children:"The default treatment — raised above the page."})]}),e.jsxs(a,{variant:"subtle",className:"w-[260px]",children:[e.jsxs(i,{children:[e.jsx(d,{children:"Subtle"}),e.jsx(c,{children:"Muted fill, no shadow."})]}),e.jsx(o,{children:"Recedes — for secondary or nested panels."})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'elevated'
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
}`,...r.parameters?.docs?.source},description:{story:"Interactive single instance — toggle `variant` (elevated / subtle) in the\nControls panel.",...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
      <Card variant="elevated" className="w-[260px]">
        <CardHeader>
          <CardTitle>Elevated</CardTitle>
          <CardDescription>Crisp surface with shadow.</CardDescription>
        </CardHeader>
        <CardContent>The default treatment — raised above the page.</CardContent>
      </Card>
      <Card variant="subtle" className="w-[260px]">
        <CardHeader>
          <CardTitle>Subtle</CardTitle>
          <CardDescription>Muted fill, no shadow.</CardDescription>
        </CardHeader>
        <CardContent>Recedes — for secondary or nested panels.</CardContent>
      </Card>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"Surface treatments side by side — `elevated` (default) vs `subtle`.",...n.parameters?.docs?.description}}};const N=["Playground","Composition","ContentOnly","Variants"];export{t as Composition,s as ContentOnly,r as Playground,n as Variants,N as __namedExportsOrder,b as default};
