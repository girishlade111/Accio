### Problem Summary
During the comprehensive browser audit, all client-side routes (`/`, `/about`, `/projects`, `/projects/:slug`, `/skills`, `/contact`, `*`) retain the exact same static `<title>` tag defined in `index.html`:
> `Girish Lade — UI/UX Designer, Full-Stack Developer & LadeStack Founder`

None of the routes update document title, `<meta name="description">`, canonical URLs, or OpenGraph / Twitter Card preview tags.

### Technical Impact
- Search engines and social media scrapers (Twitter/X, LinkedIn, Discord) show identical generic previews across all pages instead of contextual project descriptions.
- Screen readers do not announce the unique page title when navigating between routes in the single-page application.

### Affected Routes
- `/about` -> Missing title: *About Girish Lade — Engineer, Product Designer & Developer*
- `/projects` -> Missing title: *Projects by Girish Lade — Browser IDEs, PDF Tools & Web Apps*
- `/projects/:slug` -> Missing unique project titles & descriptions (e.g. *GB Coder — Monaco-based browser IDE*)
- `/skills` -> Missing title: *Skills — Girish Lade, UI/UX Designer & Full-Stack Developer*
- `/contact` -> Missing title: *Contact Girish Lade — Developer & LadeStack Founder*

### Proposed Solution
1. Implement a route-based metadata hook (or React 19 native `<title>` and `<meta>` hoisting).
2. Set dynamic titles, descriptions, and OpenGraph tags on each route mount.