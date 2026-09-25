import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('[postbuild] dist/index.html not found! Run build first.');
  process.exit(1);
}

// 1. Create .nojekyll in dist
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
console.log('[postbuild] Created dist/.nojekyll');

// 2. Copy 404.html if available
const public404 = path.resolve(__dirname, '../public/404.html');
if (fs.existsSync(public404)) {
  fs.copyFileSync(public404, path.join(distDir, '404.html'));
  console.log('[postbuild] Copied 404.html to dist/404.html');
}

// 2b. Copy CNAME if available
const publicCNAME = path.resolve(__dirname, '../public/CNAME');
if (fs.existsSync(publicCNAME)) {
  fs.copyFileSync(publicCNAME, path.join(distDir, 'CNAME'));
  console.log('[postbuild] Copied CNAME to dist/CNAME');
}

// 3. Pre-create route directories with index.html for instant HTTP 200 on GitHub Pages
const routes = [
  'about-us',
  'about',
  'curtain-raiser',
  '2025-highlights',
  '2025-summit-highlights',
  'bss-home-2025',
  'contact',
  'general-enquiry',
  'get-involved',
  'thank-you',
  'thank-you-guest-registration',
  'agenda-2026',
  'speakers-2026',
  'speakers-2025',
  'speakers',
  'agenda',
  'agenda-2025',
  'snapshot-agenda',
  'exhibitors',
  'exhibitors-2025',
  'exhibitor',
  'exhibit',
  'exhibit-now',
  'ecosystem-partners',
  'partners',
  'partners-2025',
  'partners-2026',
  'ecosystem-partners-2026',
  'media-partners-2026',
  'media-partners',
  'be-a-media-partner',
  'register',
  'inaugural-day-invite',
  'kaushalya-karnataka-awards-2026',
  'awards-2026',
  'kaushalya-karnataka-awards-2025',
  'kaushalya-karnataka-awards-2025-old',
  'awards',
  'poster',
  'be-a-speaker',
  'kaushalya-awards-registration',
  'details',
  'floorplan',
  'floorplan-screen',
  'agenda-screen',
  'skillathon-2025',
  'skillathon-2026',
  'skillathon-registration',
  'sponsor-now',
  'sponsor-registration',
  'association-enquiry'
];

let createdCount = 0;
for (const route of routes) {
  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(indexHtmlPath, path.join(routeDir, 'index.html'));
  createdCount++;
}

console.log(`[postbuild] Successfully pre-rendered ${createdCount} static route entrypoints in dist/ for GitHub Pages.`);
