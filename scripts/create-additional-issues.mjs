import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tempDir = path.resolve(__dirname, '../.tmp_issues_2');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const additionalIssues = [
  {
    title: 'fix(deploy): missing SPA rewrite configuration for nested routes on Vercel/Netlify (404 on refresh)',
    labels: ['bug', 'enhancement'],
    category: 'Deployment & Routing',
    body: `### Problem Summary
The repository currently lacks SPA rewrite configuration files (\`vercel.json\` for Vercel, and \`public/_redirects\` for Netlify / Cloudflare Pages).

### Technical Impact
When deployed to static hosts or serverless platforms, reloading the page or directly accessing any nested route (such as \`/about\`, \`/projects\`, \`/projects/gb-coder\`, or \`/contact\`) causes the web server to look for physical HTML files at those sub-paths and return a **404 Not Found HTTP response**.

### Steps to Reproduce
1. Deploy the build output to Vercel or Netlify.
2. Directly navigate to \`/projects/ladestack\`.
3. Press Browser Refresh (F5).
4. Observe HTTP 404 from the server instead of client-side routing.

### Proposed Solution
1. Add \`vercel.json\` with SPA rewrite rule:
\`\`\`json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
\`\`\`
2. Add \`public/_redirects\` for Netlify/Cloudflare:
\`\`\`text
/*    /index.html   200
\`\`\``
  },
  {
    title: 'perf(bundle): implement route-level code splitting with React.lazy and Suspense',
    labels: ['performance', 'enhancement'],
    category: 'Performance & Optimization',
    body: `### Problem Summary
In \`src/App.tsx\`, all page route components (\`HomePage\`, \`AboutPage\`, \`ProjectsPage\`, \`ProjectDetailPage\`, \`SkillsPage\`, \`ContactPage\`, \`NotFoundPage\`) are synchronously imported at the root.

### Technical Impact
- The initial bundle size is **483 kB** of uncompressed JavaScript, containing code for all pages even if the user only visits the Home page.
- Increases First Contentful Paint (FCP) and Time to Interactive (TTI) on slow 3G/4G mobile connections.

### Proposed Solution
Use dynamic imports via \`React.lazy\` and wrap routes in a \`<Suspense>\` fallback:
\`\`\`tsx
const HomePage = React.lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
// ...
\`\`\`
This will break down the production output into route-specific chunks that download on demand.`
  },
  {
    title: 'fix(a11y): Motion animations do not respect prefers-reduced-motion OS preference',
    labels: ['accessibility', 'bug'],
    category: 'Accessibility & Motion',
    body: `### Problem Summary
In \`src/components/motion/variants.ts\` and animated components, spring transitions, scale zooms, and vertical travel transforms execute identically regardless of user OS animation settings.

### Accessibility Impact
Violates WCAG 2.2 Success Criterion 2.3.3 (Animation from Interactions). Users with vestibular balance disorders, motion sickness, or cognitive sensitivities who enable "Reduce Motion" in Windows/macOS/iOS/Android still experience bouncing spring animations and layout shifts.

### Proposed Solution
1. Wrap root with Motion's official \`<MotionConfig reducedMotion="user">\`.
2. In \`variants.ts\`, provide reduced-motion conditional variants that substitute physical movement (\`y: 16\`, \`scale: 1.15\`) with subtle opacity fades.`
  },
  {
    title: 'fix(ui): floating navigation lacks safe-area-inset-top for notched and Dynamic Island displays',
    labels: ['bug'],
    category: 'UI & Mobile Responsiveness',
    body: `### Problem Summary
In \`src/components/layout/FloatingNavigation.tsx\`, the fixed navigation pill is positioned with:
\`\`\`html
<nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 ...">
\`\`\`

### Visual Bug on Mobile
On iPhones with camera notches, Dynamic Island, and Android devices in standalone PWA / full-viewport mode, \`top-6\` (24px) causes the floating pill to collide with the camera cutout and system status indicators.

### Proposed Solution
Incorporate CSS \`env(safe-area-inset-top)\` into the navigation placement:
\`\`\`css
top: max(1.5rem, calc(env(safe-area-inset-top, 0px) + 0.75rem));
\`\`\`
Ensures consistent clearance across all mobile and tablet form factors.`
  },
  {
    title: 'feat(theme): add dynamic meta theme-color updates and multi-tab storage synchronization',
    labels: ['enhancement'],
    category: 'Theme & Mobile UX',
    body: `### Problem Summary
1. The \`useTheme\` hook updates the \`html\` class (\`.dark\`), but does not update the browser's \`<meta name="theme-color">\`. As a result, the mobile browser header bar and status bar (Chrome/Safari) remain the default color rather than matching the active theme (\`#0c0c0c\` in dark, \`#f8f8f8\` in light).
2. If a user has the website open in multiple browser tabs and switches theme in one tab, the other tabs do not react until manual reload because there is no \`storage\` event listener.

### Proposed Solution
1. Update \`<meta name="theme-color">\` dynamically in \`useTheme.ts\` matching \`#0c0c0c\` (dark) or \`#f8f8f8\` (light).
2. Listen for \`window.addEventListener('storage', ...)\` to synchronize theme changes across open tabs instantaneously.`
  },
  {
    title: 'fix(routing): project detail slug lookup is case-sensitive and fails on mixed-case URLs',
    labels: ['bug'],
    category: 'Routing & Robustness',
    body: `### Problem Summary
In \`src/pages/ProjectDetailPage.tsx\`, slug matching is performed with strict equality:
\`\`\`tsx
const { slug } = useParams<{ slug: string }>();
const currentIndex = projects.findIndex((p) => p.slug === slug);
\`\`\`

### Impact
If a user or external backlink references a project with mixed casing (e.g. \`/projects/GB-CODER\`, \`/projects/Gb-Coder\`, or \`/projects/LadeStack\`), \`currentIndex\` evaluates to \`-1\` and renders the "Project Not Found" fallback error screen.

### Proposed Solution
Normalize both strings before comparison:
\`\`\`tsx
const currentIndex = projects.findIndex((p) => p.slug.toLowerCase() === slug?.toLowerCase());
\`\`\``
  }
];

async function createAdditionalIssues() {
  console.log('Creating additional GitHub issues (Batch 2)...\n');
  const results = [];

  for (let i = 0; i < additionalIssues.length; i++) {
    const item = additionalIssues[i];
    const tempFile = path.join(tempDir, `additional_${i + 1}.md`);
    fs.writeFileSync(tempFile, item.body, 'utf-8');

    const labelsArg = item.labels.map((l) => `--label "${l}"`).join(' ');
    const cmd = `gh issue create --title "${item.title.replace(/"/g, '\\"')}" --body-file "${tempFile}" ${labelsArg}`;

    try {
      console.log(`[${i + 1}/${additionalIssues.length}] Creating: ${item.title}`);
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
    path.resolve(__dirname, '../github-issues-batch2.json'),
    JSON.stringify(results, null, 2),
    'utf-8'
  );
  console.log('Batch 2 issues created.');
}

createAdditionalIssues();
