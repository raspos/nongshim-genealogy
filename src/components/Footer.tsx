import { VisitorCounter } from './VisitorCounter';
import { NongshimSymbol, NongshimVintageLotteBadge } from './NongshimLogo';

interface FooterProps {
  onOpenMethodology: () => void;
}

export function Footer({ onOpenMethodology }: FooterProps) {
  return (
    <footer className="border-t border-stone-300 bg-[#efebe1] py-12 text-stone-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="space-y-3 max-w-md">
          <div className="flex items-center gap-2.5 flex-wrap">
            <NongshimSymbol className="w-6 h-6" />
            <span className="font-black text-stone-900 text-lg font-serif">농심 라면의 계보</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold border border-red-200">
              NONGSHIM ARCHIVE
            </span>
            <a
              href="https://raspos.github.io/databrew/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-red-800 hover:text-stone-950 font-black underline underline-offset-2 ml-1"
            >
              by databrew
            </a>
          </div>

          <div className="pt-1">
            <NongshimVintageLotteBadge />
          </div>

          <p className="text-stone-600 leading-relaxed">
            "1965년 롯데공업 설립부터 1985년 대한민국 1위 등극, 그리고 세계인의 식탁까지" — 60년 농심 라면의 정통 족보와 고유한 조리 데이터, 영양성분 및 전설의 모디슈머 조합을 집대성한 데이터저널리즘 아카이브입니다.
          </p>
          <div className="pt-1 text-[11px] text-stone-500">
            데이터 출처: (주)농심 60년사 · 한국소비자원(2026.11) · 식품의약품안전처 라면영양DB · 나무위키 농심 역사고증
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            농심 데이터 원칙 및 고지
          </h4>
          <ul className="space-y-1.5 text-stone-600">
            <li>
              <button
                type="button"
                onClick={onOpenMethodology}
                className="hover:text-stone-900 underline cursor-pointer"
              >
                분석 방법론 및 데이터 신뢰도 기준
              </button>
            </li>
            <li>• 본 아카이브는 공시 데이터 및 역사적 사료를 바탕으로 구축된 비상업적 학술·연구용 데이터저널리즘입니다.</li>
            <li>• 라면 조합 연구소의 궁합 점수는 농심 제품 간 배합 공식에 기초한 규칙 기반 알고리즘입니다.</li>
            <li>• 단종 제품(롯데라면, 소고기라면 등)의 스펙은 당시 출시 문헌 및 농심 역사관 사료에 의거합니다.</li>
          </ul>
        </div>
      </div>

      {/* Visitor Counter Section (Hongdam Craft Style) */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex justify-center">
        <VisitorCounter />
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6 pt-6 border-t border-stone-300/70 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span>©</span>
          <a
            href="https://raspos.github.io/databrew/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-black text-stone-800 hover:text-red-700 underline underline-offset-2 transition-colors"
          >
            databrew
          </a>
          <span>· 농심 라면의 계보 (The Genealogy of Nongshim Ramen). All rights reserved.</span>
        </div>
        <span className="flex items-center gap-1 font-medium">
          한국 라면 40년 1위 종가, 농심 60년 역사에 헌정합니다.
        </span>
      </div>
    </footer>
  );
}
