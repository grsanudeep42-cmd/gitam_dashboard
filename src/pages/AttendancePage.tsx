import React, { useState } from 'react';
import { mockAttendanceRecords } from '../data/mock/attendance';

export const AttendancePage: React.FC = () => {
  const [medicalModalOpen, setMedicalModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(mockAttendanceRecords[0].courseId);
  const [medicalReason, setMedicalReason] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const activeRecord = mockAttendanceRecords.find((r) => r.courseId === selectedCourseId) || mockAttendanceRecords[0];

  const handleSubmitMedical = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setMedicalModalOpen(false);
      setMedicalReason('');
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#e2e8f0]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight">Attendance Telemetry</h1>
          <p className="text-[14px] text-[#45464d]">Official university attendance records & shortage monitoring</p>
        </div>

        <button
          onClick={() => setMedicalModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0d50d5] text-white text-[13px] font-semibold rounded-lg hover:bg-[#0b43b3] transition-colors shadow-sm cursor-pointer self-start sm:self-auto"
        >
          <span className="material-symbols-outlined text-[18px]">medical_services</span>
          <span>Submit Medical Certificate</span>
        </button>
      </div>

      {/* OVERALL ATTENDANCE SUMMARY CARD */}
      <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="w-20 h-20 rounded-full border-4 border-[#047857] bg-[#ECFDF5] flex flex-col items-center justify-center shrink-0">
            <span className="text-[22px] font-bold text-[#047857]">86.4%</span>
            <span className="text-[9px] uppercase font-bold text-[#047857]">Overall</span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[18px] font-bold text-[#191c1e]">Academic Attendance Clearance</span>
              <span className="px-2 py-0.5 rounded bg-[#ECFDF5] text-[#047857] text-[11px] font-bold">
                Clear for Exams
              </span>
            </div>
            <p className="text-[13px] text-[#45464d]">
              Minimum requirement is <strong>75.0%</strong> per course to be eligible for hall ticket issuance.
            </p>
          </div>
        </div>

        {/* Safe Buffer Box */}
        <div className="w-full md:w-80 p-4 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] flex flex-col gap-1">
          <div className="flex items-center gap-1.5 font-bold text-[13px]">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <span>Safe Buffer Available</span>
          </div>
          <p className="text-[12px] leading-relaxed">
            You can miss up to <strong>4 more lectures</strong> across subjects without dropping below the 75% attendance threshold.
          </p>
        </div>
      </div>

      {/* SUBJECT-LEVEL BREAKDOWN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockAttendanceRecords.map((record) => (
          <div
            key={record.courseCode}
            onClick={() => setSelectedCourseId(record.courseId)}
            className={`bg-white rounded-xl border p-5 shadow-sm flex flex-col justify-between transition-all cursor-pointer ${
              selectedCourseId === record.courseId
                ? 'border-[#0d50d5] ring-2 ring-[#0d50d5]/20'
                : 'border-[#e2e8f0] hover:border-[#0d50d5]/40'
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="px-2 py-0.5 rounded bg-[#e6e8ea] text-[#191c1e] text-[11px] font-bold">
                  {record.courseCode}
                </span>

                <span
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    record.warningLevel === 'safe'
                      ? 'bg-[#ECFDF5] text-[#047857]'
                      : record.warningLevel === 'caution'
                      ? 'bg-[#FFFBEB] text-[#B45309]'
                      : 'bg-[#FFF1F2] text-[#BE123C]'
                  }`}
                >
                  {record.attendancePercentage}% ({record.attended}/{record.total})
                </span>
              </div>

              <h3 className="text-[16px] font-bold text-[#191c1e]">{record.courseTitle}</h3>

              <div className="mt-4 flex flex-col gap-1.5">
                <div className="w-full bg-[#e6e8ea] h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-2 rounded-full ${
                      record.warningLevel === 'safe'
                        ? 'bg-[#047857]'
                        : record.warningLevel === 'caution'
                        ? 'bg-[#B45309]'
                        : 'bg-[#BE123C]'
                    }`}
                    style={{ width: `${record.attendancePercentage}%` }}
                  />
                </div>
                <span className="text-[11px] text-[#45464d] font-medium">{record.statusNote}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#f1f5f9] flex items-center justify-between text-[11px] text-[#0d50d5] font-semibold">
              <span>Click to view lecture log</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </div>
          </div>
        ))}
      </div>

      {/* SELECTED COURSE LOG TABLE */}
      <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9]">
          <div>
            <h2 className="text-[18px] font-bold text-[#191c1e]">
              Lecture Attendance Log: {activeRecord.courseTitle} ({activeRecord.courseCode})
            </h2>
            <p className="text-[13px] text-[#45464d]">
              Showing individual class attendance status recorded by department faculty
            </p>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-[12px] font-bold ${
              activeRecord.warningLevel === 'safe'
                ? 'bg-[#ECFDF5] text-[#047857]'
                : activeRecord.warningLevel === 'caution'
                ? 'bg-[#FFFBEB] text-[#B45309]'
                : 'bg-[#FFF1F2] text-[#BE123C]'
            }`}
          >
            {activeRecord.attendancePercentage}% Aggregate
          </span>
        </div>

        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-[#f8fafc] text-[#76777d] uppercase text-[11px] font-semibold border-b border-[#e2e8f0]">
              <th className="p-3">Date</th>
              <th className="p-3">Topic Taught</th>
              <th className="p-3">Attendance Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f5f9]">
            {activeRecord.history.map((log, i) => (
              <tr key={i} className="hover:bg-[#f8fafc]">
                <td className="p-3 font-semibold text-[#191c1e]">{log.date}</td>
                <td className="p-3 text-[#45464d]">{log.topic}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      log.status === 'Present'
                        ? 'bg-[#ECFDF5] text-[#047857]'
                        : log.status === 'Absent'
                        ? 'bg-[#FFF1F2] text-[#BE123C]'
                        : 'bg-[#FFFBEB] text-[#B45309]'
                    }`}
                  >
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MEDICAL LEAVE MODAL */}
      {medicalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMedicalModalOpen(false)}
          />

          <div className="relative bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl z-10 border border-[#e2e8f0] flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3">
              <h3 className="text-[18px] font-bold text-[#191c1e] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0d50d5]">medical_services</span>
                Request Medical Leave Clearance
              </h3>
              <button
                onClick={() => setMedicalModalOpen(false)}
                className="text-[#76777d] hover:text-[#191c1e] p-1 rounded-lg"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {submittedMessage ? (
              <div className="p-6 bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] rounded-xl text-center flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
                <span className="font-bold text-[16px]">Medical Certificate Submitted!</span>
                <span className="text-[13px]">Your request has been routed to the CSE Department Head for approval.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitMedical} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-[#191c1e]">Select Course</label>
                  <select
                    value={selectedCourseId}
                    onChange={(e) => setSelectedCourseId(e.target.value)}
                    className="p-2.5 rounded-lg border border-[#e2e8f0] text-[13px] bg-white"
                  >
                    {mockAttendanceRecords.map((r) => (
                      <option key={r.courseId} value={r.courseId}>
                        {r.courseCode} - {r.courseTitle} ({r.attendancePercentage}%)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-[#191c1e]">Reason for Absence</label>
                  <textarea
                    required
                    value={medicalReason}
                    onChange={(e) => setMedicalReason(e.target.value)}
                    rows={3}
                    placeholder="Enter medical illness details and doctor recommendation..."
                    className="p-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#0d50d5]/20"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-[#191c1e]">Upload Medical Certificate (PDF/JPG)</label>
                  <input
                    type="file"
                    className="text-[12px] text-[#45464d] file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[12px] file:font-semibold file:bg-[#f2f4f6] file:text-[#191c1e] hover:file:bg-[#e6e8ea]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#f1f5f9]">
                  <button
                    type="button"
                    onClick={() => setMedicalModalOpen(false)}
                    className="px-4 py-2 rounded-lg text-[13px] font-semibold text-[#45464d] hover:bg-[#f2f4f6]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg text-[13px] font-semibold bg-[#0d50d5] text-white hover:bg-[#0b43b3]"
                  >
                    Submit for Clearance
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
