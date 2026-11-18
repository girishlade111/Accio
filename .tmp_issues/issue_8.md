### Problem Summary
When transitioning between routes in the single-page application using React Router and Motion (`AnimatePresence`), keyboard focus remains trapped at the previous link or floating navigation pill.

### Accessibility Impact
- Assistive technology and screen reader users are not informed that the page content has refreshed.
- Sighted keyboard-only users must tab repeatedly through the top navigation again before reaching the new page's primary content.

### Proposed Solution
1. In `AppShell.tsx`, attach an accessible `ref` or `tabIndex={-1}` to the `<main id="main-content">` container.
2. On `location.pathname` change, programmatically shift focus to the main landmark or first `<h1>`, or use an `aria-live="polite"` route announcer.