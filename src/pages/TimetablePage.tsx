import React, { useState } from 'react';
import { mockTimetable } from '../data/mock/timetable';

export const TimetablePage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'>('Friday');

  const days: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday')[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];

  const timeSlots = [
    { start: '09:00 AM', end: '10:30 AM' },
    { start: '11:00 AM', end: '12:30 PM' },
    { start: '02:00 PM', end: '03:30 PM' },
  ];

  const daySessions = mockTimetable.filter((s) => s.day === selectedDay);

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#e2e8f0]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight">Academic Timetable</h1>
          <p className="text-[14px] text-[#45464d]">Weekly class schedule • Autumn Term 2024-25</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#047857] text-[12px] font-semibold border border-[#A7F3D0]">
            Visakhapatnam Campus • ICT Bhavan & Science Block
          </span>
        </div>
      </div>

      {/* MOBILE DAY SELECTOR (< 768px) */}
      <div className="md:hidden flex items-center gap-1.5 overflow-x-auto pb-1">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedDay === day
                ? 'bg-[#131b2e] text-white shadow-sm'
                : 'bg-white text-[#45464d] border border-[#e2e8f0]'
            }`}
          >
            {day} {day === 'Friday' ? '(Today)' : ''}
          </button>
        ))}
      </div>

      {/* MOBILE STACKED LIST (< 768px) */}
      <div className="md:hidden flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-[#191c1e]">{selectedDay}'s Classes</h2>
        {daySessions.length === 0 ? (
          <div className="p-8 bg-white rounded-xl border border-[#e2e8f0] text-center text-[#76777d]">
            No scheduled classes for {selectedDay}.
          </div>
        ) : (
          daySessions.map((session) => (
            <div
              key={session.id}
              className={`p-4 rounded-xl border bg-white shadow-sm flex flex-col gap-2 ${
                session.isNext ? 'border-[#0d50d5] ring-1 ring-[#0d50d5]/30' : 'border-[#e2e8f0]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold text-[#0d50d5]">
                  {session.timeStart} - {session.timeEnd}
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#e6e8ea] text-[#191c1e]">
                  {session.type}
                </span>
              </div>
              <h3 className="text-[16px] font-bold text-[#191c1e]">{session.courseTitle}</h3>
              <div className="text-[12px] text-[#45464d] flex items-center gap-2">
                <span className="font-semibold text-[#0d50d5]">{session.courseCode}</span>
                <span>•</span>
                <span>{session.building}, {session.room}</span>
              </div>
              <div className="text-[11px] text-[#76777d]">Faculty: {session.instructor}</div>
            </div>
          ))
        )}
      </div>

      {/* DESKTOP WEEKLY GRID (>= 768px) */}
      <div className="hidden md:block bg-white rounded-xl border border-[#e2e8f0] shadow-sm overflow-hidden">
        <div className="grid grid-cols-6 bg-[#f8fafc] border-b border-[#e2e8f0] text-[12px] font-bold uppercase text-[#76777d] p-3 text-center">
          <div className="col-span-1">Time Slot</div>
          {days.map((d) => (
            <div key={d} className={`col-span-1 ${d === 'Friday' ? 'text-[#0d50d5]' : ''}`}>
              {d} {d === 'Friday' ? '(Today)' : ''}
            </div>
          ))}
        </div>

        <div className="divide-y divide-[#e2e8f0]">
          {timeSlots.map((slot, idx) => (
            <div key={idx} className="grid grid-cols-6 min-h-[110px]">
              {/* Time Column */}
              <div className="col-span-1 p-4 bg-[#f8fafc] border-r border-[#e2e8f0] flex flex-col items-center justify-center text-center">
                <span className="text-[12px] font-bold text-[#191c1e]">{slot.start}</span>
                <span className="material-symbols-outlined text-[14px] text-[#76777d]">arrow_downward</span>
                <span className="text-[12px] font-bold text-[#191c1e]">{slot.end}</span>
              </div>

              {/* Days Columns */}
              {days.map((day) => {
                const match = mockTimetable.find(
                  (s) => s.day === day && s.timeStart === slot.start
                );

                return (
                  <div
                    key={day}
                    className={`col-span-1 p-2 border-r border-[#e2e8f0] flex flex-col justify-between transition-colors ${
                      day === 'Friday' ? 'bg-[#f8fafc]/50' : ''
                    }`}
                  >
                    {match ? (
                      <div
                        className={`p-3 rounded-lg border h-full flex flex-col justify-between ${
                          match.isNext
                            ? 'bg-[#dbe1ff] border-[#0d50d5] text-[#00174d] shadow-sm'
                            : 'bg-white border-[#e2e8f0] text-[#191c1e] hover:border-[#0d50d5]/40'
                        }`}
                      >
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-[#0d50d5]">{match.courseCode}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#f2f4f6] text-[#45464d] font-semibold">
                              {match.type}
                            </span>
                          </div>
                          <span className="text-[12px] font-bold leading-tight line-clamp-2">{match.courseTitle}</span>
                        </div>
                        <div className="text-[10px] text-[#45464d] mt-2 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">location_on</span>
                          <span className="truncate">{match.room}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-[11px] text-[#c6c6cd]">
                        — Free Slot —
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
