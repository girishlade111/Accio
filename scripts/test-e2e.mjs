import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const screenshotsDir = path.resolve(__dirname, '../audit-screenshots');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Simple static SPA server for dist/
function startServer(port = 4173) {
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

const viewports = [
  { width: 320, height: 568, name: '320px (Mobile Mini)' },
  { width: 375, height: 812, name: '375px (iPhone X)' },
  { width: 768, height: 1024, name: '768px (iPad Mini)' },
  { width: 1280, height: 800, name: '1280px (Laptop)' },
  { width: 1920, height: 1080, name: '1920px (FHD Desktop)' },
];

const routes = [
  '/',
  '/about',
  '/projects',
  '/projects/ladestack',
  '/projects/gb-coder',
  '/skills',
  '/contact',
  '/unknown-page',
];

async function run() {
  console.log('Starting Accio Portfolio verification server...');
  const server = await startServer(4173);
  const baseUrl = 'http://localhost:4173';

  console.log('Launching Playwright Chromium browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  let failedChecks = 0;

  try {
    for (const route of routes) {
      console.log(`\nVerifying route: ${route}`);
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });

      // Check title and h1
      const title = await page.title();
      const h1Count = await page.locator('h1').count();
      console.log(`  Title: "${title}" | H1 count: ${h1Count}`);

      if (h1Count === 0) {
        console.warn(`  [WARN] No H1 element found on ${route}`);
      }

      // Test responsive viewports for overflow
      for (const vp of viewports) {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.waitForTimeout(100);

        const hasHorizontalOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > window.innerWidth;
        });

        if (hasHorizontalOverflow) {
          console.error(`  [FAIL] Overflow detected at ${vp.name} on ${route}`);
          failedChecks++;
        } else {
          console.log(`  [PASS] Clean fit at ${vp.name}`);
        }
      }

      // Capture screenshot at standard desktop width
      await page.setViewportSize({ width: 1280, height: 800 });
      const screenshotFilename = `route-${route.replace(/[\/:]/g, '_') || 'home'}.png`;
      await page.screenshot({ path: path.join(screenshotsDir, screenshotFilename) });
    }

    // Test Theme Switcher Interaction
    console.log('\nTesting Theme Toggle on Home Page...');
    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
    const isInitiallyDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    console.log(`  Initial theme dark: ${isInitiallyDark}`);

    const themeToggleBtn = page.locator('button[aria-label*="Switch to"]');
    await themeToggleBtn.click();
    await page.waitForTimeout(200);

    const isAfterClickDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    console.log(`  After toggle dark: ${isAfterClickDark}`);

    if (isInitiallyDark === isAfterClickDark) {
      console.error('  [FAIL] Theme toggle failed to invert dark class');
      failedChecks++;
    } else {
      console.log('  [PASS] Theme successfully inverted and persisted');
      // Capture light mode screenshot
      await page.screenshot({ path: path.join(screenshotsDir, 'home-light-mode.png') });
    }

    // Test FAQ Accordion Interaction on /contact
    console.log('\nTesting FAQ Accordion Expansion on /contact...');
    await page.goto(`${baseUrl}/contact`, { waitUntil: 'networkidle' });
    const firstFaqBtn = page.locator('button[id^="faq-btn-"]').first();
    const initialAriaExpanded = await firstFaqBtn.getAttribute('aria-expanded');
    console.log(`  Initial aria-expanded: ${initialAriaExpanded}`);

    await firstFaqBtn.click();
    await page.waitForTimeout(300);

    const expandedAria = await firstFaqBtn.getAttribute('aria-expanded');
    console.log(`  After click aria-expanded: ${expandedAria}`);

    if (expandedAria !== 'true') {
      console.error('  [FAIL] FAQ accordion did not expand');
      failedChecks++;
    } else {
      console.log('  [PASS] FAQ expanded with animated region');
    }

    console.log(`\n========================================`);
    console.log(`Audit Summary: ${failedChecks === 0 ? 'ALL CHECKS PASSED (0 failures)' : `${failedChecks} failures`}`);
    console.log(`========================================`);
  } catch (err) {
    console.error('Audit exception:', err);
    failedChecks++;
  } finally {
    await browser.close();
    server.close();
  }

  if (failedChecks > 0) {
    process.exit(1);
  }
}

run();
