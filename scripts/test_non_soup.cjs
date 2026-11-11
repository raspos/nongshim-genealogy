const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const targetDir = 'C:\\Users\\kimwo\\.gemini\\antigravity\\brain\\dd0bf1ef-262d-4557-ac43-e949e220d38c';
const tmpOut = path.join(targetDir, 'preview_non_soup_verify.png');
const tmpProfile = `C:\\Users\\kimwo\\AppData\\Local\\Temp\\chrome_non_soup_${Date.now()}`;

// Build first to ensure preview serves updated code
console.log('Building...');
execSync('npm run build', { stdio: 'inherit' });

// We can click the button using a small page action
const cmd = `"${chrome}" --headless=new --disable-gpu --virtual-time-budget=4000 --user-data-dir="${tmpProfile}" --window-size=1280,1000 --screenshot="${tmpOut}" http://localhost:4174`;
try {
  execSync(cmd, { timeout: 30000 });
  console.log('Captured', tmpOut, fs.statSync(tmpOut).size, 'bytes');
} catch (e) {
  console.error(e.message);
}
