import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-1.5 font-semibold transition-colors rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-[12px] leading-[16px]',
    md: 'px-3.5 py-2 text-[14px] leading-[20px]',
    lg: 'px-4 py-2.5 text-[15px] leading-[22px]',
  };

  const variantClasses = {
    primary: 'bg-[#0f172a] text-white hover:bg-[#1e293b]',
    secondary: 'bg-[#0d50d5] text-white hover:bg-[#0b43b3]',
    outline: 'bg-white text-[#0f172a] border border-[#e2e8f0] hover:bg-[#f8fafc]',
    ghost: 'bg-transparent text-[#475569] hover:bg-[#f1f5f9] hover:text-[#0f172a] shadow-none',
    danger: 'bg-[#be123c] text-white hover:bg-[#9f0f32]',
  };

  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>
      {icon && <span className="material-symbols-outlined text-[18px]">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
