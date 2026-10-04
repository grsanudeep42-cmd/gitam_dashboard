import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onOpenMobileNav?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileNav }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const getBreadcrumb = () => {
    const path = location.pathname;
    if (path === '/dashboard' || path === '/') return { parent: 'Dashboard', current: 'Academic Overview' };
    if (path.startsWith('/courses')) return { parent: 'Academics', current: 'Enrolled Courses' };
    if (path.startsWith('/timetable')) return { parent: 'Academics', current: 'Weekly Timetable' };
    if (path.startsWith('/attendance')) return { parent: 'Academics', current: 'Attendance Telemetry' };
    if (path.startsWith('/grades')) return { parent: 'Academics', current: 'Grades & SGPA Transcript' };
    if (path.startsWith('/assignments')) return { parent: 'Tasks', current: 'Submissions & Deadlines' };
    if (path.startsWith('/exams')) return { parent: 'Academics', current: 'Examination Schedule' };
    if (path.startsWith('/notifications')) return { parent: 'General', current: 'Notices & Circulars' };
    if (path.startsWith('/profile')) return { parent: 'Student', current: 'Academic Profile' };
    if (path.startsWith('/settings')) return { parent: 'Account', current: 'Portal Settings' };
    return { parent: 'Dashboard', current: 'Academic Portal' };
  };

  const breadcrumb = getBreadcrumb();

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="h-16 bg-white/95 backdrop-blur-xl border-b border-[#e2e8f0] sticky top-0 z-40 flex items-center justify-between px-4 sm:px-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Left Area: Mobile Toggle & Breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileNav}
          className="lg:hidden p-2 rounded-lg text-[#45464d] hover:bg-[#e6e8ea] transition-colors"
          aria-label="Open Mobile Menu"
        >
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 text-[13px] text-[#45464d]">
            <span className="hover:text-[#191c1e] cursor-pointer font-medium">{breadcrumb.parent}</span>
            <span className="text-[#c6c6cd]">/</span>
            <span className="text-[#191c1e] font-semibold">{breadcrumb.current}</span>
          </div>

          <span className="px-2 py-0.5 rounded bg-[#dbe1ff] text-[#00174d] text-[11px] font-semibold whitespace-nowrap">
            Autumn Term 2024-25
          </span>
        </div>
      </div>

      {/* Right Area: Search, Date, Notifications, Avatar */}
      <div className="flex items-center gap-3">
        {/* Search Field */}
        <div className="relative hidden md:flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-[#76777d] text-[18px]">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            placeholder="Search courses, assignments... [Cmd + K]"
            className="h-[38px] w-64 lg:w-80 pl-9 pr-4 bg-[#f7f9fb] rounded-lg text-[13px] text-[#191c1e] placeholder-[#76777d] focus:outline-none focus:ring-2 focus:ring-[#0d50d5]/20 border border-[#e2e8f0] shadow-sm"
          />
        </div>

        {/* Date Badge */}
        <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 bg-[#f2f4f6] rounded-lg text-[#45464d] text-[12px] font-medium">
          <span className="material-symbols-outlined text-[16px] text-[#0d50d5]">calendar_month</span>
          <span>Friday, Oct 6, 2024 • Week 7</span>
        </div>

        {/* Notifications Button */}
        <button
          onClick={() => navigate('/notifications')}
          className="relative p-2 rounded-lg text-[#45464d] hover:bg-[#e6e8ea] hover:text-[#191c1e] transition-colors"
          title="View Notifications"
        >
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#ba1a1a] ring-2 ring-white" />
        </button>

        {/* User Profile Avatar Link */}
        <button
          onClick={() => navigate('/profile')}
          className="flex items-center gap-1.5 pl-1 cursor-pointer group"
          title="View Profile"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
            alt="Profile Avatar"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-[#0d50d5]/20 group-hover:ring-[#0d50d5] transition-all"
          />
          <span className="material-symbols-outlined text-[#76777d] text-[18px]">expand_more</span>
        </button>
      </div>
    </header>
  );
};
