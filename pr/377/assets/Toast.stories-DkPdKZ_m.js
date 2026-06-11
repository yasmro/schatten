import{j as e,r as g}from"./iframe-Dzxz26n4.js";import{T as v,_ as b,t as o}from"./Toaster-BQPFKaJ8.js";import{B as s}from"./Button-tMDlHI0v.js";import"./preload-helper-Cgh4RmKw.js";import"./index-CKDWyNK7.js";import"./index-DzkxR5nk.js";import"./index-CyvySXqO.js";import"./index-DQ4vC-qi.js";import"./index-DQ7mk6mA.js";import"./index-DAgT9NER.js";import"./index-Chv_SyC_.js";import"./index-B0xApLN5.js";import"./index-DXdVlq3U.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css              */import"./circle-alert-BXhLk-_n.js";import"./createLucideIcon-CLWV9cDX.js";import"./triangle-alert-D9qhXg18.js";import"./info-Yrhk5qoo.js";import"./x-DiUhWXYO.js";import"./index-BChFLB_l.js";/* empty css               */import"./Spinner-pC-kp0Pj.js";/* empty css                */const y=3600*1e3,G={title:"Components/lv1/Toast",component:v,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{position:{description:"Where the toast viewport sits on screen.",control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],table:{type:{summary:'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"'},defaultValue:{summary:"bottom-center"}}},duration:{description:"Default auto-dismiss duration in ms. Per-toast duration overrides this.",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"5000"}}}}},x=["neutral","success","error","warning","info"],c=["subtle","solid"],f={neutral:{title:"Heads up",description:"A neutral notification."},success:{title:"Saved",description:"Your changes have been saved."},error:{title:"Error",description:"Could not save your changes."},warning:{title:"Warning",description:"Disk space is running low."},info:{title:"Update available",description:"A new version is ready to install."}},w=a=>e.jsxs("div",{className:"min-h-screen p-8 flex flex-col gap-6 items-start",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-base font-semibold mb-1",children:"Toast Playground"}),e.jsxs("p",{className:"text-sm text-foreground-muted",children:["Use the matrix below to fire any variant × appearance combination, and the second row to try toasts with an action. Switch the position via Controls. The ",e.jsx("code",{children:"<Toaster />"})," is mounted at the bottom of this story."]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Variant × Appearance"}),e.jsxs("div",{className:"grid grid-cols-[auto_repeat(2,minmax(0,1fr))] gap-2 items-center",children:[e.jsx("span",{className:"text-xs font-mono text-foreground-muted"}),c.map(t=>e.jsx("span",{className:"text-xs font-mono text-foreground-muted text-center",children:t},t)),x.map(t=>e.jsxs(g.Fragment,{children:[e.jsx("span",{className:"text-xs font-mono text-foreground-muted",children:t}),c.map(n=>e.jsx(s,{variant:"secondary",size:"sm",onClick:()=>o({...f[t],variant:t,appearance:n}),children:"Fire"},`${t}-${n}`))]},t))]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"With Action (auto-dismisses on click)"}),e.jsxs("div",{className:"grid grid-cols-[auto_repeat(2,minmax(0,1fr))] gap-2 items-center",children:[e.jsx("span",{className:"text-xs font-mono text-foreground-muted"}),c.map(t=>e.jsx("span",{className:"text-xs font-mono text-foreground-muted text-center",children:t},t)),x.map(t=>e.jsxs(g.Fragment,{children:[e.jsx("span",{className:"text-xs font-mono text-foreground-muted",children:t}),c.map(n=>e.jsx(s,{variant:"secondary",size:"sm",onClick:()=>o({...f[t],variant:t,appearance:n,action:{label:"Undo",onClick:()=>{}}}),children:"Fire + action"},`action-${t}-${n}`))]},`action-${t}`))]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Other"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(s,{variant:"secondary",size:"sm",onClick:()=>o({title:"Title only",variant:"success"}),children:"Title only"}),e.jsx(s,{variant:"secondary",size:"sm",onClick:()=>o({title:"Long content example",description:"This toast has a longer description to verify how the layout handles wrapping text alongside the floating top-right button.",variant:"warning"}),children:"Long content"})]})]}),e.jsx(v,{position:a.position})]}),l={name:"Playground",args:{position:"bottom-center"},render:a=>e.jsx(w,{position:a.position})},r=({inputs:a,position:t})=>(g.useEffect(()=>{b();for(const n of a)o({duration:y,...n});return()=>{b()}},[a]),e.jsx("div",{className:"min-h-screen",children:e.jsx(v,{position:t??"bottom-center"})})),d={name:"Subtle Treatments",render:()=>e.jsx(r,{inputs:[{variant:"neutral",appearance:"subtle",title:"Neutral",description:"A baseline notification."},{variant:"success",appearance:"subtle",title:"Success",description:"Your changes have been saved."},{variant:"error",appearance:"subtle",title:"Error",description:"Could not save your changes."},{variant:"warning",appearance:"subtle",title:"Warning",description:"Disk space is running low."},{variant:"info",appearance:"subtle",title:"Info",description:"A new version is available."}]})},p={name:"Solid Treatments",render:()=>e.jsx(r,{inputs:[{variant:"neutral",appearance:"solid",title:"Neutral",description:"A muted-but-emphatic notification."},{variant:"success",appearance:"solid",title:"Success",description:"Your changes have been saved."},{variant:"error",appearance:"solid",title:"Error",description:"Could not save your changes."},{variant:"warning",appearance:"solid",title:"Warning",description:"Disk space is running low."},{variant:"info",appearance:"solid",title:"Info",description:"A new version is available."}]})},m={name:"With Action",render:()=>e.jsx(r,{inputs:[{variant:"success",title:"Saved",description:"Your changes have been saved.",action:{label:"Undo",onClick:()=>{}}},{variant:"info",title:"Update available",description:"A new version is ready to install.",action:{label:"Reload",onClick:()=>{}}}]})},u={name:"Title Only",render:()=>e.jsx(r,{inputs:[{variant:"success",title:"Saved"},{variant:"error",title:"Could not connect"}]})},h={name:"Long Content",render:()=>e.jsx(r,{inputs:[{variant:"warning",title:"Heads up: long-running operation completed with warnings",description:"Three records were skipped because they did not match the expected schema. You can retry the import after correcting the source file, or proceed with the partial data that has already been saved.",action:{label:"View details",onClick:()=>{}}}]})},i={name:"Long Action Label",render:()=>e.jsx(r,{inputs:[{variant:"info",title:"New version ready",description:"A fresh build of the app is available.",action:{label:"View details and full report",onClick:()=>{}}},{variant:"success",appearance:"solid",title:"Saved across all devices",action:{label:"View details and full report",onClick:()=>{}}}]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    position: 'bottom-center'
  },
  render: args => <Playground position={args.position} />
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Solid Treatments',
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Title Only',
  render: () => <AutoFireDemo inputs={[{
    variant: 'success',
    title: 'Saved'
  }, {
    variant: 'error',
    title: 'Could not connect'
  }]} />
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Pins the regression guard for the trailing action button's `flex-shrink: 0`\n(Toast.css `.st-toast > .st-btn`). Without it, a multi-word action label\nwould compress to `min-content` at narrow viewport widths because the\ncontent column claims `flex: 1`. Use this story for manual visual checks\nwhen touching Toast layout; the matching VRT capture is intentionally\nomitted to avoid baseline churn on a doc-only fixture.",...i.parameters?.docs?.description}}};const J=["PlaygroundStory","SubtleTreatments","SolidTreatments","WithAction","TitleOnly","LongContent","LongActionLabel"];export{i as LongActionLabel,h as LongContent,l as PlaygroundStory,p as SolidTreatments,d as SubtleTreatments,u as TitleOnly,m as WithAction,J as __namedExportsOrder,G as default};
