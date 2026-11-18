import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';
import axe from 'axe-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

function startServer(port = 4174) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(distDir, 'index.html');
      }

      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
        '.json': 'application/json',
      };

      const contentType = mimeTypes[ext] || 'application/octet-stream';
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
        }
      });
    });

    server.listen(port, () => {
      resolve(server);
    });
  });
}

const routes = [
  '/',
  '/about',
  '/projects',
  '/projects/ladestack',
  '/skills',
  '/contact',
  '/non-existent-page'
];

async function runComprehensiveAudit() {
  console.log('--- STARTING COMPREHENSIVE CODE & BROWSER AUDIT ---\n');
  const server = await startServer(4174);
  const baseUrl = 'http://localhost:4174';

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const auditReport = {
    axeViolations: [],
    metadataIssues: [],
    consoleErrors: [],
    touchTargetIssues: [],
    contrastIssues: [],
  };

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      auditReport.consoleErrors.push({ text: msg.text(), location: msg.location() });
    }
  });

  page.on('pageerror', (err) => {
    auditReport.consoleErrors.push({ text: err.message, stack: err.stack });
  });

  try {
    for (const route of routes) {
      console.log(`Auditing Route: ${route}`);
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });

      // 1. Metadata & Title Check
      const title = await page.title();
      const metaDescription = await page.evaluate(() => {
        const meta = document.querySelector('meta[name="description"]');
        return meta ? meta.getAttribute('content') : null;
      });

      console.log(`  Title: "${title}"`);
      if (route !== '/' && title.startsWith('Girish Lade — UI/UX Designer')) {
        auditReport.metadataIssues.push({
          route,
          issue: 'Route does not dynamically update document <title> on navigation.',
          currentTitle: title,
        });
      }

      // Check OpenGraph Tags
      const ogTitle = await page.evaluate(() => {
        const og = document.querySelector('meta[property="og:title"]');
        return og ? og.getAttribute('content') : null;
      });
      if (!ogTitle) {
        auditReport.metadataIssues.push({
          route,
          issue: 'Missing OpenGraph meta tags (og:title, og:description, og:url, og:image).',
        });
      }

      // 2. Inject axe-core and run WCAG 2.2 audit (Dark mode)
      await page.evaluate(axe.source);
      const darkAxeResults = await page.evaluate(async () => {
        // @ts-ignore
        return await window.axe.run({
          runOnly: {
            type: 'tag',
            values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']
          }
        });
      });

      if (darkAxeResults.violations.length > 0) {
        for (const v of darkAxeResults.violations) {
          auditReport.axeViolations.push({
            route,
            theme: 'dark',
            id: v.id,
            impact: v.impact,
            description: v.description,
            nodes: v.nodes.map((n) => n.html).slice(0, 3),
          });
        }
      }

      // 3. Switch to Light Mode and run axe-core
      await page.evaluate(() => {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      });
      await page.waitForTimeout(150);

      const lightAxeResults = await page.evaluate(async () => {
        // @ts-ignore
        return await window.axe.run({
          runOnly: {
            type: 'tag',
            values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']
          }
        });
      });

      if (lightAxeResults.violations.length > 0) {
        for (const v of lightAxeResults.violations) {
          auditReport.axeViolations.push({
            route,
            theme: 'light',
            id: v.id,
            impact: v.impact,
            description: v.description,
            nodes: v.nodes.map((n) => n.html).slice(0, 3),
          });
        }
      }

      // 4. Touch target size check on 375px mobile viewport
      await page.setViewportSize({ width: 375, height: 812 });
      await page.waitForTimeout(100);

      const smallTargets = await page.evaluate(() => {
        const interactive = Array.from(document.querySelectorAll('a, button, input, textarea'));
        const issues = [];
        for (const el of interactive) {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            if (rect.width < 32 || rect.height < 32) {
              issues.push({
                tag: el.tagName.toLowerCase(),
                text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 30),
                width: Math.round(rect.width),
                height: Math.round(rect.height),
              });
            }
          }
        }
        return issues;
      });

      if (smallTargets.length > 0) {
        auditReport.touchTargetIssues.push({
          route,
          smallTargets,
        });
      }

      // Reset to Desktop for next route
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.evaluate(() => {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      });
    }

    console.log('\n--- AUDIT COMPLETE: GENERATING REPORT ---\n');
    console.log(JSON.stringify(auditReport, null, 2));

    fs.writeFileSync(
      path.resolve(__dirname, '../audit-report.json'),
      JSON.stringify(auditReport, null, 2),
      'utf-8'
    );
  } finally {
    await browser.close();
    server.close();
  }
}

runComprehensiveAudit();
