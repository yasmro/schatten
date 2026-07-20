import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./Card-5DSSbHTP.js";var l,u,d,f;e((()=>{s(),l=t(),u={title:`Components/lv1/Card`,component:c,parameters:{layout:`centered`,docs:{description:{component:"Parity story — the React `<Card>` compound and a hand-written vanilla `<div>`\ntree carrying the matching `.st-card*` class chain must render\npixel-identical. Backs the VRT in `Card.parity.vrt.spec.ts`.\n\nThe React `<Card>` import pulls in `Card.css` as a side effect, so the\n`.st-card*` rules are loaded for the vanilla half too.\n\nThe footer here holds plain text rather than a `<Button>` so the comparison\nstays scoped to Card's own surface — Button parity is proven separately."}}}},d={name:`React vs Vanilla HTML`,render:()=>(0,l.jsxs)(`div`,{className:`grid grid-cols-2 gap-12`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`p`,{className:`mb-2 text-xs text-foreground-muted`,children:`React`}),(0,l.jsxs)(c,{className:`w-[280px]`,children:[(0,l.jsxs)(n,{children:[(0,l.jsx)(a,{children:`Card title`}),(0,l.jsx)(o,{children:`A short supporting description.`})]}),(0,l.jsx)(i,{children:`Main content goes here.`}),(0,l.jsx)(r,{children:`Footer`})]})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`p`,{className:`mb-2 text-xs text-foreground-muted`,children:`Vanilla HTML`}),(0,l.jsxs)(`div`,{className:`st-card st-card--filled w-[280px]`,children:[(0,l.jsxs)(`div`,{className:`st-card__header`,children:[(0,l.jsx)(`div`,{className:`st-card__title`,children:`Card title`}),(0,l.jsx)(`div`,{className:`st-card__description`,children:`A short supporting description.`})]}),(0,l.jsx)(`div`,{className:`st-card__content`,children:`Main content goes here.`}),(0,l.jsx)(`div`,{className:`st-card__footer`,children:`Footer`})]})]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML',
  render: () => <div className="grid grid-cols-2 gap-12">
      <div>
        <p className="mb-2 text-xs text-foreground-muted">React</p>
        <Card className="w-[280px]">
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>A short supporting description.</CardDescription>
          </CardHeader>
          <CardContent>Main content goes here.</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
      <div>
        <p className="mb-2 text-xs text-foreground-muted">Vanilla HTML</p>
        <div className="st-card st-card--filled w-[280px]">
          <div className="st-card__header">
            <div className="st-card__title">Card title</div>
            <div className="st-card__description">A short supporting description.</div>
          </div>
          <div className="st-card__content">Main content goes here.</div>
          <div className="st-card__footer">Footer</div>
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Parity`]}))();export{d as Parity,f as __namedExportsOrder,u as default};