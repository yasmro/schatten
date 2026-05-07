import{j as e,r as f}from"./iframe-BR71pDDo.js";import{B as o}from"./Button-fusqHp_n.js";import{C as a}from"./Callout-rTtWO0nV.js";import"./preload-helper-BdHZps5x.js";import"./index-r3lr-Zc6.js";import"./index-CNJc8Daf.js";import"./index-Dlp6Wp2P.js";import"./chevron-up-BedBGzaO.js";import"./utils-d2XQ1MEC.js";import"./index-Drd88ecX.js";import"./Spinner-fJP2C27T.js";const z={title:"Components/lv1/Callout",component:a,parameters:{layout:"padded",docs:{description:{component:`Callout displays inline contextual information — beta notices, form
warnings, page-level announcements. It mirrors \`Toast\`'s five
variants and two treatments so the visual language is shared, but lives
in normal layout flow rather than overlaying the viewport.

## Body content
Pass body content either as \`children\` (rich JSX) or as the
\`description\` prop (plain text — matches Toast's API). If both are
provided, \`description\` wins.

## Action
The \`action\` prop accepts any ReactNode, so you can drop in a Button,
a link, or a more complex affordance. Unlike Toast (where action is a
\`{label, onClick}\` shape), Callouts often persist on screen and may
need richer UI.

**On \`treatment="solid"\`, prefer \`<Button variant="inverted">\`** for
action buttons so they remain legible on the saturated fill — see the
"Solid With Action" story below.

## Dismissibility
Pass \`onClose\` to render a close (X) button. Omit it for a static,
non-dismissible callout. State management for the closed-or-not flag
lives with the consumer.

## a11y
No \`role\` is set by default. For dynamic callouts that should be
announced when they appear, pass \`role="status"\` (polite) or
\`role="alert"\` (assertive). Static informational callouts do not
require a role.`}}},tags:["autodocs"],argTypes:{variant:{description:"State variant. Drives the icon, color treatment, and accent.",control:"select",options:["default","success","error","warning","info"],table:{type:{summary:'"default" | "success" | "error" | "warning" | "info"'},defaultValue:{summary:"default"}}},treatment:{description:"Visual treatment — `subtle` for soft tinted background, `solid` for filled.",control:"select",options:["subtle","solid"],table:{type:{summary:'"subtle" | "solid"'},defaultValue:{summary:"subtle"}}},title:{description:"Optional bold heading rendered above the body content.",control:"text"},children:{description:"Body content. Any ReactNode (text, links, lists).",control:"text"},action:{description:"Free-form action node rendered to the right of the body (e.g. a Button or link).",table:{type:{summary:"ReactNode"}},control:!1},onClose:{description:"When provided, a close (X) button is rendered and invokes this callback on click. Omit to render a non-dismissible callout.",table:{type:{summary:"() => void"}},control:!1}}},x=["default","success","error","warning","info"],g=["subtle","solid"],r={name:"Playground",args:{variant:"info",treatment:"subtle",title:"Heads up",children:"This is a beta feature. Behavior may change."}},s={name:"Subtle Treatments",render:()=>e.jsx("div",{className:"flex flex-col gap-3 max-w-xl",children:x.map(t=>e.jsx(a,{variant:t,treatment:"subtle",title:t.toUpperCase(),children:"The quick brown fox jumps over the lazy dog."},t))})},i={name:"Solid Treatments",render:()=>e.jsx("div",{className:"flex flex-col gap-3 max-w-xl",children:x.map(t=>e.jsx(a,{variant:t,treatment:"solid",title:t.toUpperCase(),children:"The quick brown fox jumps over the lazy dog."},t))})},l={name:"Title Only",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(a,{variant:"success",title:"Saved"}),e.jsx(a,{variant:"error",title:"Could not connect"})]})},c={name:"Body Only",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsxs(a,{variant:"info",children:["This feature is in ",e.jsx("strong",{children:"beta"}),". Please share feedback."]}),e.jsxs(a,{variant:"warning",children:["Three records were skipped."," ",e.jsx("a",{href:"#x",className:"underline",children:"View details"})]})]})},d={name:"With Action",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(a,{variant:"warning",title:"Unsaved changes",action:e.jsx(o,{size:"sm",children:"Save now"}),children:"Your changes will be lost if you leave this page."}),e.jsx(a,{variant:"info",title:"Update available",action:e.jsx(o,{size:"sm",variant:"secondary",children:"Reload"}),children:"A newer version of this app is ready."})]})},m={name:"Solid With Action",parameters:{docs:{description:{story:'On `treatment="solid"` the saturated background can clash with default Button variants. Pass `<Button variant="inverted">` so the action stays legible.'}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(a,{variant:"warning",treatment:"solid",title:"Unsaved changes",action:e.jsx(o,{variant:"inverted",size:"sm",children:"Save now"}),children:"Your changes will be lost if you leave this page."}),e.jsx(a,{variant:"info",treatment:"solid",title:"Update available",action:e.jsx(o,{variant:"inverted",size:"sm",children:"Reload"}),children:"A newer version of this app is ready."})]})},u={name:"Dismissible",render:()=>{const[t,n]=f.useState({a:!0,b:!0});return e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[t.a&&e.jsx(a,{variant:"info",title:"Heads up",onClose:()=>n(v=>({...v,a:!1})),children:"Click the close button to dismiss this callout."}),t.b&&e.jsx(a,{variant:"warning",title:"With action and close",action:e.jsx(o,{size:"sm",children:"Acknowledge"}),onClose:()=>n(v=>({...v,b:!1})),children:"Both action and close can coexist."}),!t.a&&!t.b&&e.jsx(o,{onClick:()=>n({a:!0,b:!0}),children:"Reset"})]})}},p={name:"Full Matrix",render:()=>e.jsx("div",{className:"grid grid-cols-1 gap-3 max-w-2xl",children:g.flatMap(t=>x.map(n=>e.jsx(a,{variant:n,treatment:t,title:`${n} / ${t}`,children:"The quick brown fox jumps over the lazy dog."},`${n}-${t}`)))})},h={name:"Long Content",render:()=>e.jsx("div",{className:"max-w-xl",children:e.jsx(a,{variant:"warning",title:"Heads up: long-running operation completed with warnings",action:e.jsx(o,{size:"sm",children:"View details"}),onClose:()=>{},children:"Three records were skipped because they did not match the expected schema. You can retry the import after correcting the source file, or proceed with the partial data that has already been saved."})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'info',
    treatment: 'subtle',
    title: 'Heads up',
    children: 'This is a beta feature. Behavior may change.'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {VARIANTS.map(variant => <Callout key={variant} variant={variant} treatment="subtle" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>)}
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {VARIANTS.map(variant => <Callout key={variant} variant={variant} treatment="solid" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>)}
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Title Only',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="success" title="Saved" />
      <Callout variant="error" title="Could not connect" />
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Body Only',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="info">
        This feature is in <strong>beta</strong>. Please share feedback.
      </Callout>
      <Callout variant="warning">
        Three records were skipped.{' '}
        <a href="#x" className="underline">
          View details
        </a>
      </Callout>
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Action',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="warning" title="Unsaved changes" action={<Button size="sm">Save now</Button>}>
        Your changes will be lost if you leave this page.
      </Callout>
      <Callout variant="info" title="Update available" action={<Button size="sm" variant="secondary">
            Reload
          </Button>}>
        A newer version of this app is ready.
      </Callout>
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Solid With Action',
  parameters: {
    docs: {
      description: {
        story: 'On \`treatment="solid"\` the saturated background can clash with default Button variants. Pass \`<Button variant="inverted">\` so the action stays legible.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="warning" treatment="solid" title="Unsaved changes" action={<Button variant="inverted" size="sm">
            Save now
          </Button>}>
        Your changes will be lost if you leave this page.
      </Callout>
      <Callout variant="info" treatment="solid" title="Update available" action={<Button variant="inverted" size="sm">
            Reload
          </Button>}>
        A newer version of this app is ready.
      </Callout>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Dismissible',
  render: () => {
    const [shown, setShown] = useState({
      a: true,
      b: true
    });
    return <div className="flex flex-col gap-3 max-w-xl">
        {shown.a && <Callout variant="info" title="Heads up" onClose={() => setShown(s => ({
        ...s,
        a: false
      }))}>
            Click the close button to dismiss this callout.
          </Callout>}
        {shown.b && <Callout variant="warning" title="With action and close" action={<Button size="sm">Acknowledge</Button>} onClose={() => setShown(s => ({
        ...s,
        b: false
      }))}>
            Both action and close can coexist.
          </Callout>}
        {!shown.a && !shown.b && <Button onClick={() => setShown({
        a: true,
        b: true
      })}>Reset</Button>}
      </div>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Full Matrix',
  render: () => <div className="grid grid-cols-1 gap-3 max-w-2xl">
      {TREATMENTS.flatMap(treatment => VARIANTS.map(variant => <Callout key={\`\${variant}-\${treatment}\`} variant={variant} treatment={treatment} title={\`\${variant} / \${treatment}\`}>
            The quick brown fox jumps over the lazy dog.
          </Callout>))}
    </div>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Long Content',
  render: () => <div className="max-w-xl">
      <Callout variant="warning" title="Heads up: long-running operation completed with warnings" action={<Button size="sm">View details</Button>} onClose={() => {}}>
        Three records were skipped because they did not match the expected schema. You can retry the
        import after correcting the source file, or proceed with the partial data that has already
        been saved.
      </Callout>
    </div>
}`,...h.parameters?.docs?.source}}};const R=["Playground","SubtleTreatments","SolidTreatments","TitleOnly","BodyOnly","WithAction","SolidWithAction","Dismissible","FullMatrix","LongContent"];export{c as BodyOnly,u as Dismissible,p as FullMatrix,h as LongContent,r as Playground,i as SolidTreatments,m as SolidWithAction,s as SubtleTreatments,l as TitleOnly,d as WithAction,R as __namedExportsOrder,z as default};
