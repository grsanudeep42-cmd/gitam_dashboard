import React, { useState } from 'react';
import { mockExams } from '../data/mock/exams';
import { mockStudent } from '../data/mock/student';

export const ExamsPage: React.FC = () => {
  const [hallTicketModalOpen, setHallTicketModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#e2e8f0]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight">Examination Schedule</h1>
          <p className="text-[14px] text-[#45464d]">Mid-Semester & End-Semester official examination timetable</p>
        </div>

        <button
          onClick={() => setHallTicketModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0d50d5] text-white text-[13px] font-semibold rounded-lg hover:bg-[#0b43b3] transition-colors shadow-sm cursor-pointer self-start sm:self-auto"
        >
          <span className="material-symbols-outlined text-[18px]">badge</span>
          <span>Download Digital Hall Ticket</span>
        </button>
      </div>

      {/* PROMINENT EXAM ALERT BANNER */}
      <div className="bg-[#131b2e] text-white rounded-xl p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex flex-col gap-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#dbe1ff] text-[#00174d] text-[11px] font-bold uppercase tracking-wider">
              Autumn 2024 Mid-Sem Exams
            </span>
            <span className="text-[12px] text-[#bec6e0]">Commences Saturday, Oct 12, 2024</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">First Exam: Data Structures & Algorithms (CSE201)</h2>
          <p className="text-[13px] text-[#bec6e0]">
            Venue: Exam Hall 4, Main Academic Block • Reporting Time: 09:00 AM sharp
          </p>
        </div>

        <button
          onClick={() => setHallTicketModalOpen(true)}
          className="px-5 py-2.5 bg-white text-[#131b2e] hover:bg-[#f2f4f6] text-[13px] font-bold rounded-lg transition-colors cursor-pointer shrink-0 shadow"
        >
          View Hall Ticket
        </button>
      </div>

      {/* EXAM CARDS LIST */}
      <div className="flex flex-col gap-4">
        {mockExams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#dbe1ff] text-[#00174d] shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[16px] font-bold text-[#191c1e]">{exam.title}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      exam.hallTicketStatus === 'Available'
                        ? 'bg-[#ECFDF5] text-[#047857]'
                        : 'bg-[#FFFBEB] text-[#B45309]'
                    }`}
                  >
                    Hall Ticket: {exam.hallTicketStatus}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[#45464d]">
                  <span className="font-semibold text-[#0d50d5]">{exam.courseCode}</span>
                  <span>•</span>
                  <span>Date: <strong className="text-[#191c1e]">{exam.date}</strong></span>
                  <span>•</span>
                  <span>Time: <strong>{exam.time}</strong> ({exam.duration})</span>
                </div>

                <div className="text-[12px] text-[#76777d] mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">location_on</span>
                  <span>{exam.venue}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
              <button
                onClick={() => setHallTicketModalOpen(true)}
                className="px-4 py-2 bg-white border border-[#e2e8f0] hover:bg-[#f8fafc] text-[#191c1e] text-[13px] font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                <span>Exam Seat & Slip</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* DIGITAL HALL TICKET PREVIEW MODAL */}
      {hallTicketModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-xs transition-opacity"
            onClick={() => setHallTicketModalOpen(false)}
          />

          <div className="relative bg-white rounded-xl max-w-xl w-full p-6 shadow-2xl z-10 border border-[#e2e8f0] flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3">
              <div>
                <h3 className="text-[18px] font-bold text-[#191c1e]">Digital Hall Ticket</h3>
                <p className="text-[12px] text-[#0d50d5] font-semibold">Mid-Semester Examinations Autumn 2024</p>
              </div>
              <button
                onClick={() => setHallTicketModalOpen(false)}
                className="text-[#76777d] hover:text-[#191c1e] p-1 rounded-lg"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="p-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-[#191c1e]">{mockStudent.name}</span>
                <span className="text-[12px] text-[#45464d]">Roll: {mockStudent.rollNumber} • {mockStudent.program}</span>
                <span className="text-[11px] text-[#047857] font-semibold mt-1">✓ Verified Attendance clearance (86.4%)</span>
              </div>
              <img
                src={mockStudent.avatarUrl}
                alt="Student Headshot"
                className="w-16 h-16 rounded-lg object-cover ring-2 ring-white border"
              />
            </div>

            <div className="space-y-2">
              <span className="text-[12px] font-semibold text-[#191c1e]">Important Guidelines:</span>
              <ul className="text-[12px] text-[#45464d] space-y-1 list-disc pl-4">
                <li>Students must carry a printed copy of this hall ticket along with GITAM Smart Card.</li>
                <li>No electronic devices or mobile phones permitted inside the examination hall.</li>
                <li>Hall ticket issued subject to final attendance clearance of 75%.</li>
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#f1f5f9]">
              <button
                type="button"
                onClick={() => setHallTicketModalOpen(false)}
                className="px-4 py-2 rounded-lg text-[13px] font-semibold text-[#45464d] hover:bg-[#f2f4f6]"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  alert('Hall Ticket PDF downloaded to your device!');
                  setHallTicketModalOpen(false);
                }}
                className="px-4 py-2 rounded-lg text-[13px] font-semibold bg-[#0d50d5] text-white hover:bg-[#0b43b3] flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                Download PDF Hall Ticket
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
