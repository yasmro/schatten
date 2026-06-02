import{i as e}from"./preload-helper-ChaSUgV0.js";import{t}from"./iframe-DK9TY03R.js";import{A as n,C as r,D as i,I as a,L as o,M as s,S as c,T as l,_ as u,b as d,c as f,d as p,f as m,g as h,k as g,l as _,n as v,o as y,p as b,s as x,t as S,y as C}from"./lucide-react-DLEtKJ8w.js";import{n as w,t as T}from"./Button-uALweSOg.js";var E,D,O,k,A,j,M,N,P,F,I,L;e((()=>{S(),w(),E=t(),D={title:`Components/lv1/Button`,component:T,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{description:`Visual style of the button.`,control:`select`,options:[`primary`,`secondary`,`tertiary`,`inverted`,`destructive`,`link`],table:{type:{summary:`"primary" | "secondary" | "tertiary" | "inverted" | "destructive" | "link"`},defaultValue:{summary:`primary`}}},size:{description:`Size of the button.`,control:`select`,options:[`sm`,`md`,`lg`],table:{type:{summary:`"sm" | "md" | "lg"`},defaultValue:{summary:`md`}}},icon:{description:"Lucide icon component to render. Import the icon from `lucide-react` and pass it directly (e.g. `icon={Search}`).",control:`select`,options:[`ArrowLeft`,`ArrowRight`,`Check`,`ChevronLeft`,`ChevronRight`,`CircleAlert`,`Clock`,`Download`,`ExternalLink`,`Eye`,`Globe`,`Lock`,`Mail`,`Plus`,`Search`,`Send`,`Sparkles`,`Star`,`Tag`,`Trash2`,`X`],mapping:{ArrowLeft:o,ArrowRight:a,Check:s,ChevronLeft:n,ChevronRight:g,CircleAlert:i,Clock:l,Download:r,ExternalLink:c,Eye:d,Globe:C,Lock:u,Mail:h,Plus:b,Search:m,Send:p,Sparkles:_,Star:f,Tag:x,Trash2:y,X:v},table:{type:{summary:`LucideIcon`},defaultValue:{summary:`-`}}},iconPosition:{description:`Position of the icon relative to the label text.`,control:`select`,options:[`start`,`end`],table:{type:{summary:`"start" | "end"`},defaultValue:{summary:`start`}}},asChild:{description:`Delegates props to the child element via Radix Slot.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},isLoading:{description:`Shows a loading spinner and disables the button.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},disabled:{description:`Disables the button and applies disabled styling.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},children:{description:`Label text or content inside the button.`,control:`text`,table:{type:{summary:`ReactNode`}}}}},O={name:`Playground`,args:{variant:`primary`,size:`md`,children:`Button`}},k={name:`All Variants`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,E.jsx)(T,{variant:`primary`,children:`Primary`}),(0,E.jsx)(T,{variant:`secondary`,children:`Secondary`}),(0,E.jsx)(T,{variant:`tertiary`,children:`Tertiary`}),(0,E.jsx)(T,{variant:`destructive`,children:`Destructive`})]}),(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-4 rounded-lg bg-solid p-4`,children:[(0,E.jsx)(T,{variant:`inverted`,children:`Inverted`}),(0,E.jsx)(T,{variant:`inverted`,icon:v,"aria-label":`Close`})]})]})},A={name:`Sizes`,render:()=>(0,E.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,E.jsx)(T,{size:`sm`,children:`Small`}),(0,E.jsx)(T,{size:`md`,children:`Medium`}),(0,E.jsx)(T,{size:`lg`,children:`Large`}),(0,E.jsx)(T,{icon:b,"aria-label":`Add`})]})},j={name:`Icons`,render:()=>(0,E.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,E.jsx)(T,{icon:m,children:`Search`}),(0,E.jsx)(T,{icon:a,iconPosition:`end`,children:`Next`}),(0,E.jsx)(T,{icon:b,"aria-label":`Add`}),(0,E.jsx)(T,{variant:`destructive`,icon:y,children:`Delete`})]})},M={name:`Icon Positions`,render:()=>(0,E.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,E.jsx)(T,{icon:n,children:`Back`}),(0,E.jsx)(T,{icon:g,iconPosition:`end`,children:`Next`}),(0,E.jsx)(T,{icon:r,size:`sm`,children:`Download`}),(0,E.jsx)(T,{icon:p,size:`lg`,iconPosition:`end`,children:`Send`})]})},N={name:`Loading`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,E.jsx)(T,{isLoading:!0,children:`Primary`}),(0,E.jsx)(T,{variant:`secondary`,isLoading:!0,children:`Secondary`}),(0,E.jsx)(T,{variant:`tertiary`,isLoading:!0,children:`Tertiary`}),(0,E.jsx)(T,{variant:`destructive`,isLoading:!0,children:`Destructive`})]})},P={name:`Link`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-col gap-4 text-base text-foreground leading-relaxed`,children:[(0,E.jsxs)(`p`,{children:[`This is a paragraph with a `,(0,E.jsx)(T,{variant:`link`,children:`link button`}),` embedded inline. It behaves like a text link but retains button semantics for accessibility.`]}),(0,E.jsxs)(`p`,{children:[`You can also add an icon:`,` `,(0,E.jsx)(T,{variant:`link`,icon:c,iconPosition:`end`,children:`external link`}),` `,`to indicate navigation.`]})]})},F={name:`Disabled`,render:()=>(0,E.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,E.jsx)(T,{disabled:!0,children:`Primary`}),(0,E.jsx)(T,{variant:`secondary`,disabled:!0,children:`Secondary`}),(0,E.jsx)(T,{variant:`tertiary`,disabled:!0,children:`Tertiary`}),(0,E.jsx)(T,{variant:`destructive`,disabled:!0,icon:y,children:`Delete`}),(0,E.jsxs)(`p`,{className:`text-base text-foreground`,children:[`Disabled`,` `,(0,E.jsx)(T,{variant:`link`,disabled:!0,children:`link button`}),` `,`in text.`]})]})},I={name:`Inverted on saturated surfaces`,render:()=>(0,E.jsx)(`div`,{className:`flex flex-col gap-3`,children:[{label:`error`,cls:`bg-error text-error-foreground`},{label:`success`,cls:`bg-success text-success-foreground`},{label:`warning`,cls:`bg-warning text-warning-foreground`},{label:`info`,cls:`bg-info text-info-foreground`},{label:`destructive`,cls:`bg-destructive text-destructive-foreground`},{label:`solid (brand)`,cls:`bg-solid text-solid-foreground`}].map(e=>(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-4 px-4 py-3 rounded ${e.cls}`,children:[(0,E.jsxs)(`span`,{className:`text-sm font-medium`,children:[`On `,e.label,` surface`]}),(0,E.jsxs)(`div`,{className:`flex gap-2`,children:[(0,E.jsx)(T,{variant:`inverted`,size:`sm`,children:`Enabled`}),(0,E.jsx)(T,{variant:`inverted`,size:`sm`,disabled:!0,children:`Disabled`})]})]},e.label))})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      {/* \`inverted\` is intended for placement on a saturated surface; preview
          it on a solid background so the contrast pattern is visible. */}
      <div className="flex flex-wrap gap-4 rounded-lg bg-solid p-4">
        <Button variant="inverted">Inverted</Button>
        <Button variant="inverted" icon={X} aria-label="Close" />
      </div>
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button icon={Plus} aria-label="Add" />
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Icons',
  render: () => <div className="flex items-center gap-4">
      <Button icon={Search}>Search</Button>
      <Button icon={ArrowRight} iconPosition="end">
        Next
      </Button>
      <Button icon={Plus} aria-label="Add" />
      <Button variant="destructive" icon={Trash2}>
        Delete
      </Button>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Icon Positions',
  render: () => <div className="flex items-center gap-4">
      <Button icon={ChevronLeft}>Back</Button>
      <Button icon={ChevronRight} iconPosition="end">
        Next
      </Button>
      <Button icon={Download} size="sm">
        Download
      </Button>
      <Button icon={Send} size="lg" iconPosition="end">
        Send
      </Button>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Loading',
  render: () => <div className="flex flex-wrap gap-4">
      <Button isLoading>Primary</Button>
      <Button variant="secondary" isLoading>
        Secondary
      </Button>
      <Button variant="tertiary" isLoading>
        Tertiary
      </Button>
      <Button variant="destructive" isLoading>
        Destructive
      </Button>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Link',
  render: () => <div className="flex flex-col gap-4 text-base text-foreground leading-relaxed">
      <p>
        This is a paragraph with a <Button variant="link">link button</Button> embedded inline. It
        behaves like a text link but retains button semantics for accessibility.
      </p>
      <p>
        You can also add an icon:{' '}
        <Button variant="link" icon={ExternalLink} iconPosition="end">
          external link
        </Button>{' '}
        to indicate navigation.
      </p>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div className="flex flex-wrap gap-4">
      <Button disabled>Primary</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="tertiary" disabled>
        Tertiary
      </Button>
      <Button variant="destructive" disabled icon={Trash2}>
        Delete
      </Button>
      <p className="text-base text-foreground">
        Disabled{' '}
        <Button variant="link" disabled>
          link button
        </Button>{' '}
        in text.
      </p>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Inverted on saturated surfaces',
  render: () => <div className="flex flex-col gap-3">
      {[{
      label: 'error',
      cls: 'bg-error text-error-foreground'
    }, {
      label: 'success',
      cls: 'bg-success text-success-foreground'
    }, {
      label: 'warning',
      cls: 'bg-warning text-warning-foreground'
    }, {
      label: 'info',
      cls: 'bg-info text-info-foreground'
    }, {
      label: 'destructive',
      cls: 'bg-destructive text-destructive-foreground'
    }, {
      label: 'solid (brand)',
      cls: 'bg-solid text-solid-foreground'
    }].map(s => <div key={s.label} className={\`flex items-center justify-between gap-4 px-4 py-3 rounded \${s.cls}\`}>
          <span className="text-sm font-medium">On {s.label} surface</span>
          <div className="flex gap-2">
            <Button variant="inverted" size="sm">
              Enabled
            </Button>
            <Button variant="inverted" size="sm" disabled>
              Disabled
            </Button>
          </div>
        </div>)}
    </div>
}`,...I.parameters?.docs?.source}}},L=[`Playground`,`AllVariants`,`Sizes`,`Icons`,`IconPositions`,`Loading`,`LinkVariant`,`Disabled`,`InvertedOnSaturatedSurfaces`]}))();export{k as AllVariants,F as Disabled,M as IconPositions,j as Icons,I as InvertedOnSaturatedSurfaces,P as LinkVariant,N as Loading,O as Playground,A as Sizes,L as __namedExportsOrder,D as default};