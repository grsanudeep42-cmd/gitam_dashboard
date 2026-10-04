import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverable = false }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-[#e2e8f0] p-4 shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] ${
        hoverable ? 'hover:shadow-[0_4px_6px_-1px_rgba(15,23,42,0.06)] transition-shadow cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
