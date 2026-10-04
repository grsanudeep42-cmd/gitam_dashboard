import React from 'react';
import { mockStudent } from '../data/mock/student';

export const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-6 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img
            src={mockStudent.avatarUrl}
            alt="Student Avatar"
            className="w-24 h-24 rounded-full object-cover ring-4 ring-[#0d50d5]/20 border border-[#e2e8f0]"
          />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-[#191c1e]">{mockStudent.name}</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857] text-[11px] font-bold">
                Enrolled Student
              </span>
            </div>
            <p className="text-[14px] text-[#45464d]">{mockStudent.program} • {mockStudent.semester}rd Semester (Sec {mockStudent.section})</p>
            <p className="text-[12px] text-[#76777d]">Registration Roll ID: {mockStudent.rollNumber} • {mockStudent.campus}</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1 border-t md:border-t-0 md:border-l border-[#e2e8f0] pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
          <span className="text-[11px] uppercase tracking-wider text-[#76777d] font-semibold">Cumulative CGPA</span>
          <span className="text-[32px] font-bold text-[#0d50d5] tabular-nums">{mockStudent.cgpa} / 10.0</span>
          <span className="text-[12px] text-[#047857] font-semibold">{mockStudent.academicStanding}</span>
        </div>
      </div>

      {/* DETAILS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal & Registration Details */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col gap-4">
          <h2 className="text-[18px] font-bold text-[#191c1e] border-b border-[#f1f5f9] pb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0d50d5]">person</span>
            Personal & Academic Identification
          </h2>

          <div className="space-y-3 text-[13px]">
            <div className="flex items-center justify-between p-2.5 rounded bg-[#f8fafc]">
              <span className="text-[#76777d] font-medium">Full Name</span>
              <span className="font-semibold text-[#191c1e]">{mockStudent.name}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded bg-[#f8fafc]">
              <span className="text-[#76777d] font-medium">Registration Number</span>
              <span className="font-bold text-[#0d50d5]">{mockStudent.rollNumber}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded bg-[#f8fafc]">
              <span className="text-[#76777d] font-medium">GITAM Email</span>
              <span className="font-semibold text-[#191c1e]">{mockStudent.email}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded bg-[#f8fafc]">
              <span className="text-[#76777d] font-medium">Department</span>
              <span className="font-semibold text-[#191c1e]">{mockStudent.department}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded bg-[#f8fafc]">
              <span className="text-[#76777d] font-medium">School / Institute</span>
              <span className="font-semibold text-[#191c1e]">{mockStudent.school}</span>
            </div>
          </div>
        </div>

        {/* Campus NFC Smart Card & Access Credentials */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col gap-4">
          <h2 className="text-[18px] font-bold text-[#191c1e] border-b border-[#f1f5f9] pb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0d50d5]">contactless</span>
            Campus Smart Card & Access
          </h2>

          <div className="bg-gradient-to-r from-[#131b2e] to-[#1e293b] text-white p-5 rounded-xl flex flex-col justify-between h-44 shadow-md relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="font-bold tracking-wider text-[14px]">GITAM UNIVERSITY SMART CARD</span>
              <span className="material-symbols-outlined text-[24px]">nfc</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-[#bec6e0] font-mono">{mockStudent.nfcCard.cardNumber}</span>
              <span className="text-[18px] font-bold tracking-wide mt-1">{mockStudent.name}</span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-[#bec6e0]">
              <span>Valid Thru: {mockStudent.nfcCard.validUntil}</span>
              <span className="px-2 py-0.5 rounded bg-[#047857] text-white font-bold">{mockStudent.nfcCard.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
