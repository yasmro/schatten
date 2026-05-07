import{r,j as e}from"./iframe-BR71pDDo.js";import{B as d}from"./Button-fusqHp_n.js";import{b as ne,P as y,d as b,c as oe,a as ae,g as se}from"./index-BPEMftxV.js";import{u as T}from"./index-CNJc8Daf.js";import{u as N}from"./index-C7jnHWcx.js";import{P as ie,D as re}from"./index-DNshMYUc.js";import{R as le,h as ce,u as de,F as ue}from"./Combination-CYY2rGQC.js";import{P as _}from"./index-JEu8y2tt.js";import{c as R}from"./utils-d2XQ1MEC.js";import{S as pe}from"./Separator-nc-HZ3Qp.js";import"./preload-helper-BdHZps5x.js";import"./index-r3lr-Zc6.js";import"./index-Dlp6Wp2P.js";import"./chevron-up-BedBGzaO.js";import"./index-Drd88ecX.js";import"./Spinner-fJP2C27T.js";import"./index-C1HX8I77.js";import"./index-CscT5rD2.js";import"./index-CUw09bJO.js";var L="Dialog",[M]=oe(L),[he,p]=M(L),V=t=>{const{__scopeDialog:n,children:o,open:s,defaultOpen:i,onOpenChange:a,modal:l=!0}=t,c=r.useRef(null),h=r.useRef(null),[g,m]=ne({prop:s,defaultProp:i??!1,onChange:a,caller:L});return e.jsx(he,{scope:n,triggerRef:c,contentRef:h,contentId:N(),titleId:N(),descriptionId:N(),open:g,onOpenChange:m,onOpenToggle:r.useCallback(()=>m(P=>!P),[m]),modal:l,children:o})};V.displayName=L;var q="DialogTrigger",ge=r.forwardRef((t,n)=>{const{__scopeDialog:o,...s}=t,i=p(q,o),a=T(n,i.triggerRef);return e.jsx(y.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":W(i.open),...s,ref:a,onClick:b(t.onClick,i.onOpenToggle)})});ge.displayName=q;var E="DialogPortal",[me,Y]=M(E,{forceMount:void 0}),G=t=>{const{__scopeDialog:n,forceMount:o,children:s,container:i}=t,a=p(E,n);return e.jsx(me,{scope:n,forceMount:o,children:r.Children.map(s,l=>e.jsx(_,{present:o||a.open,children:e.jsx(ie,{asChild:!0,container:i,children:l})}))})};G.displayName=E;var j="DialogOverlay",K=r.forwardRef((t,n)=>{const o=Y(j,t.__scopeDialog),{forceMount:s=o.forceMount,...i}=t,a=p(j,t.__scopeDialog);return a.modal?e.jsx(_,{present:s||a.open,children:e.jsx(be,{...i,ref:n})}):null});K.displayName=j;var fe=ae("DialogOverlay.RemoveScroll"),be=r.forwardRef((t,n)=>{const{__scopeDialog:o,...s}=t,i=p(j,o);return e.jsx(le,{as:fe,allowPinchZoom:!0,shards:[i.contentRef],children:e.jsx(y.div,{"data-state":W(i.open),...s,ref:n,style:{pointerEvents:"auto",...s.style}})})}),f="DialogContent",$=r.forwardRef((t,n)=>{const o=Y(f,t.__scopeDialog),{forceMount:s=o.forceMount,...i}=t,a=p(f,t.__scopeDialog);return e.jsx(_,{present:s||a.open,children:a.modal?e.jsx(ye,{...i,ref:n}):e.jsx(Oe,{...i,ref:n})})});$.displayName=f;var ye=r.forwardRef((t,n)=>{const o=p(f,t.__scopeDialog),s=r.useRef(null),i=T(n,o.contentRef,s);return r.useEffect(()=>{const a=s.current;if(a)return ce(a)},[]),e.jsx(z,{...t,ref:i,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:b(t.onCloseAutoFocus,a=>{a.preventDefault(),o.triggerRef.current?.focus()}),onPointerDownOutside:b(t.onPointerDownOutside,a=>{const l=a.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&a.preventDefault()}),onFocusOutside:b(t.onFocusOutside,a=>a.preventDefault())})}),Oe=r.forwardRef((t,n)=>{const o=p(f,t.__scopeDialog),s=r.useRef(!1),i=r.useRef(!1);return e.jsx(z,{...t,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{t.onCloseAutoFocus?.(a),a.defaultPrevented||(s.current||o.triggerRef.current?.focus(),a.preventDefault()),s.current=!1,i.current=!1},onInteractOutside:a=>{t.onInteractOutside?.(a),a.defaultPrevented||(s.current=!0,a.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const l=a.target;o.triggerRef.current?.contains(l)&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&i.current&&a.preventDefault()}})}),z=r.forwardRef((t,n)=>{const{__scopeDialog:o,trapFocus:s,onOpenAutoFocus:i,onCloseAutoFocus:a,...l}=t,c=p(f,o),h=r.useRef(null),g=T(n,h);return de(),e.jsxs(e.Fragment,{children:[e.jsx(ue,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:i,onUnmountAutoFocus:a,children:e.jsx(re,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":W(c.open),...l,ref:g,onDismiss:()=>c.onOpenChange(!1)})}),e.jsxs(e.Fragment,{children:[e.jsx(ve,{titleId:c.titleId}),e.jsx(xe,{contentRef:h,descriptionId:c.descriptionId})]})]})}),F="DialogTitle",H=r.forwardRef((t,n)=>{const{__scopeDialog:o,...s}=t,i=p(F,o);return e.jsx(y.h2,{id:i.titleId,...s,ref:n})});H.displayName=F;var U="DialogDescription",X=r.forwardRef((t,n)=>{const{__scopeDialog:o,...s}=t,i=p(U,o);return e.jsx(y.p,{id:i.descriptionId,...s,ref:n})});X.displayName=U;var Z="DialogClose",J=r.forwardRef((t,n)=>{const{__scopeDialog:o,...s}=t,i=p(Z,o);return e.jsx(y.button,{type:"button",...s,ref:n,onClick:b(t.onClick,()=>i.onOpenChange(!1))})});J.displayName=Z;function W(t){return t?"open":"closed"}var Q="DialogTitleWarning",[Je,ee]=se(Q,{contentName:f,titleName:F,docsSlug:"dialog"}),ve=({titleId:t})=>{const n=ee(Q),o=`\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;return r.useEffect(()=>{t&&(document.getElementById(t)||console.error(o))},[o,t]),null},Ce="DialogDescriptionWarning",xe=({contentRef:t,descriptionId:n})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ee(Ce).contentName}}.`;return r.useEffect(()=>{const i=t.current?.getAttribute("aria-describedby");n&&i&&(document.getElementById(n)||console.warn(s))},[s,t,n]),null},Se=V,Be=G,De=K,we=$,ke=H,Ae=X,te=J;function Ie({title:t,description:n}){return e.jsxs("div",{className:"shrink-0 flex flex-col gap-1.5 pr-8",children:[e.jsx(ke,{className:"text-lg font-semibold leading-tight text-foreground",children:t}),n&&e.jsx(Ae,{className:"text-sm text-foreground-muted",children:n})]})}function je({children:t}){return e.jsx("div",{className:"min-h-0 overflow-y-auto text-sm text-foreground",children:t})}function Le({actionButton:t,cancelButton:n,subActionButton:o,anyLoading:s}){const i=!!t.isLoading,a=!!o?.isLoading;return e.jsxs("div",{className:R("shrink-0 flex flex-col gap-2","sm:flex-row sm:items-center sm:gap-2 sm:justify-end"),children:[e.jsx(d,{variant:t.variant??"primary",isLoading:i,disabled:a,onClick:t.onClick,icon:t.icon,className:"order-1 sm:order-3",children:t.label}),n&&e.jsx(te,{asChild:!0,children:e.jsx(d,{variant:"secondary",disabled:s,onClick:n.onClick,icon:n.icon,className:"order-2",children:n.label})}),o&&e.jsx(pe,{className:"order-3 my-2 sm:my-0 sm:hidden","aria-hidden":"true"}),o&&e.jsx(d,{variant:"tertiary",isLoading:a,disabled:i,onClick:o.onClick,icon:o.icon,className:"order-4 sm:order-1 sm:mr-auto",children:o.label})]})}function Pe({disabled:t}){return e.jsx("div",{className:"absolute right-4 top-4",children:e.jsx(te,{asChild:!0,children:e.jsx(d,{variant:"tertiary",size:"sm",icon:"X","aria-label":"Close",disabled:t})})})}const u=({isOpen:t,onOpenChange:n,title:o,description:s,isCloseButtonVisible:i=!0,actionButton:a,cancelButton:l,subActionButton:c,children:h})=>{r.useEffect(()=>{},[t,a.onClick]);const g=!!a.isLoading||!!c?.isLoading,m=r.useCallback(P=>{g&&P.preventDefault()},[g]);return e.jsx(Se,{open:t,onOpenChange:n,children:e.jsxs(Be,{children:[e.jsx(De,{className:R("dialog-overlay fixed inset-0 z-(--z-modal-backdrop) bg-black/50")}),e.jsxs(we,{onEscapeKeyDown:m,onPointerDownOutside:m,onInteractOutside:m,...s===void 0&&{"aria-describedby":void 0},className:R("dialog-content fixed left-1/2 top-1/2 z-(--z-modal)","-translate-x-1/2 -translate-y-1/2","w-[calc(100vw-2rem)] max-w-md","max-h-[calc(100vh-2rem)] overflow-hidden","bg-background border border-border-strong shadow-lg","flex flex-col gap-6 p-6"),children:[e.jsx(Ie,{title:o,description:s}),h&&e.jsx(je,{children:h}),e.jsx(Le,{actionButton:a,cancelButton:l,subActionButton:c,anyLoading:g}),i&&e.jsx(Pe,{disabled:g})]})]})})};u.displayName="Dialog";try{u.displayName="Dialog",u.__docgenInfo={description:"",displayName:"Dialog",props:{isOpen:{defaultValue:null,description:"Controlled open state.",name:"isOpen",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Called when the open state changes (close ✕, ESC, overlay click, cancel button).",name:"onOpenChange",required:!0,type:{name:"(isOpen: boolean) => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},isCloseButtonVisible:{defaultValue:{value:"true"},description:"Default: true.",name:"isCloseButtonVisible",required:!1,type:{name:"boolean"}},actionButton:{defaultValue:null,description:`Required primary action. Set \`isLoading: true\` on the slot to show
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
case.`,name:"actionButton",required:!0,type:{name:"DialogActionButton"}},cancelButton:{defaultValue:null,description:'Optional cancel button (secondary variant). Clicking it closes the\ndialog automatically — the parent does *not* need to call\n`onOpenChange(false)`. If `onClick` is provided, it\'s invoked\nalongside the close (useful for cleanup / analytics). Cancel is\nalways synchronous; for a "going back" path that needs awaiting,\nuse `subActionButton` instead.',name:"cancelButton",required:!1,type:{name:"DialogCancelButton"}},subActionButton:{defaultValue:null,description:'Optional tertiary alternative — typically "Save as draft" or a\nnon-primary commit path. Placed at the far left on desktop, below\na separator on mobile. Like `actionButton`, set `isLoading: true`\nfor async sub-action handlers; the same dismissal-blocking and\nsibling-disabling rules apply.',name:"subActionButton",required:!1,type:{name:"DialogSubActionButton"}},children:{defaultValue:null,description:`Body content. Long content scrolls inside the dialog automatically
(the dialog caps its height to the viewport).

Note on tab order: footer DOM order is
\`Action → Cancel → SubAction\` so that Radix's default focus
(first tabbable) lands on the action button.
- Mobile (vertical stack): visual order is also
  \`Action / Cancel / SubAction\` ✓ tab order matches visual.
- Desktop (horizontal): visual order is \`SubAction … Cancel Action\`
  (left-to-right) so tab order is the reverse of left-to-right
  reading order. This is a deliberate trade-off — keyboard
  confirmation lands on the primary action immediately.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Qe={title:"Components/lv1/Dialog",component:u,parameters:{layout:"centered",docs:{description:{component:`Dialog renders a modal overlay for important content or actions —
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
  (separator only when \`subActionButton\` is provided)`}}},tags:["autodocs"],argTypes:{isOpen:{description:"Controlled open state.",control:"boolean",table:{type:{summary:"boolean"}}},onOpenChange:{description:"Called when the open state changes (close ✕, ESC, overlay click, cancel button).",table:{type:{summary:"(isOpen: boolean) => void"}},control:!1},title:{description:"Dialog heading. Required.",control:"text",table:{type:{summary:"string"}}},description:{description:"Optional supporting text rendered below the title.",control:"text",table:{type:{summary:"string"}}},isCloseButtonVisible:{description:"Whether the close (✕) button in the top-right is rendered.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},actionButton:{description:"Primary action button. Required. Set `isLoading: true` on this slot to show a spinner; Dialog will disable the other footer buttons and block dismissal.",table:{type:{summary:"DialogActionButton"}},control:!1},cancelButton:{description:"Cancel button (secondary variant). Closes the dialog when clicked.",table:{type:{summary:"DialogCancelButton"}},control:!1},subActionButton:{description:"Sub-action button (tertiary variant) — placed at the far left on desktop. Like `actionButton`, accepts `isLoading` for async sub-action handlers.",table:{type:{summary:"DialogSubActionButton"}},control:!1},children:{description:"Body content rendered between the header and the footer.",table:{type:{summary:"ReactNode"}},control:!1}}},O={name:"Playground",args:{isOpen:!1,title:"Delete account",description:"This action cannot be undone.",isCloseButtonVisible:!0,actionButton:{label:"Delete",variant:"destructive",isLoading:!1},cancelButton:{label:"Cancel"},subActionButton:{label:"Save as draft",isLoading:!1},children:"All data associated with this account will be permanently removed."},render:t=>{const[n,o]=r.useState(t.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>o(!0),children:"Open dialog"}),e.jsx(u,{...t,isOpen:n,onOpenChange:o,actionButton:{...t.actionButton,onClick:()=>o(!1)},subActionButton:t.subActionButton?{...t.subActionButton,onClick:()=>o(!1)}:void 0})]})}},v={name:"Confirm (primary)",parameters:{docs:{description:{story:"Standard confirmation dialog with a primary action and cancel."}}},render:()=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Save changes",description:"Your changes will be saved to this document.",actionButton:{label:"Save",onClick:()=>n(!1)},cancelButton:{label:"Cancel"}})]})}},C={name:"Destructive",parameters:{docs:{description:{story:'Set `actionButton.variant: "destructive"` for irreversible actions like delete.'}}},render:()=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"destructive",onClick:()=>n(!0),children:"Delete"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Delete account?",description:"This action cannot be undone. All data will be permanently removed.",actionButton:{label:"Delete",variant:"destructive",onClick:()=>n(!1)},cancelButton:{label:"Cancel"}})]})}},x={name:"With Sub-Action",parameters:{docs:{description:{story:'`subActionButton` provides a tertiary alternative — for example "Save as draft". On desktop it sits at the far left; on mobile it stacks below a separator at the bottom of the footer, after Action and Cancel.'}}},render:()=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Publish article?",description:"Your article will be visible to all readers.",actionButton:{label:"Publish",onClick:()=>n(!1)},cancelButton:{label:"Cancel"},subActionButton:{label:"Save as draft",onClick:()=>n(!1)}})]})}},S={name:"Loading",parameters:{docs:{description:{story:"When the action slot has `isLoading: true`, the action button shows a spinner, the cancel and sub-action buttons (and close ✕) are disabled, and dismissal (ESC / overlay click / ✕) is blocked. The parent owns this state."}}},render:()=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Saving…",description:"Please wait while we save your changes.",actionButton:{label:"Save",onClick:()=>{},isLoading:!0},cancelButton:{label:"Cancel"}})]})}},B={name:"Sub-Action Loading",parameters:{docs:{description:{story:"When `subActionButton.isLoading` is true, the sub-action button shows the spinner; the action button (and cancel) are disabled in turn."}}},render:()=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Publish article?",description:"Saving as draft…",actionButton:{label:"Publish",onClick:()=>{}},cancelButton:{label:"Cancel"},subActionButton:{label:"Save as draft",onClick:()=>{},isLoading:!0}})]})}},D={name:"Async Action",parameters:{docs:{description:{story:"Pattern for awaiting an async primary action. The parent flips `actionButton.isLoading` true → awaits → flips false (or closes the dialog)."}}},render:()=>{const[t,n]=r.useState(!1),[o,s]=r.useState(!1),i=async()=>{s(!0),await new Promise(a=>setTimeout(a,1500)),s(!1),n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open async dialog"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Submit form?",description:"This will submit your form to the server.",actionButton:{label:"Submit",onClick:i,isLoading:o},cancelButton:{label:"Cancel"}})]})}},w={name:"Async Sub-Action",parameters:{docs:{description:{story:"Sub-action handlers can be async too — set `isLoading: true` on `subActionButton` instead. The action button (and cancel) are disabled while the sub-action is in flight."}}},render:()=>{const[t,n]=r.useState(!1),[o,s]=r.useState(null),i=async()=>{s("action"),await new Promise(l=>setTimeout(l,1500)),s(null),n(!1)},a=async()=>{s("sub"),await new Promise(l=>setTimeout(l,1500)),s(null),n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Publish article?",description:"Try clicking Save as draft — only the sub-action shows a spinner.",actionButton:{label:"Publish",onClick:i,isLoading:o==="action"},cancelButton:{label:"Cancel"},subActionButton:{label:"Save as draft",onClick:a,isLoading:o==="sub"}})]})}},k={name:"Without Close Button",parameters:{docs:{description:{story:"Set `isCloseButtonVisible={false}` to hide the ✕ button — useful when you want to force the user through one of the footer actions."}}},render:()=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,isCloseButtonVisible:!1,title:"Terms of service",description:"You must accept the terms to continue.",actionButton:{label:"Accept",onClick:()=>n(!1)},cancelButton:{label:"Decline"}})]})}},A={name:"Info Only (action only)",parameters:{docs:{description:{story:'For "OK"-only information dialogs, omit `cancelButton` and use `actionButton` to dismiss.'}}},render:()=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Update available",description:"A new version of the app is ready. Reload to apply.",actionButton:{label:"OK",onClick:()=>n(!1)}})]})}},I={name:"Long Content",parameters:{docs:{description:{story:"Dialog caps its height at the viewport (`max-h-[calc(100vh-2rem)]`) and the body region scrolls internally. No consumer-side `max-height` / `overflow` is needed — header and footer stay pinned."}}},render:()=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>n(!0),children:"Open"}),e.jsx(u,{isOpen:t,onOpenChange:n,title:"Privacy policy update",description:"Please review the changes before continuing.",actionButton:{label:"Accept",onClick:()=>n(!1)},cancelButton:{label:"Decline"},children:e.jsx("div",{className:"flex flex-col gap-3",children:Array.from({length:8}).map((o,s)=>e.jsx("p",{children:"We have updated our privacy policy to reflect changes in how we handle user data. The updates clarify our practices around analytics, third-party integrations, and the retention of session-level information. By accepting, you acknowledge that you have read and understood the changes. You can review the full policy at any time from your account settings."},s))})})]})}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const et=["Playground","Confirm","Destructive","WithSubAction","Loading","SubActionLoading","AsyncAction","AsyncSubAction","WithoutCloseButton","InfoOnly","LongContent"];export{D as AsyncAction,w as AsyncSubAction,v as Confirm,C as Destructive,A as InfoOnly,S as Loading,I as LongContent,O as Playground,B as SubActionLoading,x as WithSubAction,k as WithoutCloseButton,et as __namedExportsOrder,Qe as default};
