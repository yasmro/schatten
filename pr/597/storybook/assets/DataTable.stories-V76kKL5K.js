import{a as e,n as t,t as n}from"./rolldown-runtime-sJBDdmOt.js";import{n as r,p as i}from"./iframe-DJlho5Qs.js";import{t as a}from"./shim-BuJa84xo.js";import{n as o,t as s}from"./createLucideIcon-7PbFBeJD.js";import{i as c,n as l,r as u,t as d}from"./arrow-up-DqIIlsE0.js";import{n as f,t as p}from"./Button-Dx7AT2He.js";import{n as ee,t as te}from"./Callout-HCshVScE.js";import{a as ne,c as re,i as m,n as h,o as g,r as _,s as ie,t as ae}from"./Table-BIFfS9R5.js";import{a as v,c as oe,i as se,n as ce,o as le,r as y,s as ue,t as de}from"./docs-ui-B91OjUTa.js";var fe,pe;function me(){return(me=t((()=>{o(),fe=[[`path`,{d:`m21 16-4 4-4-4`,key:`f6ql7i`}],[`path`,{d:`M17 20V4`,key:`1ejh1v`}],[`path`,{d:`m3 8 4-4 4 4`,key:`11wl7u`}],[`path`,{d:`M7 4v16`,key:`1glfcx`}]],pe=s(`arrow-up-down`,fe)})))()}function he(e){return ge(e)||typeof e==`function`||_e(e)}function ge(e){return typeof e==`function`&&(()=>{let t=Object.getPrototypeOf(e);return t.prototype&&t.prototype.isReactComponent})()}function _e(e){return typeof e==`object`&&typeof e.$$typeof==`symbol`&&[`react.memo`,`react.forward_ref`].includes(e.$$typeof.description)}function b(e,t){return e==null?null:he(e)?ye.createElement(e,t):e}function ve(e){if(`cell`in e&&e.cell){let t=e.cell,n=t.column.columnDef,r=t,i=n;return r.getIsAggregated?.()?b(i.aggregatedCell??n.cell,t.getContext()):r.getIsPlaceholder?.()?null:b(n.cell,t.getContext())}return`header`in e&&e.header?b(e.header.column.columnDef.header,e.header.getContext()):`footer`in e&&e.footer?b(e.footer.column.columnDef.footer,e.footer.getContext()):null}var ye;function be(){return(be=t((()=>{ye=e(i(),1)})))()}function xe({update:e,notify:t,unwatched:n}){return{link:r,unlink:i,propagate:a,checkDirty:o,shallowPropagate:s};function r(e,t,n){let r=t.depsTail;if(r!==void 0&&r.dep===e)return;let i=r===void 0?t.deps:r.nextDep;if(i!==void 0&&i.dep===e){i.version=n,t.depsTail=i;return}let a=e.subsTail;if(a!==void 0&&a.version===n&&a.sub===t)return;let o=t.depsTail=e.subsTail={version:n,dep:e,sub:t,prevDep:r,nextDep:i,prevSub:a,nextSub:void 0};i!==void 0&&(i.prevDep=o),r===void 0?t.deps=o:r.nextDep=o,a===void 0?e.subs=o:a.nextSub=o}function i(e,t=e.sub){let r=e.dep,i=e.prevDep,a=e.nextDep,o=e.nextSub,s=e.prevSub;return a===void 0?t.depsTail=i:a.prevDep=i,i===void 0?t.deps=a:i.nextDep=a,o===void 0?r.subsTail=s:o.prevSub=s,s===void 0?(r.subs=o)===void 0&&n(r):s.nextSub=o,a}function a(e){let n=e.nextSub,r;top:do{let i=e.sub,a=i.flags;if(a&60?a&12?a&4?!(a&48)&&c(e,i)?(i.flags=a|40,a&=1):a=0:i.flags=a&-9|32:a=0:i.flags=a|32,a&2&&t(i),a&1){let t=i.subs;if(t!==void 0){let i=(e=t).nextSub;i!==void 0&&(r={value:n,prev:r},n=i);continue}}if((e=n)!==void 0)n=e.nextSub;else{for(;r!==void 0;)if(e=r.value,r=r.prev,e!==void 0){n=e.nextSub;continue top}break}}while(1)}function o(t,n){let r,i=0,a=!1;top:do{let o=t.dep,c=o.flags;if(n.flags&16)a=!0;else if((c&17)==17){if(e(o)){let e=o.subs;e.nextSub!==void 0&&s(e),a=!0}}else if((c&33)==33){(t.nextSub!==void 0||t.prevSub!==void 0)&&(r={value:t,prev:r}),t=o.deps,n=o,++i;continue}if(!a){let e=t.nextDep;if(e!==void 0){t=e;continue}}for(;i--;){let i=n.subs,o=i.nextSub!==void 0;if(o?(t=r.value,r=r.prev):t=i,a){if(e(n)){o&&s(i),n=t.sub;continue}a=!1}else n.flags&=-33;n=t.sub;let c=t.nextDep;if(c!==void 0){t=c;continue top}}return a}while(1)}function s(e){do{let n=e.sub,r=n.flags;(r&48)==32&&(n.flags=r|16,(r&6)==2&&t(n))}while((e=e.nextSub)!==void 0)}function c(e,t){let n=t.depsTail;for(;n!==void 0;){if(n===e)return!0;n=n.prevDep}return!1}}function Se(e,t,n){let r=typeof e==`object`,i=r?e:void 0;return{next:(r?e.next:e)?.bind(i),error:(r?e.error:t)?.bind(i),complete:(r?e.complete:n)?.bind(i)}}function Ce(e){try{++D,e()}finally{--D||we()}}function x(e){let t=e.depsTail,n=t===void 0?e.deps:t.nextDep;for(;n!==void 0;)n=Oe(n,e)}function we(){if(!(D>0)){for(;w<T;){let e=S[w];S[w++]=void 0,e.notify()}w=0,T=0}}function Te(e,t){let n=typeof e==`function`,r=e,i={_snapshot:n?void 0:e,subs:void 0,subsTail:void 0,deps:void 0,depsTail:void 0,flags:+!n,get(){return E!==void 0&&De(i,E,C),i._snapshot},subscribe(e){let t=Se(e),n={current:!1},r=Ee(()=>{i.get(),n.current?(E=void 0,t.next?.(i._snapshot)):n.current=!0});return{unsubscribe:()=>{r.stop()}}},_update(e){let a=E,o=t?.compare??Object.is;if(n)E=i,++C,i.depsTail=void 0;else if(e===void 0)return!1;n&&(i.flags=5);try{let t=i._snapshot,a=typeof e==`function`?e(t):e===void 0&&n?r(t):e;return t===void 0||!o(t,a)?(i._snapshot=a,!0):!1}finally{E=a,n&&(i.flags&=-5),x(i)}}};return n?(i.flags=17,i.get=function(){let e=i.flags;if(e&16||e&32&&Ae(i.deps,i)){if(i._update()){let e=i.subs;e!==void 0&&je(e)}}else e&32&&(i.flags=e&-33);return E!==void 0&&De(i,E,C),i._snapshot}):i.set=function(e){if(i._update(e)){let e=i.subs;e!==void 0&&(ke(e),je(e),we())}},i}function Ee(e){let t=()=>{let t=E;E=n,++C,n.depsTail=void 0,n.flags=6;try{return e()}finally{E=t,n.flags&=-5,x(n)}},n={deps:void 0,depsTail:void 0,subs:void 0,subsTail:void 0,flags:6,notify(){let e=this.flags;e&16||e&32&&Ae(this.deps,this)?t():this.flags=2},stop(){this.flags=0,this.depsTail=void 0,x(this)}};return t(),n}var S,C,De,Oe,ke,Ae,je,w,T,E,D;function Me(){return(Me=t((()=>{S=[],C=0,{link:De,unlink:Oe,propagate:ke,checkDirty:Ae,shallowPropagate:je}=xe({update(e){return e._update()},notify(e){S[T++]=e,e.flags&=-3},unwatched(e){e.depsTail!==void 0&&(e.depsTail=void 0,e.flags=17,x(e))}}),w=0,T=0,D=0})))()}function O(e,t){if(Object.is(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[n,r]of e)if(!t.has(n)||!Object.is(r,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();let n=Ne(e);if(n.length!==Ne(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}function Ne(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}var Pe=n((e=>{var t=i(),n=a();function r(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var o=typeof Object.is==`function`?Object.is:r,s=n.useSyncExternalStore,c=t.useRef,l=t.useEffect,u=t.useMemo,d=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var a=c(null);if(a.current===null){var f={hasValue:!1,value:null};a.current=f}else f=a.current;a=u(function(){function e(e){if(!a){if(a=!0,s=e,e=r(e),i!==void 0&&f.hasValue){var t=f.value;if(i(t,e))return c=t}return c=e}if(t=c,o(s,e))return t;var n=r(e);return i!==void 0&&i(t,n)?(s=e,t):(s=e,c=n)}var a=!1,s,c,l=n===void 0?null:n;return[function(){return e(t())},l===null?void 0:function(){return e(l())}]},[t,n,r,i]);var p=s(e,a[0],a[1]);return l(function(){f.hasValue=!0,f.value=p},[p]),d(p),p}})),Fe=n(((e,t)=>{t.exports=Pe()}));function Ie(e,t){return e===t}function Le(e,t=e=>e,n){let r=n?.compare??Ie,i=(0,Re.useCallback)(t=>{let{unsubscribe:n}=e.subscribe(t);return n},[e]),a=(0,Re.useCallback)(()=>e.get(),[e]);return(0,ze.useSyncExternalStoreWithSelector)(i,a,a,t,r)}var Re,ze;function Be(){return(Be=t((()=>{Re=i(),ze=Fe()})))()}function Ve(e){let t=Le(e.source,e.selector,{compare:O});return typeof e.children==`function`?e.children(t):e.children}function He(){return(He=t((()=>{Be()})))()}function Ue(e){let t=e;return Object.defineProperty(e,"state",{get(){return e.get()}}),`set`in e&&(t.setState=e.set.bind(e)),t}function We(e){let{createAtom:t,batch:n}=e,r=t(0);return{createOptionsStore:!1,wrapExternalAtoms:!1,addSubscription:()=>{throw Error(`Feature not supported in current reactivity implementation`)},unmount:()=>{throw Error(`Feature not supported in current reactivity implementation`)},schedule:e.schedule??(e=>queueMicrotask(e)),batch:n,untrack:e=>e(),createReadonlyAtom:(e,n)=>{let i=n?.compare??Object.is,a=!1,o,s=()=>{let t=e();return a&&i(o,t)||(o=t,a=!0),o},c=t(()=>(r.get(),s()),{compare:i});return{get:s,subscribe:c.subscribe.bind(c)}},createWritableAtom:(e,n)=>t(e,{compare:n?.compare}),commit:()=>{r.set(e=>e+1)}}}function Ge(e,t=Object.is){let n=!1,r;return{get:e.get,markCommitted:e=>{r=e,n=!0},subscribe:i=>e.subscribe(e=>{n&&t(r,e)||i(e)})}}function Ke(){return We({createAtom:Te,batch:Ce})}function qe(){return(qe=t((()=>{Me()})))()}function k(e,t){return typeof e==`function`?e(t):e}function A(e){if(Array.isArray(e))return e.map(A);if(e&&typeof e==`object`){let t=Object.getPrototypeOf(e);if(t!==Object.prototype&&t!==null)return e;let n=t===null?j():{},r=Object.keys(e);for(let t=0;t<r.length;t++){let i=r[t];Object.defineProperty(n,i,{configurable:!0,enumerable:!0,value:A(e[i]),writable:!0})}return n}return e}function Je(e,t){let n=Object.keys(t),r=e;for(let e=0;e<n.length;e++){let i=n[e];!i.startsWith(`_memo_`)&&i!==`_cellsCache`&&(r[i]=t[i])}return e}function j(){return Object.create(null)}function Ye(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Xe(e,t){return n=>{(t.options.atoms?.[e]??t.baseAtoms[e]).set(e=>k(n,e))}}function Ze(e){if(typeof e!=`object`||!e)return!1;if(Array.isArray(e))return!0;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function Qe(e){return Reflect.ownKeys(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))}function $e(e,t){return et(e,t,ot)}function et(e,t,n){if(Object.is(e,t))return!0;if(n<=0||!Ze(e)||!Ze(t)||(Array.isArray(e)||Array.isArray(t))&&(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length))return!1;let r=Qe(e),i=Qe(t);if(r.length!==i.length)return!1;let a=e,o=t;for(let e=0;e<r.length;e++){let i=r[e];if(!Object.prototype.propertyIsEnumerable.call(t,i)||!et(a[i],o[i],n-1))return!1}return!0}function tt(e,t,n,r=$e){let i=`on${t.charAt(0).toUpperCase()}${t.slice(1)}Change`,a=e.options[i];a&&a(e=>{let t=k(n,e);return r(e,t)?e:t})}function nt(e){return e instanceof Function}function rt(e,t){let n=[],r=e=>{e.forEach(e=>{n.push(e);let i=t(e);i.length&&r(i)})};return r(e),n}function it(e){let t=!1;return()=>{t?e():t=!0}}function M({feature:e,fnName:t,objectId:n,onAfterUpdate:r,table:i,...a}){let o={onAfterUpdate:r?()=>{let{schedule:e,untrack:t}=i._reactivity;e(()=>t(()=>r()))}:void 0};return st({...a,...o})}function at(e,t=`_`){let[n,r]=e.replace(t,` `).split(` `);return{fnKey:r,fnName:`${n}.${r}`,parentName:n}}function N(e,t,n){for(let[r,{fn:i,memoDeps:a}]of Object.entries(n)){let{fnKey:n,fnName:o}=at(r);t[n]=a?M({memoDeps:a,fn:i,fnName:o,table:t,feature:e}):i}}function P(e,t,n,r){for(let[i,{fn:a,memoDeps:o}]of Object.entries(r)){let{fnKey:r,fnName:s}=at(i);if(o){let i=`_memo_${r}`;t[r]=function(...t){if(!this[i]){let t=this;this[i]=M({memoDeps:e=>o(t,e),fn:(...e)=>a(t,...e),fnName:s,objectId:t.id,table:n,feature:e})}return this[i](...t)}}else t[r]=function(...e){return a(this,...e)}}}var ot,st;function F(){return(F=t((()=>{ot=3,st=({fn:e,memoDeps:t,onAfterCompare:n,onAfterUpdate:r,onBeforeCompare:i,onBeforeUpdate:a})=>{let o=[],s;return c=>{i?.();let l=t?.(c),u=!l||l.length!==o?.length;if(!u&&l){for(let e=0;e<l.length;e++)if(l[e]!==o[e]){u=!0;break}}return n?.(u),u&&(o=l,a?.(),s=e(...l??[]),r?.(s)),s}}})))()}function ct(e){return e.row.getValue(e.column.id)}function lt(e){return e.getValue()??e.table.options.renderFallbackValue}function ut(e){return{table:e.table,column:e.column,row:e.row,cell:e,getValue:()=>e.getValue(),renderValue:()=>e.renderValue()}}var dt;function ft(){return(ft=t((()=>{F(),dt={assignCellPrototype:(e,t)=>{P(`coreCellsFeature`,e,t,{cell_getValue:{fn:e=>ct(e)},cell_renderValue:{fn:e=>lt(e)},cell_getContext:{fn:e=>ut(e),memoDeps:e=>[e]}})}}})))()}function pt(e){if(!e._columnPrototype){e._columnPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignColumnPrototype?.(e._columnPrototype,e)}return e._columnPrototype}function mt(e,t,n,r){let i={...e.getDefaultColumnDef(),...t},a=i.accessorKey,o=a===void 0?void 0:String(a),s=i.id??o?.replaceAll(`.`,`_`)??(typeof i.header==`string`?i.header:void 0),c;if(i.accessorFn)c=i.accessorFn;else if(a!==void 0){if(typeof a==`string`&&a.includes(`.`)){let e=a.split(`.`);c=t=>{let n=t;for(let t=0;t<e.length;t++){let r=e[t];n=n?.[r]}return n}}else c=e=>e[i.accessorKey]}if(!s)throw Error();let l=pt(e),u=Object.create(l);u.accessorFn=c,u.columnDef=i,u.columns=[],u.depth=n,u.id=`${String(s)}`,u.parent=r;let d=e._columnInstanceInitFns;for(let e=0;e<d.length;e++)d[e](u);return u}function I(e){return e.getIsVisible?.()??!0}function ht(e){return e.getVisibleLeafColumns?.()??e.getAllLeafColumns()}function gt(e,t){let n=e,r=t;return n.getOrderColumnsFn?.()(r)??n._orderGroupedColumns?.(r)??t}function _t(e,t,n,r){return e._orderByColumnPinning?.(t,n,r)??t}function vt(e,t){return e._expandRows?.(t)??t}function yt(e){e.autoResetExpanded?.()}function bt(e){e.autoResetPageIndex?.()}function xt(e){e.autoResetSorting?.()}function St(e){e.autoResetCellSelection?.()}function Ct(e){return[e,...e.columns.flatMap(e=>e.getFlatColumns())]}function wt(e){if(e.columns.length){let t=e.columns.flatMap(e=>e.getLeafColumns());return gt(e.table,t)}return[e]}function Tt(e){return{header:e=>{let t=e.header.column.columnDef;return t.accessorKey?t.accessorKey:t.accessorFn?t.id:null},cell:e=>e.renderValue()?.toString?.()??null,...Object.values(e._features).reduce((e,t)=>Object.assign(e,t.getDefaultColumnDef?.()),{}),...e.options.defaultColumn}}function Et(e,t,n,r=0){let i=Array(t.length);for(let a=0;a<t.length;a++){if(!(a in t))continue;let o=t[a],s=mt(e,o,r,n),c=o;s.columns=c.columns?Et(e,c.columns,s,r+1):[],i[a]=s}return i}function Dt(e){return Et(e,e.options.columns)}function Ot(e){return e.getAllColumns().flatMap(e=>e.getFlatColumns())}function kt(e){let t=j(),n=e.getAllFlatColumns();for(let e=0;e<n.length;e++){let r=n[e];t[r.id]=r}return t}function At(e){return gt(e,e.getAllColumns().flatMap(e=>e.getLeafColumns()))}function jt(e){let t=j(),n=e.getAllLeafColumns();for(let e=0;e<n.length;e++){let r=n[e];t[r.id]=r}return t}function Mt(e,t){return e.getAllFlatColumnsById()[t]}function Nt(){return(Nt=t((()=>{F()})))()}var Pt;function Ft(){return(Ft=t((()=>{F(),Nt(),Pt={assignColumnPrototype:(e,t)=>{P(`coreColumnsFeature`,e,t,{column_getFlatColumns:{fn:e=>Ct(e),memoDeps:e=>[e.table.options.columns]},column_getLeafColumns:{fn:e=>wt(e),memoDeps:e=>[e.table.atoms.columnOrder?.get(),e.table.atoms.grouping?.get(),e.table.options.columns,e.table.options.groupedColumnMode]}})},constructTableAPIs:e=>{N(`coreColumnsFeature`,e,{table_getDefaultColumnDef:{fn:()=>Tt(e),memoDeps:()=>[e.options.defaultColumn]},table_getAllColumns:{fn:()=>Dt(e),memoDeps:()=>[e.options.columns]},table_getAllFlatColumns:{fn:()=>Ot(e),memoDeps:()=>[e.options.columns]},table_getAllFlatColumnsById:{fn:()=>kt(e),memoDeps:()=>[e.options.columns]},table_getAllLeafColumns:{fn:()=>At(e),memoDeps:()=>[e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.options.columns,e.options.groupedColumnMode]},table_getAllLeafColumnsById:{fn:()=>jt(e),memoDeps:()=>[e.getAllLeafColumns()]},table_getColumn:{fn:t=>Mt(e,t)}})}}})))()}function It(e){if(!e._headerPrototype){e._headerPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignHeaderPrototype?.(e._headerPrototype,e)}return e._headerPrototype}function Lt(e,t,n){let r=It(e),i=Object.create(r);i.colSpan=0,i.column=t,i.depth=n.depth,i.headerGroup=null,i.id=n.id??t.id,i.index=n.index,i.isPlaceholder=!!n.isPlaceholder,i.placeholderId=n.placeholderId,i.rowSpan=0,i.subHeaders=[];let a=e._headerInstanceInitFns;for(let e=0;e<a.length;e++)a[e](i);return i}function Rt(e,t=1){let n=t;for(let r=0;r<e.length;r++){let i=e[r];I(i)&&i.columns.length&&(n=Math.max(n,Rt(i.columns,t+1)))}return n}function zt(e,t){return e?`${e}_${t}`:String(t)}function Bt(e,t,n,r){let i=e??``;return t&&(i=i?`${i}_${t}`:String(t)),n&&(i=i?`${i}_${n}`:n),r&&(i=i?`${i}_${r}`:r),i}function Vt(e,t){let n=0;for(let r=0;r<e.length;r++)e[r].column===t&&n++;return n}function Ht(e,t,n,r,i,a){let o={depth:t,id:zt(r,t),headers:[]},s=[];for(let i=0;i<e.length;i++){if(!(i in e))continue;let a=e[i],c=s[s.length-1],l=a.column.depth===o.depth,u,d=!1;if(l&&a.column.parent?u=a.column.parent:(u=a.column,d=!0),c&&c.column===u)c.subHeaders.push(a);else{let e=Lt(n,u,{id:Bt(r,t,u.id,a.id),isPlaceholder:d,placeholderId:d?String(Vt(s,u)):void 0,depth:t,index:s.length});e.subHeaders.push(a),s.push(e)}o.headers.push(a),a.headerGroup=o}for(let e=0;e<a.length;e++)a[e](o);i.push(o),t>0&&Ht(s,t-1,n,r,i,a)}function Ut(e){for(let t=0;t<e.length;t++){let n=e[t];if(!I(n.column))continue;let r=0;if(n.subHeaders.length){Ut(n.subHeaders);for(let e=0;e<n.subHeaders.length;e++){let t=n.subHeaders[e];I(t.column)&&(r+=t.colSpan)}}else r=1;if(n.colSpan=r,n.isPlaceholder&&n.subHeaders.length===1&&n.subHeaders[0].column===n.column){let e=1,t=n.subHeaders[0];for(;t;)t.rowSpan=0,e++,t=t.subHeaders.length===1&&t.subHeaders[0].column===n.column?t.subHeaders[0]:void 0;n.rowSpan=e}else n.rowSpan=1}}function Wt(e,t,n,r){let i=Rt(e),a=[],o=n._headerGroupInstanceInitFns,s=Array(t.length);for(let e=0;e<t.length;e++)e in t&&(s[e]=Lt(n,t[e],{depth:i,index:e}));return Ht(s,i-1,n,r,a,o),a.reverse(),Ut(a[0]?.headers??[]),a}function Gt(){return(Gt=t((()=>{})))()}function Kt(e,t){for(let n=0;n<e.subHeaders.length;n++)Kt(e.subHeaders[n],t);t.push(e)}function qt(e){let t=[];return Kt(e,t),t}function Jt(e){return{column:e.column,header:e,table:e.column.table}}function Yt(e){return Wt(e.getAllColumns(),_t(e,ht(e),e=>e.id),e)}function Xt(e){return[...e.getHeaderGroups()].reverse()}function Zt(e){let t=e.getHeaderGroups(),n=[];for(let e=0;e<t.length;e++){let r=t[e].headers;for(let e=0;e<r.length;e++)n.push(r[e])}return n}function Qt(e){let t=e.getHeaderGroups()[0]?.headers??[],n=[];for(let e=0;e<t.length;e++){let r=t[e].getLeafHeaders();for(let e=0;e<r.length;e++)n.push(r[e])}return n}function $t(){return($t=t((()=>{Gt()})))()}var en;function tn(){return(tn=t((()=>{F(),$t(),en={assignHeaderPrototype:(e,t)=>{P(`coreHeadersFeature`,e,t,{header_getLeafHeaders:{fn:e=>qt(e),memoDeps:e=>[e.column.table.options.columns]},header_getContext:{fn:e=>Jt(e),memoDeps:e=>[e.column.table.options.columns]}})},constructTableAPIs:e=>{N(`coreHeadersFeature`,e,{table_getHeaderGroups:{fn:()=>Yt(e),memoDeps:()=>[e.options.columns,e.atoms.columnOrder?.get(),e.atoms.grouping?.get(),e.atoms.columnPinning?.get(),e.atoms.columnVisibility?.get(),e.options.groupedColumnMode]},table_getFooterGroups:{fn:()=>Xt(e),memoDeps:()=>[e.getHeaderGroups()]},table_getFlatHeaders:{fn:()=>Zt(e),memoDeps:()=>[e.getHeaderGroups()]},table_getLeafHeaders:{fn:()=>Qt(e),memoDeps:()=>[e.getHeaderGroups()]}})}}})))()}function nn(e){if(!e._rowPrototype){e._rowPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignRowPrototype?.(e._rowPrototype,e)}return e._rowPrototype}var rn;function an(){return(an=t((()=>{F(),rn=(e,t,n,r,i,a,o)=>{let s=nn(e),c=Object.create(s);c._displayIndexCache=-1,c._uniqueValuesCache=j(),c._valuesCache=j(),c.depth=i,c.id=t,c.index=r,c.original=n,c.parentId=o,c.subRows=a??[];let l=e._rowInstanceInitFns;for(let e=0;e<l.length;e++)l[e](c);return c}})))()}function on(){return e=>M({feature:`coreRowModelsFeature`,table:e,fnName:`table.getCoreRowModel`,memoDeps:()=>[e.options.data],fn:()=>cn(e,e.options.data),onAfterUpdate:it(()=>{yt(e),bt(e),xt(e),St(e)})})}function sn(e,t,n,r=0,i){let a=[];for(let o=0;o<n.length;o++){let s=n[o],c=rn(e,e.getRowId(s,o,i),s,o,r,void 0,i?.id);t.flatRows.push(c),t.rowsById[c.id]=c,a.push(c),e.options.getSubRows&&(c.originalSubRows=e.options.getSubRows(s,o),c.originalSubRows?.length&&(c.subRows=sn(e,t,c.originalSubRows,r+1,c)))}return a}function cn(e,t){let n={rows:[],flatRows:[],rowsById:j()};return n.rows=sn(e,n,t),n}function ln(){return(ln=t((()=>{F(),an()})))()}function un(e){return e._rowModels.coreRowModel||(e._rowModels.coreRowModel=e.options.features.coreRowModel?.(e)??on()(e)),e._rowModels.coreRowModel()}function dn(e){return e.getCoreRowModel()}function fn(e){return e._rowModels.filteredRowModel||(e._rowModels.filteredRowModel=e.options.features.filteredRowModel?.(e)),e.options.manualFiltering||!e._rowModels.filteredRowModel?e.getPreFilteredRowModel():e._rowModels.filteredRowModel()}function pn(e){return e.getFilteredRowModel()}function mn(e){return e._rowModels.groupedRowModel||(e._rowModels.groupedRowModel=e.options.features.groupedRowModel?.(e)),e.options.manualGrouping||!e._rowModels.groupedRowModel?e.getPreGroupedRowModel():e._rowModels.groupedRowModel()}function hn(e){return e.getGroupedRowModel()}function gn(e){return e._rowModels.sortedRowModel||(e._rowModels.sortedRowModel=e.options.features.sortedRowModel?.(e)),e.options.manualSorting||!e._rowModels.sortedRowModel?e.getPreSortedRowModel():e._rowModels.sortedRowModel()}function _n(e){return e.getSortedRowModel()}function vn(e){return e._rowModels.expandedRowModel||(e._rowModels.expandedRowModel=e.options.features.expandedRowModel?.(e)),e.options.manualExpanding||!e._rowModels.expandedRowModel?e.getPreExpandedRowModel():e._rowModels.expandedRowModel()}function yn(e){return e.getExpandedRowModel()}function bn(e){return e._rowModels.paginatedRowModel||(e._rowModels.paginatedRowModel=e.options.features.paginatedRowModel?.(e)),e.options.manualPagination||!e._rowModels.paginatedRowModel?e.getPrePaginatedRowModel():e._rowModels.paginatedRowModel()}function xn(e){return e.getPaginatedRowModel()}function Sn(){return(Sn=t((()=>{ln()})))()}var Cn;function wn(){return(wn=t((()=>{F(),Sn(),Cn={constructTableAPIs:e=>{N(`coreRowModelsFeature`,e,{table_getCoreRowModel:{fn:()=>un(e)},table_getPreFilteredRowModel:{fn:()=>dn(e)},table_getFilteredRowModel:{fn:()=>fn(e)},table_getPreGroupedRowModel:{fn:()=>pn(e)},table_getGroupedRowModel:{fn:()=>mn(e)},table_getPreSortedRowModel:{fn:()=>hn(e)},table_getSortedRowModel:{fn:()=>gn(e)},table_getPreExpandedRowModel:{fn:()=>_n(e)},table_getExpandedRowModel:{fn:()=>vn(e)},table_getPrePaginatedRowModel:{fn:()=>yn(e)},table_getPaginatedRowModel:{fn:()=>bn(e)},table_getRowModel:{fn:()=>xn(e)}})}}})))()}function Tn(e){if(!e._cellPrototype){e._cellPrototype={table:e};let t=Object.values(e._features);for(let n=0;n<t.length;n++)t[n].assignCellPrototype?.(e._cellPrototype,e)}return e._cellPrototype}function En(e,t,n){let r=Tn(n),i=Object.create(r);i.column=e,i.id=`${t.id}_${e.id}`,i.row=t;let a=n._cellInstanceInitFns;for(let e=0;e<a.length;e++)a[e](i);return i}function Dn(e){let t=e.table.getRowsInDisplayOrder(),n=e._displayIndexCache;return t[n]===e?n:-1}function On(e){let t=e.getPrePaginatedRowModel(),n=e.options.paginateExpandedRows===!1?vt(e,t).rows:t.rows;for(let e=0;e<n.length;e++)n[e]._displayIndexCache=e;return n}function kn(e,t){if(Ye(e._valuesCache,t))return e._valuesCache[t];let n=e.table.getColumn(t);if(n?.accessorFn)return e._valuesCache[t]=n.accessorFn(e.original,e.index),e._valuesCache[t]}function An(e,t){if(Ye(e._uniqueValuesCache,t))return e._uniqueValuesCache[t];let n=e.table.getColumn(t);if(n?.accessorFn)return n.columnDef.getUniqueValues?(e._uniqueValuesCache[t]=n.columnDef.getUniqueValues(e.original,e.index),e._uniqueValuesCache[t]):(e._uniqueValuesCache[t]=[e.getValue(t)],e._uniqueValuesCache[t])}function jn(e,t){return e.getValue(t)??e.table.options.renderFallbackValue}function Mn(e){return rt(e.subRows,e=>e.subRows)}function Nn(e){let t=e.getCoreRowModel().flatRows,n=0;for(let e=0;e<t.length;e++)n=Math.max(n,t[e].depth);return n}function Pn(e){if(e.parentId)return e.table.getCoreRowModel().rowsById[e.parentId]??e.table.getRow(e.parentId,!0)}function Fn(e){let t=[],n=e;for(;;){let e=n.getParentRow();if(!e)break;t.push(e),n=e}return t.reverse()}function In(e){let t=e.table.getAllLeafColumns(),n=e._cellsCache;n||=e._cellsCache=new WeakMap;let r=Array(t.length);for(let i=0;i<t.length;i++){let a=t[i],o=n.get(a);o||(o=En(a,e,e.table),n.set(a,o)),r[i]=o}return r}function Ln(e){let t=j(),n=e.getAllCells();for(let e=0;e<n.length;e++){let r=n[e];t[r.column.id]=r}return t}function Rn(e,t,n,r){return t.options.getRowId?.(e,n,r)??(r?`${r.id}.${n}`:String(n))}function zn(e,t,n){let r=(n?e.getPrePaginatedRowModel():e.getRowModel()).rowsById[t];if(!r&&(r=e.getCoreRowModel().rowsById[t],!r))throw Error();return r}function Bn(){return(Bn=t((()=>{F()})))()}var Vn;function Hn(){return(Hn=t((()=>{F(),Bn(),Vn={assignRowPrototype:(e,t)=>{P(`coreRowsFeature`,e,t,{row_getDisplayIndex:{fn:e=>Dn(e)},row_getAllCellsByColumnId:{fn:e=>Ln(e),memoDeps:e=>[e.getAllCells()]},row_getAllCells:{fn:e=>In(e),memoDeps:e=>[e.table.getAllLeafColumns()]},row_getLeafRows:{fn:e=>Mn(e),memoDeps:e=>[e.subRows]},row_getParentRow:{fn:e=>Pn(e)},row_getParentRows:{fn:e=>Fn(e)},row_getUniqueValues:{fn:(e,t)=>An(e,t)},row_getValue:{fn:(e,t)=>kn(e,t)},row_renderValue:{fn:(e,t)=>jn(e,t)}})},constructTableAPIs:e=>{N(`coreRowsFeature`,e,{table_getRowsInDisplayOrder:{fn:()=>On(e),memoDeps:()=>[e.getPrePaginatedRowModel().rows,e.options.paginateExpandedRows,e.options.paginateExpandedRows===!1?e.atoms.expanded?.get():void 0]},table_getRowId:{fn:(t,n,r)=>Rn(t,e,n,r)},table_getRow:{fn:(t,n)=>zn(e,t,n)},table_getMaxSubRowDepth:{fn:()=>Nn(e),memoDeps:()=>[e.getCoreRowModel()]}})}}})))()}function Un(e,t,n=(e,t)=>e===t){let r=t===void 0?e.options.state:t;e._reactivity.batch(()=>{if(r)for(let t in r){let i=e.baseAtoms[t];if(!i)continue;let a=r[t],o=a===void 0?e.initialState[t]:a;n(e._reactivity.untrack(()=>i.get()),o)||i.set(()=>o)}})}function Wn(e,t,n=(e,t)=>e===t){e._reactivity.batch(()=>{Un(e,t,n),e._reactivity.commit?.()})}function Gn(e){let t=A(e.initialState);e._reactivity.batch(()=>{let n=Object.keys(t);for(let r=0;r<n.length;r++){let i=n[r];e.baseAtoms[i].set(t[i])}});let n=Object.values(e._features);for(let t=0;t<n.length;t++)n[t].resetTableInstanceData?.(e)}function Kn(e,t){let{features:n,atoms:r,initialState:i}=e.options;if(!e.options.mergeOptions)return{...e.options,...t,features:n,atoms:r,initialState:i};let a=e.options.mergeOptions(e.options,t),o={...Object.getOwnPropertyDescriptors(a)};return Object.defineProperties(Object.create(Object.getPrototypeOf(a)),{...o,features:{value:n,enumerable:!0,configurable:!0,writable:!0},atoms:{value:r,enumerable:!0,configurable:!0,writable:!0},initialState:{value:i,enumerable:!0,configurable:!0,writable:!0}})}function qn(e,t,n){let r=Kn(e,k(t,e.options));e.optionsStore?e.optionsStore.set(()=>r):e.options=r,n?.syncExternalState!==!1&&Wn(e,r.state??null)}function L(){return(L=t((()=>{F()})))()}var Jn;function Yn(){return(Yn=t((()=>{F(),L(),Jn={constructTableAPIs:e=>{N(`coreTablesFeature`,e,{table_reset:{fn:()=>Gn(e)},table_setOptions:{fn:t=>qn(e,t)}})}}})))()}var Xn;function Zn(){return(Zn=t((()=>{ft(),Ft(),tn(),wn(),Hn(),Yn(),Xn={coreCellsFeature:dt,coreColumnsFeature:Pt,coreHeadersFeature:en,coreRowModelsFeature:Cn,coreRowsFeature:Vn,coreTablesFeature:Jn}})))()}function Qn(){return{accessor:(e,t)=>typeof e==`function`?{...t,accessorFn:e}:{...t,accessorKey:e},columns:e=>e,display:e=>e,group:e=>e}}function $n(e){return e}function er(e,t={}){return Object.values(e).forEach(e=>{t=e.getInitialState?.(t)??t}),A(t)}function tr(e){let t=e.features.coreReactivityFeature,{aggregationFns:n,columnMeta:r,coreRowModel:i,expandedRowModel:a,facetedMinMaxValues:o,facetedRowModel:s,facetedUniqueValues:c,filterFns:l,filterMeta:u,filteredRowModel:d,groupedRowModel:f,paginatedRowModel:p,sortFns:ee,sortedRowModel:te,tableMeta:ne,...re}=e.features,m={_cellInstanceInitFns:[],_columnInstanceInitFns:[],_features:{...Xn,...re},_headerGroupInstanceInitFns:[],_headerInstanceInitFns:[],_reactivity:t,_rowInstanceInitFns:[],_rowModelFns:{aggregationFns:n,filterFns:l,sortFns:ee},_rowModels:{},atoms:{},baseAtoms:{}},h=Object.values(m._features),g={...h.reduce((e,t)=>Object.assign(e,t.getDefaultTableOptions?.(m)),{}),...e};if(t.wrapExternalAtoms&&g.atoms)for(let[e,n]of Object.entries(g.atoms)){let r=n,i=t.createWritableAtom(r.get(),{debugName:`externalAtom/${e}`});g.atoms[e]=i;let a=!1,o=r.subscribe(e=>{a||i.set(e)}),s=i.subscribe(e=>{a=!0,r.set(e),a=!1});t.addSubscription(o),t.addSubscription(s)}t.createOptionsStore?(m.optionsStore=t.createWritableAtom(g,{debugName:`table/optionsStore`}),Object.defineProperty(m,"options",{configurable:!0,enumerable:!0,get(){return m.optionsStore.get()},set(e){m.optionsStore.set(()=>e)}})):m.options=g,m.initialState=er(m._features,m.options.initialState);let _=Object.keys(m.initialState);for(let e=0;e<_.length;e++){let n=_[e];m.baseAtoms[n]=t.createWritableAtom(m.initialState[n],{debugName:`table/baseAtoms/${n}`}),m.atoms[n]=t.createReadonlyAtom(()=>{let e=m.options,t=e.atoms?.[n],r=t?t.get():m.baseAtoms[n].get();if(t)return r;let i=e.state;if(i&&Ye(i,n)){let e=i[n];return e===void 0?m.initialState[n]:e}return r},{debugName:`table/atoms/${n}`})}Un(m),m.store=Ue(t.createReadonlyAtom(()=>{let e={};for(let t=0;t<_.length;t++){let n=_[t];e[n]=m.atoms[n].get()}return e},{compare:O,debugName:`table/store`}));for(let e=0;e<h.length;e++){let t=h[e];t.initTableInstanceData?.(m),t.initCellInstanceData&&m._cellInstanceInitFns.push(t.initCellInstanceData.bind(t)),t.initColumnInstanceData&&m._columnInstanceInitFns.push(t.initColumnInstanceData.bind(t)),t.initHeaderGroupInstanceData&&m._headerGroupInstanceInitFns.push(t.initHeaderGroupInstanceData.bind(t)),t.initHeaderInstanceData&&m._headerInstanceInitFns.push(t.initHeaderInstanceData.bind(t)),t.initRowInstanceData&&m._rowInstanceInitFns.push(t.initRowInstanceData.bind(t)),t.constructTableAPIs?.(m)}return m}function nr(){return(nr=t((()=>{F(),L(),Zn()})))()}function rr(e){let t=Object.assign((e,n,r)=>{let i=e.getValue(r),a=n.getValue(r),o=t.resolveDataValue;return o&&(i=o(i),a=o(a)),t.sort(i,a,e,n,r)},e);return t}function ir(e,t){return e===t?0:e>t?1:-1}function ar(e){return typeof e==`number`?isNaN(e)||e===1/0||e===-1/0?``:String(e):typeof e==`string`?e:``}function or(e,t){let n=0,r=0,i=e.length,a=t.length;for(;n<i&&r<a;){let i=R(e.charCodeAt(n)),a=R(t.charCodeAt(r)),o=sr(e,n,i),s=sr(t,r,a);if(!i&&!a){let i=cr(e,n,o,t,r,s);if(i)return i;n=o,r=s;continue}if(i!==a)return i?1:-1;let c=lr(e,n,o,t,r,s);if(c)return c;n=o,r=s}return dr(e,n)-dr(t,r)}function R(e){return e>=48&&e<=57}function sr(e,t,n){let r=t+1;for(;r<e.length&&R(e.charCodeAt(r))===n;)r++;return r}function cr(e,t,n,r,i,a){let o=n-t,s=a-i,c=o<s?o:s;for(let n=0;n<c;n++){let a=e.charCodeAt(t+n),o=r.charCodeAt(i+n);if(a>o)return 1;if(o>a)return-1}return o>s?1:s>o?-1:0}function lr(e,t,n,r,i,a){let o=t;for(;o<n&&e.charCodeAt(o)===48;)o++;let s=i;for(;s<a&&r.charCodeAt(s)===48;)s++;let c=n-o,l=a-s;if(c===0&&l===0)return 0;if(c<=15&&l<=15){let t=ur(e,o,n),i=ur(r,s,a);return t>i?1:i>t?-1:0}let u=parseInt(e.slice(t,n),10),d=parseInt(r.slice(i,a),10);return u>d?1:d>u?-1:0}function ur(e,t,n){let r=0;for(let i=t;i<n;i++)r=r*10+e.charCodeAt(i)-48;return r}function dr(e,t){let n=0,r=t;for(;r<e.length;)n++,r=sr(e,r,R(e.charCodeAt(r)));return n}var fr,pr,mr,z;function B(){return(B=t((()=>{fr=/([0-9]+)/gm,pr=rr({resolveDataValue:e=>ar(e).toLowerCase(),sort:(e,t)=>or(e,t)}),mr=rr({resolveDataValue:e=>ar(e).toLowerCase(),sort:(e,t)=>ir(e,t)}),z=rr({sort:(e,t)=>ir(e,t)})})))()}function hr(){return[]}function V(e,t){tt(e,`sorting`,t)}function gr(e,t){V(e,t?[]:A(e.initialState.sorting??[]))}function _r(e){e.atoms.sorting&&(e.options.autoResetAll??e.options.autoResetSorting??!1)&&gr(e)}function vr(e){let t=e.table._rowModelFns.sortFns,n=e.table.getFilteredRowModel().flatRows.slice(0,10),r,i=!1;for(let t=0;t<n.length;t++){let a=n[t].getValue(e.id);if(Object.prototype.toString.call(a)===`[object Date]`){r=`datetime`;break}if(typeof a==`string`&&(i=!0,a.split(fr).length>1)){r=`alphanumeric`;break}}if(!r&&i&&(r=`text`),r){let e=t?.[r];if(e||r===`alphanumeric`&&(e=t?.text),e)return e}return z}function yr(e){let t=e.table.getFilteredRowModel().flatRows.slice(0,10);for(let n=0;n<t.length;n++){let r=t[n].getValue(e.id);if(r!=null)return typeof r==`string`?`asc`:`desc`}return`desc`}function br(e){let t=e.table._rowModelFns.sortFns;return nt(e.columnDef.sortFn)?e.columnDef.sortFn:e.columnDef.sortFn===`auto`?vr(e):t?.[e.columnDef.sortFn]??z}function xr(e,t,n){let r=Cr(e,n&&U(e)),i=t!==void 0;V(e.table,a=>{let o=a.findIndex(t=>t.id===e.id),s=o===-1?void 0:a[o],c=[],l,u=i?t:r===`desc`,d=!!(a.length&&U(e)&&n);return l=d?s?`toggle`:`add`:s?`toggle`:`replace`,l===`toggle`&&(i||r||(l=`remove`)),l===`add`?(c=[...a,{id:e.id,desc:u}],c.splice(0,c.length-(e.table.options.maxMultiSortColCount??2**53-1))):c=l===`toggle`?d?a.map(t=>t.id===e.id?{...t,desc:u}:t):[{id:e.id,desc:u}]:l===`remove`?d?a.filter(t=>t.id!==e.id):[]:[{id:e.id,desc:u}],c})}function Sr(e){return e.columnDef.sortDescFirst??e.table.options.sortDescFirst??yr(e)===`desc`?`desc`:`asc`}function Cr(e,t){let n=Sr(e),r=wr(e);return r?r!==n&&(e.table.options.enableSortingRemoval??!0)&&(!t||(e.table.options.enableMultiRemove??!0))?!1:r===`desc`?`asc`:`desc`:n}function H(e){return(e.columnDef.enableSorting??!0)&&(e.table.options.enableSorting??!0)&&!!e.accessorFn}function U(e){return e.columnDef.enableMultiSort??e.table.options.enableMultiSort??!!e.accessorFn}function wr(e){let t=e.table.atoms.sorting?.get()?.find(t=>t.id===e.id);return t?t.desc?`desc`:`asc`:!1}function Tr(e){return e.table.atoms.sorting?.get()?.findIndex(t=>t.id===e.id)??-1}function Er(e){V(e.table,t=>t.length?t.filter(t=>t.id!==e.id):[])}function Dr(e){let t=H(e);return n=>{t&&xr(e,void 0,U(e)?e.table.options.isMultiSortEvent?.(n):!1)}}function Or(){return(Or=t((()=>{F(),B()})))()}var kr;function Ar(){return(Ar=t((()=>{F(),Or(),kr={getInitialState(e){return{sorting:hr(),...e}},getDefaultColumnDef(){return{sortFn:`auto`,sortUndefined:1}},getDefaultTableOptions(e){return{autoResetSorting:!1,onSortingChange:Xe(`sorting`,e),isMultiSortEvent:e=>e.shiftKey}},assignColumnPrototype(e,t){P(`rowSortingFeature`,e,t,{column_getAutoSortFn:{fn:e=>vr(e)},column_getAutoSortDir:{fn:e=>yr(e)},column_getSortFn:{fn:e=>br(e)},column_toggleSorting:{fn:(e,t,n)=>xr(e,t,n)},column_getFirstSortDir:{fn:e=>Sr(e)},column_getNextSortingOrder:{fn:(e,t)=>Cr(e,t)},column_getCanSort:{fn:e=>H(e)},column_getCanMultiSort:{fn:e=>U(e)},column_getIsSorted:{fn:e=>wr(e)},column_getSortIndex:{fn:e=>Tr(e)},column_clearSorting:{fn:e=>Er(e)},column_getToggleSortingHandler:{fn:e=>Dr(e)}})},constructTableAPIs(e){N(`rowSortingFeature`,e,{table_autoResetSorting:{fn:()=>_r(e)},table_setSorting:{fn:t=>V(e,t)},table_resetSorting:{fn:t=>gr(e,t)}})}}})))()}function jr(){return e=>{let t=e;return M({feature:`rowSortingFeature`,table:t,fnName:`table.getSortedRowModel`,memoDeps:()=>[t.atoms.sorting?.get(),t.getPreSortedRowModel()],fn:()=>Mr(t),onAfterUpdate:it(()=>bt(t))})}}function Mr(e){let t=e.getPreSortedRowModel(),n=e.atoms.sorting?.get();if(!t.rows.length||!n?.length)return t;let r=[],i=n.filter(t=>{let n=e.getColumn(t.id);return n?H(n):!1});if(!i.length)return t;let a=[];for(let t=0;t<i.length;t++){let n=i[t],r=e.getColumn(n.id);r&&a.push({id:n.id,desc:n.desc,sortUndefined:r.columnDef.sortUndefined,invertSorting:r.columnDef.invertSorting,sortFn:br(r)})}let o=(e,t)=>{for(let n=0;n<a.length;n++){let r=a[n],i=r.sortUndefined,o=r.desc,s=0;if(i){let n=e.getValue(r.id),a=t.getValue(r.id),o=n===void 0,c=a===void 0;if(o&&c)continue;if(o||c){if(i===`first`)return o?-1:1;if(i===`last`)return o?1:-1;s=o?i:-i}}if(s===0&&(s=r.sortFn(e,t,r.id)),s!==0)return o&&(s*=-1),r.invertSorting&&(s*=-1),s}return e.index-t.index},s=e=>{let t=e.slice();t.sort(o);let n=!1;for(let i=0;i<t.length;i++){let a=t[i];a!==e[i]&&(n=!0);let o=r.length;if(r.push(a),a.subRows.length){let e=s(a.subRows);if(e.changed){let s=Object.create(Object.getPrototypeOf(a));Je(s,a),s.subRows=e.rows,t[i]=s,r[o]=s,n=!0}}}return{rows:t,changed:n}};return{rows:s(t.rows).rows,flatRows:r,rowsById:t.rowsById}}function Nr(){return(Nr=t((()=>{F(),Or()})))()}function Pr(e,t){let[{table:n,rootSource:r}]=(0,W.useState)(()=>{let t=tr({...e,features:{coreReactivityFeature:Ke(),...e.features}});return t.Subscribe=(e=>Ve({...e,source:e.source??t.store})),t.FlexRender=ve,{table:t,rootSource:Ge(t.store,O)}}),i=n;qn(i,t=>({...t,...e}),{syncExternalState:!1});let a=i.options.state,o=r.get(),s=Le(r,t,{compare:O});return Fr(()=>{r.markCommitted(o),Wn(i,a??null,O)}),(0,W.useMemo)(()=>({...n,options:e,state:s}),[n,e,s])}var W,Fr;function Ir(){return(Ir=t((()=>{be(),He(),qe(),nr(),W=i(),Be(),L(),Fr=typeof window>`u`?W.useEffect:W.useLayoutEffect})))()}function Lr(){let[e,t]=(0,Rr.useState)([]),n=Pr({features:Vr,data:Br,columns:Hr,state:{sorting:e},onSortingChange:t});return(0,G.jsxs)(ae,{hoverable:!0,children:[(0,G.jsx)(_,{children:`Team members — click a column header to sort.`}),(0,G.jsx)(g,{children:n.getHeaderGroups().map(e=>(0,G.jsx)(ie,{children:e.headers.map(e=>{let t=e.column.getIsSorted(),n=Ur.has(e.column.id)?`end`:`start`;return(0,G.jsx)(ne,{align:n,"aria-sort":Wr(t),children:(0,G.jsx)(p,{variant:`tertiary`,size:`sm`,icon:t===`asc`?d:t===`desc`?u:pe,iconPosition:`end`,onClick:e.column.getToggleSortingHandler(),children:b(e.column.columnDef.header,e.getContext())})},e.id)})},e.id))}),(0,G.jsx)(h,{children:n.getRowModel().rows.map(e=>(0,G.jsx)(ie,{children:e.getAllCells().map(e=>(0,G.jsx)(m,{align:Ur.has(e.column.id)?`end`:`start`,children:b(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}var Rr,G,zr,K,q,Br,Vr,J,Hr,Ur,Wr,Y,X,Z,Q,$,Gr;function Kr(){return(Kr=t((()=>{Nr(),be(),Ar(),B(),Ir(),c(),l(),me(),Rr=i(),f(),ee(),re(),oe(),G=r(),zr={title:`Patterns/Data Table`,parameters:{layout:`fullscreen`}},K=({children:e})=>(0,G.jsx)(`div`,{className:`max-w-3xl mx-auto px-8 py-12`,children:e}),q=({children:e})=>(0,G.jsx)(`code`,{className:`rounded bg-surface px-1 py-0.5 font-mono text-[0.85em] text-foreground`,children:e}),Br=[{name:`Aoi Tanaka`,email:`aoi@example.com`,amount:1200},{name:`Ren Suzuki`,email:`ren@example.com`,amount:350},{name:`Yui Sato`,email:`yui@example.com`,amount:980},{name:`Haru Ito`,email:`haru@example.com`,amount:4500},{name:`Mio Kato`,email:`mio@example.com`,amount:75}],Vr=$n({rowSortingFeature:kr,sortedRowModel:jr(),sortFns:{alphanumeric:pr,text:mr}}),J=Qn(),Hr=J.columns([J.accessor(`name`,{header:`Name`}),J.accessor(`email`,{header:`Email`}),J.accessor(`amount`,{header:`Amount`,cell:e=>`$${e.getValue().toLocaleString()}`})]),Ur=new Set([`amount`]),Wr=e=>e===`asc`?`ascending`:e===`desc`?`descending`:`none`,Y={name:`Overview`,render:()=>(0,G.jsxs)(K,{children:[(0,G.jsx)(v,{children:`Data Table`}),(0,G.jsxs)(y,{children:[`lv1 `,(0,G.jsx)(q,{children:`Table`}),` is `,(0,G.jsx)(`strong`,{children:`presentational only`}),` — it ships the markup and the`,` `,(0,G.jsx)(q,{children:`.st-table*`}),` chrome (density, zebra, border, hover) and holds `,(0,G.jsx)(`strong`,{children:`no`}),` `,`sort / filter / pagination logic. To build a data table, compose a `,(0,G.jsx)(`em`,{children:`headless`}),` logic layer on top: it owns the state and the row model, Schatten owns the look. This is the same split shadcn/ui uses for its Data Table.`]}),(0,G.jsxs)(te,{variant:`warning`,title:`Schatten does not bundle a table logic library`,children:[(0,G.jsx)(q,{children:`@tanstack/react-table`}),` is used on this page purely to render the live demo — it is a `,(0,G.jsx)(q,{children:`devDependency`}),`, never a production or peer dependency. Bring your own headless layer (TanStack Table, react-table, or a hand-rolled `,(0,G.jsx)(q,{children:`map`}),`) and`,` `,(0,G.jsx)(q,{children:`npm install`}),` it yourself.`]}),(0,G.jsx)(le,{children:`Who owns what`}),(0,G.jsx)(ce,{headers:[`Concern`,`Owner`,`How`],rows:[{key:`markup`,cells:[`Markup, density, zebra / border / hover`,`Schatten Table`,(0,G.jsxs)(`span`,{children:[(0,G.jsx)(q,{children:`<Table striped hoverable>`}),` + parts`]},`c`)]},{key:`state`,cells:[`Sort / filter / pagination state`,`Headless lib`,(0,G.jsx)(q,{children:`useTable(…)`},`c`)]},{key:`aria`,cells:[`aria-sort, row data-state`,`You (pass-through)`,(0,G.jsxs)(`span`,{children:[(0,G.jsx)(q,{children:`<TableHead aria-sort=…>`}),` — Table forwards`,` `,(0,G.jsx)(q,{children:`{...props}`})]},`c`)]}]}),(0,G.jsx)(le,{children:`Why sort is not built into lv1`}),(0,G.jsxs)(`ul`,{className:`list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2`,children:[(0,G.jsxs)(`li`,{children:[(0,G.jsx)(`strong`,{className:`text-foreground`,children:`shadcn parity`}),` — a presentational primitive plus bring-your-own logic keeps the API small and the data flow explicit.`]}),(0,G.jsxs)(`li`,{children:[(0,G.jsx)(`strong`,{className:`text-foreground`,children:`lv1 / lv2 split`}),` — a batteries-included`,` `,(0,G.jsx)(q,{children:`DataTable`}),` is a composition, so it belongs in lv2 (post-1.0), not in the lv1 primitive.`]}),(0,G.jsxs)(`li`,{children:[(0,G.jsx)(`strong`,{className:`text-foreground`,children:`no forced dependency`}),` — baking in one headless lib would impose it on every consumer. The seam lets you pick.`]})]})]})},X={name:`1. Sorting`,render:()=>(0,G.jsxs)(K,{children:[(0,G.jsx)(v,{children:`1. Sorting`}),(0,G.jsxs)(y,{children:[`Register `,(0,G.jsx)(q,{children:`rowSortingFeature`}),` and `,(0,G.jsx)(q,{children:`createSortedRowModel()`}),` in`,` `,(0,G.jsx)(q,{children:`tableFeatures`}),`, hold the sort state in `,(0,G.jsx)(q,{children:`useTable`}),`, then render the sorted rows through Schatten `,(0,G.jsx)(q,{children:`Table`}),` parts. The header's sort toggle is a real `,(0,G.jsx)(q,{children:`<Button>`}),` inside the `,(0,G.jsx)(q,{children:`<th>`}),` (keyboard operable), and`,` `,(0,G.jsx)(q,{children:`aria-sort`}),` rides onto the `,(0,G.jsx)(q,{children:`<th>`}),` via `,(0,G.jsx)(q,{children:`TableHead`}),`'s `,(0,G.jsx)(q,{children:`{...props}`}),` pass-through.`]}),(0,G.jsx)(`div`,{className:`mb-6`,children:(0,G.jsx)(Lr,{})}),(0,G.jsx)(le,{children:`The wiring`}),(0,G.jsx)(de,{children:`import {
  createSortedRowModel, flexRender, rowSortingFeature,
  sortFn_alphanumeric, sortFn_text, tableFeatures, useTable,
} from '@tanstack/react-table'
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption,
} from '@yasmro/schatten'
import { Button } from '@yasmro/schatten'
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react'

// Module scope, so the feature set stays stable across renders.
const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
})

const ariaSort = (s: false | 'asc' | 'desc') =>
  s === 'asc' ? 'ascending' : s === 'desc' ? 'descending' : 'none'

function DataTable({ data, columns }) {
  const [sorting, setSorting] = useState([])
  const table = useTable({
    features, data, columns,
    state: { sorting },
    onSortingChange: setSorting,
  })

  return (
    <Table hoverable>
      <TableHeader>
        {table.getHeaderGroups().map((hg) => (
          <TableRow key={hg.id}>
            {hg.headers.map((header) => {
              const sorted = header.column.getIsSorted()
              return (
                {/* aria-sort on the <th>; the click target is a real <button> */}
                <TableHead key={header.id} aria-sort={ariaSort(sorted)}>
                  <Button
                    variant="tertiary" size="sm" iconPosition="end"
                    icon={sorted === 'asc' ? ArrowUp : sorted === 'desc' ? ArrowDown : ArrowUpDown}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </Button>
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getAllCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`}),(0,G.jsxs)(te,{variant:`info`,title:`aria-sort is yours to wire`,children:[`Schatten `,(0,G.jsx)(q,{children:`Table`}),` never sets `,(0,G.jsx)(q,{children:`aria-sort`}),` — it would have to own sort state to know the value, and it deliberately does not. You set it from the headless lib's state, and because `,(0,G.jsx)(q,{children:`TableHead`}),` forwards `,(0,G.jsx)(q,{children:`{...props}`}),`, it lands on the native `,(0,G.jsx)(q,{children:`<th>`}),`. Keep it on the cell, not on the inner button: only one column should be non-`,(0,G.jsx)(q,{children:`none`}),` at a time.`]})]})},Z={name:`2. Filtering & Pagination`,render:()=>(0,G.jsxs)(K,{children:[(0,G.jsx)(v,{children:`2. Filtering & Pagination`}),(0,G.jsxs)(y,{children:[`Filtering and pagination ride the exact same seam as sorting — register the matching feature and row model in `,(0,G.jsx)(q,{children:`tableFeatures`}),` and drive a Schatten control (`,(0,G.jsx)(q,{children:`Input`}),`, `,(0,G.jsx)(q,{children:`Button`}),`) off the table instance. Shown as code so you can lift the bits you need; the render side is unchanged from section 1.`]}),(0,G.jsx)(ue,{children:`Filtering`}),(0,G.jsx)(de,{children:`import {
  columnFilteringFeature, createFilteredRowModel, filterFn_includesString,
  globalFilteringFeature, tableFeatures, useTable,
} from '@tanstack/react-table'

// Global filtering builds on column filtering, so register both.
const features = tableFeatures({
  columnFilteringFeature,
  globalFilteringFeature,
  filteredRowModel: createFilteredRowModel(),
  filterFns: { includesString: filterFn_includesString },
})

const [globalFilter, setGlobalFilter] = useState('')
const table = useTable({
  features, data, columns,
  globalFilterFn: 'includesString',
  state: { globalFilter },
  onGlobalFilterChange: setGlobalFilter,
})

// Drive it with a Schatten Input:
<Input
  value={globalFilter}
  onChange={(e) => setGlobalFilter(e.target.value)}
  placeholder="Filter…"
/>`}),(0,G.jsx)(ue,{children:`Pagination`}),(0,G.jsx)(de,{children:`import {
  createPaginatedRowModel, rowPaginationFeature, tableFeatures, useTable,
} from '@tanstack/react-table'

const features = tableFeatures({
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
})

const table = useTable({
  features, data, columns,
  initialState: { pagination: { pageIndex: 0, pageSize: 10 } },
})

// table.getRowModel().rows is already the current page. Page with Buttons:
<Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
  Previous
</Button>
<Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
  Next
</Button>`}),(0,G.jsxs)(se,{children:[`The render loop (`,(0,G.jsx)(q,{children:`getHeaderGroups()`}),` / `,(0,G.jsx)(q,{children:`getRowModel().rows`}),`) is identical to section 1 — only the registered features and the controls differ. Register as many features as you need in one `,(0,G.jsx)(q,{children:`tableFeatures`}),` call; their row models layer in the order TanStack documents.`]})]})},Q={name:`3. Virtualization`,render:()=>(0,G.jsxs)(K,{children:[(0,G.jsx)(v,{children:`3. Virtualization`}),(0,G.jsxs)(y,{children:[`For very large datasets, render only the visible rows with a virtualizer. This is out of scope for this recipe — the seam is the same (Schatten `,(0,G.jsx)(q,{children:`Table`}),` parts for the chrome, a headless layer for the windowing).`]}),(0,G.jsxs)(se,{children:[`Reach for`,` `,(0,G.jsx)(`a`,{className:`text-info underline`,href:`https://tanstack.com/virtual/latest`,target:`_blank`,rel:`noreferrer`,children:(0,G.jsx)(q,{children:`@tanstack/react-virtual`})}),` `,`and feed its measured rows into `,(0,G.jsx)(q,{children:`TableBody`}),`. Note the native`,` `,(0,G.jsx)(q,{children:`<table>`}),` layout constrains some virtualization techniques; consult the virtualizer's table guide before committing to an approach.`]})]})},$={name:`4. Other options`,render:()=>(0,G.jsxs)(K,{children:[(0,G.jsx)(v,{children:`4. Other options`}),(0,G.jsxs)(y,{children:[`TanStack Table is one choice, not the only one. The seam is the same for any logic layer: whatever produces your rows, you render them through Schatten `,(0,G.jsx)(q,{children:`Table`}),` parts and forward state attributes (`,(0,G.jsx)(q,{children:`aria-sort`}),`, row `,(0,G.jsx)(q,{children:`data-state`}),`) yourself.`]}),(0,G.jsx)(ce,{headers:[`Logic layer`,`What changes`,`What stays the same`],rows:[{key:`tanstack`,cells:[(0,G.jsx)(q,{children:`@tanstack/react-table`},`c`),`Row model API (this page)`,`Schatten Table parts render the rows`]},{key:`react-table`,cells:[(0,G.jsx)(q,{children:`react-table (v7)`},`c`),`Hook API (getTableProps, …)`,`Same Table parts, same aria-sort wiring`]},{key:`manual`,cells:[`Plain array + map`,`You sort / filter in JS`,`Same Table parts; set aria-sort from your own state`]}]}),(0,G.jsxs)(se,{children:[`Whichever you pick, the rule from `,(0,G.jsx)(q,{children:`component-architecture.md`}),` §8 holds: if a row is clickable, put a real control (button / link) inside the cell — never an`,` `,(0,G.jsx)(q,{children:`onClick`}),` on a bare `,(0,G.jsx)(q,{children:`<tr>`}),`. Table's`,` `,(0,G.jsx)(q,{children:`<TableRow selected>`}),` is presentational (`,(0,G.jsx)(q,{children:`data-state="selected"`}),`) and does not imply interactivity.`]})]})},Gr=[`Overview`,`Sorting`,`FilteringAndPagination`,`Virtualization`,`OtherOptions`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => <Page>
      <PageTitle>Data Table</PageTitle>
      <Lead>
        lv1 <Code>Table</Code> is <strong>presentational only</strong> — it ships the markup and the{' '}
        <Code>.st-table*</Code> chrome (density, zebra, border, hover) and holds <strong>no</strong>{' '}
        sort / filter / pagination logic. To build a data table, compose a <em>headless</em> logic
        layer on top: it owns the state and the row model, Schatten owns the look. This is the same
        split shadcn/ui uses for its Data Table.
      </Lead>

      <Callout variant="warning" title="Schatten does not bundle a table logic library">
        <Code>@tanstack/react-table</Code> is used on this page purely to render the live demo — it
        is a <Code>devDependency</Code>, never a production or peer dependency. Bring your own
        headless layer (TanStack Table, react-table, or a hand-rolled <Code>map</Code>) and{' '}
        <Code>npm install</Code> it yourself.
      </Callout>

      <SectionTitle>Who owns what</SectionTitle>
      <DocsTable headers={['Concern', 'Owner', 'How']} rows={[{
      key: 'markup',
      cells: ['Markup, density, zebra / border / hover', 'Schatten Table', <span key="c">
                <Code>{'<Table striped hoverable>'}</Code> + parts
              </span>]
    }, {
      key: 'state',
      cells: ['Sort / filter / pagination state', 'Headless lib', <Code key="c">useTable(…)</Code>]
    }, {
      key: 'aria',
      cells: ['aria-sort, row data-state', 'You (pass-through)', <span key="c">
                <Code>{'<TableHead aria-sort=…>'}</Code> — Table forwards{' '}
                <Code>{'{...props}'}</Code>
              </span>]
    }]} />

      <SectionTitle>Why sort is not built into lv1</SectionTitle>
      <ul className="list-disc pl-6 text-sm text-foreground-muted flex flex-col gap-2">
        <li>
          <strong className="text-foreground">shadcn parity</strong> — a presentational primitive
          plus bring-your-own logic keeps the API small and the data flow explicit.
        </li>
        <li>
          <strong className="text-foreground">lv1 / lv2 split</strong> — a batteries-included{' '}
          <Code>DataTable</Code> is a composition, so it belongs in lv2 (post-1.0), not in the lv1
          primitive.
        </li>
        <li>
          <strong className="text-foreground">no forced dependency</strong> — baking in one headless
          lib would impose it on every consumer. The seam lets you pick.
        </li>
      </ul>
    </Page>
}`,...Y.parameters?.docs?.source},description:{story:`§0 — Overview. The division of labour: lv1 Table is presentational chrome; a
headless logic layer (TanStack Table) owns sort / filter / pagination state.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: '1. Sorting',
  render: () => <Page>
      <PageTitle>1. Sorting</PageTitle>
      <Lead>
        Register <Code>rowSortingFeature</Code> and <Code>createSortedRowModel()</Code> in{' '}
        <Code>tableFeatures</Code>, hold the sort state in <Code>useTable</Code>, then render the
        sorted rows through Schatten <Code>Table</Code> parts. The header&apos;s sort toggle is a
        real <Code>{'<Button>'}</Code> inside the <Code>{'<th>'}</Code> (keyboard operable), and{' '}
        <Code>aria-sort</Code> rides onto the <Code>{'<th>'}</Code> via <Code>TableHead</Code>
        &apos;s <Code>{'{...props}'}</Code> pass-through.
      </Lead>

      <div className="mb-6">
        <SortableTableDemo />
      </div>

      <SectionTitle>The wiring</SectionTitle>
      <CodeBlock>{\`import {
  createSortedRowModel, flexRender, rowSortingFeature,
  sortFn_alphanumeric, sortFn_text, tableFeatures, useTable,
} from '@tanstack/react-table'
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption,
} from '@yasmro/schatten'
import { Button } from '@yasmro/schatten'
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react'

// Module scope, so the feature set stays stable across renders.
const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
  sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
})

const ariaSort = (s: false | 'asc' | 'desc') =>
  s === 'asc' ? 'ascending' : s === 'desc' ? 'descending' : 'none'

function DataTable({ data, columns }) {
  const [sorting, setSorting] = useState([])
  const table = useTable({
    features, data, columns,
    state: { sorting },
    onSortingChange: setSorting,
  })

  return (
    <Table hoverable>
      <TableHeader>
        {table.getHeaderGroups().map((hg) => (
          <TableRow key={hg.id}>
            {hg.headers.map((header) => {
              const sorted = header.column.getIsSorted()
              return (
                {/* aria-sort on the <th>; the click target is a real <button> */}
                <TableHead key={header.id} aria-sort={ariaSort(sorted)}>
                  <Button
                    variant="tertiary" size="sm" iconPosition="end"
                    icon={sorted === 'asc' ? ArrowUp : sorted === 'desc' ? ArrowDown : ArrowUpDown}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </Button>
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getAllCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}\`}</CodeBlock>

      <Callout variant="info" title="aria-sort is yours to wire">
        Schatten <Code>Table</Code> never sets <Code>aria-sort</Code> — it would have to own sort
        state to know the value, and it deliberately does not. You set it from the headless
        lib&apos;s state, and because <Code>TableHead</Code> forwards <Code>{'{...props}'}</Code>,
        it lands on the native <Code>{'<th>'}</Code>. Keep it on the cell, not on the inner button:
        only one column should be non-<Code>none</Code> at a time.
      </Callout>
    </Page>
}`,...X.parameters?.docs?.source},description:{story:"§1 — Sorting (live). State lives in TanStack's `useTable`; the toggle is\na real <button> inside the <th>, and `aria-sort` is forwarded onto the <th>.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: '2. Filtering & Pagination',
  render: () => <Page>
      <PageTitle>2. Filtering &amp; Pagination</PageTitle>
      <Lead>
        Filtering and pagination ride the exact same seam as sorting — register the matching feature
        and row model in <Code>tableFeatures</Code> and drive a Schatten control (<Code>Input</Code>
        , <Code>Button</Code>) off the table instance. Shown as code so you can lift the bits you
        need; the render side is unchanged from section 1.
      </Lead>

      <SubsectionTitle>Filtering</SubsectionTitle>
      <CodeBlock>{\`import {
  columnFilteringFeature, createFilteredRowModel, filterFn_includesString,
  globalFilteringFeature, tableFeatures, useTable,
} from '@tanstack/react-table'

// Global filtering builds on column filtering, so register both.
const features = tableFeatures({
  columnFilteringFeature,
  globalFilteringFeature,
  filteredRowModel: createFilteredRowModel(),
  filterFns: { includesString: filterFn_includesString },
})

const [globalFilter, setGlobalFilter] = useState('')
const table = useTable({
  features, data, columns,
  globalFilterFn: 'includesString',
  state: { globalFilter },
  onGlobalFilterChange: setGlobalFilter,
})

// Drive it with a Schatten Input:
<Input
  value={globalFilter}
  onChange={(e) => setGlobalFilter(e.target.value)}
  placeholder="Filter…"
/>\`}</CodeBlock>

      <SubsectionTitle>Pagination</SubsectionTitle>
      <CodeBlock>{\`import {
  createPaginatedRowModel, rowPaginationFeature, tableFeatures, useTable,
} from '@tanstack/react-table'

const features = tableFeatures({
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
})

const table = useTable({
  features, data, columns,
  initialState: { pagination: { pageIndex: 0, pageSize: 10 } },
})

// table.getRowModel().rows is already the current page. Page with Buttons:
<Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
  Previous
</Button>
<Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
  Next
</Button>\`}</CodeBlock>

      <Note>
        The render loop (<Code>getHeaderGroups()</Code> / <Code>getRowModel().rows</Code>) is
        identical to section 1 — only the registered features and the controls differ. Register as
        many features as you need in one <Code>tableFeatures</Code> call; their row models layer in
        the order TanStack documents.
      </Note>
    </Page>
}`,...Z.parameters?.docs?.source},description:{story:`§2 — Filtering & Pagination (code-only). Same seam, different row models.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: '3. Virtualization',
  render: () => <Page>
      <PageTitle>3. Virtualization</PageTitle>
      <Lead>
        For very large datasets, render only the visible rows with a virtualizer. This is out of
        scope for this recipe — the seam is the same (Schatten <Code>Table</Code> parts for the
        chrome, a headless layer for the windowing).
      </Lead>

      <Note>
        Reach for{' '}
        <a className="text-info underline" href="https://tanstack.com/virtual/latest" target="_blank" rel="noreferrer">
          <Code>@tanstack/react-virtual</Code>
        </a>{' '}
        and feed its measured rows into <Code>TableBody</Code>. Note the native{' '}
        <Code>{'<table>'}</Code> layout constrains some virtualization techniques; consult the
        virtualizer&apos;s table guide before committing to an approach.
      </Note>
    </Page>
}`,...Q.parameters?.docs?.source},description:{story:`§3 — Virtualization (pointer only). Out of scope for this recipe; link out.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: '4. Other options',
  render: () => <Page>
      <PageTitle>4. Other options</PageTitle>
      <Lead>
        TanStack Table is one choice, not the only one. The seam is the same for any logic layer:
        whatever produces your rows, you render them through Schatten <Code>Table</Code> parts and
        forward state attributes (<Code>aria-sort</Code>, row <Code>data-state</Code>) yourself.
      </Lead>

      <DocsTable headers={['Logic layer', 'What changes', 'What stays the same']} rows={[{
      key: 'tanstack',
      cells: [<Code key="c">@tanstack/react-table</Code>, 'Row model API (this page)', 'Schatten Table parts render the rows']
    }, {
      key: 'react-table',
      cells: [<Code key="c">react-table (v7)</Code>, 'Hook API (getTableProps, …)', 'Same Table parts, same aria-sort wiring']
    }, {
      key: 'manual',
      cells: ['Plain array + map', 'You sort / filter in JS', 'Same Table parts; set aria-sort from your own state']
    }]} />

      <Note>
        Whichever you pick, the rule from <Code>component-architecture.md</Code> §8 holds: if a row
        is clickable, put a real control (button / link) inside the cell — never an{' '}
        <Code>onClick</Code> on a bare <Code>{'<tr>'}</Code>. Table&apos;s{' '}
        <Code>{'<TableRow selected>'}</Code> is presentational (<Code>data-state="selected"</Code>)
        and does not imply interactivity.
      </Note>
    </Page>
}`,...$.parameters?.docs?.source},description:{story:`§4 — Other options. The seam is logic-lib-agnostic; only the render side is
Schatten's.`,...$.parameters?.docs?.description}}}})))()}Kr();export{Z as FilteringAndPagination,$ as OtherOptions,Y as Overview,X as Sorting,Q as Virtualization,Gr as __namedExportsOrder,zr as default};