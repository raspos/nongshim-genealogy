import React from 'react';
import { getAssetUrl } from '../utils/imageUrl';

export interface NongshimLogoProps {
  variant?: 'full' | 'symbol' | 'horizontal' | 'vintage' | 'watermark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * 농심(NONGSHIM) 공식 로고 (빨간 타원 씨앗 심볼 + 농심 워드마크)
 */
export const NongshimOfficialLogo: React.FC<{ className?: string; alt?: string }> = ({
  className = 'h-8 sm:h-9 w-auto',
  alt = '농심 NONGSHIM 공식 로고'
}) => {
  return (
    <img
      src={getAssetUrl('images/nongshim-logo-official.svg')}
      alt={alt}
      className={`inline-block object-contain select-none ${className}`}
    />
  );
};

/**
 * 농심 공식 심볼 (빨간 타원 속 발아하는 순백의 씨앗)
 */
export const NongshimSymbol: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => {
  return (
    <svg
      viewBox="48 130.9 41 34.2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-sm select-none inline-block`}
      aria-label="농심 공식 심볼마크"
    >
      {/* 바깥 흰색 테두리 / 배경 */}
      <path
        style={{ fill: '#FFF' }}
        d="m 68.390454,165.10553 c 11.046605,0 19.996211,-7.63346 19.996211,-17.04811 0,-9.42337 -8.949606,-17.05683 -19.996211,-17.05683 -11.046611,0 -20.004972,7.63347 -20.004972,17.05683 0,9.41465 8.958361,17.04811 20.004972,17.04811"
      />
      {/* 붉은 타원 (Nongshim Red #E60013) 과 중심의 하얀 발아 씨앗 */}
      <path
        style={{ fill: '#E60013' }}
        d="m 49.815661,148.05743 c 0,-8.74776 8.317868,-15.83721 18.574793,-15.83721 10.248158,0 18.566026,7.08945 18.566026,15.83721 0,8.73903 -8.317868,15.82856 -18.566026,15.82856 -10.256925,0 -18.574793,-7.08952 -18.574793,-15.82856 m 18.574793,2.68494 c 3.255194,0 5.896205,-3.80797 5.896205,-8.49333 0,-4.68542 -2.641011,-8.48461 -5.896205,-8.48461 -3.263961,0 -5.904966,3.79919 -5.904966,8.48461 0,4.68536 2.641005,8.49333 5.904966,8.49333"
      />
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
      title="매울 辛(신) — 故 신춘호 회장 친필 브랜드 인장"
    >
      <span className="font-serif font-black text-amber-300 text-sm leading-none select-none">
        辛
      </span>
    </div>
  );
};

export function NongshimHeaderLogo() {
  return (
    <div className="flex items-center gap-3.5 select-none">
      {/* 농심 공식 실제 로고 이미지 */}
      <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105 flex items-center">
        <NongshimOfficialLogo className="h-8 sm:h-9 w-auto" />
      </div>

      <div className="h-7 w-[1px] bg-stone-300 hidden sm:block" />

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-widest font-black uppercase text-red-700 bg-red-100/90 px-2 py-0.5 rounded-md border border-red-300/80 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            NONGSHIM 1965 — 2026
          </span>
          <span className="text-[10px] font-mono font-bold text-stone-500 hidden sm:inline">
            한국 라면 40년 연속 1위 종가
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-stone-950 tracking-tight font-serif mt-0.5 flex items-center gap-2">
          <span>라면의 계보</span>
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-stone-900 text-amber-300 border border-stone-700">
            60년 족보
          </span>
        </h1>
      </div>
    </div>
  );
}
