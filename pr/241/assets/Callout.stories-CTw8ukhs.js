import{j as e,r as X}from"./iframe-TqCejvAH.js";import{C as t}from"./Callout-CIgcmWoX.js";import{B as r}from"./Button-Dp8BNgU5.js";import"./preload-helper-CoDioAhx.js";import"./utils-BQHNewu7.js";import"./index-D1SQP9Z-.js";import"./circle-alert-mA0o7Pfz.js";import"./createLucideIcon-D4NcuFyB.js";import"./triangle-alert-_1GVrcrE.js";import"./info-Dsig4NkJ.js";import"./x-DWUaUd3H.js";import"./index-iTJ2FHEG.js";import"./index-CzRzQuxV.js";import"./Spinner-bD4FxZR_.js";const le={title:"Components/lv1/Callout",component:t,parameters:{layout:"padded",docs:{description:{component:`Callout displays inline contextual information — beta notices, form
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
require a role.`}}},tags:["autodocs"],argTypes:{variant:{description:"Tone / state variant. Drives the icon, color treatment, and accent.",control:"select",options:["neutral","success","error","warning","info"],table:{type:{summary:'"neutral" | "success" | "error" | "warning" | "info"'},defaultValue:{summary:"neutral"}}},appearance:{description:"Visual appearance — `subtle` for soft tinted background, `solid` for filled.",control:"select",options:["subtle","solid"],table:{type:{summary:'"subtle" | "solid"'},defaultValue:{summary:"subtle"}}},title:{description:"Optional bold heading rendered above the body content.",control:"text"},children:{description:"Body content. Any ReactNode (text, links, lists).",control:"text"},action:{description:"Free-form action node rendered to the right of the body (e.g. a Button or link).",table:{type:{summary:"ReactNode"}},control:!1},onClose:{description:"When provided, a close (X) button is rendered and invokes this callback on click. Omit to render a non-dismissible callout.",table:{type:{summary:"() => void"}},control:!1}}},x=["neutral","success","error","warning","info"],o={name:"Playground",args:{variant:"info",appearance:"subtle",title:"Heads up",children:"This is a beta feature. Behavior may change."}},s={name:"Subtle Treatments",render:()=>e.jsx("div",{className:"flex flex-col gap-3 max-w-xl",children:x.map(a=>e.jsx(t,{variant:a,appearance:"subtle",title:a.toUpperCase(),children:"The quick brown fox jumps over the lazy dog."},a))})},i={name:"Solid Treatments",render:()=>e.jsx("div",{className:"flex flex-col gap-3 max-w-xl",children:x.map(a=>e.jsx(t,{variant:a,appearance:"solid",title:a.toUpperCase(),children:"The quick brown fox jumps over the lazy dog."},a))})},l={name:"Title Only",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(t,{variant:"success",title:"Saved"}),e.jsx(t,{variant:"error",title:"Could not connect"})]})},c={name:"Body Only",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsxs(t,{variant:"info",children:["This feature is in ",e.jsx("strong",{children:"beta"}),". Please share feedback."]}),e.jsxs(t,{variant:"warning",children:["Three records were skipped."," ",e.jsx("a",{href:"#x",className:"underline",children:"View details"})]})]})},d={name:"With Action",render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(t,{variant:"warning",title:"Unsaved changes",action:e.jsx(r,{size:"sm",children:"Save now"}),children:"Your changes will be lost if you leave this page."}),e.jsx(t,{variant:"info",title:"Update available",action:e.jsx(r,{size:"sm",variant:"secondary",children:"Reload"}),children:"A newer version of this app is ready."})]})},p={name:"Solid With Action",parameters:{docs:{description:{story:'On `appearance="solid"` the saturated background can clash with default Button variants. Pass `<Button variant="inverted">` so the action stays legible.'}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[e.jsx(t,{variant:"warning",appearance:"solid",title:"Unsaved changes",action:e.jsx(r,{variant:"inverted",size:"sm",children:"Save now"}),children:"Your changes will be lost if you leave this page."}),e.jsx(t,{variant:"info",appearance:"solid",title:"Update available",action:e.jsx(r,{variant:"inverted",size:"sm",children:"Reload"}),children:"A newer version of this app is ready."})]})},u={name:"Dismissible",render:()=>{const[a,n]=X.useState({a:!0,b:!0});return e.jsxs("div",{className:"flex flex-col gap-3 max-w-xl",children:[a.a&&e.jsx(t,{variant:"info",title:"Heads up",onClose:()=>n(v=>({...v,a:!1})),children:"Click the close button to dismiss this callout."}),a.b&&e.jsx(t,{variant:"warning",title:"With action and close",action:e.jsx(r,{size:"sm",children:"Acknowledge"}),onClose:()=>n(v=>({...v,b:!1})),children:"Both action and close can coexist."}),!a.a&&!a.b&&e.jsx(r,{onClick:()=>n({a:!0,b:!0}),children:"Reset"})]})}},m={name:"Full Matrix",parameters:{docs:{description:{story:"Every defined `variant` × `appearance` combination. All five variants support both appearances."}}},render:()=>e.jsx("div",{className:"grid grid-cols-1 gap-3 max-w-2xl",children:["subtle","solid"].map(a=>x.map(n=>e.jsx(t,{variant:n,appearance:a,title:`${n} / ${a}`,children:"The quick brown fox jumps over the lazy dog."},`${n}-${a}`)))})},h={name:"Long Content",render:()=>e.jsx("div",{className:"max-w-xl",children:e.jsx(t,{variant:"warning",title:"Heads up: long-running operation completed with warnings",action:e.jsx(r,{size:"sm",children:"View details"}),onClose:()=>{},children:"Three records were skipped because they did not match the expected schema. You can retry the import after correcting the source file, or proceed with the partial data that has already been saved."})})};var f,g,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'info',
    appearance: 'subtle',
    title: 'Heads up',
    children: 'This is a beta feature. Behavior may change.'
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var w,y,C;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {VARIANTS.map(variant => <Callout key={variant} variant={variant} appearance="subtle" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>)}
    </div>
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var S,j,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      {VARIANTS.map(variant => <Callout key={variant} variant={variant} appearance="solid" title={variant.toUpperCase()}>
          The quick brown fox jumps over the lazy dog.
        </Callout>)}
    </div>
}`,...(T=(j=i.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var B,k,A;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Title Only',
  render: () => <div className="flex flex-col gap-3 max-w-xl">
      <Callout variant="success" title="Saved" />
      <Callout variant="error" title="Could not connect" />
    </div>
}`,...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var N,z,O;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(z=c.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var R,U,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(U=d.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var P,V,I;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(V=p.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var $,q,D;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(D=(q=u.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var F,H,Y;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Full Matrix',
  parameters: {
    docs: {
      description: {
        story: 'Every defined \`variant\` × \`appearance\` combination. All five variants support both appearances.'
      }
    }
  },
  render: () => <div className="grid grid-cols-1 gap-3 max-w-2xl">
      {(['subtle', 'solid'] as const).map(appearance => VARIANTS.map(variant => <Callout key={\`\${variant}-\${appearance}\`} variant={variant} appearance={appearance} title={\`\${variant} / \${appearance}\`}>
            The quick brown fox jumps over the lazy dog.
          </Callout>))}
    </div>
}`,...(Y=(H=m.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var E,L,M;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Long Content',
  render: () => <div className="max-w-xl">
      <Callout variant="warning" title="Heads up: long-running operation completed with warnings" action={<Button size="sm">View details</Button>} onClose={() => {}}>
        Three records were skipped because they did not match the expected schema. You can retry the
        import after correcting the source file, or proceed with the partial data that has already
        been saved.
      </Callout>
    </div>
}`,...(M=(L=h.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const ce=["Playground","SubtleTreatments","SolidTreatments","TitleOnly","BodyOnly","WithAction","SolidWithAction","Dismissible","FullMatrix","LongContent"];export{c as BodyOnly,u as Dismissible,m as FullMatrix,h as LongContent,o as Playground,i as SolidTreatments,p as SolidWithAction,s as SubtleTreatments,l as TitleOnly,d as WithAction,ce as __namedExportsOrder,le as default};
