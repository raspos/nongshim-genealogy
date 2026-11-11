import React from 'react';
import type {
  HistoricalEpoch,
  HistoricalEventMilestone,
  LineageLegendNode,
  LineageEdge,
} from '../data/historicalGenealogyData';
import { getAssetUrl } from '../utils/imageUrl';
import { ArrowDown, Flame, Sparkles, Trophy, Award, Crown } from 'lucide-react';

interface MobileVerticalTreeProps {
  nodes: LineageLegendNode[];
  edges: LineageEdge[];
  epochs: HistoricalEpoch[];
  milestones: HistoricalEventMilestone[];
  activeNodeId?: string | null;
  onClearActiveNode?: () => void;
  onSelectNode: (node: LineageLegendNode) => void;
  onSelectMilestone: (milestone: HistoricalEventMilestone) => void;
}

export function MobileVerticalTree({
  nodes,
  epochs,
  milestones,
  activeNodeId,
  onClearActiveNode,
  onSelectNode,
  onSelectMilestone,
}: MobileVerticalTreeProps) {
  const getNode = (id: string) => nodes.find((n) => n.id === id);

  const getEpochIcon = (epochId: string) => {
    switch (epochId) {
      case 'epoch-1-founding':
        return <Award className="w-4 h-4 text-amber-400" />;
      case 'epoch-2-independence':
        return <Sparkles className="w-4 h-4 text-emerald-400" />;
      case 'epoch-3-golden-trio':
        return <Trophy className="w-4 h-4 text-yellow-400" />;
      case 'epoch-4-shin-dynasty':
        return <Crown className="w-4 h-4 text-red-500" />;
      case 'epoch-5-premium-wellness':
        return <Flame className="w-4 h-4 text-orange-400" />;
      case 'epoch-6-crossover-global':
        return <Sparkles className="w-4 h-4 text-rose-400" />;
      default:
        return <Award className="w-4 h-4 text-amber-400" />;
    }
  };

  const getEpochMilestone = (epochId: string) => {
    return milestones.find((m) => m.epochId === epochId);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6 pb-16 text-stone-900 overflow-hidden relative">
      {/* Sticky Floating Reset Pill on Mobile */}
      {activeNodeId && (
        <div className="sticky top-2 z-40 flex items-center justify-between p-3 bg-stone-950/95 border-2 border-amber-400 rounded-2xl shadow-2xl text-white backdrop-blur-md animate-fadeIn">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <span className="font-bold text-amber-300">
              [{getNode(activeNodeId)?.name}] 추적 중
            </span>
          </div>
          <button
            type="button"
            onClick={onClearActiveNode}
            className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white font-black text-xs rounded-xl flex items-center gap-1 cursor-pointer transition active:scale-95 shadow-md"
          >
            <span>전체 복귀</span>
          </button>
        </div>
      )}

      {/* Intro Header */}
      <div className="text-center p-5 rounded-3xl bg-stone-950 text-white shadow-xl border border-stone-800">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white font-black text-[11px] font-mono mb-2 border border-red-500">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          NONGSHIM CHRONICLE
        </span>
        <h3 className="text-xl font-black font-serif tracking-tight text-white">
          농심 60년 라면의 계보
        </h3>
        <p className="text-xs text-stone-300 mt-1.5 font-medium leading-relaxed">
          1965년 롯데라면부터 2026년 글로벌 K-라면 정상까지, 농심이 써 내려간 25대 명작 족보를 세로로 조망합니다.
        </p>
      </div>

      {/* Epoch Iteration */}
      {epochs.map((epoch, index) => {
        const epochNodes = nodes.filter((n) => n.epochId === epoch.id);
        const milestone = getEpochMilestone(epoch.id);

        return (
          <React.Fragment key={epoch.id}>
            <section className="bg-white rounded-3xl p-4 sm:p-5 border border-stone-300 shadow-sm space-y-3.5 relative">
              {/* Epoch Header Banner */}
              <div className="flex items-start justify-between gap-3 border-b border-stone-200 pb-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-stone-900 text-amber-300 font-mono">
                      {getEpochIcon(epoch.id)}
                      {epoch.period}
                    </span>
                    <span className="text-[10px] font-serif font-bold text-stone-500">
                      {epoch.hanja}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-black font-serif text-stone-950 leading-snug">
                    {epoch.name}
                  </h4>
                  <p className="text-[11px] text-stone-600 mt-1 font-medium line-clamp-2">
                    {epoch.headline}
                  </p>
                </div>
              </div>

              {/* Milestone Event Button if Available */}
              {milestone && (
                <button
                  type="button"
                  onClick={() => onSelectMilestone(milestone)}
                  className="w-full p-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 border border-amber-300 flex items-center justify-between gap-2 text-left cursor-pointer transition shadow-2xs"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
                    <span className="text-xs font-serif font-black text-amber-950 truncate">
                      {milestone.year}년: {milestone.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-200 px-2 py-0.5 rounded-full shrink-0">
                    역사 비화
                  </span>
                </button>
              )}

              {/* Product Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {epochNodes.map((node) => {
                  const isSelected = activeNodeId === node.id;
                  return (
                    <ProductMiniCard
                      key={node.id}
                      node={node}
                      isSelected={isSelected}
                      onClick={() => onSelectNode(node)}
                      badgeColor="bg-red-700 text-white"
                      borderColor={isSelected ? 'border-amber-400' : 'border-stone-200'}
                    />
                  );
                })}
              </div>
            </section>

            {/* Epoch Connector Arrow */}
            {index < epochs.length - 1 && (
              <div className="flex items-center justify-center my-1">
                <div className="w-8 h-8 rounded-full bg-stone-200 border border-stone-300 flex items-center justify-center text-stone-600 shadow-2xs">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// Mini Card Subcomponent optimized for touch
function ProductMiniCard({
  node,
  compact = false,
  dark = false,
  isSelected = false,
  badgeColor,
  borderColor,
  onClick,
}: {
  node: LineageLegendNode;
  compact?: boolean;
  dark?: boolean;
  isSelected?: boolean;
  badgeColor: string;
  borderColor?: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-2.5 rounded-2xl flex items-center gap-2.5 text-left cursor-pointer transition hover:scale-101 border relative ${
        isSelected
          ? 'bg-stone-900 text-white ring-4 ring-amber-400 border-amber-400 shadow-xl'
          : dark
          ? 'bg-stone-900/90 text-white hover:bg-stone-850'
          : 'bg-stone-50 text-stone-900 hover:bg-stone-100'
      } ${borderColor || 'border-stone-200'}`}
    >
      <div
        className={`${
          compact ? 'w-10 h-10' : 'w-12 h-12'
        } rounded-xl bg-white p-1 border border-stone-200 flex items-center justify-center shrink-0 overflow-hidden shadow-2xs`}
      >
        <img
          src={getAssetUrl(node.imageUrl)}
          alt={node.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className={`text-[9px] px-1.5 py-0.2 rounded font-black font-mono ${badgeColor}`}>
            {node.releaseYear}
          </span>
          <span
            className={`text-[9px] font-bold truncate ${
              dark || isSelected ? 'text-stone-400' : 'text-stone-500'
            }`}
          >
            {node.historicalRole}
          </span>
        </div>

        <h5
          className={`text-xs font-black truncate ${
            dark || isSelected ? 'text-white' : 'text-stone-950'
          }`}
        >
          {node.name}
        </h5>

        {!compact && (
          <p
            className={`text-[10px] line-clamp-1 mt-0.5 font-medium ${
              dark || isSelected ? 'text-stone-400' : 'text-stone-600'
            }`}
          >
            {node.doctrineQuote ? node.doctrineQuote.replace(/[“”"]/g, '') : node.historicalContext}
          </p>
        )}
      </div>

      {isSelected && (
        <span className="shrink-0 text-[10px] font-black bg-rose-600 text-white px-2 py-0.5 rounded-full shadow-sm">
          해제
        </span>
      )}
    </button>
  );
}
