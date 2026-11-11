import { useState } from 'react';
import type { RamenProduct } from '../types/ramen';
import type { FactionNode } from '../data/factionTaxonomy';
import { LineageTree } from '../components/LineageTree';
import { FactionDrawer } from '../components/FactionDrawer';
import { FactionQuizModal } from '../components/FactionQuizModal';
import { NongshimSymbol, ShinSealMark } from '../components/NongshimLogo';
import { Search, Compass, X } from 'lucide-react';

interface GenealogyPageProps {
  onSelectProduct: (product: RamenProduct) => void;
}

export function GenealogyPage({ onSelectProduct }: GenealogyPageProps) {
  const [selectedFaction, setSelectedFaction] = useState<FactionNode | null>(null);
  const [highlightedFactionId, setHighlightedFactionId] = useState<string | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Editorial Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/90 text-amber-300 text-xs font-serif font-bold mb-4 shadow-sm border border-red-700/50">
          <NongshimSymbol className="w-4 h-4 inline-block" />
          <span>1965년 롯데공업 창립 · 1985년 이래 40년 연속 1위 종가</span>
          <span className="w-1 h-1 rounded-full bg-amber-400" />
          <span className="text-stone-300 font-sans">농심 60년 전사 아카이브</span>
        </div>

        <div className="flex items-center justify-center gap-3 mb-2">
          <h1 className="text-3xl sm:text-5xl font-black text-stone-950 font-serif tracking-tight leading-tight">
            농심 라면의 계보
          </h1>
          <ShinSealMark className="w-8 h-8 sm:w-10 sm:h-10 hidden sm:inline-flex" />
        </div>

        <p className="mt-3 text-base sm:text-lg text-stone-700 font-medium leading-relaxed">
          1965년 롯데공업에서 태동하여 대한민국 식문화를 바꾼 60년 맛의 대하드라마
        </p>
        <p className="text-xs sm:text-sm text-stone-500 mt-1 font-serif max-w-2xl mx-auto">
          소고기라면(1970)과 농심라면(1975)의 기틀 위에 너구리·안성탕면·짜파게티 삼총사, 그리고 불멸의 신라면(1986)까지 — 25개 핵심 분기점과 62종 전수 족보
        </p>

        {/* Search & Quiz Action Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
          {/* Search Input */}
          <div className="relative w-full flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="농심 라면 검색 (신라면, 안성탕면, 짜파게티, 너구리...)..."
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-red-600 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quiz Button */}
          <button
            onClick={() => setIsQuizOpen(true)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm transition whitespace-nowrap"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>나의 농심 인생라면 찾기</span>
          </button>
        </div>

        {highlightedFactionId && (
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            <span>취향 추천 계열이 강조되었습니다</span>
            <button
              onClick={() => setHighlightedFactionId(null)}
              className="underline text-[11px] text-stone-500 hover:text-stone-800 cursor-pointer"
            >
              강조 해제
            </button>
          </div>
        )}
      </div>

      {/* Main Lineage Graphic */}
      <LineageTree
        onSelectProduct={onSelectProduct}
        onOpenFactionDrawer={(faction) => setSelectedFaction(faction)}
        highlightedFactionId={highlightedFactionId}
        searchQuery={searchQuery}
      />

      {/* Slide-over Drawer for Faction Exploration */}
      <FactionDrawer
        faction={selectedFaction}
        onClose={() => setSelectedFaction(null)}
        onSelectProduct={onSelectProduct}
      />

      {/* Taste Finder Quiz Modal */}
      <FactionQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectFaction={(factionId) => {
          setHighlightedFactionId(factionId);
          // Scroll smoothly to tree
          window.scrollTo({ top: 350, behavior: 'smooth' });
        }}
        onSelectProduct={onSelectProduct}
      />
    </div>
  );
}
