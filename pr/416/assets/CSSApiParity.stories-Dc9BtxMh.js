import{i as e}from"./preload-helper-ylcYtS7T.js";import{t}from"./iframe-1y-Fr_Ay.js";import{K as n,ft as r,o as i,t as a}from"./lucide-react-DaSy76xh.js";import{t as o}from"./Badge-DrvOxNnh.js";import{r as s,t as c}from"./Button-DClcHBqh.js";import{t as ee}from"./Spinner-CKLcmGCs.js";import{t as l}from"./Callout-DegeQPhV.js";import{t as u}from"./Button-BNqPI4cq.js";import{t as d}from"./Checkbox-SUFGrkPK.js";import{t as f}from"./Separator-BG1ZtD2T.js";import"./Separator-DMDYw-Tz.js";import{t as p}from"./Dialog-Y4oHY5eB.js";import{t as m}from"./Input-Bhn_L8_8.js";import{t as h}from"./Field-r1vls86J.js";import{t as g}from"./Tooltip-DAYqb1Il.js";import{n as _,t as v}from"./Radio-fLjNTKK9.js";import{t as y}from"./Select-DBzj2sry.js";import{t as b}from"./Switch-3h7TqPsa.js";import{t as x}from"./Textarea-jUCN9eWG.js";import{t as S}from"./FieldSet-H975kLQ-.js";import{n as C,t as w}from"./Icon-raROc4rY.js";import{t as T}from"./Text-5j5EpNtu.js";import{a as E,i as D,n as O,r as k,t as A}from"./Tabs-B-koWsTI.js";import{t as j}from"./Toast-DAAfwU7w.js";import{t as M}from"./Badge-CbOaMbYN.js";import{t as N}from"./Callout-CKh5ZPSA.js";import{a as P,i as F,n as I,o as te,r as L}from"./Tooltip-5C8SkmfF.js";import{n as R,r as z}from"./Select-DJmCefjQ.js";import{t as B}from"./Text-B4706a3o.js";var V=e((()=>{C()})),H=e((()=>{E()})),U=e((()=>{M(),u(),N(),te(),z(),P(),V(),R(),F(),s(),L(),H(),B(),I()})),W,G,K=e((()=>{W=`
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
`,G=`
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
`}));function q(){return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`text`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Text — <Text>`}),(0,J.jsx)(T,{variant:`body`,size:`md`,children:`Body text.`}),(0,J.jsx)(T,{variant:`body`,size:`sm`,color:`muted`,children:`Muted small text.`})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`icon`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Icon — <Icon>`}),(0,J.jsxs)(`div`,{className:`cssapi-fixture__sample-row`,children:[(0,J.jsx)(w,{icon:n,size:`md`}),(0,J.jsx)(w,{icon:r,size:`md`,color:`error`})]})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`separator`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Separator — <Separator>`}),(0,J.jsx)(T,{variant:`body`,size:`sm`,color:`muted`,children:`Above`}),(0,J.jsx)(f,{orientation:`horizontal`,decorative:!0}),(0,J.jsx)(T,{variant:`body`,size:`sm`,color:`muted`,children:`Below`})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`spinner`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Spinner — <Spinner>`}),(0,J.jsx)(`div`,{className:`cssapi-fixture__sample-row`,children:(0,J.jsx)(ee,{size:`md`})})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`button`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Button — <Button>`}),(0,J.jsxs)(`div`,{className:`cssapi-fixture__sample-row`,children:[(0,J.jsx)(c,{variant:`primary`,children:`Primary`}),(0,J.jsx)(c,{variant:`secondary`,children:`Secondary`}),(0,J.jsx)(c,{variant:`destructive`,children:`Destructive`})]})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`badge`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Badge — <Badge>`}),(0,J.jsxs)(`div`,{className:`cssapi-fixture__sample-row`,children:[(0,J.jsx)(o,{variant:`success`,appearance:`subtle`,children:`Saved`}),(0,J.jsx)(o,{variant:`error`,appearance:`solid`,children:`Failed`}),(0,J.jsx)(o,{variant:`info`,appearance:`outline`,children:`Beta`})]})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`callout`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Callout — <Callout>`}),(0,J.jsx)(l,{variant:`info`,appearance:`subtle`,title:`Heads up`,children:`Subtle appearance.`})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`input`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Input — <Input>`}),(0,J.jsxs)(`div`,{className:`cssapi-fixture__sample-stack`,children:[(0,J.jsx)(m,{placeholder:`Default`,"aria-label":`fixture-react-input-default`}),(0,J.jsx)(m,{placeholder:`Error`,isError:!0,"aria-label":`fixture-react-input-error`})]})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`textarea`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Textarea — <Textarea>`}),(0,J.jsx)(x,{rows:2,placeholder:`Default`,"aria-label":`fixture-react-textarea-default`})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`checkbox`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Checkbox — <Checkbox>`}),(0,J.jsxs)(`div`,{className:`cssapi-fixture__sample-row`,children:[(0,J.jsx)(d,{label:`Unchecked`,defaultChecked:!1}),(0,J.jsx)(d,{label:`Checked`,defaultChecked:!0})]})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`switch`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Switch — <Switch>`}),(0,J.jsxs)(`div`,{className:`cssapi-fixture__sample-row`,children:[(0,J.jsx)(b,{label:`Off`,defaultChecked:!1}),(0,J.jsx)(b,{label:`On`,defaultChecked:!0})]})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`radio`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Radio — <Radio>`}),(0,J.jsxs)(_,{defaultValue:`b`,name:`fixture-react-radio`,children:[(0,J.jsx)(v,{value:`a`,label:`Option A`}),(0,J.jsx)(v,{value:`b`,label:`Option B`})]})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`field`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Field — <Field>`}),(0,J.jsx)(h,{label:`Name`,required:!0,isError:!0,error:`Name is required`,children:(0,J.jsx)(m,{})})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`fieldset`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`FieldSet — <FieldSet>`}),(0,J.jsx)(S,{legend:`Personal Info`,children:(0,J.jsx)(h,{label:`First name`,children:(0,J.jsx)(m,{})})})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`tooltip`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Tooltip — portal-mounted (omitted)`}),(0,J.jsx)(T,{variant:`body`,size:`sm`,color:`muted`,children:`No comparable React render — Tooltip portals to body. The vanilla column shows the static .st-tooltip__content shape.`})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`select`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Select — portal-mounted (omitted)`}),(0,J.jsx)(T,{variant:`body`,size:`sm`,color:`muted`,children:`No comparable React render — Select dropdown portals to body. The vanilla column shows the closed trigger only.`})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`toast`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Toast — imperative API (omitted)`}),(0,J.jsx)(T,{variant:`body`,size:`sm`,color:`muted`,children:"No comparable React render — Toast is fired imperatively via `toast()`. The vanilla column shows the static .st-toast frame."})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`dialog`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Dialog — portal-mounted (omitted)`}),(0,J.jsx)(T,{variant:`body`,size:`sm`,color:`muted`,children:`No comparable React render — Dialog portals to body. The vanilla column shows a scoped static overlay + content.`})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`dropdownmenu`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`DropdownMenu — portal-mounted (omitted)`}),(0,J.jsx)(T,{variant:`body`,size:`sm`,color:`muted`,children:`No comparable React render — DropdownMenu portals to body and is JS-driven. The vanilla column shows the static .st-dropdown-menu__content shape.`})]}),(0,J.jsxs)(`section`,{className:`cssapi-fixture__sample`,"data-component":`tabs`,children:[(0,J.jsx)(`span`,{className:`cssapi-fixture__sample-label`,children:`Tabs — .st-tabs__* (inline, JS-driven)`}),(0,J.jsxs)(A,{defaultValue:`account`,children:[(0,J.jsxs)(k,{children:[(0,J.jsx)(D,{value:`account`,icon:i,children:`Account`}),(0,J.jsx)(D,{value:`password`,children:`Password`}),(0,J.jsx)(D,{value:`team`,disabled:!0,children:`Team`})]}),(0,J.jsx)(O,{value:`account`,children:`Manage your account details and email.`}),(0,J.jsx)(O,{value:`password`,children:`Change your password here.`}),(0,J.jsx)(O,{value:`team`,children:`Invite and manage team members.`})]})]})]})}var J,Y=e((()=>{a(),U(),p(),y(),j(),g(),J=t(),K();try{q.displayName=`ReactSamples`,q.__docgenInfo={description:"React equivalents for the 14 区 A/B components (plus inline-renderable\nTabs) — paired by `data-component` with the matching `vanillaHtml`\nsection so the parity story can render them side-by-side and the\nsnapshot tells you immediately which component drifted.",displayName:`ReactSamples`,filePath:`/home/runner/work/schatten/schatten/src/docs/__fixtures__/cssApiSamples.tsx`,methods:[],props:{},tags:{}}}catch{}try{fixtureChromeCss.displayName=`fixtureChromeCss`,fixtureChromeCss.__docgenInfo={description:"Stringified `<style>` block providing the layout chrome for the\nparity grid. Lives inside the fixture so both the React story and\nthe dist HTML page render with identical structure — the dist spec\nconcatenates this with `dist/schatten.css` and the markup body.\n\nPrefix `.cssapi-fixture__*` is deliberately NOT `st-*` — these\nclasses are NOT part of the public CSS API\n(.claude/rules/api-stability.md). They are purely test scaffolding.",displayName:`fixtureChromeCss`,filePath:`/home/runner/work/schatten/schatten/src/docs/__fixtures__/cssApiSamples.tsx`,methods:[],props:{},tags:{}}}catch{}try{vanillaHtml.displayName=`vanillaHtml`,vanillaHtml.__docgenInfo={description:`Vanilla HTML for all 18 lv1 components. Imported as a string and
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
  CSS API does not auto-wire ARIA; vanilla consumers must set them.`,displayName:`vanillaHtml`,filePath:`/home/runner/work/schatten/schatten/src/docs/__fixtures__/cssApiSamples.tsx`,methods:[],props:{},tags:{}}}catch{}})),X,Z,Q,$;e((()=>{Y(),X=t(),Z={title:`CSS API/Overview`,parameters:{layout:`fullscreen`}},Q={name:`React vs Vanilla HTML (parity)`,render:()=>(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`style`,{children:W}),(0,X.jsxs)(`div`,{className:`cssapi-fixture`,children:[(0,X.jsx)(`h1`,{className:`st-text st-text--heading st-text--xl st-text--default`,children:`React ↔ Vanilla HTML parity`}),(0,X.jsxs)(`p`,{className:`st-text st-text--body st-text--sm st-text--muted`,children:["Left column: the React component layer. Right column: hand-written vanilla HTML with the matching `.st-*` class chain. Same fixture is fed into ",(0,X.jsx)(`code`,{children:`CSSApiDist.vrt.spec.ts`}),` `,`to verify the built `,(0,X.jsx)(`code`,{children:`dist/schatten.css`}),` renders identically.`]}),(0,X.jsxs)(`div`,{className:`cssapi-fixture__grid`,style:{marginTop:`1.5rem`},children:[(0,X.jsxs)(`div`,{className:`cssapi-fixture__column`,children:[(0,X.jsx)(`span`,{className:`cssapi-fixture__column-label`,children:`React`}),(0,X.jsx)(`div`,{className:`cssapi-fixture__samples`,children:(0,X.jsx)(q,{})})]}),(0,X.jsxs)(`div`,{className:`cssapi-fixture__column`,children:[(0,X.jsx)(`span`,{className:`cssapi-fixture__column-label`,children:`Vanilla HTML`}),(0,X.jsx)(`div`,{className:`cssapi-fixture__samples`,dangerouslySetInnerHTML:{__html:G}})]})]})]})]})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`ParityComparison`]}))();export{Q as ParityComparison,$ as __namedExportsOrder,Z as default};