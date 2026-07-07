import{j as e}from"./iframe-CSs2helJ.js";import{T as x,a as p,b as u,c as l,d as t,e as h,f as a}from"./Table-BvST5rdg.js";import"./preload-helper-CraBvC-j.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css              */const C={title:"Components/lv1/Table",component:x,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{description:"Cell density (padding + font-size).",control:"inline-radio",options:["sm","md","lg"],table:{type:{summary:'"sm" | "md" | "lg"'},defaultValue:{summary:"md"}}},striped:{description:"Zebra-stripe the body rows. Orthogonal to bordered.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},bordered:{description:"Draw a border around every cell. Orthogonal to striped.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},hoverable:{description:"Tint body rows on hover (presentational only).",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},r=[{name:"Taro Tanaka",email:"tanaka@example.com",role:"Admin"},{name:"Hanako Sato",email:"sato@example.com",role:"Editor"},{name:"Ken Suzuki",email:"suzuki@example.com",role:"Viewer"}];function s(b){return e.jsx("div",{className:"w-[520px]",children:e.jsxs(x,{...b,children:[e.jsx(p,{children:"Team members"}),e.jsx(u,{children:e.jsxs(l,{children:[e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Email"}),e.jsx(t,{align:"end",children:"Role"})]})}),e.jsx(h,{children:r.map(c=>e.jsxs(l,{children:[e.jsx(a,{children:c.name}),e.jsx(a,{children:c.email}),e.jsx(a,{align:"end",children:c.role})]},c.email))})]})})}const d={args:{size:"md",striped:!1,bordered:!1,hoverable:!1},render:b=>e.jsx(s,{...b})},o={name:"Treatments",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-foreground-muted",children:"Default"}),e.jsx(s,{})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-foreground-muted",children:"Striped"}),e.jsx(s,{striped:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-foreground-muted",children:"Bordered"}),e.jsx(s,{bordered:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-foreground-muted",children:"Striped + Bordered"}),e.jsx(s,{striped:!0,bordered:!0})]})]})},n={name:"Sizes",render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-foreground-muted",children:"sm"}),e.jsx(s,{size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-foreground-muted",children:"md"}),e.jsx(s,{size:"md"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-foreground-muted",children:"lg"}),e.jsx(s,{size:"lg"})]})]})},i={name:"Hoverable",render:()=>e.jsx(s,{hoverable:!0})},m={name:"Selected Row",render:()=>e.jsx("div",{className:"w-[520px]",children:e.jsxs(x,{children:[e.jsx(p,{children:"Team members"}),e.jsx(u,{children:e.jsxs(l,{children:[e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Email"}),e.jsx(t,{align:"end",children:"Role"})]})}),e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(a,{children:r[0].name}),e.jsx(a,{children:r[0].email}),e.jsx(a,{align:"end",children:r[0].role})]}),e.jsxs(l,{selected:!0,children:[e.jsx(a,{children:r[1].name}),e.jsx(a,{children:r[1].email}),e.jsx(a,{align:"end",children:r[1].role})]}),e.jsxs(l,{children:[e.jsx(a,{children:r[2].name}),e.jsx(a,{children:r[2].email}),e.jsx(a,{align:"end",children:r[2].role})]})]})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    striped: false,
    bordered: false,
    hoverable: false
  },
  render: args => <DemoTable {...args} />
}`,...d.parameters?.docs?.source},description:{story:"Interactive single instance — toggle `size` / `striped` / `bordered` /\n`hoverable` in the Controls panel.",...d.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Treatments',
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="mb-2 text-xs text-foreground-muted">Default</p>
        <DemoTable />
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">Striped</p>
        <DemoTable striped />
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">Bordered</p>
        <DemoTable bordered />
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">Striped + Bordered</p>
        <DemoTable striped bordered />
      </div>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"The orthogonal treatments. `striped` and `bordered` are independent booleans,\nso they compose — the fourth table is both at once.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex flex-col gap-8">
      <div>
        <p className="mb-2 text-xs text-foreground-muted">sm</p>
        <DemoTable size="sm" />
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">md</p>
        <DemoTable size="md" />
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">lg</p>
        <DemoTable size="lg" />
      </div>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"Cell density — `sm` / `md` / `lg`.",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Hoverable',
  render: () => <DemoTable hoverable />
}`,...i.parameters?.docs?.source},description:{story:`Hover a body row to see the tint. (Resting state matches the default table;
the effect is only visible on pointer hover.)`,...i.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Selected Row',
  render: () => <div className="w-[520px]">
      <Table>
        <TableCaption>Team members</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead align="end">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{PEOPLE[0].name}</TableCell>
            <TableCell>{PEOPLE[0].email}</TableCell>
            <TableCell align="end">{PEOPLE[0].role}</TableCell>
          </TableRow>
          <TableRow selected>
            <TableCell>{PEOPLE[1].name}</TableCell>
            <TableCell>{PEOPLE[1].email}</TableCell>
            <TableCell align="end">{PEOPLE[1].role}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{PEOPLE[2].name}</TableCell>
            <TableCell>{PEOPLE[2].email}</TableCell>
            <TableCell align="end">{PEOPLE[2].role}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
}`,...m.parameters?.docs?.source},description:{story:'`selected` highlights a row via `data-state="selected"` — a theme-tinted\nsurface (a different token from the neutral hover / stripe tint) plus a left\naccent bar, so it stays distinct even on a striped or hoverable table. The\nhighlight fades in (respecting `prefers-reduced-motion`) and picks up a\nSpecial\'s brand hue.',...m.parameters?.docs?.description}}};const E=["Playground","Treatments","Sizes","Hoverable","SelectedRow"];export{i as Hoverable,d as Playground,m as SelectedRow,n as Sizes,o as Treatments,E as __namedExportsOrder,C as default};
