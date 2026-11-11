const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const targetDir = 'C:\\Users\\kimwo\\.gemini\\antigravity\\brain\\dd0bf1ef-262d-4557-ac43-e949e220d38c';
const tmpOut = path.join(targetDir, 'preview_footer_verify.png');
const tmpProfile = `C:\\Users\\kimwo\\AppData\\Local\\Temp\\chrome_footer_${Date.now()}`;

// Take a screenshot of the bottom of the page
const htmlInject = `
  const script = document.createElement('script');
  script.textContent = "window.scrollTo(0, document.body.scrollHeight);";
  document.body.appendChild(script);
`;

const cmd = `"${chrome}" --headless=new --disable-gpu --virtual-time-budget=3000 --user-data-dir="${tmpProfile}" --window-size=1280,1800 --screenshot="${tmpOut}" http://localhost:4174`;
try {
  execSync(cmd, { timeout: 30000 });
  console.log('Successfully captured', tmpOut, fs.statSync(tmpOut).size, 'bytes');
} catch (e) {
  console.error(e.message);
}
