import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-DKXMpdQE.js";import{n as r,t as i}from"./settings-Cvf_rrkF.js";import{n as a,t as o}from"./Button-DDWnd2Zv.js";import{n as s,t as c}from"./Input-TTuUNFr0.js";import{n as l,t as u}from"./Text-CWxM8Fw0.js";import{a as d,i as f,n as p,o as m,r as h,t as g}from"./Popover-urfOOhYB.js";var _,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{r(),_=n(),a(),s(),l(),m(),v=t(),y={title:`Components/lv1/Popover`,component:f,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{side:{description:`The preferred side of the trigger to render the popover against.`,control:`select`,options:[`top`,`right`,`bottom`,`left`],table:{type:{summary:`"top" | "right" | "bottom" | "left"`},defaultValue:{summary:`bottom`}}},align:{description:`The alignment against the trigger.`,control:`select`,options:[`start`,`center`,`end`],table:{type:{summary:`"start" | "center" | "end"`},defaultValue:{summary:`center`}}}}},b={name:`Playground`,args:{side:`bottom`,align:`center`},render:e=>(0,v.jsxs)(g,{children:[(0,v.jsx)(d,{children:(0,v.jsx)(o,{variant:`secondary`,children:`Open popover`})}),(0,v.jsx)(f,{...e,children:(0,v.jsx)(u,{children:`Place any content inside the panel.`})})]})},x={layout:`padded`,docs:{disable:!0},a11y:{config:{rules:[{id:`aria-hidden-focus`,enabled:!1}]}}},S={name:`Settings Panel (VRT)`,parameters:x,render:()=>(0,v.jsxs)(g,{defaultOpen:!0,children:[(0,v.jsx)(d,{children:(0,v.jsx)(o,{variant:`secondary`,icon:i,children:`Settings`})}),(0,v.jsx)(f,{className:`w-72`,children:(0,v.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,v.jsx)(u,{variant:`heading`,size:`sm`,children:`Dimensions`}),(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsxs)(`label`,{className:`flex items-center justify-between gap-4 text-sm`,htmlFor:`pop-w`,children:[`Width`,(0,v.jsx)(c,{id:`pop-w`,defaultValue:`100%`,className:`w-32`})]}),(0,v.jsxs)(`label`,{className:`flex items-center justify-between gap-4 text-sm`,htmlFor:`pop-h`,children:[`Height`,(0,v.jsx)(c,{id:`pop-h`,defaultValue:`auto`,className:`w-32`})]})]}),(0,v.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,v.jsx)(h,{children:(0,v.jsx)(o,{variant:`tertiary`,size:`sm`,children:`Cancel`})}),(0,v.jsx)(h,{children:(0,v.jsx)(o,{size:`sm`,children:`Save`})})]})]})})]})},C={name:`Info (VRT)`,parameters:x,render:()=>(0,v.jsxs)(g,{defaultOpen:!0,children:[(0,v.jsx)(d,{children:(0,v.jsx)(o,{variant:`tertiary`,children:`About`})}),(0,v.jsx)(f,{className:`w-64`,children:(0,v.jsx)(u,{children:`Popover renders click-triggered content over the page. Press Escape or click outside to dismiss.`})})]})},w={name:`Placements (VRT)`,parameters:x,render:()=>(0,v.jsx)(`div`,{className:`flex flex-col items-center gap-32 py-16`,children:[`left`,`top`,`bottom`,`right`].map(e=>(0,v.jsxs)(g,{defaultOpen:!0,children:[(0,v.jsx)(d,{children:(0,v.jsxs)(o,{variant:`secondary`,children:[`side: `,e]})}),(0,v.jsx)(f,{side:e,className:`w-40`,onOpenAutoFocus:e=>e.preventDefault(),children:(0,v.jsxs)(u,{children:[`Opens on `,e,`.`]})})]},e))})},T={name:`With Anchor`,parameters:{docs:{disable:!0}},render:()=>{let[e,t]=(0,_.useState)(!0);return(0,v.jsxs)(`div`,{className:`flex flex-col items-center gap-6 py-8`,children:[(0,v.jsxs)(g,{open:e,onOpenChange:t,children:[(0,v.jsx)(p,{children:(0,v.jsx)(`div`,{className:`rounded border border-border-strong px-6 py-3 text-sm text-foreground-muted`,children:`Positioning anchor`})}),(0,v.jsx)(f,{side:`bottom`,className:`w-56`,children:(0,v.jsx)(u,{children:`Positioned against the anchor box, not the toggle button.`})})]}),(0,v.jsx)(o,{variant:`secondary`,onClick:()=>t(e=>!e),children:`Toggle (separate button)`})]})}},E={name:`Controlled`,parameters:{docs:{disable:!0}},render:()=>{let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(g,{open:e,onOpenChange:t,children:[(0,v.jsx)(d,{children:(0,v.jsxs)(o,{variant:`secondary`,children:[e?`Close`:`Open`,` popover`]})}),(0,v.jsx)(f,{children:(0,v.jsx)(u,{children:`Controlled content.`})})]})}},D=[`Playground`,`SettingsPanel`,`Info`,`Placements`,`WithAnchor`,`Controlled`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    side: 'bottom',
    align: 'center'
  },
  render: (args: PopoverContentProps) => <Popover>
      <PopoverTrigger>
        <Button variant="secondary">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent {...args}>
        <Text>Place any content inside the panel.</Text>
      </PopoverContent>
    </Popover>
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Settings Panel (VRT)',
  parameters: openParams,
  render: () => <Popover defaultOpen>
      <PopoverTrigger>
        <Button variant="secondary" icon={Settings}>
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="flex flex-col gap-3">
          <Text variant="heading" size="sm">
            Dimensions
          </Text>
          <div className="flex flex-col gap-2">
            <label className="flex items-center justify-between gap-4 text-sm" htmlFor="pop-w">
              Width
              <Input id="pop-w" defaultValue="100%" className="w-32" />
            </label>
            <label className="flex items-center justify-between gap-4 text-sm" htmlFor="pop-h">
              Height
              <Input id="pop-h" defaultValue="auto" className="w-32" />
            </label>
          </div>
          <div className="flex justify-end gap-2">
            <PopoverClose>
              <Button variant="tertiary" size="sm">
                Cancel
              </Button>
            </PopoverClose>
            <PopoverClose>
              <Button size="sm">Save</Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...S.parameters?.docs?.source},description:{story:`A settings panel with a heading, form controls, and a close action — the
canonical "click to reveal editable content" use case. Pinned \`defaultOpen\`
so VRT can capture the portaled content in one frame.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Info (VRT)',
  parameters: openParams,
  render: () => <Popover defaultOpen>
      <PopoverTrigger>
        <Button variant="tertiary">About</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <Text>
          Popover renders click-triggered content over the page. Press Escape or click outside to
          dismiss.
        </Text>
      </PopoverContent>
    </Popover>
}`,...C.parameters?.docs?.source},description:{story:`Plain informational panel — minimal content, default placement.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Placements (VRT)',
  parameters: openParams,
  render: () => <div className="flex flex-col items-center gap-32 py-16">
      {(['left', 'top', 'bottom', 'right'] as const).map(side => <Popover key={side} defaultOpen>
          <PopoverTrigger>
            <Button variant="secondary">side: {side}</Button>
          </PopoverTrigger>
          {/* Four non-modal popovers open at once: prevent each panel from
           * grabbing focus on open, otherwise one opening counts as an
           * "outside" event that dismisses the others. */}
          <PopoverContent side={side} className="w-40" onOpenAutoFocus={e => e.preventDefault()}>
            <Text>Opens on {side}.</Text>
          </PopoverContent>
        </Popover>)}
    </div>
}`,...w.parameters?.docs?.source},description:{story:"All four `side` placements, pinned open. Triggers are stacked in a column\nwith generous spacing so each portaled panel opens clear of its neighbours\n(`left` / `right` extend horizontally; `top` / `bottom` diverge vertically).",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With Anchor',
  parameters: {
    docs: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="flex flex-col items-center gap-6 py-8">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverAnchor>
            <div className="rounded border border-border-strong px-6 py-3 text-sm text-foreground-muted">
              Positioning anchor
            </div>
          </PopoverAnchor>
          <PopoverContent side="bottom" className="w-56">
            <Text>Positioned against the anchor box, not the toggle button.</Text>
          </PopoverContent>
        </Popover>
        <Button variant="secondary" onClick={() => setOpen(o => !o)}>
          Toggle (separate button)
        </Button>
      </div>;
  }
}`,...T.parameters?.docs?.source},description:{story:"`PopoverAnchor` decouples the positioning reference from the open trigger:\nthe panel is positioned against the bordered anchor box, while a **separate**\nbutton toggles the controlled `open` state. Note this pattern uses\ncontrolled `open` rather than `PopoverTrigger` — rendering both an explicit\n`PopoverAnchor` and a `PopoverTrigger` gives Radix two competing anchors and\nthe content loses its positioning reference. Interactive (not in the VRT\nroster); the anchor wiring is pinned by the unit test.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Controlled',
  parameters: {
    docs: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <Button variant="secondary">{open ? 'Close' : 'Open'} popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Text>Controlled content.</Text>
        </PopoverContent>
      </Popover>;
  }
}`,...E.parameters?.docs?.source},description:{story:"Controlled open state via `open` / `onOpenChange`.",...E.parameters?.docs?.description}}}})))()}O();export{E as Controlled,C as Info,w as Placements,b as Playground,S as SettingsPanel,T as WithAnchor,D as __namedExportsOrder,y as default};