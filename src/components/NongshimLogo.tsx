import React from 'react';

export interface NongshimLogoProps {
  variant?: 'full' | 'symbol' | 'horizontal' | 'vintage' | 'watermark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * 농심(NONGSHIM) 공식 심볼 & 로고타입 벡터 컴포넌트
 * 1. 공식 심볼 (The Nongshim Seed & Sun):
 *    - 붉은 태양(정열과 발전) 안에 움트는 생명의 씨앗(농부의 정직한 땀방울과 결실)
 * 2. 1965년 롯데공업(농심의 모태) 빈티지 엠블럼
 * 3. 辛(매울 신) 전설의 캘리그래피 인장
 */
export const NongshimSymbol: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-md select-none`}
      aria-label="농심 공식 심볼"
    >
      {/* 붉은 태양 원형 배경 (Nongshim Radiant Red) */}
      <circle cx="50" cy="50" r="48" fill="#e11826" />
      <circle cx="50" cy="50" r="47" stroke="#ffffff" strokeWidth="2" opacity="0.3" />

      {/* 내부 미세한 골드 그라데이션 광배 */}
      <radialGradient id="nsSunGlow" cx="50" cy="40" r="45" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ff4d4d" />
        <stop offset="85%" stopColor="#e11826" />
        <stop offset="100%" stopColor="#b30e1a" />
      </radialGradient>
      <circle cx="50" cy="50" r="46" fill="url(#nsSunGlow)" />

      {/* 농심의 상징: 대지에서 움트는 생명의 씨앗과 새싹 (The Nongshim Sprout & Seed) */}
      {/* 1. 좌측 곡선 잎맥 */}
      <path
        d="M50 18C44 26 31 43 31 58C31 71 39 80 50 82C43 78 38 70 38 59C38 46 47 30 50 18Z"
        fill="#ffffff"
      />
      {/* 2. 우측 결실의 둥근 열매 & 싹 */}
      <path
        d="M50 24C53 32 67 44 67 58C67 70 59 79 50 82C56 79 61 71 61 59C61 48 53 34 50 24Z"
        fill="#fed7aa"
      />
      {/* 3. 중앙 태동하는 씨앗 핵 */}
      <ellipse cx="50" cy="59" rx="7.5" ry="11" fill="#ffffff" />
      <circle cx="50" cy="57" r="4.5" fill="#e11826" />
    </svg>
  );
};

export const NongshimVintageLotteBadge: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-stone-900 border border-amber-600/70 text-[10px] font-mono text-amber-300 font-bold ${className}`}
      title="1965년 롯데공업 창립 모태"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
      <span>SINCE 1965 롯데공업</span>
    </div>
  );
};

export const ShinSealMark: React.FC<{ className?: string }> = ({ className = 'w-7 h-7' }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-stone-950 p-1 border border-amber-400/80 shadow-md ${className}`}
      title="매울 辛(신) — 신춘호 회장 친필 브랜드 인장"
    >
      <span className="font-serif font-black text-amber-300 text-sm leading-none select-none">
        辛
      </span>
    </div>
  );
};

export function NongshimHeaderLogo() {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* 농심 공식 심볼 */}
      <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105">
        <NongshimSymbol className="w-10 h-10 sm:w-11 sm:h-11" />
        <div className="absolute -bottom-1 -right-1">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-widest font-black uppercase text-red-700 bg-red-100/90 px-2 py-0.5 rounded-md border border-red-300/80 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            NONGSHIM 1965 — 2026
          </span>
          <span className="text-[10px] font-mono font-bold text-stone-500 hidden sm:inline">
            한국 라면 40년 1위 종가
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight font-serif mt-0.5 flex items-center gap-2">
          <span>농심 라면의 계보</span>
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-stone-900 text-amber-300 border border-stone-700">
            60년 족보
          </span>
        </h1>
      </div>
    </div>
  );
}
