import{r as i,j as e}from"./iframe-V6GdhwVN.js";import{B as u}from"./Button-CbMWSAi6.js";import{b as Ae,P as v,d as y,c as je,a as Pe,g as Ne}from"./index-BB-OUeyr.js";import{u as _}from"./index-DTkhKK6F.js";import{u as N}from"./index-D8whl7os.js";import{P as Re,D as _e}from"./index-CKj07j9F.js";import{R as Ee,h as Te,u as Le,F as Fe}from"./Combination-BNIIRoBe.js";import{P as E}from"./index-iXTeB1EN.js";import{c as R}from"./utils-BLSKlp9E.js";import{S as We}from"./Separator-D0KwBA68.js";import"./preload-helper-DVxGsIx5.js";import"./index-CoRjjzkN.js";import"./index-ia33sQUk.js";import"./chevron-up-CfxHI29X.js";import"./index-1evVQkiP.js";import"./Spinner-BC3iZdVp.js";import"./index-CK2yS7Oa.js";import"./index-ogGT-rAY.js";var j="Dialog",[me]=je(j),[Me,m]=me(j),fe=t=>{const{__scopeDialog:n,children:o,open:r,defaultOpen:s,onOpenChange:a,modal:l=!0}=t,c=i.useRef(null),d=i.useRef(null),[f,h]=Ae({prop:r,defaultProp:s??!1,onChange:a,caller:j});return e.jsx(Me,{scope:n,triggerRef:c,contentRef:d,contentId:N(),titleId:N(),descriptionId:N(),open:f,onOpenChange:h,onOpenToggle:i.useCallback(()=>h(b=>!b),[h]),modal:l,children:o})};fe.displayName=j;var he="DialogTrigger",Ve=i.forwardRef((t,n)=>{const{__scopeDialog:o,...r}=t,s=m(he,o),a=_(n,s.triggerRef);return e.jsx(v.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":F(s.open),...r,ref:a,onClick:y(t.onClick,s.onOpenToggle)})});Ve.displayName=he;var T="DialogPortal",[qe,ge]=me(T,{forceMount:void 0}),be=t=>{const{__scopeDialog:n,forceMount:o,children:r,container:s}=t,a=m(T,n);return e.jsx(qe,{scope:n,forceMount:o,children:i.Children.map(r,l=>e.jsx(E,{present:o||a.open,children:e.jsx(Re,{asChild:!0,container:s,children:l})}))})};be.displayName=T;var A="DialogOverlay",ye=i.forwardRef((t,n)=>{const o=ge(A,t.__scopeDialog),{forceMount:r=o.forceMount,...s}=t,a=m(A,t.__scopeDialog);return a.modal?e.jsx(E,{present:r||a.open,children:e.jsx(Ye,{...s,ref:n})}):null});ye.displayName=A;var Ge=Pe("DialogOverlay.RemoveScroll"),Ye=i.forwardRef((t,n)=>{const{__scopeDialog:o,...r}=t,s=m(A,o);return e.jsx(Ee,{as:Ge,allowPinchZoom:!0,shards:[s.contentRef],children:e.jsx(v.div,{"data-state":F(s.open),...r,ref:n,style:{pointerEvents:"auto",...r.style}})})}),g="DialogContent",ve=i.forwardRef((t,n)=>{const o=ge(g,t.__scopeDialog),{forceMount:r=o.forceMount,...s}=t,a=m(g,t.__scopeDialog);return e.jsx(E,{present:r||a.open,children:a.modal?e.jsx(Ke,{...s,ref:n}):e.jsx($e,{...s,ref:n})})});ve.displayName=g;var Ke=i.forwardRef((t,n)=>{const o=m(g,t.__scopeDialog),r=i.useRef(null),s=_(n,o.contentRef,r);return i.useEffect(()=>{const a=r.current;if(a)return Te(a)},[]),e.jsx(Oe,{...t,ref:s,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:y(t.onCloseAutoFocus,a=>{var l;a.preventDefault(),(l=o.triggerRef.current)==null||l.focus()}),onPointerDownOutside:y(t.onPointerDownOutside,a=>{const l=a.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&a.preventDefault()}),onFocusOutside:y(t.onFocusOutside,a=>a.preventDefault())})}),$e=i.forwardRef((t,n)=>{const o=m(g,t.__scopeDialog),r=i.useRef(!1),s=i.useRef(!1);return e.jsx(Oe,{...t,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var l,c;(l=t.onCloseAutoFocus)==null||l.call(t,a),a.defaultPrevented||(r.current||(c=o.triggerRef.current)==null||c.focus(),a.preventDefault()),r.current=!1,s.current=!1},onInteractOutside:a=>{var d,f;(d=t.onInteractOutside)==null||d.call(t,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const l=a.target;((f=o.triggerRef.current)==null?void 0:f.contains(l))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&s.current&&a.preventDefault()}})}),Oe=i.forwardRef((t,n)=>{const{__scopeDialog:o,trapFocus:r,onOpenAutoFocus:s,onCloseAutoFocus:a,...l}=t,c=m(g,o),d=i.useRef(null),f=_(n,d);return Le(),e.jsxs(e.Fragment,{children:[e.jsx(Fe,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:s,onUnmountAutoFocus:a,children:e.jsx(_e,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":F(c.open),...l,ref:f,onDismiss:()=>c.onOpenChange(!1)})}),e.jsxs(e.Fragment,{children:[e.jsx(ze,{titleId:c.titleId}),e.jsx(He,{contentRef:d,descriptionId:c.descriptionId})]})]})}),L="DialogTitle",Ce=i.forwardRef((t,n)=>{const{__scopeDialog:o,...r}=t,s=m(L,o);return e.jsx(v.h2,{id:s.titleId,...r,ref:n})});Ce.displayName=L;var xe="DialogDescription",De=i.forwardRef((t,n)=>{const{__scopeDialog:o,...r}=t,s=m(xe,o);return e.jsx(v.p,{id:s.descriptionId,...r,ref:n})});De.displayName=xe;var we="DialogClose",Be=i.forwardRef((t,n)=>{const{__scopeDialog:o,...r}=t,s=m(we,o);return e.jsx(v.button,{type:"button",...r,ref:n,onClick:y(t.onClick,()=>s.onOpenChange(!1))})});Be.displayName=we;function F(t){return t?"open":"closed"}var Se="DialogTitleWarning",[Ot,Ie]=Ne(Se,{contentName:g,titleName:L,docsSlug:"dialog"}),ze=({titleId:t})=>{const n=Ie(Se),o=`\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;return i.useEffect(()=>{t&&(document.getElementById(t)||console.error(o))},[o,t]),null},Ue="DialogDescriptionWarning",He=({contentRef:t,descriptionId:n})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ie(Ue).contentName}}.`;return i.useEffect(()=>{var a;const s=(a=t.current)==null?void 0:a.getAttribute("aria-describedby");n&&s&&(document.getElementById(n)||console.warn(r))},[r,t,n]),null},Xe=fe,Ze=be,Je=ye,Qe=ve,et=Ce,tt=De,W=Be;const p=({isOpen:t,onOpenChange:n,isLoading:o=!1,title:r,description:s,isCloseButtonVisible:a=!0,actionButton:l,cancelButton:c,subActionButton:d,children:f})=>{const h=i.useRef(null);i.useEffect(()=>{},[t,l.onClick]);const b=i.useCallback(P=>{o&&P.preventDefault()},[o]),ke=i.useCallback(P=>{l.variant==="destructive"&&c!==void 0&&h.current&&(P.preventDefault(),h.current.focus())},[l.variant,c]);return e.jsx(Xe,{open:t,onOpenChange:n,children:e.jsxs(Ze,{children:[e.jsx(Je,{className:R("dialog-overlay fixed inset-0 z-(--z-modal-backdrop) bg-black/50")}),e.jsxs(Qe,{onEscapeKeyDown:b,onPointerDownOutside:b,onInteractOutside:b,onOpenAutoFocus:ke,...s===void 0&&{"aria-describedby":void 0},className:R("dialog-content fixed left-1/2 top-1/2 z-(--z-modal)","-translate-x-1/2 -translate-y-1/2","w-[calc(100vw-2rem)] max-w-md","max-h-[calc(100vh-2rem)] overflow-hidden","bg-background border border-border-strong shadow-lg","flex flex-col gap-6 p-6"),children:[e.jsxs("div",{className:"shrink-0 flex flex-col gap-1.5 pr-8",children:[e.jsx(et,{className:"text-lg font-semibold leading-tight text-foreground",children:r}),s&&e.jsx(tt,{className:"text-sm text-foreground-muted",children:s})]}),f&&e.jsx("div",{className:"min-h-0 overflow-y-auto text-sm text-foreground",children:f}),e.jsxs("div",{className:R("shrink-0 flex flex-col gap-2","sm:flex-row sm:items-center sm:gap-2 sm:justify-end"),children:[d&&e.jsx(u,{variant:"tertiary",disabled:o,onClick:d.onClick,icon:d.icon,className:"order-4 sm:order-1 sm:mr-auto",children:d.label}),d&&e.jsx(We,{className:"order-3 my-2 sm:my-0 sm:hidden","aria-hidden":"true"}),c&&e.jsx(W,{asChild:!0,children:e.jsx(u,{ref:h,variant:"secondary",disabled:o,onClick:c.onClick,icon:c.icon,className:"order-2",children:c.label})}),e.jsx(u,{variant:l.variant??"primary",isLoading:o,onClick:l.onClick,icon:l.icon,className:"order-1 sm:order-3",children:l.label})]}),a&&e.jsx("div",{className:"absolute right-4 top-4",children:e.jsx(W,{asChild:!0,children:e.jsx(u,{variant:"tertiary",size:"sm",icon:"X","aria-label":"Close",disabled:o})})})]})]})})};p.displayName="Dialog";try{p.displayName="Dialog",p.__docgenInfo={description:"",displayName:"Dialog",props:{isOpen:{defaultValue:null,description:"Controlled open state.",name:"isOpen",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Called when the open state changes (close ✕, ESC, overlay click, cancel button).",name:"onOpenChange",required:!0,type:{name:"(isOpen: boolean) => void"}},isLoading:{defaultValue:{value:"false"},description:"When true, the action button shows a spinner, cancel / sub-action are\ndisabled, and ESC / overlay click / close ✕ are blocked. Parent owns\nthis state — set it true before awaiting the async action and back to\nfalse (or close the dialog) when settled.\n\nErrors are the parent's responsibility — `actionButton.onClick`\nrejections are not caught by Dialog. Wrap your async handler in\n`try/catch` (or `.catch`) and reset `isLoading` in the failure path\nto avoid the dialog getting stuck.",name:"isLoading",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},isCloseButtonVisible:{defaultValue:{value:"true"},description:"Default: true.",name:"isCloseButtonVisible",required:!1,type:{name:"boolean"}},actionButton:{defaultValue:null,description:"Required primary action. When `variant: 'destructive'` and a\n`cancelButton` is provided, initial focus is auto-routed to Cancel\n(WCAG-recommended safeguard for irreversible actions).\n\nNote: if `onClick` is omitted the action button is a no-op — the\ndialog will not close. A development-mode warning is logged in this\ncase.",name:"actionButton",required:!0,type:{name:"DialogActionButton"}},cancelButton:{defaultValue:null,description:"",name:"cancelButton",required:!1,type:{name:"DialogCancelButton"}},subActionButton:{defaultValue:null,description:"",name:"subActionButton",required:!1,type:{name:"DialogSubActionButton"}},children:{defaultValue:null,description:`Body content. Long content scrolls inside the dialog automatically
(the dialog caps its height to the viewport).

Note on tab order: with the responsive footer layout, mobile visual
order is \`Action / Cancel / SubAction\` but tab order follows DOM
order (\`SubAction → Cancel → Action\`). This is a known trade-off
with CSS \`order\` and is consistent with shadcn/ui and Radix patterns.
Desktop tab order matches visual order.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Ct={title:"Components/lv1/Dialog",component:p,parameters:{layout:"centered",docs:{description:{component:`Dialog renders a modal overlay for important content or actions —
confirmations, form input, detail views. The API is **flat**: all
state and footer slots are passed as props; only the body is \`children\`.

## Open state is controlled

The parent owns \`isOpen\` / \`onOpenChange\`. There is no \`<DialogTrigger>\` —
any button can open the dialog.

\`\`\`tsx
const [isOpen, setIsOpen] = useState(false)

<Button onClick={() => setIsOpen(true)}>Open</Button>
<Dialog
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  title="..."
  actionButton={{ label: 'Confirm', onClick: handleConfirm }}
  cancelButton={{ label: 'Cancel' }}
/>
\`\`\`

## Async actions

The parent owns \`isLoading\`. While true:
- \`actionButton\` shows a spinner
- \`cancelButton\` / \`subActionButton\` are disabled
- ESC, overlay click, and the close ✕ are blocked

Set \`isLoading\` to true before awaiting your async action, and back to
false (or close the dialog) when the promise settles. Errors are the
parent's responsibility — the dialog stays open on rejection.

## Footer slots

- \`actionButton\` (required) — primary action. \`variant: 'primary' | 'destructive'\`
- \`cancelButton\` (optional) — closes the dialog. \`variant: secondary\` (fixed)
- \`subActionButton\` (optional) — tertiary alternative. \`variant: tertiary\` (fixed)

Layout:
- Desktop: \`[SubAction] ────── [Cancel] [Action]\`
- Mobile:  \`[Action] / [Cancel] / ── ── ── / [SubAction]\`
  (separator only when \`subActionButton\` is provided)`}}},tags:["autodocs"],argTypes:{isOpen:{description:"Controlled open state.",control:"boolean",table:{type:{summary:"boolean"}}},onOpenChange:{description:"Called when the open state changes (close ✕, ESC, overlay click, cancel button).",table:{type:{summary:"(isOpen: boolean) => void"}},control:!1},isLoading:{description:"When true: action shows spinner, cancel/sub disabled, ESC / overlay / ✕ blocked.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},title:{description:"Dialog heading. Required.",control:"text",table:{type:{summary:"string"}}},description:{description:"Optional supporting text rendered below the title.",control:"text",table:{type:{summary:"string"}}},isCloseButtonVisible:{description:"Whether the close (✕) button in the top-right is rendered.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},actionButton:{description:"Primary action button. Required.",table:{type:{summary:"DialogActionButton"}},control:!1},cancelButton:{description:"Cancel button (secondary variant). Closes the dialog when clicked.",table:{type:{summary:"DialogCancelButton"}},control:!1},subActionButton:{description:"Sub-action button (tertiary variant) — placed at the far left on desktop.",table:{type:{summary:"DialogSubActionButton"}},control:!1},children:{description:"Body content rendered between the header and the footer.",table:{type:{summary:"ReactNode"}},control:!1}}},O={name:"Playground",args:{isOpen:!1,title:"Delete account",description:"This action cannot be undone.",isLoading:!1,isCloseButtonVisible:!0,actionButton:{label:"Delete",variant:"destructive"},cancelButton:{label:"Cancel"},children:"All data associated with this account will be permanently removed."},render:t=>{const[n,o]=i.useState(t.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>o(!0),children:"Open dialog"}),e.jsx(p,{...t,isOpen:n,onOpenChange:o})]})}},C={name:"Confirm (primary)",parameters:{docs:{description:{story:"Standard confirmation dialog with a primary action and cancel."}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Open"}),e.jsx(p,{isOpen:t,onOpenChange:n,title:"Save changes",description:"Your changes will be saved to this document.",actionButton:{label:"Save",onClick:()=>n(!1)},cancelButton:{label:"Cancel"}})]})}},x={name:"Destructive",parameters:{docs:{description:{story:'Set `actionButton.variant: "destructive"` for irreversible actions like delete.'}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"destructive",onClick:()=>n(!0),children:"Delete"}),e.jsx(p,{isOpen:t,onOpenChange:n,title:"Delete account?",description:"This action cannot be undone. All data will be permanently removed.",actionButton:{label:"Delete",variant:"destructive",onClick:()=>n(!1)},cancelButton:{label:"Cancel"}})]})}},D={name:"With Sub-Action",parameters:{docs:{description:{story:'`subActionButton` provides a tertiary alternative — for example "Save as draft". On desktop it sits at the far left; on mobile it stacks below a separator at the bottom of the footer, after Action and Cancel.'}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Open"}),e.jsx(p,{isOpen:t,onOpenChange:n,title:"Publish article?",description:"Your article will be visible to all readers.",actionButton:{label:"Publish",onClick:()=>n(!1)},cancelButton:{label:"Cancel"},subActionButton:{label:"Save as draft",onClick:()=>n(!1)}})]})}},w={name:"Loading",parameters:{docs:{description:{story:"When `isLoading` is true, the action button shows a spinner, the cancel and sub-action buttons are disabled, and dismissal (ESC / overlay click / ✕) is blocked. The parent owns this state."}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Open"}),e.jsx(p,{isOpen:t,onOpenChange:n,isLoading:!0,title:"Saving…",description:"Please wait while we save your changes.",actionButton:{label:"Save"},cancelButton:{label:"Cancel"}})]})}},B={name:"Async Action",parameters:{docs:{description:{story:"Pattern for awaiting an async action. The parent flips `isLoading` true → awaits → flips false (or closes the dialog)."}}},render:()=>{const[t,n]=i.useState(!1),[o,r]=i.useState(!1),s=async()=>{r(!0),await new Promise(a=>setTimeout(a,1500)),r(!1),n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Open async dialog"}),e.jsx(p,{isOpen:t,onOpenChange:n,isLoading:o,title:"Submit form?",description:"This will submit your form to the server.",actionButton:{label:"Submit",onClick:s},cancelButton:{label:"Cancel"}})]})}},S={name:"Without Close Button",parameters:{docs:{description:{story:"Set `isCloseButtonVisible={false}` to hide the ✕ button — useful when you want to force the user through one of the footer actions."}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Open"}),e.jsx(p,{isOpen:t,onOpenChange:n,isCloseButtonVisible:!1,title:"Terms of service",description:"You must accept the terms to continue.",actionButton:{label:"Accept",onClick:()=>n(!1)},cancelButton:{label:"Decline"}})]})}},I={name:"Info Only (action only)",parameters:{docs:{description:{story:'For "OK"-only information dialogs, omit `cancelButton` and use `actionButton` to dismiss.'}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Open"}),e.jsx(p,{isOpen:t,onOpenChange:n,title:"Update available",description:"A new version of the app is ready. Reload to apply.",actionButton:{label:"OK",onClick:()=>n(!1)}})]})}},k={name:"Long Content",parameters:{docs:{description:{story:"Dialog caps its height at the viewport (`max-h-[calc(100vh-2rem)]`) and the body region scrolls internally. No consumer-side `max-height` / `overflow` is needed — header and footer stay pinned."}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Open"}),e.jsx(p,{isOpen:t,onOpenChange:n,title:"Privacy policy update",description:"Please review the changes before continuing.",actionButton:{label:"Accept",onClick:()=>n(!1)},cancelButton:{label:"Decline"},children:e.jsx("div",{className:"flex flex-col gap-3",children:Array.from({length:8}).map((o,r)=>e.jsx("p",{children:"We have updated our privacy policy to reflect changes in how we handle user data. The updates clarify our practices around analytics, third-party integrations, and the retention of session-level information. By accepting, you acknowledge that you have read and understood the changes. You can review the full policy at any time from your account settings."},r))})})]})}};var M,V,q;O.parameters={...O.parameters,docs:{...(M=O.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    isOpen: false,
    title: 'Delete account',
    description: 'This action cannot be undone.',
    isLoading: false,
    isCloseButtonVisible: true,
    actionButton: {
      label: 'Delete',
      variant: 'destructive'
    },
    cancelButton: {
      label: 'Cancel'
    },
    children: 'All data associated with this account will be permanently removed.'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
        <Dialog {...args} isOpen={isOpen} onOpenChange={setIsOpen} />
      </>;
  }
}`,...(q=(V=O.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var G,Y,K;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Confirm (primary)',
  parameters: {
    docs: {
      description: {
        story: 'Standard confirmation dialog with a primary action and cancel.'
      }
    }
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen} title="Save changes" description="Your changes will be saved to this document." actionButton={{
        label: 'Save',
        onClick: () => setIsOpen(false)
      }} cancelButton={{
        label: 'Cancel'
      }} />
      </>;
  }
}`,...(K=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var $,z,U;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Destructive',
  parameters: {
    docs: {
      description: {
        story: 'Set \`actionButton.variant: "destructive"\` for irreversible actions like delete.'
      }
    }
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button variant="destructive" onClick={() => setIsOpen(true)}>
          Delete
        </Button>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen} title="Delete account?" description="This action cannot be undone. All data will be permanently removed." actionButton={{
        label: 'Delete',
        variant: 'destructive',
        onClick: () => setIsOpen(false)
      }} cancelButton={{
        label: 'Cancel'
      }} />
      </>;
  }
}`,...(U=(z=x.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var H,X,Z;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'With Sub-Action',
  parameters: {
    docs: {
      description: {
        story: '\`subActionButton\` provides a tertiary alternative — for example "Save as draft". On desktop it sits at the far left; on mobile it stacks below a separator at the bottom of the footer, after Action and Cancel.'
      }
    }
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen} title="Publish article?" description="Your article will be visible to all readers." actionButton={{
        label: 'Publish',
        onClick: () => setIsOpen(false)
      }} cancelButton={{
        label: 'Cancel'
      }} subActionButton={{
        label: 'Save as draft',
        onClick: () => setIsOpen(false)
      }} />
      </>;
  }
}`,...(Z=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var J,Q,ee;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Loading',
  parameters: {
    docs: {
      description: {
        story: 'When \`isLoading\` is true, the action button shows a spinner, the cancel and sub-action buttons are disabled, and dismissal (ESC / overlay click / ✕) is blocked. The parent owns this state.'
      }
    }
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen} isLoading title="Saving…" description="Please wait while we save your changes." actionButton={{
        label: 'Save'
      }} cancelButton={{
        label: 'Cancel'
      }} />
      </>;
  }
}`,...(ee=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,ne,oe;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Async Action',
  parameters: {
    docs: {
      description: {
        story: 'Pattern for awaiting an async action. The parent flips \`isLoading\` true → awaits → flips false (or closes the dialog).'
      }
    }
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleSave = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsLoading(false);
      setIsOpen(false);
    };
    return <>
        <Button onClick={() => setIsOpen(true)}>Open async dialog</Button>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen} isLoading={isLoading} title="Submit form?" description="This will submit your form to the server." actionButton={{
        label: 'Submit',
        onClick: handleSave
      }} cancelButton={{
        label: 'Cancel'
      }} />
      </>;
  }
}`,...(oe=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ae,se,re;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Without Close Button',
  parameters: {
    docs: {
      description: {
        story: 'Set \`isCloseButtonVisible={false}\` to hide the ✕ button — useful when you want to force the user through one of the footer actions.'
      }
    }
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen} isCloseButtonVisible={false} title="Terms of service" description="You must accept the terms to continue." actionButton={{
        label: 'Accept',
        onClick: () => setIsOpen(false)
      }} cancelButton={{
        label: 'Decline'
      }} />
      </>;
  }
}`,...(re=(se=S.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,le,ce;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Info Only (action only)',
  parameters: {
    docs: {
      description: {
        story: 'For "OK"-only information dialogs, omit \`cancelButton\` and use \`actionButton\` to dismiss.'
      }
    }
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen} title="Update available" description="A new version of the app is ready. Reload to apply." actionButton={{
        label: 'OK',
        onClick: () => setIsOpen(false)
      }} />
      </>;
  }
}`,...(ce=(le=I.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,ue,pe;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Long Content',
  parameters: {
    docs: {
      description: {
        story: 'Dialog caps its height at the viewport (\`max-h-[calc(100vh-2rem)]\`) and the body region scrolls internally. No consumer-side \`max-height\` / \`overflow\` is needed — header and footer stay pinned.'
      }
    }
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen} title="Privacy policy update" description="Please review the changes before continuing." actionButton={{
        label: 'Accept',
        onClick: () => setIsOpen(false)
      }} cancelButton={{
        label: 'Decline'
      }}>
          <div className="flex flex-col gap-3">
            {Array.from({
            length: 8
          }).map((_, i) =>
          // biome-ignore lint/suspicious/noArrayIndexKey: stable static fixture content
          <p key={i}>
                We have updated our privacy policy to reflect changes in how we handle user data.
                The updates clarify our practices around analytics, third-party integrations, and
                the retention of session-level information. By accepting, you acknowledge that you
                have read and understood the changes. You can review the full policy at any time
                from your account settings.
              </p>)}
          </div>
        </Dialog>
      </>;
  }
}`,...(pe=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const xt=["Playground","Confirm","Destructive","WithSubAction","Loading","AsyncAction","WithoutCloseButton","InfoOnly","LongContent"];export{B as AsyncAction,C as Confirm,x as Destructive,I as InfoOnly,w as Loading,k as LongContent,O as Playground,D as WithSubAction,S as WithoutCloseButton,xt as __namedExportsOrder,Ct as default};
