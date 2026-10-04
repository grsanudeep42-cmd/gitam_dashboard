import React, { useState } from 'react';

export const SettingsPage: React.FC = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsExamAlerts, setSmsExamAlerts] = useState(true);
  const [attendanceWarnings, setAttendanceWarnings] = useState(true);
  const [showLeaderboard, setShowLeaderboard] = useState(true);
  const [savedMsg, setSavedMsg] = useState(false);

  const handleSave = () => {
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2500);
  };

  return (
    <div className="flex flex-col w-full gap-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#e2e8f0]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#191c1e] tracking-tight">Portal Settings</h1>
          <p className="text-[14px] text-[#45464d]">Configure system preferences, notification alerts, and security options</p>
        </div>

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-[#0f172a] text-white text-[13px] font-semibold rounded-lg hover:bg-[#1e293b] transition-colors shadow-sm cursor-pointer self-start sm:self-auto"
        >
          Save Changes
        </button>
      </div>

      {savedMsg && (
        <div className="p-4 bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] text-[13px] font-semibold rounded-xl flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
          <span>Your portal preferences have been saved successfully!</span>
        </div>
      )}

      {/* NOTIFICATION PREFERENCES */}
      <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-[#191c1e] border-b border-[#f1f5f9] pb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#0d50d5]">notifications</span>
          Notification & Alert Settings
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-[#191c1e]">Attendance Shortage Alerts</span>
              <span className="text-[12px] text-[#45464d]">Receive immediate warning when attendance drops below 78%</span>
            </div>
            <input
              type="checkbox"
              checked={attendanceWarnings}
              onChange={(e) => setAttendanceWarnings(e.target.checked)}
              className="w-5 h-5 accent-[#0d50d5] cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-[#191c1e]">SMS Hall Ticket Broadcasts</span>
              <span className="text-[12px] text-[#45464d]">Receive SMS alerts when digital hall tickets are released</span>
            </div>
            <input
              type="checkbox"
              checked={smsExamAlerts}
              onChange={(e) => setSmsExamAlerts(e.target.checked)}
              className="w-5 h-5 accent-[#0d50d5] cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-[#191c1e]">Email Assignment Digest</span>
              <span className="text-[12px] text-[#45464d]">Daily summary of pending lab submissions</span>
            </div>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={(e) => setEmailAlerts(e.target.checked)}
              className="w-5 h-5 accent-[#0d50d5] cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* PRIVACY & DISPLAY */}
      <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col gap-4">
        <h2 className="text-[18px] font-bold text-[#191c1e] border-b border-[#f1f5f9] pb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#0d50d5]">visibility</span>
          Privacy & Academic Visibility
        </h2>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-[#191c1e]">Academic Leaderboard Anonymity</span>
            <span className="text-[12px] text-[#45464d]">Display roll number instead of full name on department rank lists</span>
          </div>
          <input
            type="checkbox"
            checked={showLeaderboard}
            onChange={(e) => setShowLeaderboard(e.target.checked)}
            className="w-5 h-5 accent-[#0d50d5] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
