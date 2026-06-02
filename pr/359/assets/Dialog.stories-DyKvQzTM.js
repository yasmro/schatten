import{i as e,s as t}from"./preload-helper-ChaSUgV0.js";import{C as n,t as r}from"./iframe-DK9TY03R.js";import{n as i,t as a}from"./lucide-react-DLEtKJ8w.js";import{n as o,r as s}from"./dist-5fzXjeRe.js";import{t as c}from"./Button-uALweSOg.js";import{t as l}from"./Button-BRcoreTz.js";import{c as u,d,f as ee,h as te,i as ne,m as re,o as ie,p as ae,r as oe,s as se,t as f}from"./dist-B4iz6NrP.js";import{n as ce,t as p}from"./dist-CxE_ju2A.js";import{n as m,t as le}from"./dist-BxAlIPXy.js";import{i as ue,n as de,o as fe,t as pe}from"./dist-DYVuwPqj.js";import{a as me,c as he,i as ge,n as _e,o as ve,r as ye,s as be,t as xe}from"./es2015-DHJl5pZw.js";import{t as Se}from"./Separator-DiVroVTc.js";import{t as Ce}from"./Separator-C_3e-frK.js";import{t as we}from"./Dialog-Bzbvdo-u.js";function h(e){return e?`open`:`closed`}var g,_,v,y,Te,Ee,b,x,S,De,C,Oe,w,T,E,D,ke,Ae,O,k,je,Me,A,j,M,N,P,F,I,L,Ne,R,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We=e((()=>{g=t(n(),1),ee(),o(),te(),le(),se(),fe(),he(),de(),ce(),oe(),me(),ye(),_e(),ie(),_=r(),v=`Dialog`,[y,Te]=re(v),[Ee,b]=y(v),x=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:o=!0}=e,s=g.useRef(null),c=g.useRef(null),[l,d]=u({prop:r,defaultProp:i??!1,onChange:a,caller:v});return(0,_.jsx)(Ee,{scope:t,triggerRef:s,contentRef:c,contentId:m(),titleId:m(),descriptionId:m(),open:l,onOpenChange:d,onOpenToggle:g.useCallback(()=>d(e=>!e),[d]),modal:o,children:n})},x.displayName=v,S=`DialogTrigger`,De=g.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=b(S,n),a=s(t,i.triggerRef);return(0,_.jsx)(f.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":i.open,"aria-controls":i.contentId,"data-state":h(i.open),...r,ref:a,onClick:d(e.onClick,i.onOpenToggle)})}),De.displayName=S,C=`DialogPortal`,[Oe,w]=y(C,{forceMount:void 0}),T=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:i}=e,a=b(C,t);return(0,_.jsx)(Oe,{scope:t,forceMount:n,children:g.Children.map(r,e=>(0,_.jsx)(p,{present:n||a.open,children:(0,_.jsx)(pe,{asChild:!0,container:i,children:e})}))})},T.displayName=C,E=`DialogOverlay`,D=g.forwardRef((e,t)=>{let n=w(E,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=b(E,e.__scopeDialog);return a.modal?(0,_.jsx)(p,{present:r||a.open,children:(0,_.jsx)(Ae,{...i,ref:t})}):null}),D.displayName=E,ke=ne(`DialogOverlay.RemoveScroll`),Ae=g.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=b(E,n);return(0,_.jsx)(ge,{as:ke,allowPinchZoom:!0,shards:[i.contentRef],children:(0,_.jsx)(f.div,{"data-state":h(i.open),...r,ref:t,style:{pointerEvents:`auto`,...r.style}})})}),O=`DialogContent`,k=g.forwardRef((e,t)=>{let n=w(O,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,a=b(O,e.__scopeDialog);return(0,_.jsx)(p,{present:r||a.open,children:a.modal?(0,_.jsx)(je,{...i,ref:t}):(0,_.jsx)(Me,{...i,ref:t})})}),k.displayName=O,je=g.forwardRef((e,t)=>{let n=b(O,e.__scopeDialog),r=g.useRef(null),i=s(t,n.contentRef,r);return g.useEffect(()=>{let e=r.current;if(e)return xe(e)},[]),(0,_.jsx)(A,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:d(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:d(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0;(t.button===2||n)&&e.preventDefault()}),onFocusOutside:d(e.onFocusOutside,e=>e.preventDefault())})}),Me=g.forwardRef((e,t)=>{let n=b(O,e.__scopeDialog),r=g.useRef(!1),i=g.useRef(!1);return(0,_.jsx)(A,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})}),A=g.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,...o}=e,c=b(O,n),l=g.useRef(null),u=s(t,l);return ve(),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(be,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,_.jsx)(ue,{role:`dialog`,id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":h(c.open),...o,ref:u,onDismiss:()=>c.onOpenChange(!1)})}),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(Pe,{titleId:c.titleId}),(0,_.jsx)(Ie,{contentRef:l,descriptionId:c.descriptionId})]})]})}),j=`DialogTitle`,M=g.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=b(j,n);return(0,_.jsx)(f.h2,{id:i.titleId,...r,ref:t})}),M.displayName=j,N=`DialogDescription`,P=g.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=b(N,n);return(0,_.jsx)(f.p,{id:i.descriptionId,...r,ref:t})}),P.displayName=N,F=`DialogClose`,I=g.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=b(F,n);return(0,_.jsx)(f.button,{type:`button`,...r,ref:t,onClick:d(e.onClick,()=>i.onOpenChange(!1))})}),I.displayName=F,L=`DialogTitleWarning`,[Ne,R]=ae(L,{contentName:O,titleName:j,docsSlug:`dialog`}),Pe=({titleId:e})=>{let t=R(L),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return g.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},Fe=`DialogDescriptionWarning`,Ie=({contentRef:e,descriptionId:t})=>{let n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${R(Fe).contentName}}.`;return g.useEffect(()=>{let r=e.current?.getAttribute(`aria-describedby`);t&&r&&(document.getElementById(t)||console.warn(n))},[n,e,t]),null},Le=x,Re=T,ze=D,Be=k,Ve=M,He=P,Ue=I}));function Ge({title:e,description:t}){return(0,z.jsxs)(`div`,{className:`st-dialog__header`,children:[(0,z.jsx)(Ve,{className:`st-dialog__title`,children:e}),t&&(0,z.jsx)(He,{className:`st-dialog__description`,children:t})]})}function Ke({children:e}){return(0,z.jsx)(`div`,{className:`st-dialog__body`,children:e})}function qe({actionButton:e,cancelButton:t,subActionButton:n,anyLoading:r}){let i=!!e.isLoading,a=!!n?.isLoading;return(0,z.jsxs)(`div`,{className:`st-dialog__footer`,children:[(0,z.jsx)(c,{variant:e.variant??`primary`,isLoading:i,disabled:a,onClick:e.onClick,icon:e.icon,className:`order-1 sm:order-3`,children:e.label}),t&&(0,z.jsx)(Ue,{asChild:!0,children:(0,z.jsx)(c,{variant:`secondary`,disabled:r,onClick:t.onClick,icon:t.icon,className:`order-2`,children:t.label})}),n&&(0,z.jsx)(Se,{className:`order-3 my-2 sm:my-0 sm:hidden`,"aria-hidden":`true`}),n&&(0,z.jsx)(c,{variant:`tertiary`,isLoading:a,disabled:i,onClick:n.onClick,icon:n.icon,className:`order-4 sm:order-1 sm:mr-auto`,children:n.label})]})}function Je({disabled:e}){return(0,z.jsx)(`div`,{className:`st-dialog__close`,children:(0,z.jsx)(Ue,{asChild:!0,children:(0,z.jsx)(c,{variant:`tertiary`,size:`sm`,icon:i,"aria-label":`Close`,disabled:e})})})}var Ye,z,B,Xe=e((()=>{We(),a(),Ye=t(n(),1),l(),Ce(),we(),z=r(),B=({isOpen:e,onOpenChange:t,title:n,description:r,isCloseButtonVisible:i=!0,actionButton:a,cancelButton:o,subActionButton:s,children:c})=>{(0,Ye.useEffect)(()=>{},[e,a.onClick]);let l=!!a.isLoading||!!s?.isLoading,u=(0,Ye.useCallback)(e=>{l&&e.preventDefault()},[l]);return(0,z.jsx)(Le,{open:e,onOpenChange:t,children:(0,z.jsxs)(Re,{children:[(0,z.jsx)(ze,{className:`st-dialog__overlay`}),(0,z.jsxs)(Be,{onEscapeKeyDown:u,onPointerDownOutside:u,onInteractOutside:u,...r===void 0&&{"aria-describedby":void 0},className:`st-dialog__content`,children:[(0,z.jsx)(Ge,{title:n,description:r}),c&&(0,z.jsx)(Ke,{children:c}),(0,z.jsx)(qe,{actionButton:a,cancelButton:o,subActionButton:s,anyLoading:l}),i&&(0,z.jsx)(Je,{disabled:l})]})]})})},B.displayName=`Dialog`;try{B.displayName=`Dialog`,B.__docgenInfo={description:``,displayName:`Dialog`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Dialog/Dialog.tsx`,methods:[],props:{isOpen:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Controlled open state.`,name:`isOpen`,parent:{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`},required:!0,tags:{},type:{name:`boolean`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Called when the open state changes (close ✕, ESC, overlay click, cancel button).`,name:`onOpenChange`,parent:{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`},required:!0,tags:{},type:{name:`(isOpen: boolean) => void`}},title:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`}],description:"Dialog heading. Rendered as the accessible name via Radix `aria-labelledby`.",name:`title`,parent:{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`},required:!0,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Optional supporting text rendered below the title.`,name:`description`,parent:{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`},required:!1,tags:{},type:{name:`string`}},isCloseButtonVisible:{defaultValue:{value:`true`},declarations:[{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Whether the close (✕) button in the top-right is rendered.`,name:`isCloseButtonVisible`,parent:{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`},required:!1,tags:{default:`true`},type:{name:`boolean`}},actionButton:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Required primary action. Set \`isLoading: true\` on the slot to show
a spinner (Dialog will also disable cancel / sub-action and block
dismissal while any footer button is loading).

On open, Radix focuses the first tabbable element inside Content;
the footer is structured so that the action button is the first
tabbable in the footer region. If the body (\`children\`) contains
focusable elements (e.g. form inputs), those will be focused first.

Async-handler errors are the parent's responsibility — \`onClick\`
rejections are not caught by Dialog. Wrap your handler in
\`try/catch\` (or \`.catch\`) and reset \`isLoading\` in the failure path
to avoid the dialog getting stuck.

Note: if \`onClick\` is omitted the action button is a no-op — the
dialog will not close. A development-mode warning is logged in this
case.`,name:`actionButton`,parent:{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`},required:!0,tags:{},type:{name:`DialogActionButton`}},cancelButton:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Optional cancel button (secondary variant). Clicking it closes the
dialog automatically — the parent does *not* need to call
\`onOpenChange(false)\`. If \`onClick\` is provided, it's invoked
alongside the close (useful for cleanup / analytics). Cancel is
always synchronous; for a "going back" path that needs awaiting,
use \`subActionButton\` instead.`,name:`cancelButton`,parent:{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`},required:!1,tags:{},type:{name:`DialogCancelButton`}},subActionButton:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Optional tertiary alternative — typically "Save as draft" or a
non-primary commit path. Placed at the far left on desktop, below
a separator on mobile. Like \`actionButton\`, set \`isLoading: true\`
for async sub-action handlers; the same dismissal-blocking and
sibling-disabling rules apply.`,name:`subActionButton`,parent:{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`},required:!1,tags:{},type:{name:`DialogSubActionButton`}},children:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Body content. Long content scrolls inside the dialog automatically
(the dialog caps its height to the viewport).

Note on tab order: footer DOM order is
\`Action → Cancel → SubAction\` so that Radix's default focus
(first tabbable) lands on the action button.
- Mobile (vertical stack): visual order is also
  \`Action / Cancel / SubAction\` ✓ tab order matches visual.
- Desktop (horizontal): visual order is \`SubAction … Cancel Action\`
  (left-to-right) so tab order is the reverse of left-to-right
  reading order. This is a deliberate trade-off — keyboard
  confirmation lands on the primary action immediately.`,name:`children`,parent:{fileName:`schatten/src/components/lv1/Dialog/Dialog.tsx`,name:`DialogProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})),V,H,Ze,U,W,G,K,q,J,Y,X,Z,Q,$,Qe;e((()=>{V=t(n(),1),l(),Xe(),H=r(),Ze={title:`Components/lv1/Dialog`,component:B,parameters:{layout:`centered`,docs:{description:{component:`Dialog renders a modal overlay for important content or actions —
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

Set \`isLoading: true\` on the slot whose handler is in flight
(\`actionButton\` or \`subActionButton\`). While any footer button is
loading:
- That button shows a spinner
- The other footer buttons (and close ✕) are disabled
- ESC, overlay click, and the close ✕ are blocked

Flip \`isLoading\` true before awaiting and back to false (or close the
dialog) when the promise settles. Errors are the parent's
responsibility — the dialog stays open on rejection.

## Footer slots

- \`actionButton\` (required) — primary action. \`variant: 'primary' | 'destructive'\`
- \`cancelButton\` (optional) — closes the dialog. \`variant: secondary\` (fixed)
- \`subActionButton\` (optional) — tertiary alternative. \`variant: tertiary\` (fixed)

Layout:
- Desktop: \`[SubAction] ────── [Cancel] [Action]\`
- Mobile:  \`[Action] / [Cancel] / ── ── ── / [SubAction]\`
  (separator only when \`subActionButton\` is provided)`}}},tags:[`autodocs`],argTypes:{isOpen:{description:`Controlled open state.`,control:`boolean`,table:{type:{summary:`boolean`}}},onOpenChange:{description:`Called when the open state changes (close ✕, ESC, overlay click, cancel button).`,table:{type:{summary:`(isOpen: boolean) => void`}},control:!1},title:{description:`Dialog heading. Required.`,control:`text`,table:{type:{summary:`string`}}},description:{description:`Optional supporting text rendered below the title.`,control:`text`,table:{type:{summary:`string`}}},isCloseButtonVisible:{description:`Whether the close (✕) button in the top-right is rendered.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},actionButton:{description:"Primary action button. Required. Set `isLoading: true` on this slot to show a spinner; Dialog will disable the other footer buttons and block dismissal.",table:{type:{summary:`DialogActionButton`}},control:!1},cancelButton:{description:`Cancel button (secondary variant). Closes the dialog when clicked.`,table:{type:{summary:`DialogCancelButton`}},control:!1},subActionButton:{description:"Sub-action button (tertiary variant) — placed at the far left on desktop. Like `actionButton`, accepts `isLoading` for async sub-action handlers.",table:{type:{summary:`DialogSubActionButton`}},control:!1},children:{description:`Body content rendered between the header and the footer.`,table:{type:{summary:`ReactNode`}},control:!1}}},U={name:`Playground`,args:{isOpen:!1,title:`Delete account`,description:`This action cannot be undone.`,isCloseButtonVisible:!0,actionButton:{label:`Delete`,variant:`destructive`,isLoading:!1},cancelButton:{label:`Cancel`},subActionButton:{label:`Save as draft`,isLoading:!1},children:`All data associated with this account will be permanently removed.`},render:e=>{let[t,n]=(0,V.useState)(e.isOpen);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(c,{onClick:()=>n(!0),children:`Open dialog`}),(0,H.jsx)(B,{...e,isOpen:t,onOpenChange:n,actionButton:{...e.actionButton,onClick:()=>n(!1)},subActionButton:e.subActionButton?{...e.subActionButton,onClick:()=>n(!1)}:void 0})]})}},W={name:`Confirm (primary)`,parameters:{docs:{description:{story:`Standard confirmation dialog with a primary action and cancel.`}}},render:()=>{let[e,t]=(0,V.useState)(!1);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(c,{onClick:()=>t(!0),children:`Open`}),(0,H.jsx)(B,{isOpen:e,onOpenChange:t,title:`Save changes`,description:`Your changes will be saved to this document.`,actionButton:{label:`Save`,onClick:()=>t(!1)},cancelButton:{label:`Cancel`}})]})}},G={name:`Destructive`,parameters:{docs:{description:{story:'Set `actionButton.variant: "destructive"` for irreversible actions like delete.'}}},render:()=>{let[e,t]=(0,V.useState)(!1);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(c,{variant:`destructive`,onClick:()=>t(!0),children:`Delete`}),(0,H.jsx)(B,{isOpen:e,onOpenChange:t,title:`Delete account?`,description:`This action cannot be undone. All data will be permanently removed.`,actionButton:{label:`Delete`,variant:`destructive`,onClick:()=>t(!1)},cancelButton:{label:`Cancel`}})]})}},K={name:`With Sub-Action`,parameters:{docs:{description:{story:'`subActionButton` provides a tertiary alternative — for example "Save as draft". On desktop it sits at the far left; on mobile it stacks below a separator at the bottom of the footer, after Action and Cancel.'}}},render:()=>{let[e,t]=(0,V.useState)(!1);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(c,{onClick:()=>t(!0),children:`Open`}),(0,H.jsx)(B,{isOpen:e,onOpenChange:t,title:`Publish article?`,description:`Your article will be visible to all readers.`,actionButton:{label:`Publish`,onClick:()=>t(!1)},cancelButton:{label:`Cancel`},subActionButton:{label:`Save as draft`,onClick:()=>t(!1)}})]})}},q={name:`Loading`,parameters:{docs:{description:{story:"When the action slot has `isLoading: true`, the action button shows a spinner, the cancel and sub-action buttons (and close ✕) are disabled, and dismissal (ESC / overlay click / ✕) is blocked. The parent owns this state."}}},render:()=>{let[e,t]=(0,V.useState)(!1);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(c,{onClick:()=>t(!0),children:`Open`}),(0,H.jsx)(B,{isOpen:e,onOpenChange:t,title:`Saving…`,description:`Please wait while we save your changes.`,actionButton:{label:`Save`,onClick:()=>{},isLoading:!0},cancelButton:{label:`Cancel`}})]})}},J={name:`Sub-Action Loading`,parameters:{docs:{description:{story:"When `subActionButton.isLoading` is true, the sub-action button shows the spinner; the action button (and cancel) are disabled in turn."}}},render:()=>{let[e,t]=(0,V.useState)(!1);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(c,{onClick:()=>t(!0),children:`Open`}),(0,H.jsx)(B,{isOpen:e,onOpenChange:t,title:`Publish article?`,description:`Saving as draft…`,actionButton:{label:`Publish`,onClick:()=>{}},cancelButton:{label:`Cancel`},subActionButton:{label:`Save as draft`,onClick:()=>{},isLoading:!0}})]})}},Y={name:`Async Action`,parameters:{docs:{description:{story:"Pattern for awaiting an async primary action. The parent flips `actionButton.isLoading` true → awaits → flips false (or closes the dialog)."}}},render:()=>{let[e,t]=(0,V.useState)(!1),[n,r]=(0,V.useState)(!1);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(c,{onClick:()=>t(!0),children:`Open async dialog`}),(0,H.jsx)(B,{isOpen:e,onOpenChange:t,title:`Submit form?`,description:`This will submit your form to the server.`,actionButton:{label:`Submit`,onClick:async()=>{r(!0),await new Promise(e=>setTimeout(e,1500)),r(!1),t(!1)},isLoading:n},cancelButton:{label:`Cancel`}})]})}},X={name:`Async Sub-Action`,parameters:{docs:{description:{story:"Sub-action handlers can be async too — set `isLoading: true` on `subActionButton` instead. The action button (and cancel) are disabled while the sub-action is in flight."}}},render:()=>{let[e,t]=(0,V.useState)(!1),[n,r]=(0,V.useState)(null);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(c,{onClick:()=>t(!0),children:`Open`}),(0,H.jsx)(B,{isOpen:e,onOpenChange:t,title:`Publish article?`,description:`Try clicking Save as draft — only the sub-action shows a spinner.`,actionButton:{label:`Publish`,onClick:async()=>{r(`action`),await new Promise(e=>setTimeout(e,1500)),r(null),t(!1)},isLoading:n===`action`},cancelButton:{label:`Cancel`},subActionButton:{label:`Save as draft`,onClick:async()=>{r(`sub`),await new Promise(e=>setTimeout(e,1500)),r(null),t(!1)},isLoading:n===`sub`}})]})}},Z={name:`Without Close Button`,parameters:{docs:{description:{story:"Set `isCloseButtonVisible={false}` to hide the ✕ button — useful when you want to force the user through one of the footer actions."}}},render:()=>{let[e,t]=(0,V.useState)(!1);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(c,{onClick:()=>t(!0),children:`Open`}),(0,H.jsx)(B,{isOpen:e,onOpenChange:t,isCloseButtonVisible:!1,title:`Terms of service`,description:`You must accept the terms to continue.`,actionButton:{label:`Accept`,onClick:()=>t(!1)},cancelButton:{label:`Decline`}})]})}},Q={name:`Info Only (action only)`,parameters:{docs:{description:{story:'For "OK"-only information dialogs, omit `cancelButton` and use `actionButton` to dismiss.'}}},render:()=>{let[e,t]=(0,V.useState)(!1);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(c,{onClick:()=>t(!0),children:`Open`}),(0,H.jsx)(B,{isOpen:e,onOpenChange:t,title:`Update available`,description:`A new version of the app is ready. Reload to apply.`,actionButton:{label:`OK`,onClick:()=>t(!1)}})]})}},$={name:`Long Content`,parameters:{docs:{description:{story:"Dialog caps its height at the viewport (`max-h-[calc(100vh-2rem)]`) and the body region scrolls internally. No consumer-side `max-height` / `overflow` is needed — header and footer stay pinned."}}},render:()=>{let[e,t]=(0,V.useState)(!1);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(c,{onClick:()=>t(!0),children:`Open`}),(0,H.jsx)(B,{isOpen:e,onOpenChange:t,title:`Privacy policy update`,description:`Please review the changes before continuing.`,actionButton:{label:`Accept`,onClick:()=>t(!1)},cancelButton:{label:`Decline`},children:(0,H.jsx)(`div`,{className:`flex flex-col gap-3`,children:Array.from({length:8}).map((e,t)=>(0,H.jsx)(`p`,{children:`We have updated our privacy policy to reflect changes in how we handle user data. The updates clarify our practices around analytics, third-party integrations, and the retention of session-level information. By accepting, you acknowledge that you have read and understood the changes. You can review the full policy at any time from your account settings.`},t))})})]})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    isOpen: false,
    title: 'Delete account',
    description: 'This action cannot be undone.',
    isCloseButtonVisible: true,
    actionButton: {
      label: 'Delete',
      variant: 'destructive',
      // isLoading is editable via the Controls panel — flip to true to
      // see the spinner-on-action / disabled-everything-else state.
      isLoading: false
    },
    cancelButton: {
      label: 'Cancel'
    },
    subActionButton: {
      label: 'Save as draft',
      isLoading: false
    },
    children: 'All data associated with this account will be permanently removed.'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
        <Dialog {...args} isOpen={isOpen} onOpenChange={setIsOpen}
      // Wire interactive close handlers in render so the Playground
      // is usable out of the box. Cancel auto-closes via Radix's
      // DialogClose; action and sub-action close the dialog on click.
      actionButton={{
        ...args.actionButton,
        onClick: () => setIsOpen(false)
      }} subActionButton={args.subActionButton ? {
        ...args.subActionButton,
        onClick: () => setIsOpen(false)
      } : undefined} />
      </>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Loading',
  parameters: {
    docs: {
      description: {
        story: 'When the action slot has \`isLoading: true\`, the action button shows a spinner, the cancel and sub-action buttons (and close ✕) are disabled, and dismissal (ESC / overlay click / ✕) is blocked. The parent owns this state.'
      }
    }
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen} title="Saving…" description="Please wait while we save your changes." actionButton={{
        label: 'Save',
        onClick: () => {},
        isLoading: true
      }} cancelButton={{
        label: 'Cancel'
      }} />
      </>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Sub-Action Loading',
  parameters: {
    docs: {
      description: {
        story: 'When \`subActionButton.isLoading\` is true, the sub-action button shows the spinner; the action button (and cancel) are disabled in turn.'
      }
    }
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen} title="Publish article?" description="Saving as draft…" actionButton={{
        label: 'Publish',
        onClick: () => {}
      }} cancelButton={{
        label: 'Cancel'
      }} subActionButton={{
        label: 'Save as draft',
        onClick: () => {},
        isLoading: true
      }} />
      </>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Async Action',
  parameters: {
    docs: {
      description: {
        story: 'Pattern for awaiting an async primary action. The parent flips \`actionButton.isLoading\` true → awaits → flips false (or closes the dialog).'
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
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen} title="Submit form?" description="This will submit your form to the server." actionButton={{
        label: 'Submit',
        onClick: handleSave,
        isLoading
      }} cancelButton={{
        label: 'Cancel'
      }} />
      </>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Async Sub-Action',
  parameters: {
    docs: {
      description: {
        story: 'Sub-action handlers can be async too — set \`isLoading: true\` on \`subActionButton\` instead. The action button (and cancel) are disabled while the sub-action is in flight.'
      }
    }
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loadingSlot, setLoadingSlot] = useState<'action' | 'sub' | null>(null);
    const handlePublish = async () => {
      setLoadingSlot('action');
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoadingSlot(null);
      setIsOpen(false);
    };
    const handleSaveDraft = async () => {
      setLoadingSlot('sub');
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoadingSlot(null);
      setIsOpen(false);
    };
    return <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen} title="Publish article?" description="Try clicking Save as draft — only the sub-action shows a spinner." actionButton={{
        label: 'Publish',
        onClick: handlePublish,
        isLoading: loadingSlot === 'action'
      }} cancelButton={{
        label: 'Cancel'
      }} subActionButton={{
        label: 'Save as draft',
        onClick: handleSaveDraft,
        isLoading: loadingSlot === 'sub'
      }} />
      </>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Qe=[`Playground`,`Confirm`,`Destructive`,`WithSubAction`,`Loading`,`SubActionLoading`,`AsyncAction`,`AsyncSubAction`,`WithoutCloseButton`,`InfoOnly`,`LongContent`]}))();export{Y as AsyncAction,X as AsyncSubAction,W as Confirm,G as Destructive,Q as InfoOnly,q as Loading,$ as LongContent,U as Playground,J as SubActionLoading,K as WithSubAction,Z as WithoutCloseButton,Qe as __namedExportsOrder,Ze as default};