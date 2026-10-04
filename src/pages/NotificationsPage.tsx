import React, { useState } from 'react';
import { mockNotifications } from '../data/mock/notifications';

export const NotificationsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [notifications, setNotifications] = useState(mockNotifications);

  const filteredNotifs = notifications.filter((n) => {
    if (activeCategory === 'all') return true;
    return n.category === activeCategory;
  });

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const toggleRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: !n.isRead } : n))
    );
  };

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#e2e8f0]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight">University Notifications & Circulars</h1>
          <p className="text-[14px] text-[#45464d]">Official department announcements, examination schedules, and campus alerts</p>
        </div>

        <button
          onClick={markAllRead}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-[#e2e8f0] hover:bg-[#f8fafc] text-[#191c1e] text-[13px] font-semibold rounded-lg shadow-sm transition-colors cursor-pointer self-start sm:self-auto"
        >
          <span className="material-symbols-outlined text-[18px]">done_all</span>
          <span>Mark All as Read</span>
        </button>
      </div>

      {/* CATEGORY FILTERS */}
      <div className="flex flex-wrap items-center gap-1.5">
        {[
          { key: 'all', label: 'All Circulars' },
          { key: 'official', label: 'Official / Admin' },
          { key: 'exam', label: 'Examinations' },
          { key: 'department', label: 'CSE Department' },
          { key: 'campus', label: 'Campus Life' },
        ].map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
              activeCategory === cat.key
                ? 'bg-[#131b2e] text-white shadow-sm'
                : 'bg-white text-[#45464d] border border-[#e2e8f0] hover:bg-[#e6e8ea]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* NOTIFICATIONS LIST */}
      <div className="flex flex-col gap-4">
        {filteredNotifs.map((notif) => (
          <div
            key={notif.id}
            onClick={() => toggleRead(notif.id)}
            className={`p-5 rounded-xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer ${
              !notif.isRead
                ? 'bg-white border-[#0d50d5]/30 shadow-sm ring-1 ring-[#0d50d5]/10'
                : 'bg-[#f8fafc] border-[#e2e8f0] opacity-80'
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${
                  !notif.isRead ? 'bg-[#dbe1ff] text-[#00174d]' : 'bg-[#e6e8ea] text-[#76777d]'
                }`}
              >
                <span className="material-symbols-outlined text-[22px]">
                  {notif.category === 'exam'
                    ? 'assignment'
                    : notif.category === 'official'
                    ? 'campaign'
                    : 'info'}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[15px] font-bold text-[#191c1e]">{notif.title}</span>
                  {!notif.isRead && (
                    <span className="w-2 h-2 rounded-full bg-[#0d50d5]" title="Unread" />
                  )}
                  {notif.isPinned && (
                    <span className="px-2 py-0.5 rounded bg-[#dbe1ff] text-[#00174d] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">push_pin</span>
                      Official Circular
                    </span>
                  )}
                </div>

                <p className="text-[13px] text-[#45464d] leading-relaxed">{notif.body}</p>

                <div className="flex items-center gap-3 mt-1 text-[11px] text-[#76777d]">
                  <span className="font-semibold text-[#191c1e]">{notif.author}</span>
                  <span>•</span>
                  <span>{notif.timestamp}</span>
                </div>
              </div>
            </div>

            {notif.attachmentPdf && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Downloading ${notif.attachmentPdf}`);
                }}
                className="px-3.5 py-1.5 bg-[#f2f4f6] hover:bg-[#e6e8ea] text-[#191c1e] text-[12px] font-semibold rounded-lg flex items-center gap-1.5 shrink-0 self-start md:self-center cursor-pointer transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-[#0d50d5]">download</span>
                <span>Download PDF</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
