import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface NavItem {
  path: string;
  label: string;
  icon: string;
  badge?: string;
  dot?: boolean;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

interface SidebarProps {
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onCloseMobile }) => {
  const location = useLocation();

  const navSections: NavSection[] = [
    {
      items: [
        { path: '/dashboard', label: 'Dashboard', icon: 'grid_view' },
      ],
    },
    {
      title: 'Academics',
      items: [
        { path: '/courses', label: 'Courses', icon: 'menu_book' },
        { path: '/timetable', label: 'Timetable', icon: 'calendar_today' },
        { path: '/attendance', label: 'Attendance', icon: 'fact_check' },
        { path: '/grades', label: 'Grades', icon: 'workspace_premium' },
        { path: '/exams', label: 'Examination', icon: 'assignment_turned_in' },
      ],
    },
    {
      title: 'Tasks & Resources',
      items: [
        { path: '/assignments', label: 'Assignments', icon: 'task', badge: '2 due' },
        { path: '/timetable', label: 'Schedule', icon: 'event' },
        { path: '/courses', label: 'Academic Resources', icon: 'folder_open' },
      ],
    },
    {
      title: 'General',
      items: [
        { path: '/notifications', label: 'Notifications', icon: 'notifications', dot: true },
        { path: '/settings', label: 'Settings', icon: 'settings' },
        { path: '/profile', label: 'Student Profile', icon: 'person' },
      ],
    },
  ];


  return (
    <aside className="w-72 bg-white flex flex-col h-full border-r border-[#e2e8f0] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Brand Header */}
      <div className="p-4 flex flex-col gap-1 bg-white border-b border-[#f1f5f9]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#0d50d5] flex items-center justify-center text-white font-bold text-base tracking-wider shadow-sm">
            G
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[18px] text-[#191c1e] tracking-tight leading-tight">GITAM</span>
            <span className="text-[10px] text-[#0d50d5] font-semibold uppercase tracking-wider">Deemed to be University</span>
          </div>
        </div>
        <div className="mt-1.5 flex items-center gap-1.5 px-2 py-1 rounded bg-[#f2f4f6] text-[#45464d] text-[11px] font-medium">
          <span className="material-symbols-outlined text-[14px] text-[#0d50d5]">location_on</span>
          <span>Visakhapatnam Campus • Student Portal</span>
        </div>
      </div>

      {/* Navigation list */}
      <nav className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {navSections.map((section, idx) => (
          <div key={idx} className="space-y-1">
            {section.title && (
              <div className="px-2 py-1 text-[11px] uppercase tracking-wider text-[#76777d] font-semibold">
                {section.title}
              </div>
            )}
            {section.items.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={onCloseMobile}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors text-[13px] font-medium ${
                    isActive
                      ? 'bg-[#131b2e] text-white font-semibold shadow-sm'
                      : 'text-[#45464d] hover:bg-[#e6e8ea] hover:text-[#191c1e]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-white' : 'text-[#76777d]'}`}>
                    {item.icon}
                  </span>
                  <span className="flex-1 truncate">{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 rounded bg-[#ffdad6] text-[#93000a] text-[10px] font-semibold">
                      {item.badge}
                    </span>
                  )}
                  {item.dot && !isActive && <span className="w-2 h-2 rounded-full bg-[#0d50d5]" />}
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0d50d5]" />}
                </NavLink>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Bottom Student Card */}
      <div className="p-3 bg-[#f2f4f6]/70 border-t border-[#e2e8f0]">
        <NavLink
          to="/profile"
          onClick={onCloseMobile}
          className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-[#eceef0] transition-colors cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
          />
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold text-[#191c1e] truncate">Anudeep Varma</div>
            <div className="text-[11px] text-[#45464d] truncate">B.Tech CSE • Sem 3 • ID: 2023001482</div>
          </div>
          <span className="material-symbols-outlined text-[#76777d] text-[18px]">unfold_more</span>
        </NavLink>
      </div>
    </aside>
  );
};
