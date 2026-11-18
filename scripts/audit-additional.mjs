import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const additionalAuditResults = [];

// 1. SPA Rewrite configuration check (vercel.json / _redirects)
const hasVercelJson = fs.existsSync(path.join(rootDir, 'vercel.json'));
const hasRedirects = fs.existsSync(path.join(rootDir, 'public/_redirects'));
if (!hasVercelJson && !hasRedirects) {
  additionalAuditResults.push({
    title: 'fix(deploy): missing SPA rewrite configuration for nested routes on Vercel/Netlify (404 on refresh)',
    category: 'Deployment & Routing',
    labels: ['bug', 'enhancement'],
    impact: 'Direct navigation or browser reload on nested routes (/about, /projects/:slug) returns 404 from host servers without fallback rewrite rules.',
  });
}

// 2. Code-Splitting / Bundle Chunking Check
const appContent = fs.readFileSync(path.join(rootDir, 'src/App.tsx'), 'utf-8');
if (!appContent.includes('lazy(')) {
  additionalAuditResults.push({
    title: 'perf(bundle): implement route-level code splitting with React.lazy and Suspense',
    category: 'Performance & Optimization',
    labels: ['performance', 'enhancement'],
    impact: 'All 7 route components are bundled into a single monolithic bundle (~483kB JS), increasing initial page load time.',
  });
}

// 3. Motion Reduced-Motion Fallback Check
const motionVariants = fs.readFileSync(path.join(rootDir, 'src/components/motion/variants.ts'), 'utf-8');
if (!motionVariants.includes('prefers-reduced-motion') && !motionVariants.includes('reducedMotion')) {
  additionalAuditResults.push({
    title: 'fix(a11y): Motion animations do not respect prefers-reduced-motion OS preference',
    category: 'Accessibility & Motion',
    labels: ['accessibility', 'bug'],
    impact: 'Users with vestibular disorders or reduced-motion OS preferences still experience spring and transform animations.',
  });
}

// 4. Safe Area Inset for Notch / Dynamic Island on Mobile
const navContent = fs.readFileSync(path.join(rootDir, 'src/components/layout/FloatingNavigation.tsx'), 'utf-8');
if (!navContent.includes('safe-area-inset-top')) {
  additionalAuditResults.push({
    title: 'fix(ui): floating navigation lacks safe-area-inset-top for notched and Dynamic Island displays',
    category: 'UI & Mobile Responsiveness',
    labels: ['bug'],
    impact: 'On iPhone X+ and mobile devices in PWA/standalone mode, top-6 fixed positioning collides with the notch/status bar.',
  });
}

// 5. Dynamic Theme-Color Meta Tag & Multi-Tab Theme Sync
const themeHook = fs.readFileSync(path.join(rootDir, 'src/hooks/useTheme.ts'), 'utf-8');
if (!themeHook.includes('theme-color') || !themeHook.includes('addEventListener(\'storage\'')) {
  additionalAuditResults.push({
    title: 'feat(theme): add dynamic meta theme-color updates and multi-tab storage synchronization',
    category: 'Theme & Mobile UX',
    labels: ['enhancement'],
    impact: 'Mobile browser address bars do not tint to match dark/light theme, and changing theme in one tab does not update other active tabs.',
  });
}

// 6. Case-Insensitive Slug Matching in ProjectDetailPage
const detailContent = fs.readFileSync(path.join(rootDir, 'src/pages/ProjectDetailPage.tsx'), 'utf-8');
if (detailContent.includes('p.slug === slug')) {
  additionalAuditResults.push({
    title: 'fix(routing): project detail slug lookup is case-sensitive and fails on mixed-case URLs',
    category: 'Routing & Robustness',
    labels: ['bug'],
    impact: 'Navigating to /projects/GB-CODER or /projects/Ladestack renders "Project Not Found" due to strict case comparison.',
  });
}

console.log('Additional Audit Findings:');
console.log(JSON.stringify(additionalAuditResults, null, 2));

fs.writeFileSync(
  path.resolve(__dirname, '../audit-additional-report.json'),
  JSON.stringify(additionalAuditResults, null, 2),
  'utf-8'
);
