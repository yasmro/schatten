# @yasmro/schatten

## 0.2.0

### Minor Changes

- ## New Components

  - **Field**: Form field wrapper with label, description, error, and tooltip support
  - **FieldSet**: Group multiple Field components with shared layout and error state
  - **Tooltip**: Radix-based tooltip component

  ## Enhancements

  - Field: Add `tooltip` prop for supplementary information with info icon
  - Input: Click on wrapper padding now focuses the input
  - Input: Show text cursor on wrapper hover

  ## Developer Experience

  - Add `/review-pr` command for structured PR self-review
  - Add `mergeRefs` utility for combining refs
  - Add Field context guideline documentation

## 0.1.0

### Minor Changes

- Add standalone CSS build with Lightning CSS

  - Add pre-compiled CSS distribution (`schatten.css`) that works without build tools
  - Users can link directly via CDN for zero-config usage
  - Uses Lightning CSS for bundling and minification
