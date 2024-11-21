import React from 'react';
import { BaseCardProps } from '@/types/card';
import { cn } from '@/lib/utils';

export const BaseCard: React.FC<BaseCardProps> = ({
  children,
  variant = 'default',
  className,
  onClick,
}) => {
  const baseStyles = "bg-white rounded-xl shadow-lg transition-all";
  const variantStyles = {
    default: "border border-gray-100 hover:shadow-xl",
    dashed: "border-2 border-dashed border-gray-200 hover:border-blue-400",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        baseStyles,
        variantStyles[variant],
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};
