### Problem Summary
Axe-core audit detected a moderate violation: `heading-order` (WCAG 1.3.1 Info and Relationships) on `/projects`.

### Violation Details
- Page level heading is `<h1>` (*Curated Work & Software*).
- Project cards immediately render `<h3>` (*LadeStack*, *GB Coder*, etc.), skipping the `<h2>` level entirely.
- Screen reader users who navigate by heading level (H1 -> H2 -> H3) encounter an inconsistent hierarchy.

### Proposed Solution
1. Wrap the project gallery grid with an accessible section heading:
```html
<h2 className="sr-only">Featured Projects List</h2>
```
Or adjust card titles to `<h2>` and bottom CTA to `<h2>`.