import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{a as n,c as r,i,n as a,o,r as s,s as c,t as l}from"./Table-DN0h8-cb.js";var u,d,f,p;e((()=>{r(),u=t(),d={title:`Components/lv1/Table`,component:l,parameters:{layout:`centered`,docs:{description:{component:"Parity story — the React `<Table>` compound and a hand-written vanilla\n`<table>` tree carrying the matching `.st-table*` class chain must render\npixel-identical. Backs the VRT in `Table.parity.vrt.spec.ts`.\n\nThe React `<Table>` import pulls in `Table.css` as a side effect, so the\n`.st-table*` rules are loaded for the vanilla half too. Both halves use\n`striped bordered` so the treatment descendant selectors are exercised."}}}},f={name:`React vs Vanilla HTML`,render:()=>(0,u.jsxs)(`div`,{className:`grid grid-cols-2 gap-12`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{className:`mb-2 text-xs text-foreground-muted`,children:`React`}),(0,u.jsx)(`div`,{className:`w-[320px]`,children:(0,u.jsxs)(l,{striped:!0,bordered:!0,children:[(0,u.jsx)(s,{children:`Team members`}),(0,u.jsx)(o,{children:(0,u.jsxs)(c,{children:[(0,u.jsx)(n,{children:`Name`}),(0,u.jsx)(n,{align:`end`,children:`Role`})]})}),(0,u.jsxs)(a,{children:[(0,u.jsxs)(c,{children:[(0,u.jsx)(i,{children:`Taro Tanaka`}),(0,u.jsx)(i,{align:`end`,children:`Admin`})]}),(0,u.jsxs)(c,{children:[(0,u.jsx)(i,{children:`Hanako Sato`}),(0,u.jsx)(i,{align:`end`,children:`Editor`})]})]})]})})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{className:`mb-2 text-xs text-foreground-muted`,children:`Vanilla HTML`}),(0,u.jsx)(`div`,{className:`w-[320px]`,children:(0,u.jsx)(`div`,{className:`st-table-scroll`,children:(0,u.jsxs)(`table`,{className:`st-table st-table--md st-table--striped st-table--bordered`,children:[(0,u.jsx)(`caption`,{className:`st-table__caption`,children:`Team members`}),(0,u.jsx)(`thead`,{className:`st-table__header`,children:(0,u.jsxs)(`tr`,{className:`st-table__row`,children:[(0,u.jsx)(`th`,{className:`st-table__head st-table__head--start`,children:`Name`}),(0,u.jsx)(`th`,{className:`st-table__head st-table__head--end`,children:`Role`})]})}),(0,u.jsxs)(`tbody`,{className:`st-table__body`,children:[(0,u.jsxs)(`tr`,{className:`st-table__row`,children:[(0,u.jsx)(`td`,{className:`st-table__cell st-table__cell--start`,children:`Taro Tanaka`}),(0,u.jsx)(`td`,{className:`st-table__cell st-table__cell--end`,children:`Admin`})]}),(0,u.jsxs)(`tr`,{className:`st-table__row`,children:[(0,u.jsx)(`td`,{className:`st-table__cell st-table__cell--start`,children:`Hanako Sato`}),(0,u.jsx)(`td`,{className:`st-table__cell st-table__cell--end`,children:`Editor`})]})]})]})})})]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Parity`]}))();export{f as Parity,p as __namedExportsOrder,d as default};