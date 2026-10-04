import React from 'react';
import { mockGradeSemesters } from '../data/mock/grades';
import { mockStudent } from '../data/mock/student';

export const GradesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#e2e8f0]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight">Grades & SGPA Transcript</h1>
          <p className="text-[14px] text-[#45464d]">Official academic performance and cumulative grade point progression</p>
        </div>

        <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0f172a] text-white text-[13px] font-semibold rounded-lg hover:bg-[#1e293b] transition-colors shadow-sm cursor-pointer self-start sm:self-auto">
          <span className="material-symbols-outlined text-[18px]">download</span>
          <span>Download Official Transcript (PDF)</span>
        </button>
      </div>

      {/* TOP SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-sm flex flex-col justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#76777d]">Cumulative CGPA</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-[36px] font-bold text-[#191c1e] tabular-nums">{mockStudent.cgpa}</span>
            <span className="text-[14px] text-[#76777d]">/ 10.0</span>
          </div>
          <span className="text-[12px] font-semibold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded self-start mt-2 border border-[#A7F3D0]">
            Top 8% in CSE Cohort
          </span>
        </div>

        <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-sm flex flex-col justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#76777d]">Current Term SGPA</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-[36px] font-bold text-[#0d50d5] tabular-nums">{mockStudent.sgpa}</span>
            <span className="text-[12px] text-[#45464d]">Projected</span>
          </div>
          <span className="text-[12px] text-[#0d50d5] bg-[#dbe1ff] px-2 py-0.5 rounded self-start mt-2 font-semibold">
            +0.36 vs Sem 2
          </span>
        </div>

        <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-sm flex flex-col justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#76777d]">Total Completed Credits</span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-[36px] font-bold text-[#191c1e] tabular-nums">60</span>
            <span className="text-[14px] text-[#76777d]">/ 160 B.Tech</span>
          </div>
          <span className="text-[12px] text-[#45464d] font-semibold">Honors Eligibility: Maintained</span>
        </div>
      </div>

      {/* SGPA PROGRESSION BAR CHART */}
      <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-[#191c1e]">Semester GPA Progression</h2>
        <div className="space-y-4 pt-2">
          {mockGradeSemesters.map((sem, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[13px]">
                <span className="font-semibold text-[#191c1e]">{sem.semester}</span>
                <span className="font-bold text-[#0d50d5]">{sem.sgpa} SGPA</span>
              </div>
              <div className="w-full bg-[#e6e8ea] h-3 rounded-full overflow-hidden">
                <div
                  className={`h-3 rounded-full transition-all duration-500 ${
                    i === 2 ? 'bg-[#0d50d5]' : 'bg-[#76777d]'
                  }`}
                  style={{ width: `${(sem.sgpa / 10) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEMESTER-BY-SEMESTER TABLES */}
      <div className="flex flex-col gap-6">
        {mockGradeSemesters.map((sem, sIdx) => (
          <div key={sIdx} className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9]">
              <div>
                <h3 className="text-[18px] font-bold text-[#191c1e]">{sem.semester}</h3>
                <span className="text-[12px] text-[#45464d]">{sem.status}</span>
              </div>
              <span className="px-3 py-1 rounded bg-[#f2f4f6] text-[#191c1e] font-bold text-[14px]">
                SGPA: {sem.sgpa}
              </span>
            </div>

            <table className="w-full text-left text-[13px]">
              <thead>
                <tr className="bg-[#f8fafc] text-[#76777d] uppercase text-[11px] font-semibold border-b border-[#e2e8f0]">
                  <th className="p-3">Course Code</th>
                  <th className="p-3">Course Title</th>
                  <th className="p-3">Credits</th>
                  <th className="p-3">Letter Grade</th>
                  <th className="p-3">Grade Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {sem.courses.map((c, cIdx) => (
                  <tr key={cIdx} className="hover:bg-[#f8fafc]">
                    <td className="p-3 font-bold text-[#0d50d5]">{c.code}</td>
                    <td className="p-3 font-medium text-[#191c1e]">{c.title}</td>
                    <td className="p-3 text-[#45464d]">{c.credits}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-[#f2f4f6] text-[#191c1e] font-bold text-[12px]">
                        {c.grade}
                      </span>
                    </td>
                    <td className="p-3 font-bold text-[#191c1e]">{c.gradePoints}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};
