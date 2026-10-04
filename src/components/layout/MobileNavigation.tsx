import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const bottomTabs = [
    { path: '/dashboard', label: 'Dashboard', icon: 'grid_view' },
    { path: '/courses', label: 'Courses', icon: 'menu_book' },
    { path: '/timetable', label: 'Schedule', icon: 'calendar_today' },
    { path: '/attendance', label: 'Attendance', icon: 'fact_check' },
    { path: '/assignments', label: 'Tasks', icon: 'task' },
  ];

  return (
    <>
      {/* Mobile Slide-Over Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-xs transition-opacity"
            onClick={onClose}
          />

          {/* Drawer Container */}
          <div className="relative w-72 max-w-[80vw] bg-white h-full shadow-2xl z-10">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 rounded-lg text-[#76777d] hover:bg-[#e6e8ea] transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <Sidebar onCloseMobile={onClose} />
          </div>
        </div>
      )}

      {/* Bottom Dock for Mobile Screen Sizes (< 768px) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-[#e2e8f0] z-30 flex items-center justify-around px-2 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        {bottomTabs.map((tab) => {
          const isActive = location.pathname === tab.path || (tab.path !== '/dashboard' && location.pathname.startsWith(tab.path));
          return (
            <NavLink
              key={tab.label}
              to={tab.path}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-center transition-colors ${
                isActive ? 'text-[#0d50d5] font-semibold' : 'text-[#76777d] hover:text-[#191c1e]'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] ${isActive ? 'text-[#0d50d5]' : 'text-[#76777d]'}`}>
                {tab.icon}
              </span>
              <span className="text-[10px] mt-0.5">{tab.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};
