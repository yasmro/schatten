import{r as o,j as e}from"./iframe-DF10O1LJ.js";import{D as a}from"./Dialog-Dl0kZ4FR.js";import{B as s}from"./Button-C0Z-WiJ2.js";import"./preload-helper-CrztxVc4.js";import"./index-CIPUGYL8.js";import"./index-BZ4NY9Dg.js";import"./index-W-p9DxGQ.js";import"./index-_xi2RgEM.js";import"./index-BKrs0wzc.js";import"./index-6L_i8L-b.js";import"./index-Bf_waEfV.js";import"./Combination-XrI-Ql6-.js";import"./index-XHZHUJG2.js";/* empty css               */import"./Separator-BSlomEw2.js";import"./index-C-8vaSnE.js";import"./utils-DclmTqRz.js";/* empty css                  */import"./x-CyTZSJ57.js";import"./createLucideIcon-DbxYVszP.js";import"./index-BYWyDHmV.js";/* empty css               */import"./Spinner-Dc9X0VBB.js";/* empty css                */const z={title:"Components/lv1/Dialog",component:a,parameters:{layout:"centered",docs:{description:{component:`Dialog renders a modal overlay for important content or actions —
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
  (separator only when \`subActionButton\` is provided)`}}},tags:["autodocs"],argTypes:{isOpen:{description:"Controlled open state.",control:"boolean",table:{type:{summary:"boolean"}}},onOpenChange:{description:"Called when the open state changes (close ✕, ESC, overlay click, cancel button).",table:{type:{summary:"(isOpen: boolean) => void"}},control:!1},title:{description:"Dialog heading. Required.",control:"text",table:{type:{summary:"string"}}},description:{description:"Optional supporting text rendered below the title.",control:"text",table:{type:{summary:"string"}}},isCloseButtonVisible:{description:"Whether the close (✕) button in the top-right is rendered.",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},actionButton:{description:"Primary action button. Required. Set `isLoading: true` on this slot to show a spinner; Dialog will disable the other footer buttons and block dismissal.",table:{type:{summary:"DialogActionButton"}},control:!1},cancelButton:{description:"Cancel button (secondary variant). Closes the dialog when clicked.",table:{type:{summary:"DialogCancelButton"}},control:!1},subActionButton:{description:"Sub-action button (tertiary variant) — placed at the far left on desktop. Like `actionButton`, accepts `isLoading` for async sub-action handlers.",table:{type:{summary:"DialogSubActionButton"}},control:!1},children:{description:"Body content rendered between the header and the footer.",table:{type:{summary:"ReactNode"}},control:!1}}},l={name:"Playground",args:{isOpen:!1,title:"Delete account",description:"This action cannot be undone.",isCloseButtonVisible:!0,actionButton:{label:"Delete",variant:"destructive",isLoading:!1},cancelButton:{label:"Cancel"},subActionButton:{label:"Save as draft",isLoading:!1},children:"All data associated with this account will be permanently removed."},render:n=>{const[t,i]=o.useState(n.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>i(!0),children:"Open dialog"}),e.jsx(a,{...n,isOpen:t,onOpenChange:i,actionButton:{...n.actionButton,onClick:()=>i(!1)},subActionButton:n.subActionButton?{...n.subActionButton,onClick:()=>i(!1)}:void 0})]})}},c={name:"Confirm (primary)",parameters:{docs:{description:{story:"Standard confirmation dialog with a primary action and cancel."}}},render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Open"}),e.jsx(a,{isOpen:n,onOpenChange:t,title:"Save changes",description:"Your changes will be saved to this document.",actionButton:{label:"Save",onClick:()=>t(!1)},cancelButton:{label:"Cancel"}})]})}},u={name:"Destructive",parameters:{docs:{description:{story:'Set `actionButton.variant: "destructive"` for irreversible actions like delete.'}}},render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"destructive",onClick:()=>t(!0),children:"Delete"}),e.jsx(a,{isOpen:n,onOpenChange:t,title:"Delete account?",description:"This action cannot be undone. All data will be permanently removed.",actionButton:{label:"Delete",variant:"destructive",onClick:()=>t(!1)},cancelButton:{label:"Cancel"}})]})}},d={name:"With Sub-Action",parameters:{docs:{description:{story:'`subActionButton` provides a tertiary alternative — for example "Save as draft". On desktop it sits at the far left; on mobile it stacks below a separator at the bottom of the footer, after Action and Cancel.'}}},render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Open"}),e.jsx(a,{isOpen:n,onOpenChange:t,title:"Publish article?",description:"Your article will be visible to all readers.",actionButton:{label:"Publish",onClick:()=>t(!1)},cancelButton:{label:"Cancel"},subActionButton:{label:"Save as draft",onClick:()=>t(!1)}})]})}},p={name:"Loading",parameters:{docs:{description:{story:"When the action slot has `isLoading: true`, the action button shows a spinner, the cancel and sub-action buttons (and close ✕) are disabled, and dismissal (ESC / overlay click / ✕) is blocked. The parent owns this state."}}},render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Open"}),e.jsx(a,{isOpen:n,onOpenChange:t,title:"Saving…",description:"Please wait while we save your changes.",actionButton:{label:"Save",onClick:()=>{},isLoading:!0},cancelButton:{label:"Cancel"}})]})}},h={name:"Sub-Action Loading",parameters:{docs:{description:{story:"When `subActionButton.isLoading` is true, the sub-action button shows the spinner; the action button (and cancel) are disabled in turn."}}},render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Open"}),e.jsx(a,{isOpen:n,onOpenChange:t,title:"Publish article?",description:"Saving as draft…",actionButton:{label:"Publish",onClick:()=>{}},cancelButton:{label:"Cancel"},subActionButton:{label:"Save as draft",onClick:()=>{},isLoading:!0}})]})}},m={name:"Async Action",parameters:{docs:{description:{story:"Pattern for awaiting an async primary action. The parent flips `actionButton.isLoading` true → awaits → flips false (or closes the dialog)."}}},render:()=>{const[n,t]=o.useState(!1),[i,r]=o.useState(!1),y=async()=>{r(!0),await new Promise(C=>setTimeout(C,1500)),r(!1),t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Open async dialog"}),e.jsx(a,{isOpen:n,onOpenChange:t,title:"Submit form?",description:"This will submit your form to the server.",actionButton:{label:"Submit",onClick:y,isLoading:i},cancelButton:{label:"Cancel"}})]})}},b={name:"Async Sub-Action",parameters:{docs:{description:{story:"Sub-action handlers can be async too — set `isLoading: true` on `subActionButton` instead. The action button (and cancel) are disabled while the sub-action is in flight."}}},render:()=>{const[n,t]=o.useState(!1),[i,r]=o.useState(null),y=async()=>{r("action"),await new Promise(B=>setTimeout(B,1500)),r(null),t(!1)},C=async()=>{r("sub"),await new Promise(B=>setTimeout(B,1500)),r(null),t(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Open"}),e.jsx(a,{isOpen:n,onOpenChange:t,title:"Publish article?",description:"Try clicking Save as draft — only the sub-action shows a spinner.",actionButton:{label:"Publish",onClick:y,isLoading:i==="action"},cancelButton:{label:"Cancel"},subActionButton:{label:"Save as draft",onClick:C,isLoading:i==="sub"}})]})}},g={name:"Without Close Button",parameters:{docs:{description:{story:"Set `isCloseButtonVisible={false}` to hide the ✕ button — useful when you want to force the user through one of the footer actions."}}},render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Open"}),e.jsx(a,{isOpen:n,onOpenChange:t,isCloseButtonVisible:!1,title:"Terms of service",description:"You must accept the terms to continue.",actionButton:{label:"Accept",onClick:()=>t(!1)},cancelButton:{label:"Decline"}})]})}},f={name:"Info Only (action only)",parameters:{docs:{description:{story:'For "OK"-only information dialogs, omit `cancelButton` and use `actionButton` to dismiss.'}}},render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Open"}),e.jsx(a,{isOpen:n,onOpenChange:t,title:"Update available",description:"A new version of the app is ready. Reload to apply.",actionButton:{label:"OK",onClick:()=>t(!1)}})]})}},O={name:"Long Content",parameters:{docs:{description:{story:"Dialog caps its height at the viewport (`max-h-[calc(100vh-2rem)]`) and the body region scrolls internally. No consumer-side `max-height` / `overflow` is needed — header and footer stay pinned."}}},render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>t(!0),children:"Open"}),e.jsx(a,{isOpen:n,onOpenChange:t,title:"Privacy policy update",description:"Please review the changes before continuing.",actionButton:{label:"Accept",onClick:()=>t(!1)},cancelButton:{label:"Decline"},children:e.jsx("div",{className:"flex flex-col gap-3",children:Array.from({length:8}).map((i,r)=>e.jsx("p",{children:"We have updated our privacy policy to reflect changes in how we handle user data. The updates clarify our practices around analytics, third-party integrations, and the retention of session-level information. By accepting, you acknowledge that you have read and understood the changes. You can review the full policy at any time from your account settings."},r))})})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const G=["Playground","Confirm","Destructive","WithSubAction","Loading","SubActionLoading","AsyncAction","AsyncSubAction","WithoutCloseButton","InfoOnly","LongContent"];export{m as AsyncAction,b as AsyncSubAction,c as Confirm,u as Destructive,f as InfoOnly,p as Loading,O as LongContent,l as Playground,h as SubActionLoading,d as WithSubAction,g as WithoutCloseButton,G as __namedExportsOrder,z as default};
