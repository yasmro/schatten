import{r as i,j as e}from"./iframe-CmUQtO0c.js";import{B as d}from"./Button-CjuHetCV.js";import{b as Ie,P as y,d as b,c as ke,a as je,g as Ae}from"./index-DRL4vm8i.js";import{u as R}from"./index-C6QxwNBY.js";import{u as P}from"./index-BIBXpm3p.js";import{P as Pe,D as Ne}from"./index-0UIpuDpu.js";import{R as Re,h as _e,u as Ee,F as Te}from"./Combination-B0LciILm.js";import{P as _}from"./index-BOBqzY4j.js";import{c as N}from"./utils-BLSKlp9E.js";import{S as Le}from"./Separator-DAFahBme.js";import"./preload-helper-DVxGsIx5.js";import"./index-ByYRUPcC.js";import"./index-D0FsKkuH.js";import"./chevron-up-DFGWBy6t.js";import"./index-1evVQkiP.js";import"./Spinner-CHlCI7KT.js";import"./index-YfhbVDx3.js";import"./index-CZTh-VnG.js";var j="Dialog",[ue]=ke(j),[Fe,p]=ue(j),pe=t=>{const{__scopeDialog:n,children:o,open:a,defaultOpen:r,onOpenChange:s,modal:l=!0}=t,c=i.useRef(null),m=i.useRef(null),[f,h]=Ie({prop:a,defaultProp:r??!1,onChange:s,caller:j});return e.jsx(Fe,{scope:n,triggerRef:c,contentRef:m,contentId:P(),titleId:P(),descriptionId:P(),open:f,onOpenChange:h,onOpenToggle:i.useCallback(()=>h(A=>!A),[h]),modal:l,children:o})};pe.displayName=j;var me="DialogTrigger",We=i.forwardRef((t,n)=>{const{__scopeDialog:o,...a}=t,r=p(me,o),s=R(n,r.triggerRef);return e.jsx(y.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":L(r.open),...a,ref:s,onClick:b(t.onClick,r.onOpenToggle)})});We.displayName=me;var E="DialogPortal",[Me,fe]=ue(E,{forceMount:void 0}),he=t=>{const{__scopeDialog:n,forceMount:o,children:a,container:r}=t,s=p(E,n);return e.jsx(Me,{scope:n,forceMount:o,children:i.Children.map(a,l=>e.jsx(_,{present:o||s.open,children:e.jsx(Pe,{asChild:!0,container:r,children:l})}))})};he.displayName=E;var k="DialogOverlay",ge=i.forwardRef((t,n)=>{const o=fe(k,t.__scopeDialog),{forceMount:a=o.forceMount,...r}=t,s=p(k,t.__scopeDialog);return s.modal?e.jsx(_,{present:a||s.open,children:e.jsx(qe,{...r,ref:n})}):null});ge.displayName=k;var Ve=je("DialogOverlay.RemoveScroll"),qe=i.forwardRef((t,n)=>{const{__scopeDialog:o,...a}=t,r=p(k,o);return e.jsx(Re,{as:Ve,allowPinchZoom:!0,shards:[r.contentRef],children:e.jsx(y.div,{"data-state":L(r.open),...a,ref:n,style:{pointerEvents:"auto",...a.style}})})}),g="DialogContent",be=i.forwardRef((t,n)=>{const o=fe(g,t.__scopeDialog),{forceMount:a=o.forceMount,...r}=t,s=p(g,t.__scopeDialog);return e.jsx(_,{present:a||s.open,children:s.modal?e.jsx(Ye,{...r,ref:n}):e.jsx(Ge,{...r,ref:n})})});be.displayName=g;var Ye=i.forwardRef((t,n)=>{const o=p(g,t.__scopeDialog),a=i.useRef(null),r=R(n,o.contentRef,a);return i.useEffect(()=>{const s=a.current;if(s)return _e(s)},[]),e.jsx(ye,{...t,ref:r,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:b(t.onCloseAutoFocus,s=>{var l;s.preventDefault(),(l=o.triggerRef.current)==null||l.focus()}),onPointerDownOutside:b(t.onPointerDownOutside,s=>{const l=s.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&s.preventDefault()}),onFocusOutside:b(t.onFocusOutside,s=>s.preventDefault())})}),Ge=i.forwardRef((t,n)=>{const o=p(g,t.__scopeDialog),a=i.useRef(!1),r=i.useRef(!1);return e.jsx(ye,{...t,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var l,c;(l=t.onCloseAutoFocus)==null||l.call(t,s),s.defaultPrevented||(a.current||(c=o.triggerRef.current)==null||c.focus(),s.preventDefault()),a.current=!1,r.current=!1},onInteractOutside:s=>{var m,f;(m=t.onInteractOutside)==null||m.call(t,s),s.defaultPrevented||(a.current=!0,s.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const l=s.target;((f=o.triggerRef.current)==null?void 0:f.contains(l))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&r.current&&s.preventDefault()}})}),ye=i.forwardRef((t,n)=>{const{__scopeDialog:o,trapFocus:a,onOpenAutoFocus:r,onCloseAutoFocus:s,...l}=t,c=p(g,o),m=i.useRef(null),f=R(n,m);return Ee(),e.jsxs(e.Fragment,{children:[e.jsx(Te,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:r,onUnmountAutoFocus:s,children:e.jsx(Ne,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":L(c.open),...l,ref:f,onDismiss:()=>c.onOpenChange(!1)})}),e.jsxs(e.Fragment,{children:[e.jsx(Ke,{titleId:c.titleId}),e.jsx(ze,{contentRef:m,descriptionId:c.descriptionId})]})]})}),T="DialogTitle",ve=i.forwardRef((t,n)=>{const{__scopeDialog:o,...a}=t,r=p(T,o);return e.jsx(y.h2,{id:r.titleId,...a,ref:n})});ve.displayName=T;var Oe="DialogDescription",Ce=i.forwardRef((t,n)=>{const{__scopeDialog:o,...a}=t,r=p(Oe,o);return e.jsx(y.p,{id:r.descriptionId,...a,ref:n})});Ce.displayName=Oe;var xe="DialogClose",De=i.forwardRef((t,n)=>{const{__scopeDialog:o,...a}=t,r=p(xe,o);return e.jsx(y.button,{type:"button",...a,ref:n,onClick:b(t.onClick,()=>r.onOpenChange(!1))})});De.displayName=xe;function L(t){return t?"open":"closed"}var we="DialogTitleWarning",[xt,Be]=Ae(we,{contentName:g,titleName:T,docsSlug:"dialog"}),Ke=({titleId:t})=>{const n=Be(we),o=`\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;return i.useEffect(()=>{t&&(document.getElementById(t)||console.error(o))},[o,t]),null},$e="DialogDescriptionWarning",ze=({contentRef:t,descriptionId:n})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Be($e).contentName}}.`;return i.useEffect(()=>{var s;const r=(s=t.current)==null?void 0:s.getAttribute("aria-describedby");n&&r&&(document.getElementById(n)||console.warn(a))},[a,t,n]),null},He=pe,Ue=he,Xe=ge,Ze=be,Je=ve,Qe=Ce,Se=De;function et({title:t,description:n}){return e.jsxs("div",{className:"shrink-0 flex flex-col gap-1.5 pr-8",children:[e.jsx(Je,{className:"text-lg font-semibold leading-tight text-foreground",children:t}),n&&e.jsx(Qe,{className:"text-sm text-foreground-muted",children:n})]})}function tt({children:t}){return e.jsx("div",{className:"min-h-0 overflow-y-auto text-sm text-foreground",children:t})}function nt({actionButton:t,cancelButton:n,subActionButton:o,isLoading:a}){return e.jsxs("div",{className:N("shrink-0 flex flex-col gap-2","sm:flex-row sm:items-center sm:gap-2 sm:justify-end"),children:[e.jsx(d,{variant:t.variant??"primary",isLoading:a,onClick:t.onClick,icon:t.icon,className:"order-1 sm:order-3",children:t.label}),n&&e.jsx(Se,{asChild:!0,children:e.jsx(d,{variant:"secondary",disabled:a,onClick:n.onClick,icon:n.icon,className:"order-2",children:n.label})}),o&&e.jsx(Le,{className:"order-3 my-2 sm:my-0 sm:hidden","aria-hidden":"true"}),o&&e.jsx(d,{variant:"tertiary",disabled:a,onClick:o.onClick,icon:o.icon,className:"order-4 sm:order-1 sm:mr-auto",children:o.label})]})}function ot({isLoading:t}){return e.jsx("div",{className:"absolute right-4 top-4",children:e.jsx(Se,{asChild:!0,children:e.jsx(d,{variant:"tertiary",size:"sm",icon:"X","aria-label":"Close",disabled:t})})})}const u=({isOpen:t,onOpenChange:n,isLoading:o=!1,title:a,description:r,isCloseButtonVisible:s=!0,actionButton:l,cancelButton:c,subActionButton:m,children:f})=>{i.useEffect(()=>{},[t,l.onClick]);const h=i.useCallback(A=>{o&&A.preventDefault()},[o]);return e.jsx(He,{open:t,onOpenChange:n,children:e.jsxs(Ue,{children:[e.jsx(Xe,{className:N("dialog-overlay fixed inset-0 z-(--z-modal-backdrop) bg-black/50")}),e.jsxs(Ze,{onEscapeKeyDown:h,onPointerDownOutside:h,onInteractOutside:h,...r===void 0&&{"aria-describedby":void 0},className:N("dialog-content fixed left-1/2 top-1/2 z-(--z-modal)","-translate-x-1/2 -translate-y-1/2","w-[calc(100vw-2rem)] max-w-md","max-h-[calc(100vh-2rem)] overflow-hidden","bg-background border border-border-strong shadow-lg","flex flex-col gap-6 p-6"),children:[e.jsx(et,{title:a,description:r}),f&&e.jsx(tt,{children:f}),e.jsx(nt,{actionButton:l,cancelButton:c,subActionButton:m,isLoading:o}),s&&e.jsx(ot,{isLoading:o})]})]})})};u.displayName="Dialog";try{u.displayName="Dialog",u.__docgenInfo={description:"",displayName:"Dialog",props:{isOpen:{defaultValue:null,description:"Controlled open state.",name:"isOpen",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Called when the open state changes (close ✕, ESC, overlay click, cancel button).",name:"onOpenChange",required:!0,type:{name:"(isOpen: boolean) => void"}},isLoading:{defaultValue:{value:"false"},description:"When true, the action button shows a spinner, cancel / sub-action are\ndisabled, and ESC / overlay click / close ✕ are blocked. Parent owns\nthis state — set it true before awaiting the async action and back to\nfalse (or close the dialog) when settled.\n\nErrors are the parent's responsibility — `actionButton.onClick`\nrejections are not caught by Dialog. Wrap your async handler in\n`try/catch` (or `.catch`) and reset `isLoading` in the failure path\nto avoid the dialog getting stuck.",name:"isLoading",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},isCloseButtonVisible:{defaultValue:{value:"true"},description:"Default: true.",name:"isCloseButtonVisible",required:!1,type:{name:"boolean"}},actionButton:{defaultValue:null,description:`Required primary action.

On open, Radix focuses the first tabbable element inside Content;
the footer is structured so that the action button is the first
tabbable in the footer region. If the body (\`children\`) contains
focusable elements (e.g. form inputs), those will be focused first.

Note: if \`onClick\` is omitted the action button is a no-op — the
dialog will not close. A development-mode warning is logged in this
case.`,name:"actionButton",required:!0,type:{name:"DialogActionButton"}},cancelButton:{defaultValue:null,description:"",name:"cancelButton",required:!1,type:{name:"DialogCancelButton"}},subActionButton:{defaultValue:null,description:"",name:"subActionButton",required:!1,type:{name:"DialogSubActionButton"}},children:{defaultValue:null,description:`Body content. Long content scrolls inside the dialog automatically
(the dialog caps its height to the viewport).

Note on tab order: footer DOM order is
\`Action → Cancel → SubAction\` so that Radix's default focus
(first tabbable) lands on the action button.
- Mobile (vertical stack): visual order is also
  \`Action / Cancel / SubAction\` ✓ tab order matches visual.
- Desktop (horizontal): visual order is \`SubAction … Cancel Action\`
  (left-to-right) so tab order is the reverse of left-to-right
  reading order. This is a deliberate trade-off — keyboard
  confirmation lands on the primary action immediately.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Dt={title:"Components/lv1/Dialog",component:u,parameters:{layout:"centered",docs:{description:{component:`Dialog renders a modal overlay for important content or actions —
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
  (separator only when \`subActionButton\` is provided)`}}},tags:["autodocs"],argTypes:{isOpen:{description:"Controlled open state.",control:"boolean",table:{type:{summary:"boolean"}}},onOpenChange:{description:"Called when the open state changes (close ✕, ESC, overlay click, cancel button).",table:{type:{summary:"(isOpen: boolean) => void"}},control:!1},isLoading:{description:"When true: action shows spinner, cancel/sub disabled, ESC / overlay / ✕ blocked.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},title:{description:"Dialog heading. Required.",control:"text",table:{type:{summary:"string"}}},description:{description:"Optional supporting text rendered below the title.",control:"text",table:{type:{summary:"string"}}},isCloseButtonVisible:{description:"Whether the close (✕) button in the top-right is rendered.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},actionButton:{description:"Primary action button. Required.",table:{type:{summary:"DialogActionButton"}},control:!1},cancelButton:{description:"Cancel button (secondary variant). Closes the dialog when clicked.",table:{type:{summary:"DialogCancelButton"}},control:!1},subActionButton:{description:"Sub-action button (tertiary variant) — placed at the far left on desktop.",table:{type:{summary:"DialogSubActionButton"}},control:!1},children:{description:"Body content rendered between the header and the footer.",table:{type:{summary:"ReactNode"}},control:!1}}},v={name:"Playground",args:{isOpen:!1,title:"Delete account",description:"This action cannot be undone.",isLoading:!1,isCloseButtonVisible:!0,actionButton:{label:"Delete",variant:"destructive"},cancelButton:{label:"Cancel"},children:"All data associated with this account will be permanently removed."},render:t=>{const[n,o]=i.useState(t.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>o(!0),children:"Open dialog"}),e.jsx(u,{...t,isOpen:n,onOpenChange:o})]})}},O={name:"Confirm (primary)",parameters:{docs:{description:{story:"Standard confirmation dialog with a primary action and cancel."}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Save changes",description:"Your changes will be saved to this document.",actionButton:{label:"Save",onClick:()=>n(!1)},cancelButton:{label:"Cancel"}})]})}},C={name:"Destructive",parameters:{docs:{description:{story:'Set `actionButton.variant: "destructive"` for irreversible actions like delete.'}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"destructive",onClick:()=>n(!0),children:"Delete"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Delete account?",description:"This action cannot be undone. All data will be permanently removed.",actionButton:{label:"Delete",variant:"destructive",onClick:()=>n(!1)},cancelButton:{label:"Cancel"}})]})}},x={name:"With Sub-Action",parameters:{docs:{description:{story:'`subActionButton` provides a tertiary alternative — for example "Save as draft". On desktop it sits at the far left; on mobile it stacks below a separator at the bottom of the footer, after Action and Cancel.'}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Publish article?",description:"Your article will be visible to all readers.",actionButton:{label:"Publish",onClick:()=>n(!1)},cancelButton:{label:"Cancel"},subActionButton:{label:"Save as draft",onClick:()=>n(!1)}})]})}},D={name:"Loading",parameters:{docs:{description:{story:"When `isLoading` is true, the action button shows a spinner, the cancel and sub-action buttons are disabled, and dismissal (ESC / overlay click / ✕) is blocked. The parent owns this state."}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,isLoading:!0,title:"Saving…",description:"Please wait while we save your changes.",actionButton:{label:"Save"},cancelButton:{label:"Cancel"}})]})}},w={name:"Async Action",parameters:{docs:{description:{story:"Pattern for awaiting an async action. The parent flips `isLoading` true → awaits → flips false (or closes the dialog)."}}},render:()=>{const[t,n]=i.useState(!1),[o,a]=i.useState(!1),r=async()=>{a(!0),await new Promise(s=>setTimeout(s,1500)),a(!1),n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open async dialog"}),e.jsx(u,{isOpen:t,onOpenChange:n,isLoading:o,title:"Submit form?",description:"This will submit your form to the server.",actionButton:{label:"Submit",onClick:r},cancelButton:{label:"Cancel"}})]})}},B={name:"Without Close Button",parameters:{docs:{description:{story:"Set `isCloseButtonVisible={false}` to hide the ✕ button — useful when you want to force the user through one of the footer actions."}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,isCloseButtonVisible:!1,title:"Terms of service",description:"You must accept the terms to continue.",actionButton:{label:"Accept",onClick:()=>n(!1)},cancelButton:{label:"Decline"}})]})}},S={name:"Info Only (action only)",parameters:{docs:{description:{story:'For "OK"-only information dialogs, omit `cancelButton` and use `actionButton` to dismiss.'}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Update available",description:"A new version of the app is ready. Reload to apply.",actionButton:{label:"OK",onClick:()=>n(!1)}})]})}},I={name:"Long Content",parameters:{docs:{description:{story:"Dialog caps its height at the viewport (`max-h-[calc(100vh-2rem)]`) and the body region scrolls internally. No consumer-side `max-height` / `overflow` is needed — header and footer stay pinned."}}},render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Privacy policy update",description:"Please review the changes before continuing.",actionButton:{label:"Accept",onClick:()=>n(!1)},cancelButton:{label:"Decline"},children:e.jsx("div",{className:"flex flex-col gap-3",children:Array.from({length:8}).map((o,a)=>e.jsx("p",{children:"We have updated our privacy policy to reflect changes in how we handle user data. The updates clarify our practices around analytics, third-party integrations, and the retention of session-level information. By accepting, you acknowledge that you have read and understood the changes. You can review the full policy at any time from your account settings."},a))})})]})}};var F,W,M;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(M=(W=v.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var V,q,Y;O.parameters={...O.parameters,docs:{...(V=O.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Y=(q=O.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var G,K,$;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...($=(K=C.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var z,H,U;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(U=(H=x.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var X,Z,J;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,ee,te;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,ae;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,re,ie;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,ce,de;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const wt=["Playground","Confirm","Destructive","WithSubAction","Loading","AsyncAction","WithoutCloseButton","InfoOnly","LongContent"];export{w as AsyncAction,O as Confirm,C as Destructive,S as InfoOnly,D as Loading,I as LongContent,v as Playground,x as WithSubAction,B as WithoutCloseButton,wt as __namedExportsOrder,Dt as default};
