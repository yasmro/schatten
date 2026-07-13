import{j as e,r as b}from"./iframe-BKOyKo8k.js";import{T as l,t as a,d as f}from"./Toaster-sb927ND8.js";import{B as s}from"./Button-gTnSl1et.js";import"./preload-helper-DfLMMIXV.js";import"./utils-HnQPFlDo.js";import"./index-BekUCMdb.js";import"./Spinner-B7aWtxOT.js";/* empty css                */import"./circle-alert-Dth3Rmpd.js";import"./createLucideIcon-yWIyE5JU.js";import"./triangle-alert-BTtqJYAc.js";import"./info-C3FHB5cZ.js";import"./x-BlG4xCXq.js";import"./index-BFn-FiNZ.js";import"./index-CabEZKXF.js";/* empty css              */import"./index-D-FNYMfi.js";import"./index-C-2oxwlE.js";/* empty css               */const j=3600*1e3,$={title:"Components/lv1/Toast",component:l,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{position:{description:"Where the toast viewport sits on screen.",control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],table:{type:{summary:'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"'},defaultValue:{summary:"bottom-center"}}},duration:{description:"Default auto-dismiss duration in ms. Per-toast duration overrides this.",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"5000"}}}}},y=["neutral","success","error","warning","info"],d=["subtle","solid"],w={neutral:{title:"Heads up",description:"A neutral notification."},success:{title:"Saved",description:"Your changes have been saved."},error:{title:"Error",description:"Could not save your changes."},warning:{title:"Warning",description:"Disk space is running low."},info:{title:"Update available",description:"A new version is ready to install."}},S=n=>e.jsxs("div",{className:"min-h-screen p-8 flex flex-col gap-6 items-start",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-base font-semibold mb-1",children:"Toast Playground"}),e.jsxs("p",{className:"text-sm text-foreground-muted",children:["Use the matrix below to fire any variant × appearance combination, and the second row to try toasts with an action. Switch the position via Controls. The ",e.jsx("code",{children:"<Toaster />"})," is mounted at the bottom of this story."]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Variant × Appearance"}),e.jsxs("div",{className:"grid grid-cols-[auto_repeat(2,minmax(0,1fr))] gap-2 items-center",children:[e.jsx("span",{className:"text-xs font-mono text-foreground-muted"}),d.map(t=>e.jsx("span",{className:"text-xs font-mono text-foreground-muted text-center",children:t},t)),y.map(t=>e.jsxs(b.Fragment,{children:[e.jsx("span",{className:"text-xs font-mono text-foreground-muted",children:t}),d.map(r=>e.jsx(s,{variant:"secondary",size:"sm",onClick:()=>a({...w[t],variant:t,appearance:r}),children:"Fire"},`${t}-${r}`))]},t))]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"With Action (auto-dismisses on click)"}),e.jsxs("div",{className:"grid grid-cols-[auto_repeat(2,minmax(0,1fr))] gap-2 items-center",children:[e.jsx("span",{className:"text-xs font-mono text-foreground-muted"}),d.map(t=>e.jsx("span",{className:"text-xs font-mono text-foreground-muted text-center",children:t},t)),y.map(t=>e.jsxs(b.Fragment,{children:[e.jsx("span",{className:"text-xs font-mono text-foreground-muted",children:t}),d.map(r=>e.jsx(s,{variant:"secondary",size:"sm",onClick:()=>a({...w[t],variant:t,appearance:r,action:{label:"Undo",onClick:()=>{}}}),children:"Fire + action"},`action-${t}-${r}`))]},`action-${t}`))]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Other"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(s,{variant:"secondary",size:"sm",onClick:()=>a({title:"Title only",variant:"success"}),children:"Title only"}),e.jsx(s,{variant:"secondary",size:"sm",onClick:()=>a({title:"Long content example",description:"This toast has a longer description to verify how the layout handles wrapping text alongside the floating top-right button.",variant:"warning"}),children:"Long content"})]})]}),e.jsx(l,{position:n.position})]}),p={name:"Playground",args:{position:"bottom-center"},render:n=>e.jsx(S,{position:n.position})},i=({inputs:n,position:t})=>(b.useEffect(()=>{f();for(const r of n)a({duration:j,...r});return()=>{f()}},[n]),e.jsx("div",{className:"min-h-screen",children:e.jsx(l,{position:t??"bottom-center",expand:!0,visibleToasts:10})})),m={name:"Subtle Treatments",render:()=>e.jsx(i,{inputs:[{variant:"neutral",appearance:"subtle",title:"Neutral",description:"A baseline notification."},{variant:"success",appearance:"subtle",title:"Success",description:"Your changes have been saved."},{variant:"error",appearance:"subtle",title:"Error",description:"Could not save your changes."},{variant:"warning",appearance:"subtle",title:"Warning",description:"Disk space is running low."},{variant:"info",appearance:"subtle",title:"Info",description:"A new version is available."}]})},u={name:"Solid Treatments",parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}},render:()=>e.jsx(i,{inputs:[{variant:"neutral",appearance:"solid",title:"Neutral",description:"A muted-but-emphatic notification."},{variant:"success",appearance:"solid",title:"Success",description:"Your changes have been saved."},{variant:"error",appearance:"solid",title:"Error",description:"Could not save your changes."},{variant:"warning",appearance:"solid",title:"Warning",description:"Disk space is running low."},{variant:"info",appearance:"solid",title:"Info",description:"A new version is available."}]})},g={name:"With Action",render:()=>e.jsx(i,{inputs:[{variant:"success",title:"Saved",description:"Your changes have been saved.",action:{label:"Undo",onClick:()=>{}}},{variant:"info",title:"Update available",description:"A new version is ready to install.",action:{label:"Reload",onClick:()=>{}}}]})},v={name:"Title Only",render:()=>e.jsx(i,{inputs:[{variant:"success",title:"Saved"},{variant:"error",title:"Could not connect"}]})},h={name:"Long Content",render:()=>e.jsx(i,{inputs:[{variant:"warning",title:"Heads up: long-running operation completed with warnings",description:"Three records were skipped because they did not match the expected schema. You can retry the import after correcting the source file, or proceed with the partial data that has already been saved.",action:{label:"View details",onClick:()=>{}}}]})},o={name:"Long Action Label",render:()=>e.jsx(i,{inputs:[{variant:"info",title:"New version ready",description:"A fresh build of the app is available.",action:{label:"View details and full report",onClick:()=>{}}},{variant:"success",appearance:"solid",title:"Saved across all devices",action:{label:"View details and full report",onClick:()=>{}}}]})},T=()=>(b.useEffect(()=>(f(),a.loading({title:"Saving…",description:"Uploading your changes."}),a.loading({title:"Connecting…",appearance:"solid"}),()=>{f()}),[]),e.jsx("div",{className:"min-h-screen",children:e.jsx(l,{position:"bottom-center",expand:!0,visibleToasts:10})})),x={name:"Loading",render:()=>e.jsx(T,{})},c={name:"Promise",render:()=>e.jsxs("div",{className:"min-h-screen p-8 flex flex-col gap-4 items-start",children:[e.jsx("p",{className:"text-sm text-foreground-muted",children:"Click to fire a promise toast (loading → success). Reject variant transitions to error."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{variant:"secondary",size:"sm",onClick:()=>a.promise(new globalThis.Promise(n=>setTimeout(n,1500)),{loading:"Saving…",success:{title:"Saved",variant:"success"},error:{title:"Save failed",variant:"error"}}),children:"Resolve"}),e.jsx(s,{variant:"secondary",size:"sm",onClick:()=>a.promise(new globalThis.Promise((n,t)=>setTimeout(()=>t(new Error("nope")),1500)),{loading:"Saving…",success:"Saved",error:n=>({title:"Save failed",description:String(n),variant:"error"})}),children:"Reject"})]}),e.jsx(l,{position:"bottom-center",expand:!0,visibleToasts:10})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    position: 'bottom-center'
  },
  render: args => <Playground position={args.position} />
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Subtle Treatments',
  render: () => <AutoFireDemo inputs={[{
    variant: 'neutral',
    appearance: 'subtle',
    title: 'Neutral',
    description: 'A baseline notification.'
  }, {
    variant: 'success',
    appearance: 'subtle',
    title: 'Success',
    description: 'Your changes have been saved.'
  }, {
    variant: 'error',
    appearance: 'subtle',
    title: 'Error',
    description: 'Could not save your changes.'
  }, {
    variant: 'warning',
    appearance: 'subtle',
    title: 'Warning',
    description: 'Disk space is running low.'
  }, {
    variant: 'info',
    appearance: 'subtle',
    title: 'Info',
    description: 'A new version is available.'
  }]} />
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Solid Treatments',
  parameters: {
    // Solid Toasts are light-on-saturated fill — the intentional AA solid exception (icon + title carry the meaning). Mirrors Toast.vrt.spec.ts. #344 / #346.
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  },
  render: () => <AutoFireDemo inputs={[{
    variant: 'neutral',
    appearance: 'solid',
    title: 'Neutral',
    description: 'A muted-but-emphatic notification.'
  }, {
    variant: 'success',
    appearance: 'solid',
    title: 'Success',
    description: 'Your changes have been saved.'
  }, {
    variant: 'error',
    appearance: 'solid',
    title: 'Error',
    description: 'Could not save your changes.'
  }, {
    variant: 'warning',
    appearance: 'solid',
    title: 'Warning',
    description: 'Disk space is running low.'
  }, {
    variant: 'info',
    appearance: 'solid',
    title: 'Info',
    description: 'A new version is available.'
  }]} />
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Action',
  render: () => <AutoFireDemo inputs={[{
    variant: 'success',
    title: 'Saved',
    description: 'Your changes have been saved.',
    action: {
      label: 'Undo',
      onClick: () => {}
    }
  }, {
    variant: 'info',
    title: 'Update available',
    description: 'A new version is ready to install.',
    action: {
      label: 'Reload',
      onClick: () => {}
    }
  }]} />
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Title Only',
  render: () => <AutoFireDemo inputs={[{
    variant: 'success',
    title: 'Saved'
  }, {
    variant: 'error',
    title: 'Could not connect'
  }]} />
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Long Content',
  render: () => <AutoFireDemo inputs={[{
    variant: 'warning',
    title: 'Heads up: long-running operation completed with warnings',
    description: 'Three records were skipped because they did not match the expected schema. You can retry the import after correcting the source file, or proceed with the partial data that has already been saved.',
    action: {
      label: 'View details',
      onClick: () => {}
    }
  }]} />
}`,...h.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Long Action Label',
  render: () => <AutoFireDemo inputs={[{
    variant: 'info',
    title: 'New version ready',
    description: 'A fresh build of the app is available.',
    action: {
      label: 'View details and full report',
      onClick: () => {}
    }
  }, {
    variant: 'success',
    appearance: 'solid',
    title: 'Saved across all devices',
    action: {
      label: 'View details and full report',
      onClick: () => {}
    }
  }]} />
}`,...o.parameters?.docs?.source},description:{story:"Pins the regression guard for the trailing action button's `flex-shrink: 0`\n(Toast.css `.st-toast > .st-btn`). Without it, a multi-word action label\nwould compress to `min-content` at narrow viewport widths because the\ncontent column claims `flex: 1`. Use this story for manual visual checks\nwhen touching Toast layout; the matching VRT capture is intentionally\nomitted to avoid baseline churn on a doc-only fixture.",...o.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Loading',
  render: () => <LoadingDemo />
}`,...x.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Promise',
  render: () => <div className="min-h-screen p-8 flex flex-col gap-4 items-start">
      <p className="text-sm text-foreground-muted">
        Click to fire a promise toast (loading → success). Reject variant transitions to error.
      </p>
      <div className="flex gap-2">
        <Button variant="secondary" size="sm" onClick={() => toast.promise(new globalThis.Promise(resolve => setTimeout(resolve, 1500)), {
        loading: 'Saving…',
        success: {
          title: 'Saved',
          variant: 'success'
        },
        error: {
          title: 'Save failed',
          variant: 'error'
        }
      })}>
          Resolve
        </Button>
        <Button variant="secondary" size="sm" onClick={() => toast.promise(new globalThis.Promise((_, reject) => setTimeout(() => reject(new Error('nope')), 1500)), {
        loading: 'Saving…',
        success: 'Saved',
        error: err => ({
          title: 'Save failed',
          description: String(err),
          variant: 'error'
        })
      })}>
          Reject
        </Button>
      </div>
      <Toaster position="bottom-center" expand visibleToasts={10} />
    </div>
}`,...c.parameters?.docs?.source},description:{story:"`toast.promise()` drives a toast from a promise. The button below fires a\npromise that resolves after ~1.5s, transitioning loading → success.\nInteractive — not captured by VRT.",...c.parameters?.docs?.description}}};const H=["PlaygroundStory","SubtleTreatments","SolidTreatments","WithAction","TitleOnly","LongContent","LongActionLabel","Loading","PromiseDemo"];export{x as Loading,o as LongActionLabel,h as LongContent,p as PlaygroundStory,c as PromiseDemo,u as SolidTreatments,m as SubtleTreatments,v as TitleOnly,g as WithAction,H as __namedExportsOrder,$ as default};
