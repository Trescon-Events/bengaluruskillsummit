const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd) {
  console.log('>', cmd);
  execSync(cmd, { stdio: 'inherit' });
}

try {
  run('git worktree prune');
} catch (e) {}

try {
  run('git worktree add ../gh-pages-wt gh-pages');
} catch (e) {
  console.log('Worktree already exists or setup issue, proceeding...');
}

const srcDir = path.resolve('frontend/dist');
const destDir = path.resolve('../gh-pages-wt');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (src.endsWith('wp-content') || src.endsWith('wp-includes') || src.endsWith('uploads') || src.endsWith('node_modules') || src.endsWith('.git')) return;
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

console.log('Copying files from dist to gh-pages...');
copyRecursive(srcDir, destDir);
console.log('Files copied.');

run('git -C ../gh-pages-wt add -A');
try {
  run('git -C ../gh-pages-wt commit -m "Deploy: prevent 404 redirect loop for static files and serve llms at root and subpath"');
} catch (e) {
  console.log('No new changes to commit in worktree.');
}
run('git -C ../gh-pages-wt push origin gh-pages');
run('git worktree remove ../gh-pages-wt --force');
console.log('Deployment completed successfully!');
