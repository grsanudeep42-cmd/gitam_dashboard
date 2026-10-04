import React, { useState } from 'react';
import { mockAssignments } from '../data/mock/assignments';

export const AssignmentsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'due' | 'completed'>('all');
  const [submitModalAssignment, setSubmitModalAssignment] = useState<string | null>(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const filteredAssignments = mockAssignments.filter((a) => {
    if (filter === 'due') return a.status !== 'completed';
    if (filter === 'completed') return a.status === 'completed';
    return true;
  });

  const activeSubmitAsg = mockAssignments.find((a) => a.id === submitModalAssignment);

  const handleSubmitSolution = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setSubmitModalAssignment(null);
      setFileUploaded(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#e2e8f0]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight">Academic Assignments & Tasks</h1>
          <p className="text-[14px] text-[#45464d]">Track upcoming deadlines, submit lab solutions, and view graded coursework</p>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-[#131b2e] text-white shadow-sm'
              : 'bg-white text-[#45464d] border border-[#e2e8f0]'
          }`}
        >
          All Tasks ({mockAssignments.length})
        </button>
        <button
          onClick={() => setFilter('due')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all cursor-pointer ${
            filter === 'due'
              ? 'bg-[#131b2e] text-white shadow-sm'
              : 'bg-white text-[#45464d] border border-[#e2e8f0]'
          }`}
        >
          Due Soon / Active (4)
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-all cursor-pointer ${
            filter === 'completed'
              ? 'bg-[#131b2e] text-white shadow-sm'
              : 'bg-white text-[#45464d] border border-[#e2e8f0]'
          }`}
        >
          Completed (1)
        </button>
      </div>

      {/* ASSIGNMENT CARDS LIST */}
      <div className="flex flex-col gap-4">
        {filteredAssignments.map((asg) => (
          <div
            key={asg.id}
            className="bg-white rounded-xl border border-[#e2e8f0] p-5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-xl shrink-0 mt-0.5 ${
                  asg.priority === 'high'
                    ? 'bg-[#FFF1F2] text-[#BE123C]'
                    : asg.priority === 'medium'
                    ? 'bg-[#FFFBEB] text-[#B45309]'
                    : 'bg-[#ECFDF5] text-[#047857]'
                }`}
              >
                <span className="material-symbols-outlined text-[24px]">
                  {asg.priority === 'high' ? 'priority_high' : 'assignment'}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[16px] font-bold text-[#191c1e]">{asg.title}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      asg.status === 'due_tomorrow'
                        ? 'bg-[#FFF1F2] text-[#BE123C]'
                        : asg.status === 'completed'
                        ? 'bg-[#ECFDF5] text-[#047857]'
                        : 'bg-[#dbe1ff] text-[#00174d]'
                    }`}
                  >
                    {asg.statusLabel}
                  </span>
                </div>

                <p className="text-[13px] text-[#45464d]">{asg.description}</p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-[12px] text-[#76777d]">
                  <span className="font-bold text-[#0d50d5]">{asg.courseCode}</span>
                  <span>•</span>
                  <span>Due Date: <strong className="text-[#191c1e]">{asg.dueDate} at {asg.dueTime}</strong></span>
                  <span>•</span>
                  <span>Max Marks: {asg.maxMarks}</span>
                  <span>•</span>
                  <span>Submission: {asg.submissionType}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
              {asg.status !== 'completed' ? (
                <button
                  onClick={() => setSubmitModalAssignment(asg.id)}
                  className="px-4 py-2 bg-[#0f172a] text-white hover:bg-[#1e293b] text-[13px] font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">upload_file</span>
                  <span>{asg.status === 'draft_saved' ? 'Resume & Submit' : 'Upload Solution'}</span>
                </button>
              ) : (
                <span className="px-3 py-1.5 rounded-lg bg-[#ECFDF5] text-[#047857] text-[12px] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  Submitted & Graded
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* UPLOAD MODAL */}
      {submitModalAssignment && activeSubmitAsg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-xs transition-opacity"
            onClick={() => setSubmitModalAssignment(null)}
          />

          <div className="relative bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl z-10 border border-[#e2e8f0] flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3">
              <div>
                <h3 className="text-[18px] font-bold text-[#191c1e]">Submit Assignment</h3>
                <p className="text-[12px] text-[#0d50d5] font-semibold">{activeSubmitAsg.courseCode}: {activeSubmitAsg.title}</p>
              </div>
              <button
                onClick={() => setSubmitModalAssignment(null)}
                className="text-[#76777d] hover:text-[#191c1e] p-1 rounded-lg"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {successMsg ? (
              <div className="p-6 bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] rounded-xl text-center flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
                <span className="font-bold text-[16px]">Assignment Submitted Successfully!</span>
                <span className="text-[13px]">Your file has been timestamped and transmitted to the instructor portal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitSolution} className="flex flex-col gap-4">
                <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0] text-[12px] text-[#45464d] flex flex-col gap-1">
                  <span>Required Format: <strong>{activeSubmitAsg.submissionType}</strong></span>
                  <span>Due Deadline: <strong>{activeSubmitAsg.dueDate}, {activeSubmitAsg.dueTime}</strong></span>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-semibold text-[#191c1e]">Select Solution File</label>
                  <input
                    type="file"
                    required
                    onChange={() => setFileUploaded(true)}
                    className="text-[12px] text-[#45464d] file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-[12px] file:font-semibold file:bg-[#0d50d5] file:text-white hover:file:bg-[#0b43b3]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#f1f5f9]">
                  <button
                    type="button"
                    onClick={() => setSubmitModalAssignment(null)}
                    className="px-4 py-2 rounded-lg text-[13px] font-semibold text-[#45464d] hover:bg-[#f2f4f6]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!fileUploaded}
                    className="px-4 py-2 rounded-lg text-[13px] font-semibold bg-[#0f172a] text-white hover:bg-[#1e293b] disabled:opacity-50"
                  >
                    Submit Assignment
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
