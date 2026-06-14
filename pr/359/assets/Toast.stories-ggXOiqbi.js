import{i as e,s as t}from"./preload-helper-BwGARNBo.js";import{t as n,w as r}from"./iframe-DRAyPivV.js";import{t as i}from"./Button-CCjwr7K_.js";import{t as a}from"./Button-DrvykG42.js";import{a as o,i as s,n as c,r as l,t as u}from"./Toaster-BZCLuoYP.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{d=t(r(),1),a(),s(),c(),f=n(),p=3600*1e3,m={title:`Components/lv1/Toast`,component:u,parameters:{layout:`fullscreen`},tags:[`autodocs`],argTypes:{position:{description:`Where the toast viewport sits on screen.`,control:`select`,options:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`],table:{type:{summary:`"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"`},defaultValue:{summary:`bottom-center`}}},duration:{description:`Default auto-dismiss duration in ms. Per-toast duration overrides this.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`5000`}}}}},h=[`neutral`,`success`,`error`,`warning`,`info`],g=[`subtle`,`solid`],_={neutral:{title:`Heads up`,description:`A neutral notification.`},success:{title:`Saved`,description:`Your changes have been saved.`},error:{title:`Error`,description:`Could not save your changes.`},warning:{title:`Warning`,description:`Disk space is running low.`},info:{title:`Update available`,description:`A new version is ready to install.`}},v=e=>(0,f.jsxs)(`div`,{className:`min-h-screen p-8 flex flex-col gap-6 items-start`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h2`,{className:`text-base font-semibold mb-1`,children:`Toast Playground`}),(0,f.jsxs)(`p`,{className:`text-sm text-foreground-muted`,children:[`Use the matrix below to fire any variant × appearance combination, and the second row to try toasts with an action. Switch the position via Controls. The `,(0,f.jsx)(`code`,{children:`<Toaster />`}),` is mounted at the bottom of this story.`]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h3`,{className:`text-sm font-semibold mb-2`,children:`Variant × Appearance`}),(0,f.jsxs)(`div`,{className:`grid grid-cols-[auto_repeat(2,minmax(0,1fr))] gap-2 items-center`,children:[(0,f.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted`}),g.map(e=>(0,f.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted text-center`,children:e},e)),h.map(e=>(0,f.jsxs)(d.Fragment,{children:[(0,f.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted`,children:e}),g.map(t=>(0,f.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>o({..._[e],variant:e,appearance:t}),children:`Fire`},`${e}-${t}`))]},e))]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h3`,{className:`text-sm font-semibold mb-2`,children:`With Action (auto-dismisses on click)`}),(0,f.jsxs)(`div`,{className:`grid grid-cols-[auto_repeat(2,minmax(0,1fr))] gap-2 items-center`,children:[(0,f.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted`}),g.map(e=>(0,f.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted text-center`,children:e},e)),h.map(e=>(0,f.jsxs)(d.Fragment,{children:[(0,f.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted`,children:e}),g.map(t=>(0,f.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>o({..._[e],variant:e,appearance:t,action:{label:`Undo`,onClick:()=>{}}}),children:`Fire + action`},`action-${e}-${t}`))]},`action-${e}`))]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h3`,{className:`text-sm font-semibold mb-2`,children:`Other`}),(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,f.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>o({title:`Title only`,variant:`success`}),children:`Title only`}),(0,f.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>o({title:`Long content example`,description:`This toast has a longer description to verify how the layout handles wrapping text alongside the floating top-right button.`,variant:`warning`}),children:`Long content`})]})]}),(0,f.jsx)(u,{position:e.position})]}),y={name:`Playground`,args:{position:`bottom-center`},render:e=>(0,f.jsx)(v,{position:e.position})},b=({inputs:e,position:t})=>((0,d.useEffect)(()=>{l();for(let t of e)o({duration:p,...t});return()=>{l()}},[e]),(0,f.jsx)(`div`,{className:`min-h-screen`,children:(0,f.jsx)(u,{position:t??`bottom-center`,expand:!0,visibleToasts:10})})),x={name:`Subtle Treatments`,render:()=>(0,f.jsx)(b,{inputs:[{variant:`neutral`,appearance:`subtle`,title:`Neutral`,description:`A baseline notification.`},{variant:`success`,appearance:`subtle`,title:`Success`,description:`Your changes have been saved.`},{variant:`error`,appearance:`subtle`,title:`Error`,description:`Could not save your changes.`},{variant:`warning`,appearance:`subtle`,title:`Warning`,description:`Disk space is running low.`},{variant:`info`,appearance:`subtle`,title:`Info`,description:`A new version is available.`}]})},S={name:`Solid Treatments`,render:()=>(0,f.jsx)(b,{inputs:[{variant:`neutral`,appearance:`solid`,title:`Neutral`,description:`A muted-but-emphatic notification.`},{variant:`success`,appearance:`solid`,title:`Success`,description:`Your changes have been saved.`},{variant:`error`,appearance:`solid`,title:`Error`,description:`Could not save your changes.`},{variant:`warning`,appearance:`solid`,title:`Warning`,description:`Disk space is running low.`},{variant:`info`,appearance:`solid`,title:`Info`,description:`A new version is available.`}]})},C={name:`With Action`,render:()=>(0,f.jsx)(b,{inputs:[{variant:`success`,title:`Saved`,description:`Your changes have been saved.`,action:{label:`Undo`,onClick:()=>{}}},{variant:`info`,title:`Update available`,description:`A new version is ready to install.`,action:{label:`Reload`,onClick:()=>{}}}]})},w={name:`Title Only`,render:()=>(0,f.jsx)(b,{inputs:[{variant:`success`,title:`Saved`},{variant:`error`,title:`Could not connect`}]})},T={name:`Long Content`,render:()=>(0,f.jsx)(b,{inputs:[{variant:`warning`,title:`Heads up: long-running operation completed with warnings`,description:`Three records were skipped because they did not match the expected schema. You can retry the import after correcting the source file, or proceed with the partial data that has already been saved.`,action:{label:`View details`,onClick:()=>{}}}]})},E={name:`Long Action Label`,render:()=>(0,f.jsx)(b,{inputs:[{variant:`info`,title:`New version ready`,description:`A fresh build of the app is available.`,action:{label:`View details and full report`,onClick:()=>{}}},{variant:`success`,appearance:`solid`,title:`Saved across all devices`,action:{label:`View details and full report`,onClick:()=>{}}}]})},D=()=>((0,d.useEffect)(()=>(l(),o.loading({title:`Saving…`,description:`Uploading your changes.`}),o.loading({title:`Connecting…`,appearance:`solid`}),()=>{l()}),[]),(0,f.jsx)(`div`,{className:`min-h-screen`,children:(0,f.jsx)(u,{position:`bottom-center`,expand:!0,visibleToasts:10})})),O={name:`Loading`,render:()=>(0,f.jsx)(D,{})},k={name:`Promise`,render:()=>(0,f.jsxs)(`div`,{className:`min-h-screen p-8 flex flex-col gap-4 items-start`,children:[(0,f.jsx)(`p`,{className:`text-sm text-foreground-muted`,children:`Click to fire a promise toast (loading → success). Reject variant transitions to error.`}),(0,f.jsxs)(`div`,{className:`flex gap-2`,children:[(0,f.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>o.promise(new globalThis.Promise(e=>setTimeout(e,1500)),{loading:`Saving…`,success:{title:`Saved`,variant:`success`},error:{title:`Save failed`,variant:`error`}}),children:`Resolve`}),(0,f.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>o.promise(new globalThis.Promise((e,t)=>setTimeout(()=>t(Error(`nope`)),1500)),{loading:`Saving…`,success:`Saved`,error:e=>({title:`Save failed`,description:String(e),variant:`error`})}),children:`Reject`})]}),(0,f.jsx)(u,{position:`bottom-center`,expand:!0,visibleToasts:10})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    position: 'bottom-center'
  },
  render: args => <Playground position={args.position} />
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Title Only',
  render: () => <AutoFireDemo inputs={[{
    variant: 'success',
    title: 'Saved'
  }, {
    variant: 'error',
    title: 'Could not connect'
  }]} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"Pins the regression guard for the trailing action button's `flex-shrink: 0`\n(Toast.css `.st-toast > .st-btn`). Without it, a multi-word action label\nwould compress to `min-content` at narrow viewport widths because the\ncontent column claims `flex: 1`. Use this story for manual visual checks\nwhen touching Toast layout; the matching VRT capture is intentionally\nomitted to avoid baseline churn on a doc-only fixture.",...E.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Loading',
  render: () => <LoadingDemo />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`\`toast.promise()\` drives a toast from a promise. The button below fires a
promise that resolves after ~1.5s, transitioning loading → success.
Interactive — not captured by VRT.`,...k.parameters?.docs?.description}}},A=[`PlaygroundStory`,`SubtleTreatments`,`SolidTreatments`,`WithAction`,`TitleOnly`,`LongContent`,`LongActionLabel`,`Loading`,`PromiseDemo`]}))();export{O as Loading,E as LongActionLabel,T as LongContent,y as PlaygroundStory,k as PromiseDemo,S as SolidTreatments,x as SubtleTreatments,w as TitleOnly,C as WithAction,A as __namedExportsOrder,m as default};