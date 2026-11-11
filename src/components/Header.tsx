import { NavLink } from 'react-router-dom';
import { GitFork, FlaskConical, Trophy, BookOpen } from 'lucide-react';
import { NongshimHeaderLogo } from './NongshimLogo';

interface HeaderProps {
  onOpenMethodology?: () => void;
}

export function Header({ onOpenMethodology: _onOpenMethodology }: HeaderProps) {
  const navItems = [
    { to: '/', label: '라면의 계보', icon: GitFork, end: true },
    { to: '/lab', label: '라면 조합 연구소', icon: FlaskConical },
    { to: '/ranking', label: '라면 랭킹', icon: Trophy },
    { to: '/encyclopedia', label: '라면 도감', icon: BookOpen },
  ];

  // 라면의 계보 클릭 시 새로고침 (초기화)
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
        {/* Brand Logo & databrew badge */}
        <div className="flex items-center gap-3">
          <a
            href="#/"
            onClick={handleReloadToHome}
            className="group flex items-center gap-3 select-none cursor-pointer"
            title="농심 라면의 계보 홈으로 (클릭 시 새로고침)"
          >
            <NongshimHeaderLogo />
          </a>
          <a
            href="https://raspos.github.io/databrew/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="hidden lg:inline text-xs font-black text-stone-500 hover:text-red-700 underline underline-offset-2 transition-colors ml-1"
            title="databrew 방문하기"
          >
            © databrew
          </a>
        </div>

        {/* 4 Independent Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-1 md:pb-0 text-xs sm:text-sm font-medium">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={(e) => {
                  if (item.to === '/' && (window.location.hash === '#/' || window.location.hash === '')) {
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
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
