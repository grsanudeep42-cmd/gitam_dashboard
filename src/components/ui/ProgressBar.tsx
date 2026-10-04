import React from 'react';

export interface ProgressBarProps {
  percentage: number;
  variant?: 'safe' | 'warning' | 'critical' | 'secondary' | 'auto';
  height?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  variant = 'auto',
  height = 'sm',
  className = '',
}) => {
  const clampPercentage = Math.min(100, Math.max(0, percentage));

  let colorClass = 'bg-[#0d50d5]';
  if (variant === 'safe') colorClass = 'bg-[#047857]';
  else if (variant === 'warning') colorClass = 'bg-[#b45309]';
  else if (variant === 'critical') colorClass = 'bg-[#be123c]';
  else if (variant === 'secondary') colorClass = 'bg-[#0d50d5]';
  else if (variant === 'auto') {
    if (clampPercentage >= 80) colorClass = 'bg-[#047857]';
    else if (clampPercentage >= 75) colorClass = 'bg-[#b45309]';
    else colorClass = 'bg-[#be123c]';
  }

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-2.5',
  };

  return (
    <div className={`w-full bg-[#e6e8ea] rounded-full overflow-hidden ${heightClasses[height]} ${className}`}>
      <div
        className={`${colorClass} ${heightClasses[height]} rounded-full transition-all duration-500`}
        style={{ width: `${clampPercentage}%` }}
      />
    </div>
  );
};
