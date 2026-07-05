import{j as e}from"./iframe-Cr0kc8y4.js";import{T as d,a as r,b as c,c as t,d as s,e as n,f as a}from"./Table-B27OBmr0.js";import"./preload-helper-DCdX0CHv.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css              */const T={title:"Components/lv1/Table",component:d,parameters:{layout:"centered",docs:{description:{component:"Parity story — the React `<Table>` compound and a hand-written vanilla\n`<table>` tree carrying the matching `.st-table*` class chain must render\npixel-identical. Backs the VRT in `Table.parity.vrt.spec.ts`.\n\nThe React `<Table>` import pulls in `Table.css` as a side effect, so the\n`.st-table*` rules are loaded for the vanilla half too. Both halves use\n`striped bordered` so the treatment descendant selectors are exercised."}}}},l={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-foreground-muted",children:"React"}),e.jsx("div",{className:"w-[320px]",children:e.jsxs(d,{striped:!0,bordered:!0,children:[e.jsx(r,{children:"Team members"}),e.jsx(c,{children:e.jsxs(t,{children:[e.jsx(s,{children:"Name"}),e.jsx(s,{align:"end",children:"Role"})]})}),e.jsxs(n,{children:[e.jsxs(t,{children:[e.jsx(a,{children:"Taro Tanaka"}),e.jsx(a,{align:"end",children:"Admin"})]}),e.jsxs(t,{children:[e.jsx(a,{children:"Hanako Sato"}),e.jsx(a,{align:"end",children:"Editor"})]})]})]})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-foreground-muted",children:"Vanilla HTML"}),e.jsx("div",{className:"w-[320px]",children:e.jsx("div",{className:"st-table-scroll",children:e.jsxs("table",{className:"st-table st-table--md st-table--striped st-table--bordered",children:[e.jsx("caption",{className:"st-table__caption",children:"Team members"}),e.jsx("thead",{className:"st-table__header",children:e.jsxs("tr",{className:"st-table__row",children:[e.jsx("th",{className:"st-table__head st-table__head--start",children:"Name"}),e.jsx("th",{className:"st-table__head st-table__head--end",children:"Role"})]})}),e.jsxs("tbody",{className:"st-table__body",children:[e.jsxs("tr",{className:"st-table__row",children:[e.jsx("td",{className:"st-table__cell st-table__cell--start",children:"Taro Tanaka"}),e.jsx("td",{className:"st-table__cell st-table__cell--end",children:"Admin"})]}),e.jsxs("tr",{className:"st-table__row",children:[e.jsx("td",{className:"st-table__cell st-table__cell--start",children:"Hanako Sato"}),e.jsx("td",{className:"st-table__cell st-table__cell--end",children:"Editor"})]})]})]})})})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12">
      <div>
        <p className="mb-2 text-xs text-foreground-muted">React</p>
        <div className="w-[320px]">
          <Table striped bordered>
            <TableCaption>Team members</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead align="end">Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Taro Tanaka</TableCell>
                <TableCell align="end">Admin</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hanako Sato</TableCell>
                <TableCell align="end">Editor</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">Vanilla HTML</p>
        <div className="w-[320px]">
          <div className="st-table-scroll">
            <table className="st-table st-table--md st-table--striped st-table--bordered">
              <caption className="st-table__caption">Team members</caption>
              <thead className="st-table__header">
                <tr className="st-table__row">
                  <th className="st-table__head st-table__head--start">Name</th>
                  <th className="st-table__head st-table__head--end">Role</th>
                </tr>
              </thead>
              <tbody className="st-table__body">
                <tr className="st-table__row">
                  <td className="st-table__cell st-table__cell--start">Taro Tanaka</td>
                  <td className="st-table__cell st-table__cell--end">Admin</td>
                </tr>
                <tr className="st-table__row">
                  <td className="st-table__cell st-table__cell--start">Hanako Sato</td>
                  <td className="st-table__cell st-table__cell--end">Editor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};const x=["Parity"];export{l as Parity,x as __namedExportsOrder,T as default};
