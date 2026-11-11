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

// Convert images to base64 so Chrome renders them 100% reliably without file:// permission blocks
function toBase64Src(relPath, mimeType) {
  const abs = path.join(rootDir, relPath);
  const data = fs.readFileSync(abs).toString('base64');
  return `data:${mimeType};base64,${data}`;
}

const logoSvg = toBase64Src('public/images/nongshim-logo-white.svg', 'image/svg+xml');
const img1965 = toBase64Src('public/images/products/lotte-ramyun-1965.png', 'image/png');
const img1975 = toBase64Src('public/images/products/nongshim-ramyun-1975.png', 'image/png');
const imgNeoguri = toBase64Src('public/images/products/neoguri.jpg', 'image/jpeg');
const imgAnseong = toBase64Src('public/images/products/anseongtangmyeon.jpg', 'image/jpeg');
const imgChapagetti = toBase64Src('public/images/products/chapagetti.jpg', 'image/jpeg');
const imgShin = toBase64Src('public/images/products/shin-ramyun.jpg', 'image/jpeg');
const imgChapaguri = toBase64Src('public/images/products/chapaguri-bowl.jpg', 'image/jpeg');

const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Noto Sans KR', 'Malgun Gothic', 'Apple SD Gothic Neo', sans-serif; }
  body {
    width: 1200px;
    height: 630px;
    background: radial-gradient(circle at 75% 30%, #300808 0%, #170505 55%, #0a0202 100%);
    position: relative;
    overflow: hidden;
    color: #fff;
    display: flex;
    padding: 48px 56px;
    justify-content: space-between;
  }
  .bg-pattern {
    position: absolute;
    inset: 0;
    opacity: 0.05;
    background-image: radial-gradient(#fff 1px, transparent 1px);
    background-size: 20px 20px;
  }
  .glow-red {
    position: absolute;
    top: 50px;
    right: 80px;
    width: 550px;
    height: 550px;
    background: radial-gradient(circle, rgba(230, 0, 19, 0.45) 0%, transparent 70%);
    pointer-events: none;
  }
  .glow-gold {
    position: absolute;
    bottom: -100px;
    left: 200px;
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%);
    pointer-events: none;
  }

  /* Left Side: Brand & Title Info */
  .left-col {
    width: 530px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
  }
  .top-brand {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .logo-img {
    height: 46px;
    width: auto;
  }
  .brand-badge {
    background: rgba(230, 0, 19, 0.25);
    border: 1px solid rgba(230, 0, 19, 0.6);
    color: #ff8585;
    padding: 6px 14px;
    border-radius: 9999px;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.5px;
  }
  .center-info {
    margin-top: 15px;
  }
  .sub-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    color: #fbbf24;
    padding: 6px 14px;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .sub-pill::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e60013;
  }
  .main-title {
    font-size: 56px;
    font-weight: 900;
    letter-spacing: -1.5px;
    line-height: 1.15;
    background: linear-gradient(180deg, #ffffff 0%, #f4f4f5 70%, #d4d4d8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .sub-title {
    font-size: 19px;
    color: #cbd5e1;
    font-weight: 600;
    margin-top: 12px;
    line-height: 1.4;
  }
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
  }
  .stat-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    padding: 10px 14px;
    display: flex;
    flex-direction: column;
  }
  .stat-card .val {
    font-size: 20px;
    font-weight: 900;
    color: #fbbf24;
    font-family: monospace;
  }
  .stat-card .lbl {
    font-size: 12px;
    color: #94a3b8;
    font-weight: 600;
    margin-top: 2px;
  }
  .left-footer {
    font-size: 13px;
    color: #64748b;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 14px;
  }

  /* Right Side: Big, Appetizing, Real Product Packaging Showcase */
  .right-col {
    width: 580px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  .showcase-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    width: 100%;
  }
  .product-box {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.02) 100%);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
    position: relative;
    backdrop-filter: blur(8px);
  }
  .product-box.highlight {
    border: 2px solid #ef4444;
    background: linear-gradient(145deg, rgba(230, 0, 19, 0.25) 0%, rgba(20, 5, 5, 0.6) 100%);
    box-shadow: 0 0 35px rgba(230, 0, 19, 0.5);
    transform: scale(1.04);
  }
  .img-holder {
    width: 140px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
  }
  .img-holder img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6));
  }
  .tag-year {
    font-size: 11px;
    font-weight: 800;
    color: #fbbf24;
    font-family: monospace;
    margin-top: 6px;
  }
  .tag-name {
    font-size: 14px;
    font-weight: 900;
    color: #ffffff;
    margin-top: 2px;
    white-space: nowrap;
  }
  .product-box.highlight .tag-name {
    color: #fecaca;
  }
  .product-box.highlight .tag-year {
    color: #ef4444;
  }
  .badge-1st {
    position: absolute;
    top: 8px;
    right: 8px;
    background: #dc2626;
    color: #fff;
    font-size: 10px;
    font-weight: 900;
    padding: 2px 7px;
    border-radius: 9999px;
  }
</style>
</head>
<body>
  <div class="bg-pattern"></div>
  <div class="glow-red"></div>
  <div class="glow-gold"></div>

  <!-- Left Column -->
  <div class="left-col">
    <div class="top-brand">
      <img class="logo-img" src="${logoSvg}" alt="농심 로고" />
      <span class="brand-badge">NONGSHIM OFFICIAL ARCHIVE</span>
    </div>

    <div class="center-info">
      <div class="sub-pill">1965년 창립 ~ 2026년 60년 역사</div>
      <h1 class="main-title">농심 라면의 계보</h1>
      <p class="sub-title">
        한국 라면 40년 1위 종가의 60년 족보<br>
        소고기라면·안성탕면·짜파게티부터 불멸의 신라면까지
      </p>

      <div class="stats-grid">
        <div class="stat-card">
          <span class="val">1965년</span>
          <span class="lbl">농심 창립 1호</span>
        </div>
        <div class="stat-card">
          <span class="val">40년 연속</span>
          <span class="lbl">대한민국 시장 점유율 1위</span>
        </div>
        <div class="stat-card">
          <span class="val">25대 기수</span>
          <span class="lbl">핵심 라면 족보도</span>
        </div>
        <div class="stat-card">
          <span class="val">62종 전수</span>
          <span class="lbl">데이터저널리즘 아카이브</span>
        </div>
      </div>
    </div>

    <div class="left-footer">
      데이터저널리즘 인터랙티브 아카이브 · (주)농심 60년 사료 고증
    </div>
  </div>

  <!-- Right Column: Big High-Res Product Photos -->
  <div class="right-col">
    <div class="showcase-grid">
      <!-- 1. 1965 롯데라면 -->
      <div class="product-box">
        <div class="img-holder">
          <img src="${img1965}" alt="1965 롯데라면" />
        </div>
        <span class="tag-year">1965</span>
        <span class="tag-name">롯데라면</span>
      </div>

      <!-- 2. 1975 농심라면 -->
      <div class="product-box">
        <div class="img-holder">
          <img src="${img1975}" alt="1975 농심라면" />
        </div>
        <span class="tag-year">1975</span>
        <span class="tag-name">농심라면</span>
      </div>

      <!-- 3. 1982 너구리 -->
      <div class="product-box">
        <div class="img-holder">
          <img src="${imgNeoguri}" alt="1982 너구리" />
        </div>
        <span class="tag-year">1982</span>
        <span class="tag-name">너구리</span>
      </div>

      <!-- 4. 1983 안성탕면 -->
      <div class="product-box">
        <div class="img-holder">
          <img src="${imgAnseong}" alt="1983 안성탕면" />
        </div>
        <span class="tag-year">1983</span>
        <span class="tag-name">안성탕면</span>
      </div>

      <!-- 5. 1986 신라면 (HIGHLIGHT HERO) -->
      <div class="product-box highlight">
        <span class="badge-1st">1위 종가</span>
        <div class="img-holder">
          <img src="${imgShin}" alt="1986 신라면" />
        </div>
        <span class="tag-year">1986</span>
        <span class="tag-name">신라면</span>
      </div>

      <!-- 6. 1984 짜파게티 -->
      <div class="product-box">
        <div class="img-holder">
          <img src="${imgChapagetti}" alt="1984 짜파게티" />
        </div>
        <span class="tag-year">1984</span>
        <span class="tag-name">짜파게티</span>
      </div>
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync(templatePath, htmlContent, 'utf-8');
console.log('HTML written to:', templatePath);

const tmpProfile = `C:\\Users\\kimwo\\AppData\\Local\\Temp\\chrome_og_hero_${Date.now()}`;
const fileUrl = `file:///${templatePath.replace(/\\/g, '/')}`;
const cmd = `"${chrome}" --headless=new --disable-gpu --virtual-time-budget=3000 --user-data-dir="${tmpProfile}" --window-size=1200,630 --screenshot="${outPng}" "${fileUrl}"`;

console.log('Capturing 1200x630 Hero OG image with Big Product Photos...');
execSync(cmd, { timeout: 30000 });
console.log('Captured PNG:', fs.statSync(outPng).size, 'bytes');

fs.copyFileSync(outPng, outJpg);
console.log('Successfully updated og-image.png and og-image.jpg!');
