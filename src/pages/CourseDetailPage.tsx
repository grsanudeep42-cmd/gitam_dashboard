import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockCourses } from '../data/mock/courses';
import { mockAttendanceRecords } from '../data/mock/attendance';

export const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'attendance' | 'grades' | 'resources'>('overview');

  const course = mockCourses.find(
    (c) => c.code.toLowerCase() === courseId?.toLowerCase() || c.id === courseId
  ) || mockCourses[0];

  const attendanceData = mockAttendanceRecords.find(
    (a) => a.courseCode.toLowerCase() === course.code.toLowerCase()
  ) || mockAttendanceRecords[0];

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Back Button & Header */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => navigate('/courses')}
          className="self-start inline-flex items-center gap-1 text-[13px] font-semibold text-[#0d50d5] hover:underline cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Back to All Courses</span>
        </button>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 bg-white rounded-xl border border-[#e2e8f0] shadow-sm">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[#131b2e] text-white text-[12px] font-bold tracking-wider">
                {course.code}
              </span>
              <span className="text-[12px] font-semibold text-[#0d50d5] uppercase tracking-wider">{course.type}</span>
              <span className="px-2 py-0.5 rounded bg-[#f2f4f6] text-[#45464d] text-[11px] font-semibold">
                {course.credits} Credits
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#191c1e]">{course.title}</h1>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-[13px] text-[#45464d]">
              <span className="font-semibold text-[#191c1e]">{course.instructor}</span>
              <span>({course.instructorTitle})</span>
              <span>•</span>
              <span>{course.building}, {course.room}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t lg:border-t-0 lg:border-l border-[#e2e8f0] pt-4 lg:pt-0 lg:pl-6">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wider text-[#76777d] font-semibold">Attendance</span>
              <span className="text-[24px] font-bold text-[#191c1e]">{course.attendancePercentage}%</span>
            </div>
            <div className="flex flex-col border-l border-[#e2e8f0] pl-4">
              <span className="text-[11px] uppercase tracking-wider text-[#76777d] font-semibold">Internal Score</span>
              <span className="text-[24px] font-bold text-[#0d50d5]">
                {course.internalScore} <span className="text-[14px] text-[#76777d]">/ 40</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex items-center gap-2 border-b border-[#e2e8f0] bg-white px-4 rounded-xl border">
        {[
          { key: 'overview', label: 'Course Overview', icon: 'menu_book' },
          { key: 'attendance', label: 'Attendance Telemetry', icon: 'fact_check' },
          { key: 'grades', label: 'Internal Grades', icon: 'workspace_premium' },
          { key: 'resources', label: 'Learning Resources', icon: 'folder_open' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`flex items-center gap-2 px-4 py-3 text-[13px] font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === tab.key
                ? 'border-[#0d50d5] text-[#0d50d5]'
                : 'border-transparent text-[#76777d] hover:text-[#191c1e]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* TAB CONTENTS */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Description */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col gap-3">
              <h2 className="text-[18px] font-bold text-[#191c1e]">Course Description</h2>
              <p className="text-[14px] text-[#45464d] leading-relaxed">{course.description}</p>
            </div>

            {/* Syllabus Modules */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-bold text-[#191c1e]">Syllabus Coverage</h2>
                <span className="text-[12px] font-semibold text-[#0d50d5]">
                  {course.completedModulesCount} of {course.syllabusModulesCount} Modules Completed
                </span>
              </div>
              <div className="space-y-2">
                {course.syllabusOverview.map((mod, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg border flex items-center justify-between text-[13px] ${
                      i < course.completedModulesCount
                        ? 'bg-[#ECFDF5]/50 border-[#A7F3D0] text-[#047857]'
                        : 'bg-white border-[#e2e8f0] text-[#191c1e]'
                    }`}
                  >
                    <span className="font-semibold">{mod}</span>
                    <span className="material-symbols-outlined text-[18px]">
                      {i < course.completedModulesCount ? 'check_circle' : 'hourglass_empty'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Instructor Box */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-sm flex flex-col gap-3">
              <h3 className="text-[16px] font-bold text-[#191c1e]">Course Instructor</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#f2f4f6] flex items-center justify-center text-[#0d50d5] font-bold text-lg">
                  {course.instructor[4] || 'D'}
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-[#191c1e]">{course.instructor}</span>
                  <span className="text-[11px] text-[#45464d]">{course.instructorTitle}</span>
                  <span className="text-[11px] text-[#0d50d5] mt-0.5">Faculty Office: {course.building} Room 402</span>
                </div>
              </div>
            </div>

            {/* Timetable schedule info */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-sm flex flex-col gap-3">
              <h3 className="text-[16px] font-bold text-[#191c1e]">Weekly Class Schedule</h3>
              <div className="space-y-2 text-[13px] text-[#45464d]">
                <div className="flex items-center justify-between p-2 rounded bg-[#f2f4f6]">
                  <span>Monday & Friday</span>
                  <span className="font-semibold text-[#191c1e]">09:00 AM - 10:30 AM</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#f2f4f6]">
                  <span>Thursday (Lab Practical)</span>
                  <span className="font-semibold text-[#191c1e]">11:00 AM - 01:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'attendance' && (
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col gap-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9]">
            <div>
              <h2 className="text-[18px] font-bold text-[#191c1e]">Attendance Ledger & History</h2>
              <p className="text-[13px] text-[#45464d]">Individual lecture log for {course.code}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[14px] font-bold text-[#047857] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#A7F3D0]">
                {attendanceData.attendancePercentage}% ({attendanceData.attended}/{attendanceData.total} Lectures)
              </span>
            </div>
          </div>

          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="bg-[#f8fafc] text-[#76777d] uppercase text-[11px] font-semibold border-b border-[#e2e8f0]">
                <th className="p-3">Date</th>
                <th className="p-3">Lecture Topic</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f5f9]">
              {attendanceData.history.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#f8fafc]">
                  <td className="p-3 font-semibold text-[#191c1e]">{item.date}</td>
                  <td className="p-3 text-[#45464d]">{item.topic}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        item.status === 'Present'
                          ? 'bg-[#ECFDF5] text-[#047857]'
                          : item.status === 'Absent'
                          ? 'bg-[#FFF1F2] text-[#BE123C]'
                          : 'bg-[#FFFBEB] text-[#B45309]'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'grades' && (
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col gap-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9]">
            <div>
              <h2 className="text-[18px] font-bold text-[#191c1e]">Internal Assessment Breakdown</h2>
              <p className="text-[13px] text-[#45464d]">Continuous evaluation components for {course.code}</p>
            </div>
            <span className="text-[20px] font-bold text-[#0d50d5]">
              Total: {course.internalScore} / 40
            </span>
          </div>

          <div className="space-y-3">
            {course.assessmentBreakdown.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] flex items-center justify-between">
                <span className="font-semibold text-[#191c1e] text-[14px]">{item.name}</span>
                <span className="text-[16px] font-bold text-[#0d50d5]">
                  {item.score} / {item.maxScore}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'resources' && (
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col gap-4">
          <h2 className="text-[18px] font-bold text-[#191c1e]">Course Reference Material & Downloads</h2>
          <div className="space-y-3">
            {[
              { name: 'Lecture Slide Deck 8: Red-Black Trees Balancing.pdf', size: '4.2 MB', type: 'PDF' },
              { name: 'Lab Manual 4: Advanced Graph Algorithms.pdf', size: '2.8 MB', type: 'PDF' },
              { name: 'Sample Question Paper - Mid Semester Exam 2023.pdf', size: '1.5 MB', type: 'PDF' },
            ].map((res, i) => (
              <div key={i} className="p-4 rounded-xl border border-[#e2e8f0] flex items-center justify-between hover:bg-[#f8fafc]">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[24px] text-[#0d50d5]">description</span>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-[#191c1e]">{res.name}</span>
                    <span className="text-[11px] text-[#45464d]">{res.size} • Uploaded by Faculty</span>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-[#0d50d5] text-white text-[12px] font-semibold hover:bg-[#0b43b3] transition-colors flex items-center gap-1 cursor-pointer">
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
