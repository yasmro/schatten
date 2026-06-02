import{i as e,s as t}from"./preload-helper-ChaSUgV0.js";import{C as n,t as r}from"./iframe-DK9TY03R.js";import{t as i}from"./react-dom-Brd_vngN.js";import{D as a,E as o,a as s,n as c,t as l,v as u}from"./lucide-react-DLEtKJ8w.js";import{n as d,t as f}from"./utils-DPW8nHmH.js";import{n as ee,t as p}from"./dist-CBsWSdnh.js";import{n as m,r as te}from"./dist-5fzXjeRe.js";import{t as h}from"./Button-uALweSOg.js";import{t as ne}from"./Button-BRcoreTz.js";import{c as re,d as g,f as _,h as v,l as y,m as ie,n as ae,r as b,s as oe,t as x,u as se}from"./dist-B4iz6NrP.js";import{n as S,t as C}from"./dist-CxE_ju2A.js";import{n as w,t as ce}from"./dist-DbfI0OvX.js";import{a as le,n as ue,o as de,r as fe,t as pe}from"./dist-DYVuwPqj.js";import{i as me,r as he}from"./dist-5M7W7Zgr.js";import{n as ge,t as _e}from"./dist-D8Qrcp7Z.js";import{t as ve}from"./Toast-LDp8lOKk.js";function ye(e){let t=[];return Array.from(e.childNodes).forEach(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent&&t.push(e.textContent),xe(e)){let n=e.ariaHidden||e.hidden||e.style.display===`none`,r=e.dataset.radixToastAnnounceExclude===``;if(!n)if(r){let n=e.dataset.radixToastAnnounceAlt;n&&t.push(n)}else t.push(...ye(e))}}),t}function T(e,t,n,{discrete:r}){let i=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?ae(i,a):i.dispatchEvent(a)}function be(e=()=>{}){let t=w(e);se(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}function xe(e){return e.nodeType===e.ELEMENT_NODE}function Se(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t=e.tagName===`INPUT`&&e.type===`hidden`;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Ce(e){let t=document.activeElement;return e.some(e=>e===t?!0:(e.focus(),document.activeElement!==t))}var E,we,D,O,k,Te,Ee,De,Oe,ke,A,Ae,je,Me,j,M,Ne,Pe,N,P,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,F,Ze,Qe,$e,et,tt,nt,rt,it,at,ot=e((()=>{E=t(n(),1),we=t(i(),1),_(),m(),ge(),v(),de(),ue(),S(),b(),ce(),oe(),y(),me(),D=r(),O=`ToastProvider`,[k,Te,Ee]=_e(`Toast`),[De,Oe]=ie(`Toast`,[Ee]),[ke,A]=De(O),Ae=e=>{let{__scopeToast:t,label:n=`Notification`,duration:r=5e3,swipeDirection:i=`right`,swipeThreshold:a=50,children:o}=e,[s,c]=E.useState(null),[l,u]=E.useState(0),d=E.useRef(!1),f=E.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${O}\`. Expected non-empty \`string\`.`),(0,D.jsx)(k.Provider,{scope:t,children:(0,D.jsx)(ke,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:a,toastCount:l,viewport:s,onViewportChange:c,onToastAdd:E.useCallback(()=>u(e=>e+1),[]),onToastRemove:E.useCallback(()=>u(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:f,children:o})})},Ae.displayName=O,je=`ToastViewport`,Me=[`F8`],j=`toast.viewportPause`,M=`toast.viewportResume`,Ne=E.forwardRef((e,t)=>{let{__scopeToast:n,hotkey:r=Me,label:i=`Notifications ({hotkey})`,...a}=e,o=A(je,n),s=Te(n),c=E.useRef(null),l=E.useRef(null),u=E.useRef(null),d=E.useRef(null),f=te(t,d,o.onViewportChange),ee=r.join(`+`).replace(/Key/g,``).replace(/Digit/g,``),p=o.toastCount>0;E.useEffect(()=>{let e=e=>{r.length!==0&&r.every(t=>e[t]||e.code===t)&&d.current?.focus()};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[r]),E.useEffect(()=>{let e=c.current,t=d.current;if(p&&e&&t){let n=()=>{if(!o.isClosePausedRef.current){let e=new CustomEvent(j);t.dispatchEvent(e),o.isClosePausedRef.current=!0}},r=()=>{if(o.isClosePausedRef.current){let e=new CustomEvent(M);t.dispatchEvent(e),o.isClosePausedRef.current=!1}},i=t=>{e.contains(t.relatedTarget)||r()},a=()=>{e.contains(document.activeElement)||r()};return e.addEventListener(`focusin`,n),e.addEventListener(`focusout`,i),e.addEventListener(`pointermove`,n),e.addEventListener(`pointerleave`,a),window.addEventListener(`blur`,n),window.addEventListener(`focus`,r),()=>{e.removeEventListener(`focusin`,n),e.removeEventListener(`focusout`,i),e.removeEventListener(`pointermove`,n),e.removeEventListener(`pointerleave`,a),window.removeEventListener(`blur`,n),window.removeEventListener(`focus`,r)}}},[p,o.isClosePausedRef]);let m=E.useCallback(({tabbingDirection:e})=>{let t=s().map(t=>{let n=t.ref.current,r=[n,...Se(n)];return e===`forwards`?r:r.reverse()});return(e===`forwards`?t.reverse():t).flat()},[s]);return E.useEffect(()=>{let e=d.current;if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey;if(t.key===`Tab`&&!n){let n=document.activeElement,r=t.shiftKey;if(t.target===e&&r){l.current?.focus();return}let i=m({tabbingDirection:r?`backwards`:`forwards`}),a=i.findIndex(e=>e===n);Ce(i.slice(a+1))?t.preventDefault():r?l.current?.focus():u.current?.focus()}};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)}},[s,m]),(0,D.jsxs)(fe,{ref:c,role:`region`,"aria-label":i.replace(`{hotkey}`,ee),tabIndex:-1,style:{pointerEvents:p?void 0:`none`},children:[p&&(0,D.jsx)(N,{ref:l,onFocusFromOutsideViewport:()=>{Ce(m({tabbingDirection:`forwards`}))}}),(0,D.jsx)(k.Slot,{scope:n,children:(0,D.jsx)(x.ol,{tabIndex:-1,...a,ref:f})}),p&&(0,D.jsx)(N,{ref:u,onFocusFromOutsideViewport:()=>{Ce(m({tabbingDirection:`backwards`}))}})]})}),Ne.displayName=je,Pe=`ToastFocusProxy`,N=E.forwardRef((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,a=A(Pe,n);return(0,D.jsx)(he,{tabIndex:0,...i,ref:t,style:{position:`fixed`},onFocus:e=>{let t=e.relatedTarget;a.viewport?.contains(t)||r()}})}),N.displayName=Pe,P=`Toast`,Fe=`toast.swipeStart`,Ie=`toast.swipeMove`,Le=`toast.swipeCancel`,Re=`toast.swipeEnd`,ze=E.forwardRef((e,t)=>{let{forceMount:n,open:r,defaultOpen:i,onOpenChange:a,...o}=e,[s,c]=re({prop:r,defaultProp:i??!0,onChange:a,caller:P});return(0,D.jsx)(C,{present:n||s,children:(0,D.jsx)(He,{open:s,...o,ref:t,onClose:()=>c(!1),onPause:w(e.onPause),onResume:w(e.onResume),onSwipeStart:g(e.onSwipeStart,e=>{e.currentTarget.setAttribute(`data-swipe`,`start`)}),onSwipeMove:g(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute(`data-swipe`,`move`),e.currentTarget.style.setProperty(`--radix-toast-swipe-move-x`,`${t}px`),e.currentTarget.style.setProperty(`--radix-toast-swipe-move-y`,`${n}px`)}),onSwipeCancel:g(e.onSwipeCancel,e=>{e.currentTarget.setAttribute(`data-swipe`,`cancel`),e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`),e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`),e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-x`),e.currentTarget.style.removeProperty(`--radix-toast-swipe-end-y`)}),onSwipeEnd:g(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute(`data-swipe`,`end`),e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-x`),e.currentTarget.style.removeProperty(`--radix-toast-swipe-move-y`),e.currentTarget.style.setProperty(`--radix-toast-swipe-end-x`,`${t}px`),e.currentTarget.style.setProperty(`--radix-toast-swipe-end-y`,`${n}px`),c(!1)})})})}),ze.displayName=P,[Be,Ve]=De(P,{onClose(){}}),He=E.forwardRef((e,t)=>{let{__scopeToast:n,type:r=`foreground`,duration:i,open:a,onClose:o,onEscapeKeyDown:s,onPause:c,onResume:l,onSwipeStart:u,onSwipeMove:d,onSwipeCancel:f,onSwipeEnd:ee,...p}=e,m=A(P,n),[h,ne]=E.useState(null),re=te(t,e=>ne(e)),_=E.useRef(null),v=E.useRef(null),y=i||m.duration,ie=E.useRef(0),ae=E.useRef(y),b=E.useRef(0),{onToastAdd:oe,onToastRemove:se}=m,S=w(()=>{h?.contains(document.activeElement)&&m.viewport?.focus(),o()}),C=E.useCallback(e=>{!e||e===1/0||(window.clearTimeout(b.current),ie.current=new Date().getTime(),b.current=window.setTimeout(S,e))},[S]);E.useEffect(()=>{let e=m.viewport;if(e){let t=()=>{C(ae.current),l?.()},n=()=>{let e=new Date().getTime()-ie.current;ae.current-=e,window.clearTimeout(b.current),c?.()};return e.addEventListener(j,n),e.addEventListener(M,t),()=>{e.removeEventListener(j,n),e.removeEventListener(M,t)}}},[m.viewport,y,c,l,C]),E.useEffect(()=>{a&&!m.isClosePausedRef.current&&C(y)},[a,y,m.isClosePausedRef,C]),E.useEffect(()=>(oe(),()=>se()),[oe,se]);let ce=E.useMemo(()=>h?ye(h):null,[h]);return m.viewport?(0,D.jsxs)(D.Fragment,{children:[ce&&(0,D.jsx)(Ue,{__scopeToast:n,role:`status`,"aria-live":r===`foreground`?`assertive`:`polite`,children:ce}),(0,D.jsx)(Be,{scope:n,onClose:S,children:we.createPortal((0,D.jsx)(k.ItemSlot,{scope:n,children:(0,D.jsx)(le,{asChild:!0,onEscapeKeyDown:g(s,()=>{m.isFocusedToastEscapeKeyDownRef.current||S(),m.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,D.jsx)(x.li,{tabIndex:0,"data-state":a?`open`:`closed`,"data-swipe-direction":m.swipeDirection,...p,ref:re,style:{userSelect:`none`,touchAction:`none`,...e.style},onKeyDown:g(e.onKeyDown,e=>{e.key===`Escape`&&(s?.(e.nativeEvent),e.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,S()))}),onPointerDown:g(e.onPointerDown,e=>{e.button===0&&(_.current={x:e.clientX,y:e.clientY})}),onPointerMove:g(e.onPointerMove,e=>{if(!_.current)return;let t=e.clientX-_.current.x,n=e.clientY-_.current.y,r=!!v.current,i=[`left`,`right`].includes(m.swipeDirection),a=[`left`,`up`].includes(m.swipeDirection)?Math.min:Math.max,o=i?a(0,t):0,s=i?0:a(0,n),c=e.pointerType===`touch`?10:2,l={x:o,y:s},f={originalEvent:e,delta:l};r?(v.current=l,T(Ie,d,f,{discrete:!1})):Qe(l,m.swipeDirection,c)?(v.current=l,T(Fe,u,f,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>c||Math.abs(n)>c)&&(_.current=null)}),onPointerUp:g(e.onPointerUp,e=>{let t=v.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),v.current=null,_.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};Qe(t,m.swipeDirection,m.swipeThreshold)?T(Re,ee,r,{discrete:!0}):T(Le,f,r,{discrete:!0}),n.addEventListener(`click`,e=>e.preventDefault(),{once:!0})}})})})}),m.viewport)})]}):null}),Ue=e=>{let{__scopeToast:t,children:n,...r}=e,i=A(P,t),[a,o]=E.useState(!1),[s,c]=E.useState(!1);return be(()=>o(!0)),E.useEffect(()=>{let e=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(e)},[]),s?null:(0,D.jsx)(pe,{asChild:!0,children:(0,D.jsx)(he,{...r,children:a&&(0,D.jsxs)(D.Fragment,{children:[i.label,` `,n]})})})},We=`ToastTitle`,Ge=E.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,D.jsx)(x.div,{...r,ref:t})}),Ge.displayName=We,Ke=`ToastDescription`,qe=E.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,D.jsx)(x.div,{...r,ref:t})}),qe.displayName=Ke,Je=`ToastAction`,Ye=E.forwardRef((e,t)=>{let{altText:n,...r}=e;return n.trim()?(0,D.jsx)(Ze,{altText:n,asChild:!0,children:(0,D.jsx)(F,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Je}\`. Expected non-empty \`string\`.`),null)}),Ye.displayName=Je,Xe=`ToastClose`,F=E.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e,i=Ve(Xe,n);return(0,D.jsx)(Ze,{asChild:!0,children:(0,D.jsx)(x.button,{type:`button`,...r,ref:t,onClick:g(e.onClick,i.onClose)})})}),F.displayName=Xe,Ze=E.forwardRef((e,t)=>{let{__scopeToast:n,altText:r,...i}=e;return(0,D.jsx)(x.div,{"data-radix-toast-announce-exclude":``,"data-radix-toast-announce-alt":r||void 0,...i,ref:t})}),Qe=(e,t,n=0)=>{let r=Math.abs(e.x),i=Math.abs(e.y),a=r>i;return t===`left`||t===`right`?a&&r>n:!a&&i>n},$e=Ae,et=Ne,tt=ze,nt=Ge,rt=qe,it=Ye,at=F})),st,ct,lt=e((()=>{ee(),st=p(`st-toast`,{variants:{variant:{neutral:`st-toast--neutral`,success:`st-toast--success`,error:`st-toast--error`,warning:`st-toast--warning`,info:`st-toast--info`},appearance:{subtle:`st-toast--subtle`,solid:`st-toast--solid`}},defaultVariants:{variant:`neutral`,appearance:`subtle`}}),ct=p(`st-toaster`,{variants:{position:{"top-left":`st-toaster--top-left`,"top-center":`st-toaster--top-center`,"top-right":`st-toaster--top-right`,"bottom-left":`st-toaster--bottom-left`,"bottom-center":`st-toaster--bottom-center`,"bottom-right":`st-toaster--bottom-right`}},defaultVariants:{position:`bottom-center`}})}));function ut(){return R=(R+1)%(2**53-1),String(R)}function I(e){z=e(z);for(let e of B)e(z)}function dt(e){I(t=>({toasts:t.toasts.map(t=>t.id===e?{...t,open:!1}:t)})),setTimeout(()=>{I(t=>({toasts:t.toasts.filter(t=>t.id!==e)}))},vt)}function L(e){let t=ut(),n={id:t,open:!0,duration:_t,...e};return I(e=>({toasts:[...e.toasts,n]})),{id:t,dismiss:()=>dt(t),update:e=>I(n=>({toasts:n.toasts.map(n=>n.id===t?{...n,...e}:n)}))}}function ft(e){dt(e)}function pt(){let e=z.toasts.map(e=>e.id);I(e=>({toasts:e.toasts.map(e=>({...e,open:!1}))})),setTimeout(()=>{I(t=>({toasts:t.toasts.filter(t=>!e.includes(t.id))}))},vt)}function mt(){let[e,t]=(0,gt.useState)(z);return(0,gt.useEffect)(()=>(B.add(t),()=>{B.delete(t)}),[]),{toasts:e.toasts,toast:L,dismiss:ft,dismissAll:pt}}function ht(){z={toasts:[]};for(let e of B)e(z)}var gt,_t,vt,R,z,B,yt=e((()=>{gt=t(n(),1),_t=5e3,vt=280,R=0,z={toasts:[]},B=new Set}));function bt({toast:e}){let t=t=>{t||ft(e.id)},n=!!e.action,r=()=>{e.action?.onClick(),ft(e.id)},i=e.appearance===`solid`?`inverted`:`tertiary`,a=xt[e.variant??`neutral`];return(0,V.jsxs)(tt,{open:e.open,onOpenChange:t,duration:e.duration,className:f(st({variant:e.variant,appearance:e.appearance})),children:[(0,V.jsx)(a,{className:`st-toast__icon`,"aria-hidden":`true`}),(0,V.jsxs)(`div`,{className:`st-toast__content`,children:[e.title&&(0,V.jsx)(nt,{className:`st-toast__title`,children:e.title}),e.description&&(0,V.jsx)(rt,{className:`st-toast__description`,children:e.description})]}),n&&e.action?(0,V.jsx)(it,{asChild:!0,altText:e.action.altText??(typeof e.action.label==`string`?e.action.label:`Action`),children:(0,V.jsx)(h,{variant:i,size:`sm`,onClick:r,children:e.action.label})}):(0,V.jsx)(at,{asChild:!0,children:(0,V.jsx)(h,{variant:i,size:`sm`,icon:c,"aria-label":`Close`})})]})}var V,xt,St=e((()=>{ot(),l(),d(),ve(),lt(),ne(),yt(),V=r(),xt={neutral:u,info:u,success:o,warning:s,error:a},bt.displayName=`ToastItem`;try{bt.displayName=`ToastItem`,bt.__docgenInfo={description:`Renders a single toast inside a Radix Toast.Provider. Internal; consumers
should use the \`toast()\` imperative API and mount a single \`<Toaster />\`
at the app root.

DOM contract (consumed by Toast.css \`:has()\` selectors):

    <li class="st-toast st-toast--{tone} st-toast--{shape}">
      <svg class="st-toast__icon" aria-hidden="true" />        ◀ direct child
      <div class="st-toast__content">                          ◀ direct child
        <div class="st-toast__title">…</div>
        <div class="st-toast__description">…</div>             ◀ optional
      </div>
      <button class="st-btn st-btn--…">…</button>              ◀ direct child
    </li>

\`:has(.st-toast__description)\` flips alignment from \`center\` to
\`flex-start\` when a description is present, so \`__icon\` / \`__content\`
MUST stay direct children of \`.st-toast\` for the structural selector
to match.`,displayName:`ToastItem`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Toast/Toast.tsx`,methods:[],props:{toast:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Toast/Toast.tsx`,name:`ToastItemProps`}],description:``,name:`toast`,parent:{fileName:`schatten/src/components/lv1/Toast/Toast.tsx`,name:`ToastItemProps`},required:!0,tags:{},type:{name:`ToastData`}}},tags:{}}}catch{}}));function H({position:e=`bottom-center`,duration:t,className:n}){let{toasts:r}=mt();return(0,Ct.jsxs)($e,{swipeDirection:wt[e],duration:t,children:[r.map(e=>(0,Ct.jsx)(bt,{toast:e},e.id)),(0,Ct.jsx)(et,{className:f(ct({position:e}),n)})]})}var Ct,wt,Tt=e((()=>{ot(),d(),lt(),St(),yt(),Ct=r(),wt={"top-left":`left`,"top-center":`up`,"top-right":`right`,"bottom-left":`left`,"bottom-center":`down`,"bottom-right":`right`},H.displayName=`Toaster`;try{H.displayName=`Toaster`,H.__docgenInfo={description:`Mount once at the app root. Reads from the shared toast store and
renders each currently-open toast inside a Radix Toast.Provider.`,displayName:`Toaster`,filePath:`/home/runner/work/schatten/schatten/src/components/lv1/Toast/Toaster.tsx`,methods:[],props:{position:{defaultValue:{value:`bottom-center`},declarations:[{fileName:`schatten/src/components/lv1/Toast/Toaster.tsx`,name:`ToasterProps`}],description:`Where the toast viewport sits on screen.`,name:`position`,parent:{fileName:`schatten/src/components/lv1/Toast/Toaster.tsx`,name:`ToasterProps`},required:!1,tags:{default:`'bottom-center'`},type:{name:`enum`,raw:`ToastPosition`,value:[{value:`"top-left"`},{value:`"top-center"`},{value:`"top-right"`},{value:`"bottom-left"`},{value:`"bottom-center"`},{value:`"bottom-right"`}]}},duration:{defaultValue:{value:`5000`},declarations:[{fileName:`schatten/src/components/lv1/Toast/Toaster.tsx`,name:`ToasterProps`}],description:"Default auto-dismiss duration in ms applied when a toast does not\nspecify its own. Per-toast `duration` always wins.",name:`duration`,parent:{fileName:`schatten/src/components/lv1/Toast/Toaster.tsx`,name:`ToasterProps`},required:!1,tags:{default:`5000`},type:{name:`number`}},className:{defaultValue:null,declarations:[{fileName:`schatten/src/components/lv1/Toast/Toaster.tsx`,name:`ToasterProps`}],description:`Optional class applied to the viewport container.`,name:`className`,parent:{fileName:`schatten/src/components/lv1/Toast/Toaster.tsx`,name:`ToasterProps`},required:!1,tags:{},type:{name:`string`}}},tags:{example:`<App>
    ...
    <Toaster position="bottom-center" />
  </App>

  // Anywhere in the app:
  import { toast } from '@yasmro/schatten/components/lv1'
  toast({ title: 'Saved', variant: 'success' })`}}}catch{}})),U,W,Et,Dt,Ot,G,kt,At,K,q,J,Y,X,Z,Q,$,jt;e((()=>{U=t(n(),1),ne(),Tt(),yt(),W=r(),Et=3600*1e3,Dt={title:`Components/lv1/Toast`,component:H,parameters:{layout:`fullscreen`},tags:[`autodocs`],argTypes:{position:{description:`Where the toast viewport sits on screen.`,control:`select`,options:[`top-left`,`top-center`,`top-right`,`bottom-left`,`bottom-center`,`bottom-right`],table:{type:{summary:`"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"`},defaultValue:{summary:`bottom-center`}}},duration:{description:`Default auto-dismiss duration in ms. Per-toast duration overrides this.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`5000`}}}}},Ot=[`neutral`,`success`,`error`,`warning`,`info`],G=[`subtle`,`solid`],kt={neutral:{title:`Heads up`,description:`A neutral notification.`},success:{title:`Saved`,description:`Your changes have been saved.`},error:{title:`Error`,description:`Could not save your changes.`},warning:{title:`Warning`,description:`Disk space is running low.`},info:{title:`Update available`,description:`A new version is ready to install.`}},At=e=>(0,W.jsxs)(`div`,{className:`min-h-screen p-8 flex flex-col gap-6 items-start`,children:[(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h2`,{className:`text-base font-semibold mb-1`,children:`Toast Playground`}),(0,W.jsxs)(`p`,{className:`text-sm text-foreground-muted`,children:[`Use the matrix below to fire any variant × appearance combination, and the second row to try toasts with an action. Switch the position via Controls. The `,(0,W.jsx)(`code`,{children:`<Toaster />`}),` is mounted at the bottom of this story.`]})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{className:`text-sm font-semibold mb-2`,children:`Variant × Appearance`}),(0,W.jsxs)(`div`,{className:`grid grid-cols-[auto_repeat(2,minmax(0,1fr))] gap-2 items-center`,children:[(0,W.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted`}),G.map(e=>(0,W.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted text-center`,children:e},e)),Ot.map(e=>(0,W.jsxs)(U.Fragment,{children:[(0,W.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted`,children:e}),G.map(t=>(0,W.jsx)(h,{variant:`secondary`,size:`sm`,onClick:()=>L({...kt[e],variant:e,appearance:t}),children:`Fire`},`${e}-${t}`))]},e))]})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{className:`text-sm font-semibold mb-2`,children:`With Action (auto-dismisses on click)`}),(0,W.jsxs)(`div`,{className:`grid grid-cols-[auto_repeat(2,minmax(0,1fr))] gap-2 items-center`,children:[(0,W.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted`}),G.map(e=>(0,W.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted text-center`,children:e},e)),Ot.map(e=>(0,W.jsxs)(U.Fragment,{children:[(0,W.jsx)(`span`,{className:`text-xs font-mono text-foreground-muted`,children:e}),G.map(t=>(0,W.jsx)(h,{variant:`secondary`,size:`sm`,onClick:()=>L({...kt[e],variant:e,appearance:t,action:{label:`Undo`,onClick:()=>{}}}),children:`Fire + action`},`action-${e}-${t}`))]},`action-${e}`))]})]}),(0,W.jsxs)(`div`,{children:[(0,W.jsx)(`h3`,{className:`text-sm font-semibold mb-2`,children:`Other`}),(0,W.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,W.jsx)(h,{variant:`secondary`,size:`sm`,onClick:()=>L({title:`Title only`,variant:`success`}),children:`Title only`}),(0,W.jsx)(h,{variant:`secondary`,size:`sm`,onClick:()=>L({title:`Long content example`,description:`This toast has a longer description to verify how the layout handles wrapping text alongside the floating top-right button.`,variant:`warning`}),children:`Long content`})]})]}),(0,W.jsx)(H,{position:e.position})]}),K={name:`Playground`,args:{position:`bottom-center`},render:e=>(0,W.jsx)(At,{position:e.position})},q=({inputs:e,position:t})=>((0,U.useEffect)(()=>{ht();for(let t of e)L({duration:Et,...t});return()=>{ht()}},[e]),(0,W.jsx)(`div`,{className:`min-h-screen`,children:(0,W.jsx)(H,{position:t??`bottom-center`})})),J={name:`Subtle Treatments`,render:()=>(0,W.jsx)(q,{inputs:[{variant:`neutral`,appearance:`subtle`,title:`Neutral`,description:`A baseline notification.`},{variant:`success`,appearance:`subtle`,title:`Success`,description:`Your changes have been saved.`},{variant:`error`,appearance:`subtle`,title:`Error`,description:`Could not save your changes.`},{variant:`warning`,appearance:`subtle`,title:`Warning`,description:`Disk space is running low.`},{variant:`info`,appearance:`subtle`,title:`Info`,description:`A new version is available.`}]})},Y={name:`Solid Treatments`,render:()=>(0,W.jsx)(q,{inputs:[{variant:`neutral`,appearance:`solid`,title:`Neutral`,description:`A muted-but-emphatic notification.`},{variant:`success`,appearance:`solid`,title:`Success`,description:`Your changes have been saved.`},{variant:`error`,appearance:`solid`,title:`Error`,description:`Could not save your changes.`},{variant:`warning`,appearance:`solid`,title:`Warning`,description:`Disk space is running low.`},{variant:`info`,appearance:`solid`,title:`Info`,description:`A new version is available.`}]})},X={name:`With Action`,render:()=>(0,W.jsx)(q,{inputs:[{variant:`success`,title:`Saved`,description:`Your changes have been saved.`,action:{label:`Undo`,onClick:()=>{}}},{variant:`info`,title:`Update available`,description:`A new version is ready to install.`,action:{label:`Reload`,onClick:()=>{}}}]})},Z={name:`Title Only`,render:()=>(0,W.jsx)(q,{inputs:[{variant:`success`,title:`Saved`},{variant:`error`,title:`Could not connect`}]})},Q={name:`Long Content`,render:()=>(0,W.jsx)(q,{inputs:[{variant:`warning`,title:`Heads up: long-running operation completed with warnings`,description:`Three records were skipped because they did not match the expected schema. You can retry the import after correcting the source file, or proceed with the partial data that has already been saved.`,action:{label:`View details`,onClick:()=>{}}}]})},$={name:`Long Action Label`,render:()=>(0,W.jsx)(q,{inputs:[{variant:`info`,title:`New version ready`,description:`A fresh build of the app is available.`,action:{label:`View details and full report`,onClick:()=>{}}},{variant:`success`,appearance:`solid`,title:`Saved across all devices`,action:{label:`View details and full report`,onClick:()=>{}}}]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    position: 'bottom-center'
  },
  render: args => <Playground position={args.position} />
}`,...K.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Title Only',
  render: () => <AutoFireDemo inputs={[{
    variant: 'success',
    title: 'Saved'
  }, {
    variant: 'error',
    title: 'Could not connect'
  }]} />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"Pins the regression guard for the trailing action button's `flex-shrink: 0`\n(Toast.css `.st-toast > .st-btn`). Without it, a multi-word action label\nwould compress to `min-content` at narrow viewport widths because the\ncontent column claims `flex: 1`. Use this story for manual visual checks\nwhen touching Toast layout; the matching VRT capture is intentionally\nomitted to avoid baseline churn on a doc-only fixture.",...$.parameters?.docs?.description}}},jt=[`PlaygroundStory`,`SubtleTreatments`,`SolidTreatments`,`WithAction`,`TitleOnly`,`LongContent`,`LongActionLabel`]}))();export{$ as LongActionLabel,Q as LongContent,K as PlaygroundStory,Y as SolidTreatments,J as SubtleTreatments,Z as TitleOnly,X as WithAction,jt as __namedExportsOrder,Dt as default};