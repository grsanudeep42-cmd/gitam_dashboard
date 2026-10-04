import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'safe' | 'warning' | 'critical' | 'secondary' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  icon?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className = '',
  icon,
}) => {
  const baseClasses = 'inline-flex items-center gap-1 font-semibold uppercase tracking-wider rounded';

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[11px] leading-[14px]',
    md: 'px-2.5 py-1 text-[12px] leading-[16px]',
  };

  const variantClasses = {
    safe: 'bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]',
    warning: 'bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A]',
    critical: 'bg-[#FFF1F2] text-[#BE123C] border border-[#FECDD3]',
    secondary: 'bg-[#dbe1ff] text-[#00174d]',
    neutral: 'bg-[#f2f4f6] text-[#45464d]',
    outline: 'border border-[#c6c6cd] text-[#45464d] bg-transparent',
  };

  return (
    <span className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {icon && <span className="material-symbols-outlined text-[13px]">{icon}</span>}
      {children}
    </span>
  );
};
