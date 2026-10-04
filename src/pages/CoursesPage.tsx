import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { mockCourses } from '../data/mock/courses';
import type { CourseStatus } from '../types';

export const CoursesPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedFilter, setSelectedFilter] = useState<'all' | CourseStatus | 'past'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedSemester, setSelectedSemester] = useState('Semester 3 (Autumn 2024-25)');

  const filteredCourses = useMemo(() => {
    return mockCourses.filter((course) => {
      // Filter tab
      if (selectedFilter !== 'all') {
        if (selectedFilter === 'past') return false; // Current view shows active semester
        if (course.status !== selectedFilter) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          course.code.toLowerCase().includes(q) ||
          course.title.toLowerCase().includes(q) ||
          course.instructor.toLowerCase().includes(q) ||
          course.building.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <div className="flex flex-col w-full gap-6">
      {/* PAGE HEADER & ACTION CONTROLS */}
      <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2 border-b border-[#e2e8f0]">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#0d50d5] font-bold">
            <span>School of Technology</span>
            <span className="text-[#c6c6cd]">•</span>
            <span>Computer Science & Engineering</span>
          </div>
          <div className="flex items-baseline gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight">Courses</h1>
            <span className="text-[14px] text-[#45464d]">Enrolled coursework & academic progression</span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Semester Selector */}
          <div className="relative">
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="appearance-none bg-white text-[#191c1e] text-[13px] font-semibold pl-4 pr-9 py-2 rounded-lg border border-[#e2e8f0] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d50d5]/20 cursor-pointer hover:bg-[#f8fafc]"
            >
              <option>Semester 3 (Autumn 2024-25)</option>
              <option>Semester 2 (Spring 2023-24)</option>
              <option>Semester 1 (Autumn 2023-24)</option>
            </select>
            <span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#76777d] text-[18px]">
              expand_more
            </span>
          </div>

          {/* Download PDF Syllabus */}
          <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#e2e8f0] hover:bg-[#f8fafc] text-[#191c1e] text-[13px] font-semibold rounded-lg shadow-sm transition-all cursor-pointer">
            <span className="material-symbols-outlined text-[18px] text-[#0d50d5]">picture_as_pdf</span>
            <span>Scheme & Syllabus (PDF)</span>
          </button>

          {/* Add Elective CTA */}
          <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0f172a] text-white hover:bg-[#1e293b] text-[13px] font-semibold rounded-lg shadow-sm transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>Add Elective</span>
          </button>
        </div>
      </section>

      {/* COURSE SUMMARY METRIC STRIP */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-[11px] text-[#45464d] font-semibold uppercase tracking-wider">Enrolled Courses</span>
            <div className="w-8 h-8 rounded-lg bg-[#f2f4f6] flex items-center justify-center text-[#191c1e]">
              <span className="material-symbols-outlined text-[18px]">school</span>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-[30px] leading-[36px] font-bold text-[#191c1e] tabular-nums">6</span>
              <span className="text-[13px] font-semibold text-[#45464d]">Active Courses</span>
            </div>
            <p className="text-[11px] text-[#45464d] mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0d50d5]"></span>
              <span>4 Core Theory</span>
              <span className="text-[#c6c6cd]">•</span>
              <span>2 Practical Labs</span>
            </p>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-[11px] text-[#45464d] font-semibold uppercase tracking-wider">Registered Credits</span>
            <div className="w-8 h-8 rounded-lg bg-[#dbe1ff] text-[#00174d] flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">token</span>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-[30px] leading-[36px] font-bold text-[#191c1e] tabular-nums">18</span>
              <span className="text-[13px] font-semibold text-[#45464d]">Credits Earned/Term</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-[11px]">
              <span className="text-[#45464d]">Limit: 24 Max</span>
              <span className="font-semibold text-[#0d50d5]">75% Academic Load</span>
            </div>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-[11px] text-[#45464d] font-semibold uppercase tracking-wider">Average Attendance</span>
            <div className="w-8 h-8 rounded-lg bg-[#f2f4f6] text-[#0d50d5] flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-[30px] leading-[36px] font-bold text-[#191c1e] tabular-nums">86.4%</span>
              <span className="px-1.5 py-0.5 rounded bg-[#ECFDF5] text-[#047857] text-[11px] font-semibold">
                Safe
              </span>
            </div>
            <p className="text-[11px] text-[#45464d] mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#0d50d5]">trending_up</span>
              <span className="text-[#191c1e] font-semibold">+11.4%</span>
              <span>above 75% threshold</span>
            </p>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-[11px] text-[#45464d] font-semibold uppercase tracking-wider">Cumulative GPA</span>
            <div className="w-8 h-8 rounded-lg bg-[#ffdcc3] text-[#2f1500] flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-[30px] leading-[36px] font-bold text-[#191c1e] tabular-nums">8.42</span>
              <span className="text-[13px] text-[#45464d]">/ 10.0</span>
            </div>
            <p className="text-[11px] text-[#45464d] mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0d50d5]"></span>
              <span className="font-semibold text-[#0d50d5]">Top 8% in CSE Dept</span>
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH, FILTER PILLS & VIEW TOGGLES */}
      <section className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#131b2e] text-white shadow-sm'
                : 'bg-white text-[#45464d] border border-[#e2e8f0] hover:bg-[#e6e8ea]'
            }`}
          >
            All Courses ({mockCourses.length})
          </button>
          <button
            onClick={() => setSelectedFilter('on-track')}
            className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
              selectedFilter === 'on-track'
                ? 'bg-[#131b2e] text-white shadow-sm'
                : 'bg-white text-[#45464d] border border-[#e2e8f0] hover:bg-[#e6e8ea]'
            }`}
          >
            On Track (4)
          </button>
          <button
            onClick={() => setSelectedFilter('needs-attention')}
            className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
              selectedFilter === 'needs-attention'
                ? 'bg-[#131b2e] text-white shadow-sm'
                : 'bg-white text-[#45464d] border border-[#e2e8f0] hover:bg-[#e6e8ea]'
            }`}
          >
            Needs Attention (1)
          </button>
          <button
            onClick={() => setSelectedFilter('warning')}
            className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
              selectedFilter === 'warning'
                ? 'bg-[#131b2e] text-white shadow-sm'
                : 'bg-white text-[#45464d] border border-[#e2e8f0] hover:bg-[#e6e8ea]'
            }`}
          >
            Attendance Warning (1)
          </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          {/* Search Input */}
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-[#76777d] text-[18px]">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search code or faculty..."
              className="h-[36px] w-56 sm:w-64 pl-9 pr-4 bg-white border border-[#e2e8f0] rounded-lg text-[13px] text-[#191c1e] placeholder-[#76777d] focus:outline-none focus:ring-2 focus:ring-[#0d50d5]/20 shadow-sm"
            />
          </div>

          {/* View Switcher */}
          <div className="flex items-center bg-white border border-[#e2e8f0] p-0.5 rounded-lg shadow-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded transition-colors flex items-center justify-center cursor-pointer ${
                viewMode === 'grid' ? 'bg-[#e6e8ea] text-[#191c1e]' : 'text-[#76777d] hover:text-[#191c1e]'
              }`}
              title="Grid View"
            >
              <span className="material-symbols-outlined text-[18px]">grid_view</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded transition-colors flex items-center justify-center cursor-pointer ${
                viewMode === 'list' ? 'bg-[#e6e8ea] text-[#191c1e]' : 'text-[#76777d] hover:text-[#191c1e]'
              }`}
              title="List View"
            >
              <span className="material-symbols-outlined text-[18px]">view_agenda</span>
            </button>
          </div>
        </div>
      </section>

      {/* COURSES GRID / LIST */}
      {filteredCourses.length === 0 ? (
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-12 text-center flex flex-col items-center justify-center gap-3">
          <span className="material-symbols-outlined text-[48px] text-[#76777d]">search_off</span>
          <h3 className="text-[18px] font-bold text-[#191c1e]">No courses match your filter</h3>
          <p className="text-[14px] text-[#45464d]">Try clearing your search query or switching tabs.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('all');
            }}
            className="px-4 py-2 bg-[#0d50d5] text-white text-[13px] font-semibold rounded-lg hover:bg-[#0b43b3] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'grid grid-cols-1 gap-4'
          }
        >
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Header Details */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#e6e8ea] text-[#191c1e] text-[11px] font-bold tracking-wider">
                      {course.code}
                    </span>
                    <span className="text-[11px] text-[#45464d] font-medium">{course.type}</span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                      course.status === 'on-track'
                        ? 'bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]'
                        : course.status === 'needs-attention'
                        ? 'bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A]'
                        : 'bg-[#FFF1F2] text-[#BE123C] border border-[#FECDD3]'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        course.status === 'on-track'
                          ? 'bg-[#047857]'
                          : course.status === 'needs-attention'
                          ? 'bg-[#B45309]'
                          : 'bg-[#BE123C]'
                      }`}
                    />
                    <span>
                      {course.status === 'on-track'
                        ? 'On Track'
                        : course.status === 'needs-attention'
                        ? 'Needs Attention'
                        : '72% Shortage Alert'}
                    </span>
                  </span>
                </div>

                <h3 className="text-[18px] font-bold text-[#191c1e] group-hover:text-[#0d50d5] transition-colors leading-snug">
                  {course.title}
                </h3>

                <div className="flex items-center gap-1.5 mt-1 text-[13px] text-[#45464d]">
                  <span className="material-symbols-outlined text-[16px] text-[#76777d]">person</span>
                  <span className="font-semibold text-[#191c1e]">{course.instructor}</span>
                  <span className="text-[#c6c6cd]">•</span>
                  <span>{course.credits} Credits</span>
                </div>

                <div className="text-[11px] text-[#45464d] mt-0.5 pl-5">
                  {course.department} • {course.building}, {course.room}
                </div>

                {/* Metrics Strip */}
                <div className="grid grid-cols-2 gap-2 my-4 bg-[#f2f4f6] p-3 rounded-lg">
                  <div>
                    <div className="text-[11px] text-[#45464d] font-medium">Attendance</div>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span
                        className={`text-[18px] font-bold ${
                          course.attendancePercentage >= 80
                            ? 'text-[#191c1e]'
                            : course.attendancePercentage >= 75
                            ? 'text-[#B45309]'
                            : 'text-[#BE123C]'
                        }`}
                      >
                        {course.attendancePercentage}%
                      </span>
                      <span className="text-[11px] text-[#45464d]">
                        ({course.attendedClasses}/{course.totalClasses})
                      </span>
                    </div>
                    <div className="w-full bg-[#e0e3e5] rounded-full h-1.5 mt-1.5 overflow-hidden">
                      <div
                        className={`h-1.5 rounded-full ${
                          course.attendancePercentage >= 80
                            ? 'bg-[#047857]'
                            : course.attendancePercentage >= 75
                            ? 'bg-[#B45309]'
                            : 'bg-[#BE123C]'
                        }`}
                        style={{ width: `${course.attendancePercentage}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] text-[#45464d] font-medium">Internal Assessment</div>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-[18px] font-bold text-[#191c1e]">{course.internalScore}</span>
                      <span className="text-[11px] text-[#45464d]">/ {course.maxInternalScore}</span>
                    </div>
                    <div className="text-[11px] text-[#0d50d5] mt-1 font-medium truncate">
                      {course.code === 'CSE201' ? 'Mid-1: 19/20 • Quiz: 19/20' : 'Assessed 38/40'}
                    </div>
                  </div>
                </div>

                {/* Session note */}
                {course.nextSession && (
                  <div className="flex items-center gap-2 text-[12px] text-[#45464d] mb-2">
                    <span className="material-symbols-outlined text-[16px] text-[#0d50d5]">schedule</span>
                    <span>
                      Next: <strong className="text-[#191c1e] font-semibold">{course.nextSession}</strong>
                    </span>
                  </div>
                )}
              </div>

              {/* Action Footer */}
              <div className="pt-3 border-t border-[#f1f5f9] flex items-center justify-between">
                <button
                  onClick={() => navigate(`/courses/${course.code.toLowerCase()}`)}
                  className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#0d50d5] hover:text-[#0b43b3] transition-colors cursor-pointer"
                >
                  <span>View Course & Syllabus</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>

                <div className="flex items-center gap-1">
                  <button
                    className="p-1.5 rounded text-[#76777d] hover:text-[#191c1e] hover:bg-[#f2f4f6] transition-colors"
                    title="Download Syllabus PDF"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
