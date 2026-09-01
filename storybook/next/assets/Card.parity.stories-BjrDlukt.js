import{j as e}from"./iframe-CKeauogQ.js";import{C as r,a as t,b as s,c as d,d as i,e as o}from"./Card-DEOFmw37.js";import"./preload-helper-LCxwLRn0.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";/* empty css             */const x={title:"Components/lv1/Card",component:r,parameters:{layout:"centered",docs:{description:{component:"Parity story — the React `<Card>` compound and a hand-written vanilla `<div>`\ntree carrying the matching `.st-card*` class chain must render\npixel-identical. Backs the VRT in `Card.parity.vrt.spec.ts`.\n\nThe React `<Card>` import pulls in `Card.css` as a side effect, so the\n`.st-card*` rules are loaded for the vanilla half too.\n\nThe footer here holds plain text rather than a `<Button>` so the comparison\nstays scoped to Card's own surface — Button parity is proven separately."}}}},a={name:"React vs Vanilla HTML",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-12",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-foreground-muted",children:"React"}),e.jsxs(r,{className:"w-[280px]",children:[e.jsxs(t,{children:[e.jsx(s,{children:"Card title"}),e.jsx(d,{children:"A short supporting description."})]}),e.jsx(i,{children:"Main content goes here."}),e.jsx(o,{children:"Footer"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-foreground-muted",children:"Vanilla HTML"}),e.jsxs("div",{className:"st-card st-card--filled w-[280px]",children:[e.jsxs("div",{className:"st-card__header",children:[e.jsx("div",{className:"st-card__title",children:"Card title"}),e.jsx("div",{className:"st-card__description",children:"A short supporting description."})]}),e.jsx("div",{className:"st-card__content",children:"Main content goes here."}),e.jsx("div",{className:"st-card__footer",children:"Footer"})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const v=["Parity"];export{a as Parity,v as __namedExportsOrder,x as default};
