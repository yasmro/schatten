import{j as s}from"./iframe-DxN1cMj1.js";/* empty css               *//* empty css               *//* empty css              *//* empty css                */import{T as e}from"./Text-CQHDFZkm.js";import{I as d}from"./Icon-BZPxlkU3.js";import{I as h}from"./info-lDZj8P3D.js";import{C as x}from"./circle-alert-gBDP9Rfh.js";import{S as f}from"./Separator-cdhIIvJN.js";import{S as b}from"./Spinner-SLl4u-On.js";import{B as i}from"./Button-Ps5ht4kI.js";import{B as r}from"./Badge-Bokk9_PF.js";import{C as v}from"./Callout-DqkofPCO.js";import{I as t}from"./Input-BCVDKohf.js";import{T as g}from"./Textarea-CZOducHI.js";import{C as p}from"./Checkbox-CIVyQfl4.js";import{S as m}from"./Switch-BKp3mdrF.js";import{R as w,a as u}from"./Radio-CFAoHlGO.js";import{F as _}from"./Field-LGhhI4Rb.js";import{F as y}from"./FieldSet-C8U4ZIgH.js";import{T as j,a as k,b as n,c as o}from"./Tabs-CjmRueG1.js";import{U as N}from"./user-Dd98yjDN.js";import"./preload-helper-DflytYXY.js";import"./utils-DclmTqRz.js";import"./index-BYWyDHmV.js";/* empty css             *//* empty css             */import"./createLucideIcon-DtW4Pu1q.js";import"./index-B-P_7ZTC.js";import"./index-BZS3MxXo.js";import"./index-CdElVlnK.js";import"./index-BFffiFme.js";/* empty css                  *//* empty css                *//* empty css               *//* empty css              *//* empty css                */import"./triangle-alert-DuaVUVgS.js";import"./x-CL79w7OF.js";import"./field-BK6G8zt0.js";/* empty css              *//* empty css                 */import"./index-CwxYF3o6.js";import"./index-Co7Lcw9D.js";import"./index-D8YaSvv7.js";import"./index-D1R4nZ8-.js";/* empty css                 *//* empty css               */import"./index-jpdH_Vzu.js";import"./index-CY32jdaK.js";/* empty css              */import"./Tooltip-DcPHSpFc.js";import"./index-B1Qg5-GW.js";import"./index-BPHt43r0.js";import"./floating-ui.react-dom-aiGXZBaT.js";/* empty css              *//* empty css                 */import"./index-X9RN7cdW.js";import"./index-BKc36VLi.js";const S=`
  .cssapi-fixture { padding: 1.5rem; max-width: 72rem; margin: 0 auto; }
  .cssapi-fixture__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .cssapi-fixture__column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  /* Wrapper around the section list. Used on BOTH columns so the
   * React side (Fragment expanding to many <section>s) and the
   * vanilla side (dangerouslySetInnerHTML producing a single wrapper
   * div whose children are the <section>s) get the same 1.5rem gap
   * between samples. Without this, the vanilla side wrapper eats the
   * column flex gap and the sections inside stack with margin: 0. */
  .cssapi-fixture__samples {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .cssapi-fixture__column-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-foreground-muted);
    margin-bottom: 0.25rem;
  }
  .cssapi-fixture__sample {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 0.375rem;
    background-color: var(--color-surface);
  }
  .cssapi-fixture__sample-label {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.7rem;
    color: var(--color-foreground-muted);
  }
  .cssapi-fixture__sample-row {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    flex-wrap: wrap;
  }
  .cssapi-fixture__sample-stack {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .cssapi-fixture__dialog-host {
    position: relative;
    min-height: 12rem;
    border-radius: 0.375rem;
    overflow: hidden;
    isolation: isolate;
  }
  .cssapi-fixture__sr-only {
    position: absolute;
    width: 1px; height: 1px;
    padding: 0; margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
  }
  /* Dialog/Toast portal-mounted markup uses fixed positioning in
   * production. Scope them to the dialog host so the static fixture
   * doesn't take over the viewport. */
  .cssapi-fixture__dialog-host .st-dialog__overlay,
  .cssapi-fixture__dialog-host .st-dialog__content {
    position: absolute;
  }
  .cssapi-fixture__dialog-host .st-dialog__overlay {
    inset: 0;
  }
  .cssapi-fixture__dialog-host .st-dialog__content {
    top: 50%; left: 50%;
    translate: -50% -50%;
    max-width: 22rem;
    width: 90%;
  }
`,T=`
<section class="cssapi-fixture__sample" data-component="text">
  <span class="cssapi-fixture__sample-label">Text — .st-text</span>
  <p class="st-text st-text--body st-text--md st-text--default">Body text.</p>
  <p class="st-text st-text--body st-text--sm st-text--muted">Muted small text.</p>
</section>

<section class="cssapi-fixture__sample" data-component="icon">
  <span class="cssapi-fixture__sample-label">Icon — .st-icon</span>
  <div class="cssapi-fixture__sample-row">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round"
         stroke-linejoin="round"
         class="st-icon st-icon--md st-icon--default" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round"
         stroke-linejoin="round"
         class="st-icon st-icon--md st-icon--error" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="separator">
  <span class="cssapi-fixture__sample-label">Separator — .st-separator</span>
  <p class="st-text st-text--body st-text--sm st-text--muted">Above</p>
  <div class="st-separator st-separator--horizontal" role="none"></div>
  <p class="st-text st-text--body st-text--sm st-text--muted">Below</p>
</section>

<section class="cssapi-fixture__sample" data-component="spinner">
  <span class="cssapi-fixture__sample-label">Spinner — .st-spinner</span>
  <div class="cssapi-fixture__sample-row">
    <div class="st-spinner st-spinner--default st-spinner--md" role="status">
      <svg class="st-spinner__rotor" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle class="st-spinner__track" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
        <path class="st-spinner__arc" d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
      </svg>
      <span class="cssapi-fixture__sr-only">Loading</span>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="button">
  <span class="cssapi-fixture__sample-label">Button — .st-btn</span>
  <div class="cssapi-fixture__sample-row">
    <button type="button" class="st-btn st-btn--primary st-btn--md">
      <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
      <span class="st-btn__content">Primary</span>
    </button>
    <button type="button" class="st-btn st-btn--secondary st-btn--md">
      <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
      <span class="st-btn__content">Secondary</span>
    </button>
    <button type="button" class="st-btn st-btn--destructive st-btn--md">
      <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
      <span class="st-btn__content">Destructive</span>
    </button>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="badge">
  <span class="cssapi-fixture__sample-label">Badge — .st-badge</span>
  <div class="cssapi-fixture__sample-row">
    <span class="st-badge st-badge--success st-badge--subtle st-badge--md">Saved</span>
    <span class="st-badge st-badge--error st-badge--solid st-badge--md">Failed</span>
    <span class="st-badge st-badge--info st-badge--outline st-badge--md">Beta</span>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="callout">
  <span class="cssapi-fixture__sample-label">Callout — .st-callout</span>
  <div class="st-callout st-callout--info st-callout--subtle" role="status">
    <svg class="st-callout__icon" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
    </svg>
    <div class="st-callout__content">
      <div class="st-callout__title">Heads up</div>
      <div class="st-callout__body">Subtle appearance.</div>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="input">
  <span class="cssapi-fixture__sample-label">Input — .st-input</span>
  <div class="cssapi-fixture__sample-stack">
    <div class="st-input-wrapper st-input-wrapper--md">
      <input type="text" placeholder="Default" class="st-input" aria-label="fixture-input-default" />
    </div>
    <div class="st-input-wrapper st-input-wrapper--md">
      <input type="text" placeholder="Error" class="st-input" aria-invalid="true" aria-label="fixture-input-error" />
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="textarea">
  <span class="cssapi-fixture__sample-label">Textarea — .st-textarea</span>
  <textarea rows="2" placeholder="Default" class="st-textarea st-textarea--md" aria-label="fixture-textarea-default"></textarea>
</section>

<section class="cssapi-fixture__sample" data-component="checkbox">
  <span class="cssapi-fixture__sample-label">Checkbox — .st-checkbox</span>
  <div class="cssapi-fixture__sample-row">
    <div class="st-checkbox-wrapper">
      <button type="button" id="fixture-cb-1" role="checkbox" aria-checked="false"
              data-state="unchecked" class="st-checkbox st-checkbox--md">
        <span class="st-checkbox__indicator">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
          </svg>
        </span>
      </button>
      <label for="fixture-cb-1" class="st-checkbox-wrapper__label">Unchecked</label>
    </div>
    <div class="st-checkbox-wrapper">
      <button type="button" id="fixture-cb-2" role="checkbox" aria-checked="true"
              data-state="checked" class="st-checkbox st-checkbox--md">
        <span class="st-checkbox__indicator">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
          </svg>
        </span>
      </button>
      <label for="fixture-cb-2" class="st-checkbox-wrapper__label">Checked</label>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="switch">
  <span class="cssapi-fixture__sample-label">Switch — .st-switch</span>
  <div class="cssapi-fixture__sample-row">
    <div class="st-switch-wrapper">
      <button type="button" id="fixture-sw-1" role="switch" aria-checked="false"
              data-state="unchecked" class="st-switch st-switch--md">
        <span class="st-switch__check">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
          </svg>
        </span>
        <span class="st-switch__thumb" data-state="unchecked"></span>
      </button>
      <label for="fixture-sw-1" class="st-switch-wrapper__label">Off</label>
    </div>
    <div class="st-switch-wrapper">
      <button type="button" id="fixture-sw-2" role="switch" aria-checked="true"
              data-state="checked" class="st-switch st-switch--md">
        <span class="st-switch__check">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2.5 8.5L3.5 7.5L6.5 10.5L12.5 3.5L13.5 4.5L6.5 12.5Z" fill="currentColor" />
          </svg>
        </span>
        <span class="st-switch__thumb" data-state="checked"></span>
      </button>
      <label for="fixture-sw-2" class="st-switch-wrapper__label">On</label>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="radio">
  <span class="cssapi-fixture__sample-label">Radio — .st-radio</span>
  <div role="radiogroup" class="st-radio-group">
    <div class="st-radio-wrapper">
      <button type="button" id="fixture-r-a" role="radio" aria-checked="false"
              data-state="unchecked" class="st-radio st-radio--md"></button>
      <label for="fixture-r-a" class="st-radio-wrapper__label">Option A</label>
    </div>
    <div class="st-radio-wrapper">
      <button type="button" id="fixture-r-b" role="radio" aria-checked="true"
              data-state="checked" class="st-radio st-radio--md">
        <span class="st-radio__indicator"><span class="st-radio__dot"></span></span>
      </button>
      <label for="fixture-r-b" class="st-radio-wrapper__label">Option B</label>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="field">
  <span class="cssapi-fixture__sample-label">Field — .st-field</span>
  <div class="st-field" data-error="true">
    <div class="st-field__label-row">
      <label for="fixture-field-name" class="st-field__label">
        Name<span class="st-field__required-marker">*</span>
      </label>
    </div>
    <div class="st-input-wrapper st-input-wrapper--md">
      <input id="fixture-field-name" class="st-input" required
             aria-invalid="true" aria-describedby="fixture-field-name-error" />
    </div>
    <p id="fixture-field-name-error" class="st-field__error">Name is required</p>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="fieldset">
  <span class="cssapi-fixture__sample-label">FieldSet — .st-fieldset</span>
  <fieldset class="st-fieldset">
    <legend class="st-fieldset__legend">Personal Info</legend>
    <div class="st-fieldset__children">
      <div class="st-field">
        <div class="st-field__label-row">
          <label for="fixture-fs-first" class="st-field__label">First name</label>
        </div>
        <div class="st-input-wrapper st-input-wrapper--md">
          <input id="fixture-fs-first" class="st-input" />
        </div>
      </div>
    </div>
  </fieldset>
</section>

<section class="cssapi-fixture__sample" data-component="tooltip">
  <span class="cssapi-fixture__sample-label">Tooltip — .st-tooltip__content (static)</span>
  <div class="st-tooltip__content" data-state="instant-open" data-side="bottom" role="tooltip">
    Tooltip body
    <svg class="st-tooltip__arrow" width="10" height="5" viewBox="0 0 30 10" aria-hidden="true">
      <polygon points="0,0 30,0 15,10" />
    </svg>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="select">
  <span class="cssapi-fixture__sample-label">Select — .st-select__trigger (closed)</span>
  <button type="button" class="st-select__trigger st-select__trigger--md"
          aria-haspopup="listbox" aria-expanded="false" data-state="closed">
    <span class="st-select__value">Pick a fruit</span>
    <svg class="st-select__icon" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
</section>

<section class="cssapi-fixture__sample" data-component="toast">
  <span class="cssapi-fixture__sample-label">Toast — .st-toast (static, no portal)</span>
  <div class="st-toast st-toast--success st-toast--subtle" role="status" aria-live="polite">
    <svg class="st-toast__icon" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round"
         stroke-linejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
    <div class="st-toast__content">
      <div class="st-toast__title">Saved</div>
      <div class="st-toast__description">Your changes are saved.</div>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="dialog">
  <span class="cssapi-fixture__sample-label">Dialog — .st-dialog__* (static, scoped)</span>
  <div class="cssapi-fixture__dialog-host">
    <div class="st-dialog__overlay"></div>
    <div class="st-dialog__content" role="dialog" aria-modal="true"
         aria-labelledby="fixture-dialog-title" aria-describedby="fixture-dialog-desc">
      <div class="st-dialog__header">
        <h2 id="fixture-dialog-title" class="st-dialog__title">Confirm</h2>
        <p id="fixture-dialog-desc" class="st-dialog__description">Are you sure?</p>
      </div>
      <div class="st-dialog__footer">
        <button type="button" class="st-btn st-btn--secondary st-btn--md">
          <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
          <span class="st-btn__content">Cancel</span>
        </button>
        <button type="button" class="st-btn st-btn--primary st-btn--md">
          <span class="st-btn__spinner-overlay" aria-hidden="true"></span>
          <span class="st-btn__content">Confirm</span>
        </button>
      </div>
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="dropdownmenu">
  <span class="cssapi-fixture__sample-label">DropdownMenu — .st-dropdown-menu__* (static, no portal)</span>
  <div class="st-dropdown-menu__content" role="menu" data-state="open" style="position: static;">
    <div class="st-dropdown-menu__label">Actions</div>
    <div class="st-dropdown-menu__separator"></div>
    <div class="st-dropdown-menu__item" role="menuitem" data-highlighted>
      <svg class="st-dropdown-menu__item-icon" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round" aria-hidden="true">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
      Edit
      <span class="st-dropdown-menu__shortcut">⌘E</span>
    </div>
    <div class="st-dropdown-menu__item st-dropdown-menu__checkbox-item" role="menuitemcheckbox" aria-checked="true">
      <span class="st-dropdown-menu__item-indicator">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      Status Bar
    </div>
    <div class="st-dropdown-menu__item st-dropdown-menu__radio-item" role="menuitemradio" aria-checked="true">
      <span class="st-dropdown-menu__item-indicator">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="12" r="12" />
        </svg>
      </span>
      Bottom
    </div>
    <div class="st-dropdown-menu__item st-dropdown-menu__sub-trigger" role="menuitem" data-state="closed">
      Share
      <svg class="st-dropdown-menu__sub-trigger-chevron" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round"
           stroke-linejoin="round" aria-hidden="true">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </div>
    <div class="st-dropdown-menu__separator"></div>
    <div class="st-dropdown-menu__item st-dropdown-menu__item--destructive" role="menuitem">
      Delete
    </div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="tabs">
  <span class="cssapi-fixture__sample-label">Tabs — .st-tabs__* (static, no JS)</span>
  <div class="st-tabs" data-orientation="horizontal">
    <div class="st-tabs__list" role="tablist" data-orientation="horizontal">
      <button class="st-tabs__trigger" role="tab" type="button" data-state="active" aria-selected="true">
        <svg class="st-tabs__trigger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
        Account
      </button>
      <button class="st-tabs__trigger" role="tab" type="button" data-state="inactive" aria-selected="false">
        Password
      </button>
      <button class="st-tabs__trigger" role="tab" type="button" data-state="inactive" aria-selected="false" disabled>
        Team
      </button>
      <!-- The indicator is JS-positioned in the React layer; this static sample
           pins it under the active tab by hand (transform/width inline). The
           translateX matches the list's 4px focus-ring padding so it aligns
           under the first tab. -->
      <span class="st-tabs__indicator" aria-hidden="true"
            style="transform: translateX(4px); width: 102px; opacity: 1;"></span>
    </div>
    <div class="st-tabs__content" role="tabpanel">Manage your account details and email.</div>
  </div>
</section>

<section class="cssapi-fixture__sample" data-component="popover">
  <span class="cssapi-fixture__sample-label">Popover — .st-popover__content (static, no portal)</span>
  <!-- data-state is deliberately omitted: the enter animation on
       [data-state="open"] uses a slide transform, which the static dist smoke
       test (animations paused) could freeze mid-motion. The base rule already
       carries the full panel surface (border / padding / shadow), so the
       resolved "open" visual is identical without triggering the keyframe. -->
  <div class="st-popover__content" role="dialog" data-side="bottom" style="position: static;">
    <p>Place any content inside the popover panel.</p>
  </div>
</section>
`;function l(){return s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"text",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Text — <Text>"}),s.jsx(e,{variant:"body",size:"md",children:"Body text."}),s.jsx(e,{variant:"body",size:"sm",color:"muted",children:"Muted small text."})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"icon",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Icon — <Icon>"}),s.jsxs("div",{className:"cssapi-fixture__sample-row",children:[s.jsx(d,{icon:h,size:"md"}),s.jsx(d,{icon:x,size:"md",color:"error"})]})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"separator",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Separator — <Separator>"}),s.jsx(e,{variant:"body",size:"sm",color:"muted",children:"Above"}),s.jsx(f,{orientation:"horizontal",decorative:!0}),s.jsx(e,{variant:"body",size:"sm",color:"muted",children:"Below"})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"spinner",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Spinner — <Spinner>"}),s.jsx("div",{className:"cssapi-fixture__sample-row",children:s.jsx(b,{size:"md"})})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"button",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Button — <Button>"}),s.jsxs("div",{className:"cssapi-fixture__sample-row",children:[s.jsx(i,{variant:"primary",children:"Primary"}),s.jsx(i,{variant:"secondary",children:"Secondary"}),s.jsx(i,{variant:"destructive",children:"Destructive"})]})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"badge",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Badge — <Badge>"}),s.jsxs("div",{className:"cssapi-fixture__sample-row",children:[s.jsx(r,{variant:"success",appearance:"subtle",children:"Saved"}),s.jsx(r,{variant:"error",appearance:"solid",children:"Failed"}),s.jsx(r,{variant:"info",appearance:"outline",children:"Beta"})]})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"callout",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Callout — <Callout>"}),s.jsx(v,{variant:"info",appearance:"subtle",title:"Heads up",children:"Subtle appearance."})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"input",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Input — <Input>"}),s.jsxs("div",{className:"cssapi-fixture__sample-stack",children:[s.jsx(t,{placeholder:"Default","aria-label":"fixture-react-input-default"}),s.jsx(t,{placeholder:"Error",isError:!0,"aria-label":"fixture-react-input-error"})]})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"textarea",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Textarea — <Textarea>"}),s.jsx(g,{rows:2,placeholder:"Default","aria-label":"fixture-react-textarea-default"})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"checkbox",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Checkbox — <Checkbox>"}),s.jsxs("div",{className:"cssapi-fixture__sample-row",children:[s.jsx(p,{label:"Unchecked",defaultChecked:!1}),s.jsx(p,{label:"Checked",defaultChecked:!0})]})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"switch",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Switch — <Switch>"}),s.jsxs("div",{className:"cssapi-fixture__sample-row",children:[s.jsx(m,{label:"Off",defaultChecked:!1}),s.jsx(m,{label:"On",defaultChecked:!0})]})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"radio",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Radio — <Radio>"}),s.jsxs(w,{defaultValue:"b",name:"fixture-react-radio",children:[s.jsx(u,{value:"a",label:"Option A"}),s.jsx(u,{value:"b",label:"Option B"})]})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"field",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Field — <Field>"}),s.jsx(_,{label:"Name",required:!0,isError:!0,error:"Name is required",children:s.jsx(t,{})})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"fieldset",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"FieldSet — <FieldSet>"}),s.jsx(y,{legend:"Personal Info",children:s.jsx(_,{label:"First name",children:s.jsx(t,{})})})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"tooltip",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Tooltip — portal-mounted (omitted)"}),s.jsx(e,{variant:"body",size:"sm",color:"muted",children:"No comparable React render — Tooltip portals to body. The vanilla column shows the static .st-tooltip__content shape."})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"select",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Select — portal-mounted (omitted)"}),s.jsx(e,{variant:"body",size:"sm",color:"muted",children:"No comparable React render — Select dropdown portals to body. The vanilla column shows the closed trigger only."})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"toast",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Toast — imperative API (omitted)"}),s.jsx(e,{variant:"body",size:"sm",color:"muted",children:"No comparable React render — Toast is fired imperatively via `toast()`. The vanilla column shows the static .st-toast frame."})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"dialog",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Dialog — portal-mounted (omitted)"}),s.jsx(e,{variant:"body",size:"sm",color:"muted",children:"No comparable React render — Dialog portals to body. The vanilla column shows a scoped static overlay + content."})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"dropdownmenu",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"DropdownMenu — portal-mounted (omitted)"}),s.jsx(e,{variant:"body",size:"sm",color:"muted",children:"No comparable React render — DropdownMenu portals to body and is JS-driven. The vanilla column shows the static .st-dropdown-menu__content shape."})]}),s.jsxs("section",{className:"cssapi-fixture__sample","data-component":"tabs",children:[s.jsx("span",{className:"cssapi-fixture__sample-label",children:"Tabs — .st-tabs__* (inline, JS-driven)"}),s.jsxs(j,{defaultValue:"account",children:[s.jsxs(k,{children:[s.jsx(n,{value:"account",icon:N,children:"Account"}),s.jsx(n,{value:"password",children:"Password"}),s.jsx(n,{value:"team",disabled:!0,children:"Team"})]}),s.jsx(o,{value:"account",children:"Manage your account details and email."}),s.jsx(o,{value:"password",children:"Change your password here."}),s.jsx(o,{value:"team",children:"Invite and manage team members."})]})]})]})}try{l.displayName="ReactSamples",l.__docgenInfo={description:"React equivalents for the 14 区 A/B components (plus inline-renderable\nTabs) — paired by `data-component` with the matching `vanillaHtml`\nsection so the parity story can render them side-by-side and the\nsnapshot tells you immediately which component drifted.",displayName:"ReactSamples",filePath:"/home/runner/work/schatten/schatten/src/docs/__fixtures__/cssApiSamples.tsx",methods:[],props:{},tags:{}}}catch{}try{fixtureChromeCss.displayName="fixtureChromeCss",fixtureChromeCss.__docgenInfo={description:"Stringified `<style>` block providing the layout chrome for the\nparity grid. Lives inside the fixture so both the React story and\nthe dist HTML page render with identical structure — the dist spec\nconcatenates this with `dist/schatten.css` and the markup body.\n\nPrefix `.cssapi-fixture__*` is deliberately NOT `st-*` — these\nclasses are NOT part of the public CSS API\n(.claude/rules/api-stability.md). They are purely test scaffolding.",displayName:"fixtureChromeCss",filePath:"/home/runner/work/schatten/schatten/src/docs/__fixtures__/cssApiSamples.tsx",methods:[],props:{},tags:{}}}catch{}try{vanillaHtml.displayName="vanillaHtml",vanillaHtml.__docgenInfo={description:`Vanilla HTML for all 18 lv1 components. Imported as a string and
either set via \`dangerouslySetInnerHTML\` (parity story) or written
to \`page.setContent\` (dist VRT spec).

Each component is wrapped in a \`.cssapi-fixture__sample\` with a
\`data-component\` attribute so the React side can be paired visually
and CSS rules can pin individual components without relying on
positional selectors.

Markup conventions:

- Static-only — no \`[data-state]\` driven open dialogs / select
  dropdowns; the unwrapped vanilla shape is what consumers writing
  pure HTML get. Open shapes for region D components stay covered
  by per-component VRT specs.
- Inline SVG paths match the Lucide icons used on the React side
  so the visual is comparable. Kept short — circle + path is enough
  for parity detection.
- \`aria-*\` and \`role\` attributes are written explicitly because the
  CSS API does not auto-wire ARIA; vanilla consumers must set them.`,displayName:"vanillaHtml",filePath:"/home/runner/work/schatten/schatten/src/docs/__fixtures__/cssApiSamples.tsx",methods:[],props:{},tags:{}}}catch{}const Hs={title:"CSS API/Overview",parameters:{layout:"fullscreen"}},a={name:"React vs Vanilla HTML (parity)",render:()=>s.jsxs(s.Fragment,{children:[s.jsx("style",{children:S}),s.jsxs("div",{className:"cssapi-fixture",children:[s.jsx("h1",{className:"st-text st-text--heading st-text--xl st-text--default",children:"React ↔ Vanilla HTML parity"}),s.jsxs("p",{className:"st-text st-text--body st-text--sm st-text--muted",children:["Left column: the React component layer. Right column: hand-written vanilla HTML with the matching `.st-*` class chain. Same fixture is fed into ",s.jsx("code",{children:"CSSApiDist.vrt.spec.ts"})," ","to verify the built ",s.jsx("code",{children:"dist/schatten.css"})," renders identically."]}),s.jsxs("div",{className:"cssapi-fixture__grid",style:{marginTop:"1.5rem"},children:[s.jsxs("div",{className:"cssapi-fixture__column",children:[s.jsx("span",{className:"cssapi-fixture__column-label",children:"React"}),s.jsx("div",{className:"cssapi-fixture__samples",children:s.jsx(l,{})})]}),s.jsxs("div",{className:"cssapi-fixture__column",children:[s.jsx("span",{className:"cssapi-fixture__column-label",children:"Vanilla HTML"}),s.jsx("div",{className:"cssapi-fixture__samples",dangerouslySetInnerHTML:{__html:T}})]})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'React vs Vanilla HTML (parity)',
  render: () => <>
      {/* Fixture chrome — scaffolding only, NOT public API. The same
       * CSS string is injected into the dist HTML page so layout
       * matches across verification paths. */}
      <style>{fixtureChromeCss}</style>

      <div className="cssapi-fixture">
        <h1 className="st-text st-text--heading st-text--xl st-text--default">
          React ↔ Vanilla HTML parity
        </h1>
        <p className="st-text st-text--body st-text--sm st-text--muted">
          Left column: the React component layer. Right column: hand-written vanilla HTML with the
          matching \`.st-*\` class chain. Same fixture is fed into <code>CSSApiDist.vrt.spec.ts</code>{' '}
          to verify the built <code>dist/schatten.css</code> renders identically.
        </p>

        <div className="cssapi-fixture__grid" style={{
        marginTop: '1.5rem'
      }}>
          <div className="cssapi-fixture__column">
            <span className="cssapi-fixture__column-label">React</span>
            {/* Wrap in \`.cssapi-fixture__samples\` so the gap between
             * sections matches the vanilla side, which renders one
             * wrapper div from \`dangerouslySetInnerHTML\`. Without the
             * wrapper here, React's Fragment would flatten all
             * sections directly into the column, getting \`gap: 1.5rem\`
             * from the column itself — but then the vanilla side's
             * sections lose that gap because their wrapper eats it.
             * Mirroring the structure on both sides keeps the gaps
             * symmetric. */}
            <div className="cssapi-fixture__samples">
              <ReactSamples />
            </div>
          </div>
          <div className="cssapi-fixture__column">
            <span className="cssapi-fixture__column-label">Vanilla HTML</span>
            <div className="cssapi-fixture__samples"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: The fixture string is authored in this repo and is the single source of truth shared with the dist VRT — see src/docs/__fixtures__/cssApiSamples.tsx file header.
          dangerouslySetInnerHTML={{
            __html: vanillaHtml
          }} />
          </div>
        </div>
      </div>
    </>
}`,...a.parameters?.docs?.source}}};const As=["ParityComparison"];export{a as ParityComparison,As as __namedExportsOrder,Hs as default};
