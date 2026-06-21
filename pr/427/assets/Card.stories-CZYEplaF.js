import{j as e}from"./iframe-DvxK07IX.js";import{C as o,a as i,b as d,c,d as s,e as p}from"./Card-CHsT6ebQ.js";import{B as n}from"./Button-uy-5Jvxs.js";import"./preload-helper-B_mRexXP.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";import"./index-zr7MDgFW.js";/* empty css               */import"./Spinner-beiAQe6J.js";/* empty css                */const w={title:"Components/lv1/Card",component:o,tags:["autodocs"],parameters:{layout:"centered"}},r={render:l=>e.jsxs(o,{...l,className:"w-[320px]",children:[e.jsxs(i,{children:[e.jsx(d,{children:"Notifications"}),e.jsx(c,{children:"You have 3 unread messages."})]}),e.jsx(s,{children:"Choose how you want to be notified about activity."}),e.jsxs(p,{children:[e.jsx(n,{variant:"primary",children:"Save"}),e.jsx(n,{variant:"tertiary",children:"Cancel"})]})]})},a={name:"Composition",render:()=>e.jsxs(o,{className:"w-[320px]",children:[e.jsxs(i,{children:[e.jsx(d,{children:"Project settings"}),e.jsx(c,{children:"Manage your project name and visibility."})]}),e.jsx(s,{children:"Updating these values affects every collaborator on the project."}),e.jsxs(p,{children:[e.jsx(n,{variant:"primary",children:"Save changes"}),e.jsx(n,{variant:"tertiary",children:"Discard"})]})]})},t={name:"Content Only",render:()=>e.jsx(o,{className:"w-[320px]",children:e.jsx(s,{children:"A bare card with a single content region — useful as a plain panel or widget shell."})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:`Interactive single instance. Card has no schatten-specific props — it is a
neutral surface composed from its sub-parts — so the controls cover only the
standard DOM attributes.`,...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:"Full composition — header (title + description), content, and footer actions.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Content Only',
  render: () => <Card className="w-[320px]">
      <CardContent>
        A bare card with a single content region — useful as a plain panel or widget shell.
      </CardContent>
    </Card>
}`,...t.parameters?.docs?.source},description:{story:"Content-only card — no header / footer. Exercises the `:first-child` padding\nrule so the single region keeps its top padding.",...t.parameters?.docs?.description}}};const b=["Playground","Composition","ContentOnly"];export{a as Composition,t as ContentOnly,r as Playground,b as __namedExportsOrder,w as default};
