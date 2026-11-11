import { NavLink } from 'react-router-dom';
import { GitFork, FlaskConical, Trophy, BookOpen, ExternalLink } from 'lucide-react';
import { NongshimHeaderLogo } from './NongshimLogo';

interface HeaderProps {
  onOpenMethodology?: () => void;
}

export function Header({ onOpenMethodology: _onOpenMethodology }: HeaderProps) {
  // 농심 라면의 계보 클릭 시 새로고침 (초기화)
  const handleReloadToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.hash === '#/' || window.location.hash === '') {
      window.location.reload();
    } else {
      window.location.hash = '#/';
      window.location.reload();
    }
  };

  return (
    <header className="border-b border-stone-200 bg-[#faf9f5] sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
      {/* Main Masthead & Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#/"
            onClick={handleReloadToHome}
            className="group flex items-center gap-3 select-none cursor-pointer"
            title="농심 라면의 계보 홈으로 (클릭 시 새로고침)"
          >
            <NongshimHeaderLogo />
          </a>
        </div>

        {/* Navigation Tabs (농심 라면의 계보 + 라면의 계보 상단 연결) */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-1 md:pb-0 text-xs sm:text-sm font-medium">
          {/* 농심 라면의 계보 (현재 아카이브) */}
          <NavLink
            to="/"
            end
            onClick={(e) => {
              if (window.location.hash === '#/' || window.location.hash === '') {
                handleReloadToHome(e);
              }
            }}
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer text-xs sm:text-sm font-bold ${
                isActive
                  ? 'bg-stone-900 text-amber-300 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`
            }
          >
            <GitFork className="w-4 h-4" />
            <span>농심 라면의 계보</span>
          </NavLink>

          {/* 라면의 계보 (4대사 통합 아카이브 바로가기) */}
          <a
            href="https://raspos.github.io/ramen-genealogy/"
            title="삼양·농심·오뚜기·팔도 4대 명가 전체를 다룬 '라면의 계보'로 이동"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer text-xs sm:text-sm font-bold text-stone-700 hover:text-stone-950 hover:bg-stone-200/70 border border-stone-300/80 bg-stone-100/60 shadow-2xs group"
          >
            <span className="text-amber-800">🍜</span>
            <span>라면의 계보</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-300 font-bold group-hover:bg-amber-200 flex items-center gap-0.5">
              <span>통합본</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </span>
          </a>

          {/* 라면 조합 연구소 */}
          <NavLink
            to="/lab"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer text-xs sm:text-sm font-bold ${
                isActive
                  ? 'bg-stone-900 text-amber-300 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`
            }
          >
            <FlaskConical className="w-4 h-4" />
            <span>라면 조합 연구소</span>
          </NavLink>

          {/* 라면 랭킹 */}
          <NavLink
            to="/ranking"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer text-xs sm:text-sm font-bold ${
                isActive
                  ? 'bg-stone-900 text-amber-300 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`
            }
          >
            <Trophy className="w-4 h-4" />
            <span>라면 랭킹</span>
          </NavLink>

          {/* 라면 도감 */}
          <NavLink
            to="/encyclopedia"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer text-xs sm:text-sm font-bold ${
                isActive
                  ? 'bg-stone-900 text-amber-300 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`
            }
          >
            <BookOpen className="w-4 h-4" />
            <span>라면 도감</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
