import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tempDir = path.resolve(__dirname, '../.tmp_issues');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const issuesToCreate = [
  {
    title: 'fix(security): resolve high-severity ReDoS vulnerability in transitive dependency (picomatch / GHSA-fc5q-39xc-vjpf)',
    labels: ['security', 'bug'],
    category: 'Security & Dependencies',
    body: `### Problem Summary
Running \`npm audit\` reveals 4 high-severity vulnerabilities in the project's dependency tree traced to \`picomatch\` (Advisory: [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf)).

### Dependency Chain
\`\`\`text
picomatch (vulnerable to ReDoS via single-branch repeated extglobs)
  ├── fdir (>=5.2.1)
  ├── tinyglobby
  └── vite (>=6.3.0)
\`\`\`

### Technical Impact
Vulnerable regular expressions in \`picomatch\` can be exploited via crafted paths to cause catastrophic backtracking, resulting in CPU resource exhaustion (Denial of Service) during Vite file scanning and production bundling.

### Steps to Reproduce
1. Execute \`npm audit\` in terminal.
2. Confirm 4 high severity advisory warnings pointing to \`GHSA-fc5q-39xc-vjpf\`.

### Proposed Solution
1. Apply \`npm audit fix\` or define a strict override in \`package.json\`:
\`\`\`json
"overrides": {
  "picomatch": "^4.0.2"
}
\`\`\`
2. Re-run \`npm audit\` to ensure clean 0-vulnerability output.`
  },
  {
    title: 'feat(seo): implement dynamic document title, meta descriptions, and OpenGraph tags per route',
    labels: ['seo', 'enhancement'],
    category: 'SEO & Structured Metadata',
    body: `### Problem Summary
During the comprehensive browser audit, all client-side routes (\`/\`, \`/about\`, \`/projects\`, \`/projects/:slug\`, \`/skills\`, \`/contact\`, \`*\`) retain the exact same static \`<title>\` tag defined in \`index.html\`:
> \`Girish Lade — UI/UX Designer, Full-Stack Developer & LadeStack Founder\`

None of the routes update document title, \`<meta name="description">\`, canonical URLs, or OpenGraph / Twitter Card preview tags.

### Technical Impact
- Search engines and social media scrapers (Twitter/X, LinkedIn, Discord) show identical generic previews across all pages instead of contextual project descriptions.
- Screen readers do not announce the unique page title when navigating between routes in the single-page application.

### Affected Routes
- \`/about\` -> Missing title: *About Girish Lade — Engineer, Product Designer & Developer*
- \`/projects\` -> Missing title: *Projects by Girish Lade — Browser IDEs, PDF Tools & Web Apps*
- \`/projects/:slug\` -> Missing unique project titles & descriptions (e.g. *GB Coder — Monaco-based browser IDE*)
- \`/skills\` -> Missing title: *Skills — Girish Lade, UI/UX Designer & Full-Stack Developer*
- \`/contact\` -> Missing title: *Contact Girish Lade — Developer & LadeStack Founder*

### Proposed Solution
1. Implement a route-based metadata hook (or React 19 native \`<title>\` and \`<meta>\` hoisting).
2. Set dynamic titles, descriptions, and OpenGraph tags on each route mount.`
  },
  {
    title: 'fix(a11y): color contrast failures in dark and light themes (WCAG 2.2 AA)',
    labels: ['accessibility', 'bug'],
    category: 'Accessibility & Color Contrast',
    body: `### Problem Summary
Automated axe-core accessibility auditing discovered color contrast failures (WCAG 2.2 AA threshold < 4.5:1) on multiple text elements in both dark and light modes.

### Specific Violations Found
1. **Home Page Bottom Ambient Tagline**:
   - Element: \`<div class="absolute bottom-8 text-[11px] text-[#555555] font-mono">Pune, India · Independent Developer</div>\`
   - Computed contrast ratio on dark background (\`#0c0c0c\`) is **3.1:1**, falling below the mandatory **4.5:1** ratio.
2. **About & Projects Subtext**:
   - Class \`text-neutral-500\` computed against light theme (\`#f8f8f8\`) yields **3.4:1**, causing axe-core \`color-contrast\` failures.
3. **Card Subtitles**:
   - Class \`text-white/40\` on dark cards yields **2.8:1** contrast ratio.

### Proposed Solution
1. Replace \`text-[#555555]\` on Home with \`text-neutral-400 dark:text-neutral-400 light:text-neutral-600\` to ensure >= 4.5:1 contrast.
2. Adjust design tokens in \`src/styles/global.css\` so secondary text meets WCAG AA standards in both themes.`
  },
  {
    title: 'fix(a11y): label-content-name-mismatch on ProjectCard links (WCAG 2.5.3)',
    labels: ['accessibility', 'bug'],
    category: 'Accessibility & ARIA Semantics',
    body: `### Problem Summary
Axe-core audit flagged a serious violation on the Projects page: \`label-content-name-mismatch\` (WCAG 2.5.3 Label in Name).

### Violation Details
- Element:
\`\`\`html
<a aria-label="View project details for LadeStack" href="/projects/ladestack">
  ...
  <h3>LadeStack</h3>
</a>
\`\`\`
- Rule: When an interactive element has visible text content (\`LadeStack\`), its accessible name (\`aria-label\`) must contain the exact visible text string starting with it or matching it.
- Because \`View project details for ...\` prepends words before the visible name, speech-input users who say "Click LadeStack" cannot target the element reliably.

### Proposed Solution
Update \`ProjectCard.tsx\` to remove the extraneous prefix or use:
\`\`\`tsx
<Link
  to={\`/projects/\${project.slug}\`}
  aria-label={\`\${project.title} - View project details\`}
>
\`\`\`
Or simply allow the visible text inside \`<h3>\` to provide the accessible name naturally.`
  },
  {
    title: 'fix(a11y): resolve semantic heading level skipping in project gallery (WCAG 1.3.1)',
    labels: ['accessibility', 'bug'],
    category: 'Accessibility & Heading Structure',
    body: `### Problem Summary
Axe-core audit detected a moderate violation: \`heading-order\` (WCAG 1.3.1 Info and Relationships) on \`/projects\`.

### Violation Details
- Page level heading is \`<h1>\` (*Curated Work & Software*).
- Project cards immediately render \`<h3>\` (*LadeStack*, *GB Coder*, etc.), skipping the \`<h2>\` level entirely.
- Screen reader users who navigate by heading level (H1 -> H2 -> H3) encounter an inconsistent hierarchy.

### Proposed Solution
1. Wrap the project gallery grid with an accessible section heading:
\`\`\`html
<h2 className="sr-only">Featured Projects List</h2>
\`\`\`
Or adjust card titles to \`<h2>\` and bottom CTA to \`<h2>\`.`
  },
  {
    title: 'fix(ui): touch target sizes below 44x44px for mobile footer and social links (WCAG 2.5.8)',
    labels: ['accessibility', 'bug'],
    category: 'UI & Mobile Responsiveness',
    body: `### Problem Summary
In mobile viewport testing (320px–375px), automated layout audit identified several interactive controls with clickable bounding boxes under the recommended 44x44px (or minimum 24x24px for WCAG 2.5.8 Target Size).

### Specific Targets Under 44px
1. **Contact Page Social Links**:
   - Elements: \`<a href="..." aria-label="GitHub Profile">\` wrapping 16px SVG icons.
   - Bounding rect is \`16px × 16px\` without touch padding, making them difficult to tap accurately on small mobile touchscreens.
2. **Footer Navigation Links**:
   - Inline text links (\`Home\`, \`About\`, \`Skills\`) have computed heights of ~16px with narrow horizontal hit areas.
3. **Back Buttons**:
   - \`Back to Projects\` and \`Back to About\` buttons have a tap height of 16px.

### Proposed Solution
1. Add minimum padding (\`p-2.5\` or \`min-w-[44px] min-h-[44px] flex items-center justify-center\`) around icon buttons and back navigation buttons.
2. Maintain compact visual appearance while expanding interactive hit area.`
  },
  {
    title: 'feat(contact): add configurable webhook POST submission and webmail fallback',
    labels: ['enhancement'],
    category: 'Functional & Form Enhancements',
    body: `### Problem Summary
Currently, in \`ContactPage.tsx\`, submitting the contact form executes a hardcoded \`window.location.href = mailto:admin@ladestack.in?subject=...\` protocol.

### User Experience Issue
- Many users on desktop browsers (Windows/Linux/Mac) do not have a default desktop mail client installed (e.g. they use Gmail, Outlook Web, or Proton in the browser). Clicking "Send Message" produces no response or launches an unconfigured OS email wizard.
- While \`.env.example\` specifies \`VITE_CONTACT_ENDPOINT\`, the code does not check or submit to this endpoint if provided.

### Proposed Solution
1. If \`import.meta.env.VITE_CONTACT_ENDPOINT\` is defined:
   - Perform an asynchronous JSON \`fetch\` POST request.
   - Display real loading and success confirmation.
2. If no endpoint is configured:
   - Offer a "Copy message & email to clipboard" button alongside the mailto action so webmail users can paste directly into Gmail or Outlook.`
  },
  {
    title: 'fix(routing): manage keyboard focus and route-change announcement for screen readers',
    labels: ['accessibility', 'enhancement'],
    category: 'Accessibility & Route Transitions',
    body: `### Problem Summary
When transitioning between routes in the single-page application using React Router and Motion (\`AnimatePresence\`), keyboard focus remains trapped at the previous link or floating navigation pill.

### Accessibility Impact
- Assistive technology and screen reader users are not informed that the page content has refreshed.
- Sighted keyboard-only users must tab repeatedly through the top navigation again before reaching the new page's primary content.

### Proposed Solution
1. In \`AppShell.tsx\`, attach an accessible \`ref\` or \`tabIndex={-1}\` to the \`<main id="main-content">\` container.
2. On \`location.pathname\` change, programmatically shift focus to the main landmark or first \`<h1>\`, or use an \`aria-live="polite"\` route announcer.`
  }
];

async function createIssues() {
  console.log('Creating individual GitHub issues for Accio repository...\n');
  const results = [];

  for (let i = 0; i < issuesToCreate.length; i++) {
    const item = issuesToCreate[i];
    const tempFile = path.join(tempDir, `issue_${i + 1}.md`);
    fs.writeFileSync(tempFile, item.body, 'utf-8');

    const labelsArg = item.labels.map((l) => `--label "${l}"`).join(' ');
    const cmd = `gh issue create --title "${item.title.replace(/"/g, '\\"')}" --body-file "${tempFile}" ${labelsArg}`;

    try {
      console.log(`[${i + 1}/${issuesToCreate.length}] Creating: ${item.title}`);
      const stdout = execSync(cmd, { encoding: 'utf-8' });
      const issueUrl = stdout.trim();
      console.log(`  -> Created successfully: ${issueUrl}\n`);
      results.push({
        title: item.title,
        category: item.category,
        labels: item.labels,
        url: issueUrl,
      });
    } catch (err) {
      console.error(`  -> Failed to create issue:`, err.message);
      results.push({
        title: item.title,
        category: item.category,
        labels: item.labels,
        error: err.message,
      });
    }
  }

  fs.writeFileSync(
    path.resolve(__dirname, '../github-issues-created.json'),
    JSON.stringify(results, null, 2),
    'utf-8'
  );
  console.log('All issues processed.');
}

createIssues();
