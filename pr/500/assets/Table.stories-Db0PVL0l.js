import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{a as n,c as r,i,n as a,o,r as s,s as c,t as l}from"./Table-DN0h8-cb.js";function u(e){return(0,d.jsx)(`div`,{className:`w-[520px]`,children:(0,d.jsxs)(l,{...e,children:[(0,d.jsx)(s,{children:`Team members`}),(0,d.jsx)(o,{children:(0,d.jsxs)(c,{children:[(0,d.jsx)(n,{children:`Name`}),(0,d.jsx)(n,{children:`Email`}),(0,d.jsx)(n,{align:`end`,children:`Role`})]})}),(0,d.jsx)(a,{children:p.map(e=>(0,d.jsxs)(c,{children:[(0,d.jsx)(i,{children:e.name}),(0,d.jsx)(i,{children:e.email}),(0,d.jsx)(i,{align:`end`,children:e.role})]},e.email))})]})})}var d,f,p,m,h,g,_,v,y;e((()=>{r(),d=t(),f={title:`Components/lv1/Table`,component:l,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{size:{description:`Cell density (padding + font-size).`,control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},striped:{description:`Zebra-stripe the body rows. Orthogonal to bordered.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},bordered:{description:`Draw a border around every cell. Orthogonal to striped.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},hoverable:{description:`Tint body rows on hover (presentational only).`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}}}},p=[{name:`Taro Tanaka`,email:`tanaka@example.com`,role:`Admin`},{name:`Hanako Sato`,email:`sato@example.com`,role:`Editor`},{name:`Ken Suzuki`,email:`suzuki@example.com`,role:`Viewer`}],m={args:{size:`md`,striped:!1,bordered:!1,hoverable:!1},render:e=>(0,d.jsx)(u,{...e})},h={name:`Treatments`,render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`mb-2 text-xs text-foreground-muted`,children:`Default`}),(0,d.jsx)(u,{})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`mb-2 text-xs text-foreground-muted`,children:`Striped`}),(0,d.jsx)(u,{striped:!0})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`mb-2 text-xs text-foreground-muted`,children:`Bordered`}),(0,d.jsx)(u,{bordered:!0})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`mb-2 text-xs text-foreground-muted`,children:`Striped + Bordered`}),(0,d.jsx)(u,{striped:!0,bordered:!0})]})]})},g={name:`Sizes`,render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`mb-2 text-xs text-foreground-muted`,children:`sm`}),(0,d.jsx)(u,{size:`sm`})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`mb-2 text-xs text-foreground-muted`,children:`md`}),(0,d.jsx)(u,{size:`md`})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`mb-2 text-xs text-foreground-muted`,children:`lg`}),(0,d.jsx)(u,{size:`lg`})]})]})},_={name:`Hoverable`,render:()=>(0,d.jsx)(u,{hoverable:!0})},v={name:`Selected Row`,render:()=>(0,d.jsx)(`div`,{className:`w-[520px]`,children:(0,d.jsxs)(l,{children:[(0,d.jsx)(s,{children:`Team members`}),(0,d.jsx)(o,{children:(0,d.jsxs)(c,{children:[(0,d.jsx)(n,{children:`Name`}),(0,d.jsx)(n,{children:`Email`}),(0,d.jsx)(n,{align:`end`,children:`Role`})]})}),(0,d.jsxs)(a,{children:[(0,d.jsxs)(c,{children:[(0,d.jsx)(i,{children:p[0].name}),(0,d.jsx)(i,{children:p[0].email}),(0,d.jsx)(i,{align:`end`,children:p[0].role})]}),(0,d.jsxs)(c,{selected:!0,children:[(0,d.jsx)(i,{children:p[1].name}),(0,d.jsx)(i,{children:p[1].email}),(0,d.jsx)(i,{align:`end`,children:p[1].role})]}),(0,d.jsxs)(c,{children:[(0,d.jsx)(i,{children:p[2].name}),(0,d.jsx)(i,{children:p[2].email}),(0,d.jsx)(i,{align:`end`,children:p[2].role})]})]})]})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    striped: false,
    bordered: false,
    hoverable: false
  },
  render: args => <DemoTable {...args} />
}`,...m.parameters?.docs?.source},description:{story:"Interactive single instance — toggle `size` / `striped` / `bordered` /\n`hoverable` in the Controls panel.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:"The orthogonal treatments. `striped` and `bordered` are independent booleans,\nso they compose — the fourth table is both at once.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:"Cell density — `sm` / `md` / `lg`.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Hoverable',
  render: () => <DemoTable hoverable />
}`,..._.parameters?.docs?.source},description:{story:`Hover a body row to see the tint. (Resting state matches the default table;
the effect is only visible on pointer hover.)`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:'`selected` highlights a row via `data-state="selected"` — a theme-tinted\nsurface (a different token from the neutral hover / stripe tint) plus a left\naccent bar, so it stays distinct even on a striped or hoverable table. The\nhighlight fades in (respecting `prefers-reduced-motion`) and picks up a\nSpecial\'s brand hue.',...v.parameters?.docs?.description}}},y=[`Playground`,`Treatments`,`Sizes`,`Hoverable`,`SelectedRow`]}))();export{_ as Hoverable,m as Playground,v as SelectedRow,g as Sizes,h as Treatments,y as __namedExportsOrder,f as default};