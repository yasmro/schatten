import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,p as n}from"./iframe-BPPx6gv-.js";import{n as r,t as i}from"./Button-IRD0jzF0.js";import{a,i as o,n as s,r as c,t as l}from"./Toaster-fUGxuYwF.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{u=n(),r(),o(),s(),d=t(),f=36e5,p={title:`Components/lv1/Toast`,component:l,parameters:{layout:`fullscreen`},tags:[`autodocs`],argTypes:{position:{description:`Where the toast viewport sits on screen.`,control:`select`,options:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`],table:{type:{summary:`"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"`},defaultValue:{summary:`bottom-center`}}},duration:{description:`Default auto-dismiss duration in ms. Per-toast duration overrides this.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`5000`}}}}},m=[`neutral`,`success`,`error`,`warning`,`info`],h=[`subtle`,`solid`],g={neutral:{title:`Heads up`,description:`A neutral notification.`},success:{title:`Saved`,description:`Your changes have been saved.`},error:{title:`Error`,description:`Could not save your changes.`},warning:{title:`Warning`,description:`Disk space is running low.`},info:{title:`Update available`,description:`A new version is ready to install.`}},_=e=>(0,d.jsxs)(`div`,{className:`min-h-screen p-8 flex flex-col gap-6 items-start`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h2`,{className:`text-base font-semibold mb-1`,children:`Toast Playground`}),(0,d.jsxs)(`p`,{className:`text-sm text-foreground-muted`,children:[`Use the matrix below to fire any variant × appearance combination, and the second row to try toasts with an action. Switch the position via Controls. The `,(0,d.jsx)(`code`,{children:`<Toaster />`}),` is mounted at the bottom of this story.`]})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{className:`text-sm font-semibold mb-2`,children:`Variant × Appearance`}),(0,d.jsxs)(`div`,{className:`grid grid-cols-[auto_repeat(2,minmax(0,1fr))] gap-2 items-center`,children:[(0,d.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted`}),h.map(e=>(0,d.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted text-center`,children:e},e)),m.map(e=>(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted`,children:e}),h.map(t=>(0,d.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>a({...g[e],variant:e,appearance:t}),children:`Fire`},`${e}-${t}`))]},e))]})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{className:`text-sm font-semibold mb-2`,children:`With Action (auto-dismisses on click)`}),(0,d.jsxs)(`div`,{className:`grid grid-cols-[auto_repeat(2,minmax(0,1fr))] gap-2 items-center`,children:[(0,d.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted`}),h.map(e=>(0,d.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted text-center`,children:e},e)),m.map(e=>(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted`,children:e}),h.map(t=>(0,d.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>a({...g[e],variant:e,appearance:t,action:{label:`Undo`,onClick:()=>{}}}),children:`Fire + action`},`action-${e}-${t}`))]},`action-${e}`))]})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h3`,{className:`text-sm font-semibold mb-2`,children:`Other`}),(0,d.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,d.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>a({title:`Title only`,variant:`success`}),children:`Title only`}),(0,d.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>a({title:`Long content example`,description:`This toast has a longer description to verify how the layout handles wrapping text alongside the floating top-right button.`,variant:`warning`}),children:`Long content`})]})]}),(0,d.jsx)(l,{position:e.position})]}),v={name:`Playground`,args:{position:`bottom-center`},render:e=>(0,d.jsx)(_,{position:e.position})},y=({inputs:e,position:t})=>((0,u.useEffect)(()=>{c();for(let t of e)a({duration:f,...t});return()=>{c()}},[e]),(0,d.jsx)(`div`,{className:`min-h-screen`,children:(0,d.jsx)(l,{position:t??`bottom-center`,expand:!0,visibleToasts:10})})),b={name:`Subtle Treatments`,render:()=>(0,d.jsx)(y,{inputs:[{variant:`neutral`,appearance:`subtle`,title:`Neutral`,description:`A baseline notification.`},{variant:`success`,appearance:`subtle`,title:`Success`,description:`Your changes have been saved.`},{variant:`error`,appearance:`subtle`,title:`Error`,description:`Could not save your changes.`},{variant:`warning`,appearance:`subtle`,title:`Warning`,description:`Disk space is running low.`},{variant:`info`,appearance:`subtle`,title:`Info`,description:`A new version is available.`}]})},x={name:`Solid Treatments`,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1}]}}},render:()=>(0,d.jsx)(y,{inputs:[{variant:`neutral`,appearance:`solid`,title:`Neutral`,description:`A muted-but-emphatic notification.`},{variant:`success`,appearance:`solid`,title:`Success`,description:`Your changes have been saved.`},{variant:`error`,appearance:`solid`,title:`Error`,description:`Could not save your changes.`},{variant:`warning`,appearance:`solid`,title:`Warning`,description:`Disk space is running low.`},{variant:`info`,appearance:`solid`,title:`Info`,description:`A new version is available.`}]})},S={name:`With Action`,render:()=>(0,d.jsx)(y,{inputs:[{variant:`success`,title:`Saved`,description:`Your changes have been saved.`,action:{label:`Undo`,onClick:()=>{}}},{variant:`info`,title:`Update available`,description:`A new version is ready to install.`,action:{label:`Reload`,onClick:()=>{}}}]})},C={name:`Title Only`,render:()=>(0,d.jsx)(y,{inputs:[{variant:`success`,title:`Saved`},{variant:`error`,title:`Could not connect`}]})},w={name:`Long Content`,render:()=>(0,d.jsx)(y,{inputs:[{variant:`warning`,title:`Heads up: long-running operation completed with warnings`,description:`Three records were skipped because they did not match the expected schema. You can retry the import after correcting the source file, or proceed with the partial data that has already been saved.`,action:{label:`View details`,onClick:()=>{}}}]})},T={name:`Long Action Label`,render:()=>(0,d.jsx)(y,{inputs:[{variant:`info`,title:`New version ready`,description:`A fresh build of the app is available.`,action:{label:`View details and full report`,onClick:()=>{}}},{variant:`success`,appearance:`solid`,title:`Saved across all devices`,action:{label:`View details and full report`,onClick:()=>{}}}]})},E=()=>((0,u.useEffect)(()=>(c(),a.loading({title:`Saving…`,description:`Uploading your changes.`}),a.loading({title:`Connecting…`,appearance:`solid`}),()=>{c()}),[]),(0,d.jsx)(`div`,{className:`min-h-screen`,children:(0,d.jsx)(l,{position:`bottom-center`,expand:!0,visibleToasts:10})})),D={name:`Loading`,render:()=>(0,d.jsx)(E,{})},O={name:`Promise`,render:()=>(0,d.jsxs)(`div`,{className:`min-h-screen p-8 flex flex-col gap-4 items-start`,children:[(0,d.jsx)(`p`,{className:`text-sm text-foreground-muted`,children:`Click to fire a promise toast (loading → success). Reject variant transitions to error.`}),(0,d.jsxs)(`div`,{className:`flex gap-2`,children:[(0,d.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>a.promise(new globalThis.Promise(e=>setTimeout(e,1500)),{loading:`Saving…`,success:{title:`Saved`,variant:`success`},error:{title:`Save failed`,variant:`error`}}),children:`Resolve`}),(0,d.jsx)(i,{variant:`secondary`,size:`sm`,onClick:()=>a.promise(new globalThis.Promise((e,t)=>setTimeout(()=>t(Error(`nope`)),1500)),{loading:`Saving…`,success:`Saved`,error:e=>({title:`Save failed`,description:String(e),variant:`error`})}),children:`Reject`})]}),(0,d.jsx)(l,{position:`bottom-center`,expand:!0,visibleToasts:10})]})},k=[`PlaygroundStory`,`SubtleTreatments`,`SolidTreatments`,`WithAction`,`TitleOnly`,`LongContent`,`LongActionLabel`,`Loading`,`PromiseDemo`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    position: 'bottom-center'
  },
  render: args => <Playground position={args.position} />
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Title Only',
  render: () => <AutoFireDemo inputs={[{
    variant: 'success',
    title: 'Saved'
  }, {
    variant: 'error',
    title: 'Could not connect'
  }]} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"Pins the regression guard for the trailing action button's `flex-shrink: 0`\n(Toast.css `.st-toast > .st-btn`). Without it, a multi-word action label\nwould compress to `min-content` at narrow viewport widths because the\ncontent column claims `flex: 1`. Use this story for manual visual checks\nwhen touching Toast layout; the matching VRT capture is intentionally\nomitted to avoid baseline churn on a doc-only fixture.",...T.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Loading',
  render: () => <LoadingDemo />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`\`toast.promise()\` drives a toast from a promise. The button below fires a
promise that resolves after ~1.5s, transitioning loading → success.
Interactive — not captured by VRT.`,...O.parameters?.docs?.description}}}})))()}A();export{D as Loading,T as LongActionLabel,w as LongContent,v as PlaygroundStory,O as PromiseDemo,x as SolidTreatments,b as SubtleTreatments,C as TitleOnly,S as WithAction,k as __namedExportsOrder,p as default};