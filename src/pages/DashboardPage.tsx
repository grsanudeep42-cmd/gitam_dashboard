import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockStudent } from '../data/mock/student';
import { mockAttendanceRecords } from '../data/mock/attendance';
import { mockAssignments } from '../data/mock/assignments';
import { mockNotifications } from '../data/mock/notifications';
import { mockTimetable } from '../data/mock/timetable';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [scheduleFilter, setScheduleFilter] = useState<'all' | 'lecture' | 'lab'>('all');

  const todaySessions = mockTimetable.filter((s) => s.day === 'Friday');

  const filteredSessions = todaySessions.filter((s) => {
    if (scheduleFilter === 'lecture') return s.type === 'Lecture';
    if (scheduleFilter === 'lab') return s.type === 'Lab';
    return true;
  });

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Top Greeting & Real-time Academic Status */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight">
              Good morning, {mockStudent.name.split(' ')[0]}
            </h1>
            <span
              className="inline-flex items-center justify-center p-1 rounded-full bg-[#0d50d5]/10 text-[#0d50d5]"
              title="Verified Student Record"
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </span>
          </div>
          <p className="text-[14px] text-[#45464d]">
            Here's what's happening with your academics today across Visakhapatnam campus.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Live Next Class Alert Pill */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white shadow-sm border border-[#e2e8f0] text-[#191c1e]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d50d5] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0d50d5]"></span>
            </span>
            <span className="text-[12px] font-semibold text-[#191c1e]">Next: CSE201 (Room 304)</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#dbe1ff] text-[#00174d] font-bold">
              in 35m
            </span>
          </div>

          {/* Good Standing Indicator */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f2f4f6] text-[#45464d] text-[12px] font-medium">
            <span className="material-symbols-outlined text-[16px] text-[#047857]">check_circle</span>
            <span>Status: {mockStudent.academicStanding}</span>
          </div>

          {/* Date Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f2f4f6] text-[#45464d] text-[12px] font-medium">
            <span className="material-symbols-outlined text-[16px] text-[#76777d]">today</span>
            <span>Fri, Oct 6, 2024</span>
          </div>
        </div>
      </div>

      {/* 4 Compact Analytical Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat 1: Attendance */}
        <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#76777d] font-semibold">Overall Attendance</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-[30px] leading-[36px] font-bold text-[#191c1e] tabular-nums">86.4%</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#ECFDF5] text-[#047857]">
                  +11.4% safe
                </span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#f2f4f6] flex items-center justify-center text-[#047857]">
              <span className="material-symbols-outlined text-[22px]">how_to_reg</span>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            <div className="w-full bg-[#e6e8ea] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#047857] h-1.5 rounded-full transition-all duration-500" style={{ width: '86.4%' }}></div>
            </div>
            <span className="text-[11px] text-[#45464d]">Requirement: Min 75.0% for end-term exams</span>
          </div>
        </div>

        {/* Stat 2: CGPA */}
        <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#76777d] font-semibold">Cumulative GPA</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-[30px] leading-[36px] font-bold text-[#191c1e] tabular-nums">8.42</span>
                <span className="text-[13px] text-[#76777d] font-medium">/ 10.0</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#dbe1ff] flex items-center justify-center text-[#00174d]">
              <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-[11px]">
            <span className="text-[#45464d] font-medium">Top 8% CSE Cohort</span>
            <span className="px-1.5 py-0.5 rounded font-bold bg-[#0d50d5]/10 text-[#0d50d5]">+0.07 vs Sem 2</span>
          </div>
        </div>

        {/* Stat 3: Registered Credits */}
        <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#76777d] font-semibold">Registered Credits</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-[30px] leading-[36px] font-bold text-[#191c1e] tabular-nums">18</span>
                <span className="text-[13px] text-[#76777d] font-medium">/ 24 Max</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#f2f4f6] flex items-center justify-center text-[#45464d]">
              <span className="material-symbols-outlined text-[22px]">layers</span>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            <div className="w-full bg-[#e6e8ea] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#0d50d5] h-1.5 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
            </div>
            <span className="text-[11px] text-[#45464d]">6 enrolled (4 Core Theory, 2 Labs)</span>
          </div>
        </div>

        {/* Stat 4: Student Details */}
        <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#76777d] font-semibold">Enrollment & Cohort</span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-[20px] font-bold text-[#191c1e]">Semester 3</span>
                <span className="px-1.5 py-0.5 rounded text-[11px] font-semibold bg-[#e6e8ea] text-[#45464d]">Sec B</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#f2f4f6] flex items-center justify-center text-[#191c1e]">
              <span className="material-symbols-outlined text-[22px]">school</span>
            </div>
          </div>
          <div className="mt-4 flex flex-col text-[11px] text-[#45464d] truncate">
            <span className="font-semibold text-[#191c1e] truncate">{mockStudent.program}</span>
            <span className="text-[#76777d] truncate">Reg ID: {mockStudent.rollNumber}</span>
          </div>
        </div>
      </div>

      {/* Asymmetric Workspace Split: 8 cols (65%) & 4 cols (35%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT ANALYTICAL WORKSPACE (Columns 1-7/8) */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
          {/* TODAY'S SCHEDULE SECTION */}
          <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-sm p-5 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-[#f1f5f9]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0d50d5] text-[22px]">schedule</span>
                <h2 className="text-[20px] font-bold text-[#191c1e]">Today's Schedule</h2>
                <span className="px-2 py-0.5 rounded-full bg-[#f2f4f6] text-[#45464d] text-[11px] font-semibold">
                  3 Sessions
                </span>
              </div>

              {/* Filter Toggles */}
              <div className="inline-flex p-0.5 rounded-lg bg-[#f2f4f6] self-start sm:self-auto">
                <button
                  onClick={() => setScheduleFilter('all')}
                  className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
                    scheduleFilter === 'all' ? 'bg-white shadow-sm text-[#191c1e]' : 'text-[#45464d] hover:text-[#191c1e]'
                  }`}
                >
                  All (3)
                </button>
                <button
                  onClick={() => setScheduleFilter('lecture')}
                  className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
                    scheduleFilter === 'lecture' ? 'bg-white shadow-sm text-[#191c1e]' : 'text-[#45464d] hover:text-[#191c1e]'
                  }`}
                >
                  Lectures (2)
                </button>
                <button
                  onClick={() => setScheduleFilter('lab')}
                  className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
                    scheduleFilter === 'lab' ? 'bg-white shadow-sm text-[#191c1e]' : 'text-[#45464d] hover:text-[#191c1e]'
                  }`}
                >
                  Labs (1)
                </button>
              </div>
            </div>

            {/* Schedule Items List */}
            <div className="flex flex-col gap-3">
              {filteredSessions.map((session) => (
                <div
                  key={session.id}
                  className={`p-4 rounded-xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    session.isNext
                      ? 'bg-white border-[#0d50d5]/30 shadow-md ring-1 ring-[#0d50d5]/20'
                      : 'bg-white border-[#e2e8f0] shadow-sm hover:bg-[#f8fafc]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex flex-col items-center justify-center min-w-[80px] py-2 px-2.5 rounded-lg text-center ${
                        session.isNext ? 'bg-[#dbe1ff] text-[#00174d]' : 'bg-[#f2f4f6] text-[#191c1e]'
                      }`}
                    >
                      <span className="text-[11px] font-bold uppercase tracking-wider">{session.timeStart}</span>
                      <span className="material-symbols-outlined text-[14px] my-0.5 text-[#76777d]">arrow_downward</span>
                      <span className="text-[11px] font-bold uppercase tracking-wider">{session.timeEnd}</span>
                    </div>

                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[16px] font-bold text-[#191c1e]">{session.courseTitle}</span>
                        {session.isNext && (
                          <span className="px-2 py-0.5 rounded-full bg-[#0d50d5] text-white text-[11px] font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                            Starting in 35m
                          </span>
                        )}
                        {session.type === 'Lab' && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#ffdcc3] text-[#2f1500]">
                            Lab Practical
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-[13px] text-[#45464d]">
                        <span className="font-semibold text-[#0d50d5]">{session.courseCode}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px] text-[#76777d]">location_on</span>
                          {session.building}, {session.room}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px] text-[#76777d]">person</span>
                          {session.instructor}
                        </span>
                      </div>

                      {session.notes && (
                        <div className="mt-1 flex items-center gap-1.5 text-[#b45309] text-[11px] font-medium">
                          <span className="material-symbols-outlined text-[14px]">warning</span>
                          <span>{session.notes}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                    <button
                      onClick={() => navigate(`/courses/${session.courseCode.toLowerCase().replace('l', '')}`)}
                      className="px-3 py-1.5 rounded-lg bg-[#e6e8ea] hover:bg-[#eceef0] text-[#191c1e] text-[12px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">menu_book</span>
                      <span>Course Details</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UPCOMING ASSIGNMENTS & DEADLINES */}
          <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-sm p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-1 border-b border-[#f1f5f9]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0d50d5] text-[22px]">assignment</span>
                <h2 className="text-[20px] font-bold text-[#191c1e]">Upcoming Submissions & Exams</h2>
              </div>
              <button
                onClick={() => navigate('/assignments')}
                className="text-[12px] font-semibold text-[#0d50d5] hover:underline flex items-center gap-0.5 cursor-pointer"
              >
                View All ({mockAssignments.length})
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {mockAssignments.slice(0, 3).map((asg) => (
                <div
                  key={asg.id}
                  className="p-4 rounded-xl border border-[#e2e8f0] bg-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#f8fafc] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                        asg.status === 'due_tomorrow'
                          ? 'bg-[#FFF1F2] text-[#BE123C]'
                          : 'bg-[#dbe1ff] text-[#00174d]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {asg.status === 'due_tomorrow' ? 'warning' : 'code'}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[15px] font-bold text-[#191c1e]">{asg.title}</span>
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider ${
                            asg.status === 'due_tomorrow'
                              ? 'bg-[#FFF1F2] text-[#BE123C]'
                              : 'bg-[#ECFDF5] text-[#047857]'
                          }`}
                        >
                          {asg.statusLabel}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-[13px] text-[#45464d]">
                        <span className="font-semibold text-[#0d50d5]">{asg.courseCode}</span>
                        <span>•</span>
                        <span>Due {asg.dueDate}, {asg.dueTime}</span>
                        <span>•</span>
                        <span>{asg.submissionType}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                    <button
                      onClick={() => navigate('/assignments')}
                      className={`px-3.5 py-1.5 rounded-lg text-[12px] font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                        asg.status === 'due_tomorrow'
                          ? 'bg-[#0f172a] text-white hover:bg-[#1e293b]'
                          : 'bg-[#e6e8ea] text-[#191c1e] hover:bg-[#eceef0]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {asg.status === 'due_tomorrow' ? 'upload_file' : 'edit_note'}
                      </span>
                      {asg.status === 'due_tomorrow' ? 'Submit' : 'Resume'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT UTILITY & MONITORING RAIL (Columns 8/9-12) */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
          {/* ATTENDANCE TELEMETRY CARD */}
          <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-sm p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-1 border-b border-[#f1f5f9]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0d50d5] text-[22px]">fact_check</span>
                <h2 className="text-[20px] font-bold text-[#191c1e]">Attendance Telemetry</h2>
              </div>
              <button
                onClick={() => navigate('/attendance')}
                className="text-[12px] font-semibold text-[#0d50d5] hover:underline cursor-pointer"
              >
                Detailed Ledger →
              </button>
            </div>

            {/* Safe Misses Gauge Box */}
            <div className="p-4 rounded-xl bg-[#f2f4f6]/70 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#76777d]">Overall Aggregate</span>
                <span className="text-[20px] font-bold text-[#191c1e]">86.4%</span>
              </div>
              <div className="w-full bg-[#e0e3e5] h-2 rounded-full overflow-hidden">
                <div className="bg-[#047857] h-2 rounded-full" style={{ width: '86.4%' }}></div>
              </div>
              <div className="mt-2 flex items-start gap-2 bg-[#ECFDF5] p-2.5 rounded-lg text-[#047857] border border-[#A7F3D0]">
                <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">verified_user</span>
                <span className="text-[11px] leading-relaxed">
                  Safe Buffer: You can miss up to <strong>4 more lectures</strong> across subjects without dropping below mandatory 75%.
                </span>
              </div>
            </div>

            {/* Subject List */}
            <div className="flex flex-col gap-3">
              {mockAttendanceRecords.map((att) => (
                <div key={att.courseCode} className="flex flex-col gap-1 p-2 rounded-lg hover:bg-[#f8fafc] transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-[#191c1e]">{att.courseTitle}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        att.warningLevel === 'safe'
                          ? 'bg-[#ECFDF5] text-[#047857]'
                          : att.warningLevel === 'caution'
                          ? 'bg-[#FFFBEB] text-[#B45309]'
                          : 'bg-[#FFF1F2] text-[#BE123C]'
                      }`}
                    >
                      {att.attendancePercentage}% ({att.attended}/{att.total})
                    </span>
                  </div>
                  <div className="w-full bg-[#e6e8ea] h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-1.5 rounded-full ${
                        att.warningLevel === 'safe'
                          ? 'bg-[#047857]'
                          : att.warningLevel === 'caution'
                          ? 'bg-[#B45309]'
                          : 'bg-[#BE123C]'
                      }`}
                      style={{ width: `${att.attendancePercentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between text-[12px]">
              <button
                onClick={() => navigate('/attendance')}
                className="text-[#0d50d5] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">medical_services</span>
                Request Medical Leave
              </button>
            </div>
          </div>

          {/* ACADEMIC PERFORMANCE & SGPA PROGRESSION */}
          <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-sm p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-1 border-b border-[#f1f5f9]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0d50d5] text-[22px]">trending_up</span>
                <h2 className="text-[20px] font-bold text-[#191c1e]">Academic Performance</h2>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-[#f2f4f6] font-semibold text-[#191c1e]">Scale 10.0</span>
            </div>

            {/* CGPA Big Callout */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#f2f4f6]">
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-[#76777d] font-semibold">Overall CGPA</span>
                <span className="text-[30px] leading-[36px] font-bold text-[#191c1e] tabular-nums">8.42</span>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[#047857] text-[12px] font-bold">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  Honors Eligible
                </span>
                <span className="block text-[11px] text-[#45464d]">Min 8.00 maintained</span>
              </div>
            </div>

            {/* SGPA Progression */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-semibold uppercase text-[#76777d]">SGPA Progression</span>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="w-16 text-[#45464d] font-medium">Sem 1</span>
                  <div className="flex-1 mx-3 bg-[#e6e8ea] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#76777d] h-2.5 rounded-full" style={{ width: '81%' }}></div>
                  </div>
                  <span className="font-semibold text-[#191c1e] w-10 text-right">8.10</span>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="w-16 text-[#45464d] font-medium">Sem 2</span>
                  <div className="flex-1 mx-3 bg-[#e6e8ea] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#0d50d5] h-2.5 rounded-full" style={{ width: '83.5%' }}></div>
                  </div>
                  <span className="font-semibold text-[#191c1e] w-10 text-right">8.35</span>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="w-16 text-[#0d50d5] font-bold">Sem 3*</span>
                  <div className="flex-1 mx-3 bg-[#e6e8ea] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#386bef] h-2.5 rounded-full" style={{ width: '87.1%' }}></div>
                  </div>
                  <span className="font-bold text-[#0d50d5] w-10 text-right">8.71</span>
                </div>
              </div>
              <span className="text-[11px] text-[#76777d] mt-1">*Sem 3 reflects continuous internal assessment estimate</span>
            </div>

            <button
              onClick={() => navigate('/grades')}
              className="w-full py-2 px-3 rounded-lg bg-[#f2f4f6] hover:bg-[#e6e8ea] text-[#191c1e] text-[12px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">account_tree</span>
              View Degree Audit & Grade Transcript
            </button>
          </div>

          {/* CAMPUS DIGITAL CARD */}
          <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-sm p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-[#f2f4f6] flex items-center justify-center text-[#0d50d5]">
                <span className="material-symbols-outlined text-[24px]">contactless</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-[#191c1e]">Campus NFC Smart Card</span>
                <span className="text-[11px] text-[#45464d]">Active • Valid till June 2027</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/profile')}
              className="p-2 rounded-lg bg-[#f2f4f6] hover:bg-[#e6e8ea] text-[#191c1e] transition-colors cursor-pointer"
              title="Show Digital ID QR"
            >
              <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM FULL-WIDTH: OFFICIAL UNIVERSITY ANNOUNCEMENTS & CIRCULARS */}
      <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-sm p-5 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-[#f1f5f9]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0d50d5] text-[22px]">campaign</span>
            <h2 className="text-[20px] font-bold text-[#191c1e]">University Notices & Academic Circulars</h2>
          </div>
          <button
            onClick={() => navigate('/notifications')}
            className="text-[12px] font-semibold text-[#0d50d5] hover:underline cursor-pointer"
          >
            All Notices ({mockNotifications.length}) →
          </button>
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockNotifications.slice(0, 3).map((notif) => (
            <div
              key={notif.id}
              className="bg-white rounded-xl border border-[#e2e8f0] p-4 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-[#dbe1ff] text-[#00174d] flex items-center gap-1">
                    {notif.isPinned && <span className="material-symbols-outlined text-[13px]">push_pin</span>}
                    {notif.category.toUpperCase()}
                  </span>
                  <span className="text-[11px] text-[#76777d]">{notif.timestamp}</span>
                </div>
                <h3 className="text-[15px] font-bold text-[#191c1e] leading-snug">{notif.title}</h3>
                <p className="text-[13px] text-[#45464d] line-clamp-3">{notif.body}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f1f5f9] flex items-center justify-between text-[11px]">
                <span className="text-[#45464d] font-medium">{notif.author}</span>
                {notif.attachmentPdf && (
                  <span className="text-[#0d50d5] font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    PDF Attached
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
