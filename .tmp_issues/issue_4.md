### Problem Summary
Axe-core audit flagged a serious violation on the Projects page: `label-content-name-mismatch` (WCAG 2.5.3 Label in Name).

### Violation Details
- Element:
```html
<a aria-label="View project details for LadeStack" href="/projects/ladestack">
  ...
  <h3>LadeStack</h3>
</a>
```
- Rule: When an interactive element has visible text content (`LadeStack`), its accessible name (`aria-label`) must contain the exact visible text string starting with it or matching it.
- Because `View project details for ...` prepends words before the visible name, speech-input users who say "Click LadeStack" cannot target the element reliably.

### Proposed Solution
Update `ProjectCard.tsx` to remove the extraneous prefix or use:
```tsx
<Link
  to={`/projects/${project.slug}`}
  aria-label={`${project.title} - View project details`}
>
```
Or simply allow the visible text inside `<h3>` to provide the accessible name naturally.