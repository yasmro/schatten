import{j as e,r as X}from"./iframe-DpyswGKM.js";import{B as n}from"./Button-s_hkkFAK.js";import{C as t}from"./Callout-B-EjnhEs.js";import"./preload-helper-DUEUtxdG.js";import"./index-BEiXyTCG.js";import"./index-C4JtAu9t.js";import"./index-BHFy0lnD.js";import"./chevron-up-BOZIja0B.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./Spinner-BLeh5bXw.js";const se={title:"Components/lv1/Callout",component:t,parameters:{layout:"padded",docs:{description:{component:`Callout displays inline contextual information — beta notices, form
warnings, page-level announcements. It mirrors \`Toast\`'s variants and
two appearances so the visual language is shared, but lives in normal
layout flow rather than overlaying the viewport.

## Body content
Pass body content either as \`children\` (rich JSX) or as the
\`description\` prop (plain text — matches Toast's API). If both are
provided, \`description\` wins.

## Action
The \`action\` prop accepts any ReactNode, so you can drop in a Button,
a link, or a more complex affordance. Unlike Toast (where action is a
\`{label, onClick}\` shape), Callouts often persist on screen and may
need richer UI.

**On \`appearance="solid"\`, prefer \`<Button variant="inverted">\`** for
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
require a role.`}}},tags:["autodocs"],argTypes:{variant:{description:"Tone / state variant. Drives the icon, color treatment, and accent.",control:"select",options:["neutral","accent","success","error","warning","info"],table:{type:{summary:'"neutral" | "accent" | "success" | "error" | "warning" | "info"'},defaultValue:{summary:"neutral"}}},appearance:{description:"Visual appearance — `subtle` for soft tinted background, `solid` for filled.",control:"select",options:["subtle","solid"],table:{type:{summary:'"subtle" | "solid"'},defaultValue:{summary:"subtle"}}},title:{description:"Optional bold heading rendered above the body content.",control:"text"},children:{description:"Body content. Any ReactNode (text, links, lists).",control:"text"},action:{description:"Free-form action node rendered to the right of the body (e.g. a Button or link).",table:{type:{summary:"ReactNode"}},control:!1},onClose:{description:"When provided, a close (X) button is rendered and invokes this callback on click. Omit to render a non-dismissible callout.",table:{type:{summary:"() => void"}},control:!1}}},Y=["accent","success","error","warning","info"],M=["neutral","success","error","warning","info"],r={name:"Playground",args:{variant:"info",appearance:"subtle",title:"Heads up",children:"This is a beta feature. Behavior may change."}},o={name:"Subtle Treatments",render:()=>e.jsx("div",{className:"flex flex-col gap-3 max-w-xl",children:M.map(a=>e.jsx(t,{variant:a,appearance:"subtle",title:a.toUpperCase(),children:"The quick brown fox jumps over the lazy dog."},a))})},s={name:"Solid Treatments",render:()=>e.jsx("div",{className:"flex flex-col gap-3 max-w-xl",children:Y.map(a=>e.jsx(t,{variant:a,appearance:"solid",title:a.toUpperCase(),children:"The quick brown fox jumps over the lazy dog."},a))})},i={name:"Title Only",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(t,{variant:"success",title:"Saved"}),e.jsx(t,{variant:"error",title:"Could not connect"})]})},l={name:"Body Only",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsxs(t,{variant:"info",children:["This feature is in ",e.jsx("strong",{children:"beta"}),". Please share feedback."]}),e.jsxs(t,{variant:"warning",children:["Three records were skipped."," ",e.jsx("a",{href:"#x",className:"underline",children:"View details"})]})]})},c={name:"With Action",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(t,{variant:"warning",title:"Unsaved changes",action:e.jsx(n,{size:"sm",children:"Save now"}),children:"Your changes will be lost if you leave this page."}),e.jsx(t,{variant:"info",title:"Update available",action:e.jsx(n,{size:"sm",variant:"secondary",children:"Reload"}),children:"A newer version of this app is ready."})]})},d={name:"Solid With Action",parameters:{docs:{description:{story:'On `appearance="solid"` the saturated background can clash with default Button variants. Pass `<Button variant="inverted">` so the action stays legible.'}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(t,{variant:"warning",appearance:"solid",title:"Unsaved changes",action:e.jsx(n,{variant:"inverted",size:"sm",children:"Save now"}),children:"Your changes will be lost if you leave this page."}),e.jsx(t,{variant:"info",appearance:"solid",title:"Update available",action:e.jsx(n,{variant:"inverted",size:"sm",children:"Reload"}),children:"A newer version of this app is ready."})]})},p={name:"Dismissible",render:()=>{const[a,h]=X.useState({a:!0,b:!0});return e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[a.a&&e.jsx(t,{variant:"info",title:"Heads up",onClose:()=>h(v=>({...v,a:!1})),children:"Click the close button to dismiss this callout."}),a.b&&e.jsx(t,{variant:"warning",title:"With action and close",action:e.jsx(n,{size:"sm",children:"Acknowledge"}),onClose:()=>h(v=>({...v,b:!1})),children:"Both action and close can coexist."}),!a.a&&!a.b&&e.jsx(n,{onClick:()=>h({a:!0,b:!0}),children:"Reset"})]})}},u={name:"Full Matrix",parameters:{docs:{description:{story:"Defined `variant` × `appearance` combinations. `neutral` is paired with `subtle`; `accent` with `solid`; state variants support both appearances."}}},render:()=>e.jsxs("div",{className:"grid grid-cols-1 gap-3 max-w-2xl",children:[M.map(a=>e.jsx(t,{variant:a,appearance:"subtle",title:`${a} / subtle`,children:"The quick brown fox jumps over the lazy dog."},`${a}-subtle`)),Y.map(a=>e.jsx(t,{variant:a,appearance:"solid",title:`${a} / solid`,children:"The quick brown fox jumps over the lazy dog."},`${a}-solid`))]})},m={name:"Long Content",render:()=>e.jsx("div",{className:"max-w-xl",children:e.jsx(t,{variant:"warning",title:"Heads up: long-running operation completed with warnings",action:e.jsx(n,{size:"sm",children:"View details"}),onClose:()=>{},children:"Three records were skipped because they did not match the expected schema. You can retry the import after correcting the source file, or proceed with the partial data that has already been saved."})})};var x,f,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'info',
    appearance: 'subtle',
    title: 'Heads up',
    children: 'This is a beta feature. Behavior may change.'
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,w,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {SUBTLE_VARIANTS.map(variant => <Callout key={variant} variant={variant} appearance="subtle" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>)}
    </div>
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var C,S,j;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {SOLID_VARIANTS.map(variant => <Callout key={variant} variant={variant} appearance="solid" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>)}
    </div>
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var T,B,k;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Title Only',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="success" title="Saved" />
      <Callout variant="error" title="Could not connect" />
    </div>
}`,...(k=(B=i.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var A,N,z;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(N=l.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var O,U,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(U=c.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var I,V,W;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Solid With Action',
  parameters: {
    docs: {
      description: {
        story: 'On \`appearance="solid"\` the saturated background can clash with default Button variants. Pass \`<Button variant="inverted">\` so the action stays legible.'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="warning" appearance="solid" title="Unsaved changes" action={<Button variant="inverted" size="sm">
            Save now
          </Button>}>
        Your changes will be lost if you leave this page.
      </Callout>
      <Callout variant="info" appearance="solid" title="Update available" action={<Button variant="inverted" size="sm">
            Reload
          </Button>}>
        A newer version of this app is ready.
      </Callout>
    </div>
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var D,P,L;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(P=p.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var q,_,$;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:'{\n  name: \'Full Matrix\',\n  parameters: {\n    docs: {\n      description: {\n        story: \'Defined `variant` × `appearance` combinations. `neutral` is paired with `subtle`; `accent` with `solid`; state variants support both appearances.\'\n      }\n    }\n  },\n  render: () => <div className="grid grid-cols-1 gap-3 max-w-2xl">\n      {SUBTLE_VARIANTS.map(variant => <Callout key={`${variant}-subtle`} variant={variant} appearance="subtle" title={`${variant} / subtle`}>\n          The quick brown fox jumps over the lazy dog.\n        </Callout>)}\n      {SOLID_VARIANTS.map(variant => <Callout key={`${variant}-solid`} variant={variant} appearance="solid" title={`${variant} / solid`}>\n          The quick brown fox jumps over the lazy dog.\n        </Callout>)}\n    </div>\n}',...($=(_=u.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var E,F,H;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Long Content',
  render: () => <div className="max-w-xl">
      <Callout variant="warning" title="Heads up: long-running operation completed with warnings" action={<Button size="sm">View details</Button>} onClose={() => {}}>
        Three records were skipped because they did not match the expected schema. You can retry the
        import after correcting the source file, or proceed with the partial data that has already
        been saved.
      </Callout>
    </div>
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const ie=["Playground","SubtleTreatments","SolidTreatments","TitleOnly","BodyOnly","WithAction","SolidWithAction","Dismissible","FullMatrix","LongContent"];export{l as BodyOnly,p as Dismissible,u as FullMatrix,m as LongContent,r as Playground,s as SolidTreatments,d as SolidWithAction,o as SubtleTreatments,i as TitleOnly,c as WithAction,ie as __namedExportsOrder,se as default};
