const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const rootDir = path.resolve(__dirname, '..');
const templatePath = path.join(rootDir, 'public', 'og-template.html');
const outPng = path.join(rootDir, 'public', 'og-image.png');
const outJpg = path.join(rootDir, 'public', 'og-image.jpg');

function toFileUrl(relPath) {
  const abs = path.join(rootDir, relPath).replace(/\\/g, '/');
  return `file:///${abs}`;
}

const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Malgun Gothic', sans-serif; }
  body {
    width: 1200px;
    height: 630px;
    background: radial-gradient(circle at 80% 20%, #2a0808 0%, #170707 50%, #0d0404 100%);
    position: relative;
    overflow: hidden;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 44px 54px;
  }
  .bg-pattern {
    position: absolute;
    inset: 0;
    opacity: 0.04;
    background-image: radial-gradient(#fff 1px, transparent 1px);
    background-size: 24px 24px;
  }
  .accent-glow {
    position: absolute;
    top: -120px;
    right: -100px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(230, 0, 19, 0.35) 0%, transparent 70%);
    pointer-events: none;
  }
  .accent-glow-2 {
    position: absolute;
    bottom: -150px;
    left: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(217, 119, 6, 0.2) 0%, transparent 70%);
    pointer-events: none;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .logo-img {
    height: 44px;
    width: auto;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5));
  }
  .badge {
    background: rgba(230, 0, 19, 0.2);
    border: 1px solid rgba(230, 0, 19, 0.5);
    color: #ff6b6b;
    padding: 5px 14px;
    border-radius: 9999px;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.5px;
  }
  .top-stats {
    display: flex;
    gap: 10px;
  }
  .stat-pill {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 6px 14px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 700;
    color: #e5e5e5;
  }
  .stat-pill strong {
    color: #fbbf24;
    font-family: monospace;
  }
  .main-content {
    position: relative;
    z-index: 2;
    margin-top: 6px;
  }
  .sub-tag {
    font-size: 17px;
    font-weight: 700;
    color: #f59e0b;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .sub-tag::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e60013;
  }
  .title {
    font-size: 50px;
    font-weight: 900;
    letter-spacing: -1px;
    line-height: 1.15;
    background: linear-gradient(180deg, #ffffff 0%, #f3f4f6 70%, #d1d5db 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .desc {
    font-size: 17px;
    color: #a8a29e;
    margin-top: 6px;
    font-weight: 500;
  }
  .showcase {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 14px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    padding: 16px 18px;
    backdrop-filter: blur(12px);
  }
  .product-card {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  }
  .prod-img-wrap {
    width: 86px;
    height: 86px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.14);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.4);
    margin-bottom: 6px;
  }
  .prod-img-wrap img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
  }
  .prod-year {
    font-size: 11px;
    font-weight: 800;
    color: #f59e0b;
    font-family: monospace;
  }
  .prod-name {
    font-size: 12px;
    font-weight: 800;
    color: #ffffff;
    margin-top: 1px;
    white-space: nowrap;
  }
  .arrow {
    color: rgba(255,255,255,0.3);
    font-size: 15px;
    font-weight: bold;
    user-select: none;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 14px;
  }
  .footer-left {
    font-size: 13px;
    color: #78716c;
  }
  .footer-right {
    font-size: 13px;
    font-weight: 700;
    color: #fbbf24;
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>
</head>
<body>
  <div class="bg-pattern"></div>
  <div class="accent-glow"></div>
  <div class="accent-glow-2"></div>

  <div class="header">
    <div class="brand">
      <img class="logo-img" src="${toFileUrl('public/images/nongshim-logo-white.svg')}" alt="농심" />
      <span class="badge">NONGSHIM ARCHIVE</span>
    </div>
    <div class="top-stats">
      <div class="stat-pill"><strong>1965</strong> 창립 족보</div>
      <div class="stat-pill"><strong>40년</strong> 연속 1위</div>
      <div class="stat-pill"><strong>25대</strong> 핵심 기수</div>
      <div class="stat-pill"><strong>62종</strong> 전수 DB</div>
    </div>
  </div>

  <div class="main-content">
    <div class="sub-tag">한국 라면 40년 1위 종가의 60년 맛의 족보 (1965 ~ 2026)</div>
    <div class="title">농심 라면의 계보</div>
    <div class="desc">1965년 창립부터 소고기라면·농심라면, 너구리·안성탕면·짜파게티, 불멸의 신라면과 세계를 사로잡은 K-퓨전까지</div>
  </div>

  <div class="showcase">
    <div class="product-card">
      <div class="prod-img-wrap">
        <img src="${toFileUrl('public/images/products/lotte-ramyun-1965.png')}" />
      </div>
      <span class="prod-year">1965</span>
      <span class="prod-name">롯데라면</span>
    </div>
    <div class="arrow">→</div>
    <div class="product-card">
      <div class="prod-img-wrap">
        <img src="${toFileUrl('public/images/products/lotte-beef-1970.png')}" />
      </div>
      <span class="prod-year">1970</span>
      <span class="prod-name">소고기라면</span>
    </div>
    <div class="arrow">→</div>
    <div class="product-card">
      <div class="prod-img-wrap">
        <img src="${toFileUrl('public/images/products/nongshim-ramyun-1975.png')}" />
      </div>
      <span class="prod-year">1975</span>
      <span class="prod-name">농심라면</span>
    </div>
    <div class="arrow">→</div>
    <div class="product-card">
      <div class="prod-img-wrap">
        <img src="${toFileUrl('public/images/products/neoguri.jpg')}" />
      </div>
      <span class="prod-year">1982</span>
      <span class="prod-name">너구리</span>
    </div>
    <div class="arrow">→</div>
    <div class="product-card">
      <div class="prod-img-wrap">
        <img src="${toFileUrl('public/images/products/anseongtangmyeon.jpg')}" />
      </div>
      <span class="prod-year">1983</span>
      <span class="prod-name">안성탕면</span>
    </div>
    <div class="arrow">→</div>
    <div class="product-card">
      <div class="prod-img-wrap">
        <img src="${toFileUrl('public/images/products/chapagetti.jpg')}" />
      </div>
      <span class="prod-year">1984</span>
      <span class="prod-name">짜파게티</span>
    </div>
    <div class="arrow">→</div>
    <div class="product-card">
      <div class="prod-img-wrap" style="border-color: rgba(230,0,19,0.7); box-shadow: 0 0 20px rgba(230,0,19,0.4);">
        <img src="${toFileUrl('public/images/products/shin-ramyun.jpg')}" />
      </div>
      <span class="prod-year" style="color:#ef4444;">1986</span>
      <span class="prod-name" style="color:#fca5a5;">신라면</span>
    </div>
    <div class="arrow">→</div>
    <div class="product-card">
      <div class="prod-img-wrap">
        <img src="${toFileUrl('public/images/products/chapaguri-bowl.jpg')}" />
      </div>
      <span class="prod-year">2020</span>
      <span class="prod-name">짜파구리</span>
    </div>
    <div class="arrow">→</div>
    <div class="product-card">
      <div class="prod-img-wrap">
        <img src="${toFileUrl('public/images/products/shin-toomba-bigbowl.jpg')}" />
      </div>
      <span class="prod-year">2024</span>
      <span class="prod-name">신라면 툼바</span>
    </div>
  </div>

  <div class="footer">
    <div class="footer-left">데이터저널리즘 인터랙티브 아카이브 · (주)농심 60년사 사료 고증</div>
    <div class="footer-right">60 YEARS OF NONGSHIM HERITAGE</div>
  </div>
</body>
</html>`;

fs.writeFileSync(templatePath, htmlContent, 'utf-8');
console.log('HTML written to:', templatePath);

const tmpProfile = `C:\\Users\\kimwo\\AppData\\Local\\Temp\\chrome_og_${Date.now()}`;
const fileUrl = `file:///${templatePath.replace(/\\/g, '/')}`;
const cmd = `"${chrome}" --headless=new --disable-gpu --virtual-time-budget=3000 --user-data-dir="${tmpProfile}" --window-size=1200,630 --screenshot="${outPng}" "${fileUrl}"`;

console.log('Capturing 1200x630 OG image...');
execSync(cmd, { timeout: 30000 });
console.log('Captured PNG:', fs.statSync(outPng).size, 'bytes');

// Also create og-image.jpg
fs.copyFileSync(outPng, outJpg);
console.log('Successfully updated og-image.png and og-image.jpg!');
